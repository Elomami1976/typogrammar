import React from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import SchemaMarkup from '../components/SchemaMarkup';

const CHROME_STORE_URL =
  'https://chromewebstore.google.com/detail/efdcbgkkccmclmfifkhpkampenagicki?utm_source=typogrammar';

const TypoGrammarWriteExtensionPage: React.FC = () => {
  usePageMetadata({
    title: 'TypoGrammar Write – Free Offline Grammar Checker Chrome Extension',
    description:
      'TypoGrammar Write is a free, privacy-first Chrome extension that checks grammar, spelling, and punctuation offline. Designed for English learners, IELTS & TOEFL students.',
    canonical: 'https://typogrammar.com/typogrammar-write/',
    ogTitle: 'TypoGrammar Write – Free Offline Grammar Checker Chrome Extension',
    ogDescription:
      'A privacy-first Chrome extension that checks grammar, spelling, and punctuation offline. Built for English learners, IELTS & TOEFL test takers.',
    ogType: 'website',
    ogUrl: 'https://typogrammar.com/typogrammar-write/',
  });

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'TypoGrammar Write',
    operatingSystem: 'Chrome',
    applicationCategory: 'EducationalApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description:
      'A privacy-first Chrome extension that checks grammar, spelling, and punctuation offline. Built for English learners, IELTS & TOEFL test takers.',
    url: 'https://typogrammar.com/typogrammar-write/',
    publisher: {
      '@type': 'Organization',
      name: 'TypoGrammar',
      url: 'https://typogrammar.com',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      ratingCount: '1',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is TypoGrammar Write free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, TypoGrammar Write offers free grammar and writing assistance directly in your browser.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does TypoGrammar Write work offline?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. TypoGrammar Write runs offline by default. Your text stays on your device.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does TypoGrammar Write send my text to servers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Text stays on your device unless you manually enable optional cloud checking.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is TypoGrammar Write a Grammarly alternative?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, many users use it as a privacy-focused alternative to Grammarly.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can TypoGrammar Write help with IELTS writing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. It includes learner-focused grammar rules and academic writing suggestions for IELTS Writing Task 1, Task 2, and TOEFL essays.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does TypoGrammar Write check punctuation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. It checks punctuation, commas, apostrophes, capitalization, and more.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does TypoGrammar Write work in Gmail and Google Docs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, it works across many websites where you type, including Gmail, Google Docs, LinkedIn, X (Twitter), and most forms and editors.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is TypoGrammar Write good for English learners?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. It is specifically designed with English learners in mind, detecting common ESL mistakes like "capable to" instead of "capable of".',
        },
      },
      {
        '@type': 'Question',
        name: 'Does the extension explain grammar corrections?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. It gives explanations for every correction, not just corrections alone, so you can learn from your mistakes.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I install TypoGrammar Write?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Visit the Chrome Web Store, search for TypoGrammar Write, click Add to Chrome, and start writing with grammar help everywhere you type.',
        },
      },
    ],
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={softwareSchema} />
      <SchemaMarkup schema={faqSchema} />

      <article>
        {/* ── Hero ── */}
        <header className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-teal-100 dark:bg-teal-900/40 text-teal-800 dark:text-teal-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M10 1a9 9 0 100 18A9 9 0 0010 1zm0 16.2A7.2 7.2 0 1110 2.8a7.2 7.2 0 010 14.4z" />
              <path d="M9 9h2v5H9zm0-3h2v2H9z" />
            </svg>
            Chrome Extension · Free · Offline
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 text-slate-900 dark:text-slate-100 leading-tight">
            TypoGrammar Write
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-3">
            The Offline Grammar Checker Built for English Learners
          </p>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-8">
            Catch grammar mistakes, spelling errors, punctuation problems, and common English
            learner mistakes while you write — privately, on your device.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-full transition-colors shadow-sm text-base"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
              </svg>
              Add to Chrome — Free
            </a>
            <Link
              to="/grammar-checker/"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold rounded-full transition-colors text-base"
            >
              Try Online Grammar Checker
            </Link>
          </div>
        </header>

        {/* ── What Is It ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">
            What Is TypoGrammar Write?
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            TypoGrammar Write is an offline grammar checker and writing assistant Chrome
            extension designed specifically for English learners. It works inside the websites
            where you already write and checks your text in real time — without sending it to
            external servers.
          </p>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
            Whether you write emails, essays, social posts, or IELTS responses, TypoGrammar
            Write acts as your personal writing assistant in real time.
          </p>

          <h3 className="text-lg font-semibold mb-3 text-slate-800 dark:text-slate-200">
            Designed for:
          </h3>
          <ul className="grid sm:grid-cols-2 gap-2 mb-4">
            {[
              'English learners',
              'Students',
              'IELTS and TOEFL test takers',
              'Professionals',
              'Bloggers and writers',
              'Anyone who wants cleaner English writing',
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-slate-700 dark:text-slate-300"
              >
                <svg className="w-4 h-4 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg> {item}
              </li>
            ))}
          </ul>

          <h3 className="text-lg font-semibold mb-3 text-slate-800 dark:text-slate-200">
            Works inside:
          </h3>
          <ul className="grid sm:grid-cols-2 gap-2">
            {[
              'Gmail',
              'Google Docs',
              'LinkedIn',
              'X (Twitter)',
              'Forms and editors',
              'CMS platforms',
              'Most websites where you type',
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-slate-700 dark:text-slate-300"
              >
                <svg className="w-4 h-4 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg> {item}
              </li>
            ))}
          </ul>
        </section>

        {/* ── Why Different ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100">
            Why TypoGrammar Write Is Different
          </h2>

          {/* Card 1 – Privacy */}
          <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-6 mb-5 border border-slate-200 dark:border-slate-700">
            <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-slate-100 flex items-center gap-3">
              <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center">
                <svg className="w-5 h-5 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2l7 4v6c0 5-3.5 9.74-7 11C8.5 21.74 5 17 5 12V6l7-4z"/></svg>
              </span>
              1. Privacy-First Grammar Checking
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-3">
              Most grammar tools send text to external servers. TypoGrammar Write is different.
            </p>
            <ul className="space-y-1">
              {[
                '100% offline by default',
                'No tracking',
                'No telemetry',
                'No text leaves your device unless optional cloud checking is enabled',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <svg className="w-4 h-4 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg> {item}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm font-semibold text-slate-600 dark:text-slate-400">
              Your writing remains yours.
            </p>
          </div>

          {/* Card 2 – Learner focus */}
          <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-6 mb-5 border border-slate-200 dark:border-slate-700">
            <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-slate-100 flex items-center gap-3">
              <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"/></svg>
              </span>
              2. Built for English Learners
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-3">
              This is not just another grammar checker. TypoGrammar Write detects common
              learner mistakes such as:
            </p>
            <ul className="space-y-1">
              {[
                'capable of vs capable to',
                'discuss vs discuss about',
                'married to vs married with',
                'depend on vs depend of',
                'your vs you\'re',
                'their vs there vs they\'re',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <svg className="w-4 h-4 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg> {item}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm font-semibold text-slate-600 dark:text-slate-400">
              It is designed to teach, not just correct.
            </p>
          </div>

          {/* Card 3 – Real-time */}
          <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-6 mb-5 border border-slate-200 dark:border-slate-700">
            <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-slate-100 flex items-center gap-3">
              <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center">
                <svg className="w-5 h-5 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </span>
              3. Real-Time Grammar Corrections
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-3">
              As you type, the extension detects grammar issues including:
            </p>
            <ul className="grid sm:grid-cols-2 gap-1 mb-4">
              {[
                'Subject–verb agreement',
                'Auxiliary verb errors',
                'Verb tense mistakes',
                'Articles',
                'Preposition errors',
                'Missing words',
                'Double negatives',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm">
                  <svg className="w-4 h-4 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg> {item}
                </li>
              ))}
            </ul>
            <div className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-700 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 9l-6 6M9 9l6 6"/></svg>
                <span className="line-through text-red-500">Does he has the key</span>
                <span className="mx-1 text-slate-400">→</span>
                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <span className="text-green-600 dark:text-green-400">Does he have the key</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 9l-6 6M9 9l6 6"/></svg>
                <span className="line-through text-red-500">He go to school</span>
                <span className="mx-1 text-slate-400">→</span>
                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <span className="text-green-600 dark:text-green-400">He goes to school</span>
              </div>
            </div>
          </div>

          {/* Card 4 – Punctuation */}
          <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-6 mb-5 border border-slate-200 dark:border-slate-700">
            <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-slate-100 flex items-center gap-3">
              <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center">
                <svg className="w-5 h-5 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125"/></svg>
              </span>
              4. Punctuation and Capitalization Checks
            </h3>
            <ul className="grid sm:grid-cols-2 gap-1">
              {[
                'Missing punctuation',
                'Comma issues',
                'Apostrophe mistakes',
                'Run-on sentences',
                'Capitalization errors',
                'Oxford comma consistency',
                'Semicolon misuse',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm">
                  <svg className="w-4 h-4 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Card 5 – Style */}
          <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
            <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-slate-100 flex items-center gap-3">
              <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 0v2m0 16v2M2 12h2m16 0h2"/></svg>
              </span>
              5. Writing Style Suggestions
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-3">
              Improve clarity with suggestions for:
            </p>
            <ul className="grid sm:grid-cols-2 gap-1">
              {[
                'Wordiness',
                'Passive voice',
                'Repetition',
                'Tone and formality',
                'Academic writing improvements',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm">
                  <svg className="w-4 h-4 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg> {item}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
              Perfect for essays and professional writing.
            </p>
          </div>
        </section>

        {/* ── IELTS / TOEFL ── */}
        <section className="mb-12 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
          <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">
            Designed for IELTS and TOEFL Writing
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            TypoGrammar Write includes learner-focused rules and writing guidance helpful for:
          </p>
          <ul className="grid sm:grid-cols-2 gap-2 mb-6">
            {[
              'IELTS Writing Task 1',
              'IELTS Writing Task 2',
              'TOEFL essays',
              'Academic English',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
                <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg> {item}
              </li>
            ))}
          </ul>
          <p className="text-slate-700 dark:text-slate-300 mb-3">
            It can flag weak phrases like:
          </p>
          <ul className="space-y-1 mb-4">
            {[
              'In this essay I will discuss',
              'Since the beginning of time',
              'Nowadays many people think',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-red-600 dark:text-red-400 text-sm font-mono">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 9l-6 6M9 9l6 6"/></svg> {item}
              </li>
            ))}
          </ul>
          <p className="text-slate-600 dark:text-slate-300 text-sm">
            ...and suggest stronger alternatives.
          </p>
        </section>

        {/* ── Features ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100">
            Features of TypoGrammar Write
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {([
              {
                iconBg: 'bg-teal-100 dark:bg-teal-900/50',
                iconColor: 'text-teal-600 dark:text-teal-400',
                icon: <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3"/></svg>,
                title: 'Offline Grammar Checker',
                desc: 'Checks grammar directly in your browser without sending data to servers.',
              },
              {
                iconBg: 'bg-blue-100 dark:bg-blue-900/50',
                iconColor: 'text-blue-600 dark:text-blue-400',
                icon: <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>,
                title: 'Spelling Correction',
                desc: 'Uses offline dictionaries and intelligent suggestions.',
              },
              {
                iconBg: 'bg-amber-100 dark:bg-amber-900/50',
                iconColor: 'text-amber-600 dark:text-amber-400',
                icon: <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>,
                title: 'Learner-Friendly Explanations',
                desc: 'Every correction includes an explanation so you learn from mistakes.',
              },
              {
                iconBg: 'bg-emerald-100 dark:bg-emerald-900/50',
                iconColor: 'text-emerald-600 dark:text-emerald-400',
                icon: <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
                title: 'One-Click Fixes',
                desc: 'Accept corrections instantly with a single click.',
              },
              {
                iconBg: 'bg-violet-100 dark:bg-violet-900/50',
                iconColor: 'text-violet-600 dark:text-violet-400',
                icon: <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>,
                title: 'Grammar Score & Readability',
                desc: 'Get quick feedback about the quality of your writing.',
              },
              {
                iconBg: 'bg-teal-100 dark:bg-teal-900/50',
                iconColor: 'text-teal-600 dark:text-teal-400',
                icon: <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2l7 4v6c0 5-3.5 9.74-7 11C8.5 21.74 5 17 5 12V6l7-4z"/></svg>,
                title: 'Privacy First',
                desc: 'No tracking. No telemetry. Your text stays on your device.',
              },
            ] as const).map((feat) => (
              <div
                key={feat.title}
                className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700 shadow-sm"
              >
                <div className={`w-10 h-10 rounded-xl ${feat.iconBg} ${feat.iconColor} flex items-center justify-center mb-3`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">{feat.icon}</svg>
                </div>
                <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-1">{feat.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{feat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Why Offline ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">
            Why Use an Offline Grammar Checker?
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            Many people now want privacy-focused writing tools. Benefits of offline grammar
            checking:
          </p>
          <ul className="space-y-2 mb-4">
            {[
              'Faster response',
              'Better privacy',
              'No constant API dependence',
              'Works even with limited connectivity',
              'Your text stays on your device',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <svg className="w-4 h-4 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg> {item}
              </li>
            ))}
          </ul>
          <p className="text-slate-700 dark:text-slate-300">
            That is why many users are searching for{' '}
            <strong>Grammarly alternatives</strong>. TypoGrammar Write is one option worth
            trying.
          </p>
        </section>

        {/* ── Comparison Table ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100">
            TypoGrammar Write vs Traditional Grammar Checkers
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300">
                    Feature
                  </th>
                  <th className="px-4 py-3 font-semibold text-teal-700 dark:text-teal-400 text-center">
                    TypoGrammar Write
                  </th>
                  <th className="px-4 py-3 font-semibold text-slate-500 text-center">
                    Typical Cloud Tools
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                {[
                  ['Offline by default', true, false],
                  ['English learner focus', true, 'Limited'],
                  ['Privacy first', true, 'Often partial'],
                  ['Grammar explanations', true, true],
                  ['IELTS support', true, 'Rare'],
                  ['Common ESL mistakes', true, 'Often weak'],
                ].map(([feature, ours, theirs]) => (
                  <tr
                    key={String(feature)}
                    className="bg-white dark:bg-slate-900 even:bg-slate-50 dark:even:bg-slate-800/50"
                  >
                    <td className="px-4 py-3 text-slate-700 dark:text-slate-300 font-medium">
                      {String(feature)}
                    </td>
                    <td className="px-4 py-3 text-center text-teal-600 dark:text-teal-400 font-semibold">
                      {ours === true ? (
                        <span className="inline-flex items-center justify-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg> Yes</span>
                      ) : String(ours)}
                    </td>
                    <td className="px-4 py-3 text-center text-slate-400">
                      {theirs === false ? (
                        <span className="inline-flex items-center justify-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg> No</span>
                      ) : theirs === true ? 'Yes' : String(theirs)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Common Mistakes ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">
            Common Grammar Mistakes TypoGrammar Write Can Catch
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              ['Does he has', 'Does he have'],
              ["She don't", "She doesn't"],
              ['Capable to', 'Capable of'],
              ['Discuss about', 'Discuss'],
              ['Their going home', "They're going home"],
              ['Married with', 'Married to'],
              ['Depend of', 'Depend on'],
              ['He go to school', 'He goes to school'],
            ].map(([wrong, correct]) => (
              <div
                key={wrong}
                className="flex items-center gap-2 bg-white dark:bg-slate-800 rounded-xl px-4 py-3 border border-slate-200 dark:border-slate-700 text-sm"
              >
                <span className="text-red-500 line-through">{wrong}</span>
                <span className="text-slate-400 mx-1">→</span>
                <span className="text-green-600 dark:text-green-400 font-semibold">{correct}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
            And hundreds more learner-specific corrections.
          </p>
        </section>

        {/* ── How to Install ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100">
            How to Install TypoGrammar Write
          </h2>
          <ol className="space-y-4">
            {[
              'Visit the Chrome Web Store',
              'Search for TypoGrammar Write',
              'Click Add to Chrome',
              'Start writing with grammar help everywhere you type',
            ].map((step, i) => (
              <li key={step} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="text-lg text-slate-700 dark:text-slate-300 pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
          <div className="mt-6">
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-full transition-colors shadow-sm text-base"
            >
              Add to Chrome — Free
            </a>
          </div>
        </section>

        {/* ── Why TypoGrammar ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">
            Why TypoGrammar Created This Extension
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            TypoGrammar has helped learners understand grammar mistakes through educational
            content. TypoGrammar Write brings that expertise directly into your writing.
          </p>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            Instead of reading about grammar mistakes later, you can catch them while writing.
            That is the idea.
          </p>
        </section>

        {/* ── FAQ ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'Is TypoGrammar Write free?',
                a: 'Yes, TypoGrammar Write offers free grammar and writing assistance.',
              },
              {
                q: 'Does TypoGrammar Write work offline?',
                a: 'Yes. It runs offline by default.',
              },
              {
                q: 'Does TypoGrammar Write send my text to servers?',
                a: 'No. Text stays on your device unless you manually enable optional cloud checking.',
              },
              {
                q: 'Is TypoGrammar Write a Grammarly alternative?',
                a: 'Yes, many users may use it as a privacy-focused alternative to Grammarly.',
              },
              {
                q: 'Can TypoGrammar Write help with IELTS writing?',
                a: 'Yes. It includes learner-focused grammar and academic writing suggestions.',
              },
              {
                q: 'Does TypoGrammar Write check punctuation?',
                a: 'Yes. It checks punctuation, commas, apostrophes, capitalization, and more.',
              },
              {
                q: 'Does TypoGrammar Write work in Gmail and Google Docs?',
                a: 'Yes, it works across many websites where you type.',
              },
              {
                q: 'Is TypoGrammar Write good for English learners?',
                a: 'Yes. It is specifically designed with English learners in mind.',
              },
              {
                q: 'Does the extension explain grammar corrections?',
                a: 'Yes. It gives explanations, not just corrections.',
              },
              {
                q: 'How do I install TypoGrammar Write?',
                a: 'Install it from the Chrome Web Store and add it to Chrome.',
              },
            ].map(({ q, a }) => (
              <details
                key={q}
                className="group bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 open:ring-1 open:ring-teal-500"
              >
                <summary className="font-semibold text-slate-900 dark:text-slate-100 cursor-pointer list-none flex justify-between items-center gap-2">
                  {q}
                  <span className="text-teal-500 flex-shrink-0 transition-transform group-open:rotate-45 text-xl leading-none">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-slate-600 dark:text-slate-400">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="bg-gradient-to-br from-teal-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Write Better. Learn Better.
          </h2>
          <p className="text-teal-100 mb-6 text-lg max-w-xl mx-auto">
            If you want an offline grammar checker, a privacy-focused writing assistant, or a
            grammar tool designed for English learners, TypoGrammar Write is built for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-teal-700 font-bold rounded-full hover:bg-teal-50 transition-colors shadow text-base"
            >
              Add to Chrome — Free
            </a>
            <Link
              to="/grammar-guide/"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-white/50 text-white font-semibold rounded-full hover:bg-white/10 transition-colors text-base"
            >
              Explore Grammar Lessons
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
};

export default TypoGrammarWriteExtensionPage;
