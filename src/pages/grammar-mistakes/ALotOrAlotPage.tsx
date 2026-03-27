import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const ALotOrAlotPage: React.FC = () => {
  usePageMetadata({
    title: 'A Lot or Alot? Which Is Correct? | TypoGrammar',
    description: 'Is it "a lot" or "alot"? Learn why "a lot" (two words) is always correct. "Alot" is a common spelling mistake that should be avoided.',
    canonical: 'https://typogrammar.com/grammar-mistakes/a-lot-or-alot'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "A Lot or Alot? Which Is Correct?",
    "description": "'A lot' (two words) is always correct. 'Alot' is not a word in English - it's a common spelling error. Always write 'a lot' as two separate words.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/a-lot-or-alot" },
    "datePublished": "2026-03-12",
    "dateModified": "2026-03-12"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is 'alot' a word?",
        "acceptedAnswer": { "@type": "Answer", "text": "No, 'alot' is not a word. It's a very common spelling mistake. The correct form is always 'a lot' - written as two separate words." }
      },
      {
        "@type": "Question",
        "name": "Why do people write 'alot'?",
        "acceptedAnswer": { "@type": "Answer", "text": "People often write 'alot' because they say 'a lot' quickly and it sounds like one word. Also, words like 'already' and 'always' are written as one word, which may cause confusion. However, 'a lot' must always be two words." }
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
        <span className="text-slate-900 dark:text-slate-100">A Lot or Alot</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          A Lot or Alot? Which Is Correct?
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-green-800 dark:text-green-200">
            <strong>"A lot"</strong> (two words) is always correct. <strong>"Alot"</strong> is not a word.
          </p>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            The Rule
          </h2>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
            <p className="text-lg text-blue-800 dark:text-blue-200">
              <strong>A lot</strong> = correct (always two words)<br />
              <span className="line-through">Alot</span> = incorrect (not a word)
            </p>
          </div>

          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            "A lot" means "a large amount" or "very much." It's always written as two separate words. "Alot" does not exist in standard English dictionaries.
          </p>

          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
            <p className="text-lg text-red-800 dark:text-red-200">
              <strong>Common Mistake:</strong> People write "alot" because they pronounce "a lot" quickly, making it sound like one word. But unlike "always" or "already," "a lot" is never combined.
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
              <span className="text-lg text-slate-700 dark:text-slate-300">I have <strong>a lot</strong> of work to do.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">I have <strong>alot</strong> of work to do.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">She travels <strong>a lot</strong>.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">She travels <strong>alot</strong>.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">Thanks <strong>a lot</strong> for your help!</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">There are <strong>a lot</strong> of people here.</span>
            </div>
          </div>
        </section>

        {/* Memory Tip Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Memory Tip
          </h2>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <p className="text-lg text-purple-800 dark:text-purple-200 mb-3">
              Think of it like <strong>"a bit"</strong> - you would never write "abit"!
            </p>
            <ul className="text-purple-700 dark:text-purple-300 space-y-1">
              <li>• <strong>a lot</strong> ✔ (like "a bit")</li>
              <li>• <span className="line-through">alot</span> ✘ (like "abit" - wrong!)</li>
            </ul>
          </div>
        </section>

        {/* Allot Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Don't Confuse with "Allot"
          </h2>
          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
            <p className="text-slate-700 dark:text-slate-300 mb-3">
              <strong>"Allot"</strong> is a real word, but it means something completely different:
            </p>
            <ul className="text-slate-700 dark:text-slate-300 space-y-2">
              <li>• <strong>Allot</strong> = to distribute or assign (verb)</li>
              <li>• <strong>A lot</strong> = a large amount (noun phrase)</li>
            </ul>
            <div className="mt-4 space-y-2 italic">
              <p className="text-slate-600 dark:text-slate-400">"I will <strong>allot</strong> 30 minutes for each task." (distribute)</p>
              <p className="text-slate-600 dark:text-slate-400">"I have <strong>a lot</strong> of tasks today." (many)</p>
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
              <strong>Which is correct?</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "I learned _____ from this course." (a lot / alot)
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
                  <strong>Answer:</strong> I learned <strong>a lot</strong> from this course.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-2">
                  "A lot" is always two words. "Alot" is not a valid English word.
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
              <Link to="/grammar-mistakes/everyday-vs-every-day" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Everyday vs Every Day
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/sometime-vs-sometimes" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Sometime vs Sometimes
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/into-vs-in-to" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Into vs In To
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

export default ALotOrAlotPage;
