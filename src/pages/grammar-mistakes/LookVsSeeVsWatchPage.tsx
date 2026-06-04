import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const LookVsSeeVsWatchPage: React.FC = () => {
  usePageMetadata({
    title: 'Look vs See vs Watch: What\'s the Difference? | TypoGrammar',
    description: 'Learn the difference between look, see, and watch. See = perceive with eyes. Look = direct your eyes. Watch = look at something moving or changing.',
    canonical: 'https://typogrammar.com/grammar-mistakes/look-vs-see-vs-watch/'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Look vs See vs Watch: What's the Difference?",
    "description": "See is passive perception. Look is intentionally directing your eyes. Watch is paying attention to something moving or changing over time.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/look-vs-see-vs-watch" },
    "datePublished": "2026-03-12",
    "dateModified": "2026-03-12"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between look, see, and watch?",
        "acceptedAnswer": { "@type": "Answer", "text": "See = perceive with your eyes (often unintentional). Look = direct your eyes toward something (intentional, but brief). Watch = observe something moving or changing over time (intentional, longer duration)." }
      },
      {
        "@type": "Question",
        "name": "Do you watch or see a movie?",
        "acceptedAnswer": { "@type": "Answer", "text": "Both are correct but with different contexts. 'Watch a movie' = at home, focusing on it. 'See a movie' = go to the cinema, experience it. You 'watch TV' but 'see a film at the cinema.'" }
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
        <span className="text-slate-900 dark:text-slate-100">Look vs See vs Watch</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          Look vs See vs Watch: What's the Difference?
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-green-800 dark:text-green-200 mb-1">
            <strong>See</strong> = perceive with your eyes (often unintentional)
          </p>
          <p className="text-lg text-green-800 dark:text-green-200 mb-1">
            <strong>Look</strong> = direct your eyes toward something (intentional)
          </p>
          <p className="text-lg text-green-800 dark:text-green-200">
            <strong>Watch</strong> = observe something that moves/changes (longer attention)
          </p>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explanation
          </h2>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="font-bold text-blue-900 dark:text-blue-100 mb-2">SEE 👁️</p>
              <p className="text-blue-800 dark:text-blue-200 mb-2">Passive perception</p>
              <p className="text-blue-700 dark:text-blue-300 text-sm mb-2">You see without effort - it just happens</p>
              <p className="text-blue-700 dark:text-blue-300 italic">"I saw a bird outside."</p>
              <p className="text-blue-700 dark:text-blue-300 italic">"Can you see the mountains?"</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <p className="font-bold text-purple-900 dark:text-purple-100 mb-2">LOOK 👀</p>
              <p className="text-purple-800 dark:text-purple-200 mb-2">Intentional direction</p>
              <p className="text-purple-700 dark:text-purple-300 text-sm mb-2">You choose to direct your eyes</p>
              <p className="text-purple-700 dark:text-purple-300 italic">"Look at this photo!"</p>
              <p className="text-purple-700 dark:text-purple-300 italic">"She looked out the window."</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <p className="font-bold text-green-900 dark:text-green-100 mb-2">WATCH 📺</p>
              <p className="text-green-800 dark:text-green-200 mb-2">Observe over time</p>
              <p className="text-green-700 dark:text-green-300 text-sm mb-2">For moving/changing things</p>
              <p className="text-green-700 dark:text-green-300 italic">"Watch this video."</p>
              <p className="text-green-700 dark:text-green-300 italic">"I watched the sunset."</p>
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg mb-4">
            <p className="font-bold text-slate-800 dark:text-slate-200 mb-2">Common Collocations:</p>
            <div className="grid md:grid-cols-3 gap-2 text-slate-700 dark:text-slate-300">
              <div>
                <p className="font-semibold">SEE:</p>
                <p>see a movie, see a doctor, see someone, see the point</p>
              </div>
              <div>
                <p className="font-semibold">LOOK:</p>
                <p>look at, look for, look after, look forward to</p>
              </div>
              <div>
                <p className="font-semibold">WATCH:</p>
                <p>watch TV, watch a game, watch out, watch your step</p>
              </div>
            </div>
          </div>

          <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
            <p className="text-lg text-teal-800 dark:text-teal-200">
              <strong>Note:</strong> "Look" uses prepositions (look <u>at</u>, look <u>for</u>). "See" and "watch" usually don't need prepositions before the object.
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
              <span className="text-lg text-slate-700 dark:text-slate-300">I <strong>saw</strong> your sister at the mall. (I noticed her)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300"><strong>Look at</strong> this beautiful painting! (direct your eyes)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">We <strong>watched</strong> the football game together. (observed over time)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">Did you <strong>see</strong> what happened? (perceive)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">I like to <strong>watch</strong> the children play. (observe activity)</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">I <strong>watched</strong> your sister at the mall. (implies surveillance)</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through"><strong>See at</strong> this photo! (wrong preposition)</span>
            </div>
          </div>
        </section>

        {/* Movie/TV Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Movies and TV
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="font-bold text-blue-900 dark:text-blue-100 mb-2">SEE a movie/film</p>
              <p className="text-blue-800 dark:text-blue-200">Going to the cinema as an experience</p>
              <p className="text-blue-700 dark:text-blue-300 italic mt-2">"Let's go see a movie tonight."</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <p className="font-bold text-purple-900 dark:text-purple-100 mb-2">WATCH a movie/TV</p>
              <p className="text-purple-800 dark:text-purple-200">At home, paying attention to the screen</p>
              <p className="text-purple-700 dark:text-purple-300 italic mt-2">"I watched a movie on Netflix."</p>
            </div>
          </div>
        </section>

        {/* Practice Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Practice
          </h2>
          <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
              <strong>Choose look, see, or watch:</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "_____ out! There's a car coming!"
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
                  <strong>Answer:</strong> <strong>Watch</strong> out! / <strong>Look</strong> out!
                </p>
                <p className="text-green-700 dark:text-green-300 mt-2">
                  Both "Watch out!" and "Look out!" are correct warnings. "Watch out" is more common in American English.
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
              <Link to="/grammar-mistakes/listen-vs-hear/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Listen vs. Hear
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/say-vs-tell/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Say vs. Tell
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/speak-vs-talk/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Speak vs. Talk
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

export default LookVsSeeVsWatchPage;
