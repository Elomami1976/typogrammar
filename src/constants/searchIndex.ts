export type SearchEntryType = 'blog' | 'page';

export interface SearchEntry {
  title: string;
  subtitle: string;
  url: string;
  type: SearchEntryType;
}

/** Lightweight blog post index — no JSX, safe to include in main bundle */
export const BLOG_SEARCH_INDEX: SearchEntry[] = [
  {
    title: '50 Common Grammar Mistakes in English',
    subtitle: 'Blog · Grammar',
    url: '/blog/common-grammar-mistakes-in-english',
    type: 'blog',
  },
  {
    title: 'Grammatical Range and Accuracy in IELTS: Full Guide',
    subtitle: 'Blog · Test Preparation',
    url: '/blog/grammatical-range-and-accuracy-ielts',
    type: 'blog',
  },
  {
    title: 'Academic vs General IELTS: Key Differences (2026 Guide)',
    subtitle: 'Blog · Test Preparation',
    url: '/blog/academic-vs-general-ielts-differences',
    type: 'blog',
  },
  {
    title: '15 Most Common TOEFL iBT Mistakes With Examples',
    subtitle: 'Blog · Test Preparation',
    url: '/blog/15-most-common-toefl-ibt-mistakes-with-examples',
    type: 'blog',
  },
  {
    title: '8 Common TOEFL iBT Mistakes You Should Avoid',
    subtitle: 'Blog · Test Preparation',
    url: '/blog/common-toefl-ibt-mistakes-avoid',
    type: 'blog',
  },
  {
    title: 'How to Use Official TOEFL Practice Online for Maximum Score',
    subtitle: 'Blog · Test Preparation',
    url: '/blog/how-to-use-official-toefl-practice-online',
    type: 'blog',
  },
  {
    title: 'New TOEFL Scoring System 2026: 1–6 Band Scale Guide',
    subtitle: 'Blog · Test Preparation',
    url: '/blog/new-toefl-scoring-system-2026',
    type: 'blog',
  },
];

