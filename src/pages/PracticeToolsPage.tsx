import React, { useState } from 'react';
import usePageMetadata from '../hooks/usePageMetadata';
import FlashcardComponent from '../components/FlashcardComponent';
import SchemaMarkup from '../components/SchemaMarkup';
import { GRAMMAR_FLASHCARDS } from '../constants/flashcardData';

const PracticeToolsPage: React.FC = () => {
  usePageMetadata({
    title: 'Free Grammar Flashcards 2026: Study English Rules & Examples | TypoGrammar',
    description: 'Study English grammar with 200+ free flashcards covering all topics from tenses to advanced grammar. Click to flip cards, track progress, and master grammar rules with examples.',
    ogTitle: 'Free Grammar Flashcards: Study English Rules & Examples Online',
    ogDescription: 'Master grammar with interactive flashcards. Click to reveal answers, filter by topic, and track your progress. Free, no signup required.',
    ogType: 'website',
    ogUrl: 'https://typogrammar.com/practice-tools'
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
      {/* Schema Markup */}
      <SchemaMarkup
        type="Article"
        data={{
          headline: 'Free Grammar Flashcards 2026: Study English Rules & Examples',
          description: 'Study English grammar with 200+ free flashcards covering all topics from tenses to advanced grammar. Click to flip cards, track progress, and master grammar rules.',
          author: { '@type': 'Organization', name: 'Typogrammar', url: 'https://typogrammar.com/about' },
          publisher: { '@type': 'Organization', name: 'Typogrammar', url: 'https://typogrammar.com' },
          datePublished: '2025-05-01',
          dateModified: '2026-02-28',
          mainEntityOfPage: 'https://typogrammar.com/practice-tools'
        }}
      />
      
      {/* Featured Snippet Box */}
      <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-slate-700 dark:to-slate-600 border-l-4 border-purple-600 p-6 rounded-lg mb-8 shadow-md">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">What are Grammar Flashcards?</h2>
        <p className="text-slate-800 dark:text-slate-200 leading-relaxed mb-4">
          <strong>Grammar flashcards</strong> are digital cards showing a grammar question or concept on one side and the answer/explanation on the other. Click to flip and test your knowledge before seeing the answer.
        </p>
        <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
          <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Quick Answer: How do I use these flashcards?</h3>
          <p className="text-slate-700 dark:text-slate-300"><strong>3 steps:</strong> 1) Read the question → 2) Think of the answer → 3) Click to flip and check. Use arrow buttons to navigate between cards and track your progress.</p>
        </div>
      </div>
      
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
      
      {/* Visible FAQ Section */}
      <div className="mt-8 bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 border border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-2">
          <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          Frequently Asked Questions: Grammar Flashcards
        </h2>
        
        <div className="space-y-6">
          <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Are these grammar flashcards free?</h3>
            <p className="text-slate-700 dark:text-slate-300">Yes, all flashcards on TypoGrammar are completely free with no signup required. Study unlimited times across all categories. Your progress is saved in your browser.</p>
          </div>
          
          <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">What grammar topics do the flashcards cover?</h3>
            <p className="text-slate-700 dark:text-slate-300">Flashcards cover all major grammar areas: verb tenses, articles, prepositions, conditionals, modal verbs, passive voice, reported speech, relative clauses, word order, and more. Use the category filter to focus on specific topics.</p>
          </div>
          
          <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">How do I use flashcards effectively for grammar study?</h3>
            <p className="text-slate-700 dark:text-slate-300">1) Study one category at a time for focused learning. 2) Try to answer before flipping the card. 3) Review difficult cards multiple times. 4) Study in short sessions (15-20 minutes) rather than long cramming sessions. 5) Combine with practice exercises for best results.</p>
          </div>
          
          <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Can I study flashcards on my phone?</h3>
            <p className="text-slate-700 dark:text-slate-300">Yes! These flashcards are fully mobile-responsive. Swipe or use the navigation buttons to move between cards. They work on all devices including smartphones and tablets.</p>
          </div>
          
          <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">What level are these flashcards suitable for?</h3>
            <p className="text-slate-700 dark:text-slate-300">Flashcards cover beginner to advanced levels (A1-C1). Each category includes cards of varying difficulty. Beginners should start with Tenses and Articles; advanced learners can focus on Conditionals and Reported Speech.</p>
          </div>
          
          <div className="pb-2">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">How are flashcards different from quizzes?</h3>
            <p className="text-slate-700 dark:text-slate-300">Flashcards let you study at your own pace without scoring pressure. They're ideal for learning new concepts and memorization. Quizzes test your knowledge with multiple-choice questions and give you a score. Use flashcards first to learn, then quizzes to test yourself.</p>
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
              name: 'Are these grammar flashcards free?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, all flashcards on TypoGrammar are completely free with no signup required. Study unlimited times across all categories. Your progress is saved in your browser.'
              }
            },
            {
              '@type': 'Question',
              name: 'What grammar topics do the flashcards cover?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Flashcards cover all major grammar areas: verb tenses, articles, prepositions, conditionals, modal verbs, passive voice, reported speech, relative clauses, word order, and more.'
              }
            },
            {
              '@type': 'Question',
              name: 'How do I use flashcards effectively for grammar study?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '1) Study one category at a time for focused learning. 2) Try to answer before flipping the card. 3) Review difficult cards multiple times. 4) Study in short sessions (15-20 minutes) rather than long cramming sessions. 5) Combine with practice exercises for best results.'
              }
            },
            {
              '@type': 'Question',
              name: 'Can I study flashcards on my phone?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes! These flashcards are fully mobile-responsive. Swipe or use the navigation buttons to move between cards. They work on all devices including smartphones and tablets.'
              }
            },
            {
              '@type': 'Question',
              name: 'What level are these flashcards suitable for?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Flashcards cover beginner to advanced levels (A1-C1). Each category includes cards of varying difficulty. Beginners should start with Tenses and Articles; advanced learners can focus on Conditionals and Reported Speech.'
              }
            },
            {
              '@type': 'Question',
              name: 'How are flashcards different from quizzes?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Flashcards let you study at your own pace without scoring pressure. They are ideal for learning new concepts and memorization. Quizzes test your knowledge with multiple-choice questions and give you a score. Use flashcards first to learn, then quizzes to test yourself.'
              }
            }
          ]
        }}
      />
    </div>
  );
};

export default PracticeToolsPage;
