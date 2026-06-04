import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading, BulletList } from '../components/ArticleComponents';

const TOEFLVocabularyPDFPage: React.FC = () => {
  usePageMetadata({
    title: 'TOEFL Vocabulary PDF (500 Academic Words) - Free Download | TypoGrammar',
    description: 'Download a free TOEFL Vocabulary PDF with 500 academic words, definitions, and examples. Improve your TOEFL reading, writing, and speaking score fast.'
  });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is included in this TOEFL Vocabulary PDF?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It includes 500 academic words with definitions and example sentences, organized into 10 thematic sections."
        }
      },
      {
        "@type": "Question",
        "name": "Is this vocabulary enough for TOEFL?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It covers high-frequency academic vocabulary commonly seen in TOEFL exams, making it a strong foundation."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to learn all 500 words?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "With consistent study, most learners can cover all words in 2-4 weeks."
        }
      },
      {
        "@type": "Question",
        "name": "Can beginners use this PDF?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It's best for intermediate to advanced learners, but beginners can still benefit with slower pacing."
        }
      },
      {
        "@type": "Question",
        "name": "Does this help with TOEFL writing and speaking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Using advanced vocabulary improves your score in writing and speaking sections."
        }
      },
      {
        "@type": "Question",
        "name": "Is this PDF free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. It's completely free from Typogrammar."
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
        TOEFL Vocabulary PDF (500 Academic Word List) - Free Download
      </h1>

      <p className="text-xl text-blue-600 dark:text-blue-400 font-medium mb-8">
        Master TOEFL Vocabulary with 500 Essential Academic Words
      </p>

      <ArticleParagraph>
        Looking to improve your <strong>TOEFL score fast</strong>? This TOEFL Vocabulary PDF gives you 500 essential academic words with definitions and example sentences, everything you need to understand and use advanced English in the TOEFL iBT exam.
      </ArticleParagraph>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6 rounded-r">
        <p className="text-blue-800 dark:text-blue-200 font-medium">
          Perfect for reading, writing, and speaking sections.
        </p>
      </div>

      {/* Download Section */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-xl p-8 my-10 text-center">
        <h2 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-4">
          Download TOEFL Vocabulary PDF (Free)
        </h2>
        <p className="text-green-700 dark:text-green-300 mb-6">
          Get instant access to the full PDF here:
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <img 
            src="/images/books/TOEFL-Vocabulary-500-Academic-Word-List.jpg" 
            alt="TOEFL Vocabulary 500 Academic Words PDF Cover" 
            className="w-48 h-auto rounded-lg shadow-lg"
          />
          <a 
            href="/downloads/TOEFL-Vocabulary-500-word.pdf" 
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
      <ArticleHeading>What's Inside This TOEFL Vocabulary PDF?</ArticleHeading>

      <ArticleParagraph>
        This resource is carefully structured for maximum learning efficiency:
      </ArticleParagraph>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        {[
          { icon: '📚', text: '500 Academic Words' },
          { icon: '🧠', text: '10 Thematic Sections (50 words each)' },
          { icon: '✍️', text: 'Definitions + Example Sentences' },
          { icon: '🎯', text: 'TOEFL iBT / Academic English Level' },
          { icon: '💯', text: '100% Free' },
        ].map((item, index) => (
          <div key={index} className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
            <span className="text-2xl">{item.icon}</span>
            <span className="text-slate-700 dark:text-slate-300 font-medium">{item.text}</span>
          </div>
        ))}
      </div>

      <ArticleParagraph>
        As shown in the PDF, the vocabulary is organized into academic themes like:
      </ArticleParagraph>

      <div className="flex flex-wrap gap-3 my-6">
        {[
          'Academic & Scholarly',
          'Science & Environment',
          'Economics & Finance',
          'Society & Culture',
          'Technology & Innovation',
          'Health & Medicine',
          '...and more'
        ].map((theme, index) => (
          <span key={index} className="px-4 py-2 bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-200 rounded-full font-medium">
            {theme}
          </span>
        ))}
      </div>

      {/* Why This PDF Is Powerful */}
      <ArticleHeading>Why This PDF Is Powerful for TOEFL Preparation</ArticleHeading>

      {/* 1. Real Academic Vocabulary */}
      <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-3">
        1. Real Academic Vocabulary
      </h3>
      <ArticleParagraph>
        These words are commonly used in:
      </ArticleParagraph>
      <BulletList items={[
        'TOEFL reading passages',
        'Academic lectures',
        'Writing tasks'
      ]} />

      {/* 2. Learn Words in Context */}
      <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-3">
        2. Learn Words in Context
      </h3>
      <ArticleParagraph>
        Each word includes:
      </ArticleParagraph>
      <BulletList items={[
        'Clear definition',
        'Natural example sentence'
      ]} />
      <ArticleParagraph>
        This helps you actually <strong>use</strong> the word, not just memorize it.
      </ArticleParagraph>

      {/* 3. Organized for Faster Learning */}
      <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-3">
        3. Organized for Faster Learning
      </h3>
      <ArticleParagraph>
        Instead of random lists, words are grouped by topic, making it easier to:
      </ArticleParagraph>
      <BulletList items={[
        'Remember vocabulary',
        'Connect ideas',
        'Improve comprehension'
      ]} />

      {/* 4. Covers All TOEFL Skills */}
      <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-3">
        4. Covers All TOEFL Skills
      </h3>
      <ArticleParagraph>
        This PDF helps you improve:
      </ArticleParagraph>
      <div className="grid sm:grid-cols-2 gap-3 my-4">
        {[
          { icon: '📖', text: 'Reading comprehension' },
          { icon: '✍️', text: 'Writing quality' },
          { icon: '🎤', text: 'Speaking fluency' },
          { icon: '🎧', text: 'Listening understanding' },
        ].map((item, index) => (
          <div key={index} className="flex items-center gap-2 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <span className="text-xl">{item.icon}</span>
            <span className="text-slate-700 dark:text-slate-300">{item.text}</span>
          </div>
        ))}
      </div>

      {/* How to Study */}
      <ArticleHeading>How to Study This Vocabulary Effectively</ArticleHeading>

      <ArticleParagraph>
        Follow the method included in the PDF:
      </ArticleParagraph>

      <div className="space-y-6 my-8">
        {[
          { step: 1, title: 'Study in Chunks', desc: 'Focus on one section (50 words) at a time.' },
          { step: 2, title: 'Use Flashcards', desc: 'Write: Word → front, Definition + example → back' },
          { step: 3, title: 'Learn in Context', desc: 'Read the example sentences carefully.' },
          { step: 4, title: 'Practice Writing', desc: 'Create your own sentence for each word.' },
          { step: 5, title: 'Review Regularly', desc: 'Use spaced repetition to move words into long-term memory.' },
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

      {/* Who Should Use This */}
      <ArticleHeading>Who Should Use This TOEFL Vocabulary PDF?</ArticleHeading>

      <ArticleParagraph>
        This resource is ideal for:
      </ArticleParagraph>

      <BulletList items={[
        'TOEFL test takers aiming for high scores (90+)',
        'Intermediate to advanced English learners',
        'Students preparing for academic English exams',
        'Self-learners building strong vocabulary'
      ]} />

      {/* TOEFL Vocabulary Tips */}
      <ArticleHeading>TOEFL Vocabulary Tips (High Score Strategy)</ArticleHeading>

      <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 my-6">
        <ul className="space-y-3">
          {[
            'Focus on academic words, not casual English',
            'Learn collocations (how words are used together)',
            'Practice using words in writing and speaking',
            'Review consistently (don\'t cram)',
            'Prioritize quality over quantity'
          ].map((tip, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-green-500 font-bold">✔️</span>
              <span className="text-slate-700 dark:text-slate-300">{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Daily Study Plan */}
      <ArticleHeading>Build Your Daily TOEFL Study Plan</ArticleHeading>

      <ArticleParagraph>
        Here's a simple routine:
      </ArticleParagraph>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse border border-slate-300 dark:border-slate-600">
          <thead>
            <tr className="bg-slate-100 dark:bg-slate-800">
              <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold text-slate-900 dark:text-slate-100">Day</th>
              <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold text-slate-900 dark:text-slate-100">Activity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300 font-medium">Day 1</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Learn 20-30 new words</td>
            </tr>
            <tr className="bg-slate-50 dark:bg-slate-800/50">
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300 font-medium">Day 2</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Review + practice sentences</td>
            </tr>
            <tr>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300 font-medium">Day 3</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Test yourself</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-4 my-6">
        <p className="text-teal-800 dark:text-teal-200 font-medium">
          In 2-3 weeks, you can master all 500 words.
        </p>
      </div>

      {/* Related Resources */}
      <ArticleHeading>Related TOEFL Resources</ArticleHeading>

      <ArticleParagraph>
        To maximize your score, combine this with:
      </ArticleParagraph>

      <BulletList items={[
        <Link to="/toefl/toefl-reading-practice-pdf/" className="text-blue-600 dark:text-blue-400 hover:underline">TOEFL Reading Practice PDF</Link>,
        <Link to="/toefl/toefl-reading/toefl-reading-strategies/" className="text-blue-600 dark:text-blue-400 hover:underline">TOEFL Reading Strategies</Link>,
        <Link to="/toefl/toefl-writing/toefl-writing-templates/" className="text-blue-600 dark:text-blue-400 hover:underline">TOEFL Writing Templates</Link>,
        <Link to="/toefl/toefl-writing/toefl-writing-topics/" className="text-blue-600 dark:text-blue-400 hover:underline">TOEFL Writing Topics</Link>,
      ]} />

      {/* Final CTA */}
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 my-8 text-center">
        <p className="text-green-800 dark:text-green-200 font-semibold text-lg mb-4">
          Start building your TOEFL vocabulary today, your target score is within reach.
        </p>
        <a 
          href="/downloads/TOEFL-Vocabulary-500-word.pdf" 
          download
          className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg shadow transition-colors"
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
            q: 'What is included in this TOEFL Vocabulary PDF?',
            a: 'It includes 500 academic words with definitions and example sentences, organized into 10 thematic sections.'
          },
          {
            q: 'Is this vocabulary enough for TOEFL?',
            a: 'It covers high-frequency academic vocabulary commonly seen in TOEFL exams, making it a strong foundation.'
          },
          {
            q: 'How long does it take to learn all 500 words?',
            a: 'With consistent study, most learners can cover all words in 2-4 weeks.'
          },
          {
            q: 'Can beginners use this PDF?',
            a: 'It\'s best for intermediate to advanced learners, but beginners can still benefit with slower pacing.'
          },
          {
            q: 'Does this help with TOEFL writing and speaking?',
            a: 'Yes. Using advanced vocabulary improves your score in writing and speaking sections.'
          },
          {
            q: 'Is this PDF free?',
            a: 'Yes. It\'s completely free from Typogrammar.'
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

export default TOEFLVocabularyPDFPage;
