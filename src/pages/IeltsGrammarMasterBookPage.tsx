import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import GoogleAd from '../components/GoogleAd';

const IeltsGrammarMasterBookPage: React.FC = () => {
  usePageMetadata({
    title: 'IELTS Band 9 Grammar Secrets PDF (Free Grammar Master Book)',
    description: 'Download the free IELTS Grammar Master Book PDF. Discover IELTS Band 9 grammar secrets with rules, examples, and exercises to boost your writing score.',
    canonical: 'https://typogrammar.com/ielts/grammar-master-book/',
    ogTitle: 'IELTS Band 9 Grammar Secrets PDF (Free Grammar Master Book)',
    ogDescription: 'Download the free IELTS Grammar Master Book PDF. Discover IELTS Band 9 grammar secrets with rules, examples, and exercises to boost your writing score.',
    ogUrl: 'https://typogrammar.com/ielts/grammar-master-book',
    ogImage: 'https://typogrammar.com/images/books/IELTS-Grammar-Master-Book.jpg',
    ogType: 'book',
    twitterCard: 'summary_large_image',
    twitterTitle: 'IELTS Band 9 Grammar Secrets PDF (Free Grammar Master Book)',
    twitterDescription: 'Download the free IELTS Grammar Master Book PDF. Discover IELTS Band 9 grammar secrets with rules, examples, and exercises to boost your writing score.',
    twitterImage: 'https://typogrammar.com/images/books/IELTS-Grammar-Master-Book.jpg',
  });

  useEffect(() => {
    const bookSchema = {
      '@context': 'https://schema.org',
      '@type': 'Book',
      name: 'IELTS Grammar Master Book',
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
      url: 'https://typogrammar.com/ielts/grammar-master-book',
      image: 'https://typogrammar.com/images/books/IELTS-Grammar-Master-Book.jpg',
      description: 'Master essential IELTS grammar rules and discover Band 9 grammar secrets with clear explanations, examples, and practice exercises.',
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
      name: 'IELTS Grammar Master Book',
      learningResourceType: 'ebook',
      about: ['IELTS Grammar', 'Band 9 grammar secrets', 'IELTS Writing preparation', 'English grammar rules'],
      url: 'https://typogrammar.com/ielts/grammar-master-book',
      description: 'Master essential IELTS grammar rules and discover Band 9 grammar secrets with clear explanations, examples, and practice exercises.',
    };

    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'IELTS Band 9 Grammar Secrets PDF (Free Grammar Master Book)',
      description: 'Download the free IELTS Grammar Master Book PDF. Discover IELTS Band 9 grammar secrets with rules, examples, and exercises to boost your writing score.',
      author: {
        '@type': 'Organization',
        name: 'TypoGrammar',
        url: 'https://typogrammar.com',
      },
      publisher: {
        '@type': 'Organization',
        name: 'TypoGrammar',
        logo: {
          '@type': 'ImageObject',
          url: 'https://typogrammar.com/images/logo.png',
        },
      },
      datePublished: '2026-02-24',
      dateModified: '2026-02-24',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://typogrammar.com/ielts/grammar-master-book',
      },
    };

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What grammar is needed for IELTS Band 9?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Band 9 requires accurate use of complex sentences, conditional structures, passive voice, relative clauses, and varied tense usage with minimal errors.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I improve my grammar for IELTS Writing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Study essential grammar rules, practice using complex structures, analyze Band 9 essays, and get feedback on your writing to identify error patterns.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is this IELTS Grammar book free to download?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, the IELTS Grammar Master Book is completely free to download from TypoGrammar with no signup required.',
          },
        },
        {
          '@type': 'Question',
          name: 'What topics does the IELTS Grammar Master Book cover?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The book covers all essential grammar for IELTS including tenses, conditionals, passive voice, relative clauses, articles, prepositions, and complex sentence structures.',
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

    const articleScript = document.createElement('script');
    articleScript.type = 'application/ld+json';
    articleScript.text = JSON.stringify(articleSchema);
    document.head.appendChild(articleScript);

    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.text = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    return () => {
      if (bookScript.parentNode) document.head.removeChild(bookScript);
      if (learningScript.parentNode) document.head.removeChild(learningScript);
      if (articleScript.parentNode) document.head.removeChild(articleScript);
      if (faqScript.parentNode) document.head.removeChild(faqScript);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const peopleAlsoAsk = [
    {
      question: 'What grammar topics are most important for IELTS?',
      answer: 'The most important grammar topics include complex sentences, conditionals, passive voice, relative clauses, and accurate tense usage.',
    },
    {
      question: 'Can I get Band 9 with simple grammar?',
      answer: 'No. Band 9 requires a wide range of structures used accurately. Simple grammar alone limits your score to Band 5-6.',
    },
    {
      question: 'How do examiners assess grammar in IELTS Writing?',
      answer: 'Examiners evaluate grammatical range (variety of structures), accuracy (error-free usage), and appropriateness of complex sentences.',
    },
  ];

  const faqItems = [
    {
      question: 'What grammar is needed for IELTS Band 9?',
      answer: 'Band 9 requires accurate use of complex sentences, conditional structures, passive voice, relative clauses, and varied tense usage with minimal errors.',
    },
    {
      question: 'How can I improve my grammar for IELTS Writing?',
      answer: 'Study essential grammar rules, practice using complex structures, analyze Band 9 essays, and get feedback on your writing to identify error patterns.',
    },
    {
      question: 'Is this IELTS Grammar book free to download?',
      answer: 'Yes, the IELTS Grammar Master Book is completely free to download from TypoGrammar with no signup required.',
    },
    {
      question: 'What topics does the IELTS Grammar Master Book cover?',
      answer: 'The book covers all essential grammar for IELTS including tenses, conditionals, passive voice, relative clauses, articles, prepositions, and complex sentence structures.',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      {/* Last Updated - GEO Optimization */}
      <div className="text-sm text-slate-500 dark:text-slate-400 mb-4 text-center">
        Last updated: February 2026
      </div>

      {/* HERO SECTION */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 mb-4">
              Free Download
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-slate-100 mb-6 leading-tight">
              IELTS <span className="text-blue-600 dark:text-blue-400">Grammar Master</span> Book
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              Discover IELTS Band 9 Grammar Secrets
            </p>
            <p className="text-base text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Master essential grammar rules that examiners look for in Band 9 essays. This comprehensive guide covers tenses, conditionals, complex sentences, and the grammatical range needed to achieve top scores.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <a
                href="/downloads/IELTS_Grammar_Master_Book.pdf"
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
              src="/images/books/IELTS-Grammar-Master-Book.jpg"
              alt="IELTS Grammar Master Book Cover - Band 9 Grammar Secrets by Typogrammar"
              className="rounded-xl shadow-2xl max-w-full h-auto"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>

      {/* SEO AUTHORITY INTRO */}
      <section className="mb-16">
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 md:p-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Why Grammar Is the Key to IELTS Band 9
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            Achieving <strong>IELTS Band 9</strong> in Writing requires more than correct spelling. Examiners assess your <strong>grammatical range and accuracy</strong>-your ability to use varied sentence structures with precision and control.
          </p>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            This free <strong>IELTS Grammar Master Book</strong> reveals the <strong>IELTS Band 9 grammar secrets</strong> that top scorers use: complex conditionals, sophisticated relative clauses, accurate passive constructions, and seamless tense shifts. Master these structures, and you'll write with the grammatical confidence examiners reward with Band 9.
          </p>
        </div>
      </section>

      {/* WHAT YOU WILL LEARN */}
      <section className="mb-16">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 md:p-12 shadow-lg">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
            🎯 What You Will Learn
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
            This book unlocks the <strong>IELTS Band 9 grammar secrets</strong> that help you:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Master Complex Sentences', desc: 'Learn to combine ideas using subordination and coordination' },
              { title: 'Perfect Your Tenses', desc: 'Use all 12 tenses accurately and appropriately' },
              { title: 'Conditional Mastery', desc: 'Apply zero, first, second, and third conditionals correctly' },
              { title: 'Passive Voice Control', desc: 'Know when and how to use passive constructions' },
              { title: 'Relative Clauses', desc: 'Add sophistication with defining and non-defining clauses' },
              { title: 'Error-Free Writing', desc: 'Avoid common grammar mistakes that cost band scores' },
            ].map((item, i) => (
              <div key={i} className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100 mb-1">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INSIDE */}
      <section id="contents" className="mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
          📖 What's Inside the Book
        </h2>

        <div className="space-y-6">
          {/* Grammar Rules */}
          <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-700">
            <h3 className="font-semibold text-xl text-green-900 dark:text-green-200 mb-4">
              ✅ Essential IELTS Grammar Rules
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-3">Comprehensive coverage of:</p>
            <ul className="grid md:grid-cols-2 gap-2">
              {[
                'All 12 English tenses with IELTS examples',
                'Conditional sentences (0, 1, 2, 3, mixed)',
                'Active and passive voice transformations',
                'Relative clauses (defining & non-defining)',
                'Subject-verb agreement rules',
                'Articles (a, an, the) usage',
                'Preposition combinations',
                'Complex sentence structures',
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-700 dark:text-slate-300">
                  <span className="text-green-600 dark:text-green-400 mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Exercises */}
          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-700">
            <h3 className="font-semibold text-xl text-purple-900 dark:text-purple-200 mb-4">
              ✅ IELTS-Style Practice Exercises
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-3">Each chapter includes:</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                'Error correction exercises',
                'Sentence transformation tasks',
                'Fill-in-the-blank practice',
                'IELTS Writing applications',
              ].map((item, i) => (
                <div key={i} className="flex items-center text-slate-700 dark:text-slate-300">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">✓</span>
                  {item}
                </div>
              ))}
            </div>
            <p className="text-slate-600 dark:text-slate-400 mt-3 italic">
              Apply grammar rules directly to IELTS Writing Task 2 contexts.
            </p>
          </div>

          {/* Band 9 Examples */}
          <div className="bg-teal-50 dark:bg-teal-900/20 rounded-xl p-6 border border-teal-200 dark:border-teal-700">
            <h3 className="font-semibold text-xl text-teal-900 dark:text-teal-200 mb-4">
              ✅ Band 9 Grammar Examples
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-3">Real examples showing:</p>
            <ul className="space-y-2">
              {[
                'How Band 9 essays use complex grammar',
                'Before/after comparisons of sentence upgrades',
                'Common mistakes vs. Band 9 corrections',
                'Natural academic phrasing patterns',
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-700 dark:text-slate-300">
                  <span className="text-teal-600 dark:text-teal-400 mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>

      {/* BAND 9 GRAMMAR SECRETS */}
      <section className="mb-16">
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 md:p-12 border border-indigo-200 dark:border-slate-700">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            🔓 IELTS Band 9 Grammar Secrets Revealed
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
            Top scorers don't just know grammar rules-they apply them strategically:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { secret: 'Variety over complexity', detail: 'Use a range of structures, not just complex ones' },
              { secret: 'Accuracy first', detail: 'Error-free simple sentences beat flawed complex ones' },
              { secret: 'Natural flow', detail: 'Grammar should enhance clarity, not show off' },
              { secret: 'Strategic sophistication', detail: 'Place complex structures where they strengthen arguments' },
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold text-lg mr-2">✔</span>
                <span className="text-slate-800 dark:text-slate-200 font-semibold">{item.secret}</span>
                <p className="text-slate-600 dark:text-slate-400 mt-1 ml-6">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO THIS BOOK IS FOR */}
      <section className="mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
          🎓 Who This Book Is For
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            'Students targeting Band 7+',
            'IELTS Writing improvers',
            'Academic IELTS candidates',
            'Grammar self-study learners',
            'Non-native speakers',
            'IELTS teachers',
          ].map((item, i) => (
            <div key={i} className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700 text-center">
              <span className="text-slate-800 dark:text-slate-200 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WILL IMPROVE YOUR SCORE */}
      <section className="mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
          📈 How This Book Will Improve Your Score
        </h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">By mastering these grammar secrets, you will:</p>
        <div className="space-y-3">
          {[
            'Write complex sentences with confidence and accuracy',
            'Eliminate common grammar errors that cost band scores',
            'Use sophisticated structures that impress examiners',
            'Develop natural academic writing style',
            'Score higher in Grammatical Range and Accuracy',
          ].map((item, i) => (
            <div key={i} className="flex items-center bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-100 dark:border-blue-800">
              <span className="text-blue-600 dark:text-blue-400 font-bold mr-3">{i + 1}.</span>
              <span className="text-slate-800 dark:text-slate-200">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>

      {/* PEOPLE ALSO ASK */}
      <section className="mb-16">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          People Also Ask
        </h2>
        <div className="space-y-4">
          {peopleAlsoAsk.map((item, idx) => (
            <div key={idx} className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 flex items-center">
                <span className="text-blue-500 mr-2">❓</span>
                {item.question}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 ml-6">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="mb-16">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqItems.map((faq, idx) => (
            <div key={idx} className="border-b border-slate-200 dark:border-slate-700 pb-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                {idx + 1}. {faq.question}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DOWNLOAD SECTION */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            📥 Download the Book
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Get the official TypoGrammar IELTS Grammar Master Book, unlock Band 9 grammar secrets today.
          </p>
          <a
            href="/downloads/IELTS_Grammar_Master_Book.pdf"
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
            Download IELTS Grammar Master Book (PDF)
          </a>
          <p className="text-sm text-blue-200 mt-4">PDF, Instant Download, No signup required</p>
        </div>
      </section>

      {/* CTA BLOCK */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-700 dark:to-emerald-700 rounded-xl p-8 text-center">
          <div className="text-3xl mb-4">🎯</div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Master IELTS Grammar?
          </h3>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Combine this grammar guide with our Band 9 essay samples for complete IELTS Writing preparation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/ielts/50-band-9-ielts-writing-task-2-sample-essays/"
              className="inline-block px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors"
            >
              50 Band 9 Sample Essays
            </Link>
            <Link
              to="/ielts/writing-task-2-band-9-essays-book/"
              className="inline-block px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-400 transition-colors border border-green-400"
            >
              Band 9 Essays Book
            </Link>
          </div>
        </div>
      </section>

      {/* RELATED LINKS */}
      <section className="mb-16">
        <h2 className="font-heading text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          Explore More IELTS Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link to="/ielts/50-band-9-ielts-writing-task-2-sample-essays/" className="block p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 transition-colors">
            <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-1">50 Band 9 Sample Essays</h4>
            <p className="text-sm text-blue-700 dark:text-blue-400">Study real Band 9 essays with detailed analysis.</p>
          </Link>
          <Link to="/grammar-guide/" className="block p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800 hover:border-green-400 dark:hover:border-green-600 transition-colors">
            <h4 className="font-semibold text-green-900 dark:text-green-200 mb-1">Complete Grammar Guide</h4>
            <p className="text-sm text-green-700 dark:text-green-400">Master all English grammar topics.</p>
          </Link>
          <Link to="/ielts/academic-vocabulary-book/" className="block p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 transition-colors">
            <h4 className="font-semibold text-purple-900 dark:text-purple-200 mb-1">IELTS Vocabulary Book</h4>
            <p className="text-sm text-purple-700 dark:text-purple-400">200 academic words (Band 6-9) with examples.</p>
          </Link>
        </div>
      </section>

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>
    </div>
  );
};

export default IeltsGrammarMasterBookPage;
