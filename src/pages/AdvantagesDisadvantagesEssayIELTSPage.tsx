import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading, CodeBlock, BulletList } from '../components/ArticleComponents';

const AdvantagesDisadvantagesEssayIELTSPage: React.FC = () => {
  usePageMetadata({
    title: 'IELTS Advantages and Disadvantages Essay – Band 7–9 Example | TypoGrammar',
    description: 'Understand IELTS advantages and disadvantages essays with a Band 7–9 model answer and clear comparison strategy.'
  });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is an advantages and disadvantages essay?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An advantages and disadvantages essay requires you to discuss the benefits and drawbacks of a topic. If the question asks if advantages outweigh disadvantages, you must give a clear judgment."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to give my opinion in an advantages/disadvantages essay?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Only if the question asks 'Do the advantages outweigh the disadvantages?' or similar. Otherwise, present both sides objectively without stating which is stronger."
        }
      },
      {
        "@type": "Question",
        "name": "How do I structure an advantages and disadvantages essay?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Introduction (paraphrase topic), Body 1 (advantages + explanations), Body 2 (disadvantages + explanations), Conclusion (summarize and give judgment if required)."
        }
      },
      {
        "@type": "Question",
        "name": "Should advantages and disadvantages be equal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Generally yes, unless the question asks if one outweighs the other. In that case, you can make the stronger side more developed, but still discuss both fairly."
        }
      },
      {
        "@type": "Question",
        "name": "What if I think there are only advantages or only disadvantages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You must still discuss both sides if the question asks for advantages AND disadvantages. Think critically to find at least one or two points for each side."
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
          IELTS Advantages and Disadvantages Essay – Band 7–9 Example
        </h1>

        {/* Featured Snippet Box */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-8">
          <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-slate-100">
            📌 Quick Answer
          </h3>
          <p className="text-slate-800 dark:text-slate-200">
            This essay compares benefits and drawbacks of a topic. For "outweigh" questions, you 
            must give a final judgment on which side is stronger. Present both sides objectively, 
            then state your conclusion clearly in the final paragraph.
          </p>
        </div>

        <ArticleParagraph>
          The Advantages and Disadvantages Essay asks you to analyze the positive and negative 
          aspects of a topic. This essay type tests your ability to evaluate ideas objectively 
          and, when required, make a judgment about which side is stronger.
        </ArticleParagraph>

        <ArticleHeading>How to Recognize This Essay Type</ArticleHeading>

        <ArticleParagraph>
          Advantages/Disadvantages essay questions contain phrases like:
        </ArticleParagraph>

        <BulletList items={[
          'What are the advantages and disadvantages?',
          'Do the advantages outweigh the disadvantages?',
          'Discuss the benefits and drawbacks',
          'What are the pros and cons?'
        ]} />

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-6">
          <h4 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">
            ⚠️ Important Difference
          </h4>
          <p className="text-slate-700 dark:text-slate-300 text-sm">
            <strong>"What are the advantages and disadvantages?"</strong> → Neutral discussion, 
            no opinion required<br /><br />
            <strong>"Do the advantages outweigh the disadvantages?"</strong> → You MUST state 
            which side is stronger
          </p>
        </div>

        <ArticleHeading>Essay Structure</ArticleHeading>

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
                • Paraphrase the topic<br />
                • State that there are both advantages and disadvantages<br />
                • (For "outweigh" questions) Hint at your judgment
              </p>
            </div>
            <div>
              <p className="font-medium text-slate-900 dark:text-slate-100">
                2. Body Paragraph 1 – Advantages (4-5 sentences)
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300 ml-4">
                • Topic sentence about benefits<br />
                • Explain 2-3 advantages with examples<br />
                • Use specific, relevant details
              </p>
            </div>
            <div>
              <p className="font-medium text-slate-900 dark:text-slate-100">
                3. Body Paragraph 2 – Disadvantages (4-5 sentences)
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300 ml-4">
                • Topic sentence about drawbacks<br />
                • Explain 2-3 disadvantages with examples<br />
                • Use specific, relevant details
              </p>
            </div>
            <div>
              <p className="font-medium text-slate-900 dark:text-slate-100">
                4. Conclusion (2 sentences)
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300 ml-4">
                • Summarize main points<br />
                • (For "outweigh" questions) State your judgment clearly
              </p>
            </div>
          </div>
        </div>

        <ArticleHeading>Band 8 Model Answer</ArticleHeading>

        <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg mb-6">
          <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">📝 Question</h4>
          <p className="text-slate-800 dark:text-slate-200 italic">
            Many people now work from home.
            Do the advantages outweigh the disadvantages?
          </p>
        </div>

        <CodeBlock>
{`Working from home has become increasingly common in recent years. While this trend has some disadvantages, I believe its advantages outweigh them.

One major benefit of working from home is flexibility. Employees can manage their schedules more efficiently and achieve a better work-life balance. Additionally, remote work eliminates commuting, which saves time and reduces stress. For instance, a person who previously spent two hours commuting can now use that time for exercise, family, or personal development.

However, working from home may lead to social isolation. Employees miss daily face-to-face interaction with colleagues, which can affect teamwork and creativity. Some people also find it difficult to separate work from personal life, which may lead to overworking or burnout.

Despite these drawbacks, the benefits of flexibility, productivity, and improved quality of life make working from home a positive development overall.`}
        </CodeBlock>

        <ArticleHeading>Why This Essay Scores Band 8</ArticleHeading>

        <BulletList items={[
          <><strong>Clear judgment:</strong> "I believe its advantages outweigh them" answers the "outweigh" question directly</>,
          <><strong>Balanced coverage:</strong> Both advantages and disadvantages are discussed with examples</>,
          <><strong>Logical organization:</strong> Clear paragraphs for advantages and disadvantages</>,
          <><strong>Supporting evidence:</strong> Specific example about commuting time makes the point concrete</>,
          <><strong>Natural language:</strong> "For instance", "However", "Despite these drawbacks" connect ideas smoothly</>,
          <><strong>Strong conclusion:</strong> Restates judgment with reasons (flexibility, productivity, quality of life)</>
        ]} />

        <ArticleHeading>Common Mistakes to Avoid</ArticleHeading>

        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 my-6">
          <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">
            ❌ Don't Do This
          </h4>
          <BulletList items={[
            <><strong>No judgment for "outweigh" questions:</strong> If asked whether advantages outweigh disadvantages, you must answer</>,
            <><strong>Only discussing one side:</strong> Even if you think one side is stronger, discuss both</>,
            <><strong>Weak examples:</strong> Don't say "There are many advantages" without explaining what they are</>,
            <><strong>Listing without explanation:</strong> Each advantage/disadvantage needs explanation, not just a list</>,
            <><strong>Contradicting yourself:</strong> Don't say advantages outweigh disadvantages, then list more/stronger disadvantages</>
          ]} />
        </div>

        <ArticleHeading>Useful Language</ArticleHeading>

        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">
              Introducing Advantages
            </h4>
            <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
              <li>• One major benefit is...</li>
              <li>• A key advantage is that...</li>
              <li>• This brings several benefits...</li>
              <li>• On the positive side...</li>
              <li>• Furthermore/Moreover...</li>
            </ul>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">
              Introducing Disadvantages
            </h4>
            <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
              <li>• However, there are drawbacks...</li>
              <li>• One disadvantage is that...</li>
              <li>• On the negative side...</li>
              <li>• A potential problem is...</li>
              <li>• This can lead to...</li>
            </ul>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">
              Advantages Outweigh
            </h4>
            <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
              <li>• The advantages outweigh...</li>
              <li>• Despite these drawbacks...</li>
              <li>• Overall, the benefits are greater...</li>
              <li>• These advantages are more significant...</li>
            </ul>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">
              Disadvantages Outweigh
            </h4>
            <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
              <li>• The disadvantages outweigh...</li>
              <li>• Despite some benefits...</li>
              <li>• The drawbacks are more serious...</li>
              <li>• These negative effects are greater...</li>
            </ul>
          </div>
        </div>

        <ArticleHeading>Alternative Structure: Outweigh Essays</ArticleHeading>

        <ArticleParagraph>
          For "outweigh" questions, you can emphasize the stronger side:
        </ArticleParagraph>

        <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-6">
          <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">
            Option 1: Equal Paragraphs (Balanced)
          </h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
            Body 1: Advantages (3-4 sentences)<br />
            Body 2: Disadvantages (3-4 sentences)<br />
            Conclusion: State which outweighs
          </p>

          <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100 mt-6">
            Option 2: Emphasis on Stronger Side
          </h4>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            Body 1: Weaker side (3 sentences)<br />
            Body 2: Stronger side (5-6 sentences with more examples)<br />
            Conclusion: Restate that stronger side outweighs
          </p>
        </div>

        <ArticleHeading>Step-by-Step Writing Process</ArticleHeading>

        <div className="space-y-4 my-6">
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <p className="font-medium text-slate-900 dark:text-slate-100">
              Step 1: Identify the Question Type (1 minute)
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">
              Is it asking for neutral discussion OR asking if one side outweighs the other? 
              This changes your approach.
            </p>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <p className="font-medium text-slate-900 dark:text-slate-100">
              Step 2: Brainstorm Both Sides (3 minutes)
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">
              List 2-3 advantages and 2-3 disadvantages. Think of examples for each.
            </p>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <p className="font-medium text-slate-900 dark:text-slate-100">
              Step 3: Make Your Judgment (1 minute)
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">
              For "outweigh" questions, decide which side is stronger based on your points.
            </p>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <p className="font-medium text-slate-900 dark:text-slate-100">
              Step 4: Write Your Essay (30 minutes)
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">
              Introduction → Advantages paragraph → Disadvantages paragraph → Conclusion with judgment.
            </p>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <p className="font-medium text-slate-900 dark:text-slate-100">
              Step 5: Check Your Judgment (5 minutes)
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">
              Make sure your conclusion matches your introduction. Verify you answered the question fully.
            </p>
          </div>
        </div>

        <ArticleHeading>Practice Question</ArticleHeading>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-6">
          <p className="text-slate-800 dark:text-slate-200 italic mb-3">
            More and more people are shopping online instead of going to physical stores.
            Do the advantages of this trend outweigh the disadvantages?
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            <strong>Practice tip:</strong> List advantages (convenience, price comparison, variety) 
            and disadvantages (no physical inspection, shipping delays, local business impact). 
            Decide which side is stronger and support it clearly.
          </p>
        </div>

        <ArticleHeading>Frequently Asked Questions</ArticleHeading>

        <div className="space-y-6 mb-8">
          <div>
            <h4 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">
              What is an advantages and disadvantages essay?
            </h4>
            <p className="text-slate-700 dark:text-slate-300">
              An advantages and disadvantages essay requires you to discuss the benefits and drawbacks 
              of a topic. If the question asks if advantages outweigh disadvantages, you must give a 
              clear judgment.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">
              Do I need to give my opinion in an advantages/disadvantages essay?
            </h4>
            <p className="text-slate-700 dark:text-slate-300">
              Only if the question asks 'Do the advantages outweigh the disadvantages?' or similar. 
              Otherwise, present both sides objectively without stating which is stronger.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">
              How do I structure an advantages and disadvantages essay?
            </h4>
            <p className="text-slate-700 dark:text-slate-300">
              Introduction (paraphrase topic), Body 1 (advantages + explanations), Body 2 (disadvantages + 
              explanations), Conclusion (summarize and give judgment if required).
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">
              Should advantages and disadvantages be equal?
            </h4>
            <p className="text-slate-700 dark:text-slate-300">
              Generally yes, unless the question asks if one outweighs the other. In that case, you 
              can make the stronger side more developed, but still discuss both fairly.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">
              What if I think there are only advantages or only disadvantages?
            </h4>
            <p className="text-slate-700 dark:text-slate-300">
              You must still discuss both sides if the question asks for advantages AND disadvantages. 
              Think critically to find at least one or two points for each side.
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

export default AdvantagesDisadvantagesEssayIELTSPage;
