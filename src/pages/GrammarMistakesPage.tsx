import React from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import SchemaMarkup from '../components/SchemaMarkup';

const GrammarMistakesPage: React.FC = () => {
  usePageMetadata({
    title: 'Common English Grammar Mistakes: Fix Your Errors | TypoGrammar',
    description: 'Learn to fix the most common English grammar mistakes. Clear explanations, examples, and practice exercises for subject-verb agreement, verb forms, prepositions, and more.',
    canonical: 'https://typogrammar.com/grammar-mistakes'
  });

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Common English Grammar Mistakes",
    "description": "A comprehensive guide to the most common English grammar mistakes with clear explanations, examples, and fixes.",
    "author": {
      "@type": "Organization",
      "name": "TypoGrammar"
    },
    "publisher": {
      "@type": "Organization",
      "name": "TypoGrammar",
      "logo": {
        "@type": "ImageObject",
        "url": "https://typogrammar.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://typogrammar.com/grammar-mistakes"
    },
    "datePublished": "2026-03-07",
    "dateModified": "2026-03-07"
  };

  const categories = [
    {
      title: "Subject–Verb Agreement",
      description: "Learn when to use singular vs. plural verbs with different subjects.",
      links: [
        { to: "/grammar-mistakes/people-is-or-people-are", text: "People Is or People Are?" },
        { to: "/grammar-mistakes/he-go-or-he-goes", text: "He Go or He Goes?" },
        { to: "/grammar-mistakes/everyone-is-or-everyone-are", text: "Everyone Is or Everyone Are?" },
        { to: "/grammar-mistakes/each-are-or-each-is", text: "Each Are or Each Is?" },
        { to: "/grammar-mistakes/someone-is-or-are", text: "Someone Is or Are?" },
        { to: "/grammar-mistakes/someone-has-or-have", text: "Someone Has or Have?" },
        { to: "/grammar-mistakes/everybody-has-or-have", text: "Everybody Has or Have?" },
        { to: "/grammar-mistakes/none-is-or-are", text: "None Is or Are?" },
        { to: "/grammar-mistakes/a-number-of-vs-the-number-of", text: "A Number Of vs The Number Of" },
        { to: "/grammar-mistakes/a-lot-of-people-is-or-are", text: "A Lot of People Is or Are?" },
        { to: "/grammar-mistakes/one-of-the-students-is-or-are", text: "One of the Students Is or Are?" },
        { to: "/grammar-mistakes/each-of-the-students-is-or-are", text: "Each of the Students Is or Are?" },
        { to: "/grammar-mistakes/a-group-of-people-is-or-are", text: "A Group of People Is or Are?" },
        { to: "/grammar-mistakes/everybody-is-or-are", text: "Everybody Is or Are?" },
        { to: "/grammar-mistakes/nobody-is-or-are", text: "Nobody Is or Are?" },
        { to: "/grammar-mistakes/everyone-has-or-have", text: "Everyone Has or Have?" },
        { to: "/grammar-mistakes/each-of-or-every-of", text: "Each of or Every of?" },
        { to: "/grammar-mistakes/either-of-or-neither-of", text: "Either of / Neither of" },
      ]
    },
    {
      title: "Verb Form Errors",
      description: "Avoid mistakes with auxiliary verbs and verb conjugation.",
      links: [
        { to: "/grammar-mistakes/i-am-agree-or-i-agree", text: "I Am Agree or I Agree?" },
        { to: "/grammar-mistakes/he-didnt-went-or-he-didnt-go", text: "He Didn't Went or He Didn't Go?" },
        { to: "/grammar-mistakes/did-you-went-or-did-you-go", text: "Did You Went or Did You Go?" },
        { to: "/grammar-mistakes/i-did-or-i-done", text: "I Did or I Done?" },
        { to: "/grammar-mistakes/i-have-saw-or-seen", text: "I Have Saw or Seen?" },
        { to: "/grammar-mistakes/i-have-ate-or-eaten", text: "I Have Ate or Eaten?" },
        { to: "/grammar-mistakes/i-have-wrote-or-written", text: "I Have Wrote or Written?" },
        { to: "/grammar-mistakes/i-have-drank-or-drunk", text: "I Have Drank or Drunk?" },
        { to: "/grammar-mistakes/i-have-went-or-have-gone", text: "I Have Went or Have Gone?" },
        { to: "/grammar-mistakes/he-has-came-or-come", text: "He Has Came or Come?" },
        { to: "/grammar-mistakes/i-seen-or-i-saw", text: "I Seen or I Saw?" },
        { to: "/grammar-mistakes/she-has-went-or-gone", text: "She Has Went or Gone?" },
        { to: "/grammar-mistakes/should-have-vs-should-of", text: "Should Have vs. Should Of" },
      ]
    },
    {
      title: "Word Confusion",
      description: "Learn the difference between commonly confused words.",
      links: [
        { to: "/grammar-mistakes/advice-vs-advise", text: "Advice vs. Advise" },
        { to: "/grammar-mistakes/do-vs-make", text: "Do vs. Make" },
        { to: "/grammar-mistakes/speak-vs-talk", text: "Speak vs. Talk" },
        { to: "/grammar-mistakes/bring-vs-take", text: "Bring vs. Take" },
        { to: "/grammar-mistakes/listen-vs-hear", text: "Listen vs. Hear" },
        { to: "/grammar-mistakes/say-vs-tell", text: "Say vs. Tell" },
        { to: "/grammar-mistakes/look-vs-see-vs-watch", text: "Look vs. See vs. Watch" },
        { to: "/grammar-mistakes/learn-vs-study", text: "Learn vs. Study" },
        { to: "/grammar-mistakes/borrow-vs-lend", text: "Borrow vs. Lend" },
        { to: "/grammar-mistakes/remember-vs-remind", text: "Remember vs. Remind" },
        { to: "/grammar-mistakes/win-vs-beat", text: "Win vs. Beat" },
        { to: "/grammar-mistakes/a-lot-or-alot", text: "A Lot or Alot?" },
        { to: "/grammar-mistakes/everyday-vs-every-day", text: "Everyday vs. Every Day" },
        { to: "/grammar-mistakes/sometime-vs-sometimes", text: "Sometime vs. Sometimes" },
        { to: "/grammar-mistakes/into-vs-in-to", text: "Into vs. In To" },
        { to: "/grammar-mistakes/sensible-vs-sensitive", text: "Sensible vs. Sensitive" },
        { to: "/grammar-mistakes/efficient-vs-effective", text: "Efficient vs. Effective" },
      ]
    },
    {
      title: "Preposition Errors",
      description: "Master the correct prepositions to use in common phrases.",
      links: [
        { to: "/grammar-mistakes/discuss-or-discuss-about", text: "Discuss or Discuss About?" },
        { to: "/grammar-mistakes/married-with-or-married-to", text: "Married With or Married To?" },
        { to: "/grammar-mistakes/different-from-or-different-than", text: "Different From or Different Than?" },
        { to: "/grammar-mistakes/interested-in-or-interested-on", text: "Interested In or Interested On?" },
        { to: "/grammar-mistakes/good-in-or-good-at", text: "Good In or Good At?" },
        { to: "/grammar-mistakes/in-the-weekend-or-on-the-weekend", text: "In the Weekend or On the Weekend?" },
        { to: "/grammar-mistakes/arrive-in-or-arrive-at", text: "Arrive In or Arrive At?" },
        { to: "/grammar-mistakes/afraid-of-or-afraid-from", text: "Afraid Of or Afraid From?" },
        { to: "/grammar-mistakes/proud-of-or-proud-for", text: "Proud Of or Proud For?" },
        { to: "/grammar-mistakes/responsible-for-or-responsible-of", text: "Responsible For or Responsible Of?" },
        { to: "/grammar-mistakes/explain-or-explain-about", text: "Explain or Explain About?" },
        { to: "/grammar-mistakes/request-or-request-for", text: "Request or Request For?" },
        { to: "/grammar-mistakes/enter-or-enter-to", text: "Enter or Enter To?" },
        { to: "/grammar-mistakes/complain-about-or-complain-of", text: "Complain About or Complain Of?" },
        { to: "/grammar-mistakes/by-accident-vs-on-accident", text: "By Accident vs. On Accident" },
        { to: "/grammar-mistakes/capable-of-or-capable-to", text: "Capable of or Capable to?" },
        { to: "/grammar-mistakes/fond-of-or-fond-for", text: "Fond of or Fond for?" },
        { to: "/grammar-mistakes/accused-of-or-accused-for", text: "Accused of or Accused for?" },
      ]
    },
    {
      title: "Quantifier Errors",
      description: "Learn when to use much, many, few, little, less, and fewer correctly.",
      links: [
        { to: "/grammar-mistakes/much-people-or-many-people", text: "Much People or Many People?" },
        { to: "/grammar-mistakes/less-people-or-fewer-people", text: "Less People or Fewer People?" },
        { to: "/grammar-mistakes/little-vs-few", text: "Little vs. Few" },
        { to: "/grammar-mistakes/many-vs-much", text: "Many vs. Much" },
        { to: "/grammar-mistakes/too-much-vs-too-many", text: "Too Much vs. Too Many" },
        { to: "/grammar-mistakes/some-vs-any", text: "Some vs. Any" },
        { to: "/grammar-mistakes/so-much-vs-so-many", text: "So Much vs. So Many" },
        { to: "/grammar-mistakes/a-few-vs-few", text: "A Few vs. Few" },
        { to: "/grammar-mistakes/a-little-vs-little", text: "A Little vs. Little" },
        { to: "/grammar-mistakes/several-vs-some", text: "Several vs. Some" },
        { to: "/grammar-mistakes/plenty-of-vs-a-lot-of", text: "Plenty of vs. A Lot of" },
      ]
    },
    {
      title: "Redundancy Errors",
      description: "Avoid unnecessary repetition in your writing.",
      links: [
        { to: "/grammar-mistakes/return-back-or-return", text: "Return Back or Return?" },
        { to: "/grammar-mistakes/repeat-again-or-repeat", text: "Repeat Again or Repeat?" },
        { to: "/grammar-mistakes/advance-planning", text: "Advance Planning (Redundant?)" },
        { to: "/grammar-mistakes/free-gift", text: "Free Gift (Redundant?)" },
        { to: "/grammar-mistakes/end-result", text: "End Result (Redundant?)" },
        { to: "/grammar-mistakes/final-outcome", text: "Final Outcome (Redundant?)" },
        { to: "/grammar-mistakes/past-history", text: "Past History (Redundant?)" },
        { to: "/grammar-mistakes/close-proximity", text: "Close Proximity (Redundant?)" },
      ]
    },
  ];

  return (
    <>
      <SchemaMarkup type="Article" data={articleSchema} />

      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-slate-600 dark:text-slate-400">
        <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
        {' › '}
        <span className="text-slate-900 dark:text-slate-100">Grammar Mistakes</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          Common English Grammar Mistakes
        </h1>

        {/* Quick Answer Box */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8 dark:bg-blue-900/30 dark:border-blue-400">
          <h2 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-2">What You'll Learn</h2>
          <p className="text-lg text-blue-800 dark:text-blue-200">
            This guide covers the most common grammar mistakes in English, including subject-verb agreement errors, 
            verb form mistakes, word confusion, preposition errors, and quantifier problems. Each topic includes 
            clear explanations, examples, and practice exercises.
          </p>
        </div>

        <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
          Even advanced English learners make grammar mistakes. Understanding these common errors will help you 
          write and speak more accurately. Click on any topic below to learn the correct form and practice.
        </p>

        {/* Categories Grid */}
        <div className="space-y-10">
          {categories.map((category, index) => (
            <section key={index} className="border-b border-slate-200 dark:border-slate-700 pb-8 last:border-b-0">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                {category.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                {category.description}
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.to}
                      className="flex items-center p-3 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors dark:bg-slate-700/50 dark:hover:bg-slate-700 group"
                    >
                      <span className="text-blue-600 dark:text-blue-400 mr-2 group-hover:translate-x-1 transition-transform">→</span>
                      <span className="text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {link.text}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* Why This Matters Section */}
        <section className="mt-12 p-6 bg-amber-50 rounded-xl dark:bg-amber-900/20">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Why Fixing Grammar Mistakes Matters
          </h2>
          <ul className="space-y-3 text-lg text-slate-700 dark:text-slate-300">
            <li className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
              <span><strong>Better Communication:</strong> Clear grammar helps others understand your message.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
              <span><strong>Higher Test Scores:</strong> Grammar accuracy directly affects IELTS, TOEFL, and exam scores.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
              <span><strong>Professional Impact:</strong> Correct grammar improves your professional writing and credibility.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
              <span><strong>Confidence:</strong> Knowing the rules makes you more confident when speaking and writing.</span>
            </li>
          </ul>
        </section>

        {/* Quick Tips Section */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Quick Tips to Avoid Grammar Mistakes
          </h2>
          <ol className="list-decimal list-inside space-y-3 text-lg text-slate-700 dark:text-slate-300">
            <li><strong>Read more:</strong> Exposure to correct English helps you internalize grammar patterns.</li>
            <li><strong>Practice daily:</strong> Even 10 minutes of focused practice improves accuracy over time.</li>
            <li><strong>Learn from errors:</strong> When you make a mistake, understand why it's wrong.</li>
            <li><strong>Use grammar tools:</strong> Tools like grammar checkers can catch common errors.</li>
            <li><strong>Focus on patterns:</strong> Most mistakes follow patterns—learn the rules behind them.</li>
          </ol>
        </section>

        {/* Related Resources */}
        <section className="mt-10 p-6 bg-slate-50 rounded-xl dark:bg-slate-700/30">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Related Resources
          </h2>
          <ul className="space-y-2 text-lg">
            <li>
              <Link to="/grammar-guide" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Complete Grammar Guide
              </Link>
            </li>
            <li>
              <Link to="/grammar/verb-tenses" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → The 12 English Verb Tenses
              </Link>
            </li>
            <li>
              <Link to="/commonly-confused-words" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Commonly Confused Words
              </Link>
            </li>
            <li>
              <Link to="/ielts/common-grammar-mistakes-ielts-writing" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → Common Grammar Mistakes in IELTS
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
};

export default GrammarMistakesPage;
