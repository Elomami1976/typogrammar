import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading, BulletList, CodeBlock } from '../components/ArticleComponents';
import GoogleAd from '../components/GoogleAd';
import SchemaMarkup from '../components/SchemaMarkup';

const PassiveVoiceIELTSPage: React.FC = () => {
  usePageMetadata({
    title: 'Passive Voice for IELTS Writing: Full Guide, Examples, and Band 9 Tips',
    description: 'Learn Passive Voice for IELTS Writing with full explanations, Band 9 examples, Task 1 and Task 2 structures, common mistakes, and practice exercises.'
  });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is passive voice in IELTS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Passive voice focuses on the action, not the person. Example: The bridge was built."
        }
      },
      {
        "@type": "Question",
        "name": "Is passive voice important in IELTS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. It helps increase grammatical range and band score."
        }
      },
      {
        "@type": "Question",
        "name": "Is passive voice used in IELTS Task 1?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. It is essential for process diagrams."
        }
      },
      {
        "@type": "Question",
        "name": "Can passive voice increase IELTS score?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. It helps achieve Band 7+."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Passive Voice for IELTS Writing: Full Guide, Examples, and Band 9 Tips",
    "description": "Passive voice examples and explanation for IELTS Writing Task 1 and Task 2.",
    "author": {
      "@type": "Organization",
      "name": "Typogrammar"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Typogrammar"
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup type="Article" data={articleSchema} />

      <div className="mb-6">
        <Link
          to="/ielts/ielts-writing-task-2-essay-types/"
          className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
        >
          ← Back to IELTS Writing Task 2 Essay Types
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100">
        Passive Voice for IELTS Writing: Full Guide, Examples, and Band 9 Tips
      </h1>

      {/* Quick Summary */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
        <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-200">📌 Quick Summary</h3>
        <p className="text-blue-800 dark:text-blue-300">
          Passive voice is one of the most important grammar structures in IELTS Writing. It is essential for achieving a <strong>Band 7, Band 8, or Band 9</strong> in Grammatical Range and Accuracy, especially in Writing Task 1 and Writing Task 2.
        </p>
      </div>

      <ArticleParagraph>
        In this complete guide, you will learn:
      </ArticleParagraph>
      <BulletList items={[
        <>What passive voice is</>,
        <>Why it is important in IELTS</>,
        <>How to form passive voice (all tenses)</>,
        <>Passive voice examples for IELTS Task 1 and Task 2</>,
        <>Band 9 tips</>,
        <>Common mistakes</>,
        <>Practice exercises</>
      ]} />

      <ArticleParagraph>
        This page is designed for <strong>IELTS students aiming for Band 7+</strong>.
      </ArticleParagraph>

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>

      {/* What Is Passive Voice */}
      <ArticleHeading>What Is Passive Voice?</ArticleHeading>

      <ArticleParagraph>
        Passive voice is used when the focus is on the <strong>action</strong>, not the person who does the action.
      </ArticleParagraph>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Active Voice</h4>
          <p className="text-slate-700 dark:text-slate-300 italic">The government built the bridge.</p>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-5 border border-green-200 dark:border-green-700">
          <h4 className="font-semibold text-green-900 dark:text-green-200 mb-2">Passive Voice</h4>
          <p className="text-slate-800 dark:text-slate-200 italic">The bridge was built by the government.</p>
          <p className="text-green-700 dark:text-green-400 text-sm mt-2">Focus: the bridge, not the government</p>
        </div>
      </div>

      {/* Why Passive Voice Is Important */}
      <ArticleHeading>Why Passive Voice Is Important in IELTS</ArticleHeading>

      <ArticleParagraph>
        Passive voice is extremely common in IELTS, especially in:
      </ArticleParagraph>
      <BulletList items={[
        <>Academic writing</>,
        <>Reports</>,
        <>Processes</>,
        <>Graph descriptions</>
      ]} />

      <ArticleParagraph>It helps you:</ArticleParagraph>
      <BulletList items={[
        <>Sound more academic</>,
        <>Increase grammatical range</>,
        <>Achieve Band 7+</>
      ]} />

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>

      {/* Passive Voice in Task 1 */}
      <ArticleHeading>Passive Voice in IELTS Writing Task 1</ArticleHeading>

      <ArticleParagraph>Passive voice is used in:</ArticleParagraph>
      <BulletList items={[
        <>Process diagrams</>,
        <>Maps</>,
        <>Charts</>
      ]} />

      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 my-6 border border-slate-200 dark:border-slate-700">
        <h4 className="font-semibold text-lg text-slate-900 dark:text-slate-100 mb-4">Example: Process Diagram (Band 9)</h4>

        <div className="space-y-3">
          <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-3 border border-red-200 dark:border-red-700">
            <p className="text-sm font-medium text-red-800 dark:text-red-300">Active:</p>
            <p className="text-slate-800 dark:text-slate-200 italic">Workers collect the coffee beans.</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3 border border-green-200 dark:border-green-700">
            <p className="text-sm font-medium text-green-800 dark:text-green-300">Passive:</p>
            <p className="text-slate-800 dark:text-slate-200 italic">Coffee beans are collected.</p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 border border-blue-200 dark:border-blue-700">
            <p className="text-sm font-medium text-blue-800 dark:text-blue-300">Better IELTS version:</p>
            <p className="text-slate-800 dark:text-slate-200 italic">Coffee beans are collected and then transported to the factory.</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 my-6 border border-green-200 dark:border-green-700">
        <h4 className="font-semibold text-lg text-green-900 dark:text-green-200 mb-4">✅ Real IELTS Examples</h4>
        <div className="space-y-2">
          <p className="text-slate-800 dark:text-slate-200 italic">The water is heated to 100 degrees.</p>
          <p className="text-slate-800 dark:text-slate-200 italic">The mixture is filtered.</p>
          <p className="text-slate-800 dark:text-slate-200 italic">The product is packaged.</p>
        </div>
        <p className="text-green-700 dark:text-green-400 text-sm mt-3">
          Passive voice is used because the person is not important.
        </p>
      </div>

      {/* Passive Voice in Task 2 */}
      <ArticleHeading>Passive Voice in IELTS Writing Task 2</ArticleHeading>

      <ArticleParagraph>
        Passive voice makes your essay more <strong>formal and academic</strong>.
      </ArticleParagraph>

      <div className="space-y-4 my-6">
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Band 9 Example</h4>
          <div className="space-y-2">
            <p className="text-slate-800 dark:text-slate-200">
              <span className="text-slate-500 dark:text-slate-400 font-medium">Active:</span> <em>People believe that technology causes problems.</em>
            </p>
            <p className="text-slate-800 dark:text-slate-200">
              <span className="text-green-600 dark:text-green-400 font-medium">Passive:</span> <em>It is believed that technology causes problems.</em>
            </p>
          </div>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Another Example</h4>
          <div className="space-y-2">
            <p className="text-slate-800 dark:text-slate-200">
              <span className="text-slate-500 dark:text-slate-400 font-medium">Active:</span> <em>The government should improve education.</em>
            </p>
            <p className="text-slate-800 dark:text-slate-200">
              <span className="text-green-600 dark:text-green-400 font-medium">Passive:</span> <em>Education should be improved.</em>
            </p>
          </div>
        </div>
      </div>

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>

      {/* How to Form Passive Voice */}
      <ArticleHeading>How to Form Passive Voice</ArticleHeading>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-6 rounded-r-lg">
        <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">Formula:</h4>
        <CodeBlock>{`Object + be + past participle`}</CodeBlock>
      </div>

      {/* Passive Voice Table */}
      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Passive Voice Table (All Tenses)</h3>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse border border-slate-300 dark:border-slate-600">
          <thead>
            <tr className="bg-blue-50 dark:bg-blue-900/30">
              <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold text-slate-900 dark:text-slate-100">Tense</th>
              <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold text-slate-900 dark:text-slate-100">Active</th>
              <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold text-slate-900 dark:text-slate-100">Passive</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300 font-medium">Present Simple</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">They build houses</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Houses <strong>are built</strong></td>
            </tr>
            <tr className="bg-slate-50 dark:bg-slate-800/30">
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300 font-medium">Past Simple</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">They built houses</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Houses <strong>were built</strong></td>
            </tr>
            <tr>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300 font-medium">Present Perfect</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">They have built houses</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Houses <strong>have been built</strong></td>
            </tr>
            <tr className="bg-slate-50 dark:bg-slate-800/30">
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300 font-medium">Future</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">They will build houses</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Houses <strong>will be built</strong></td>
            </tr>
            <tr>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300 font-medium">Modal</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">They can build houses</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Houses <strong>can be built</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Most Common Passive Voice */}
      <ArticleHeading>Most Common Passive Voice in IELTS</ArticleHeading>

      <ArticleParagraph>These are used the most:</ArticleParagraph>

      <div className="flex flex-wrap gap-2 my-6">
        {['is shown', 'is illustrated', 'is given', 'is produced', 'is built', 'is increased', 'is decreased'].map((phrase, i) => (
          <span key={i} className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium">
            {phrase}
          </span>
        ))}
      </div>

      <div className="space-y-4 my-6">
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Band 9 IELTS Task 1 Example</h4>
          <div className="space-y-2">
            <p className="text-slate-800 dark:text-slate-200">
              <span className="text-slate-500 dark:text-slate-400 font-medium">Original:</span> <em>The graph shows population growth.</em>
            </p>
            <p className="text-slate-800 dark:text-slate-200">
              <span className="text-green-600 dark:text-green-400 font-medium">Band 9:</span> <em>Population growth is shown in the graph.</em>
            </p>
          </div>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Another Example</h4>
          <div className="space-y-2">
            <p className="text-slate-800 dark:text-slate-200">
              <span className="text-slate-500 dark:text-slate-400 font-medium">Original:</span> <em>The chart shows sales.</em>
            </p>
            <p className="text-slate-800 dark:text-slate-200">
              <span className="text-green-600 dark:text-green-400 font-medium">Band 9:</span> <em>Sales are illustrated in the chart.</em>
            </p>
          </div>
        </div>
      </div>

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>

      {/* Passive Voice for Process */}
      <ArticleHeading>Passive Voice for Process IELTS (Essential)</ArticleHeading>

      <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 my-6 border border-green-200 dark:border-green-700">
        <h4 className="font-semibold text-lg text-green-900 dark:text-green-200 mb-4">✅ Example</h4>
        <div className="text-slate-800 dark:text-slate-200 space-y-2">
          <p><em>First, the raw materials are collected.</em></p>
          <p><em>Then, they are processed.</em></p>
          <p><em>Finally, the product is delivered.</em></p>
        </div>
        <div className="mt-4 bg-green-100 dark:bg-green-800/30 rounded-lg p-3">
          <p className="text-green-900 dark:text-green-200 text-sm font-medium">
            ✅ This is the correct IELTS style.
          </p>
        </div>
      </div>

      {/* Advanced Passive Voice */}
      <ArticleHeading>Advanced Passive Voice (Band 8-9)</ArticleHeading>

      <ArticleParagraph>These structures increase your score:</ArticleParagraph>

      <div className="space-y-4 my-6">
        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-5 border border-purple-200 dark:border-purple-700">
          <h4 className="font-semibold text-purple-900 dark:text-purple-200 mb-2">It is believed that</h4>
          <p className="text-slate-800 dark:text-slate-200 italic">It is believed that education is important.</p>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-5 border border-purple-200 dark:border-purple-700">
          <h4 className="font-semibold text-purple-900 dark:text-purple-200 mb-2">It is said that</h4>
          <p className="text-slate-800 dark:text-slate-200 italic">It is said that exercise improves health.</p>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-5 border border-purple-200 dark:border-purple-700">
          <h4 className="font-semibold text-purple-900 dark:text-purple-200 mb-2">It is expected that</h4>
          <p className="text-slate-800 dark:text-slate-200 italic">It is expected that prices will rise.</p>
        </div>
      </div>

      <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 p-6 my-6 rounded-r-lg">
        <p className="text-teal-800 dark:text-teal-300 font-medium">
          💡 These are very high-level IELTS structures.
        </p>
      </div>

      {/* Passive vs Active */}
      <ArticleHeading>Passive Voice vs Active Voice in IELTS</ArticleHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Active</h4>
          <p className="text-slate-700 dark:text-slate-300 italic">People use the internet every day.</p>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-5 border border-green-200 dark:border-green-700">
          <h4 className="font-semibold text-green-900 dark:text-green-200 mb-2">Passive</h4>
          <p className="text-slate-800 dark:text-slate-200 italic">The internet is used every day.</p>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6 rounded-r-lg">
        <p className="text-blue-800 dark:text-blue-300 font-medium">
          Passive is better in academic writing.
        </p>
      </div>

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>

      {/* When to Use / Not Use */}
      <ArticleHeading>When to Use Passive Voice in IELTS</ArticleHeading>

      <ArticleParagraph>Use passive voice when:</ArticleParagraph>
      <BulletList items={[
        <>The doer is unknown</>,
        <>The doer is not important</>,
        <>Writing process diagrams</>,
        <>Writing academic essays</>
      ]} />

      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">When NOT to Use Passive Voice</h3>

      <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 my-6 rounded-r-lg">
        <p className="font-semibold text-red-900 dark:text-red-200 mb-3">
          ⚠️ Do NOT overuse passive voice.
        </p>
        <div className="space-y-2">
          <p className="text-slate-800 dark:text-slate-200">
            <span className="text-red-600 dark:text-red-400 font-medium">Bad example:</span>
          </p>
          <p className="text-slate-800 dark:text-slate-200 italic">
            It is believed that exercise is done by people and is considered important by many people.
          </p>
          <p className="text-red-700 dark:text-red-400 text-sm mt-2">Too much passive = unnatural</p>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6 rounded-r-lg">
        <p className="text-green-800 dark:text-green-300 font-medium">
          ✅ Mix active and passive for the best score.
        </p>
      </div>

      {/* Common Mistakes */}
      <ArticleHeading>Common Passive Voice Mistakes (IELTS Students)</ArticleHeading>

      <div className="space-y-4 my-6">
        <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-5 border border-red-200 dark:border-red-700">
          <h4 className="font-semibold text-red-900 dark:text-red-200 mb-3">Mistake 1 - Missing "was"</h4>
          <div className="space-y-2">
            <p className="text-slate-800 dark:text-slate-200">
              <span className="text-red-600 dark:text-red-400 font-medium">❌ Wrong:</span> <em>The bridge built in 1990.</em>
            </p>
            <p className="text-slate-800 dark:text-slate-200">
              <span className="text-green-600 dark:text-green-400 font-medium">✅ Correct:</span> <em>The bridge was built in 1990.</em>
            </p>
          </div>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-5 border border-red-200 dark:border-red-700">
          <h4 className="font-semibold text-red-900 dark:text-red-200 mb-3">Mistake 2 - Wrong past participle</h4>
          <div className="space-y-2">
            <p className="text-slate-800 dark:text-slate-200">
              <span className="text-red-600 dark:text-red-400 font-medium">❌ Wrong:</span> <em>The product is produce.</em>
            </p>
            <p className="text-slate-800 dark:text-slate-200">
              <span className="text-green-600 dark:text-green-400 font-medium">✅ Correct:</span> <em>The product is produced.</em>
            </p>
          </div>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-5 border border-red-200 dark:border-red-700">
          <h4 className="font-semibold text-red-900 dark:text-red-200 mb-3">Mistake 3 - Wrong past participle</h4>
          <div className="space-y-2">
            <p className="text-slate-800 dark:text-slate-200">
              <span className="text-red-600 dark:text-red-400 font-medium">❌ Wrong:</span> <em>The houses are build.</em>
            </p>
            <p className="text-slate-800 dark:text-slate-200">
              <span className="text-green-600 dark:text-green-400 font-medium">✅ Correct:</span> <em>The houses are built.</em>
            </p>
          </div>
        </div>
      </div>

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>

      {/* Band 9 Task 1 Introductions */}
      <ArticleHeading>Passive Voice Band 9 Task 1 Introduction Examples</ArticleHeading>

      <ArticleParagraph>You can use these:</ArticleParagraph>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Active Introductions</h4>
          <BulletList items={[
            <><em>The graph illustrates...</em></>,
            <><em>The graph shows...</em></>
          ]} />
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-5 border border-green-200 dark:border-green-700">
          <h4 className="font-semibold text-green-900 dark:text-green-200 mb-3">Passive Introductions</h4>
          <BulletList items={[
            <><em>The graph is illustrated...</em></>,
            <><em>The data is presented...</em></>,
            <><em>The information is given...</em></>
          ]} />
        </div>
      </div>

      {/* Passive Voice for Maps */}
      <ArticleHeading>Passive Voice for Maps IELTS</ArticleHeading>

      <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 my-6 border border-green-200 dark:border-green-700">
        <h4 className="font-semibold text-lg text-green-900 dark:text-green-200 mb-4">Band 9 Examples</h4>
        <div className="space-y-2">
          <p className="text-slate-800 dark:text-slate-200 italic">A new road was built.</p>
          <p className="text-slate-800 dark:text-slate-200 italic">The park was expanded.</p>
          <p className="text-slate-800 dark:text-slate-200 italic">Several buildings were demolished.</p>
        </div>
        <div className="mt-4 bg-green-100 dark:bg-green-800/30 rounded-lg p-3">
          <p className="text-green-900 dark:text-green-200 text-sm font-medium">
            ✅ This is Band 9 style.
          </p>
        </div>
      </div>

      {/* Passive Voice Vocabulary */}
      <ArticleHeading>Passive Voice Vocabulary for IELTS</ArticleHeading>

      <ArticleParagraph>These verbs are very important:</ArticleParagraph>

      <div className="flex flex-wrap gap-2 my-6">
        {['built', 'constructed', 'produced', 'manufactured', 'increased', 'decreased', 'shown', 'illustrated', 'presented', 'given'].map((word, i) => (
          <span key={i} className="bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-medium">
            {word}
          </span>
        ))}
      </div>

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>

      {/* Band 9 Sample Paragraph */}
      <ArticleHeading>Band 9 Sample Paragraph Using Passive Voice</ArticleHeading>

      <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 my-6 border border-green-200 dark:border-green-700">
        <div className="text-slate-800 dark:text-slate-200 space-y-4">
          <p>
            The diagram illustrates how coffee is produced. First, coffee beans are harvested and then they are transported to the factory. After that, the beans are processed and dried. Finally, the finished product is packaged and delivered to stores.
          </p>
        </div>
        <div className="mt-4 bg-green-100 dark:bg-green-800/30 rounded-lg p-3">
          <p className="text-green-900 dark:text-green-200 text-sm font-medium">
            ✅ This is perfect IELTS grammar.
          </p>
        </div>
      </div>

      {/* Band Score Table */}
      <ArticleHeading>Passive Voice and IELTS Band Score</ArticleHeading>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse border border-slate-300 dark:border-slate-600">
          <thead>
            <tr className="bg-blue-50 dark:bg-blue-900/30">
              <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold text-slate-900 dark:text-slate-100">Band Score</th>
              <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold text-slate-900 dark:text-slate-100">Passive Voice Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300 font-medium">Band 6</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Limited passive voice</td>
            </tr>
            <tr className="bg-slate-50 dark:bg-slate-800/30">
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300 font-medium">Band 7</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Some passive voice used correctly</td>
            </tr>
            <tr>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300 font-medium">Band 8</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Good range of passive voice</td>
            </tr>
            <tr className="bg-slate-50 dark:bg-slate-800/30">
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300 font-medium">Band 9</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Wide range used naturally</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Examiner Tip */}
      <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 p-6 my-6 rounded-r-lg">
        <h4 className="font-semibold text-teal-900 dark:text-teal-200 mb-3">💡 IELTS Examiner Tip (Important)</h4>
        <ArticleParagraph>IELTS examiners look for:</ArticleParagraph>
        <BulletList items={[
          <>Grammatical range</>,
          <>Complex structures</>
        ]} />
        <p className="text-teal-800 dark:text-teal-300 font-medium mt-2">
          Passive voice helps achieve this.
        </p>
      </div>

      {/* Practice Exercise */}
      <ArticleHeading>Practice Exercise</ArticleHeading>

      <ArticleParagraph>Change to passive voice:</ArticleParagraph>

      <div className="space-y-4 my-6">
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
          <p className="text-slate-800 dark:text-slate-200 font-medium mb-2">1. People produce cars in Germany.</p>
          <p className="text-slate-800 dark:text-slate-200 font-medium mb-2">2. The government built the road.</p>
          <p className="text-slate-800 dark:text-slate-200 font-medium">3. They will finish the project.</p>
        </div>

        <details className="bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
          <summary className="p-4 cursor-pointer font-semibold text-green-900 dark:text-green-200">
            Click to see answers
          </summary>
          <div className="px-5 pb-5 space-y-2">
            <p className="text-slate-800 dark:text-slate-200">
              <strong>1.</strong> Cars <em>are produced</em> in Germany.
            </p>
            <p className="text-slate-800 dark:text-slate-200">
              <strong>2.</strong> The road <em>was built</em>.
            </p>
            <p className="text-slate-800 dark:text-slate-200">
              <strong>3.</strong> The project <em>will be finished</em>.
            </p>
          </div>
        </details>
      </div>

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>

      {/* Quick Templates */}
      <ArticleHeading>Quick IELTS Passive Voice Templates</ArticleHeading>

      <ArticleParagraph>Use these in your exam:</ArticleParagraph>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-5 border border-blue-200 dark:border-blue-700">
          <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-3">Task 1</h4>
          <BulletList items={[
            <><em>The data is presented in the graph.</em></>,
            <><em>The process is shown in the diagram.</em></>
          ]} />
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-5 border border-green-200 dark:border-green-700">
          <h4 className="font-semibold text-green-900 dark:text-green-200 mb-3">Task 2</h4>
          <BulletList items={[
            <><em>It is believed that...</em></>,
            <><em>It is argued that...</em></>
          ]} />
        </div>
      </div>

      {/* Full Process Example */}
      <ArticleHeading>Passive Voice for IELTS Writing Task 1 Process (Full Example)</ArticleHeading>

      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 my-6 border border-slate-200 dark:border-slate-700">
        <h4 className="font-semibold text-lg text-slate-900 dark:text-slate-100 mb-3">📝 Question</h4>
        <p className="text-slate-700 dark:text-slate-300 italic mb-4">
          The diagram shows how paper is made.
        </p>

        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-700">
          <h4 className="font-semibold text-green-900 dark:text-green-200 mb-2">Band 9 Version</h4>
          <div className="text-slate-800 dark:text-slate-200 space-y-2">
            <p>The process of paper production is illustrated in the diagram. First, trees are cut down and transported to the factory. Then, the wood is processed and converted into paper. Finally, the paper is packaged and delivered.</p>
          </div>
        </div>
      </div>

      {/* Summary */}
      <ArticleHeading>Summary</ArticleHeading>

      <ArticleParagraph>
        Passive voice is essential for IELTS Writing. It helps you:
      </ArticleParagraph>
      <BulletList items={[
        <>Sound academic</>,
        <>Increase band score</>,
        <>Improve grammar range</>
      ]} />

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-6 rounded-r-lg">
        <p className="text-blue-800 dark:text-blue-300 font-medium">
          You must use passive voice, especially in Task 1.
        </p>
      </div>

      {/* Final Tips */}
      <ArticleHeading>Final Band 9 Tips</ArticleHeading>

      <ArticleParagraph>Use passive voice in:</ArticleParagraph>
      <BulletList items={[
        <>Process diagrams</>,
        <>Maps</>,
        <>Formal essays</>
      ]} />

      <ArticleParagraph>Use these structures:</ArticleParagraph>

      <div className="flex flex-wrap gap-2 my-6">
        {['is shown', 'was built', 'is produced', 'It is believed that'].map((phrase, i) => (
          <span key={i} className="bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300 px-4 py-2 rounded-full text-sm font-medium">
            {phrase}
          </span>
        ))}
      </div>

      {/* FAQ */}
      <ArticleHeading>Frequently Asked Questions</ArticleHeading>

      <div className="space-y-4 my-6">
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
          <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">What is passive voice in IELTS?</p>
          <p className="text-slate-700 dark:text-slate-300">Passive voice focuses on the action, not the person. Example: The bridge was built.</p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
          <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Is passive voice important in IELTS?</p>
          <p className="text-slate-700 dark:text-slate-300">Yes. It helps increase grammatical range and band score.</p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
          <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Is passive voice used in IELTS Task 1?</p>
          <p className="text-slate-700 dark:text-slate-300">Yes. It is essential for process diagrams.</p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
          <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Can passive voice increase IELTS score?</p>
          <p className="text-slate-700 dark:text-slate-300">Yes. It helps achieve Band 7+.</p>
        </div>
      </div>

      {/* Related Links */}
      <ArticleHeading>Related Lessons</ArticleHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <Link to="/ielts/conditionals-in-ielts/" className="block p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 transition-colors">
          <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-1">Conditionals in IELTS</h4>
          <p className="text-sm text-blue-700 dark:text-blue-400">Full guide with Band 9 examples.</p>
        </Link>
        <Link to="/ielts/ielts-writing-task-2-essay-types/" className="block p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800 hover:border-green-400 dark:hover:border-green-600 transition-colors">
          <h4 className="font-semibold text-green-900 dark:text-green-200 mb-1">IELTS Writing Task 2 Essay Types</h4>
          <p className="text-sm text-green-700 dark:text-green-400">Band 7-9 model answers.</p>
        </Link>
        <Link to="/ielts/tests/" className="block p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 transition-colors">
          <h4 className="font-semibold text-purple-900 dark:text-purple-200 mb-1">IELTS Listening - Mock Tests</h4>
          <p className="text-sm text-purple-700 dark:text-purple-400">Practice with realistic listening tests.</p>
        </Link>
        <Link to="/ielts/writing-task-2-band-9-essays-book/" className="block p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-200 dark:border-teal-800 hover:border-teal-400 dark:hover:border-teal-600 transition-colors">
          <h4 className="font-semibold text-teal-900 dark:text-teal-200 mb-1">IELTS Writing Task 2 Band 9 Essays Book</h4>
          <p className="text-sm text-teal-700 dark:text-teal-400">Free PDF with Band 9 model essays.</p>
        </Link>
      </div>

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>
    </div>
  );
};

export default PassiveVoiceIELTSPage;
