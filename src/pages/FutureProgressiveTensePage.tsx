import React from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import SchemaMarkup from '../components/SchemaMarkup';

const FutureProgressiveTensePage: React.FC = () => {
  usePageMetadata({
    title: 'Future Progressive (Future Continuous) Tense: Rules & Examples | TypoGrammar',
    description: 'Learn the future progressive tense with rules, structure, examples, signal words, and common mistakes. Simple explanation for English learners.',
    canonical: 'https://typogrammar.com/grammar/verb-tenses/future-progressive'
  });

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Future Progressive Tense",
    "description": "The future progressive tense describes actions that will be in progress at a specific time in the future. It uses will be + verb-ing.",
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
      "@id": "https://typogrammar.com/grammar/verb-tenses/future-progressive"
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
          <span className="text-slate-900 dark:text-slate-100">Future Progressive Tense</span>
        </nav>

        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          What Is the Future Progressive Tense?
        </h1>

        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
          The <strong>future progressive tense</strong> (also called the <strong>future continuous tense</strong>) describes actions that will be happening at a specific time in the future. It is formed using <strong>will be + verb-ing</strong>. Example: <em>She will be studying at 8 PM tonight.</em>
        </p>

        <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
          The future progressive tense is often used together with the <Link to="/grammar/verb-tenses/future-simple" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold">future simple tense</Link> to describe events that will happen during a longer future action.
        </p>

        {/* Table of Contents */}
        <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">Table of Contents</h2>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li><a href="#structure" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Structure</a></li>
            <li><a href="#uses" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">When to Use the Future Progressive</a></li>
            <li><a href="#signal" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Signal Words</a></li>
            <li><a href="#negative" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Negative Form</a></li>
            <li><a href="#questions" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Question Form</a></li>
            <li><a href="#examples" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Examples</a></li>
            <li><a href="#mistakes" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Common Mistakes</a></li>
            <li><a href="#comparison" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Tense Comparison</a></li>
            <li><a href="#ielts" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Future Progressive in IELTS</a></li>
            <li><a href="#faq" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">FAQ</a></li>
          </ul>
        </div>

        {/* Structure Section */}
        <h2 id="structure" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
          Structure of the Future Progressive
        </h2>

        <p className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-6">Subject + will be + verb-ing</p>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-slate-300 dark:border-slate-600">
            <caption className="text-sm text-slate-600 dark:text-slate-400 mb-2">Future Progressive Conjugation</caption>
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-700">
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Subject</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I will be working</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">You</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">You will be working</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">He / She / It</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">She will be working</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">We</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">We will be working</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">They</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">They will be working</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Uses Section */}
        <h2 id="uses" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
          When to Use the Future Progressive
        </h2>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">Action in Progress at a Future Time</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>I will be studying at 9 PM.</li>
          <li>She will be working tomorrow morning.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">Planned Future Activities</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>We will be traveling next week.</li>
          <li>They will be attending the conference.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">Polite Questions About Plans</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>Will you be using the car tonight?</li>
          <li>Will she be joining us for dinner?</li>
        </ul>

        {/* Signal Words Section */}
        <h2 id="signal" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
          Signal Words
        </h2>

        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>at this time tomorrow</li>
          <li>this time next week</li>
          <li>tomorrow</li>
          <li>next week</li>
          <li>in the future</li>
        </ul>

        {/* Negative Form Section */}
        <h2 id="negative" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
          Negative Form
        </h2>

        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">Subject + will not (won't) + be + verb-ing</p>

        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>I will not be working tonight.</li>
          <li>She won't be studying tomorrow.</li>
          <li>They will not be traveling next week.</li>
        </ul>

        {/* Question Form Section */}
        <h2 id="questions" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
          Question Form
        </h2>

        <p className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">Will + subject + be + verb-ing?</p>

        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>Will you be studying tonight?</li>
          <li>Will she be working tomorrow?</li>
          <li>Will they be traveling next week?</li>
        </ul>

        {/* Examples Section */}
        <h2 id="examples" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
          Examples of Future Progressive Sentences
        </h2>

        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>She will be studying for her exam.</li>
          <li>They will be traveling across Europe.</li>
          <li>I will be working late tonight.</li>
          <li>He will be watching the game.</li>
          <li>We will be meeting tomorrow.</li>
          <li>The company will be expanding next year.</li>
          <li>I will be reading a book tonight.</li>
          <li>She will be preparing for the presentation.</li>
          <li>They will be discussing the project.</li>
          <li>He will be practicing the piano.</li>
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
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-red-600 dark:text-red-400">I will be go tomorrow</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-green-600 dark:text-green-400">I will be going tomorrow</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-red-600 dark:text-red-400">She will studying tonight</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-green-600 dark:text-green-400">She will be studying tonight</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-red-600 dark:text-red-400">They will be travel next week</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-green-600 dark:text-green-400">They will be traveling next week</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Tense Comparison Section */}
        <h2 id="comparison" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
          Future Progressive vs Future Simple
        </h2>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-slate-300 dark:border-slate-600">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-700">
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Future Progressive</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Future Simple</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I will be studying tonight</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I will study tonight</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">She will be working tomorrow</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">She will work tomorrow</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* IELTS Section */}
        <h2 id="ielts" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
          Future Progressive in IELTS Writing
        </h2>

        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
          In IELTS Writing and Speaking, the future progressive tense can be used to describe actions that will be in progress at a particular moment in the future.
        </p>

        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>Many companies will be investing in renewable energy in the coming years.</li>
          <li>Students will be using more digital tools in future classrooms.</li>
        </ul>

        {/* FAQ Section */}
        <h2 id="faq" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6 mb-8">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">What is the future progressive tense?</h3>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              The future progressive tense describes actions that will be happening at a specific time in the future.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">How do you form the future progressive tense?</h3>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              Use will be plus the verb ending in -ing.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">When do we use the future progressive tense?</h3>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              It is used for actions that will be in progress at a specific future time.
            </p>
          </div>
        </div>

        {/* Related Verb Tenses */}
        <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">Related Verb Tenses</h2>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li><Link to="/grammar/verb-tenses/future-simple" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Future Simple</Link></li>
            <li><Link to="/grammar/verb-tenses/future-perfect" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Future Perfect</Link></li>
            <li><Link to="/grammar/verb-tenses/present-progressive" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Present Continuous</Link></li>
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

export default FutureProgressiveTensePage;
