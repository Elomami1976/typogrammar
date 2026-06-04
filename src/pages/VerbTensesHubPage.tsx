import React from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import SchemaMarkup from '../components/SchemaMarkup';

const VerbTensesHubPage: React.FC = () => {
  usePageMetadata({
    title: 'The 12 English Verb Tenses (Complete Guide) | TypoGrammar',
    description: 'Master all 12 English verb tenses with a complete chart, structure formulas, examples, and links to detailed lessons. Simple guide for ESL learners.',
    canonical: 'https://typogrammar.com/grammar/verb-tenses/'
  });

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The 12 English Verb Tenses (Complete Guide)",
    "description": "Master all 12 English verb tenses with a complete chart, structure formulas, examples, and links to detailed lessons. Simple guide for ESL learners.",
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
      "@id": "https://typogrammar.com/grammar/verb-tenses"
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
          <Link to="/grammar/" className="hover:text-blue-600 dark:hover:text-blue-400">Grammar</Link>
          <span className="mx-2">›</span>
          <span className="text-slate-900 dark:text-slate-100">Verb Tenses</span>
        </nav>

        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          The 12 English Verb Tenses (Complete Guide)
        </h1>

        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
          English has <strong>12 verb tenses</strong> that show when an action happens, how long it lasts, and whether it is completed.
          This guide explains all 12 tenses with a complete chart, formulas, examples, and links to detailed lessons.
        </p>

        {/* Table of Contents */}
        <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">Table of Contents</h2>
          <ul className="space-y-2 text-blue-600 dark:text-blue-400">
            <li><a href="#chart" className="hover:underline">Complete Tense Chart</a></li>
            <li><a href="#present" className="hover:underline">Present Tenses</a></li>
            <li><a href="#past" className="hover:underline">Past Tenses</a></li>
            <li><a href="#future" className="hover:underline">Future Tenses</a></li>
            <li><a href="#how-to-choose" className="hover:underline">How to Choose the Right Tense</a></li>
            <li><a href="#faq" className="hover:underline">FAQ</a></li>
          </ul>
        </div>

        {/* Complete Tense Chart */}
        <h2 id="chart" className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-5 pb-2 border-b border-slate-200 dark:border-slate-700">
          Complete Tense Chart
        </h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
          This chart shows all 12 tenses with their structure and an example sentence.
        </p>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-slate-300 dark:border-slate-600 text-sm md:text-base">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-700">
                <th className="border border-slate-300 dark:border-slate-600 px-3 py-2 text-left font-semibold">Tense</th>
                <th className="border border-slate-300 dark:border-slate-600 px-3 py-2 text-left font-semibold">Structure</th>
                <th className="border border-slate-300 dark:border-slate-600 px-3 py-2 text-left font-semibold">Example</th>
              </tr>
            </thead>
            <tbody>
              {/* Present Tenses */}
              <tr className="bg-blue-50 dark:bg-blue-900/20">
                <td className="border border-slate-300 dark:border-slate-600 px-3 py-2 font-semibold" colSpan={3}>Present Tenses</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
                  <Link to="/grammar/verb-tenses/present-simple/" className="text-blue-600 hover:underline dark:text-blue-400">Present Simple</Link>
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">S + V(s/es)</td>
                <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">She works every day.</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
                  <Link to="/grammar/verb-tenses/present-progressive/" className="text-blue-600 hover:underline dark:text-blue-400">Present Progressive</Link>
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">S + am/is/are + V-ing</td>
                <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">She is working now.</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
                  <Link to="/grammar/verb-tenses/present-perfect/" className="text-blue-600 hover:underline dark:text-blue-400">Present Perfect</Link>
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">S + have/has + V3</td>
                <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">She has finished her work.</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
                  <Link to="/grammar/verb-tenses/present-perfect-progressive/" className="text-blue-600 hover:underline dark:text-blue-400">Present Perfect Progressive</Link>
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">S + have/has been + V-ing</td>
                <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">She has been working for hours.</td>
              </tr>

              {/* Past Tenses */}
              <tr className="bg-green-50 dark:bg-green-900/20">
                <td className="border border-slate-300 dark:border-slate-600 px-3 py-2 font-semibold" colSpan={3}>Past Tenses</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
                  <Link to="/grammar/verb-tenses/past-simple/" className="text-blue-600 hover:underline dark:text-blue-400">Past Simple</Link>
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">S + V2</td>
                <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">She worked yesterday.</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
                  <Link to="/grammar/verb-tenses/past-progressive/" className="text-blue-600 hover:underline dark:text-blue-400">Past Progressive</Link>
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">S + was/were + V-ing</td>
                <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">She was working at 5 PM.</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
                  <Link to="/grammar/verb-tenses/past-perfect/" className="text-blue-600 hover:underline dark:text-blue-400">Past Perfect</Link>
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">S + had + V3</td>
                <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">She had finished before I arrived.</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
                  <Link to="/grammar/verb-tenses/past-perfect-progressive/" className="text-blue-600 hover:underline dark:text-blue-400">Past Perfect Progressive</Link>
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">S + had been + V-ing</td>
                <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">She had been working for hours.</td>
              </tr>

              {/* Future Tenses */}
              <tr className="bg-purple-50 dark:bg-purple-900/20">
                <td className="border border-slate-300 dark:border-slate-600 px-3 py-2 font-semibold" colSpan={3}>Future Tenses</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
                  <Link to="/grammar/verb-tenses/future-simple/" className="text-blue-600 hover:underline dark:text-blue-400">Future Simple</Link>
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">S + will + V</td>
                <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">She will work tomorrow.</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
                  <Link to="/grammar/verb-tenses/future-progressive/" className="text-blue-600 hover:underline dark:text-blue-400">Future Progressive</Link>
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">S + will be + V-ing</td>
                <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">She will be working at 5 PM.</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
                  <Link to="/grammar/verb-tenses/future-perfect/" className="text-blue-600 hover:underline dark:text-blue-400">Future Perfect</Link>
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">S + will have + V3</td>
                <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">She will have finished by 6 PM.</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
                  <Link to="/grammar/verb-tenses/future-perfect-progressive/" className="text-blue-600 hover:underline dark:text-blue-400">Future Perfect Progressive</Link>
                </td>
                <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">S + will have been + V-ing</td>
                <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">She will have been working for 8 hours.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Present Tenses Section */}
        <h2 id="present" className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-5 pb-2 border-b border-slate-200 dark:border-slate-700">
          Present Tenses
        </h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
          Present tenses describe actions happening now, habits, facts, or ongoing situations connected to the present.
        </p>

        <div className="grid gap-4 md:grid-cols-2 mb-8">
          <Link to="/grammar/verb-tenses/present-simple/" className="block p-4 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-lg transition-all dark:bg-slate-700/50 dark:border-slate-600 dark:hover:bg-slate-700 dark:hover:border-blue-500">
            <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2">Present Simple</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Habits, facts, routines. <em>"She works every day."</em></p>
          </Link>
          <Link to="/grammar/verb-tenses/present-progressive/" className="block p-4 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-lg transition-all dark:bg-slate-700/50 dark:border-slate-600 dark:hover:bg-slate-700 dark:hover:border-blue-500">
            <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2">Present Progressive</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Actions happening now. <em>"She is working."</em></p>
          </Link>
          <Link to="/grammar/verb-tenses/present-perfect/" className="block p-4 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-lg transition-all dark:bg-slate-700/50 dark:border-slate-600 dark:hover:bg-slate-700 dark:hover:border-blue-500">
            <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2">Present Perfect</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Past actions connected to now. <em>"She has finished."</em></p>
          </Link>
          <Link to="/grammar/verb-tenses/present-perfect-progressive/" className="block p-4 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-lg transition-all dark:bg-slate-700/50 dark:border-slate-600 dark:hover:bg-slate-700 dark:hover:border-blue-500">
            <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2">Present Perfect Progressive</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Duration up to now. <em>"She has been working."</em></p>
          </Link>
        </div>

        {/* Past Tenses Section */}
        <h2 id="past" className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-5 pb-2 border-b border-slate-200 dark:border-slate-700">
          Past Tenses
        </h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
          Past tenses describe actions that happened before now, including completed actions, ongoing past actions, and sequences of events.
        </p>

        <div className="grid gap-4 md:grid-cols-2 mb-8">
          <Link to="/grammar/verb-tenses/past-simple/" className="block p-4 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-lg transition-all dark:bg-slate-700/50 dark:border-slate-600 dark:hover:bg-slate-700 dark:hover:border-blue-500">
            <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2">Past Simple</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Completed past actions. <em>"She worked yesterday."</em></p>
          </Link>
          <Link to="/grammar/verb-tenses/past-progressive/" className="block p-4 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-lg transition-all dark:bg-slate-700/50 dark:border-slate-600 dark:hover:bg-slate-700 dark:hover:border-blue-500">
            <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2">Past Progressive</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Ongoing past actions. <em>"She was working at 5 PM."</em></p>
          </Link>
          <Link to="/grammar/verb-tenses/past-perfect/" className="block p-4 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-lg transition-all dark:bg-slate-700/50 dark:border-slate-600 dark:hover:bg-slate-700 dark:hover:border-blue-500">
            <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2">Past Perfect</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Action before another past event. <em>"She had finished."</em></p>
          </Link>
          <Link to="/grammar/verb-tenses/past-perfect-progressive/" className="block p-4 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-lg transition-all dark:bg-slate-700/50 dark:border-slate-600 dark:hover:bg-slate-700 dark:hover:border-blue-500">
            <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2">Past Perfect Progressive</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Duration before a past moment. <em>"She had been working."</em></p>
          </Link>
        </div>

        {/* Future Tenses Section */}
        <h2 id="future" className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-5 pb-2 border-b border-slate-200 dark:border-slate-700">
          Future Tenses
        </h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
          Future tenses describe actions that will happen, predictions, plans, and expected situations.
        </p>

        <div className="grid gap-4 md:grid-cols-2 mb-8">
          <Link to="/grammar/verb-tenses/future-simple/" className="block p-4 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-lg transition-all dark:bg-slate-700/50 dark:border-slate-600 dark:hover:bg-slate-700 dark:hover:border-blue-500">
            <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2">Future Simple</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Predictions, decisions. <em>"She will work tomorrow."</em></p>
          </Link>
          <Link to="/grammar/verb-tenses/future-progressive/" className="block p-4 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-lg transition-all dark:bg-slate-700/50 dark:border-slate-600 dark:hover:bg-slate-700 dark:hover:border-blue-500">
            <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2">Future Progressive</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Ongoing action at a future time. <em>"She will be working."</em></p>
          </Link>
          <Link to="/grammar/verb-tenses/future-perfect/" className="block p-4 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-lg transition-all dark:bg-slate-700/50 dark:border-slate-600 dark:hover:bg-slate-700 dark:hover:border-blue-500">
            <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2">Future Perfect</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Completion before a future time. <em>"She will have finished."</em></p>
          </Link>
          <Link to="/grammar/verb-tenses/future-perfect-progressive/" className="block p-4 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-lg transition-all dark:bg-slate-700/50 dark:border-slate-600 dark:hover:bg-slate-700 dark:hover:border-blue-500">
            <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2">Future Perfect Progressive</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Duration before a future time. <em>"She will have been working."</em></p>
          </Link>
        </div>

        {/* How to Choose the Right Tense */}
        <h2 id="how-to-choose" className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-5 pb-2 border-b border-slate-200 dark:border-slate-700">
          How to Choose the Right Tense
        </h2>
        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-slate-300 dark:border-slate-600">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-700">
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">If you want to say...</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Use this tense</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">A habit or general fact</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Present Simple</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Something happening right now</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Present Progressive</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">A past action with present relevance</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Present Perfect</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">How long something has been happening</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Present Perfect Progressive</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">A completed past action</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Past Simple</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">An action in progress at a past moment</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Past Progressive</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Something that happened before another past event</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Past Perfect</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Duration before a past event</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Past Perfect Progressive</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">A prediction or spontaneous decision</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Future Simple</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">An action in progress at a future time</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Future Progressive</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Completion before a future deadline</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Future Perfect</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Duration before a future time</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Future Perfect Progressive</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* FAQ */}
        <h2 id="faq" className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-5 pb-2 border-b border-slate-200 dark:border-slate-700">
          Frequently Asked Questions
        </h2>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">How many verb tenses are there in English?</h3>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
          English has 12 main verb tenses: 4 present tenses, 4 past tenses, and 4 future tenses. Each group contains simple, progressive, perfect, and perfect progressive forms.
        </p>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">What is the difference between simple and progressive tenses?</h3>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
          Simple tenses describe completed actions, habits, or facts. Progressive tenses emphasize that an action is ongoing or in progress at a specific time. Progressive tenses use <em>be + verb-ing</em>.
        </p>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">What is the difference between perfect and simple tenses?</h3>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
          Perfect tenses connect an earlier action to a later time, emphasizing completion or relevance. Simple tenses focus on when the action happened without emphasizing connection to another time.
        </p>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">Which tense is used most often in English?</h3>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
          Present Simple and Past Simple are the most commonly used tenses in everyday English. Present Perfect is also very common, especially in British English.
        </p>

        {/* Practice Section */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">Practice Your Verb Tenses</h3>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            Ready to test your knowledge? Take our comprehensive quiz covering all 12 tenses.
          </p>
          <Link to="/quizzes/verb-tenses-quiz/" className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
            Take the Verb Tenses Quiz →
          </Link>
        </div>

        {/* Editorial Attribution */}
        <div className="bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 p-6 rounded-lg">
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            By <Link to="/about/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold">TypoGrammar</Link>
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

export default VerbTensesHubPage;
