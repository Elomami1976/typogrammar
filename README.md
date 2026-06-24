# TypoGrammar

**TypoGrammar.com** is a free, open educational platform for English learners preparing for **IELTS**, **TOEFL**, and academic study. It delivers grammar lessons, vocabulary by exam band, writing guides, interactive exercises, mock tests, and downloadable resources — all without ads-bloat or paywalls.

Live site: https://typogrammar.com

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build tool | Vite 5 |
| Styling | Tailwind CSS v3 (class-based dark mode) |
| Routing | React Router v6 (BrowserRouter) |
| State | Context API + localStorage |
| Deployment | Hostinger (Apache) — static build via `dist/` |
| i18n | Custom LanguageContext (English / Arabic, RTL-aware) |

---

## Project Structure

```
src/
  App.tsx              # Routes + lazy-loaded pages
  index.tsx            # Entry point (BrowserRouter, providers)
  components/          # Reusable UI (Quiz, ArticleComponents, VisualAids…)
  constants/           # Content "database" — grammarTopics, quizData, blogPosts…
  contexts/            # ProgressContext, LanguageContext
  pages/               # All page components (100+ pages)
  pages/educators/     # TypoGrammar Educators Network
  pages/grammar-mistakes/ # 60+ common-mistake deep-dive pages
  pages/ielts-tests/   # IELTS mock reading tests
  pages/toefl-tests/   # TOEFL mock reading tests (2026 format)
  i18n/                # translations.ts (EN / AR)
  services/            # progressService (localStorage)
  hooks/               # usePageMetadata, etc.
public/
  sitemap.xml          # Auto-generated sitemap
  robots.txt
  sw.js                # Service worker (network-first HTML)
  downloads/           # Free PDF resources
  images/              # Blog / book cover assets
```

---

## Content Areas

### Grammar
- 50+ grammar topics with JSX lessons, timeline diagrams, and sentence-transformation visuals
- Interactive quizzes with score tracking (ProgressContext)
- Common grammar mistakes hub — 60+ dedicated pages (subject-verb agreement, verb forms, preposition errors, word confusion)

### IELTS
- Writing Task 2: opinion, discussion, advantages/disadvantages, problem-solution, two-part questions
- Writing Task 1: bar charts, vocabulary, master guide (PDF)
- IELTS informal letter guide
- Speaking questions bank
- Vocabulary by band (Band 6 – Band 9)
- Academic Reading mock tests
- General Reading mock test
- Listening mock test (Section 1)
- Band score calculator & score conversion tools
- Free downloadable books: Academic Vocabulary, Idioms, Band 9 Essays, Grammar Master, Cue Cards, Writing Task 1 Guide

### TOEFL
- Reading section explained + strategies + question types + time management
- Writing Task 1 & Task 2 explained + templates + practice questions
- Reading practice tests (2026 format — Tests 01, 02, 03)
- Free PDFs: Reading Practice, Vocabulary, Writing guide
- 1000 Speaking Questions
- Old TOEFL vs New TOEFL 2026 comparison
- iBT vs LTP comparison, scoring guide

### Tools & Exercises
- Grammar Checker
- Paraphrasing Tool (with and without login)
- Writing Assistant
- Essay Topic Generator
- AI Writing Tools directory
- Tense Visualizer
- English Level Test
- Verb Tenses Quiz
- Interactive exercises (fill-in-blank, matching, error correction, flashcards)
- Worksheets hub

### Educators Network
- Authors directory with profile pages
- Contributor articles (peer-written content)
- Contributor guidelines

### Blog
- English grammar & exam strategy posts
- Embedded quizzes within blog posts

### Reference
- Irregular Verbs
- Phrasal Verbs
- Idioms
- Collocations
- Commonly Confused Words
- Prefixes & Suffixes
- Homophones, Homonyms & Homographs
- Preposition Combinations
- Glossary

---

## Development

```bash
npm install       # Install dependencies
npm run dev       # Dev server → http://localhost:5173
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
```

**Deployment** (Hostinger / Apache):
1. `npm run build`
2. Zip contents of `dist/` (not the folder itself)
3. Upload & extract to `public_html/`
4. Ensure `.htaccess` is present (included in `public/`) — redirects all routes to `index.html` for client-side routing

---

## Adding Content

**New grammar topic:** add to `src/constants/grammarTopics.tsx` + optional quiz in `src/constants/quizData.ts`. The sidebar auto-generates navigation.

**New page:** create in `src/pages/`, add lazy import + route in `App.tsx`, add `usePageMetadata` hook for SEO.

**Dark mode:** always include `dark:` Tailwind variants for all new background, text, and border colors.

---

## License

Educational and informational use. Free to read; content copyright TypoGrammar.com.
