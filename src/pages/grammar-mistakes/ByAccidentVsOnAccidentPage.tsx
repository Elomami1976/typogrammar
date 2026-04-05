import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const ByAccidentVsOnAccidentPage: React.FC = () => {
  usePageMetadata({
    title: 'By Accident vs. On Accident: Which Is Correct? | TypoGrammar',
    description: 'Learn whether to say "by accident" or "on accident" in English. "By accident" is the standard and universally accepted form. Clear examples and explanations.',
    canonical: 'https://typogrammar.com/grammar-mistakes/by-accident-vs-on-accident'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "By Accident vs. On Accident",
    "description": "\"By accident\" is the standard, universally accepted phrase in English. \"On accident\" is an informal variant heard in some American dialects but is not considered correct in formal writing.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": {
      "@type": "Organization",
      "name": "TypoGrammar",
      "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://typogrammar.com/grammar-mistakes/by-accident-vs-on-accident"
    },
    "datePublished": "2026-03-29",
    "dateModified": "2026-03-29"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is it correct to say 'on accident'?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "'By accident' is the standard and universally accepted form. 'On accident' is informal and is heard in some American dialects, but it is not accepted in formal writing, exams, or academic English."
        }
      },
      {
        "@type": "Question",
        "name": "Why do some people say 'on accident'?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "People often say 'on accident' by analogy with 'on purpose.' Since 'on purpose' is correct, some speakers assume 'on accident' is its natural opposite. However, this is not how the idiom developed historically, and 'by accident' remains the correct form."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between by accident and by mistake?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Both 'by accident' and 'by mistake' mean something was done unintentionally. 'By accident' often implies an unforeseen event, while 'by mistake' implies an error in judgment or confusion."
        }
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
        <Link to="/grammar-mistakes" className="hover:text-blue-600 dark:hover:text-blue-400">Grammar Mistakes</Link>
        {' › '}
        <span className="text-slate-900 dark:text-slate-100">By Accident vs. On Accident</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          By Accident vs. On Accident: Which Is Correct?
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-green-800 dark:text-green-200 mb-2">
            <strong>By accident</strong> is the correct and standard phrase in English.
          </p>
          <p className="text-lg text-green-800 dark:text-green-200">
            <strong>On accident</strong> is informal and not accepted in formal writing or grammar exams.
          </p>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explanation
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            The phrase <strong>by accident</strong> has been used in English for centuries. It means something happened
            unintentionally or without planning. The preposition <strong>by</strong> is used in many similar fixed
            expressions, such as <em>by chance</em>, <em>by mistake</em>, and <em>by coincidence</em>.
          </p>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            <strong>On accident</strong> is used informally in some regions of the United States, often by analogy
            with the phrase <em>on purpose</em>. However, the logic doesn't hold — <em>on purpose</em> and
            <em> by accident</em> are separate idioms that evolved independently, and they are not interchangeable
            opposites in terms of preposition.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
              <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-2">✔ BY ACCIDENT</h3>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
                <li>Standard and universally accepted</li>
                <li>Used in all registers (formal, informal, academic)</li>
                <li>Correct in written and spoken English worldwide</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
              <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-2">✘ ON ACCIDENT</h3>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
                <li>Informal — limited to some American dialects</li>
                <li>Not accepted in formal writing or exams</li>
                <li>Considered nonstandard by most grammar guides</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why People Confuse Them */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Why People Say "On Accident"
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            The most common reason is the analogy with <strong>on purpose</strong>. Since the opposite of
            "accidental" is "intentional" (or "on purpose"), speakers sometimes infer that the opposite of
            "on purpose" should be "on accident." This reasoning feels natural, but English idioms don't always
            follow logical patterns.
          </p>
          <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-5 rounded-r-lg">
            <p className="text-slate-800 dark:text-slate-200 font-semibold mb-2">Remember this pattern:</p>
            <ul className="space-y-2 text-lg text-slate-700 dark:text-slate-300">
              <li>✔ I did it <strong>on purpose</strong>. (intentionally)</li>
              <li>✔ I did it <strong>by accident</strong>. (unintentionally)</li>
              <li className="line-through text-red-600 dark:text-red-400">✘ I did it on accident.</li>
            </ul>
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
              <span className="text-lg text-slate-700 dark:text-slate-300">
                I deleted the file <strong>by accident</strong>.
              </span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">
                She spilled her coffee <strong>by accident</strong>.
              </span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">
                They met <strong>by accident</strong> at the airport.
              </span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">
                He broke the vase <strong>by accident</strong>, not on purpose.
              </span>
            </div>
            <div className="flex items-start mt-4">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">
                I deleted the file <strong>on accident</strong>.
              </span>
            </div>
          </div>
        </section>

        {/* Related Expressions */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Related Expressions Using "By"
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            The preposition <strong>by</strong> is used in many idiomatic expressions similar to "by accident":
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { phrase: "by chance", meaning: "without planning" },
              { phrase: "by mistake", meaning: "due to an error" },
              { phrase: "by coincidence", meaning: "unexpectedly at the same time" },
              { phrase: "by luck", meaning: "through fortunate circumstances" },
              { phrase: "by design", meaning: "intentionally" },
              { phrase: "by surprise", meaning: "unexpectedly" },
            ].map((item) => (
              <div key={item.phrase} className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded-lg flex items-center gap-3">
                <span className="font-semibold text-blue-700 dark:text-blue-300">{item.phrase}</span>
                <span className="text-slate-500 dark:text-slate-400">—</span>
                <span className="text-slate-700 dark:text-slate-300">{item.meaning}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="bg-slate-50 dark:bg-slate-700/50 p-5 rounded-lg">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                Is "on accident" ever acceptable?
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                It is used casually in some American dialects, especially among younger speakers. However, it is
                not accepted in formal writing, academic essays, IELTS/TOEFL exams, or professional contexts.
                Always use <strong>by accident</strong> in writing.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-700/50 p-5 rounded-lg">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                What is the difference between "by accident" and "by mistake"?
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                Both mean something was done unintentionally. <strong>By accident</strong> often implies an
                unforeseen physical event (e.g., dropped something), while <strong>by mistake</strong> often
                implies an error in judgment or confusion (e.g., took the wrong bag).
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-700/50 p-5 rounded-lg">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                Why do we say "on purpose" but "by accident"?
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                These are fixed idiomatic expressions that developed independently over time. English idioms
                don't always follow predictable patterns, and these two phrases simply use different
                prepositions. The key is to memorize them as fixed phrases.
              </p>
            </div>
          </div>
        </section>

        {/* Practice Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Practice
          </h2>
          <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
              <strong>Choose the correct preposition:</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "I sent the email to the wrong person ___ accident." (by / on)
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
                  <strong>Answer:</strong> I sent the email to the wrong person <strong>by</strong> accident.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-1">
                  ("By accident" is the standard and correct phrase.)
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
              <Link to="/grammar-mistakes/discuss-or-discuss-about" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Discuss or Discuss About?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/different-from-or-different-than" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Different From or Different Than?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/should-have-vs-should-of" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Should Have vs. Should Of
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → All Grammar Mistakes
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
};

export default ByAccidentVsOnAccidentPage;
