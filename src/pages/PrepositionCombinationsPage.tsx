
import React from 'react';
import GoogleAd from '../components/GoogleAd';
import { ArticleParagraph, ArticleHeading } from '../components/ArticleComponents';
import { PREPOSITION_COMBINATIONS } from '../constants/prepositionCombinations';
import usePageMetadata from '../hooks/usePageMetadata';
import SchemaMarkup from '../components/SchemaMarkup';
import { Link } from 'react-router-dom';

const PrepositionCombinationsPage: React.FC = () => {
  const pageUrl = 'https://typogrammar.com/preposition-combinations';
  const lastUpdated = '2026-02-25';
  const datePublished = '2025-03-20';
  
  usePageMetadata({
    title: 'Preposition Combinations with Adjectives & Verbs (2026) | Free List & Examples | TypoGrammar',
    description: 'Master 300+ preposition combinations with verbs, adjectives, and nouns. Free comprehensive list with examples. Essential for IELTS, TOEFL, and Cambridge exam preparation.',
    ogTitle: 'Preposition Combinations with Adjectives & Verbs (2026) | Free List & Examples',
    ogDescription: 'Master 300+ preposition combinations with verbs, adjectives, and nouns. Free comprehensive list with examples.',
    ogType: 'article',
    ogUrl: pageUrl,
  });

  // FAQ data for schema and display
  const faqData = [
    {
      question: 'What are preposition combinations?',
      answer: 'Preposition combinations are fixed phrases where specific prepositions follow certain adjectives, verbs, or nouns. For example, "interested IN," "depend ON," "reason FOR." These combinations must be memorized as they often don\'t follow logical rules.'
    },
    {
      question: 'Why are preposition combinations important for IELTS?',
      answer: 'Preposition combinations are heavily tested in IELTS, especially in Writing and Speaking. Using correct combinations demonstrates native-like fluency and can significantly improve your band score. Incorrect prepositions are common errors that lower scores.'
    },
    {
      question: 'How can I memorize preposition combinations?',
      answer: 'Effective strategies include: learning them in context through reading, grouping by preposition (all "of" combinations together), using flashcards, practicing with sentence completion exercises, and keeping a personal notebook of combinations you encounter.'
    },
    {
      question: 'What are the most common adjective + preposition combinations?',
      answer: 'Common examples include: afraid OF, angry WITH (person)/AT (thing), good AT, interested IN, keen ON, proud OF, responsible FOR, similar TO, worried ABOUT, different FROM. These frequently appear in exams and everyday English.'
    },
    {
      question: 'What are the most common verb + preposition combinations?',
      answer: 'Common examples include: depend ON, consist OF, belong TO, believe IN, apply FOR, look AT, listen TO, wait FOR, agree WITH, apologize FOR. These are essential for natural-sounding English.'
    },
    {
      question: 'What is the difference between preposition combinations and phrasal verbs?',
      answer: 'Preposition combinations follow verbs/adjectives with their original meaning (look at = direct eyes toward). Phrasal verbs have idiomatic meanings different from the base verb (look after = take care of). Both are important for fluency.'
    }
  ];

  return (
    <>
    {/* GEO Meta Tags */}
    <meta name="geo.region" content="Global" />
    <meta name="language" content="English" />
    
    {/* Article Schema */}
    <SchemaMarkup
      type="Article"
      data={{
        headline: 'Preposition Combinations with Adjectives & Verbs (2026) | Free List & Examples',
        description: 'Master 300+ preposition combinations with verbs, adjectives, and nouns. Free comprehensive list with examples.',
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
      <div className="bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-slate-700 dark:to-slate-600 border-l-4 border-purple-600 p-6 rounded-lg mb-8 shadow-md">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Quick Answer:</h2>
        <p className="text-slate-800 dark:text-slate-200 leading-relaxed">
          <strong>Preposition combinations</strong> are fixed phrases where specific prepositions follow adjectives, verbs, or nouns. Examples: interested IN, depend ON, afraid OF, reason FOR. These combinations must be memorized as they often don't follow predictable rules.
        </p>
      </div>
      
      <div>
        <p className="font-body text-base font-semibold text-blue-600 mb-4 dark:text-blue-400">Adjectives & Adverbs</p>
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight dark:text-slate-100">Preposition Combinations (2026)</h1>
        
        {/* E-E-A-T Signals */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-6">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/></svg>
            By <Link to="/about" className="text-blue-600 dark:text-blue-400 hover:underline">Typogrammar Team</Link>
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/></svg>
            Updated: {lastUpdated}
          </span>
          <span className="flex items-center gap-1 text-green-600 dark:text-green-400">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
            300+ Combinations
          </span>
        </div>
      </div>
      
      {/* GEO Optimization */}
      <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg mb-8">
        <p className="text-slate-600 dark:text-slate-400 text-sm">
          This preposition combinations guide is designed for English learners worldwide, including those preparing for IELTS, TOEFL, Cambridge, and other international exams. We use neutral global English suitable for academic and professional contexts.
        </p>
      </div>

      <ArticleParagraph>
        Certain adjectives and verbs are commonly followed by specific prepositions. Learning these combinations is essential for fluent and natural-sounding English. This page serves as a quick reference for many of these common pairings.
      </ArticleParagraph>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {Object.entries(PREPOSITION_COMBINATIONS).map(([letter, combinations]) => (
          <div key={letter} className="break-inside-avoid">
            <h3 className="font-heading text-3xl font-bold text-blue-600 border-b-2 border-blue-200 pb-2 mb-4 dark:text-blue-400 dark:border-blue-700">{letter}</h3>
            <ul className="space-y-2">
              {combinations.map((combo) => (
                <li key={combo} className="font-body text-lg text-slate-700 dark:text-slate-300">
                  {combo}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      {/* Visible FAQ Section */}
      <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
        <ArticleHeading>Frequently Asked Questions About Preposition Combinations</ArticleHeading>
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

export default PrepositionCombinationsPage;
