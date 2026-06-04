import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading, BulletList } from '../components/ArticleComponents';
import GoogleAd from '../components/GoogleAd';

const TOEFL1000SpeakingQuestionsPage: React.FC = () => {
  usePageMetadata({
    title: '1000 TOEFL Speaking Questions PDF (Free Download) | TypoGrammar',
    description: 'Download our free 1000 TOEFL Speaking Questions PDF. Practice all six TOEFL independent and integrated speaking task types with band-building prompts, sample structures, and tips. Free, no signup required.',
    canonical: 'https://typogrammar.com/toefl/1000-toefl-speaking-questions/',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    ogTitle: '1000 TOEFL Speaking Questions PDF (Free Download)',
    ogDescription: 'Download our free 1000 TOEFL Speaking Questions PDF. 1000 practice prompts across 10 question types with tips and answer structures.',
    ogImage: 'https://typogrammar.com/images/books/1000%20toefl%20speaking%20questions.jpg',
    ogType: 'book',
    ogUrl: 'https://typogrammar.com/toefl/1000-toefl-speaking-questions/',
    twitterCard: 'summary_large_image',
    twitterTitle: '1000 TOEFL Speaking Questions PDF (Free Download)',
    twitterDescription: 'Download our free 1000 TOEFL Speaking Questions PDF. 1000 practice prompts across 10 question types with tips and answer structures.',
    twitterImage: 'https://typogrammar.com/images/books/1000%20toefl%20speaking%20questions.jpg',
  });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is this TOEFL speaking questions PDF really free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The TypoGrammar 1000 TOEFL Speaking Questions PDF is completely free to download. It is designed to help test takers practice the speaking section through realistic prompts, clear timing guidance, and a simple answer structure. You can download it and start practicing immediately, with no signup required."
        }
      },
      {
        "@type": "Question",
        "name": "What question types are included in the PDF?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The PDF includes 1000 questions across ten TOEFL-style question types: Personal Preferences, People, Places, Events and Experiences, This or That, Agree or Disagree, Opinions and Society, If and Imagination, Education and Work, and Technology and Modern Life. Each type contains 100 questions so you can practice every common format."
        }
      },
      {
        "@type": "Question",
        "name": "Are these the same as real TOEFL speaking questions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "These are TOEFL-style practice prompts written in the same format as the official independent speaking tasks. They are not copied from the real exam, but they let you rehearse the exact kinds of opinion and preference questions you will face, along with the same 15-second prep and 45-second response timing."
        }
      },
      {
        "@type": "Question",
        "name": "How should I practice with 1000 questions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Choose a question, plan for 15 seconds, then speak for 45 seconds out loud. Follow an opinion - reason - example structure and use linking words to connect your ideas. Recording yourself and reviewing the audio is one of the fastest ways to improve. Working through one question type per day lets you cover all ten in about two weeks."
        }
      },
      {
        "@type": "Question",
        "name": "Can this PDF help with the TOEFL iBT speaking section?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The independent speaking task on the TOEFL iBT asks you to give your opinion or describe an experience, which is exactly what these prompts train. Regular practice with realistic questions helps you improve fluency, organization, and timing, which are key parts of the speaking score."
        }
      },
      {
        "@type": "Question",
        "name": "Is this PDF suitable for beginners?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It is best suited to intermediate and advanced learners preparing for the TOEFL, but motivated beginners can also use it to build speaking confidence. The prompts are clear and the answer structure is simple, so learners at different levels can benefit from regular practice."
        }
      }
    ]
  };

  const bookSchema = {
    "@context": "https://schema.org",
    "@type": "Book",
    "name": "1000 TOEFL Speaking Questions PDF",
    "description": "1000 TOEFL-style speaking questions organized into ten practical question types, with timing guidance, answer structures, and linking phrases.",
    "url": "https://typogrammar.com/toefl/1000-toefl-speaking-questions/",
    "image": "https://typogrammar.com/images/books/1000%20toefl%20speaking%20questions.jpg",
    "publisher": {
      "@type": "Organization",
      "name": "TypoGrammar",
      "url": "https://typogrammar.com"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  useEffect(() => {
    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.text = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    const bookScript = document.createElement('script');
    bookScript.type = 'application/ld+json';
    bookScript.text = JSON.stringify(bookSchema);
    document.head.appendChild(bookScript);

    return () => {
      document.head.removeChild(faqScript);
      document.head.removeChild(bookScript);
    };
  }, []);

  const questionTypes = [
    {
      title: 'Personal Preferences',
      desc: 'Talk about hobbies, favorites, and personal choices, and explain why they matter to you.',
    },
    {
      title: 'People',
      desc: 'Describe a person you admire, a teacher who influenced you, or a friend who helped you, and explain how.',
    },
    {
      title: 'Places',
      desc: 'Describe a place you enjoy, an ideal city, or a peaceful spot in nature, and explain why you chose it.',
    },
    {
      title: 'Events and Experiences',
      desc: 'Talk about a memorable event, an achievement, or a time you faced a challenge, and explain what it meant to you.',
    },
    {
      title: 'This or That',
      desc: 'Choose between two options, such as studying alone or in groups, and give clear reasons for your preference.',
    },
    {
      title: 'Agree or Disagree',
      desc: 'Respond to a statement, take a position, and support your opinion with reasons and examples.',
    },
    {
      title: 'Opinions and Society',
      desc: 'Share your view on broader topics like teamwork, competition, advertising, or news, and justify your answer.',
    },
    {
      title: 'If and Imagination',
      desc: 'Answer hypothetical questions, such as what you would do with a free year, using clear reasons and details.',
    },
    {
      title: 'Education and Work',
      desc: 'Talk about classes, good teachers, study habits, and ideal jobs, and explain your choices.',
    },
    {
      title: 'Technology and Modern Life',
      desc: 'Discuss apps, social media, and devices, and explain how technology affects daily life.',
    },
  ];

  const pdfFeatures = [
    '1000 TOEFL-style speaking questions',
    '10 clearly labeled question types (100 questions each)',
    'A short guide to the 15-second prep and 45-second response timing',
    'A simple opinion – reason – example answer structure',
    'Useful linking phrases for fluency and coherence',
    'A clean, professional layout for printing or screen use',
  ];

  const practiceSteps = [
    { step: 1, title: 'Read the prompt and plan a quick outline', desc: 'Spend about 15 seconds choosing your opinion and one or two reasons.' },
    { step: 2, title: 'Speak out loud against the clock', desc: 'Practice answering in 45 seconds, just like the real test.' },
    { step: 3, title: 'Record and review your response', desc: 'Listen back for clear pronunciation, natural pace, and complete sentences.' },
  ];

  const howToUse = [
    'Pick one question and give yourself 15 seconds to plan.',
    'Speak for 45 seconds aloud, and record yourself if you can.',
    'Follow the structure: opinion → reason → example. Two reasons is plenty.',
    'Use linking words: because, for example, on the other hand, that is why.',
    'Review your recording and note one thing to improve next time.',
    'Work through one question type per day to cover all ten in about two weeks.',
  ];

  const whoIsItFor = [
    'TOEFL test takers preparing for the speaking section',
    'Intermediate and advanced English learners',
    'ESL and EFL students who want speaking practice',
    'Teachers looking for ready-made speaking prompts',
    'Anyone who wants to build fluency and confidence',
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Badge */}
      <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm font-semibold rounded-full mb-4">
        Free Resource
      </span>

      <h1 className="text-4xl font-bold mb-3 text-slate-900 dark:text-slate-100">
        1000 TOEFL Speaking Questions PDF
      </h1>

      <p className="text-xl text-blue-600 dark:text-blue-400 font-medium mb-6">
        A Complete TOEFL Speaking Practice Bank with 1000 Prompts and Answer Tips
      </p>

      <ArticleParagraph>
        Inside this PDF, you will find 1000 TOEFL-style speaking questions organized into ten practical question types.
        Each section is built for self-study, so you can practice the independent speaking tasks anywhere, time your
        responses, and build fluency for test day. The questions follow the same style as real TOEFL speaking prompts:
        personal preferences, paired choices, agree or disagree statements, descriptions, and hypothetical situations.
      </ArticleParagraph>

      {/* Download & Cover */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-xl p-8 my-10">
        <h2 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-2 text-center">
          Download Free PDF — No Signup Required
        </h2>
        <p className="text-green-700 dark:text-green-300 mb-6 text-center">
          1000 TOEFL Speaking Questions · 10 Question Types · Timing Guide Included
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <img
            src="/images/books/1000 toefl speaking questions.jpg"
            alt="1000 TOEFL Speaking Questions PDF Cover by TypoGrammar"
            className="w-44 h-auto rounded-lg shadow-lg"
          />
          <div className="flex flex-col items-center gap-4">
            <a
              href="/downloads/1000-TOEFL-Speaking-Questions.pdf"
              download
              className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg shadow-lg transition-all duration-200 hover:scale-105"
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Free PDF
            </a>
            <p className="text-sm text-slate-500 dark:text-slate-400">Free download · No signup required</p>
          </div>
        </div>
      </div>

      <GoogleAd adSlot="7291834560" />

      {/* What's Inside */}
      <ArticleHeading>What's Inside the PDF</ArticleHeading>

      <ArticleParagraph>
        The TypoGrammar TOEFL Speaking Questions PDF includes 1000 prompts organized to help you practice step by step.
      </ArticleParagraph>

      <div className="grid sm:grid-cols-2 gap-3 my-6">
        {pdfFeatures.map((feature, i) => (
          <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
            <span className="text-green-500 font-bold mt-0.5">✓</span>
            <span className="text-slate-700 dark:text-slate-300">{feature}</span>
          </div>
        ))}
      </div>

      {/* What You Will Learn */}
      <ArticleHeading>What You Will Learn</ArticleHeading>

      <ArticleParagraph>
        This TOEFL speaking question bank is designed to help learners practice speaking in the same format used on the
        real exam.
      </ArticleParagraph>

      <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-3">
        Understand the TOEFL Speaking Format
      </h3>
      <ArticleParagraph>
        The TOEFL Speaking section measures how well you can speak English in an academic setting. The independent task
        asks you to share your own opinion or experience. On the test, you usually get 15 seconds to prepare and 45
        seconds to speak. This PDF gives you 1000 prompts to rehearse that exact timing until it feels natural.
      </ArticleParagraph>

      <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-3">
        Master the Main Question Types
      </h3>
      <ArticleParagraph>
        TOEFL independent speaking questions appear in a small number of recognizable forms. In this PDF, you will
        practice all of the most common ones: Personal Preferences, People, Places, Events and Experiences, This or That,
        Agree or Disagree, Opinions and Society, If and Imagination, Education and Work, and Technology and Modern Life.
      </ArticleParagraph>

      {/* Question Types */}
      <ArticleHeading>Question Types Included</ArticleHeading>

      <ArticleParagraph>
        This PDF covers the TOEFL speaking question types that every test taker should be comfortable with.
      </ArticleParagraph>

      <div className="space-y-4 my-6">
        {questionTypes.map((qt, i) => (
          <div key={i} className="flex gap-4 p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
              {i + 1}
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 dark:text-slate-200">{qt.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">{qt.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <GoogleAd adSlot="3847261950" />

      {/* Why Prompts + Timing */}
      <ArticleHeading>Why Practice with Prompts and Timing</ArticleHeading>

      <ArticleParagraph>
        Many learners try to improve speaking by reading about it instead of speaking out loud. TOEFL speaking improves
        faster when you follow a structured method:
      </ArticleParagraph>

      <div className="space-y-6 my-8">
        {practiceSteps.map((item) => (
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

      <ArticleParagraph>
        This method trains both your ideas and your timing, so you feel prepared and calm on test day.
      </ArticleParagraph>

      {/* How to Use */}
      <ArticleHeading>How to Use the 1000 Questions</ArticleHeading>

      <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 my-6">
        <ul className="space-y-3">
          {howToUse.map((tip, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-green-500 font-bold">✓</span>
              <span className="text-slate-700 dark:text-slate-300">{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Who Is It For */}
      <ArticleHeading>Who This PDF Is For</ArticleHeading>

      <ArticleParagraph>
        This speaking question bank is perfect for:
      </ArticleParagraph>

      <BulletList items={whoIsItFor} />

      <ArticleParagraph>
        It is especially useful for learners who want consistent daily speaking practice, because regular rehearsal is
        one of the fastest ways to improve a TOEFL speaking score.
      </ArticleParagraph>

      {/* Second Download CTA */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-8 my-10 text-center">
        <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-4">
          Download the Free TOEFL Speaking Questions PDF
        </h2>
        <p className="text-blue-700 dark:text-blue-300 mb-6">
          Start practicing your TOEFL speaking and build the confidence you need for test day.
        </p>
        <a
          href="/downloads/1000-TOEFL-Speaking-Questions.pdf"
          download
          className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg transition-all duration-200 hover:scale-105"
        >
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download Free 1000 TOEFL Speaking Questions PDF
        </a>
      </div>

      {/* FAQ */}
      <ArticleHeading>Frequently Asked Questions</ArticleHeading>

      <div className="space-y-6 my-6">
        {faqSchema.mainEntity.map((faq, i) => (
          <div key={i} className="border border-slate-200 dark:border-slate-700 rounded-lg p-5">
            <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">{faq.name}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">{faq.acceptedAnswer.text}</p>
          </div>
        ))}
      </div>

      <GoogleAd adSlot="6150392847" />

      {/* Where to Learn More */}
      <ArticleHeading>Where to Learn More TOEFL and English Speaking Skills</ArticleHeading>

      <ArticleParagraph>
        You can find more speaking practice, grammar lessons, and English learning resources on TypoGrammar.com.
        The website provides TOEFL and IELTS speaking practice, grammar explanations and exercises, English vocabulary
        lessons, and writing guides and sample answers.
      </ArticleParagraph>

      {/* Related Free Resources */}
      <ArticleHeading>Related Free Resources</ArticleHeading>

      <div className="grid sm:grid-cols-2 gap-4 my-6">
        {[
          {
            title: '1000 IELTS Speaking Questions',
            desc: 'Practice prompts across 20 everyday topics with answer tips.',
            href: '/ielts/1000-ielts-speaking-questions/',
          },
          {
            title: 'Free English Grammar PDF Workbook',
            desc: 'Learn parts of speech, tenses, and sentence structure with exercises.',
            href: '/ielts/english-grammar-pdf/',
          },
          {
            title: 'IELTS Academic Vocabulary Book',
            desc: 'Essential vocabulary for Band 6–9 with examples and exercises.',
            href: '/ielts/academic-vocabulary-book/',
          },
          {
            title: 'Band 9 Essays Book (PDF)',
            desc: 'Collection of Band 9 model essays for IELTS Writing Task 2.',
            href: '/ielts/writing-task-2-band-9-essays-book/',
          },
        ].map((resource, i) => (
          <Link
            key={i}
            to={resource.href}
            className="block p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-blue-400 dark:hover:border-blue-500 transition-colors"
          >
            <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">{resource.title}</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400">{resource.desc}</p>
          </Link>
        ))}
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-slate-400 dark:text-slate-500 mt-12 border-t border-slate-200 dark:border-slate-700 pt-6">
        Note: TOEFL is a registered trademark of ETS. This resource is independent practice material and is not endorsed
        by or affiliated with ETS. © 2026 TypoGrammar. All Rights Reserved.
      </p>
    </div>
  );
};

export default TOEFL1000SpeakingQuestionsPage;
