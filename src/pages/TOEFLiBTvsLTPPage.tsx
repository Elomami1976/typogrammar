import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading } from '../components/ArticleComponents';

const TOEFLiBTvsLTPPage: React.FC = () => {
  usePageMetadata({
    title: 'TOEFL iBT vs TOEFL LTP: Differences, Scores, Format, Which Test to Take | TypoGrammar',
    description:
      'Discover the difference between TOEFL iBT and TOEFL LTP, including format, scoring, difficulty, and acceptance. Learn which TOEFL test you should take.',
  });

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://typogrammar.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'TOEFL',
        item: 'https://typogrammar.com/toefl',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'TOEFL Strategy & Success',
        item: 'https://typogrammar.com/toefl/strategy-success',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'TOEFL iBT vs TOEFL LTP',
        item: 'https://typogrammar.com/toefl/strategy-success/toefl-ibt-vs-toefl-ltp',
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'TOEFL iBT vs TOEFL LTP: Differences, Scores, Format, Which Test to Take',
    description:
      'Discover the difference between TOEFL iBT and TOEFL LTP, including format, scoring, difficulty, and acceptance. Learn which TOEFL test you should take.',
    datePublished: '2026-05-05',
    dateModified: '2026-05-05',
    author: { '@type': 'Organization', name: 'TypoGrammar' },
    publisher: {
      '@type': 'Organization',
      name: 'TypoGrammar',
      url: 'https://typogrammar.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://typogrammar.com/toefl/strategy-success/toefl-ibt-vs-toefl-ltp',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the difference between TOEFL iBT and TOEFL LTP?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TOEFL iBT is a global English proficiency test that measures four skills (reading, listening, speaking, writing), while TOEFL LTP is a local institutional test that measures reading, listening, and grammar only. TOEFL iBT is accepted worldwide for university admissions; TOEFL LTP is not.',
        },
      },
      {
        '@type': 'Question',
        name: 'Has TOEFL iBT scoring changed recently?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, TOEFL iBT scoring has not changed. The test format became shorter, but the score range remains 0 to 120.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is TOEFL LTP accepted internationally?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, TOEFL LTP is not accepted by universities or immigration authorities internationally.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which is harder, TOEFL iBT or TOEFL LTP?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TOEFL iBT is harder because it includes speaking and writing sections, which require active language production. TOEFL LTP only tests recognition skills.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I study abroad with TOEFL LTP?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. You need TOEFL iBT for studying abroad. TOEFL LTP is only used for internal institutional purposes.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is TOEFL LTP useful?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, TOEFL LTP is useful for practice and internal placement tests within schools and organizations.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long is TOEFL iBT valid?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TOEFL iBT scores are valid for 2 years from your test date.',
        },
      },
    ],
  };

  useEffect(() => {
    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.text = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(breadcrumbScript);

    const articleScript = document.createElement('script');
    articleScript.type = 'application/ld+json';
    articleScript.text = JSON.stringify(articleSchema);
    document.head.appendChild(articleScript);

    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.text = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    return () => {
      document.head.removeChild(breadcrumbScript);
      document.head.removeChild(articleScript);
      document.head.removeChild(faqScript);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">

      {/* Breadcrumb */}
      <nav className="text-sm text-slate-500 dark:text-slate-400 mb-4 flex flex-wrap gap-1 items-center">
        <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
        <span>/</span>
        <Link to="/toefl/" className="hover:text-blue-600 dark:hover:text-blue-400">TOEFL</Link>
        <span>/</span>
        <Link to="/toefl/strategy-success/" className="hover:text-blue-600 dark:hover:text-blue-400">Strategy &amp; Success</Link>
        <span>/</span>
        <span className="text-slate-700 dark:text-slate-300">TOEFL iBT vs TOEFL LTP</span>
      </nav>

      {/* Last updated */}
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
        Last updated: <strong>May 2026</strong>
      </p>

      <h1 className="text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100">
        What Is the Difference Between TOEFL iBT and TOEFL LTP?
      </h1>

      {/* Featured Snippet Box */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-5 my-6 rounded-r-lg">
        <p className="font-bold text-slate-800 dark:text-slate-100 mb-2 text-base">Quick Answer</p>
        <p className="text-slate-700 dark:text-slate-300 text-[15px] leading-relaxed">
          The <strong>difference between TOEFL iBT and TOEFL LTP</strong> is that TOEFL iBT is an internationally
          accepted internet-based test that measures reading, listening, speaking, and writing skills, while TOEFL LTP
          is a paper-based institutional test that measures reading, listening, and grammar and is{' '}
          <strong>not accepted for university admissions abroad</strong>.
        </p>
      </div>

      <ArticleParagraph>
        If you are preparing for the TOEFL exam, you may see two versions: TOEFL iBT and TOEFL LTP. These tests serve
        different purposes, and choosing the wrong one can affect your academic or career plans.
      </ArticleParagraph>

      <ArticleParagraph>
        This guide explains the <strong>difference between TOEFL iBT and TOEFL LTP</strong>, including format, scoring,
        purpose, and which test you should take.
      </ArticleParagraph>

      {/* ─── WHAT IS TOEFL iBT ─── */}
      <ArticleHeading>What Is TOEFL iBT?</ArticleHeading>

      <ArticleParagraph>
        TOEFL iBT (Internet-Based Test) is the official TOEFL exam used worldwide for academic, immigration, and
        professional purposes. It evaluates four core English skills:
      </ArticleParagraph>

      <ul className="list-none space-y-2 my-4 pl-2">
        {['Reading', 'Listening', 'Speaking', 'Writing'].map((skill) => (
          <li key={skill} className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-[15px]">
            <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
            {skill}
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-3 text-slate-800 dark:text-slate-200">Key Facts About TOEFL iBT</h3>

      <div className="space-y-2 my-4">
        {[
          'Accepted by universities worldwide',
          'Conducted online (internet-based)',
          'Includes speaking and writing tasks',
          'Score range: 0 to 120',
          'Valid for 2 years',
        ].map((fact) => (
          <div key={fact} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-[15px]">
            <span className="text-green-500 font-bold flex-shrink-0">✓</span>
            <span>{fact}</span>
          </div>
        ))}
      </div>

      {/* Important Update callout */}
      <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-5 my-6 rounded-r-lg">
        <p className="font-bold text-slate-800 dark:text-slate-100 mb-2">Important Update About TOEFL iBT</p>
        <p className="text-slate-700 dark:text-slate-300 text-[15px]">
          Although the TOEFL iBT test format has been updated to be shorter and more efficient, the scoring system
          remains unchanged, with a total score ranging from <strong>0 to 120</strong>. For the latest scoring details,
          see our guide on{' '}
          <Link
            to="/toefl/strategy-success/toefl-2026-scoring/"
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            TOEFL 2026 Scoring System
          </Link>.
        </p>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 text-slate-800 dark:text-slate-200">When to Choose TOEFL iBT</h3>
      <ArticleParagraph>Choose TOEFL iBT if you plan to:</ArticleParagraph>
      <div className="space-y-2 my-4">
        {[
          'Study abroad',
          'Apply for scholarships',
          'Apply for visas',
          'Work in international environments',
        ].map((item) => (
          <div key={item} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-[15px]">
            <span className="text-blue-500 font-bold flex-shrink-0">→</span>
            <span>{item}</span>
          </div>
        ))}
      </div>

      {/* ─── WHAT IS TOEFL LTP ─── */}
      <ArticleHeading>What Is TOEFL LTP?</ArticleHeading>

      <ArticleParagraph>
        TOEFL LTP (Language Testing Program, also known as the Institutional Testing Program) is a paper-based test
        used by schools and organizations for internal evaluation. It focuses on three areas:
      </ArticleParagraph>

      <ul className="list-none space-y-2 my-4 pl-2">
        {['Reading', 'Listening', 'Structure and Grammar'].map((skill) => (
          <li key={skill} className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-[15px]">
            <span className="w-2 h-2 rounded-full bg-slate-500 flex-shrink-0" />
            {skill}
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-3 text-slate-800 dark:text-slate-200">Key Facts About TOEFL LTP</h3>

      <div className="space-y-2 my-4">
        {[
          'Not accepted internationally for admissions',
          'Paper-based format',
          'Does not include speaking or writing',
          'Score range: 310 to 677',
        ].map((fact) => (
          <div key={fact} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-[15px]">
            <span className="text-slate-400 font-bold flex-shrink-0">✓</span>
            <span>{fact}</span>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 text-slate-800 dark:text-slate-200">When to Choose TOEFL LTP</h3>
      <ArticleParagraph>Choose TOEFL LTP if you:</ArticleParagraph>
      <div className="space-y-2 my-4">
        {[
          'Need a placement test at your institution',
          'Want to assess your current English level',
          'Are preparing before taking the TOEFL iBT',
        ].map((item) => (
          <div key={item} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-[15px]">
            <span className="text-slate-500 font-bold flex-shrink-0">→</span>
            <span>{item}</span>
          </div>
        ))}
      </div>

      {/* ─── KEY DIFFERENCES ─── */}
      <ArticleHeading>TOEFL iBT vs TOEFL LTP: Key Differences</ArticleHeading>

      <div className="space-y-4 my-6">
        {[
          {
            category: 'Purpose',
            ibt: 'International certification for universities, visas, and employment',
            ltp: 'Internal assessment for schools and organizations',
            color: 'border-blue-500 bg-blue-50 dark:bg-blue-900/20',
          },
          {
            category: 'Skills Tested',
            ibt: '4 skills: Reading, Listening, Speaking, Writing',
            ltp: '3 skills: Reading, Listening, Structure & Grammar',
            color: 'border-violet-500 bg-violet-50 dark:bg-violet-900/20',
          },
          {
            category: 'Format',
            ibt: 'Internet-based (online)',
            ltp: 'Paper-based',
            color: 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20',
          },
          {
            category: 'Acceptance',
            ibt: 'Globally accepted by universities, embassies, employers',
            ltp: 'Not accepted for international admissions or immigration',
            color: 'border-amber-500 bg-amber-50 dark:bg-amber-900/20',
          },
          {
            category: 'Difficulty',
            ibt: 'More advanced and comprehensive',
            ltp: 'Easier and more limited in scope',
            color: 'border-red-500 bg-red-50 dark:bg-red-900/20',
          },
        ].map(({ category, ibt, ltp, color }) => (
          <div key={category} className={`border-l-4 ${color} p-5 rounded-r-lg`}>
            <p className="font-bold text-slate-800 dark:text-slate-100 mb-3 text-sm uppercase tracking-wide">
              {category}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-2 py-0.5 rounded mb-1">
                  TOEFL iBT
                </span>
                <p className="text-slate-700 dark:text-slate-300 text-[15px]">{ibt}</p>
              </div>
              <div>
                <span className="inline-block bg-slate-500 text-white text-xs font-semibold px-2 py-0.5 rounded mb-1">
                  TOEFL LTP
                </span>
                <p className="text-slate-700 dark:text-slate-300 text-[15px]">{ltp}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ─── SCORE COMPARISON TABLE ─── */}
      <ArticleHeading>TOEFL iBT vs TOEFL LTP: Score Comparison</ArticleHeading>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse rounded-lg overflow-hidden shadow-sm">
          <thead>
            <tr className="bg-slate-700 text-white">
              <th className="px-4 py-3 text-left font-semibold">Feature</th>
              <th className="px-4 py-3 text-left font-semibold">TOEFL iBT</th>
              <th className="px-4 py-3 text-left font-semibold">TOEFL LTP</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            {[
              ['Score Range', '0 to 120', '310 to 677', 'bg-white dark:bg-slate-800'],
              ['Section Scores', '0 to 30 each', 'Combined scaled score', 'bg-slate-50 dark:bg-slate-700/50'],
              ['Skills Count', '4 sections', '3 sections', 'bg-white dark:bg-slate-800'],
              ['Score Validity', '2 years', 'Depends on institution', 'bg-slate-50 dark:bg-slate-700/50'],
            ].map(([feature, ibt, ltp, rowClass]) => (
              <tr key={feature} className={rowClass}>
                <td className="px-4 py-3 font-semibold text-slate-700 dark:text-slate-300">{feature}</td>
                <td className="px-4 py-3 text-blue-700 dark:text-blue-400 font-medium">{ibt}</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400">{ltp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ─── WHICH TEST SHOULD YOU TAKE ─── */}
      <ArticleHeading>Which Test Should You Take?</ArticleHeading>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">TOEFL iBT</span>
          </div>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2 text-[15px]">
            Take TOEFL iBT if your goal is:
          </p>
          <ul className="space-y-1.5 text-slate-700 dark:text-slate-300 text-[14px]">
            <li>✓ International study or university admissions</li>
            <li>✓ Visa applications and immigration</li>
            <li>✓ International employment</li>
            <li>✓ Scholarships and fellowships</li>
          </ul>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-slate-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">TOEFL LTP</span>
          </div>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2 text-[15px]">
            Take TOEFL LTP if your goal is:
          </p>
          <ul className="space-y-1.5 text-slate-700 dark:text-slate-300 text-[14px]">
            <li>✓ Practice before taking TOEFL iBT</li>
            <li>✓ Internal placement testing</li>
            <li>✓ Assessing your current level</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-5 rounded-r-lg">
        <p className="font-semibold text-slate-800 dark:text-slate-100 mb-1">Pro Tip</p>
        <p className="text-slate-700 dark:text-slate-300 text-[15px]">
          If you are unsure which test to take, <strong>TOEFL iBT is the better choice</strong> because it is widely
          accepted and opens doors that TOEFL LTP cannot.
        </p>
      </div>

      {/* ─── IS TOEFL LTP EASIER ─── */}
      <ArticleHeading>Is TOEFL LTP Easier Than TOEFL iBT?</ArticleHeading>

      <ArticleParagraph>
        Yes, TOEFL LTP is generally easier because it does not include speaking or writing. It focuses on recognition
        skills rather than active language production. You are only required to read, listen, and identify correct
        grammar, not produce spoken or written responses.
      </ArticleParagraph>

      <ArticleParagraph>
        However, this also makes TOEFL LTP less valuable for academic and professional purposes. Easier does not mean
        more useful.
      </ArticleParagraph>

      {/* ─── CAN TOEFL LTP REPLACE iBT ─── */}
      <ArticleHeading>Can TOEFL LTP Replace TOEFL iBT?</ArticleHeading>

      <ArticleParagraph>
        No. TOEFL LTP cannot replace TOEFL iBT for any of the following:
      </ArticleParagraph>

      <div className="space-y-2 my-4">
        {[
          'University admissions',
          'Immigration and visa applications',
          'Scholarships',
          'International job applications',
        ].map((item) => (
          <div key={item} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-[15px]">
            <span className="text-red-500 font-bold flex-shrink-0">✗</span>
            <span>{item}</span>
          </div>
        ))}
      </div>

      <ArticleParagraph>
        If you need any of the above, you must take TOEFL iBT. TOEFL LTP is not a recognized substitute in any
        international context.
      </ArticleParagraph>

      {/* ─── HOW TO PREPARE ─── */}
      <ArticleHeading>How to Prepare for TOEFL iBT and TOEFL LTP</ArticleHeading>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-xl p-5">
          <p className="font-bold text-slate-800 dark:text-slate-100 mb-3">TOEFL iBT Preparation Tips</p>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-[14px]">
            <li className="flex gap-2"><span className="text-blue-500">→</span> Practice speaking regularly with timed responses</li>
            <li className="flex gap-2"><span className="text-blue-500">→</span> Improve academic writing with structured essays</li>
            <li className="flex gap-2"><span className="text-blue-500">→</span> Take full-length mock tests under timed conditions</li>
            <li className="flex gap-2"><span className="text-blue-500">→</span> Build academic vocabulary systematically</li>
          </ul>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5">
          <p className="font-bold text-slate-800 dark:text-slate-100 mb-3">TOEFL LTP Preparation Tips</p>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-[14px]">
            <li className="flex gap-2"><span className="text-slate-500">→</span> Focus on grammar rules and structure</li>
            <li className="flex gap-2"><span className="text-slate-500">→</span> Practice reading academic passages</li>
            <li className="flex gap-2"><span className="text-slate-500">→</span> Improve listening accuracy with academic audio</li>
          </ul>
        </div>
      </div>

      {/* Internal links to TOEFL preparation content */}
      <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5 my-6">
        <p className="font-bold text-slate-800 dark:text-slate-100 mb-3">Related TOEFL Preparation Guides</p>
        <ul className="space-y-2">
          {[
            { to: '/toefl/toefl-reading/toefl-reading-strategies/', label: 'TOEFL Reading Strategies' },
            { to: '/toefl/toefl-reading/toefl-reading-question-types/', label: 'TOEFL Reading Question Types' },
            { to: '/toefl/toefl-writing/toefl-writing-task-1-explained/', label: 'TOEFL Writing Task 1 Explained' },
            { to: '/toefl/toefl-writing/toefl-writing-task-2-explained/', label: 'TOEFL Writing Task 2 Explained' },
            { to: '/toefl/strategy-success/old-toefl-vs-new-toefl/', label: 'Old TOEFL vs New TOEFL 2026' },
            { to: '/toefl/strategy-success/toefl-2026-scoring/', label: 'TOEFL 2026 Scoring System' },
          ].map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className="text-blue-600 dark:text-blue-400 hover:underline text-[15px] font-medium"
              >
                → {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* ─── FAQ SECTION ─── */}
      <ArticleHeading>Frequently Asked Questions</ArticleHeading>

      <div className="space-y-5 my-6">
        {[
          {
            q: 'What is the difference between TOEFL iBT and TOEFL LTP?',
            a: 'TOEFL iBT is a global English proficiency test that measures four skills (reading, listening, speaking, writing), while TOEFL LTP is a local institutional test that measures reading, listening, and grammar only. TOEFL iBT is accepted worldwide for university admissions; TOEFL LTP is not.',
          },
          {
            q: 'Has TOEFL iBT scoring changed recently?',
            a: 'No, TOEFL iBT scoring has not changed. The test format became shorter and more efficient, but the score range remains 0 to 120.',
          },
          {
            q: 'Is TOEFL LTP accepted internationally?',
            a: 'No, TOEFL LTP is not accepted by universities or immigration authorities internationally.',
          },
          {
            q: 'Which is harder, TOEFL iBT or TOEFL LTP?',
            a: 'TOEFL iBT is harder because it includes speaking and writing sections, which require active language production. TOEFL LTP only tests recognition skills.',
          },
          {
            q: 'Can I study abroad with TOEFL LTP?',
            a: 'No. You need TOEFL iBT for studying abroad. TOEFL LTP is only used for internal institutional purposes.',
          },
          {
            q: 'Is TOEFL LTP useful?',
            a: 'Yes, TOEFL LTP is useful for practice and internal placement tests within schools and organizations.',
          },
          {
            q: 'How long is TOEFL iBT valid?',
            a: 'TOEFL iBT scores are valid for 2 years from your test date.',
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

      {/* ─── FINAL ANSWER ─── */}
      <div className="bg-slate-900 dark:bg-slate-700 text-white rounded-xl p-6 my-8">
        <p className="font-bold text-lg mb-3">Final Answer</p>
        <p className="text-slate-200 text-[15px] leading-relaxed">
          TOEFL iBT is the official, globally accepted English test required for studying abroad, working
          internationally, and immigration, while TOEFL LTP is a limited, paper-based test used only for internal
          evaluation and practice. Both tests still use their original scoring systems. If your goal is academic or
          professional success on the world stage, <strong>TOEFL iBT is the only choice</strong>.
        </p>
      </div>

    </div>
  );
};

export default TOEFLiBTvsLTPPage;
