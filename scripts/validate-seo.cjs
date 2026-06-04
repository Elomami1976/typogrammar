/**
 * SEO signal validator.
 *
 * Runs over the prerendered dist/ tree and proves every page satisfies the
 * canonical-consistency contract. Fails the process with a non-zero exit
 * code (and a per-page diff) if ANY signal disagrees so we never deploy a
 * regression that brings back GSC issues like:
 *   - "Duplicate, Google chose different canonical than user"
 *   - "Alternate page with proper canonical tag"
 *   - "Page with redirect"
 *   - "Crawled - currently not indexed" (caused by inconsistent signals)
 *
 * Contract per page (after prerender postprocess):
 *   1. Exactly one <link rel="canonical">.
 *   2. Canonical href is the exact URL of this page (sitemap form, with
 *      trailing slash for non-file paths).
 *   3. og:url, twitter:url (if present) equal canonical.
 *   4. Every JSON-LD `@id`, `mainEntityOfPage.@id`, and top-level `url`
 *      that points to typogrammar.com is in trailing-slash form (or is
 *      a file path).
 *   5. Every hreflang alternate href is in trailing-slash form.
 *   6. The page is NOT noindex (unless it's the SPA shell or NotFound).
 *   7. Every internal anchor href is in trailing-slash form (no /foo
 *      that would 301 to /foo/).
 *
 * Usage:
 *   node scripts/validate-seo.cjs
 *   npm run validate:seo
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const SITE = 'https://typogrammar.com';
const ALLOW_NOINDEX = new Set([
  '_spa-shell.html',
]);

function log(msg) { process.stdout.write(msg + '\n'); }

function isFilePath(pathname) {
  if (!pathname) return false;
  if (pathname === '/' || pathname.endsWith('/')) return false;
  const last = pathname.split('/').pop() || '';
  return last.includes('.');
}

function shouldEndWithSlash(absoluteUrl) {
  if (!absoluteUrl.startsWith(SITE)) return false;
  try {
    const u = new URL(absoluteUrl);
    if (u.pathname === '/' || u.pathname.endsWith('/')) return false;
    return !isFilePath(u.pathname);
  } catch {
    return false;
  }
}

function* walkHtmlFiles(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walkHtmlFiles(full);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      yield full;
    }
  }
}

function htmlToCanonicalUrl(filePath) {
  // dist/foo/index.html -> https://typogrammar.com/foo/
  // dist/index.html     -> https://typogrammar.com/
  const rel = path.relative(DIST, filePath).replace(/\\/g, '/');
  if (rel === 'index.html') return SITE + '/';
  if (rel === '_spa-shell.html') return null; // shell has no canonical
  if (rel.endsWith('/index.html')) {
    return SITE + '/' + rel.slice(0, -'/index.html'.length) + '/';
  }
  return null;
}

function pickAttr(tag, name) {
  const m = tag.match(new RegExp(`${name}\\s*=\\s*["']([^"']+)["']`, 'i'));
  return m ? m[1] : null;
}

function findAll(html, regex) {
  const out = [];
  let m;
  while ((m = regex.exec(html)) !== null) out.push(m);
  return out;
}

function validatePage(filePath) {
  const html = fs.readFileSync(filePath, 'utf8');
  const issues = [];
  const rel = path.relative(DIST, filePath).replace(/\\/g, '/');
  const expectedCanonical = htmlToCanonicalUrl(filePath);

  // 6. noindex check
  const robots = html.match(/<meta\s+name=["']robots["']\s+content=["']([^"']+)["']/i);
  const isNoindex = robots && /noindex/i.test(robots[1]);
  if (isNoindex && !ALLOW_NOINDEX.has(rel)) {
    issues.push(`unexpected noindex (robots="${robots[1]}")`);
  }

  // SPA shell: no canonical expected, skip remaining checks
  if (expectedCanonical === null) return issues;

  // 1. Exactly one canonical
  const canonicals = findAll(html, /<link[^>]+rel=["']canonical["'][^>]*>/gi);
  if (canonicals.length === 0) {
    issues.push('missing <link rel="canonical">');
  } else if (canonicals.length > 1) {
    issues.push(`${canonicals.length} canonical tags (expected 1)`);
  }

  // 2. Canonical href matches expected
  if (canonicals[0]) {
    const href = pickAttr(canonicals[0][0], 'href');
    if (href !== expectedCanonical) {
      issues.push(`canonical "${href}" !== expected "${expectedCanonical}"`);
    }
  }

  // 3. og:url / twitter:url equal canonical
  const ogUrlTag = html.match(/<meta[^>]+property=["']og:url["'][^>]*>/i);
  if (ogUrlTag) {
    const c = pickAttr(ogUrlTag[0], 'content');
    if (c && c !== expectedCanonical) {
      issues.push(`og:url "${c}" !== canonical "${expectedCanonical}"`);
    }
  }
  const twUrlTag = html.match(/<meta[^>]+(?:name|property)=["']twitter:url["'][^>]*>/i);
  if (twUrlTag) {
    const c = pickAttr(twUrlTag[0], 'content');
    if (c && c !== expectedCanonical) {
      issues.push(`twitter:url "${c}" !== canonical "${expectedCanonical}"`);
    }
  }

  // 4. JSON-LD URL fields
  const ldRe = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let ldMatch;
  let ldIdx = 0;
  while ((ldMatch = ldRe.exec(html)) !== null) {
    ldIdx++;
    const body = ldMatch[1].trim();
    if (!body) continue;
    let parsed;
    try {
      parsed = JSON.parse(body);
    } catch {
      // Fallback regex check on raw body
      const bad = body.match(/"(?:@id|url|mainEntityOfPage)"\s*:\s*"(https:\/\/typogrammar\.com\/[^"]+)"/);
      if (bad && shouldEndWithSlash(bad[1])) {
        issues.push(`JSON-LD#${ldIdx}: "${bad[1]}" should end with /`);
      }
      continue;
    }
    const stack = [parsed];
    while (stack.length) {
      const node = stack.pop();
      if (typeof node !== 'object' || node === null) continue;
      if (Array.isArray(node)) { for (const v of node) stack.push(v); continue; }
      for (const [k, v] of Object.entries(node)) {
        if (typeof v === 'string' && shouldEndWithSlash(v)) {
          issues.push(`JSON-LD#${ldIdx}.${k}: "${v}" should end with /`);
        } else if (typeof v === 'object' && v !== null) {
          stack.push(v);
        }
      }
    }
  }

  // 5. hreflang alternates
  const altRe = /<link[^>]*rel=["']alternate["'][^>]*hreflang=["']([^"']+)["'][^>]*href=["']([^"']+)["'][^>]*>/gi;
  let altMatch;
  while ((altMatch = altRe.exec(html)) !== null) {
    if (shouldEndWithSlash(altMatch[2])) {
      issues.push(`hreflang ${altMatch[1]} href "${altMatch[2]}" should end with /`);
    }
  }

  // 7. Internal anchor hrefs
  const aRe = /<a\s[^>]*href=["'](\/[^"'\s>]*)["'][^>]*>/gi;
  const seenBadHref = new Set();
  let aMatch;
  while ((aMatch = aRe.exec(html)) !== null) {
    const raw = aMatch[1];
    if (raw.startsWith('//')) continue;
    const splitIdx = raw.search(/[?#]/);
    const pathPart = splitIdx === -1 ? raw : raw.slice(0, splitIdx);
    if (pathPart === '/' || pathPart.endsWith('/')) continue;
    const last = pathPart.split('/').pop() || '';
    if (last.includes('.')) continue;
    if (!seenBadHref.has(pathPart)) {
      seenBadHref.add(pathPart);
      issues.push(`internal href "${pathPart}" missing trailing /`);
    }
  }

  return issues;
}

function main() {
  if (!fs.existsSync(DIST)) {
    console.error('[validate-seo] dist/ not found. Run `npm run build` first.');
    process.exit(1);
  }
  let pages = 0;
  let failed = 0;
  const allIssues = [];
  for (const file of walkHtmlFiles(DIST)) {
    pages++;
    const issues = validatePage(file);
    if (issues.length) {
      failed++;
      const rel = path.relative(DIST, file).replace(/\\/g, '/');
      allIssues.push({ rel, issues });
    }
  }
  log(`[validate-seo] checked ${pages} HTML pages`);
  if (failed === 0) {
    log('[validate-seo] OK — all SEO signals consistent.');
    process.exit(0);
  }
  log(`[validate-seo] FAIL — ${failed} pages have inconsistent SEO signals:\n`);
  for (const { rel, issues } of allIssues.slice(0, 50)) {
    log(`  ${rel}`);
    for (const i of issues) log(`    - ${i}`);
  }
  if (allIssues.length > 50) {
    log(`  …and ${allIssues.length - 50} more`);
  }
  process.exit(1);
}

main();
