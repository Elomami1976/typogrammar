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
// Curated static pages (downloads, tools, hubs, vocabulary books)
// These don't live in grammarTopics / confusingAreasTopics / blogPosts, so
// without this list the chatbot has no idea they exist.
// Add new entries here whenever a new standalone landing page is launched.
// ---------------------------------------------------------------------------

const STATIC_PAGES = [
  // ----- Downloads / PDFs -----
  {
    id: '3000-most-common-english-words-pdf',
    title: '3000 Most Common English Words PDF (Free Download)',
    category: 'Downloads',
    url: '/downloads/3000-most-common-english-words-pdf',
    snippet:
      'Free PDF of the 3000 most common English words with definitions, IPA pronunciation, example sentences, collocations, synonyms, antonyms, and practice exercises. Covers essential, intermediate, and advanced vocabulary for IELTS, TOEFL, and everyday English.',
  },
  {
    id: 'english-grammar-pdf',
    title: 'Complete English Grammar PDF (Free Download)',
    category: 'Downloads',
    url: '/ielts/english-grammar-pdf',
    snippet:
      'Free downloadable English grammar PDF covering tenses, articles, prepositions, conditionals, passive voice, reported speech, and more — with examples and exercises.',
  },
  {
    id: 'complex-sentences-pdf',
    title: '50 Complex Sentences for IELTS PDF (Free Download)',
    category: 'Downloads',
    url: '/ielts/50-complex-sentences-for-ielts-pdf',
    snippet:
      'Free PDF with 50 complex sentence structures for IELTS Writing — independent and dependent clauses, subordinating conjunctions, and ready-to-use examples to boost your Grammatical Range and Accuracy score.',
  },
  {
    id: 'toefl-reading-practice-pdf',
    title: 'TOEFL Reading Practice PDF (Free Download)',
    category: 'Downloads',
    url: '/toefl/toefl-reading-practice-pdf',
    snippet:
      'Free TOEFL Reading practice PDF with passages, question types, and answer keys to help you prepare for the TOEFL iBT Reading section.',
  },
  {
    id: 'toefl-vocabulary-pdf',
    title: 'TOEFL Vocabulary PDF (Free Download)',
    category: 'Downloads',
    url: '/toefl/toefl-vocabulary-pdf',
    snippet:
      'Free TOEFL vocabulary PDF with high-frequency academic words, definitions, and example sentences for the TOEFL iBT exam.',
  },
  {
    id: 'toefl-writing-pdf',
    title: 'TOEFL Writing PDF (Free Download)',
    category: 'Downloads',
    url: '/toefl/toefl-writing-pdf',
    snippet:
      'Free TOEFL Writing PDF with task templates, sample essays, and scoring tips for the Integrated and Independent Writing tasks.',
  },
  {
    id: '1000-pte-academic-practice-questions',
    title: '1000 PTE Academic Practice Questions (Free Download)',
    category: 'Downloads',
    url: '/downloads/1000-pte-academic-practice-questions',
    snippet:
      'Free PDF with 1000 PTE Academic practice questions across all sections — speaking, writing, reading, and listening.',
  },

  // ----- Tools -----
  {
    id: 'grammar-checker',
    title: 'Free Grammar Checker',
    category: 'Tools',
    url: '/grammar-checker',
    snippet:
      'Free AI grammar checker for English. Paste your sentence to fix grammar, spelling, and punctuation instantly — no login required.',
  },
  {
    id: 'paraphrasing-tool',
    title: 'Free Paraphrasing Tool (No Login)',
    category: 'Tools',
    url: '/paraphrasing-tool',
    snippet:
      'Free AI paraphrasing tool — rewrite English sentences clearly and naturally. No sign-up required.',
  },
  {
    id: 'english-level-test',
    title: 'English Level Test (Free CEFR Test)',
    category: 'Tools',
    url: '/english-level-test',
    snippet:
      'Free English level test that maps your score to the CEFR (A1–C2) so you know exactly where you stand.',
  },
  {
    id: 'ielts-band-score-calculator',
    title: 'IELTS Band Score Calculator',
    category: 'Tools',
    url: '/ielts-band-score-calculator',
    snippet:
      'Free IELTS Band Score Calculator for Listening, Reading, Writing, and Speaking — converts raw scores to the official 0–9 band scale.',
  },
  {
    id: 'essay-topic-generator',
    title: 'IELTS Essay Topic Generator',
    category: 'Tools',
    url: '/essay-topic-generator',
    snippet:
      'Generate IELTS Writing Task 2 essay topics on demand, with category filters (technology, education, environment, etc.).',
  },
  {
    id: 'tense-visualizer',
    title: 'Interactive English Tense Visualizer',
    category: 'Tools',
    url: '/tense-visualizer',
    snippet:
      'Interactive visualizer that plots every English tense on a timeline so you can see exactly how past, present, future, simple, progressive, and perfect forms relate.',
  },

  // ----- Hubs / Landing pages -----
  {
    id: 'verb-tenses-hub',
    title: 'English Verb Tenses — Complete Guide',
    category: 'Hubs',
    url: '/grammar/verb-tenses',
    snippet:
      'Complete guide to all 12 English verb tenses with formation, uses, examples, and timeline diagrams — Present, Past, Future × Simple, Progressive, Perfect, Perfect Progressive.',
  },
  {
    id: 'grammar-guide',
    title: 'English Grammar Guide',
    category: 'Hubs',
    url: '/grammar-guide',
    snippet:
      'Full English grammar guide covering tenses, nouns, articles, pronouns, verbs, modifiers, clauses, punctuation, and style — with lessons and quizzes.',
  },
  {
    id: 'ielts-tests',
    title: 'IELTS Tests, Tips & Resources',
    category: 'Hubs',
    url: '/ielts/tests',
    snippet:
      'IELTS preparation hub: practice tests, band score requirements, Writing Task 1 & 2 guides, Speaking questions, vocabulary by band, and ebooks.',
  },
  {
    id: 'toefl-reading-hub',
    title: 'TOEFL Reading Section Explained',
    category: 'Hubs',
    url: '/toefl/toefl-reading/toefl-reading-section-explained',
    snippet:
      'Everything you need to know about the TOEFL iBT Reading section: format, question types, strategies, time management, and practice questions.',
  },
  {
    id: 'collocations',
    title: 'English Collocations Guide',
    category: 'Vocabulary',
    url: '/vocabulary/collocations',
    snippet:
      'Master English collocations — natural word pairings (strong coffee, heavy rain, make a decision) — to sound more fluent in writing and speech.',
  },
  {
    id: 'homophones-homonyms-homographs',
    title: 'Homophones, Homonyms & Homographs',
    category: 'Vocabulary',
    url: '/vocabulary/homophones-homonyms-homographs',
    snippet:
      'Clear guide to homophones, homonyms, and homographs in English — with examples to stop confusing pairs like there/their/they\u2019re and bow (verb) vs bow (noun).',
  },
  {
    id: 'idioms',
    title: 'Common English Idioms',
    category: 'Vocabulary',
    url: '/idioms',
    snippet:
      'Common English idioms with meanings, examples, and usage tips. Great for everyday conversation and IELTS Speaking.',
  },
  {
    id: 'phrasal-verbs',
    title: 'English Phrasal Verbs',
    category: 'Vocabulary',
    url: '/phrasal-verbs',
    snippet:
      'Comprehensive list of English phrasal verbs with meanings, examples, and separable/inseparable rules.',
  },
  {
    id: 'irregular-verbs',
    title: 'English Irregular Verbs',
    category: 'Grammar',
    url: '/irregular-verbs',
    snippet:
      'Full list of English irregular verbs with base form, past simple, and past participle — plus a quiz to test yourself.',
  },
  {
    id: 'commonly-confused-words-page',
    title: 'Commonly Confused English Words',
    category: 'Vocabulary',
    url: '/commonly-confused-words',
    snippet:
      'Reference page for commonly confused English word pairs: affect vs effect, your vs you\u2019re, their vs there vs they\u2019re, lay vs lie, and more.',
  },
];

function buildStaticEntries() {
  return STATIC_PAGES.map((p) =>
    buildEntry({
      id: p.id,
      title: p.title,
      category: p.category,
      url: p.url,
      summary: p.snippet,
    })
  );
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

  // Curated static pages (downloads, tools, hubs)
  entries.push(...buildStaticEntries());

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
