import React, { useState } from 'react';

interface MatchPair {
  left: string;
  right: string;
  explanation?: string;
}

interface MatchingExerciseProps {
  title: string;
  pairs: MatchPair[];
  leftLabel?: string;
  rightLabel?: string;
  onComplete?: (score: number, total: number) => void;
}

const MatchingExercise: React.FC<MatchingExerciseProps> = ({
  title,
  pairs,
  leftLabel = 'Match these',
  rightLabel = 'With these',
  onComplete
}) => {
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [selectedRight, setSelectedRight] = useState<number | null>(null);
  const [matches, setMatches] = useState<Map<number, number>>(new Map());
  const [showResults, setShowResults] = useState(false);
  
  // Shuffle right items
  const [rightItems] = useState(() => {
    const shuffled = [...pairs.map((p, idx) => ({ text: p.right, originalIdx: idx }))];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  });

  const handleLeftClick = (idx: number) => {
    if (matches.has(idx)) return; // Already matched
    setSelectedLeft(idx);
    if (selectedRight !== null) {
      makeMatch(idx, selectedRight);
    }
  };

  const handleRightClick = (idx: number) => {
    // Check if this right item is already matched
    const alreadyMatched = Array.from(matches.values()).includes(idx);
    if (alreadyMatched) return;
    
    setSelectedRight(idx);
    if (selectedLeft !== null) {
      makeMatch(selectedLeft, idx);
    }
  };

  const makeMatch = (leftIdx: number, rightIdx: number) => {
    const newMatches = new Map(matches);
    newMatches.set(leftIdx, rightIdx);
    setMatches(newMatches);
    setSelectedLeft(null);
    setSelectedRight(null);
  };

  const unmatch = (leftIdx: number) => {
    const newMatches = new Map(matches);
    newMatches.delete(leftIdx);
    setMatches(newMatches);
  };

  const checkAnswers = () => {
    setShowResults(true);
    const score = Array.from(matches.entries()).reduce((acc, [leftIdx, rightIdx]) => {
      const rightItem = rightItems[rightIdx];
      return acc + (rightItem.originalIdx === leftIdx ? 1 : 0);
    }, 0);
    if (onComplete) {
      onComplete(score, pairs.length);
    }
  };

  const reset = () => {
    setMatches(new Map());
    setSelectedLeft(null);
    setSelectedRight(null);
    setShowResults(false);
  };

  const score = Array.from(matches.entries()).reduce((acc, [leftIdx, rightIdx]) => {
    const rightItem = rightItems[rightIdx];
    return acc + (rightItem.originalIdx === leftIdx ? 1 : 0);
  }, 0);

  const isMatchCorrect = (leftIdx: number, rightIdx: number) => {
    const rightItem = rightItems[rightIdx];
    return rightItem.originalIdx === leftIdx;
  };

  if (showResults) {
    return (
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 my-6">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          {title} - Results
        </h3>
        <div className="text-center mb-6">
          <p className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
            {score} / {pairs.length}
          </p>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            {score === pairs.length 
              ? '🎉 Perfect matching!' 
              : score >= pairs.length * 0.7 
                ? '👍 Good job!' 
                : '📚 Try again!'}
          </p>
        </div>

        <div className="space-y-3 mb-6">
          {pairs.map((pair, idx) => (
            <div key={idx} className="border border-slate-300 dark:border-slate-600 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-900 dark:text-slate-100 font-medium">{pair.left}</span>
                <span className="text-2xl mx-4">→</span>
                <span className="text-slate-900 dark:text-slate-100 font-medium">{pair.right}</span>
              </div>
              {pair.explanation && (
                <p className="text-sm text-slate-600 dark:text-slate-400 italic">
                  {pair.explanation}
                </p>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={reset}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 my-6">
      <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
        {title}
      </h3>
      
      <p className="text-slate-600 dark:text-slate-400 mb-6">
        Click an item on the left, then click its match on the right. Matched pairs will turn green.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Left column */}
        <div>
          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">{leftLabel}</h4>
          <div className="space-y-2">
            {pairs.map((pair, idx) => {
              const isMatched = matches.has(idx);
              const matchedRightIdx = matches.get(idx);
              const isSelected = selectedLeft === idx;
              const isCorrect = isMatched && matchedRightIdx !== undefined && isMatchCorrect(idx, matchedRightIdx);
              const isIncorrect = showResults && isMatched && !isCorrect;

              return (
                <button
                  key={idx}
                  onClick={() => isMatched ? unmatch(idx) : handleLeftClick(idx)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all ${
                    isMatched && isCorrect
                      ? 'bg-green-100 dark:bg-green-900/30 border-2 border-green-500 text-green-800 dark:text-green-300'
                      : isMatched && isIncorrect
                        ? 'bg-red-100 dark:bg-red-900/30 border-2 border-red-500 text-red-800 dark:text-red-300'
                        : isMatched
                          ? 'bg-blue-100 dark:bg-blue-900/30 border-2 border-blue-500 text-blue-800 dark:text-blue-300'
                          : isSelected
                            ? 'bg-blue-500 text-white border-2 border-blue-600'
                            : 'bg-slate-100 dark:bg-slate-700 border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-600'
                  }`}
                >
                  {pair.left}
                  {isMatched && (isCorrect ? ' ✅' : isIncorrect ? ' ❌' : '')}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right column */}
        <div>
          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">{rightLabel}</h4>
          <div className="space-y-2">
            {rightItems.map((item, idx) => {
              const isMatched = Array.from(matches.values()).includes(idx);
              const isSelected = selectedRight === idx;

              return (
                <button
                  key={idx}
                  onClick={() => isMatched ? null : handleRightClick(idx)}
                  disabled={isMatched}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all ${
                    isMatched
                      ? 'bg-slate-200 dark:bg-slate-600 border-2 border-slate-300 dark:border-slate-500 text-slate-500 dark:text-slate-400 opacity-50 cursor-not-allowed'
                      : isSelected
                        ? 'bg-blue-500 text-white border-2 border-blue-600'
                        : 'bg-slate-100 dark:bg-slate-700 border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-600'
                  }`}
                >
                  {item.text}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
          Matched: {matches.size} / {pairs.length}
        </p>
        <button
          onClick={checkAnswers}
          disabled={matches.size !== pairs.length}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-semibold py-3 px-8 rounded-lg transition-colors"
        >
          Check Answers
        </button>
      </div>
    </div>
  );
};

export default MatchingExercise;
