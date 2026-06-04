/**
 * Build-time prerender for the TypoGrammar SPA.
 *
 * For every URL listed in `public/sitemap.xml` we:
 *   1. Boot a tiny static file server pointing at `dist/`.
 *   2. Launch a headless browser and visit each URL.
 *   3. Wait for React to inject its real <title>, <meta>, canonical,
 *      JSON-LD and main content into the DOM.
 *   4. Snapshot `document.documentElement.outerHTML` and write it to
 *      `dist/<route>/index.html` (or `dist/index.html` for `/`).
 *
 * This converts a client-rendered SPA into a hybrid site:
 *   - Search engines / curl get fully-rendered HTML on first byte
 *     (fixes Soft 404, "Alternative canonical", "Crawled - not indexed").
 *   - Real browsers still load the JS bundle and React rehydrates
 *     normally, so navigation, contexts and interactivity are unchanged.
 *
 * Usage:
 *   node scripts/prerender.cjs
 *
 * Run AFTER `vite build`. The npm `build` script in package.json
 * chains them together.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const http = require('http');
const url = require('url');

const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const SITEMAP = path.join(ROOT, 'public', 'sitemap.xml');
const SITE_ORIGIN = 'https://typogrammar.com';
const PORT = 5174;

// ---------- Helpers ----------

function log(msg) {
  process.stdout.write(`[prerender] ${msg}\n`);
}

function parseSitemapUrls() {
  const xml = fs.readFileSync(SITEMAP, 'utf8');
  const matches = xml.match(/<loc>([^<]+)<\/loc>/g) || [];
  const urls = matches
    .map((m) => m.replace(/<\/?loc>/g, '').trim())
    .filter((u) => u.startsWith(SITE_ORIGIN))
    .map((u) => u.slice(SITE_ORIGIN.length) || '/');
  // Deduplicate while preserving order
  return Array.from(new Set(urls));
}

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.pdf': 'application/pdf',
  '.mp3': 'audio/mpeg',
  '.mp4': 'video/mp4'
};

function startStaticServer() {
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      try {
        const parsed = url.parse(req.url);
        let pathname = decodeURIComponent(parsed.pathname || '/');
        // Default file
        let filePath = path.join(DIST, pathname);
        // If folder requested, append index.html
        if (filePath.endsWith(path.sep) || filePath.endsWith('/')) {
          filePath = path.join(filePath, 'index.html');
        }
        // If not a file, fall back to SPA index.html (so /topics/x serves shell)
        if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
          // Try directory/index.html first
          const asDir = path.join(filePath, 'index.html');
          if (fs.existsSync(asDir) && fs.statSync(asDir).isFile()) {
            filePath = asDir;
          } else {
            filePath = path.join(DIST, 'index.html');
          }
        }
        const ext = path.extname(filePath).toLowerCase();
        const mime = MIME[ext] || 'application/octet-stream';
        res.writeHead(200, { 'Content-Type': mime, 'Cache-Control': 'no-store' });
        fs.createReadStream(filePath).pipe(res);
      } catch (err) {
        res.writeHead(500);
        res.end(String(err));
      }
    });
    server.listen(PORT, '127.0.0.1', () => resolve(server));
    server.on('error', reject);
  });
}

function targetFileFor(routePath) {
  // '/' -> dist/index.html (overwrite the shell with rendered home)
  // '/topics/articles' -> dist/topics/articles/index.html
  if (routePath === '/' || routePath === '') {
    return path.join(DIST, 'index.html');
  }
  const safe = routePath.replace(/^\/+/, '').replace(/\/+$/g, '');
  return path.join(DIST, ...safe.split('/'), 'index.html');
}

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

/**
 * Post-process the rendered HTML so the snapshot is suitable as a static page:
 *  - Make sure canonical points to the route (not the localhost render origin).
 *  - Make sure og:url + twitter URL point to the route.
 *  - Strip any service-worker registration noise (no-op since none injected).
 *  - Add a small inline marker so we can tell prerendered vs. shell.
 */
