import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading, BulletList, CodeBlock } from '../components/ArticleComponents';
import GoogleAd from '../components/GoogleAd';
import SchemaMarkup from '../components/SchemaMarkup';

const LexicalResourceIELTSPage: React.FC = () => {
  usePageMetadata({
    title: 'What Is Lexical Resource in IELTS? Band 9 Guide',
    description: 'Learn what Lexical Resource means in IELTS Writing, official band descriptors, examples, common mistakes, and how to reach Band 7–9 easily.'
  });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Lexical Resource in IELTS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Lexical Resource measures how well a candidate uses vocabulary accurately, flexibly, and appropriately in IELTS Writing and Speaking."
        }
      },
      {
        "@type": "Question",
        "name": "How much does Lexical Resource count in IELTS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Lexical Resource accounts for 25% of the total IELTS Writing and Speaking band score."
        }
      },
      {
        "@type": "Question",
        "name": "How can I improve Lexical Resource for Band 7?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Improve vocabulary range, learn collocations, practice paraphrasing, avoid repetition, and ensure correct spelling."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What Is Lexical Resource in IELTS? Band 9 Guide",
    "description": "Learn what Lexical Resource means in IELTS Writing, official band descriptors, examples, common mistakes, and how to reach Band 7–9 easily.",
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
          to="/ielts/ielts-writing-task-2-essay-types"
          className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
        >
          ← Back to IELTS Writing Task 2 Essay Types
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100">
        What Is Lexical Resource in IELTS?
      </h1>

      {/* Quick Summary */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
        <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-200">📌 Quick Summary</h3>
        <p className="text-blue-800 dark:text-blue-300">
          Lexical Resource in IELTS means: <strong>Using a wide range of vocabulary, choosing words accurately, using natural collocations, avoiding repetition, and spelling correctly.</strong> It accounts for 25% of your IELTS Writing and Speaking score.
        </p>
      </div>

      {/* Introduction */}
      <ArticleParagraph>
        Lexical Resource is one of the four official scoring criteria used to evaluate your performance in the IELTS Writing and Speaking tests.
      </ArticleParagraph>

      <ArticleParagraph>
        It measures: <strong>Your ability to use vocabulary accurately, flexibly, and appropriately.</strong>
      </ArticleParagraph>

      <ArticleParagraph>
        In simple terms: <strong>Lexical Resource = How well you use English vocabulary.</strong>
      </ArticleParagraph>

      <ArticleParagraph>
        This guide explains:
      </ArticleParagraph>
      <BulletList items={[
        <>What Lexical Resource means</>,
        <>How examiners score it</>,
        <>Band score differences</>,
        <>Common mistakes</>,
        <>How to improve your vocabulary score</>
      ]} />

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>

      {/* What Does Lexical Resource Measure */}
      <ArticleHeading>🎯 What Does Lexical Resource Measure?</ArticleHeading>

      <ArticleParagraph>
        Examiners evaluate:
      </ArticleParagraph>

      <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg my-6">
        <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
          <li>Vocabulary range (basic vs advanced words)</li>
          <li>Accuracy of word usage</li>
          <li>Use of less common vocabulary</li>
          <li>Collocations (natural word combinations)</li>
          <li>Spelling accuracy</li>
          <li>Paraphrasing ability</li>
        </ul>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="text-yellow-800 dark:text-yellow-300 font-medium">
          ⚠️ Important: Lexical Resource does NOT measure grammar structure directly. It does NOT measure idea development. It measures <strong>vocabulary control</strong>.
        </p>
      </div>

      {/* Band Descriptors */}
      <ArticleHeading>📊 Official IELTS Band Descriptors (Simplified)</ArticleHeading>

      <ArticleParagraph>
        Below is a simplified explanation of how Lexical Resource is scored:
      </ArticleParagraph>

      {/* Band 9 */}
      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-4 rounded-r-lg">
        <h4 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">🟢 Band 9</h4>
        <ul className="list-disc list-inside space-y-1 text-green-700 dark:text-green-300 mb-4">
          <li>Wide vocabulary range</li>
          <li>Precise word choice</li>
          <li>Natural collocations</li>
          <li>Rare minor errors only</li>
        </ul>
        <div className="bg-white dark:bg-slate-900 p-3 rounded border-l-2 border-green-400">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Example:</p>
          <p className="text-green-700 dark:text-green-300 italic">"The government should allocate substantial funding to public infrastructure."</p>
        </div>
      </div>

      {/* Band 8 */}
      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4 my-4 rounded-r-lg">
        <h4 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">🟢 Band 8</h4>
        <ul className="list-disc list-inside space-y-1 text-green-700 dark:text-green-300">
          <li>Wide vocabulary</li>
          <li>Occasional inaccuracies</li>
          <li>Good use of less common words</li>
        </ul>
      </div>

      {/* Band 7 */}
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-4 rounded-r-lg">
        <h4 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">🟡 Band 7</h4>
        <ul className="list-disc list-inside space-y-1 text-yellow-700 dark:text-yellow-300">
          <li>Sufficient vocabulary range</li>
          <li>Some awareness of style and collocation</li>
          <li>Occasional word choice errors</li>
        </ul>
      </div>

      {/* Band 6 */}
      <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 my-4 rounded-r-lg">
        <h4 className="text-lg font-semibold text-orange-800 dark:text-orange-200 mb-2">🟠 Band 6</h4>
        <ul className="list-disc list-inside space-y-1 text-orange-700 dark:text-orange-300">
          <li>Adequate vocabulary</li>
          <li>Repetition of basic words</li>
          <li>Noticeable word choice errors</li>
        </ul>
      </div>

      {/* Band 5 or Below */}
      <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 my-4 rounded-r-lg">
        <h4 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">🔴 Band 5 or Below</h4>
        <ul className="list-disc list-inside space-y-1 text-red-700 dark:text-red-300">
          <li>Limited vocabulary</li>
          <li>Frequent repetition</li>
          <li>Incorrect word forms</li>
          <li>Meaning sometimes unclear</li>
        </ul>
      </div>

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>

      {/* Writing vs Speaking */}
      <ArticleHeading>📝 Lexical Resource in Writing vs Speaking</ArticleHeading>

      <h3 className="text-xl font-semibold mt-8 mb-4 text-slate-800 dark:text-slate-200">IELTS Writing</h3>

      <ArticleParagraph>
        Lexical Resource includes:
      </ArticleParagraph>
      <BulletList items={[
        <>Academic vocabulary</>,
        <>Formal tone</>,
        <>Paraphrasing skills</>,
        <>Accurate spelling</>
      ]} />

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
          <p className="font-semibold text-red-800 dark:text-red-200 mb-2">❌ Basic:</p>
          <p className="text-red-700 dark:text-red-300">"Many people think this is bad."</p>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
          <p className="font-semibold text-green-800 dark:text-green-200 mb-2">✅ Improved:</p>
          <p className="text-green-700 dark:text-green-300">"A significant proportion of individuals believe this trend is detrimental."</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-4 text-slate-800 dark:text-slate-200">IELTS Speaking</h3>

      <ArticleParagraph>
        Lexical Resource includes:
      </ArticleParagraph>
      <BulletList items={[
        <>Natural expressions</>,
        <>Idiomatic language (if appropriate)</>,
        <>Topic-related vocabulary</>,
        <>Ability to explain words if forgotten</>
      ]} />

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
        <p className="text-blue-800 dark:text-blue-300 font-medium">
          💡 You do NOT need extremely difficult vocabulary. You need <strong>appropriate vocabulary</strong>.
        </p>
      </div>

      {/* Common Mistakes */}
      <ArticleHeading>❌ Common Lexical Resource Mistakes</ArticleHeading>

      <ArticleParagraph>
        Many candidates lose marks because they:
      </ArticleParagraph>

      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg my-6">
        <ul className="list-disc list-inside space-y-2 text-red-800 dark:text-red-300">
          <li>Memorize complex words incorrectly</li>
          <li>Use words in the wrong context</li>
          <li>Repeat the same vocabulary</li>
          <li>Overuse synonyms unnaturally</li>
          <li>Make spelling mistakes</li>
          <li>Translate directly from their native language</li>
        </ul>
      </div>

      <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg my-6">
        <p className="font-semibold text-slate-800 dark:text-slate-200 mb-4">Example of misuse:</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded">
            <p className="text-sm text-red-600 dark:text-red-400 mb-1">❌ Incorrect:</p>
            <p className="text-red-800 dark:text-red-300">"This problem is very dangerous for society."</p>
          </div>
          <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded">
            <p className="text-sm text-green-600 dark:text-green-400 mb-1">✅ Better:</p>
            <p className="text-green-800 dark:text-green-300">"This issue is highly damaging to society."</p>
          </div>
        </div>
      </div>

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>

      {/* Strong vs Weak Example */}
      <ArticleHeading>🔎 Strong vs Weak Vocabulary Example</ArticleHeading>

      <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg my-6">
        <p className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Question:</p>
        <CodeBlock>
          "Some people believe technology isolates individuals from society."
        </CodeBlock>
      </div>

      {/* Weak Vocabulary */}
      <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 my-6 rounded-r-lg">
        <h4 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-3">❌ Weak Vocabulary (Band 5–6)</h4>
        <ul className="list-disc list-inside space-y-2 text-red-700 dark:text-red-300">
          <li>Repeats "technology" many times</li>
          <li>Uses simple words like "bad," "good," "big problem"</li>
        </ul>
      </div>

      {/* Strong Vocabulary */}
      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 my-6 rounded-r-lg">
        <h4 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-3">✅ Strong Vocabulary (Band 8–9)</h4>
        <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300">
          <li>Uses variations: <em>innovation, digital devices, technological advancement</em></li>
          <li>Uses precise terms: <em>social isolation, reduced face-to-face interaction</em></li>
          <li>Shows flexibility in paraphrasing</li>
        </ul>
      </div>

      {/* How to Improve */}
      <ArticleHeading>🚀 How to Improve Lexical Resource</ArticleHeading>

      <ArticleParagraph>
        Follow these practical steps:
      </ArticleParagraph>

      <h3 className="text-xl font-semibold mt-8 mb-4 text-slate-800 dark:text-slate-200">1️⃣ Learn Vocabulary in Context</h3>
      <ArticleParagraph>
        Do NOT memorize word lists only. Instead:
      </ArticleParagraph>
      <BulletList items={[
        <>Learn words inside sentences</>,
        <>Learn collocations</>,
        <>Study topic-based vocabulary</>
      ]} />

      <h3 className="text-xl font-semibold mt-8 mb-4 text-slate-800 dark:text-slate-200">2️⃣ Improve Paraphrasing Skills</h3>
      <ArticleParagraph>
        Practice rewriting:
      </ArticleParagraph>
      <BulletList items={[
        <>The question</>,
        <>Topic sentences</>,
        <>Supporting ideas</>
      ]} />
      <ArticleParagraph>
        <strong>Paraphrasing is essential for Band 7+.</strong>
      </ArticleParagraph>

      <h3 className="text-xl font-semibold mt-8 mb-4 text-slate-800 dark:text-slate-200">3️⃣ Focus on Collocations</h3>
      <ArticleParagraph>
        Natural combinations matter:
      </ArticleParagraph>
      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
        <p className="font-semibold text-green-800 dark:text-green-200 mb-2">✅ Correct collocations:</p>
        <ul className="list-disc list-inside text-green-700 dark:text-green-300 space-y-1">
          <li>Make a decision</li>
          <li>Heavy traffic</li>
          <li>Global issue</li>
          <li>Economic growth</li>
        </ul>
      </div>
      <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 my-4">
        <p className="text-red-800 dark:text-red-300">
          ⚠️ Incorrect collocations lower your score.
        </p>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-4 text-slate-800 dark:text-slate-200">4️⃣ Avoid Overcomplicated Words</h3>
      <ArticleParagraph>
        Using very difficult words incorrectly reduces your band.
      </ArticleParagraph>
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-4">
        <p className="text-blue-800 dark:text-blue-300 font-bold text-lg">
          Accuracy &gt; Complexity
        </p>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-4 text-slate-800 dark:text-slate-200">5️⃣ Fix Spelling Errors</h3>
      <ArticleParagraph>
        Spelling mistakes reduce Lexical Resource score in Writing.
      </ArticleParagraph>

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>

      {/* Lexical Resource vs Other Criteria */}
      <ArticleHeading>🧠 Lexical Resource vs Other IELTS Criteria</ArticleHeading>

      <ArticleParagraph>
        Many students confuse vocabulary with grammar.
      </ArticleParagraph>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-sm">
          <thead>
            <tr className="bg-slate-100 dark:bg-slate-700">
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200 border-b dark:border-slate-600">Criterion</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200 border-b dark:border-slate-600">Measures</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b dark:border-slate-700">
              <td className="px-6 py-4 text-slate-800 dark:text-slate-300 font-medium">Lexical Resource</td>
              <td className="px-6 py-4 text-slate-600 dark:text-slate-400">Vocabulary use</td>
            </tr>
            <tr className="border-b dark:border-slate-700">
              <td className="px-6 py-4 text-slate-800 dark:text-slate-300 font-medium">Grammar</td>
              <td className="px-6 py-4 text-slate-600 dark:text-slate-400">Sentence accuracy</td>
            </tr>
            <tr className="border-b dark:border-slate-700">
              <td className="px-6 py-4 text-slate-800 dark:text-slate-300 font-medium">Coherence</td>
              <td className="px-6 py-4 text-slate-600 dark:text-slate-400">Organization</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-slate-800 dark:text-slate-300 font-medium">Task Achievement</td>
              <td className="px-6 py-4 text-slate-600 dark:text-slate-400">Answer completeness</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="text-yellow-800 dark:text-yellow-300 font-medium">
          ⚠️ You can have strong grammar but weak vocabulary — and still lose marks.
        </p>
      </div>

      {/* FAQ Section */}
      <ArticleHeading>❓ Frequently Asked Questions (FAQ)</ArticleHeading>

      <div className="space-y-6 my-6">
        <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
          <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">What is Lexical Resource in IELTS?</h4>
          <p className="text-slate-600 dark:text-slate-400">Lexical Resource measures how well you use vocabulary in IELTS Writing and Speaking.</p>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
          <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">How much is Lexical Resource worth?</h4>
          <p className="text-slate-600 dark:text-slate-400">It makes up 25% of the total score in Writing and Speaking.</p>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
          <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">How can I improve Lexical Resource?</h4>
          <p className="text-slate-600 dark:text-slate-400">Improve vocabulary range, learn collocations, practice paraphrasing, and avoid repetition.</p>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
          <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Do I need very advanced vocabulary for Band 7?</h4>
          <p className="text-slate-600 dark:text-slate-400">No. You need accurate, appropriate, and flexible vocabulary — not extremely difficult words.</p>
        </div>
      </div>

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>

      {/* Conclusion */}
      <ArticleHeading>🧩 Conclusion</ArticleHeading>

      <ArticleParagraph>
        Lexical Resource is not about using difficult words. It is about <strong>using the right words in the right way</strong>.
      </ArticleParagraph>

      <ArticleParagraph>
        If you focus on:
      </ArticleParagraph>
      <BulletList items={[
        <>Context-based learning</>,
        <>Collocations</>,
        <>Paraphrasing</>,
        <>Accuracy</>
      ]} />

      <ArticleParagraph>
        You can <strong>significantly improve your IELTS band score</strong>.
      </ArticleParagraph>

      {/* Related Resources */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-6 rounded-lg my-8">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-200 mb-4">📚 Related IELTS Resources</h3>
        <ul className="space-y-2">
          <li>
            <Link to="/ielts/task-achievement-in-ielts" className="text-blue-600 dark:text-blue-400 hover:underline">
              → What Is Task Achievement in IELTS?
            </Link>
          </li>
          <li>
            <Link to="/blog/why-youre-stuck-at-band-6-ielts-writing" className="text-blue-600 dark:text-blue-400 hover:underline">
              → Why You're Stuck at Band 6 in IELTS Writing
            </Link>
          </li>
          <li>
            <Link to="/ielts/advantages-disadvantages-essay-ielts" className="text-blue-600 dark:text-blue-400 hover:underline">
              → Advantages/Disadvantages Essay IELTS
            </Link>
          </li>
          <li>
            <Link to="/ielts/common-grammar-mistakes-ielts-writing" className="text-blue-600 dark:text-blue-400 hover:underline">
              → Common Grammar Mistakes in IELTS Writing
            </Link>
          </li>
        </ul>
      </div>

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>
    </div>
  );
};

export default LexicalResourceIELTSPage;
