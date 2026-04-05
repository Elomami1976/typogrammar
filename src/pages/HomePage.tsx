
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import GoogleAd from '../components/GoogleAd';
import SchemaMarkup from '../components/SchemaMarkup';
import { useLanguage } from '../contexts/LanguageContext';
import MailchimpForm from '../components/MailchimpForm';

const CATEGORY_STYLES: Record<string, { bar: string; badge: string; label: string }> = {
  'Grammar': { bar: 'bg-orange-400', badge: 'text-orange-700 bg-orange-50 dark:bg-orange-900/30 dark:text-orange-300', label: 'GRAMMAR' },
  'Test Preparation': { bar: 'bg-blue-500', badge: 'text-blue-700 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-300', label: 'TEST PREP' },
  'Vocabulary': { bar: 'bg-purple-500', badge: 'text-purple-700 bg-purple-50 dark:bg-purple-900/30 dark:text-purple-300', label: 'VOCABULARY' },
  'Writing': { bar: 'bg-teal-500', badge: 'text-teal-700 bg-teal-50 dark:bg-teal-900/30 dark:text-teal-300', label: 'WRITING' },
  'IELTS': { bar: 'bg-blue-500', badge: 'text-blue-700 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-300', label: 'IELTS' },
  'TOEFL': { bar: 'bg-green-500', badge: 'text-green-700 bg-green-50 dark:bg-green-900/30 dark:text-green-300', label: 'TOEFL' },
};

const getCatStyle = (category: string) =>
  CATEGORY_STYLES[category] ?? { bar: 'bg-slate-400', badge: 'text-slate-700 bg-slate-100 dark:bg-slate-700 dark:text-slate-300', label: category.toUpperCase() };

const estimateReadTime = (summary: string) => Math.max(4, Math.ceil(summary.split(' ').length / 15));

const getDateLabel = (dateStr: string): string => {
  const d = new Date(dateStr);
  const diff = Math.floor((Date.now() - d.getTime()) / 86400000);
  if (diff < 1) return 'Today';
  if (diff < 7) return `${diff} day${diff === 1 ? '' : 's'} ago`;
  if (diff < 30) return `${Math.floor(diff / 7)} week${Math.floor(diff / 7) === 1 ? '' : 's'} ago`;
  if (diff < 365) return `${Math.floor(diff / 30)} month${Math.floor(diff / 30) === 1 ? '' : 's'} ago`;
  return `${Math.floor(diff / 365)} year${Math.floor(diff / 365) === 1 ? '' : 's'} ago`;
};