function postProcessHtml(html, routePath) {
  const absoluteUrl = SITE_ORIGIN + (routePath === '/' ? '/' : routePath);

  // Replace any localhost references that may have leaked into URLs
  html = html.replace(new RegExp(`http://127\\.0\\.0\\.1:${PORT}`, 'g'), SITE_ORIGIN);
  html = html.replace(new RegExp(`http://localhost:${PORT}`, 'g'), SITE_ORIGIN);

  // Force canonical to be correct (the SEO component should already have set this,
  // but be defensive in case something didn't render in time).
  if (/<link[^>]+rel=["']canonical["'][^>]*>/i.test(html)) {
    html = html.replace(
      /<link([^>]*?)rel=["']canonical["']([^>]*?)>/i,
      `<link rel="canonical" href="${absoluteUrl}">`
    );
  } else {
    html = html.replace(
      /<\/head>/i,
      `  <link rel="canonical" href="${absoluteUrl}">\n</head>`
    );
  }

  // Force og:url
  if (/<meta[^>]+property=["']og:url["'][^>]*>/i.test(html)) {
    html = html.replace(
      /<meta([^>]*?)property=["']og:url["']([^>]*?)>/i,
      `<meta property="og:url" content="${absoluteUrl}">`
    );
  }

  // Normalize internal anchor hrefs to trailing-slash form so Google does not
  // crawl `/foo` (which 301s to `/foo/`) and report it as "Page with redirect".
  // Skips: external URLs, mailto/tel, anchors, root, query/hash-only, file
  // paths with extensions (e.g. .pdf, .xml), and already-slashed URLs.
  html = normalizeInternalHrefs(html);

  // Normalize ALL canonical-bearing signals inside the static HTML so Google
  // sees consistent URLs even before our JS runs. This includes:
  //   - JSON-LD <script> bodies: `@id`, `mainEntityOfPage.@id`, `url`, etc.
  //   - hreflang alternates
  // The runtime DOM normalizer (Layout.tsx) provides the same guarantee for
  // JS-rendered crawls, but Googlebot's first-pass HTML pass also reads these
  // and a mismatch was the root cause of the recurring "Duplicate, Google
  // chose different canonical than user" reports.
  html = normalizeJsonLdInHtml(html);
  html = normalizeHreflangInHtml(html);

  // Insert a marker comment after <head> for diagnostics
  html = html.replace(
    /<head([^>]*)>/i,
    `<head$1>\n    <!-- prerendered: ${absoluteUrl} -->`
  );

  return html;
}

/**
 * Walk every `<script type="application/ld+json">` block in the HTML, parse
 * its body as JSON, recursively rewrite every internal typogrammar.com URL
 * to the trailing-slash form, and re-serialize. If a block fails to parse
 * (e.g. contains a template literal), it is left untouched.
 */
function normalizeJsonLdInHtml(html) {
  const re = /(<script[^>]*type=["']application\/ld\+json["'][^>]*>)([\s\S]*?)(<\/script>)/gi;
  return html.replace(re, (full, openTag, body, closeTag) => {
    const trimmed = body.trim();
    if (!trimmed) return full;
    try {
      const parsed = JSON.parse(trimmed);
      const fixed = normalizeUrlsInValue(parsed);
      return `${openTag}${JSON.stringify(fixed)}${closeTag}`;
    } catch {
      // Fall back to a regex pass for the common `"@id": "..."` and
      // `"url": "..."` cases so non-strict JSON still gets fixed.
      const patched = body.replace(
        /("(?:@id|url|mainEntityOfPage)"\s*:\s*")(https:\/\/typogrammar\.com\/[^"]+)(")/g,
        (_m, pre, url, post) => pre + normalizeOneInternalUrl(url) + post
      );
      return `${openTag}${patched}${closeTag}`;
    }
  });
}

/**
 * Normalize hreflang alternate href attributes to trailing-slash form.
 */
function normalizeHreflangInHtml(html) {
  return html.replace(
    /(<link[^>]*rel=["']alternate["'][^>]*hreflang=["'][^"']+["'][^>]*href=["'])([^"']+)(["'][^>]*>)/gi,
    (_m, pre, url, post) => pre + normalizeOneInternalUrl(url) + post
  );
}

function normalizeOneInternalUrl(value) {
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

function normalizeUrlsInValue(input) {
  if (typeof input === 'string') return normalizeOneInternalUrl(input);
  if (Array.isArray(input)) return input.map(normalizeUrlsInValue);
  if (input && typeof input === 'object') {
    const out = {};
    for (const k of Object.keys(input)) out[k] = normalizeUrlsInValue(input[k]);
    return out;
  }
  return input;
}

/**
 * Rewrite `href="/path"` → `href="/path/"` for internal links. Preserves
 * query strings and hash fragments. Leaves alone:
 *  - non-anchor href attributes (already filtered by regex)
 *  - external links (don't start with single `/`)
 *  - protocol-relative `//cdn...`
 *  - root `/`, already-slashed `/path/`
 *  - URLs whose final path segment looks like a file (contains `.`)
 *  - mailto:, tel:, javascript:, # links (don't start with `/`)
 */
function normalizeInternalHrefs(html) {
  return html.replace(/href=(["'])(\/[^"'\s>]*)\1/g, (match, quote, raw) => {
    if (raw.startsWith('//')) return match;
    // Split path from query/hash
    const splitIdx = raw.search(/[?#]/);
    const pathPart = splitIdx === -1 ? raw : raw.slice(0, splitIdx);
    const tail = splitIdx === -1 ? '' : raw.slice(splitIdx);
    if (pathPart === '/' || pathPart.endsWith('/')) return match;
    const lastSeg = pathPart.split('/').pop() || '';
    if (lastSeg.includes('.')) return match; // file path like /foo.pdf
    return `href=${quote}${pathPart}/${tail}${quote}`;
  });
}

// ---------- Main ----------

async function main() {
  if (!fs.existsSync(DIST) || !fs.existsSync(path.join(DIST, 'index.html'))) {
    console.error('[prerender] dist/index.html not found. Run `vite build` first.');
    process.exit(1);
  }

  // Save the original SPA shell BEFORE we overwrite dist/index.html with the
  // prerendered home. .htaccess falls back to this for unknown routes so a
  // mistyped URL doesn't end up serving "the homepage" content with the wrong
  // canonical.
  const shellSrc = path.join(DIST, 'index.html');
  const shellDst = path.join(DIST, '_spa-shell.html');
  fs.copyFileSync(shellSrc, shellDst);

  // Force the fallback shell to noindex,follow. It is only ever served for
  // unknown/typo'd URLs (404 candidates) — indexing it would create thin
  // duplicate-content entries in GSC ("Crawled - currently not indexed").
  // Also strip the canonical so Google doesn't treat the shell as an
  // alternative for the homepage.
  let shellHtml = fs.readFileSync(shellDst, 'utf8');
  if (/<meta\s+name=["']robots["'][^>]*>/i.test(shellHtml)) {
    shellHtml = shellHtml.replace(
      /<meta\s+name=["']robots["'][^>]*>/i,
      '<meta name="robots" content="noindex, follow">'
    );
  } else {
    shellHtml = shellHtml.replace(
      /<head([^>]*)>/i,
      '<head$1>\n    <meta name="robots" content="noindex, follow">'
    );
  }
  shellHtml = shellHtml.replace(/<link\s+rel=["']canonical["'][^>]*>\s*/gi, '');
  fs.writeFileSync(shellDst, shellHtml);
  log('Saved SPA shell to dist/_spa-shell.html (noindex,follow)');

  // Lazy-require so a missing puppeteer install does not crash other scripts
  let puppeteer;
  try {
    puppeteer = require('puppeteer');
  } catch (e) {
    console.error('[prerender] puppeteer is not installed. Run `npm install --save-dev puppeteer`.');
    process.exit(1);
  }

  const routes = parseSitemapUrls();
  log(`Will prerender ${routes.length} routes from sitemap.xml`);

  const server = await startStaticServer();
  log(`Static server listening on http://127.0.0.1:${PORT}`);

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const errors = [];
  let done = 0;
  const concurrency = 4;
  const queue = routes.slice();

  async function worker() {
    const page = await browser.newPage();
    await page.setUserAgent(
      'Mozilla/5.0 (compatible; TypoGrammarPrerender/1.0; +https://typogrammar.com)'
    );
    // Block heavy third-party trackers/ads/fonts to speed things up; we don't
    // need them in the static snapshot.
    await page.setRequestInterception(true);
    page.on('request', (req) => {
      const u = req.url();
      if (
        /googletagmanager|google-analytics|googlesyndication|googleadservices|doubleclick|adsbygoogle|facebook\.net|jotfor\.ms|youtube\.com|gstatic\.com\/recaptcha/.test(
          u
        )
      ) {
        return req.abort();
      }
      // Allow fonts so layout doesn't reflow weirdly, but don't block them
      return req.continue();
    });

    while (queue.length) {
      const item = queue.shift();
      if (!item) break;
      const route = typeof item === 'string' ? item : item.route;
      const attempt = typeof item === 'string' ? 1 : item.attempt;
      const target = `http://127.0.0.1:${PORT}${route === '/' ? '/' : route}`;
      try {
        await page.goto(target, { waitUntil: 'domcontentloaded', timeout: 45000 });

        // Give the SEO useEffect + lazy-loaded route component time to commit.
        // We wait for either a non-default <title> or <main> with content.
        await page
          .waitForFunction(
            () => {
              const t = document.title || '';
              const main = document.querySelector('main');
              const hasContent = main && main.innerText && main.innerText.trim().length > 100;
              const hasRealTitle = t && t.length > 0;
              return hasRealTitle && hasContent;
            },
            { timeout: 8000 }
          )
          .catch(() => {
            /* fall through and snapshot whatever we have */
          });

        // Small extra settle for late JSON-LD scripts
        await new Promise((r) => setTimeout(r, 200));

        let html = await page.content();
        html = postProcessHtml(html, route);

        const file = targetFileFor(route);
        ensureDir(file);
        fs.writeFileSync(file, html, 'utf8');
        done++;
        if (done % 25 === 0 || done === routes.length) {
          log(`  ${done}/${routes.length} pages prerendered`);
        }
      } catch (err) {
        const msg = err && err.message ? err.message : String(err);
        if (attempt < 2) {
          // Retry once at the back of the queue
          queue.push({ route, attempt: attempt + 1 });
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

  log(`Finished. Success: ${done}/${routes.length}.`);
  if (errors.length) {
    log(`Failures: ${errors.length}`);
    errors.slice(0, 10).forEach((e) => log(`  - ${e.route}: ${e.error}`));
    if (errors.length > 10) log(`  ... and ${errors.length - 10} more`);
  }
}

main().catch((err) => {
  console.error('[prerender] Fatal:', err);
  process.exit(1);
});
