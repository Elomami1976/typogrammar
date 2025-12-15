# TypoGrammar AI Coding Instructions

## Project Overview
TypoGrammar is a React + TypeScript educational web app for English grammar learning, built with Vite and deployed to static hosting (Hostinger). The app uses BrowserRouter for client-side routing and localStorage for progress tracking.

## Architecture

### Content-Driven Design
The app is primarily **content-centric**, not feature-heavy. Most grammar topics, quizzes, blog posts, and vocabulary data live in `src/constants/` as large TypeScript files with React.ReactNode content:
- `grammarTopics.tsx` - Main grammar lessons with JSX content (1700+ lines)
- `quizData.ts` - Quiz questions mapped to topics
- `blogPosts.tsx` - Blog content with embedded components
- `irregularVerbs.ts`, `phrasalVerbs.ts`, `idioms.ts`, `confusedWords.ts`, etc. - Reference data

When adding content, update the relevant constant file. Content uses custom article components from `src/components/ArticleComponents.tsx` (ArticleParagraph, ArticleHeading, InlineCode, CodeBlock, ExampleList, BulletList) and visual aids from `src/components/VisualAids.tsx` (TimelineDiagram, SentenceTransformationDiagram).

**Example content structure pattern:**
```tsx
// In grammarTopics.tsx
{
  id: 'topic-id',
  title: 'Topic Title',
  category: 'Category Name',
  content: (
    <>
      <ArticleParagraph>Introduction text...</ArticleParagraph>
      <ArticleHeading>Section Title</ArticleHeading>
      <ExampleList items={["Example 1", "Example 2"]} />
      <CodeBlock>{`Code or grammar pattern`}</CodeBlock>
    </>
  ),
}
```

### Routing & Code Splitting
- Uses BrowserRouter for clean URLs (requires server-side routing config)
- Entry point: `src/index.tsx` wraps App in `<BrowserRouter>` and context providers (LanguageProvider, ProgressProvider)
- All routes except HomePage are lazy-loaded in `src/App.tsx` with React.lazy()
- Vite config manually chunks react-vendor for optimal loading
- Route pattern: `/topics/:topicId` for grammar topics, direct paths for other pages
- **Server config**: `.htaccess` in `public/` redirects all routes to `index.html` for client-side routing (Apache mod_rewrite required)
- Alternative: `_redirects` file also present in `public/` for Netlify/similar platforms

