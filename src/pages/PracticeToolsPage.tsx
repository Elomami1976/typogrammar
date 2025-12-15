import React, { useState } from 'react';
import usePageMetadata from '../hooks/usePageMetadata';
import FlashcardComponent from '../components/FlashcardComponent';
import { GRAMMAR_FLASHCARDS } from '../constants/flashcardData';

const PracticeToolsPage: React.FC = () => {
  usePageMetadata({
    title: 'Grammar Flashcards | TypoGrammar',
    description: 'Study English grammar with comprehensive flashcards covering all topics from tenses to advanced grammar. Filter by category for focused practice.'
  });

  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(GRAMMAR_FLASHCARDS.map(card => card.category)))];

  // Filter flashcards
  const filteredFlashcards = selectedCategory === 'all' 
    ? GRAMMAR_FLASHCARDS 
    : GRAMMAR_FLASHCARDS.filter(card => card.category === selectedCategory);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-100 mb-4">
          Grammar Flashcards
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
          Study English grammar with comprehensive flashcards covering all topics. Click each card to reveal the answer and deepen your understanding.
        </p>

        {/* Category Filter */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6">
          <label htmlFor="category" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
            Filter by Category
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat === 'all' ? `All Categories (${GRAMMAR_FLASHCARDS.length} cards)` : `${cat} (${GRAMMAR_FLASHCARDS.filter(c => c.category === cat).length} cards)`}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Flashcards Section */}
      <div className="mb-12">
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-2xl font-bold text-slate-900 dark:text-slate-100">
              {selectedCategory === 'all' ? 'All Flashcards' : selectedCategory}
            </h2>
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
              {filteredFlashcards.length} cards
            </span>
          </div>
        </div>
        
        <FlashcardComponent 
          flashcards={filteredFlashcards}
          title={selectedCategory === 'all' ? 'All Grammar Topics' : selectedCategory}
        />
      </div>

      {/* How to Use Section */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8 border border-blue-100 dark:border-blue-800/30">
        <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          How to Use Flashcards
        </h3>
        <div className="space-y-4 text-slate-700 dark:text-slate-300">
          <div>
            <h4 className="font-semibold mb-2 flex items-center">
              <span className="text-2xl mr-2">🎴</span>
              Study Tips:
            </h4>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Click the card</strong> to flip and see the answer</li>
              <li><strong>Use arrow buttons</strong> or keyboard arrows to navigate</li>
              <li><strong>Track progress</strong> with the progress bar at the top</li>
              <li><strong>Filter by category</strong> for focused study sessions</li>
              <li><strong>Click reset</strong> to start over from the beginning</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 flex items-center">
              <span className="text-2xl mr-2">💡</span>
              Learning Strategy:
            </h4>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Start with one category at a time for better retention</li>
              <li>Try to answer before flipping the card</li>
              <li>Review difficult topics multiple times</li>
              <li>Combine with interactive exercises for complete mastery</li>
              <li>Study regularly - consistency is key!</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Topics Covered */}
      <div className="mt-8 bg-slate-50 dark:bg-slate-800/50 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
        <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          Topics Covered
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {categories.filter(cat => cat !== 'all').map(category => (
            <div 
              key={category}
              className="flex items-center justify-between p-3 bg-white dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600"
            >
              <span className="font-semibold text-slate-800 dark:text-slate-200">{category}</span>
              <span className="text-sm text-slate-600 dark:text-slate-400">
                {GRAMMAR_FLASHCARDS.filter(c => c.category === category).length} cards
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PracticeToolsPage;
