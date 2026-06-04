import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const EveryoneHasOrHavePage: React.FC = () => {
  usePageMetadata({
    title: 'Everyone Has or Have? Which Is Correct? | TypoGrammar',
    description: 'Is it "everyone has" or "everyone have"? Learn why "everyone has" is correct. Everyone is singular and takes singular verbs.',
    canonical: 'https://typogrammar.com/grammar-mistakes/everyone-has-or-have/'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Everyone Has or Have? Which Is Correct?",
    "description": "'Everyone has' is correct. Despite referring to multiple people, 'everyone' is grammatically singular and requires singular verbs like 'has,' 'is,' and 'was.'",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/everyone-has-or-have" },
    "datePublished": "2026-03-12",
    "dateModified": "2026-03-12"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is it 'everyone has' or 'everyone have'?",
        "acceptedAnswer": { "@type": "Answer", "text": "'Everyone has' is correct. 'Everyone' is an indefinite pronoun that is grammatically singular, even though it refers to multiple people. Use singular verbs: everyone has, everyone is, everyone was." }
      },
      {
        "@type": "Question",
        "name": "Why is 'everyone' singular?",
        "acceptedAnswer": { "@type": "Answer", "text": "'Everyone' means 'every single person' - it emphasizes individuals one by one, not as a group. This makes it grammatically singular. The same rule applies to everybody, anyone, someone, nobody, etc." }
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
        <span className="text-slate-900 dark:text-slate-100">Everyone Has or Have</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          Everyone Has or Have? Which Is Correct?
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-green-800 dark:text-green-200">
            <strong>"Everyone has"</strong> is correct. "Everyone" is grammatically singular and takes singular verbs.
          </p>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Why Is "Everyone" Singular?
          </h2>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
            <p className="text-lg text-blue-800 dark:text-blue-200">
              <strong>Everyone</strong> = every single one = each individual person
            </p>
          </div>

          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            Although "everyone" refers to multiple people, it treats them as individuals rather than a group. It emphasizes "every single one" - one person at a time.
          </p>

          <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
            <p className="text-lg text-teal-800 dark:text-teal-200">
              <strong>Rule:</strong> Use <strong>"has"</strong> (not "have") with everyone, everybody, someone, somebody, anyone, anybody, no one, nobody.
            </p>
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
              <span className="text-lg text-slate-700 dark:text-slate-300"><strong>Everyone has</strong> their own opinion.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through"><strong>Everyone have</strong> their own opinion.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300"><strong>Everyone has</strong> to submit the form by Friday.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through"><strong>Everyone have</strong> to submit the form by Friday.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300"><strong>Everyone has</strong> been invited to the meeting.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300"><strong>Everyone has</strong> a role to play.</span>
            </div>
          </div>
        </section>

        {/* Has vs Have Comparison */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Has vs Have with Pronouns
          </h2>
          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-green-700 dark:text-green-400 mb-2">Use HAS:</p>
                <ul className="text-slate-700 dark:text-slate-300 space-y-1">
                  <li>• Everyone <strong>has</strong></li>
                  <li>• Everybody <strong>has</strong></li>
                  <li>• Someone <strong>has</strong></li>
                  <li>• Somebody <strong>has</strong></li>
                  <li>• Anyone <strong>has</strong></li>
                  <li>• Nobody <strong>has</strong></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Use HAVE:</p>
                <ul className="text-slate-700 dark:text-slate-300 space-y-1">
                  <li>• They <strong>have</strong></li>
                  <li>• We <strong>have</strong></li>
                  <li>• All people <strong>have</strong></li>
                  <li>• Many people <strong>have</strong></li>
                  <li>• Most students <strong>have</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Everyone vs All People */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Everyone vs All People
          </h2>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">→</span>
              <span className="text-lg text-slate-700 dark:text-slate-300"><strong>Everyone has</strong> finished. (singular verb)</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">→</span>
              <span className="text-lg text-slate-700 dark:text-slate-300"><strong>All people have</strong> finished. (plural verb)</span>
            </div>
          </div>
          <p className="text-slate-600 dark:text-slate-400 mt-4 italic">
            Same meaning, different grammar!
          </p>
        </section>

        {/* Practice Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Practice
          </h2>
          <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
              <strong>Choose the correct verb:</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "Everyone _____ agreed to the new policy." (has/have)
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
                  <strong>Answer:</strong> Everyone <strong>has</strong> agreed to the new policy.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-2">
                  "Everyone" is singular, so use the singular verb "has."
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
              <Link to="/grammar-mistakes/everyone-is-or-everyone-are/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Everyone Is or Are?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/everybody-has-or-have/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Everybody Has or Have?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/someone-has-or-have/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Someone Has or Have?
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

export default EveryoneHasOrHavePage;
