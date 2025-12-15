import React, { useState } from 'react';

export interface Flashcard {
  front: string;
  back: string;
  category?: string;
}

interface FlashcardComponentProps {
  flashcards: Flashcard[];
  title?: string;
}

const FlashcardComponent: React.FC<FlashcardComponentProps> = ({ flashcards, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [studied, setStudied] = useState<boolean[]>(new Array(flashcards.length).fill(false));

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    if (!isFlipped) {
      const newStudied = [...studied];
      newStudied[currentIndex] = true;
      setStudied(newStudied);
    }
  };

  const handleNext = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setStudied(new Array(flashcards.length).fill(false));
  };

  const studiedCount = studied.filter(Boolean).length;
  const progressPercentage = (studiedCount / flashcards.length) * 100;

  if (flashcards.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200 text-center dark:bg-slate-800/50 dark:border-slate-700">
        <p className="font-body text-slate-600 dark:text-slate-400">No flashcards available.</p>
      </div>
    );
  }

  const currentCard = flashcards[currentIndex];

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700">
      {title && (
        <h3 className="font-heading text-2xl font-bold text-slate-900 mb-6 text-center dark:text-slate-100">
          {title}
        </h3>
      )}

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="font-body text-sm text-slate-600 dark:text-slate-400">
            Card {currentIndex + 1} of {flashcards.length}
          </span>
          <span className="font-body text-sm text-slate-600 dark:text-slate-400">
            Studied: {studiedCount}/{flashcards.length}
          </span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2 dark:bg-slate-700">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300 dark:bg-blue-500"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Flashcard */}
      <div className="mb-6">
        <div
          className="relative h-64 cursor-pointer perspective-1000"
          onClick={handleFlip}
        >
          <div
            className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
              isFlipped ? 'rotate-y-180' : ''
            }`}
          >
            {/* Front of card */}
            <div
              className={`absolute w-full h-full backface-hidden bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg flex items-center justify-center p-8 ${
                isFlipped ? 'invisible' : ''
              }`}
            >
              <div className="text-center">
                {currentCard.category && (
                  <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-white text-sm font-semibold mb-4">
                    {currentCard.category}
                  </span>
                )}
                <p className="font-body text-2xl text-white font-semibold">
                  {currentCard.front}
                </p>
                <p className="font-body text-sm text-white/80 mt-4">
                  Click to reveal answer
                </p>
              </div>
            </div>

            {/* Back of card */}
            <div
              className={`absolute w-full h-full backface-hidden bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg flex items-center justify-center p-8 rotate-y-180 ${
                !isFlipped ? 'invisible' : ''
              }`}
            >
              <div className="text-center">
                <p className="font-body text-2xl text-white font-semibold">
                  {currentCard.back}
                </p>
                <p className="font-body text-sm text-white/80 mt-4">
                  Click to see question
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hint text */}
        <p className="text-center font-body text-sm text-slate-500 mt-4 dark:text-slate-400">
          {isFlipped ? '✓ Answer revealed' : 'Tap card to see answer'}
        </p>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between items-center gap-4">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="px-4 py-2 bg-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-slate-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={handleReset}
          className="px-4 py-2 bg-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-slate-300 transition-colors dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex === flashcards.length - 1}
          className="px-4 py-2 bg-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-slate-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Complete message */}
      {studiedCount === flashcards.length && (
        <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-400 rounded dark:bg-green-900/20 dark:border-green-500">
          <p className="font-body text-green-700 dark:text-green-400">
            🎉 Great job! You've studied all {flashcards.length} flashcards!
          </p>
        </div>
      )}
    </div>
  );
};

export default FlashcardComponent;
