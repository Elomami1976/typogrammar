import React, { useEffect } from 'react';
import usePageMetadata from '../hooks/usePageMetadata';
import { Download, Check, BookOpen, Target, Users, TrendingUp, HelpCircle, FileText, Award, Star, CheckCircle, Languages, BookMarked, Lightbulb } from 'lucide-react';

const CommonEnglishWordsPDFPage: React.FC = () => {
  usePageMetadata({
    title: '3000 Most Common English Words PDF (Free Download) | TypoGrammar',
    description: 'Download the 3000 Most Common English Words PDF from TypoGrammar. Learn essential, intermediate, and advanced vocabulary with definitions, examples, collocations, pronunciation, and practice exercises.',
    canonical: 'https://typogrammar.com/downloads/3000-most-common-english-words-pdf/',
    ogTitle: '3000 Most Common English Words PDF (Free Download) | TypoGrammar',
    ogDescription: 'Download the 3000 Most Common English Words PDF from TypoGrammar. Learn essential, intermediate, and advanced vocabulary with definitions, examples, collocations, pronunciation, and practice exercises.',
    ogUrl: 'https://typogrammar.com/downloads/3000-most-common-english-words-pdf',
    ogImage: 'https://typogrammar.com/images/books/3000-most-common-english-words-pdf.jpg',
    ogType: 'book',
    twitterCard: 'summary_large_image',
    twitterTitle: '3000 Most Common English Words PDF (Free Download) | TypoGrammar',
    twitterDescription: 'Download the 3000 Most Common English Words PDF from TypoGrammar. Learn essential, intermediate, and advanced vocabulary with definitions, examples, collocations, pronunciation, and practice exercises.',
    twitterImage: 'https://typogrammar.com/images/books/3000-most-common-english-words-pdf.jpg',
  });

  useEffect(() => {
    const bookSchema = {
      '@context': 'https://schema.org',
      '@type': 'Book',
      name: '3000 Most Common English Words',
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
      numberOfPages: 298,
      url: 'https://typogrammar.com/downloads/3000-most-common-english-words-pdf',
      image: 'https://typogrammar.com/images/books/3000-most-common-english-words-pdf.jpg',
      description:
        'A comprehensive vocabulary resource covering 3000 most common English words with definitions, IPA pronunciation, example sentences, collocations, synonyms, antonyms, and practice exercises.',
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
      name: '3000 Most Common English Words PDF',
      learningResourceType: 'ebook',
      about: ['English vocabulary', 'IELTS vocabulary', 'TOEFL vocabulary', 'Duolingo English Test', 'Academic English'],
      url: 'https://typogrammar.com/downloads/3000-most-common-english-words-pdf',
      description:
        'Download the 3000 Most Common English Words PDF. Master essential, intermediate, and advanced vocabulary for IELTS, TOEFL, the Duolingo English Test, and everyday communication.',
    };

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is this PDF free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The 3000 Most Common English Words PDF is available as a free educational resource from TypoGrammar.',
          },
        },
        {
          '@type': 'Question',
          name: 'How many pages does the book contain?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The PDF contains 298 pages of vocabulary content, exercises, and reference materials.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is this book suitable for beginners?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The book starts with essential everyday vocabulary and gradually progresses to advanced academic English.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use this book for IELTS preparation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely. The vocabulary included in the book supports IELTS Writing, Reading, Listening, and Speaking preparation.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does the book include pronunciation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Each vocabulary entry includes IPA pronunciation guides to help learners improve their speaking skills.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does the PDF include exercises?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The book includes multiple practice activities and answer keys for self-study.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is this useful for TOEFL and Duolingo English Test preparation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The vocabulary has been selected to support learners preparing for TOEFL iBT and the Duolingo English Test.',
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
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const faqItems = [
    {
      question: 'Is this PDF free?',
      answer: 'Yes. The 3000 Most Common English Words PDF is available as a free educational resource from TypoGrammar.',
    },
    {
      question: 'How many pages does the book contain?',
      answer: 'The PDF contains 298 pages of vocabulary content, exercises, and reference materials.',
    },
    {
      question: 'Is this book suitable for beginners?',
      answer: 'Yes. The book starts with essential everyday vocabulary and gradually progresses to advanced academic English.',
    },
    {
      question: 'Can I use this book for IELTS preparation?',
      answer: 'Absolutely. The vocabulary included in the book supports IELTS Writing, Reading, Listening, and Speaking preparation.',
    },
    {
      question: 'Does the book include pronunciation?',
      answer: 'Yes. Each vocabulary entry includes IPA pronunciation guides to help learners improve their speaking skills.',
    },
    {
      question: 'Does the PDF include exercises?',
      answer: 'Yes. The book includes multiple practice activities and answer keys for self-study.',
    },
    {
      question: 'Is this useful for TOEFL and Duolingo English Test preparation?',
      answer: 'Yes. The vocabulary has been selected to support learners preparing for TOEFL iBT and the Duolingo English Test.',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      {/* HERO SECTION */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-slate-100 mb-6 leading-tight">
              3000 Most Common English Words{' '}
              <span className="text-blue-600 dark:text-blue-400">PDF</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Master the vocabulary you need for everyday English, IELTS, TOEFL, and the Duolingo English Test. 298 pages with definitions, IPA pronunciation, example sentences, collocations, synonyms, antonyms, and practice exercises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <a
                href="/downloads/3000_Most_Common_English_Words.pdf"
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
              Free download. No signup required.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/images/books/3000-most-common-english-words-pdf.jpg"
              alt="3000 Most Common English Words PDF by TypoGrammar for IELTS TOEFL Duolingo English Test and everyday English vocabulary learning."
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
          { icon: <FileText className="h-6 w-6 text-blue-600" />, value: '298', label: 'Pages' },
          { icon: <Download className="h-6 w-6 text-green-600" />, value: 'Free', label: 'PDF Download' },
          { icon: <BookOpen className="h-6 w-6 text-violet-600" />, value: '3000', label: 'Words' },
          { icon: <Star className="h-6 w-6 text-amber-500" />, value: 'All Levels', label: 'Beginner – Advanced' },
        ].map((stat, i) => (
          <div key={i} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 flex flex-col items-center text-center shadow-sm">
            {stat.icon}
            <div className="font-bold text-slate-900 dark:text-slate-100 mt-2">{stat.value}</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* BOOK DETAILS STRIP */}
      <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 mb-12 border border-slate-200 dark:border-slate-700">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          {[
            { label: 'Title', value: '3000 Most Common English Words' },
            { label: 'Format', value: 'PDF' },
            { label: 'Pages', value: '298' },
            { label: 'Level', value: 'Beginner to Advanced' },
            { label: 'Publisher', value: 'TypoGrammar' },
            { label: 'Price', value: 'Free' },
          ].map((item, i) => (
            <div key={i}>
              <span className="font-semibold text-slate-500 dark:text-slate-400">{item.label}: </span>
              <span className="text-slate-900 dark:text-slate-100">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* WHAT YOU'LL GET */}
      <section className="mb-16">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 md:p-12 shadow-lg">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
            What Every Word Entry Includes
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Clear Definition', desc: 'Concise, learner-friendly meaning for every word.' },
              { title: 'IPA Pronunciation', desc: 'Phonetic transcription to improve your speaking accuracy.' },
              { title: 'Example Sentence', desc: 'Natural context sentences showing real usage.' },
              { title: 'Common Collocations', desc: 'Word combinations native speakers actually use.' },
              { title: 'Synonyms', desc: 'Alternative words to expand your active vocabulary.' },
              { title: 'Antonyms', desc: 'Opposite words where applicable to deepen understanding.' },
            ].map((item, i) => (
              <div key={i} className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 mt-1">
                  <Check className="h-5 w-5" />
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

      {/* WHAT'S INSIDE (TABLE OF CONTENTS) */}
      <section className="mb-16" id="contents">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
          What's Inside
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            {
              level: 'Level 1',
              title: 'Essential Everyday Vocabulary',
              color: 'green',
              desc: 'Master the most useful words for daily life and conversations. Covers family, school, work, food, travel, shopping, health, technology, home, and nature. Helps you understand 80–90% of everyday English texts.',
              topics: ['Family & Home', 'Food & Travel', 'Work & Shopping', 'Health & Technology', 'Nature & Weather'],
            },
            {
              level: 'Level 2',
              title: 'Intermediate Vocabulary',
              color: 'blue',
              desc: 'Expand your vocabulary for academic and professional situations. Covers education, business, environment, society, media, culture, government, and science. Ideal for IELTS and TOEFL preparation.',
              topics: ['Education & Business', 'Environment & Society', 'Media & Culture', 'Government & Science', 'Feelings & Personality'],
            },
            {
              level: 'Level 3',
              title: 'Advanced Vocabulary',
              color: 'purple',
              desc: 'Develop sophisticated English for higher education and advanced proficiency. Covers academic writing, professional communication, research, critical thinking, economics, and global issues.',
              topics: ['Academic English', 'Professional Communication', 'Research & Critical Thinking', 'Economics & Global Issues', 'Abstract & Formal Language'],
            },
          ].map((level, i) => (
            <div
              key={i}
              className={`rounded-xl p-8 shadow-md border-2 ${
                level.color === 'green'
                  ? 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-700'
                  : level.color === 'blue'
                  ? 'bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-blue-200 dark:border-blue-700'
                  : 'bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 border-purple-200 dark:border-purple-700'
              }`}
            >
              <div
                className={`inline-block px-3 py-1 rounded-full text-sm font-bold mb-3 ${
                  level.color === 'green'
                    ? 'bg-green-600 text-white'
                    : level.color === 'blue'
                    ? 'bg-blue-600 text-white'
                    : 'bg-purple-600 text-white'
                }`}
              >
                {level.level}
              </div>
              <h3 className="font-semibold text-xl text-slate-900 dark:text-slate-100 mb-3">{level.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{level.desc}</p>
              <ul className="space-y-1">
                {level.topics.map((topic, j) => (
                  <li key={j} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          Additional Learning Resources Included
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { icon: <Languages className="h-5 w-5 text-blue-600" />, title: 'Vocabulary by Theme', desc: 'Special collections for education, technology, environment, health, business, travel, social media, and academic English.' },
            { icon: <BookOpen className="h-5 w-5 text-green-600" />, title: 'Common Word Families', desc: 'Learn how related words connect and expand your vocabulary faster.' },
            { icon: <Lightbulb className="h-5 w-5 text-amber-500" />, title: 'Prefixes & Suffixes', desc: 'Understand word formation patterns to decode unfamiliar vocabulary.' },
            { icon: <Target className="h-5 w-5 text-purple-600" />, title: 'Common Phrasal Verbs', desc: 'Master frequently used phrasal verbs in spoken and written English.' },
            { icon: <BookMarked className="h-5 w-5 text-rose-600" />, title: 'Common Idiomatic Expressions', desc: 'Learn natural English expressions used by native speakers.' },
            { icon: <Award className="h-5 w-5 text-teal-600" />, title: 'Academic Word List', desc: 'Essential academic vocabulary for university-level reading and writing.' },
          ].map((item, i) => (
            <div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-200 dark:border-slate-700 flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">{item.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRACTICE EXERCISES */}
      <section className="mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
          Practice Exercises
        </h2>
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 shadow-lg border border-slate-200 dark:border-slate-700">
          <p className="text-slate-600 dark:text-slate-400 mb-6 text-lg">
            The PDF includes multiple types of vocabulary exercises to reinforce learning and improve long-term retention.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Multiple Choice Questions',
              'Fill in the Blank Activities',
              'Matching Exercises',
              'Synonym Practice',
              'Answer Keys',
            ].map((item, i) => (
              <div key={i} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXAM BENEFITS */}
      <section className="mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
          How This Book Helps IELTS, TOEFL, and DET Students
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              exam: 'IELTS',
              color: 'blue',
              icon: <Target className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
              benefits: ['Writing Task 1 & Task 2', 'Speaking Fluency', 'Lexical Resource Score', 'Reading Comprehension'],
            },
            {
              exam: 'TOEFL',
              color: 'green',
              icon: <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />,
              benefits: ['Reading Comprehension', 'Listening Comprehension', 'Speaking Responses', 'Academic Writing'],
            },
            {
              exam: 'Duolingo English Test',
              color: 'purple',
              icon: <Award className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
              benefits: ['Reading Tasks', 'Literacy Tasks', 'Interactive Questions', 'Writing Tasks'],
            },
          ].map((exam, i) => (
            <div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  exam.color === 'blue'
                    ? 'bg-blue-100 dark:bg-blue-900'
                    : exam.color === 'green'
                    ? 'bg-green-100 dark:bg-green-900'
                    : 'bg-purple-100 dark:bg-purple-900'
                }`}
              >
                {exam.icon}
              </div>
              <h3 className="font-semibold text-xl text-slate-900 dark:text-slate-100 mb-3">{exam.exam}</h3>
              <ul className="space-y-2">
                {exam.benefits.map((b, j) => (
                  <li key={j} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
          Who Should Download This PDF?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />, bg: 'bg-blue-100 dark:bg-blue-900', title: 'English Learners', desc: 'ESL and EFL students at any level who want to build a strong vocabulary foundation.' },
            { icon: <Target className="h-6 w-6 text-green-600 dark:text-green-400" />, bg: 'bg-green-100 dark:bg-green-900', title: 'Exam Candidates', desc: 'IELTS, TOEFL, and Duolingo English Test candidates aiming for higher scores.' },
            { icon: <BookMarked className="h-6 w-6 text-purple-600 dark:text-purple-400" />, bg: 'bg-purple-100 dark:bg-purple-900', title: 'Students & Teachers', desc: 'University students, self-study learners, and English teachers preparing students.' },
          ].map((item, i) => (
            <div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className={`w-12 h-12 ${item.bg} rounded-lg flex items-center justify-center mb-4`}>
                {item.icon}
              </div>
              <h3 className="font-semibold text-xl text-slate-900 dark:text-slate-100 mb-3">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STUDY PLAN */}
      <section className="mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
          Recommended Daily Study Routine
        </h2>
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 shadow-lg">
          <ol className="space-y-6">
            {[
              { step: '1', title: 'Learn 10–15 new words', desc: 'Work through your current level systematically. Consistency is more valuable than cramming.' },
              { step: '2', title: 'Review yesterday\'s words', desc: 'Spaced repetition is the most effective technique for long-term vocabulary retention.' },
              { step: '3', title: 'Read example sentences carefully', desc: 'Understand how each word is used in natural context before trying to produce it yourself.' },
              { step: '4', title: 'Create your own sentences', desc: 'Active production embeds vocabulary far more effectively than passive reading.' },
              { step: '5', title: 'Practice speaking with the new vocabulary', desc: 'Say new words aloud and use them in short spoken responses to practice questions.' },
              { step: '6', title: 'Review using spaced repetition', desc: 'Revisit words at increasing intervals. Even 15 minutes per day leads to significant progress over time.' },
            ].map((item) => (
              <li key={item.step} className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                  {item.step}
                </div>
                <div className="pt-1">
                  <h3 className="font-semibold text-xl text-slate-900 dark:text-slate-100 mb-2">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
          <span className="inline-flex items-center gap-2">
            <HelpCircle className="h-7 w-7 text-blue-600" />
            Frequently Asked Questions
          </span>
        </h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
              <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100 mb-2">{item.question}</h3>
              <p className="text-slate-700 dark:text-slate-300">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT TYPOGRAMMAR */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 md:p-12 shadow-lg border border-slate-200 dark:border-slate-700">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            About TypoGrammar
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
            TypoGrammar is a comprehensive English-learning platform dedicated to mastering grammar, building academic vocabulary, and achieving success in IELTS, TOEFL, and the Duolingo English Test. Our materials emphasize clear explanations, practical examples, and long-term vocabulary retention.
          </p>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
            Thousands of learners use TypoGrammar resources to improve their English skills and achieve their language goals.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Visit Homepage
            </a>
            <a
              href="/ielts/academic-vocabulary-book/"
              className="inline-flex items-center px-6 py-3 bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 font-semibold rounded-lg border-2 border-blue-600 dark:border-blue-500 hover:bg-blue-50 dark:hover:bg-slate-600 transition-colors duration-200"
            >
              Explore More Free PDFs
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="text-center mb-12">
        <div className="bg-blue-600 dark:bg-blue-700 rounded-2xl p-8 md:p-12 shadow-2xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Start Building Your Vocabulary Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Download the 3000 Most Common English Words PDF and begin mastering the words that matter most.
          </p>
          <a
            href="/downloads/3000_Most_Common_English_Words.pdf"
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

export default CommonEnglishWordsPDFPage;
