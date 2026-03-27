import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const ReturnBackOrReturnPage: React.FC = () => {
  usePageMetadata({
    title: 'Return Back or Return? Which One Is Correct | TypoGrammar',
    description: 'Learn whether to say "return back" or just "return." The correct form is "return" without "back" - it is redundant.',
    canonical: 'https://typogrammar.com/grammar-mistakes/return-back-or-return'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Return Back or Return?",
    "description": "The correct form is 'return' without 'back.' 'Return' already means 'go back' or 'come back,' so adding 'back' is redundant.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/return-back-or-return" },
    "datePublished": "2026-03-07",
    "dateModified": "2026-03-07"
  };

  return (
    <>
      <SchemaMarkup type="Article" data={articleSchema} />

      <nav className="mb-6 text-slate-600 dark:text-slate-400">
        <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
        {' › '}
        <Link to="/grammar-mistakes" className="hover:text-blue-600 dark:hover:text-blue-400">Grammar Mistakes</Link>
        {' › '}
        <span className="text-slate-900 dark:text-slate-100">Return Back or Return</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          Return Back or Return? Which One Is Correct
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-green-800 dark:text-green-200 mb-2">
            The correct form is <strong>"return"</strong> without "back."
          </p>
          <p className="text-green-800 dark:text-green-200">
            "Return" already contains the meaning of "back." Adding "back" is redundant (a pleonasm).
          </p>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explanation
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            The verb <strong>"return"</strong> means "to go back" or "to come back." The concept of "back" is inherent in the word, making "return back" redundant.
          </p>
          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg mb-4">
            <p className="text-lg font-mono text-slate-800 dark:text-slate-200">
              return = re- (back) + turn (go)
            </p>
          </div>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            This type of error is called a <strong>pleonasm</strong> – using more words than necessary to express an idea.
          </p>
        </section>

        {/* Examples Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Examples
          </h2>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">Please <strong>return</strong> the book to the library.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">She <strong>returned</strong> home after work.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">When will you <strong>return</strong>?</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">Please <strong>return back</strong> the book to the library.</span>
            </div>
          </div>
        </section>

        {/* Similar Redundancies Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Similar Redundancies to Avoid
          </h2>
          <ul className="list-disc list-inside text-lg text-slate-700 dark:text-slate-300 space-y-1">
            <li><span className="line-through">repeat again</span> → <strong>repeat</strong></li>
            <li><span className="line-through">revert back</span> → <strong>revert</strong></li>
            <li><span className="line-through">advance forward</span> → <strong>advance</strong></li>
            <li><span className="line-through">retreat back</span> → <strong>retreat</strong></li>
            <li><span className="line-through">enter into</span> → <strong>enter</strong> (usually)</li>
          </ul>
        </section>

        {/* Common Mistake Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Common Mistake
          </h2>
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-4">
            <p className="text-lg text-red-800 dark:text-red-200">
              <strong>Incorrect:</strong> I need to return back to the office.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <p className="text-lg text-green-800 dark:text-green-200">
              <strong>Correct:</strong> I need to return to the office.
            </p>
            <p className="text-lg text-green-800 dark:text-green-200 mt-1">
              <strong>Also correct:</strong> I need to go back to the office.
            </p>
          </div>
        </section>

        {/* Practice Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Practice
          </h2>
          <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
              <strong>Fix the sentence:</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "After the meeting, all participants must return back to their departments."
            </p>
            <button
              onClick={() => setShowAnswer(!showAnswer)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {showAnswer ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer && (
              <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <p className="text-lg text-green-800 dark:text-green-200">
                  <strong>Answer:</strong> After the meeting, all participants must <strong>return</strong> to their departments.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Related Grammar Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Related Grammar
          </h2>
          <ul className="space-y-2 text-lg">
            <li>
              <Link to="/grammar-mistakes/repeat-again-or-repeat" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Repeat Again or Repeat?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/discuss-or-discuss-about" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Discuss or Discuss About?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → All Grammar Mistakes
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
};

export default ReturnBackOrReturnPage;
