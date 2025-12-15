import React, { useState } from 'react';
import usePageMetadata from '../hooks/usePageMetadata';
import FillInBlankExercise from '../components/FillInBlankExercise';
import SentenceReorderingExercise from '../components/SentenceReorderingExercise';
import ErrorCorrectionExercise from '../components/ErrorCorrectionExercise';
import MatchingExercise from '../components/MatchingExercise';
import { EXERCISE_DATA } from '../constants/exerciseData';

const InteractiveExercisesPage: React.FC = () => {
  usePageMetadata({
    title: 'Interactive Exercises | TypoGrammar',
    description: 'Practice English grammar with interactive exercises covering all grammar topics including fill-in-the-blank, sentence reordering, error correction, and matching activities.'
  });

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTopic, setSelectedTopic] = useState<string>('all');

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(EXERCISE_DATA.map(ex => ex.category)))];
  
  // Filter exercises based on selection
  const filteredExercises = EXERCISE_DATA.filter(ex => {
    if (selectedTopic !== 'all') return ex.topicId === selectedTopic;
    if (selectedCategory !== 'all') return ex.category === selectedCategory;
    return true;
  });

  // Get topics for selected category
  const topicsInCategory = selectedCategory === 'all' 
    ? EXERCISE_DATA 
    : EXERCISE_DATA.filter(ex => ex.category === selectedCategory);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-12">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-100 mb-4">
          Interactive Grammar Exercises
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
          Practice your English grammar skills with these interactive exercises covering all major topics. Each activity provides immediate feedback to help you learn.
        </p>

        {/* Filter Controls */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Category Filter */}
            <div>
              <label htmlFor="category" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Filter by Category
              </label>
              <select
                id="category"
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setSelectedTopic('all');
                }}
                className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat === 'all' ? 'All Categories' : cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Topic Filter */}
            <div>
              <label htmlFor="topic" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Filter by Topic
              </label>
              <select
                id="topic"
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Topics</option>
                {topicsInCategory.map(ex => (
                  <option key={ex.topicId} value={ex.topicId}>
                    {ex.topicTitle}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 text-sm text-slate-600 dark:text-slate-400">
            Showing <span className="font-semibold text-blue-600 dark:text-blue-400">{filteredExercises.length}</span> topic(s) with exercises
          </div>
        </div>
      </div>


      {/* Exercise Sets */}
      {filteredExercises.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-slate-600 dark:text-slate-400">
            No exercises found for the selected filters.
          </p>
        </div>
      ) : (
        <div className="space-y-12">
          {filteredExercises.map((exerciseSet) => (
            <div key={exerciseSet.topicId} className="space-y-6">
              {/* Topic Header */}
              <div className="border-l-4 border-blue-500 pl-4">
                <h2 className="font-heading text-2xl font-bold text-slate-900 dark:text-slate-100">
                  {exerciseSet.topicTitle}
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  {exerciseSet.category}
                </p>
              </div>

              {/* Fill in the Blank Exercise */}
              {exerciseSet.fillInBlank && exerciseSet.fillInBlank.length > 0 && (
                <FillInBlankExercise
                  title={`${exerciseSet.topicTitle} - Fill in the Blank`}
                  questions={exerciseSet.fillInBlank}
                />
              )}

              {/* Sentence Reordering Exercise */}
              {exerciseSet.reordering && exerciseSet.reordering.length > 0 && (
                <SentenceReorderingExercise
                  title={`${exerciseSet.topicTitle} - Sentence Word Order`}
                  questions={exerciseSet.reordering}
                />
              )}

              {/* Error Correction Exercise */}
              {exerciseSet.errorCorrection && exerciseSet.errorCorrection.length > 0 && (
                <ErrorCorrectionExercise
                  title={`${exerciseSet.topicTitle} - Find and Fix Errors`}
                  questions={exerciseSet.errorCorrection}
                />
              )}

              {/* Matching Exercise */}
              {exerciseSet.matching && (
                <MatchingExercise
                  title={`${exerciseSet.topicTitle} - Matching`}
                  leftLabel={exerciseSet.matching.leftLabel}
                  rightLabel={exerciseSet.matching.rightLabel}
                  pairs={exerciseSet.matching.pairs}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InteractiveExercisesPage;
