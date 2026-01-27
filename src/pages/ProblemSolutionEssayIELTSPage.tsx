import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading, CodeBlock, BulletList } from '../components/ArticleComponents';

const ProblemSolutionEssayIELTSPage: React.FC = () => {
  usePageMetadata({
    title: 'IELTS Problem and Solution Essay – Band 7–9 Model Answer | TypoGrammar',
    description: 'Learn how to write IELTS problem and solution essays with causes, solutions, and a Band 7–9 sample answer.'
  });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a problem and solution essay in IELTS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A problem and solution essay requires you to identify the causes or problems related to a topic and suggest practical solutions to address them."
        }
      },
      {
        "@type": "Question",
        "name": "How do I structure a problem and solution essay?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Introduction (state the problem), Body 1 (explain causes/problems), Body 2 (suggest solutions), Conclusion (summarize). Alternatively, discuss one problem + solution in each body paragraph."
        }
      },
      {
        "@type": "Question",
        "name": "Should I give my opinion in problem/solution essays?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You don't need to say 'I agree/disagree', but your solutions should be your suggestions. You can evaluate which solution is most effective."
        }
      },
      {
        "@type": "Question",
        "name": "Can I suggest unrealistic solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Your solutions should be practical and realistic. Avoid vague suggestions like 'the government should solve this' without explaining how."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between causes and problems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Causes are reasons why something happens. Problems are the negative effects or issues. Some questions ask for causes, some for problems, and some for both."
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
          IELTS Problem and Solution Essay – Band 7–9 Model Answer
        </h1>

        {/* Featured Snippet Box */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-8">
          <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-slate-100">
            📌 Quick Answer
          </h3>
          <p className="text-slate-800 dark:text-slate-200">
            Explain causes in one paragraph and solutions in another. Keep ideas practical and specific. 
            Structure: Introduction → Causes/Problems → Solutions → Conclusion. Make sure your solutions 
            directly address the problems you identified.
          </p>
        </div>

        <ArticleParagraph>
          The Problem and Solution Essay (also called "Cause and Solution") is a common IELTS Writing 
          Task 2 type that tests your ability to analyze issues and propose realistic solutions. 
          This essay type focuses on identifying why something happens and how to fix it.
        </ArticleParagraph>

        <ArticleHeading>How to Recognize This Essay Type</ArticleHeading>

        <ArticleParagraph>
          Problem/Solution essay questions contain phrases like:
        </ArticleParagraph>

        <BulletList items={[
          'What are the causes of this problem, and what solutions can be suggested?',
          'What problems does this cause, and how can they be solved?',
          'Why is this happening, and what can be done about it?',
          'What are the reasons for this, and what measures can be taken?'
        ]} />

        <ArticleHeading>Essay Structure</ArticleHeading>

        <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-6">
          <h4 className="font-semibold mb-4 text-slate-900 dark:text-slate-100">
            📐 Structure Option 1: Separate Paragraphs (Recommended for Band 7+)
          </h4>
          <div className="space-y-4">
            <div>
              <p className="font-medium text-slate-900 dark:text-slate-100">
                1. Introduction (2-3 sentences)
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300 ml-4">
                • Paraphrase the problem<br />
                • State that you will discuss causes and solutions
              </p>
            </div>
            <div>
              <p className="font-medium text-slate-900 dark:text-slate-100">
                2. Body Paragraph 1 – Causes/Problems (4-5 sentences)
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300 ml-4">
                • Topic sentence about causes<br />
                • Explain 2-3 main causes with details<br />
                • Use examples if helpful
              </p>
            </div>
            <div>
              <p className="font-medium text-slate-900 dark:text-slate-100">
                3. Body Paragraph 2 – Solutions (4-5 sentences)
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300 ml-4">
                • Topic sentence about solutions<br />
                • Suggest 2-3 practical solutions<br />
                • Explain how they address the causes
              </p>
            </div>
            <div>
              <p className="font-medium text-slate-900 dark:text-slate-100">
                4. Conclusion (2 sentences)
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300 ml-4">
                • Summarize the problem<br />
                • Emphasize that solutions can help
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-6">
          <h4 className="font-semibold mb-4 text-slate-900 dark:text-slate-100">
            📐 Structure Option 2: Problem-Solution Pairs
          </h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
            Some candidates prefer to discuss one problem and its solution in each paragraph:
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            Body 1: Problem A + Solution A<br />
            Body 2: Problem B + Solution B
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-3">
            This works well when problems are distinct and need specific solutions.
          </p>
        </div>

        <ArticleHeading>Band 7 Model Answer</ArticleHeading>

        <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg mb-6">
          <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">📝 Question</h4>
          <p className="text-slate-800 dark:text-slate-200 italic">
            Many cities around the world suffer from traffic congestion.
            What are the causes of this problem, and what solutions can be suggested?
          </p>
        </div>

        <CodeBlock>
{`Traffic congestion is a serious problem in many cities. This issue is mainly caused by population growth and increased reliance on private vehicles.

As cities expand, more people commute daily for work and education. In many places, public transport systems are unreliable or poorly developed, forcing residents to use cars. This leads to overcrowded roads, especially during peak hours. Additionally, urban planning in some cities was not designed to handle current traffic volumes, resulting in narrow roads and insufficient parking.

To solve this problem, governments should invest in efficient public transport such as buses and metro systems. Encouraging cycling and carpooling can also reduce traffic. In addition, restricting car access in city centres may help control congestion. Some cities have successfully implemented congestion charges, which discourage unnecessary car use.

In conclusion, traffic congestion is caused by poor transport planning and over-reliance on cars, but effective solutions can significantly reduce the problem.`}
        </CodeBlock>

        <ArticleHeading>Why This Essay Scores Band 7</ArticleHeading>

        <BulletList items={[
          <><strong>Clear structure:</strong> Separate paragraphs for causes and solutions make the essay easy to follow</>,
          <><strong>Multiple causes explained:</strong> Population growth, poor public transport, and urban planning issues</>,
          <><strong>Practical solutions:</strong> Public transport investment, cycling, carpooling, congestion charges</>,
          <><strong>Linked ideas:</strong> Solutions directly address the causes mentioned</>,
          <><strong>Good cohesion:</strong> "Additionally", "In addition", "In conclusion" guide the reader</>,
          <><strong>Task achievement:</strong> Fully answers both parts of the question (causes AND solutions)</>
        ]} />

        <ArticleHeading>Common Mistakes to Avoid</ArticleHeading>

        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 my-6">
          <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">
            ❌ Don't Do This
          </h4>
          <BulletList items={[
            <><strong>Vague solutions:</strong> "The government should do something" is too general. Be specific about WHAT they should do</>,
            <><strong>Unrealistic solutions:</strong> Don't suggest impossible fixes like "ban all cars" without considering practicality</>,
            <><strong>Only causes or only solutions:</strong> If the question asks for both, you must address both</>,
            <><strong>Solutions that don't match problems:</strong> Make sure your solutions actually address the causes you mentioned</>,
            <><strong>No explanation:</strong> Don't just list solutions; explain HOW they will help</>
          ]} />
        </div>

        <ArticleHeading>Useful Language</ArticleHeading>

        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">
              Introducing Causes/Problems
            </h4>
            <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
              <li>• This is mainly caused by...</li>
              <li>• One reason for this is...</li>
              <li>• This problem stems from...</li>
              <li>• A contributing factor is...</li>
              <li>• This leads to / results in...</li>
            </ul>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">
              Suggesting Solutions
            </h4>
            <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
              <li>• To solve this problem...</li>
              <li>• One solution is to...</li>
              <li>• This could be addressed by...</li>
              <li>• A practical measure would be...</li>
              <li>• Governments/Individuals should...</li>
            </ul>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">
              Explaining Effects
            </h4>
            <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
              <li>• This leads to...</li>
              <li>• As a result...</li>
              <li>• Consequently...</li>
              <li>• This has resulted in...</li>
              <li>• The effect of this is...</li>
            </ul>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">
              Evaluating Solutions
            </h4>
            <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
              <li>• This would significantly reduce...</li>
              <li>• This approach has proven effective...</li>
              <li>• By implementing this...</li>
              <li>• This can help to...</li>
            </ul>
          </div>
        </div>

        <ArticleHeading>Who Should Take Action?</ArticleHeading>

        <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-6">
          <p className="text-slate-800 dark:text-slate-200 mb-4">
            Your solutions can target different groups:
          </p>
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-medium text-slate-900 dark:text-slate-100">Governments:</p>
              <p className="text-slate-700 dark:text-slate-300 ml-4">
                Invest in infrastructure, pass laws, provide funding, education campaigns
              </p>
            </div>
            <div>
              <p className="font-medium text-slate-900 dark:text-slate-100">Individuals:</p>
              <p className="text-slate-700 dark:text-slate-300 ml-4">
                Change habits, make conscious choices, reduce consumption
              </p>
            </div>
            <div>
              <p className="font-medium text-slate-900 dark:text-slate-100">Companies:</p>
              <p className="text-slate-700 dark:text-slate-300 ml-4">
                Adopt sustainable practices, offer remote work, innovate products
              </p>
            </div>
            <div>
              <p className="font-medium text-slate-900 dark:text-slate-100">Schools/Media:</p>
              <p className="text-slate-700 dark:text-slate-300 ml-4">
                Raise awareness, educate, promote positive behavior
              </p>
            </div>
          </div>
        </div>

        <ArticleHeading>Step-by-Step Writing Process</ArticleHeading>

        <div className="space-y-4 my-6">
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <p className="font-medium text-slate-900 dark:text-slate-100">
              Step 1: Understand the Problem (2 minutes)
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">
              Read the question carefully. Is it asking for causes, problems, or both? Make sure 
              you understand what you're being asked.
            </p>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <p className="font-medium text-slate-900 dark:text-slate-100">
              Step 2: Brainstorm Causes (2 minutes)
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">
              List 2-3 main causes or problems. Think about root causes, not just symptoms.
            </p>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <p className="font-medium text-slate-900 dark:text-slate-100">
              Step 3: Plan Solutions (2 minutes)
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">
              For each cause, think of a realistic solution. Make sure solutions are specific 
              and practical.
            </p>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <p className="font-medium text-slate-900 dark:text-slate-100">
              Step 4: Write Your Essay (30 minutes)
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">
              Introduction → Causes paragraph → Solutions paragraph → Conclusion. Make sure 
              solutions connect to the causes.
            </p>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <p className="font-medium text-slate-900 dark:text-slate-100">
              Step 5: Check Practicality (4 minutes)
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">
              Review your solutions. Are they realistic? Too vague? Make sure you explained HOW 
              they will work.
            </p>
          </div>
        </div>

        <ArticleHeading>Practice Question</ArticleHeading>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-6">
          <p className="text-slate-800 dark:text-slate-200 italic mb-3">
            In many countries, childhood obesity is becoming a serious health problem.
            What are the causes of this problem, and what measures can be taken to solve it?
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            <strong>Practice tip:</strong> Think of causes (fast food, lack of exercise, screen time) 
            and solutions (school programs, parent education, food regulations). Make sure each solution 
            addresses a specific cause.
          </p>
        </div>

        <ArticleHeading>Frequently Asked Questions</ArticleHeading>

        <div className="space-y-6 mb-8">
          <div>
            <h4 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">
              What is a problem and solution essay in IELTS?
            </h4>
            <p className="text-slate-700 dark:text-slate-300">
              A problem and solution essay requires you to identify the causes or problems related 
              to a topic and suggest practical solutions to address them.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">
              How do I structure a problem and solution essay?
            </h4>
            <p className="text-slate-700 dark:text-slate-300">
              Introduction (state the problem), Body 1 (explain causes/problems), Body 2 (suggest solutions), 
              Conclusion (summarize). Alternatively, discuss one problem + solution in each body paragraph.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">
              Should I give my opinion in problem/solution essays?
            </h4>
            <p className="text-slate-700 dark:text-slate-300">
              You don't need to say 'I agree/disagree', but your solutions should be your suggestions. 
              You can evaluate which solution is most effective.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">
              Can I suggest unrealistic solutions?
            </h4>
            <p className="text-slate-700 dark:text-slate-300">
              No. Your solutions should be practical and realistic. Avoid vague suggestions like 
              'the government should solve this' without explaining how.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">
              What's the difference between causes and problems?
            </h4>
            <p className="text-slate-700 dark:text-slate-300">
              Causes are reasons why something happens. Problems are the negative effects or issues. 
              Some questions ask for causes, some for problems, and some for both.
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

export default ProblemSolutionEssayIELTSPage;
