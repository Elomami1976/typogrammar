import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import GoogleAd from '../components/GoogleAd';

const EnglishGrammarPDFPage: React.FC = () => {
  usePageMetadata({
    title: 'Free English Grammar PDF Workbook (Download) | TypoGrammar',
    description: 'Download our free English Grammar PDF workbook. Learn parts of speech, verb tenses, sentence structure, and common grammar mistakes with examples and exercises.',
    canonical: 'https://typogrammar.com/ielts/english-grammar-pdf',
    ogTitle: 'Free English Grammar PDF Workbook (Download)',
    ogDescription: 'Download our free English Grammar PDF workbook. Learn parts of speech, verb tenses, sentence structure, and common grammar mistakes with examples and exercises.',
    ogUrl: 'https://typogrammar.com/ielts/english-grammar-pdf',
    ogImage: 'https://typogrammar.com/images/books/The-Complete-English-Grammar.jpg',
    ogType: 'book',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Free English Grammar PDF Workbook (Download)',
    twitterDescription: 'Download our free English Grammar PDF workbook. Learn parts of speech, verb tenses, sentence structure, and common grammar mistakes with examples and exercises.',
    twitterImage: 'https://typogrammar.com/images/books/The-Complete-English-Grammar.jpg',
  });

  useEffect(() => {
    const creativeWorkSchema = {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: 'Free English Grammar PDF Workbook',
      description: 'Comprehensive English grammar workbook covering parts of speech, verb tenses, sentence structure, and common grammar mistakes with exercises.',
      author: {
        '@type': 'Organization',
        name: 'TypoGrammar',
      },
      fileFormat: 'application/pdf',
      url: 'https://typogrammar.com/ielts/english-grammar-pdf',
    };

    const learningResourceSchema = {
      '@context': 'https://schema.org',
      '@type': 'LearningResource',
      name: 'Free English Grammar PDF Workbook',
      learningResourceType: 'ebook',
      about: ['English Grammar', 'Parts of Speech', 'Verb Tenses', 'Sentence Structure', 'Grammar Exercises'],
      url: 'https://typogrammar.com/ielts/english-grammar-pdf',
      description: 'Learn essential English grammar with detailed explanations, examples, and practice exercises.',
    };

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is this English grammar PDF really free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The Typogrammar English Grammar PDF is completely free to download. It is designed to help English learners improve their grammar skills through clear explanations, real examples, and practical exercises.',
          },
        },
        {
          '@type': 'Question',
          name: 'What topics are included in the English grammar PDF?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The grammar workbook covers many essential English grammar topics, including: Parts of Speech, Nouns and Pronouns, Verbs, Adjectives and Adverbs, Prepositions, Conjunctions, Verb Tenses (Present, Past, Future), and Sentence Structure.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is this grammar PDF suitable for beginners?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. This grammar workbook is suitable for beginners who are learning basic grammar rules, intermediate learners who want to improve accuracy, and ESL students studying English as a second language.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does the PDF include grammar exercises?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Every grammar section includes practice exercises to help you apply what you learn.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can this grammar PDF help with IELTS or TOEFL preparation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Strong grammar is essential for exams like IELTS and TOEFL, especially in writing tasks. This grammar guide helps you improve sentence structure, grammar accuracy, and vocabulary usage.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I improve my English grammar faster?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'To improve grammar faster: Study grammar explanations carefully, read example sentences to understand how grammar works, complete exercises regularly, practice writing your own sentences, and review common grammar mistakes.',
          },
        },
      ],
    };

    const creativeWorkScript = document.createElement('script');
    creativeWorkScript.type = 'application/ld+json';
    creativeWorkScript.text = JSON.stringify(creativeWorkSchema);
    document.head.appendChild(creativeWorkScript);

    const learningScript = document.createElement('script');
    learningScript.type = 'application/ld+json';
    learningScript.text = JSON.stringify(learningResourceSchema);
    document.head.appendChild(learningScript);

    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.text = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    return () => {
      if (creativeWorkScript.parentNode) document.head.removeChild(creativeWorkScript);
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
      question: 'Is this English grammar PDF really free?',
      answer: 'Yes. The Typogrammar English Grammar PDF is completely free to download. It is designed to help English learners improve their grammar skills through clear explanations, real examples, and practical exercises. You can download the workbook and start learning immediately.',
    },
    {
      question: 'What topics are included in the English grammar PDF?',
      answer: 'The grammar workbook covers many essential English grammar topics, including: Parts of Speech, Nouns and Pronouns, Verbs, Adjectives and Adverbs, Prepositions, Conjunctions, Verb Tenses (Present, Past, Future), and Sentence Structure. Each topic includes clear explanations, multiple examples, and exercises for practice.',
    },
    {
      question: 'Is this grammar PDF suitable for beginners?',
      answer: 'Yes. This grammar workbook is suitable for beginners who are learning basic grammar rules, intermediate learners who want to improve accuracy, and ESL students studying English as a second language. The explanations are simple and easy to understand, making it ideal for learners at different levels.',
    },
    {
      question: 'Does the PDF include grammar exercises?',
      answer: 'Yes. Every grammar section includes practice exercises to help you apply what you learn. These exercises allow you to identify grammar rules in sentences, complete sentences using correct grammar, and write your own example sentences. Practicing exercises is one of the most effective ways to improve grammar skills.',
    },
    {
      question: 'Can this grammar PDF help with IELTS or TOEFL preparation?',
      answer: 'Yes. Strong grammar is essential for exams like IELTS and TOEFL, especially in writing tasks. This grammar guide helps you improve sentence structure, grammar accuracy, and vocabulary usage. These skills are important for achieving a higher score in English proficiency exams.',
    },
    {
      question: 'How can I improve my English grammar faster?',
      answer: 'To improve grammar faster, follow these simple steps: Study grammar explanations carefully, read example sentences to understand how grammar works, complete exercises regularly, practice writing your own sentences, and review common grammar mistakes. Consistency and practice are the key to mastering English grammar.',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      {/* Last Updated - GEO Optimization */}
      <div className="text-sm text-slate-500 dark:text-slate-400 mb-4 text-center">
        Last updated: March 2026
      </div>

      {/* HERO SECTION */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 mb-4">
              Free Resource
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-slate-100 mb-6 leading-tight">
              Free English <span className="text-blue-600 dark:text-blue-400">Grammar</span> PDF Workbook
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              Complete Grammar Guide with Examples and Exercises
            </p>
            <p className="text-base text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Inside this workbook, you will learn essential grammar topics such as parts of speech, verb tenses, sentence structure, and common grammar mistakes. Each section includes detailed explanations, practical examples, and exercises to help you practice and improve your English skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <a
                href="/downloads/typogrammar_premium_grammar_ebook.pdf"
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
              src="/images/books/The-Complete-English-Grammar.jpg"
              alt="Free English Grammar PDF Workbook Cover by TypoGrammar"
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
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 md:p-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            What You Will Learn
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
            This English grammar workbook is designed to help learners understand how grammar works in real communication.
          </p>
          <p className="text-slate-700 dark:text-slate-300 mb-6">
            By studying this guide, you will learn how to:
          </p>

          <div className="space-y-6">
            {/* Understand Sentence Structure */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-5 border-l-4 border-blue-500">
              <h3 className="font-semibold text-lg text-blue-900 dark:text-blue-200 mb-2">
                Understand the Structure of English Sentences
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-3">
                You will learn how English sentences are built using the basic structure:
              </p>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 text-center">
                <span className="font-mono text-lg font-semibold text-blue-600 dark:text-blue-400">
                  Subject + Verb + Object
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mt-3 text-sm">
                Understanding this structure makes it easier to write clear and grammatically correct sentences.
              </p>
            </div>

            {/* Master Parts of Speech */}
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-5 border-l-4 border-green-500">
              <h3 className="font-semibold text-lg text-green-900 dark:text-green-200 mb-2">
                Master the Parts of Speech
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-3">
                English grammar is built around different categories of words known as parts of speech. In this guide, you will learn how to correctly use:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['Nouns', 'Pronouns', 'Verbs', 'Adjectives', 'Adverbs', 'Prepositions', 'Conjunctions', 'Articles'].map((part, i) => (
                  <div key={i} className="bg-white dark:bg-slate-800 rounded-lg p-3 text-center">
                    <span className="font-medium text-slate-700 dark:text-slate-300">{part}</span>
                  </div>
                ))}
              </div>
              <p className="text-slate-600 dark:text-slate-400 mt-3 text-sm">
                Understanding these categories helps you write sentences that are clear, accurate, and natural.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INSIDE THE PDF */}
      <section id="contents" className="mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
          📖 What Is Inside the PDF
        </h2>

        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
          The Typogrammar English Grammar Workbook includes multiple grammar lessons designed to help you practice grammar step-by-step.
        </p>

        <p className="text-slate-700 dark:text-slate-300 mb-6">
          Each section contains:
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {[
            { icon: '✔', text: 'Clear grammar explanation', color: 'green' },
            { icon: '✔', text: 'At least 5 real examples', color: 'green' },
            { icon: '✔', text: 'Practice exercises', color: 'green' },
            { icon: '✔', text: 'Easy-to-understand structure', color: 'green' },
            { icon: '✔', text: 'Professional workbook layout', color: 'green' },
          ].map((item, i) => (
            <div key={i} className="flex items-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
              <span className="text-green-600 dark:text-green-400 mr-3 text-xl">{item.icon}</span>
              <span className="text-slate-700 dark:text-slate-300 font-medium">{item.text}</span>
            </div>
          ))}
        </div>

        <p className="text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
          This approach helps learners understand grammar rules and immediately apply them in practice.
        </p>
      </section>

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>

      {/* GRAMMAR TOPICS INCLUDED */}
      <section className="mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          📚 Grammar Topics Included
        </h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
          This PDF covers the most important grammar topics that every English learner should master.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: 'Parts of Speech',
              desc: 'Learn how nouns, verbs, adjectives, and other word types function in English sentences.',
              color: 'blue',
            },
            {
              title: 'Nouns and Pronouns',
              desc: 'Understand how nouns identify people, places, and things, and how pronouns replace them to avoid repetition.',
              color: 'purple',
            },
            {
              title: 'Verbs',
              desc: 'Learn how verbs express actions and states of being in sentences.',
              color: 'green',
            },
            {
              title: 'Adjectives and Adverbs',
              desc: 'Understand how adjectives describe nouns and how adverbs modify verbs, adjectives, or other adverbs.',
              color: 'amber',
            },
            {
              title: 'Prepositions',
              desc: 'Learn how prepositions show relationships between words in a sentence.',
              color: 'red',
            },
            {
              title: 'Conjunctions',
              desc: 'Understand how conjunctions connect ideas and create more complex sentences.',
              color: 'indigo',
            },
            {
              title: 'Verb Tenses',
              desc: 'Learn how to correctly use present, past, and future tenses.',
              color: 'teal',
            },
            {
              title: 'Sentence Structure',
              desc: 'Discover how to construct clear and grammatically correct sentences.',
              color: 'pink',
            },
          ].map((topic, i) => (
            <div
              key={i}
              className={`bg-${topic.color}-50 dark:bg-${topic.color}-900/20 rounded-xl p-6 border border-${topic.color}-200 dark:border-${topic.color}-700`}
              style={{
                backgroundColor: topic.color === 'blue' ? 'rgb(239 246 255)' :
                  topic.color === 'purple' ? 'rgb(250 245 255)' :
                  topic.color === 'green' ? 'rgb(240 253 244)' :
                  topic.color === 'amber' ? 'rgb(255 251 235)' :
                  topic.color === 'red' ? 'rgb(254 242 242)' :
                  topic.color === 'indigo' ? 'rgb(238 242 255)' :
                  topic.color === 'teal' ? 'rgb(240 253 250)' :
                  'rgb(253 242 248)',
              }}
            >
              <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100 mb-2">
                {topic.title}
              </h3>
              <p className="text-slate-700 dark:text-slate-300">{topic.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHO THIS PDF IS FOR */}
      <section className="mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          👤 Who This Grammar PDF Is For
        </h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
          This grammar workbook is perfect for:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {[
            'Beginner English learners',
            'Intermediate English students',
            'IELTS and TOEFL learners',
            'ESL and EFL students',
            'Anyone who wants to improve grammar skills',
          ].map((item, i) => (
            <div key={i} className="flex items-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-slate-700 dark:text-slate-300 bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border-l-4 border-amber-500">
          It is also helpful for learners preparing for academic exams because grammar accuracy is essential for strong writing performance.
        </p>
      </section>

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>

      {/* WHY STUDY GRAMMAR WITH EXAMPLES */}
      <section className="mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          💡 Why Study Grammar With Examples and Exercises
        </h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
          Many learners try to memorize grammar rules without practicing them. However, grammar improves faster when you:
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { step: '1', title: 'Read clear explanations', desc: 'Understand the grammar rule first' },
            { step: '2', title: 'Study real examples', desc: 'See how the rule works in context' },
            { step: '3', title: 'Practice exercises regularly', desc: 'Apply what you learned' },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                {item.step}
              </div>
              <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100 mb-1">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-slate-700 dark:text-slate-300 mt-6 text-center text-lg">
          This method helps you understand grammar concepts and apply them naturally when speaking or writing English.
        </p>
      </section>

      {/* DOWNLOAD CTA SECTION */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Download the Free English Grammar PDF
          </h2>
          <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
            You can download the Typogrammar English Grammar Workbook and start improving your grammar today.
          </p>
          <div className="text-left max-w-md mx-auto mb-6">
            <p className="text-blue-100 mb-3">The PDF includes:</p>
            <ul className="space-y-2">
              {[
                'Grammar explanations',
                '5+ examples in every section',
                'Practice exercises',
                'Clear lesson structure',
                'Professional workbook design',
              ].map((item, i) => (
                <li key={i} className="flex items-center text-white">
                  <span className="text-green-300 mr-2">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <a
            href="/downloads/typogrammar_premium_grammar_ebook.pdf"
            download
            className="inline-flex items-center justify-center px-10 py-5 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all duration-200 text-lg"
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
            📥 Download Free English Grammar PDF
          </a>
          <p className="text-sm text-blue-200 mt-4">
            Start mastering English grammar and improve your writing and communication skills.
          </p>
        </div>
      </section>

      {/* WHERE TO LEARN MORE */}
      <section className="mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          🌐 Where Can I Learn More English Grammar?
        </h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
          You can find more grammar lessons, exercises, and English learning resources on <strong>Typogrammar.com</strong>.
        </p>
        <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6">
          <p className="text-slate-700 dark:text-slate-300 mb-4">The website provides:</p>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              'Grammar explanations',
              'IELTS writing guides',
              'English vocabulary lessons',
              'Practice exercises',
            ].map((item, i) => (
              <div key={i} className="flex items-center">
                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                <span className="text-slate-700 dark:text-slate-300">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-slate-600 dark:text-slate-400 mt-4 italic">
            These resources can help you improve your English step by step.
          </p>
        </div>
      </section>

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>

      {/* FAQ SECTION */}
      <section className="mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
          ❓ Frequently Asked Questions (FAQ)
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

      {/* RELATED RESOURCES */}
      <section className="mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
          📚 Related Free Resources
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Link
            to="/ielts/50-complex-sentences-for-ielts-pdf"
            className="block p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors border border-blue-200 dark:border-blue-800"
          >
            <h3 className="font-semibold text-lg text-blue-900 dark:text-blue-200 mb-2">50 Complex Sentences for IELTS (PDF)</h3>
            <p className="text-sm text-blue-700 dark:text-blue-300">Band 7–9 examples with explanations and practice exercises.</p>
          </Link>
          <Link
            to="/ielts/academic-vocabulary-book"
            className="block p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors border border-purple-200 dark:border-purple-800"
          >
            <h3 className="font-semibold text-lg text-purple-900 dark:text-purple-200 mb-2">IELTS Academic Vocabulary Book</h3>
            <p className="text-sm text-purple-700 dark:text-purple-300">Essential vocabulary for Band 6–9 with examples and exercises.</p>
          </Link>
          <Link
            to="/ielts/idioms-book"
            className="block p-6 bg-green-50 dark:bg-green-900/20 rounded-xl hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors border border-green-200 dark:border-green-800"
          >
            <h3 className="font-semibold text-lg text-green-900 dark:text-green-200 mb-2">100 Most Used English Idioms</h3>
            <p className="text-sm text-green-700 dark:text-green-300">Master common English idioms with meanings and examples.</p>
          </Link>
          <Link
            to="/ielts/writing-task-2-band-9-essays-book"
            className="block p-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors border border-amber-200 dark:border-amber-800"
          >
            <h3 className="font-semibold text-lg text-amber-900 dark:text-amber-200 mb-2">Band 9 Essays Book (PDF)</h3>
            <p className="text-sm text-amber-700 dark:text-amber-300">Collection of Band 9 model essays for IELTS Writing Task 2.</p>
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mb-16">
        <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-8 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Ready to Master English Grammar?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Download your free grammar workbook and start improving your English skills today.
          </p>
          <a
            href="/downloads/typogrammar_premium_grammar_ebook.pdf"
            download
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
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
            Download Free PDF Now
          </a>
        </div>
      </section>

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>
    </div>
  );
};

export default EnglishGrammarPDFPage;
