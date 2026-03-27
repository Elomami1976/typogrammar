import React from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading, BulletList } from '../components/ArticleComponents';
import ShareButtons from '../components/ShareButtons';
import SchemaMarkup from '../components/SchemaMarkup';

const TOEFLWritingTopicsPage: React.FC = () => {
  usePageMetadata({
    title: 'TOEFL Writing Topics (60 Essay Questions for Practice) | TypoGrammar',
    description: 'Practice with 60+ TOEFL writing topics covering education, technology, society, environment, and business. Improve your TOEFL essay writing skills.'
  });

  const educationTopics = [
    'Should universities focus more on practical skills or theoretical knowledge?',
    'Do students learn better in online classes or traditional classrooms?',
    'Should college education be free for everyone?',
    'Is homework necessary for students to succeed academically?',
    'Should schools require students to study foreign languages?',
    'Are group projects more effective than individual assignments?',
    'Should universities require students to attend classes?',
    'Is studying abroad beneficial for students?',
    'Should students choose their own courses?',
    'Is technology improving education?'
  ];

  const technologyTopics = [
    'Has technology improved communication between people?',
    "Do smartphones make people's lives better or more complicated?",
    'Should children have limited access to technology?',
    'Is artificial intelligence beneficial for society?',
    'Do social media platforms improve relationships?',
    'Will technology replace many jobs in the future?',
    'Is online learning as effective as traditional education?',
    'Should schools allow students to use smartphones in class?',
    'Does technology make people less social?',
    'Will robots become important in everyday life?'
  ];

  const societyTopics = [
    'Is it better to live in a big city or a small town?',
    'Should governments invest more in public transportation?',
    'Are people today happier than in the past?',
    'Is it important for people to volunteer in their communities?',
    'Should governments provide free healthcare?',
    'Are celebrities good role models for young people?',
    'Should governments regulate social media platforms?',
    'Do people spend too much time working?',
    'Is it important for people to travel and learn about other cultures?',
    'Are modern lifestyles healthier than past lifestyles?'
  ];

  const environmentTopics = [
    'Should governments do more to protect the environment?',
    'Is climate change the biggest global challenge today?',
    'Should plastic products be banned?',
    'Is renewable energy the best solution for future energy needs?',
    'Should cities create more public parks?',
    'Are individuals responsible for protecting the environment?',
    'Should companies be required to reduce pollution?',
    'Is recycling an effective solution for environmental problems?',
    'Should governments limit car use in cities?',
    'Are environmental laws too strict?'
  ];

  const workTopics = [
    'Is it better to work for a large company or a small company?',
    'Should employees work remotely or in offices?',
    'Is job satisfaction more important than salary?',
    'Should companies allow flexible work schedules?',
    'Is leadership an important skill for employees?',
    'Should companies provide training programs for workers?',
    'Is teamwork important in the workplace?',
    'Should companies focus more on employee happiness?',
    'Is starting a business better than working for a company?',
    'Should companies reduce working hours?'
  ];

  const advancedTopics = [
    'Should governments invest more in scientific research?',
    'Is globalization beneficial for developing countries?',
    'Should universities require students to study ethics?',
    'Is economic growth more important than environmental protection?',
    'Should governments regulate artificial intelligence?',
    'Is space exploration worth the cost?',
    'Should governments invest more in public transportation?',
    'Is cultural diversity beneficial for societies?',
    'Should governments support the arts?',
    'Should education systems focus more on creativity?'
  ];

  const TopicList = ({ topics, startNumber }: { topics: string[]; startNumber: number }) => (
    <ol className="list-decimal list-inside space-y-3 mb-6" start={startNumber}>
      {topics.map((topic, index) => (
        <li key={index} className="text-slate-700 dark:text-slate-300 pl-2">
          {topic}
        </li>
      ))}
    </ol>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup
        type="Article"
        data={{
          headline: 'TOEFL Writing Topics (60 Essay Questions for Practice)',
          description: 'Practice with 60+ TOEFL writing topics covering education, technology, society, environment, and business.',
          keywords: ['TOEFL Writing topics', 'TOEFL essay questions', 'TOEFL practice topics', 'TOEFL Writing practice', 'TOEFL essay prompts']
        }}
      />

      <article>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
          TOEFL Writing Topics (60 Essay Questions for Practice)
        </h1>

        <ArticleParagraph>
          If you are preparing for the TOEFL iBT, practicing with real <strong>TOEFL writing topics</strong> is one of the best ways to improve your writing skills.
        </ArticleParagraph>

        <ArticleParagraph>
          TOEFL essays often focus on academic and everyday topics such as education, technology, society, and the environment. By practicing different types of questions, you can learn how to organize your ideas and write clear responses during the exam.
        </ArticleParagraph>

        <ArticleParagraph>
          In this guide, you will find <strong>60+ TOEFL writing topics</strong> that you can use for practice. These questions are similar to the prompts used in the TOEFL exam.
        </ArticleParagraph>

        {/* What Are TOEFL Writing Topics */}
        <ArticleHeading>What Are TOEFL Writing Topics?</ArticleHeading>
        
        <ArticleParagraph>
          TOEFL writing topics are the questions used in the TOEFL Writing section. They are designed to test your ability to:
        </ArticleParagraph>

        <BulletList items={[
          'Express your opinion clearly',
          'Support ideas with reasons and examples',
          'Organize your response logically'
        ]} />

        <ArticleParagraph>
          Most topics ask you to agree or disagree with a statement or discuss a specific issue.
        </ArticleParagraph>

        {/* Common Categories */}
        <ArticleHeading>Common TOEFL Writing Topic Categories</ArticleHeading>
        
        <ArticleParagraph>
          TOEFL writing prompts usually fall into several common categories:
        </ArticleParagraph>

        <BulletList items={[
          'Education',
          'Technology',
          'Environment',
          'Society',
          'Work and business',
          'Government and policy'
        ]} />

        <ArticleParagraph>
          Practicing questions from these categories can help you prepare for the exam.
        </ArticleParagraph>

        {/* Education Topics */}
        <ArticleHeading>TOEFL Writing Topics About Education</ArticleHeading>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-6">
          <TopicList topics={educationTopics} startNumber={1} />
        </div>

        {/* Technology Topics */}
        <ArticleHeading>TOEFL Writing Topics About Technology</ArticleHeading>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 mb-6">
          <TopicList topics={technologyTopics} startNumber={11} />
        </div>

        {/* Society Topics */}
        <ArticleHeading>TOEFL Writing Topics About Society</ArticleHeading>
        
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 mb-6">
          <TopicList topics={societyTopics} startNumber={21} />
        </div>

        {/* Environment Topics */}
        <ArticleHeading>TOEFL Writing Topics About the Environment</ArticleHeading>
        
        <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-6 mb-6">
          <TopicList topics={environmentTopics} startNumber={31} />
        </div>

        {/* Work and Business Topics */}
        <ArticleHeading>TOEFL Writing Topics About Work and Business</ArticleHeading>
        
        <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6 mb-6">
          <TopicList topics={workTopics} startNumber={41} />
        </div>

        {/* Advanced Topics */}
        <ArticleHeading>Advanced TOEFL Writing Topics</ArticleHeading>
        
        <ArticleParagraph>
          These questions are similar to more complex academic discussion topics.
        </ArticleParagraph>

        <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6 mb-6">
          <TopicList topics={advancedTopics} startNumber={51} />
        </div>

        {/* How to Practice */}
        <ArticleHeading>How to Practice TOEFL Writing Topics</ArticleHeading>
        
        <ArticleParagraph>
          Practicing effectively can help you improve faster.
        </ArticleParagraph>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">Set a Time Limit</h3>
        
        <ArticleParagraph>
          Try to write your response within the same time limits as the TOEFL exam.
        </ArticleParagraph>

        <BulletList items={[
          'Writing Task 1: 20 minutes',
          'Writing Task 2: 10 minutes'
        ]} />

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">Use a Clear Essay Structure</h3>
        
        <ArticleParagraph>
          A typical TOEFL essay structure includes:
        </ArticleParagraph>

        <div className="bg-white dark:bg-slate-800 rounded-lg p-5 border border-slate-200 dark:border-slate-700 mb-6">
          <div className="space-y-2">
            <div className="flex items-center">
              <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 flex items-center justify-center text-sm font-medium mr-3">1</span>
              <span className="text-slate-700 dark:text-slate-300">Introduction</span>
            </div>
            <div className="flex items-center">
              <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 flex items-center justify-center text-sm font-medium mr-3">2</span>
              <span className="text-slate-700 dark:text-slate-300">Body paragraph 1</span>
            </div>
            <div className="flex items-center">
              <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 flex items-center justify-center text-sm font-medium mr-3">3</span>
              <span className="text-slate-700 dark:text-slate-300">Body paragraph 2</span>
            </div>
            <div className="flex items-center">
              <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 flex items-center justify-center text-sm font-medium mr-3">4</span>
              <span className="text-slate-700 dark:text-slate-300">Conclusion</span>
            </div>
          </div>
        </div>

        <ArticleParagraph>
          This structure helps organize your ideas clearly.
        </ArticleParagraph>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">Review Your Writing</h3>
        
        <ArticleParagraph>
          After writing your essay, check:
        </ArticleParagraph>

        <BulletList items={[
          'Grammar mistakes',
          'Sentence clarity',
          'Vocabulary usage',
          'Organization of ideas'
        ]} />

        {/* Tips */}
        <ArticleHeading>Tips for TOEFL Writing Practice</ArticleHeading>

        <div className="space-y-6 mb-6">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Practice Different Topics</h4>
            <p className="text-slate-600 dark:text-slate-400">The TOEFL exam can include many different topics, so practicing a variety of questions is important.</p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Use Examples</h4>
            <p className="text-slate-600 dark:text-slate-400">Examples make your arguments stronger and easier to understand.</p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Improve Your Vocabulary</h4>
            <p className="text-slate-600 dark:text-slate-400">Learning academic vocabulary can help you express ideas more clearly.</p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Practice Regularly</h4>
            <p className="text-slate-600 dark:text-slate-400">Consistent practice will help you write faster and more confidently during the exam.</p>
          </div>
        </div>

        {/* FAQ Section */}
        <ArticleHeading>TOEFL Writing Topics – Frequently Asked Questions (FAQ)</ArticleHeading>

        <div className="space-y-6 mb-8">
          <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">What are TOEFL writing topics?</h3>
            <p className="text-slate-600 dark:text-slate-400">TOEFL writing topics are essay questions used in the TOEFL Writing section. They ask students to express opinions, explain ideas, or respond to academic discussions.</p>
          </div>

          <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">How can I practice TOEFL writing topics?</h3>
            <p className="text-slate-600 dark:text-slate-400">You can practice by writing essays based on sample TOEFL prompts and reviewing your responses for grammar, structure, and clarity.</p>
          </div>

          <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">How many TOEFL writing topics should I practice?</h3>
            <p className="text-slate-600 dark:text-slate-400">Practicing at least 50–100 topics can help you become comfortable with different types of questions that appear in the TOEFL exam.</p>
          </div>

          <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Are TOEFL writing topics repeated in the exam?</h3>
            <p className="text-slate-600 dark:text-slate-400">The exact questions may not repeat, but many TOEFL prompts are similar in structure and themes.</p>
          </div>

          <div className="pb-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">What are the most common TOEFL essay topics?</h3>
            <p className="text-slate-600 dark:text-slate-400">Common TOEFL essay topics include education, technology, society, environment, and business.</p>
          </div>
        </div>

        {/* Final Thoughts */}
        <ArticleHeading>Final Thoughts</ArticleHeading>
        
        <ArticleParagraph>
          Practicing with different TOEFL writing topics is one of the best ways to prepare for the TOEFL exam. These questions help you improve your ability to organize ideas, support arguments, and write clearly under time pressure.
        </ArticleParagraph>

        <ArticleParagraph>
          The more topics you practice, the more confident you will feel during the TOEFL Writing section.
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
          
          <Link to="/toefl/toefl-writing/toefl-writing-templates" className="block p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
            <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">TOEFL Writing Templates</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Ready-to-use templates for both Task 1 and Task 2.</p>
          </Link>
          
          <Link to="/toefl/toefl-writing/toefl-writing-practice-questions" className="block p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
            <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">TOEFL Writing Practice Questions</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Practice questions with high-scoring sample answers.</p>
          </Link>
        </div>

        <ShareButtons 
          url={typeof window !== 'undefined' ? window.location.href : ''} 
          title="TOEFL Writing Topics (60 Essay Questions for Practice)" 
        />
      </article>
    </div>
  );
};

export default TOEFLWritingTopicsPage;
