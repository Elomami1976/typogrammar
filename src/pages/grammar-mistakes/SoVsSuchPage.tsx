import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const SoVsSuchPage: React.FC = () => {
  usePageMetadata({
    title: 'So vs. Such: What\'s the Difference? | TypoGrammar',
    description: 'Learn the difference between so and such in English. So is used before adjectives and adverbs, while such is used before nouns and noun phrases.',
    canonical: 'https://typogrammar.com/grammar-mistakes/so-vs-such/'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "So vs. Such",
    "description": "So comes before adjectives and adverbs. Such comes before nouns (usually with a/an or an adjective + noun).",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/so-vs-such" },
    "datePublished": "2026-04-18",
    "dateModified": "2026-04-18"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between so and such?",
        "acceptedAnswer": { "@type": "Answer", "text": "'So' is followed by an adjective or adverb: 'She is so kind.' 'Such' is followed by a noun or adjective + noun: 'She is such a kind person.' Both can be followed by 'that' to show a result." }
      },
      {
        "@type": "Question",
        "name": "Is it 'so a good idea' or 'such a good idea'?",
        "acceptedAnswer": { "@type": "Answer", "text": "The correct phrase is 'such a good idea.' When you have an article (a/an) and a noun, use 'such,' not 'so.'" }
      },
      {
        "@type": "Question",
        "name": "Can both so and such be used with 'that'?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. 'She was so tired that she slept for 12 hours.' / 'It was such a long journey that she slept for 12 hours.' Both patterns express result." }
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
        <span className="text-slate-900 dark:text-slate-100">So vs. Such</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          So vs. Such: What's the Difference?
        </h1>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3">Quick Answer</h2>
          <ul className="space-y-2 text-lg text-green-800 dark:text-green-200">
            <li><strong>So</strong> + adjective / adverb: "She is <em>so</em> beautiful." / "He runs <em>so</em> fast."</li>
            <li><strong>Such</strong> + (a/an) + noun phrase: "She is <em>such</em> a beautiful woman." / "It was <em>such</em> a long day."</li>
          </ul>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explanation
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">SO + adjective/adverb</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-3">Use <strong>so</strong> directly before an adjective or adverb:</p>
              <ul className="space-y-1 text-slate-700 dark:text-slate-300">
                <li>so <em>happy</em> (adjective)</li>
                <li>so <em>tired</em> (adjective)</li>
                <li>so <em>quickly</em> (adverb)</li>
                <li>so <em>difficult</em> (adjective)</li>
              </ul>
              <div className="mt-3 p-3 bg-blue-100 dark:bg-blue-900/40 rounded">
                <p className="text-sm text-blue-800 dark:text-blue-200 font-medium">Pattern: so + ADJ/ADV (+ that + result)</p>
              </div>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg">
              <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-3">SUCH + noun phrase</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-3">Use <strong>such</strong> before a noun or adjective + noun:</p>
              <ul className="space-y-1 text-slate-700 dark:text-slate-300">
                <li>such <em>a good idea</em> (a/an + adj + noun)</li>
                <li>such <em>a long day</em></li>
                <li>such <em>nice people</em> (plural noun)</li>
                <li>such <em>hard work</em> (uncountable noun)</li>
              </ul>
              <div className="mt-3 p-3 bg-purple-100 dark:bg-purple-900/40 rounded">
                <p className="text-sm text-purple-800 dark:text-purple-200 font-medium">Pattern: such (+ a/an) + (ADJ) + NOUN (+ that + result)</p>
              </div>
            </div>
          </div>

          <div className="bg-teal-50 dark:bg-teal-900/20 p-5 rounded-lg">
            <h3 className="text-lg font-bold text-teal-900 dark:text-teal-100 mb-2">The "that" Result Pattern</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-2">Both <em>so</em> and <em>such</em> can introduce a result with "that":</p>
            <p className="text-slate-700 dark:text-slate-300 italic">"The film was <strong>so</strong> boring <strong>that</strong> I fell asleep."</p>
            <p className="text-slate-700 dark:text-slate-300 italic mt-1">"It was <strong>such</strong> a boring film <strong>that</strong> I fell asleep."</p>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">Both sentences mean the same thing. The structure changes, not the meaning.</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Examples
          </h2>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">She is <strong>so</strong> talented.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">She is <strong>such</strong> a talented singer.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">She is <strong>so</strong> a talented singer. (so cannot come before "a")</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">It was <strong>such</strong> difficult. (such cannot come before a bare adjective)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">It was <strong>such</strong> a difficult exam.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">They are <strong>such</strong> nice people. (plural, no "a")</span>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Common Mistake
          </h2>
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-4">
            <p className="text-lg text-red-800 dark:text-red-200">
              <strong>Incorrect:</strong> It was so a great party!
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <p className="text-lg text-green-800 dark:text-green-200">
              <strong>Correct:</strong> It was such a great party! / The party was so great!
            </p>
          </div>
          <p className="text-slate-600 dark:text-slate-400 mt-3 text-sm">
            Tip: If there is a noun in the phrase, use <em>such</em>. If there is only an adjective with no noun, use <em>so</em>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Quick Comparison Table
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-slate-700 dark:text-slate-300">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-700">
                  <th className="p-3 border border-slate-200 dark:border-slate-600 font-bold">Pattern</th>
                  <th className="p-3 border border-slate-200 dark:border-slate-600 font-bold">Word</th>
                  <th className="p-3 border border-slate-200 dark:border-slate-600 font-bold">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-slate-200 dark:border-slate-600">so + adjective</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600 font-bold text-blue-600 dark:text-blue-400">so</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600 italic">He is so kind.</td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-700/30">
                  <td className="p-3 border border-slate-200 dark:border-slate-600">such a + adj + noun</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600 font-bold text-purple-600 dark:text-purple-400">such</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600 italic">He is such a kind person.</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-200 dark:border-slate-600">such + plural noun</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600 font-bold text-purple-600 dark:text-purple-400">such</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600 italic">They are such kind people.</td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-700/30">
                  <td className="p-3 border border-slate-200 dark:border-slate-600">such + uncountable noun</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600 font-bold text-purple-600 dark:text-purple-400">such</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600 italic">It requires such hard work.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Practice
          </h2>
          <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
              <strong>Choose the correct word:</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "It was _____ a wonderful experience that I would love to repeat it." (so / such)
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
                  <strong>Answer:</strong> It was <strong>such</strong> a wonderful experience that I would love to repeat it.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-1">
                  "A wonderful experience" is a noun phrase (article + adj + noun), so use <em>such</em>.
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Related Grammar
          </h2>
          <ul className="space-y-2 text-lg">
            <li>
              <Link to="/grammar-mistakes/very-vs-too-vs-so/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Very vs. Too vs. So
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/so-much-vs-so-many/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → So Much vs. So Many
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

export default SoVsSuchPage;
