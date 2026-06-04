import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import SchemaMarkup from '../../components/SchemaMarkup';

const UsedToVsBeUsedToPage: React.FC = () => {
  usePageMetadata({
    title: 'Used to vs. Be Used to: What\'s the Difference? | TypoGrammar',
    description: 'Learn the difference between used to and be used to in English. Used to describes past habits, while be used to means being accustomed to something.',
    canonical: 'https://typogrammar.com/grammar-mistakes/used-to-vs-be-used-to/'
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Used to vs. Be Used to",
    "description": "Used to + infinitive expresses a past habit that no longer exists. Be used to + gerund/noun means being accustomed to something.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": { "@type": "Organization", "name": "TypoGrammar", "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://typogrammar.com/grammar-mistakes/used-to-vs-be-used-to" },
    "datePublished": "2026-04-18",
    "dateModified": "2026-04-18"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between 'used to' and 'be used to'?",
        "acceptedAnswer": { "@type": "Answer", "text": "'Used to + infinitive' talks about a past habit or state that no longer exists: 'I used to play football.' 'Be used to + gerund/noun' means being accustomed to something: 'I am used to waking up early.' The key difference is the form that follows each expression." }
      },
      {
        "@type": "Question",
        "name": "Is it 'I am used to wake up' or 'I am used to waking up'?",
        "acceptedAnswer": { "@type": "Answer", "text": "The correct form is 'I am used to waking up early.' After 'be used to,' always use a gerund (-ing form) or a noun, not an infinitive." }
      },
      {
        "@type": "Question",
        "name": "What does 'get used to' mean?",
        "acceptedAnswer": { "@type": "Answer", "text": "'Get used to' means to gradually become accustomed to something: 'I am getting used to the cold weather.' It describes the process of becoming accustomed, while 'be used to' describes the state of already being accustomed." }
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
        <span className="text-slate-900 dark:text-slate-100">Used to vs. Be Used to</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          Used to vs. Be Used to: What's the Difference?
        </h1>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8 dark:bg-green-900/30 dark:border-green-400">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3">Quick Answer</h2>
          <ul className="space-y-2 text-lg text-green-800 dark:text-green-200">
            <li><strong>Used to + infinitive</strong> = past habit or state (no longer true): "I <em>used to smoke</em>."</li>
            <li><strong>Be used to + gerund/noun</strong> = accustomed to something: "I <em>am used to waking</em> up early."</li>
            <li><strong>Get used to + gerund/noun</strong> = becoming accustomed: "I <em>am getting used to</em> the noise."</li>
          </ul>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Explanation
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-2">USED TO + infinitive</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-2">Describes a past habit or state that <strong>no longer exists</strong>.</p>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1 text-sm mb-3">
                <li>I used to <em>play</em> football. (now I don't)</li>
                <li>She used to <em>live</em> in Paris. (now she doesn't)</li>
                <li>We used to <em>be</em> friends. (now we aren't)</li>
              </ul>
              <div className="p-3 bg-blue-100 dark:bg-blue-900/40 rounded">
                <p className="text-sm text-blue-800 dark:text-blue-200 font-medium">Pattern: used to + base verb (infinitive)</p>
                <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">Negative: didn't use to / used not to</p>
              </div>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg">
              <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-2">BE USED TO + gerund/noun</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-2">Describes being <strong>accustomed to</strong> something (present state).</p>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1 text-sm mb-3">
                <li>I am used to <em>waking</em> up early.</li>
                <li>She is used to <em>the cold weather</em>.</li>
                <li>They are used to <em>working</em> long hours.</li>
              </ul>
              <div className="p-3 bg-purple-100 dark:bg-purple-900/40 rounded">
                <p className="text-sm text-purple-800 dark:text-purple-200 font-medium">Pattern: be used to + -ing verb OR noun</p>
                <p className="text-sm text-purple-700 dark:text-purple-300 mt-1">Get used to = becoming accustomed (process)</p>
              </div>
            </div>
          </div>

          <div className="bg-teal-50 dark:bg-teal-900/20 p-5 rounded-lg">
            <h3 className="text-lg font-bold text-teal-900 dark:text-teal-100 mb-2">The Three Patterns Side by Side</h3>
            <div className="space-y-2 text-slate-700 dark:text-slate-300">
              <p><strong>used to + infinitive</strong> (past habit): "I used to <em>eat</em> meat." (I don't anymore.)</p>
              <p><strong>be used to + gerund</strong> (already accustomed): "I am used to <em>eating</em> late." (It's normal for me.)</p>
              <p><strong>get used to + gerund</strong> (becoming accustomed): "I'm getting used to <em>eating</em> late." (It's becoming normal.)</p>
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
              <span className="text-lg text-slate-700 dark:text-slate-300">I <strong>used to</strong> play the piano. (past habit, I don't now)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">I <strong>am used to</strong> playing the piano. (I'm accustomed to it)</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✘</span>
              <span className="text-lg text-slate-700 dark:text-slate-300 line-through">I am used to <strong>play</strong> the piano. (wrong: use gerund, not infinitive after "be used to")</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">She <strong>used to</strong> be shy. (she isn't shy anymore)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">She <strong>is used to</strong> speaking in public. (she's comfortable doing it)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg text-slate-700 dark:text-slate-300">He <strong>is getting used to</strong> driving on the left side of the road.</span>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Common Mistake
          </h2>
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-4">
            <p className="text-lg text-red-800 dark:text-red-200">
              <strong>Incorrect:</strong> I am used to wake up at 6 am.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <p className="text-lg text-green-800 dark:text-green-200">
              <strong>Correct:</strong> I am used to waking up at 6 am.
            </p>
          </div>
          <p className="text-slate-600 dark:text-slate-400 mt-3 text-sm">
            After <em>be used to</em> and <em>get used to</em>, always use the <strong>gerund (-ing form)</strong>, not the base infinitive.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Practice
          </h2>
          <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
              <strong>Choose the correct form:</strong>
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-200 italic mb-4">
              "When I was a child, I _____ (used to / was used to) eat a lot of sweets, but now I rarely do."
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
                  <strong>Answer:</strong> When I was a child, I <strong>used to</strong> eat a lot of sweets.
                </p>
                <p className="text-green-700 dark:text-green-300 mt-1">
                  This is a past habit that no longer exists, so "used to + infinitive" is correct.
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
              <Link to="/grammar-mistakes/still-vs-yet-vs-already/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Still vs. Yet vs. Already
              </Link>
            </li>
            <li>
              <Link to="/topics/past-simple/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Past Simple Tense
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

export default UsedToVsBeUsedToPage;
