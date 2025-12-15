
import React from 'react';

export interface GrammarTopic {
  id: string;
  title: string;
  category: string;
  content: React.ReactNode;
}

export interface IrregularVerb {
  base: string;
  pastSimple: string;
  pastParticiple: string;
}

export interface PhrasalVerb {
  phrasalVerb: string;
  meaning: string;
  example: string;
}

export interface PhrasalVerbCategory {
  category: string;
  verbs: PhrasalVerb[];
}

export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  date: string;
  summary: string;
  category: string;
  image?: string;
  content: React.ReactNode;
}

export interface ConfusedWordEntry {
  word: string;
  meaning: string;
  example: string;
}

export interface ConfusedWordSet {
  words: string[];
  entries: ConfusedWordEntry[];
  tip?: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number; // index of the correct option
  explanation: string;
}

export interface Quiz {
  topicId: string;
  title: string;
  questions: QuizQuestion[];
}

export interface Idiom {
  idiom: string;
  meaning: string;
  example: string;
}

export interface IdiomCategory {
  category: string;
  idioms: Idiom[];
}

export interface ReadingPassage {
  id: string;
  title: string;
  category: string;
  content: React.ReactNode;
  questions: QuizQuestion[];
  vocabulary: {
    word: string;
    meaning: string;
  }[];
}

// Added for progress tracking
export interface QuizScore {
  score: number;
  total: number;
}

export interface ProgressData {
  completedTopics: string[];
  quizScores: Record<string, QuizScore>;
}

export interface Affix {
  affix: string;
  meaning: string;
  example: string;
}

export interface AffixCategory {
  category: string;
  description: React.ReactNode;
  affixes: Affix[];
}

export interface Collocation {
  collocation: string;
  example: string;
}

export interface CollocationCategory {
  category: string;
  description: string;
  collocations: Collocation[];
}

export interface WordGroup {
  group: string;
  words: {
    word: string;
    pronunciation?: string;
    meaning: string;
    example: string;
  }[];
}