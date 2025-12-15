
import React, { useMemo, useEffect, useState } from 'react';
import GoogleAd from '../components/GoogleAd';
import { Link } from 'react-router-dom';
import { useProgress } from '../contexts/ProgressContext';
import { GRAMMAR_TOPICS } from '../constants/grammarTopics';
import { ArticleHeading, ArticleParagraph } from '../components/ArticleComponents';

interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  requirement: number;
  unlocked: boolean;
}

const ProgressPage: React.FC = () => {
  const { progress } = useProgress();
  const [showConfetti, setShowConfetti] = useState(false);
  
  // Calculate streak
  const streak = useMemo(() => {
    const lastVisit = localStorage.getItem('lastVisitDate');
    const currentStreak = parseInt(localStorage.getItem('currentStreak') || '0');
    const today = new Date().toDateString();
    
    if (!lastVisit) {
      localStorage.setItem('lastVisitDate', today);
      localStorage.setItem('currentStreak', '1');
      localStorage.setItem('longestStreak', '1');
      return { current: 1, longest: 1 };
    }
    
    const lastVisitDate = new Date(lastVisit);
    const todayDate = new Date(today);
    const diffTime = todayDate.getTime() - lastVisitDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    let newStreak = currentStreak;
    
    if (diffDays === 0) {
      // Same day, no change
      newStreak = currentStreak;
    } else if (diffDays === 1) {
      // Consecutive day
      newStreak = currentStreak + 1;
      localStorage.setItem('currentStreak', newStreak.toString());
      localStorage.setItem('lastVisitDate', today);
    } else {
      // Streak broken
      newStreak = 1;
      localStorage.setItem('currentStreak', '1');
      localStorage.setItem('lastVisitDate', today);
    }
    
    const longestStreak = Math.max(
      parseInt(localStorage.getItem('longestStreak') || '1'),
      newStreak
    );
    localStorage.setItem('longestStreak', longestStreak.toString());
    
    return { current: newStreak, longest: longestStreak };
  }, []);
  
  const totalTopics = GRAMMAR_TOPICS.length;
  const completedCount = progress.completedTopics.length;
  const progressPercentage = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;

  // Category-based progress
  const categories = useMemo(() => {
    const categoryMap: { [key: string]: { total: number; completed: number } } = {};
    
    GRAMMAR_TOPICS.forEach(topic => {
      if (!categoryMap[topic.category]) {
        categoryMap[topic.category] = { total: 0, completed: 0 };
      }
      categoryMap[topic.category].total++;
      if (progress.completedTopics.includes(topic.id)) {
        categoryMap[topic.category].completed++;
      }
    });
    
    return Object.entries(categoryMap).map(([name, data]) => ({
      name,
      total: data.total,
      completed: data.completed,
      percentage: Math.round((data.completed / data.total) * 100)
    }));
  }, [progress.completedTopics]);

  // Achievement badges
  const badges: Badge[] = useMemo(() => [
    {
      id: 'first-steps',
      title: 'First Steps',
      description: 'Complete 5 topics',
      icon: '🌱',
      requirement: 5,
      unlocked: completedCount >= 5
    },
    {
      id: 'grammar-novice',
      title: 'Grammar Novice',
      description: 'Complete 10 topics',
      icon: '📚',
      requirement: 10,
      unlocked: completedCount >= 10
    },
    {
      id: 'dedicated-learner',
      title: 'Dedicated Learner',
      description: '7-day streak',
      icon: '🔥',
      requirement: 7,
      unlocked: streak.current >= 7
    },
    {
      id: 'grammar-enthusiast',
      title: 'Grammar Enthusiast',
      description: 'Complete 20 topics',
      icon: '⭐',
      requirement: 20,
      unlocked: completedCount >= 20
    },
    {
      id: 'streak-master',
      title: 'Streak Master',
      description: '30-day streak',
      icon: '💪',
      requirement: 30,
      unlocked: streak.current >= 30
    },
    {
      id: 'grammar-expert',
      title: 'Grammar Expert',
      description: 'Complete 35 topics',
      icon: '🎓',
      requirement: 35,
      unlocked: completedCount >= 35
    },
    {
      id: 'perfectionist',
      title: 'Perfectionist',
      description: 'Complete all topics',
      icon: '🏆',
      requirement: totalTopics,
      unlocked: completedCount === totalTopics && totalTopics > 0
    }
  ], [completedCount, streak.current, totalTopics]);

  const unlockedBadges = badges.filter(b => b.unlocked);
  const lockedBadges = badges.filter(b => !b.unlocked);

  const uncompletedTopics = GRAMMAR_TOPICS.filter(topic => !progress.completedTopics.includes(topic.id));
  const recommendedTopics = uncompletedTopics.slice(0, 4);

  const completedTopicsDetails = GRAMMAR_TOPICS.filter(topic => progress.completedTopics.includes(topic.id));

  // Show confetti on milestone achievements
  useEffect(() => {
    if (completedCount === 10 || completedCount === 25 || completedCount === totalTopics) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  }, [completedCount, totalTopics]);

  return (
    <>
    {showConfetti && (
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        <div className="confetti-animation">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="confetti-piece"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                backgroundColor: ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6'][Math.floor(Math.random() * 5)]
              }}
            />
          ))}
        </div>
      </div>
    )}
    
    <article className="max-w-4xl mx-auto space-y-12">
      <div className="text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight dark:text-slate-100">Your Learning Progress</h1>
        <ArticleParagraph>
            Track your completed topics, view quiz scores, maintain your streak, and earn achievement badges on your journey to mastering English grammar.
        </ArticleParagraph>
      </div>

      {/* Streak Counter */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border-2 border-orange-200 dark:from-orange-900/20 dark:to-red-900/20 dark:border-orange-700">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-heading text-lg font-bold text-slate-700 dark:text-slate-300 mb-1">Current Streak</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Keep it up!</p>
            </div>
            <div className="text-5xl">🔥</div>
          </div>
          <div className="mt-4">
            <div className="text-4xl font-extrabold text-orange-600 dark:text-orange-400">{streak.current} {streak.current === 1 ? 'day' : 'days'}</div>
          </div>
        </div>
        
        <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border-2 border-purple-200 dark:from-purple-900/20 dark:to-pink-900/20 dark:border-purple-700">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-heading text-lg font-bold text-slate-700 dark:text-slate-300 mb-1">Longest Streak</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Personal best</p>
            </div>
            <div className="text-5xl">🏅</div>
          </div>
          <div className="mt-4">
            <div className="text-4xl font-extrabold text-purple-600 dark:text-purple-400">{streak.longest} {streak.longest === 1 ? 'day' : 'days'}</div>
          </div>
        </div>
      </div>

      {/* Achievement Badges */}
      <div className="p-8 bg-white rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <ArticleHeading>Achievement Badges</ArticleHeading>
        <ArticleParagraph>
          Unlock badges by completing topics and maintaining your learning streak!
        </ArticleParagraph>
        
        {unlockedBadges.length > 0 && (
          <>
            <h4 className="font-heading text-xl font-semibold text-slate-700 dark:text-slate-300 mt-6 mb-4">Unlocked ({unlockedBadges.length})</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {unlockedBadges.map(badge => (
                <div key={badge.id} className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl text-center dark:from-green-900/30 dark:to-emerald-900/30 dark:border-green-600">
                  <div className="text-5xl mb-2">{badge.icon}</div>
                  <h5 className="font-body font-bold text-sm text-slate-800 dark:text-slate-200">{badge.title}</h5>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{badge.description}</p>
                </div>
              ))}
            </div>
          </>
        )}
        
        {lockedBadges.length > 0 && (
          <>
            <h4 className="font-heading text-xl font-semibold text-slate-700 dark:text-slate-300 mt-8 mb-4">Locked ({lockedBadges.length})</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {lockedBadges.map(badge => (
                <div key={badge.id} className="p-4 bg-slate-100 border-2 border-slate-300 rounded-xl text-center opacity-60 dark:bg-slate-700/50 dark:border-slate-600">
                  <div className="text-5xl mb-2 grayscale">{badge.icon}</div>
                  <h5 className="font-body font-bold text-sm text-slate-800 dark:text-slate-200">{badge.title}</h5>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{badge.description}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Visual Progress Dashboard */}
      <div className="p-8 bg-white rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <ArticleHeading>Progress Dashboard</ArticleHeading>
        
        {/* Overall Progress */}
        <div className="mt-6">
          <div className="flex justify-between items-center mb-2 font-body">
            <span className="font-semibold text-slate-700 dark:text-slate-300">Overall Progress</span>
            <span className="font-bold text-blue-600 dark:text-blue-400">{completedCount} / {totalTopics} topics</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-6 dark:bg-slate-700 overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-6 rounded-full transition-all duration-500 flex items-center justify-end pr-3"
              style={{ width: `${progressPercentage}%` }}
            >
              {progressPercentage > 10 && (
                <span className="text-white font-bold text-sm">{progressPercentage}%</span>
              )}
            </div>
          </div>
        </div>
        
        {/* Category Progress Circles */}
        <div className="mt-10">
          <h4 className="font-heading text-xl font-semibold text-slate-700 dark:text-slate-300 mb-6">Progress by Category</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map(category => (
              <div key={category.name} className="text-center">
                <div className="relative inline-flex items-center justify-center">
                  {/* Background circle */}
                  <svg className="transform -rotate-90 w-28 h-28">
                    <circle
                      cx="56"
                      cy="56"
                      r="50"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-slate-200 dark:text-slate-700"
                    />
                    {/* Progress circle */}
                    <circle
                      cx="56"
                      cy="56"
                      r="50"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 50}`}
                      strokeDashoffset={`${2 * Math.PI * 50 * (1 - category.percentage / 100)}`}
                      className="text-blue-600 dark:text-blue-400 transition-all duration-500"
                      strokeLinecap="round"
                    />
                  </svg>
                  {/* Percentage text */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-slate-800 dark:text-slate-200">{category.percentage}%</span>
                  </div>
                </div>
                <p className="mt-3 font-body text-sm font-semibold text-slate-700 dark:text-slate-300">{category.name}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{category.completed}/{category.total} topics</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 dark:from-slate-800 dark:to-slate-800/50 dark:border-blue-900">
        <ArticleHeading>Why Track Your Progress?</ArticleHeading>
        <ArticleParagraph>
          Learning a language is a journey that requires consistency, dedication, and reflection. By tracking your progress on TypoGrammar, you can see how far you've come and stay motivated to continue improving your English grammar skills.
        </ArticleParagraph>
        <ArticleParagraph>
          Studies show that learners who actively monitor their progress are more likely to achieve their goals. Seeing your completed topics and quiz scores provides tangible evidence of your growth and helps you identify areas where you might want to focus more attention.
        </ArticleParagraph>
        
        <div className="mt-6 space-y-3">
          <div className="flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h4 className="font-body font-bold text-slate-800 dark:text-slate-200">Visual Feedback</h4>
              <p className="font-body text-slate-600 dark:text-slate-400">Watch your progress bar grow as you complete more topics, providing instant visual gratification and motivation.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <div>
              <h4 className="font-body font-bold text-slate-800 dark:text-slate-200">Build Consistency</h4>
              <p className="font-body text-slate-600 dark:text-slate-400">Regular learning creates neural pathways that make grammar rules stick. Tracking helps you maintain a consistent study habit.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <div>
              <h4 className="font-body font-bold text-slate-800 dark:text-slate-200">Identify Strengths</h4>
              <p className="font-body text-slate-600 dark:text-slate-400">Quiz scores show which grammar topics you've mastered and which may benefit from additional review.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <div>
              <h4 className="font-body font-bold text-slate-800 dark:text-slate-200">Complete Privacy</h4>
              <p className="font-body text-slate-600 dark:text-slate-400">All progress data stays in your browser using localStorage. We never send your learning data to our servers, ensuring complete privacy.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recommended Topics */}
      <div className="p-8 bg-white rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <ArticleHeading>What to Learn Next</ArticleHeading>
         {recommendedTopics.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                {recommendedTopics.map(topic => (
                    <Link 
                        key={topic.id} 
                        to={`/topics/${topic.id}`}
                        className="group block p-6 border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-blue-300 hover:shadow-lg transition-all duration-200 dark:border-slate-700 dark:hover:bg-slate-800 dark:hover:border-blue-500"
                    >
                        <p className="font-semibold font-body text-slate-800 group-hover:text-blue-600 transition-colors dark:text-slate-200 dark:group-hover:text-blue-400 text-lg">{topic.title}</p>
                        <p className="text-sm text-slate-500 mt-1 dark:text-slate-400">{topic.category}</p>
                    </Link>
                ))}
            </div>
         ) : (
            <div className="mt-6 text-center p-8 bg-green-50 border border-green-200 rounded-lg dark:bg-green-900/30 dark:border-green-500/50">
                <h3 className="font-heading text-2xl font-bold text-green-700 dark:text-green-300">🎉 Congratulations!</h3>
                <p className="font-body text-green-600 mt-2 dark:text-green-400">You've completed all the grammar topics. Fantastic work!</p>
            </div>
         )}
      </div>

      {/* Completed Topics & Quiz Scores */}
      {(completedTopicsDetails.length > 0 || Object.keys(progress.quizScores).length > 0) && (
        <div className="p-8 bg-white rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
            <ArticleHeading>Review Your Progress</ArticleHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mt-6">
                {/* Completed Topics List */}
                <div>
                    <h4 className="font-heading text-xl font-bold text-slate-700 dark:text-slate-300 mb-4">Completed Topics</h4>
                    {completedTopicsDetails.length > 0 ? (
                        <ul className="space-y-3">
                            {completedTopicsDetails.map(topic => (
                                <li key={topic.id} className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <Link to={`/topics/${topic.id}`} className="font-body text-slate-600 hover:text-blue-600 hover:underline dark:text-slate-400 dark:hover:text-blue-400">
                                        {topic.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="font-body text-slate-500 dark:text-slate-400">You haven't completed any topics yet. Visit a topic page and mark it as complete!</p>
                    )}
                </div>

                {/* Quiz Scores List */}
                <div>
                     <h4 className="font-heading text-xl font-bold text-slate-700 dark:text-slate-300 mb-4">Best Quiz Scores</h4>
                     {Object.keys(progress.quizScores).length > 0 ? (
                        <ul className="space-y-3">
                            {Object.entries(progress.quizScores).map(([quizId, result]) => {
                                const topic = GRAMMAR_TOPICS.find(t => t.id === quizId);
                                const quizTitle = topic ? topic.title : quizId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
                                return (
                                <li key={quizId} className="flex justify-between items-center font-body">
                                    <span className="text-slate-600 dark:text-slate-400">{quizTitle}</span>
                                    <span className="font-semibold bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-sm dark:bg-blue-900/50 dark:text-blue-300">{result.score}/{result.total}</span>
                                </li>
                                )
                            })}
                        </ul>
                     ) : (
                         <p className="font-body text-slate-500 dark:text-slate-400">You haven't taken any quizzes yet. Find them at the end of each topic page.</p>
                     )}
                </div>
            </div>
        </div>
      )}

    </article>
    
    <div className="mt-8">
      <GoogleAd adSlot="6406598038" />
    </div>
    
    <style dangerouslySetInnerHTML={{__html: `
      @keyframes confetti-fall {
        0% {
          transform: translateY(-100vh) rotate(0deg);
          opacity: 1;
        }
        100% {
          transform: translateY(100vh) rotate(720deg);
          opacity: 0;
        }
      }
      
      .confetti-piece {
        position: absolute;
        width: 10px;
        height: 10px;
        animation: confetti-fall 3s linear infinite;
      }
    `}} />
    </>
  );
};

export default ProgressPage;
