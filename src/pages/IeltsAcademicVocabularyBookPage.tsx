import React, { useEffect } from 'react';
import usePageMetadata from '../hooks/usePageMetadata';

const IeltsAcademicVocabularyBookPage: React.FC = () => {
  // SEO Metadata with Open Graph and Twitter Card support
  usePageMetadata({
    title: 'Free IELTS Academic Vocabulary Book (Band 6–9) | TypoGrammar',
    description: 'Download a free IELTS academic vocabulary book (Band 6–9): 200 high-scoring words with definitions, examples, and usage notes.',
    canonical: 'https://typogrammar.com/ielts/academic-vocabulary-book',
    ogTitle: 'Free IELTS Academic Vocabulary Book (Band 6–9) | TypoGrammar',
    ogDescription: 'Download a free IELTS academic vocabulary book (Band 6–9): 200 high-scoring words with definitions, examples, and usage notes.',
    ogUrl: 'https://typogrammar.com/ielts/academic-vocabulary-book',
    ogImage: 'https://typogrammar.com/images/books/ielts-academic-vocab-cover.jpg',
    ogType: 'book',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Free IELTS Academic Vocabulary Book (Band 6–9) | TypoGrammar',
    twitterDescription: 'Download a free IELTS academic vocabulary book (Band 6–9): 200 high-scoring words with definitions, examples, and usage notes.',
    twitterImage: 'https://typogrammar.com/images/books/ielts-academic-vocab-cover.jpg',
  });

  // JSON-LD Schema Markup for Book and Educational Resource
  useEffect(() => {
    const bookSchema = {
      '@context': 'https://schema.org',
      '@type': 'Book',
      name: 'IELTS Academic Vocabulary (Band 6–9)',
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
      url: 'https://typogrammar.com/ielts/academic-vocabulary-book',
      image: 'https://typogrammar.com/images/books/ielts-academic-vocab-cover.jpg',
      description:
        'Download a free IELTS academic vocabulary book (Band 6–9): 200 high-scoring words with definitions, examples, and usage notes.',
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
      name: 'IELTS Academic Vocabulary (Band 6–9)',
      learningResourceType: 'ebook',
      about: ['IELTS vocabulary', 'IELTS Writing Task 2', 'Academic English'],
      url: 'https://typogrammar.com/ielts/academic-vocabulary-book',
      description:
        'Download a free IELTS academic vocabulary book (Band 6–9): 200 high-scoring words with definitions, examples, and usage notes.',
    };

    // Create and inject Book schema
    const bookScript = document.createElement('script');
    bookScript.type = 'application/ld+json';
    bookScript.text = JSON.stringify(bookSchema);
    document.head.appendChild(bookScript);

    // Create and inject Learning Resource schema
    const learningScript = document.createElement('script');
    learningScript.type = 'application/ld+json';
    learningScript.text = JSON.stringify(learningResourceSchema);
    document.head.appendChild(learningScript);

    return () => {
      if (bookScript.parentNode) {
        document.head.removeChild(bookScript);
      }
      if (learningScript.parentNode) {
        document.head.removeChild(learningScript);
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* HERO SECTION */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-slate-100 mb-6 leading-tight">
              IELTS Academic Vocabulary <span className="text-blue-600 dark:text-blue-400">(Band 6–9)</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Free PDF: 200 academic words with definitions, IELTS-style examples, and usage notes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <a
                href="/downloads/ielts-academic-vocabulary-band-6-9.pdf"
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
              Free download — no signup required.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/images/books/ielts-academic-vocab-cover.jpg"
              alt="IELTS Academic Vocabulary Book Cover (Band 6–9)"
              className="rounded-xl shadow-2xl max-w-full h-auto"
              loading="eager"
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100 mb-1">
                  200 Words Total
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  50 words per band (6, 7, 8, 9) carefully selected for IELTS success
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100 mb-1">
                  Complete Information
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Definition + IELTS-style example sentence + usage note for every word
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100 mb-1">
                  Exam-Focused
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Focused on Writing Task 2 and Speaking Parts 2 & 3
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100 mb-1">
                  Study-Ready
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Built for fast daily study and real exam use
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600 dark:text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-xl text-slate-900 dark:text-slate-100 mb-3">
              IELTS Candidates
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Candidates aiming for Band 6.5–9 in Academic or General IELTS
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-600 dark:text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-xl text-slate-900 dark:text-slate-100 mb-3">
              Academic Students
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Students preparing for academic study or immigration requirements
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-purple-600 dark:text-purple-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-xl text-slate-900 dark:text-slate-100 mb-3">
              Self-Learners & Teachers
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Independent learners and English teachers preparing students
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
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                1
              </div>
              <div className="pt-1">
                <h3 className="font-semibold text-xl text-slate-900 dark:text-slate-100 mb-2">
                  Study 5–10 words daily
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Start with your target band level and work through the words systematically. Consistency is key.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                2
              </div>
              <div className="pt-1">
                <h3 className="font-semibold text-xl text-slate-900 dark:text-slate-100 mb-2">
                  Write your own sentence for each word
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Active practice helps embed the vocabulary. Write sentences relevant to common IELTS topics.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                3
              </div>
              <div className="pt-1">
                <h3 className="font-semibold text-xl text-slate-900 dark:text-slate-100 mb-2">
                  Reuse the words in Writing Task 2 paragraphs
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Practice incorporating new vocabulary into full essay paragraphs on diverse topics.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                4
              </div>
              <div className="pt-1">
                <h3 className="font-semibold text-xl text-slate-900 dark:text-slate-100 mb-2">
                  Review weekly and track mistakes
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Regular review reinforces memory. Keep a list of words you find challenging.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                5
              </div>
              <div className="pt-1">
                <h3 className="font-semibold text-xl text-slate-900 dark:text-slate-100 mb-2">
                  Apply in Speaking answers (Part 2/3)
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Use the vocabulary naturally when answering Speaking questions. Practice out loud.
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
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-8 shadow-md border-2 border-green-200 dark:border-green-700">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-600 text-white rounded-lg flex items-center justify-center font-bold text-xl mr-4">
                6
              </div>
              <h3 className="font-semibold text-2xl text-slate-900 dark:text-slate-100">Band 6 Vocabulary</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              50 essential words for achieving Band 6
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-8 shadow-md border-2 border-blue-200 dark:border-blue-700">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-xl mr-4">
                7
              </div>
              <h3 className="font-semibold text-2xl text-slate-900 dark:text-slate-100">Band 7 Vocabulary</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              50 advanced words for reaching Band 7
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-xl p-8 shadow-md border-2 border-purple-200 dark:border-purple-700">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-lg flex items-center justify-center font-bold text-xl mr-4">
                8
              </div>
              <h3 className="font-semibold text-2xl text-slate-900 dark:text-slate-100">Band 8 Vocabulary</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              50 sophisticated words for Band 8 performance
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-xl p-8 shadow-md border-2 border-amber-200 dark:border-amber-700">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-amber-600 text-white rounded-lg flex items-center justify-center font-bold text-xl mr-4">
                9
              </div>
              <h3 className="font-semibold text-2xl text-slate-900 dark:text-slate-100">Band 9 Vocabulary</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              50 expert-level words for maximum scoring
            </p>
          </div>
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
            Whether you're preparing for the IELTS exam, improving your writing skills, or expanding your English
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
              href="/ielts/ielts-writing-task-2-essay-types"
              className="inline-flex items-center px-6 py-3 bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 font-semibold rounded-lg border-2 border-blue-600 dark:border-blue-500 hover:bg-blue-50 dark:hover:bg-slate-600 transition-colors duration-200"
            >
              Explore IELTS Resources
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="text-center mb-12">
        <div className="bg-blue-600 dark:bg-blue-700 rounded-2xl p-8 md:p-12 shadow-2xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Boost Your IELTS Vocabulary?
          </h2>
          <p className="text-xl text-blue-100 mb-8">Download your free ebook now and start improving today.</p>
          <a
            href="/downloads/ielts-academic-vocabulary-band-6-9.pdf"
            download
            className="inline-flex items-center justify-center px-10 py-5 bg-white text-blue-600 font-bold text-lg rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3"
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
        </div>
      </section>
    </div>
  );
};

export default IeltsAcademicVocabularyBookPage;
