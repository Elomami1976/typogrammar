import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const EndResultPage: React.FC = () => {
  usePageMetadata({
    title: 'End Result: Is It Redundant? | TypoGrammar',
    description: 'Is "end result" redundant? Usually yes! A result already implies the end of a process. Just say "result." Learn when it\'s acceptable.',
    canonical: 'https://typogrammar.com/grammar-mistakes/end-result/'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "End Result: Is It Redundant?",
    "description": "'End result' is usually redundant because a result, by definition, is what comes at the end of a process. In most cases, just use 'result.'",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/end-result" },
    "datePublished": "2026-03-12",
    "dateModified": "2026-03-12"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is 'end result' redundant?",
        "acceptedAnswer": { "@type": "Answer", "text": "Usually yes. A result is the consequence or outcome at the end of a process. Adding 'end' is typically unnecessary. However, 'end result' can be justified when distinguishing from intermediate results in a multi-step process." }
      },
      {
        "@type": "Question",
        "name": "When is 'end result' acceptable?",
        "acceptedAnswer": { "@type": "Answer", "text": "'End result' is acceptable when you need to distinguish the final outcome from intermediate results in a multi-step process. For example: 'The end result differed from the preliminary results.'" }
      }
    ]
  };

  return (
    <>
      <SchemaMarkup type="Article" data={articleSchema} />
      <SchemaMarkup type="FAQPage" data={faqSchema} />

      <nav className="mb-6 text-slate-600 dark:text-slate-400">
        <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
        {' › '}
        <Link to="/grammar-mistakes/" className="hover:text-blue-600 dark:hover:text-blue-400">Grammar Mistakes</Link>
        {' › '}
        <span className="text-slate-900 dark:text-slate-100">End Result</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          End Result: Is It Redundant?
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-green-800 dark:text-green-200 mb-2">
            <strong>Usually yes, "end result" is redundant.</strong>
          </p>
          <p className="text-lg text-green-800 dark:text-green-200">
            A result already implies the end. Just say <strong>"result"</strong> in most cases.
          </p>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Why Is It Usually Redundant?
          </h2>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
            <p className="text-lg text-blue-800 dark:text-blue-200">
              <strong>Result</strong> = the outcome or consequence that comes from an action or process
            </p>
          </div>

          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            Since a result is inherently the outcome at the end of something, adding "end" is typically unnecessary.
          </p>

          <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
            <p className="text-lg text-teal-800 dark:text-teal-200">
              <strong>However:</strong> "End result" can be useful when distinguishing from <em>intermediate</em> or <em>preliminary</em> results in a multi-step process.
            </p>
          </div>
        </section>

        {/* Examples Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Examples
          </h2>
          
          <p className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">Redundant (avoid):</p>
          <div className="space-y-3 mb-6">
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">The <strong>end result</strong> was a success.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">The <strong>result</strong> was a success.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">We're happy with the <strong>end result</strong>.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">We're happy with the <strong>result</strong>.</span>
            </div>
          </div>

          <p className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">Acceptable (distinguishing from intermediate results):</p>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">The <strong>end result</strong> differed from the preliminary findings.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">Despite early setbacks, the <strong>end result</strong> exceeded expectations.</span>
            </div>
          </div>
        </section>

        {/* When It's Acceptable Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            When "End Result" Is Acceptable
          </h2>
          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
            <p className="text-slate-700 dark:text-slate-300 mb-3">Use "end result" when:</p>
            <ul className="text-slate-700 dark:text-slate-300 space-y-2">
              <li>• Contrasting with intermediate or preliminary results</li>
              <li>• Emphasizing a long process has finally concluded</li>
              <li>• Discussing a multi-stage process with multiple outcomes</li>
            </ul>
            <p className="text-slate-600 dark:text-slate-400 mt-3 italic">
              In these cases, "end" adds meaningful information about which result you mean.
            </p>
          </div>
        </section>

        {/* Better Alternatives Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Better Alternatives
          </h2>
          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
            <p className="text-slate-700 dark:text-slate-300 mb-3">Instead of "end result," consider:</p>
            <ul className="text-slate-700 dark:text-slate-300 space-y-1">
              <li>• <strong>result</strong> (most concise)</li>
              <li>• <strong>outcome</strong></li>
              <li>• <strong>final outcome</strong> (when emphasis needed)</li>
              <li>• <strong>conclusion</strong></li>
              <li>• <strong>upshot</strong></li>
            </ul>
          </div>
        </section>

        {/* Practice Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Practice
          </h2>
          <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
              <strong>Fix this sentence:</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "The end result of our hard work was a beautiful garden."
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
                  <strong>Corrected:</strong> "The <strong>result</strong> of our hard work was a beautiful garden."
                </p>
                <p className="text-green-700 dark:text-green-300 mt-2">
                  No intermediate results are mentioned, so "end" is redundant here.
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
              <Link to="/grammar-mistakes/final-outcome/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Final Outcome (Redundant?)
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/advance-planning/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Advance Planning (Redundant?)
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/past-history/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Past History (Redundant?)
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

export default EndResultPage;
