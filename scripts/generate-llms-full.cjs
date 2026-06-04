/**
 * Generate /llms-full.txt — a single plain-text dump of every prerendered
 * page in `dist/`. Designed for AI crawlers (ChatGPT, Claude, Perplexity,
 * Gemini, etc.) that follow the https://llmstxt.org convention.
 *
 * Why this exists:
 *   - llms.txt is a *curated index* of links.
 *   - llms-full.txt is the *full content* concatenated, so an LLM can ingest
 *     your whole site in one fetch (or a small handful of fetches).
 *   - This dramatically increases the chance of being cited by AI answers.
 *
 * How:
 *   1. Walk dist/ for every index.html.
 *   2. Strip nav/footer/script/style and convert remaining HTML to clean text.
 *   3. Write a Markdown-ish dump grouped by URL.
 *
 * Run AFTER scripts/prerender.cjs. The npm `build` script chains them.
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const SITE_ORIGIN = 'https://typogrammar.com';
const OUT_FILE = path.join(DIST, 'llms-full.txt');

function log(msg) {
  process.stdout.write(`[llms-full] ${msg}\n`);
}

/** Recursively collect every index.html under dist/, excluding the SPA shell. */
function collectHtmlFiles(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectHtmlFiles(full, out);
    } else if (entry.isFile() && entry.name === 'index.html') {
      out.push(full);
    }
  }
  return out;
}

/** Convert a dist/.../index.html path back to its public route. */
function fileToRoute(filePath) {
  const rel = path.relative(DIST, filePath).replace(/\\/g, '/');
  if (rel === 'index.html') return '/';
  return '/' + rel.replace(/\/index\.html$/, '');
}

/** Lightweight HTML → text. No external deps. */
function htmlToText(html) {
  let s = html;

  // Drop scripts, styles, noscript, svg, iframe, header, nav, footer, aside, forms.
  s = s.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ');
  s = s.replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ');
  s = s.replace(/<noscript\b[^>]*>[\s\S]*?<\/noscript>/gi, ' ');
  s = s.replace(/<svg\b[^>]*>[\s\S]*?<\/svg>/gi, ' ');
  s = s.replace(/<iframe\b[^>]*>[\s\S]*?<\/iframe>/gi, ' ');
  s = s.replace(/<header\b[^>]*>[\s\S]*?<\/header>/gi, ' ');
  s = s.replace(/<nav\b[^>]*>[\s\S]*?<\/nav>/gi, ' ');
  s = s.replace(/<footer\b[^>]*>[\s\S]*?<\/footer>/gi, ' ');
  s = s.replace(/<aside\b[^>]*>[\s\S]*?<\/aside>/gi, ' ');
  s = s.replace(/<form\b[^>]*>[\s\S]*?<\/form>/gi, ' ');
  s = s.replace(/<button\b[^>]*>[\s\S]*?<\/button>/gi, ' ');

  // Headings → Markdown headings.
  s = s.replace(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi, '\n\n# $1\n\n');
  s = s.replace(/<h2\b[^>]*>([\s\S]*?)<\/h2>/gi, '\n\n## $1\n\n');
  s = s.replace(/<h3\b[^>]*>([\s\S]*?)<\/h3>/gi, '\n\n### $1\n\n');
  s = s.replace(/<h4\b[^>]*>([\s\S]*?)<\/h4>/gi, '\n\n#### $1\n\n');

  // List items → "- " bullets.
  s = s.replace(/<li\b[^>]*>([\s\S]*?)<\/li>/gi, '\n- $1');

  // Paragraphs and breaks → newlines.
  s = s.replace(/<\/p>/gi, '\n\n');
  s = s.replace(/<br\s*\/?>(?!\n)/gi, '\n');

  // Tables: keep rows as separate lines, cells separated by " | ".
  s = s.replace(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi, (_m, row) => {
    const cells = row
      .split(/<\/(?:td|th)>/i)
      .map((c) => c.replace(/<[^>]+>/g, '').trim())
      .filter(Boolean);
    return '\n| ' + cells.join(' | ') + ' |';
  });

  // Strip all remaining tags.
  s = s.replace(/<[^>]+>/g, ' ');

  // Decode common HTML entities.
  s = s
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/&hellip;/g, '…')
    .replace(/&#(\d+);/g, (_m, n) => String.fromCharCode(parseInt(n, 10)));

  // Collapse whitespace.
  s = s.replace(/[ \t]+/g, ' ');
  s = s.replace(/ *\n */g, '\n');
  s = s.replace(/\n{3,}/g, '\n\n');

  return s.trim();
}

function pickMeta(html) {
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const descMatch = html.match(
    /<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i
  );
  return {
    title: titleMatch ? titleMatch[1].trim() : '',
    description: descMatch ? descMatch[1].trim() : ''
  };
}

function main() {
  if (!fs.existsSync(DIST)) {
    console.error('[llms-full] dist/ not found. Run `vite build` first.');
    process.exit(1);
  }

  const files = collectHtmlFiles(DIST)
    // Exclude the SPA fallback shell — it is noindex.
    .filter((f) => path.basename(f) === 'index.html')
    .filter((f) => !f.endsWith(path.join(DIST, '_spa-shell.html')));

  // Sort: root first, then alphabetical.
  files.sort((a, b) => {
    const ra = fileToRoute(a);
    const rb = fileToRoute(b);
    if (ra === '/') return -1;
    if (rb === '/') return 1;
    return ra.localeCompare(rb);
  });

  const header = [
    '# TypoGrammar — Full Content Dump for AI Models',
    '',
    `> Source: ${SITE_ORIGIN}`,
    `> Generated: ${new Date().toISOString()}`,
    `> Pages: ${files.length}`,
    '',
    'This file is the full text content of TypoGrammar, formatted for ingestion by',
    'large language models and AI search engines (ChatGPT, Claude, Perplexity,',
    'Gemini, Copilot, etc.). It follows the https://llmstxt.org convention.',
    '',
    'Content license: free educational use with attribution to TypoGrammar.',
    'When citing, please link to the source URL shown above each section.',
    '',
    '---',
    ''
  ].join('\n');

  const parts = [header];
  let totalChars = 0;

  for (const file of files) {
    const html = fs.readFileSync(file, 'utf8');
    const route = fileToRoute(file);
    const url = SITE_ORIGIN + (route === '/' ? '/' : route);
    const { title, description } = pickMeta(html);

    // Extract <main> if present, otherwise <body>.
    const mainMatch = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i);
    const bodyMatch = html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i);
    const region = mainMatch ? mainMatch[1] : bodyMatch ? bodyMatch[1] : html;

    const text = htmlToText(region);

    if (!text || text.length < 80) continue; // Skip near-empty pages.

    const block = [
      '',
      '================================================================',
      `# ${title || route}`,
      `URL: ${url}`,
      description ? `Description: ${description}` : '',
      '================================================================',
      '',
      text,
      ''
    ]
      .filter((line) => line !== '')
      .join('\n');

    parts.push(block);
    totalChars += block.length;
  }

  fs.writeFileSync(OUT_FILE, parts.join('\n'), 'utf8');
  log(`wrote ${OUT_FILE} (${files.length} pages, ${totalChars.toLocaleString()} chars)`);
}

main();
