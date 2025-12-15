
import React, { useState, useMemo } from 'react';
import { CONFUSED_WORDS } from '../constants/confusedWords';
import { ConfusedWordSet } from '../types';
import { InlineCode } from '../components/ArticleComponents';
import PronunciationFetcher from '../components/PronunciationFetcher';
import GoogleAd from '../components/GoogleAd';
import usePageMetadata from '../hooks/usePageMetadata';

const CommonlyConfusedWordsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  usePageMetadata({
    title: 'Commonly Confused Words in English | TypoGrammar',
    description: 'A complete guide to words that look or sound alike but have different meanings, such as affect/effect and their/there/they\'re. Includes quick tips and examples.'
  });

  const filteredWords = useMemo(() => {
    if (!searchTerm) {
      return CONFUSED_WORDS;
    }

    const lowercasedSearchTerm = searchTerm.toLowerCase();

    return CONFUSED_WORDS.filter(set =>
      set.words.some(word => word.toLowerCase().includes(lowercasedSearchTerm))
    );
  }, [searchTerm]);

  return (
    <article className="max-w-7xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
      <div className="text-center mb-12">
        <h1 className="font-heading text-5xl font-extrabold text-slate-900 mb-4 tracking-tight dark:text-slate-100">Commonly Confused Words</h1>
        <p className="font-body text-xl text-slate-600 max-w-3xl mx-auto dark:text-slate-400">
          A guide to words that look or sound alike but have different meanings. Use the search to find a specific pair.
        </p>
      </div>

      <div className="mb-10 sticky top-[80px] z-10 bg-white/80 backdrop-blur-sm py-4 dark:bg-slate-800/80">
        <input
          type="search"
          placeholder="Search for a word (e.g., affect, their, then)..."
          className="w-full max-w-2xl mx-auto block px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-body text-lg transition-shadow duration-200 shadow-sm dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200 dark:focus:ring-blue-500 dark:placeholder-slate-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search commonly confused words"
        />
      </div>

      {filteredWords.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full text-left font-body text-lg">
            <thead className="sticky top-[165px] z-5">
              <tr className="bg-slate-100 border-b border-slate-200 dark:bg-slate-700 dark:border-slate-600">
                <th scope="col" className="px-6 py-4 font-bold text-slate-800 rounded-tl-lg w-[20%] dark:text-slate-200">Word Pair</th>
                <th scope="col" className="px-6 py-4 font-bold text-slate-800 w-[55%] dark:text-slate-200">Usage & Examples</th>
                <th scope="col" className="px-6 py-4 font-bold text-slate-800 rounded-tr-lg w-[25%] dark:text-slate-200">Quick Tip</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {filteredWords.map((set, index) => (
                <tr key={index} className="odd:bg-white even:bg-slate-50 hover:bg-blue-50 transition-colors duration-150 dark:odd:bg-slate-800/50 dark:even:bg-slate-800/20 dark:hover:bg-slate-700/50">
                  <td className="px-6 py-5 align-top">
                    <div className="font-semibold text-slate-900 dark:text-slate-200">
                      {set.words.map((word, i) => (
                        <span key={i}>
                          <InlineCode>{word}</InlineCode>
                          {i < set.words.length - 1 && <span className="text-slate-400 mx-1">/</span>}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-5 align-top">
                    {set.entries.map((entry, i) => (
                      <div key={entry.word} className={i < set.entries.length - 1 ? 'mb-4 pb-4 border-b border-slate-200 dark:border-slate-700' : ''}>
                        <div className="flex items-center gap-2 mb-1">
                          <p className="text-lg font-semibold text-slate-800 dark:text-slate-200">{entry.word}</p>
                          <PronunciationFetcher word={entry.word} />
                        </div>
                        <div>
                          <p className="text-base text-slate-700 dark:text-slate-300">{entry.meaning}</p>
                          <p className="text-base text-slate-600 italic mt-1 dark:text-slate-400">e.g., "{entry.example}"</p>
                        </div>
                      </div>
                    ))}
                  </td>
                  <td className="px-6 py-5 align-top">
                    {set.tip && (
                      <div className="p-3 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg text-base text-blue-800 dark:bg-blue-900/30 dark:border-blue-500 dark:text-blue-300">
                        {set.tip}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <>
        <div className="text-center py-12">
          <h3 className="font-heading text-2xl font-bold text-slate-700 dark:text-slate-300">No Results Found</h3>
          <p className="text-slate-500 mt-2 text-lg dark:text-slate-400">Try adjusting your search term.</p>
        </div>
      <div className="mt-8">
        <GoogleAd adSlot="6406598038" />
      </div>
      </>
      )}
    </article>
  );
};

export default CommonlyConfusedWordsPage;