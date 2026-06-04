
import React, { useState } from 'react';
import { IRREGULAR_VERBS } from '../constants/irregularVerbs';
import IrregularVerbsQuiz from '../components/IrregularVerbsQuiz';
import { ArticleHeading, ArticleParagraph } from '../components/ArticleComponents';
import { useProgress } from '../contexts/ProgressContext';
import GoogleAd from '../components/GoogleAd';
import usePageMetadata from '../hooks/usePageMetadata';
import SchemaMarkup from '../components/SchemaMarkup';
import { Link } from 'react-router-dom';

const IrregularVerbsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { progress, updateQuizScore } = useProgress();
  
  const quizId = 'irregular-verbs';
  const bestScore = progress.quizScores[quizId];
  
  const pageUrl = 'https://typogrammar.com/irregular-verbs';
  const lastUpdated = '2026-02-25';
  const datePublished = '2025-03-15';

  usePageMetadata({
    title: 'Complete List of 200+ Irregular Verbs in English (2026) | Free PDF & Quiz | TypoGrammar',
    description: 'Master all English irregular verbs with our free searchable list of 200+ verbs, past simple & past participle forms, interactive quiz, and downloadable PDF. IELTS, TOEFL & Cambridge exam prep.',
    ogTitle: 'Complete List of 200+ Irregular Verbs in English (2026) | Free PDF & Quiz',
    ogDescription: 'Master all English irregular verbs with our free searchable list of 200+ verbs with past simple & past participle forms.',
    ogType: 'article',
    ogUrl: pageUrl,
  });

  // FAQ data for schema and display
  const faqData = [
    {
      question: 'What are irregular verbs in English?',
      answer: 'Irregular verbs are verbs that don\'t follow the standard -ed pattern for past simple and past participle forms. For example, "go" becomes "went" (past simple) and "gone" (past participle), not "goed".'
    },
    {
      question: 'How many irregular verbs are there in English?',
      answer: 'There are approximately 200 irregular verbs in common use in English. Our comprehensive list includes over 200 of the most important irregular verbs for everyday communication and exam preparation.'
    },
    {
      question: 'What is the best way to memorize irregular verbs?',
      answer: 'The best strategies include: grouping verbs by patterns (sing-sang-sung, ring-rang-rung), using flashcards, practicing with quizzes, reading extensively, and using the verbs in context through speaking and writing.'
    },
    {
      question: 'What is the difference between regular and irregular verbs?',
      answer: 'Regular verbs form their past simple and past participle by adding -ed (walk → walked → walked). Irregular verbs have unique forms that must be memorized (buy → bought → bought, write → wrote → written).'
    },
    {
      question: 'Which irregular verbs are most commonly tested in IELTS and TOEFL?',
      answer: 'The most commonly tested irregular verbs include: be, have, do, go, see, make, take, come, know, get, give, find, think, tell, become, begin, leave, feel, put, bring, and write.'
    },
    {
      question: 'Are there any patterns in irregular verbs?',
      answer: 'Yes, some irregular verbs follow patterns: verbs ending in -ing often change to -ang/-ung (sing-sang-sung), verbs ending in -ow often change to -ew/-own (grow-grew-grown). Learning these patterns can help memorization.'
    }
  ];

  const filteredVerbs = IRREGULAR_VERBS.filter(verb => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    return (
      verb.base.toLowerCase().includes(lowercasedSearchTerm) ||
      verb.pastSimple.toLowerCase().includes(lowercasedSearchTerm) ||
      verb.pastParticiple.toLowerCase().includes(lowercasedSearchTerm)
    );
  });

  return (
    <>
    {/* GEO Meta Tags */}
    <meta name="geo.region" content="Global" />
    <meta name="language" content="English" />
    
    {/* Article Schema */}
    <SchemaMarkup
      type="Article"
      data={{
        headline: 'Complete List of 200+ Irregular Verbs in English (2026) | Free PDF & Quiz',
        description: 'Master all English irregular verbs with our free searchable list of 200+ verbs, past simple & past participle forms, interactive quiz.',
        author: {
          '@type': 'Organization',
          name: 'Typogrammar',
          url: 'https://typogrammar.com/about'
        },
        publisher: {
          '@type': 'Organization',
          name: 'Typogrammar',
          url: 'https://typogrammar.com'
        },
        datePublished: datePublished,
        dateModified: lastUpdated,
        mainEntityOfPage: pageUrl
      }}
    />
    
    {/* FAQ Schema */}
    <SchemaMarkup
      type="FAQPage"
      data={{
        mainEntity: faqData.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      }}
    />
    
    <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
      {/* AI-Friendly Definition Box / Featured Snippet */}
      <div className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-slate-700 dark:to-slate-600 border-l-4 border-blue-600 p-6 rounded-lg mb-8 shadow-md">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Quick Answer:</h2>
        <p className="text-slate-800 dark:text-slate-200 leading-relaxed">
          <strong>Irregular verbs</strong> are English verbs that don't follow the standard -ed rule for past tense. Examples: go → went → gone, be → was/were → been, have → had → had. There are approximately 200 commonly used irregular verbs in English.
        </p>
      </div>
      
      <div className="flex justify-between items-start">
        <div>
          <p className="font-body text-base font-semibold text-blue-600 mb-4 dark:text-blue-400">Verb Reference</p>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight dark:text-slate-100">Complete List of Irregular Verbs (2026)</h1>
          
          {/* E-E-A-T Signals */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-6">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/></svg>
              By <Link to="/about/" className="text-blue-600 dark:text-blue-400 hover:underline">Typogrammar Team</Link>
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/></svg>
              Updated: {lastUpdated}
            </span>
            <span className="flex items-center gap-1 text-green-600 dark:text-green-400">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
              200+ Verbs Included
            </span>
          </div>
        </div>
      </div>
      
      {/* GEO Optimization */}
      <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg mb-8">
        <p className="text-slate-600 dark:text-slate-400 text-sm">
          This irregular verbs reference is designed for English learners worldwide, including those preparing for IELTS, TOEFL, Cambridge, and other international exams. We use neutral global English suitable for academic and professional contexts.
        </p>
      </div>
      
      <div className="mb-8 sticky top-[80px] z-10">
        <input
          id="verbs-search"
          name="verbs-search"
          type="search"
          autoComplete="off"
          placeholder="Search for a verb..."
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-body text-lg transition-shadow duration-200 shadow-sm dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200 dark:focus:ring-blue-500 dark:placeholder-slate-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search irregular verbs"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-lg font-body">
          <thead className="sticky top-[150px] z-5">
            <tr className="bg-slate-100 dark:bg-slate-700">
              <th scope="col" className="px-6 py-4 font-bold text-slate-800 rounded-tl-lg dark:text-slate-200">Base Form</th>
              <th scope="col" className="px-6 py-4 font-bold text-slate-800 dark:text-slate-200">Past Simple</th>
              <th scope="col" className="px-6 py-4 font-bold text-slate-800 rounded-tr-lg dark:text-slate-200">Past Participle</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            {filteredVerbs.length > 0 ? filteredVerbs.map((verb, index) => (
              <tr key={index} className="odd:bg-white even:bg-slate-50 hover:bg-blue-50 transition-colors duration-150 dark:odd:bg-slate-800/50 dark:even:bg-slate-800/20 dark:hover:bg-slate-700/50">
                <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-200">{verb.base}</td>
                <td className="px-6 py-4 text-slate-700 dark:text-slate-300">{verb.pastSimple}</td>
                <td className="px-6 py-4 text-slate-700 dark:text-slate-300">{verb.pastParticiple}</td>
              </tr>
            )) : (
              <tr>
                <td colSpan={3} className="text-center py-12 text-slate-500 dark:text-slate-400">
                  No verbs found. Try a different search term.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
        <div className="flex justify-between items-baseline mb-2">
            <ArticleHeading>Test Your Knowledge</ArticleHeading>
            {bestScore && (
              <p className="font-body text-slate-500 dark:text-slate-400">
                Your best score: <span className="font-bold text-blue-600 dark:text-blue-400">{bestScore.score}/{bestScore.total}</span>
              </p>
            )}
        </div>
        <div className="mt-6">
          <IrregularVerbsQuiz 
            onQuizComplete={(score, total) => updateQuizScore(quizId, score, total)}
          />
        </div>
      <div className="mt-8">
        <GoogleAd adSlot="6406598038" />
      </div>
      </div>
      
      {/* Visible FAQ Section */}
      <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
        <ArticleHeading>Frequently Asked Questions About Irregular Verbs</ArticleHeading>
        <div className="space-y-6 mt-6">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-6 border border-slate-200 dark:border-slate-600">
              <h3 className="font-heading text-xl font-bold text-slate-800 dark:text-slate-200 mb-3">
                {faq.question}
              </h3>
              <ArticleParagraph>{faq.answer}</ArticleParagraph>
            </div>
          ))}
        </div>
      </div>
    </article>
    <div className="mt-8">
      <GoogleAd adSlot="6406598038" />
    </div>
    </>
  );
};

export default IrregularVerbsPage;