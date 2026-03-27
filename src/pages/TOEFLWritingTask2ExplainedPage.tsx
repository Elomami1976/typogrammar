import React from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading, BulletList, CodeBlock, ExampleList } from '../components/ArticleComponents';
import ShareButtons from '../components/ShareButtons';
import SchemaMarkup from '../components/SchemaMarkup';

const TOEFLWritingTask2ExplainedPage: React.FC = () => {
  usePageMetadata({
    title: 'TOEFL Writing Task 2 Explained (Academic Discussion Guide) | TypoGrammar',
    description: 'Master TOEFL Writing Task 2 with our complete Academic Discussion guide. Learn the format, essay structure, templates, sample answers, and tips to score high.'
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup
        type="Article"
        data={{
          headline: 'TOEFL Writing Task 2 Explained (Academic Discussion Guide)',
          description: 'Complete guide to TOEFL Academic Discussion Task with format, structure, templates, and high-scoring sample response.',
          keywords: ['TOEFL Writing Task 2', 'TOEFL Academic Discussion', 'TOEFL iBT Writing', 'TOEFL essay template', 'TOEFL Writing tips']
        }}
      />

      <article>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
          TOEFL Writing Task 2 Explained (Academic Discussion Guide)
        </h1>

        <ArticleParagraph>
          If you are preparing for the TOEFL iBT, you must understand TOEFL Writing Task 2, also called the <strong>Academic Discussion Task</strong>. This task measures your ability to express ideas clearly, respond to other opinions, and support your argument in writing.
        </ArticleParagraph>

        <ArticleParagraph>
          In this guide, you will learn:
        </ArticleParagraph>

        <BulletList items={[
          'What TOEFL Writing Task 2 is',
          'The format of the task',
          'The best essay structure',
          'A simple template',
          'A sample high-scoring answer',
          'Common mistakes to avoid',
          'Tips to improve your score'
        ]} />

        <ArticleParagraph>
          By the end of this page, you will know exactly how to write a strong TOEFL Academic Discussion response.
        </ArticleParagraph>

        {/* What Is TOEFL Writing Task 2? */}
        <ArticleHeading>What Is TOEFL Writing Task 2?</ArticleHeading>
        
        <ArticleParagraph>
          TOEFL Writing Task 2 is the <strong>Academic Discussion Task</strong> in the TOEFL iBT exam. In this task, you must write a short response to an academic discussion question.
        </ArticleParagraph>

        <ArticleParagraph>
          You will read:
        </ArticleParagraph>

        <BulletList items={[
          'A question from a professor',
          'Two short responses from students'
        ]} />

        <ArticleParagraph>
          Your job is to write your own response, expressing your opinion and adding new ideas to the discussion.
        </ArticleParagraph>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-800 dark:text-blue-200 font-medium">
            Unlike Writing Task 1, this task requires your personal opinion.
          </p>
        </div>

        {/* TOEFL Writing Task 2 Format */}
        <ArticleHeading>TOEFL Writing Task 2 Format</ArticleHeading>
        
        <ArticleParagraph>
          The TOEFL Academic Discussion task follows a simple format.
        </ArticleParagraph>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">Step 1: Read the Discussion Question</h3>
        
        <ArticleParagraph>
          The professor introduces a topic and asks a question for discussion.
        </ArticleParagraph>

        <ArticleParagraph>
          Example topics may include:
        </ArticleParagraph>

        <BulletList items={[
          'Education',
          'Technology',
          'Environment',
          'Social issues',
          'Business or economics'
        ]} />

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">Step 2: Read Student Responses</h3>
        
        <ArticleParagraph>
          You will see two short responses from students. These responses often have different opinions about the topic. They provide ideas that you can respond to or build upon.
        </ArticleParagraph>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">Step 3: Write Your Response</h3>
        
        <ArticleParagraph>
          You must write your own response to the discussion.
        </ArticleParagraph>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-700">
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-600">Feature</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-600">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-4 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700">Time</td>
                <td className="px-6 py-4 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700">10 minutes</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-750">
                <td className="px-6 py-4 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700">Word Count</td>
                <td className="px-6 py-4 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700">About 100–150 words</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-slate-700 dark:text-slate-300">Task Type</td>
                <td className="px-6 py-4 text-slate-700 dark:text-slate-300">Opinion response</td>
              </tr>
            </tbody>
          </table>
        </div>

        <ArticleParagraph>
          Your response should:
        </ArticleParagraph>

        <BulletList items={[
          'Express your opinion',
          'Refer to the discussion',
          'Provide reasons or examples'
        ]} />

        {/* Essay Structure */}
        <ArticleHeading>TOEFL Writing Task 2 Structure</ArticleHeading>
        
        <ArticleParagraph>
          A clear structure will help you write quickly and effectively. A strong response usually contains two or three short paragraphs.
        </ArticleParagraph>

        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Introduction (Your Opinion)</h4>
          <p className="text-blue-800 dark:text-blue-200 mb-2">Start by clearly stating your opinion about the topic.</p>
          <p className="text-blue-800 dark:text-blue-200 italic">Example: "I agree with Alex's opinion that online learning can be beneficial for students."</p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Supporting Ideas</h4>
          <p className="text-blue-800 dark:text-blue-200 mb-2">Explain your opinion using reasons or examples. You can also refer to ideas from the other students.</p>
          <p className="text-blue-800 dark:text-blue-200 italic">Example: "While Maria argues that traditional classrooms are better for interaction, modern technology allows students to communicate effectively through online platforms."</p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Conclusion (Optional)</h4>
          <p className="text-blue-800 dark:text-blue-200 mb-2">You may briefly reinforce your opinion in the final sentence.</p>
          <p className="text-blue-800 dark:text-blue-200 italic">Example: "For these reasons, online learning can be just as effective as traditional education."</p>
        </div>

        {/* Template */}
        <ArticleHeading>TOEFL Writing Task 2 Template</ArticleHeading>
        
        <ArticleParagraph>
          Using a template can help you organize your ideas quickly during the exam.
        </ArticleParagraph>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">Simple TOEFL Academic Discussion Template</h3>

        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 mb-6 border-l-4 border-green-500">
          <p className="text-green-800 dark:text-green-200 italic mb-2">
            "I agree with [student name] that ______."
          </p>
          <p className="text-green-800 dark:text-green-200 italic mb-2">
            "While [other student name] suggests that ______, I believe that ______."
          </p>
          <p className="text-green-800 dark:text-green-200 italic mb-2">
            "One reason is that ______."
          </p>
          <p className="text-green-800 dark:text-green-200 italic mb-2">
            "For example, ______."
          </p>
          <p className="text-green-800 dark:text-green-200 italic">
            "Therefore, ______."
          </p>
        </div>

        <ArticleParagraph>
          Templates help you write faster and keep your response organized.
        </ArticleParagraph>

        {/* Sample Question */}
        <ArticleHeading>Example TOEFL Writing Task 2 Question</ArticleHeading>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">Professor's Question</h3>

        <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6 mb-6">
          <p className="text-slate-700 dark:text-slate-300 italic">
            "Some people believe that universities should focus more on practical skills rather than theoretical knowledge. Do you agree or disagree?"
          </p>
        </div>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">Student Response 1</h3>

        <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6 mb-6">
          <p className="text-slate-700 dark:text-slate-300">
            <strong>Alex:</strong> I believe universities should focus more on practical skills because students need real-world experience to succeed in their careers.
          </p>
        </div>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">Student Response 2</h3>

        <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6 mb-6">
          <p className="text-slate-700 dark:text-slate-300">
            <strong>Maria:</strong> I disagree. Theoretical knowledge is important because it helps students understand the deeper concepts behind their field.
          </p>
        </div>

        {/* Sample Answer */}
        <ArticleHeading>Sample High-Scoring TOEFL Writing Task 2 Response</ArticleHeading>

        <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-6 mb-6 border border-emerald-200 dark:border-emerald-800">
          <p className="text-slate-800 dark:text-slate-200 mb-4">
            I agree with Alex that universities should focus more on practical skills. While Maria argues that theoretical knowledge is important, practical experience can better prepare students for their future careers.
          </p>
          <p className="text-slate-800 dark:text-slate-200 mb-4">
            One reason is that many jobs require hands-on skills that cannot be learned only through theory. For example, engineering students benefit greatly from internships and laboratory work because they learn how to apply their knowledge in real-world situations.
          </p>
          <p className="text-slate-800 dark:text-slate-200">
            Additionally, employers often prefer candidates who already have practical experience. Therefore, universities should include more practical training in their programs to help students succeed in the job market.
          </p>
        </div>

        {/* Common Mistakes */}
        <ArticleHeading>Common TOEFL Writing Task 2 Mistakes</ArticleHeading>
        
        <ArticleParagraph>
          Avoid these mistakes if you want a high score.
        </ArticleParagraph>

        <div className="space-y-6 mb-6">
          <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-5 border-l-4 border-red-500">
            <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Writing Too Much</h4>
            <p className="text-red-800 dark:text-red-200">You only have 10 minutes, so keep your response concise and focused.</p>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-5 border-l-4 border-red-500">
            <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Not Giving an Opinion</h4>
            <p className="text-red-800 dark:text-red-200">This task requires a clear opinion. Always state whether you agree or disagree with the idea.</p>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-5 border-l-4 border-red-500">
            <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Ignoring the Student Responses</h4>
            <p className="text-red-800 dark:text-red-200">You should mention or respond to at least one student's idea in your answer.</p>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-5 border-l-4 border-red-500">
            <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Weak Examples</h4>
            <p className="text-red-800 dark:text-red-200">Strong examples make your argument clearer and more convincing.</p>
          </div>
        </div>

        {/* Tips for High Score */}
        <ArticleHeading>Tips to Get a High Score in TOEFL Writing Task 2</ArticleHeading>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">Read the Question Carefully</h3>
        
        <ArticleParagraph>
          Make sure you fully understand the discussion topic before writing.
        </ArticleParagraph>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">Write Clearly and Concisely</h3>
        
        <ArticleParagraph>
          Short, clear sentences are better than long complicated ones.
        </ArticleParagraph>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">Use Academic Vocabulary</h3>
        
        <ArticleParagraph>
          Examples include:
        </ArticleParagraph>

        <ExampleList items={[
          'Additionally',
          'Furthermore',
          'In contrast',
          'For example',
          'Therefore'
        ]} />

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">Manage Your Time</h3>
        
        <ArticleParagraph>
          Use this simple strategy:
        </ArticleParagraph>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-700">
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-600">Step</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-600">Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-4 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700">Read the discussion</td>
                <td className="px-6 py-4 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700">2 minutes</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-750">
                <td className="px-6 py-4 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700">Plan your response</td>
                <td className="px-6 py-4 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700">1 minute</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-slate-700 dark:text-slate-300">Write your answer</td>
                <td className="px-6 py-4 text-slate-700 dark:text-slate-300">7 minutes</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Scoring */}
        <ArticleHeading>How TOEFL Writing Task 2 Is Scored</ArticleHeading>
        
        <ArticleParagraph>
          Your response is graded based on several factors.
        </ArticleParagraph>

        <div className="space-y-4 mb-6">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Development of Ideas</h4>
            <p className="text-slate-600 dark:text-slate-400">Does your response clearly explain your opinion?</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Organization</h4>
            <p className="text-slate-600 dark:text-slate-400">Are your ideas well structured and easy to follow?</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Language Use</h4>
            <p className="text-slate-600 dark:text-slate-400">Examiners evaluate your grammar, vocabulary, and sentence structure.</p>
          </div>
        </div>

        {/* FAQ Section */}
        <ArticleHeading>TOEFL Writing Task 2 – Frequently Asked Questions (FAQ)</ArticleHeading>

        <div className="space-y-6 mb-8">
          <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">What is TOEFL Writing Task 2?</h3>
            <p className="text-slate-600 dark:text-slate-400">TOEFL Writing Task 2 is the Academic Discussion Task in the TOEFL iBT exam. Students read a discussion prompt and two student responses, then write their own opinion about the topic.</p>
          </div>

          <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">How long is TOEFL Writing Task 2?</h3>
            <p className="text-slate-600 dark:text-slate-400">TOEFL Writing Task 2 takes 10 minutes to complete.</p>
          </div>

          <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">How many words should TOEFL Writing Task 2 be?</h3>
            <p className="text-slate-600 dark:text-slate-400">Most responses are 100–150 words.</p>
          </div>

          <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Do I need to mention the students in my response?</h3>
            <p className="text-slate-600 dark:text-slate-400">Yes. Referring to the student responses helps show that you understand the discussion.</p>
          </div>

          <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Is TOEFL Writing Task 2 easier than Task 1?</h3>
            <p className="text-slate-600 dark:text-slate-400">Many students find Task 2 easier because it is shorter and requires only one written response without listening.</p>
          </div>

          <div className="pb-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Can I use personal examples in TOEFL Writing Task 2?</h3>
            <p className="text-slate-600 dark:text-slate-400">Yes. Personal examples can help support your argument and make your response stronger.</p>
          </div>
        </div>

        {/* Final Thoughts */}
        <ArticleHeading>Final Thoughts</ArticleHeading>
        
        <ArticleParagraph>
          TOEFL Writing Task 2 evaluates your ability to participate in an academic discussion and express your ideas clearly.
        </ArticleParagraph>

        <ArticleParagraph>
          To succeed in this task:
        </ArticleParagraph>

        <BulletList items={[
          'Clearly state your opinion',
          'Respond to the discussion',
          'Support your ideas with examples',
          'Write clearly and concisely'
        ]} />

        <ArticleParagraph>
          With practice, you can confidently complete the TOEFL Academic Discussion task within the 10-minute time limit and achieve a strong score in the TOEFL Writing section.
        </ArticleParagraph>

        {/* Related Resources */}
        <ArticleHeading>Related TOEFL Writing Resources</ArticleHeading>
        
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <Link to="/toefl/toefl-writing/toefl-writing-task-1-explained" className="block p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
            <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">TOEFL Writing Task 1 Explained</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Complete guide to the Integrated Writing Task with templates.</p>
          </Link>
          
          <Link to="/toefl/toefl-writing/toefl-writing-templates" className="block p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
            <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">TOEFL Writing Templates</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Ready-to-use templates for both Task 1 and Task 2.</p>
          </Link>
          
          <Link to="/toefl/toefl-writing/toefl-writing-topics" className="block p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
            <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">TOEFL Writing Topics</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">60+ essay questions organized by category for practice.</p>
          </Link>
          
          <Link to="/toefl/toefl-writing/toefl-writing-practice-questions" className="block p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
            <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">TOEFL Writing Practice Questions</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Practice questions with high-scoring sample answers.</p>
          </Link>
        </div>

        <ShareButtons 
          url={typeof window !== 'undefined' ? window.location.href : ''} 
          title="TOEFL Writing Task 2 Explained (Academic Discussion Guide)" 
        />
      </article>
    </div>
  );
};

export default TOEFLWritingTask2ExplainedPage;
