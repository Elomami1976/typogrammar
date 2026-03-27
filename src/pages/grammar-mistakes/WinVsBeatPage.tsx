import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const WinVsBeatPage: React.FC = () => {
  usePageMetadata({
    title: 'Win vs Beat: What\'s the Difference? | TypoGrammar',
    description: 'Learn the difference between "win" and "beat." Win is for prizes, games, competitions. Beat is for opponents. You win a game but beat a person.',
    canonical: 'https://typogrammar.com/grammar-mistakes/win-vs-beat'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Win vs Beat: What's the Difference?",
    "description": "Win is used for prizes, games, or competitions. Beat is used for opponents or competitors. You win a game but beat a team.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/win-vs-beat" },
    "datePublished": "2026-03-12",
    "dateModified": "2026-03-12"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between win and beat?",
        "acceptedAnswer": { "@type": "Answer", "text": "Win is for prizes, games, or competitions (things). Beat is for opponents or competitors (people/teams). You win a match but beat your opponent. You can't 'win someone.'" }
      },
      {
        "@type": "Question",
        "name": "Can you say 'We won them'?",
        "acceptedAnswer": { "@type": "Answer", "text": "No. You cannot 'win' a person or team. Say 'We beat them' or 'We won the game against them.' Win takes things as objects, not people." }
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
        <span className="text-slate-900 dark:text-slate-100">Win vs Beat</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          Win vs Beat: What's the Difference?
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-green-800 dark:text-green-200 mb-2">
            <strong>Win</strong> = prizes, games, competitions (THINGS) 🏆
          </p>
          <p className="text-lg text-green-800 dark:text-green-200">
            <strong>Beat</strong> = opponents, competitors (PEOPLE/TEAMS) 👤
          </p>
        </div>

        {/* Explanation Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explanation
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="font-bold text-blue-900 dark:text-blue-100 mb-2">WIN 🏆</p>
              <p className="text-blue-800 dark:text-blue-200 mb-2">For things you obtain through victory</p>
              <p className="text-blue-700 dark:text-blue-300 font-mono text-sm mb-2">win + game/match/race/prize</p>
              <p className="text-blue-700 dark:text-blue-300 italic">"We won the championship."</p>
              <p className="text-blue-700 dark:text-blue-300 italic">"She won a gold medal."</p>
              <p className="text-blue-700 dark:text-blue-300 italic">"He won the lottery."</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <p className="font-bold text-purple-900 dark:text-purple-100 mb-2">BEAT 👊</p>
              <p className="text-purple-800 dark:text-purple-200 mb-2">For people/teams you defeat</p>
              <p className="text-purple-700 dark:text-purple-300 font-mono text-sm mb-2">beat + person/team/opponent</p>
              <p className="text-purple-700 dark:text-purple-300 italic">"We beat the other team."</p>
              <p className="text-purple-700 dark:text-purple-300 italic">"She beat her opponent."</p>
              <p className="text-purple-700 dark:text-purple-300 italic">"He beat me at chess."</p>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg mb-4">
            <p className="text-lg text-amber-800 dark:text-amber-200">
              <strong>Key rule:</strong> You can NEVER "win someone." You win THINGS, you beat PEOPLE.
            </p>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
            <p className="font-bold text-slate-800 dark:text-slate-200 mb-2">Common collocations:</p>
            <div className="grid md:grid-cols-2 gap-4 text-slate-700 dark:text-slate-300">
              <div>
                <p className="font-semibold">WIN:</p>
                <p>win a game, win a match, win a race, win a prize, win an award, win the lottery, win a medal, win an election</p>
              </div>
              <div>
                <p className="font-semibold">BEAT:</p>
                <p>beat someone, beat a team, beat an opponent, beat the competition, beat a record, beat the odds</p>
              </div>
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
              <span className="text-lg text-slate-700 dark:text-slate-300">Brazil <strong>won</strong> the World Cup. (the trophy)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">Brazil <strong>beat</strong> Germany in the final. (the opponent)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">She <strong>won</strong> the tennis match. (the match)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">She <strong>beat</strong> her opponent 6-3. (the person)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">I always <strong>beat</strong> my brother at video games.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">Brazil <strong>won</strong> Germany in the final.</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">I always <strong>win</strong> my brother at video games.</span>
            </div>
          </div>
        </section>

        {/* Verb Forms Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Verb Forms
          </h2>
          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
            <table className="w-full text-left">
              <thead>
                <tr className="text-slate-800 dark:text-slate-200">
                  <th className="pb-2">Base</th>
                  <th className="pb-2">Past</th>
                  <th className="pb-2">Past Participle</th>
                </tr>
              </thead>
              <tbody className="text-slate-700 dark:text-slate-300">
                <tr>
                  <td className="font-mono py-1">win</td>
                  <td className="font-mono py-1">won</td>
                  <td className="font-mono py-1">won</td>
                </tr>
                <tr>
                  <td className="font-mono py-1">beat</td>
                  <td className="font-mono py-1">beat</td>
                  <td className="font-mono py-1">beaten</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Common Mistake Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Common Mistake
          </h2>
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-4">
            <p className="text-lg text-red-800 dark:text-red-200">
              <strong>Incorrect:</strong> We won them 3-1.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <p className="text-lg text-green-800 dark:text-green-200">
              <strong>Correct:</strong> We beat them 3-1.
            </p>
            <p className="text-lg text-green-800 dark:text-green-200 mt-2">
              <strong>Also correct:</strong> We won the game 3-1.
            </p>
          </div>
        </section>

        {/* Special Uses Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Special Uses of "Beat"
          </h2>
          <div className="space-y-2 text-lg text-slate-700 dark:text-slate-300">
            <p><strong>beat a record</strong> = break a record, do better than before</p>
            <p><strong>beat the traffic</strong> = avoid traffic by leaving early</p>
            <p><strong>beat the clock</strong> = finish before time runs out</p>
            <p><strong>can't be beaten</strong> = is the best, cannot be surpassed</p>
          </div>
        </section>

        {/* Practice Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Practice
          </h2>
          <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
              <strong>Fill in with "win" or "beat":</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "Manchester United _____ Liverpool and _____ the Premier League title."
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
                  <strong>Answer:</strong> Manchester United <strong>beat</strong> Liverpool and <strong>won</strong> the Premier League title.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-2">
                  "Beat" for the team (Liverpool), "won" for the prize (the title).
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
              <Link to="/grammar-mistakes/do-vs-make" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Do vs. Make
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/say-vs-tell" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Say vs. Tell
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/borrow-vs-lend" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Borrow vs. Lend
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

export default WinVsBeatPage;
