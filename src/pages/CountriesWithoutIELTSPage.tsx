import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';

const CountriesWithoutIELTSPage: React.FC = () => {
  usePageMetadata({
    title: 'Countries You Can Study and Work in Without IELTS (2026 Guide)',
    description:
      'Discover countries that do not require IELTS for study, work, or immigration in 2026. Learn about MOI letters, TOEFL alternatives, and how to prove English without IELTS.',
  });

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://typogrammar.com' },
      { '@type': 'ListItem', position: 2, name: 'IELTS', item: 'https://typogrammar.com/ielts/ielts-writing-task-2-essay-types' },
      { '@type': 'ListItem', position: 3, name: 'Countries Without IELTS', item: 'https://typogrammar.com/ielts/countries-without-ielts' },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Countries You Can Study and Work in Without IELTS (2026 Guide)',
    description: 'Discover countries that do not require IELTS for study, work, or immigration in 2026, including alternatives like MOI letters and TOEFL iBT.',
    datePublished: '2026-05-05',
    dateModified: '2026-05-05',
    author: { '@type': 'Organization', name: 'TypoGrammar' },
    publisher: { '@type': 'Organization', name: 'TypoGrammar', url: 'https://typogrammar.com' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://typogrammar.com/ielts/countries-without-ielts' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Which countries do not require IELTS for study?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Countries that often do not require IELTS for study include Germany (for German-language programs), many countries in Eastern Europe like Poland and Hungary, some programs in Malaysia, the Philippines, and parts of the Middle East. Many universities worldwide also accept alternative proofs like MOI letters or TOEFL iBT instead of IELTS.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I study in Canada without IELTS?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, some Canadian universities and colleges accept alternative English proficiency proofs instead of IELTS, including TOEFL iBT, Duolingo English Test, PTE Academic, or a Medium of Instruction (MOI) letter if your previous education was in English. However, IELTS remains the most widely required test.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I work abroad without IELTS?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Many countries do not require IELTS for work visas, including the UAE, Qatar, Saudi Arabia, Germany (for German-speaking roles), Japan, South Korea, and most of Southeast Asia. Work visas in these countries focus on job skills and employer sponsorship rather than English test scores.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is a MOI letter and can it replace IELTS?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A MOI (Medium of Instruction) letter is an official document from your previous school or university confirming that your education was conducted in English. Many universities accept a MOI letter in place of IELTS, especially if you studied in an English-medium institution for 3 or more years.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which is better, IELTS or TOEFL, for studying abroad without IELTS?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If you want to avoid IELTS, TOEFL iBT is the most widely accepted alternative. It is accepted by over 12,000 universities worldwide, including those in the USA, Canada, UK, and Australia. TOEFL iBT is internet-based and tests all four skills: reading, listening, speaking, and writing.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is IELTS required to go to Germany?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'IELTS is not required for most German public university programs, as most are taught in German. For English-taught programs, universities typically accept IELTS 6.0 to 6.5 or TOEFL iBT. For a German work visa or immigration, German language proficiency (TestDaF or Goethe) is usually required instead.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I immigrate to Canada without IELTS?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'IELTS is one of the designated language tests accepted for Canadian immigration, but it is not the only option. Canada also accepts CELPIP (Canadian English Language Proficiency Index Program) as an alternative to IELTS. TOEFL is not accepted for most Canadian immigration streams.',
        },
      },
    ],
  };

  useEffect(() => {
    const scripts = [breadcrumbSchema, articleSchema, faqSchema].map(schema => {
      const s = document.createElement('script');
      s.type = 'application/ld+json';
      s.text = JSON.stringify(schema);
      document.head.appendChild(s);
      return s;
    });
    return () => scripts.forEach(s => document.head.removeChild(s));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const studyCountries = [
    { country: 'Germany', flag: '🇩🇪', condition: 'German-language programs', alternative: 'DSH / TestDaF instead', note: 'English programs may need IELTS/TOEFL' },
    { country: 'Malaysia', flag: '🇲🇾', condition: 'Many English-medium universities', alternative: 'Internal placement test or MOI', note: 'Some accept SPM / A-Level English results' },
    { country: 'Philippines', flag: '🇵🇭', condition: 'English is the language of instruction', alternative: 'No test needed at many schools', note: 'Universities often waive IELTS requirement' },
    { country: 'Poland', flag: '🇵🇱', condition: 'English-taught programs at some universities', alternative: 'TOEFL iBT, MOI letter, or English interview', note: 'No IELTS required for many programs' },
    { country: 'Hungary', flag: '🇭🇺', condition: 'English-medium programs available', alternative: 'TOEFL, SAT, or school recommendation', note: 'Affordable tuition without IELTS' },
    { country: 'Czech Republic', flag: '🇨🇿', condition: 'Some universities accept MOI letters', alternative: 'TOEFL iBT or Cambridge certificate', note: 'English-taught programs in Prague' },
    { country: 'Japan', flag: '🇯🇵', condition: 'English-taught programs accept TOEFL', alternative: 'TOEFL iBT, Japanese aptitude test (EJU)', note: 'IELTS rarely required' },
    { country: 'South Korea', flag: '🇰🇷', condition: 'Many universities accept TOEFL or internal test', alternative: 'TOEFL iBT, TOPIK, or university test', note: 'Language scholarships available without IELTS' },
    { country: 'Turkey', flag: '🇹🇷', condition: 'Universities with English-medium programs', alternative: 'YÖS test, TOEFL, or internal English exam', note: 'No IELTS required for most Turkish universities' },
    { country: 'UAE / Dubai', flag: '🇦🇪', condition: 'International universities accept TOEFL or EmSAT', alternative: 'EmSAT, TOEFL iBT, or English placement', note: 'Work visa does not require IELTS' },
  ];

  const workCountries = [
    { country: 'UAE / Qatar / Saudi Arabia', flag: '🇦🇪', note: 'Work visas do not require English tests. Employer sponsors the visa.' },
    { country: 'Germany', flag: '🇩🇪', note: 'Work permits focus on job qualifications. German language preferred, not IELTS.' },
    { country: 'Japan', flag: '🇯🇵', note: 'Work visas based on job type and employer. No English test required.' },
    { country: 'South Korea', flag: '🇰🇷', note: 'E-series work visas do not require IELTS. Korean language (TOPIK) may be needed.' },
    { country: 'Malaysia', flag: '🇲🇾', note: 'Work passes issued based on employment contract. No language test required.' },
    { country: 'Singapore', flag: '🇸🇬', note: 'Employment Pass based on salary and employer. No IELTS required for work visa.' },
    { country: 'Thailand', flag: '🇹🇭', note: 'Work permit based on job offer. Teaching jobs may need TEFL certificate instead of IELTS.' },
    { country: 'Eastern Europe (Poland, Hungary, Czech Republic)', flag: '🇪🇺', note: 'EU Blue Card work permit focuses on qualifications and salary, not IELTS.' },
  ];

  const alternatives = [
    {
      name: 'TOEFL iBT',
      description: 'Accepted by 12,000+ universities worldwide including those in the US, UK, Canada, and Australia.',
      icon: '📝',
      link: '/toefl/strategy-success/toefl-ibt-vs-toefl-ltp/',
      linkLabel: 'IELTS vs TOEFL iBT guide',
    },
    {
      name: 'MOI Letter (Medium of Instruction)',
      description: 'An official letter from your school confirming your education was in English. Accepted by many universities as a substitute for IELTS.',
      icon: '📄',
      link: null,
      linkLabel: null,
    },
    {
      name: 'PTE Academic',
      description: 'Pearson Test of English. Accepted by universities in Australia, UK, Canada, and New Zealand. Faster results than IELTS.',
      icon: '🎓',
      link: null,
      linkLabel: null,
    },
    {
      name: 'Duolingo English Test (DET)',
      description: 'Growing acceptance at US, Canadian, and UK universities. Affordable and online. Accepted by over 5,000 institutions.',
      icon: '🦜',
      link: null,
      linkLabel: null,
    },
    {
      name: 'Cambridge B2 / C1 / C2',
      description: 'Cambridge English qualifications accepted by many European universities and UK employers.',
      icon: '🏛️',
      link: null,
      linkLabel: null,
    },
    {
      name: 'CELPIP (for Canada)',
      description: 'Canada\'s alternative to IELTS for immigration. Accepted by IRCC for all major immigration programs.',
      icon: '🍁',
      link: null,
      linkLabel: null,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">

      {/* Breadcrumb */}
      <nav className="text-sm text-slate-500 dark:text-slate-400 mb-4 flex flex-wrap gap-1 items-center">
        <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
        <span>/</span>
        <Link to="/ielts/ielts-writing-task-2-essay-types/" className="hover:text-blue-600 dark:hover:text-blue-400">IELTS</Link>
        <span>/</span>
        <span className="text-slate-700 dark:text-slate-300">Countries Without IELTS</span>
      </nav>

      <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
        Last updated: <strong>May 2026</strong>
      </p>

      <h1 className="text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100">
        Countries You Can Study and Work in Without IELTS (2026)
      </h1>

      {/* Featured Snippet */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-5 my-6 rounded-r-lg">
        <p className="font-bold text-slate-800 dark:text-slate-100 mb-2">Quick Answer</p>
        <p className="text-slate-700 dark:text-slate-300 text-[15px] leading-relaxed">
          <strong>Countries you can study in without IELTS</strong> include Germany (German-taught programs), Malaysia,
          the Philippines, Poland, Hungary, Turkey, Japan, and South Korea. <strong>Countries where you can work
          without IELTS</strong> include the UAE, Qatar, Saudi Arabia, Germany, Japan, South Korea, Malaysia, and
          Singapore. Many universities also accept <strong>TOEFL iBT, MOI letters, or PTE Academic</strong> as
          alternatives to IELTS.
        </p>
      </div>

      <p className="text-slate-700 dark:text-slate-300 text-[15px] mb-4 leading-relaxed">
        IELTS is not the only path to studying or working abroad. Millions of people move to foreign countries every
        year without ever taking an IELTS exam. This guide tells you exactly which countries do not require IELTS, what
        alternatives they accept, and what conditions apply.
      </p>

      <p className="text-slate-700 dark:text-slate-300 text-[15px] mb-8 leading-relaxed">
        If you do need IELTS, check our{' '}
        <Link to="/ielts/ielts-score-requirements-by-country/" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
          minimum IELTS score requirements by country
        </Link>{' '}
        to know exactly what band score you need.
      </p>

      {/* ─── STUDY WITHOUT IELTS ─── */}
      <h2 className="text-2xl font-bold mt-10 mb-4 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-3">
        Which Countries Do Not Require IELTS for Study?
      </h2>

      <p className="text-slate-700 dark:text-slate-300 text-[15px] mb-5">
        These countries offer study options that do not require an IELTS score, either because English is the
        default language of instruction or because they accept alternative proofs:
      </p>

      <div className="space-y-3 my-5">
        {studyCountries.map(({ country, flag, condition, alternative, note }) => (
          <div key={country} className="border border-slate-200 dark:border-slate-700 rounded-xl p-4 bg-white dark:bg-slate-800">
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <div>
                <p className="font-bold text-slate-800 dark:text-slate-100 text-[15px]">
                  {flag} {country}
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-[13px] mt-0.5">{condition}</p>
              </div>
              <span className="flex-shrink-0 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs font-semibold px-2.5 py-1 rounded-full">
                No IELTS needed
              </span>
            </div>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg px-3 py-2">
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-0.5">Alternative accepted</p>
                <p className="text-[13px] font-medium text-blue-700 dark:text-blue-300">{alternative}</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg px-3 py-2">
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-0.5">Note</p>
                <p className="text-[13px] text-slate-700 dark:text-slate-300">{note}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ─── WORK WITHOUT IELTS ─── */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-3">
        Can I Work Abroad Without IELTS?
      </h2>

      <p className="text-slate-700 dark:text-slate-300 text-[15px] mb-5">
        Yes. Most work visas around the world are based on your <strong>job qualifications and employer sponsorship</strong>,
        not your English test scores. These countries do not require IELTS for work permits:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-5">
        {workCountries.map(({ country, flag, note }) => (
          <div key={country} className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4">
            <p className="font-bold text-slate-800 dark:text-slate-100 text-[14px] mb-1.5">
              {flag} {country}
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-[13px]">{note}</p>
          </div>
        ))}
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-5 rounded-r-lg">
        <p className="font-semibold text-slate-800 dark:text-slate-100 mb-1">Key Insight</p>
        <p className="text-slate-700 dark:text-slate-300 text-[14px]">
          IELTS is mainly required for <strong>immigration-linked work permits</strong> in countries like Canada,
          Australia, and the UK. For <strong>employer-sponsored work visas</strong> in the Gulf, Asia, and Eastern
          Europe, IELTS is rarely required.
        </p>
      </div>

      {/* ─── ALTERNATIVES ─── */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-3">
        What Can Replace IELTS? (English Proficiency Alternatives)
      </h2>

      <p className="text-slate-700 dark:text-slate-300 text-[15px] mb-5">
        Even when a country requires proof of English proficiency, IELTS is not always the only option. Here are the
        most widely accepted alternatives:
      </p>

      <div className="space-y-4 my-5">
        {alternatives.map(({ name, description, icon, link, linkLabel }) => (
          <div key={name} className="flex gap-4 items-start bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4">
            <span className="text-2xl flex-shrink-0">{icon}</span>
            <div>
              <p className="font-bold text-slate-800 dark:text-slate-100 text-[15px] mb-1">{name}</p>
              <p className="text-slate-600 dark:text-slate-400 text-[13px]">{description}</p>
              {link && linkLabel && (
                <Link to={link} className="text-blue-600 dark:text-blue-400 hover:underline text-[13px] font-medium mt-1 inline-block">
                  → {linkLabel}
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* ─── MOI EXPLAINED ─── */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-3">
        What is a MOI Letter and Can It Replace IELTS?
      </h2>

      <p className="text-slate-700 dark:text-slate-300 text-[15px] mb-4">
        A <strong>MOI (Medium of Instruction) letter</strong> is an official certificate from your school or university
        confirming that all your classes were taught in English. It is one of the most common IELTS alternatives
        accepted by universities in Canada, Australia, the UK, and elsewhere.
      </p>

      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-xl p-5 my-5">
        <p className="font-bold text-slate-800 dark:text-slate-100 mb-3">When a MOI Letter Works as an IELTS Substitute</p>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-[14px]">
          <li className="flex gap-2"><span className="text-green-500">✓</span> You completed 3 or more years of education in an English-medium institution</li>
          <li className="flex gap-2"><span className="text-green-500">✓</span> The institution is recognized and accredited</li>
          <li className="flex gap-2"><span className="text-green-500">✓</span> The target university's policy explicitly accepts MOI letters</li>
          <li className="flex gap-2"><span className="text-green-500">✓</span> You can provide official transcripts to confirm the language of instruction</li>
        </ul>
        <p className="mt-3 text-slate-600 dark:text-slate-400 text-[13px]">
          Always contact the admissions office directly to confirm MOI is accepted before applying.
        </p>
      </div>

      {/* ─── IELTS vs TOEFL ─── */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-3">
        Which is Better: IELTS or TOEFL for Studying Abroad Without IELTS?
      </h2>

      <p className="text-slate-700 dark:text-slate-300 text-[15px] mb-4">
        If you want to use a test other than IELTS, <strong>TOEFL iBT is the most powerful alternative</strong>.
        It is accepted by over 12,000 universities worldwide and is often preferred by American universities.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-5">
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-xl p-5">
          <p className="font-bold text-slate-800 dark:text-slate-100 mb-3">TOEFL iBT is better if you are applying to:</p>
          <ul className="space-y-1.5 text-slate-700 dark:text-slate-300 text-[14px]">
            <li>✓ US universities (very widely accepted)</li>
            <li>✓ Countries where IELTS is not required</li>
            <li>✓ Programs that prefer TOEFL over IELTS</li>
            <li>✓ Applications that need fast digital score delivery</li>
          </ul>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5">
          <p className="font-bold text-slate-800 dark:text-slate-100 mb-3">IELTS is still required for:</p>
          <ul className="space-y-1.5 text-slate-700 dark:text-slate-300 text-[14px]">
            <li>✗ Most Canadian immigration streams (not TOEFL)</li>
            <li>✗ Most Australian visa applications</li>
            <li>✗ UK visa applications (IELTS for UKVI)</li>
            <li>✗ New Zealand immigration pathways</li>
          </ul>
        </div>
      </div>

      <p className="text-slate-700 dark:text-slate-300 text-[15px] mb-6">
        Read our detailed comparison:{' '}
        <Link to="/toefl/strategy-success/toefl-ibt-vs-toefl-ltp/" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
          TOEFL iBT vs TOEFL LTP
        </Link>.
      </p>

      {/* Internal links */}
      <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5 my-6">
        <p className="font-bold text-slate-800 dark:text-slate-100 mb-3">Related Guides</p>
        <ul className="space-y-2">
          {[
            { to: '/ielts/ielts-score-requirements-by-country/', label: 'Minimum IELTS Score Requirements by Country 2026' },
            { to: '/ielts-band-score-calculator/', label: 'IELTS Band Score Calculator' },
            { to: '/ielts/is-7-5-ielts-score-good-enough/', label: 'Is 7.5 a Good IELTS Score?' },
            { to: '/ielts/why-stuck-at-6-5/', label: 'Why Am I Stuck at Band 6.5?' },
            { to: '/toefl/strategy-success/toefl-ibt-vs-toefl-ltp/', label: 'TOEFL iBT vs TOEFL LTP' },
            { to: '/toefl/strategy-success/toefl-2026-scoring/', label: 'TOEFL 2026 Scoring System' },
          ].map(({ to, label }) => (
            <li key={to}>
              <Link to={to} className="text-blue-600 dark:text-blue-400 hover:underline text-[15px] font-medium">
                → {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* ─── FAQ ─── */}
      <h2 className="text-2xl font-bold mt-12 mb-5 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-3">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {[
          {
            q: 'Which countries do not require IELTS for study?',
            a: 'Countries that often do not require IELTS for study include Germany (for German-language programs), many countries in Eastern Europe like Poland and Hungary, some programs in Malaysia, the Philippines, and parts of the Middle East. Many universities worldwide also accept alternative proofs like MOI letters or TOEFL iBT instead of IELTS.',
          },
          {
            q: 'Can I study in Canada without IELTS?',
            a: 'Yes, some Canadian universities and colleges accept alternative English proficiency proofs instead of IELTS, including TOEFL iBT, Duolingo English Test, PTE Academic, or a Medium of Instruction (MOI) letter if your previous education was in English. However, IELTS remains the most widely required test.',
          },
          {
            q: 'Can I work abroad without IELTS?',
            a: 'Yes. Many countries do not require IELTS for work visas, including the UAE, Qatar, Saudi Arabia, Germany (for German-speaking roles), Japan, South Korea, and most of Southeast Asia. Work visas in these countries focus on job skills and employer sponsorship rather than English test scores.',
          },
          {
            q: 'What is a MOI letter and can it replace IELTS?',
            a: 'A MOI (Medium of Instruction) letter is an official document from your previous school or university confirming that your education was conducted in English. Many universities accept a MOI letter in place of IELTS, especially if you studied in an English-medium institution for 3 or more years.',
          },
          {
            q: 'Which is better, IELTS or TOEFL, for studying abroad without IELTS?',
            a: 'If you want to avoid IELTS, TOEFL iBT is the most widely accepted alternative. It is accepted by over 12,000 universities worldwide, including those in the USA, Canada, UK, and Australia. TOEFL iBT is internet-based and tests all four skills: reading, listening, speaking, and writing.',
          },
          {
            q: 'Is IELTS required to go to Germany?',
            a: 'IELTS is not required for most German public university programs, as most are taught in German. For English-taught programs, universities typically accept IELTS 6.0 to 6.5 or TOEFL iBT. For a German work visa or immigration, German language proficiency (TestDaF or Goethe) is usually required instead.',
          },
          {
            q: 'Can I immigrate to Canada without IELTS?',
            a: 'IELTS is one of the designated language tests accepted for Canadian immigration, but it is not the only option. Canada also accepts CELPIP (Canadian English Language Proficiency Index Program) as an alternative to IELTS. TOEFL is not accepted for most Canadian immigration streams.',
          },
        ].map(({ q, a }, i) => (
          <div key={i} className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
            <div className="bg-slate-50 dark:bg-slate-800 px-5 py-4">
              <h2 className="font-bold text-slate-800 dark:text-slate-100 text-[16px]">{q}</h2>
            </div>
            <div className="px-5 py-4">
              <p className="text-slate-700 dark:text-slate-300 text-[15px]">{a}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Final Answer */}
      <div className="bg-slate-900 dark:bg-slate-700 text-white rounded-xl p-6 my-8">
        <p className="font-bold text-lg mb-3">Final Answer</p>
        <p className="text-slate-200 text-[15px] leading-relaxed">
          You do not need IELTS to study in Germany (German programs), Malaysia, the Philippines, Poland, Hungary,
          Japan, South Korea, or Turkey. You do not need IELTS for work visas in the UAE, Qatar, Saudi Arabia,
          Germany, Japan, South Korea, or Southeast Asia. When English proof is required, TOEFL iBT, PTE Academic,
          Duolingo English Test, or a MOI letter are accepted by thousands of institutions worldwide. IELTS is only
          mandatory for immigration to Canada, Australia, the UK, and New Zealand.
        </p>
      </div>

    </div>
  );
};

export default CountriesWithoutIELTSPage;
