import React from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading } from '../components/ArticleComponents';
import SchemaMarkup from '../components/SchemaMarkup';

const PastSimpleTensePage: React.FC = () => {
  usePageMetadata({
    title: 'What Is the Past Simple Tense? Definition, Rules & Examples',
    description: 'Learn what the Past Simple tense is, when to use it, regular and irregular forms, examples, common mistakes, and comparisons.',
    canonical: 'https://typogrammar.com/grammar/verb-tenses/past-simple'
  });

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What Is the Past Simple Tense?",
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
      "@id": "https://typogrammar.com/grammar/verb-tenses/past-simple"
    },
    "dateModified": "2026-01-27"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the Past Simple tense?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The Past Simple tense describes completed actions, events, or states in the past. It is used for actions that started and finished at a specific time in the past with no connection to the present."
              }
            },
            {
              "@type": "Question",
              "name": "When do you use the Past Simple tense?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Use the Past Simple for: completed past actions (I visited Paris last year), past habits (He smoked when he was younger), sequences of past events (She woke up, had breakfast, and left), and specific past time references."
              }
            },
            {
              "@type": "Question",
              "name": "How do you form the Past Simple tense?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Form the Past Simple with: Subject + verb-ed (regular verbs) or irregular past form. Negative: Subject + did not/didn't + base verb. Question: Did + subject + base verb?"
              }
            },
            {
              "@type": "Question",
              "name": "What are common time expressions for the Past Simple tense?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Common time expressions include: yesterday, last week/month/year, ago (two days ago), in 2020, when I was a child, at that time, once, during my childhood."
              }
            },
            {
              "@type": "Question",
              "name": "What are common mistakes with the Past Simple tense?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Common mistakes include: using did + past form (did went → did go), confusing irregular verb forms (goed → went), using have + past participle instead (have done → did), wrong spelling of -ed endings, and using Past Simple with 'for' duration connecting to present."
              }
            },
            {
              "@type": "Question",
              "name": "What is the difference between Past Simple and Present Perfect?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Past Simple describes completed actions with specific past time (I visited London in 2020). Present Perfect describes actions with results in the present or no specific time (I have visited London). Past Simple = disconnected from now, Present Perfect = connected to now."
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
          What Is the Past Simple Tense?
        </h1>

        <div className="bg-blue-50 dark:bg-slate-700 border-l-4 border-blue-600 p-6 mb-8">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">Definition</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            The Past Simple tense describes completed actions, events, or states in the past. It is used for actions that started and finished at a specific time in the past with no connection to the present moment.
          </p>
        </div>

        <ArticleHeading>When to Use the Past Simple Tense</ArticleHeading>
        <ul className="list-disc list-inside space-y-3 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li><strong>Completed past actions:</strong> I visited Paris last year.</li>
          <li><strong>Past habits (used to/would):</strong> He smoked when he was younger.</li>
          <li><strong>Sequences of past events:</strong> She woke up, had breakfast, and left.</li>
          <li><strong>Specific past time:</strong> We met in 2015.</li>
          <li><strong>Historical facts:</strong> World War II ended in 1945.</li>
          <li><strong>Past states:</strong> I was tired yesterday.</li>
        </ul>

        <ArticleHeading>Past Simple Tense Structure</ArticleHeading>
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
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Affirmative (Regular)</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">S + verb-ed</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I walked to school. / She worked yesterday.</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Affirmative (Irregular)</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">S + irregular past form</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">I went to school. / She ate lunch.</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Negative</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">S + did not/didn't + base verb</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">She didn't work yesterday. / I didn't go.</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Question</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Did + S + base verb?</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Did she work? / Did you go to the party?</td>
              </tr>
            </tbody>
          </table>
        </div>

        <ArticleHeading>Common Time Expressions</ArticleHeading>
        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li>yesterday, last night, last week, last month, last year</li>
          <li>ago (two days ago, three years ago)</li>
          <li>in + year (in 2020, in 1999)</li>
          <li>when I was young, when I was a child</li>
          <li>at that time, in those days</li>
          <li>once, once upon a time</li>
          <li>during + past period (during my childhood, during the war)</li>
        </ul>

        <ArticleHeading>Examples</ArticleHeading>
        
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Completed Past Actions</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>I visited my grandmother last weekend.</li>
          <li>She finished her homework two hours ago.</li>
          <li>They bought a new car last month.</li>
          <li>We lived in Tokyo from 2015 to 2020.</li>
        </ul>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Past Habits</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>I played football every weekend when I was young.</li>
          <li>She always walked to school as a child.</li>
          <li>He smoked, but he quit five years ago.</li>
          <li>We often went camping during summer vacations.</li>
        </ul>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Sequence of Past Events</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li>She woke up, brushed her teeth, and left for work.</li>
          <li>He entered the room, sat down, and opened his book.</li>
          <li>I arrived home, took a shower, and went to bed.</li>
          <li>They met, fell in love, and got married in 2018.</li>
        </ul>

        <ArticleHeading>Common Mistakes</ArticleHeading>
        
        <div className="space-y-4 mb-8">
          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> I did went to the store.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> I went to the store. / I didn't go to the store.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> Use only "did" for negatives/questions. Don't combine "did" with past form in affirmatives.</p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> He goed to school.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> He went to school.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> "Go" is an irregular verb. Its past form is "went," not "goed."</p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> I have visited Paris in 2020.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> I visited Paris in 2020.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> Use Past Simple with specific past time. Present Perfect doesn't use specific past time expressions.</p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> Did you saw the movie?</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> Did you see the movie?</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> After "did," use the base form of the verb, not the past form.</p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded">
            <p className="text-lg mb-2"><strong>Wrong:</strong> I studyed English yesterday.</p>
            <p className="text-lg mb-2"><strong>Correct:</strong> I studied English yesterday.</p>
            <p className="text-slate-700 dark:text-slate-300"><strong>Why:</strong> For verbs ending in consonant + y, change y to i and add -ed (study → studied).</p>
          </div>
        </div>

        <ArticleHeading>Past Simple vs. Present Perfect</ArticleHeading>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
          The Past Simple describes <strong>completed actions with specific past time</strong>, while the Present Perfect describes <strong>actions with results in the present or unspecified time</strong>.
        </p>

        <ul className="list-disc list-inside space-y-3 mb-6 text-lg text-slate-700 dark:text-slate-300">
          <li><strong>Use Past Simple with specific time:</strong> I visited London in 2020.</li>
          <li><strong>Use Present Perfect without time or with "ever":</strong> I have visited London.</li>
          <li><strong>Past Simple = disconnected from now:</strong> I lost my keys yesterday. (found them already)</li>
          <li><strong>Present Perfect = connected to now:</strong> I have lost my keys. (still lost)</li>
          <li><strong>Past Simple for finished time:</strong> I worked there for 5 years. (don't work there anymore)</li>
          <li><strong>Present Perfect for continuing situation:</strong> I have worked here for 5 years. (still working)</li>
        </ul>

        <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg mb-8">
          <h4 className="font-bold text-xl mb-4 text-slate-900 dark:text-slate-100">Side-by-Side Comparison</h4>
          <div className="space-y-2 text-slate-700 dark:text-slate-300">
            <p><strong>Past Simple:</strong> I lived in Paris in 2019. (specific time, finished)</p>
            <p><strong>Present Perfect:</strong> I have lived in Paris. (no specific time, experience)</p>
            <p className="mt-4"><strong>Past Simple:</strong> Did you see that movie? (when? specific)</p>
            <p><strong>Present Perfect:</strong> Have you seen that movie? (ever? general experience)</p>
          </div>
        </div>

        <ArticleHeading>Quick Check</ArticleHeading>
        <div className="space-y-6 mb-8">
          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">1. Choose the correct form: I ___ to London last year.</p>
            <p>A) go</p>
            <p>B) went</p>
            <p>C) have gone</p>
            <p>D) going</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: B) went</p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">2. Which sentence is WRONG?</p>
            <p>A) I did went to school.</p>
            <p>B) I went to school.</p>
            <p>C) I didn't go to school.</p>
            <p>D) Did you go to school?</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: A) I did went to school.</p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">3. Choose the correct form: She ___ her keys yesterday.</p>
            <p>A) lose</p>
            <p>B) losed</p>
            <p>C) lost</p>
            <p>D) has lost</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: C) lost</p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">4. Which is correct for a specific past time?</p>
            <p>A) I have seen him in 2020.</p>
            <p>B) I saw him in 2020.</p>
            <p>C) I see him in 2020.</p>
            <p>D) I am seeing him in 2020.</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: B) I saw him in 2020.</p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">
            <p className="font-semibold text-lg mb-3">5. Choose the correct negative: They ___ come to the party.</p>
            <p>A) didn't</p>
            <p>B) don't</p>
            <p>C) doesn't</p>
            <p>D) not</p>
            <p className="mt-3 text-green-700 dark:text-green-400 font-semibold">Correct answer: A) didn't</p>
          </div>
        </div>

        <ArticleHeading>Next Steps</ArticleHeading>
        <ul className="list-disc list-inside space-y-2 mb-8 text-lg text-slate-700 dark:text-slate-300">
          <li><Link to="/grammar/verb-tenses" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold">Verb Tenses Overview</Link> - Learn all 12 English verb tenses</li>
          <li><Link to="/grammar/verb-tenses/present-perfect" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold">What Is the Present Perfect Tense?</Link> - Compare with Past Simple</li>
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

export default PastSimpleTensePage;
