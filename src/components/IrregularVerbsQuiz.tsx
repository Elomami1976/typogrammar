
import React, { useState, useEffect } from 'react';
import { IRREGULAR_VERBS } from '../constants/irregularVerbs';
import { IrregularVerb } from '../types';

interface QuizQuestion {
  verb: IrregularVerb;
  formToGuess: 'pastSimple' | 'pastParticiple';
}

interface IrregularVerbsQuizProps {
  onQuizComplete: (score: number, total: number) => void;
}

const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

const IrregularVerbsQuiz: React.FC<IrregularVerbsQuizProps> = ({ onQuizComplete }) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const generateQuestions = () => {
    const shuffledVerbs = shuffleArray(IRREGULAR_VERBS);
    const selectedVerbs = shuffledVerbs.slice(0, 10);
    // FIX: Add return type to map callback to provide contextual typing
    // and prevent string literal types from being widened to `string`.
    const newQuestions = selectedVerbs.map((verb): QuizQuestion => ({
      verb,
      formToGuess: Math.random() < 0.5 ? 'pastSimple' : 'pastParticiple',
    }));
    setQuestions(newQuestions);
  };

  useEffect(() => {
    generateQuestions();
  }, []);

  const handleRetakeQuiz = () => {
    generateQuestions();
    setCurrentQuestionIndex(0);
    setScore(0);
    setUserAnswer('');
    setIsAnswered(false);
    setIsCorrect(null);
    setShowScore(false);
  };
  
  const handleFinishQuiz = () => {
    // Score is already updated in handleCheckAnswer, so we can pass it directly.
    onQuizComplete(score, questions.length);
    setShowScore(true);
  };


  const handleCheckAnswer = (e: React.FormEvent) => {
    e.preventDefault();
    if (userAnswer.trim() === '') return;

    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswer = currentQuestion.verb[currentQuestion.formToGuess];
    
    const correctAnswers = correctAnswer.split('/').map(ans => ans.trim().toLowerCase());
    const wasCorrect = correctAnswers.includes(userAnswer.trim().toLowerCase());

    setIsAnswered(true);
    setIsCorrect(wasCorrect);

    if (wasCorrect) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setUserAnswer('');
      setIsAnswered(false);
      setIsCorrect(null);
    } else {
      handleFinishQuiz();
    }
  };

  if (questions.length === 0) {
    return null;
  }

  if (showScore) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="text-center p-8 bg-slate-50 rounded-lg border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
        <h3 className="font-heading text-3xl font-bold text-slate-800 mb-4 dark:text-slate-200">Quiz Complete!</h3>
        <p className="font-body text-xl text-slate-600 mb-6 dark:text-slate-400">
          You got <span className="font-bold text-blue-600 dark:text-blue-400">{score}</span> out of <span className="font-bold text-blue-600 dark:text-blue-400">{questions.length}</span> correct! ({percentage}%)
        </p>
        <button
          onClick={handleRetakeQuiz}
          className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-offset-slate-800"
        >
          Try Again
        </button>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const questionText = `What is the ${currentQuestion.formToGuess === 'pastSimple' ? 'Past Simple' : 'Past Participle'} of "${currentQuestion.verb.base}"?`;
  const correctAnswer = currentQuestion.verb[currentQuestion.formToGuess];

  let feedbackClass = '';
  if (isAnswered) {
    feedbackClass = isCorrect ? 
      'border-green-500 ring-green-500 focus:border-green-500 focus:ring-green-500 dark:border-green-600 dark:ring-green-600 dark:focus:border-green-600' : 
      'border-red-500 ring-red-500 focus:border-red-500 focus:ring-red-500 dark:border-red-600 dark:ring-red-600 dark:focus:border-red-600';
  }

  return (
    <div className="p-6 md:p-8 bg-slate-50 rounded-xl border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-heading text-2xl font-bold text-slate-800 dark:text-slate-200">Irregular Verbs Quiz</h3>
        <p className="font-body text-slate-500 dark:text-slate-400">Question {currentQuestionIndex + 1} of {questions.length}</p>
      </div>

      <div>
        <p className="font-body text-xl text-slate-700 mb-6 dark:text-slate-300">{questionText}</p>
        <form onSubmit={!isAnswered ? handleCheckAnswer : (e) => { e.preventDefault(); handleNextQuestion(); }}>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Your answer..."
              readOnly={isAnswered}
              className={`flex-grow w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-body text-lg transition-colors duration-200 shadow-sm dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200 dark:focus:ring-blue-500 dark:placeholder-slate-400 ${feedbackClass}`}
              autoFocus
              autoCapitalize="none"
            />
            {!isAnswered ? (
              <button
                type="submit"
                disabled={userAnswer.trim() === ''}
                className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors text-lg disabled:bg-slate-400 disabled:cursor-not-allowed dark:bg-blue-500 dark:hover:bg-blue-600 dark:disabled:bg-slate-600"
              >
                Check Answer
              </button>
            ) : (
              <button
                type="button"
                onClick={handleNextQuestion}
                className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors text-lg dark:bg-green-500 dark:hover:bg-green-600"
              >
                {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
              </button>
            )}
          </div>
        </form>
      </div>

      {isAnswered && (
        <div className={`mt-6 p-4 border-l-4 rounded-r-lg ${isCorrect ? 'bg-green-50 border-green-400 text-green-800 dark:bg-green-900/30 dark:border-green-500 dark:text-green-300' : 'bg-red-50 border-red-400 text-red-800 dark:bg-red-900/30 dark:border-red-500 dark:text-red-300'}`}>
          <p className="font-bold">{isCorrect ? 'Correct!' : `Not quite! The correct answer is: ${correctAnswer}`}</p>
        </div>
      )}
    </div>
  );
};

export default IrregularVerbsQuiz;