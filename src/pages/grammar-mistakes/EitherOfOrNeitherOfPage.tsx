import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const EitherOfOrNeitherOfPage: React.FC = () => {
  usePageMetadata({
    title: 'Either of / Neither of: Singular or Plural Verb? | TypoGrammar',
    description: 'Learn how to use "either of" and "neither of" correctly. Both take a singular verb in formal English. Understand the grammar rules with examples and practice.',
    canonical: 'https://typogrammar.com/grammar-mistakes/either-of-or-neither-of/'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Either of / Neither of: Singular or Plural Verb?",
    "description": "'Either of' and 'neither of' are followed by a plural noun but take a singular verb in formal English. In informal English, a plural verb is sometimes used.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/either-of-or-neither-of" },
    "datePublished": "2026-03-30",
    "dateModified": "2026-03-30"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Does 'either of' take a singular or plural verb?",
        "acceptedAnswer": { "@type": "Answer", "text": "In formal English, 'either of' takes a singular verb: 'Either of the candidates is suitable.' In informal spoken English, a plural verb is sometimes accepted: 'Either of them are fine.' For IELTS and formal writing, use singular." }
      },
      {
        "@type": "Question",
        "name": "Does 'neither of' take a singular or plural verb?",
        "acceptedAnswer": { "@type": "Answer", "text": "'Neither of' takes a singular verb in formal English: 'Neither of the answers is correct.' Informal English sometimes accepts plural: 'Neither of them are coming.' For exams and academic writing, use singular." }
      },
      {
        "@type": "Question",
        "name": "What is the difference between 'either' and 'neither'?",
        "acceptedAnswer": { "@type": "Answer", "text": "'Either' is used in positive or choice contexts meaning 'one or the other.' 'Neither' is used in negative contexts meaning 'not one and not the other.' Example: 'Either option works for me.' vs 'Neither option is acceptable.'" }
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
        <span className="text-slate-900 dark:text-slate-100">Either of / Neither of</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          Either of / Neither of: Singular or Plural Verb?
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <div className="text-lg text-green-800 dark:text-green-200 space-y-2">
            <p><strong>"Either of"</strong> + plural noun + <strong>singular verb</strong> (formal English)</p>
            <p><strong>"Neither of"</strong> + plural noun + <strong>singular verb</strong> (formal English)</p>
            <p className="text-sm">Informal English sometimes uses plural verbs, but use singular in exams and formal writing.</p>
          </div>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explanation
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg">
              <h3 className="font-bold text-blue-900 dark:text-blue-100 text-lg mb-3">EITHER OF</h3>
              <p className="text-blue-800 dark:text-blue-200 mb-2 text-sm">Meaning: one or the other (of two)</p>
              <p className="text-blue-700 dark:text-blue-300 text-sm">→ Used in choice/alternative contexts</p>
              <p className="text-blue-700 dark:text-blue-300 text-sm">→ Positive sentences</p>
              <p className="text-blue-700 dark:text-blue-300 text-sm mt-1">Structure: either of + the/my/these + plural noun</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg">
              <h3 className="font-bold text-purple-900 dark:text-purple-100 text-lg mb-3">NEITHER OF</h3>
              <p className="text-purple-800 dark:text-purple-200 mb-2 text-sm">Meaning: not one and not the other (of two)</p>
              <p className="text-purple-700 dark:text-purple-300 text-sm">→ Used in negative/rejection contexts</p>
              <p className="text-purple-700 dark:text-purple-300 text-sm">→ Itself is negative (no double negative)</p>
              <p className="text-purple-700 dark:text-purple-300 text-sm mt-1">Structure: neither of + the/my/these + plural noun</p>
            </div>
          </div>

          <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
            <p className="text-lg text-teal-800 dark:text-teal-200">
              <strong>Key rule:</strong> Although "either of" and "neither of" are followed by a plural noun, the verb that follows must agree with "either/neither," which are grammatically singular.
            </p>
          </div>
        </section>

        {/* Examples Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Examples
          </h2>
          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">"Either of" (one or the other)</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300"><strong>Either of</strong> the routes <strong>is</strong> acceptable. (formal)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300"><strong>Either of</strong> my parents <strong>is</strong> available to help.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">Can <strong>either of</strong> you speak Spanish?</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through"><strong>Either of</strong> the routes <strong>are</strong> acceptable. (informal only)</span>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">"Neither of" (not one, not the other)</h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300"><strong>Neither of</strong> the answers <strong>is</strong> correct. (formal)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300"><strong>Neither of</strong> his parents <strong>speaks</strong> English.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300"><strong>Neither of</strong> us <strong>was</strong> invited to the meeting.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through"><strong>Neither of</strong> the answers <strong>are</strong> not correct. (double negative, wrong)</span>
            </div>
          </div>
        </section>

        {/* Formal vs Informal */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Formal vs Informal English
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-700">
                  <th className="p-3 border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-200">Register</th>
                  <th className="p-3 border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-200">Rule</th>
                  <th className="p-3 border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-200">Example</th>
                </tr>
              </thead>
              <tbody className="text-slate-700 dark:text-slate-300">
                <tr>
                  <td className="p-3 border border-slate-200 dark:border-slate-600 font-semibold">Formal (exams, writing)</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600">Singular verb</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600">"Neither of them <strong>is</strong> ready."</td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-700/50">
                  <td className="p-3 border border-slate-200 dark:border-slate-600 font-semibold">Informal (spoken)</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600">Plural verb (accepted)</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600">"Neither of them <strong>are</strong> ready."</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
            <p className="text-blue-800 dark:text-blue-200">
              <strong>For IELTS, TOEFL, and academic writing:</strong> Always use the singular verb after "either of" and "neither of."
            </p>
          </div>
        </section>

        {/* Either/Neither without "of" */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Either / Neither Without "of"
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            When "either" and "neither" are used without "of," they are placed directly before a singular noun:
          </p>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300"><strong>Either</strong> answer is correct.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300"><strong>Neither</strong> candidate was selected.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">You can take <strong>either</strong> road.</span>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Common Mistakes
          </h2>
          <div className="space-y-4">
            <div>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-2">
                <p className="text-lg text-red-800 dark:text-red-200"><strong>Incorrect (double negative):</strong> Neither of the students didn't pass the test.</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <p className="text-lg text-green-800 dark:text-green-200"><strong>Correct:</strong> Neither of the students <strong>passed</strong> the test. ("Neither" already makes it negative.)</p>
              </div>
            </div>
            <div>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-2">
                <p className="text-lg text-red-800 dark:text-red-200"><strong>Incorrect (plural verb in formal context):</strong> Either of the managers are available.</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <p className="text-lg text-green-800 dark:text-green-200"><strong>Correct (formal):</strong> Either of the managers <strong>is</strong> available.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Practice */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Practice
          </h2>
          <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
              <strong>Choose the correct verb (formal English):</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "Neither of the two proposals _____ (is/are) acceptable to the board."
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
                  <strong>Answer:</strong> Neither of the two proposals <strong>is</strong> acceptable to the board.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-1">
                  In formal English, "neither of" takes a singular verb.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Related Grammar */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Related Grammar
          </h2>
          <ul className="space-y-2 text-lg">
            <li>
              <Link to="/grammar-mistakes/each-of-or-every-of/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Each of or Every of?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/a-number-of-vs-the-number-of/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → A Number of vs The Number of
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/none-is-or-are/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → None Is or Are?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/each-are-or-each-is/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Each Are or Each Is?
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

export default EitherOfOrNeitherOfPage;
