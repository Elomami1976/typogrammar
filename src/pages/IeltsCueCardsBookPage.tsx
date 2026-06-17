import React, { useEffect } from 'react';
import usePageMetadata from '../hooks/usePageMetadata';

const IeltsCueCardsBookPage: React.FC = () => {
  usePageMetadata({
    title: 'Free IELTS Cue Cards PDF (2026 Edition) | TypoGrammar',
    description: 'Download a free IELTS Speaking Part 2 Cue Cards PDF: 100 topics across 5 categories with Band 7+ sample answers, Part 3 follow-up questions, and a vocabulary bank.',
    canonical: 'https://typogrammar.com/ielts/cue-cards-book/',
    ogTitle: 'Free IELTS Cue Cards PDF (2026 Edition) | TypoGrammar',
    ogDescription: 'Download a free IELTS Speaking Part 2 Cue Cards PDF: 100 topics across 5 categories with Band 7+ sample answers, Part 3 follow-up questions, and a vocabulary bank.',
    ogUrl: 'https://typogrammar.com/ielts/cue-cards-book',
    ogImage: 'https://typogrammar.com/images/books/IELTS%20Cue%20Cards.jpg',
    ogType: 'book',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Free IELTS Cue Cards PDF (2026 Edition) | TypoGrammar',
    twitterDescription: 'Download a free IELTS Speaking Part 2 Cue Cards PDF: 100 topics across 5 categories with Band 7+ sample answers, Part 3 follow-up questions, and a vocabulary bank.',
    twitterImage: 'https://typogrammar.com/images/books/IELTS%20Cue%20Cards.jpg',
  });

  useEffect(() => {
    const bookSchema = {
      '@context': 'https://schema.org',
      '@type': 'Book',
      name: 'IELTS Cue Cards (2026 Edition)',
      author: {
        '@type': 'Organization',
        name: 'TypoGrammar',
      },
      publisher: {
        '@type': 'Organization',
        name: 'TypoGrammar',
      },
      inLanguage: 'en',
      bookFormat: 'EBook',
      url: 'https://typogrammar.com/ielts/cue-cards-book',
      image: 'https://typogrammar.com/images/books/IELTS%20Cue%20Cards.jpg',
      description:
        'Download a free IELTS Speaking Part 2 Cue Cards PDF: 100 topics across 5 categories with Band 7+ sample answers, Part 3 follow-up questions, and a vocabulary bank.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
    };

    const learningResourceSchema = {
      '@context': 'https://schema.org',
      '@type': 'LearningResource',
      name: 'IELTS Cue Cards (2026 Edition)',
      learningResourceType: 'ebook',
      about: ['IELTS Speaking', 'IELTS Cue Cards', 'IELTS Speaking Part 2'],
      url: 'https://typogrammar.com/ielts/cue-cards-book',
      description:
        'Download a free IELTS Speaking Part 2 Cue Cards PDF: 100 topics across 5 categories with Band 7+ sample answers, Part 3 follow-up questions, and a vocabulary bank.',
    };

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is this IELTS Cue Cards PDF free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, it is completely free to download. No signup required.',
          },
        },
        {
          '@type': 'Question',
          name: 'How many cue card topics are included?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The PDF includes 100 IELTS Speaking Part 2 cue card topics organized into 5 categories: People, Places, Objects, Events, and Experiences.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does it include sample answers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, every cue card comes with a full Band 7+ sample answer written for a two-minute long turn, plus Part 3 follow-up discussion questions.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is this for IELTS Academic or General Training?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Speaking test is identical for both versions of IELTS, so these cue cards and sample answers apply to Academic and General Training candidates alike.',
          },
        },
        {
          '@type': 'Question',
          name: 'How should I study with this book?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Prepare for one minute, then speak for two minutes on each topic before reading the sample answer. Compare your response, note useful vocabulary, then practice the Part 3 follow-up questions.',
          },
        },
      ],
    };

    const bookScript = document.createElement('script');
    bookScript.type = 'application/ld+json';
    bookScript.text = JSON.stringify(bookSchema);
    document.head.appendChild(bookScript);

    const learningScript = document.createElement('script');
    learningScript.type = 'application/ld+json';
    learningScript.text = JSON.stringify(learningResourceSchema);
    document.head.appendChild(learningScript);

    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.text = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    return () => {
      if (bookScript.parentNode) document.head.removeChild(bookScript);
      if (learningScript.parentNode) document.head.removeChild(learningScript);
      if (faqScript.parentNode) document.head.removeChild(faqScript);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const faqItems = [
    {
      question: 'Is this IELTS Cue Cards PDF free?',
      answer: 'Yes, it is completely free to download. No signup required.',
    },
    {
      question: 'How many cue card topics are included?',
      answer: 'The PDF includes 100 IELTS Speaking Part 2 cue card topics organized into 5 categories: People, Places, Objects, Events, and Experiences.',
    },
    {
      question: 'Does it include sample answers?',
      answer: 'Yes, every cue card comes with a full Band 7+ sample answer written for a two-minute long turn, plus Part 3 follow-up discussion questions.',
    },
    {
      question: 'Is this for IELTS Academic or General Training?',
      answer: 'The Speaking test is identical for both versions of IELTS, so these cue cards and sample answers apply to Academic and General Training candidates alike.',
    },
    {
      question: 'How should I study with this book?',
      answer: 'Prepare for one minute, then speak for two minutes on each topic before reading the sample answer. Compare your response, note useful vocabulary, then practice the Part 3 follow-up questions.',
    },
  ];

  const categories = [
    { range: 'Cards 1-20', name: 'People', desc: 'Friends, family, teachers, public figures, and people who have influenced you' },
    { range: 'Cards 21-40', name: 'Places', desc: 'Cities, buildings, parks, study spaces, and memorable locations' },
    { range: 'Cards 41-60', name: 'Objects', desc: 'Gifts, books, technology, household items, and personal possessions' },
    { range: 'Cards 61-80', name: 'Events', desc: 'Celebrations, sports events, family gatherings, and memorable occasions' },
    { range: 'Cards 81-100', name: 'Experiences', desc: 'Challenges, firsts, lessons learned, and moments that mattered' },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      {/* HERO SECTION */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-slate-100 mb-6 leading-tight">
              IELTS Cue Cards <span className="text-blue-600 dark:text-blue-400">(2026 Edition)</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Free PDF: 100 IELTS Speaking Part 2 cue card topics with full Band 7+ sample answers and Part 3 follow-up questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <a
                href="/downloads/IELTS_Cue_Cards_2026_TypoGrammar.pdf"
                download
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 text-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Free PDF
              </a>
              <button
                onClick={() => scrollToSection('contents')}
                className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-slate-800 border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-slate-700 transition-all duration-200"
              >
                What's Inside
              </button>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 italic">
              Free download, no signup required.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/images/books/IELTS%20Cue%20Cards.jpg"
              alt="IELTS Cue Cards Book Cover (2026 Edition)"
              className="rounded-xl shadow-2xl max-w-full h-auto"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL GET SECTION */}
      <section className="mb-16">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 md:p-12 shadow-lg">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
            What You'll Get
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100 mb-1">
                  100 Cue Card Topics
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  20 topics per category (People, Places, Objects, Events, Experiences), updated for 2025-2026
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100 mb-1">
                  Full Band 7+ Sample Answers
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  A complete two-minute long-turn sample answer for every single cue card
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100 mb-1">
                  Part 3 Follow-Up Questions
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Three discussion questions per topic to help you prepare for the Part 3 interview
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100 mb-1">
                  Band 7+ Vocabulary Bank
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Phrases for describing people and places, expressing opinions, contrasting ideas, and describing change
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR SECTION */}
      <section className="mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
          Who This Is For
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="font-semibold text-xl text-slate-900 dark:text-slate-100 mb-3">
              IELTS Speaking Candidates
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Candidates aiming for Band 7+ who want a full bank of Part 2 cue cards to rehearse with
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-xl text-slate-900 dark:text-slate-100 mb-3">
              Self-Learners
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Learners practicing alone who need realistic prompts and model answers to compare against
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="font-semibold text-xl text-slate-900 dark:text-slate-100 mb-3">
              Teachers & Exam Prep Centres
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Instructors who need a ready-made set of cue cards and follow-up questions for speaking classes
            </p>
          </div>
        </div>
      </section>

      {/* HOW TO USE THIS BOOK SECTION */}
      <section className="mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
          How to Use This Book
        </h2>
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 shadow-lg">
          <ol className="space-y-6">
            <li className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">1</div>
              <div className="pt-1">
                <h3 className="font-semibold text-xl text-slate-900 dark:text-slate-100 mb-2">
                  Prepare for one minute
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Read the cue card prompt and spend exactly one minute preparing your answer before reading the sample.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">2</div>
              <div className="pt-1">
                <h3 className="font-semibold text-xl text-slate-900 dark:text-slate-100 mb-2">
                  Record yourself for two minutes
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Speak for two minutes on the topic, then compare your response to the Band 7+ sample answer.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">3</div>
              <div className="pt-1">
                <h3 className="font-semibold text-xl text-slate-900 dark:text-slate-100 mb-2">
                  Collect vocabulary and phrases
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Note the vocabulary and phrases used in each sample answer and incorporate them into your own speaking.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">4</div>
              <div className="pt-1">
                <h3 className="font-semibold text-xl text-slate-900 dark:text-slate-100 mb-2">
                  Practice the Part 3 follow-ups
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Use the follow-up discussion questions after each card to rehearse Part 3 responses.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">5</div>
              <div className="pt-1">
                <h3 className="font-semibold text-xl text-slate-900 dark:text-slate-100 mb-2">
                  Revisit until it feels natural
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Return to each topic multiple times until you can speak confidently for two minutes without notes.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* WHAT'S INSIDE (TABLE OF CONTENTS) SECTION */}
      <section className="mb-16" id="contents">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
          What's Inside
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-8 shadow-md border-2 border-blue-200 dark:border-blue-700"
            >
              <div className="flex items-center mb-4">
                <h3 className="font-semibold text-2xl text-slate-900 dark:text-slate-100">{cat.name}</h3>
                <span className="ml-3 text-sm font-medium text-blue-600 dark:text-blue-400">{cat.range}</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-lg">{cat.desc}</p>
            </div>
          ))}
          <div className="bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 rounded-xl p-8 shadow-md border-2 border-teal-200 dark:border-teal-700">
            <h3 className="font-semibold text-2xl text-slate-900 dark:text-slate-100 mb-3">Bonus Sections</h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              IELTS Speaking band descriptors, Part 2 strategy notes, a Band 7+ vocabulary bank, and final study tips
            </p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
          ❓ Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
              <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100 mb-2">
                {item.question}
              </h3>
              <p className="text-slate-700 dark:text-slate-300">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT TYPOGRAMMAR SECTION */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 md:p-12 shadow-lg border border-slate-200 dark:border-slate-700">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            About TypoGrammar
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
            TypoGrammar is your comprehensive English-learning platform dedicated to mastering grammar, building academic
            vocabulary, and achieving IELTS success. We provide clear explanations, practical examples, and exam-focused
            resources to help you communicate with confidence and precision.
          </p>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
            Whether you're preparing for the IELTS Speaking test, improving your writing skills, or expanding your English
            knowledge, our expertly crafted content is designed to support your learning journey.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Visit Homepage
            </a>
            <a
              href="/ielts/1000-ielts-speaking-questions/"
              className="inline-flex items-center px-6 py-3 bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 font-semibold rounded-lg border-2 border-blue-600 dark:border-blue-500 hover:bg-blue-50 dark:hover:bg-slate-600 transition-colors duration-200"
            >
              Explore More IELTS Speaking Resources
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="text-center mb-12">
        <div className="bg-blue-600 dark:bg-blue-700 rounded-2xl p-8 md:p-12 shadow-2xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Master IELTS Speaking Part 2?
          </h2>
          <p className="text-xl text-blue-100 mb-8">Download your free Cue Cards PDF now and start practicing today.</p>
          <a
            href="/downloads/IELTS_Cue_Cards_2026_TypoGrammar.pdf"
            download
            className="inline-flex items-center justify-center px-10 py-5 bg-white text-blue-600 font-bold text-lg rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Free PDF
          </a>
        </div>
      </section>
    </div>
  );
};

export default IeltsCueCardsBookPage;
