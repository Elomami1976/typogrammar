import React, { useEffect } from 'react';
import usePageMetadata from '../hooks/usePageMetadata';
import { Download, Check, BookOpen, Target, Users, TrendingUp, HelpCircle, FileText, Award, ChevronRight, Lightbulb, Star, CheckCircle, Languages, BookMarked } from 'lucide-react';

const IeltsAcademicVocabularyBookPage: React.FC = () => {
  // SEO Metadata with Open Graph and Twitter Card support
  usePageMetadata({
    title: 'Free IELTS Academic Vocabulary Book (Band 6-9) | TypoGrammar',
    description: 'Download a free IELTS academic vocabulary book (Band 6-9): 200 high-scoring words with definitions, examples, and usage notes.',
    canonical: 'https://typogrammar.com/ielts/academic-vocabulary-book/',
    ogTitle: 'Free IELTS Academic Vocabulary Book (Band 6-9) | TypoGrammar',
    ogDescription: 'Download a free IELTS academic vocabulary book (Band 6-9): 200 high-scoring words with definitions, examples, and usage notes.',
    ogUrl: 'https://typogrammar.com/ielts/academic-vocabulary-book',
    ogImage: 'https://typogrammar.com/images/books/ielts-academic-vocab-cover.jpg',
    ogType: 'book',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Free IELTS Academic Vocabulary Book (Band 6-9) | TypoGrammar',
    twitterDescription: 'Download a free IELTS academic vocabulary book (Band 6-9): 200 high-scoring words with definitions, examples, and usage notes.',
    twitterImage: 'https://typogrammar.com/images/books/ielts-academic-vocab-cover.jpg',
  });

  // JSON-LD Schema Markup for Book and Educational Resource
  useEffect(() => {
    const bookSchema = {
      '@context': 'https://schema.org',
      '@type': 'Book',
      name: 'IELTS Academic Vocabulary (Band 6-9)',
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
        'Download a free IELTS academic vocabulary book (Band 6-9): 200 high-scoring words with definitions, examples, and usage notes.',
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
      name: 'IELTS Academic Vocabulary (Band 6-9)',
      learningResourceType: 'ebook',
      about: ['IELTS vocabulary', 'IELTS Writing Task 2', 'Academic English'],
      url: 'https://typogrammar.com/ielts/academic-vocabulary-book',
      description:
        'Download a free IELTS academic vocabulary book (Band 6-9): 200 high-scoring words with definitions, examples, and usage notes.',
    };

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is this IELTS vocabulary book free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, it is completely free to download. No signup required.',
          },
        },
        {
          '@type': 'Question',
          name: 'How many words are included?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The book includes 200 academic vocabulary words organized by band level (6-9).',
          },
        },
        {
          '@type': 'Question',
          name: 'Is this for Academic or General Training IELTS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'These words are useful for both Academic and General Training, especially for Writing and Speaking.',
          },
        },
        {
          '@type': 'Question',
          name: 'How should I study these words?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Learn 5-10 new words daily, use them in sentences, and review regularly using spaced repetition.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will these words help improve my band score?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, using accurate and sophisticated vocabulary is essential for achieving Band 7+ in IELTS Writing and Speaking.',
          },
        },
      ],
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

    // Create and inject FAQ schema
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
      question: 'Is this IELTS vocabulary book free?',
      answer: 'Yes, it is completely free to download. No signup required.',
    },
    {
      question: 'How many words are included?',
      answer: 'The book includes 200 academic vocabulary words organized by band level (6-9).',
    },
    {
      question: 'Is this for Academic or General Training IELTS?',
      answer: 'These words are useful for both Academic and General Training, especially for Writing and Speaking.',
    },
    {
      question: 'How should I study these words?',
      answer: 'Learn 5-10 new words daily, use them in sentences, and review regularly using spaced repetition.',
    },
    {
      question: 'Will these words help improve my band score?',
      answer: 'Yes, using accurate and sophisticated vocabulary is essential for achieving Band 7+ in IELTS Writing and Speaking.',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      {/* HERO SECTION */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-slate-100 mb-6 leading-tight">
              IELTS Academic Vocabulary <span className="text-blue-600 dark:text-blue-400">(Band 6-9)</span>
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
                <Download className="h-5 w-5 mr-2" />
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
              src="/images/books/ielts-academic-vocab-cover.jpg"
              alt="IELTS Academic Vocabulary Book Cover (Band 6-9)"
              className="rounded-xl shadow-2xl max-w-full h-auto"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { icon: <FileText className="h-6 w-6 text-blue-600" />, value: 'Free', label: 'Download' },
          { icon: <Download className="h-6 w-6 text-green-600" />, value: 'PDF', label: 'Instant Access' },
          { icon: <Users className="h-6 w-6 text-violet-600" />, value: '10,000+', label: 'Learners' },
          { icon: <Star className="h-6 w-6 text-amber-500" />, value: 'Band 9', label: 'Strategies' },
        ].map((stat, i) => (
          <div key={i} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 flex flex-col items-center text-center shadow-sm">
            {stat.icon}
            <div className="font-bold text-slate-900 dark:text-slate-100 mt-2">{stat.value}</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* WHAT YOU'LL GET SECTION */}
      <section className="mb-16">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 md:p-12 shadow-lg">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
            What You'll Get
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 mt-1">
                <Check className="h-5 w-5" />
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
                <Check className="h-5 w-5" />
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
                <Check className="h-5 w-5" />
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
                <Check className="h-5 w-5" />
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
              <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="font-semibold text-xl text-slate-900 dark:text-slate-100 mb-3">
              IELTS Candidates
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Candidates aiming for Band 6.5-9 in Academic or General IELTS
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
              <BookMarked className="h-6 w-6 text-green-600 dark:text-green-400" />
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
              <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
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
                  Study 5-10 words daily
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

          <div className="bg-gradient-to-br from-teal-50 to-yellow-50 dark:from-teal-900/20 dark:to-yellow-900/20 rounded-xl p-8 shadow-md border-2 border-teal-200 dark:border-teal-700">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-teal-600 text-white rounded-lg flex items-center justify-center font-bold text-xl mr-4">
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

      {/* FAQ SECTION */}
      <section className="mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
          <span className="inline-flex items-center gap-2"><HelpCircle className="h-7 w-7 text-blue-600" />Frequently Asked Questions</span>
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
            Ready to Boost Your IELTS Vocabulary?
          </h2>
          <p className="text-xl text-blue-100 mb-8">Download your free ebook now and start improving today.</p>
          <a
            href="/downloads/ielts-academic-vocabulary-band-6-9.pdf"
            download
            className="inline-flex items-center justify-center px-10 py-5 bg-white text-blue-600 font-bold text-lg rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all duration-200"
          >
            <Download className="h-6 w-6 mr-3" />
            Download Free PDF
          </a>
        </div>
      </section>
    </div>
  );
};

export default IeltsAcademicVocabularyBookPage;
