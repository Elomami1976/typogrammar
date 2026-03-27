import React from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import SchemaMarkup from '../components/SchemaMarkup';

const PastPerfectProgressiveTensePage: React.FC = () => {
  usePageMetadata({
    title: 'Past Perfect Progressive (Past Perfect Continuous) Tense: Rules & Examples | TypoGrammar',
    description: 'Learn the past perfect progressive tense with clear rules, structure, examples, signal words, and common mistakes. Simple explanation for English learners.',
    canonical: 'https://typogrammar.com/grammar/verb-tenses/past-perfect-progressive'
  });

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Past Perfect Progressive Tense",
    "description": "The past perfect progressive tense describes actions that were continuing for a period of time before another action in the past. It uses had been + verb-ing.",
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
      "@id": "https://typogrammar.com/grammar/verb-tenses/past-perfect-progressive"
    },
    "datePublished": "2026-01-27",
    "dateModified": "2026-06-01"
  };

  return (
    <>
      <SchemaMarkup type="Article" data={articleSchema} />

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        
        {/* Breadcrumb Navigation */}
        <nav className="text-sm text-slate-600 dark:text-slate-400 mb-6">
          <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
          <span className="mx-2">›</span>
          <Link to="/grammar" className="hover:text-blue-600 dark:hover:text-blue-400">Grammar</Link>
          <span className="mx-2">›</span>
          <Link to="/grammar/verb-tenses" className="hover:text-blue-600 dark:hover:text-blue-400">Verb Tenses</Link>
          <span className="mx-2">›</span>
          <span className="text-slate-900 dark:text-slate-100">Past Perfect Progressive Tense</span>
        </nav>

        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          What Is the Past Perfect Progressive Tense?
        </h1>

        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
          The <strong>past perfect progressive tense</strong> (also called the <strong>past perfect continuous tense</strong>) describes actions that were happening for a period of time before another event in the past. It is formed using <strong>had been + verb-ing</strong>. Example: <em>She had been studying for hours before the exam started.</em>
        </p>

        <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
          This tense is closely related to the <Link to="/grammar/verb-tenses/past-perfect" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold">past perfect tense</Link>, but it emphasizes the duration of the earlier action.
        </p>

        {/* Table of Contents */}
        <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">Table of Contents</h2>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li><a href="#structure" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Structure</a></li>
            <li><a href="#uses" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">When to Use the Past Perfect Progressive</a></li>
            <li><a href="#signal" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Signal Words</a></li>
            <li><a href="#negative" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Negative Form</a></li>
            <li><a href="#questions" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Question Form</a></li>
            <li><a href="#examples" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Examples</a></li>
            <li><a href="#mistakes" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Common Mistakes</a></li>
            <li><a href="#comparison" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Tense Comparison</a></li>
            <li><a href="#ielts" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Past Perfect Progressive in IELTS</a></li>
            <li><a href="#faq" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">FAQ</a></li>
          </ul>
        </div>

        {/* Structure Section */}
        <h2 id="structure" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
          Structure of the Past Perfect Progressive
        </h2>

        <p className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-6">Subject + had been + verb-ing</p>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-slate-300 dark:border-slate-600">
            <caption className="text-sm text-slate-600 dark:text-slate-400 mb-2">Past Perfect Progressive Conjugation</caption>
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-700">
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Subject</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I had been working</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">You</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">You had been working</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">He / She / It</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">She had been working</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">We</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">We had been working</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">They</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">They had been working</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Uses Section */}
        <h2 id="uses" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
          When to Use the Past Perfect Progressive
        </h2>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">Duration Before Another Past Event</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>She had been studying for three hours before the exam started.</li>
          <li>I had been waiting for 30 minutes before the bus arrived.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">Cause of a Past Situation</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>He was tired because he had been running.</li>
          <li>The ground was wet because it had been raining.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">Emphasizing Ongoing Past Activity</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>They had been working on the project for months.</li>
          <li>We had been living there for five years before moving.</li>
        </ul>

        {/* Signal Words Section */}
        <h2 id="signal" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
          Signal Words
        </h2>

        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>for</li>
          <li>since</li>
          <li>before</li>
          <li>until</li>
          <li>by the time</li>
          <li>all day</li>
          <li>all night</li>
        </ul>

        {/* Negative Form Section */}
        <h2 id="negative" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
          Negative Form
        </h2>

        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">Subject + had + not + been + verb-ing</p>

        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>I had not been sleeping well.</li>
          <li>She hadn't been studying enough.</li>
          <li>They hadn't been working long.</li>
        </ul>

        {/* Question Form Section */}
        <h2 id="questions" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
          Question Form
        </h2>

        <p className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">Had + subject + been + verb-ing?</p>

        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>Had she been studying all day?</li>
          <li>Had they been waiting long?</li>
          <li>Had he been working there for years?</li>
        </ul>

        {/* Examples Section */}
        <h2 id="examples" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
          Examples of Past Perfect Progressive Sentences
        </h2>

        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>She had been reading before the phone rang.</li>
          <li>They had been playing football all afternoon.</li>
          <li>I had been studying English for years.</li>
          <li>He had been driving for hours.</li>
          <li>We had been traveling across Europe.</li>
          <li>The company had been expanding rapidly.</li>
          <li>I had been working on the project all week.</li>
          <li>She had been preparing for the meeting.</li>
          <li>They had been building a new bridge.</li>
          <li>He had been practicing the guitar.</li>
        </ul>

        {/* Common Mistakes Section */}
        <h2 id="mistakes" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
          Common Mistakes
        </h2>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-slate-300 dark:border-slate-600">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-700">
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Incorrect</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Correct</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-red-600 dark:text-red-400">I had been work here</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-green-600 dark:text-green-400">I had been working here</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-red-600 dark:text-red-400">She had been study all day</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-green-600 dark:text-green-400">She had been studying all day</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-red-600 dark:text-red-400">They had been wait for hours</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-green-600 dark:text-green-400">They had been waiting for hours</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Tense Comparison Section */}
        <h2 id="comparison" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
          Past Perfect Progressive vs Past Perfect
        </h2>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-slate-300 dark:border-slate-600">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-700">
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Past Perfect Progressive</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Past Perfect</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I had been studying for two hours</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I had studied three chapters</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">She had been working all day</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">She had finished the report</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* IELTS Section */}
        <h2 id="ielts" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
          Past Perfect Progressive in IELTS Writing
        </h2>

        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
          In IELTS Writing and Speaking, the past perfect progressive tense can be used to describe ongoing activities that happened before another event in the past.
        </p>

        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>The government had been investing heavily before the crisis occurred.</li>
          <li>The company had been expanding rapidly before the market changed.</li>
        </ul>

        {/* FAQ Section */}
        <h2 id="faq" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6 mb-8">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">What is the past perfect progressive tense?</h3>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              The past perfect progressive tense describes actions that continued for some time before another past event.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">How do you form the past perfect progressive tense?</h3>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              Use had been plus the verb with -ing.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">When do we use the past perfect progressive tense?</h3>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              It is used to emphasize the duration of an action that happened before another past event.
            </p>
          </div>
        </div>

        {/* Related Verb Tenses */}
        <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">Related Verb Tenses</h2>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li><Link to="/grammar/verb-tenses/past-perfect" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Past Perfect</Link></li>
            <li><Link to="/grammar/verb-tenses/past-progressive" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Past Continuous</Link></li>
            <li><Link to="/grammar/verb-tenses/future-simple" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Future Simple</Link></li>
            <li><Link to="/grammar/verb-tenses" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">All Verb Tenses</Link></li>
          </ul>
        </div>

        {/* Editorial Attribution Box */}
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

export default PastPerfectProgressiveTensePage;
