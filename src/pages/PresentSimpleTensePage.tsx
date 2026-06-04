import React from 'react';
import AIAnswerBox from '../components/AIAnswerBox';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import SchemaMarkup from '../components/SchemaMarkup';

const PresentSimpleTensePage: React.FC = () => {
  usePageMetadata({
    title: 'Present Simple Tense: Rules, Structure & Examples | TypoGrammar',
    description: 'Learn the present simple tense with clear rules, structure, examples, signal words, common mistakes, and exercises. Simple explanation for English learners.',
    canonical: 'https://typogrammar.com/grammar/verb-tenses/present-simple/'
  });

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Present Simple Tense",
    "description": "The present simple tense describes habits, general truths, and repeated actions. It uses the base verb and adds -s for third-person singular subjects.",
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
      "@id": "https://typogrammar.com/grammar/verb-tenses/present-simple/"
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
        <Link to="/grammar/" className="hover:text-blue-600 dark:hover:text-blue-400">Grammar</Link>
        {' › '}
        <Link to="/grammar/verb-tenses/" className="hover:text-blue-600 dark:hover:text-blue-400">Verb Tenses</Link>
        {' › '}
        <span className="text-slate-900 dark:text-slate-100">Present Simple Tense</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          What Is the Present Simple Tense?
        </h1>

        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
          The <strong>present simple tense</strong> is an English verb tense used to describe habits, daily routines, general truths, and repeated actions.
          It is formed using the base verb, with <strong>-s</strong> added for third-person singular subjects (he, she, it).
          Example: <em>She works in a hospital.</em>
        </p>

        <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
          The present simple is often compared with the{' '}
          <Link to="/grammar/verb-tenses/present-progressive/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">present progressive tense</Link>,
          which describes actions happening right now.
        </p>

                {/* Quick Answer block — emits DefinedTerm + FAQPage JSON-LD for AI engines */}
        <AIAnswerBox
          term={"Present Simple Tense"}
          answer={"The present simple tense is used for habits, daily routines, general truths, and repeated actions. It is formed with the base verb, adding -s or -es for third-person singular subjects (he, she, it). Example: \"She works in a hospital every day.\""}
          keyFacts={["Formula: subject + base verb (+ -s for he/she/it)","Use: habits, routines, facts, schedules, general truths","Signal words: always, usually, often, sometimes, every day, never","Negative: do/does + not + base verb","Question: Do/Does + subject + base verb?"]}
          faqs={[{"q":"What is the difference between present simple and present progressive?","a":"Present simple describes habits and general truths (\"I work in London\"). Present progressive describes actions happening right now (\"I am working on a report\")."},{"q":"When do we add -s or -es to the verb?","a":"Add -s or -es only with third-person singular subjects (he, she, it, or a singular noun). Add -es when the verb ends in -s, -ss, -sh, -ch, -x, or -o (goes, watches, fixes)."},{"q":"Can the present simple talk about the future?","a":"Yes — for fixed schedules and timetables: \"The train leaves at 8 p.m.\" or \"The conference starts on Monday.\""}]}
        />

{/* Table of Contents */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-5 pb-2 border-b border-slate-200 dark:border-slate-700">Table of Contents</h2>
        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li><a href="#structure" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Structure</a></li>
          <li><a href="#uses" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">When to Use the Present Simple</a></li>
          <li><a href="#signal" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Signal Words</a></li>
          <li><a href="#negative" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Negative Form</a></li>
          <li><a href="#questions" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Question Form</a></li>
          <li><a href="#examples" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Examples</a></li>
          <li><a href="#mistakes" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Common Mistakes</a></li>
          <li><a href="#comparison" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Tense Comparison</a></li>
          <li><a href="#ielts" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Present Simple in IELTS</a></li>
          <li><a href="#faq" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">FAQ</a></li>
        </ul>

        {/* Structure Section */}
        <h2 id="structure" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-5 pb-2 border-b border-slate-200 dark:border-slate-700">Structure of the Present Simple Tense</h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">Structure:</p>
        <p className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-6">Subject + base verb (+ s/es for he/she/it)</p>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-slate-300 dark:border-slate-600">
            <caption className="text-left text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">Present Simple Conjugation</caption>
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-700">
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Subject</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I work</td></tr>
              <tr className="bg-slate-50 dark:bg-slate-800"><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">You</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">You work</td></tr>
              <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">He / She / It</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">She works</td></tr>
              <tr className="bg-slate-50 dark:bg-slate-800"><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">We</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">We work</td></tr>
              <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">They</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">They work</td></tr>
            </tbody>
          </table>
        </div>

        {/* Uses Section */}
        <h2 id="uses" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-5 pb-2 border-b border-slate-200 dark:border-slate-700">When to Use the Present Simple</h2>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Daily Routines</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>I wake up at 7 AM.</li>
          <li>She drinks coffee every morning.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">General Truths</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>The sun rises in the east.</li>
          <li>Water boils at 100°C.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Repeated Actions</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>They visit their grandparents every weekend.</li>
          <li>He plays football on Sundays.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Scheduled Events</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>The train leaves at 9 PM.</li>
          <li>The meeting starts at noon.</li>
        </ul>

        {/* Signal Words Section */}
        <h2 id="signal" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-5 pb-2 border-b border-slate-200 dark:border-slate-700">Signal Words</h2>
        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>always</li>
          <li>usually</li>
          <li>often</li>
          <li>sometimes</li>
          <li>rarely</li>
          <li>never</li>
          <li>every day</li>
          <li>every week</li>
        </ul>

        {/* Negative Form Section */}
        <h2 id="negative" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-5 pb-2 border-b border-slate-200 dark:border-slate-700">Negative Form</h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">Subject + do/does not + base verb</p>
        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>I do not like coffee.</li>
          <li>She does not watch TV.</li>
          <li>They do not work on Sundays.</li>
        </ul>

        {/* Questions Section */}
        <h2 id="questions" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-5 pb-2 border-b border-slate-200 dark:border-slate-700">Question Form</h2>
        <p className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4">Do/Does + subject + base verb?</p>
        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>Do you work here?</li>
          <li>Does she speak English?</li>
          <li>Do they live nearby?</li>
        </ul>

        {/* Examples Section */}
        <h2 id="examples" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-5 pb-2 border-b border-slate-200 dark:border-slate-700">Examples of Present Simple Sentences</h2>
        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>She studies English every day.</li>
          <li>They live in Canada.</li>
          <li>I read before sleeping.</li>
          <li>He works in a bank.</li>
          <li>We watch movies on weekends.</li>
          <li>My brother plays the guitar.</li>
          <li>The shop opens at 8 AM.</li>
          <li>I drink coffee every morning.</li>
          <li>She teaches mathematics.</li>
          <li>They travel often.</li>
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
              <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-red-600 dark:text-red-400">She go to school</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-green-700 dark:text-green-400">She goes to school</td></tr>
              <tr className="bg-slate-50 dark:bg-slate-800"><td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-red-600 dark:text-red-400">He don't like coffee</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-green-700 dark:text-green-400">He doesn't like coffee</td></tr>
              <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-red-600 dark:text-red-400">They works here</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-green-700 dark:text-green-400">They work here</td></tr>
            </tbody>
          </table>
        </div>

        {/* Comparison Section */}
        <h2 id="comparison" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-5 pb-2 border-b border-slate-200 dark:border-slate-700">Present Simple vs Present Continuous</h2>
        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-slate-300 dark:border-slate-600">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-700">
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Present Simple</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Present Continuous</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I work every day</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I am working now</td></tr>
              <tr className="bg-slate-50 dark:bg-slate-800"><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">She lives here</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">She is living here temporarily</td></tr>
            </tbody>
          </table>
        </div>

        {/* IELTS Section */}
        <h2 id="ielts" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-5 pb-2 border-b border-slate-200 dark:border-slate-700">Present Simple in IELTS Writing</h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
          In IELTS Writing, the present simple tense is commonly used to describe facts, general trends, and explanations.
        </p>
        <p className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Examples:</p>
        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>Many students prefer studying abroad.</li>
          <li>Technology plays an important role in modern education.</li>
        </ul>

        {/* FAQ Section */}
        <h2 id="faq" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-5 pb-2 border-b border-slate-200 dark:border-slate-700">Frequently Asked Questions</h2>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">What is the present simple tense?</h3>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
          The present simple tense describes habits, routines, and general facts. It uses the base verb and adds -s for third-person singular subjects.
        </p>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">When do we use the present simple tense?</h3>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
          We use it for repeated actions, routines, general truths, and scheduled events.
        </p>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">How do you form the present simple tense?</h3>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
          Use the base verb for most subjects and add -s or -es for he, she, or it.
        </p>

        {/* Related Verb Tenses Navigation */}
        <nav className="mt-10 p-6 bg-slate-50 dark:bg-slate-700 rounded-lg">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">Related Verb Tenses</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-slate-700 dark:text-slate-300">
            <li><Link to="/grammar/verb-tenses/present-progressive/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Present Continuous</Link></li>
            <li><Link to="/grammar/verb-tenses/present-perfect/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Present Perfect</Link></li>
            <li><Link to="/grammar/verb-tenses/past-simple/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Past Simple</Link></li>
            <li><Link to="/grammar/verb-tenses/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">All Verb Tenses</Link></li>
          </ul>
        </nav>

        {/* Author Attribution Box */}
        <div className="bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 p-6 my-8 rounded-lg">
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            By <Link to="/about/editorial-team/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold">TypoGrammar Editorial Team</Link>
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

export default PresentSimpleTensePage;
