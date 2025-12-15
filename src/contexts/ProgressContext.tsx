import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { loadProgress, saveProgress } from '../services/progressService';
import { ProgressData } from '../types';

interface ProgressContextType {
  progress: ProgressData;
  toggleTopicCompletion: (topicId: string) => void;
  updateQuizScore: (quizId: string, score: number, total: number) => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<ProgressData>({ completedTopics: [], quizScores: {} });

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const toggleTopicCompletion = (topicId: string) => {
    setProgress(prev => {
      const isCompleted = prev.completedTopics.includes(topicId);
      const newCompletedTopics = isCompleted
        ? prev.completedTopics.filter(id => id !== topicId)
        : [...prev.completedTopics, topicId];
      return { ...prev, completedTopics: newCompletedTopics };
    });
  };

  const updateQuizScore = (quizId: string, score: number, total: number) => {
    setProgress(prev => {
      const existingScore = prev.quizScores[quizId];
      // Only update if the new score is better than the existing one.
      if (!existingScore || score > existingScore.score) {
        const newQuizScores = { ...prev.quizScores, [quizId]: { score, total } };
        return { ...prev, quizScores: newQuizScores };
      }
      return prev;
    });
  };

  return (
    <ProgressContext.Provider value={{ progress, toggleTopicCompletion, updateQuizScore }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = (): ProgressContextType => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
