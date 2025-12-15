import { ProgressData } from '../types';

const PROGRESS_KEY = 'typoGrammarProgress';

const defaultProgress: ProgressData = {
  completedTopics: [],
  quizScores: {},
};

export const loadProgress = (): ProgressData => {
  try {
    const savedProgress = localStorage.getItem(PROGRESS_KEY);
    if (savedProgress) {
      const parsed = JSON.parse(savedProgress);
      return {
        completedTopics: Array.isArray(parsed.completedTopics) ? parsed.completedTopics : [],
        quizScores: (parsed.quizScores && typeof parsed.quizScores === 'object') ? parsed.quizScores : {},
      };
    }
  } catch (error) {
    console.error('Failed to load progress from localStorage', error);
  }
  return defaultProgress;
};

export const saveProgress = (progress: ProgressData): void => {
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error('Failed to save progress to localStorage', error);
  }
};
