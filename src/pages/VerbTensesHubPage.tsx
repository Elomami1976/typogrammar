import React from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading } from '../components/ArticleComponents';
import SchemaMarkup from '../components/SchemaMarkup';

const VerbTensesHubPage: React.FC = () => {
  usePageMetadata({
    title: 'Verb Tenses in English: Complete Guide to All 12 Tenses',
    description: 'Learn all 12 English verb tenses with clear definitions, examples, and comparisons. Master when to use each tense correctly.',
    canonical: 'https://typogrammar.com/grammar/verb-tenses'
  });

  const tenseLinks = [
    { title: 'What Is the Present Simple Tense?', url: '/grammar/verb-tenses/present-simple' },
    { title: 'What Is the Present Progressive Tense?', url: '/grammar/verb-tenses/present-progressive' },
    { title: 'What Is the Past Simple Tense?', url: '/grammar/verb-tenses/past-simple' },
    { title: 'What Is the Past Progressive Tense?', url: '/grammar/verb-tenses/past-progressive' },
    { title: 'What Is the Present Perfect Tense?', url: '/grammar/verb-tenses/present-perfect' },
    { title: 'What Is the Present Perfect Progressive Tense?', url: '/grammar/verb-tenses/present-perfect-progressive' },
    { title: 'What Is the Past Perfect Tense?', url: '/grammar/verb-tenses/past-perfect' },
    { title: 'What Is the Past Perfect Progressive Tense?', url: '/grammar/verb-tenses/past-perfect-progressive' },
    { title: 'What Is the Future Simple Tense?', url: '/grammar/verb-tenses/future-simple' },
    { title: 'What Is the Future Progressive Tense?', url: '/grammar/verb-tenses/future-progressive' },
    { title: 'What Is the Future Perfect Tense?', url: '/grammar/verb-tenses/future-perfect' },
    { title: 'What Is the Future Perfect Progressive Tense?', url: '/grammar/verb-tenses/future-perfect-progressive' },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Verb Tenses in English: Complete Guide to All 12 Tenses",
    "author": {
      "@type": "Organization",
      "name": "TypoGrammar Editorial Team",
      "url": "https://typogrammar.com/about/editorial-team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "TypoGrammar",
      "url": "https://typogrammar.com"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://typogrammar.com/grammar/verb-tenses"
    },
    "dateModified": "2026-01-27"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
            {
              "@type": "Question",
              "name": "What is a verb tense?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A verb tense is a grammatical form that shows when an action happens—in the past, present, or future. English has 12 main verb tenses that combine time (past, present, future) with aspect (simple, progressive, perfect, perfect progressive) to express different meanings about timing, duration, and completion."
              }
            },
            {
              "@type": "Question",
              "name": "How many verb tenses are there in English?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "English has 12 main verb tenses: Present Simple, Present Progressive, Present Perfect, Present Perfect Progressive, Past Simple, Past Progressive, Past Perfect, Past Perfect Progressive, Future Simple, Future Progressive, Future Perfect, and Future Perfect Progressive."
              }
            },
            {
              "@type": "Question",
              "name": "What's the difference between simple and progressive tenses?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Simple tenses describe completed actions, habits, or facts (I walk, I walked, I will walk). Progressive tenses emphasize ongoing actions or temporary situations (I am walking, I was walking, I will be walking). Progressive tenses use 'be' + verb-ing."
              }
            },
            {
              "@type": "Question",
              "name": "What's the difference between present perfect and past simple?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Past simple describes completed actions at a specific past time (I visited London in 2020). Present perfect connects past actions to the present without specifying when (I have visited London). Use past simple with time markers like 'yesterday' or 'last year,' and present perfect with 'ever,' 'never,' 'already,' or 'just.'"
              }
            },
            {
              "@type": "Question",
              "name": "What tense is used for habits?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The present simple tense is used for habits and routines. For example: 'I drink coffee every morning,' 'She goes to the gym on weekends,' 'They study English on Mondays.'"
              }
            },
            {
              "@type": "Question",
              "name": "What tense is used for actions happening now?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The present progressive (also called present continuous) tense is used for actions happening right now. It's formed with am/is/are + verb-ing. For example: 'I am studying,' 'She is working,' 'They are playing.'"
              }
            },
            {
              "@type": "Question",
              "name": "What tense is used for unfinished time?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The present perfect tense is used for actions in unfinished time periods or when the exact time doesn't matter. For example: 'I have finished my homework today' (today isn't finished yet), or 'She has visited Paris' (sometime in her life, time not specified)."
              }
            },
            {
              "@type": "Question",
              "name": "How can I practice verb tenses?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Practice verb tenses by: 1) Taking the TypoGrammar Verb Tenses Quiz, 2) Reading each tense definition page carefully, 3) Creating your own example sentences, 4) Identifying tenses in real English texts, 5) Doing tense transformation exercises, and 6) Using time markers correctly (yesterday → past, already → present perfect, tomorrow → future)."
              }
            }
          ]
  };

  return (
    <>
      <SchemaMarkup type="Article" data={articleSchema} />
      <SchemaMarkup type="FAQPage" data={faqSchema} />

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          Verb Tenses in English
        </h1>

        <ArticleParagraph>
          A verb tense is a grammatical form that shows when an action happens—in the past, present, or future. English has 12 main verb tenses that combine time with aspect (simple, progressive, perfect, perfect progressive) to express different meanings about timing, duration, and completion.
        </ArticleParagraph>

        <ArticleHeading>Verb Tense Definitions</ArticleHeading>
        <ArticleParagraph>
          Select any tense below to learn its definition, rules, examples, common mistakes, and how it compares to similar tenses:
        </ArticleParagraph>

        <div className="space-y-3 my-8">
          {tenseLinks.map((tense, index) => (
            <Link
              key={index}
              to={tense.url}
              className="block p-4 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-lg transition-all duration-200 dark:bg-slate-700/50 dark:border-slate-600 dark:hover:bg-slate-700 dark:hover:border-blue-500"
            >
              <span className="text-lg font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                {tense.title}
              </span>
            </Link>
          ))}
        </div>

        <ArticleHeading>Practice Your Verb Tenses</ArticleHeading>
        <ArticleParagraph>
          Ready to test your knowledge? Take our comprehensive <Link to="/quizzes/verb-tenses-quiz" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold">Verb Tenses Quiz</Link> with 50 questions covering all 12 tenses.
        </ArticleParagraph>

        <div className="bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 p-6 my-8 rounded-lg">
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">About TypoGrammar</h3>
          <ArticleParagraph>
            By <Link to="/about/editorial-team" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold">TypoGrammar Editorial Team</Link>
          </ArticleParagraph>
          <ArticleParagraph>
            TypoGrammar Editorial Team creates independent, grammar-focused educational content to help English learners improve clarity, structure, and accuracy for academic and real-world use.
          </ArticleParagraph>
          <ul className="list-disc list-inside space-y-2 mt-4 text-slate-700 dark:text-slate-300">
            <li>Independent educational content</li>
            <li>No score guarantees</li>
            <li>Not affiliated with ETS/TOEFL/IELTS</li>
            <li>Reviewed for clarity and accuracy</li>
          </ul>
          <p className="text-slate-700 dark:text-slate-300 mt-4">
            <strong>Last reviewed:</strong> 2026<br />
            <strong>Reviewed by:</strong> TypoGrammar Editorial Team
          </p>
        </div>
      </article>
    </>
  );
};

export default VerbTensesHubPage;