### State Management
**No Redux or complex state libraries.** Three context-based state patterns:
1. **Global Progress**: `src/contexts/ProgressContext.tsx` provides `useProgress()` hook
   - Tracks completed topics and quiz scores
   - Persists to localStorage via `src/services/progressService.ts`
   - Only updates best scores (doesn't overwrite with lower scores)

2. **Language/i18n**: `src/contexts/LanguageContext.tsx` provides `useLanguage()` hook
   - Manages current language state (Language type from `src/i18n/translations.ts`)
   - Persists to localStorage with key 'language'
   - Sets document.documentElement `lang` and `dir` attributes (rtl for Arabic)
   - Provides `t` object with translations for current language
   - Use `const { language, setLanguage, t, dir } = useLanguage();` to access

3. **Local Component State**: useState for UI interactions (theme, mobile menu, quiz state)

### Styling Approach
- **Tailwind CSS v3.4.0 via npm** (installed as dev dependency, not CDN)
- Dark mode: class-based (`darkMode: 'class'` in tailwind.config.js), toggled via `dark:` prefix
- Dark mode state stored in localStorage and managed in `src/components/Layout.tsx`
- Responsive design with mobile-first breakpoints (md:, lg:)
- Custom fonts: Inter (body), Poppins (headings) loaded from Google Fonts with async optimization
- PostCSS with Tailwind and Autoprefixer for CSS processing
- CSS directives in `src/index.css`: `@tailwind base`, `@tailwind components`, `@tailwind utilities`

### Page Structure
All pages follow this pattern:
```tsx
import usePageMetadata from '../hooks/usePageMetadata';

const SomePage = () => {
  usePageMetadata({
    title: 'Page Title | TypoGrammar',
    description: 'SEO description'
  });
  // Page content
}
```

Layout hierarchy: Layout.tsx → Header + Sidebar + Outlet (page content) + Footer

### Google AdSense Integration
- Publisher ID set in `index.html` head
- Use `<GoogleAd adSlot="..." />` component from `src/components/GoogleAd.tsx`
- Component auto-pushes to adsbygoogle on mount
- Pass `adTest="on"` prop for local testing

## Development Workflow

### Commands
```bash
npm install          # Install dependencies
npm run dev          # Start dev server (usually http://localhost:5173)
npm run build        # Build for production → dist/ folder
npm run preview      # Preview production build locally
```

### Common Development Workflows

**Adding a new grammar topic with quiz:**
```bash
# 1. Add content to grammarTopics.tsx
# 2. Add quiz to quizData.ts with matching topicId
# 3. Test: npm run dev, navigate to /topics/your-topic-id
# 4. Verify quiz integration and progress tracking
```

**Adding a new standalone page:**
```bash
# 1. Create YourPage.tsx in src/pages/
# 2. Add lazy import in App.tsx: const YourPage = lazy(() => import('./pages/YourPage'));
# 3. Add route: <Route path="your-path" element={<YourPage />} />
# 4. Update Sidebar.tsx if navigation link needed
# 5. Test routing and metadata with usePageMetadata hook
```

**Testing dark mode:**
```bash
# Always test both themes when adding new components
# Add dark: variants for all background, text, and border colors
# Example: bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100
```

### Dependencies
- **Runtime**: react, react-dom, react-router-dom (BrowserRouter)
- **Build**: Vite 5.x with TypeScript and @vitejs/plugin-react
- **CSS**: Tailwind CSS v3.4.0, PostCSS, Autoprefixer (all dev dependencies)
- **No state management libraries** - Context API only
- **No testing framework** - manual browser testing

### Build & Deploy
1. `npm run build` creates `dist/` folder with optimized static files (includes `.htaccess` from `public/`)
2. Deploy: Zip contents of `dist/` (NOT the dist folder itself), upload to Hostinger's `public_html`, extract there
3. **Critical**: `.htaccess` file must be present in `public_html` to redirect all routes to `index.html` for BrowserRouter (Apache servers only)
   - For Netlify/Vercel/similar: Use `_redirects` file from `public/` instead
4. Build optimizations in `vite.config.ts`: manual vendor chunking, esbuild minification

### Internationalization (i18n)
- Multi-language support via `src/i18n/translations.ts` and `src/contexts/LanguageContext.tsx`
- Supported languages defined as Language type union (e.g., 'en', 'ar')
- RTL support automatic for Arabic (dir='rtl' set on document.documentElement)
- Access translations: `const { t, language, setLanguage, dir } = useLanguage();`
- LanguageSwitcher component in header allows user to change language
- Language preference persisted to localStorage

### Type System
- Shared types in `src/types.ts`: GrammarTopic, Quiz, BlogPost, IrregularVerb, PhrasalVerb, ConfusedWordSet, etc.
- All content JSX uses `React.ReactNode` for flexible rendering
- Strict TypeScript enabled (tsconfig.json)

## Component Patterns

### Reusable Quiz System
`src/components/Quiz.tsx` is a stateful component managing quiz flow with local state:
- **Props**: Takes `quizData` (Quiz type) and `onQuizComplete` callback
- **State Management**: Tracks currentQuestionIndex, score, selectedAnswer, isAnswered, showScore
- **Flow**: Question → Answer Selection → Check Answer → Next/Finish → Show Results → Retake
- **Integration**: Calls `onQuizComplete(quizId, score, total)` which triggers ProgressContext update
- **Progress Logic**: Only saves if new score > existing score (in ProgressContext.updateQuizScore)

**Quiz Data Structure** (`src/constants/quizData.ts`):
```typescript
{
  topicId: 'present-simple',  // Must match GrammarTopic.id
  title: 'Present Simple Tense Quiz',
  questions: [
    {
      question: 'Which sentence is correct?',
      options: ['Option A', 'Option B', 'Option C'],
      correctAnswer: 1,  // Zero-indexed
      explanation: 'Option B is correct because...'
    }
  ]
}
```

**Using Quiz in TopicPage.tsx:**
```tsx
const quiz = QUIZZES.find(q => q.topicId === topicId);
if (quiz) {
  <Quiz quizData={quiz} onQuizComplete={updateQuizScore} />
}
```

### Article Components
Import from `ArticleComponents.tsx` for consistent content formatting:
- **ArticleParagraph** - Body text with `mb-6` spacing and `text-lg`
- **ArticleHeading** - H3-level headers with bottom border, `mt-10 mb-5`
- **InlineCode** - Inline code with blue background, syntax highlighting style
- **CodeBlock** - Pre-formatted block with dark background, monospace font
- **ExampleList** - Renders string array as InlineCode items in list
- **BulletList** - Renders ReactNode array as bullet points

### Visual Diagrams (`src/components/VisualAids.tsx`)

**TimelineDiagram** - Visualizes tense relationships on a timeline:
```tsx
<TimelineDiagram 
  title="Present Simple Timeline"
  summary="Shows recurring actions over time"
  events={[
    { type: 'point', position: 30, label: 'Event' },
    { type: 'duration', start: 40, end: 60, label: 'Duration' },
    { type: 'now', position: 70, label: 'Now' },
    { type: 'recurring', position: 50, label: 'Habit' },
    { type: 'arrow', start: 20, end: 80, label: 'Process' }
  ]}
/>
```
- **position**: 0-100 representing timeline percentage (0=far past, 100=far future)
- **Event types**: point (dot), duration (bar), now (vertical line), recurring (repeat icon), arrow

**SentenceTransformationDiagram** - Shows active ↔ passive voice transformation:
```tsx
<SentenceTransformationDiagram
  active="The chef cooks the meal."
  passive="The meal is cooked by the chef."
/>
```
- Parses sentences with regex to extract subject/verb/object
- Color-codes parts: blue (subject), green (verb), purple (object/agent)
- Shows visual arrow transformation between voices

### Navigation & Sidebar Pattern
`src/components/Sidebar.tsx` auto-generates navigation from GRAMMAR_TOPICS:
- **Groups topics by category** with collapsible sections (SidebarSection component)
- **Shows completion checkmarks** via ProgressContext (green checkmark SVG)
- **Search functionality** with live filtering and highlighted matches
- **Active state styling**: Blue background for current page, hover states for all links
- **Mobile responsive**: Controlled by `isMobileOpen` prop, closes on route change

## Key Conventions

### File Organization
- Pages in `src/pages/` named `*Page.tsx`
- Components in `src/components/` are mostly presentational
- Constants are the "database" - large data files, not config
- Single context (ProgressContext), single service (progressService)

### Naming
- React components: PascalCase with descriptive names
- Constants: UPPER_SNAKE_CASE exported arrays/objects
- Files: PascalCase for components, camelCase for utilities
- Routes: kebab-case URLs (e.g., `/grammar-guide`, `/topics/present-simple`)

### Adding New Grammar Topics
1. Add topic object to `GRAMMAR_TOPICS` array in `src/constants/grammarTopics.tsx`
2. Include id, title, category, and content (JSX using ArticleComponents)
3. Optionally add quiz to `QUIZZES` in `src/constants/quizData.ts` with matching topicId
4. Topic automatically appears in sidebar (grouped by category)
5. Route `/topics/:topicId` handles rendering

### Adding New Pages
1. Create `SomeNamePage.tsx` in `src/pages/`
2. Import and add to lazy imports in `App.tsx`
3. Add route in Routes section
4. Include usePageMetadata hook for SEO
5. Update sidebar navigation if needed (Header/Sidebar components)

### Key Implementation Patterns

**Page metadata for SEO:**
```tsx
import usePageMetadata from '../hooks/usePageMetadata';

const MyPage = () => {
  usePageMetadata({
    title: 'My Page Title | TypoGrammar',
    description: 'SEO-friendly description under 160 chars'
  });
  // Dynamically updates document.title and meta description tag
}
```

**Progress tracking integration:**
```tsx
import { useProgress } from '../contexts/ProgressContext';

const MyComponent = () => {
  const { progress, toggleTopicCompletion, updateQuizScore } = useProgress();
  
  // Check if topic completed
  const isCompleted = progress.completedTopics.includes('topic-id');
  
  // Toggle completion
  toggleTopicCompletion('topic-id');
  
  // Update quiz score (only saves if better than existing)
  updateQuizScore('quiz-id', 8, 10);
}
```

**Lazy loading pages:**
```tsx
// In App.tsx - all pages except HomePage use lazy loading
const MyPage = lazy(() => import('./pages/MyPage'));

// Wrapped in Suspense with PageLoader fallback
<Suspense fallback={<PageLoader />}>
  <Routes>
    <Route path="/my-path" element={<MyPage />} />
  </Routes>
</Suspense>
```

## Testing & Quality
- No formal test suite currently
- Manual testing in dev server
- Build validation: check bundle size warnings (currently 1000kb limit)
- Cross-browser testing recommended before deploy (focus on mobile Safari, Chrome)

## Common Pitfalls
- **Don't zip the dist folder itself** when deploying - zip its contents
- **BrowserRouter requires server-side routing** - Ensure `.htaccess` (Apache) or `_redirects` (Netlify) file is deployed to redirect all routes to index.html
- **Progress updates** - updateQuizScore only saves if score improves
- **Dark mode classes** - Always include dark: variants for new styles
- **Lazy imports** - Don't forget Suspense fallback when adding new pages
- **i18n support** - When adding new UI text, add translations to `src/i18n/translations.ts` for all languages
