import React from 'react';
import GoogleAd from '../components/GoogleAd';
import { useParams, Link } from 'react-router-dom';
import { GRAMMAR_TOPICS } from '../constants/grammarTopics';
import { QUIZZES } from '../constants/quizData';
import Quiz from '../components/Quiz';
import { ArticleHeading } from '../components/ArticleComponents';
import { useProgress } from '../contexts/ProgressContext';
import usePageMetadata from '../hooks/usePageMetadata';
import SchemaMarkup from '../components/SchemaMarkup';
import PrintButton from '../components/PrintButton';

const TopicPage: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const { progress, toggleTopicCompletion, updateQuizScore } = useProgress();

  const topic = GRAMMAR_TOPICS.find(t => t.id === topicId);
  const quizForTopic = QUIZZES.find(q => q.topicId === topicId);
  const currentIndex = GRAMMAR_TOPICS.findIndex(t => t.id === topicId);
  
  const previousTopic = currentIndex > 0 ? GRAMMAR_TOPICS[currentIndex - 1] : null;
  const nextTopic = currentIndex < GRAMMAR_TOPICS.length - 1 ? GRAMMAR_TOPICS[currentIndex + 1] : null;

  usePageMetadata({
    title: topic ? `${topic.title} | TypoGrammar` : 'Grammar Topic | TypoGrammar',
    description: topic ? `Learn all about ${topic.title.toLowerCase()}. This guide covers formation, usage, and examples to help you master this English grammar topic.` : 'Explore English grammar topics on TypoGrammar.'
  });

  if (!topic) {
    return (
       <div className="text-center p-8 bg-white rounded-lg shadow-sm border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
        <h2 className="font-heading text-4xl font-bold text-red-600 mb-4 dark:text-red-500">Topic Not Found</h2>
        <p className="font-body text-xl text-slate-600 dark:text-slate-400">
          Sorry, we couldn't find the grammar topic you were looking for. Please select one from the sidebar.
        </p>
      </div>
    );
  }
  
  const isComplete = progress.completedTopics.includes(topic.id);
  const bestScore = quizForTopic ? progress.quizScores[quizForTopic.topicId] : null;
  const topicSchema = topic ? {
    name: topic.title,
    description: `Learn all about ${topic.title.toLowerCase()}. This comprehensive guide covers formation, usage, and examples.`,
    provider: {
      '@type': 'Organization',
      name: 'TypoGrammar',
      url: 'https://typogrammar.com'
    }
  } : null;

  const relatedTopics = GRAMMAR_TOPICS.filter(
    t => t.category === topic.category && t.id !== topicId
  ).slice(0, 3);

  return (
    <>
      {topicSchema && (
        <SchemaMarkup type="Course" data={topicSchema} />
      )}
    <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
      <div className="flex justify-between items-start">
        <div>
          <p className="font-body text-base font-semibold text-blue-600 mb-4 dark:text-blue-400">{topic.category}</p>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight dark:text-slate-100">{topic.title}</h1>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0 print:hidden">
          <PrintButton />
          <button
            onClick={() => toggleTopicCompletion(topic.id)}
            className={`flex items-center gap-2 font-semibold text-sm py-2 px-4 rounded-full transition-colors duration-200 ${
              isComplete
                ? 'bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/50 dark:text-green-300 dark:hover:bg-green-900'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600'
            }`}
          >
            {isComplete ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Completed</span>
              </>
            ) : (
              <span>Mark as Complete</span>
            )}
          </button>
        </div>
      </div>

      <div>{topic.content}</div>

      {quizForTopic && (
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
          <div className="flex justify-between items-baseline mb-2">
            <ArticleHeading>Test Your Knowledge</ArticleHeading>
            {bestScore && (
              <p className="font-body text-slate-500 dark:text-slate-400">
                Your best score: <span className="font-bold text-blue-600 dark:text-blue-400">{bestScore.score}/{bestScore.total}</span>
              </p>
            )}
          </div>
          <Quiz
            quizData={quizForTopic}
            onQuizComplete={updateQuizScore}
          />
        </div>
      )}

      {relatedTopics.length > 0 && (
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
          <ArticleHeading>Related Topics</ArticleHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {relatedTopics.map(related => (
              <Link 
                key={related.id} 
                to={`/topics/${related.id}`}
                className="group block p-6 border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-blue-300 hover:shadow-lg transition-all duration-200 dark:border-slate-700 dark:hover:bg-slate-800 dark:hover:border-blue-500"
              >
                <p className="font-semibold font-body text-slate-800 group-hover:text-blue-600 transition-colors dark:text-slate-200 dark:group-hover:text-blue-400 text-lg">{related.title}</p>
                <p className="text-sm text-slate-500 mt-1 dark:text-slate-400">{related.category}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
      
      <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 dark:border-slate-700">
        {previousTopic ? (
          <Link to={`/topics/${previousTopic.id}`} className="group w-full md:w-auto text-left flex items-center space-x-4 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-blue-300 hover:shadow-md transition-all duration-200 dark:border-slate-700 dark:hover:bg-slate-800 dark:hover:border-blue-500">
            <div className="p-2 bg-slate-100 rounded-full group-hover:bg-blue-100 transition-colors dark:bg-slate-700 dark:group-hover:bg-blue-900/50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-500 group-hover:text-blue-600 transition-colors dark:text-slate-400 dark:group-hover:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Previous Topic</p>
              <p className="font-semibold font-body text-slate-700 group-hover:text-blue-600 transition-colors dark:text-slate-300 dark:group-hover:text-blue-400">{previousTopic.title}</p>
            </div>
          </Link>
        ) : (
          <div className="hidden md:block" /> // Empty div to maintain spacing
        )}
        {nextTopic ? (
          <Link to={`/topics/${nextTopic.id}`} className="group w-full md:w-auto text-right flex items-center justify-end space-x-4 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-blue-300 hover:shadow-md transition-all duration-200 dark:border-slate-700 dark:hover:bg-slate-800 dark:hover:border-blue-500">
             <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Next Topic</p>
              <p className="font-semibold font-body text-slate-700 group-hover:text-blue-600 transition-colors dark:text-slate-300 dark:group-hover:text-blue-400">{nextTopic.title}</p>
            </div>
             <div className="p-2 bg-slate-100 rounded-full group-hover:bg-blue-100 transition-colors dark:bg-slate-700 dark:group-hover:bg-blue-900/50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-500 group-hover:text-blue-600 transition-colors dark:text-slate-400 dark:group-hover:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </div>
          </Link>
        ) : (
          <div className="hidden md:block" /> // Empty div to maintain spacing
        )}
      </div>
    </article>
        <div className="mt-8">
          <GoogleAd adSlot="6406598038" />
        </div>
    </>
  );
};

export default TopicPage;