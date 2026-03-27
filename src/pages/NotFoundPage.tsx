import React from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';

const NotFoundPage: React.FC = () => {
  usePageMetadata({
    title: '404 - Page Not Found | TypoGrammar',
    description: 'The page you are looking for does not exist. Browse our grammar topics, blog posts, and learning resources.'
  });

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-8xl font-bold text-blue-600 dark:text-blue-400 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
          Let's get you back on track!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Go Home
          </Link>
          <Link
            to="/grammar-guide"
            className="inline-flex items-center justify-center px-6 py-3 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 font-medium rounded-lg transition-colors"
          >
            Browse Grammar Topics
          </Link>
        </div>
        <div className="mt-10 text-sm text-slate-500 dark:text-slate-500">
          <p>Looking for something specific? Try these popular pages:</p>
          <div className="mt-3 flex flex-wrap justify-center gap-3">
            <Link to="/grammar/verb-tenses" className="text-blue-600 dark:text-blue-400 hover:underline">Verb Tenses</Link>
            <span className="text-slate-300 dark:text-slate-600">•</span>
            <Link to="/blog" className="text-blue-600 dark:text-blue-400 hover:underline">Blog</Link>
            <span className="text-slate-300 dark:text-slate-600">•</span>
            <Link to="/irregular-verbs" className="text-blue-600 dark:text-blue-400 hover:underline">Irregular Verbs</Link>
            <span className="text-slate-300 dark:text-slate-600">•</span>
            <Link to="/idioms" className="text-blue-600 dark:text-blue-400 hover:underline">Idioms</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
