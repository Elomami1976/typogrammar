import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const ExplainOrExplainAboutPage: React.FC = () => {
  usePageMetadata({
    title: 'Explain or Explain About: Which Is Correct? | TypoGrammar',
    description: 'Is it "explain something" or "explain about something"? Learn the correct usage. "Explain about" is usually unnecessary - just use "explain."',
    canonical: 'https://typogrammar.com/grammar-mistakes/explain-or-explain-about/'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Explain or Explain About: Which Is Correct?",
    "description": "In most cases, 'explain' doesn't need 'about.' Say 'explain the problem' not 'explain about the problem.' Learn the correct patterns.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/explain-or-explain-about" },
    "datePublished": "2026-03-12",
    "dateModified": "2026-03-12"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is it explain or explain about?",
        "acceptedAnswer": { "@type": "Answer", "text": "Usually just 'explain' without 'about.' Say 'Can you explain the rules?' NOT 'Can you explain about the rules?' However, 'explain about' is acceptable when giving general information: 'Let me explain about our company.'" }
      },
      {
        "@type": "Question",
        "name": "Can you say 'explain me'?",
        "acceptedAnswer": { "@type": "Answer", "text": "No, 'explain me' is incorrect. Say 'explain to me' or 'explain something to me.' Example: 'Can you explain this to me?' NOT 'Can you explain me this?'" }
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
        <span className="text-slate-900 dark:text-slate-100">Explain or Explain About</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          Explain or Explain About: Which Is Correct?
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-green-800 dark:text-green-200 mb-2">
            <strong>Explain + object</strong> = Usually correct (explain the problem)
          </p>
          <p className="text-lg text-green-800 dark:text-green-200">
            <strong>Explain about</strong> = Usually unnecessary, but acceptable for general topics
          </p>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explanation
          </h2>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-6">
            <p className="text-lg text-blue-800 dark:text-blue-200 mb-3">
              <strong>"Explain"</strong> is a transitive verb that takes a direct object. You don't usually need "about."
            </p>
            <div className="space-y-2 text-blue-700 dark:text-blue-300 font-mono text-sm">
              <p>explain + something → "Explain the situation."</p>
              <p>explain + something + to someone → "Explain it to me."</p>
              <p>explain + that clause → "He explained that he was late."</p>
              <p>explain + wh-clause → "Explain why you did it."</p>
            </div>
          </div>

          <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg mb-4">
            <p className="text-lg text-teal-800 dark:text-teal-200">
              <strong>When "explain about" is acceptable:</strong> When introducing a general topic without a specific object: "Let me explain about our services."
            </p>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
            <p className="text-lg text-red-800 dark:text-red-200">
              <strong>Never say "explain me":</strong> Always use "explain to me" or "explain something to me."
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
              <span className="text-lg text-slate-700 dark:text-slate-300">Can you <strong>explain</strong> this word?</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">Please <strong>explain</strong> the rules <strong>to me</strong>.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">He <strong>explained</strong> why he was absent.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">Let me <strong>explain about</strong> our company. (general topic - OK)</span>
            </div>
            <div className="flex items-start">
              <span className="text-teal-600 dark:text-teal-400 mr-3 text-xl">△</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">Can you explain <strong>about</strong> this word? (unnecessary "about")</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">Can you <strong>explain me</strong> this word?</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">Please <strong>explain me</strong> the rules.</span>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explain vs. Tell vs. Say
          </h2>
          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
            <table className="w-full text-left">
              <thead>
                <tr className="text-slate-800 dark:text-slate-200">
                  <th className="pb-2">Verb</th>
                  <th className="pb-2">Pattern</th>
                  <th className="pb-2">Example</th>
                </tr>
              </thead>
              <tbody className="text-slate-700 dark:text-slate-300">
                <tr>
                  <td className="py-2 font-mono">explain</td>
                  <td className="py-2">explain (something) to someone</td>
                  <td className="py-2 italic">Explain it to me.</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono">tell</td>
                  <td className="py-2">tell someone (something)</td>
                  <td className="py-2 italic">Tell me the answer.</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono">say</td>
                  <td className="py-2">say something (to someone)</td>
                  <td className="py-2 italic">Say it to her.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Practice Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Practice
          </h2>
          <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
              <strong>Choose the correct sentence:</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 mb-2">A) "Can you explain me the difference?"</p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">B) "Can you explain the difference to me?"</p>
            <button
              onClick={() => setShowAnswer(!showAnswer)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {showAnswer ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer && (
              <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <p className="text-lg text-green-800 dark:text-green-200">
                  <strong>Answer:</strong> B is correct: "Can you explain the difference to me?"
                </p>
                <p className="text-green-700 dark:text-green-300 mt-2">
                  Never use "explain me" - always use "explain to me" or "explain something to me."
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
              <Link to="/grammar-mistakes/discuss-or-discuss-about/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Discuss or Discuss About?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/request-or-request-for/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Request or Request For?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/say-vs-tell/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Say vs. Tell
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

export default ExplainOrExplainAboutPage;
