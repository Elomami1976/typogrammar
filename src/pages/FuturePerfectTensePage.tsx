import React from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import SchemaMarkup from '../components/SchemaMarkup';

const FuturePerfectTensePage: React.FC = () => {
  usePageMetadata({
    title: 'Future Perfect Tense: Rules, Structure & Examples | TypoGrammar',
    description: 'Learn the future perfect tense with rules, structure, examples, signal words, and common mistakes. Clear explanation for English learners.',
    canonical: 'https://typogrammar.com/grammar/verb-tenses/future-perfect'
  });

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Future Perfect Tense",
    "description": "The future perfect tense describes actions that will be completed before a specific time in the future. It uses will have + past participle.",
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
      "@id": "https://typogrammar.com/grammar/verb-tenses/future-perfect"
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
          <span className="text-slate-900 dark:text-slate-100">Future Perfect Tense</span>
        </nav>

        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          What Is the Future Perfect Tense?
        </h1>

        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
          The <strong>future perfect tense</strong> describes actions that will be completed before a specific time in the future. It is formed using <strong>will have + past participle</strong>. Example: <em>She will have finished the report by tomorrow.</em>
        </p>

        <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
          The future perfect tense is often used to emphasize that an action will be finished before another future moment.
        </p>

        {/* Table of Contents */}
        <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">Table of Contents</h2>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li><a href="#structure" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Structure</a></li>
            <li><a href="#uses" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">When to Use the Future Perfect</a></li>
            <li><a href="#signal" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Signal Words</a></li>
            <li><a href="#negative" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Negative Form</a></li>
            <li><a href="#questions" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Question Form</a></li>
            <li><a href="#examples" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Examples</a></li>
            <li><a href="#mistakes" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Common Mistakes</a></li>
            <li><a href="#comparison" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Tense Comparison</a></li>
            <li><a href="#ielts" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Future Perfect in IELTS</a></li>
            <li><a href="#faq" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">FAQ</a></li>
          </ul>
        </div>

        {/* Structure Section */}
        <h2 id="structure" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
          Structure of the Future Perfect Tense
        </h2>

        <p className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-6">Subject + will have + past participle</p>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-slate-300 dark:border-slate-600">
            <caption className="text-sm text-slate-600 dark:text-slate-400 mb-2">Future Perfect Conjugation</caption>
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-700">
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Subject</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I will have finished</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">You</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">You will have finished</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">He / She / It</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">She will have finished</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">We</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">We will have finished</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">They</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">They will have finished</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Uses Section */}
        <h2 id="uses" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
          When to Use the Future Perfect
        </h2>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">Completed Action Before a Future Time</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>She will have finished the project by tomorrow.</li>
          <li>I will have completed the course by next month.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">Predictions About Completion</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>By 2030, scientists will have discovered new treatments.</li>
          <li>By next year, the company will have expanded globally.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">Looking Back from the Future</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>By the end of the day, we will have solved the problem.</li>
          <li>By tonight, they will have arrived home.</li>
        </ul>

        {/* Signal Words Section */}
        <h2 id="signal" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
          Signal Words
        </h2>

        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>by</li>
          <li>by tomorrow</li>
          <li>by next week</li>
          <li>by the time</li>
          <li>before</li>
          <li>by the end of</li>
        </ul>

        {/* Negative Form Section */}
        <h2 id="negative" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
          Negative Form
        </h2>

        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">Subject + will not (won't) + have + past participle</p>

        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>I will not have finished the report.</li>
          <li>She won't have completed the assignment.</li>
          <li>They will not have arrived yet.</li>
        </ul>

        {/* Question Form Section */}
        <h2 id="questions" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
          Question Form
        </h2>

        <p className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">Will + subject + have + past participle?</p>

        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>Will you have finished the work by tomorrow?</li>
          <li>Will she have completed the project by next week?</li>
          <li>Will they have arrived by noon?</li>
        </ul>

        {/* Examples Section */}
        <h2 id="examples" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
          Examples of Future Perfect Sentences
        </h2>

        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>She will have finished her homework.</li>
          <li>They will have traveled across Europe.</li>
          <li>I will have completed the project.</li>
          <li>He will have bought a new house.</li>
          <li>We will have met the deadline.</li>
          <li>The company will have launched the product.</li>
          <li>I will have read the entire book.</li>
          <li>She will have prepared the presentation.</li>
          <li>They will have built a new bridge.</li>
          <li>He will have written the report.</li>
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
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-red-600 dark:text-red-400">I will have finish the work</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-green-600 dark:text-green-400">I will have finished the work</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-red-600 dark:text-red-400">She will has finished</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-green-600 dark:text-green-400">She will have finished</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-red-600 dark:text-red-400">They will have went home</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-green-600 dark:text-green-400">They will have gone home</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Tense Comparison Section */}
        <h2 id="comparison" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
          Future Perfect vs Future Simple
        </h2>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-slate-300 dark:border-slate-600">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-700">
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Future Perfect</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Future Simple</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I will have finished the task</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I will finish the task</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">She will have completed the report</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">She will complete the report</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* IELTS Section */}
        <h2 id="ielts" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
          Future Perfect in IELTS Writing
        </h2>

        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
          In IELTS Writing Task 2 and Speaking, the future perfect tense is useful when discussing future predictions and expected achievements.
        </p>

        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>By 2050, many cities will have adopted renewable energy solutions.</li>
          <li>By the end of the decade, technology will have transformed education.</li>
        </ul>

        {/* FAQ Section */}
        <h2 id="faq" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6 mb-8">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">What is the future perfect tense?</h3>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              The future perfect tense describes actions that will be completed before a specific future time.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">How do you form the future perfect tense?</h3>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              Use will have plus the past participle of the verb.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">When do we use the future perfect tense?</h3>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              It is used to describe actions that will be finished before another moment in the future.
            </p>
          </div>
        </div>

        {/* Related Verb Tenses */}
        <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">Related Verb Tenses</h2>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li><Link to="/grammar/verb-tenses/future-progressive" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Future Continuous</Link></li>
            <li><Link to="/grammar/verb-tenses/future-perfect-progressive" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Future Perfect Continuous</Link></li>
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

export default FuturePerfectTensePage;
