import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading, CodeBlock, BulletList } from '../components/ArticleComponents';

const IELTSWritingTask2Page: React.FC = () => {
  usePageMetadata({
    title: 'IELTS Writing Task 2 Essay Types – Band 7–9 Model Answers | TypoGrammar',
    description: 'Learn all IELTS Writing Task 2 essay types with Band 7–9 model answers, clear structures, and examiner tips to boost your score.'
  });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the main types of IELTS Writing Task 2 essays?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The main types are: Opinion Essay (Agree/Disagree), Discussion Essay (Both Views), Advantages & Disadvantages, Problem & Solution, Two-Part Question, and Mixed Essay Types."
        }
      },
      {
        "@type": "Question",
        "name": "How do I identify which essay type to write?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Read the question carefully and look for key phrases like 'Do you agree or disagree?', 'Discuss both views', 'What are the advantages and disadvantages?', 'What are the causes and solutions?', or two separate questions."
        }
      },
      {
        "@type": "Question",
        "name": "What is the basic structure for IELTS Writing Task 2?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The basic structure is: Introduction (paraphrase question + thesis statement), Body Paragraph 1 (main idea + support), Body Paragraph 2 (main idea + support), and Conclusion (summarize main points)."
        }
      },
      {
        "@type": "Question",
        "name": "How long should an IELTS Writing Task 2 essay be?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You must write at least 250 words. Band 7+ essays typically range from 270-320 words. Quality is more important than quantity."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use the same structure for all essay types?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Each essay type requires a different approach. Opinion essays need a clear stance, discussion essays need both views, and two-part questions need to answer both questions equally."
        }
      },
      {
        "@type": "Question",
        "name": "What makes a Band 7-9 IELTS essay?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Band 7-9 essays have: clear task achievement (fully answer the question), coherent organization, sophisticated vocabulary with collocations, varied grammar structures, and minimal errors."
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
        <h1 className="text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100">
          IELTS Writing Task 2 Essay Types – Band 7–9 Model Answers
        </h1>

        <ArticleParagraph>
          Getting Band 7, 8, or even Band 9 in IELTS Writing Task 2 depends on one key skill:
          <strong> Answering the correct essay type with a clear structure and strong language.</strong>
        </ArticleParagraph>

        <ArticleParagraph>
          In this guide, you'll find all IELTS Writing Task 2 essay types, each with:
        </ArticleParagraph>

        <BulletList items={[
          'The real exam-style question',
          'A complete Band 7–9 model answer',
          'Clear, natural English (no memorised templates)'
        ]} />

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-8">
          <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-slate-100">
            📚 Complete Essay Type Coverage
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/ielts/opinion-essay-ielts-band-7-9" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                → Opinion Essay (Agree/Disagree) – Band 7–9 Guide
              </Link>
            </li>
            <li>
              <Link to="/ielts/discussion-essay-ielts-band-7-9" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                → Discussion Essay (Both Views) – Band 7–9 Examples
              </Link>
            </li>
            <li>
              <Link to="/ielts/advantages-disadvantages-essay-ielts" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                → Advantages & Disadvantages Essay – Band 7–9 Strategy
              </Link>
            </li>
            <li>
              <Link to="/ielts/problem-solution-essay-ielts" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                → Problem & Solution Essay – Band 7–9 Model Answer
              </Link>
            </li>
            <li>
              <Link to="/ielts/two-part-question-essay-ielts" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                → Two-Part Question Essay – How to Answer Both Questions
              </Link>
            </li>
            <li>
              <Link to="/ielts/mixed-essay-types-ielts" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                → Mixed Essay Types – Band 7–9 Strategy & Example
              </Link>
            </li>
          </ul>
        </div>

        {/* Essay Type 1: Opinion Essay */}
        <ArticleHeading>1. Opinion Essay (Agree / Disagree)</ArticleHeading>
        
        <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg mb-6">
          <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">📝 Question</h4>
          <p className="text-slate-800 dark:text-slate-200 italic">
            Some people believe that children should be taught how to manage money at school.
            Do you agree or disagree?
          </p>
        </div>

        <h4 className="font-semibold mb-3 text-lg text-slate-900 dark:text-slate-100">
          Band 8 Model Answer
        </h4>
        
        <CodeBlock>
{`Many people argue that children should be taught how to manage money at school, and I strongly agree with this view. In today's consumer-driven society, financial literacy is an essential life skill.

Firstly, learning how to manage money helps children develop responsible habits early in life. Many adults struggle with debt simply because they were never taught how to budget, save, or understand interest rates. By learning these skills at school, students are more likely to make informed financial decisions in the future.

Secondly, schools provide equal learning opportunities. Not all parents have the knowledge or time to teach financial skills at home, which can lead to inequality. Including money management in the school curriculum ensures that all children receive the same basic financial education.

Although some people argue that schools are already overloaded with academic subjects, practical skills such as money management are just as important as traditional subjects.

In conclusion, teaching children how to manage money at school prepares them for real-life challenges and promotes financial independence.`}
        </CodeBlock>

        <div className="my-6 p-4 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500">
          <p className="text-sm text-slate-700 dark:text-slate-300">
            💡 <strong>Want the complete guide?</strong> Read our full{' '}
            <Link to="/ielts/opinion-essay-ielts-band-7-9" className="text-green-700 dark:text-green-400 hover:underline font-medium">
              Opinion Essay (Band 7–9) guide
            </Link>
          </p>
        </div>

        {/* Essay Type 2: Discussion Essay */}
        <ArticleHeading>2. Discussion Essay (Both Views + Opinion)</ArticleHeading>
        
        <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg mb-6">
          <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">📝 Question</h4>
          <p className="text-slate-800 dark:text-slate-200 italic">
            Some people think living in big cities is better, while others prefer living in the countryside.
            Discuss both views and give your opinion.
          </p>
        </div>

        <h4 className="font-semibold mb-3 text-lg text-slate-900 dark:text-slate-100">
          Band 7.5 Model Answer
        </h4>
        
        <CodeBlock>
{`Living in big cities offers many advantages, while countryside life appeals to others for different reasons. Both views are valid, although I believe city life provides more opportunities overall.

On the one hand, cities offer better access to jobs, education, and healthcare. Large companies, universities, and modern hospitals are usually located in urban areas. In addition, cities provide more entertainment options and efficient public transport.

On the other hand, the countryside is often considered a healthier and more peaceful place to live. People enjoy cleaner air, lower living costs, and a slower pace of life, which can reduce stress and improve well-being.

In my opinion, although rural life is calmer, cities are more suitable for most people during their working years due to greater career prospects.`}
        </CodeBlock>

        <div className="my-6 p-4 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500">
          <p className="text-sm text-slate-700 dark:text-slate-300">
            💡 <strong>Want the complete guide?</strong> Read our full{' '}
            <Link to="/ielts/discussion-essay-ielts-band-7-9" className="text-green-700 dark:text-green-400 hover:underline font-medium">
              Discussion Essay guide
            </Link>
          </p>
        </div>

        {/* Essay Type 3: Advantages & Disadvantages */}
        <ArticleHeading>3. Advantages & Disadvantages Essay</ArticleHeading>
        
        <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg mb-6">
          <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">📝 Question</h4>
          <p className="text-slate-800 dark:text-slate-200 italic">
            Many people now work from home.
            Do the advantages outweigh the disadvantages?
          </p>
        </div>

        <h4 className="font-semibold mb-3 text-lg text-slate-900 dark:text-slate-100">
          Band 8 Model Answer
        </h4>
        
        <CodeBlock>
{`Working from home has become increasingly common in recent years. While this trend has some disadvantages, I believe its advantages outweigh them.

One major benefit of working from home is flexibility. Employees can manage their schedules more efficiently and achieve a better work-life balance. Additionally, remote work eliminates commuting, which saves time and reduces stress.

However, working from home may lead to social isolation. Employees miss daily face-to-face interaction with colleagues, which can affect teamwork. Some people also find it difficult to separate work from personal life.

Despite these drawbacks, the benefits of flexibility, productivity, and improved quality of life make working from home a positive development overall.`}
        </CodeBlock>

        <div className="my-6 p-4 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500">
          <p className="text-sm text-slate-700 dark:text-slate-300">
            💡 <strong>Want the complete guide?</strong> Read our full{' '}
            <Link to="/ielts/advantages-disadvantages-essay-ielts" className="text-green-700 dark:text-green-400 hover:underline font-medium">
              Advantages & Disadvantages Essay guide
            </Link>
          </p>
        </div>

        {/* Essay Type 4: Problem & Solution */}
        <ArticleHeading>4. Problem & Solution Essay</ArticleHeading>
        
        <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg mb-6">
          <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">📝 Question</h4>
          <p className="text-slate-800 dark:text-slate-200 italic">
            Many cities around the world suffer from traffic congestion.
            What are the causes of this problem, and what solutions can be suggested?
          </p>
        </div>

        <h4 className="font-semibold mb-3 text-lg text-slate-900 dark:text-slate-100">
          Band 7 Model Answer
        </h4>
        
        <CodeBlock>
{`Traffic congestion is a serious problem in many cities. This issue is mainly caused by population growth and increased reliance on private vehicles.

As cities expand, more people commute daily for work and education. In many places, public transport systems are unreliable or poorly developed, forcing residents to use cars. This leads to overcrowded roads, especially during peak hours.

To solve this problem, governments should invest in efficient public transport such as buses and metro systems. Encouraging cycling and carpooling can also reduce traffic. In addition, restricting car access in city centres may help control congestion.

In conclusion, traffic congestion is caused by poor transport planning, but effective solutions can significantly reduce the problem.`}
        </CodeBlock>

        <div className="my-6 p-4 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500">
          <p className="text-sm text-slate-700 dark:text-slate-300">
            💡 <strong>Want the complete guide?</strong> Read our full{' '}
            <Link to="/ielts/problem-solution-essay-ielts" className="text-green-700 dark:text-green-400 hover:underline font-medium">
              Problem & Solution Essay guide
            </Link>
          </p>
        </div>

        {/* Essay Type 5: Two-Part Question */}
        <ArticleHeading>5. Two-Part Question Essay (Direct Questions)</ArticleHeading>
        
        <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg mb-6">
          <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">📝 Question</h4>
          <p className="text-slate-800 dark:text-slate-200 italic">
            People are living longer than in the past.
            Why is this happening, and what effects does this have on society?
          </p>
        </div>

        <h4 className="font-semibold mb-3 text-lg text-slate-900 dark:text-slate-100">
          Band 8.5 Model Answer
        </h4>
        
        <CodeBlock>
{`People today are living longer mainly due to improvements in healthcare and living standards. This trend has several effects on society.

Medical advancements have made it possible to treat diseases that were once fatal. In addition, people are more aware of healthy lifestyles, including balanced diets and regular exercise.

One major effect of an ageing population is increased pressure on healthcare systems and pension funds. However, older people can still contribute to society by sharing experience and remaining in the workforce longer.

Overall, although longer life expectancy creates challenges, it reflects positive social development.`}
        </CodeBlock>

        <div className="my-6 p-4 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500">
          <p className="text-sm text-slate-700 dark:text-slate-300">
            💡 <strong>Want the complete guide?</strong> Read our full{' '}
            <Link to="/ielts/two-part-question-essay-ielts" className="text-green-700 dark:text-green-400 hover:underline font-medium">
              Two-Part Question Essay guide
            </Link>
          </p>
        </div>

        {/* Essay Type 6: Mixed Essay */}
        <ArticleHeading>6. Mixed Essay (Advantages + Opinion)</ArticleHeading>
        
        <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg mb-6">
          <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">📝 Question</h4>
          <p className="text-slate-800 dark:text-slate-200 italic">
            University education should be free for everyone.
            What are the advantages of this, and do you agree?
          </p>
        </div>

        <h4 className="font-semibold mb-3 text-lg text-slate-900 dark:text-slate-100">
          Band 9 Model Answer
        </h4>
        
        <CodeBlock>
{`Free university education can significantly increase access to learning and reduce social inequality. Students from low-income families would have equal opportunities to pursue higher education without financial pressure.

However, I do not believe university education should be completely free. Governments may struggle to fund universities properly, which could reduce education quality. Students may also value education less if it is entirely free.

In conclusion, although free university education has clear advantages, a partially funded system is more sustainable and effective.`}
        </CodeBlock>

        <div className="my-6 p-4 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500">
          <p className="text-sm text-slate-700 dark:text-slate-300">
            💡 <strong>Want the complete guide?</strong> Read our full{' '}
            <Link to="/ielts/mixed-essay-types-ielts" className="text-green-700 dark:text-green-400 hover:underline font-medium">
              Mixed Essay Types guide
            </Link>
          </p>
        </div>

        {/* Summary Section */}
        <ArticleHeading>Key Takeaways</ArticleHeading>
        
        <ArticleParagraph>
          Understanding which essay type you're facing is crucial for IELTS Writing Task 2 success. 
          Each type has specific requirements and structure:
        </ArticleParagraph>

        <BulletList items={[
          'Opinion Essays require a clear position from start to finish',
          'Discussion Essays need balanced coverage of both views',
          'Advantages/Disadvantages Essays demand objective comparison',
          'Problem/Solution Essays focus on causes and practical fixes',
          'Two-Part Questions must address both questions equally',
          'Mixed Essays combine multiple requirements'
        ]} />

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-8">
          <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-slate-100">
            ⚠️ Common Mistake
          </h3>
          <ArticleParagraph>
            Many candidates lose marks by treating all essay types the same way. Always identify the 
            essay type first, then apply the appropriate structure and approach.
          </ArticleParagraph>
        </div>

        {/* FAQ Section */}
        <ArticleHeading>Frequently Asked Questions</ArticleHeading>

        <div className="space-y-6 mb-8">
          <div>
            <h4 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">
              What are the main types of IELTS Writing Task 2 essays?
            </h4>
            <p className="text-slate-700 dark:text-slate-300">
              The main types are: Opinion Essay (Agree/Disagree), Discussion Essay (Both Views), 
              Advantages & Disadvantages, Problem & Solution, Two-Part Question, and Mixed Essay Types.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">
              How do I identify which essay type to write?
            </h4>
            <p className="text-slate-700 dark:text-slate-300">
              Read the question carefully and look for key phrases like 'Do you agree or disagree?', 
              'Discuss both views', 'What are the advantages and disadvantages?', 'What are the causes 
              and solutions?', or two separate questions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">
              What is the basic structure for IELTS Writing Task 2?
            </h4>
            <p className="text-slate-700 dark:text-slate-300">
              The basic structure is: Introduction (paraphrase question + thesis statement), 
              Body Paragraph 1 (main idea + support), Body Paragraph 2 (main idea + support), 
              and Conclusion (summarize main points).
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">
              How long should an IELTS Writing Task 2 essay be?
            </h4>
            <p className="text-slate-700 dark:text-slate-300">
              You must write at least 250 words. Band 7+ essays typically range from 270-320 words. 
              Quality is more important than quantity.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">
              Can I use the same structure for all essay types?
            </h4>
            <p className="text-slate-700 dark:text-slate-300">
              No. Each essay type requires a different approach. Opinion essays need a clear stance, 
              discussion essays need both views, and two-part questions need to answer both questions equally.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">
              What makes a Band 7-9 IELTS essay?
            </h4>
            <p className="text-slate-700 dark:text-slate-300">
              Band 7-9 essays have: clear task achievement (fully answer the question), coherent 
              organization, sophisticated vocabulary with collocations, varied grammar structures, 
              and minimal errors.
            </p>
          </div>
        </div>
      </div>
  );
};

export default IELTSWritingTask2Page;
