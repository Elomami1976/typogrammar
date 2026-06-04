import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const OneOfTheStudentsIsOrArePage: React.FC = () => {
  usePageMetadata({
    title: 'One of the Students Is or Are? Which One Is Correct | TypoGrammar',
    description: 'Learn whether to say "one of the students is" or "one of the students are." The correct form is "one of the students is" because "one" is singular.',
    canonical: 'https://typogrammar.com/grammar-mistakes/one-of-the-students-is-or-are/'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "One of the Students Is or Are?",
    "description": "The correct form is 'one of the students is.' The verb agrees with 'one' (singular), not with 'students.' Learn this important subject-verb agreement rule.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/one-of-the-students-is-or-are" },
    "datePublished": "2026-03-12",
    "dateModified": "2026-03-12"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is it 'one of the students is' or 'one of the students are'?",
        "acceptedAnswer": { "@type": "Answer", "text": "The correct form is 'one of the students is.' The subject is 'one' (singular), so it takes a singular verb." }
      },
      {
        "@type": "Question",
        "name": "Why is 'one of the' followed by a plural noun?",
        "acceptedAnswer": { "@type": "Answer", "text": "The noun after 'of the' is plural because you're selecting one from a group. However, the verb agrees with 'one,' not with the plural noun." }
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
        <span className="text-slate-900 dark:text-slate-100">One of the Students Is or Are</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          One of the Students Is or Are? Which One Is Correct
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-green-800 dark:text-green-200 mb-2">
            The correct form is <strong>"one of the students is."</strong>
          </p>
          <p className="text-green-800 dark:text-green-200">
            The subject is "one" (singular), so it takes a singular verb, even though "students" is plural.
          </p>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explanation
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            In the phrase "one of the students," the true subject is <strong>"one"</strong>-a singular pronoun. The phrase "of the students" is just describing which "one" we're talking about.
          </p>
          
          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg mb-4">
            <p className="text-lg font-mono text-slate-800 dark:text-slate-200">
              Structure: <strong>One</strong> of the [plural noun] + <strong>singular verb</strong>
            </p>
          </div>

          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            <strong>Why is "students" plural?</strong><br />
            The noun after "one of the" must be plural because you're selecting one from a group of multiple items. But the verb still agrees with "one."
          </p>

          <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
            <p className="text-lg text-teal-800 dark:text-teal-200">
              <strong>Remember:</strong> Find the true subject! "One of the students" → subject = one → verb = is
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
              <span className="text-lg text-slate-700 dark:text-slate-300">One of the students <strong>is</strong> absent today.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">One of the books <strong>has</strong> been damaged.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">One of my friends <strong>lives</strong> in Paris.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">One of the reasons <strong>is</strong> cost.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">One of the students <strong>are</strong> absent today.</span>
            </div>
          </div>
        </section>

        {/* Pattern Breakdown */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Pattern Breakdown
          </h2>
          <div className="bg-slate-100 dark:bg-slate-700 p-6 rounded-lg">
            <p className="text-lg text-slate-800 dark:text-slate-200 mb-4">
              <strong>One of the students is absent.</strong>
            </p>
            <div className="space-y-2 text-slate-700 dark:text-slate-300">
              <p>• <span className="font-mono bg-blue-100 dark:bg-blue-900 px-2 rounded">One</span> → Subject (singular)</p>
              <p>• <span className="font-mono bg-gray-200 dark:bg-gray-600 px-2 rounded">of the students</span> → Prepositional phrase (describes which one)</p>
              <p>• <span className="font-mono bg-green-100 dark:bg-green-900 px-2 rounded">is</span> → Verb (agrees with "one")</p>
            </div>
          </div>
        </section>

        {/* Common Mistake Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Common Mistake
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            Many people mistakenly make the verb agree with the nearest noun ("students" or "books") instead of the true subject ("one").
          </p>
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-4">
            <p className="text-lg text-red-800 dark:text-red-200">
              <strong>Incorrect:</strong> One of the students are late.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <p className="text-lg text-green-800 dark:text-green-200">
              <strong>Correct:</strong> One of the students is late.
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
              <strong>Choose the correct verb:</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "One of the windows _____ (was/were) broken during the storm."
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
                  <strong>Answer:</strong> One of the windows <strong>was</strong> broken during the storm.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-2">
                  The subject is "one" (singular), so use "was."
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
              <Link to="/grammar-mistakes/each-of-the-students-is-or-are/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Each of the Students Is or Are?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/each-are-or-each-is/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Each Are or Each Is?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/none-is-or-are/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → None Is or Are?
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

export default OneOfTheStudentsIsOrArePage;
