
import React from 'react';
import GoogleAd from '../components/GoogleAd';
import { ArticleParagraph, ArticleHeading } from '../components/ArticleComponents';
import { PREPOSITION_COMBINATIONS } from '../constants/prepositionCombinations';
import usePageMetadata from '../hooks/usePageMetadata';

const PrepositionCombinationsPage: React.FC = () => {
  usePageMetadata({
    title: 'Preposition Combinations with Adjectives & Verbs | TypoGrammar',
    description: 'A comprehensive list of common preposition combinations with adjectives and verbs to improve your fluency and accuracy in English.'
  });

  return (
    <>
    <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
      <div>
        <p className="font-body text-base font-semibold text-blue-600 mb-4 dark:text-blue-400">Adjectives & Adverbs</p>
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight dark:text-slate-100">Preposition Combinations</h1>
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
    </article>
        <div className="mt-8">
          <GoogleAd adSlot="6406598038" />
        </div>
    </>
  );
};

export default PrepositionCombinationsPage;
