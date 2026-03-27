import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading, BulletList, CodeBlock } from '../components/ArticleComponents';
import GoogleAd from '../components/GoogleAd';
import SchemaMarkup from '../components/SchemaMarkup';

const TaskAchievementIELTSPage: React.FC = () => {
  usePageMetadata({
    title: 'What Is Task Achievement in IELTS? Full Band 9 Guide',
    description: 'Learn what Task Achievement means in IELTS Writing, how examiners score it, band descriptors, examples, and tips to reach Band 7–9 easily.'
  });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Task Achievement in IELTS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Task Achievement measures how fully and accurately a candidate answers the IELTS Writing question."
        }
      },
      {
        "@type": "Question",
        "name": "How much is Task Achievement worth in IELTS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Task Achievement accounts for 25% of the total IELTS Writing score."
        }
      },
      {
        "@type": "Question",
        "name": "How can I improve Task Achievement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can improve Task Achievement by answering all parts of the question, developing ideas clearly, staying relevant, and including examples."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What Is Task Achievement in IELTS? Full Band 9 Guide",
    "description": "Learn what Task Achievement means in IELTS Writing, how examiners score it, band descriptors, examples, and tips to reach Band 7–9 easily.",
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
        What Is Task Achievement in IELTS?
      </h1>

      {/* Quick Summary */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
        <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-200">📌 Quick Summary</h3>
        <p className="text-blue-800 dark:text-blue-300">
          Task Achievement in IELTS means: <strong>Answer the question completely, cover all parts, develop ideas clearly, stay relevant, and meet word count.</strong> It is one of the most important criteria in IELTS Writing.
        </p>
      </div>

      {/* Introduction */}
      <ArticleParagraph>
        Task Achievement is one of the four scoring criteria used to evaluate your performance in the IELTS Writing test. It measures how fully and accurately you answer the question and how well you address all parts of the task.
      </ArticleParagraph>

      <ArticleParagraph>
        In simple words: <strong>Task Achievement means answering the question completely, clearly, and correctly.</strong>
      </ArticleParagraph>

      <ArticleParagraph>
        This guide explains:
      </ArticleParagraph>
      <BulletList items={[
        <>What Task Achievement means</>,
        <>How examiners score it</>,
        <>Band score differences (6 vs 7 vs 8 vs 9)</>,
        <>Common mistakes</>,
        <>How to improve your score</>
      ]} />

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>

      {/* What Does Task Achievement Mean */}
      <ArticleHeading>🎯 What Does Task Achievement Mean?</ArticleHeading>

      <ArticleParagraph>
        Task Achievement evaluates:
      </ArticleParagraph>

      <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg my-6">
        <ol className="list-decimal list-inside space-y-2 text-slate-700 dark:text-slate-300">
          <li>Whether you answered all parts of the question</li>
          <li>Whether your ideas are relevant</li>
          <li>Whether your response is fully developed</li>
          <li>Whether you support ideas with clear explanations and examples</li>
        </ol>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="text-yellow-800 dark:text-yellow-300 font-medium">
          ⚠️ Important: Task Achievement does NOT measure grammar. It does NOT measure vocabulary. It measures <strong>how well you complete the task</strong>.
        </p>
      </div>

      {/* Task 1 vs Task 2 */}
      <ArticleHeading>📝 Task Achievement in IELTS Writing Task 1 vs Task 2</ArticleHeading>

      <h3 className="text-xl font-semibold mt-8 mb-4 text-slate-800 dark:text-slate-200">IELTS Writing Task 1 (Academic)</h3>

      <ArticleParagraph>
        In Task 1, Task Achievement checks:
      </ArticleParagraph>
      <BulletList items={[
        <>Did you describe the main features?</>,
        <>Did you compare key data?</>,
        <>Did you avoid unnecessary details?</>,
        <>Did you write at least 150 words?</>
      ]} />

      <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 my-6">
        <p className="text-red-800 dark:text-red-300">
          If you miss key trends → your score drops.
        </p>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-4 text-slate-800 dark:text-slate-200">IELTS Writing Task 2</h3>

      <ArticleParagraph>
        In Task 2, Task Achievement checks:
      </ArticleParagraph>
      <BulletList items={[
        <>Did you answer ALL parts of the question?</>,
        <>Did you give a clear opinion (if required)?</>,
        <>Did you explain your ideas properly?</>,
        <>Did you include examples?</>,
        <>Did you write at least 250 words?</>
      ]} />

      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-6">
        <p className="text-blue-800 dark:text-blue-300 mb-4">
          <strong>Example:</strong> If the question asks:
        </p>
        <CodeBlock>
          "Discuss both views and give your opinion"
        </CodeBlock>
        <p className="text-blue-800 dark:text-blue-300 mt-4 mb-2">
          <strong>You MUST:</strong>
        </p>
        <ol className="list-decimal list-inside space-y-1 text-blue-700 dark:text-blue-400">
          <li>Discuss view 1</li>
          <li>Discuss view 2</li>
          <li>Give your opinion</li>
        </ol>
        <p className="text-red-600 dark:text-red-400 mt-4 font-medium">
          Missing one part = lower score.
        </p>
      </div>

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>

      {/* Band Descriptors */}
      <ArticleHeading>📊 Official Band Descriptors (Simplified)</ArticleHeading>

      <ArticleParagraph>
        Here is how Task Achievement is scored:
      </ArticleParagraph>

      {/* Band 9 */}
      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-4 rounded-r-lg">
        <h4 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">🟢 Band 9</h4>
        <ul className="list-disc list-inside space-y-1 text-green-700 dark:text-green-300">
          <li>Fully answers all parts</li>
          <li>Ideas are clear and fully developed</li>
          <li>Relevant, well-supported arguments</li>
          <li>No irrelevant information</li>
        </ul>
      </div>

      {/* Band 8 */}
      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4 my-4 rounded-r-lg">
        <h4 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">🟢 Band 8</h4>
        <ul className="list-disc list-inside space-y-1 text-green-700 dark:text-green-300">
          <li>Addresses all parts well</li>
          <li>Ideas are clearly developed</li>
          <li>Minor omissions may exist</li>
        </ul>
      </div>

      {/* Band 7 */}
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-4 rounded-r-lg">
        <h4 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">🟡 Band 7</h4>
        <ul className="list-disc list-inside space-y-1 text-yellow-700 dark:text-yellow-300">
          <li>Addresses all parts</li>
          <li>Ideas are developed but may lack depth</li>
          <li>Some minor unclear points</li>
        </ul>
      </div>

      {/* Band 6 */}
      <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 my-4 rounded-r-lg">
        <h4 className="text-lg font-semibold text-orange-800 dark:text-orange-200 mb-2">🟠 Band 6</h4>
        <ul className="list-disc list-inside space-y-1 text-orange-700 dark:text-orange-300">
          <li>Addresses the task but not fully</li>
          <li>Some ideas are unclear or underdeveloped</li>
          <li>May miss a part of the question</li>
        </ul>
      </div>

      {/* Band 5 or Below */}
      <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 my-4 rounded-r-lg">
        <h4 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">🔴 Band 5 or Below</h4>
        <ul className="list-disc list-inside space-y-1 text-red-700 dark:text-red-300">
          <li>Partially answers the question</li>
          <li>Ideas are unclear</li>
          <li>Important parts are missing</li>
        </ul>
      </div>

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>

      {/* Common Mistakes */}
      <ArticleHeading>❌ Common Task Achievement Mistakes</ArticleHeading>

      <ArticleParagraph>
        Many students lose marks because they:
      </ArticleParagraph>

      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg my-6">
        <ol className="list-decimal list-inside space-y-2 text-red-800 dark:text-red-300">
          <li>Only answer part of the question</li>
          <li>Forget to give an opinion</li>
          <li>Write off-topic ideas</li>
          <li>Do not explain ideas</li>
          <li>Give examples without explanation</li>
          <li>Write fewer than required words</li>
          <li>Memorize templates that don't fit the question</li>
        </ol>
      </div>

      {/* Example: Poor vs Strong */}
      <ArticleHeading>🔎 Example: Poor vs Strong Task Achievement</ArticleHeading>

      <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg my-6">
        <p className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Question:</p>
        <CodeBlock>
          "Some people think university education should be free. To what extent do you agree or disagree?"
        </CodeBlock>
      </div>

      {/* Weak Response */}
      <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 my-6 rounded-r-lg">
        <h4 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-3">❌ Weak Response (Band 5–6)</h4>
        <ul className="list-disc list-inside space-y-2 text-red-700 dark:text-red-300">
          <li>Talks about education in general</li>
          <li>Does not clearly say agree or disagree</li>
          <li>Gives one short reason</li>
          <li>No examples</li>
        </ul>
        <p className="mt-4 font-medium text-red-800 dark:text-red-300">Result: Task not fully achieved.</p>
      </div>

      {/* Strong Response */}
      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 my-6 rounded-r-lg">
        <h4 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-3">✅ Strong Response (Band 8–9)</h4>
        <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300">
          <li>Clearly states position: "I strongly agree"</li>
          <li>Gives 2 fully developed reasons</li>
          <li>Provides examples</li>
          <li>Explains consequences</li>
          <li>Stays focused on free university education</li>
        </ul>
        <p className="mt-4 font-medium text-green-800 dark:text-green-300">Result: Task fully achieved.</p>
      </div>

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>

      {/* How to Improve */}
      <ArticleHeading>🚀 How to Improve Task Achievement</ArticleHeading>

      <ArticleParagraph>
        Follow these steps:
      </ArticleParagraph>

      <h3 className="text-xl font-semibold mt-8 mb-4 text-slate-800 dark:text-slate-200">1️⃣ Analyze the Question Carefully</h3>
      <ArticleParagraph>
        Identify:
      </ArticleParagraph>
      <BulletList items={[
        <>Question type</>,
        <>Keywords</>,
        <>Required task (discuss, compare, agree, advantages, etc.)</>
      ]} />

      <h3 className="text-xl font-semibold mt-8 mb-4 text-slate-800 dark:text-slate-200">2️⃣ Plan Before Writing (5 Minutes)</h3>
      <ArticleParagraph>
        Write:
      </ArticleParagraph>
      <BulletList items={[
        <>Thesis statement</>,
        <>2 main ideas</>,
        <>Supporting examples</>
      ]} />
      <ArticleParagraph>
        <strong>Planning improves clarity.</strong>
      </ArticleParagraph>

      <h3 className="text-xl font-semibold mt-8 mb-4 text-slate-800 dark:text-slate-200">3️⃣ Answer Every Part Directly</h3>
      <ArticleParagraph>
        If the question asks TWO questions, answer BOTH clearly.
      </ArticleParagraph>

      <h3 className="text-xl font-semibold mt-8 mb-4 text-slate-800 dark:text-slate-200">4️⃣ Develop Your Ideas</h3>
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
          <p className="font-semibold text-red-800 dark:text-red-200 mb-2">❌ Bad idea:</p>
          <p className="text-red-700 dark:text-red-300">"Education is important."</p>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
          <p className="font-semibold text-green-800 dark:text-green-200 mb-2">✅ Better:</p>
          <p className="text-green-700 dark:text-green-300">"Education is important because it increases employment opportunities and improves economic growth."</p>
        </div>
      </div>
      <ArticleParagraph>
        Always explain <strong>"why"</strong> and <strong>"how"</strong>.
      </ArticleParagraph>

      <h3 className="text-xl font-semibold mt-8 mb-4 text-slate-800 dark:text-slate-200">5️⃣ Stay Relevant</h3>
      <ArticleParagraph>
        Avoid:
      </ArticleParagraph>
      <BulletList items={[
        <>Memorized paragraphs</>,
        <>Off-topic discussion</>,
        <>Repeating the question too much</>
      ]} />

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>

      {/* Task Achievement vs Other Criteria */}
      <ArticleHeading>🧠 Task Achievement vs Other IELTS Criteria</ArticleHeading>

      <ArticleParagraph>
        Many students confuse Task Achievement with:
      </ArticleParagraph>
      <BulletList items={[
        <>Lexical Resource (vocabulary)</>,
        <>Grammatical Range and Accuracy</>,
        <>Coherence and Cohesion</>
      ]} />

      <ArticleParagraph>
        Remember:
      </ArticleParagraph>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-sm">
          <thead>
            <tr className="bg-slate-100 dark:bg-slate-700">
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200 border-b dark:border-slate-600">Criterion</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200 border-b dark:border-slate-600">What It Measures</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b dark:border-slate-700">
              <td className="px-6 py-4 text-slate-800 dark:text-slate-300 font-medium">Task Achievement</td>
              <td className="px-6 py-4 text-slate-600 dark:text-slate-400">Did you answer the question fully?</td>
            </tr>
            <tr className="border-b dark:border-slate-700">
              <td className="px-6 py-4 text-slate-800 dark:text-slate-300 font-medium">Coherence & Cohesion</td>
              <td className="px-6 py-4 text-slate-600 dark:text-slate-400">Is your essay organized and connected?</td>
            </tr>
            <tr className="border-b dark:border-slate-700">
              <td className="px-6 py-4 text-slate-800 dark:text-slate-300 font-medium">Lexical Resource</td>
              <td className="px-6 py-4 text-slate-600 dark:text-slate-400">Vocabulary quality</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-slate-800 dark:text-slate-300 font-medium">Grammar</td>
              <td className="px-6 py-4 text-slate-600 dark:text-slate-400">Sentence accuracy</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="text-yellow-800 dark:text-yellow-300 font-medium">
          ⚠️ Even perfect grammar cannot save you if you fail Task Achievement.
        </p>
      </div>

      {/* FAQ Section */}
      <ArticleHeading>❓ Frequently Asked Questions (FAQ)</ArticleHeading>

      <div className="space-y-6 my-6">
        <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
          <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">What is Task Achievement in IELTS?</h4>
          <p className="text-slate-600 dark:text-slate-400">Task Achievement measures how fully and accurately you answer the IELTS Writing question.</p>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
          <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Is Task Achievement important?</h4>
          <p className="text-slate-600 dark:text-slate-400">Yes. It accounts for 25% of your Writing score.</p>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
          <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">How can I get Band 7 in Task Achievement?</h4>
          <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 mt-2 space-y-1">
            <li>Answer all parts</li>
            <li>Give clear opinion</li>
            <li>Develop ideas</li>
            <li>Include examples</li>
          </ul>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
          <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Is Task Achievement different in Task 1 and Task 2?</h4>
          <p className="text-slate-600 dark:text-slate-400">Yes. Task 1 focuses on describing data accurately. Task 2 focuses on presenting and supporting arguments.</p>
        </div>
      </div>

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>

      {/* Conclusion */}
      <ArticleHeading>🧩 Conclusion</ArticleHeading>

      <ArticleParagraph>
        Task Achievement is not about using complex words. It is about <strong>answering the question clearly and completely</strong>.
      </ArticleParagraph>

      <ArticleParagraph>
        If you focus on:
      </ArticleParagraph>
      <BulletList items={[
        <>Understanding the question</>,
        <>Planning properly</>,
        <>Developing ideas</>,
        <>Staying relevant</>
      ]} />

      <ArticleParagraph>
        You can <strong>significantly increase your IELTS Writing score</strong>.
      </ArticleParagraph>

      {/* Related Resources */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-6 rounded-lg my-8">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-200 mb-4">📚 Related IELTS Resources</h3>
        <ul className="space-y-2">
          <li>
            <Link to="/ielts/band-8-ielts-sample-answers" className="text-blue-600 dark:text-blue-400 hover:underline">
              → Band 8+ IELTS Sample Answers
            </Link>
          </li>
          <li>
            <Link to="/ielts/conditionals-in-ielts" className="text-blue-600 dark:text-blue-400 hover:underline">
              → Conditionals in IELTS Writing
            </Link>
          </li>
          <li>
            <Link to="/ielts/passive-voice-ielts-writing" className="text-blue-600 dark:text-blue-400 hover:underline">
              → Passive Voice for IELTS Writing
            </Link>
          </li>
          <li>
            <Link to="/ielts/50-complex-sentences-for-ielts-pdf" className="text-blue-600 dark:text-blue-400 hover:underline">
              → 50 Complex Sentences for IELTS (PDF)
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

export default TaskAchievementIELTSPage;
