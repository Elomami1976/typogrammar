/**
 * Single source of truth for canonical-URL normalization across all SEO signals.
 *
 * Why: Google Search Console flags pages as "Duplicate, Google chose different
 * canonical than user" / "Alternate page with proper canonical tag" / "Page
 * with redirect" whenever ANY of the following disagree:
 *   - <link rel="canonical">
 *   - <meta property="og:url">
 *   - JSON-LD `@id`, `mainEntityOfPage.@id`, `url`
 *   - <link rel="alternate" hreflang="...">
 *   - Internal anchor hrefs
 *   - Sitemap URLs
 *
 * Our convention (matches sitemap.xml + .htaccess 301 rules): every internal
 * URL that is NOT a file (no extension) must end with a trailing slash.
 *
 * This module is used in three places so consistency is automatic:
 *   1. SchemaMarkup.tsx  — normalizes schemas before injection
 *   2. App.tsx route effect — normalizes the live DOM on every navigation
 *      (catches inline JSON-LD scripts that bypass SchemaMarkup)
 *   3. scripts/prerender.cjs — normalizes the static HTML snapshot so Google
 *      sees correct signals BEFORE running JS
 */

const SITE_HOST = 'https://typogrammar.com';

/**
 * Append trailing slash to an internal typogrammar.com URL whose path has no
 * file extension and isn't already slashed. Returns the input unchanged for:
 *   - external URLs
 *   - URLs whose final path segment contains a dot (file paths like /logo.png)
 *   - URLs already ending with /
 *   - malformed URLs that fail to parse
 */
export function normalizeInternalUrl(value: string): string {
  if (typeof value !== 'string') return value;
  if (!value.startsWith(SITE_HOST)) return value;
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

/**
 * Recursively walk a JSON-LD object and rewrite every internal URL string to
 * the trailing-slash form. Mutates a copy; original is untouched.
 */
export function normalizeUrlsInSchema(input: any): any {
  if (typeof input === 'string') return normalizeInternalUrl(input);
  if (Array.isArray(input)) return input.map(normalizeUrlsInSchema);
  if (input && typeof input === 'object') {
    const out: Record<string, any> = {};
    for (const key of Object.keys(input)) {
      out[key] = normalizeUrlsInSchema(input[key]);
    }
    return out;
  }
  return input;
}

/**
 * Walk the live document <head> and normalize every SEO signal:
 *   - canonical link
 *   - og:url, twitter:url meta tags
 *   - hreflang alternate links
 *   - every JSON-LD <script> body (parsed, normalized, re-serialized)
 *
 * Safe to call multiple times; idempotent. Should be invoked on every route
 * change after route-level effects have run, so it acts as a final guard.
 */
export function normalizeAllSeoSignalsInDOM(): void {
  if (typeof document === 'undefined') return;

  // 1. Canonical link
  const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (canonical) {
    const href = canonical.getAttribute('href');
    if (href) {
      const fixed = normalizeInternalUrl(href);
      if (fixed !== href) canonical.setAttribute('href', fixed);
    }
  }

  // 2. URL-bearing meta tags
  const urlMetaSelectors = [
    'meta[property="og:url"]',
    'meta[name="twitter:url"]',
    'meta[property="twitter:url"]',
  ];
  for (const sel of urlMetaSelectors) {
    document.querySelectorAll<HTMLMetaElement>(sel).forEach((m) => {
      const content = m.getAttribute('content');
      if (!content) return;
      const fixed = normalizeInternalUrl(content);
      if (fixed !== content) m.setAttribute('content', fixed);
    });
  }

  // 3. hreflang alternates
  document.querySelectorAll<HTMLLinkElement>('link[rel="alternate"][hreflang]').forEach((l) => {
    const href = l.getAttribute('href');
    if (!href) return;
    const fixed = normalizeInternalUrl(href);
    if (fixed !== href) l.setAttribute('href', fixed);
  });

  // 4. Every JSON-LD script (handles inline schemas that bypass SchemaMarkup)
  document.querySelectorAll<HTMLScriptElement>('script[type="application/ld+json"]').forEach((s) => {
    const txt = s.textContent;
    if (!txt) return;
    try {
      const parsed = JSON.parse(txt);
      const normalized = normalizeUrlsInSchema(parsed);
      const next = JSON.stringify(normalized);
      if (next !== txt) s.textContent = next;
    } catch {
      // Non-JSON or template literal in dev mode — skip
    }
  });
}
