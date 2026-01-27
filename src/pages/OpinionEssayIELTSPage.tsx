import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading, CodeBlock, BulletList } from '../components/ArticleComponents';

const OpinionEssayIELTSPage: React.FC = () => {
  usePageMetadata({
    title: 'IELTS Opinion Essay (Agree or Disagree) – Band 7–9 Guide | TypoGrammar',
    description: 'Master the IELTS opinion essay with a Band 7–9 model answer, clear structure, and examiner tips to avoid common mistakes.'
  });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is an IELTS opinion essay?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An IELTS opinion essay requires you to state whether you agree or disagree with a statement and support your position with clear reasons and examples throughout the essay."
        }
      },
      {
        "@type": "Question",
        "name": "Can I partially agree in an opinion essay?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can partially agree or disagree, but you must make this clear in your introduction and maintain this position consistently throughout your essay."
        }
      },
      {
        "@type": "Question",
        "name": "How do I structure an IELTS opinion essay?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Structure: Introduction (state your opinion), Body Paragraph 1 (first reason + examples), Body Paragraph 2 (second reason + examples), Conclusion (restate opinion). Maintain your position throughout."
        }
      },
      {
        "@type": "Question",
        "name": "Should I give both sides in an opinion essay?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can briefly mention the opposing view, but focus mainly on supporting your own opinion. This is different from a discussion essay where you must equally present both views."
        }
      },
      {
        "@type": "Question",
        "name": "What vocabulary should I use in opinion essays?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use opinion markers like 'I strongly believe', 'In my view', 'I am convinced that'. Also use linking words like 'Firstly', 'Moreover', 'However', 'Therefore' to connect ideas smoothly."
        }
      }
    ]
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
        <div className="mb-6">
          <Link 
            to="/ielts/ielts-writing-task-2-essay-types" 
            className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
          >
            ← Back to IELTS Writing Task 2 Essay Types
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100">
          IELTS Opinion Essay (Agree or Disagree) – Band 7–9 Guide
        </h1>

        {/* Featured Snippet Box */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-8">
          <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-slate-100">
            📌 Quick Answer
          </h3>
          <p className="text-slate-800 dark:text-slate-200">
            An IELTS opinion essay requires a clear opinion from the introduction and consistent 
            support in body paragraphs. State your position (agree, disagree, or partially agree) 
            and maintain it throughout the essay with strong reasons and examples.
          </p>
        </div>

        <ArticleParagraph>
          The Opinion Essay (also called "Agree or Disagree" essay) is one of the most common types 
          in IELTS Writing Task 2. This essay type asks you to take a clear position on a statement 
          and support it with logical arguments.
        </ArticleParagraph>

        <ArticleHeading>How to Recognize an Opinion Essay</ArticleHeading>

        <ArticleParagraph>
          Opinion essay questions contain phrases like:
        </ArticleParagraph>

        <BulletList items={[
          'Do you agree or disagree?',
          'To what extent do you agree or disagree?',
          'What is your opinion?',
          'Do you think this is a positive or negative development?'
        ]} />

        <ArticleHeading>Essay Structure for Opinion Essays</ArticleHeading>

        <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-6">
          <h4 className="font-semibold mb-4 text-slate-900 dark:text-slate-100">
            📐 Recommended Structure (Band 7–9)
          </h4>
          <div className="space-y-4">
            <div>
              <p className="font-medium text-slate-900 dark:text-slate-100">
                1. Introduction (2-3 sentences)
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300 ml-4">
                • Paraphrase the question<br />
                • State your clear opinion/position
              </p>
            </div>
            <div>
              <p className="font-medium text-slate-900 dark:text-slate-100">
                2. Body Paragraph 1 (4-5 sentences)
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300 ml-4">
                • Topic sentence (first main reason)<br />
                • Explanation + Example
              </p>
            </div>
            <div>
              <p className="font-medium text-slate-900 dark:text-slate-100">
                3. Body Paragraph 2 (4-5 sentences)
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300 ml-4">
                • Topic sentence (second main reason)<br />
                • Explanation + Example
              </p>
            </div>
            <div>
              <p className="font-medium text-slate-900 dark:text-slate-100">
                4. Conclusion (2 sentences)
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300 ml-4">
                • Restate your opinion<br />
                • Final thought/recommendation
              </p>
            </div>
          </div>
        </div>

        <ArticleHeading>Band 8 Model Answer</ArticleHeading>

        <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg mb-6">
          <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">📝 Question</h4>
          <p className="text-slate-800 dark:text-slate-200 italic">
            Some people believe that children should be taught how to manage money at school.
            Do you agree or disagree?
          </p>
        </div>

        <CodeBlock>
{`Many people argue that children should be taught how to manage money at school, and I strongly agree with this view. In today's consumer-driven society, financial literacy is an essential life skill.

Firstly, learning how to manage money helps children develop responsible habits early in life. Many adults struggle with debt simply because they were never taught how to budget, save, or understand interest rates. By learning these skills at school, students are more likely to make informed financial decisions in the future.

Secondly, schools provide equal learning opportunities. Not all parents have the knowledge or time to teach financial skills at home, which can lead to inequality. Including money management in the school curriculum ensures that all children receive the same basic financial education.

Although some people argue that schools are already overloaded with academic subjects, practical skills such as money management are just as important as traditional subjects.

In conclusion, teaching children how to manage money at school prepares them for real-life challenges and promotes financial independence.`}
        </CodeBlock>

        <ArticleHeading>Why This Essay Scores Band 8</ArticleHeading>

        <BulletList items={[
          <><strong>Clear position:</strong> "I strongly agree" is stated in the introduction and maintained throughout</>,
          <><strong>Well-developed ideas:</strong> Each body paragraph has one clear main idea with explanation and relevance</>,
          <><strong>Cohesive devices:</strong> "Firstly", "Secondly", "Although", "In conclusion" guide the reader smoothly</>,
          <><strong>Advanced vocabulary:</strong> "consumer-driven society", "financial literacy", "promotes financial independence"</>,
          <><strong>Grammar variety:</strong> Uses complex sentences, passive voice, conditionals naturally</>,
          <><strong>Task achievement:</strong> Fully answers the question with relevant support</>
        ]} />

        <ArticleHeading>Common Mistakes to Avoid</ArticleHeading>

        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 my-6">
          <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">
            ❌ Don't Do This
          </h4>
          <BulletList items={[
            <><strong>Changing your opinion:</strong> Don't say "I agree" in the intro and "I disagree" in the conclusion</>,
            <><strong>No opinion:</strong> Don't write "Some people agree, others disagree" without stating YOUR view</>,
            <><strong>Weak position:</strong> Avoid "maybe" or "it depends" without clarification</>,
            <><strong>Listing without explanation:</strong> Don't just list reasons; explain WHY they matter</>,
            <><strong>Memorized phrases:</strong> Avoid obviously memorized templates that don't fit the question</>
          ]} />
        </div>

        <ArticleHeading>Useful Language for Opinion Essays</ArticleHeading>

        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">
              Stating Strong Agreement
            </h4>
            <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
              <li>• I strongly agree that...</li>
              <li>• I am convinced that...</li>
              <li>• I firmly believe that...</li>
              <li>• In my view, this is absolutely...</li>
            </ul>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">
              Stating Strong Disagreement
            </h4>
            <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
              <li>• I completely disagree with...</li>
              <li>• I do not believe that...</li>
              <li>• This view is problematic because...</li>
              <li>• I cannot support the idea that...</li>
            </ul>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">
              Partial Agreement
            </h4>
            <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
              <li>• I partially agree that...</li>
              <li>• While I agree that X, I believe Y...</li>
              <li>• To some extent, I agree...</li>
              <li>• Although this has merit, I think...</li>
            </ul>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">
              Supporting Your Opinion
            </h4>
            <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
              <li>• The main reason is that...</li>
              <li>• This is particularly important because...</li>
              <li>• Furthermore/Moreover...</li>
              <li>• A clear example of this is...</li>
            </ul>
          </div>
        </div>

        <ArticleHeading>Step-by-Step Writing Process</ArticleHeading>

        <div className="space-y-4 my-6">
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <p className="font-medium text-slate-900 dark:text-slate-100">
              Step 1: Analyze the Question (2 minutes)
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">
              Identify the topic and decide your position. Make sure you understand what you're 
              being asked to agree or disagree with.
            </p>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <p className="font-medium text-slate-900 dark:text-slate-100">
              Step 2: Plan Your Ideas (3 minutes)
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">
              Write down 2-3 main reasons for your opinion. Think of examples or evidence for each.
            </p>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <p className="font-medium text-slate-900 dark:text-slate-100">
              Step 3: Write Introduction (5 minutes)
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">
              Paraphrase the question and clearly state your opinion. Don't be vague.
            </p>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <p className="font-medium text-slate-900 dark:text-slate-100">
              Step 4: Write Body Paragraphs (20 minutes)
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">
              Develop each main reason in a separate paragraph. Use topic sentences, 
              explanations, and examples.
            </p>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <p className="font-medium text-slate-900 dark:text-slate-100">
              Step 5: Write Conclusion (3 minutes)
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">
              Summarize your opinion without introducing new ideas. Keep it short and clear.
            </p>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <p className="font-medium text-slate-900 dark:text-slate-100">
              Step 6: Check Your Work (5 minutes)
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">
              Review for grammar errors, spelling, and ensure your opinion is consistent throughout.
            </p>
          </div>
        </div>

        <ArticleHeading>Practice Question</ArticleHeading>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-6">
          <p className="text-slate-800 dark:text-slate-200 italic mb-3">
            Some people think that the government should provide free public transportation.
            To what extent do you agree or disagree?
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            <strong>Practice tip:</strong> Decide your position clearly, plan 2 strong reasons, 
            and write your essay in 40 minutes. Check if you maintained your opinion throughout.
          </p>
        </div>

        <ArticleHeading>Frequently Asked Questions</ArticleHeading>

        <div className="space-y-6 mb-8">
          <div>
            <h4 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">
              What is an IELTS opinion essay?
            </h4>
            <p className="text-slate-700 dark:text-slate-300">
              An IELTS opinion essay requires you to state whether you agree or disagree with a 
              statement and support your position with clear reasons and examples throughout the essay.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">
              Can I partially agree in an opinion essay?
            </h4>
            <p className="text-slate-700 dark:text-slate-300">
              Yes, you can partially agree or disagree, but you must make this clear in your 
              introduction and maintain this position consistently throughout your essay.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">
              How do I structure an IELTS opinion essay?
            </h4>
            <p className="text-slate-700 dark:text-slate-300">
              Structure: Introduction (state your opinion), Body Paragraph 1 (first reason + examples), 
              Body Paragraph 2 (second reason + examples), Conclusion (restate opinion). Maintain your 
              position throughout.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">
              Should I give both sides in an opinion essay?
            </h4>
            <p className="text-slate-700 dark:text-slate-300">
              You can briefly mention the opposing view, but focus mainly on supporting your own opinion. 
              This is different from a discussion essay where you must equally present both views.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">
              What vocabulary should I use in opinion essays?
            </h4>
            <p className="text-slate-700 dark:text-slate-300">
              Use opinion markers like 'I strongly believe', 'In my view', 'I am convinced that'. 
              Also use linking words like 'Firstly', 'Moreover', 'However', 'Therefore' to connect 
              ideas smoothly.
            </p>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 my-8">
          <p className="text-slate-800 dark:text-slate-200">
            📚 <strong>This article is part of our complete</strong>{' '}
            <Link 
              to="/ielts/ielts-writing-task-2-essay-types" 
              className="text-green-700 dark:text-green-400 hover:underline font-medium"
            >
              IELTS Writing Task 2 Essay Types guide
            </Link>
          </p>
        </div>
      </div>
  );
};

export default OpinionEssayIELTSPage;
