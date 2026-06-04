/**
 * build-chatbot-index.cjs
 *
 * Generates public/chatbot-index.json — a lightweight searchable index of
 * TypoGrammar content used by the typogrammar-ai Cloudflare Worker (chat type).
 *
 * For each grammar topic / confusing-area / blog post, we extract:
 *   - id
 *   - title
 *   - category
 *   - url (absolute path on the site)
 *   - searchText (lowercase plain text used for keyword scoring)
 *   - snippet (short plain-text preview shown / passed to the model)
 *
 * Content files use JSX, so we read them as raw text and strip tags / code
 * structure with regexes. The result is "good enough" for keyword matching —
 * not perfect, but cheap and dependency-free.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const CONSTANTS = path.join(ROOT, 'src', 'constants');
const OUTPUT = path.join(ROOT, 'public', 'chatbot-index.json');

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function readFile(p) {
  return fs.readFileSync(p, 'utf8');
}

/**
 * Best-effort plain-text extractor for JSX content blocks.
 * Removes import/comment noise, JSX tags, code fences, and collapses whitespace.
 */
function jsxToPlainText(src) {
  return src
    // strip block comments
    .replace(/\/\*[\s\S]*?\*\//g, ' ')
    // strip line comments
    .replace(/(^|\s)\/\/[^\n]*/g, ' ')
    // strip JSX fragments <> and </>
    .replace(/<\/?>/g, ' ')
    // strip JSX/HTML tags
    .replace(/<\/?[A-Za-z][^>]*>/g, ' ')
    // strip JSX expressions { ... } that span a single line of identifiers
    .replace(/\{[A-Za-z0-9_.\s,'"`]*\}/g, ' ')
    // backtick template literals → keep content
    .replace(/`([\s\S]*?)`/g, (_, s) => ' ' + s + ' ')
    // collapse whitespace
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Split a TS/TSX source into top-level object literals that look like content
 * items. We rely on the convention used in this codebase:
 *   { id: '...', title: '...', category: '...', content: ( ... ) }
 *   { slug: '...', title: '...', ... }
 *
 * Returns an array of raw substrings — one per item — that we can then parse
 * field-by-field with simple regexes.
 */
function splitIntoItems(src, idKey) {
  const items = [];
  const opener = new RegExp(`\\{\\s*${idKey}\\s*:`, 'g');
  let match;
  while ((match = opener.exec(src)) !== null) {
    const start = match.index;
    // Walk forward counting braces to find the matching closer.
    let depth = 0;
    let i = start;
    let inStr = null; // '\'' | '"' | '`' | null
    while (i < src.length) {
      const ch = src[i];
      const prev = src[i - 1];
      if (inStr) {
        if (ch === inStr && prev !== '\\') inStr = null;
      } else {
        if (ch === '\'' || ch === '"' || ch === '`') inStr = ch;
        else if (ch === '{') depth++;
        else if (ch === '}') {
          depth--;
          if (depth === 0) {
            items.push(src.slice(start, i + 1));
            break;
          }
        }
      }
      i++;
    }
  }
  return items;
}

function extractStringField(itemSrc, field) {
  // Matches: field: 'value' | "value" | `value` (single-line)
  const re = new RegExp(`${field}\\s*:\\s*(['"\`])((?:\\\\.|(?!\\1).)*?)\\1`);
  const m = itemSrc.match(re);
  return m ? m[2] : '';
}

function extractContentBlock(itemSrc) {
  // Matches:  content: ( ... )   OR   content: <Fragment>...</Fragment>
  const idx = itemSrc.search(/content\s*:/);
  if (idx === -1) return '';
  const after = itemSrc.slice(idx);
  // Find the first opening paren / angle bracket and balance it.
  const openIdx = after.search(/[(<]/);
  if (openIdx === -1) return '';
  const opener = after[openIdx];
  const closer = opener === '(' ? ')' : '>';
  let depth = 0;
  let i = openIdx;
  while (i < after.length) {
    const ch = after[i];
    if (ch === opener) depth++;
    else if (ch === closer) {
      depth--;
      if (depth === 0) return after.slice(openIdx + 1, i);
    }
    i++;
  }
  return after.slice(openIdx + 1, Math.min(after.length, openIdx + 4000));
}

function buildEntry({ id, title, category, url, rawContent, summary }) {
  const contentText = rawContent ? jsxToPlainText(rawContent) : '';
  const snippetSource = (summary && summary.trim()) || contentText;
  const snippet = snippetSource.slice(0, 320);
  const searchText = [title, category, snippet]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
  return { id, title, category, url, snippet, searchText };
}

// ---------------------------------------------------------------------------
// Extract grammar topics + confusing areas
// ---------------------------------------------------------------------------

function extractTopics(file, urlPrefix) {
  const src = readFile(file);
  const items = splitIntoItems(src, 'id');
  const out = [];
  for (const item of items) {
    const id = extractStringField(item, 'id');
    const title = extractStringField(item, 'title');
    const category = extractStringField(item, 'category');
    if (!id || !title) continue;
    const rawContent = extractContentBlock(item);
    out.push(
      buildEntry({
        id,
        title,
        category,
        url: `${urlPrefix}/${id}`,
        rawContent,
      })
    );
  }
  return out;
}

// ---------------------------------------------------------------------------
// Extract blog posts (use summary when available — it's already plain text)
// ---------------------------------------------------------------------------

function extractBlogPosts(file) {
  const src = readFile(file);
  const items = splitIntoItems(src, 'slug');
  const out = [];
  for (const item of items) {
    const id = extractStringField(item, 'slug');
    const title = extractStringField(item, 'title');
    const category = extractStringField(item, 'category');
    const summary = extractStringField(item, 'summary');
    if (!id || !title) continue;
    const rawContent = summary ? '' : extractContentBlock(item);
    out.push(
      buildEntry({
        id,
        title,
        category,
        url: `/blog/${id}`,
        rawContent,
        summary,
      })
    );
  }
  return out;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  const entries = [];

  const grammarPath = path.join(CONSTANTS, 'grammarTopics.tsx');
  const confusingPath = path.join(CONSTANTS, 'confusingAreasTopics.tsx');
  const blogPath = path.join(CONSTANTS, 'blogPosts.tsx');

  if (fs.existsSync(grammarPath)) {
    entries.push(...extractTopics(grammarPath, '/topics'));
  }
  if (fs.existsSync(confusingPath)) {
    entries.push(...extractTopics(confusingPath, '/topics'));
  }
  if (fs.existsSync(blogPath)) {
    entries.push(...extractBlogPosts(blogPath));
  }

  // Deduplicate by url
  const seen = new Set();
  const deduped = entries.filter((e) => {
    if (seen.has(e.url)) return false;
    seen.add(e.url);
    return true;
  });

  const payload = {
    generatedAt: new Date().toISOString(),
    count: deduped.length,
    entries: deduped,
  };

  fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
  fs.writeFileSync(OUTPUT, JSON.stringify(payload));
  const kb = (fs.statSync(OUTPUT).size / 1024).toFixed(1);
  console.log(
    `[chatbot-index] wrote ${deduped.length} entries to ${path.relative(
      ROOT,
      OUTPUT
    )} (${kb} KB)`
  );
}

main();
