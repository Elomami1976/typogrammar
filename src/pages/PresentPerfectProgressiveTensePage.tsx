import React from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import SchemaMarkup from '../components/SchemaMarkup';

const PresentPerfectProgressiveTensePage: React.FC = () => {
  usePageMetadata({
    title: 'Present Perfect Progressive (Present Perfect Continuous) Tense: Rules & Examples | TypoGrammar',
    description: 'Learn the present perfect progressive tense with rules, structure, examples, signal words, and common mistakes. Clear explanation for English learners.',
    canonical: 'https://typogrammar.com/grammar/verb-tenses/present-perfect-progressive'
  });

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Present Perfect Progressive Tense",
    "description": "The present perfect progressive tense describes actions that started in the past and are still continuing or have recently stopped. It uses have/has been + verb-ing.",
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
      "@id": "https://typogrammar.com/grammar/verb-tenses/present-perfect-progressive"
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
          <span className="text-slate-900 dark:text-slate-100">Present Perfect Progressive Tense</span>
        </nav>

        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          What Is the Present Perfect Progressive Tense?
        </h1>

        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
          The <strong>present perfect progressive tense</strong> (also called the <strong>present perfect continuous tense</strong>) is used to describe actions that started in the past and are still continuing or have recently stopped. It is formed using <strong>have/has been + verb-ing</strong>. Example: <em>She has been studying for three hours.</em>
        </p>

        <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
          This tense is closely related to the <Link to="/grammar/verb-tenses/present-perfect" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold">present perfect tense</Link>, but it emphasizes the duration of an action.
        </p>

        {/* Table of Contents */}
        <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">Table of Contents</h2>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li><a href="#structure" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Structure</a></li>
            <li><a href="#uses" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">When to Use the Present Perfect Progressive</a></li>
            <li><a href="#signal" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Signal Words</a></li>
            <li><a href="#negative" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Negative Form</a></li>
            <li><a href="#questions" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Question Form</a></li>
            <li><a href="#examples" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Examples</a></li>
            <li><a href="#mistakes" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Common Mistakes</a></li>
            <li><a href="#comparison" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Tense Comparison</a></li>
            <li><a href="#ielts" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Present Perfect Progressive in IELTS</a></li>
            <li><a href="#faq" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">FAQ</a></li>
          </ul>
        </div>

        {/* Structure Section */}
        <h2 id="structure" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
          Structure of the Present Perfect Progressive
        </h2>

        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">Structure:</p>
        <p className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-6">Subject + have/has been + verb-ing</p>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-slate-300 dark:border-slate-600">
            <caption className="text-sm text-slate-600 dark:text-slate-400 mb-2">Present Perfect Progressive Conjugation</caption>
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-700">
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Subject</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I have been working</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">You</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">You have been working</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">He / She / It</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">She has been working</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">We</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">We have been working</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">They</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">They have been working</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Uses Section */}
        <h2 id="uses" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
          When to Use the Present Perfect Progressive
        </h2>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">Actions Continuing Until Now</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>I have been studying all morning.</li>
          <li>She has been working here since 2021.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">Recently Stopped Actions</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>He has been running, so he is tired.</li>
          <li>They have been cleaning the house.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">Emphasizing Duration</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>We have been waiting for two hours.</li>
          <li>She has been learning English for five years.</li>
        </ul>

        {/* Signal Words Section */}
        <h2 id="signal" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
          Signal Words
        </h2>

        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>for</li>
          <li>since</li>
          <li>all day</li>
          <li>all morning</li>
          <li>recently</li>
          <li>lately</li>
          <li>how long</li>
        </ul>

        {/* Negative Form Section */}
        <h2 id="negative" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
          Negative Form
        </h2>

        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">Subject + have/has + not + been + verb-ing</p>

        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>I have not been sleeping well.</li>
          <li>She hasn't been studying lately.</li>
          <li>They haven't been working today.</li>
        </ul>

        {/* Question Form Section */}
        <h2 id="questions" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
          Question Form
        </h2>

        <p className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">Have/Has + subject + been + verb-ing?</p>

        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>Have you been working all day?</li>
          <li>Has she been studying English?</li>
          <li>Have they been waiting long?</li>
        </ul>

        {/* Examples Section */}
        <h2 id="examples" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
          Examples of Present Perfect Progressive Sentences
        </h2>

        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>She has been reading for two hours.</li>
          <li>They have been playing football.</li>
          <li>I have been working on this project.</li>
          <li>He has been studying English.</li>
          <li>We have been traveling around Europe.</li>
          <li>The company has been expanding rapidly.</li>
          <li>I have been waiting for the bus.</li>
          <li>She has been preparing for the exam.</li>
          <li>They have been building a new house.</li>
          <li>He has been practicing the piano.</li>
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
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-red-600 dark:text-red-400">I have been work here</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-green-600 dark:text-green-400">I have been working here</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-red-600 dark:text-red-400">She has been study all day</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-green-600 dark:text-green-400">She has been studying all day</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-red-600 dark:text-red-400">They have been wait for hours</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-green-600 dark:text-green-400">They have been waiting for hours</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Tense Comparison Section */}
        <h2 id="comparison" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
          Present Perfect Progressive vs Present Perfect
        </h2>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-slate-300 dark:border-slate-600">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-700">
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Present Perfect Progressive</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Present Perfect</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I have been studying for two hours</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I have studied three chapters</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">She has been working all day</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">She has finished the report</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* IELTS Section */}
        <h2 id="ielts" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
          Present Perfect Progressive in IELTS Writing
        </h2>

        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
          In IELTS Writing and Speaking, the present perfect progressive tense is useful when describing ongoing trends or activities that began in the past and continue into the present.
        </p>

        <p className="text-lg text-slate-700 dark:text-slate-300 mb-2">Examples:</p>
        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>The government has been investing heavily in education.</li>
          <li>The population has been increasing steadily over the past decade.</li>
        </ul>

        {/* FAQ Section */}
        <h2 id="faq" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6 mb-8">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">What is the present perfect progressive tense?</h3>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              The present perfect progressive tense describes actions that started in the past and continue to the present or recently stopped.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">How do you form the present perfect progressive tense?</h3>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              Use have or has plus been and the verb with -ing.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">When do we use the present perfect progressive tense?</h3>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              It is used to emphasize the duration of an action that began in the past and continues today.
            </p>
          </div>
        </div>

        {/* Related Verb Tenses */}
        <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">Related Verb Tenses</h2>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li><Link to="/grammar/verb-tenses/present-perfect" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Present Perfect</Link></li>
            <li><Link to="/grammar/verb-tenses/present-progressive" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Present Continuous</Link></li>
            <li><Link to="/grammar/verb-tenses/past-simple" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Past Simple</Link></li>
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

export default PresentPerfectProgressiveTensePage;
