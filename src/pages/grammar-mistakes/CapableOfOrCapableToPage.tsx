import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const CapableOfOrCapableToPage: React.FC = () => {
  usePageMetadata({
    title: 'Capable of or Capable to? Which Is Correct? | TypoGrammar',
    description: 'Is it "capable of" or "capable to"? The correct preposition is "of." Learn why "capable of" is standard English and see common examples with explanations.',
    canonical: 'https://typogrammar.com/grammar-mistakes/capable-of-or-capable-to'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Capable of or Capable to? Which Is Correct?",
    "description": "'Capable of' is the correct form. The adjective 'capable' is always followed by the preposition 'of,' not 'to.' This is a fixed collocation in English.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/capable-of-or-capable-to" },
    "datePublished": "2026-03-30",
    "dateModified": "2026-03-30"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is it 'capable of' or 'capable to'?",
        "acceptedAnswer": { "@type": "Answer", "text": "'Capable of' is correct. The adjective 'capable' always takes the preposition 'of.' Never say 'capable to do something' — say 'capable of doing something.'" }
      },
      {
        "@type": "Question",
        "name": "What follows 'capable of'?",
        "acceptedAnswer": { "@type": "Answer", "text": "'Capable of' is followed by a noun or a gerund (verb + -ing). For example: 'capable of success,' 'capable of doing it,' 'capable of great things.' Never use a bare infinitive (to + verb) after 'capable of.'" }
      },
      {
        "@type": "Question",
        "name": "What is the opposite of 'capable of'?",
        "acceptedAnswer": { "@type": "Answer", "text": "The opposite is 'incapable of.' For example: 'She is incapable of lying.' Both 'capable of' and 'incapable of' are followed by a noun or gerund." }
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
        <span className="text-slate-900 dark:text-slate-100">Capable of or Capable to</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          Capable of or Capable to? Which Is Correct?
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-green-800 dark:text-green-200">
            <strong>"Capable of"</strong> is correct. "Capable to" is a common preposition error. Always use "capable of doing something," never "capable to do something."
          </p>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            The Rule
          </h2>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
            <p className="text-lg text-blue-800 dark:text-blue-200">
              <strong>capable + of + noun/gerund</strong>
            </p>
            <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">Example: capable <em>of</em> solving problems / capable <em>of</em> great work</p>
          </div>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            "Capable" is an adjective that forms a fixed collocation with the preposition <strong>"of."</strong> This is one of many English adjectives with fixed prepositions learners must memorise.
          </p>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            The confusion often arises because similar words take infinitives — for example, "able <strong>to</strong> do." But "capable" follows a different pattern and takes "of" plus a gerund.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <p className="font-bold text-green-800 dark:text-green-200 mb-1">✔ Correct pattern</p>
              <p className="text-slate-700 dark:text-slate-300 font-mono">capable of + gerund/noun</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">She is capable of <strong>running</strong> the whole project.</p>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
              <p className="font-bold text-red-800 dark:text-red-200 mb-1">✘ Incorrect pattern</p>
              <p className="text-slate-700 dark:text-slate-300 font-mono line-through">capable to + infinitive</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 line-through">She is capable to run the whole project.</p>
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
              <span className="text-lg text-slate-700 dark:text-slate-300">He is <strong>capable of</strong> handling pressure.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">He is <strong>capable to</strong> handle pressure.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">This machine is <strong>capable of</strong> producing 1,000 units per hour.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">Every student is <strong>capable of</strong> improvement.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">She is <strong>capable of</strong> much more than this.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">Are you <strong>capable to</strong> complete this task?</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">Are you <strong>capable of</strong> completing this task?</span>
            </div>
          </div>
        </section>

        {/* Capable of vs Able to */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Capable of vs Able to
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            "Capable of" and "able to" both express ability, but they follow different grammatical patterns:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="font-bold text-blue-900 dark:text-blue-100 mb-2">CAPABLE OF + gerund</p>
              <p className="text-blue-800 dark:text-blue-200 italic">"She is capable of <strong>managing</strong> the team."</p>
              <p className="text-blue-700 dark:text-blue-300 text-sm mt-1">Often used to highlight potential or inherent ability.</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <p className="font-bold text-purple-900 dark:text-purple-100 mb-2">ABLE TO + infinitive</p>
              <p className="text-purple-800 dark:text-purple-200 italic">"She is able <strong>to manage</strong> the team."</p>
              <p className="text-purple-700 dark:text-purple-300 text-sm mt-1">Used for general or situational ability.</p>
            </div>
          </div>
          <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg mt-4">
            <p className="text-amber-800 dark:text-amber-200">
              <strong>Tip:</strong> Don't mix the patterns. Never say "capable to manage" or "able of managing."
            </p>
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
                <p className="text-lg text-red-800 dark:text-red-200"><strong>Incorrect:</strong> He is capable to solve any problem.</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <p className="text-lg text-green-800 dark:text-green-200"><strong>Correct:</strong> He is capable <strong>of</strong> solving any problem.</p>
              </div>
            </div>
            <div>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-2">
                <p className="text-lg text-red-800 dark:text-red-200"><strong>Incorrect:</strong> Children are capable to learn very quickly.</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <p className="text-lg text-green-800 dark:text-green-200"><strong>Correct:</strong> Children are capable <strong>of</strong> learning very quickly.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Practice */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Practice
          </h2>
          <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
              <strong>Choose the correct form:</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "I believe this team is capable _____ winning the championship." (of winning / to win)
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
                  <strong>Answer:</strong> …capable <strong>of winning</strong> the championship.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-1">
                  "Capable" always takes "of" + gerund, not "to" + infinitive.
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
              <Link to="/grammar-mistakes/fond-of-or-fond-for" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Fond of or Fond for?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/accused-of-or-accused-for" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Accused of or Accused for?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/proud-of-or-proud-for" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Proud of or Proud for?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/responsible-for-or-responsible-of" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Responsible for or Responsible of?
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

export default CapableOfOrCapableToPage;
