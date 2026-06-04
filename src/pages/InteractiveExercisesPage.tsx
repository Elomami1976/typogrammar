import React, { useState } from 'react';
import usePageMetadata from '../hooks/usePageMetadata';
import FillInBlankExercise from '../components/FillInBlankExercise';
import SentenceReorderingExercise from '../components/SentenceReorderingExercise';
import ErrorCorrectionExercise from '../components/ErrorCorrectionExercise';
import MatchingExercise from '../components/MatchingExercise';
import SchemaMarkup from '../components/SchemaMarkup';
import { EXERCISE_DATA } from '../constants/exerciseData';

const InteractiveExercisesPage: React.FC = () => {
  usePageMetadata({
    title: 'Free Interactive Grammar Exercises 2026: Practice English Online | TypoGrammar',
    description: 'Practice English grammar with 100+ free interactive exercises. Fill-in-the-blank, sentence reordering, error correction & matching activities with instant feedback for all levels.',
    ogTitle: 'Free Interactive Grammar Exercises: Practice English Online',
    ogDescription: 'Master English grammar with interactive exercises covering tenses, articles, prepositions & more. Instant feedback, multiple activity types, all free.',
    ogType: 'website',
    ogUrl: 'https://typogrammar.com/interactive-exercises'
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
      {/* Schema Markup */}
      <SchemaMarkup
        type="Article"
        data={{
          headline: 'Free Interactive Grammar Exercises 2026: Practice English Online',
          description: 'Practice English grammar with 100+ free interactive exercises. Fill-in-the-blank, sentence reordering, error correction & matching activities with instant feedback.',
          author: { '@type': 'Organization', name: 'Typogrammar', url: 'https://typogrammar.com/about' },
          publisher: { '@type': 'Organization', name: 'Typogrammar', url: 'https://typogrammar.com' },
          datePublished: '2025-05-01',
          dateModified: '2026-02-28',
          mainEntityOfPage: 'https://typogrammar.com/interactive-exercises'
        }}
      />
      
      {/* Featured Snippet Box */}
      <div className="bg-gradient-to-r from-green-100 to-teal-100 dark:from-slate-700 dark:to-slate-600 border-l-4 border-green-600 p-6 rounded-lg mb-8 shadow-md">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">What are Interactive Grammar Exercises?</h2>
        <p className="text-slate-800 dark:text-slate-200 leading-relaxed mb-4">
          <strong>Interactive grammar exercises</strong> are online practice activities that give you instant feedback as you learn. Unlike worksheets, these exercises tell you immediately if you're right or wrong and explain why-helping you learn faster.
        </p>
        <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
          <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Quick Answer: What exercise types are available?</h3>
          <p className="text-slate-700 dark:text-slate-300"><strong>4 types:</strong> Fill-in-the-blank (gap-fill), Sentence reordering (word order), Error correction (find mistakes), and Matching activities. All exercises provide instant feedback.</p>
        </div>
      </div>
      
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
      
      {/* Visible FAQ Section */}
      <div className="mt-12 bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 border border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-2">
          <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          Frequently Asked Questions: Interactive Grammar Exercises
        </h2>
        
        <div className="space-y-6">
          <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Are these grammar exercises free?</h3>
            <p className="text-slate-700 dark:text-slate-300">Yes, all interactive exercises on TypoGrammar are completely free. No registration or payment required. Practice as many times as you want with instant feedback on every answer.</p>
          </div>
          
          <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">What grammar topics do the exercises cover?</h3>
            <p className="text-slate-700 dark:text-slate-300">Exercises cover all major grammar topics: verb tenses (present, past, future, perfect), articles (a/an/the), prepositions, conditionals, modal verbs, passive voice, reported speech, relative clauses, and more. Filter by category to focus on specific areas.</p>
          </div>
          
          <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">What is fill-in-the-blank (gap-fill) exercise?</h3>
            <p className="text-slate-700 dark:text-slate-300">Fill-in-the-blank exercises show sentences with missing words. You type the correct word or choose from options. They're great for practicing verb forms, prepositions, and vocabulary in context.</p>
          </div>
          
          <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">What is sentence reordering exercise?</h3>
            <p className="text-slate-700 dark:text-slate-300">Sentence reordering exercises give you jumbled words that you arrange into correct sentences. They help you understand English word order, which is especially helpful for learners whose native languages have different grammar structures.</p>
          </div>
          
          <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">What level are these exercises suitable for?</h3>
            <p className="text-slate-700 dark:text-slate-300">Exercises range from beginner (A1-A2) to advanced (B2-C1). Use the topic filter to find exercises matching your level. Each topic includes exercises of varying difficulty within the set.</p>
          </div>
          
          <div className="pb-2">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">How do interactive exercises help me learn faster?</h3>
            <p className="text-slate-700 dark:text-slate-300">Instant feedback is key: you immediately see if you're right or wrong and learn why. This prevents practicing mistakes. Studies show active practice with immediate correction is more effective than passive reading or delayed feedback.</p>
          </div>
        </div>
      </div>
      
      {/* FAQ Schema */}
      <SchemaMarkup
        type="FAQPage"
        data={{
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Are these grammar exercises free?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, all interactive exercises on TypoGrammar are completely free. No registration or payment required. Practice as many times as you want with instant feedback on every answer.'
              }
            },
            {
              '@type': 'Question',
              name: 'What grammar topics do the exercises cover?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Exercises cover all major grammar topics: verb tenses (present, past, future, perfect), articles (a/an/the), prepositions, conditionals, modal verbs, passive voice, reported speech, relative clauses, and more.'
              }
            },
            {
              '@type': 'Question',
              name: 'What is fill-in-the-blank (gap-fill) exercise?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Fill-in-the-blank exercises show sentences with missing words. You type the correct word or choose from options. They are great for practicing verb forms, prepositions, and vocabulary in context.'
              }
            },
            {
              '@type': 'Question',
              name: 'What is sentence reordering exercise?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sentence reordering exercises give you jumbled words that you arrange into correct sentences. They help you understand English word order, which is especially helpful for learners whose native languages have different grammar structures.'
              }
            },
            {
              '@type': 'Question',
              name: 'What level are these exercises suitable for?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Exercises range from beginner (A1-A2) to advanced (B2-C1). Use the topic filter to find exercises matching your level. Each topic includes exercises of varying difficulty within the set.'
              }
            },
            {
              '@type': 'Question',
              name: 'How do interactive exercises help me learn faster?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Instant feedback is key: you immediately see if you are right or wrong and learn why. This prevents practicing mistakes. Studies show active practice with immediate correction is more effective than passive reading or delayed feedback.'
              }
            }
          ]
        }}
      />
    </div>
  );
};

export default InteractiveExercisesPage;
