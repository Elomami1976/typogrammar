import React, { useState } from 'react';
import GoogleAd from '../components/GoogleAd';
import { READING_PASSAGES } from '../constants/readingComprehensionData';
import { ReadingPassage, QuizQuestion } from '../types';
import { ArticleParagraph, ArticleHeading } from '../components/ArticleComponents';
import usePageMetadata from '../hooks/usePageMetadata';
import { Link } from 'react-router-dom';
import SchemaMarkup from '../components/SchemaMarkup';

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
  const pageUrl = 'https://typogrammar.com/reading/reading-comprehension-practice';
  const lastUpdated = '2026-02-25';
  const datePublished = '2025-05-01';
  
  // FAQ data for schema and display
  const faqData = [
    {
      question: 'What is reading comprehension?',
      answer: 'Reading comprehension is the ability to understand, interpret, and analyze written text. It involves extracting meaning from passages, identifying main ideas, and making inferences.'
    },
    {
      question: 'How can I improve my reading comprehension?',
      answer: 'Improve reading comprehension by practicing regularly with varied texts, building vocabulary, asking questions while reading, summarizing passages, and testing yourself with comprehension questions.'
    },
    {
      question: 'What types of questions are in reading comprehension tests?',
      answer: 'Common question types include main idea questions, detail questions, inference questions, vocabulary in context, author\'s purpose, and tone/attitude questions.'
    },
    {
      question: 'How do I find the main idea of a passage?',
      answer: 'Find the main idea by: reading the first and last paragraphs carefully, identifying the topic sentence in each paragraph, asking "What is the author\'s overall point?", and looking for repeated concepts or themes throughout the passage.'
    },
    {
      question: 'What is an inference question in reading comprehension?',
      answer: 'An inference question asks you to draw conclusions that aren\'t directly stated but are implied by the text. You combine explicit information with your own reasoning to determine what the author suggests or what must be true.'
    },
    {
      question: 'How much time should I spend on each reading comprehension passage?',
      answer: 'For standardized tests like IELTS or TOEFL, spend about 15-20 minutes per passage (for 3 passages in 60 minutes). First skim the passage (2-3 minutes), then answer questions while referring back to the text.'
    }
  ];
  
  usePageMetadata({
    title: 'Reading Comprehension Practice (2026): Free Passages & Quizzes | Typogrammar',
    description: 'Practice reading comprehension with engaging passages and interactive quizzes. Improve your reading skills with exercises covering science, history, technology, and more.',
    ogTitle: 'Reading Comprehension Practice (2026): Free Passages & Quizzes',
    ogDescription: 'Practice reading comprehension with engaging passages and interactive quizzes. Improve your reading skills with exercises covering multiple topics.',
    ogType: 'article',
    ogUrl: pageUrl,
  });

  const [openPassageId, setOpenPassageId] = useState<string | null>(READING_PASSAGES[0]?.id || null);

  const togglePassage = (id: string) => {
    setOpenPassageId(openPassageId === id ? null : id);
  };

  return (
    <article className="max-w-4xl mx-auto">
      {/* GEO Meta Tags */}
      <meta name="geo.region" content="Global" />
      <meta name="language" content="English" />
      
      {/* Article Schema */}
      <SchemaMarkup
        type="Article"
        data={{
          headline: 'Reading Comprehension Practice (2026): Free Passages & Quizzes',
          description: 'Practice reading comprehension with engaging passages and interactive quizzes. Improve your reading skills with exercises covering multiple topics.',
          author: {
            '@type': 'Organization',
            name: 'Typogrammar',
            url: 'https://typogrammar.com/about'
          },
          publisher: {
            '@type': 'Organization',
            name: 'Typogrammar',
            url: 'https://typogrammar.com'
          },
          datePublished: datePublished,
          dateModified: lastUpdated,
          mainEntityOfPage: pageUrl
        }}
      />
      
      {/* FAQ Schema */}
      <SchemaMarkup
        type="FAQPage"
        data={{
          mainEntity: faqData.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer
            }
          }))
        }}
      />
      
      {/* AI-Friendly Definition Box */}
      <div className="bg-gradient-to-r from-green-100 to-teal-100 dark:from-slate-700 dark:to-slate-600 border-l-4 border-green-600 p-6 rounded-lg mb-8 shadow-md">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Definition:</h2>
        <p className="text-slate-800 dark:text-slate-200 leading-relaxed">
          Reading comprehension is the ability to understand, interpret, and extract meaning from written text through active engagement and critical thinking.
        </p>
      </div>
      
      <div className="text-center mb-8">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight dark:text-slate-100">Reading Comprehension Practice (2026)</h1>
        
        {/* E-E-A-T Signals */}
        <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-6">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/></svg>
            By <Link to="/about/" className="text-blue-600 dark:text-blue-400 hover:underline">Typogrammar Team</Link>
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/></svg>
            Updated: {lastUpdated}
          </span>
          <span className="flex items-center gap-1 text-green-600 dark:text-green-400">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
            Reviewed by Education Expert
          </span>
        </div>
        
        <ArticleParagraph>
          Read the following passages and answer the questions to test your understanding. Click on a topic to begin.
        </ArticleParagraph>
        
        {/* GEO Optimization */}
        <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg mb-8 text-left">
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            These reading comprehension exercises are designed for learners worldwide, including students in the UK, US, Canada, Australia, India, and other English-speaking regions. We use neutral global English suitable for academic and test preparation contexts.
          </p>
        </div>
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
      
      {/* Visible FAQ Section */}
      <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700 bg-white p-8 md:p-10 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <ArticleHeading>Frequently Asked Questions About Reading Comprehension</ArticleHeading>
        <div className="space-y-6 mt-6">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-6 border border-slate-200 dark:border-slate-600">
              <h3 className="font-heading text-xl font-bold text-slate-800 dark:text-slate-200 mb-3">
                {faq.question}
              </h3>
              <ArticleParagraph>{faq.answer}</ArticleParagraph>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-8">
        <GoogleAd adSlot="6406598038" />
      </div>
    </article>
  );
};

export default ReadingComprehensionPage;
