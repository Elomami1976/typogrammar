import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const FondOfOrFondForPage: React.FC = () => {
  usePageMetadata({
    title: 'Fond of or Fond for? Which Is Correct? | TypoGrammar',
    description: 'Is it "fond of" or "fond for"? The correct preposition is "of." Learn why "fond of" is the standard English expression with examples and practice.',
    canonical: 'https://typogrammar.com/grammar-mistakes/fond-of-or-fond-for/'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Fond of or Fond for? Which Is Correct?",
    "description": "'Fond of' is correct. The adjective 'fond' is always followed by 'of,' not 'for.' This is a fixed preposition collocation: fond of someone/something.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/fond-of-or-fond-for" },
    "datePublished": "2026-03-30",
    "dateModified": "2026-03-30"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is it 'fond of' or 'fond for'?",
        "acceptedAnswer": { "@type": "Answer", "text": "'Fond of' is correct. The adjective 'fond' always takes the preposition 'of.' For example: 'I am fond of classical music,' not 'I am fond for classical music.'" }
      },
      {
        "@type": "Question",
        "name": "What does 'fond of' mean?",
        "acceptedAnswer": { "@type": "Answer", "text": "'Fond of' means having a liking or affection for something or someone. It can describe mild to strong affection. Example: 'She is fond of chocolate' / 'He grew fond of her over time.'" }
      },
      {
        "@type": "Question",
        "name": "Can 'fond of' be followed by a verb?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. When followed by a verb, use the gerund (-ing form): 'I am fond of reading,' not 'I am fond of to read.'" }
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
        <span className="text-slate-900 dark:text-slate-100">Fond of or Fond for</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          Fond of or Fond for? Which Is Correct?
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-green-800 dark:text-green-200">
            <strong>"Fond of"</strong> is always correct. "Fond for" is a preposition error. Say "I am fond <strong>of</strong> music," not "I am fond <strong>for</strong> music."
          </p>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            The Rule
          </h2>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
            <p className="text-lg text-blue-800 dark:text-blue-200">
              <strong>fond + of + noun / pronoun / gerund</strong>
            </p>
          </div>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            "Fond" is an adjective with a fixed preposition: <strong>"of."</strong> It describes a liking or affection for someone or something. There is no situation where "fond for" is grammatically correct in standard English.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <p className="font-bold text-green-800 dark:text-green-200 mb-2">✔ Correct</p>
              <ul className="text-slate-700 dark:text-slate-300 space-y-1 text-sm">
                <li>fond <strong>of</strong> music</li>
                <li>fond <strong>of</strong> her grandmother</li>
                <li>fond <strong>of</strong> reading</li>
                <li>very fond <strong>of</strong> cooking</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
              <p className="font-bold text-red-800 dark:text-red-200 mb-2">✘ Incorrect</p>
              <ul className="text-slate-700 dark:text-slate-300 space-y-1 text-sm line-through">
                <li>fond <strong>for</strong> music</li>
                <li>fond <strong>for</strong> her grandmother</li>
                <li>fond <strong>for</strong> reading</li>
                <li>very fond <strong>for</strong> cooking</li>
              </ul>
            </div>
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
              <span className="text-lg text-slate-700 dark:text-slate-300">I am very <strong>fond of</strong> Italian food.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">I am very <strong>fond for</strong> Italian food.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">She is <strong>fond of</strong> her students and they know it.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">He grew <strong>fond of</strong> the small town where he worked.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">They are <strong>fond of</strong> hiking in the mountains.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">Are you <strong>fond for</strong> animals?</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">Are you <strong>fond of</strong> animals?</span>
            </div>
          </div>
        </section>

        {/* Fond of: Degrees of Feeling */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Using "Fond of" to Express Degrees of Feeling
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            "Fond" describes a mild to strong liking. You can intensify it with adverbs:
          </p>
          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
            <ul className="text-slate-700 dark:text-slate-300 space-y-2">
              <li>• <strong>quite fond of:</strong> a moderate liking</li>
              <li>• <strong>very fond of:</strong> a strong liking</li>
              <li>• <strong>particularly fond of:</strong> a specific preference</li>
              <li>• <strong>grow fond of:</strong> to develop a liking over time</li>
            </ul>
          </div>
          <div className="mt-4 space-y-2">
            <p className="text-slate-700 dark:text-slate-300 italic">"She became quite <strong>fond of</strong> her new neighbourhood."</p>
            <p className="text-slate-700 dark:text-slate-300 italic">"He is particularly <strong>fond of</strong> jazz music."</p>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Common Mistakes
          </h2>
          <div className="space-y-4">
            <div>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-2">
                <p className="text-lg text-red-800 dark:text-red-200"><strong>Incorrect:</strong> I am fond for reading novels.</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <p className="text-lg text-green-800 dark:text-green-200"><strong>Correct:</strong> I am fond <strong>of</strong> reading novels.</p>
              </div>
            </div>
            <div>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-2">
                <p className="text-lg text-red-800 dark:text-red-200"><strong>Incorrect:</strong> My grandfather was fond for old movies.</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <p className="text-lg text-green-800 dark:text-green-200"><strong>Correct:</strong> My grandfather was fond <strong>of</strong> old movies.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Practice */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Practice
          </h2>
          <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
              <strong>Fill in the blank with the correct preposition:</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "My children are very fond _____ watching cartoons." (of / for)
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
                  <strong>Answer:</strong> My children are very fond <strong>of</strong> watching cartoons.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-1">
                  "Fond" always takes the preposition "of."
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Related Grammar */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Related Grammar
          </h2>
          <ul className="space-y-2 text-lg">
            <li>
              <Link to="/grammar-mistakes/capable-of-or-capable-to/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Capable of or Capable to?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/accused-of-or-accused-for/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Accused of or Accused for?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/proud-of-or-proud-for/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Proud of or Proud for?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/interested-in-or-interested-on/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Interested in or Interested on?
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

export default FondOfOrFondForPage;
