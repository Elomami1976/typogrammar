import React from 'react';
import usePageMetadata from '../hooks/usePageMetadata';

const EditorialTeamPage: React.FC = () => {
  usePageMetadata({
    title: 'TypoGrammar Editorial Team | About Our Authors',
    description: 'Learn about the TypoGrammar Editorial Team responsible for creating grammar-focused learning guides and educational content.'
  });

  return (
    <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
      <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight dark:text-slate-100">
        TypoGrammar Editorial Team
      </h1>
      
      <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
        TypoGrammar Editorial Team is the content and review team behind TypoGrammar, an independent English-learning platform focused on grammar accuracy, sentence structure, and clarity for academic and real-world English use.
      </p>

      <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
        TypoGrammar does not administer exams and is not affiliated with ETS, TOEFL, or IELTS. Exam names are referenced only for educational purposes to explain publicly available formats and the language skills commonly assessed.
      </p>

      <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
        The TypoGrammar Editorial Team is responsible for:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
        <li>Writing grammar-focused learning guides</li>
        <li>Explaining English sentence structure clearly and logically</li>
        <li>Creating exam-aware content based on publicly available information</li>
        <li>Reviewing articles for clarity, accuracy, and educational value</li>
        <li>Updating content when language usage standards change</li>
      </ul>

      <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
        All content published on TypoGrammar follows clear editorial principles:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
        <li>Accuracy based on standard academic English usage</li>
        <li>Independence from testing organizations</li>
        <li>Transparency with no score guarantees or exam shortcuts</li>
        <li>Focus on language understanding rather than memorization</li>
      </ul>

      <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-8">
        TypoGrammar content is designed for English learners who want to improve clarity, structure, and confidence in their writing and speaking.
      </p>

      <footer className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-700">
        <p className="text-sm text-slate-600 dark:text-slate-400 italic">
          TypoGrammar is an independent educational platform. All trademarks belong to their respective owners.
        </p>
      </footer>
    </article>
  );
};

export default EditorialTeamPage;
