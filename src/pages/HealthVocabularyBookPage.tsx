import React, { useEffect } from 'react';
import usePageMetadata from '../hooks/usePageMetadata';

const HealthVocabularyBookPage: React.FC = () => {
  // SEO Metadata with Open Graph and Twitter Card support
  usePageMetadata({
    title: 'Health Vocabulary Book - 50 Essential Medical Words (Free PDF) | TypoGrammar',
    description: 'Download the Health Vocabulary PDF (50 essential medical and health words) for IELTS, TOEFL, and academic writing. Improve your writing score today.',
    canonical: 'https://typogrammar.com/ielts/health-vocabulary-book/',
    ogTitle: 'Health Vocabulary Book - 50 Essential Medical Words (Free PDF) | TypoGrammar',
    ogDescription: 'Download the Health Vocabulary PDF (50 essential medical and health words) for IELTS, TOEFL, and academic writing. Improve your writing score today.',
    ogUrl: 'https://typogrammar.com/ielts/health-vocabulary-book',
    ogImage: 'https://typogrammar.com/images/books/health-vocabulary-cover.jpg',
    ogType: 'book',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Health Vocabulary Book - 50 Essential Medical Words (Free PDF) | TypoGrammar',
    twitterDescription: 'Download the Health Vocabulary PDF (50 essential medical and health words) for IELTS, TOEFL, and academic writing. Improve your writing score today.',
    twitterImage: 'https://typogrammar.com/images/books/health-vocabulary-cover.jpg',
  });

  // JSON-LD Schema Markup for Book, LearningResource, and FAQPage
  useEffect(() => {
    const bookSchema = {
      '@context': 'https://schema.org',
      '@type': 'Book',
      name: 'Health Vocabulary - 50 Essential Words',
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
      url: 'https://typogrammar.com/ielts/health-vocabulary-book',
      image: 'https://typogrammar.com/images/books/health-vocabulary-cover.jpg',
      description:
        'Download the Health Vocabulary PDF: 50 essential medical and health words with definitions, usage tips, and academic context guidance for IELTS, TOEFL, and academic writing.',
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
      name: 'Health Vocabulary - 50 Essential Words',
      learningResourceType: 'ebook',
      about: ['Health vocabulary', 'Medical English', 'IELTS Writing', 'TOEFL Writing', 'Academic English'],
      url: 'https://typogrammar.com/ielts/health-vocabulary-book',
      description:
        'A free PDF resource with 50 essential health and medical vocabulary words for IELTS, TOEFL, and academic writing exams.',
    };

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is this book suitable for IELTS beginners?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The definitions are simple and clear, but the vocabulary is advanced enough for higher bands.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does this include example sentences?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Each word includes a practical usage tip to guide correct application in writing.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can teachers use this in class?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely. It is structured for classroom discussion and vocabulary practice.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is this focused only on medical students?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. It is designed for general academic English, especially exam preparation.',
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

  return (
    <div className="max-w-5xl mx-auto">
      {/* HERO SECTION */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-slate-100 mb-6 leading-tight">
              Health Vocabulary{' '}
              <span className="text-blue-600 dark:text-blue-400">50 Essential Words</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Master 50 essential health &amp; medical words for IELTS, TOEFL, and academic writing. Each word includes a clear definition, simple explanation, practical usage tip, and academic context guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <a
                href="/downloads/health-vocabulary-50-essential-words.pdf"
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
              src="/images/books/health-vocabulary-cover.jpg"
              alt="Health Vocabulary Book Cover - 50 Essential Words"
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
                  50 Essential Words
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  High-frequency health and medical terms used in IELTS, TOEFL, and academic contexts
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
                  Clear Definitions &amp; Explanations
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Simple, straightforward definitions with explanations you can actually understand
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
                  Practical Usage Tips
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Learn when, where, and how to use each word correctly, avoid common mistakes
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
                  Academic Context Guidance
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Know exactly where each word fits in essays, exams, and professional writing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY THIS BOOK IS DIFFERENT */}
      <section className="mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
          Why This Health Vocabulary PDF Is Different
        </h2>
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 shadow-lg">
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
            Many vocabulary lists just give definitions. This book helps you understand:
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-lg"><strong>When</strong> to use each word</p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-lg"><strong>Where</strong> it fits academically</p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-lg"><strong>How</strong> to avoid common mistakes</p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-lg"><strong>How</strong> to sound natural &amp; professional</p>
            </div>
          </div>
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-6">
            <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100 mb-4">
              Key Distinctions Covered (Crucial for Band 7+ Writing)
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="flex items-center text-slate-700 dark:text-slate-300">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                <span><strong>Chronic</strong> vs <strong>Acute</strong></span>
              </div>
              <div className="flex items-center text-slate-700 dark:text-slate-300">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                <span><strong>Epidemic</strong> vs <strong>Pandemic</strong></span>
              </div>
              <div className="flex items-center text-slate-700 dark:text-slate-300">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                <span><strong>Treatment</strong> vs <strong>Therapy</strong></span>
              </div>
              <div className="flex items-center text-slate-700 dark:text-slate-300">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                <span><strong>Diagnosis</strong> vs <strong>Prognosis</strong></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR SECTION */}
      <section className="mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
          Who This Book Is For
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>
            <h3 className="font-semibold text-xl text-slate-900 dark:text-slate-100 mb-3">
              IELTS &amp; TOEFL Students
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              IELTS candidates targeting Band 6.5+ and TOEFL students aiming for 90+
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-xl text-slate-900 dark:text-slate-100 mb-3">
              Nursing &amp; Medical Students
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Healthcare professionals and students studying nursing or medicine in English
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="font-semibold text-xl text-slate-900 dark:text-slate-100 mb-3">
              Teachers &amp; Academic Writers
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              English teachers looking for structured vocabulary material and academic writers
            </p>
          </div>
        </div>
      </section>

      {/* HOW THIS BOOK IMPROVES YOUR WRITING */}
      <section className="mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
          How This Book Improves Your Writing Score
        </h2>
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 shadow-lg">
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
            Health is one of the most common exam topics, this vocabulary gives you a major advantage. Using topic-specific vocabulary helps you:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Increase lexical resource (IELTS)',
              'Improve academic tone',
              'Avoid repetition in essays',
              'Sound more professional',
              'Write clearer arguments',
              'Describe causes, effects, and medical conditions accurately',
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-slate-700 dark:text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO USE THIS BOOK */}
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
                  Study 5-10 words daily
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Work through the word list systematically. Read the definition, explanation, and usage tip for each word.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                2
              </div>
              <div className="pt-1">
                <h3 className="font-semibold text-xl text-slate-900 dark:text-slate-100 mb-2">
                  Write your own sentences
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Practice using each word in context. Write sentences about health topics like obesity, mental health, or public health policies.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                3
              </div>
              <div className="pt-1">
                <h3 className="font-semibold text-xl text-slate-900 dark:text-slate-100 mb-2">
                  Use words in full essay paragraphs
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Incorporate vocabulary into IELTS Task 2 or TOEFL writing practice on health-related prompts.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                4
              </div>
              <div className="pt-1">
                <h3 className="font-semibold text-xl text-slate-900 dark:text-slate-100 mb-2">
                  Learn the key distinctions
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Pay special attention to commonly confused pairs like chronic vs acute and epidemic vs pandemic.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                5
              </div>
              <div className="pt-1">
                <h3 className="font-semibold text-xl text-slate-900 dark:text-slate-100 mb-2">
                  Review weekly and apply in practice tests
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Regular review reinforces memory. Use the vocabulary actively in speaking and writing practice.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* WHAT'S INSIDE (SAMPLE WORDS) */}
      <section className="mb-16" id="contents">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
          What's Inside
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
          This PDF includes 50 high-frequency health and medical terms. Here are some of the words covered:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-xl p-6 shadow-md border-2 border-red-200 dark:border-red-700">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-red-500 text-white rounded-lg flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl text-slate-900 dark:text-slate-100">Health &amp; Wellness</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Well-being', 'Immunity', 'Nutrition', 'Prevention', 'Longevity'].map((word) => (
                <span key={word} className="px-3 py-1 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm border border-red-200 dark:border-red-700">
                  {word}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6 shadow-md border-2 border-blue-200 dark:border-blue-700">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-500 text-white rounded-lg flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl text-slate-900 dark:text-slate-100">Medical Terms</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Diagnosis', 'Symptoms', 'Medication', 'Treatment', 'Screening'].map((word) => (
                <span key={word} className="px-3 py-1 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm border border-blue-200 dark:border-blue-700">
                  {word}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 shadow-md border-2 border-green-200 dark:border-green-700">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-green-500 text-white rounded-lg flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl text-slate-900 dark:text-slate-100">Public Health</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Pandemic', 'Vaccine', 'Chronic', 'Obesity', 'Hypertension'].map((word) => (
                <span key={word} className="px-3 py-1 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm border border-green-200 dark:border-green-700">
                  {word}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-xl p-6 shadow-md border-2 border-purple-200 dark:border-purple-700">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-purple-500 text-white rounded-lg flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl text-slate-900 dark:text-slate-100">Mental Health</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Mental health', 'Anxiety', 'Diabetes', 'Therapy', 'Prognosis'].map((word) => (
                <span key={word} className="px-3 py-1 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm border border-purple-200 dark:border-purple-700">
                  {word}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-teal-50 to-yellow-50 dark:from-teal-900/20 dark:to-yellow-900/20 rounded-xl p-6 shadow-md border-2 border-teal-200 dark:border-teal-700">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-teal-500 text-white rounded-lg flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl text-slate-900 dark:text-slate-100">...and many more</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              All 50 words are commonly used in IELTS Task 2 (health topics), TOEFL Integrated &amp; Independent Writing, academic essays, research writing, and public health discussions.
            </p>
          </div>
        </div>
      </section>

      {/* PDF DETAILS */}
      <section className="mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
          PDF Details
        </h2>
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <span className="text-2xl mr-3">📄</span>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Format</p>
                <p className="font-semibold text-slate-900 dark:text-slate-100">PDF</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-3">📘</span>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Title</p>
                <p className="font-semibold text-slate-900 dark:text-slate-100">Health Vocabulary - 50 Essential Words</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-3">📑</span>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Content</p>
                <p className="font-semibold text-slate-900 dark:text-slate-100">Structured word list with usage tips</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-3">🎯</span>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Level</p>
                <p className="font-semibold text-slate-900 dark:text-slate-100">Intermediate to Advanced</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-3">🏷️</span>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Designed for</p>
                <p className="font-semibold text-slate-900 dark:text-slate-100">IELTS / TOEFL / Academic Writing</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-3">💰</span>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Price</p>
                <p className="font-semibold text-green-600 dark:text-green-400">Free</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {[
            {
              q: 'Is this book suitable for IELTS beginners?',
              a: 'Yes. The definitions are simple and clear, but the vocabulary is advanced enough for higher bands.',
            },
            {
              q: 'Does this include example sentences?',
              a: 'Each word includes a practical usage tip to guide correct application in writing.',
            },
            {
              q: 'Can teachers use this in class?',
              a: 'Absolutely. It is structured for classroom discussion and vocabulary practice.',
            },
            {
              q: 'Is this focused only on medical students?',
              a: 'No. It is designed for general academic English, especially exam preparation.',
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border border-slate-200 dark:border-slate-700"
            >
              <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100 mb-2">{faq.q}</h3>
              <p className="text-slate-600 dark:text-slate-400">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RELATED BOOKS */}
      <section className="mb-12">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
          Related Vocabulary Books
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <a
            href="/ielts/academic-vocabulary-book/"
            className="block bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200 border border-slate-200 dark:border-slate-700"
          >
            <h3 className="font-semibold text-xl text-blue-600 dark:text-blue-400 mb-2">
              IELTS Academic Vocabulary Book (Band 6-9)
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              200 academic words with definitions, examples, and usage notes for all IELTS band levels.
            </p>
          </a>
          <a
            href="/ielts/idioms-book/"
            className="block bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200 border border-slate-200 dark:border-slate-700"
          >
            <h3 className="font-semibold text-xl text-blue-600 dark:text-blue-400 mb-2">
              100 Most Used English Idioms (PDF)
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Master the 100 most commonly used English idioms with meanings, examples, and practice tips.
            </p>
          </a>
        </div>
      </section>

      {/* ABOUT TYPOGRAMMAR */}
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
              href="/ielts/ielts-writing-task-2-essay-types/"
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
            Start Improving Your Health Vocabulary Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">Download your free Health Vocabulary PDF and boost your exam writing score.</p>
          <a
            href="/downloads/health-vocabulary-50-essential-words.pdf"
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

export default HealthVocabularyBookPage;
