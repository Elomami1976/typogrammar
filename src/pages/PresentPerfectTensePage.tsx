import React from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import SchemaMarkup from '../components/SchemaMarkup';

const PresentPerfectTensePage: React.FC = () => {
  usePageMetadata({
    title: 'Present Perfect Tense: Rules, Structure & Examples | TypoGrammar',
    description: 'Learn the present perfect tense with rules, structure, examples, signal words, and common mistakes. Clear explanation for English learners.',
    canonical: 'https://typogrammar.com/grammar/verb-tenses/present-perfect'
  });

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Present Perfect Tense",
    "description": "The present perfect tense describes actions that happened at an unspecified time in the past or actions that continue to the present. It uses have/has + past participle.",
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
      "@id": "https://typogrammar.com/grammar/verb-tenses/present-perfect"
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
          <span className="text-slate-900 dark:text-slate-100">Present Perfect Tense</span>
        </nav>

        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          What Is the Present Perfect Tense?
        </h1>

        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
          The <strong>present perfect tense</strong> is used to describe actions that happened at an unspecified time in the past or actions that continue up to the present. It is formed using <strong>have/has + past participle</strong>. Example: <em>She has finished her homework.</em>
        </p>

        <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
          The present perfect is often compared with the <Link to="/grammar/verb-tenses/past-simple" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold">past simple tense</Link>, which describes actions completed at a specific time in the past.
        </p>

        {/* Table of Contents */}
        <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">Table of Contents</h2>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li><a href="#structure" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Structure</a></li>
            <li><a href="#uses" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">When to Use the Present Perfect</a></li>
            <li><a href="#signal" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Signal Words</a></li>
            <li><a href="#negative" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Negative Form</a></li>
            <li><a href="#questions" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Question Form</a></li>
            <li><a href="#examples" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Examples</a></li>
            <li><a href="#mistakes" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Common Mistakes</a></li>
            <li><a href="#comparison" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Tense Comparison</a></li>
            <li><a href="#ielts" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Present Perfect in IELTS</a></li>
            <li><a href="#faq" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">FAQ</a></li>
          </ul>
        </div>

        {/* Structure Section */}
        <h2 id="structure" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
          Structure of the Present Perfect Tense
        </h2>

        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">Structure:</p>
        <p className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-6">Subject + have/has + past participle</p>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-slate-300 dark:border-slate-600">
            <caption className="text-sm text-slate-600 dark:text-slate-400 mb-2">Present Perfect Conjugation</caption>
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-700">
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Subject</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I have worked</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">You</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">You have worked</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">He / She / It</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">She has worked</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">We</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">We have worked</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">They</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">They have worked</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Uses Section */}
        <h2 id="uses" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
          When to Use the Present Perfect
        </h2>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">Actions with an Unspecified Time</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>I have visited Paris.</li>
          <li>She has finished the report.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">Life Experiences</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>They have traveled to many countries.</li>
          <li>He has tried sushi before.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">Actions That Continue to the Present</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>She has lived here for five years.</li>
          <li>We have worked together since 2020.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">Recent Actions with Present Results</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>I have lost my keys.</li>
          <li>She has broken her phone.</li>
        </ul>

        {/* Signal Words Section */}
        <h2 id="signal" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
          Signal Words
        </h2>

        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>already</li>
          <li>yet</li>
          <li>just</li>
          <li>ever</li>
          <li>never</li>
          <li>since</li>
          <li>for</li>
          <li>recently</li>
          <li>lately</li>
        </ul>

        {/* Negative Form Section */}
        <h2 id="negative" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
          Negative Form
        </h2>

        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">Subject + have/has + not + past participle</p>

        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>I have not finished the book.</li>
          <li>She hasn't called me.</li>
          <li>They haven't arrived yet.</li>
        </ul>

        {/* Question Form Section */}
        <h2 id="questions" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
          Question Form
        </h2>

        <p className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">Have/Has + subject + past participle?</p>

        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>Have you finished the project?</li>
          <li>Has she visited London?</li>
          <li>Have they seen the movie?</li>
        </ul>

        {/* Examples Section */}
        <h2 id="examples" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
          Examples of Present Perfect Sentences
        </h2>

        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>She has completed the assignment.</li>
          <li>They have traveled abroad.</li>
          <li>I have read that book.</li>
          <li>He has bought a new phone.</li>
          <li>We have finished our work.</li>
          <li>The company has launched a new product.</li>
          <li>I have visited Italy.</li>
          <li>She has written three emails.</li>
          <li>They have learned English.</li>
          <li>He has cleaned the room.</li>
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
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-red-600 dark:text-red-400">I have went there</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-green-600 dark:text-green-400">I have gone there</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-red-600 dark:text-red-400">She has finish the work</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-green-600 dark:text-green-400">She has finished the work</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-red-600 dark:text-red-400">They have saw the movie</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-green-600 dark:text-green-400">They have seen the movie</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Tense Comparison Section */}
        <h2 id="comparison" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
          Present Perfect vs Past Simple
        </h2>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-slate-300 dark:border-slate-600">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-700">
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Present Perfect</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Past Simple</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I have visited Paris</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I visited Paris last year</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">She has finished the report</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">She finished the report yesterday</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* IELTS Section */}
        <h2 id="ielts" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
          Present Perfect in IELTS Writing
        </h2>

        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
          In IELTS Writing and Speaking, the present perfect tense is often used to describe trends, experiences, and situations that continue into the present.
        </p>

        <p className="text-lg text-slate-700 dark:text-slate-300 mb-2">Examples:</p>
        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>Technology has changed the way people communicate.</li>
          <li>The number of students studying abroad has increased.</li>
        </ul>

        {/* FAQ Section */}
        <h2 id="faq" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6 mb-8">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">What is the present perfect tense?</h3>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              The present perfect tense describes actions that happened at an unspecified time in the past or actions that continue to the present.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">How do you form the present perfect tense?</h3>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              Use have or has plus the past participle of the verb.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">When do we use the present perfect tense?</h3>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              It is used for life experiences, recent actions, and situations that started in the past and continue today.
            </p>
          </div>
        </div>

        {/* Related Verb Tenses */}
        <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">Related Verb Tenses</h2>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li><Link to="/grammar/verb-tenses/present-progressive" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Present Continuous</Link></li>
            <li><Link to="/grammar/verb-tenses/present-perfect-progressive" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Present Perfect Continuous</Link></li>
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

export default PresentPerfectTensePage;
