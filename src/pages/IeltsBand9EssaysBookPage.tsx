import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import GoogleAd from '../components/GoogleAd';

const IeltsBand9EssaysBookPage: React.FC = () => {
  usePageMetadata({
    title: 'IELTS Writing Task 2 Band 9 Essays PDF (10 Sample Essays with Explanations)',
    description: "Download Typogrammar's IELTS Writing Task 2 Band 9 Essays PDF. Includes 10 full essays with explanations to help you achieve Band 7, 8, or 9.",
    canonical: 'https://typogrammar.com/ielts/writing-task-2-band-9-essays-book/',
    ogTitle: 'IELTS Writing Task 2 Band 9 Essays PDF (10 Sample Essays with Explanations)',
    ogDescription: "Download Typogrammar's IELTS Writing Task 2 Band 9 Essays PDF. Includes 10 full essays with explanations to help you achieve Band 7, 8, or 9.",
    ogUrl: 'https://typogrammar.com/ielts/writing-task-2-band-9-essays-book',
    ogImage: 'https://typogrammar.com/images/books/IELTS-BAND9-ESSAYS-BOOK.jpg',
    ogType: 'book',
    twitterCard: 'summary_large_image',
    twitterTitle: 'IELTS Writing Task 2 Band 9 Essays PDF (10 Sample Essays with Explanations)',
    twitterDescription: "Download Typogrammar's IELTS Writing Task 2 Band 9 Essays PDF. Includes 10 full essays with explanations to help you achieve Band 7, 8, or 9.",
    twitterImage: 'https://typogrammar.com/images/books/IELTS-BAND9-ESSAYS-BOOK.jpg',
  });

  useEffect(() => {
    const bookSchema = {
      '@context': 'https://schema.org',
      '@type': 'Book',
      name: 'IELTS Writing Task 2 Band 9 Essays Book',
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
      url: 'https://typogrammar.com/ielts/writing-task-2-band-9-essays-book',
      image: 'https://typogrammar.com/images/books/IELTS-BAND9-ESSAYS-BOOK.jpg',
      description: "Download Typogrammar's IELTS Writing Task 2 Band 9 Essays PDF. Includes 10 full essays with explanations to help you achieve Band 7, 8, or 9.",
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
      name: 'IELTS Writing Task 2 Band 9 Essays Book',
      learningResourceType: 'ebook',
      about: ['IELTS Writing Task 2', 'Band 9 essays', 'IELTS preparation'],
      url: 'https://typogrammar.com/ielts/writing-task-2-band-9-essays-book',
      description: "Download Typogrammar's IELTS Writing Task 2 Band 9 Essays PDF. Includes 10 full essays with explanations to help you achieve Band 7, 8, or 9.",
    };

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is this IELTS Band 9 Essays PDF free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, it is completely free. No signup or payment required.',
          },
        },
        {
          '@type': 'Question',
          name: 'How many essays are included?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The PDF includes 10 full Band 9 essays covering different essay types.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I memorize these essays for the exam?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No, memorizing essays is not recommended. Use them to learn structure, vocabulary, and techniques.',
          },
        },
        {
          '@type': 'Question',
          name: 'What essay types are covered?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Opinion essays, discussion essays, problem-solution, advantages/disadvantages, and two-part questions.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will this help me reach Band 7 or 8?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, studying Band 9 examples helps you understand what examiners look for at top bands.',
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
      if (bookScript.parentNode) {
        document.head.removeChild(bookScript);
      }
      if (learningScript.parentNode) {
        document.head.removeChild(learningScript);
      }
      if (faqScript.parentNode) {
        document.head.removeChild(faqScript);
      }
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
      question: 'Is this IELTS Band 9 Essays PDF free?',
      answer: 'Yes, it is completely free. No signup or payment required.',
    },
    {
      question: 'How many essays are included?',
      answer: 'The PDF includes 10 full Band 9 essays covering different essay types.',
    },
    {
      question: 'Can I memorize these essays for the exam?',
      answer: 'No, memorizing essays is not recommended. Use them to learn structure, vocabulary, and techniques.',
    },
    {
      question: 'What essay types are covered?',
      answer: 'Opinion essays, discussion essays, problem-solution, advantages/disadvantages, and two-part questions.',
    },
    {
      question: 'Will this help me reach Band 7 or 8?',
      answer: 'Yes, studying Band 9 examples helps you understand what examiners look for at top bands.',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      {/* HERO SECTION */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 mb-4">
              Free Download
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-slate-100 mb-6 leading-tight">
              IELTS Writing Task 2 <span className="text-blue-600 dark:text-blue-400">Band 9 Essays</span> Book
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              Official Typogrammar Preparation Book
            </p>
            <p className="text-base text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              10 full Band 9 essays with detailed explanations, designed to help you understand what makes a top-scoring essay and how you can write one yourself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <a
                href="/downloads/IELTS-BAND9-ESSAYS-BOOK.pdf"
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
              src="/images/books/IELTS-BAND9-ESSAYS-BOOK.jpg"
              alt="IELTS Writing Task 2 Band 9 Essays Book Cover by Typogrammar"
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

      {/* WHAT YOU WILL LEARN */}
      <section className="mb-16">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 md:p-12 shadow-lg">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
            🎯 What You Will Learn
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">This book will help you:</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Band 9 Structure', desc: 'Understand how Band 9 essays are structured' },
              { title: 'Advanced Vocabulary', desc: 'Learn advanced academic vocabulary naturally' },
              { title: 'High-Scoring Arguments', desc: 'See real examples of high-scoring arguments' },
              { title: 'Coherence & Cohesion', desc: 'Improve your coherence and cohesion' },
              { title: 'Grammar Mastery', desc: 'Master grammatical range and accuracy' },
              { title: 'Exam Confidence', desc: 'Write with confidence in the IELTS exam' },
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
          {/* 10 Full Essays */}
          <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-700">
            <h3 className="font-semibold text-xl text-green-900 dark:text-green-200 mb-4">
              ✅ 10 Full IELTS Writing Task 2 Band 9 Essays
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-3">Each essay includes:</p>
            <ul className="space-y-2">
              {[
                'Real IELTS-style question',
                'Full Band 9 model answer (280-320 words)',
                'Clear position and arguments',
                'Professional academic tone',
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-700 dark:text-slate-300">
                  <span className="text-green-600 dark:text-green-400 mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Detailed Explanations */}
          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-700">
            <h3 className="font-semibold text-xl text-purple-900 dark:text-purple-200 mb-4">
              ✅ Detailed Band 9 Explanations
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-3">Every essay includes analysis of:</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                'Task Response',
                'Coherence and Cohesion',
                'Lexical Resource',
                'Grammatical Range and Accuracy',
              ].map((item, i) => (
                <div key={i} className="flex items-center text-slate-700 dark:text-slate-300">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">✓</span>
                  {item}
                </div>
              ))}
            </div>
            <p className="text-slate-600 dark:text-slate-400 mt-3 italic">
              You will understand why the essay deserves Band 9.
            </p>
          </div>
        </div>
      </section>

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>

      {/* WHY THIS BOOK IS DIFFERENT */}
      <section className="mb-16">
        <div className="bg-teal-50 dark:bg-teal-900/20 rounded-2xl p-8 md:p-12 border border-teal-200 dark:border-teal-700">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            🧠 Why This Book Is Different
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
            Most IELTS books show essays. Typogrammar shows you:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Why they are Band 9',
              'How to learn from them',
              'How to use the same techniques',
              'How examiners evaluate writing',
            ].map((item, i) => (
              <div key={i} className="flex items-center bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm">
                <span className="text-teal-600 dark:text-teal-400 font-bold text-lg mr-3">✔</span>
                <span className="text-slate-800 dark:text-slate-200 font-medium">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-slate-600 dark:text-slate-400 mt-6 italic">
            This makes it a complete learning tool, not just a sample collection.
          </p>
        </div>
      </section>

      {/* WHO THIS BOOK IS FOR */}
      <section className="mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
          🎓 Who This Book Is For
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            'Students aiming for Band 7+',
            'Students aiming for Band 8',
            'Students aiming for Band 9',
            'Academic IELTS candidates',
            'Self-study learners',
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
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">By studying these essays, you will learn:</p>
        <div className="space-y-3">
          {[
            'How to write strong introductions',
            'How to develop ideas clearly',
            'How to use advanced vocabulary correctly',
            'How to write powerful conclusions',
            'How to sound academic and natural',
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

      {/* DOWNLOAD SECTION */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            📥 Download the Book
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Get the official Typogrammar IELTS Writing Task 2 Band 9 Essays Book, free, instant download.
          </p>
          <a
            href="/downloads/IELTS-BAND9-ESSAYS-BOOK.pdf"
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
            Download IELTS Band 9 Essays Book (PDF)
          </a>
          <p className="text-sm text-blue-200 mt-4">PDF, Instant Download, No signup required</p>
        </div>
      </section>

      {/* START LEARNING */}
      <section className="mb-16">
        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded-r-xl p-6">
          <h3 className="font-heading text-2xl font-bold text-green-900 dark:text-green-200 mb-3">
            🏆 Start Learning from Band 9 Today
          </h3>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            If you want to improve your IELTS Writing score, the best method is learning from real Band 9 essays. Download the book now and take your writing to the next level.
          </p>
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

      {/* RELATED LINKS */}
      <section className="mb-16">
        <h2 className="font-heading text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          Explore More IELTS Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link to="/ielts/ielts-writing-task-2-essay-types/" className="block p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 transition-colors">
            <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-1">IELTS Writing Task 2 Hub</h4>
            <p className="text-sm text-blue-700 dark:text-blue-400">All essay types with strategies and sample answers.</p>
          </Link>
          <Link to="/ielts/band-8-ielts-sample-answers/" className="block p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800 hover:border-green-400 dark:hover:border-green-600 transition-colors">
            <h4 className="font-semibold text-green-900 dark:text-green-200 mb-1">Band 8+ Sample Answers</h4>
            <p className="text-sm text-green-700 dark:text-green-400">Real Band 8+ answers with explanations.</p>
          </Link>
          <Link to="/ielts/academic-vocabulary-book/" className="block p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 transition-colors">
            <h4 className="font-semibold text-purple-900 dark:text-purple-200 mb-1">Free IELTS Vocabulary Book</h4>
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

export default IeltsBand9EssaysBookPage;