const WORDS_OF_THE_DAY = [
  { word: 'Meticulous', pos: 'adjective', def: 'Showing great attention to detail; very careful and precise.', example: 'She kept meticulous records of every student\'s progress.' },
  { word: 'Eloquent', pos: 'adjective', def: 'Fluent or persuasive in speaking or writing.', example: 'The lawyer gave an eloquent argument that convinced the jury.' },
  { word: 'Concise', pos: 'adjective', def: 'Giving a lot of information clearly and in a few words.', example: 'Write a concise summary of the article in under 100 words.' },
  { word: 'Ambiguous', pos: 'adjective', def: 'Open to more than one interpretation; not clear.', example: 'The instructions were ambiguous, so students made different choices.' },
  { word: 'Persevere', pos: 'verb', def: 'To continue doing something despite difficulty or delay.', example: 'You must persevere through the hard chapters to master grammar.' },
  { word: 'Coherent', pos: 'adjective', def: 'Logical and consistent; forming a unified whole.', example: 'Her essay was coherent and easy to follow from start to finish.' },
  { word: 'Nuance', pos: 'noun', def: 'A subtle difference in meaning, expression, or sound.', example: 'Understanding the nuances of "say" vs "tell" takes practice.' },
  { word: 'Pragmatic', pos: 'adjective', def: 'Dealing with things sensibly and practically.', example: 'Take a pragmatic approach: learn the most common words first.' },
  { word: 'Verbose', pos: 'adjective', def: 'Using more words than needed; wordy.', example: 'IELTS examiners penalise verbose writing that lacks clarity.' },
  { word: 'Paraphrase', pos: 'verb', def: 'To express the meaning of something using different words.', example: 'Always paraphrase the question in your IELTS essay introduction.' },
  { word: 'Scrutinise', pos: 'verb', def: 'To examine or inspect closely and thoroughly.', example: 'Scrutinise your writing for subject-verb agreement errors.' },
  { word: 'Syntax', pos: 'noun', def: 'The arrangement of words and phrases to create well-formed sentences.', example: 'Good syntax helps make your writing clear and professional.' },
  { word: 'Idiomatic', pos: 'adjective', def: 'Using natural expressions typical of a native speaker.', example: 'Idiomatic English sounds fluent and natural to listeners.' },
  { word: 'Lexical', pos: 'adjective', def: 'Relating to the words or vocabulary of a language.', example: 'Lexical resource is one of the four IELTS Writing band criteria.' },
  { word: 'Infer', pos: 'verb', def: 'To conclude from evidence rather than from explicit statements.', example: 'From the context, you can infer the meaning of unknown words.' },
  { word: 'Redundant', pos: 'adjective', def: 'No longer needed or useful; superfluous.', example: '"Free gift" is redundant — all gifts are free by definition.' },
  { word: 'Collocation', pos: 'noun', def: 'A natural combination of words that frequently occur together.', example: '"Make a decision" is a common collocation in English.' },
  { word: 'Rhetoric', pos: 'noun', def: 'Persuasive language used effectively in writing or speech.', example: 'Good IELTS essays use rhetoric to strengthen their arguments.' },
  { word: 'Succinct', pos: 'adjective', def: 'Briefly and clearly expressed.', example: 'Keep your thesis statement succinct and direct.' },
  { word: 'Diligent', pos: 'adjective', def: 'Having or showing care and effort in work or duties.', example: 'Diligent daily practice is the key to mastering English.' },
  { word: 'Articulate', pos: 'verb / adjective', def: 'To express thoughts clearly; (adj) able to speak fluently.', example: 'Try to articulate your ideas clearly in the speaking exam.' },
  { word: 'Comprehend', pos: 'verb', def: 'To grasp the nature, significance, or meaning of something.', example: 'Read the paragraph twice to fully comprehend its meaning.' },
  { word: 'Clause', pos: 'noun', def: 'A unit of grammatical organisation containing a subject and verb.', example: 'A complex sentence has a main clause and a subordinate clause.' },
  { word: 'Supplement', pos: 'verb', def: 'To add something to complete or enhance.', example: 'Supplement your grammar study with regular reading.' },
  { word: 'Exemplify', pos: 'verb', def: 'To be or give a typical example of something.', example: 'This sentence exemplifies correct use of the present perfect.' },
  { word: 'Modify', pos: 'verb', def: 'To make partial changes; to make less extreme.', example: 'Adjectives modify nouns; adverbs modify verbs.' },
  { word: 'Accentuate', pos: 'verb', def: 'To make more noticeable or prominent.', example: 'Vary your sentence length to accentuate your key ideas.' },
  { word: 'Proficient', pos: 'adjective', def: 'Competent or skilled at something.', example: 'Aim to become proficient in academic writing for your exams.' },
  { word: 'Elaborate', pos: 'verb', def: 'To give more detail or explanation about something.', example: 'Always elaborate on your main point with specific examples.' },
  { word: 'Substantiate', pos: 'verb', def: 'To provide evidence to support or prove something.', example: 'Substantiate every claim in your essay with relevant facts.' },
  { word: 'Transition', pos: 'noun', def: 'A word or phrase that connects ideas between sentences or paragraphs.', example: '"Furthermore" and "however" are common transition words.' },
];

interface LastTopic { id: string; title: string; category: string; }
interface HomePost { slug: string; title: string; summary: string; date: string; category: string; }

