import React from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading } from '../components/ArticleComponents';
import SchemaMarkup from '../components/SchemaMarkup';

const PastProgressiveTensePage: React.FC = () => {
  usePageMetadata({
    title: 'What Is the Past Progressive Tense? Definition, Rules & Examples',
    description: 'Learn what the Past Progressive (Past Continuous) tense is, when to use it, examples, common mistakes, and comparisons.',
    canonical: 'https://typogrammar.com/grammar/verb-tenses/past-progressive'
  });

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What Is the Past Progressive Tense?",
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
      "@id": "https://typogrammar.com/grammar/verb-tenses/past-progressive"
    },
    "dateModified": "2026-01-27"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the Past Progressive tense?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The Past Progressive tense (also called Past Continuous) describes actions that were in progress at a specific time in the past, background actions, or interrupted actions. It emphasizes duration and continuity in the past."
              }
            },
            {
              "@type": "Question",
              "name": "When do you use the Past Progressive tense?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Use the Past Progressive for: actions in progress at a specific past time (I was studying at 8 PM), interrupted actions (I was sleeping when the phone rang), parallel past actions (While she was cooking, he was cleaning), and background descriptions in stories."
              }
            },
            {
              "@type": "Question",
              "name": "How do you form the Past Progressive tense?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Form the Past Progressive with: Subject + was/were + verb-ing. Negative: Subject + was/were + not + verb-ing. Question: Was/Were + subject + verb-ing?"
              }
            },
            {
              "@type": "Question",
              "name": "What are common time expressions for the Past Progressive tense?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Common time expressions include: at that moment, at 8 PM yesterday, when (when you called), while (while I was sleeping), all day yesterday, during that time, as (as I was leaving)."
              }
            },
            {
              "@type": "Question",
              "name": "What is the difference between Past Progressive and Past Simple?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Past Progressive describes ongoing actions in progress at a past time (I was reading at 9 PM). Past Simple describes completed actions (I read the book yesterday). Progressive = duration/background, Simple = completed action."
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
          What Is the Past Progressive Tense?
        </h1>

        <div className="bg-blue-50 dark:bg-slate-700 border-l-4 border-blue-600 p-6 mb-8">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">Definition</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            The Past Progressive tense (also called Past Continuous) describes actions that were in progress at a specific time in the past, background actions, or interrupted actions. It emphasizes duration and continuity in past moments.
          </p>
        </div>

        <ArticleHeading>When to Use the Past Progressive Tense</ArticleHeading>
        <ul className="list-disc list-inside space-y-3 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li><strong>Actions in progress at a specific past time:</strong> I was studying at 8 PM last night.</li>
          <li><strong>Interrupted actions:</strong> I was sleeping when the phone rang.</li>
          <li><strong>Parallel past actions:</strong> While she was cooking, he was cleaning.</li>
          <li><strong>Background descriptions:</strong> The sun was shining and birds were singing.</li>
          <li><strong>Repeated past actions (with always):</strong> He was always complaining about work.</li>
        </ul>

        <ArticleHeading>Past Progressive Tense Structure</ArticleHeading>
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
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">S + was/were + V-ing</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I was working. / They were playing football.</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Negative</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">S + was/were + not + V-ing</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I wasn't working. / They weren't playing.</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Question</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Was/Were + S + V-ing?</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Was she working? / Were they playing?</td>
              </tr>
            </tbody>
          </table>
        </div>

        <ArticleHeading>Common Time Expressions</ArticleHeading>
        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>at that moment, at that time</li>
          <li>at 8 PM yesterday, at 5 o'clock last night</li>
          <li>when + Past Simple (when you called, when I arrived)</li>
          <li>while + Past Progressive (while I was sleeping)</li>
          <li>all day yesterday, all morning, all evening</li>
          <li>as (as I was leaving)</li>
        </ul>

        <ArticleHeading>Examples</ArticleHeading>
        
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Actions in Progress at a Specific Past Time</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>I was watching TV at 9 PM last night.</li>
          <li>She was studying when I called her.</li>
          <li>They were playing football at that moment.</li>
          <li>What were you doing at 5 PM yesterday?</li>
        </ul>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Interrupted Actions</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>I was sleeping when the phone rang.</li>
          <li>She was cooking when the guests arrived.</li>
          <li>They were walking in the park when it started raining.</li>
          <li>We were having dinner when the lights went out.</li>
        </ul>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Parallel Past Actions</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>While she was cooking, he was cleaning the house.</li>
          <li>I was reading while my brother was playing video games.</li>
          <li>The children were playing while the adults were talking.</li>
          <li>As I was leaving, she was arriving.</li>
        </ul>

        <ArticleHeading>Common Mistakes</ArticleHeading>
        
        <div className="space-y-4 mb-8">
          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> I was knowing the answer.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> I knew the answer.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> Stative verbs like "know" aren't used in progressive tenses.</p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> She working when I called.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> She was working when I called.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> Past Progressive requires was/were before the -ing form.</p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> They was playing football.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> They were playing football.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> Use "were" with plural subjects, not "was."</p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> When I arrived, she cooked dinner.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> When I arrived, she was cooking dinner.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> Use Past Progressive for the longer action in progress when interrupted.</p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> I was reading a book yesterday.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> I read a book yesterday. / I was reading a book at 8 PM yesterday.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> Use Past Simple for completed actions. Past Progressive needs a specific time or context showing duration.</p>
          </div>
        </div>

        <ArticleHeading>Past Progressive vs. Past Simple</ArticleHeading>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
          The Past Progressive describes <strong>actions in progress at a past time</strong>, while the Past Simple describes <strong>completed actions</strong>.
        </p>

        <ul className="list-disc list-inside space-y-3 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li><strong>Use Progressive for duration:</strong> I was reading from 7 to 9 PM.</li>
          <li><strong>Use Simple for completion:</strong> I read the book yesterday.</li>
          <li><strong>Progressive = background:</strong> While I was studying, the phone rang.</li>
          <li><strong>Simple = main action:</strong> The phone rang while I was studying.</li>
          <li><strong>Progressive = interrupted:</strong> I was sleeping when you called.</li>
          <li><strong>Simple = interrupting action:</strong> You called while I was sleeping.</li>
        </ul>

        <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg mb-8">
          <h4 className="font-bold text-xl mb-4 text-slate-900 dark:text-slate-100">Side-by-Side Comparison</h4>
          <div className="space-y-2 text-slate-700 dark:text-slate-300">
            <p><strong>Past Progressive:</strong> I was working at 5 PM. (in progress at that time)</p>
            <p><strong>Past Simple:</strong> I worked yesterday. (completed action)</p>
            <p className="mt-4"><strong>Past Progressive:</strong> She was cooking when I arrived. (background, longer action)</p>
            <p><strong>Past Simple:</strong> I arrived while she was cooking. (interrupting, shorter action)</p>
          </div>
        </div>

        <ArticleHeading>Quick Check</ArticleHeading>
        <div className="space-y-6 mb-8">
          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">1. Choose the correct form: I ___ TV when you called.</p>
            <p>A) watched</p>
            <p>B) was watching</p>
            <p>C) watch</p>
            <p>D) am watching</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: B) was watching</p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">2. Which sentence is WRONG?</p>
            <p>A) I was knowing the answer.</p>
            <p>B) I was reading a book.</p>
            <p>C) She was sleeping.</p>
            <p>D) They were playing.</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: A) I was knowing the answer.</p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">3. Complete: While she ___, I ___ dinner.</p>
            <p>A) studied / cooked</p>
            <p>B) was studying / was cooking</p>
            <p>C) studies / cook</p>
            <p>D) is studying / am cooking</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: B) was studying / was cooking</p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">4. Which describes a completed action?</p>
            <p>A) I was reading all evening.</p>
            <p>B) I read the book yesterday.</p>
            <p>C) I was studying when he called.</p>
            <p>D) They were playing at 5 PM.</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: B) I read the book yesterday.</p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">5. Choose the correct form: They ___ football at that moment.</p>
            <p>A) play</p>
            <p>B) played</p>
            <p>C) were playing</p>
            <p>D) plays</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: C) were playing</p>
          </div>
        </div>

        <ArticleHeading>Next Steps</ArticleHeading>
        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li><Link to="/grammar/verb-tenses" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold">Verb Tenses Overview</Link> - Learn all 12 English verb tenses</li>
          <li><Link to="/grammar/verb-tenses/past-simple" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold">What Is the Past Simple Tense?</Link> - Compare with Past Progressive</li>
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

export default PastProgressiveTensePage;
