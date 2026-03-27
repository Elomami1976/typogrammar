import React from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import SchemaMarkup from '../components/SchemaMarkup';

const PresentProgressiveTensePage: React.FC = () => {
  usePageMetadata({
    title: 'Present Progressive (Present Continuous) Tense: Rules & Examples | TypoGrammar',
    description: 'Learn the present progressive tense (present continuous) with clear rules, structure, examples, spelling rules, signal words, mistakes, and exercises.',
    canonical: 'https://typogrammar.com/grammar/verb-tenses/present-progressive'
  });

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Present Progressive (Present Continuous) Tense",
    "description": "The present progressive tense uses am/is/are + verb-ing to describe actions happening now, temporary situations, and future plans.",
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
      "@id": "https://typogrammar.com/grammar/verb-tenses/present-progressive"
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
        <span className="text-slate-900 dark:text-slate-100">Present Progressive Tense</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          What Is the Present Progressive (Present Continuous) Tense?
        </h1>

        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
          The <strong>present progressive tense</strong> (also called the <strong>present continuous tense</strong>) is an English verb tense formed with{' '}
          <strong>am/is/are + verb-ing</strong>. It describes actions happening right now, temporary situations, future arrangements, and changing trends.
          Example: <em>She is reading a book.</em>
        </p>

        <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
          The present progressive is often contrasted with the{' '}
          <Link to="/grammar/verb-tenses/simple-present" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">simple present tense</Link>,
          which describes habits and general truths.
        </p>

        {/* Table of Contents */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-5 pb-2 border-b border-slate-200 dark:border-slate-700">Table of Contents</h2>
        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li><a href="#formation" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">How to Form the Present Progressive</a></li>
          <li><a href="#uses" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">When to Use It</a></li>
          <li><a href="#signal" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Signal Words</a></li>
          <li><a href="#spelling" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">-ing Spelling Rules</a></li>
          <li><a href="#negative" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Negative Form</a></li>
          <li><a href="#questions" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Questions</a></li>
          <li><a href="#stative" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Stative Verbs</a></li>
          <li><a href="#comparison" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Tense Comparisons</a></li>
          <li><a href="#ielts" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Present Progressive in IELTS</a></li>
          <li><a href="#mistakes" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Common Mistakes</a></li>
          <li><a href="#faq" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">FAQ</a></li>
        </ul>

        {/* Formation Section */}
        <h2 id="formation" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-5 pb-2 border-b border-slate-200 dark:border-slate-700">How to Form the Present Progressive Tense</h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">Structure:</p>
        <p className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-6">Subject + am/is/are + verb-ing</p>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-slate-300 dark:border-slate-600">
            <caption className="text-left text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">Present Progressive Conjugation</caption>
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-700">
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Subject</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I am working</td></tr>
              <tr className="bg-slate-50 dark:bg-slate-800"><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">You</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">You are working</td></tr>
              <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">He / She / It</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">She is working</td></tr>
              <tr className="bg-slate-50 dark:bg-slate-800"><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">We</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">We are working</td></tr>
              <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">They</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">They are working</td></tr>
            </tbody>
          </table>
        </div>

        {/* Spelling Rules Section */}
        <h2 id="spelling" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-5 pb-2 border-b border-slate-200 dark:border-slate-700">-ing Spelling Rules</h2>
        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-slate-300 dark:border-slate-600">
            <caption className="text-left text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">Spelling Rules for -ing</caption>
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-700">
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Rule</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Add -ing</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">play → playing</td></tr>
              <tr className="bg-slate-50 dark:bg-slate-800"><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Drop silent e</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">make → making</td></tr>
              <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Double consonant</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">run → running</td></tr>
              <tr className="bg-slate-50 dark:bg-slate-800"><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">ie → y</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">lie → lying</td></tr>
            </tbody>
          </table>
        </div>

        {/* Uses Section */}
        <h2 id="uses" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-5 pb-2 border-b border-slate-200 dark:border-slate-700">When to Use the Present Progressive</h2>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Actions Happening Now</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>I am writing an email.</li>
          <li>She is studying.</li>
          <li>They are watching TV.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Temporary Situations</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>She is living in London this year.</li>
          <li>We are studying for exams.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Future Arrangements</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>I am flying to Paris tomorrow.</li>
          <li>We are meeting tonight.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Changing Situations</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>Prices are rising.</li>
          <li>The weather is getting colder.</li>
        </ul>

        {/* Signal Words Section */}
        <h2 id="signal" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-5 pb-2 border-b border-slate-200 dark:border-slate-700">Signal Words</h2>
        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>now</li>
          <li>right now</li>
          <li>at the moment</li>
          <li>currently</li>
          <li>today</li>
          <li>this week</li>
          <li>Look!</li>
          <li>Listen!</li>
        </ul>

        {/* Negative Form Section */}
        <h2 id="negative" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-5 pb-2 border-b border-slate-200 dark:border-slate-700">Negative Form</h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">Subject + am/is/are + not + verb-ing</p>
        <p className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">Examples:</p>
        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>I am not working.</li>
          <li>She isn't sleeping.</li>
          <li>They aren't coming.</li>
        </ul>

        {/* Questions Section */}
        <h2 id="questions" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-5 pb-2 border-b border-slate-200 dark:border-slate-700">Questions in the Present Progressive</h2>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Yes / No Questions</h3>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">Am/Is/Are + subject + verb-ing?</p>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>Are you studying?</li>
          <li>Is she working?</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Wh Questions</h3>
        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>What are you doing?</li>
          <li>Where is he going?</li>
        </ul>

        {/* Stative Verbs Section */}
        <h2 id="stative" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-5 pb-2 border-b border-slate-200 dark:border-slate-700">Stative Verbs (Not Used in Progressive)</h2>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>know</li>
          <li>believe</li>
          <li>love</li>
          <li>want</li>
          <li>need</li>
          <li>own</li>
        </ul>
        <p className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Example:</p>
        <div className="space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <p className="text-green-700 dark:text-green-400">Correct: I know the answer.</p>
          <p className="text-red-600 dark:text-red-400">Incorrect: I am knowing the answer.</p>
        </div>

        {/* Comparison Section */}
        <h2 id="comparison" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-5 pb-2 border-b border-slate-200 dark:border-slate-700">Tense Comparisons</h2>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Present Progressive vs Simple Present</h3>
        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-slate-300 dark:border-slate-600">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-700">
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Present Progressive</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Simple Present</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I am working now</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I work every day</td></tr>
              <tr className="bg-slate-50 dark:bg-slate-800"><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">She is reading</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">She reads daily</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Present Progressive vs Present Perfect</h3>
        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-slate-300 dark:border-slate-600">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-700">
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Present Progressive</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Present Perfect</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I am working now</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I have worked today</td></tr>
              <tr className="bg-slate-50 dark:bg-slate-800"><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">She is studying</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">She has studied English</td></tr>
            </tbody>
          </table>
        </div>

        {/* IELTS Section */}
        <h2 id="ielts" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-5 pb-2 border-b border-slate-200 dark:border-slate-700">Present Progressive in IELTS Writing</h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
          In IELTS Writing, the present progressive tense is commonly used to describe trends and changes.
        </p>
        <p className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Examples:</p>
        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>The number of students studying abroad is increasing.</li>
          <li>Technology is changing the way people communicate.</li>
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
              <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-red-600 dark:text-red-400">I am knowing</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-green-700 dark:text-green-400">I know</td></tr>
              <tr className="bg-slate-50 dark:bg-slate-800"><td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-red-600 dark:text-red-400">She going</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-green-700 dark:text-green-400">She is going</td></tr>
              <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-red-600 dark:text-red-400">He is stoping</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-green-700 dark:text-green-400">He is stopping</td></tr>
            </tbody>
          </table>
        </div>

        {/* FAQ Section */}
        <h2 id="faq" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-5 pb-2 border-b border-slate-200 dark:border-slate-700">Frequently Asked Questions</h2>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">What is the present progressive tense?</h3>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
          The present progressive tense describes actions happening right now using am/is/are + verb-ing.
        </p>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">When do we use the present progressive?</h3>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
          We use it for actions happening now, temporary situations, and future arrangements.
        </p>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">What is the difference between present continuous and simple present?</h3>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
          Present continuous describes actions happening now, while simple present describes habits.
        </p>

        {/* Related Verb Tenses Navigation */}
        <nav className="mt-10 p-6 bg-slate-50 dark:bg-slate-700 rounded-lg">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">Related Verb Tenses</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-slate-700 dark:text-slate-300">
            <li><Link to="/grammar/verb-tenses/simple-present" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Simple Present</Link></li>
            <li><Link to="/grammar/verb-tenses/present-perfect" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Present Perfect</Link></li>
            <li><Link to="/grammar/verb-tenses/past-progressive" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Past Progressive</Link></li>
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

export default PresentProgressiveTensePage;
