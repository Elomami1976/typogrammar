import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading, BulletList } from '../components/ArticleComponents';

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface Passage {
  title: string;
  content: string;
  questions: Question[];
}

const TOEFLReadingPracticeQuestionsPage: React.FC = () => {
  usePageMetadata({
    title: 'TOEFL Reading Practice Questions (with Answers) | Free Practice Test | TypoGrammar',
    description: 'Practice TOEFL Reading questions with answers and explanations. Free TOEFL-style reading passages with vocabulary, inference, and factual information questions.'
  });

  const [showAnswers, setShowAnswers] = useState<{ [key: string]: boolean }>({});

  const toggleAnswers = (passageKey: string) => {
    setShowAnswers(prev => ({
      ...prev,
      [passageKey]: !prev[passageKey]
    }));
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How can I improve my TOEFL Reading score?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can improve your score by practicing regularly, expanding your vocabulary, and learning common TOEFL question types."
        }
      },
      {
        "@type": "Question",
        "name": "How many questions are in the TOEFL Reading section?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The TOEFL Reading section contains 20 questions based on two passages."
        }
      },
      {
        "@type": "Question",
        "name": "Is TOEFL Reading difficult?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The passages are academic, but with consistent practice most students improve quickly."
        }
      },
      {
        "@type": "Question",
        "name": "How often should I practice TOEFL Reading?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For best results, try to practice reading exercises 3-5 times per week."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "TOEFL Reading Practice Questions (with Answers)",
    "description": "Practice TOEFL Reading questions with answers and explanations. Free TOEFL-style reading passages.",
    "author": {
      "@type": "Organization",
      "name": "TypoGrammar"
    },
    "publisher": {
      "@type": "Organization",
      "name": "TypoGrammar",
      "url": "https://typogrammar.com"
    },
    "datePublished": "2026-03-11",
    "dateModified": "2026-03-11"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://typogrammar.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "TOEFL",
        "item": "https://typogrammar.com/toefl"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "TOEFL Reading",
        "item": "https://typogrammar.com/toefl/toefl-reading"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Practice Questions",
        "item": "https://typogrammar.com/toefl/toefl-reading/toefl-reading-practice-questions"
      }
    ]
  };

  useEffect(() => {
    const schemas = [faqSchema, articleSchema, breadcrumbSchema];
    const scripts: HTMLScriptElement[] = [];
    
    schemas.forEach((schema) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
      scripts.push(script);
    });

    return () => {
      scripts.forEach(script => {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      });
    };
  }, []);

  const passages: Passage[] = [
    {
      title: "The Evolution of Feathers",
      content: `Many scientists believe that birds evolved from small dinosaurs known as theropods. Fossil evidence suggests that feathers first appeared as insulation to keep these animals warm. Over time, feathers developed additional functions such as display and eventually flight.

Some fossils discovered in China show dinosaur species with feather-like structures. These discoveries have strengthened the theory that modern birds share a common ancestor with certain dinosaur groups.

Understanding this evolutionary process helps scientists explain how complex features such as wings developed gradually through natural selection.`,
      questions: [
        {
          question: "According to the passage, why did feathers originally develop?",
          options: [
            "A) To help birds fly",
            "B) To provide insulation",
            "C) To attract predators",
            "D) To increase body size"
          ],
          correctAnswer: 1,
          explanation: "The passage states that feathers first appeared as insulation to keep animals warm."
        },
        {
          question: 'The word "evolved" in the passage is closest in meaning to:',
          options: [
            "A) changed gradually",
            "B) disappeared suddenly",
            "C) remained the same",
            "D) expanded quickly"
          ],
          correctAnswer: 0,
          explanation: 'The word "evolved" refers to gradual change over time.'
        },
        {
          question: "What can be inferred from the fossil discoveries in China?",
          options: [
            "A) Dinosaurs and birds are unrelated",
            "B) Some dinosaurs had feather-like structures",
            "C) Birds evolved from mammals",
            "D) Feathers were used only for decoration"
          ],
          correctAnswer: 1,
          explanation: "The passage mentions fossils showing dinosaurs with feather-like structures."
        }
      ]
    },
    {
      title: "The Role of Forests in Ecological Balance",
      content: `Forests play an important role in maintaining ecological balance on Earth. They absorb carbon dioxide from the atmosphere and release oxygen through the process of photosynthesis. Because of this function, forests are often called the "lungs of the planet."

However, deforestation has increased significantly in many parts of the world. Large areas of forest are cleared for agriculture, urban development, and industrial use. This process reduces biodiversity and contributes to climate change.

Protecting forests is therefore essential for preserving ecosystems and maintaining environmental stability.`,
      questions: [
        {
          question: 'Why are forests called the "lungs of the planet"?',
          options: [
            "A) They provide shelter for animals",
            "B) They absorb carbon dioxide and release oxygen",
            "C) They create rainfall patterns",
            "D) They reduce soil erosion"
          ],
          correctAnswer: 1,
          explanation: "The passage explains that forests absorb carbon dioxide and release oxygen through photosynthesis."
        },
        {
          question: 'The word "significantly" in the passage is closest in meaning to:',
          options: [
            "A) slightly",
            "B) greatly",
            "C) rarely",
            "D) slowly"
          ],
          correctAnswer: 1,
          explanation: 'The word "significantly" means something has increased by a large amount.'
        },
        {
          question: "What is one consequence of deforestation mentioned in the passage?",
          options: [
            "A) Increased biodiversity",
            "B) Reduced biodiversity",
            "C) Improved air quality",
            "D) Increased rainfall"
          ],
          correctAnswer: 1,
          explanation: "The passage states that deforestation reduces biodiversity."
        }
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="text-sm mb-6 text-slate-600 dark:text-slate-400">
        <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/toefl/toefl-reading/toefl-reading-section-explained/" className="hover:text-blue-600 dark:hover:text-blue-400">TOEFL Reading</Link>
        <span className="mx-2">›</span>
        <span className="text-slate-900 dark:text-slate-100">Practice Questions</span>
      </nav>

      <h1 className="text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100">
        TOEFL Reading Practice Questions (with Answers)
      </h1>

      <ArticleParagraph>
        Practicing <strong>TOEFL Reading questions</strong> is one of the best ways to improve your TOEFL score. The reading section tests your ability to understand academic texts, identify main ideas, and answer different question types.
      </ArticleParagraph>

      <ArticleParagraph>
        On this page, you will find <strong>TOEFL-style reading practice questions with answers and explanations</strong>. These exercises are designed to help you become familiar with the types of questions used in the real TOEFL exam.
      </ArticleParagraph>

      <ArticleParagraph>
        By practicing regularly, you can improve your reading speed, vocabulary, and comprehension skills.
      </ArticleParagraph>

      {/* TOEFL Reading Section Overview */}
      <ArticleHeading id="overview">TOEFL Reading Section Overview</ArticleHeading>

      <ArticleParagraph>
        Before starting the practice questions, it is important to understand how the <strong>TOEFL Reading section</strong> works.
      </ArticleParagraph>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse border border-slate-300 dark:border-slate-600">
          <thead>
            <tr className="bg-slate-100 dark:bg-slate-800">
              <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold text-slate-900 dark:text-slate-100">Feature</th>
              <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold text-slate-900 dark:text-slate-100">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Number of passages</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">2</td>
            </tr>
            <tr className="bg-slate-50 dark:bg-slate-800/50">
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Questions per passage</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">10</td>
            </tr>
            <tr>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Total questions</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">20</td>
            </tr>
            <tr className="bg-slate-50 dark:bg-slate-800/50">
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Time limit</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">35 minutes</td>
            </tr>
            <tr>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Score range</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">0-30</td>
            </tr>
          </tbody>
        </table>
      </div>

      <ArticleParagraph>
        Each passage is around <strong>700 words long</strong> and covers topics such as science, history, psychology, or environmental studies.
      </ArticleParagraph>

      {/* Practice Passages */}
      {passages.map((passage, passageIndex) => (
        <div key={passageIndex} className="mt-10">
          <ArticleHeading id={`passage-${passageIndex + 1}`}>
            TOEFL Reading Practice Passage {passageIndex + 1}
          </ArticleHeading>

          {/* Passage Content */}
          <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-lg border border-slate-200 dark:border-slate-700 my-6">
            <h4 className="font-semibold text-lg text-slate-900 dark:text-slate-100 mb-4">
              Passage: {passage.title}
            </h4>
            {passage.content.split('\n\n').map((para, i) => (
              <p key={i} className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4 last:mb-0">
                {para}
              </p>
            ))}
          </div>

          {/* Questions */}
          <h4 className="font-semibold text-xl text-slate-900 dark:text-slate-100 mt-6 mb-4">
            Questions
          </h4>

          {passage.questions.map((q, qIndex) => (
            <div key={qIndex} className="bg-white dark:bg-slate-900 p-5 rounded-lg border border-slate-200 dark:border-slate-700 mb-4">
              <p className="font-semibold text-slate-900 dark:text-slate-100 mb-3">
                Question {qIndex + 1}: {q.question}
              </p>
              <div className="space-y-2 ml-4">
                {q.options.map((option, optIndex) => (
                  <p key={optIndex} className="text-slate-700 dark:text-slate-300">
                    {option}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {/* Show/Hide Answers Button */}
          <button
            onClick={() => toggleAnswers(`passage-${passageIndex}`)}
            className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            {showAnswers[`passage-${passageIndex}`] ? 'Hide Answers' : 'Show Answers & Explanations'}
          </button>

          {/* Answers Section */}
          {showAnswers[`passage-${passageIndex}`] && (
            <div className="mt-6 bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-xl text-slate-900 dark:text-slate-100 mb-4">
                Answers and Explanations
              </h4>
              {passage.questions.map((q, qIndex) => (
                <div key={qIndex} className="mb-4 last:mb-0">
                  <p className="font-semibold text-slate-900 dark:text-slate-100">
                    Question {qIndex + 1}: {q.options[q.correctAnswer].split(') ')[1]}
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 mt-1">
                    {q.explanation}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Common Question Types */}
      <ArticleHeading id="question-types">Common TOEFL Reading Question Types</ArticleHeading>

      <ArticleParagraph>
        While practicing, you will notice several common TOEFL question types:
      </ArticleParagraph>

      <BulletList items={[
        'Factual information questions',
        'Vocabulary in context questions',
        'Inference questions',
        'Sentence simplification questions',
        'Summary questions'
      ]} />

      <ArticleParagraph>
        Understanding these question types can make answering questions much easier.
      </ArticleParagraph>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
        <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
          Learn more about each question type:
        </p>
        <Link 
          to="/toefl/toefl-reading/toefl-reading-question-types/" 
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          → Complete Guide to TOEFL Reading Question Types
        </Link>
      </div>

      {/* Tips Section */}
      <ArticleHeading id="tips">Tips for TOEFL Reading Practice</ArticleHeading>

      <ArticleParagraph>
        Here are some useful tips when practicing TOEFL Reading:
      </ArticleParagraph>

      <div className="space-y-4 my-6">
        <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700">
          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
            1. Practice with academic texts
          </h4>
          <p className="text-slate-700 dark:text-slate-300">
            TOEFL passages use university-level topics such as science and history.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700">
          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
            2. Learn new vocabulary daily
          </h4>
          <p className="text-slate-700 dark:text-slate-300">
            Academic vocabulary appears frequently in TOEFL passages.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700">
          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
            3. Practice skimming and scanning
          </h4>
          <p className="text-slate-700 dark:text-slate-300">
            These techniques help you find information quickly.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700">
          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
            4. Time yourself during practice
          </h4>
          <p className="text-slate-700 dark:text-slate-300">
            Try to complete each passage in about 17 minutes.
          </p>
        </div>
      </div>

      {/* How Often Section */}
      <ArticleHeading id="frequency">How Often Should You Practice TOEFL Reading?</ArticleHeading>

      <ArticleParagraph>
        For best results, try to practice reading exercises <strong>3-5 times per week</strong>.
      </ArticleParagraph>

      <ArticleParagraph>
        Regular practice will help you:
      </ArticleParagraph>

      <BulletList items={[
        'Read faster',
        'Understand academic texts',
        'Answer questions more confidently'
      ]} />

      {/* FAQ Section */}
      <ArticleHeading id="faq">TOEFL Reading Practice FAQs</ArticleHeading>

      <div className="space-y-4 my-6">
        <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-lg">
          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
            How can I improve my TOEFL Reading score?
          </h4>
          <p className="text-slate-700 dark:text-slate-300">
            You can improve your score by practicing regularly, expanding your vocabulary, and learning common TOEFL question types.
          </p>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-lg">
          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
            How many questions are in the TOEFL Reading section?
          </h4>
          <p className="text-slate-700 dark:text-slate-300">
            The TOEFL Reading section contains 20 questions based on two passages.
          </p>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-lg">
          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
            Is TOEFL Reading difficult?
          </h4>
          <p className="text-slate-700 dark:text-slate-300">
            The passages are academic, but with consistent practice most students improve quickly.
          </p>
        </div>
      </div>

      {/* Final Thoughts */}
      <ArticleHeading id="conclusion">Final Thoughts</ArticleHeading>

      <ArticleParagraph>
        Practicing <strong>TOEFL Reading questions with answers</strong> is one of the most effective ways to prepare for the TOEFL exam. By working through practice passages and understanding why answers are correct, you will improve your reading skills and perform better on test day.
      </ArticleParagraph>

      <ArticleParagraph>
        Continue practicing regularly and treat each passage like a short academic article.
      </ArticleParagraph>

      {/* Related Resources */}
      <div className="mt-10 p-6 bg-slate-100 dark:bg-slate-800 rounded-lg">
        <h4 className="font-semibold text-xl text-slate-900 dark:text-slate-100 mb-4">
          Continue Learning: TOEFL Reading Resources
        </h4>
        <div className="grid md:grid-cols-2 gap-4">
          <Link 
            to="/toefl/toefl-reading/toefl-reading-section-explained/"
            className="block p-4 bg-white dark:bg-slate-900 rounded-lg hover:shadow-md transition-shadow border border-slate-200 dark:border-slate-700"
          >
            <p className="font-semibold text-blue-600 dark:text-blue-400">TOEFL Reading Section Explained</p>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Complete overview of the reading section</p>
          </Link>
          <Link 
            to="/toefl/toefl-reading/toefl-reading-strategies/"
            className="block p-4 bg-white dark:bg-slate-900 rounded-lg hover:shadow-md transition-shadow border border-slate-200 dark:border-slate-700"
          >
            <p className="font-semibold text-blue-600 dark:text-blue-400">TOEFL Reading Strategies</p>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Proven strategies to score higher</p>
          </Link>
          <Link 
            to="/toefl/toefl-reading/toefl-reading-question-types/"
            className="block p-4 bg-white dark:bg-slate-900 rounded-lg hover:shadow-md transition-shadow border border-slate-200 dark:border-slate-700"
          >
            <p className="font-semibold text-blue-600 dark:text-blue-400">TOEFL Reading Question Types</p>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Master all question formats</p>
          </Link>
          <Link 
            to="/toefl/toefl-reading/toefl-reading-time-management/"
            className="block p-4 bg-white dark:bg-slate-900 rounded-lg hover:shadow-md transition-shadow border border-slate-200 dark:border-slate-700"
          >
            <p className="font-semibold text-blue-600 dark:text-blue-400">TOEFL Reading Time Management</p>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Complete passages in 17 minutes</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TOEFLReadingPracticeQuestionsPage;
