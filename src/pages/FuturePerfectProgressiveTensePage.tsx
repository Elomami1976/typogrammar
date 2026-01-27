import React from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading } from '../components/ArticleComponents';
import SchemaMarkup from '../components/SchemaMarkup';

const FuturePerfectProgressiveTensePage: React.FC = () => {
  usePageMetadata({
    title: 'What Is the Future Perfect Progressive Tense? Definition, Rules & Examples',
    description: 'Learn what the Future Perfect Progressive tense is, when to use it, examples, common mistakes, and comparisons.',
    canonical: 'https://typogrammar.com/grammar/verb-tenses/future-perfect-progressive'
  });

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What Is the Future Perfect Progressive Tense?",
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
      "@id": "https://typogrammar.com/grammar/verb-tenses/future-perfect-progressive"
    },
    "dateModified": "2026-01-27"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the Future Perfect Progressive tense?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The Future Perfect Progressive tense describes actions that will have been in progress for a duration before a specific time in the future. It is formed with will have been + verb-ing and emphasizes duration."
              }
            },
            {
              "@type": "Question",
              "name": "When do you use the Future Perfect Progressive tense?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Use the Future Perfect Progressive for: duration before a future moment (By 5 PM, I will have been working for 8 hours), emphasis on length of future activities (Next year, she will have been teaching for 20 years), and showing continuous action up to a future point."
              }
            },
            {
              "@type": "Question",
              "name": "How do you form the Future Perfect Progressive tense?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Form the Future Perfect Progressive with: Subject + will + have + been + verb-ing. Negative: Subject + will + not + have + been + verb-ing. Question: Will + subject + have + been + verb-ing?"
              }
            },
            {
              "@type": "Question",
              "name": "What is the difference between Future Perfect and Future Perfect Progressive?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Future Perfect Progressive emphasizes duration before a future time (I will have been working for 8 hours). Future Perfect emphasizes completion (I will have finished my work). Progressive = duration, Perfect = completion."
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
          What Is the Future Perfect Progressive Tense?
        </h1>

        <div className="bg-blue-50 dark:bg-slate-700 border-l-4 border-blue-600 p-6 mb-8">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">Definition</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            The Future Perfect Progressive tense (also called Future Perfect Continuous) describes actions that will have been in progress for a duration before a specific time in the future. It is formed with will have been + verb-ing.
          </p>
        </div>

        <ArticleHeading>When to Use the Future Perfect Progressive Tense</ArticleHeading>
        <ul className="list-disc list-inside space-y-3 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li><strong>Duration before a future moment:</strong> By 5 PM, I will have been working for 8 hours.</li>
          <li><strong>Emphasis on length of activity:</strong> Next year, she will have been teaching for 20 years.</li>
          <li><strong>Continuous action up to a future point:</strong> By tomorrow, they will have been traveling for 24 hours.</li>
          <li><strong>Future milestones with duration:</strong> In 2030, we will have been living here for 30 years.</li>
        </ul>

        <ArticleHeading>Future Perfect Progressive Tense Structure</ArticleHeading>
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
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">S + will + have + been + V-ing</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I will have been working. / She will have been studying.</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Negative</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">S + will not/won't + have + been + V-ing</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I won't have been working. / She won't have been studying.</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Question</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Will + S + have + been + V-ing?</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Will you have been working? / Will she have been studying?</td>
              </tr>
            </tbody>
          </table>
        </div>

        <ArticleHeading>Common Time Expressions</ArticleHeading>
        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>by + future time (by 5 PM, by next week)</li>
          <li>for + duration (for 3 hours, for 10 years)</li>
          <li>by the time + clause (by the time you arrive)</li>
          <li>in + time period (in 2 years, in 5 months)</li>
          <li>by the end of (by the end of the day)</li>
          <li>when + Present Simple (when she graduates)</li>
        </ul>

        <ArticleHeading>Examples</ArticleHeading>
        
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Duration Before a Future Moment</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>By 5 PM, I will have been working for 8 hours.</li>
          <li>By the time you arrive, I will have been waiting for 2 hours.</li>
          <li>By tomorrow, they will have been traveling for 24 hours.</li>
          <li>By next month, she will have been studying English for 3 years.</li>
        </ul>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Future Milestones with Duration</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>Next year, she will have been teaching for 20 years.</li>
          <li>In 2030, we will have been living here for 30 years.</li>
          <li>By December, I will have been working at this company for 5 years.</li>
          <li>By the end of this course, you will have been learning English for 6 months.</li>
        </ul>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Emphasis on Continuous Action</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>By the time the meeting starts, I will have been preparing for hours.</li>
          <li>When you wake up, I will have been working since 5 AM.</li>
          <li>By graduation, she will have been studying medicine for 6 years.</li>
          <li>By next week, they will have been renovating the house for 3 months.</li>
        </ul>

        <ArticleHeading>Common Mistakes</ArticleHeading>
        
        <div className="space-y-4 mb-8">
          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> I will have been knowing him for 5 years.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> I will have known him for 5 years.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> Stative verbs like "know" aren't used in progressive forms.</p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> She will have been finish her work.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> She will have been finishing her work.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> Use -ing form after "will have been."</p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> They will have being working.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> They will have been working.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> Use "will have been," not "will have being."</p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> I will have been worked for 8 hours.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> I will have been working for 8 hours.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> Use -ing form, not past participle, after "will have been."</p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> By the time you will arrive, I will have been waiting.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> By the time you arrive, I will have been waiting.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> Use Present Simple, not Future, in time clauses (after by the time, when, before, etc.).</p>
          </div>
        </div>

        <ArticleHeading>Future Perfect Progressive vs. Future Perfect</ArticleHeading>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
          The Future Perfect Progressive emphasizes <strong>duration before a future time</strong>, while the Future Perfect emphasizes <strong>completion before a future time</strong>.
        </p>

        <ul className="list-disc list-inside space-y-3 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li><strong>Use Progressive for duration:</strong> I will have been working for 8 hours. (focus on time spent)</li>
          <li><strong>Use Perfect for completion:</strong> I will have finished my work. (focus on completed task)</li>
          <li><strong>Progressive = process:</strong> By 2030, she will have been writing her book for 5 years. (ongoing)</li>
          <li><strong>Perfect = result:</strong> By 2030, she will have written her book. (completed)</li>
        </ul>

        <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg mb-8">
          <h4 className="font-bold text-xl mb-4 text-slate-900 dark:text-slate-100">Side-by-Side Comparison</h4>
          <div className="space-y-2 text-slate-700 dark:text-slate-300">
            <p><strong>Future Perfect Progressive:</strong> By 5 PM, I will have been working for 8 hours. (emphasis on duration)</p>
            <p><strong>Future Perfect:</strong> By 5 PM, I will have finished my work. (emphasis on completion)</p>
            <p className="mt-4"><strong>Future Perfect Progressive:</strong> Next year, she will have been studying for 10 years. (process, duration)</p>
            <p><strong>Future Perfect:</strong> Next year, she will have graduated. (result, completed)</p>
          </div>
        </div>

        <ArticleHeading>Quick Check</ArticleHeading>
        <div className="space-y-6 mb-8">
          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">1. Choose the correct form: By 5 PM, I ___ for 8 hours.</p>
            <p>A) will work</p>
            <p>B) will have worked</p>
            <p>C) will have been working</p>
            <p>D) will be working</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: C) will have been working</p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">2. Which sentence is WRONG?</p>
            <p>A) I will have been studying.</p>
            <p>B) She will have been reading.</p>
            <p>C) They will have been knowing.</p>
            <p>D) We will have been waiting.</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: C) They will have been knowing.</p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">3. Complete: By 2030, she ___ here for 20 years.</p>
            <p>A) will work</p>
            <p>B) will have worked</p>
            <p>C) will have been working</p>
            <p>D) will be working</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: C) will have been working</p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">4. Which emphasizes duration?</p>
            <p>A) I will have finished the book.</p>
            <p>B) I will have been reading for 5 hours.</p>
            <p>C) I will finish the book.</p>
            <p>D) I am reading the book.</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: B) I will have been reading for 5 hours.</p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">5. Choose the correct form: By the time you ___, I will have been waiting for 2 hours.</p>
            <p>A) will arrive</p>
            <p>B) arrive</p>
            <p>C) arrived</p>
            <p>D) arriving</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: B) arrive (no "will" in time clauses)</p>
          </div>
        </div>

        <ArticleHeading>Next Steps</ArticleHeading>
        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li><Link to="/grammar/verb-tenses" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold">Verb Tenses Overview</Link> - Learn all 12 English verb tenses</li>
          <li><Link to="/grammar/verb-tenses/future-perfect" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold">What Is the Future Perfect Tense?</Link> - Compare with Future Perfect Progressive</li>
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

export default FuturePerfectProgressiveTensePage;
