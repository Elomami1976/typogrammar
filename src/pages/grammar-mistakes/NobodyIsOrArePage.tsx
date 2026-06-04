import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const NobodyIsOrArePage: React.FC = () => {
  usePageMetadata({
    title: 'Nobody Is or Are? Which Is Correct? | TypoGrammar',
    description: 'Is it "nobody is" or "nobody are"? Learn why "nobody is" is correct. Nobody is singular and takes singular verbs.',
    canonical: 'https://typogrammar.com/grammar-mistakes/nobody-is-or-are/'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Nobody Is or Are? Which Is Correct?",
    "description": "'Nobody is' is correct. 'Nobody' is an indefinite pronoun that is grammatically singular and requires singular verbs like 'is,' 'has,' and 'was.'",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/nobody-is-or-are" },
    "datePublished": "2026-03-12",
    "dateModified": "2026-03-12"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is it 'nobody is' or 'nobody are'?",
        "acceptedAnswer": { "@type": "Answer", "text": "'Nobody is' is correct. 'Nobody' is an indefinite pronoun that is grammatically singular. Use singular verbs: nobody is, nobody has, nobody was, nobody knows." }
      },
      {
        "@type": "Question",
        "name": "Why is 'nobody' singular?",
        "acceptedAnswer": { "@type": "Answer", "text": "'Nobody' means 'no single person' or 'not any person.' It refers to zero individuals, but grammatically it functions as a singular pronoun. The same rule applies to no one, nothing, and none (when referring to uncountable things)." }
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
        <span className="text-slate-900 dark:text-slate-100">Nobody Is or Are</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          Nobody Is or Are? Which Is Correct?
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-green-800 dark:text-green-200">
            <strong>"Nobody is"</strong> is correct. "Nobody" is grammatically singular and takes singular verbs.
          </p>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Why Is "Nobody" Singular?
          </h2>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
            <p className="text-lg text-blue-800 dark:text-blue-200">
              <strong>Nobody</strong> = no single body (person) = not any person
            </p>
          </div>

          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            "Nobody" refers to zero people, but grammatically it functions as a singular pronoun. Think of it as negating "somebody" - and "somebody" is singular too.
          </p>

          <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
            <p className="text-lg text-teal-800 dark:text-teal-200">
              <strong>Rule:</strong> Indefinite pronouns ending in <em>-body</em>, <em>-one</em>, or <em>-thing</em> are always singular, including negative ones: nobody, no one, nothing.
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
              <span className="text-lg text-slate-700 dark:text-slate-300"><strong>Nobody is</strong> perfect.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through"><strong>Nobody are</strong> perfect.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300"><strong>Nobody was</strong> home when I called.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through"><strong>Nobody were</strong> home when I called.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300"><strong>Nobody knows</strong> the trouble I've seen.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300"><strong>Nobody has</strong> the answer.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300"><strong>Nobody wants</strong> to fail.</span>
            </div>
          </div>
        </section>

        {/* Nobody vs No One Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Nobody vs No One
          </h2>
          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
            <p className="text-slate-700 dark:text-slate-300 mb-3">
              "Nobody" and "no one" mean the same thing and both take singular verbs:
            </p>
            <ul className="text-slate-700 dark:text-slate-300 space-y-1">
              <li>• Nobody <strong>is</strong> here. = No one <strong>is</strong> here.</li>
              <li>• Nobody <strong>knows</strong>. = No one <strong>knows</strong>.</li>
              <li>• Nobody <strong>was</strong> hurt. = No one <strong>was</strong> hurt.</li>
            </ul>
            <p className="text-slate-600 dark:text-slate-400 mt-3 italic">
              "No one" is slightly more formal than "nobody."
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
              "Nobody _____ what the future holds." (knows/know)
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
                  <strong>Answer:</strong> Nobody <strong>knows</strong> what the future holds.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-2">
                  "Nobody" is singular, so use the singular verb "knows" (he/she knows).
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
              <Link to="/grammar-mistakes/everybody-is-or-are/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Everybody Is or Are?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/someone-is-or-are/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Someone Is or Are?
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

export default NobodyIsOrArePage;
