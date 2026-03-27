
import React, { useState, useMemo } from 'react';
import { CONFUSED_WORDS } from '../constants/confusedWords';
import { ConfusedWordSet } from '../types';
import { InlineCode } from '../components/ArticleComponents';
import PronunciationFetcher from '../components/PronunciationFetcher';
import GoogleAd from '../components/GoogleAd';
import usePageMetadata from '../hooks/usePageMetadata';
import { Link } from 'react-router-dom';

const CommonlyConfusedWordsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  usePageMetadata({
    title: '100+ Commonly Confused Words in English (With Examples) | TypoGrammar',
    description: 'Master the most commonly confused words in English: affect vs effect, their vs there, then vs than, and more. Clear definitions, examples, pronunciation, and tips.'
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
        <h1 className="font-heading text-5xl font-extrabold text-slate-900 mb-4 tracking-tight dark:text-slate-100">Commonly Confused Words in English</h1>
        <p className="font-body text-xl text-slate-600 max-w-3xl mx-auto dark:text-slate-400">
          A complete reference of <strong>100+ English word pairs</strong> that look or sound alike but have different meanings — including affect/effect, their/there/they're, then/than, and more.
        </p>
      </div>

      {/* Quick Summary for AI/GEO */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
        <h2 className="font-semibold text-lg mb-2 text-slate-900 dark:text-slate-100">Quick Summary</h2>
        <p className="text-slate-700 dark:text-slate-300">
          Commonly confused words are English word pairs that are similar in spelling, pronunciation, or meaning but have different uses. Examples include <strong>affect vs effect</strong> (verb vs noun), <strong>their vs there vs they're</strong> (possessive vs place vs contraction), and <strong>then vs than</strong> (time vs comparison). This guide covers each pair with definitions, examples, and quick tips.
        </p>
      </div>

      <div className="mb-10 sticky top-[80px] z-10 bg-white/80 backdrop-blur-sm py-4 dark:bg-slate-800/80">
        <input
          id="confused-words-search"
          name="confused-words-search"
          type="search"
          autoComplete="off"
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

      {/* Deep-Dive Topics Section */}
      <div className="mt-12 mb-8">
        <h2 className="font-heading text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">Deep-Dive Guides</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6">Want a more detailed explanation? Explore our in-depth lessons on the most commonly confused pairs:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { to: '/topics/affect-vs-effect', label: 'Affect vs Effect' },
            { to: '/topics/its-vs-its', label: "It's vs Its" },
            { to: '/topics/lay-vs-lie', label: 'Lay vs Lie' },
            { to: '/topics/make-vs-do', label: 'Make vs Do' },
            { to: '/topics/few-little-less-fewer', label: 'Few vs Little, Less vs Fewer' },
            { to: '/topics/used-to-vs-would', label: 'Used To vs Would' },
            { to: '/topics/wish-vs-hope', label: 'Wish vs Hope' },
          ].map((item) => (
            <Link key={item.to} to={item.to} className="block p-4 bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-lg hover:bg-blue-50 hover:border-blue-300 dark:hover:bg-slate-700 dark:hover:border-blue-500 transition-colors">
              <span className="font-semibold text-blue-600 dark:text-blue-400">{item.label}</span>
              <span className="text-slate-400 ml-2">&rarr;</span>
            </Link>
          ))}
        </div>
      </div>

      {/* FAQ Section for SEO/GEO */}
      <div className="mt-8 mb-8">
        <h2 className="font-heading text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100 mb-2">What are commonly confused words?</h3>
            <p className="text-slate-700 dark:text-slate-300">Commonly confused words are English word pairs (or groups) that are similar in spelling, pronunciation, or meaning but have different definitions and uses. Examples include affect/effect, their/there/they're, and accept/except.</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100 mb-2">What is the most commonly confused word pair in English?</h3>
            <p className="text-slate-700 dark:text-slate-300"><strong>Their, there, and they're</strong> is one of the most commonly confused sets. "Their" is possessive, "there" refers to a place, and "they're" is a contraction of "they are."</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100 mb-2">How can I stop confusing similar English words?</h3>
            <p className="text-slate-700 dark:text-slate-300">Learn the specific rule or memory trick for each pair, practice with examples, and use context clues. Reading widely and writing regularly also help reinforce correct usage over time.</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <GoogleAd adSlot="6406598038" />
      </div>
    </article>
  );
};

export default CommonlyConfusedWordsPage;