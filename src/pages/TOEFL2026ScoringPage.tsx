
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading, BulletList } from '../components/ArticleComponents';

const TOEFL2026ScoringPage: React.FC = () => {
  usePageMetadata({
    title: 'TOEFL 2026 Scoring System: The 1.0-6.0 Scale Explained (With Conversion Table) | TypoGrammar',
    description:
      'Learn how the new TOEFL 2026 scoring system works. Understand the 1.0-6.0 band scale, CEFR alignment, score conversion table, and what universities require in 2026.',
  });

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is the new TOEFL 2026 scoring system the same as IELTS?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not exactly, though they are more comparable now than before. Both IELTS and the new TOEFL use a band-based scale with half-point increments, and both align to CEFR levels. However, IELTS uses a 1-9 scale, while TOEFL now uses 1-6. A TOEFL 5.0 is broadly comparable to an IELTS 7.0-7.5, but the tests assess English proficiency differently. You cannot directly substitute one score for the other without checking institutional policies.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will universities accept the new TOEFL 2026 scoring system?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. ETS coordinated the rollout of the new system with universities and testing stakeholders. All institutions that previously accepted TOEFL scores accept the new 1.0-6.0 band scores. During the 2026-2028 transition period, your score report includes both the new band score and the old 0-120 score for reference.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I convert my old TOEFL score to the new 2026 scale?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Find your old 0-120 score and use the conversion table: 114-120 = 6.0 (C2), 107-113 = 5.5 (C1-C2), 95-106 = 5.0 (C1), 86-94 = 4.5 (B2-C1), 72-85 = 4.0 (B2), 58-71 = 3.5 (B1), 44-57 = 3.0 (B1). For example, an old score of 100 corresponds to approximately a 5.0 band (C1 Advanced).',
        },
      },
      {
        '@type': 'Question',
        name: 'Do all four TOEFL sections need to meet a minimum score?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It depends on the institution. Many universities only set an overall band minimum. However, competitive graduate programs, especially in medicine, law, and education, often set section-level minimums (for example, a minimum of 4.0 in Speaking and Writing). Always check your specific program\'s requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I still use a TOEFL score from before 2026 for applications?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TOEFL scores are valid for two years from your test date. If you tested in 2024 or 2025, your old-format score (0-120) remains valid through 2026 or 2027 respectively. Universities accepting TOEFL scores will accept valid old-format scores during the transition period, since score reports now include the conversion.',
        },
      },
      {
        '@type': 'Question',
        name: 'How soon will I receive my TOEFL 2026 scores after the test?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Under the new system, most test takers receive their official TOEFL score report within approximately 72 hours of completing the exam. This is a significant improvement from the previous 4 to 8 business day wait.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is a good TOEFL score in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A good TOEFL 2026 score depends on your target institution: 5.5-6.0 for top 20 universities, 4.5-5.0 for most graduate programs, 4.0-4.5 for most undergraduate programs, and 3.5-4.0 for community colleges. The practical answer: aim for at least 0.5 band above your target institution\'s minimum requirement.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is the TOEFL 2026 overall score calculated?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Your overall TOEFL 2026 score is the average of your four section scores (Reading, Listening, Speaking, Writing), each scored on the 1.0-6.0 scale, rounded to the nearest half band. For example: Reading 5.0 + Listening 4.5 + Speaking 4.0 + Writing 4.5 = 18.0 ÷ 4 = 4.5 overall.',
        },
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'TOEFL 2026 Scoring System: The 1.0-6.0 Scale Explained (With Conversion Table)',
    description:
      'Learn how the new TOEFL 2026 scoring system works. Understand the 1.0-6.0 band scale, CEFR alignment, score conversion table, and what universities require in 2026.',
    datePublished: '2026-04-04',
    dateModified: '2026-04-04',
    author: { '@type': 'Organization', name: 'TypoGrammar' },
    publisher: {
      '@type': 'Organization',
      name: 'TypoGrammar',
      url: 'https://typogrammar.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://typogrammar.com/toefl/strategy-success/toefl-2026-scoring',
    },
  };

  useEffect(() => {
    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.text = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    const articleScript = document.createElement('script');
    articleScript.type = 'application/ld+json';
    articleScript.text = JSON.stringify(articleSchema);
    document.head.appendChild(articleScript);

    return () => {
      document.head.removeChild(faqScript);
      document.head.removeChild(articleScript);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">

      {/* Last updated */}
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
        Last updated: <strong>April 2026</strong>, All information reflects the TOEFL iBT format in effect as of January 21, 2026.
      </p>

      <h1 className="text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100">
        TOEFL 2026 Scoring System: The 1.0-6.0 Scale Explained (With Conversion Table)
      </h1>

      {/* Key Takeaways, featured snippet optimized */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-5 my-6 rounded-r-lg">
        <p className="font-bold text-slate-800 dark:text-slate-100 mb-3 text-lg">Key Takeaways</p>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-[15px]">
          <li>✅ As of January 2026, TOEFL iBT uses a <strong>new 1.0-6.0 band scale</strong> instead of the old 0-120 point scale.</li>
          <li>✅ Four sections (Reading, Listening, Speaking, Writing), each scored <strong>1.0 to 6.0</strong>.</li>
          <li>✅ Your <strong>overall TOEFL 2026 score</strong> is the average of the four section scores, rounded to the nearest half band.</li>
          <li>✅ The new scale <strong>aligns directly with CEFR levels</strong> (A1 through C2).</li>
          <li>✅ Score reports show <strong>both old and new scales</strong> during the 2026-2028 transition period.</li>
          <li>✅ Most universities now require a band score between <strong>4.0 and 5.5</strong>, depending on the program.</li>
          <li>✅ Score results are delivered in approximately <strong>72 hours</strong>.</li>
        </ul>
      </div>

      {/* ─── INTRODUCTION ─── */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-3">
        Introduction: TOEFL Gets a New Scoring System in 2026
      </h2>

      <ArticleParagraph>
        If you are preparing for the TOEFL iBT, you need to know about the biggest change to come to the exam in decades.
        As of January 2026, ETS replaced the familiar 0-120 TOEFL scoring scale with a new{' '}
        <strong>1.0-6.0 band system</strong>, and understanding <strong>TOEFL 2026 scoring</strong> is now essential
        for every test taker.
      </ArticleParagraph>

      <ArticleParagraph>
        Why the change? ETS designed the new scale to make TOEFL scores easier to interpret, easier to compare
        internationally, and directly aligned with the globally recognized{' '}
        <strong>Common European Framework of Reference for Languages (CEFR)</strong>. For students, this means your
        TOEFL score now tells universities and employers not just a number, but a clear English proficiency level.
      </ArticleParagraph>

      <ArticleParagraph>
        This guide explains everything you need to know: how the new scale works, a full score conversion table, what
        universities expect, and practical tips for maximizing your score. Whether you have never taken the TOEFL before
        or you are converting an older score, this article has you covered.
      </ArticleParagraph>

      {/* ─── HOW THE SCALE WORKS ─── */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-3">
        How the New TOEFL 1.0-6.0 Scale Works
      </h2>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-800 dark:text-slate-200">The Band Increments</h3>
      <ArticleParagraph>
        The new scale runs from <strong>1.0 to 6.0 in half-point increments</strong>, giving 11 possible score points:
      </ArticleParagraph>

      <div className="flex flex-wrap gap-2 my-4">
        {['1.0', '1.5', '2.0', '2.5', '3.0', '3.5', '4.0', '4.5', '5.0', '5.5', '6.0'].map((band) => (
          <span
            key={band}
            className="px-3 py-1.5 bg-blue-600 text-white rounded-full font-bold text-sm"
          >
            {band}
          </span>
        ))}
      </div>

      <ArticleParagraph>
        Each band represents a meaningful step up in English proficiency, making the score more descriptive and less
        arbitrary than a number like 87 or 103 on the old scale.
      </ArticleParagraph>

      <h3 className="text-xl font-semibold mt-8 mb-3 text-slate-800 dark:text-slate-200">How Your Overall Score Is Calculated</h3>
      <ArticleParagraph>
        The TOEFL iBT still tests four skills: Reading, Listening, Speaking, and Writing. Each section is scored
        independently on the 1.0-6.0 scale. Your <strong>overall score is simply the average of those four section
        scores</strong>, rounded to the nearest half band.
      </ArticleParagraph>

      {/* Score calculation example */}
      <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5 my-6">
        <p className="font-semibold text-slate-700 dark:text-slate-300 mb-3 text-sm uppercase tracking-wide">Example Score Calculation</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-slate-700 text-white">
                <th className="px-4 py-3 text-left font-semibold">Section</th>
                <th className="px-4 py-3 text-left font-semibold">Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {[
                ['Reading', '5.0'],
                ['Listening', '4.5'],
                ['Speaking', '4.0'],
                ['Writing', '4.5'],
              ].map(([section, score], i) => (
                <tr key={section} className={i % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-slate-50 dark:bg-slate-700/50'}>
                  <td className="px-4 py-3 text-slate-700 dark:text-slate-300">{section}</td>
                  <td className="px-4 py-3 font-bold text-blue-700 dark:text-blue-400">{score}</td>
                </tr>
              ))}
              <tr className="bg-blue-600 text-white">
                <td className="px-4 py-3 font-bold">Overall (Average)</td>
                <td className="px-4 py-3 font-bold text-xl">4.5</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-xs mt-3">
          (5.0 + 4.5 + 4.0 + 4.5) ÷ 4 = 4.5. Clean, transparent, and easy to understand.
        </p>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 text-slate-800 dark:text-slate-200">Why Half-Point Increments Matter</h3>
      <ArticleParagraph>
        The half-point system gives the TOEFL scale more granularity than a cruder whole-number system while avoiding
        the false precision of a 0-120 point scale. A difference of one full band, say, 4.0 vs. 5.0, reflects a
        genuine, meaningful difference in language ability. The half-point steps (e.g., 4.5) capture the real variation
        in performance between those full levels.
      </ArticleParagraph>

      {/* ─── CONVERSION TABLE ─── */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-3">
        TOEFL Score Conversion Table: Old Scale vs. New Scale vs. CEFR
      </h2>

      <ArticleParagraph>
        This is the most important table for anyone with an older TOEFL score or who needs to compare scores across systems.
      </ArticleParagraph>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse rounded-lg overflow-hidden shadow-sm">
          <thead>
            <tr className="bg-slate-700 text-white">
              <th className="px-4 py-3 text-left font-semibold">New Band</th>
              <th className="px-4 py-3 text-left font-semibold">CEFR Level</th>
              <th className="px-4 py-3 text-left font-semibold">Proficiency Label</th>
              <th className="px-4 py-3 text-left font-semibold">Old 0-120 Score Range</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            {[
              ['6.0', 'C2', 'Mastery', '114-120', 'bg-emerald-50 dark:bg-emerald-900/20'],
              ['5.5', 'C1-C2', 'Advanced to Mastery', '107-113', 'bg-emerald-50/50 dark:bg-emerald-900/10'],
              ['5.0', 'C1', 'Advanced', '95-106', 'bg-blue-50 dark:bg-blue-900/20'],
              ['4.5', 'B2-C1', 'Upper Intermediate to Advanced', '86-94', 'bg-blue-50/50 dark:bg-blue-900/10'],
              ['4.0', 'B2', 'Upper Intermediate', '72-85', 'bg-white dark:bg-slate-800'],
              ['3.5', 'B1', 'Intermediate', '58-71', 'bg-slate-50 dark:bg-slate-700/50'],
              ['3.0', 'B1', 'Intermediate', '44-57', 'bg-white dark:bg-slate-800'],
              ['2.5', 'A2', 'Elementary', '34-43', 'bg-slate-50 dark:bg-slate-700/50'],
              ['2.0', 'A2', 'Elementary', '24-33', 'bg-white dark:bg-slate-800'],
              ['1.5', 'A1', 'Beginner', '12-23', 'bg-slate-50 dark:bg-slate-700/50'],
              ['1.0', 'A1', 'Beginner', '0-11', 'bg-white dark:bg-slate-800'],
            ].map(([band, cefr, label, oldRange, rowClass]) => (
              <tr key={band} className={rowClass}>
                <td className="px-4 py-3 font-bold text-blue-700 dark:text-blue-400 text-base">{band}</td>
                <td className="px-4 py-3 font-semibold text-slate-800 dark:text-slate-200">{cefr}</td>
                <td className="px-4 py-3 text-slate-700 dark:text-slate-300">{label}</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400">{oldRange}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 p-4 my-5 rounded-r-lg">
        <p className="font-semibold text-slate-800 dark:text-slate-100 mb-1">How to use this table:</p>
        <p className="text-slate-700 dark:text-slate-300 text-[15px]">
          If you took the TOEFL before January 2026 and scored, say, <strong>98 out of 120</strong>, your equivalent
          new band score is <strong>5.0 (C1, Advanced)</strong>. If a university now asks for a 4.5 minimum, an old
          score of 86 or above meets that requirement.
        </p>
      </div>

      <ArticleParagraph>
        For a detailed breakdown of how the old and new exams differ beyond scoring, see our guide on{' '}
        <Link
          to="/toefl/strategy-success/old-toefl-vs-new-toefl/"
          className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
        >
          Old TOEFL vs New TOEFL 2026
        </Link>.
      </ArticleParagraph>

      {/* ─── TRANSITION PERIOD ─── */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-3">
        The 2026-2028 Transition Period: What to Expect
      </h2>

      <ArticleParagraph>
        ETS understands that changing a scoring system overnight creates confusion for test takers, universities, and
        employers. That is why they built in a formal <strong>two-year transition period from 2026 to 2028</strong>.
      </ArticleParagraph>

      <div className="space-y-4 my-6">
        {[
          {
            title: 'Score reports show both scales.',
            body: 'Every official TOEFL score report issued between January 2026 and the end of 2028 will display your old 0-120 score AND your new 1.0-6.0 band score side by side.',
          },
          {
            title: 'After 2028, only the band score remains.',
            body: 'Once the transition period ends, score reports will drop the old scale entirely.',
          },
          {
            title: 'MyBest Scores continue.',
            body: 'The MyBest Scores feature, which shows your best section scores across multiple test sittings, remains available on score reports throughout and after the transition.',
          },
        ].map(({ title, body }) => (
          <div key={title} className="bg-slate-50 dark:bg-slate-800 border-l-4 border-slate-400 dark:border-slate-600 p-4 rounded-r-lg">
            <p className="font-semibold text-slate-800 dark:text-slate-100 mb-1">→ {title}</p>
            <p className="text-slate-700 dark:text-slate-300 text-[15px]">{body}</p>
          </div>
        ))}
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-5 rounded-r-lg">
        <p className="font-semibold text-slate-800 dark:text-slate-100 mb-1">What this means for you:</p>
        <p className="text-slate-700 dark:text-slate-300 text-[15px]">
          If you are applying to a university in 2026 or 2027, your score report already speaks both languages.
          Admissions officers who are still calibrating to the new system can still reference the familiar 0-120 number.
        </p>
      </div>

      {/* ─── SECTION BY SECTION ─── */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-3">
        Section-by-Section Scoring Breakdown
      </h2>

      <ArticleParagraph>
        Understanding how each section is scored helps you target your preparation more effectively.
      </ArticleParagraph>

      {[
        {
          section: 'Reading',
          color: 'blue',
          body: (
            <>
              The Reading section measures your ability to understand academic texts written in English. Scoring is
              based on the number of correct answers, converted to a 1.0-6.0 band.
              <ul className="list-disc list-inside mt-2 space-y-1 text-[15px]">
                <li><strong>5.0+</strong>, You can read complex academic texts with ease.</li>
                <li><strong>3.5-4.5</strong>, You understand main ideas but struggle with nuanced vocabulary or complex structures.</li>
              </ul>
              <p className="mt-2 text-[15px]">
                For a deep dive into question formats, visit our guide on{' '}
                <Link to="/toefl/toefl-reading/toefl-reading-question-types/" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                  TOEFL Reading Question Types
                </Link>.
              </p>
            </>
          ),
        },
        {
          section: 'Listening',
          color: 'emerald',
          body: (
            <>
              The Listening section evaluates your ability to understand spoken English in academic settings, lectures,
              classroom discussions, and conversations. Like Reading, it is scored based on correct answers converted to
              the band scale.
              <p className="mt-2 text-[15px]">
                High scores (5.0+) require you to understand <strong>implied meaning, speaker attitude, and organizational
                structure</strong>, not just factual content.
              </p>
            </>
          ),
        },
        {
          section: 'Speaking',
          color: 'violet',
          body: (
            <>
              Speaking is scored by AI-assisted automated scoring combined with human rater calibration. You respond to
              tasks that assess:
              <ul className="list-disc list-inside mt-2 space-y-1 text-[15px]">
                <li><strong>Delivery</strong>, fluency and pronunciation</li>
                <li><strong>Language use</strong>, grammar and vocabulary</li>
                <li><strong>Topic development</strong>, organization and completeness</li>
              </ul>
            </>
          ),
        },
        {
          section: 'Writing',
          color: 'amber',
          body: (
            <>
              Writing consists of two tasks. AI and human raters evaluate organization, development, language use, and
              accuracy.
              <p className="mt-2 text-[15px]">
                A band of <strong>5.0 in Writing</strong> means your essays are well-organized, clearly argued, and
                linguistically sophisticated with only minor errors.
              </p>
              <p className="mt-2 text-[15px]">
                See our guides:{' '}
                <Link to="/toefl/toefl-writing/toefl-writing-task-1-explained/" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">TOEFL Writing Task 1</Link>
                {' '}and{' '}
                <Link to="/toefl/toefl-writing/toefl-writing-task-2-explained/" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">TOEFL Writing Task 2</Link>.
              </p>
            </>
          ),
        },
      ].map(({ section, color, body }) => {
        const colorMap: Record<string, string> = {
          blue: 'border-blue-500 bg-blue-50 dark:bg-blue-900/20',
          emerald: 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20',
          violet: 'border-violet-500 bg-violet-50 dark:bg-violet-900/20',
          amber: 'border-teal-500 bg-teal-50 dark:bg-teal-900/20',
        };
        const badgeMap: Record<string, string> = {
          blue: 'bg-blue-600',
          emerald: 'bg-emerald-600',
          violet: 'bg-violet-600',
          amber: 'bg-teal-600',
        };
        return (
          <div key={section} className={`border-l-4 ${colorMap[color]} p-5 rounded-r-lg my-5`}>
            <div className="flex items-center gap-3 mb-3">
              <span className={`${badgeMap[color]} text-white text-xs font-bold px-2.5 py-1 rounded-full`}>
                {section}
              </span>
              <span className="font-semibold text-slate-800 dark:text-slate-100">Scored 1.0-6.0</span>
            </div>
            <div className="text-slate-700 dark:text-slate-300 text-[15px] leading-relaxed">{body}</div>
          </div>
        );
      })}

      {/* ─── WHAT UNIVERSITIES REQUIRE ─── */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-3">
        What Universities Require: TOEFL 2026 Score Benchmarks
      </h2>

      <ArticleParagraph>
        Universities are actively updating their TOEFL admission requirements to reflect the new scale. Here are the
        general benchmarks you can expect:
      </ArticleParagraph>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse rounded-lg overflow-hidden shadow-sm">
          <thead>
            <tr className="bg-slate-700 text-white">
              <th className="px-4 py-3 text-left font-semibold">Institution Type</th>
              <th className="px-4 py-3 text-left font-semibold">Typical Score Requirement</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            {[
              ['Top 20 universities (US/UK)', '5.5-6.0', 'bg-emerald-50 dark:bg-emerald-900/20'],
              ['Most graduate programs', '4.5-5.0', 'bg-blue-50 dark:bg-blue-900/20'],
              ['Most undergraduate programs', '4.0-4.5', 'bg-white dark:bg-slate-800'],
              ['Community colleges', '3.5-4.0', 'bg-slate-50 dark:bg-slate-700/50'],
            ].map(([type, req, rowClass]) => (
              <tr key={type} className={rowClass}>
                <td className="px-4 py-3 text-slate-700 dark:text-slate-300">{type}</td>
                <td className="px-4 py-3 font-bold text-emerald-700 dark:text-emerald-400">{req}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-4 my-5 rounded-r-lg">
        <p className="font-semibold text-slate-800 dark:text-slate-100 mb-1">Important:</p>
        <p className="text-slate-700 dark:text-slate-300 text-[15px]">
          Always check the specific requirements of each institution and program you are applying to. Some highly
          competitive programs, particularly in medicine, law, or engineering at elite universities, may set
          <strong> minimum section scores</strong> in addition to overall score requirements.
        </p>
      </div>

      {/* ─── WHAT IS A GOOD SCORE ─── */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-3">
        What Is a Good TOEFL Score in 2026?
      </h2>

      <ArticleParagraph>
        "Good" is relative to your goal, but here is a practical framework:
      </ArticleParagraph>

      <div className="space-y-3 my-6">
        {[
          { band: '6.0', desc: 'Near-native proficiency. Exceptional score, rarely required even by the most selective programs.', color: 'bg-emerald-600' },
          { band: '5.5', desc: 'Strong competitive score for top-tier institutions. Demonstrates C1-C2 level English.', color: 'bg-emerald-500' },
          { band: '5.0', desc: 'The target for most serious graduate applicants. C1 Advanced level, you can study, write, and speak effectively at university level.', color: 'bg-blue-600' },
          { band: '4.5', desc: 'Solid score for undergraduate admissions and many master\'s programs. Upper Intermediate to Advanced.', color: 'bg-blue-500' },
          { band: '4.0', desc: 'Meets the baseline requirement for most accredited degree programs.', color: 'bg-slate-600' },
          { band: '3.5 and below', desc: 'Sufficient for some community college programs, but may require additional English language support courses.', color: 'bg-slate-400' },
        ].map(({ band, desc, color }) => (
          <div key={band} className="flex gap-4 items-start">
            <span className={`flex-shrink-0 ${color} text-white font-bold text-sm px-2.5 py-1 rounded-full whitespace-nowrap`}>
              {band}
            </span>
            <p className="text-slate-700 dark:text-slate-300 text-[15px]">{desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-5 rounded-r-lg">
        <p className="font-semibold text-slate-800 dark:text-slate-100 mb-1">The real answer:</p>
        <p className="text-slate-700 dark:text-slate-300 text-[15px]">
          A good TOEFL 2026 score is the score that meets or exceeds your target institution's minimum,{' '}
          <strong>plus a comfortable buffer of 0.5 band above that minimum</strong>, so a borderline result does not
          jeopardize your application.
        </p>
      </div>

      {/* ─── SCORE DELIVERY ─── */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-3">
        Score Delivery: Now Just 72 Hours
      </h2>

      <ArticleParagraph>
        One of the practical improvements ETS introduced alongside the new scoring system is faster score delivery.
        TOEFL iBT results are now typically available within approximately{' '}
        <strong>72 hours of your test date</strong>, a significant improvement over the previous 4 to 8 business days.
      </ArticleParagraph>

      <ArticleParagraph>
        This matters for applicants working against application deadlines. You no longer need to schedule your test
        nearly two weeks before a deadline just to ensure your scores arrive on time.
      </ArticleParagraph>

      {/* ─── TIPS ─── */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-3">
        Tips for Maximizing Your Score on the New System
      </h2>

      <ArticleParagraph>
        The core language skills the TOEFL tests have not changed, but knowing how the new scoring system works lets
        you be more strategic.
      </ArticleParagraph>

      {[
        {
          num: '1',
          title: 'Aim for balanced section scores.',
          body: 'Because your overall band is an average of four sections, a weak score in one area drags down your overall result significantly. If your Speaking is a 3.5 while everything else is 5.0, your overall drops to 4.5, potentially below a program\'s threshold. Balanced preparation pays off.',
        },
        {
          num: '2',
          title: 'Know your section weights.',
          body: 'Universities that set section minimums (common for graduate programs) are just as concerned with your weakest section as your overall score. Find out whether your target program specifies section minimums, then prioritize accordingly.',
        },
        {
          num: '3',
          title: 'Use MyBest Scores strategically.',
          body: 'If you plan to take the TOEFL more than once, the MyBest feature combines your best section scores from multiple sittings. This is especially useful if your Reading and Listening are strong but your Speaking needs more work, you can focus a retake on Speaking improvement.',
        },
        {
          num: '4',
          title: 'Practice with the band descriptors in mind.',
          body: 'Study what a 4.0 vs. a 5.0 Writing essay actually looks like. ETS publishes sample scored responses. Understanding the qualitative difference between bands is more useful than simply doing more practice tests.',
        },
        {
          num: '5',
          title: 'Target the 72-hour delivery window.',
          body: 'Schedule your test date at least one week before a hard application deadline to give yourself a buffer, even with faster delivery.',
        },
        {
          num: '6',
          title: 'Study grammar foundations.',
          body: 'All four TOEFL sections reward accurate grammar. Errors in grammar affect your Writing and Speaking scores directly, and understanding complex grammar structures helps you in Reading and Listening comprehension.',
        },
      ].map(({ num, title, body }) => (
        <div key={num} className="flex gap-4 my-5">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
            {num}
          </div>
          <div>
            <p className="font-semibold text-slate-800 dark:text-slate-100 mb-1">{title}</p>
            <p className="text-slate-700 dark:text-slate-300 text-[15px]">{body}</p>
          </div>
        </div>
      ))}

      {/* ─── FAQ ─── */}
      <h2 className="text-2xl font-bold mt-12 mb-6 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-3">
        Frequently Asked Questions: TOEFL 2026 Scoring
      </h2>

      <div className="space-y-5">
        {[
          {
            q: 'Is the new TOEFL scoring system the same as IELTS?',
            a: 'Not exactly, though they are more comparable now than before. Both IELTS and the new TOEFL use a band-based scale with half-point increments, and both align to CEFR levels. However, IELTS uses a 1-9 scale, while TOEFL now uses 1-6. A TOEFL 5.0 is broadly comparable to an IELTS 7.0-7.5, but the tests assess English proficiency differently. You cannot directly substitute one score for the other without checking institutional policies.',
          },
          {
            q: 'Will universities accept the new TOEFL scoring system?',
            a: 'Yes. ETS coordinated the rollout of the new system with universities and testing stakeholders. All institutions that previously accepted TOEFL scores accept the new 1.0-6.0 band scores. During the 2026-2028 transition period, your score report includes both the new band score and the old 0-120 score for reference.',
          },
          {
            q: 'How do I convert my old TOEFL score to the new scale?',
            a: 'Use the conversion table in this article. Find your old 0-120 score and read across to find your equivalent new band. For example, an old score of 100 corresponds to approximately a 5.0 band (C1 Advanced). Note that these conversions are approximate, the official mapping is defined by ETS.',
          },
          {
            q: 'Do all four sections need to meet a minimum score?',
            a: 'It depends on the institution. Many universities only set an overall band minimum. However, competitive graduate programs, especially in fields like medicine, law, and education, often set section-level minimums (for example, a minimum of 4.0 in Speaking and Writing). Always check your specific program\'s requirements.',
          },
          {
            q: 'Can I still use a TOEFL score from before 2026 for applications?',
            a: 'TOEFL scores are valid for two years from your test date. If you tested in 2024 or 2025, your old-format score (0-120) remains valid through 2026 or 2027 respectively. Universities accepting TOEFL scores will accept valid old-format scores during the transition period, since score reports now include the conversion.',
          },
          {
            q: 'How soon will I receive my scores after the test?',
            a: 'Under the new system, most test takers receive their official TOEFL score report within approximately 72 hours of completing the exam. This is a significant improvement from the previous 4 to 8 business day wait.',
          },
          {
            q: 'What is a good TOEFL score in 2026?',
            a: 'A good score depends on your target: 5.5-6.0 for top 20 universities, 4.5-5.0 for most graduate programs, 4.0-4.5 for most undergraduate programs, and 3.5-4.0 for community colleges. Aim for at least 0.5 above your institution\'s stated minimum.',
          },
          {
            q: 'How is the TOEFL 2026 overall score calculated?',
            a: 'Your overall TOEFL 2026 score is the average of your four section scores (Reading, Listening, Speaking, Writing), rounded to the nearest 0.5. For example: (5.0 + 4.5 + 4.0 + 4.5) ÷ 4 = 4.5.',
          },
        ].map(({ q, a }) => (
          <div key={q} className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
            <div className="bg-slate-50 dark:bg-slate-800 px-5 py-4">
              <p className="font-semibold text-slate-800 dark:text-slate-100">{q}</p>
            </div>
            <div className="px-5 py-4 bg-white dark:bg-slate-900">
              <p className="text-slate-700 dark:text-slate-300 text-[15px]">{a}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ─── FINAL THOUGHTS ─── */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-3">
        Final Thoughts
      </h2>

      <ArticleParagraph>
        The TOEFL 2026 scoring overhaul is a meaningful improvement, not just a cosmetic change. The new 1.0-6.0 band
        scale makes scores more interpretable, internationally comparable, and directly linked to CEFR proficiency levels
        that universities and employers already understand.
      </ArticleParagraph>

      <ArticleParagraph>
        If you are preparing for the TOEFL in 2026, the most important takeaway is this: <strong>aim for balance across
        all four sections</strong>, know the band score your target program requires, and give yourself enough time to
        retake the test if your first result is not where you need it to be.
      </ArticleParagraph>

      <ArticleParagraph>
        The language skills that earn a high TOEFL score, clear writing, accurate grammar, strong vocabulary, and the
        ability to follow complex spoken and written English, are the same skills that will serve you throughout your
        academic career. Build those foundations, and the score will follow.
      </ArticleParagraph>

      {/* Internal links */}
      <div className="mt-10 p-5 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <p className="font-semibold text-slate-800 dark:text-slate-100 mb-3">Continue your TOEFL preparation:</p>
        <ul className="space-y-2 text-[15px]">
          <li>
            <Link to="/toefl/strategy-success/old-toefl-vs-new-toefl/" className="text-blue-600 dark:text-blue-400 hover:underline">
              → Old TOEFL vs New TOEFL 2026: Every Change Explained
            </Link>
          </li>
          <li>
            <Link to="/toefl/strategy-success/toefl-complete-the-words/" className="text-blue-600 dark:text-blue-400 hover:underline">
              → TOEFL Complete the Words Task: Strategies & Practice
            </Link>
          </li>
          <li>
            <Link to="/toefl/toefl-reading/toefl-reading-section-explained/" className="text-blue-600 dark:text-blue-400 hover:underline">
              → TOEFL Reading Section Explained (New 2026 Format)
            </Link>
          </li>
          <li>
            <Link to="/toefl/toefl-reading/toefl-reading-question-types/" className="text-blue-600 dark:text-blue-400 hover:underline">
              → TOEFL Reading Question Types
            </Link>
          </li>
          <li>
            <Link to="/toefl/toefl-writing/toefl-writing-task-1-explained/" className="text-blue-600 dark:text-blue-400 hover:underline">
              → TOEFL Writing Task 1 Explained
            </Link>
          </li>
          <li>
            <Link to="/toefl/toefl-writing/toefl-writing-task-2-explained/" className="text-blue-600 dark:text-blue-400 hover:underline">
              → TOEFL Writing Task 2 Explained
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TOEFL2026ScoringPage;
