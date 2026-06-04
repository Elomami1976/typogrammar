import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const HeGoOrHeGoesPage: React.FC = () => {
  usePageMetadata({
    title: 'He Go or He Goes? Which One Is Correct | TypoGrammar',
    description: 'Learn whether to say "he go" or "he goes." The correct form is "he goes" because third-person singular subjects need -s/-es on the verb. Clear examples.',
    canonical: 'https://typogrammar.com/grammar-mistakes/he-go-or-he-goes/'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "He Go or He Goes?",
    "description": "The correct form is 'he goes.' Third-person singular subjects (he, she, it) require the verb to have -s or -es added in the present simple tense.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/he-go-or-he-goes" },
    "datePublished": "2026-03-07",
    "dateModified": "2026-03-07"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is it 'he go' or 'he goes'?",
        "acceptedAnswer": { "@type": "Answer", "text": "The correct form is 'he goes' because third-person singular subjects require verbs ending in -s/-es." }
      },
      {
        "@type": "Question",
        "name": "When do you add -s to a verb?",
        "acceptedAnswer": { "@type": "Answer", "text": "Add -s or -es to the base verb when the subject is he, she, it, or a singular noun in the present simple tense." }
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
        <span className="text-slate-900 dark:text-slate-100">He Go or He Goes</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          He Go or He Goes? Which One Is Correct
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-green-800 dark:text-green-200 mb-2">
            The correct form is <strong>"he goes."</strong>
          </p>
          <p className="text-green-800 dark:text-green-200">
            Third-person singular subjects (he, she, it) require the verb to have <em>-s</em> or <em>-es</em> added in the present simple tense.
          </p>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explanation
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            In the <strong>present simple tense</strong>, verbs change form based on the subject. When the subject is <strong>he, she, it</strong>, or a singular noun, you must add <strong>-s</strong> or <strong>-es</strong> to the base verb.
          </p>
          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg mb-4">
            <p className="text-lg font-mono text-slate-800 dark:text-slate-200">
              Rule: <strong>He/She/It + verb + s/es</strong>
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-slate-300 dark:border-slate-600 mt-4">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-700">
                  <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left">Subject</th>
                  <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left">Verb Form</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">go</td></tr>
                <tr className="bg-slate-50 dark:bg-slate-800"><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">You</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">go</td></tr>
                <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">He/She/It</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><strong>goes</strong></td></tr>
                <tr className="bg-slate-50 dark:bg-slate-800"><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">We</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">go</td></tr>
                <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">They</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">go</td></tr>
              </tbody>
            </table>
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
              <span className="text-lg text-slate-700 dark:text-slate-300">He <strong>goes</strong> to work every day.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">She <strong>goes</strong> to the gym on Mondays.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">The bus <strong>goes</strong> to the city center.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">He <strong>go</strong> to work every day.</span>
            </div>
          </div>
        </section>

        {/* Common Mistake Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Common Mistake
          </h2>
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-4">
            <p className="text-lg text-red-800 dark:text-red-200">
              <strong>Incorrect:</strong> She go to school by bus.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <p className="text-lg text-green-800 dark:text-green-200">
              <strong>Correct:</strong> She goes to school by bus.
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
              "My brother go to university in London."
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
                  <strong>Answer:</strong> My brother <strong>goes</strong> to university in London.
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
              <Link to="/grammar-mistakes/people-is-or-people-are/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → People Is or People Are?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/everyone-is-or-everyone-are/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Everyone Is or Everyone Are?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/each-are-or-each-is/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Each Are or Each Is?
              </Link>
            </li>
            <li>
              <Link to="/grammar/verb-tenses/present-simple/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Present Simple Tense
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
};

export default HeGoOrHeGoesPage;
