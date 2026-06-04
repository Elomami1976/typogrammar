import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const ToVsForPage: React.FC = () => {
  usePageMetadata({
    title: 'To vs. For: What\'s the Difference? | TypoGrammar',
    description: 'Learn the difference between to and for in English. To is used for direction, purpose with verbs, and recipients. For is used for benefit, duration, and reasons.',
    canonical: 'https://typogrammar.com/grammar-mistakes/to-vs-for/'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "To vs. For",
    "description": "To is used for direction, purpose (with infinitive), and indirect objects. For is used for benefit, duration, and purpose (with noun/gerund).",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/to-vs-for" },
    "datePublished": "2026-04-18",
    "dateModified": "2026-04-18"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between to and for?",
        "acceptedAnswer": { "@type": "Answer", "text": "'To' is used for direction (go to school), purpose with an infinitive (I came to help), and indirect objects (I gave it to him). 'For' is used for purpose with a noun (I came for help), benefit (I did it for you), and duration (I waited for two hours)." }
      },
      {
        "@type": "Question",
        "name": "Is it 'thanks to you' or 'thanks for you'?",
        "acceptedAnswer": { "@type": "Answer", "text": "Both exist but have different meanings: 'Thanks to you' means because of you (often negative: 'Thanks to you, I missed the bus'). 'Thank you for' is used before a noun or gerund to express gratitude: 'Thank you for your help.'" }
      },
      {
        "@type": "Question",
        "name": "When do I use 'for' vs 'to' for purpose?",
        "acceptedAnswer": { "@type": "Answer", "text": "Use 'to + infinitive' for purpose: 'I went to the shop to buy milk.' Use 'for + noun/gerund' for purpose: 'I went to the shop for milk.' / 'I use this knife for cutting bread.' Both express purpose but use different grammatical structures." }
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
        <span className="text-slate-900 dark:text-slate-100">To vs. For</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          To vs. For: What's the Difference?
        </h1>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3">Quick Answer</h2>
          <ul className="space-y-2 text-lg text-green-800 dark:text-green-200">
            <li><strong>To</strong> = direction, purpose (+ infinitive), recipient: "I went <em>to</em> the store <em>to</em> buy bread."</li>
            <li><strong>For</strong> = benefit, duration, purpose (+ noun/gerund): "I did it <em>for</em> you." / "I waited <em>for</em> an hour."</li>
          </ul>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Main Uses of TO
          </h2>
          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-2">1. Direction / Movement</h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm">Use <strong>to</strong> to show movement toward a destination:</p>
              <p className="text-slate-700 dark:text-slate-300 italic mt-1">"I'm going <strong>to</strong> the office." / "She flew <strong>to</strong> New York."</p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-2">2. Purpose (+ infinitive)</h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm">Use <strong>to + verb</strong> to show purpose:</p>
              <p className="text-slate-700 dark:text-slate-300 italic mt-1">"I called <strong>to</strong> apologize." / "She studied hard <strong>to</strong> pass the exam."</p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-2">3. Recipient (indirect object)</h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm">Use <strong>to</strong> to show who receives something:</p>
              <p className="text-slate-700 dark:text-slate-300 italic mt-1">"I gave the book <strong>to</strong> her." / "He sent a message <strong>to</strong> his boss."</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Main Uses of FOR
          </h2>
          <div className="space-y-4">
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <h3 className="font-bold text-purple-900 dark:text-purple-100 mb-2">1. Benefit / On behalf of</h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm">Use <strong>for</strong> to show who benefits:</p>
              <p className="text-slate-700 dark:text-slate-300 italic mt-1">"I did it <strong>for</strong> you." / "She cooked dinner <strong>for</strong> the family."</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <h3 className="font-bold text-purple-900 dark:text-purple-100 mb-2">2. Duration</h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm">Use <strong>for</strong> to show how long something lasts:</p>
              <p className="text-slate-700 dark:text-slate-300 italic mt-1">"I waited <strong>for</strong> two hours." / "She lived there <strong>for</strong> 10 years."</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <h3 className="font-bold text-purple-900 dark:text-purple-100 mb-2">3. Purpose (+ noun/gerund)</h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm">Use <strong>for + noun</strong> or <strong>for + gerund</strong> for purpose:</p>
              <p className="text-slate-700 dark:text-slate-300 italic mt-1">"I went to the store <strong>for</strong> bread." / "This knife is <strong>for</strong> cutting vegetables."</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Examples
          </h2>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">She went to the gym <strong>to</strong> exercise. (purpose + infinitive)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">She went to the gym <strong>for</strong> a workout. (purpose + noun)</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">I bought this gift <strong>to</strong> you. (use "for" with recipients of gifts)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-slate-300 dark:text-slate-300">I bought this gift <strong>for</strong> you. / I gave this gift <strong>to</strong> you.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">I have been studying <strong>to</strong> five hours.</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">I have been studying <strong>for</strong> five hours.</span>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Common Mistake
          </h2>
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-4">
            <p className="text-lg text-red-800 dark:text-red-200">
              <strong>Incorrect:</strong> Thank you to help me. / I am grateful to your support.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <p className="text-lg text-green-800 dark:text-green-200">
              <strong>Correct:</strong> Thank you for helping me. / I am grateful for your support.
            </p>
          </div>
          <p className="text-slate-600 dark:text-slate-400 mt-3 text-sm">
            "Grateful," "thankful," and "responsible" take <em>for</em>, not <em>to</em>.
          </p>
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
              "I'm going to the kitchen _____ get some water." (to / for)
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
                  <strong>Answer:</strong> I'm going to the kitchen <strong>to</strong> get some water.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-1">
                  "To get" = purpose expressed with infinitive. (Compare: "I'm going to the kitchen <strong>for</strong> some water.", also correct, but uses a noun.)
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
              <Link to="/grammar-mistakes/by-vs-with/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → By vs. With
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/since-vs-for/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Since vs. For
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/in-vs-on-vs-at-time-and-place/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → In vs. On vs. At
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

export default ToVsForPage;
