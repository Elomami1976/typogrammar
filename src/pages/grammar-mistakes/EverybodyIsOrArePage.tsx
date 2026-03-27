import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const EverybodyIsOrArePage: React.FC = () => {
  usePageMetadata({
    title: 'Everybody Is or Are? Which Is Correct? | TypoGrammar',
    description: 'Is it "everybody is" or "everybody are"? Learn why "everybody is" is correct. Everybody is singular and takes singular verbs.',
    canonical: 'https://typogrammar.com/grammar-mistakes/everybody-is-or-are'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Everybody Is or Are? Which Is Correct?",
    "description": "'Everybody is' is correct. Despite referring to multiple people, 'everybody' is grammatically singular and requires singular verbs like 'is,' 'has,' and 'was.'",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/everybody-is-or-are" },
    "datePublished": "2026-03-12",
    "dateModified": "2026-03-12"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is it 'everybody is' or 'everybody are'?",
        "acceptedAnswer": { "@type": "Answer", "text": "'Everybody is' is correct. 'Everybody' is an indefinite pronoun that is grammatically singular, even though it refers to multiple people. Use singular verbs: everybody is, everybody has, everybody was." }
      },
      {
        "@type": "Question",
        "name": "Why is 'everybody' singular?",
        "acceptedAnswer": { "@type": "Answer", "text": "'Everybody' means 'every single person' - it emphasizes individuals one by one, not as a group. This makes it grammatically singular. The same rule applies to everyone, anyone, someone, nobody, etc." }
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
        <span className="text-slate-900 dark:text-slate-100">Everybody Is or Are</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          Everybody Is or Are? Which Is Correct?
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-green-800 dark:text-green-200">
            <strong>"Everybody is"</strong> is correct. "Everybody" is grammatically singular and takes singular verbs.
          </p>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Why Is "Everybody" Singular?
          </h2>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
            <p className="text-lg text-blue-800 dark:text-blue-200">
              <strong>Everybody</strong> = every single body (person) = each individual one by one
            </p>
          </div>

          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            Although "everybody" refers to multiple people, it treats them as individuals rather than as a group. Think of it as "every single person" - emphasizing one person at a time.
          </p>

          <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
            <p className="text-lg text-amber-800 dark:text-amber-200">
              <strong>Rule:</strong> Indefinite pronouns ending in <em>-body</em>, <em>-one</em>, or <em>-thing</em> are always singular: everybody, everyone, somebody, someone, anybody, anyone, nobody, everything, etc.
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
              <span className="text-lg text-slate-700 dark:text-slate-300"><strong>Everybody is</strong> welcome to the party.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through"><strong>Everybody are</strong> welcome to the party.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300"><strong>Everybody was</strong> surprised by the news.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through"><strong>Everybody were</strong> surprised by the news.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300"><strong>Everybody knows</strong> the answer.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300"><strong>Everybody has</strong> their own opinion.</span>
            </div>
          </div>
        </section>

        {/* Similar Words Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Similar Singular Pronouns
          </h2>
          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
            <p className="text-slate-700 dark:text-slate-300 mb-3">All of these take singular verbs:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-slate-700 dark:text-slate-300">
              <span>• everybody <strong>is</strong></span>
              <span>• everyone <strong>is</strong></span>
              <span>• somebody <strong>is</strong></span>
              <span>• someone <strong>is</strong></span>
              <span>• anybody <strong>is</strong></span>
              <span>• anyone <strong>is</strong></span>
              <span>• nobody <strong>is</strong></span>
              <span>• no one <strong>is</strong></span>
              <span>• everything <strong>is</strong></span>
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
              "Everybody _____ excited about the upcoming vacation." (is/are)
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
                  <strong>Answer:</strong> Everybody <strong>is</strong> excited about the upcoming vacation.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-2">
                  "Everybody" is singular, so use the singular verb "is."
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
              <Link to="/grammar-mistakes/everyone-is-or-everyone-are" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Everyone Is or Are?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/someone-is-or-are" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Someone Is or Are?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/nobody-is-or-are" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Nobody Is or Are?
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

export default EverybodyIsOrArePage;
