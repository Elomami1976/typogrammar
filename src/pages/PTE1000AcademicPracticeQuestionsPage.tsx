import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading, BulletList } from '../components/ArticleComponents';
import GoogleAd from '../components/GoogleAd';

const PTE1000AcademicPracticeQuestionsPage: React.FC = () => {
  usePageMetadata({
    title: '1000 PTE Academic Practice Questions PDF (Free Download) | TypoGrammar',
    description: 'Download 1000 PTE Academic practice questions as a free PDF. Speaking, Writing, Reading, and Listening tasks with timing, templates, and tips. No signup required.',
    canonical: 'https://typogrammar.com/downloads/1000-pte-academic-practice-questions/',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    ogTitle: '1000 PTE Academic Practice Questions PDF (Free Download)',
    ogDescription: 'Free PDF with 1000 PTE Academic practice questions across all 20 task types. Includes timing, templates, and scoring tips.',
    ogImage: 'https://typogrammar.com/images/books/1000-PTE-Academic-Practice-Questions.jpg',
    ogType: 'book',
    ogUrl: 'https://typogrammar.com/downloads/1000-pte-academic-practice-questions/',
    twitterCard: 'summary_large_image',
    twitterTitle: '1000 PTE Academic Practice Questions PDF (Free Download)',
    twitterDescription: 'Free PDF with 1000 PTE Academic practice questions across all 20 task types. Includes timing, templates, and scoring tips.',
    twitterImage: 'https://typogrammar.com/images/books/1000-PTE-Academic-Practice-Questions.jpg',
  });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is the 1000 PTE Academic Practice Questions PDF really free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The TypoGrammar 1000 PTE Academic Practice Questions PDF is completely free to download. There is no signup, no email opt-in, and no paywall. You can open it on a phone, tablet, or computer, or print the pages you want to use offline."
        }
      },
      {
        "@type": "Question",
        "name": "What task types are included in the PDF?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The PDF covers all PTE Academic task types across Speaking, Writing, Reading, and Listening. Speaking includes Read Aloud, Repeat Sentence, Describe Image, Re-tell Lecture, and Answer Short Question. Writing includes Summarize Written Text and Write Essay. Reading includes Multiple Choice, Re-order Paragraphs, and Fill in the Blanks. Listening includes Summarize Spoken Text, Highlight Correct Summary, Highlight Incorrect Words, Fill in the Blanks, Select Missing Word, and Write from Dictation."
        }
      },
      {
        "@type": "Question",
        "name": "Are these the same as real PTE Academic questions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "These are PTE-style practice questions written in the same format as the official Pearson Test of English Academic. They are not copied from the real exam. They let you rehearse the exact item types you will face on test day, with the same timing and the same scoring focus on content, form, grammar, vocabulary, and fluency."
        }
      },
      {
        "@type": "Question",
        "name": "How should I practice with 1000 questions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pick one task type and work through 10 to 20 prompts per day. Time yourself, follow the templates in the PDF, and record your speaking answers so you can review pronunciation, pace, and stress. Working through one task type per day lets you cover every PTE format in about three weeks."
        }
      },
      {
        "@type": "Question",
        "name": "Can this PDF help me score 79+ on PTE Academic?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. High-scoring PTE candidates rely on repeated practice with realistic prompts, clear answer structures, and fast item recognition. This PDF gives you 1000 prompts so you can build that automatic response, the same way top test takers prepare for a Band 79 or 90 score."
        }
      },
      {
        "@type": "Question",
        "name": "Is this PDF suitable for beginners?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It is best suited to intermediate and advanced learners aiming for PTE 50 to 90. Beginners can still use it to build familiarity with the task formats, but they may want to study basic grammar and academic vocabulary first."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use this PDF for PTE Core or other Pearson exams?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The PDF is built around PTE Academic, which is used for university admission and skilled migration in Australia, the UK, Canada, and New Zealand. Many task types overlap with PTE Core, so most prompts are still useful for that exam. The reading and listening passages stay academic in tone."
        }
      }
    ]
  };

  const bookSchema = {
    "@context": "https://schema.org",
    "@type": "Book",
    "name": "1000 PTE Academic Practice Questions PDF",
    "description": "1000 PTE Academic-style practice questions across Speaking, Writing, Reading, and Listening tasks, with timing, templates, and scoring tips.",
    "url": "https://typogrammar.com/downloads/1000-pte-academic-practice-questions/",
    "image": "https://typogrammar.com/images/books/1000-PTE-Academic-Practice-Questions.jpg",
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

  const taskTypes = [
    {
      title: 'Read Aloud (Speaking)',
      desc: 'Read a short academic text out loud with clear pronunciation, correct stress, and natural pace.',
    },
    {
      title: 'Repeat Sentence (Speaking)',
      desc: 'Listen to a sentence and repeat it word for word, keeping the same intonation and rhythm.',
    },
    {
      title: 'Describe Image (Speaking)',
      desc: 'Describe a chart, graph, map, or picture in 40 seconds using a clear three-part structure.',
    },
    {
      title: 'Re-tell Lecture (Speaking)',
      desc: 'Listen to a short academic lecture, then summarize the main points and supporting details.',
    },
    {
      title: 'Answer Short Question (Speaking)',
      desc: 'Give a one or two word answer to a general knowledge question with correct pronunciation.',
    },
    {
      title: 'Summarize Written Text (Writing)',
      desc: 'Write a one-sentence summary of a passage in 5 to 75 words, with correct grammar and punctuation.',
    },
    {
      title: 'Write Essay (Writing)',
      desc: 'Write a 200 to 300 word academic essay in 20 minutes using a clear introduction, body, and conclusion.',
    },
    {
      title: 'Reading Multiple Choice and Re-order',
      desc: 'Choose the correct answer or re-arrange paragraphs to show the right logical order of ideas.',
    },
    {
      title: 'Reading Fill in the Blanks',
      desc: 'Drag or type the missing words in an academic passage, focusing on collocations and grammar.',
    },
    {
      title: 'Listening Tasks',
      desc: 'Summarize Spoken Text, Highlight Correct Summary, Highlight Incorrect Words, Fill in the Blanks, Select Missing Word, and Write from Dictation.',
    },
  ];

  const pdfFeatures = [
    '1000 PTE Academic-style practice questions',
    'All four skills covered: Speaking, Writing, Reading, and Listening',
    '20 PTE task types with sample prompts and timing notes',
    'Templates for Describe Image, Re-tell Lecture, and Write Essay',
    'Score-saving tips for fluency, content, form, and grammar',
    'Clean A4 layout that you can print or read on any device',
  ];

  const practiceSteps = [
    { step: 1, title: 'Pick one task type per day', desc: 'Focus on one item type at a time so your brain learns the exact pattern PTE rewards.' },
    { step: 2, title: 'Time yourself like the real test', desc: 'Use a timer or recording app and stick to the official seconds for each task.' },
    { step: 3, title: 'Record, listen, and refine', desc: 'For speaking items, replay your answer and check pronunciation, pace, and pauses.' },
  ];

  const howToUse = [
    'Open the PDF and bookmark the task type you want to practice today.',
    'Read the timing notes at the start of each section before you begin.',
    'For Speaking items, record yourself and listen back twice.',
    'For Writing items, paste your answer into a text editor to check word count.',
    'Use the templates as a backbone, then add your own ideas and vocabulary.',
    'Work through one task type per day to cover the full PDF in about three weeks.',
  ];

  const whoIsItFor = [
    'PTE Academic test takers aiming for a score of 50 to 90',
    'University applicants who need PTE for admission in Australia, the UK, Canada, and New Zealand',
    'Skilled migration candidates who need a PTE score for a visa',
    'ESL and EFL students who want structured speaking and writing practice',
    'Teachers who need ready-made PTE practice prompts for their classes',
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Badge */}
      <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm font-semibold rounded-full mb-4">
        Free Resource
      </span>

      <h1 className="text-4xl font-bold mb-3 text-slate-900 dark:text-slate-100">
        1000 PTE Academic Practice Questions PDF
      </h1>

      <p className="text-xl text-blue-600 dark:text-blue-400 font-medium mb-6">
        A Complete PTE Academic Practice Bank with 1000 Prompts, Templates, and Scoring Tips
      </p>

      <ArticleParagraph>
        Inside this PDF you will find 1000 PTE Academic-style practice questions across Speaking, Writing,
        Reading, and Listening. Every task type that appears on the Pearson Test of English Academic is included,
        with the official timing, a simple answer structure, and clear notes on what the scoring engine looks for.
        Use it for daily practice at home, in class, or on the go.
      </ArticleParagraph>

      {/* Download and Cover */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-xl p-8 my-10">
        <h2 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-2 text-center">
          Download Free PDF (No Signup Required)
        </h2>
        <p className="text-green-700 dark:text-green-300 mb-6 text-center">
          1000 PTE Academic Practice Questions, all 20 task types, with templates and timing.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <img
            src="/images/books/1000-PTE-Academic-Practice-Questions.jpg"
            alt="1000 PTE Academic Practice Questions PDF cover by TypoGrammar"
            className="w-44 h-auto rounded-lg shadow-lg"
          />
          <div className="flex flex-col items-center gap-4">
            <a
              href="/downloads/1000-PTE-Academic-Practice-Questions.pdf"
              download
              className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg shadow-lg transition-all duration-200 hover:scale-105"
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Free PDF
            </a>
            <p className="text-sm text-slate-500 dark:text-slate-400">Free download. No signup required.</p>
          </div>
        </div>
      </div>

      <GoogleAd adSlot="7291834560" />

      {/* What is Inside */}
      <ArticleHeading>What Is Inside the PDF</ArticleHeading>

      <ArticleParagraph>
        The TypoGrammar 1000 PTE Academic Practice Questions PDF is built for self-study. It gives you a clear
        path through every PTE task type so you can practice with focus and confidence.
      </ArticleParagraph>

      <div className="grid sm:grid-cols-2 gap-3 my-6">
        {pdfFeatures.map((feature, i) => (
          <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
            <span className="text-green-600 dark:text-green-400 font-bold mt-0.5">[OK]</span>
            <span className="text-slate-700 dark:text-slate-300">{feature}</span>
          </div>
        ))}
      </div>

      {/* What You Will Learn */}
      <ArticleHeading>What You Will Learn</ArticleHeading>

      <ArticleParagraph>
        This PTE practice question bank is designed to help learners answer in the same format used on the real
        Pearson Test of English Academic.
      </ArticleParagraph>

      <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-3">
        Understand the PTE Academic Format
      </h3>
      <ArticleParagraph>
        PTE Academic is a fully computer-based English test that scores Speaking, Writing, Reading, and Listening
        on a scale of 10 to 90. It uses 20 task types, all timed, and an automated scoring system that rewards
        clear pronunciation, correct grammar, accurate content, and natural fluency. This PDF gives you 1000
        prompts so you can rehearse every task type until it feels easy.
      </ArticleParagraph>

      <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-3">
        Master the Main Task Types
      </h3>
      <ArticleParagraph>
        The PTE Academic test repeats a small set of task types in every exam. In this PDF, you will practice all
        of them: Read Aloud, Repeat Sentence, Describe Image, Re-tell Lecture, Answer Short Question, Summarize
        Written Text, Write Essay, Multiple Choice Reading, Re-order Paragraphs, Reading and Listening Fill in the
        Blanks, Summarize Spoken Text, Highlight Correct Summary, Highlight Incorrect Words, Select Missing Word,
        and Write from Dictation.
      </ArticleParagraph>

      {/* Task Types */}
      <ArticleHeading>Task Types Included</ArticleHeading>

      <ArticleParagraph>
        This PDF covers the PTE Academic task types that every test taker should be comfortable with.
      </ArticleParagraph>

      <div className="space-y-4 my-6">
        {taskTypes.map((qt, i) => (
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

      {/* Why Prompts and Timing */}
      <ArticleHeading>Why Practice with Prompts and Timing</ArticleHeading>

      <ArticleParagraph>
        Many learners try to improve their PTE score by reading tips instead of speaking and writing out loud.
        PTE Academic rewards quick, structured answers. The best way to build that is to follow a clear method:
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
              <span className="text-green-600 dark:text-green-400 font-bold">[OK]</span>
              <span className="text-slate-700 dark:text-slate-300">{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Who Is It For */}
      <ArticleHeading>Who This PDF Is For</ArticleHeading>

      <ArticleParagraph>
        This PTE Academic practice question bank is perfect for:
      </ArticleParagraph>

      <BulletList items={whoIsItFor} />

      <ArticleParagraph>
        It is especially useful for learners who want consistent daily practice. Steady rehearsal is one of the
        fastest ways to lift a PTE score by 5 to 15 points.
      </ArticleParagraph>

      {/* Second Download CTA */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-8 my-10 text-center">
        <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-4">
          Download the Free PTE Academic Practice Questions PDF
        </h2>
        <p className="text-blue-700 dark:text-blue-300 mb-6">
          Start your PTE preparation today and build the confidence you need for test day.
        </p>
        <a
          href="/downloads/1000-PTE-Academic-Practice-Questions.pdf"
          download
          className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg transition-all duration-200 hover:scale-105"
        >
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download Free 1000 PTE Academic Practice Questions PDF
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
      <ArticleHeading>Where to Learn More PTE and English Skills</ArticleHeading>

      <ArticleParagraph>
        You can find more practice, grammar lessons, and English learning resources on TypoGrammar.com.
        The website provides PTE, TOEFL, and IELTS speaking and writing practice, grammar explanations and
        exercises, vocabulary lists, and writing guides with sample answers.
      </ArticleParagraph>

      {/* Related Free Resources */}
      <ArticleHeading>Related Free Resources</ArticleHeading>

      <div className="grid sm:grid-cols-2 gap-4 my-6">
        {[
          {
            title: '1000 TOEFL Speaking Questions',
            desc: 'Practice prompts across 10 TOEFL question types with answer tips and timing.',
            href: '/toefl/1000-toefl-speaking-questions/',
          },
          {
            title: '1000 IELTS Speaking Questions',
            desc: 'Practice prompts across 20 everyday IELTS topics with model answer guidance.',
            href: '/ielts/1000-ielts-speaking-questions/',
          },
          {
            title: 'Free English Grammar PDF Workbook',
            desc: 'Learn parts of speech, tenses, and sentence structure with exercises.',
            href: '/ielts/english-grammar-pdf/',
          },
          {
            title: 'IELTS Academic Vocabulary Book',
            desc: 'Essential vocabulary for Band 6 to 9 with examples and exercises.',
            href: '/ielts/academic-vocabulary-book/',
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
        Note: PTE Academic is a registered trademark of Pearson PLC. This resource is independent practice material
        and is not endorsed by or affiliated with Pearson. Copyright 2026 TypoGrammar. All Rights Reserved.
      </p>
    </div>
  );
};

export default PTE1000AcademicPracticeQuestionsPage;
