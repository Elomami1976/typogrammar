import React from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading, BulletList, CodeBlock, ExampleList } from '../components/ArticleComponents';
import ShareButtons from '../components/ShareButtons';
import SchemaMarkup from '../components/SchemaMarkup';

const TOEFLWritingTask1ExplainedPage: React.FC = () => {
  usePageMetadata({
    title: 'TOEFL Writing Task 1 Explained (Integrated Writing Guide) | TypoGrammar',
    description: 'Master TOEFL Writing Task 1 with our complete Integrated Writing guide. Learn the exact format, essay structure, templates, sample answers, and tips to score high.'
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup
        type="Article"
        data={{
          headline: 'TOEFL Writing Task 1 Explained (Integrated Writing Guide)',
          description: 'Complete guide to TOEFL Integrated Writing Task with format, structure, templates, and high-scoring sample essay.',
          keywords: ['TOEFL Writing Task 1', 'TOEFL Integrated Writing', 'TOEFL iBT Writing', 'TOEFL essay template', 'TOEFL Writing tips']
        }}
      />

      <article>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
          TOEFL Writing Task 1 Explained (Integrated Writing Guide)
        </h1>

        <ArticleParagraph>
          If you are preparing for the TOEFL iBT, understanding TOEFL Writing Task 1 is essential. This task is called the <strong>Integrated Writing Task</strong> because it requires you to combine information from a reading passage and a listening lecture.
        </ArticleParagraph>

        <ArticleParagraph>
          In this guide, you will learn:
        </ArticleParagraph>

        <BulletList items={[
          'What TOEFL Writing Task 1 is',
          'The exact test format',
          'Step-by-step strategy',
          'Essay structure',
          'A simple template',
          'A high-scoring sample answer',
          'Common mistakes to avoid'
        ]} />

        <ArticleParagraph>
          By the end of this guide, you will know exactly how to write a strong TOEFL Integrated Writing essay.
        </ArticleParagraph>

        {/* What Is TOEFL Writing Task 1? */}
        <ArticleHeading>What Is TOEFL Writing Task 1?</ArticleHeading>
        
        <ArticleParagraph>
          TOEFL Writing Task 1 is the <strong>Integrated Writing Task</strong>. You must read a short academic passage, listen to a lecture about the same topic, and then write an essay explaining how the lecture relates to the reading.
        </ArticleParagraph>

        <BulletList items={[
          'The lecture usually challenges or contradicts the ideas presented in the reading passage.',
          'Your job is to summarize the relationship between the two sources.'
        ]} />

        <ArticleHeading>Task Overview</ArticleHeading>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-700">
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-600">Section</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-600">Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-4 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700">Reading Passage</td>
                <td className="px-6 py-4 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700">3 minutes</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-750">
                <td className="px-6 py-4 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700">Listening Lecture</td>
                <td className="px-6 py-4 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700">2-3 minutes</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700">Writing Time</td>
                <td className="px-6 py-4 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700">20 minutes</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-750">
                <td className="px-6 py-4 text-slate-700 dark:text-slate-300">Essay Length</td>
                <td className="px-6 py-4 text-slate-700 dark:text-slate-300">150-225 words recommended</td>
              </tr>
            </tbody>
          </table>
        </div>

        <ArticleParagraph>
          You must explain how the speaker responds to the points in the reading.
        </ArticleParagraph>

        {/* TOEFL Integrated Writing Format */}
        <ArticleHeading>TOEFL Integrated Writing Format</ArticleHeading>
        
        <ArticleParagraph>
          The task follows a consistent structure.
        </ArticleParagraph>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">Step 1: Read the Passage</h3>
        
        <ArticleParagraph>
          You will read a short academic passage (about 250-300 words). It usually presents three main points supporting a claim.
        </ArticleParagraph>

        <ArticleParagraph>
          Example topics may include:
        </ArticleParagraph>

        <BulletList items={[
          'Environmental science',
          'History',
          'Biology',
          'Technology',
          'Social science'
        ]} />

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">Step 2: Listen to the Lecture</h3>
        
        <ArticleParagraph>
          After reading, you will hear a lecture from a professor. The professor will usually <strong>disagree</strong> with the reading passage and explain why the arguments are incorrect. Most lectures contain three counterarguments.
        </ArticleParagraph>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">Step 3: Write Your Essay</h3>
        
        <ArticleParagraph>
          You must explain how the lecture challenges the reading.
        </ArticleParagraph>

        <ArticleParagraph>
          Your essay should:
        </ArticleParagraph>

        <BulletList items={[
          'Summarize key ideas',
          'Compare the lecture and reading',
          'Focus on the relationship between them'
        ]} />

        <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 p-4 mb-6">
          <p className="text-teal-800 dark:text-teal-200 font-medium">
            Important: You should not give your personal opinion.
          </p>
        </div>

        {/* Essay Structure */}
        <ArticleHeading>TOEFL Writing Task 1 Essay Structure</ArticleHeading>
        
        <ArticleParagraph>
          A clear structure helps your essay score higher.
        </ArticleParagraph>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">Paragraph Structure</h3>

        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-6">
          <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Paragraph 1, Introduction</p>
          <p className="text-blue-800 dark:text-blue-200 mb-4">Explain the relationship between the reading and the lecture.</p>
          
          <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Paragraph 2, First Point</p>
          <p className="text-blue-800 dark:text-blue-200 mb-4">Explain how the lecture challenges the first idea in the reading.</p>
          
          <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Paragraph 3, Second Point</p>
          <p className="text-blue-800 dark:text-blue-200 mb-4">Explain how the lecture contradicts the second idea.</p>
          
          <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Paragraph 4, Third Point</p>
          <p className="text-blue-800 dark:text-blue-200">Explain the third disagreement.</p>
        </div>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">Simple Structure Example</h3>

        <CodeBlock>
{`Introduction
Point 1: Reading vs Lecture
Point 2: Reading vs Lecture
Point 3: Reading vs Lecture`}
        </CodeBlock>

        <ArticleParagraph>
          This structure is used in most high-scoring TOEFL essays.
        </ArticleParagraph>

        {/* Template */}
        <ArticleHeading>TOEFL Writing Task 1 Template</ArticleHeading>
        
        <ArticleParagraph>
          Using a template helps you write faster and stay organized.
        </ArticleParagraph>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">Introduction Template</h3>

        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 mb-6 border-l-4 border-green-500">
          <p className="text-green-800 dark:text-green-200 italic">
            "The reading passage discusses ______.<br/>
            However, the lecturer challenges these ideas and argues that ______."
          </p>
        </div>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">Body Paragraph Template</h3>

        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 mb-6 border-l-4 border-green-500">
          <p className="text-green-800 dark:text-green-200 italic mb-4">
            "First, the reading claims that ______.<br/>
            However, the lecturer explains that ______."
          </p>
          <p className="text-green-800 dark:text-green-200 italic mb-4">
            "Second, the passage states that ______.<br/>
            In contrast, the speaker argues that ______."
          </p>
          <p className="text-green-800 dark:text-green-200 italic">
            "Finally, the reading suggests that ______.<br/>
            The lecturer disagrees and says that ______."
          </p>
        </div>

        {/* Sample Question and Essay */}
        <ArticleHeading>Sample TOEFL Integrated Writing Question</ArticleHeading>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">Reading Passage (Summary)</h3>

        <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6 mb-6">
          <p className="text-slate-700 dark:text-slate-300 mb-3">The reading claims that online education is better than traditional classroom learning for three reasons:</p>
          <ol className="list-decimal list-inside text-slate-700 dark:text-slate-300 space-y-2">
            <li>It is cheaper.</li>
            <li>It provides flexible schedules.</li>
            <li>It offers access to many courses.</li>
          </ol>
        </div>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">Listening Lecture (Summary)</h3>

        <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6 mb-6">
          <p className="text-slate-700 dark:text-slate-300 mb-3">The professor disagrees and explains that:</p>
          <ol className="list-decimal list-inside text-slate-700 dark:text-slate-300 space-y-2">
            <li>Online courses still require expensive technology.</li>
            <li>Students often struggle with time management.</li>
            <li>Many online courses lack interaction.</li>
          </ol>
        </div>

        <ArticleHeading>High-Scoring Sample Essay</ArticleHeading>

        <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-6 mb-6 border border-emerald-200 dark:border-emerald-800">
          <p className="text-slate-800 dark:text-slate-200 mb-4">
            The reading passage argues that online education is superior to traditional classroom learning for several reasons. However, the lecturer disagrees with this view and explains why these arguments are not convincing.
          </p>
          <p className="text-slate-800 dark:text-slate-200 mb-4">
            First, the reading claims that online education is cheaper than traditional education. In contrast, the lecturer explains that students still need expensive equipment such as computers and reliable internet access, which can increase costs.
          </p>
          <p className="text-slate-800 dark:text-slate-200 mb-4">
            Second, the passage states that online learning offers flexible schedules. However, the professor argues that this flexibility can actually cause problems. Many students struggle with time management and often delay their coursework.
          </p>
          <p className="text-slate-800 dark:text-slate-200 mb-4">
            Finally, the reading suggests that online education provides access to many different courses. The lecturer disagrees and explains that many online classes lack meaningful interaction between students and instructors, which can reduce learning quality.
          </p>
          <p className="text-slate-800 dark:text-slate-200">
            Overall, the lecturer challenges each of the points presented in the reading passage and argues that online education is not necessarily better than traditional classroom learning.
          </p>
        </div>

        {/* Common Mistakes */}
        <ArticleHeading>Common TOEFL Integrated Writing Mistakes</ArticleHeading>
        
        <ArticleParagraph>
          Avoid these common mistakes if you want a high score.
        </ArticleParagraph>

        <div className="space-y-6 mb-6">
          <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-5 border-l-4 border-red-500">
            <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">1. Giving Your Personal Opinion</h4>
            <p className="text-red-800 dark:text-red-200">This task is not an opinion essay. Your goal is to summarize the relationship between the reading and lecture.</p>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-5 border-l-4 border-red-500">
            <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">2. Ignoring the Lecture</h4>
            <p className="text-red-800 dark:text-red-200">Many students focus too much on the reading. The lecture is the most important source.</p>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-5 border-l-4 border-red-500">
            <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">3. Copying Sentences from the Reading</h4>
            <p className="text-red-800 dark:text-red-200">The TOEFL test checks your ability to paraphrase. Always rewrite ideas using your own words.</p>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-5 border-l-4 border-red-500">
            <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">4. Writing Too Little</h4>
            <p className="text-red-800 dark:text-red-200">Although the minimum is about 150 words, most high-scoring essays contain 180-220 words.</p>
          </div>
        </div>

        {/* Tips for High Score */}
        <ArticleHeading>Tips for a High Score in TOEFL Writing Task 1</ArticleHeading>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">Take Clear Notes</h3>
        
        <ArticleParagraph>
          During the lecture, write down:
        </ArticleParagraph>

        <BulletList items={[
          'Main idea',
          '3 counterarguments',
          'Key examples'
        ]} />

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">Focus on the Relationship</h3>
        
        <ArticleParagraph>
          Always show how the lecture responds to the reading. Use phrases like:
        </ArticleParagraph>

        <ExampleList items={[
          'The lecturer contradicts the reading by explaining...',
          'The professor challenges the claim that...'
        ]} />

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">Use Transition Words</h3>
        
        <ArticleParagraph>
          Good connectors improve clarity. Examples:
        </ArticleParagraph>

        <ExampleList items={[
          'However',
          'In contrast',
          'Furthermore',
          'Additionally'
        ]} />

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">Paraphrase the Reading</h3>
        
        <ArticleParagraph>
          Instead of copying text, rewrite ideas using different vocabulary.
        </ArticleParagraph>

        <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 mb-6">
          <p className="text-slate-700 dark:text-slate-300 mb-2"><strong>Reading:</strong> The policy is beneficial.</p>
          <p className="text-slate-700 dark:text-slate-300"><strong>Paraphrase:</strong> The passage suggests the policy has positive effects.</p>
        </div>

        {/* Scoring */}
        <ArticleHeading>TOEFL Writing Task 1 Scoring</ArticleHeading>
        
        <ArticleParagraph>
          Your essay is graded on a <strong>0-5 scale</strong> based on:
        </ArticleParagraph>

        <div className="space-y-4 mb-6">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-1">1. Content Accuracy</h4>
            <p className="text-slate-600 dark:text-slate-400">Did you correctly explain the relationship between sources?</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-1">2. Organization</h4>
            <p className="text-slate-600 dark:text-slate-400">Is your essay clear and logical?</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-1">3. Language Use</h4>
            <p className="text-slate-600 dark:text-slate-400">Grammar, vocabulary, and sentence structure.</p>
          </div>
        </div>

        {/* Final Advice */}
        <ArticleHeading>Final Advice for TOEFL Writing Task 1</ArticleHeading>
        
        <ArticleParagraph>
          To succeed in TOEFL Integrated Writing:
        </ArticleParagraph>

        <BulletList items={[
          'Practice summarizing lectures',
          'Learn a reliable essay template',
          'Focus on comparing the reading and listening',
          'Improve your academic vocabulary'
        ]} />

        <ArticleParagraph>
          With consistent practice, you can write a clear and well-organized essay in under 20 minutes.
        </ArticleParagraph>

        {/* FAQ Section */}
        <ArticleHeading>TOEFL Writing Task 1 - Frequently Asked Questions (FAQ)</ArticleHeading>

        <div className="space-y-6 mb-8">
          <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">What is TOEFL Writing Task 1?</h3>
            <p className="text-slate-600 dark:text-slate-400">TOEFL Writing Task 1 is the Integrated Writing Task in the TOEFL iBT exam. Test takers read a short academic passage, listen to a lecture about the same topic, and then write an essay explaining how the lecture relates to the reading.</p>
          </div>

          <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">How long is TOEFL Writing Task 1?</h3>
            <p className="text-slate-600 dark:text-slate-400">TOEFL Writing Task 1 lasts 20 minutes. Students must read a passage, listen to a lecture, and write an essay summarizing the relationship between the two sources.</p>
          </div>

          <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">How many words should TOEFL Writing Task 1 be?</h3>
            <p className="text-slate-600 dark:text-slate-400">The recommended length for TOEFL Writing Task 1 is 150-225 words. However, many high-scoring essays are around 180-220 words.</p>
          </div>

          <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Do I need to give my opinion in TOEFL Writing Task 1?</h3>
            <p className="text-slate-600 dark:text-slate-400">No. In TOEFL Integrated Writing, you should not give your personal opinion. Your task is to summarize and compare the information from the reading passage and the lecture.</p>
          </div>

          <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">How is TOEFL Writing Task 1 scored?</h3>
            <p className="text-slate-600 dark:text-slate-400">TOEFL Writing Task 1 is scored on a 0-5 scale. The score is based on accuracy of content, organization and clarity, and grammar and vocabulary usage.</p>
          </div>

          <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">What is the difference between TOEFL Writing Task 1 and Task 2?</h3>
            <p className="text-slate-600 dark:text-slate-400">TOEFL Writing Task 1 is the Integrated Writing Task, where you combine information from reading and listening sources. TOEFL Writing Task 2 is the Academic Discussion Task, where you write a short response to a discussion topic.</p>
          </div>

          <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Is TOEFL Writing Task 1 difficult?</h3>
            <p className="text-slate-600 dark:text-slate-400">Many students find TOEFL Writing Task 1 challenging because it requires listening, reading, and writing skills at the same time. However, using a clear essay structure and template can make the task much easier.</p>
          </div>

          <div className="pb-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">What is the best structure for TOEFL Integrated Writing?</h3>
            <p className="text-slate-600 dark:text-slate-400">A common structure is: Introduction paragraph, Body paragraph 1 (first point), Body paragraph 2 (second point), Body paragraph 3 (third point). This structure helps present the relationship between the reading and the lecture clearly.</p>
          </div>
        </div>

        {/* Related Resources */}
        <ArticleHeading>Related TOEFL Writing Resources</ArticleHeading>
        
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <Link to="/toefl/toefl-writing/toefl-writing-task-2-explained/" className="block p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
            <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">TOEFL Writing Task 2 Explained</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Master the Academic Discussion Task with templates and sample answers.</p>
          </Link>
          
          <Link to="/toefl/toefl-writing/toefl-writing-templates/" className="block p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
            <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">TOEFL Writing Templates</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Ready-to-use templates for both Task 1 and Task 2.</p>
          </Link>
          
          <Link to="/toefl/toefl-writing/toefl-writing-topics/" className="block p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
            <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">TOEFL Writing Topics</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">60+ essay questions organized by category for practice.</p>
          </Link>
          
          <Link to="/toefl/toefl-writing/toefl-writing-practice-questions/" className="block p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
            <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">TOEFL Writing Practice Questions</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Practice questions with high-scoring sample answers.</p>
          </Link>
        </div>

        <ShareButtons 
          url={typeof window !== 'undefined' ? window.location.href : ''} 
          title="TOEFL Writing Task 1 Explained (Integrated Writing Guide)" 
        />
      </article>
    </div>
  );
};

export default TOEFLWritingTask1ExplainedPage;
