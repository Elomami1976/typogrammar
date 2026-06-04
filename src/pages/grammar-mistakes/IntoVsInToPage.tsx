import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const IntoVsInToPage: React.FC = () => {
  usePageMetadata({
    title: 'Into vs In To: What\'s the Difference? | TypoGrammar',
    description: 'Learn when to use "into" (one word) vs "in to" (two words). "Into" shows movement. "In to" is two separate words that happen to be next to each other.',
    canonical: 'https://typogrammar.com/grammar-mistakes/into-vs-in-to/'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Into vs In To: What's the Difference?",
    "description": "'Into' (one word) is a preposition showing movement or transformation. 'In to' (two words) happens when 'in' is part of a phrasal verb and 'to' is a separate word.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/into-vs-in-to" },
    "datePublished": "2026-03-12",
    "dateModified": "2026-03-12"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "When do I use 'into' vs 'in to'?",
        "acceptedAnswer": { "@type": "Answer", "text": "Use 'into' (one word) for movement or transformation: 'She walked into the room.' Use 'in to' (two words) when 'in' is part of a phrasal verb: 'I logged in to my account' (log in + to)." }
      },
      {
        "@type": "Question",
        "name": "What's a quick test to know which one to use?",
        "acceptedAnswer": { "@type": "Answer", "text": "If the sentence involves physical movement or transformation, use 'into.' If you can identify a phrasal verb (like 'log in,' 'hand in,' 'turn in'), keep them as separate words: 'in to.'" }
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
        <span className="text-slate-900 dark:text-slate-100">Into vs In To</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          Into vs In To: What's the Difference?
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">Quick Answer</h2>
          <p className="text-lg text-green-800 dark:text-green-200">
            <strong>"Into"</strong> = movement or transformation (one word)<br />
            <strong>"In to"</strong> = "in" is part of a phrasal verb + "to" is separate (two words)
          </p>
        </div>

        {/* Key Difference Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            The Key Difference
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="font-bold text-blue-900 dark:text-blue-100 mb-2">INTO (one word)</p>
              <p className="text-blue-800 dark:text-blue-200 text-sm mb-2">Movement or transformation</p>
              <p className="text-blue-700 dark:text-blue-300 italic">"She walked <strong>into</strong> the room."</p>
              <p className="text-blue-700 dark:text-blue-300 italic">"Water turned <strong>into</strong> ice."</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <p className="font-bold text-purple-900 dark:text-purple-100 mb-2">IN TO (two words)</p>
              <p className="text-purple-800 dark:text-purple-200 text-sm mb-2">Phrasal verb + infinitive/purpose</p>
              <p className="text-purple-700 dark:text-purple-300 italic">"I logged <strong>in to</strong> my account."</p>
              <p className="text-purple-700 dark:text-purple-300 italic">"She came <strong>in to</strong> talk."</p>
            </div>
          </div>

          <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
            <p className="text-lg text-teal-800 dark:text-teal-200">
              <strong>Key:</strong> If there's a phrasal verb (log <em>in</em>, hand <em>in</em>, turn <em>in</em>, come <em>in</em>), keep "in" and "to" separate.
            </p>
          </div>
        </section>

        {/* INTO Examples */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            When to Use "INTO" (One Word)
          </h2>
          
          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg mb-4">
            <p className="text-slate-700 dark:text-slate-300 mb-3">
              Use "into" for:
            </p>
            <ul className="text-slate-700 dark:text-slate-300 space-y-1">
              <li>• <strong>Physical movement:</strong> entering a space</li>
              <li>• <strong>Transformation:</strong> changing from one thing to another</li>
              <li>• <strong>Direction:</strong> toward the inside of something</li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">The cat jumped <strong>into</strong> the box. (movement)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">She translated the book <strong>into</strong> French. (transformation)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">We drove <strong>into</strong> the tunnel. (direction)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">The prince turned <strong>into</strong> a frog. (transformation)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">I'm really <strong>into</strong> jazz music. (interested in)</span>
            </div>
          </div>
        </section>

        {/* IN TO Examples */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            When to Use "IN TO" (Two Words)
          </h2>
          
          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg mb-4">
            <p className="text-slate-700 dark:text-slate-300 mb-3">
              Use "in to" when "in" is part of a phrasal verb:
            </p>
            <ul className="text-slate-700 dark:text-slate-300 space-y-1">
              <li>• <strong>log in</strong> + to → log <strong>in to</strong></li>
              <li>• <strong>hand in</strong> + to → hand <strong>in to</strong></li>
              <li>• <strong>turn in</strong> + to → turn <strong>in to</strong> (submit)</li>
              <li>• <strong>come in</strong> + to → come <strong>in to</strong></li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">Please log <strong>in to</strong> your account. (phrasal verb: log in)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">I handed my essay <strong>in to</strong> the teacher. (phrasal verb: hand in)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">She came <strong>in to</strong> say hello. ("in" = entered, "to" = purpose)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">He stopped <strong>in to</strong> check on us. (stopped by + to)</span>
            </div>
          </div>
        </section>

        {/* Tricky Comparison */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Tricky Comparison: Turn Into vs Turn In To
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="font-bold text-blue-900 dark:text-blue-100 mb-2">TURN INTO</p>
              <p className="text-blue-800 dark:text-blue-200 text-sm mb-2">Transform/become</p>
              <p className="text-blue-700 dark:text-blue-300 italic">"The caterpillar turned <strong>into</strong> a butterfly."</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <p className="font-bold text-purple-900 dark:text-purple-100 mb-2">TURN IN TO</p>
              <p className="text-purple-800 dark:text-purple-200 text-sm mb-2">Submit to someone</p>
              <p className="text-purple-700 dark:text-purple-300 italic">"Please turn your homework <strong>in to</strong> the teacher."</p>
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
              <strong>Fill in the blank:</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "You need to log _____ your email account." (into / in to)
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
                  <strong>Answer:</strong> You need to log <strong>in to</strong> your email account.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-2">
                  "Log in" is a phrasal verb, so "in" and "to" stay separate.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Memory Trick */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Memory Trick
          </h2>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <p className="text-lg text-purple-800 dark:text-purple-200 mb-3">
              <strong>Ask yourself:</strong> Is there a phrasal verb?
            </p>
            <ul className="text-purple-700 dark:text-purple-300 space-y-2">
              <li>• <strong>YES</strong> (log in, hand in, come in) → use <strong>in to</strong></li>
              <li>• <strong>NO</strong> (just movement/change) → use <strong>into</strong></li>
            </ul>
          </div>
        </section>

        {/* Related Grammar Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Related Grammar
          </h2>
          <ul className="space-y-2 text-lg">
            <li>
              <Link to="/grammar-mistakes/everyday-vs-every-day/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Everyday vs Every Day
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/sometime-vs-sometimes/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Sometime vs Sometimes
              </Link>
            </li>
            <li>
              <Link to="/grammar-mistakes/a-lot-or-alot/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → A Lot or Alot?
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

export default IntoVsInToPage;
