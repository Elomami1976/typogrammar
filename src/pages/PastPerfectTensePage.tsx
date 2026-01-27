import React from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading } from '../components/ArticleComponents';
import SchemaMarkup from '../components/SchemaMarkup';

const PastPerfectTensePage: React.FC = () => {
  usePageMetadata({
    title: 'What Is the Past Perfect Tense? Definition, Rules & Examples',
    description: 'Learn what the Past Perfect tense is, when to use it, examples, common mistakes, and how it differs from Past Simple.',
    canonical: 'https://typogrammar.com/grammar/verb-tenses/past-perfect'
  });

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What Is the Past Perfect Tense?",
    "author": {
      "@type": "Organization",
      "name": "TypoGrammar Editorial Team",
      "url": "https://typogrammar.com/about/editorial-team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "TypoGrammar",
      "url": "https://typogrammar.com"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://typogrammar.com/grammar/verb-tenses/past-perfect"
    },
    "dateModified": "2026-01-27"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the Past Perfect tense?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The Past Perfect tense describes an action that was completed before another action or time in the past. It is formed with had + past participle and shows which of two past actions happened first."
              }
            },
            {
              "@type": "Question",
              "name": "When do you use the Past Perfect tense?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Use the Past Perfect for: actions completed before another past action (I had finished dinner before he arrived), past experiences before a past time (She had never seen snow before she moved to Canada), reported speech (He said he had lost his keys), and conditional sentences (If I had known, I would have helped)."
              }
            },
            {
              "@type": "Question",
              "name": "How do you form the Past Perfect tense?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Form the Past Perfect with: Subject + had + past participle. Negative: Subject + had + not + past participle. Question: Had + subject + past participle?"
              }
            },
            {
              "@type": "Question",
              "name": "What are common time expressions for the Past Perfect tense?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Common time expressions include: before, after, by the time, when, already, just, never, ever, until, as soon as, by (by 2020)."
              }
            },
            {
              "@type": "Question",
              "name": "What is the difference between Past Perfect and Past Simple?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Past Perfect describes the earlier of two past actions (I had eaten before he arrived). Past Simple describes a past action without reference to another past action (I ate dinner yesterday). Perfect = earlier action, Simple = single past action."
              }
            },
            {
              "@type": "Question",
              "name": "When is the Past Perfect necessary?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The Past Perfect is necessary when you need to show the sequence of two past actions - which happened first. It's optional if the sequence is clear from context words like 'before' or 'after'."
              }
            }
          ]
  };

  return (
    <>
      <SchemaMarkup type="Article" data={articleSchema} />
      <SchemaMarkup type="FAQPage" data={faqSchema} />

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-slate-100">
          What Is the Past Perfect Tense?
        </h1>

        <div className="bg-blue-50 dark:bg-slate-700 border-l-4 border-blue-600 p-6 mb-8">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">Definition</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            The Past Perfect tense describes an action that was completed before another action or time in the past. It is formed with had + past participle and shows which of two past actions happened first.
          </p>
        </div>

        <ArticleHeading>When to Use the Past Perfect Tense</ArticleHeading>
        <ul className="list-disc list-inside space-y-3 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li><strong>Action before another past action:</strong> I had finished dinner before he arrived.</li>
          <li><strong>Past experience before a past time:</strong> She had never seen snow before she moved to Canada.</li>
          <li><strong>Reported speech:</strong> He said he had lost his keys.</li>
          <li><strong>Third conditional:</strong> If I had known, I would have helped.</li>
          <li><strong>Explaining past situations:</strong> The show had already started when we arrived.</li>
          <li><strong>Past regrets with wish:</strong> I wish I had studied harder.</li>
        </ul>

        <ArticleHeading>Past Perfect Tense Structure</ArticleHeading>
        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-slate-300 dark:border-slate-600">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-700">
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Type</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Formula</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left font-semibold">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Affirmative</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">S + had + past participle</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I had finished. / She had eaten lunch.</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Negative</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">S + had + not + past participle</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I hadn't finished. / She hadn't eaten.</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Question</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Had + S + past participle?</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Had you finished? / Had she eaten?</td>
              </tr>
            </tbody>
          </table>
        </div>

        <ArticleHeading>Common Time Expressions</ArticleHeading>
        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>before (before he arrived, before 2020)</li>
          <li>after (after I had finished)</li>
          <li>by the time (by the time she got home)</li>
          <li>when (when I arrived)</li>
          <li>already, just (I had already eaten)</li>
          <li>never, ever (She had never been there)</li>
          <li>until (until that moment)</li>
          <li>as soon as (as soon as I had finished)</li>
          <li>by + past time (by 2020, by yesterday)</li>
        </ul>

        <ArticleHeading>Examples</ArticleHeading>
        
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Action Before Another Past Action</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>I had finished my homework before my friends arrived.</li>
          <li>She had left by the time I got there.</li>
          <li>They had already eaten when we invited them to dinner.</li>
          <li>The movie had started before we arrived at the cinema.</li>
        </ul>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Past Experience Before a Past Time</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>I had never seen the ocean before I visited California.</li>
          <li>She had studied English for years before she moved to London.</li>
          <li>He had never flown on a plane until last year.</li>
          <li>We had known each other for a long time before we got married.</li>
        </ul>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Reported Speech and Conditionals</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>He said he had lost his wallet. (He said: "I lost my wallet.")</li>
          <li>She told me she had finished the project. (She said: "I finished the project.")</li>
          <li>If I had known about the party, I would have come. (third conditional)</li>
          <li>I wish I had studied harder for the exam. (past regret)</li>
        </ul>

        <ArticleHeading>Common Mistakes</ArticleHeading>
        
        <div className="space-y-4 mb-8">
          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> When I arrived, he left.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> When I arrived, he had already left.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> Use Past Perfect for the earlier action (he left first, then I arrived).</p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> I had went to the store.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> I had gone to the store.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> Use past participle (gone), not past simple (went) after "had."</p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> She has finished before I arrived.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> She had finished before I arrived.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> Use "had" (Past Perfect), not "has" (Present Perfect) when both actions are in the past.</p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> After I had eat, I left.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> After I had eaten, I left.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> Use past participle (eaten), not base form (eat).</p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> I had seen that movie yesterday.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> I saw that movie yesterday.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> Use Past Simple for a single past action. Past Perfect needs reference to another past action.</p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> He said he finished his work.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> He said he had finished his work.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> Use Past Perfect in reported speech when the original statement was in Past Simple.</p>
          </div>
        </div>

        <ArticleHeading>Past Perfect vs. Past Simple</ArticleHeading>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
          The Past Perfect describes <strong>the earlier of two past actions</strong>, while the Past Simple describes <strong>a single past action or the later action</strong>.
        </p>

        <ul className="list-disc list-inside space-y-3 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li><strong>Use Past Perfect for the first action:</strong> I had eaten (first) before he arrived (second).</li>
          <li><strong>Use Past Simple for single action:</strong> I ate dinner yesterday.</li>
          <li><strong>Past Perfect = earlier:</strong> When I got home, she had left. (she left first)</li>
          <li><strong>Past Simple = later:</strong> When I got home, she left. (she left after I got home)</li>
          <li><strong>Both past, sequence matters:</strong> I finished after I had started. (started first, finished second)</li>
        </ul>

        <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg mb-8">
          <h4 className="font-bold text-xl mb-4 text-slate-900 dark:text-slate-100">Side-by-Side Comparison</h4>
          <div className="space-y-2 text-slate-700 dark:text-slate-300">
            <p><strong>Past Perfect:</strong> I had finished dinner when he called. (finished first, then he called)</p>
            <p><strong>Past Simple:</strong> I finished dinner and then he called. (sequence clear from "and then")</p>
            <p className="mt-4"><strong>Past Perfect:</strong> She had never been to Paris before 2020. (experience before past time)</p>
            <p><strong>Past Simple:</strong> She went to Paris in 2020. (single past action)</p>
          </div>
        </div>

        <ArticleHeading>Quick Check</ArticleHeading>
        <div className="space-y-6 mb-8">
          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">1. Choose the correct form: When I arrived, she ___ already ___.</p>
            <p>A) has / left</p>
            <p>B) had / left</p>
            <p>C) have / left</p>
            <p>D) was / leaving</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: B) had / left</p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">2. Which sentence is WRONG?</p>
            <p>A) I had finished before he arrived.</p>
            <p>B) She had never seen snow.</p>
            <p>C) They had went to school.</p>
            <p>D) We had eaten dinner.</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: C) They had went to school. (should be "had gone")</p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">3. Complete: She told me she ___ her keys.</p>
            <p>A) lost</p>
            <p>B) has lost</p>
            <p>C) had lost</p>
            <p>D) lose</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: C) had lost</p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">4. Which shows the correct sequence?</p>
            <p>A) I ate after I had cooked. (cooked first, ate second)</p>
            <p>B) I had eaten after I cooked. (ate first, cooked second)</p>
            <p>C) Both are correct</p>
            <p>D) Neither is correct</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: A) I ate after I had cooked.</p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">5. Choose the correct form: If I ___ about the test, I would have studied.</p>
            <p>A) knew</p>
            <p>B) know</p>
            <p>C) had known</p>
            <p>D) have known</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: C) had known</p>
          </div>
        </div>

        <ArticleHeading>Next Steps</ArticleHeading>
        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li><Link to="/grammar/verb-tenses" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold">Verb Tenses Overview</Link> - Learn all 12 English verb tenses</li>
          <li><Link to="/grammar/verb-tenses/past-simple" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold">What Is the Past Simple Tense?</Link> - Compare with Past Perfect</li>
          <li><Link to="/quizzes/verb-tenses-quiz" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold">Verb Tenses Quiz</Link> - Test your knowledge of all tenses</li>
        </ul>

        <div className="bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 p-6 my-8 rounded-lg">
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            By <Link to="/about/editorial-team" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold">TypoGrammar Editorial Team</Link>
          </p>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            TypoGrammar Editorial Team creates independent, grammar-focused educational content to help English learners improve clarity, structure, and accuracy for academic and real-world use.
          </p>
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3">Editorial Standards & Trust Policy</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
            <li>Independent educational content</li>
            <li>No score guarantees</li>
            <li>Not affiliated with ETS/TOEFL/IELTS</li>
            <li>Reviewed for clarity and accuracy</li>
          </ul>
          <p className="text-slate-700 dark:text-slate-300 mt-4">
            <strong>Last reviewed:</strong> 2026<br />
            <strong>Reviewed by:</strong> TypoGrammar Editorial Team
          </p>
        </div>
      </article>
    </>
  );
};

export default PastPerfectTensePage;
