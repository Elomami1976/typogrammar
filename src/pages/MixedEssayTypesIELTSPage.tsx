import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading, CodeBlock, BulletList } from '../components/ArticleComponents';

const MixedEssayTypesIELTSPage: React.FC = () => {
  usePageMetadata({
    title: 'IELTS Mixed Essay Types – Band 7–9 Strategy & Example | TypoGrammar',
    description: 'Learn how to identify and answer IELTS mixed essay questions with a Band 7–9 model answer and clear strategy.'
  });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a mixed essay in IELTS Writing Task 2?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A mixed essay combines two different task types, such as discussing advantages AND giving your opinion, or explaining causes AND saying if it's positive or negative."
        }
      },
      {
        "@type": "Question",
        "name": "How do I structure a mixed essay?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Address both requirements separately. For example: advantages in one paragraph, your opinion in another. Or, integrate your opinion when discussing advantages. Both approaches can work."
        }
      },
      {
        "@type": "Question",
        "name": "What's the most common mixed essay type?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The most common is 'Advantages + Opinion' (e.g., What are the advantages? Do you agree?). Also common: 'Reasons + Opinion' and 'Effects + Opinion'."
        }
      },
      {
        "@type": "Question",
        "name": "Can I skip one part of a mixed essay?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Both parts are equally important. Skipping or under-developing one part will significantly reduce your Task Achievement score."
        }
      },
      {
        "@type": "Question",
        "name": "How is a mixed essay different from a two-part question?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A two-part question has two separate questions requiring factual answers. A mixed essay combines factual discussion (advantages, causes) with opinion or evaluation."
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
          IELTS Mixed Essay Types – Band 7–9 Strategy & Example
        </h1>

        {/* Featured Snippet Box */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-8">
          <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-slate-100">
            📌 Quick Answer
          </h3>
          <p className="text-slate-800 dark:text-slate-200">
            A mixed essay has two instructions (e.g., advantages + opinion). You must address both 
            to score high. Structure: Introduction → Address first requirement (1 paragraph) → 
            Address second requirement (1 paragraph) → Conclusion summarizing both.
          </p>
        </div>

        <ArticleParagraph>
          Mixed Essay Types combine two different task requirements in one question. These are 
          considered among the trickier IELTS essay types because you need to satisfy two different 
          demands simultaneously. However, with the right approach, they're very manageable.
        </ArticleParagraph>

        <ArticleHeading>How to Recognize Mixed Essays</ArticleHeading>

        <ArticleParagraph>
          Mixed essays combine different task types. Common combinations include:
        </ArticleParagraph>

        <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-6">
          <h4 className="font-semibold mb-4 text-slate-900 dark:text-slate-100">
            Common Mixed Essay Patterns
          </h4>
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-medium text-slate-900 dark:text-slate-100">
                Advantages + Opinion
              </p>
              <p className="text-slate-700 dark:text-slate-300 ml-4 italic">
                "What are the advantages of X? Do you agree it should be implemented?"
              </p>
            </div>
            <div>
              <p className="font-medium text-slate-900 dark:text-slate-100">
                Reasons + Opinion
              </p>
              <p className="text-slate-700 dark:text-slate-300 ml-4 italic">
                "Why is this happening? Is it a positive or negative development?"
              </p>
            </div>
            <div>
              <p className="font-medium text-slate-900 dark:text-slate-100">
                Problems + Opinion
              </p>
              <p className="text-slate-700 dark:text-slate-300 ml-4 italic">
                "What problems does this cause? Do you think the benefits outweigh them?"
              </p>
            </div>
            <div>
              <p className="font-medium text-slate-900 dark:text-slate-100">
                Effects + Opinion
              </p>
              <p className="text-slate-700 dark:text-slate-300 ml-4 italic">
                "What effects does this have? Do you think this is beneficial overall?"
              </p>
            </div>
          </div>
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
                • Mention both requirements<br />
                • (Optional) Hint at your stance
              </p>
            </div>
            <div>
              <p className="font-medium text-slate-900 dark:text-slate-100">
                2. Body Paragraph 1 – First Requirement (4-5 sentences)
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300 ml-4">
                • Address first task (e.g., advantages)<br />
                • Explain with 2-3 points and examples<br />
                • Stay objective if needed
              </p>
            </div>
            <div>
              <p className="font-medium text-slate-900 dark:text-slate-100">
                3. Body Paragraph 2 – Second Requirement (4-5 sentences)
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300 ml-4">
                • Address second task (e.g., your opinion)<br />
                • State your position clearly<br />
                • Support with reasons and examples
              </p>
            </div>
            <div>
              <p className="font-medium text-slate-900 dark:text-slate-100">
                4. Conclusion (2 sentences)
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300 ml-4">
                • Briefly summarize first requirement<br />
                • Restate your opinion/judgment
              </p>
            </div>
          </div>
        </div>

        <ArticleHeading>Band 9 Model Answer</ArticleHeading>

        <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg mb-6">
          <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">📝 Question</h4>
          <p className="text-slate-800 dark:text-slate-200 italic">
            University education should be free for everyone.
            What are the advantages of this, and do you agree?
          </p>
        </div>

        <CodeBlock>
{`Free university education can significantly increase access to learning and reduce social inequality. Students from low-income families would have equal opportunities to pursue higher education without financial pressure.

Making university education free has several clear advantages. Firstly, it would remove financial barriers, allowing talented students from all backgrounds to attend university based on merit rather than wealth. This could lead to a more skilled workforce and greater social mobility. Secondly, graduates would not burden themselves with student debt, enabling them to contribute to the economy more freely through spending and entrepreneurship.

However, I do not believe university education should be completely free. Governments may struggle to fund universities properly, which could reduce education quality through overcrowded classrooms and underpaid staff. Students may also value education less if it is entirely free, leading to lower completion rates. A more sustainable approach would be a partially subsidized system with means-tested support for disadvantaged students.

In conclusion, although free university education has clear advantages in promoting equality, a partially funded system is more sustainable and effective in maintaining quality while supporting those in need.`}
        </CodeBlock>

        <ArticleHeading>Why This Essay Scores Band 9</ArticleHeading>

        <BulletList items={[
          <><strong>Both requirements addressed:</strong> Advantages discussed objectively (paragraph 1), then clear opinion given (paragraph 2)</>,
          <><strong>Sophisticated argument:</strong> Acknowledges advantages but argues for a nuanced solution (partial funding)</>,
          <><strong>Well-developed ideas:</strong> Each point is explained with implications (workforce, social mobility, debt, quality concerns)</>,
          <><strong>Clear position:</strong> "I do not believe" makes the opinion unmistakable</>,
          <><strong>Balanced evaluation:</strong> Recognizes benefits while explaining practical concerns</>,
          <><strong>Natural, advanced language:</strong> "burden themselves", "means-tested support", "social mobility"</>
        ]} />

        <ArticleHeading>Common Mistakes to Avoid</ArticleHeading>

        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 my-6">
          <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">
            ❌ Don't Do This
          </h4>
          <BulletList items={[
            <><strong>Treating it as one task:</strong> Don't just write about advantages without giving your opinion if both are asked</>,
            <><strong>Weak opinion:</strong> If asked for your opinion, don't say "it has both positives and negatives" without taking a stance</>,
            <><strong>Unbalanced development:</strong> Both requirements deserve roughly equal attention</>,
            <><strong>Contradicting yourself:</strong> Don't say advantages are huge but then disagree completely</>,
            <><strong>Missing one requirement:</strong> Examiners will notice if you skip the opinion or advantages part</>
          ]} />
        </div>

        <ArticleHeading>Strategies for Different Mixed Types</ArticleHeading>

        <div className="space-y-6 my-6">
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">
              Advantages + Opinion Strategy
            </h4>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              <strong>Paragraph 1:</strong> List 2-3 advantages objectively<br />
              <strong>Paragraph 2:</strong> State your opinion (agree, disagree, or partially agree) 
              and explain why with additional reasons
            </p>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">
              Reasons + Positive/Negative Strategy
            </h4>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              <strong>Paragraph 1:</strong> Explain 2-3 reasons factually<br />
              <strong>Paragraph 2:</strong> Evaluate whether it's positive or negative (or mixed) 
              with justification
            </p>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">
              Problems + Opinion Strategy
            </h4>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              <strong>Paragraph 1:</strong> Identify 2-3 problems with explanations<br />
              <strong>Paragraph 2:</strong> Give your view on severity or whether benefits outweigh problems
            </p>
          </div>
        </div>

        <ArticleHeading>Useful Language</ArticleHeading>

        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">
              Introducing Advantages/Reasons
            </h4>
            <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
              <li>• There are several advantages...</li>
              <li>• The main reasons include...</li>
              <li>• This has some clear benefits...</li>
              <li>• Several factors contribute to...</li>
            </ul>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">
              Transitioning to Opinion
            </h4>
            <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
              <li>• However, I believe that...</li>
              <li>• Despite these advantages, I think...</li>
              <li>• Turning to whether I agree...</li>
              <li>• As for my opinion...</li>
            </ul>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">
              Giving Nuanced Opinion
            </h4>
            <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
              <li>• While I acknowledge X, I believe Y...</li>
              <li>• Although this has merit, I think...</li>
              <li>• I partially agree because...</li>
              <li>• Overall, I would argue that...</li>
            </ul>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">
              Evaluating Positive/Negative
            </h4>
            <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
              <li>• This is a positive development because...</li>
              <li>• I consider this trend negative...</li>
              <li>• This has both benefits and drawbacks...</li>
              <li>• On balance, this is beneficial...</li>
            </ul>
          </div>
        </div>

        <ArticleHeading>Alternative Approach: Integration</ArticleHeading>

        <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-6">
          <h4 className="font-semibold mb-4 text-slate-900 dark:text-slate-100">
            For Advanced Writers (Band 8+)
          </h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
            Instead of separating advantages and opinion into two paragraphs, you can integrate 
            them:
          </p>
          <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <p>
              <strong>Body 1:</strong> Present advantage 1 and explain why you agree/disagree with it
            </p>
            <p>
              <strong>Body 2:</strong> Present advantage 2 and explain why you agree/disagree with it
            </p>
            <p className="text-slate-600 dark:text-slate-400 mt-4">
              This creates a more sophisticated essay but requires strong control of argumentation.
            </p>
          </div>
        </div>

        <ArticleHeading>Step-by-Step Writing Process</ArticleHeading>

        <div className="space-y-4 my-6">
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <p className="font-medium text-slate-900 dark:text-slate-100">
              Step 1: Identify Both Requirements (2 minutes)
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">
              Carefully read the question. Underline the two tasks (e.g., "advantages" and "do you agree"). 
              Don't confuse mixed essays with two-part questions.
            </p>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <p className="font-medium text-slate-900 dark:text-slate-100">
              Step 2: Plan First Requirement (2 minutes)
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">
              Brainstorm advantages, reasons, or problems (whichever is asked). List 2-3 points.
            </p>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <p className="font-medium text-slate-900 dark:text-slate-100">
              Step 3: Decide Your Opinion (2 minutes)
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">
              Based on the first requirement, form your opinion. Think of reasons to support it.
            </p>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <p className="font-medium text-slate-900 dark:text-slate-100">
              Step 4: Write Your Essay (30 minutes)
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">
              Introduction → First requirement paragraph → Opinion paragraph → Conclusion. 
              Make sure both parts are developed equally.
            </p>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <p className="font-medium text-slate-900 dark:text-slate-100">
              Step 5: Check Both Requirements Met (4 minutes)
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">
              Verify you addressed both parts fully. Make sure your opinion is clear and justified.
            </p>
          </div>
        </div>

        <ArticleHeading>Practice Question</ArticleHeading>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-6">
          <p className="text-slate-800 dark:text-slate-200 italic mb-3">
            In many countries, people are moving away from traditional diets and eating more fast food.
            What are the reasons for this trend, and is it a positive or negative development?
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            <strong>Practice tip:</strong> First paragraph: reasons (convenience, affordability, marketing). 
            Second paragraph: your evaluation (negative due to health impacts). Support both parts equally.
          </p>
        </div>

        <ArticleHeading>Frequently Asked Questions</ArticleHeading>

        <div className="space-y-6 mb-8">
          <div>
            <h4 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">
              What is a mixed essay in IELTS Writing Task 2?
            </h4>
            <p className="text-slate-700 dark:text-slate-300">
              A mixed essay combines two different task types, such as discussing advantages AND 
              giving your opinion, or explaining causes AND saying if it's positive or negative.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">
              How do I structure a mixed essay?
            </h4>
            <p className="text-slate-700 dark:text-slate-300">
              Address both requirements separately. For example: advantages in one paragraph, your 
              opinion in another. Or, integrate your opinion when discussing advantages. Both approaches 
              can work.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">
              What's the most common mixed essay type?
            </h4>
            <p className="text-slate-700 dark:text-slate-300">
              The most common is 'Advantages + Opinion' (e.g., What are the advantages? Do you agree?). 
              Also common: 'Reasons + Opinion' and 'Effects + Opinion'.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">
              Can I skip one part of a mixed essay?
            </h4>
            <p className="text-slate-700 dark:text-slate-300">
              No. Both parts are equally important. Skipping or under-developing one part will 
              significantly reduce your Task Achievement score.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">
              How is a mixed essay different from a two-part question?
            </h4>
            <p className="text-slate-700 dark:text-slate-300">
              A two-part question has two separate questions requiring factual answers. A mixed essay 
              combines factual discussion (advantages, causes) with opinion or evaluation.
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

export default MixedEssayTypesIELTSPage;
