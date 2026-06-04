import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const AfraidOfOrAfraidFromPage: React.FC = () => {
  usePageMetadata({
    title: 'Afraid Of or Afraid From: Which Is Correct? | TypoGrammar',
    description: 'Is it "afraid of" or "afraid from"? Learn the correct preposition. "Afraid of" is always correct. "Afraid from" is never used in English.',
    canonical: 'https://typogrammar.com/grammar-mistakes/afraid-of-or-afraid-from/'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Afraid Of or Afraid From: Which Is Correct?",
    "description": "Always use 'afraid of' - never 'afraid from.' This is a common mistake made by speakers of languages that use 'from' with fear.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/afraid-of-or-afraid-from" },
    "datePublished": "2026-03-12",
    "dateModified": "2026-03-12"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is it afraid of or afraid from?",
        "acceptedAnswer": { "@type": "Answer", "text": "Always use 'afraid of.' 'Afraid from' is incorrect in English. Example: 'I'm afraid of spiders' (correct), NOT 'I'm afraid from spiders' (wrong)." }
      },
      {
        "@type": "Question",
        "name": "Why do people say 'afraid from'?",
        "acceptedAnswer": { "@type": "Answer", "text": "This error often comes from directly translating from other languages (like Arabic, Hebrew, or some European languages) where the equivalent of 'from' is used with fear. In English, we always use 'of' with afraid." }
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
        <span className="text-slate-900 dark:text-slate-100">Afraid Of or Afraid From</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          Afraid Of or Afraid From: Which Is Correct?
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-green-800 dark:text-green-200 mb-2">
            <strong>Afraid of</strong> = ALWAYS correct ✓
          </p>
          <p className="text-lg text-green-800 dark:text-green-200">
            <strong>Afraid from</strong> = ALWAYS wrong ✗
          </p>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explanation
          </h2>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-6">
            <p className="text-lg text-blue-800 dark:text-blue-200 mb-2">
              In English, <strong>"afraid"</strong> is ALWAYS followed by <strong>"of"</strong> when expressing fear of something.
            </p>
            <p className="text-blue-700 dark:text-blue-300 font-mono">
              afraid + of + noun/pronoun/gerund
            </p>
          </div>

          <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg mb-4">
            <p className="text-lg text-teal-800 dark:text-teal-200">
              <strong>Why this mistake happens:</strong> Many languages use "from" with fear (Arabic: خائف من, Spanish influence, etc.). But English always uses "of" with afraid.
            </p>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
            <p className="font-bold text-slate-800 dark:text-slate-200 mb-2">Similar adjectives that use "of":</p>
            <p className="text-slate-700 dark:text-slate-300">
              scared of, frightened of, terrified of, fond of, proud of, aware of, tired of, jealous of
            </p>
          </div>
        </section>

        {/* Examples Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Examples
          </h2>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">I'm afraid <strong>of</strong> spiders.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">She's afraid <strong>of</strong> flying.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">They're afraid <strong>of</strong> the dark.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">He's afraid <strong>of</strong> making mistakes.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">Don't be afraid <strong>of</strong> asking questions.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">I'm afraid <strong>from</strong> spiders.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">She's afraid <strong>from</strong> failure.</span>
            </div>
          </div>
        </section>

        {/* Afraid that Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Other Uses of "Afraid"
          </h2>
          <div className="space-y-4">
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <p className="font-bold text-purple-900 dark:text-purple-100 mb-2">afraid + that clause</p>
              <p className="text-purple-800 dark:text-purple-200">"I'm afraid that I can't come." (worried/sorry about something)</p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="font-bold text-blue-900 dark:text-blue-100 mb-2">afraid + to infinitive</p>
              <p className="text-blue-800 dark:text-blue-200">"She's afraid to speak in public." (too scared to do something)</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <p className="font-bold text-green-900 dark:text-green-100 mb-2">"I'm afraid so / I'm afraid not"</p>
              <p className="text-green-800 dark:text-green-200">Polite way to confirm bad news: "Is it raining?" - "I'm afraid so."</p>
            </div>
          </div>
        </section>

        {/* Practice Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Practice
          </h2>
          <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
              <strong>Fill in with the correct preposition:</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "My little brother is afraid _____ dogs, but I'm not scared _____ them at all."
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
                  <strong>Answer:</strong> My little brother is afraid <strong>of</strong> dogs, but I'm not scared <strong>of</strong> them at all.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-2">
                  Both "afraid" and "scared" always use "of" in English.
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
              <Link to="/grammar-mistakes/interested-in-or-interested-on/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Interested In or Interested On?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/good-in-or-good-at/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Good In or Good At?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/different-from-or-different-than/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Different From or Different Than?
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

export default AfraidOfOrAfraidFromPage;
