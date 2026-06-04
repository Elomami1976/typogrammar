import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const HeDidntWentOrHeDidntGoPage: React.FC = () => {
  usePageMetadata({
    title: 'He Didn\'t Went or He Didn\'t Go? Which One Is Correct | TypoGrammar',
    description: 'Learn whether to say "he didn\'t went" or "he didn\'t go." The correct form is "he didn\'t go" because did already shows past tense.',
    canonical: 'https://typogrammar.com/grammar-mistakes/he-didnt-went-or-he-didnt-go/'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "He Didn't Went or He Didn't Go?",
    "description": "The correct form is 'he didn't go.' When using 'did' or 'didn't,' the main verb must be in its base form, not past tense.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/he-didnt-went-or-he-didnt-go" },
    "datePublished": "2026-03-07",
    "dateModified": "2026-03-07"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is it 'he didn't went' or 'he didn't go'?",
        "acceptedAnswer": { "@type": "Answer", "text": "The correct form is 'he didn't go' because after 'did' or 'didn't,' the main verb must be in its base form." }
      },
      {
        "@type": "Question",
        "name": "Why can't you say 'didn't went'?",
        "acceptedAnswer": { "@type": "Answer", "text": "'Did' already carries the past tense meaning, so using 'went' (past tense) creates a double past tense error." }
      }
    ]
  };

  return (
    <>
      <SchemaMarkup type="Article" data={articleSchema} />
      <SchemaMarkup type="FAQPage" data={faqSchema} />

      <nav className="mb-6 text-slate-600 dark:text-slate-400">
        <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
        {' › '}
        <Link to="/grammar-mistakes/" className="hover:text-blue-600 dark:hover:text-blue-400">Grammar Mistakes</Link>
        {' › '}
        <span className="text-slate-900 dark:text-slate-100">He Didn't Went or He Didn't Go</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          He Didn't Went or He Didn't Go? Which One Is Correct
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-green-800 dark:text-green-200 mb-2">
            The correct form is <strong>"he didn't go."</strong>
          </p>
          <p className="text-green-800 dark:text-green-200">
            When using "did" or "didn't," the main verb must be in its <em>base form</em> (infinitive without "to"), not in the past tense.
          </p>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explanation
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            In English, the auxiliary verb <strong>"did"</strong> carries the past tense meaning. The main verb that follows must stay in its <strong>base form</strong>.
          </p>
          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg mb-4">
            <p className="text-lg font-mono text-slate-800 dark:text-slate-200">
              Rule: <strong>Subject + didn't + base verb</strong>
            </p>
          </div>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            Using "went" after "didn't" creates a <strong>double past tense</strong>, which is grammatically incorrect.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-slate-300 dark:border-slate-600 mt-4">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-700">
                  <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left">Base Form</th>
                  <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left">Past Tense</th>
                  <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left">Negative Past</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">go</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">went</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">didn't <strong>go</strong></td></tr>
                <tr className="bg-slate-50 dark:bg-slate-800"><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">see</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">saw</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">didn't <strong>see</strong></td></tr>
                <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">eat</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">ate</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">didn't <strong>eat</strong></td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Examples Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Examples
          </h2>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">He <strong>didn't go</strong> to the party.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">She <strong>didn't see</strong> the message.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">They <strong>didn't know</strong> about the change.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">He <strong>didn't went</strong> to the party.</span>
            </div>
          </div>
        </section>

        {/* Common Mistake Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Common Mistake
          </h2>
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-4">
            <p className="text-lg text-red-800 dark:text-red-200">
              <strong>Incorrect:</strong> We didn't saw the movie last night.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <p className="text-lg text-green-800 dark:text-green-200">
              <strong>Correct:</strong> We didn't see the movie last night.
            </p>
          </div>
        </section>

        {/* Practice Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Practice
          </h2>
          <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
              <strong>Fix the sentence:</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "I didn't ate breakfast this morning."
            </p>
            <button
              onClick={() => setShowAnswer(!showAnswer)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {showAnswer ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswer && (
              <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <p className="text-lg text-green-800 dark:text-green-200">
                  <strong>Answer:</strong> I didn't <strong>eat</strong> breakfast this morning.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Related Grammar Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Related Grammar
          </h2>
          <ul className="space-y-2 text-lg">
            <li>
              <Link to="/grammar-mistakes/did-you-went-or-did-you-go/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Did You Went or Did You Go?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/i-am-agree-or-i-agree/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → I Am Agree or I Agree?
              </Link>
            </li>
            <li>
              <Link to="/grammar/verb-tenses/past-simple/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Past Simple Tense
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → All Grammar Mistakes
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
};

export default HeDidntWentOrHeDidntGoPage;
