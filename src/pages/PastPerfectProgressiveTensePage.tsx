import React from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading } from '../components/ArticleComponents';
import SchemaMarkup from '../components/SchemaMarkup';

const PastPerfectProgressiveTensePage: React.FC = () => {
  usePageMetadata({
    title: 'What Is the Past Perfect Progressive Tense? Definition, Rules & Examples',
    description: 'Learn what the Past Perfect Progressive tense is, when to use it, examples, common mistakes, and comparisons.',
    canonical: 'https://typogrammar.com/grammar/verb-tenses/past-perfect-progressive'
  });

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What Is the Past Perfect Progressive Tense?",
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
      "@id": "https://typogrammar.com/grammar/verb-tenses/past-perfect-progressive"
    },
    "dateModified": "2026-01-27"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the Past Perfect Progressive tense?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The Past Perfect Progressive tense describes actions that were in progress for a duration before another past action or time. It is formed with had been + verb-ing and emphasizes how long something had been happening."
              }
            },
            {
              "@type": "Question",
              "name": "When do you use the Past Perfect Progressive tense?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Use the Past Perfect Progressive for: duration before a past moment (I had been working for 3 hours when he called), cause of past situations (She was tired because she had been running), and showing length of past activities before interruption."
              }
            },
            {
              "@type": "Question",
              "name": "How do you form the Past Perfect Progressive tense?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Form the Past Perfect Progressive with: Subject + had + been + verb-ing. Negative: Subject + had + not + been + verb-ing. Question: Had + subject + been + verb-ing?"
              }
            },
            {
              "@type": "Question",
              "name": "What is the difference between Past Perfect and Past Perfect Progressive?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Past Perfect Progressive emphasizes duration before a past moment (I had been studying for 3 hours when she called). Past Perfect emphasizes completion (I had finished studying when she called). Progressive = duration, Perfect = completion."
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
          What Is the Past Perfect Progressive Tense?
        </h1>

        <div className="bg-blue-50 dark:bg-slate-700 border-l-4 border-blue-600 p-6 mb-8">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">Definition</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            The Past Perfect Progressive tense (also called Past Perfect Continuous) describes actions that were in progress for a duration before another past action or time. It is formed with had been + verb-ing.
          </p>
        </div>

        <ArticleHeading>When to Use the Past Perfect Progressive Tense</ArticleHeading>
        <ul className="list-disc list-inside space-y-3 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li><strong>Duration before a past moment:</strong> I had been working for 3 hours when he called.</li>
          <li><strong>Cause of past situations:</strong> She was tired because she had been running.</li>
          <li><strong>Showing length of activity before interruption:</strong> They had been waiting for an hour before the bus arrived.</li>
          <li><strong>Emphasis on process before past time:</strong> He had been studying all night before the exam.</li>
        </ul>

        <ArticleHeading>Past Perfect Progressive Tense Structure</ArticleHeading>
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
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">S + had + been + V-ing</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I had been working. / She had been studying.</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Negative</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">S + had + not + been + V-ing</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I hadn't been working. / She hadn't been studying.</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Question</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Had + S + been + V-ing?</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Had you been working? / Had she been studying?</td>
              </tr>
            </tbody>
          </table>
        </div>

        <ArticleHeading>Common Time Expressions</ArticleHeading>
        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>for + duration (for 3 hours, for two weeks)</li>
          <li>since + starting point (since Monday)</li>
          <li>before (before he called)</li>
          <li>when (when I arrived)</li>
          <li>by the time (by the time she got there)</li>
          <li>all day, all morning, all week</li>
        </ul>

        <ArticleHeading>Examples</ArticleHeading>
        
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Duration Before a Past Moment</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>I had been working for 5 hours when the power went out.</li>
          <li>She had been studying English for years before she moved to London.</li>
          <li>They had been waiting for 30 minutes before the doctor saw them.</li>
          <li>We had been living there for 10 years before we moved.</li>
        </ul>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Cause of Past Situations</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>I was tired because I had been working all day.</li>
          <li>She was sweaty because she had been running.</li>
          <li>The road was wet because it had been raining.</li>
          <li>His eyes were red because he had been crying.</li>
        </ul>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Emphasis on Process Before Past Time</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>He had been preparing for the presentation all week.</li>
          <li>We had been trying to contact you for hours.</li>
          <li>They had been playing football for an hour before it started raining.</li>
          <li>She had been working on that project for months before it was completed.</li>
        </ul>

        <ArticleHeading>Common Mistakes</ArticleHeading>
        
        <div className="space-y-4 mb-8">
          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> I had been knowing him for years.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> I had known him for years.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> Stative verbs like "know" aren't used in progressive forms.</p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> She had been finish her work.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> She had been finishing her work.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> Use -ing form after "had been."</p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> They had being working.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> They had been working.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> Use "had been," not "had being."</p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> I had been worked for 3 hours.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> I had been working for 3 hours.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> Use -ing form, not past participle, after "had been."</p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> She has been studying before the test.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> She had been studying before the test.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> Use "had" (past) when the reference point is in the past, not "has" (present).</p>
          </div>
        </div>

        <ArticleHeading>Past Perfect Progressive vs. Past Perfect</ArticleHeading>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
          The Past Perfect Progressive emphasizes <strong>duration and process before a past moment</strong>, while the Past Perfect emphasizes <strong>completion before a past moment</strong>.
        </p>

        <ul className="list-disc list-inside space-y-3 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li><strong>Use Progressive for duration:</strong> I had been studying for 3 hours when she called. (focus on time spent)</li>
          <li><strong>Use Perfect for completion:</strong> I had finished studying when she called. (focus on completed task)</li>
          <li><strong>Progressive = process:</strong> They had been building the house for a year. (ongoing process)</li>
          <li><strong>Perfect = result:</strong> They had built the house. (completed action)</li>
        </ul>

        <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg mb-8">
          <h4 className="font-bold text-xl mb-4 text-slate-900 dark:text-slate-100">Side-by-Side Comparison</h4>
          <div className="space-y-2 text-slate-700 dark:text-slate-300">
            <p><strong>Past Perfect Progressive:</strong> I had been reading for 2 hours when he arrived. (emphasis on duration)</p>
            <p><strong>Past Perfect:</strong> I had read 3 chapters when he arrived. (emphasis on amount completed)</p>
            <p className="mt-4"><strong>Past Perfect Progressive:</strong> She had been working all day. (process, tired from working)</p>
            <p><strong>Past Perfect:</strong> She had completed the work. (result, work is done)</p>
          </div>
        </div>

        <ArticleHeading>Quick Check</ArticleHeading>
        <div className="space-y-6 mb-8">
          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">1. Choose the correct form: I ___ for 3 hours when she called.</p>
            <p>A) had been studying</p>
            <p>B) had studied</p>
            <p>C) was studying</p>
            <p>D) studied</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: A) had been studying</p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">2. Which sentence is WRONG?</p>
            <p>A) I had been working.</p>
            <p>B) She had been reading.</p>
            <p>C) They had been knowing.</p>
            <p>D) We had been waiting.</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: C) They had been knowing.</p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">3. Complete: She was tired because she ___ all day.</p>
            <p>A) had been working</p>
            <p>B) had worked</p>
            <p>C) was working</p>
            <p>D) worked</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: A) had been working</p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">4. Which emphasizes duration?</p>
            <p>A) I had finished the book when he arrived.</p>
            <p>B) I had been reading for 5 hours when he arrived.</p>
            <p>C) I read the book.</p>
            <p>D) I was reading.</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: B) I had been reading for 5 hours when he arrived.</p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">5. Choose the correct form: They ___ for an hour before the bus arrived.</p>
            <p>A) had waited</p>
            <p>B) had been waiting</p>
            <p>C) were waiting</p>
            <p>D) waited</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: B) had been waiting</p>
          </div>
        </div>

        <ArticleHeading>Next Steps</ArticleHeading>
        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li><Link to="/grammar/verb-tenses" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold">Verb Tenses Overview</Link> - Learn all 12 English verb tenses</li>
          <li><Link to="/grammar/verb-tenses/past-perfect" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold">What Is the Past Perfect Tense?</Link> - Compare with Past Perfect Progressive</li>
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

export default PastPerfectProgressiveTensePage;
