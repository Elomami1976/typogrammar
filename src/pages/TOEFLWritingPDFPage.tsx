import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading, BulletList } from '../components/ArticleComponents';

const TOEFLWritingPDFPage: React.FC = () => {
  usePageMetadata({
    title: 'TOEFL Writing PDF (Task 1 & Task 2 Templates + Examples) | TypoGrammar',
    description: 'Download a free TOEFL Writing PDF with Task 1 & Task 2 templates, high-scoring examples, and academic phrases. Improve your TOEFL writing score fast.'
  });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is included in this TOEFL Writing PDF?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It includes Task 1 and Task 2 templates, sample essays, scoring rubrics, and a phrase bank."
        }
      },
      {
        "@type": "Question",
        "name": "Are the templates useful for the real TOEFL exam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. They follow the exact structure used by high-scoring responses."
        }
      },
      {
        "@type": "Question",
        "name": "How many words should I write?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Task 1: 150–225 words. Task 2: At least 100 words (ideally 120–180)."
        }
      },
      {
        "@type": "Question",
        "name": "Can this help me get a high TOEFL score?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Using structured templates and advanced vocabulary can significantly improve your writing score."
        }
      },
      {
        "@type": "Question",
        "name": "Is this PDF updated for the new TOEFL format?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. It includes the updated Academic Discussion Task (Task 2)."
        }
      },
      {
        "@type": "Question",
        "name": "How long should I practice writing daily?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "At least 20–30 minutes per day for best results."
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
        TOEFL Writing PDF (Task 1 & Task 2) – Templates + High-Scoring Examples
      </h1>

      <p className="text-xl text-blue-600 dark:text-blue-400 font-medium mb-8">
        Improve Your TOEFL Writing Score (0–30) with Proven Templates
      </p>

      <ArticleParagraph>
        Struggling with <strong>TOEFL writing</strong>? This TOEFL Writing PDF gives you everything you need to score high in both:
      </ArticleParagraph>

      <div className="flex flex-col sm:flex-row gap-4 my-6">
        <div className="flex-1 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <span className="text-2xl mb-2 block">✍️</span>
          <span className="font-semibold text-blue-800 dark:text-blue-200">Task 1 (Integrated Writing)</span>
        </div>
        <div className="flex-1 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
          <span className="text-2xl mb-2 block">🧠</span>
          <span className="font-semibold text-purple-800 dark:text-purple-200">Task 2 (Academic Discussion)</span>
        </div>
      </div>

      <ArticleParagraph>
        With templates, scored examples, and a phrase bank, you can write faster, clearer, and more effectively.
      </ArticleParagraph>

      {/* Download Section */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-xl p-8 my-10 text-center">
        <h2 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-4">
          Download TOEFL Writing PDF (Free)
        </h2>
        <p className="text-green-700 dark:text-green-300 mb-6">
          Get the full guide here:
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <img 
            src="/images/books/TOEFL-Writing-Task-1-&-2.jpg" 
            alt="TOEFL Writing Task 1 & Task 2 PDF Cover" 
            className="w-48 h-auto rounded-lg shadow-lg"
          />
          <a 
            href="/downloads/TOEFL_Writing_Task1_Task2_Typogrammar.pdf" 
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
      <ArticleHeading>What's Inside This TOEFL Writing PDF?</ArticleHeading>

      <ArticleParagraph>
        This resource is designed to match the latest TOEFL iBT format:
      </ArticleParagraph>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        {[
          { icon: '🧩', text: 'Task 1 & Task 2 explained clearly' },
          { icon: '🧱', text: 'Sentence-by-sentence templates' },
          { icon: '📝', text: 'High-scoring sample essays (5/5 level)' },
          { icon: '📊', text: 'Scoring rubrics (0–30 scale)' },
          { icon: '🔗', text: '50+ academic phrases & transitions' },
          { icon: '📅', text: '7-day study plan' },
        ].map((item, index) => (
          <div key={index} className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
            <span className="text-2xl">{item.icon}</span>
            <span className="text-slate-700 dark:text-slate-300 font-medium">{item.text}</span>
          </div>
        ))}
      </div>

      {/* TOEFL Writing Tasks Explained */}
      <ArticleHeading>TOEFL Writing Tasks Explained</ArticleHeading>

      {/* Task 1 */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 my-6">
        <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4 flex items-center gap-2">
          <span>🧠</span> Task 1: Integrated Writing (20 minutes)
        </h3>
        <ArticleParagraph>
          You will:
        </ArticleParagraph>
        <BulletList items={[
          'Read a passage',
          'Listen to a lecture',
          'Write a summary explaining how the lecture challenges the reading'
        ]} />
        <div className="mt-4 space-y-2">
          <p className="text-blue-700 dark:text-blue-300">✔️ Word count: <strong>150–225 words</strong></p>
          <p className="text-blue-700 dark:text-blue-300">✔️ Focus: <strong>Lecture (NOT your opinion)</strong></p>
        </div>
      </div>

      {/* Task 2 */}
      <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-6 my-6">
        <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4 flex items-center gap-2">
          <span>✍️</span> Task 2: Academic Discussion (10 minutes)
        </h3>
        <ArticleParagraph>
          You will:
        </ArticleParagraph>
        <BulletList items={[
          'Read a discussion prompt',
          'Respond with your opinion',
          'Engage with other students\' ideas'
        ]} />
        <div className="mt-4 space-y-2">
          <p className="text-purple-700 dark:text-purple-300">✔️ Minimum: <strong>100 words (aim for 120–180)</strong></p>
          <p className="text-purple-700 dark:text-purple-300">✔️ Focus: <strong>Clear opinion + strong examples</strong></p>
        </div>
      </div>

      {/* Why This PDF Works */}
      <ArticleHeading>Why This PDF Works (High Score Strategy)</ArticleHeading>

      {/* 1. Ready-to-Use Templates */}
      <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-3">
        1. Ready-to-Use Templates
      </h3>
      <ArticleParagraph>
        You don't need to think from scratch. Example (Task 1 structure):
      </ArticleParagraph>
      <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 my-4 font-mono text-sm">
        <p className="text-slate-700 dark:text-slate-300">Introduction</p>
        <p className="text-slate-700 dark:text-slate-300">Point 1 (lecture vs reading)</p>
        <p className="text-slate-700 dark:text-slate-300">Point 2</p>
        <p className="text-slate-700 dark:text-slate-300">Point 3</p>
      </div>

      {/* 2. Real High-Scoring Examples */}
      <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-3">
        2. Real High-Scoring Examples
      </h3>
      <ArticleParagraph>
        Includes 5/5 sample responses with:
      </ArticleParagraph>
      <BulletList items={[
        'Clear structure',
        'Strong vocabulary',
        'Perfect organization'
      ]} />

      {/* 3. Academic Phrase Bank */}
      <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-3">
        3. Academic Phrase Bank (50+ Phrases)
      </h3>
      <ArticleParagraph>
        Boost your score instantly with phrases like:
      </ArticleParagraph>
      <div className="space-y-2 my-4">
        {[
          '"It is widely acknowledged that…"',
          '"However, the professor challenges…"',
          '"For instance…"'
        ].map((phrase, index) => (
          <div key={index} className="flex items-center gap-2 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
            <span className="text-amber-600 dark:text-amber-400">→</span>
            <span className="text-slate-700 dark:text-slate-300 italic">{phrase}</span>
          </div>
        ))}
      </div>

      {/* 4. Step-by-Step Study Plan */}
      <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-3">
        4. Step-by-Step Study Plan
      </h3>
      <ArticleParagraph>
        Follow the included 7-day plan to improve fast:
      </ArticleParagraph>
      <BulletList items={[
        'Practice templates',
        'Do timed writing',
        'Review mistakes',
        'Simulate real test conditions'
      ]} />

      {/* How to Use This PDF */}
      <ArticleHeading>How to Use This PDF Effectively</ArticleHeading>

      <div className="space-y-6 my-8">
        {[
          { step: 1, title: 'Learn the Templates', desc: 'Memorize structure first — this saves time during the test.' },
          { step: 2, title: 'Practice Daily', desc: 'Write at least 1 Task 1 and 1 Task 2 per day.' },
          { step: 3, title: 'Use Advanced Vocabulary', desc: 'Replace simple words: ❌ good → ✅ beneficial, ❌ show → ✅ demonstrate' },
          { step: 4, title: 'Review and Improve', desc: 'Compare your answers with sample responses.' },
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
      <ArticleHeading>Who Should Use This TOEFL Writing PDF?</ArticleHeading>

      <ArticleParagraph>
        This is perfect for:
      </ArticleParagraph>

      <BulletList items={[
        'Students aiming for 25+ in writing',
        'TOEFL iBT test takers',
        'Intermediate to advanced learners',
        'Self-study students'
      ]} />

      {/* TOEFL Writing Tips */}
      <ArticleHeading>TOEFL Writing Tips (From Typogrammar)</ArticleHeading>

      <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 my-6">
        <ul className="space-y-3">
          {[
            'Task 1 → Focus on the lecture, not the reading',
            'Cover all 3 points (very important)',
            'Task 2 → State your opinion in the FIRST sentence',
            'Use linking words (however, therefore, etc.)',
            'Keep sentences clear and varied',
            'Always proofread'
          ].map((tip, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-green-500 font-bold">✔️</span>
              <span className="text-slate-700 dark:text-slate-300">{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Build Your Routine */}
      <ArticleHeading>Build Your TOEFL Writing Routine</ArticleHeading>

      <ArticleParagraph>
        Simple plan:
      </ArticleParagraph>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse border border-slate-300 dark:border-slate-600">
          <thead>
            <tr className="bg-slate-100 dark:bg-slate-800">
              <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold text-slate-900 dark:text-slate-100">Days</th>
              <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold text-slate-900 dark:text-slate-100">Focus</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300 font-medium">Day 1–2</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Learn templates</td>
            </tr>
            <tr className="bg-slate-50 dark:bg-slate-800/50">
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300 font-medium">Day 3–4</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Practice Task 1</td>
            </tr>
            <tr>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300 font-medium">Day 5–6</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Practice Task 2</td>
            </tr>
            <tr className="bg-slate-50 dark:bg-slate-800/50">
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300 font-medium">Day 7</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Full test simulation</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Related Resources */}
      <ArticleHeading>Related TOEFL Resources</ArticleHeading>

      <ArticleParagraph>
        Boost your score faster by combining:
      </ArticleParagraph>

      <BulletList items={[
        <Link to="/toefl/toefl-reading-practice-pdf" className="text-blue-600 dark:text-blue-400 hover:underline">TOEFL Reading Practice PDF</Link>,
        <Link to="/toefl/toefl-vocabulary-pdf" className="text-blue-600 dark:text-blue-400 hover:underline">TOEFL Vocabulary PDF (500 Words)</Link>,
        <Link to="/toefl/toefl-writing/toefl-writing-templates" className="text-blue-600 dark:text-blue-400 hover:underline">TOEFL Writing Templates</Link>,
        <Link to="/toefl/toefl-reading/toefl-reading-strategies" className="text-blue-600 dark:text-blue-400 hover:underline">TOEFL Reading Strategies</Link>,
      ]} />

      {/* Final CTA */}
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 my-8 text-center">
        <p className="text-green-800 dark:text-green-200 font-semibold text-lg mb-4">
          Master TOEFL Writing with proven templates and strategies!
        </p>
        <a 
          href="/downloads/TOEFL_Writing_Task1_Task2_Typogrammar.pdf" 
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
            q: 'What is included in this TOEFL Writing PDF?',
            a: 'It includes Task 1 and Task 2 templates, sample essays, scoring rubrics, and a phrase bank.'
          },
          {
            q: 'Are the templates useful for the real TOEFL exam?',
            a: 'Yes. They follow the exact structure used by high-scoring responses.'
          },
          {
            q: 'How many words should I write?',
            a: 'Task 1: 150–225 words. Task 2: At least 100 words (ideally 120–180).'
          },
          {
            q: 'Can this help me get a high TOEFL score?',
            a: 'Yes. Using structured templates and advanced vocabulary can significantly improve your writing score.'
          },
          {
            q: 'Is this PDF updated for the new TOEFL format?',
            a: 'Yes. It includes the updated Academic Discussion Task (Task 2).'
          },
          {
            q: 'How long should I practice writing daily?',
            a: 'At least 20–30 minutes per day for best results.'
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

export default TOEFLWritingPDFPage;
