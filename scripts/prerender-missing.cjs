/**
 * One-off: prerender only the routes listed in missing-routes.txt
 * (one per line). Reuses the same logic as prerender.cjs but skips the
 * full sitemap walk so iteration is fast.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const http = require('http');
const url = require('url');

const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const SITE_ORIGIN = 'https://typogrammar.com';
const PORT = 5175;

function log(m) { process.stdout.write(`[prerender-missing] ${m}\n`); }

const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.webp': 'image/webp',
  '.ico': 'image/x-icon', '.woff': 'font/woff', '.woff2': 'font/woff2',
  '.ttf': 'font/ttf', '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8', '.pdf': 'application/pdf',
  '.mp3': 'audio/mpeg', '.mp4': 'video/mp4'
};

function startStaticServer() {
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      try {
        const parsed = url.parse(req.url);
        let pathname = decodeURIComponent(parsed.pathname || '/');
        let filePath = path.join(DIST, pathname);
        if (filePath.endsWith(path.sep) || filePath.endsWith('/')) {
          filePath = path.join(filePath, 'index.html');
        }
        if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
          const idx = path.join(filePath, 'index.html');
          if (fs.existsSync(idx)) filePath = idx;
          else filePath = path.join(DIST, '_spa-shell.html');
        }
        const ext = path.extname(filePath).toLowerCase();
        const data = fs.readFileSync(filePath);
        res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
        res.end(data);
      } catch (e) {
        res.writeHead(500); res.end('err');
      }
    });
    server.listen(PORT, '127.0.0.1', () => resolve(server));
    server.on('error', reject);
  });
}

function targetFileFor(routePath) {
  if (routePath === '/' || routePath === '') return path.join(DIST, 'index.html');
  return path.join(DIST, routePath.replace(/^\/+/, ''), 'index.html');
}

function ensureDir(file) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
}

function postProcess(html, routePath) {
  const absoluteUrl = SITE_ORIGIN + (routePath === '/' ? '/' : routePath);
  html = html.replace(new RegExp(`http://127\\.0\\.0\\.1:${PORT}`, 'g'), SITE_ORIGIN);
  html = html.replace(new RegExp(`http://localhost:${PORT}`, 'g'), SITE_ORIGIN);
  if (/<link[^>]+rel=["']canonical["'][^>]*>/i.test(html)) {
    html = html.replace(
      /<link([^>]*?)rel=["']canonical["']([^>]*?)>/i,
      `<link rel="canonical" href="${absoluteUrl}">`
    );
  } else {
    html = html.replace(/<\/head>/i, `  <link rel="canonical" href="${absoluteUrl}">\n</head>`);
  }
  if (/<meta[^>]+property=["']og:url["'][^>]*>/i.test(html)) {
    html = html.replace(
      /<meta([^>]*?)property=["']og:url["']([^>]*?)>/i,
      `<meta property="og:url" content="${absoluteUrl}">`
    );
  }
  // Normalize internal anchor hrefs to trailing-slash form (matches sitemap
  // and prevents "Page with redirect" GSC warnings caused by 301 from /foo
  // → /foo/).
  html = html.replace(/href=(["'])(\/[^"'\s>]*)\1/g, (match, quote, raw) => {
    if (raw.startsWith('//')) return match;
    const splitIdx = raw.search(/[?#]/);
    const pathPart = splitIdx === -1 ? raw : raw.slice(0, splitIdx);
    const tail = splitIdx === -1 ? '' : raw.slice(splitIdx);
    if (pathPart === '/' || pathPart.endsWith('/')) return match;
    const lastSeg = pathPart.split('/').pop() || '';
    if (lastSeg.includes('.')) return match;
    return `href=${quote}${pathPart}/${tail}${quote}`;
  });

  // Normalize JSON-LD `@id`/`url`/`mainEntityOfPage` URLs and hreflang
  // alternates so all canonical signals agree with <link rel="canonical">.
  // Mirrors logic in scripts/prerender.cjs.
  html = html.replace(
    /(<script[^>]*type=["']application\/ld\+json["'][^>]*>)([\s\S]*?)(<\/script>)/gi,
    (full, openTag, body, closeTag) => {
      const trimmed = body.trim();
      if (!trimmed) return full;
      try {
        const parsed = JSON.parse(trimmed);
        return `${openTag}${JSON.stringify(__normalizeUrls(parsed))}${closeTag}`;
      } catch {
        const patched = body.replace(
          /("(?:@id|url|mainEntityOfPage)"\s*:\s*")(https:\/\/typogrammar\.com\/[^"]+)(")/g,
          (_m, pre, u, post) => pre + __normalizeOneUrl(u) + post
        );
        return `${openTag}${patched}${closeTag}`;
      }
    }
  );
  html = html.replace(
    /(<link[^>]*rel=["']alternate["'][^>]*hreflang=["'][^"']+["'][^>]*href=["'])([^"']+)(["'][^>]*>)/gi,
    (_m, pre, u, post) => pre + __normalizeOneUrl(u) + post
  );

  html = html.replace(/<head([^>]*)>/i, `<head$1>\n    <!-- prerendered: ${absoluteUrl} -->`);
  return html;
}

function __normalizeOneUrl(value) {
  if (typeof value !== 'string') return value;
  if (!value.startsWith('https://typogrammar.com')) return value;
  try {
    const u = new URL(value);
    if (u.pathname === '/' || u.pathname.endsWith('/')) return value;
    const lastSeg = u.pathname.split('/').pop() || '';
    if (lastSeg.includes('.')) return value;
    u.pathname = u.pathname + '/';
    return u.toString();
  } catch {
    return value;
  }
}

function __normalizeUrls(input) {
  if (typeof input === 'string') return __normalizeOneUrl(input);
  if (Array.isArray(input)) return input.map(__normalizeUrls);
  if (input && typeof input === 'object') {
    const out = {};
    for (const k of Object.keys(input)) out[k] = __normalizeUrls(input[k]);
    return out;
  }
  return input;
}

async function main() {
  const listFile = path.join(ROOT, 'missing-routes.txt');
  if (!fs.existsSync(listFile)) {
    console.error('missing-routes.txt not found'); process.exit(1);
  }
  const routes = fs.readFileSync(listFile, 'utf8')
    .split(/\r?\n/).map((s) => s.trim()).filter(Boolean);
  log(`Will prerender ${routes.length} missing routes`);

  const puppeteer = require('puppeteer');
  const server = await startStaticServer();
  log(`Static server on http://127.0.0.1:${PORT}`);

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const errors = [];
  let done = 0;
  const concurrency = 3;
  const queue = routes.map((r) => ({ route: r, attempt: 1 }));

  async function worker() {
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (compatible; TypoGrammarPrerender/1.0)');
    await page.setRequestInterception(true);
    page.on('request', (req) => {
      const u = req.url();
      if (/googletagmanager|google-analytics|googlesyndication|googleadservices|doubleclick|adsbygoogle|facebook\.net|jotfor\.ms|youtube\.com|gstatic\.com\/recaptcha/.test(u)) {
        return req.abort();
      }
      return req.continue();
    });
    while (queue.length) {
      const item = queue.shift();
      if (!item) break;
      const { route, attempt } = item;
      const target = `http://127.0.0.1:${PORT}${route === '/' ? '/' : route}`;
      try {
        await page.goto(target, { waitUntil: 'domcontentloaded', timeout: 60000 });
        await page.waitForFunction(() => {
          const t = document.title || '';
          const main = document.querySelector('main');
          const hasContent = main && main.innerText && main.innerText.trim().length > 80;
          return t && t.length > 0 && hasContent;
        }, { timeout: 12000 }).catch(() => {});
        await new Promise((r) => setTimeout(r, 300));
        let html = await page.content();
        html = postProcess(html, route);
        const file = targetFileFor(route);
        ensureDir(file);
        fs.writeFileSync(file, html, 'utf8');
        done++;
        log(`  OK [${done}] ${route}`);
      } catch (err) {
        const msg = err && err.message ? err.message : String(err);
        if (attempt < 2) {
          queue.push({ route, attempt: attempt + 1 });
          log(`  retry ${route}: ${msg.slice(0, 80)}`);
        } else {
          errors.push({ route, error: msg });
          log(`  FAIL ${route}: ${msg.slice(0, 120)}`);
        }
      }
    }
    await page.close();
  }

  await Promise.all(Array.from({ length: concurrency }, () => worker()));
  await browser.close();
  server.close();
  log(`Done. Success ${done}/${routes.length}. Errors: ${errors.length}`);
  if (errors.length) {
    fs.writeFileSync(path.join(ROOT, 'prerender-errors.json'), JSON.stringify(errors, null, 2));
    log('Errors written to prerender-errors.json');
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
