import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const EverydayVsEveryDayPage: React.FC = () => {
  usePageMetadata({
    title: 'Everyday vs Every Day: What\'s the Difference? | TypoGrammar',
    description: 'Learn the difference between "everyday" (one word, adjective) and "every day" (two words, adverb phrase). Simple rules with examples.',
    canonical: 'https://typogrammar.com/grammar-mistakes/everyday-vs-every-day/'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Everyday vs Every Day: What's the Difference?",
    "description": "'Everyday' (one word) is an adjective meaning ordinary or common. 'Every day' (two words) is an adverb phrase meaning each day or daily.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/everyday-vs-every-day" },
    "datePublished": "2026-03-12",
    "dateModified": "2026-03-12"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "When do I use 'everyday' vs 'every day'?",
        "acceptedAnswer": { "@type": "Answer", "text": "Use 'everyday' (one word) as an adjective before a noun: 'everyday activities.' Use 'every day' (two words) as an adverb meaning daily: 'I exercise every day.'" }
      },
      {
        "@type": "Question",
        "name": "What's a quick test to know which one to use?",
        "acceptedAnswer": { "@type": "Answer", "text": "Try replacing with 'each day.' If it works, use 'every day' (two words). 'I run every day' → 'I run each day' ✓. But 'everyday clothes' → 'each day clothes' ✗, so use 'everyday.'" }
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
        <span className="text-slate-900 dark:text-slate-100">Everyday vs Every Day</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          Everyday vs Every Day: What's the Difference?
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-green-800 dark:text-green-200">
            <strong>"Everyday"</strong> (one word) = adjective meaning "ordinary"<br />
            <strong>"Every day"</strong> (two words) = adverb phrase meaning "each day"
          </p>
        </div>

        {/* Key Difference Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            The Key Difference
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="font-bold text-blue-900 dark:text-blue-100 mb-2">EVERYDAY (adjective)</p>
              <p className="text-blue-800 dark:text-blue-200 text-sm mb-2">Describes a noun</p>
              <p className="text-blue-700 dark:text-blue-300 italic">"everyday clothes" = ordinary clothes</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <p className="font-bold text-purple-900 dark:text-purple-100 mb-2">EVERY DAY (adverb)</p>
              <p className="text-purple-800 dark:text-purple-200 text-sm mb-2">Describes when/how often</p>
              <p className="text-purple-700 dark:text-purple-300 italic">"I work out every day" = daily</p>
            </div>
          </div>

          <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
            <p className="text-lg text-teal-800 dark:text-teal-200">
              <strong>Quick Test:</strong> If you can replace it with "each day," use <strong>every day</strong> (two words).
            </p>
          </div>
        </section>

        {/* Examples Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Examples
          </h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">EVERYDAY (one word - adjective)</h3>
            <div className="space-y-2">
              <div className="flex items-start">
                <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
                <span className="text-lg text-slate-700 dark:text-slate-300">These are my <strong>everyday</strong> shoes. (ordinary shoes)</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
                <span className="text-lg text-slate-700 dark:text-slate-300"><strong>Everyday</strong> tasks can be boring. (common tasks)</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
                <span className="text-lg text-slate-700 dark:text-slate-300">It's just an <strong>everyday</strong> occurrence. (normal occurrence)</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">EVERY DAY (two words - adverb)</h3>
            <div className="space-y-2">
              <div className="flex items-start">
                <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
                <span className="text-lg text-slate-700 dark:text-slate-300">I go to the gym <strong>every day</strong>. (= each day)</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
                <span className="text-lg text-slate-700 dark:text-slate-300">She practices piano <strong>every day</strong>. (= daily)</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
                <span className="text-lg text-slate-700 dark:text-slate-300">The bus comes at 8 AM <strong>every day</strong>. (= each day)</span>
              </div>
            </div>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-3">Common Mistakes</h3>
            <div className="space-y-2">
              <div className="flex items-start">
                <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
                <span className="text-lg text-slate-700 dark:text-slate-300 line-through">I exercise <strong>everyday</strong>.</span>
                <span className="text-green-600 dark:text-green-400 ml-2">→ every day</span>
              </div>
              <div className="flex items-start">
                <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
                <span className="text-lg text-slate-700 dark:text-slate-300 line-through">These are <strong>every day</strong> activities.</span>
                <span className="text-green-600 dark:text-green-400 ml-2">→ everyday</span>
              </div>
            </div>
          </div>
        </section>

        {/* Memory Trick Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Memory Trick
          </h2>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <p className="text-lg text-purple-800 dark:text-purple-200 mb-3">
              <strong>Replace with "each day":</strong>
            </p>
            <ul className="text-purple-700 dark:text-purple-300 space-y-2">
              <li>• "I run <strong>every day</strong>" → "I run <strong>each day</strong>" ✔ (makes sense)</li>
              <li>• "<strong>Everyday</strong> clothes" → "<strong>Each day</strong> clothes" ✘ (doesn't work)</li>
            </ul>
            <p className="text-purple-800 dark:text-purple-200 mt-3 font-semibold">
              If "each day" works → use <strong>every day</strong> (two words)
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
              <strong>Fill in the blank:</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "Learning English _____ will help you improve quickly." (everyday / every day)
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
                  <strong>Answer:</strong> Learning English <strong>every day</strong> will help you improve quickly.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-2">
                  "Each day" works here, so we use "every day" (two words). It describes when/how often.
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
              <Link to="/grammar-mistakes/a-lot-or-alot/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → A Lot or Alot?
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/sometime-vs-sometimes/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Sometime vs Sometimes
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/into-vs-in-to/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Into vs In To
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

export default EverydayVsEveryDayPage;
