import React from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading, BulletList, ExampleList } from '../components/ArticleComponents';
import ShareButtons from '../components/ShareButtons';
import SchemaMarkup from '../components/SchemaMarkup';

const TOEFLWritingTemplatesPage: React.FC = () => {
  usePageMetadata({
    title: 'TOEFL Writing Templates (Task 1 + Task 2) | TypoGrammar',
    description: 'Master TOEFL Writing with proven templates for Task 1 (Integrated Writing) and Task 2 (Academic Discussion). Easy essay structures for high scores.'
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup
        type="Article"
        data={{
          headline: 'TOEFL Writing Templates (Task 1 + Task 2)',
          description: 'Complete TOEFL Writing templates for Integrated Writing and Academic Discussion tasks with examples and tips.',
          keywords: ['TOEFL Writing templates', 'TOEFL essay template', 'TOEFL Task 1 template', 'TOEFL Task 2 template', 'TOEFL Writing structure']
        }}
      />

      <article>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
          TOEFL Writing Templates (Task 1 + Task 2)
        </h1>
        
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          Easy Essay Structures for High TOEFL Writing Scores
        </p>

        <ArticleParagraph>
          If you are preparing for the TOEFL iBT, using <strong>TOEFL writing templates</strong> can help you write faster, stay organized, and achieve a higher score.
        </ArticleParagraph>

        <ArticleParagraph>
          Templates provide a clear structure for your essay, so you do not waste time thinking about how to organize your ideas during the exam.
        </ArticleParagraph>

        <ArticleParagraph>
          In this guide, you will learn:
        </ArticleParagraph>

        <BulletList items={[
          'TOEFL Writing Task 1 template (Integrated Writing)',
          'TOEFL Writing Task 2 template (Academic Discussion)',
          'High-scoring sentence structures',
          'Useful transition phrases',
          'Tips for using templates effectively'
        ]} />

        <ArticleParagraph>
          These templates are designed to help you write clear, well-organized responses in limited time.
        </ArticleParagraph>

        {/* Why Use Templates */}
        <ArticleHeading>Why Use TOEFL Writing Templates?</ArticleHeading>
        
        <ArticleParagraph>
          Many high-scoring TOEFL test takers use templates because they:
        </ArticleParagraph>

        <BulletList items={[
          'Save time during the exam',
          'Improve essay organization',
          'Reduce stress while writing',
          'Help you include all important information'
        ]} />

        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 mb-6">
          <p className="text-amber-800 dark:text-amber-200">
            <strong>Important:</strong> Templates should be used as guidelines, not memorized essays. You still need to adapt them to each question.
          </p>
        </div>

        {/* Task 1 Template */}
        <ArticleHeading>TOEFL Writing Task 1 Template (Integrated Writing)</ArticleHeading>
        
        <ArticleParagraph>
          In TOEFL Writing Task 1, you must summarize the relationship between a reading passage and a listening lecture.
        </ArticleParagraph>

        <ArticleParagraph>
          Your essay should explain how the lecture supports, contradicts, or challenges the ideas in the reading.
        </ArticleParagraph>

        <ArticleParagraph>
          A strong TOEFL Integrated Writing essay usually contains <strong>four paragraphs</strong>.
        </ArticleParagraph>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">Introduction Template</h3>

        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 mb-6 border-l-4 border-green-500">
          <p className="text-green-800 dark:text-green-200 italic">
            "The reading passage discusses ______. However, the lecturer challenges these claims and argues that ______."
          </p>
        </div>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">Body Paragraph 1 Template</h3>

        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 mb-6 border-l-4 border-green-500">
          <p className="text-green-800 dark:text-green-200 italic mb-2">
            "First, the reading states that ______."
          </p>
          <p className="text-green-800 dark:text-green-200 italic mb-2">
            "However, the lecturer explains that ______."
          </p>
          <p className="text-green-800 dark:text-green-200 italic">
            "According to the lecture, ______."
          </p>
        </div>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">Body Paragraph 2 Template</h3>

        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 mb-6 border-l-4 border-green-500">
          <p className="text-green-800 dark:text-green-200 italic mb-2">
            "Second, the passage claims that ______."
          </p>
          <p className="text-green-800 dark:text-green-200 italic mb-2">
            "In contrast, the professor argues that ______."
          </p>
          <p className="text-green-800 dark:text-green-200 italic">
            "Furthermore, the lecturer explains that ______."
          </p>
        </div>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">Body Paragraph 3 Template</h3>

        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 mb-6 border-l-4 border-green-500">
          <p className="text-green-800 dark:text-green-200 italic mb-2">
            "Finally, the reading suggests that ______."
          </p>
          <p className="text-green-800 dark:text-green-200 italic mb-2">
            "The lecturer disagrees and states that ______."
          </p>
          <p className="text-green-800 dark:text-green-200 italic">
            "As a result, ______."
          </p>
        </div>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">Example Using the Template</h3>

        <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-6 mb-6 border border-emerald-200 dark:border-emerald-800">
          <p className="text-slate-800 dark:text-slate-200 mb-4">
            The reading passage discusses the benefits of online education. However, the lecturer challenges these claims and explains why online learning may not always be effective.
          </p>
          <p className="text-slate-800 dark:text-slate-200 mb-4">
            First, the reading states that online education is cheaper than traditional education. However, the lecturer explains that students must still pay for technology such as computers and internet access.
          </p>
          <p className="text-slate-800 dark:text-slate-200 mb-4">
            Second, the passage claims that online learning offers flexible schedules. In contrast, the professor argues that many students struggle with time management and procrastination.
          </p>
          <p className="text-slate-800 dark:text-slate-200">
            Finally, the reading suggests that online courses provide access to many subjects. The lecturer disagrees and states that many online classes lack meaningful interaction between students and teachers.
          </p>
        </div>

        {/* Task 2 Template */}
        <ArticleHeading>TOEFL Writing Task 2 Template (Academic Discussion)</ArticleHeading>
        
        <ArticleParagraph>
          TOEFL Writing Task 2 is the <strong>Academic Discussion Task</strong>. You must respond to a discussion question and provide your opinion.
        </ArticleParagraph>

        <ArticleParagraph>
          Your response should:
        </ArticleParagraph>

        <BulletList items={[
          'Express your opinion',
          "Refer to other students' ideas",
          'Provide reasons or examples'
        ]} />

        <ArticleParagraph>
          Most responses are <strong>100–150 words</strong>.
        </ArticleParagraph>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">Simple TOEFL Discussion Template</h3>

        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-6 border-l-4 border-blue-500">
          <p className="text-blue-800 dark:text-blue-200 italic mb-2">
            "I agree with [student name] that ______."
          </p>
          <p className="text-blue-800 dark:text-blue-200 italic mb-2">
            "While [other student name] argues that ______, I believe that ______."
          </p>
          <p className="text-blue-800 dark:text-blue-200 italic mb-2">
            "One reason for this is that ______."
          </p>
          <p className="text-blue-800 dark:text-blue-200 italic mb-2">
            "For example, ______."
          </p>
          <p className="text-blue-800 dark:text-blue-200 italic">
            "Therefore, ______."
          </p>
        </div>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">Alternative TOEFL Writing Task 2 Template</h3>

        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-6 border-l-4 border-blue-500">
          <p className="text-blue-800 dark:text-blue-200 italic mb-2">
            "In my opinion, ______."
          </p>
          <p className="text-blue-800 dark:text-blue-200 italic mb-2">
            "I understand why [student name] believes that ______. However, I think that ______."
          </p>
          <p className="text-blue-800 dark:text-blue-200 italic mb-2">
            "One important reason is that ______."
          </p>
          <p className="text-blue-800 dark:text-blue-200 italic mb-2">
            "Additionally, ______."
          </p>
          <p className="text-blue-800 dark:text-blue-200 italic">
            "For these reasons, ______."
          </p>
        </div>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">Example Response Using the Template</h3>

        <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-6 mb-6 border border-emerald-200 dark:border-emerald-800">
          <p className="text-slate-800 dark:text-slate-200 mb-4">
            I agree with Alex that universities should focus more on practical skills. While Maria argues that theoretical knowledge is more important, practical experience can better prepare students for real-world jobs.
          </p>
          <p className="text-slate-800 dark:text-slate-200 mb-4">
            One reason is that many careers require hands-on skills. For example, engineering students benefit greatly from internships where they can apply what they have learned.
          </p>
          <p className="text-slate-800 dark:text-slate-200">
            Additionally, practical training helps students understand how their knowledge works in real situations. For these reasons, universities should emphasize practical education.
          </p>
        </div>

        {/* Transition Words */}
        <ArticleHeading>Useful Transition Words for TOEFL Writing</ArticleHeading>
        
        <ArticleParagraph>
          Using transition words makes your essay clearer and more organized.
        </ArticleParagraph>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Contrast</h4>
            <ExampleList items={['However', 'In contrast', 'On the other hand']} />
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Adding Ideas</h4>
            <ExampleList items={['Furthermore', 'Additionally', 'Moreover']} />
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Examples</h4>
            <ExampleList items={['For example', 'For instance', 'Such as']} />
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Conclusions</h4>
            <ExampleList items={['Therefore', 'As a result', 'In conclusion']} />
          </div>
        </div>

        {/* Tips */}
        <ArticleHeading>Tips for Using TOEFL Writing Templates</ArticleHeading>

        <div className="space-y-6 mb-6">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Do Not Memorize Entire Essays</h4>
            <p className="text-slate-600 dark:text-slate-400">Memorizing full essays can make your writing sound unnatural. Instead, memorize structures and sentence patterns.</p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Adapt the Template to the Question</h4>
            <p className="text-slate-600 dark:text-slate-400">Every TOEFL question is different, so make sure your response fits the topic.</p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Practice With Real TOEFL Questions</h4>
            <p className="text-slate-600 dark:text-slate-400">Practice using templates with real TOEFL prompts to become comfortable with the structure.</p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Keep Your Writing Clear and Simple</h4>
            <p className="text-slate-600 dark:text-slate-400">Short, clear sentences are often better than long complicated ones.</p>
          </div>
        </div>

        {/* Common Mistakes */}
        <ArticleHeading>Common TOEFL Writing Template Mistakes</ArticleHeading>

        <div className="space-y-6 mb-6">
          <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-5 border-l-4 border-red-500">
            <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Using Templates Without Understanding Them</h4>
            <p className="text-red-800 dark:text-red-200">You should understand what each sentence in the template means.</p>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-5 border-l-4 border-red-500">
            <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Copying the Same Phrases Too Often</h4>
            <p className="text-red-800 dark:text-red-200">Examiners may notice if your writing sounds repetitive. Try to vary your language when possible.</p>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-5 border-l-4 border-red-500">
            <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Forgetting to Add Your Own Ideas</h4>
            <p className="text-red-800 dark:text-red-200">Templates provide structure, but your ideas and explanations are still the most important part of the essay.</p>
          </div>
        </div>

        {/* FAQ Section */}
        <ArticleHeading>TOEFL Writing Templates – Frequently Asked Questions (FAQ)</ArticleHeading>

        <div className="space-y-6 mb-8">
          <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">What are TOEFL writing templates?</h3>
            <p className="text-slate-600 dark:text-slate-400">TOEFL writing templates are structured sentence patterns that help students organize their essays quickly during the TOEFL exam.</p>
          </div>

          <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Are TOEFL writing templates allowed?</h3>
            <p className="text-slate-600 dark:text-slate-400">Yes. Many TOEFL teachers recommend using templates because they help students organize their responses more effectively.</p>
          </div>

          <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Should I memorize TOEFL templates?</h3>
            <p className="text-slate-600 dark:text-slate-400">You should memorize basic structures, but avoid memorizing entire essays. Adapt the template to each question.</p>
          </div>

          <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Do templates help increase TOEFL writing scores?</h3>
            <p className="text-slate-600 dark:text-slate-400">Yes. Templates can improve your score because they help create clear organization and logical flow, which are important scoring criteria.</p>
          </div>

          <div className="pb-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Which TOEFL writing template is best?</h3>
            <p className="text-slate-600 dark:text-slate-400">The best TOEFL template is one that is simple, flexible, and easy to adapt to different topics.</p>
          </div>
        </div>

        {/* Final Thoughts */}
        <ArticleHeading>Final Thoughts</ArticleHeading>
        
        <ArticleParagraph>
          TOEFL writing templates are powerful tools that can help you write faster, stay organized, and produce clear essays during the exam.
        </ArticleParagraph>

        <ArticleParagraph>
          To use them effectively:
        </ArticleParagraph>

        <BulletList items={[
          'Learn the basic structure for each task',
          'Practice adapting templates to different topics',
          'Focus on clear explanations and examples'
        ]} />

        <ArticleParagraph>
          With practice, these templates can help you confidently complete both TOEFL Writing Task 1 and Task 2 and achieve a strong score in the TOEFL Writing section.
        </ArticleParagraph>

        {/* Related Resources */}
        <ArticleHeading>Related TOEFL Writing Resources</ArticleHeading>
        
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <Link to="/toefl/toefl-writing/toefl-writing-task-1-explained" className="block p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
            <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">TOEFL Writing Task 1 Explained</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Complete guide to the Integrated Writing Task.</p>
          </Link>
          
          <Link to="/toefl/toefl-writing/toefl-writing-task-2-explained" className="block p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
            <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">TOEFL Writing Task 2 Explained</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Master the Academic Discussion Task with examples.</p>
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
          title="TOEFL Writing Templates (Task 1 + Task 2)" 
        />
      </article>
    </div>
  );
};

export default TOEFLWritingTemplatesPage;