/** Key static pages for search */
export const STATIC_PAGES_INDEX: SearchEntry[] = [
  // Getting started
  { title: 'Getting Started with TypoGrammar', subtitle: 'Guide', url: '/getting-started', type: 'page' },

  // Grammar reference
  { title: 'Grammar Guide', subtitle: 'Grammar · Reference', url: '/grammar-guide', type: 'page' },
  { title: 'Grammar Glossary', subtitle: 'Grammar · Reference', url: '/grammar-glossary', type: 'page' },
  { title: 'Basic Grammar Terminology', subtitle: 'Grammar · Reference', url: '/grammar-fundamentals/basic-terminology', type: 'page' },
  { title: 'Grammar Mistakes Hub', subtitle: 'Grammar · Mistakes', url: '/grammar-mistakes', type: 'page' },

  // Verb tenses
  { title: 'Verb Tenses – Complete Guide', subtitle: 'Grammar · Tenses', url: '/grammar/verb-tenses', type: 'page' },
  { title: 'Present Simple Tense (SEO Page)', subtitle: 'Grammar · Tenses', url: '/grammar/verb-tenses/present-simple', type: 'page' },
  { title: 'Present Progressive Tense', subtitle: 'Grammar · Tenses', url: '/grammar/verb-tenses/present-progressive', type: 'page' },
  { title: 'Past Simple Tense', subtitle: 'Grammar · Tenses', url: '/grammar/verb-tenses/past-simple', type: 'page' },
  { title: 'Past Progressive Tense', subtitle: 'Grammar · Tenses', url: '/grammar/verb-tenses/past-progressive', type: 'page' },
  { title: 'Present Perfect Tense', subtitle: 'Grammar · Tenses', url: '/grammar/verb-tenses/present-perfect', type: 'page' },
  { title: 'Past Perfect Tense', subtitle: 'Grammar · Tenses', url: '/grammar/verb-tenses/past-perfect', type: 'page' },
  { title: 'Future Simple Tense', subtitle: 'Grammar · Tenses', url: '/grammar/verb-tenses/future-simple', type: 'page' },
  { title: 'Future Perfect Tense', subtitle: 'Grammar · Tenses', url: '/grammar/verb-tenses/future-perfect', type: 'page' },
  { title: 'Tense Visualizer', subtitle: 'Grammar · Tools', url: '/tense-visualizer', type: 'page' },

  // Vocabulary
  { title: 'Irregular Verbs', subtitle: 'Vocabulary', url: '/irregular-verbs', type: 'page' },
  { title: 'Phrasal Verbs', subtitle: 'Vocabulary', url: '/phrasal-verbs', type: 'page' },
  { title: 'Idioms', subtitle: 'Vocabulary', url: '/idioms', type: 'page' },
  { title: 'Commonly Confused Words', subtitle: 'Vocabulary', url: '/commonly-confused-words', type: 'page' },
  { title: 'Collocations', subtitle: 'Vocabulary', url: '/vocabulary/collocations', type: 'page' },
  { title: 'Homophones, Homonyms & Homographs', subtitle: 'Vocabulary', url: '/vocabulary/homophones-homonyms-homographs', type: 'page' },
  { title: 'Preposition Combinations', subtitle: 'Vocabulary · Grammar', url: '/preposition-combinations', type: 'page' },
  { title: 'Prefixes & Suffixes (Affixes)', subtitle: 'Vocabulary', url: '/prefixes-suffixes', type: 'page' },

  // Writing skills
  { title: 'How to Write an Essay', subtitle: 'Writing Skills', url: '/writing/how-to-write-an-essay', type: 'page' },
  { title: 'Essay Types Guide', subtitle: 'Writing Skills', url: '/essay-types', type: 'page' },
  { title: 'How to Write a Professional Email', subtitle: 'Writing Skills', url: '/writing/how-to-write-a-professional-email', type: 'page' },
  { title: 'How to Build an Argument', subtitle: 'Writing Skills', url: '/writing/how-to-build-an-argument', type: 'page' },
  { title: 'How to Paraphrase', subtitle: 'Writing Skills', url: '/writing/how-to-paraphrase', type: 'page' },
  { title: 'How to Vary Sentence Structure', subtitle: 'Writing Skills', url: '/writing/how-to-vary-sentence-structure', type: 'page' },

  // Reading skills
  { title: 'How to Read Efficiently', subtitle: 'Reading Skills', url: '/reading/how-to-read-efficiently', type: 'page' },
  { title: 'Reading Comprehension Practice', subtitle: 'Reading Skills', url: '/reading/reading-comprehension-practice', type: 'page' },
  { title: 'How to Read Critically', subtitle: 'Reading Skills', url: '/reading/how-to-read-critically', type: 'page' },

  // Pronunciation
  { title: 'Pronunciation of -ed Endings', subtitle: 'Grammar · Pronunciation', url: '/pronunciation-of-ed', type: 'page' },
  { title: 'English Pronunciation Guide', subtitle: 'Pronunciation', url: '/pronunciation', type: 'page' },

  // IELTS
  { title: 'IELTS Writing Task 2 – All Essay Types', subtitle: 'IELTS', url: '/ielts/ielts-writing-task-2-essay-types', type: 'page' },
  { title: 'IELTS Opinion Essay (Band 7–9)', subtitle: 'IELTS · Writing', url: '/ielts/opinion-essay-ielts-band-7-9', type: 'page' },
  { title: 'IELTS Discussion Essay (Band 7–9)', subtitle: 'IELTS · Writing', url: '/ielts/discussion-essay-ielts-band-7-9', type: 'page' },
  { title: 'IELTS Advantages & Disadvantages Essay', subtitle: 'IELTS · Writing', url: '/ielts/advantages-disadvantages-essay-ielts', type: 'page' },
  { title: 'IELTS Problem-Solution Essay', subtitle: 'IELTS · Writing', url: '/ielts/problem-solution-essay-ielts', type: 'page' },
  { title: 'IELTS Two-Part Question Essay', subtitle: 'IELTS · Writing', url: '/ielts/two-part-question-essay-ielts', type: 'page' },
  { title: 'Band 8 IELTS Sample Answers', subtitle: 'IELTS · Resources', url: '/ielts/band-8-ielts-sample-answers', type: 'page' },
  { title: '50 Band 9 IELTS Writing Task 2 Essays', subtitle: 'IELTS · Resources', url: '/ielts/50-band-9-ielts-writing-task-2-sample-essays', type: 'page' },
  { title: 'Conditionals in IELTS Writing', subtitle: 'IELTS · Grammar', url: '/ielts/conditionals-in-ielts', type: 'page' },
  { title: 'Passive Voice in IELTS Writing', subtitle: 'IELTS · Grammar', url: '/ielts/passive-voice-ielts-writing', type: 'page' },
  { title: 'How to Write Complex Sentences for IELTS', subtitle: 'IELTS · Grammar', url: '/ielts/how-to-write-complex-sentences', type: 'page' },
  { title: 'Common Grammar Mistakes in IELTS Writing', subtitle: 'IELTS · Grammar', url: '/ielts/common-grammar-mistakes-ielts-writing', type: 'page' },
  { title: 'Task Achievement in IELTS', subtitle: 'IELTS', url: '/ielts/task-achievement-in-ielts', type: 'page' },
  { title: 'Lexical Resource in IELTS', subtitle: 'IELTS · Vocabulary', url: '/ielts/lexical-resource-in-ielts', type: 'page' },
  { title: 'IELTS Vocabulary for Band 6', subtitle: 'IELTS · Vocabulary', url: '/ielts/vocabulary/band-6', type: 'page' },
  { title: 'IELTS Vocabulary for Band 7', subtitle: 'IELTS · Vocabulary', url: '/ielts/vocabulary/band-7', type: 'page' },
  { title: 'IELTS Vocabulary for Band 8', subtitle: 'IELTS · Vocabulary', url: '/ielts/vocabulary/band-8', type: 'page' },
  { title: 'IELTS Vocabulary for Band 9', subtitle: 'IELTS · Vocabulary', url: '/ielts/vocabulary/band-9', type: 'page' },
  { title: 'IELTS Academic Vocabulary Book (Free PDF)', subtitle: 'IELTS · Free Books', url: '/ielts/academic-vocabulary-book', type: 'page' },
  { title: 'IELTS Idioms Book (Free PDF)', subtitle: 'IELTS · Free Books', url: '/ielts/idioms-book', type: 'page' },
  { title: 'IELTS Grammar Master Book (Free PDF)', subtitle: 'IELTS · Free Books', url: '/ielts/grammar-master-book', type: 'page' },
  { title: '50 Complex Sentences for IELTS PDF', subtitle: 'IELTS · Free Books', url: '/ielts/50-complex-sentences-for-ielts-pdf', type: 'page' },
  { title: 'English Grammar PDF (Free Download)', subtitle: 'IELTS · Free Books', url: '/ielts/english-grammar-pdf', type: 'page' },
  { title: 'Is IELTS Getting Harder in 2026?', subtitle: 'IELTS · Strategy', url: '/ielts/is-ielts-getting-harder-2026', type: 'page' },
  { title: 'Why Am I Stuck at 6.5 in IELTS?', subtitle: 'IELTS · Strategy', url: '/ielts/why-stuck-at-6-5', type: 'page' },
  { title: 'How to Prepare for IELTS in 3 Days', subtitle: 'IELTS · Strategy', url: '/ielts/ielts-in-3-days', type: 'page' },
  { title: 'IELTS Band Score Calculator', subtitle: 'IELTS · Tools', url: '/ielts-band-score-calculator', type: 'page' },
  { title: 'IELTS Mock Tests', subtitle: 'IELTS · Practice', url: '/ielts/tests', type: 'page' },

  // TOEFL
  { title: 'TOEFL Reading Section Explained', subtitle: 'TOEFL · Reading', url: '/toefl/reading-section-explained', type: 'page' },
  { title: 'TOEFL Reading Strategies', subtitle: 'TOEFL · Reading', url: '/toefl/reading-strategies', type: 'page' },
  { title: 'TOEFL Reading Question Types', subtitle: 'TOEFL · Reading', url: '/toefl/reading-question-types', type: 'page' },
  { title: 'TOEFL Writing Task 1 Explained', subtitle: 'TOEFL · Writing', url: '/toefl/writing-task-1-explained', type: 'page' },
  { title: 'TOEFL Writing Task 2 Explained', subtitle: 'TOEFL · Writing', url: '/toefl/writing-task-2-explained', type: 'page' },
  { title: 'TOEFL Writing Templates', subtitle: 'TOEFL · Writing', url: '/toefl/writing-templates', type: 'page' },
  { title: 'Old TOEFL vs New TOEFL 2026', subtitle: 'TOEFL · Strategy', url: '/toefl/old-toefl-vs-new-toefl-2026', type: 'page' },
  { title: 'TOEFL 2026 Scoring System', subtitle: 'TOEFL · Strategy', url: '/toefl/2026-scoring', type: 'page' },
  { title: 'TOEFL Reading Practice PDF (Free)', subtitle: 'TOEFL · Free PDFs', url: '/toefl/reading-practice-pdf', type: 'page' },
  { title: 'TOEFL Vocabulary PDF (Free)', subtitle: 'TOEFL · Free PDFs', url: '/toefl/vocabulary-pdf', type: 'page' },
  { title: 'TOEFL Writing PDF (Free)', subtitle: 'TOEFL · Free PDFs', url: '/toefl/writing-pdf', type: 'page' },

  // Tools & practice
  { title: 'Grammar Checker (Writing Assistant)', subtitle: 'Tools', url: '/grammar-checker', type: 'page' },
  { title: 'Writing Assistant & Grammar Checker', subtitle: 'Tools', url: '/writing-assistant', type: 'page' },
  { title: 'Paraphrasing Tool', subtitle: 'Tools', url: '/paraphrasing-tool', type: 'page' },
  { title: 'Free Paraphrasing Tool (No Login)', subtitle: 'Tools', url: '/free-paraphrasing-tool-without-login', type: 'page' },
  { title: 'AI Writing Tools for English', subtitle: 'Tools', url: '/ai-writing-tools', type: 'page' },
  { title: 'AI Prompts for English Learning', subtitle: 'Tools', url: '/ai-prompts', type: 'page' },
  { title: 'Essay Topic Generator', subtitle: 'Tools', url: '/essay-topic-generator', type: 'page' },
  { title: 'Interactive Exercises', subtitle: 'Practice', url: '/interactive-exercises', type: 'page' },
  { title: 'Flashcards & Practice Tools', subtitle: 'Practice', url: '/practice-tools', type: 'page' },
  { title: 'Worksheets', subtitle: 'Practice', url: '/worksheets', type: 'page' },
  { title: 'Verb Tenses Quiz', subtitle: 'Practice · Quizzes', url: '/quizzes/verb-tenses-quiz', type: 'page' },

  // Other
  { title: 'Blog', subtitle: 'Articles & Lessons', url: '/blog', type: 'page' },
  { title: 'FAQ', subtitle: 'Help', url: '/faq', type: 'page' },
  { title: 'For Teachers', subtitle: 'Resources', url: '/teacher', type: 'page' },
  { title: 'About TypoGrammar', subtitle: 'Site', url: '/about', type: 'page' },
  { title: 'Contact', subtitle: 'Site', url: '/contact', type: 'page' },
  { title: 'Progress Tracker', subtitle: 'Your Learning', url: '/progress', type: 'page' },
];
