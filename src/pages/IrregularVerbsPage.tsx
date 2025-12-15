
import React, { useState } from 'react';
import { IRREGULAR_VERBS } from '../constants/irregularVerbs';
import IrregularVerbsQuiz from '../components/IrregularVerbsQuiz';
import { ArticleHeading } from '../components/ArticleComponents';
import { useProgress } from '../contexts/ProgressContext';
import GoogleAd from '../components/GoogleAd';
import usePageMetadata from '../hooks/usePageMetadata';

const IrregularVerbsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { progress, updateQuizScore } = useProgress();
  
  const quizId = 'irregular-verbs';
  const bestScore = progress.quizScores[quizId];

  usePageMetadata({
    title: 'Complete List of English Irregular Verbs | TypoGrammar',
    description: 'Search and study a comprehensive list of English irregular verbs with their past simple and past participle forms. Includes a quiz to test your knowledge.'
  });

  const filteredVerbs = IRREGULAR_VERBS.filter(verb => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    return (
      verb.base.toLowerCase().includes(lowercasedSearchTerm) ||
      verb.pastSimple.toLowerCase().includes(lowercasedSearchTerm) ||
      verb.pastParticiple.toLowerCase().includes(lowercasedSearchTerm)
    );
  });

  return (
    <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
      <div className="flex justify-between items-start">
        <h1 className="font-heading text-5xl font-extrabold text-slate-900 mb-8 tracking-tight dark:text-slate-100">Irregular Verbs</h1>
      </div>
      
      <div className="mb-8 sticky top-[80px] z-10">
        <input
          type="search"
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
    </article>
  );
};

export default IrregularVerbsPage;