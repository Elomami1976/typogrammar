import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const EachOfTheStudentsIsOrArePage: React.FC = () => {
  usePageMetadata({
    title: 'Each of the Students Is or Are? Which One Is Correct | TypoGrammar',
    description: 'Learn whether to say "each of the students is" or "each of the students are." The correct form is "each of the students is" because "each" is singular.',
    canonical: 'https://typogrammar.com/grammar-mistakes/each-of-the-students-is-or-are/'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Each of the Students Is or Are?",
    "description": "The correct form is 'each of the students is.' 'Each' always refers to individuals one at a time, making it grammatically singular.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/each-of-the-students-is-or-are" },
    "datePublished": "2026-03-12",
    "dateModified": "2026-03-12"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is it 'each of the students is' or 'each of the students are'?",
        "acceptedAnswer": { "@type": "Answer", "text": "The correct form is 'each of the students is.' 'Each' is always singular because it refers to members of a group individually." }
      },
      {
        "@type": "Question",
        "name": "What's the difference between 'each' and 'all'?",
        "acceptedAnswer": { "@type": "Answer", "text": "'Each' emphasizes individuals one at a time (singular verb). 'All' refers to the entire group together (plural verb). 'Each of the students is ready' vs 'All of the students are ready.'" }
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
        <span className="text-slate-900 dark:text-slate-100">Each of the Students Is or Are</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          Each of the Students Is or Are? Which One Is Correct
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-green-800 dark:text-green-200 mb-2">
            The correct form is <strong>"each of the students is."</strong>
          </p>
          <p className="text-green-800 dark:text-green-200">
            "Each" refers to individuals one at a time, making it always singular-regardless of what follows.
          </p>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explanation
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            <strong>"Each"</strong> is a distributive pronoun. It takes a group and considers every member individually, one at a time. This individual focus makes it grammatically singular.
          </p>
          
          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg mb-4">
            <p className="text-lg font-mono text-slate-800 dark:text-slate-200">
              Rule: <strong>Each (of the + plural noun) + singular verb</strong>
            </p>
          </div>

          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            <strong>Think of it this way:</strong>
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <p className="text-lg text-blue-800 dark:text-blue-200">
              "Each of the students is ready" = "Student A is ready. Student B is ready. Student C is ready..." (one at a time)
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
              <span className="text-lg text-slate-700 dark:text-slate-300">Each of the students <strong>is</strong> required to submit a report.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">Each of the candidates <strong>has</strong> different qualifications.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">Each of the rooms <strong>was</strong> inspected carefully.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">Each of us <strong>has</strong> a responsibility.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">Each of the students <strong>are</strong> required to submit a report.</span>
            </div>
          </div>
        </section>

        {/* Each vs All/Every */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Each vs All vs Every
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-700">
                  <th className="border border-slate-300 dark:border-slate-600 p-3">Word</th>
                  <th className="border border-slate-300 dark:border-slate-600 p-3">Focus</th>
                  <th className="border border-slate-300 dark:border-slate-600 p-3">Verb</th>
                  <th className="border border-slate-300 dark:border-slate-600 p-3">Example</th>
                </tr>
              </thead>
              <tbody className="text-slate-700 dark:text-slate-300">
                <tr>
                  <td className="border border-slate-300 dark:border-slate-600 p-3"><strong>Each</strong></td>
                  <td className="border border-slate-300 dark:border-slate-600 p-3">Individual</td>
                  <td className="border border-slate-300 dark:border-slate-600 p-3">Singular</td>
                  <td className="border border-slate-300 dark:border-slate-600 p-3">Each student <strong>is</strong> ready.</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 dark:border-slate-600 p-3"><strong>Every</strong></td>
                  <td className="border border-slate-300 dark:border-slate-600 p-3">Individual</td>
                  <td className="border border-slate-300 dark:border-slate-600 p-3">Singular</td>
                  <td className="border border-slate-300 dark:border-slate-600 p-3">Every student <strong>is</strong> ready.</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 dark:border-slate-600 p-3"><strong>All</strong></td>
                  <td className="border border-slate-300 dark:border-slate-600 p-3">Group</td>
                  <td className="border border-slate-300 dark:border-slate-600 p-3">Plural</td>
                  <td className="border border-slate-300 dark:border-slate-600 p-3">All students <strong>are</strong> ready.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Common Mistake Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Common Mistake
          </h2>
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-4">
            <p className="text-lg text-red-800 dark:text-red-200">
              <strong>Incorrect:</strong> Each of the employees have received a bonus.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <p className="text-lg text-green-800 dark:text-green-200">
              <strong>Correct:</strong> Each of the employees has received a bonus.
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
              <strong>Choose the correct verb:</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "Each of the team members _____ (need/needs) to sign the agreement."
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
                  <strong>Answer:</strong> Each of the team members <strong>needs</strong> to sign the agreement.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-2">
                  "Each" is singular, so use "needs."
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
              <Link to="/grammar-mistakes/each-are-or-each-is/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Each Are or Each Is?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/one-of-the-students-is-or-are/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → One of the Students Is or Are?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/everyone-is-or-everyone-are/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Everyone Is or Everyone Are?
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

export default EachOfTheStudentsIsOrArePage;
