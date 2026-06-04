import React, { useEffect } from 'react';
import usePageMetadata from '../hooks/usePageMetadata';

const IeltsIdiomsBookPage: React.FC = () => {
  // SEO Metadata with Open Graph and Twitter Card support
  usePageMetadata({
    title: '100 Most Used English Idioms PDF (Free Download) | TypoGrammar',
    description: 'Free PDF with 100 most used English idioms with meanings and examples. Ideal for IELTS, TOEFL, and everyday English.',
    canonical: 'https://typogrammar.com/ielts/idioms-book/',
    ogTitle: '100 Most Used English Idioms PDF (Free Download) | TypoGrammar',
    ogDescription: 'Free PDF with 100 most used English idioms with meanings and examples. Ideal for IELTS, TOEFL, and everyday English.',
    ogUrl: 'https://typogrammar.com/ielts/idioms-book',
    ogImage: 'https://typogrammar.com/images/books/100-idioms-cover.jpg',
    ogType: 'book',
    twitterCard: 'summary_large_image',
    twitterTitle: '100 Most Used English Idioms PDF (Free Download) | TypoGrammar',
    twitterDescription: 'Free PDF with 100 most used English idioms with meanings and examples. Ideal for IELTS, TOEFL, and everyday English.',
    twitterImage: 'https://typogrammar.com/images/books/100-idioms-cover.jpg',
  });

  // JSON-LD Schema Markup for Book and FAQ
  useEffect(() => {
    const bookSchema = {
      '@context': 'https://schema.org',
      '@type': 'Book',
      name: '100 Most Used English Idioms',
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
      url: 'https://typogrammar.com/ielts/idioms-book',
      image: 'https://typogrammar.com/images/books/100-idioms-cover.jpg',
      description:
        'Download a free PDF containing 100 of the most commonly used English idioms with clear meanings and example sentences. Perfect for IELTS, TOEFL, and daily English practice.',
      fileFormat: 'application/pdf',
      downloadUrl: 'https://typogrammar.com/downloads/100-most-used-english-idioms.pdf',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
    };

    const creativeWorkSchema = {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: '100 Most Used English Idioms PDF',
      creator: {
        '@type': 'Organization',
        name: 'TypoGrammar',
      },
      publisher: {
        '@type': 'Organization',
        name: 'TypoGrammar',
      },
      inLanguage: 'en',
      url: 'https://typogrammar.com/ielts/idioms-book',
      description:
        'Download a free PDF containing 100 of the most commonly used English idioms with clear meanings and example sentences. Perfect for IELTS, TOEFL, and daily English practice.',
      fileFormat: 'application/pdf',
    };

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is included in this PDF?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'This PDF contains 100 of the most commonly used English idioms with clear definitions, meanings, and example sentences for each idiom.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is the idioms PDF free to download?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, the 100 Most Used English Idioms PDF is completely free to download with no signup or payment required.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does it include meanings and example sentences?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, each idiom includes both a clear meaning/definition and example sentences showing how to use it naturally in context.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is this useful for IELTS or TOEFL?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely. These idioms are perfect for improving your speaking and writing scores in IELTS, TOEFL, and other English proficiency exams.',
          },
        },
        {
          '@type': 'Question',
          name: 'How should I study these idioms?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Study 5-10 idioms daily, practice using them in your own sentences, and try to incorporate them naturally into conversations and writing.',
          },
        },
      ],
    };

    const webPageSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: '100 Most Used English Idioms PDF (Free Download)',
      url: 'https://typogrammar.com/ielts/idioms-book',
      publisher: {
        '@type': 'Organization',
        name: 'TypoGrammar',
      },
      inLanguage: 'en',
      description:
        'Free PDF with 100 most used English idioms with meanings and examples. Ideal for IELTS, TOEFL, and everyday English.',
    };

    // Insert combined schema script
    const combinedSchema = {
      '@context': 'https://schema.org',
      '@graph': [bookSchema, creativeWorkSchema, faqSchema, webPageSchema],
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(combinedSchema);
    document.head.appendChild(script);

    return () => {
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
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
              100 Most Used English <span className="text-blue-600 dark:text-blue-400">Idioms</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Download a free PDF containing 100 of the most commonly used English idioms with clear meanings and example sentences. Perfect for IELTS, TOEFL, and daily English practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <a
                href="/downloads/100-most-used-english-idioms.pdf"
                download
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 dark:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-700 dark:hover:bg-blue-800 transition-all duration-200"
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
            <a
              href="/downloads/100-most-used-english-idioms.pdf"
              download
              aria-label="Download 100 Most Used English Idioms PDF"
            >
              <img
                src="/images/books/100-idioms-cover.jpg"
                alt="100 Most Used English Idioms PDF book cover by TypoGrammar"
                className="rounded-xl shadow-2xl max-w-full h-auto hover:scale-105 transition-transform duration-300"
                loading="eager"
                decoding="async"
                width="400"
                height="520"
              />
            </a>
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
                  100 Common Idioms
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  The most frequently used idioms in English, carefully selected for maximum impact
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
                  Clear Meanings
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Simple, easy-to-understand definitions for each idiom
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
                  Example Sentences
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Real-world example sentences showing natural usage and context
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
                  Exam-Ready Format
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Perfect for IELTS Speaking, TOEFL, and academic writing
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
                <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>
            <h3 className="font-semibold text-xl text-slate-900 dark:text-slate-100 mb-3">
              English Exam Students
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Perfect for IELTS, TOEFL, and other English proficiency test preparation
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
              English Learners
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Intermediate to advanced learners looking to sound more natural and fluent
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
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-xl text-slate-900 dark:text-slate-100 mb-3">
              Teachers & Tutors
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              English teachers looking for ready-made idiom resources for their students
            </p>
          </div>
        </div>
      </section>

      {/* HOW TO USE THIS RESOURCE SECTION */}
      <section className="mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
          How to Use This Resource
        </h2>
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 shadow-lg">
          <ol className="space-y-6">
            <li className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                1
              </div>
              <div className="pt-1">
                <h3 className="font-semibold text-xl text-slate-900 dark:text-slate-100 mb-2">
                  Study 5-10 idioms daily
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Choose a manageable number and focus on understanding their meanings and usage completely.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                2
              </div>
              <div className="pt-1">
                <h3 className="font-semibold text-xl text-slate-900 dark:text-slate-100 mb-2">
                  Create your own example sentences
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Practice using each idiom in your own sentences to reinforce learning and understanding.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                3
              </div>
              <div className="pt-1">
                <h3 className="font-semibold text-xl text-slate-900 dark:text-slate-100 mb-2">
                  Use them in conversation
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Try to naturally incorporate new idioms into your speaking practice and daily conversations.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                4
              </div>
              <div className="pt-1">
                <h3 className="font-semibold text-xl text-slate-900 dark:text-slate-100 mb-2">
                  Review regularly
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Regular review helps move idioms from short-term to long-term memory for natural usage.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                5
              </div>
              <div className="pt-1">
                <h3 className="font-semibold text-xl text-slate-900 dark:text-slate-100 mb-2">
                  Apply in writing and speaking tests
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Use appropriate idioms naturally in IELTS Speaking Part 2/3 and Writing Task 2 essays.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* WHAT'S INSIDE SECTION */}
      <section className="mb-16" id="contents">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
          What's Inside
        </h2>
        <div className="bg-gradient-to-br from-yellow-50 to-teal-50 dark:from-yellow-900/20 dark:to-teal-900/20 rounded-xl p-8 shadow-md border-2 border-yellow-200 dark:border-yellow-700">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-teal-500 text-white rounded-lg flex items-center justify-center font-bold text-2xl mr-6">
              100
            </div>
            <div>
              <h3 className="font-semibold text-2xl text-slate-900 dark:text-slate-100 mb-2">Most Used English Idioms</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Carefully selected idioms that native speakers use daily in both formal and informal contexts
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-slate-700 dark:text-slate-300">
            <div>• Clear and simple meanings</div>
            <div>• Natural example sentences</div>
            <div>• Common usage contexts</div>
            <div>• Perfect for exam preparation</div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md">
            <h3 className="font-semibold text-xl text-slate-900 dark:text-slate-100 mb-3">
              What is included in this PDF?
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              This PDF contains 100 of the most commonly used English idioms with clear definitions, meanings, and example sentences for each idiom.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md">
            <h3 className="font-semibold text-xl text-slate-900 dark:text-slate-100 mb-3">
              Is the idioms PDF free to download?
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Yes, the 100 Most Used English Idioms PDF is completely free to download with no signup or payment required.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md">
            <h3 className="font-semibold text-xl text-slate-900 dark:text-slate-100 mb-3">
              Does it include meanings and example sentences?
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Yes, each idiom includes both a clear meaning/definition and example sentences showing how to use it naturally in context.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md">
            <h3 className="font-semibold text-xl text-slate-900 dark:text-slate-100 mb-3">
              Is this useful for IELTS or TOEFL?
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Absolutely. These idioms are perfect for improving your speaking and writing scores in IELTS, TOEFL, and other English proficiency exams.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md">
            <h3 className="font-semibold text-xl text-slate-900 dark:text-slate-100 mb-3">
              How should I study these idioms?
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Study 5-10 idioms daily, practice using them in your own sentences, and try to incorporate them naturally into conversations and writing.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT TYPOGRAMMAR SECTION */}
      <section className="mb-12">
        <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 md:p-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            About TypoGrammar
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
            TypoGrammar is your trusted resource for mastering English grammar, vocabulary, and exam preparation. 
            We create practical, easy-to-use materials designed specifically for English learners and test takers.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Our idioms PDF joins our comprehensive collection of free resources, all designed to help you 
            achieve your English learning goals with confidence and clarity.
          </p>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="text-center mb-12">
        <div className="bg-blue-600 dark:bg-blue-700 rounded-2xl p-8 md:p-12 shadow-2xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Master English Idioms?
          </h2>
          <p className="text-xl text-blue-100 mb-8">Download your free PDF now and start speaking like a native!</p>
          <a
            href="/downloads/100-most-used-english-idioms.pdf"
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

export default IeltsIdiomsBookPage;