const HomePage: React.FC = () => {
  const { t } = useLanguage();
  const [lastTopic, setLastTopic] = useState<LastTopic | null>(null);
  const [homePosts, setHomePosts] = useState<HomePost[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('lastVisitedTopic');
      if (stored) setLastTopic(JSON.parse(stored));
    } catch {}
  }, []);

  // Lazy-load blog posts after initial render to avoid blocking LCP
  useEffect(() => {
    import('../constants/blogPosts').then(({ BLOG_POSTS }) => {
      setHomePosts((BLOG_POSTS as HomePost[]).slice(0, 6));
    });
  }, []);

  const todayWord = WORDS_OF_THE_DAY[Math.floor(Date.now() / 86400000) % WORDS_OF_THE_DAY.length];
  
  usePageMetadata({
    title: 'TypoGrammar: Free English Grammar, IELTS & TOEFL Prep, AI Writing Tools',
    description: 'Master English with free grammar lessons, IELTS & TOEFL test preparation, AI writing tools (grammar checker, paraphraser), vocabulary building, idioms, phrasal verbs, and interactive quizzes. Perfect for ESL students and professionals.',
    canonical: 'https://typogrammar.com/'
  });

  return (
    <div>
      <SchemaMarkup
        type="EducationalOrganization"
        data={{
          name: 'TypoGrammar',
          description: 'Free online English grammar learning platform',
          url: 'https://typogrammar.com',
          areaServed: 'Worldwide',
          teaches: 'English Grammar'
        }}
      />
      {/* ═══════════════════ HERO — Split Screen ═══════════════════ */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 mb-8 sm:mb-12">
        {/* Dot-grid texture */}
        <div className="hero-dot-grid absolute inset-0 pointer-events-none" aria-hidden="true" />

        <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-center p-6 sm:p-8 md:p-10 lg:p-12">
          {/* Left: Headline + CTAs */}
          <div className="flex-1 text-left">
            {/* Live badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-3 py-1.5 rounded-full mb-5">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0" aria-hidden="true" />
              Free · No sign-up · IELTS &amp; TOEFL trusted
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 tracking-tight">
              Fix Your English Mistakes{' '}
              <span className="text-blue-200">Before They Cost You</span>
            </h2>

            <p className="text-blue-100 text-base sm:text-lg mb-8 max-w-lg leading-relaxed">
              AI grammar checker + 100+ interactive lessons. No Grammarly subscription needed — it's 100% free and built for exam prep.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-7">
              <Link
                to="/grammar-checker"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-bold text-blue-700 bg-white rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transform"
              >
                <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Check My Grammar Free
              </Link>
              <Link
                to="/getting-started"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-bold text-white border-2 border-white/50 rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                Start Learning
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-blue-200">
              {['No sign-up', '100% free', 'IELTS & TOEFL prep', 'Instant results'].map(label => (
                <span key={label} className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Grammar checker UI preview */}
          <div className="w-full lg:w-auto lg:flex-shrink-0 lg:max-w-sm xl:max-w-md">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-white/10">
              {/* Fake browser bar */}
              <div className="bg-slate-800 px-4 py-2.5 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500" aria-hidden="true" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" aria-hidden="true" />
                <span className="w-3 h-3 rounded-full bg-green-500" aria-hidden="true" />
                <span className="ml-2 text-slate-400 text-xs font-mono truncate">typogrammar.com/grammar-checker</span>
              </div>
              <div className="p-5">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Your text</p>
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-3 text-sm leading-relaxed">
                  She{' '}
                  <span className="bg-red-200 text-red-800 px-1 rounded line-through">don't</span>{' '}
                  know the answer. I have{' '}
                  <span className="bg-red-200 text-red-800 px-1 rounded line-through">went</span>{' '}
                  there yesterday.
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-red-100 text-red-700 text-xs font-semibold rounded-full">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                    2 errors found
                  </span>
                </div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">AI correction</p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4 text-sm leading-relaxed">
                  She{' '}
                  <span className="bg-green-200 text-green-800 px-1 rounded font-semibold">doesn't</span>{' '}
                  know the answer. I{' '}
                  <span className="bg-green-200 text-green-800 px-1 rounded font-semibold">went</span>{' '}
                  there yesterday.
                </div>
                <Link
                  to="/grammar-checker"
                  className="block w-full text-center py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors text-sm shadow-md"
                >
                  Try Free Grammar Checker →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════ OUTCOME FEATURE CARDS ═══════════════════ */}

      {/* Continue Learning + Word of The Day */}
      {(lastTopic || todayWord) && (
        <div className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-12">
          {/* Continue where you left off */}
          {lastTopic && (
            <div className="flex-1 flex items-center gap-4 bg-indigo-50 border border-indigo-200 rounded-xl p-4 shadow-sm">
              <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-lg" aria-hidden="true">📖</div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold uppercase tracking-wider text-indigo-500 mb-0.5">Continue where you left off</p>
                <p className="font-semibold text-slate-800 truncate text-sm">{lastTopic.title}</p>
                <p className="text-xs text-slate-500">{lastTopic.category}</p>
              </div>
              <Link
                to={`/topics/${lastTopic.id}`}
                className="flex-shrink-0 px-4 py-2 bg-indigo-600 text-white text-sm font-bold rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Resume →
              </Link>
            </div>
          )}

          {/* Word of the Day */}
          <div className={`flex items-start gap-4 bg-gradient-to-br from-violet-50 to-indigo-50 border border-indigo-100 rounded-xl p-4 shadow-sm ${lastTopic ? 'flex-1' : 'w-full'}`}>
            <div className="flex-shrink-0 w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center text-lg" aria-hidden="true">✨</div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold uppercase tracking-wider text-violet-500 mb-0.5">Word of the Day</p>
              <p className="font-heading font-bold text-slate-900 text-lg leading-tight">
                {todayWord.word}
                <span className="ml-2 text-xs font-normal text-violet-500 italic">{todayWord.pos}</span>
              </p>
              <p className="text-sm text-slate-600 mt-0.5">{todayWord.def}</p>
              <p className="text-sm text-slate-400 italic mt-0.5">"{todayWord.example}"</p>
            </div>
            <Link
              to="/vocabulary/collocations"
              className="flex-shrink-0 text-xs font-semibold text-violet-600 hover:text-violet-700 whitespace-nowrap mt-1"
            >
              More words →
            </Link>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 sm:mb-12">
        {[
          {
            emoji: '🔬',
            color: 'blue',
            title: 'Fix essay errors in seconds',
            desc: 'Paste your writing. Get instant AI corrections. Understand exactly why.',
            cta: 'Open Grammar Checker',
            to: '/grammar-checker',
          },
          {
            emoji: '📚',
            color: 'indigo',
            title: 'Stop confusing tenses forever',
            desc: 'Master all 12 English tenses with visuals, examples & quizzes.',
            cta: 'Learn Verb Tenses',
            to: '/grammar/verb-tenses',
          },
          {
            emoji: '🎯',
            color: 'emerald',
            title: 'Score higher on IELTS & TOEFL',
            desc: 'Purpose-built prep: band-specific vocabulary, sample essays & strategies.',
            cta: 'Start IELTS Prep',
            to: '/ielts/ielts-writing-task-2-essay-types',
          },
          {
            emoji: '💬',
            color: 'purple',
            title: 'Build vocabulary that sticks',
            desc: 'Idioms, phrasal verbs, collocations & confused words — all in one place.',
            cta: 'Explore Vocabulary',
            to: '/commonly-confused-words',
          },
        ].map(card => (
          <Link
            key={card.title}
            to={card.to}
            className="group block bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="text-3xl mb-3">{card.emoji}</div>
            <h3 className="font-heading font-bold text-slate-900 text-base mb-2 group-hover:text-blue-600 transition-colors">{card.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">{card.desc}</p>
            <span className="text-sm font-semibold text-blue-600 group-hover:underline flex items-center gap-1">
              {card.cta}
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        ))}
      </div>

      {/* ═══════════════════ LATEST LESSONS ═══════════════════ */}
      <div className="mb-8 sm:mb-12">
        {/* Section header */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-1">Grammar Blog</p>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">Latest lessons</h2>
          </div>
          <Link
            to="/blog"
            className="text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 flex items-center gap-1 whitespace-nowrap shrink-0 ml-4"
          >
            View all articles
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {homePosts.map(post => {
            const cs = getCatStyle(post.category);
            return (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group flex flex-col bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className={`h-1.5 w-full ${cs.bar}`} />
                <div className="flex flex-col flex-1 p-5">
                  <span className={`inline-block self-start text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded mb-3 ${cs.badge}`}>
                    {cs.label}
                  </span>
                  <h3 className="font-heading font-bold text-slate-900 dark:text-white text-base leading-snug mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-3">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4 line-clamp-2 flex-1">
                    {post.summary}
                  </p>
                  <p className="text-xs text-slate-400 dark:text-slate-500">
                    {getDateLabel(post.date)} · {estimateReadTime(post.summary)} min read
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-8 sm:mt-12 bg-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-900 dark:border-slate-700 dark:shadow-slate-900/50">
        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6 dark:text-white">{t.whatIsTypoGrammar}</h3>
        <p className="font-body text-base sm:text-lg text-slate-700 leading-relaxed mb-4 dark:text-slate-100">
          {t.whatIsTypoGrammarText1}
        </p>
        <p className="font-body text-lg text-slate-700 leading-relaxed mb-4 dark:text-slate-100">
          {t.whatIsTypoGrammarText2}
        </p>
        <p className="font-body text-lg text-slate-700 leading-relaxed dark:text-slate-100">
          {t.whatIsTypoGrammarText3}
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-6 sm:mt-8 bg-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-900 dark:border-slate-700 dark:shadow-slate-900/50">
        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6 dark:text-white">{t.whatYouCanLearn}</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 dark:bg-blue-900/40">
              <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
            </div>
            <p className="font-body text-lg text-slate-700 dark:text-slate-100"><strong>{t.verbTensesTitle}</strong> {t.verbTensesDesc}</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 dark:bg-blue-900/40">
              <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
            </div>
            <p className="font-body text-lg text-slate-700 dark:text-slate-100"><strong>{t.sentenceStructureTitle}</strong> {t.sentenceStructureDesc}</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 dark:bg-blue-900/40">
              <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
            </div>
            <p className="font-body text-lg text-slate-700 dark:text-slate-100"><strong>{t.partsOfSpeechTitle}</strong> {t.partsOfSpeechDesc}</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 dark:bg-blue-900/40">
              <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
            </div>
            <p className="font-body text-lg text-slate-700 dark:text-slate-100"><strong>{t.punctuationTitle}</strong> {t.punctuationDesc}</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 dark:bg-blue-900/40">
              <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
            </div>
            <p className="font-body text-lg text-slate-700 dark:text-slate-100"><strong>{t.writingSkillsTitle}</strong> {t.writingSkillsDesc}</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 dark:bg-blue-900/40">
              <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
            </div>
            <p className="font-body text-lg text-slate-700 dark:text-slate-100"><strong>{t.commonMistakesTitle}</strong> {t.commonMistakesDesc}</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 dark:bg-blue-900/40">
              <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
            </div>
            <p className="font-body text-lg text-slate-700 dark:text-slate-100"><strong>{t.interactivePracticeTitle}</strong> {t.interactivePracticeDesc}</p>
          </div>
        </div>
      </div>

      {/* YouTube Video Section - Lazy loaded */}
      <div className="max-w-4xl mx-auto mt-6 sm:mt-8">
        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg border border-slate-200 dark:bg-slate-900 dark:border-slate-700">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6 text-center dark:text-white">{t.learnWithVideo}</h3>
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/J7Lvo9Aig9M?rel=0"
              title="English Grammar Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Action Buttons Section */}
      <div className="max-w-4xl mx-auto mt-6 sm:mt-8">
        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg border border-slate-200 dark:bg-slate-900 dark:border-slate-700">
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 mb-4 text-center dark:text-white">Ready to Improve Your English?</h3>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center flex-wrap">
            <Link 
              to="/getting-started" 
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              {t.startLearningNow}
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link 
              to="/grammar-guide" 
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold text-blue-600 bg-white border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200 dark:bg-slate-800 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-slate-700"
            >
              {t.browseAllTopics}
            </Link>
            <Link 
              to="/quizzes/verb-tenses-quiz" 
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors duration-200 shadow-lg hover:shadow-xl dark:bg-purple-500 dark:hover:bg-purple-600"
            >
              📝 Take Verb Tenses Quiz
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-6 sm:mt-8 bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl shadow-lg border border-blue-100 dark:bg-slate-900 dark:border-slate-700">
        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6 dark:text-white">{t.whyTypoGrammarFree}</h3>
        <p className="font-body text-lg text-slate-700 leading-relaxed mb-4 dark:text-slate-100">
          {t.whyFreeText1}
        </p>
        <p className="font-body text-lg text-slate-700 leading-relaxed mb-4 dark:text-slate-100">
          {t.whyFreeText2}
        </p>
        <p className="font-body text-lg text-slate-700 leading-relaxed mb-6 dark:text-slate-100">
          {t.whyFreeText3}
        </p>
        <div className="flex justify-center">
          <Link 
            to="/worksheets" 
            className="inline-flex items-center justify-center px-6 py-3 text-lg font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {t.downloadFreeWorksheets}
          </Link>
        </div>
      </div>

        <div className="max-w-3xl mx-auto mt-6 sm:mt-8">
          <GoogleAd adSlot="6406598038" />
        </div>

      {/* ═══════════════════ TESTIMONIALS ═══════════════════ */}
      <div className="mt-12 sm:mt-16">
        <div className="text-center mb-8">
          <span className="inline-block text-sm font-semibold tracking-widest text-blue-600 uppercase mb-2">What learners say</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">Real results from real students</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {[
            {
              name: 'Amina R.',
              role: 'IELTS Candidate · Band 7.5',
              flag: '🇸🇦',
              avatar: 'AR',
              avatarColor: 'bg-indigo-100 text-indigo-700',
              quote: 'I went from 6.0 to 7.5 in just 6 weeks. The grammar checker caught mistakes I never noticed, and the IELTS essay guides are incredibly detailed. I recommended TypoGrammar to everyone in my study group.',
              stars: 5,
            },
            {
              name: 'Chuks O.',
              role: 'TOEFL Prep · ESL Teacher',
              flag: '🇳🇬',
              avatar: 'CO',
              avatarColor: 'bg-violet-100 text-violet-700',
              quote: 'Finally a free resource that actually explains the *why* behind grammar rules. My students love the verb tenses visualizer — it makes abstract concepts click instantly. Nothing else comes close.',
              stars: 5,
            },
            {
              name: 'Sofia M.',
              role: 'University Student · Spain',
              flag: '🇪🇸',
              avatar: 'SM',
              avatarColor: 'bg-emerald-100 text-emerald-700',
              quote: 'The phrasal verbs and idioms sections are gold. I use TypoGrammar every day before my English classes. The quizzes keep me motivated and I can see my progress clearly.',
              stars: 5,
            },
            {
              name: 'Takeshi K.',
              role: 'Business Professional · Japan',
              flag: '🇯🇵',
              avatar: 'TK',
              avatarColor: 'bg-orange-100 text-orange-700',
              quote: 'I needed to improve my business email writing fast. The professional email guide and AI writing tools helped me write confident, error-free emails within days. My manager noticed immediately.',
              stars: 5,
            },
          ].map(t => (
            <div
              key={t.name}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col gap-4 hover:shadow-md transition-shadow duration-200"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              {/* Quote */}
              <p className="font-body text-slate-700 text-sm leading-relaxed flex-1">"{t.quote}"</p>
              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${t.avatarColor}`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{t.flag} {t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

        <MailchimpForm />
    </div>
  );
};

export default HomePage;
