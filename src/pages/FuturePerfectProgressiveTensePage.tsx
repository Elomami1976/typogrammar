import React from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import SchemaMarkup from '../components/SchemaMarkup';

const FuturePerfectProgressiveTensePage: React.FC = () => {
  usePageMetadata({
    title: 'Future Perfect Progressive (Future Perfect Continuous) Tense: Rules & Examples | TypoGrammar',
    description: 'Learn the future perfect progressive tense with rules, structure, examples, signal words, and common mistakes. Simple explanation for English learners.',
    canonical: 'https://typogrammar.com/grammar/verb-tenses/future-perfect-progressive'
  });

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Future Perfect Progressive Tense",
    "description": "The future perfect progressive tense describes actions that will have been continuing for a period of time before a specific future moment. It uses will have been + verb-ing.",
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
      "@id": "https://typogrammar.com/grammar/verb-tenses/future-perfect-progressive"
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
          <span className="text-slate-900 dark:text-slate-100">Future Perfect Progressive Tense</span>
        </nav>

        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          What Is the Future Perfect Progressive Tense?
        </h1>

        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
          The <strong>future perfect progressive tense</strong> (also called the <strong>future perfect continuous tense</strong>) describes actions that will have been continuing for a period of time before a specific moment in the future.
          It is formed using <strong>will have been + verb-ing</strong>.
          Example: <em>By next year, she will have been working here for five years.</em>
        </p>

        {/* Table of Contents */}
        <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">Table of Contents</h2>
          <ul className="space-y-2 text-blue-600 dark:text-blue-400">
            <li><a href="#structure" className="hover:underline">Structure</a></li>
            <li><a href="#uses" className="hover:underline">When to Use the Future Perfect Progressive</a></li>
            <li><a href="#signal" className="hover:underline">Signal Words</a></li>
            <li><a href="#negative" className="hover:underline">Negative Form</a></li>
            <li><a href="#questions" className="hover:underline">Question Form</a></li>
            <li><a href="#examples" className="hover:underline">Examples</a></li>
            <li><a href="#mistakes" className="hover:underline">Common Mistakes</a></li>
            <li><a href="#comparison" className="hover:underline">Tense Comparison</a></li>
            <li><a href="#ielts" className="hover:underline">Future Perfect Progressive in IELTS</a></li>
            <li><a href="#faq" className="hover:underline">FAQ</a></li>
          </ul>
        </div>

        {/* Structure */}
        <h2 id="structure" className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-5 pb-2 border-b border-slate-200 dark:border-slate-700">
          Structure of the Future Perfect Progressive
        </h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
          <strong>Subject + will have been + verb-ing</strong>
        </p>
        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-slate-300 dark:border-slate-600">
            <caption className="text-sm text-slate-600 dark:text-slate-400 mb-2">Future Perfect Progressive Conjugation</caption>
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-700">
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Subject</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I will have been working</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">You</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">You will have been working</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">He / She / It</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">She will have been working</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">We</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">We will have been working</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">They</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">They will have been working</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* When to Use */}
        <h2 id="uses" className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-5 pb-2 border-b border-slate-200 dark:border-slate-700">
          When to Use the Future Perfect Progressive
        </h2>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">Duration Before a Future Time</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>By next month, I will have been studying English for three years.</li>
          <li>By 2027, they will have been living in Canada for a decade.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">Emphasizing the Length of an Activity</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>By tonight, she will have been working for twelve hours.</li>
          <li>By the time the project ends, we will have been researching for months.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">Long-Term Future Situations</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>By 2030, scientists will have been researching climate change for decades.</li>
          <li>By next year, the company will have been expanding globally for ten years.</li>
        </ul>

        {/* Signal Words */}
        <h2 id="signal" className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-5 pb-2 border-b border-slate-200 dark:border-slate-700">
          Signal Words
        </h2>
        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>for</li>
          <li>since</li>
          <li>by</li>
          <li>by next year</li>
          <li>by the time</li>
          <li>for many years</li>
        </ul>

        {/* Negative Form */}
        <h2 id="negative" className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-5 pb-2 border-b border-slate-200 dark:border-slate-700">
          Negative Form
        </h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
          Subject + will not (won't) + have been + verb-ing
        </p>
        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>I will not have been working here long.</li>
          <li>She won't have been studying for very long.</li>
          <li>They will not have been waiting long.</li>
        </ul>

        {/* Question Form */}
        <h2 id="questions" className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-5 pb-2 border-b border-slate-200 dark:border-slate-700">
          Question Form
        </h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
          <strong>Will + subject + have been + verb-ing?</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>Will you have been working here for ten years?</li>
          <li>Will she have been studying long?</li>
          <li>Will they have been traveling for months?</li>
        </ul>

        {/* Examples */}
        <h2 id="examples" className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-5 pb-2 border-b border-slate-200 dark:border-slate-700">
          Examples of Future Perfect Progressive Sentences
        </h2>
        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>By next year, she will have been teaching for ten years.</li>
          <li>They will have been working on the project for months.</li>
          <li>I will have been studying English for a long time.</li>
          <li>He will have been driving all day.</li>
          <li>We will have been living in this city for five years.</li>
          <li>The company will have been growing rapidly.</li>
          <li>She will have been preparing for the exam for weeks.</li>
          <li>They will have been building the bridge for years.</li>
          <li>I will have been practicing the piano.</li>
          <li>He will have been developing the software for months.</li>
        </ul>

        {/* Common Mistakes */}
        <h2 id="mistakes" className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-5 pb-2 border-b border-slate-200 dark:border-slate-700">
          Common Mistakes
        </h2>
        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-slate-300 dark:border-slate-600">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-700">
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold text-red-600">Incorrect</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold text-green-600">Correct</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-red-600">I will have been work here</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-green-600">I will have been working here</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-red-600">She will have been study all day</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-green-600">She will have been studying all day</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-red-600">They will have been wait for hours</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-green-600">They will have been waiting for hours</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Tense Comparison */}
        <h2 id="comparison" className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-5 pb-2 border-b border-slate-200 dark:border-slate-700">
          Future Perfect Progressive vs Future Perfect
        </h2>
        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-slate-300 dark:border-slate-600">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-700">
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Future Perfect Progressive</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Future Perfect</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I will have been studying for three hours</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I will have finished three chapters</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">She will have been working all day</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">She will have completed the report</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* IELTS */}
        <h2 id="ielts" className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-5 pb-2 border-b border-slate-200 dark:border-slate-700">
          Future Perfect Progressive in IELTS Writing
        </h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
          In IELTS Writing and Speaking, the future perfect progressive tense is useful when discussing long-term future trends or continuous developments.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>By 2050, researchers will have been studying renewable energy for decades.</li>
          <li>By the end of the century, scientists will have been monitoring climate change for many years.</li>
        </ul>

        {/* FAQ */}
        <h2 id="faq" className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-5 pb-2 border-b border-slate-200 dark:border-slate-700">
          Frequently Asked Questions
        </h2>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">What is the future perfect progressive tense?</h3>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
          The future perfect progressive tense describes actions that will continue for a period of time before a specific future moment.
        </p>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">How do you form the future perfect progressive tense?</h3>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
          Use will have been plus the verb ending in -ing.
        </p>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">When do we use the future perfect progressive tense?</h3>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
          It is used to emphasize the duration of an action before a future time.
        </p>

        {/* Related Verb Tenses */}
        <nav className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">Related Verb Tenses</h2>
          <ul className="space-y-2">
            <li><Link to="/grammar/verb-tenses/future-perfect" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Future Perfect</Link></li>
            <li><Link to="/grammar/verb-tenses/future-progressive" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Future Continuous</Link></li>
            <li><Link to="/grammar/verb-tenses/present-perfect-progressive" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Present Perfect Continuous</Link></li>
            <li><Link to="/grammar/verb-tenses" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">All Verb Tenses</Link></li>
          </ul>
        </nav>

        {/* Editorial Attribution */}
        <div className="bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 p-6 rounded-lg">
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            By <Link to="/about" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold">TypoGrammar</Link>
          </p>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            TypoGrammar creates clear, accurate grammar guides for English learners worldwide.
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Last updated: June 2026
          </p>
        </div>
      </article>
    </>
  );
};

export default FuturePerfectProgressiveTensePage;
