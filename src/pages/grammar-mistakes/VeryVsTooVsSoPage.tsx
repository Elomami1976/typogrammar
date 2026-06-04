import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const VeryVsTooVsSoPage: React.FC = () => {
  usePageMetadata({
    title: 'Very vs. Too vs. So: What\'s the Difference? | TypoGrammar',
    description: 'Learn the difference between very, too, and so in English. Very intensifies an adjective neutrally, too means excessively (a problem), and so is used for emphasis or result.',
    canonical: 'https://typogrammar.com/grammar-mistakes/very-vs-too-vs-so/'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Very vs. Too vs. So",
    "description": "Very intensifies adjectives neutrally. Too means excessively and signals a problem. So is used for strong emphasis or to introduce a result clause.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/very-vs-too-vs-so" },
    "datePublished": "2026-04-18",
    "dateModified": "2026-04-18"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between very and too?",
        "acceptedAnswer": { "@type": "Answer", "text": "'Very' is a neutral intensifier that makes an adjective stronger. 'Too' means excessively and suggests a problem or negative result. For example: 'The soup is very hot' (it's hot, but fine). 'The soup is too hot' (I can't eat it)." }
      },
      {
        "@type": "Question",
        "name": "When do you use 'so' instead of 'very'?",
        "acceptedAnswer": { "@type": "Answer", "text": "'So' is used for strong emotional emphasis or before a result clause with 'that'. Example: 'She is so kind!' or 'He was so tired that he fell asleep.'" }
      },
      {
        "@type": "Question",
        "name": "Is 'too' always negative?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes, 'too' almost always implies something is excessive and causes a problem. 'Too + adjective + to + verb' is a very common pattern: 'He is too young to drive.'" }
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
        <span className="text-slate-900 dark:text-slate-100">Very vs. Too vs. So</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          Very vs. Too vs. So: What's the Difference?
        </h1>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3">Quick Answer</h2>
          <ul className="space-y-2 text-lg text-green-800 dark:text-green-200">
            <li><strong>Very</strong> = neutral intensifier ("very cold", just a description)</li>
            <li><strong>Too</strong> = excessive, signals a problem ("too cold", I can't go out)</li>
            <li><strong>So</strong> = strong emphasis or used with "that" for result ("so cold that I stayed home")</li>
          </ul>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explanation
          </h2>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-2">VERY</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-2">Use for neutral emphasis. No problem implied.</p>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1 text-sm">
                <li>very good</li>
                <li>very tired</li>
                <li>very expensive</li>
                <li>very happy</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-red-900 dark:text-red-100 mb-2">TOO</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-2">Use when something is excessive. Implies a negative result.</p>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1 text-sm">
                <li>too expensive (I can't buy it)</li>
                <li>too tired (I can't work)</li>
                <li>too young to drive</li>
                <li>too hot to eat</li>
              </ul>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-2">SO</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-2">Use for strong emotional emphasis or with "that" for results.</p>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1 text-sm">
                <li>so beautiful!</li>
                <li>so tired that...</li>
                <li>so good!</li>
                <li>so cold that I cried</li>
              </ul>
            </div>
          </div>

          <div className="bg-teal-50 dark:bg-teal-900/20 p-5 rounded-lg mt-4">
            <h3 className="text-lg font-bold text-teal-900 dark:text-teal-100 mb-2">Key Grammar Pattern</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-2"><strong>Too + adjective + to + infinitive</strong> (shows impossibility or difficulty):</p>
            <p className="text-slate-700 dark:text-slate-300 italic">"She is too young to vote."</p>
            <p className="text-slate-700 dark:text-slate-300 italic mt-1">"The bag is too heavy to carry."</p>
            <p className="text-slate-700 dark:text-slate-300 mb-2 mt-3"><strong>So + adjective + that + clause</strong> (shows result):</p>
            <p className="text-slate-700 dark:text-slate-300 italic">"He was so tired that he fell asleep immediately."</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Examples
          </h2>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">The movie was <strong>very</strong> long. (neutral, just describing length)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">The movie was <strong>too</strong> long. (negative, I got bored / it was a problem)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">The movie was <strong>so</strong> long that I fell asleep. (result)</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">I am <strong>too</strong> happy today. (no problem implied, use "very" or "so")</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">I am <strong>very</strong> happy today. / I am <strong>so</strong> happy today!</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">He is <strong>very</strong> young to drive. (missing the negative implication, use "too")</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">He is <strong>too</strong> young to drive.</span>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Common Mistake
          </h2>
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-4">
            <p className="text-lg text-red-800 dark:text-red-200">
              <strong>Incorrect:</strong> I am too excited about the trip! (says it's a problem)
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <p className="text-lg text-green-800 dark:text-green-200">
              <strong>Correct:</strong> I am very excited about the trip! / I am so excited about the trip!
            </p>
          </div>
          <p className="text-slate-600 dark:text-slate-400 mt-3 text-sm">
            Many learners use "too" when they mean "very" or "so." Remember: <em>too</em> always implies something is a problem.
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
                  <th className="p-3 border border-slate-200 dark:border-slate-600 font-bold">Word</th>
                  <th className="p-3 border border-slate-200 dark:border-slate-600 font-bold">Meaning</th>
                  <th className="p-3 border border-slate-200 dark:border-slate-600 font-bold">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-slate-200 dark:border-slate-600 font-bold text-blue-600 dark:text-blue-400">very</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600">neutral intensifier</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600 italic">The coffee is very hot.</td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-700/30">
                  <td className="p-3 border border-slate-200 dark:border-slate-600 font-bold text-red-600 dark:text-red-400">too</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600">excessively (problem)</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600 italic">The coffee is too hot to drink.</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-200 dark:border-slate-600 font-bold text-purple-600 dark:text-purple-400">so</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600">strong emphasis / result</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-600 italic">The coffee is so hot that I burned my tongue.</td>
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
              "The water was _____ cold that nobody wanted to swim." (very / too / so)
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
                  <strong>Answer:</strong> The water was <strong>so</strong> cold that nobody wanted to swim.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-1">
                  Use "so ... that" to show a result or consequence.
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
              <Link to="/grammar-mistakes/so-vs-such/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → So vs. Such
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/so-much-vs-so-many/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → So Much vs. So Many
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/too-much-vs-too-many/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Too Much vs. Too Many
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

export default VeryVsTooVsSoPage;
