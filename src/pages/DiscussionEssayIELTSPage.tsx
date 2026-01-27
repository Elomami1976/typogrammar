import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading, CodeBlock, BulletList } from '../components/ArticleComponents';

const DiscussionEssayIELTSPage: React.FC = () => {
  usePageMetadata({
    title: 'IELTS Discussion Essay – Discuss Both Views (Band 7–9) | TypoGrammar',
    description: 'Learn how to write IELTS discussion essays with Band 7–9 examples, balanced arguments, and clear opinion placement.'
  });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a discussion essay in IELTS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A discussion essay requires you to present both sides of an argument objectively before giving your own opinion, usually in the conclusion or final body paragraph."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to give my opinion in a discussion essay?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, if the question asks 'and give your opinion'. If it only says 'discuss both views', you can be more neutral, but stating a position shows stronger writing."
        }
      },
      {
        "@type": "Question",
        "name": "How do I balance both views in a discussion essay?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Give equal attention to both views. Write one body paragraph for each view with similar length and development. Don't make one side much weaker."
        }
      },
      {
        "@type": "Question",
        "name": "Can I disagree with both views in a discussion essay?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It's risky. You should present both views fairly first, then you can offer a third perspective or middle ground in your opinion, but avoid completely dismissing both."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between discussion and opinion essays?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Opinion essays require your clear position from the start. Discussion essays require balanced presentation of two views before stating your opinion (usually at the end)."
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
          IELTS Discussion Essay – Discuss Both Views (Band 7–9)
        </h1>

        {/* Featured Snippet Box */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-8">
          <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-slate-100">
            📌 Quick Answer
          </h3>
          <p className="text-slate-800 dark:text-slate-200">
            A discussion essay explains both views equally and objectively, then gives your opinion 
            (usually in the final paragraph or conclusion). Present each side fairly without bias 
            before stating which view you support or offering a balanced perspective.
          </p>
        </div>

        <ArticleParagraph>
          The Discussion Essay (also called "Discuss Both Views") is a common IELTS Writing Task 2 type. 
          Unlike opinion essays where you take a clear stance from the start, discussion essays require 
          you to present both sides of an argument objectively before giving your own view.
        </ArticleParagraph>

        <ArticleHeading>How to Recognize a Discussion Essay</ArticleHeading>

        <ArticleParagraph>
          Discussion essay questions contain phrases like:
        </ArticleParagraph>

        <BulletList items={[
          'Discuss both views and give your opinion',
          'Discuss both these views and give your own opinion',
          'Some people think X, while others think Y. Discuss both views',
          'There are different opinions about X. Discuss both sides'
        ]} />

        <ArticleHeading>Essay Structure for Discussion Essays</ArticleHeading>

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
                • Mention that both views exist<br />
                • (Optional) Hint at your opinion
              </p>
            </div>
            <div>
              <p className="font-medium text-slate-900 dark:text-slate-100">
                2. Body Paragraph 1 – First View (4-5 sentences)
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300 ml-4">
                • Topic sentence (introduce first view)<br />
                • Explanation + reasons<br />
                • Example or evidence
              </p>
            </div>
            <div>
              <p className="font-medium text-slate-900 dark:text-slate-100">
                3. Body Paragraph 2 – Second View (4-5 sentences)
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300 ml-4">
                • Topic sentence (introduce second view)<br />
                • Explanation + reasons<br />
                • Example or evidence
              </p>
            </div>
            <div>
              <p className="font-medium text-slate-900 dark:text-slate-100">
                4. Conclusion (2-3 sentences)
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300 ml-4">
                • Summarize both views briefly<br />
                • Give YOUR opinion clearly
              </p>
            </div>
          </div>
        </div>

        <ArticleHeading>Band 7.5 Model Answer</ArticleHeading>

        <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg mb-6">
          <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">📝 Question</h4>
          <p className="text-slate-800 dark:text-slate-200 italic">
            Some people think living in big cities is better, while others prefer living in the countryside.
            Discuss both views and give your opinion.
          </p>
        </div>

        <CodeBlock>
{`Living in big cities offers many advantages, while countryside life appeals to others for different reasons. Both views are valid, although I believe city life provides more opportunities overall.

On the one hand, cities offer better access to jobs, education, and healthcare. Large companies, universities, and modern hospitals are usually located in urban areas. In addition, cities provide more entertainment options and efficient public transport. For example, residents can easily attend concerts, visit museums, or meet people from diverse backgrounds.

On the other hand, the countryside is often considered a healthier and more peaceful place to live. People enjoy cleaner air, lower living costs, and a slower pace of life, which can reduce stress and improve well-being. Rural communities also tend to be closer-knit, where neighbors know each other and help one another.

In my opinion, although rural life is calmer, cities are more suitable for most people during their working years due to greater career prospects and access to services.`}
        </CodeBlock>

        <ArticleHeading>Why This Essay Scores Band 7.5</ArticleHeading>

        <BulletList items={[
          <><strong>Balanced discussion:</strong> Both views are presented fairly with equal development</>,
          <><strong>Clear structure:</strong> "On the one hand" and "On the other hand" organize the two views</>,
          <><strong>Opinion stated:</strong> The writer's opinion is clear in the conclusion ("I believe...")</>,
          <><strong>Supporting details:</strong> Each view has specific examples (jobs, healthcare vs. cleaner air, community)</>,
          <><strong>Cohesive devices:</strong> "In addition", "For example", "also", "although" link ideas smoothly</>,
          <><strong>Natural language:</strong> No memorized templates; ideas flow naturally</>
        ]} />

        <ArticleHeading>Common Mistakes to Avoid</ArticleHeading>

        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 my-6">
          <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">
            ❌ Don't Do This
          </h4>
          <BulletList items={[
            <><strong>Unbalanced discussion:</strong> Don't make one view much stronger or longer than the other</>,
            <><strong>Missing opinion:</strong> If the question asks for your opinion, you MUST give it</>,
            <><strong>Opinion too early:</strong> Don't state your opinion strongly in the introduction; save it for later</>,
            <><strong>Biased presentation:</strong> Present both views fairly, even if you disagree with one</>,
            <><strong>New ideas in conclusion:</strong> Don't introduce new arguments in the conclusion</>
          ]} />
        </div>

        <ArticleHeading>Useful Language for Discussion Essays</ArticleHeading>

        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">
              Introducing First View
            </h4>
            <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
              <li>• On the one hand...</li>
              <li>• Some people believe that...</li>
              <li>• One view is that...</li>
              <li>• Those who support X argue that...</li>
            </ul>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">
              Introducing Second View
            </h4>
            <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
              <li>• On the other hand...</li>
              <li>• However, others argue that...</li>
              <li>• Conversely, some people think...</li>
              <li>• An alternative view is that...</li>
            </ul>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">
              Giving Your Opinion
            </h4>
            <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
              <li>• In my opinion...</li>
              <li>• I believe that...</li>
              <li>• From my perspective...</li>
              <li>• Personally, I think...</li>
              <li>• I tend to agree with...</li>
            </ul>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">
              Balanced Conclusion
            </h4>
            <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
              <li>• Both views have merit, but...</li>
              <li>• While I understand X, I believe Y...</li>
              <li>• Although both sides are valid...</li>
              <li>• Overall, I would argue that...</li>
            </ul>
          </div>
        </div>

        <ArticleHeading>Alternative Structure: Opinion in Body Paragraph 3</ArticleHeading>

        <ArticleParagraph>
          Some high-scoring essays use three body paragraphs:
        </ArticleParagraph>

        <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-6">
          <div className="space-y-3 text-sm">
            <p className="text-slate-800 dark:text-slate-200">
              <strong>Body 1:</strong> Present first view objectively
            </p>
            <p className="text-slate-800 dark:text-slate-200">
              <strong>Body 2:</strong> Present second view objectively
            </p>
            <p className="text-slate-800 dark:text-slate-200">
              <strong>Body 3:</strong> Give YOUR opinion with reasons
            </p>
            <p className="text-slate-800 dark:text-slate-200">
              <strong>Conclusion:</strong> Brief summary
            </p>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">
            This works well if you have strong ideas for your opinion that need full development.
          </p>
        </div>

        <ArticleHeading>Step-by-Step Writing Process</ArticleHeading>

        <div className="space-y-4 my-6">
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <p className="font-medium text-slate-900 dark:text-slate-100">
              Step 1: Identify Both Views (2 minutes)
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">
              Read the question carefully and list the two opposing viewpoints. Make sure you 
              understand what each side believes.
            </p>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <p className="font-medium text-slate-900 dark:text-slate-100">
              Step 2: Plan Arguments for Each View (3 minutes)
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">
              Write 2-3 reasons for each viewpoint, even if you personally disagree with one. 
              Think objectively.
            </p>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <p className="font-medium text-slate-900 dark:text-slate-100">
              Step 3: Decide Your Opinion (1 minute)
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">
              Choose which view you support, or decide if you want to take a middle position. 
              Be ready to justify it.
            </p>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <p className="font-medium text-slate-900 dark:text-slate-100">
              Step 4: Write Your Essay (30 minutes)
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">
              Follow the structure: Introduction → View 1 → View 2 → Opinion/Conclusion. 
              Keep both body paragraphs roughly equal in length.
            </p>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <p className="font-medium text-slate-900 dark:text-slate-100">
              Step 5: Review for Balance (4 minutes)
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">
              Check that both views are presented fairly and your opinion is clear. Fix any errors.
            </p>
          </div>
        </div>

        <ArticleHeading>Practice Question</ArticleHeading>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-6">
          <p className="text-slate-800 dark:text-slate-200 italic mb-3">
            Some people believe that technology makes life more convenient, while others think it 
            makes life more complicated.
            Discuss both views and give your opinion.
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            <strong>Practice tip:</strong> List 2-3 points for each view before you start writing. 
            Make sure you present both sides fairly before stating your opinion in the conclusion.
          </p>
        </div>

        <ArticleHeading>Frequently Asked Questions</ArticleHeading>

        <div className="space-y-6 mb-8">
          <div>
            <h4 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">
              What is a discussion essay in IELTS?
            </h4>
            <p className="text-slate-700 dark:text-slate-300">
              A discussion essay requires you to present both sides of an argument objectively 
              before giving your own opinion, usually in the conclusion or final body paragraph.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">
              Do I need to give my opinion in a discussion essay?
            </h4>
            <p className="text-slate-700 dark:text-slate-300">
              Yes, if the question asks 'and give your opinion'. If it only says 'discuss both views', 
              you can be more neutral, but stating a position shows stronger writing.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">
              How do I balance both views in a discussion essay?
            </h4>
            <p className="text-slate-700 dark:text-slate-300">
              Give equal attention to both views. Write one body paragraph for each view with similar 
              length and development. Don't make one side much weaker.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">
              Can I disagree with both views in a discussion essay?
            </h4>
            <p className="text-slate-700 dark:text-slate-300">
              It's risky. You should present both views fairly first, then you can offer a third 
              perspective or middle ground in your opinion, but avoid completely dismissing both.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">
              What's the difference between discussion and opinion essays?
            </h4>
            <p className="text-slate-700 dark:text-slate-300">
              Opinion essays require your clear position from the start. Discussion essays require 
              balanced presentation of two views before stating your opinion (usually at the end).
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

export default DiscussionEssayIELTSPage;
