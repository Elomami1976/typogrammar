import React from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading, BulletList } from '../components/ArticleComponents';
import ShareButtons from '../components/ShareButtons';
import SchemaMarkup from '../components/SchemaMarkup';

const TOEFLWritingPracticeQuestionsPage: React.FC = () => {
  usePageMetadata({
    title: 'TOEFL Writing Practice Questions (with Answers) | TypoGrammar',
    description: 'Practice TOEFL Writing with sample questions and high-scoring answers for Task 1 (Integrated Writing) and Task 2 (Academic Discussion).'
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup
        type="Article"
        data={{
          headline: 'TOEFL Writing Practice Questions (with Answers)',
          description: 'TOEFL Writing practice questions with sample answers for Integrated Writing and Academic Discussion tasks.',
          keywords: ['TOEFL Writing practice', 'TOEFL practice questions', 'TOEFL sample answers', 'TOEFL Writing Task 1', 'TOEFL Writing Task 2']
        }}
      />

      <article>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
          TOEFL Writing Practice Questions (with Answers)
        </h1>

        <ArticleParagraph>
          Practicing with real TOEFL writing questions is one of the best ways to improve your writing score. <strong>TOEFL writing practice</strong> helps you learn how to organize ideas, support arguments, and write clearly within the exam time limits.
        </ArticleParagraph>

        <ArticleParagraph>
          In this guide, you will find TOEFL writing practice questions with sample answers for both:
        </ArticleParagraph>

        <BulletList items={[
          'TOEFL Writing Task 1 (Integrated Writing)',
          'TOEFL Writing Task 2 (Academic Discussion)'
        ]} />

        <ArticleParagraph>
          These examples will help you understand how strong TOEFL responses are structured.
        </ArticleParagraph>

        {/* Task 1 Practice Questions */}
        <ArticleHeading>TOEFL Writing Task 1 Practice Questions</ArticleHeading>
        
        <ArticleParagraph>
          In TOEFL Writing Task 1, you must read a passage, listen to a lecture, and write an essay explaining how the lecture responds to the reading.
        </ArticleParagraph>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-800 dark:text-blue-200 font-medium">
            You have 20 minutes to write your response.
          </p>
        </div>

        {/* Practice Question 1 */}
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-4">Practice Question 1</h3>

        <h4 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-3">Reading Passage (Summary)</h4>
        
        <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6 mb-4">
          <p className="text-slate-700 dark:text-slate-300 mb-3">
            The reading passage argues that public transportation should replace private cars in large cities for three main reasons:
          </p>
          <ol className="list-decimal list-inside text-slate-700 dark:text-slate-300 space-y-2">
            <li>It reduces traffic congestion</li>
            <li>It lowers pollution levels</li>
            <li>It is more efficient for commuters</li>
          </ol>
        </div>

        <h4 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-3">Listening Lecture (Summary)</h4>
        
        <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6 mb-4">
          <p className="text-slate-700 dark:text-slate-300 mb-3">
            The professor disagrees with the reading passage and explains that:
          </p>
          <ol className="list-decimal list-inside text-slate-700 dark:text-slate-300 space-y-2">
            <li>Public transportation systems are expensive to build and maintain</li>
            <li>Many people prefer the convenience of private cars</li>
            <li>Public transportation may not reach all areas of a city</li>
          </ol>
        </div>

        <h4 className="text-lg font-medium text-emerald-700 dark:text-emerald-400 mb-3">Sample Answer</h4>
        
        <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-6 mb-8 border border-emerald-200 dark:border-emerald-800">
          <p className="text-slate-800 dark:text-slate-200 mb-4">
            The reading passage argues that public transportation should replace private cars in large cities because it can reduce traffic congestion, lower pollution, and improve commuting efficiency. However, the lecturer disagrees with these claims and explains why they are not entirely convincing.
          </p>
          <p className="text-slate-800 dark:text-slate-200 mb-4">
            First, the reading suggests that public transportation can reduce traffic congestion. In contrast, the lecturer argues that building and maintaining transportation systems such as subways and railways can be extremely expensive.
          </p>
          <p className="text-slate-800 dark:text-slate-200 mb-4">
            Second, the passage claims that public transportation reduces pollution. However, the professor explains that many people still prefer to use private cars because they offer greater convenience and flexibility.
          </p>
          <p className="text-slate-800 dark:text-slate-200">
            Finally, the reading states that public transportation is more efficient for commuters. The lecturer disagrees and points out that transportation systems may not cover all parts of a city, making private cars necessary for many people.
          </p>
        </div>

        {/* Practice Question 2 */}
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-4">Practice Question 2</h3>

        <h4 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-3">Reading Passage (Summary)</h4>
        
        <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6 mb-4">
          <p className="text-slate-700 dark:text-slate-300 mb-3">
            The reading claims that urban farming is an effective solution to food shortages in cities. It provides three reasons:
          </p>
          <ol className="list-decimal list-inside text-slate-700 dark:text-slate-300 space-y-2">
            <li>It increases local food production</li>
            <li>It reduces transportation costs</li>
            <li>It improves environmental sustainability</li>
          </ol>
        </div>

        <h4 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-3">Listening Lecture (Summary)</h4>
        
        <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6 mb-4">
          <p className="text-slate-700 dark:text-slate-300 mb-3">
            The professor disagrees and argues that:
          </p>
          <ol className="list-decimal list-inside text-slate-700 dark:text-slate-300 space-y-2">
            <li>Urban farms produce limited amounts of food</li>
            <li>Many cities lack space for farming</li>
            <li>Urban agriculture may require expensive resources</li>
          </ol>
        </div>

        <h4 className="text-lg font-medium text-emerald-700 dark:text-emerald-400 mb-3">Sample Answer</h4>
        
        <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-6 mb-8 border border-emerald-200 dark:border-emerald-800">
          <p className="text-slate-800 dark:text-slate-200 mb-4">
            The reading passage suggests that urban farming can help solve food shortages in cities. However, the lecturer challenges these claims and explains several limitations of urban agriculture.
          </p>
          <p className="text-slate-800 dark:text-slate-200 mb-4">
            First, the reading argues that urban farming increases local food production. In contrast, the lecturer states that the amount of food produced in cities is often too small to significantly impact overall food supply.
          </p>
          <p className="text-slate-800 dark:text-slate-200 mb-4">
            Second, the passage claims that urban farming reduces transportation costs. However, the professor explains that many cities do not have enough space to support large-scale agriculture.
          </p>
          <p className="text-slate-800 dark:text-slate-200">
            Finally, the reading suggests that urban farming improves environmental sustainability. The lecturer disagrees and argues that urban agriculture can require expensive resources such as artificial lighting and specialized equipment.
          </p>
        </div>

        {/* Task 2 Practice Questions */}
        <ArticleHeading>TOEFL Writing Task 2 Practice Questions</ArticleHeading>
        
        <ArticleParagraph>
          In TOEFL Writing Task 2, you respond to an academic discussion prompt. You will read a question and two student opinions, then write your own response.
        </ArticleParagraph>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-800 dark:text-blue-200 font-medium">
            You have 10 minutes to write your answer.
          </p>
        </div>

        {/* Task 2 Practice Question 1 */}
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-4">Practice Question 1</h3>

        <h4 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-3">Professor's Question</h4>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 mb-4 border-l-4 border-purple-500">
          <p className="text-purple-800 dark:text-purple-200 italic">
            "Some people believe that technology makes people's lives easier, while others think it creates new problems. What is your opinion?"
          </p>
        </div>

        <h4 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-3">Student Response 1</h4>
        
        <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 mb-4">
          <p className="text-slate-700 dark:text-slate-300">
            <strong>Alex:</strong> I think technology improves people's lives because it allows us to communicate quickly and access information easily.
          </p>
        </div>

        <h4 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-3">Student Response 2</h4>
        
        <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 mb-4">
          <p className="text-slate-700 dark:text-slate-300">
            <strong>Maria:</strong> I believe technology can create problems because people become too dependent on devices.
          </p>
        </div>

        <h4 className="text-lg font-medium text-emerald-700 dark:text-emerald-400 mb-3">Sample Answer</h4>
        
        <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-6 mb-8 border border-emerald-200 dark:border-emerald-800">
          <p className="text-slate-800 dark:text-slate-200 mb-4">
            I agree with Alex that technology makes people's lives easier. While Maria raises an important concern about dependence on technology, the advantages of modern technology are significant.
          </p>
          <p className="text-slate-800 dark:text-slate-200 mb-4">
            One reason is that technology allows people to communicate instantly across long distances. For example, video calls enable families and colleagues to stay connected even when they live in different countries.
          </p>
          <p className="text-slate-800 dark:text-slate-200">
            Additionally, technology provides easy access to information, which helps people learn new skills and stay informed about important issues. For these reasons, technology plays a positive role in modern society.
          </p>
        </div>

        {/* Task 2 Practice Question 2 */}
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-4">Practice Question 2</h3>

        <h4 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-3">Professor's Question</h4>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 mb-4 border-l-4 border-purple-500">
          <p className="text-purple-800 dark:text-purple-200 italic">
            "Should universities require students to take courses outside their main field of study?"
          </p>
        </div>

        <h4 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-3">Student Response 1</h4>
        
        <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 mb-4">
          <p className="text-slate-700 dark:text-slate-300">
            <strong>David:</strong> I think universities should require these courses because they help students develop broader knowledge.
          </p>
        </div>

        <h4 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-3">Student Response 2</h4>
        
        <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 mb-4">
          <p className="text-slate-700 dark:text-slate-300">
            <strong>Sara:</strong> I disagree because students should focus only on subjects related to their future careers.
          </p>
        </div>

        <h4 className="text-lg font-medium text-emerald-700 dark:text-emerald-400 mb-3">Sample Answer</h4>
        
        <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-6 mb-8 border border-emerald-200 dark:border-emerald-800">
          <p className="text-slate-800 dark:text-slate-200 mb-4">
            I agree with David that universities should require students to take courses outside their main field of study. While Sara argues that students should focus only on career-related subjects, broader education can provide valuable skills.
          </p>
          <p className="text-slate-800 dark:text-slate-200 mb-4">
            For example, learning subjects such as history or psychology can help students understand society and improve their critical thinking abilities. Additionally, exposure to different fields may help students discover new interests.
          </p>
          <p className="text-slate-800 dark:text-slate-200">
            For these reasons, universities should encourage students to study a variety of subjects.
          </p>
        </div>

        {/* Tips */}
        <ArticleHeading>Tips for Practicing TOEFL Writing Questions</ArticleHeading>

        <div className="space-y-6 mb-6">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Simulate Real Exam Conditions</h4>
            <p className="text-slate-600 dark:text-slate-400 mb-3">Practice writing within the official TOEFL time limits.</p>
            <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1">
              <li>20 minutes for Writing Task 1</li>
              <li>10 minutes for Writing Task 2</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Review Your Essays</h4>
            <p className="text-slate-600 dark:text-slate-400 mb-3">After writing your response, check for:</p>
            <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1">
              <li>Grammar errors</li>
              <li>Sentence clarity</li>
              <li>Vocabulary usage</li>
              <li>Logical organization</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Practice Regularly</h4>
            <p className="text-slate-600 dark:text-slate-400">Consistent practice will help you improve your writing speed and confidence before the TOEFL exam.</p>
          </div>
        </div>

        {/* FAQ Section */}
        <ArticleHeading>TOEFL Writing Practice Questions – FAQ</ArticleHeading>

        <div className="space-y-6 mb-8">
          <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">How can I practice TOEFL writing?</h3>
            <p className="text-slate-600 dark:text-slate-400">You can practice TOEFL writing by responding to sample TOEFL prompts and comparing your essays with high-scoring sample answers.</p>
          </div>

          <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">How many TOEFL writing questions should I practice?</h3>
            <p className="text-slate-600 dark:text-slate-400">Practicing 20–50 writing prompts can significantly improve your TOEFL writing skills.</p>
          </div>

          <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Are TOEFL practice questions similar to real exam questions?</h3>
            <p className="text-slate-600 dark:text-slate-400">Yes. Most practice questions follow the same format and topic types used in the actual TOEFL exam.</p>
          </div>

          <div className="pb-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">What is the best way to improve TOEFL writing?</h3>
            <p className="text-slate-600 dark:text-slate-400">The best way to improve TOEFL writing is to practice regularly, review sample answers, and learn effective essay structures.</p>
          </div>
        </div>

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
          
          <Link to="/toefl/toefl-writing/toefl-writing-templates" className="block p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
            <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">TOEFL Writing Templates</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Ready-to-use templates for both Task 1 and Task 2.</p>
          </Link>
          
          <Link to="/toefl/toefl-writing/toefl-writing-topics" className="block p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
            <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">TOEFL Writing Topics</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">60+ essay questions organized by category for practice.</p>
          </Link>
        </div>

        <ShareButtons 
          url={typeof window !== 'undefined' ? window.location.href : ''} 
          title="TOEFL Writing Practice Questions (with Answers)" 
        />
      </article>
    </div>
  );
};

export default TOEFLWritingPracticeQuestionsPage;
