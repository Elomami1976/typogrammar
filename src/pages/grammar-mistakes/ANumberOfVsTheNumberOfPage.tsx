import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const ANumberOfVsTheNumberOfPage: React.FC = () => {
  usePageMetadata({
    title: 'A Number Of vs The Number Of: Singular or Plural? | TypoGrammar',
    description: 'Learn the difference between "a number of" (plural verb) and "the number of" (singular verb). Clear rules and examples for subject-verb agreement.',
    canonical: 'https://typogrammar.com/grammar-mistakes/a-number-of-vs-the-number-of'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "A Number Of vs The Number Of",
    "description": "'A number of' takes a plural verb (are/have). 'The number of' takes a singular verb (is/has). Learn this important subject-verb agreement rule.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/a-number-of-vs-the-number-of" },
    "datePublished": "2026-03-12",
    "dateModified": "2026-03-12"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is 'a number of' singular or plural?",
        "acceptedAnswer": { "@type": "Answer", "text": "'A number of' is plural. It means 'several' or 'many,' so it takes a plural verb (e.g., 'A number of students are absent')." }
      },
      {
        "@type": "Question",
        "name": "Is 'the number of' singular or plural?",
        "acceptedAnswer": { "@type": "Answer", "text": "'The number of' is singular. It refers to a specific quantity, so it takes a singular verb (e.g., 'The number of students is increasing')." }
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
        <span className="text-slate-900 dark:text-slate-100">A Number Of vs The Number Of</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          A Number Of vs The Number Of: Singular or Plural?
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <div className="text-lg text-green-800 dark:text-green-200 space-y-2">
            <p><strong>"A number of"</strong> + plural verb (are, have, were)</p>
            <p><strong>"The number of"</strong> + singular verb (is, has, was)</p>
          </div>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explanation
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            Although these phrases look similar, they have different meanings and take different verbs:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg">
              <h3 className="font-bold text-blue-900 dark:text-blue-100 text-lg mb-3">"A number of" = Several/Many</h3>
              <p className="text-blue-800 dark:text-blue-200 mb-2">
                Focuses on the <strong>plural items</strong> in the group.
              </p>
              <p className="text-blue-700 dark:text-blue-300 font-mono">
                → Takes a <strong>plural</strong> verb
              </p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg">
              <h3 className="font-bold text-purple-900 dark:text-purple-100 text-lg mb-3">"The number of" = The total/count</h3>
              <p className="text-purple-800 dark:text-purple-200 mb-2">
                Focuses on the <strong>quantity itself</strong> (a single number).
              </p>
              <p className="text-purple-700 dark:text-purple-300 font-mono">
                → Takes a <strong>singular</strong> verb
              </p>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
            <p className="text-lg text-amber-800 dark:text-amber-200">
              <strong>Memory trick:</strong> "<strong>A</strong> number of" → "<strong>A</strong>re" (plural) | "<strong>The</strong> number of" → "I<strong>s</strong>" (singular)
            </p>
          </div>
        </section>

        {/* Examples Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Examples
          </h2>
          
          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">"A number of" (plural verb)</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">A number of students <strong>are</strong> waiting outside.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">A number of problems <strong>have</strong> been reported.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">A number of employees <strong>were</strong> absent yesterday.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">A number of students <strong>is</strong> waiting outside.</span>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">"The number of" (singular verb)</h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">The number of students <strong>is</strong> increasing every year.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">The number of accidents <strong>has</strong> decreased.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">The number of applicants <strong>was</strong> surprisingly high.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">The number of students <strong>are</strong> increasing.</span>
            </div>
          </div>
        </section>

        {/* Common Mistake Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Common Mistakes
          </h2>
          <div className="space-y-4">
            <div>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-2">
                <p className="text-lg text-red-800 dark:text-red-200">
                  <strong>Incorrect:</strong> A number of people was injured.
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <p className="text-lg text-green-800 dark:text-green-200">
                  <strong>Correct:</strong> A number of people <strong>were</strong> injured.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-2">
                <p className="text-lg text-red-800 dark:text-red-200">
                  <strong>Incorrect:</strong> The number of complaints are rising.
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <p className="text-lg text-green-800 dark:text-green-200">
                  <strong>Correct:</strong> The number of complaints <strong>is</strong> rising.
                </p>
              </div>
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
              <strong>Choose the correct verb:</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "The number of visitors to the museum _____ (has/have) doubled this year."
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
                  <strong>Answer:</strong> The number of visitors to the museum <strong>has</strong> doubled this year.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-2">
                  "The number of" refers to a quantity (singular), so use "has."
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
              <Link to="/grammar-mistakes/a-lot-of-people-is-or-are" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → A Lot of People Is or Are?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/a-group-of-people-is-or-are" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → A Group of People Is or Are?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/none-is-or-are" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → None Is or Are?
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

export default ANumberOfVsTheNumberOfPage;
