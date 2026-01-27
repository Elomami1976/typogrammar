import React from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading } from '../components/ArticleComponents';
import SchemaMarkup from '../components/SchemaMarkup';

const PresentPerfectProgressiveTensePage: React.FC = () => {
  usePageMetadata({
    title: 'What Is the Present Perfect Progressive Tense? Definition, Rules & Examples',
    description: 'Learn what the Present Perfect Progressive tense is, when to use it, examples, common mistakes, and comparisons.',
    canonical: 'https://typogrammar.com/grammar/verb-tenses/present-perfect-progressive'
  });

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What Is the Present Perfect Progressive Tense?",
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
      "@id": "https://typogrammar.com/grammar/verb-tenses/present-perfect-progressive"
    },
    "dateModified": "2026-01-27"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the Present Perfect Progressive tense?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The Present Perfect Progressive tense describes actions that started in the past and continue to the present, emphasizing duration. It is formed with have/has been + verb-ing and shows how long something has been happening."
              }
            },
            {
              "@type": "Question",
              "name": "When do you use the Present Perfect Progressive tense?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Use the Present Perfect Progressive for: actions continuing from past to present (I have been studying for 3 hours), recently finished actions with visible results (I've been running - I'm tired), and emphasis on duration rather than completion."
              }
            },
            {
              "@type": "Question",
              "name": "How do you form the Present Perfect Progressive tense?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Form the Present Perfect Progressive with: Subject + have/has + been + verb-ing. Negative: Subject + have/has + not + been + verb-ing. Question: Have/Has + subject + been + verb-ing?"
              }
            },
            {
              "@type": "Question",
              "name": "What is the difference between Present Perfect and Present Perfect Progressive?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Present Perfect Progressive emphasizes duration (I have been working for 5 hours - focus on time spent). Present Perfect emphasizes completion or result (I have completed the work - focus on finished task). Progressive = process, Perfect = result."
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
          What Is the Present Perfect Progressive Tense?
        </h1>

        <div className="bg-blue-50 dark:bg-slate-700 border-l-4 border-blue-600 p-6 mb-8">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">Definition</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            The Present Perfect Progressive tense (also called Present Perfect Continuous) describes actions that started in the past and continue to the present, emphasizing duration. It is formed with have/has been + verb-ing.
          </p>
        </div>

        <ArticleHeading>When to Use the Present Perfect Progressive Tense</ArticleHeading>
        <ul className="list-disc list-inside space-y-3 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li><strong>Actions continuing from past to present:</strong> I have been studying for 3 hours.</li>
          <li><strong>Recently finished actions with visible results:</strong> I've been running. (I'm tired/sweaty)</li>
          <li><strong>Emphasis on duration:</strong> She has been working here since 2020.</li>
          <li><strong>Temporary situations:</strong> They have been living in a hotel for two weeks.</li>
        </ul>

        <ArticleHeading>Present Perfect Progressive Tense Structure</ArticleHeading>
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
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">S + have/has + been + V-ing</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I have been working. / She has been studying.</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Negative</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">S + have/has + not + been + V-ing</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I haven't been working. / She hasn't been studying.</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Question</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Have/Has + S + been + V-ing?</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Have you been working? / Has she been studying?</td>
              </tr>
            </tbody>
          </table>
        </div>

        <ArticleHeading>Common Time Expressions</ArticleHeading>
        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>for + duration (for 3 hours, for two weeks)</li>
          <li>since + starting point (since Monday, since 2020)</li>
          <li>all day, all morning, all week</li>
          <li>recently, lately</li>
          <li>how long...?</li>
          <li>up to now, until now</li>
        </ul>

        <ArticleHeading>Examples</ArticleHeading>
        
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Actions Continuing from Past to Present</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>I have been working on this project for 6 months.</li>
          <li>She has been learning English since 2020.</li>
          <li>They have been waiting for you for an hour.</li>
          <li>We have been living here for 10 years.</li>
        </ul>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Recently Finished Actions with Visible Results</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>I've been running. (That's why I'm tired)</li>
          <li>She's been crying. (Her eyes are red)</li>
          <li>They've been painting the house. (There's paint everywhere)</li>
          <li>It's been raining. (The ground is wet)</li>
        </ul>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Emphasis on Duration</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>How long have you been studying? - For 3 hours.</li>
          <li>He has been talking on the phone for 30 minutes.</li>
          <li>We've been trying to contact you all day.</li>
          <li>She's been working non-stop since morning.</li>
        </ul>

        <ArticleHeading>Common Mistakes</ArticleHeading>
        
        <div className="space-y-4 mb-8">
          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> I have been knowing him for 5 years.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> I have known him for 5 years.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> Stative verbs like "know" aren't used in progressive forms.</p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> She has been finish her work.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> She has been finishing her work.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> Use -ing form after "been."</p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> I have being studying.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> I have been studying.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> Use "been," not "being."</p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> They have been study for 3 hours.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> They have been studying for 3 hours.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> Add -ing to the verb after "been."</p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> I have been worked here since 2020.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> I have been working here since 2020.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> Use -ing form, not past participle, after "been."</p>
          </div>
        </div>

        <ArticleHeading>Present Perfect Progressive vs. Present Perfect</ArticleHeading>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
          The Present Perfect Progressive emphasizes <strong>duration and process</strong>, while the Present Perfect emphasizes <strong>completion and result</strong>.
        </p>

        <ul className="list-disc list-inside space-y-3 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li><strong>Use Progressive for duration:</strong> I have been working for 5 hours. (focus on time spent)</li>
          <li><strong>Use Perfect for completion:</strong> I have completed the work. (focus on finished task)</li>
          <li><strong>Progressive = process:</strong> She has been writing a book. (not finished, ongoing)</li>
          <li><strong>Perfect = result:</strong> She has written a book. (finished, completed)</li>
        </ul>

        <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg mb-8">
          <h4 className="font-bold text-xl mb-4 text-slate-900 dark:text-slate-100">Side-by-Side Comparison</h4>
          <div className="space-y-2 text-slate-700 dark:text-slate-300">
            <p><strong>Present Perfect Progressive:</strong> I have been reading for 2 hours. (emphasis on duration)</p>
            <p><strong>Present Perfect:</strong> I have read 3 chapters. (emphasis on amount completed)</p>
            <p className="mt-4"><strong>Present Perfect Progressive:</strong> She has been cleaning all day. (process, still cleaning)</p>
            <p><strong>Present Perfect:</strong> She has cleaned the house. (result, finished)</p>
          </div>
        </div>

        <ArticleHeading>Quick Check</ArticleHeading>
        <div className="space-y-6 mb-8">
          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">1. Choose the correct form: I ___ for 3 hours.</p>
            <p>A) have been studying</p>
            <p>B) have studied</p>
            <p>C) am studying</p>
            <p>D) studied</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: A) have been studying</p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">2. Which sentence is WRONG?</p>
            <p>A) I have been working.</p>
            <p>B) She has been reading.</p>
            <p>C) They have been knowing.</p>
            <p>D) We have been waiting.</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: C) They have been knowing.</p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">3. Complete: She ___ here since 2020.</p>
            <p>A) has been working</p>
            <p>B) is working</p>
            <p>C) works</p>
            <p>D) worked</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: A) has been working</p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">4. Which emphasizes duration?</p>
            <p>A) I have finished the book.</p>
            <p>B) I have been reading for 5 hours.</p>
            <p>C) I read the book.</p>
            <p>D) I am reading.</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: B) I have been reading for 5 hours.</p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">5. Choose the correct form: How long ___ you ___ English?</p>
            <p>A) do / study</p>
            <p>B) did / study</p>
            <p>C) have / been studying</p>
            <p>D) are / studying</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: C) have / been studying</p>
          </div>
        </div>

        <ArticleHeading>Next Steps</ArticleHeading>
        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li><Link to="/grammar/verb-tenses" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold">Verb Tenses Overview</Link> - Learn all 12 English verb tenses</li>
          <li><Link to="/grammar/verb-tenses/present-perfect" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold">What Is the Present Perfect Tense?</Link> - Compare with Present Perfect Progressive</li>
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

export default PresentPerfectProgressiveTensePage;
