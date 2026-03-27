import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading, BulletList } from '../components/ArticleComponents';

const TOEFLReadingPracticePDFPage: React.FC = () => {
  usePageMetadata({
    title: 'TOEFL Reading Practice PDF (Free Download + Full Test) | TypoGrammar',
    description: 'Download a free TOEFL Reading Practice PDF with a full academic passage, 10 multiple-choice questions, and detailed explanations. Perfect for TOEFL iBT preparation.'
  });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is included in this TOEFL Reading Practice PDF?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This PDF includes a full-length academic reading passage, 10 multiple-choice questions, and a complete answer key with explanations designed to match the TOEFL iBT format."
        }
      },
      {
        "@type": "Question",
        "name": "Is this TOEFL reading practice suitable for beginners?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This practice is best for intermediate to advanced learners. Beginners may find the vocabulary and question types challenging."
        }
      },
      {
        "@type": "Question",
        "name": "How long should I spend on this practice test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You should aim to complete it in 20 minutes, which matches the real TOEFL reading timing for a single passage."
        }
      },
      {
        "@type": "Question",
        "name": "Can this PDF help me improve my TOEFL score?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Practicing with realistic materials improves reading speed, vocabulary recognition, and question-solving strategies, which can increase your TOEFL reading score."
        }
      },
      {
        "@type": "Question",
        "name": "Are the answers explained?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Each question includes a clear explanation so you understand why the correct answer is right and why the others are wrong."
        }
      },
      {
        "@type": "Question",
        "name": "How often should I practice TOEFL reading?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For best results, practice daily or at least 3 to 4 times per week. Consistency is key to improving your performance."
        }
      },
      {
        "@type": "Question",
        "name": "Is this similar to the real TOEFL exam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. This PDF is designed to closely reflect TOEFL reading difficulty, academic topics, and question types."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I find more TOEFL practice materials?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can find more free TOEFL resources, PDFs, and guides on Typogrammar at https://typogrammar.com."
        }
      }
    ]
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-slate-900 dark:text-slate-100">
        TOEFL Reading Practice PDF (Free Download + Full Test)
      </h1>

      <p className="text-xl text-blue-600 dark:text-blue-400 font-medium mb-8">
        Improve Your TOEFL Reading Score with Real Practice
      </p>

      <ArticleParagraph>
        Preparing for the <strong>TOEFL iBT exam</strong>? This TOEFL Reading Practice PDF is designed to help you build the exact skills you need to succeed.
      </ArticleParagraph>

      <ArticleParagraph>
        You'll get a full-length academic reading passage, 10 multiple-choice questions, and detailed explanations — just like the real TOEFL exam.
      </ArticleParagraph>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6 rounded-r">
        <p className="text-blue-800 dark:text-blue-200 font-medium">
          Perfect for self-study, daily practice, or improving your reading speed and accuracy.
        </p>
      </div>

      {/* Download Section */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-xl p-8 my-10 text-center">
        <h2 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-4">
          Download TOEFL Reading Practice PDF
        </h2>
        <p className="text-green-700 dark:text-green-300 mb-6">
          Access your free practice file here:
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <img 
            src="/images/books/TOEFL-pdf-cover.jpg" 
            alt="TOEFL Reading Practice PDF Cover" 
            className="w-48 h-auto rounded-lg shadow-lg"
          />
          <a 
            href="/downloads/TOEFL_Reading_Practice_Typogrammar.pdf" 
            download
            className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg shadow-lg transition-all duration-200 hover:scale-105"
          >
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Free PDF
          </a>
        </div>
      </div>

      {/* What's Inside */}
      <ArticleHeading>What's Inside This TOEFL Reading Practice?</ArticleHeading>

      <ArticleParagraph>
        This PDF is structured to simulate a real TOEFL reading section:
      </ArticleParagraph>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        {[
          { icon: '📖', text: 'Academic Passage (~450 words)' },
          { icon: '⏱️', text: 'Time Limit: 20 minutes' },
          { icon: '❓', text: '10 Multiple-Choice Questions' },
          { icon: '🎯', text: 'TOEFL iBT Difficulty Level' },
          { icon: '✅', text: 'Answer Key with Explanations' },
        ].map((item, index) => (
          <div key={index} className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
            <span className="text-2xl">{item.icon}</span>
            <span className="text-slate-700 dark:text-slate-300 font-medium">{item.text}</span>
          </div>
        ))}
      </div>

      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 my-6">
        <p className="text-amber-800 dark:text-amber-200">
          <strong>The passage topic:</strong> The Decline of Coral Reefs — a real-world academic topic commonly found in TOEFL exams.
        </p>
      </div>

      {/* Why This PDF Is Effective */}
      <ArticleHeading>Why This PDF Is Effective</ArticleHeading>

      <ArticleParagraph>
        Unlike random reading exercises, this practice test is designed to match TOEFL standards:
      </ArticleParagraph>

      {/* 1. Real Exam Format */}
      <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-3">
        1. Real Exam Format
      </h3>
      <ArticleParagraph>
        You'll experience the same structure, question types, and difficulty level as the official TOEFL.
      </ArticleParagraph>

      {/* 2. Academic Vocabulary */}
      <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-3">
        2. Academic Vocabulary Exposure
      </h3>
      <ArticleParagraph>
        Learn important words like:
      </ArticleParagraph>
      <div className="flex flex-wrap gap-3 my-4">
        {['ecosystem', 'acidification', 'biodiversity', 'calcification'].map((word) => (
          <span key={word} className="px-4 py-2 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 rounded-full font-medium">
            {word}
          </span>
        ))}
      </div>
      <ArticleParagraph>
        These are common in TOEFL reading passages.
      </ArticleParagraph>

      {/* 3. Skill-Based Questions */}
      <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-3">
        3. Skill-Based Questions
      </h3>
      <ArticleParagraph>
        The test includes different TOEFL question types:
      </ArticleParagraph>
      <BulletList items={[
        'Main idea',
        'Vocabulary in context',
        'Detail questions',
        'Inference',
        'Purpose questions'
      ]} />

      {/* 4. Detailed Explanations */}
      <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-3">
        4. Detailed Explanations
      </h3>
      <ArticleParagraph>
        Each answer includes a clear explanation so you understand <strong>why</strong> it's correct, not just what the answer is.
      </ArticleParagraph>

      {/* Who Should Use This */}
      <ArticleHeading>Who Should Use This?</ArticleHeading>

      <ArticleParagraph>
        This TOEFL Reading Practice PDF is ideal for:
      </ArticleParagraph>

      <BulletList items={[
        'Students preparing for the TOEFL iBT',
        'Intermediate to advanced English learners',
        'Anyone aiming for a high reading score (25+)',
        'Self-learners who want structured practice'
      ]} />

      {/* How to Use This PDF */}
      <ArticleHeading>How to Use This PDF Effectively</ArticleHeading>

      <ArticleParagraph>
        Follow this simple strategy:
      </ArticleParagraph>

      <div className="space-y-6 my-8">
        {[
          { step: 1, title: 'Skim First', desc: 'Quickly read the passage to understand the general idea.' },
          { step: 2, title: 'Read Questions Carefully', desc: 'Focus on what each question is asking before going back to the text.' },
          { step: 3, title: 'Scan for Answers', desc: 'Locate keywords and paraphrased ideas in the passage.' },
          { step: 4, title: 'Eliminate Wrong Choices', desc: 'Usually, 2 answers are clearly incorrect — remove them first.' },
          { step: 5, title: 'Review Explanations', desc: 'Learn from your mistakes to improve faster.' },
        ].map((item) => (
          <div key={item.step} className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
              {item.step}
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 dark:text-slate-200">{item.title}</h4>
              <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* TOEFL Reading Tips */}
      <ArticleHeading>TOEFL Reading Tips (From Typogrammar)</ArticleHeading>

      <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 my-6">
        <ul className="space-y-3">
          {[
            'Skim first, read carefully second',
            'Each paragraph has one main idea',
            'Answers are often paraphrased',
            'Use elimination strategy',
            'Never rely on outside knowledge'
          ].map((tip, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-green-500 font-bold">✔️</span>
              <span className="text-slate-700 dark:text-slate-300">{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Practice Daily */}
      <ArticleHeading>Practice Daily to Improve Faster</ArticleHeading>

      <ArticleParagraph>
        Consistency is key. Use this PDF as part of your daily routine:
      </ArticleParagraph>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse border border-slate-300 dark:border-slate-600">
          <thead>
            <tr className="bg-slate-100 dark:bg-slate-800">
              <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold text-slate-900 dark:text-slate-100">Day</th>
              <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold text-slate-900 dark:text-slate-100">Focus</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300 font-medium">Day 1</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Timed practice</td>
            </tr>
            <tr className="bg-slate-50 dark:bg-slate-800/50">
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300 font-medium">Day 2</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Review mistakes</td>
            </tr>
            <tr>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300 font-medium">Day 3</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Repeat with focus on weak areas</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Get More Practice */}
      <ArticleHeading>Get More TOEFL Practice</ArticleHeading>

      <ArticleParagraph>
        Looking for more free resources? Explore our other TOEFL preparation materials:
      </ArticleParagraph>

      <BulletList items={[
        <Link to="/toefl/toefl-reading/toefl-reading-section-explained" className="text-blue-600 dark:text-blue-400 hover:underline">TOEFL Reading Section Explained</Link>,
        <Link to="/toefl/toefl-reading/toefl-reading-strategies" className="text-blue-600 dark:text-blue-400 hover:underline">TOEFL Reading Strategies</Link>,
        <Link to="/toefl/toefl-reading/toefl-reading-question-types" className="text-blue-600 dark:text-blue-400 hover:underline">TOEFL Reading Question Types</Link>,
        <Link to="/toefl/toefl-writing/toefl-writing-templates" className="text-blue-600 dark:text-blue-400 hover:underline">TOEFL Writing Templates</Link>,
      ]} />

      {/* Final Thoughts */}
      <ArticleHeading>Final Thoughts</ArticleHeading>

      <ArticleParagraph>
        This TOEFL Reading Practice PDF gives you a real exam experience, helps you build confidence, and improves your ability to understand academic texts quickly.
      </ArticleParagraph>

      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 my-8 text-center">
        <p className="text-green-800 dark:text-green-200 font-semibold text-lg">
          Start practicing today — your target score is closer than you think.
        </p>
        <a 
          href="/downloads/TOEFL_Reading_Practice_Typogrammar.pdf" 
          download
          className="inline-flex items-center mt-4 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg shadow transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download Free PDF Now
        </a>
      </div>

      {/* FAQ Section */}
      <ArticleHeading>Frequently Asked Questions (FAQ)</ArticleHeading>

      <div className="space-y-6 my-8">
        {[
          {
            q: 'What is included in this TOEFL Reading Practice PDF?',
            a: 'This PDF includes a full-length academic reading passage, 10 multiple-choice questions, and a complete answer key with explanations — designed to match the TOEFL iBT format.'
          },
          {
            q: 'Is this TOEFL reading practice suitable for beginners?',
            a: 'This practice is best for intermediate to advanced learners. If you\'re a beginner, you may find the vocabulary and question types challenging.'
          },
          {
            q: 'How long should I spend on this practice test?',
            a: 'You should aim to complete it in 20 minutes, which matches the real TOEFL reading timing for a single passage.'
          },
          {
            q: 'Can this PDF help me improve my TOEFL score?',
            a: 'Yes. Practicing with realistic materials helps improve your reading speed, vocabulary recognition, and question-solving strategies. Over time, this can significantly increase your TOEFL reading score.'
          },
          {
            q: 'Are the answers explained?',
            a: 'Yes. Each question includes a clear explanation so you understand why the correct answer is right and why the others are wrong.'
          },
          {
            q: 'How often should I practice TOEFL reading?',
            a: 'For best results, practice daily or at least 3–4 times per week. Consistency is key to improving your performance.'
          },
          {
            q: 'Is this similar to the real TOEFL exam?',
            a: 'Yes. This PDF is designed to closely reflect TOEFL reading difficulty, academic topics, and question types.'
          },
          {
            q: 'Where can I find more TOEFL practice materials?',
            a: 'You can find more free TOEFL resources, PDFs, and guides right here on Typogrammar.'
          }
        ].map((faq, index) => (
          <div key={index} className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
            <div className="bg-slate-50 dark:bg-slate-800 px-5 py-4">
              <h3 className="font-semibold text-slate-800 dark:text-slate-200">{faq.q}</h3>
            </div>
            <div className="px-5 py-4">
              <p className="text-slate-600 dark:text-slate-400">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TOEFLReadingPracticePDFPage;
