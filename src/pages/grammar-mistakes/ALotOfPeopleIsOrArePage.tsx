import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const ALotOfPeopleIsOrArePage: React.FC = () => {
  usePageMetadata({
    title: 'A Lot of People Is or A Lot of People Are? | TypoGrammar',
    description: 'Learn whether to say "a lot of people is" or "a lot of people are." The correct form is "a lot of people are" because "people" is a plural noun.',
    canonical: 'https://typogrammar.com/grammar-mistakes/a-lot-of-people-is-or-are'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "A Lot of People Is or Are?",
    "description": "The correct form is 'a lot of people are.' The verb agrees with 'people' (plural), not with 'a lot.' Learn this subject-verb agreement rule.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/a-lot-of-people-is-or-are" },
    "datePublished": "2026-03-12",
    "dateModified": "2026-03-12"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is it 'a lot of people is' or 'a lot of people are'?",
        "acceptedAnswer": { "@type": "Answer", "text": "The correct form is 'a lot of people are.' The verb agrees with the noun after 'of' (people = plural), not with 'a lot.'" }
      },
      {
        "@type": "Question",
        "name": "When do we use 'a lot of' with 'is'?",
        "acceptedAnswer": { "@type": "Answer", "text": "Use 'a lot of + is' with uncountable nouns: 'A lot of water is' or 'A lot of time is needed.' But with countable plurals, use 'are.'" }
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
        <span className="text-slate-900 dark:text-slate-100">A Lot of People Is or Are</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          A Lot of People Is or Are? Which One Is Correct
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-green-800 dark:text-green-200 mb-2">
            The correct form is <strong>"a lot of people are."</strong>
          </p>
          <p className="text-green-800 dark:text-green-200">
            The verb agrees with "people" (plural noun), not with "a lot."
          </p>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explanation
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            With expressions like <strong>"a lot of," "lots of," "plenty of,"</strong> and <strong>"some of,"</strong> the verb agrees with the noun that follows "of":
          </p>
          
          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg mb-4">
            <p className="text-lg font-mono text-slate-800 dark:text-slate-200">
              Rule: <strong>A lot of + [noun] + verb that agrees with [noun]</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="font-bold text-blue-900 dark:text-blue-100 mb-2">Plural noun → Plural verb</p>
              <ul className="text-blue-800 dark:text-blue-200 space-y-1">
                <li>A lot of <strong>people are</strong></li>
                <li>A lot of <strong>students are</strong></li>
                <li>A lot of <strong>books are</strong></li>
              </ul>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <p className="font-bold text-purple-900 dark:text-purple-100 mb-2">Uncountable noun → Singular verb</p>
              <ul className="text-purple-800 dark:text-purple-200 space-y-1">
                <li>A lot of <strong>water is</strong></li>
                <li>A lot of <strong>time is</strong></li>
                <li>A lot of <strong>money is</strong></li>
              </ul>
            </div>
          </div>

          <p className="text-lg text-slate-700 dark:text-slate-300">
            Since "people" is a plural noun (the plural of "person"), it takes the plural verb "are."
          </p>
        </section>

        {/* Examples Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Examples
          </h2>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">A lot of people <strong>are</strong> waiting in line.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">A lot of people <strong>have</strong> complained about the noise.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">A lot of people <strong>were</strong> at the concert.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">A lot of people <strong>is</strong> waiting in line.</span>
            </div>
          </div>
        </section>

        {/* Compare with Uncountable */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Compare with Uncountable Nouns
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            When "a lot of" is followed by an uncountable noun, use a singular verb:
          </p>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">A lot of work <strong>is</strong> still needed.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">A lot of information <strong>was</strong> provided.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">A lot of traffic <strong>is</strong> expected today.</span>
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
              <strong>Incorrect:</strong> A lot of people is interested in this topic.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <p className="text-lg text-green-800 dark:text-green-200">
              <strong>Correct:</strong> A lot of people are interested in this topic.
            </p>
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
              "A lot of people _____ (think/thinks) that exercise is important."
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
                  <strong>Answer:</strong> A lot of people <strong>think</strong> that exercise is important.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-2">
                  "People" is plural, so use the plural verb "think."
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
              <Link to="/grammar-mistakes/people-is-or-people-are" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → People Is or People Are?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/a-number-of-vs-the-number-of" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → A Number Of vs The Number Of
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/a-group-of-people-is-or-are" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → A Group of People Is or Are?
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

export default ALotOfPeopleIsOrArePage;
