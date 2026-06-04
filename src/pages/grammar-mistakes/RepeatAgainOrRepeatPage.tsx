import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const RepeatAgainOrRepeatPage: React.FC = () => {
  usePageMetadata({
    title: 'Repeat Again or Repeat? Which One Is Correct | TypoGrammar',
    description: 'Learn whether to say "repeat again" or just "repeat." The correct form is "repeat" without "again" - it is redundant.',
    canonical: 'https://typogrammar.com/grammar-mistakes/repeat-again-or-repeat/'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Repeat Again or Repeat?",
    "description": "The correct form is 'repeat' without 'again.' 'Repeat' already means 'do again,' so adding 'again' is redundant.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/repeat-again-or-repeat" },
    "datePublished": "2026-03-07",
    "dateModified": "2026-03-07"
  };

  return (
    <>
      <SchemaMarkup type="Article" data={articleSchema} />

      <nav className="mb-6 text-slate-600 dark:text-slate-400">
        <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
        {' › '}
        <Link to="/grammar-mistakes/" className="hover:text-blue-600 dark:hover:text-blue-400">Grammar Mistakes</Link>
        {' › '}
        <span className="text-slate-900 dark:text-slate-100">Repeat Again or Repeat</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          Repeat Again or Repeat? Which One Is Correct
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-green-800 dark:text-green-200 mb-2">
            The correct form is <strong>"repeat"</strong> without "again."
          </p>
          <p className="text-green-800 dark:text-green-200">
            "Repeat" means "to do or say something again." Adding "again" is redundant.
          </p>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explanation
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            The verb <strong>"repeat"</strong> already contains the meaning of "again." The prefix "re-" means "again," so "repeat again" literally means "say again again."
          </p>
          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg mb-4">
            <p className="text-lg font-mono text-slate-800 dark:text-slate-200">
              repeat = re- (again) + -peat (from Latin "petere" = to seek/say)
            </p>
          </div>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            This error is called a <strong>tautology</strong> - unnecessary repetition of meaning using different words.
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
              <span className="text-lg text-slate-700 dark:text-slate-300">Could you <strong>repeat</strong> that, please?</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">Please <strong>repeat</strong> after me.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">We don't want to <strong>repeat</strong> the same mistake.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">Could you <strong>repeat again</strong>, please?</span>
            </div>
          </div>
        </section>

        {/* Similar Redundancies Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Similar Redundancies to Avoid
          </h2>
          <ul className="list-disc list-inside text-lg text-slate-700 dark:text-slate-300 space-y-1">
            <li><span className="line-through">return back</span> → <strong>return</strong></li>
            <li><span className="line-through">revert back</span> → <strong>revert</strong></li>
            <li><span className="line-through">free gift</span> → <strong>gift</strong> (gifts are free by definition)</li>
            <li><span className="line-through">close proximity</span> → <strong>proximity</strong></li>
            <li><span className="line-through">past history</span> → <strong>history</strong></li>
            <li><span className="line-through">unexpected surprise</span> → <strong>surprise</strong></li>
          </ul>
        </section>

        {/* When "Again" Is OK Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            When Can You Use "Again"?
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            Use "again" with verbs that don't already mean "again":
          </p>
          <ul className="list-disc list-inside text-lg text-slate-700 dark:text-slate-300 space-y-1">
            <li>✔ Say it <strong>again</strong>.</li>
            <li>✔ Do it <strong>again</strong>.</li>
            <li>✔ Try <strong>again</strong>.</li>
            <li>✔ Come <strong>again</strong>?</li>
          </ul>
        </section>

        {/* Common Mistake Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Common Mistake
          </h2>
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-4">
            <p className="text-lg text-red-800 dark:text-red-200">
              <strong>Incorrect:</strong> I didn't understand. Can you repeat it again?
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <p className="text-lg text-green-800 dark:text-green-200">
              <strong>Correct:</strong> I didn't understand. Can you repeat it?
            </p>
            <p className="text-lg text-green-800 dark:text-green-200 mt-1">
              <strong>Also correct:</strong> I didn't understand. Can you say it again?
            </p>
          </div>
        </section>

        {/* Practice Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Practice
          </h2>
          <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
              <strong>Fix the sentence:</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "The teacher asked the students to repeat the exercise again."
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
                  <strong>Answer:</strong> The teacher asked the students to <strong>repeat</strong> the exercise.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-1">
                  Or: The teacher asked the students to <strong>do</strong> the exercise <strong>again</strong>.
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
              <Link to="/grammar-mistakes/return-back-or-return/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Return Back or Return?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/discuss-or-discuss-about/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Discuss or Discuss About?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → All Grammar Mistakes
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
};

export default RepeatAgainOrRepeatPage;
