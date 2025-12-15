
import React, { useState } from 'react';
import GoogleAd from '../components/GoogleAd';
import { READING_PASSAGES } from '../constants/readingComprehensionData';
import { ReadingPassage, QuizQuestion } from '../types';
import { ArticleParagraph } from '../components/ArticleComponents';
import usePageMetadata from '../hooks/usePageMetadata';

// Self-contained Quiz component for each passage
const PassageQuiz: React.FC<{ questions: QuizQuestion[] }> = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showScore, setShowScore] = useState(false);

  if (!questions || questions.length === 0) {
    return null;
  }

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer === null) return;
    setIsAnswered(true);
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(prevScore => prevScore + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setShowScore(true);
    }
  };

  const handleRetakeQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setShowScore(false);
  };

  if (showScore) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="text-center p-6 bg-slate-100 rounded-lg border border-slate-200 dark:bg-slate-900 dark:border-slate-700">
        <h3 className="font-heading text-2xl font-bold text-slate-800 mb-2 dark:text-slate-200">Quiz Complete!</h3>
        <p className="font-body text-lg text-slate-600 mb-4 dark:text-slate-400">
          Your score: <span className="font-bold text-blue-600 dark:text-blue-400">{score} / {questions.length}</span> ({percentage}%)
        </p>
        <button
          onClick={handleRetakeQuiz}
          className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-offset-slate-800"
        >
          Retake Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 bg-slate-50 rounded-xl border border-slate-200 dark:bg-slate-900/50 dark:border-slate-700">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-heading text-xl font-bold text-slate-800 dark:text-slate-200">Comprehension Quiz</h3>
        <p className="font-body text-sm text-slate-500 dark:text-slate-400">Question {currentQuestionIndex + 1} of {questions.length}</p>
      </div>
      <div>
        <p className="font-body text-lg text-slate-700 mb-4 dark:text-slate-300">{currentQuestion.question}</p>
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => {
            let optionClass = 'bg-white hover:bg-blue-50 dark:bg-slate-700 dark:hover:bg-slate-600';
            if (isAnswered) {
              if (index === currentQuestion.correctAnswer) {
                optionClass = 'bg-green-100 text-green-800 border-green-500 dark:bg-green-900/50 dark:text-green-300 dark:border-green-600';
              } else if (index === selectedAnswer) {
                optionClass = 'bg-red-100 text-red-800 border-red-500 dark:bg-red-900/50 dark:text-red-300 dark:border-red-600';
              } else {
                optionClass = 'bg-slate-100 text-slate-500 dark:bg-slate-700 dark:text-slate-400';
              }
            } else if (index === selectedAnswer) {
              optionClass = 'bg-blue-100 border-blue-500 dark:bg-blue-900/50 dark:border-blue-500';
            }
            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={isAnswered}
                className={`w-full text-left p-3 rounded-lg border-2 transition-all duration-200 text-base font-medium ${optionClass} ${!isAnswered ? 'cursor-pointer' : 'cursor-default'}`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
      {isAnswered && (
        <div className="mt-4 p-3 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg text-blue-800 dark:bg-blue-900/30 dark:border-blue-500 dark:text-blue-300">
          <p className="font-bold">Explanation:</p>
          <p className="mt-1">{currentQuestion.explanation}</p>
        </div>
      )}
      <div className="mt-6 flex justify-end">
        {!isAnswered ? (
          <button onClick={handleCheckAnswer} disabled={selectedAnswer === null} className="bg-blue-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-blue-700 transition-colors text-base disabled:bg-slate-400 disabled:cursor-not-allowed dark:bg-blue-500 dark:hover:bg-blue-600 dark:disabled:bg-slate-600">
            Check Answer
          </button>
        ) : (
          <button onClick={handleNextQuestion} className="bg-green-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-green-700 transition-colors text-base dark:bg-green-500 dark:hover:bg-green-600">
            {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
          </button>
        )}
      </div>
    </div>
  );
};


// Main Page Component
const ReadingComprehensionPage: React.FC = () => {
  usePageMetadata({
    title: 'Reading Comprehension Practice | TypoGrammar',
    description: 'Practice your reading comprehension skills with engaging passages and questions. Test your understanding and improve your reading abilities with interactive exercises.'
  });

  const [openPassageId, setOpenPassageId] = useState<string | null>(READING_PASSAGES[0]?.id || null);

  const togglePassage = (id: string) => {
    setOpenPassageId(openPassageId === id ? null : id);
  };

  return (
    <article className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight dark:text-slate-100">Reading Comprehension Practice</h1>
        <ArticleParagraph>
          Read the following passages and answer the questions to test your understanding. Click on a topic to begin.
        </ArticleParagraph>
      </div>

      <div className="space-y-4">
        {READING_PASSAGES.map((passage) => (
          <div key={passage.id} className="border border-slate-200 rounded-xl overflow-hidden bg-white dark:border-slate-700 dark:bg-slate-800/50">
            <button
              onClick={() => togglePassage(passage.id)}
              className="w-full flex justify-between items-center text-left p-6 reading-accordion-button"
              aria-expanded={openPassageId === passage.id}
              aria-controls={`passage-${passage.id}`}
            >
              <div>
                <p className="font-body text-sm font-semibold text-blue-600 dark:text-blue-400">{passage.category}</p>
                <h2 className="font-heading text-2xl font-bold text-slate-800 mt-1 dark:text-slate-200">{passage.title}</h2>
              </div>
              <div className="flex-shrink-0 ml-4">
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 ${openPassageId === passage.id ? 'rotate-180 text-blue-600 dark:text-blue-500' : 'text-slate-400'}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            <div
              id={`passage-${passage.id}`}
              className={`grid transition-all duration-500 ease-in-out reading-accordion-content ${openPassageId === passage.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
              <div className="overflow-hidden">
                <div className="p-6 pt-0">
                  <div className="prose prose-lg max-w-none border-t border-slate-200 pt-6 dark:border-slate-700">
                    {passage.content}
                  </div>
                  
                  {passage.vocabulary && passage.vocabulary.length > 0 && (
                    <div className="mt-8">
                      <h3 className="font-heading text-xl font-bold text-slate-800 mb-4 dark:text-slate-200">Key Vocabulary</h3>
                      <dl className="space-y-4">
                        {passage.vocabulary.map((vocab, index) => (
                          <div key={index} className="p-4 bg-slate-50 rounded-lg border border-slate-200 dark:bg-slate-900/50 dark:border-slate-700">
                            <dt className="font-semibold text-slate-800 dark:text-slate-200 font-body text-lg">{vocab.word}</dt>
                            <dd className="text-slate-600 mt-1 dark:text-slate-400 font-body">{vocab.meaning}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  )}

                  <div className="mt-8">
                    <PassageQuiz questions={passage.questions} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <GoogleAd adSlot="6406598038" />
      </div>
    </article>
  );
};

export default ReadingComprehensionPage;
