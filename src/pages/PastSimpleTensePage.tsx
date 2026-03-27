import React from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import SchemaMarkup from '../components/SchemaMarkup';

const PastSimpleTensePage: React.FC = () => {
  usePageMetadata({
    title: 'Past Simple Tense: Rules, Structure & Examples | TypoGrammar',
    description: 'Learn the past simple tense with rules, verb forms, examples, signal words, common mistakes, and exercises. Clear explanation for English learners.',
    canonical: 'https://typogrammar.com/grammar/verb-tenses/past-simple'
  });

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Past Simple Tense",
    "description": "The past simple tense describes completed actions that happened in the past. It uses the past form of the verb.",
    "author": {
      "@type": "Organization",
      "name": "TypoGrammar"
    },
    "publisher": {
      "@type": "Organization",
      "name": "TypoGrammar",
      "logo": {
        "@type": "ImageObject",
        "url": "https://typogrammar.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://typogrammar.com/grammar/verb-tenses/past-simple"
    },
    "datePublished": "2026-01-27",
    "dateModified": "2026-06-01"
  };

  return (
    <>
      <SchemaMarkup type="Article" data={articleSchema} />

      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-slate-600 dark:text-slate-400">
        <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
        {' › '}
        <Link to="/grammar" className="hover:text-blue-600 dark:hover:text-blue-400">Grammar</Link>
        {' › '}
        <Link to="/grammar/verb-tenses" className="hover:text-blue-600 dark:hover:text-blue-400">Verb Tenses</Link>
        {' › '}
        <span className="text-slate-900 dark:text-slate-100">Past Simple Tense</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          What Is the Past Simple Tense?
        </h1>

        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
          The <strong>past simple tense</strong> is an English verb tense used to describe actions that started and finished in the past.
          It is formed using the <strong>past form of the verb</strong>. Regular verbs end in <strong>-ed</strong>, while irregular verbs have unique forms.
          Example: <em>She visited Paris last year.</em>
        </p>

        <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
          The past simple is often compared with the{' '}
          <Link to="/grammar/verb-tenses/past-progressive" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">past progressive tense</Link>,
          which describes actions that were ongoing in the past.
        </p>

        {/* Table of Contents */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-5 pb-2 border-b border-slate-200 dark:border-slate-700">Table of Contents</h2>
        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li><a href="#structure" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Structure</a></li>
          <li><a href="#verbs" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Regular vs Irregular Verbs</a></li>
          <li><a href="#uses" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">When to Use the Past Simple</a></li>
          <li><a href="#signal" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Signal Words</a></li>
          <li><a href="#negative" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Negative Form</a></li>
          <li><a href="#questions" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Question Form</a></li>
          <li><a href="#examples" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Examples</a></li>
          <li><a href="#mistakes" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Common Mistakes</a></li>
          <li><a href="#comparison" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Tense Comparison</a></li>
          <li><a href="#ielts" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Past Simple in IELTS</a></li>
          <li><a href="#faq" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">FAQ</a></li>
        </ul>

        {/* Structure Section */}
        <h2 id="structure" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-5 pb-2 border-b border-slate-200 dark:border-slate-700">Structure of the Past Simple Tense</h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">Structure:</p>
        <p className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-6">Subject + past verb</p>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-slate-300 dark:border-slate-600">
            <caption className="text-left text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">Past Simple Examples</caption>
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-700">
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Subject</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I worked</td></tr>
              <tr className="bg-slate-50 dark:bg-slate-800"><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">You</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">You worked</td></tr>
              <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">He / She / It</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">She worked</td></tr>
              <tr className="bg-slate-50 dark:bg-slate-800"><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">We</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">We worked</td></tr>
              <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">They</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">They worked</td></tr>
            </tbody>
          </table>
        </div>

        {/* Regular vs Irregular Verbs Section */}
        <h2 id="verbs" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-5 pb-2 border-b border-slate-200 dark:border-slate-700">Regular vs Irregular Verbs</h2>
        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-slate-300 dark:border-slate-600">
            <caption className="text-left text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">Regular and Irregular Past Simple Verbs</caption>
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-700">
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Verb Type</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Base Verb</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Past Form</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Regular</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">work</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">worked</td></tr>
              <tr className="bg-slate-50 dark:bg-slate-800"><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Regular</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">play</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">played</td></tr>
              <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Irregular</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">go</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">went</td></tr>
              <tr className="bg-slate-50 dark:bg-slate-800"><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Irregular</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">see</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">saw</td></tr>
              <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Irregular</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">take</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">took</td></tr>
            </tbody>
          </table>
        </div>

        {/* Uses Section */}
        <h2 id="uses" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-5 pb-2 border-b border-slate-200 dark:border-slate-700">When to Use the Past Simple</h2>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Completed Actions in the Past</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>I finished my homework yesterday.</li>
          <li>She visited Paris last year.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Series of Past Actions</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>He woke up, ate breakfast, and left for work.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Past Habits</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>We played outside every evening when we were children.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Past Facts or States</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>She lived in London for five years.</li>
          <li>They knew the answer.</li>
        </ul>

        {/* Signal Words Section */}
        <h2 id="signal" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-5 pb-2 border-b border-slate-200 dark:border-slate-700">Signal Words</h2>
        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>yesterday</li>
          <li>last night</li>
          <li>last week</li>
          <li>last year</li>
          <li>ago</li>
          <li>in 2010</li>
          <li>then</li>
        </ul>

        {/* Negative Form Section */}
        <h2 id="negative" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-5 pb-2 border-b border-slate-200 dark:border-slate-700">Negative Form</h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">Subject + did not + base verb</p>
        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>I did not go to school yesterday.</li>
          <li>She did not finish the report.</li>
          <li>They did not watch the movie.</li>
        </ul>

        {/* Questions Section */}
        <h2 id="questions" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-5 pb-2 border-b border-slate-200 dark:border-slate-700">Question Form</h2>
        <p className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4">Did + subject + base verb?</p>
        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>Did you finish the project?</li>
          <li>Did she visit London?</li>
          <li>Did they call you?</li>
        </ul>

        {/* Examples Section */}
        <h2 id="examples" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-5 pb-2 border-b border-slate-200 dark:border-slate-700">Examples of Past Simple Sentences</h2>
        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>She studied English last night.</li>
          <li>They traveled to Italy in 2022.</li>
          <li>I watched a movie yesterday.</li>
          <li>He bought a new car.</li>
          <li>We visited our grandparents.</li>
          <li>The meeting started at 10 AM.</li>
          <li>She wrote an email.</li>
          <li>They played football after school.</li>
          <li>I finished the book.</li>
          <li>He worked late yesterday.</li>
        </ul>

        {/* Common Mistakes Section */}
        <h2 id="mistakes" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-5 pb-2 border-b border-slate-200 dark:border-slate-700">Common Mistakes</h2>
        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-slate-300 dark:border-slate-600">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-700">
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Incorrect</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Correct</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-red-600 dark:text-red-400">She go to school yesterday</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-green-700 dark:text-green-400">She went to school yesterday</td></tr>
              <tr className="bg-slate-50 dark:bg-slate-800"><td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-red-600 dark:text-red-400">He didn't went</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-green-700 dark:text-green-400">He didn't go</td></tr>
              <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-red-600 dark:text-red-400">They did not played</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-green-700 dark:text-green-400">They did not play</td></tr>
            </tbody>
          </table>
        </div>

        {/* Comparison Section */}
        <h2 id="comparison" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-5 pb-2 border-b border-slate-200 dark:border-slate-700">Past Simple vs Past Continuous</h2>
        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-slate-300 dark:border-slate-600">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-700">
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Past Simple</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Past Continuous</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I finished my homework</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I was finishing my homework</td></tr>
              <tr className="bg-slate-50 dark:bg-slate-800"><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">She watched TV</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">She was watching TV</td></tr>
            </tbody>
          </table>
        </div>

        {/* IELTS Section */}
        <h2 id="ielts" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-5 pb-2 border-b border-slate-200 dark:border-slate-700">Past Simple in IELTS Writing</h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
          In IELTS Writing Task 1 and Task 2, the past simple tense is often used to describe past events, historical data, and completed actions.
        </p>
        <p className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Examples:</p>
        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>The population increased significantly in 2010.</li>
          <li>The company launched a new product last year.</li>
        </ul>

        {/* FAQ Section */}
        <h2 id="faq" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-5 pb-2 border-b border-slate-200 dark:border-slate-700">Frequently Asked Questions</h2>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">What is the past simple tense?</h3>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
          The past simple tense describes actions that started and finished in the past.
        </p>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">How do you form the past simple tense?</h3>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
          Use the past form of the verb. Regular verbs end in -ed, while irregular verbs have special forms.
        </p>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">When do we use the past simple tense?</h3>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
          It is used for completed actions, past events, and past habits.
        </p>

        {/* Related Verb Tenses Navigation */}
        <nav className="mt-10 p-6 bg-slate-50 dark:bg-slate-700 rounded-lg">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">Related Verb Tenses</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-slate-700 dark:text-slate-300">
            <li><Link to="/grammar/verb-tenses/past-progressive" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Past Continuous</Link></li>
            <li><Link to="/grammar/verb-tenses/past-perfect" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Past Perfect</Link></li>
            <li><Link to="/grammar/verb-tenses/simple-present" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Present Simple</Link></li>
            <li><Link to="/grammar/verb-tenses" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">All Verb Tenses</Link></li>
          </ul>
        </nav>

        {/* Author Attribution Box */}
        <div className="bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 p-6 my-8 rounded-lg">
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            By <Link to="/about/editorial-team" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold">TypoGrammar Editorial Team</Link>
          </p>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            TypoGrammar Editorial Team creates independent, grammar-focused educational content to help English learners improve clarity, structure, and accuracy for academic and real-world use.
          </p>
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3">Editorial Standards & Trust Policy</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
            <li>Independent educational content</li>
            <li>No score guarantees</li>
            <li>Not affiliated with ETS/TOEFL/IELTS</li>
            <li>Reviewed for clarity and accuracy</li>
          </ul>
          <p className="text-slate-700 dark:text-slate-300 mt-4">
            <strong>Last reviewed:</strong> 2026<br />
            <strong>Reviewed by:</strong> TypoGrammar Editorial Team
          </p>
        </div>
      </article>
    </>
  );
};

export default PastSimpleTensePage;
