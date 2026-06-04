import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';

const IELTSScoreRequirementsPage: React.FC = () => {
  usePageMetadata({
    title: 'Minimum IELTS Score Requirements by Country 2026 | Study, Work & Immigration',
    description:
      'Find the minimum IELTS score required by country in 2026. Covers Canada, Australia, UK, USA, Germany, and more for study, work permits, and immigration.',
  });

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://typogrammar.com' },
      { '@type': 'ListItem', position: 2, name: 'IELTS', item: 'https://typogrammar.com/ielts/ielts-writing-task-2-essay-types' },
      { '@type': 'ListItem', position: 3, name: 'IELTS Score Requirements by Country', item: 'https://typogrammar.com/ielts/ielts-score-requirements-by-country' },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Minimum IELTS Score Requirements by Country 2026',
    description: 'Find the minimum IELTS score required by country in 2026 for study, work permits, and immigration.',
    datePublished: '2026-05-05',
    dateModified: '2026-05-05',
    author: { '@type': 'Organization', name: 'TypoGrammar' },
    publisher: { '@type': 'Organization', name: 'TypoGrammar', url: 'https://typogrammar.com' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://typogrammar.com/ielts/ielts-score-requirements-by-country' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the minimum IELTS score for Canada?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For Canadian immigration (Express Entry), the minimum IELTS score is typically band 6.0 overall. For Canadian universities, most require band 6.5 overall, while top programs may require 7.0 or higher. Work permit streams may accept 5.0 to 6.0 depending on the job category.',
        },
      },
      {
        '@type': 'Question',
        name: 'What IELTS score do I need for Australia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Australia requires IELTS 6.0 overall for most skilled migration visas, with no band below 5.0. For university admission, most institutions require 6.0 to 6.5. For nursing and teaching professions, 7.0 overall is required with no band below 7.0.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the IELTS requirement for the UK?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For a UK Student Visa, you need IELTS 5.5 to 6.5 depending on the institution. For a Skilled Worker Visa, the minimum is typically IELTS 4.0. Top UK universities like Oxford and Cambridge require 7.0 to 7.5 overall.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need IELTS for USA universities?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'US universities typically accept TOEFL iBT instead of IELTS, but most also accept IELTS. The typical requirement is IELTS 6.0 to 7.0 for undergraduate programs and 6.5 to 7.5 for graduate programs. IELTS is not required for a US student visa directly.',
        },
      },
      {
        '@type': 'Question',
        name: 'What IELTS score is needed for Germany?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For Germany, most public universities require IELTS 6.0 to 6.5 for English-taught programs. For immigration and work visas, Germany does not always require IELTS, as German language proficiency is often preferred. However, English-taught master\'s programs typically ask for 6.5.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is a good IELTS score for immigration?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A good IELTS score for immigration depends on the country. Canada requires 6.0, Australia requires 6.0, the UK requires 4.0 to 5.5, and New Zealand requires 5.5 to 6.5 depending on the visa type. A band 7.0 or above is considered strong for most immigration pathways.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is IELTS 6.0 good enough for Canada?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'IELTS 6.0 overall meets the minimum threshold for many Canadian immigration streams including Express Entry. However, scoring higher (7.0+) gives you more Comprehensive Ranking System (CRS) points, which improves your chances of receiving an invitation to apply.',
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

  const countryData = [
    {
      country: 'Canada',
      flag: '🇨🇦',
      study: '6.0 – 7.0',
      work: '5.0 – 6.0',
      immigration: '6.0 (Express Entry)',
      notes: 'Higher CRS points with 7.0+',
      color: 'bg-red-50 dark:bg-red-900/10',
    },
    {
      country: 'Australia',
      flag: '🇦🇺',
      study: '6.0 – 6.5',
      work: '5.0 – 6.0',
      immigration: '6.0 (no band < 5.0)',
      notes: 'Nursing/teaching requires 7.0',
      color: 'bg-yellow-50 dark:bg-yellow-900/10',
    },
    {
      country: 'United Kingdom',
      flag: '🇬🇧',
      study: '5.5 – 7.5',
      work: '4.0 – 5.0',
      immigration: '4.0 (Skilled Worker)',
      notes: 'Oxford/Cambridge require 7.0+',
      color: 'bg-blue-50 dark:bg-blue-900/10',
    },
    {
      country: 'USA',
      flag: '🇺🇸',
      study: '6.0 – 7.5',
      work: 'Not required',
      immigration: 'Not required',
      notes: 'TOEFL also widely accepted',
      color: 'bg-indigo-50 dark:bg-indigo-900/10',
    },
    {
      country: 'New Zealand',
      flag: '🇳🇿',
      study: '6.0 – 6.5',
      work: '5.0 – 6.5',
      immigration: '5.5 – 6.5',
      notes: 'Skilled Migrant requires 6.5',
      color: 'bg-emerald-50 dark:bg-emerald-900/10',
    },
    {
      country: 'Germany',
      flag: '🇩🇪',
      study: '6.0 – 6.5',
      work: 'Varies',
      immigration: 'Not always required',
      notes: 'German language often preferred',
      color: 'bg-orange-50 dark:bg-orange-900/10',
    },
    {
      country: 'Ireland',
      flag: '🇮🇪',
      study: '6.0 – 6.5',
      work: '5.0 – 6.0',
      immigration: '5.5 – 6.0',
      notes: 'Critical Skills permit needs 6.0',
      color: 'bg-green-50 dark:bg-green-900/10',
    },
    {
      country: 'Netherlands',
      flag: '🇳🇱',
      study: '6.0 – 7.0',
      work: '5.5',
      immigration: '5.0',
      notes: 'Many programs taught in English',
      color: 'bg-orange-50 dark:bg-orange-900/10',
    },
    {
      country: 'UAE / Dubai',
      flag: '🇦🇪',
      study: '5.5 – 6.5',
      work: '5.0 – 6.0',
      immigration: 'Not required',
      notes: 'Work visa does not need IELTS',
      color: 'bg-amber-50 dark:bg-amber-900/10',
    },
    {
      country: 'Singapore',
      flag: '🇸🇬',
      study: '6.0 – 7.0',
      work: 'Not always required',
      immigration: 'Not always required',
      notes: 'English is an official language',
      color: 'bg-red-50 dark:bg-red-900/10',
    },
  ];

  const professionData = [
    { profession: 'Doctor / Physician', requirement: '7.0 – 7.5 (all bands)', notes: 'UK GMC requires 7.5 each band' },
    { profession: 'Nurse / Midwife', requirement: '7.0 overall', notes: 'UKVI IELTS for Life in the UK' },
    { profession: 'Teacher', requirement: '7.0 overall', notes: 'Some programs require 7.5' },
    { profession: 'Engineer', requirement: '6.0 – 7.0', notes: 'Depends on country and employer' },
    { profession: 'Accountant / Finance', requirement: '6.0 – 6.5', notes: 'CPA requirements vary by region' },
    { profession: 'IT / Software', requirement: '5.5 – 6.5', notes: 'Often flexible or waived' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">

      {/* Breadcrumb */}
      <nav className="text-sm text-slate-500 dark:text-slate-400 mb-4 flex flex-wrap gap-1 items-center">
        <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
        <span>/</span>
        <Link to="/ielts/ielts-writing-task-2-essay-types/" className="hover:text-blue-600 dark:hover:text-blue-400">IELTS</Link>
        <span>/</span>
        <span className="text-slate-700 dark:text-slate-300">IELTS Score Requirements by Country</span>
      </nav>

      <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
        Last updated: <strong>May 2026</strong>
      </p>

      <h1 className="text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100">
        Minimum IELTS Score Requirements by Country: 2026 Complete Guide
      </h1>

      {/* Featured Snippet */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-5 my-6 rounded-r-lg">
        <p className="font-bold text-slate-800 dark:text-slate-100 mb-2">Quick Answer</p>
        <p className="text-slate-700 dark:text-slate-300 text-[15px] leading-relaxed">
          The <strong>minimum IELTS score requirements by country</strong> vary by purpose. Canada requires band 6.0
          for immigration, Australia requires 6.0 for skilled visas, the UK requires 4.0 to 7.5 depending on the visa
          type, and the USA requires 6.0 to 7.5 for university admissions. Requirements differ for study, work, and
          immigration.
        </p>
      </div>

      <p className="text-slate-700 dark:text-slate-300 text-[15px] mb-4 leading-relaxed">
        Whether you are planning to <strong>study abroad, apply for a work permit, or immigrate</strong>, knowing the
        exact IELTS band score required for your target country is essential. This guide covers the 2026 minimum IELTS
        score requirements for the most popular destinations worldwide.
      </p>

      <p className="text-slate-700 dark:text-slate-300 text-[15px] mb-8 leading-relaxed">
        If you are still preparing for IELTS, start with our{' '}
        <Link to="/ielts-band-score-calculator/" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
          IELTS Band Score Calculator
        </Link>{' '}
        to estimate your current level, or explore how to{' '}
        <Link to="/ielts/why-stuck-at-6-5/" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
          break through band 6.5
        </Link>.
      </p>

      {/* ─── MAIN TABLE ─── */}
      <h2 className="text-2xl font-bold mt-10 mb-4 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-3">
        IELTS Score Requirements by Country: Full Table (2026)
      </h2>

      <div className="overflow-x-auto my-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-slate-800 text-white">
              <th className="px-4 py-3 text-left font-semibold">Country</th>
              <th className="px-4 py-3 text-left font-semibold">Study</th>
              <th className="px-4 py-3 text-left font-semibold">Work Permit</th>
              <th className="px-4 py-3 text-left font-semibold">Immigration</th>
              <th className="px-4 py-3 text-left font-semibold hidden sm:table-cell">Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            {countryData.map(({ country, flag, study, work, immigration, notes, color }) => (
              <tr key={country} className={`${color} transition-colors`}>
                <td className="px-4 py-3 font-semibold text-slate-800 dark:text-slate-100">
                  <span className="mr-2">{flag}</span>{country}
                </td>
                <td className="px-4 py-3 text-blue-700 dark:text-blue-400 font-medium">{study}</td>
                <td className="px-4 py-3 text-slate-700 dark:text-slate-300">{work}</td>
                <td className="px-4 py-3 text-slate-700 dark:text-slate-300">{immigration}</td>
                <td className="px-4 py-3 text-slate-500 dark:text-slate-400 text-xs hidden sm:table-cell">{notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 my-5 rounded-r-lg">
        <p className="font-semibold text-slate-800 dark:text-slate-100 mb-1">Important Note</p>
        <p className="text-slate-700 dark:text-slate-300 text-[14px]">
          Requirements change regularly. Always verify with the official immigration authority or university admission
          office before applying. The figures above reflect general 2026 benchmarks.
        </p>
      </div>

      {/* ─── CANADA ─── */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-3">
        What is the Minimum IELTS Score for Canada?
      </h2>

      <p className="text-slate-700 dark:text-slate-300 text-[15px] mb-4 leading-relaxed">
        Canada is one of the most popular destinations for IELTS test takers. Requirements differ by pathway:
      </p>

      <div className="space-y-3 my-5">
        {[
          { label: 'Express Entry (Federal Skilled Worker)', score: '6.0 overall', detail: 'All bands: CLB 7 equivalent. Higher scores = more CRS points.' },
          { label: 'Canadian Experience Class', score: '5.0 – 6.0', detail: 'Minimum CLB 5 for trades, CLB 7 for professional occupations.' },
          { label: 'Provincial Nominee Programs', score: '4.5 – 6.5', detail: 'Varies by province. Some provinces accept 4.5 for select streams.' },
          { label: 'Canadian Universities (undergraduate)', score: '6.0 – 6.5', detail: 'Most universities require 6.5 with no band below 6.0.' },
          { label: 'Canadian Universities (graduate/masters)', score: '6.5 – 7.0', detail: 'Competitive programs may require 7.0 or 7.5.' },
          { label: 'Work permit (LMIA-based)', score: '5.0 – 6.0', detail: 'Depends on NOC code and employer requirements.' },
        ].map(({ label, score, detail }) => (
          <div key={label} className="flex gap-4 items-start bg-slate-50 dark:bg-slate-800 rounded-lg p-3">
            <span className="flex-shrink-0 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">{score}</span>
            <div>
              <p className="font-semibold text-slate-800 dark:text-slate-100 text-[14px]">{label}</p>
              <p className="text-slate-600 dark:text-slate-400 text-[13px]">{detail}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ─── AUSTRALIA ─── */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-3">
        What IELTS Score Do I Need for Australia?
      </h2>

      <p className="text-slate-700 dark:text-slate-300 text-[15px] mb-4 leading-relaxed">
        Australia has some of the most detailed IELTS requirements, often specifying minimum scores for each individual
        band, not just the overall score.
      </p>

      <div className="overflow-x-auto my-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-yellow-600 text-white">
              <th className="px-4 py-3 text-left">Visa / Purpose</th>
              <th className="px-4 py-3 text-left">Overall</th>
              <th className="px-4 py-3 text-left">Min Per Band</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            {[
              ['Student Visa (Subclass 500)', '5.5 – 6.5', 'Varies by institution'],
              ['Skilled Independent (Subclass 189)', '6.0', 'No band below 5.0'],
              ['Employer Nominated (Subclass 186)', '6.0', 'No band below 5.0'],
              ['Nurse (AHPRA registration)', '7.0', 'No band below 7.0'],
              ['Teacher (AITSL registration)', '7.0', 'No band below 7.0'],
              ['Temporary Graduate (Subclass 485)', '5.0', 'No band below 4.5'],
            ].map(([visa, overall, band], i) => (
              <tr key={visa} className={i % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-yellow-50 dark:bg-yellow-900/10'}>
                <td className="px-4 py-3 text-slate-700 dark:text-slate-300">{visa}</td>
                <td className="px-4 py-3 font-bold text-yellow-700 dark:text-yellow-400">{overall}</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400 text-xs">{band}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ─── UK ─── */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-3">
        What is the IELTS Requirement for the UK?
      </h2>

      <p className="text-slate-700 dark:text-slate-300 text-[15px] mb-4 leading-relaxed">
        The UK uses IELTS for Life for immigration purposes (Skilled Worker, Student, Family visas). UKVI-approved
        IELTS tests are required for visa applications.
      </p>

      <div className="space-y-3 my-5">
        {[
          { label: 'Student Visa (universities)', score: '5.5 – 7.5', detail: 'Depends entirely on the institution. Russell Group universities typically require 6.5–7.0.' },
          { label: 'Skilled Worker Visa', score: '4.0 minimum', detail: 'The Home Office requires CLB B1 equivalent (IELTS 4.0 per skill).' },
          { label: 'Health and Care Worker Visa', score: '7.0 (no band < 6.5)', detail: 'NHS-employed roles require high scores, especially for clinical staff.' },
          { label: 'Innovator Founder Visa', score: '5.5', detail: 'B2 level English required.' },
          { label: 'Global Talent Visa', score: 'Flexible', detail: 'Endorsing body may waive language tests for exceptional talent.' },
        ].map(({ label, score, detail }) => (
          <div key={label} className="flex gap-4 items-start bg-slate-50 dark:bg-slate-800 rounded-lg p-3">
            <span className="flex-shrink-0 bg-blue-700 text-white text-xs font-bold px-2 py-1 rounded-full">{score}</span>
            <div>
              <p className="font-semibold text-slate-800 dark:text-slate-100 text-[14px]">{label}</p>
              <p className="text-slate-600 dark:text-slate-400 text-[13px]">{detail}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ─── USA ─── */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-3">
        Do I Need IELTS for USA Universities?
      </h2>

      <p className="text-slate-700 dark:text-slate-300 text-[15px] mb-4 leading-relaxed">
        The USA does not require IELTS for a student visa, but most universities require proof of English proficiency.
        Both IELTS and{' '}
        <Link to="/toefl/strategy-success/toefl-ibt-vs-toefl-ltp/" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
          TOEFL iBT
        </Link>{' '}
        are widely accepted.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-5">
        {[
          { type: 'Community Colleges', range: '5.5 – 6.0', color: 'border-slate-300' },
          { type: 'State Universities (UG)', range: '6.0 – 6.5', color: 'border-blue-400' },
          { type: 'Selective Universities (UG)', range: '6.5 – 7.0', color: 'border-blue-600' },
          { type: 'Graduate / Master\'s Programs', range: '6.5 – 7.5', color: 'border-indigo-600' },
          { type: 'Ivy League / Top 20', range: '7.0 – 8.0', color: 'border-violet-600' },
          { type: 'PhD Programs', range: '7.0+', color: 'border-purple-600' },
        ].map(({ type, range, color }) => (
          <div key={type} className={`border-l-4 ${color} bg-white dark:bg-slate-800 pl-4 py-3 rounded-r-lg shadow-sm`}>
            <p className="text-slate-600 dark:text-slate-400 text-xs uppercase tracking-wide mb-0.5">{type}</p>
            <p className="font-bold text-blue-700 dark:text-blue-400 text-lg">{range}</p>
          </div>
        ))}
      </div>

      {/* ─── BY PROFESSION ─── */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-3">
        IELTS Requirements by Profession
      </h2>

      <p className="text-slate-700 dark:text-slate-300 text-[15px] mb-4 leading-relaxed">
        Some regulated professions require specific IELTS band scores regardless of the country.
      </p>

      <div className="overflow-x-auto my-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-slate-700 text-white">
              <th className="px-4 py-3 text-left">Profession</th>
              <th className="px-4 py-3 text-left">Typical Requirement</th>
              <th className="px-4 py-3 text-left">Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            {professionData.map(({ profession, requirement, notes }, i) => (
              <tr key={profession} className={i % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-slate-50 dark:bg-slate-700/50'}>
                <td className="px-4 py-3 font-semibold text-slate-800 dark:text-slate-100">{profession}</td>
                <td className="px-4 py-3 text-emerald-700 dark:text-emerald-400 font-medium">{requirement}</td>
                <td className="px-4 py-3 text-slate-500 dark:text-slate-400 text-xs">{notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ─── WHAT IS A GOOD SCORE ─── */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-3">
        What is a Good IELTS Score for Immigration?
      </h2>

      <p className="text-slate-700 dark:text-slate-300 text-[15px] mb-4 leading-relaxed">
        A "good" IELTS score depends entirely on your goal and destination. Here is a practical framework:
      </p>

      <div className="space-y-3 my-5">
        {[
          { band: '5.0 – 5.5', label: 'Meets minimum for some work visas and foundation programs', color: 'bg-slate-500' },
          { band: '6.0', label: 'Qualifies for most immigration streams (Canada, Australia) and undergraduate admission', color: 'bg-blue-500' },
          { band: '6.5', label: 'Strong for most university programs and competitive immigration points', color: 'bg-blue-600' },
          { band: '7.0', label: 'Required for regulated professions (nursing, teaching) and top universities', color: 'bg-indigo-600' },
          { band: '7.5 – 8.0', label: 'Required for medical professionals and elite programs (Oxford, Cambridge, Harvard)', color: 'bg-violet-600' },
          { band: '8.5 – 9.0', label: 'Near-native proficiency. Rarely required but highly competitive', color: 'bg-emerald-600' },
        ].map(({ band, label, color }) => (
          <div key={band} className="flex gap-4 items-start">
            <span className={`flex-shrink-0 ${color} text-white font-bold text-sm px-2.5 py-1 rounded-full`}>{band}</span>
            <p className="text-slate-700 dark:text-slate-300 text-[15px]">{label}</p>
          </div>
        ))}
      </div>

      {/* Pro Tips */}
      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-5 my-8 rounded-r-lg">
        <p className="font-bold text-slate-800 dark:text-slate-100 mb-3">Pro Tips for Ranking Higher in Immigration Points</p>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-[14px]">
          <li>✓ <strong>Canada (Express Entry)</strong>: Aim for CLB 9 (IELTS 7.0) to maximize your CRS score.</li>
          <li>✓ <strong>Australia (SkillSelect)</strong>: A score of 8.0 in all bands adds extra invitation points.</li>
          <li>✓ <strong>UK</strong>: Use IELTS for UKVI (not Academic or General Training) for visa applications.</li>
          <li>✓ Always check if <strong>IELTS Academic</strong> or <strong>IELTS General Training</strong> is required — they serve different purposes.</li>
        </ul>
      </div>

      {/* Internal links */}
      <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5 my-6">
        <p className="font-bold text-slate-800 dark:text-slate-100 mb-3">Related IELTS Guides</p>
        <ul className="space-y-2">
          {[
            { to: '/ielts/countries-without-ielts/', label: 'Countries You Can Go to Without IELTS' },
            { to: '/ielts-band-score-calculator/', label: 'IELTS Band Score Calculator' },
            { to: '/ielts/is-7-5-ielts-score-good-enough/', label: 'Is 7.5 a Good IELTS Score?' },
            { to: '/ielts/why-stuck-at-6-5/', label: 'Why Am I Stuck at Band 6.5?' },
            { to: '/ielts/is-ielts-getting-harder-2026/', label: 'Is IELTS Getting Harder in 2026?' },
            { to: '/toefl/strategy-success/toefl-ibt-vs-toefl-ltp/', label: 'TOEFL iBT vs TOEFL LTP (IELTS Alternative)' },
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
            q: 'What is the minimum IELTS score for Canada?',
            a: 'For Canadian immigration (Express Entry), the minimum IELTS score is typically band 6.0 overall. For Canadian universities, most require band 6.5 overall, while top programs may require 7.0 or higher. Work permit streams may accept 5.0 to 6.0 depending on the job category.',
          },
          {
            q: 'What IELTS score do I need for Australia?',
            a: 'Australia requires IELTS 6.0 overall for most skilled migration visas, with no band below 5.0. For university admission, most institutions require 6.0 to 6.5. For nursing and teaching professions, 7.0 overall is required with no band below 7.0.',
          },
          {
            q: 'What is the IELTS requirement for the UK?',
            a: 'For a UK Student Visa, you need IELTS 5.5 to 6.5 depending on the institution. For a Skilled Worker Visa, the minimum is typically IELTS 4.0. Top UK universities like Oxford and Cambridge require 7.0 to 7.5 overall.',
          },
          {
            q: 'Do I need IELTS for USA universities?',
            a: 'US universities typically accept TOEFL iBT instead of IELTS, but most also accept IELTS. The typical requirement is IELTS 6.0 to 7.0 for undergraduate programs and 6.5 to 7.5 for graduate programs.',
          },
          {
            q: 'What IELTS score is needed for Germany?',
            a: 'For Germany, most public universities require IELTS 6.0 to 6.5 for English-taught programs. German language proficiency is often preferred for work and immigration visas, but English-taught master\'s programs typically ask for 6.5.',
          },
          {
            q: 'What is a good IELTS score for immigration?',
            a: 'A good IELTS score for immigration depends on the country. Canada requires 6.0, Australia requires 6.0, the UK requires 4.0 to 5.5, and New Zealand requires 5.5 to 6.5 depending on the visa type. A band 7.0 or above is considered strong for most immigration pathways.',
          },
          {
            q: 'Is IELTS 6.0 good enough for Canada?',
            a: 'IELTS 6.0 overall meets the minimum threshold for many Canadian immigration streams including Express Entry. However, scoring higher (7.0+) gives you more CRS points, improving your chances of receiving an invitation to apply.',
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
        <p className="font-bold text-lg mb-3">Summary</p>
        <p className="text-slate-200 text-[15px] leading-relaxed">
          IELTS score requirements vary by country, visa type, and profession. Canada and Australia require a minimum
          of 6.0 for immigration, the UK requires 4.0 to 7.5 depending on the visa, and US universities typically
          require 6.0 to 7.5. Regulated professions like nursing and medicine often require 7.0 or higher. Always aim
          for at least 0.5 above the minimum to protect your application.
        </p>
      </div>

    </div>
  );
};

export default IELTSScoreRequirementsPage;
