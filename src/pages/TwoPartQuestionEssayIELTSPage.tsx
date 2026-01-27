import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading, CodeBlock, BulletList } from '../components/ArticleComponents';

const TwoPartQuestionEssayIELTSPage: React.FC = () => {
  usePageMetadata({
    title: 'IELTS Two-Part Question Essay – How to Answer Both Questions | TypoGrammar',
    description: 'Discover how to answer both questions in IELTS Writing Task 2 with a Band 7–9 model essay and structure tips.'
  });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a two-part question essay in IELTS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A two-part question essay presents two separate questions that you must answer equally. Each question usually requires its own body paragraph with full development."
        }
      },
      {
        "@type": "Question",
        "name": "How do I structure a two-part question essay?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Introduction (paraphrase topic + mention both questions), Body 1 (answer first question), Body 2 (answer second question), Conclusion (summarize both answers)."
        }
      },
      {
        "@type": "Question",
        "name": "Should both answers be equal length?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, give both questions equal attention. Each should have a well-developed body paragraph of similar length. Don't answer one briefly and the other extensively."
        }
      },
      {
        "@type": "Question",
        "name": "What if the two questions are related?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Even if related, treat them as separate questions. Answer each fully in its own paragraph. Don't combine them into one discussion."
        }
      },
      {
        "@type": "Question",
        "name": "Can I give my opinion in a two-part essay?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Only if one of the questions asks for your opinion (e.g., 'Is this positive or negative?'). If both questions are factual, focus on answering them objectively."
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
          IELTS Two-Part Question Essay – How to Answer Both Questions
        </h1>

        {/* Featured Snippet Box */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-8">
          <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-slate-100">
            📌 Quick Answer
          </h3>
          <p className="text-slate-800 dark:text-slate-200">
            Answer both questions equally, usually one paragraph per question. The key is balance—
            don't spend three sentences on one question and a whole paragraph on another. Each 
            question deserves full development with explanations and examples.
          </p>
        </div>

        <ArticleParagraph>
          The Two-Part Question Essay presents two distinct questions that you must answer. This 
          essay type tests your ability to address multiple aspects of a topic systematically. 
          The challenge is ensuring both questions receive equal, thorough treatment.
        </ArticleParagraph>

        <ArticleHeading>How to Recognize This Essay Type</ArticleHeading>

        <ArticleParagraph>
          Two-part question essays are easy to spot—they literally ask two questions:
        </ArticleParagraph>

        <BulletList items={[
          'Why is this happening, and what effects does this have?',
          'What are the reasons for this, and is this a positive or negative development?',
          'Why do people do X, and what can be done about it?',
          'What problems does this cause, and who should be responsible?'
        ]} />

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-6">
          <h4 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">
            ⚠️ Critical Rule
          </h4>
          <p className="text-slate-700 dark:text-slate-300 text-sm">
            You MUST answer BOTH questions fully. Missing one question or giving it minimal 
            attention will significantly lower your Task Achievement score, even if your English 
            is excellent.
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
                • Paraphrase the topic/situation<br />
                • Mention that you will address both questions<br />
                • (Optional) Brief overview of your answers
              </p>
            </div>
            <div>
              <p className="font-medium text-slate-900 dark:text-slate-100">
                2. Body Paragraph 1 – Answer Question 1 (5-6 sentences)
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300 ml-4">
                • Topic sentence addressing first question<br />
                • Provide 2-3 points with explanations<br />
                • Include examples or evidence
              </p>
            </div>
            <div>
              <p className="font-medium text-slate-900 dark:text-slate-100">
                3. Body Paragraph 2 – Answer Question 2 (5-6 sentences)
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300 ml-4">
                • Topic sentence addressing second question<br />
                • Provide 2-3 points with explanations<br />
                • Include examples or evidence
              </p>
            </div>
            <div>
              <p className="font-medium text-slate-900 dark:text-slate-100">
                4. Conclusion (2 sentences)
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300 ml-4">
                • Briefly summarize answer to question 1<br />
                • Briefly summarize answer to question 2
              </p>
            </div>
          </div>
        </div>

        <ArticleHeading>Band 8.5 Model Answer</ArticleHeading>

        <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg mb-6">
          <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">📝 Question</h4>
          <p className="text-slate-800 dark:text-slate-200 italic">
            People are living longer than in the past.
            Why is this happening, and what effects does this have on society?
          </p>
        </div>

        <CodeBlock>
{`People today are living longer mainly due to improvements in healthcare and living standards. This trend has several effects on society.

Medical advancements have made it possible to treat diseases that were once fatal. Modern medicine can now cure or manage conditions such as heart disease, diabetes, and cancer, allowing people to live well into their 80s and 90s. In addition, people are more aware of healthy lifestyles, including balanced diets and regular exercise, which contribute to longevity. Better sanitation and access to clean water have also reduced mortality rates significantly.

One major effect of an ageing population is increased pressure on healthcare systems and pension funds. Governments must allocate more resources to eldercare and medical services, which can strain national budgets. However, older people can still contribute to society by sharing experience and remaining in the workforce longer. Many seniors volunteer, mentor younger generations, or work part-time, enriching communities with their knowledge.

Overall, although longer life expectancy creates challenges, it reflects positive social development and can be managed through proper planning.`}
        </CodeBlock>

        <ArticleHeading>Why This Essay Scores Band 8.5</ArticleHeading>

        <BulletList items={[
          <><strong>Both questions fully answered:</strong> Paragraph 1 explains WHY (healthcare, lifestyle), Paragraph 2 explains EFFECTS (healthcare pressure, contribution to society)</>,
          <><strong>Equal development:</strong> Both body paragraphs are similar in length and detail</>,
          <><strong>Clear structure:</strong> Each paragraph has one clear focus that directly answers its question</>,
          <><strong>Specific examples:</strong> "heart disease, diabetes, cancer" and "volunteer, mentor" make points concrete</>,
          <><strong>Balanced perspective:</strong> Shows both challenges (budget strain) and positives (contribution)</>,
          <><strong>Natural flow:</strong> Ideas connect logically with good cohesion</>
        ]} />

        <ArticleHeading>Common Mistakes to Avoid</ArticleHeading>

        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 my-6">
          <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">
            ❌ Don't Do This
          </h4>
          <BulletList items={[
            <><strong>Answering only one question:</strong> This will severely hurt your Task Achievement score</>,
            <><strong>Unbalanced answers:</strong> Don't write 2 sentences for one question and 8 sentences for the other</>,
            <><strong>Combining both questions:</strong> Treat them separately, even if they seem related</>,
            <><strong>Forgetting which question is which:</strong> Make it clear which paragraph answers which question</>,
            <><strong>No conclusion for one question:</strong> Your conclusion should reference both answers</>
          ]} />
        </div>

        <ArticleHeading>Common Two-Part Question Patterns</ArticleHeading>

        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">
              Reasons + Effects
            </h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
              Why is X happening? What effects does it have?
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Answer 1: Explain causes<br />
              Answer 2: Describe impacts/consequences
            </p>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">
              Problems + Solutions
            </h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
              What problems does this cause? How can they be solved?
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Answer 1: Identify problems<br />
              Answer 2: Suggest solutions
            </p>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">
              Reasons + Opinion
            </h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
              Why is this happening? Is it positive or negative?
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Answer 1: Explain reasons objectively<br />
              Answer 2: State and justify your opinion
            </p>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">
              Causes + Responsibility
            </h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
              What causes this? Who should be responsible?
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Answer 1: Identify causes<br />
              Answer 2: Discuss who should take action
            </p>
          </div>
        </div>

        <ArticleHeading>Useful Language</ArticleHeading>

        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">
              Introducing First Answer
            </h4>
            <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
              <li>• There are several reasons why...</li>
              <li>• This is mainly due to...</li>
              <li>• The primary cause is...</li>
              <li>• Several factors contribute to...</li>
            </ul>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">
              Transitioning to Second Answer
            </h4>
            <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
              <li>• This trend has several effects...</li>
              <li>• Turning to the second question...</li>
              <li>• As for the effects...</li>
              <li>• Regarding the impact on society...</li>
            </ul>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">
              Describing Effects/Impact
            </h4>
            <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
              <li>• One major effect is...</li>
              <li>• This has led to...</li>
              <li>• The consequences include...</li>
              <li>• This impacts society by...</li>
            </ul>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">
              Giving Opinion (if asked)
            </h4>
            <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
              <li>• In my view, this is positive because...</li>
              <li>• I believe this is a negative trend...</li>
              <li>• Overall, I consider this beneficial...</li>
              <li>• This development is problematic because...</li>
            </ul>
          </div>
        </div>

        <ArticleHeading>Step-by-Step Writing Process</ArticleHeading>

        <div className="space-y-4 my-6">
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <p className="font-medium text-slate-900 dark:text-slate-100">
              Step 1: Identify Both Questions (1 minute)
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">
              Read carefully and underline the two questions. Make sure you understand exactly 
              what each is asking.
            </p>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <p className="font-medium text-slate-900 dark:text-slate-100">
              Step 2: Plan Answer for Question 1 (2 minutes)
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">
              Brainstorm 2-3 points that answer the first question. Think of examples or evidence.
            </p>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <p className="font-medium text-slate-900 dark:text-slate-100">
              Step 3: Plan Answer for Question 2 (2 minutes)
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">
              Brainstorm 2-3 points that answer the second question. Make sure this is equal 
              in substance to your first answer.
            </p>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <p className="font-medium text-slate-900 dark:text-slate-100">
              Step 4: Write Your Essay (30 minutes)
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">
              Introduction → Body 1 (Question 1) → Body 2 (Question 2) → Conclusion. 
              Keep both body paragraphs similar in length.
            </p>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <p className="font-medium text-slate-900 dark:text-slate-100">
              Step 5: Verify Both Answered (5 minutes)
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">
              Check that both questions received full answers. Make sure your conclusion addresses both.
            </p>
          </div>
        </div>

        <ArticleHeading>Practice Question</ArticleHeading>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-6">
          <p className="text-slate-800 dark:text-slate-200 italic mb-3">
            In many countries, people are spending more time at their workplace and less time at home.
            Why is this happening? What negative effects does this have on individuals and families?
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            <strong>Practice tip:</strong> Question 1 asks WHY (career pressure, financial needs, 
            company culture). Question 2 asks NEGATIVE EFFECTS (stress, family relationships, health). 
            Give each question equal space.
          </p>
        </div>

        <ArticleHeading>Frequently Asked Questions</ArticleHeading>

        <div className="space-y-6 mb-8">
          <div>
            <h4 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">
              What is a two-part question essay in IELTS?
            </h4>
            <p className="text-slate-700 dark:text-slate-300">
              A two-part question essay presents two separate questions that you must answer equally. 
              Each question usually requires its own body paragraph with full development.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">
              How do I structure a two-part question essay?
            </h4>
            <p className="text-slate-700 dark:text-slate-300">
              Introduction (paraphrase topic + mention both questions), Body 1 (answer first question), 
              Body 2 (answer second question), Conclusion (summarize both answers).
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">
              Should both answers be equal length?
            </h4>
            <p className="text-slate-700 dark:text-slate-300">
              Yes, give both questions equal attention. Each should have a well-developed body paragraph 
              of similar length. Don't answer one briefly and the other extensively.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">
              What if the two questions are related?
            </h4>
            <p className="text-slate-700 dark:text-slate-300">
              Even if related, treat them as separate questions. Answer each fully in its own paragraph. 
              Don't combine them into one discussion.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">
              Can I give my opinion in a two-part essay?
            </h4>
            <p className="text-slate-700 dark:text-slate-300">
              Only if one of the questions asks for your opinion (e.g., 'Is this positive or negative?'). 
              If both questions are factual, focus on answering them objectively.
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

export default TwoPartQuestionEssayIELTSPage;
