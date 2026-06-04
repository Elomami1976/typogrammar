import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';

// SEO Meta:
// Title: IELTS Band Score Calculator - Instant Overall Band Calculation | Typogrammar
// Description: Calculate your IELTS overall band score instantly with our free calculator. Understand IELTS rounding rules, band score charts, and how to improve your score. No sign-up required.

// FAQ Data for SEO and rendering
const faqData = [
  {
    question: "How is the IELTS overall band score calculated?",
    answer: "Your overall IELTS band score is the average of your four component scores (Listening, Reading, Writing, Speaking). The average is then rounded to the nearest whole or half band according to IELTS rounding rules."
  },
  {
    question: "What are the IELTS rounding rules?",
    answer: "IELTS rounds averages to the nearest whole or half band. If your average ends in .25, it rounds up to the next half band. If it ends in .75, it rounds up to the next whole band. For example, 6.25 becomes 6.5, and 6.75 becomes 7.0."
  },
  {
    question: "Is there a difference between Academic and General IELTS scoring?",
    answer: "The scoring system (0-9 bands) is the same for both Academic and General Training IELTS. However, the Reading and Writing tests have different content and difficulty levels, though they use the same band scale."
  },
  {
    question: "What IELTS score do I need for university admission?",
    answer: "Most universities require an overall band score of 6.0 to 7.0, with minimum scores of 5.5 to 6.5 in each component. Top universities and competitive programs may require 7.0+ overall. Always check specific requirements for your target institution."
  },
  {
    question: "What IELTS score do I need for immigration?",
    answer: "Immigration requirements vary by country. For example, Canada Express Entry typically requires CLB 7 (IELTS 6.0 in each skill), while UK skilled worker visas require B1 level (IELTS 4.0-5.0). Check your target country's official requirements."
  },
  {
    question: "Can I get a half band score like 6.5 or 7.5?",
    answer: "Yes, IELTS reports scores in whole and half bands (e.g., 5.0, 5.5, 6.0, 6.5, 7.0). Component scores and overall scores can both be whole or half bands."
  },
  {
    question: "How accurate is this IELTS calculator?",
    answer: "This calculator uses the official IELTS rounding rules to calculate your overall band score. It provides the same result you would receive on your official test report."
  },
  {
    question: "What is the minimum IELTS band score?",
    answer: "IELTS band scores range from 0 (did not attempt) to 9 (expert user). Most test takers score between 5.0 and 7.5. A score of 6.0 or above is considered competent for most purposes."
  }
];

// Band score descriptions
const bandDescriptions = [
  { band: 9, level: "Expert", description: "Complete command of the language. Appropriate, accurate, and fluent with complete understanding." },
  { band: 8, level: "Very Good", description: "Fully operational command with occasional unsystematic inaccuracies. Handles complex detailed argumentation well." },
  { band: 7, level: "Good", description: "Operational command with occasional inaccuracies. Generally handles complex language well and understands detailed reasoning." },
  { band: 6, level: "Competent", description: "Generally effective command despite some inaccuracies. Can use and understand fairly complex language." },
  { band: 5, level: "Modest", description: "Partial command, coping with overall meaning in most situations. Likely to make many mistakes." },
  { band: 4, level: "Limited", description: "Basic competence limited to familiar situations. Frequent problems in understanding and expression." },
  { band: 3, level: "Extremely Limited", description: "Conveys and understands only general meaning in very familiar situations. Frequent breakdowns in communication." },
  { band: 2, level: "Intermittent", description: "No real communication possible except basic information using isolated words or short formulae." },
  { band: 1, level: "Non-User", description: "Essentially has no ability to use the language beyond possibly a few isolated words." },
  { band: 0, level: "Did Not Attempt", description: "No assessable information provided." }
];

const IELTSBandScoreCalculatorPage: React.FC = () => {
  usePageMetadata({
    title: 'IELTS Band Score Calculator - Instant Overall Band Calculation | Typogrammar',
    description: 'Calculate your IELTS overall band score instantly with our free calculator. Understand IELTS rounding rules, band score charts, and how to improve your score. No sign-up required.',
    canonical: 'https://typogrammar.com/ielts-band-score-calculator/'
  });

  const [listening, setListening] = useState<string>('');
  const [reading, setReading] = useState<string>('');
  const [writing, setWriting] = useState<string>('');
  const [speaking, setSpeaking] = useState<string>('');
  const [result, setResult] = useState<{ overall: number; average: number } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const validBandScores = ['0', '0.5', '1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9'];

  const calculateOverallBand = () => {
    // Validate inputs
    const scores = [listening, reading, writing, speaking];
    
    if (scores.some(score => score === '')) {
      setError('Please enter all four component scores.');
      setResult(null);
      return;
    }

    const numericScores = scores.map(score => parseFloat(score));
    
    if (numericScores.some(score => isNaN(score) || score < 0 || score > 9)) {
      setError('Please enter valid band scores between 0 and 9.');
      setResult(null);
      return;
    }

    // Calculate average
    const average = numericScores.reduce((sum, score) => sum + score, 0) / 4;
    
    // Apply IELTS rounding rules
    // Round to nearest 0.5 (if .25 or above, round up to next 0.5)
    const decimal = average - Math.floor(average);
    let overall: number;
    
    if (decimal < 0.25) {
      overall = Math.floor(average);
    } else if (decimal < 0.75) {
      overall = Math.floor(average) + 0.5;
    } else {
      overall = Math.ceil(average);
    }

    setError(null);
    setResult({ overall, average });
  };

  const clearForm = () => {
    setListening('');
    setReading('');
    setWriting('');
    setSpeaking('');
    setResult(null);
    setError(null);
  };

  const scrollToTool = () => {
    const toolSection = document.getElementById('calculator-tool');
    if (toolSection) {
      toolSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const getBandLevel = (band: number): string => {
    const desc = bandDescriptions.find(d => d.band === Math.round(band));
    return desc ? desc.level : 'Unknown';
  };

  // JSON-LD Schemas
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const webApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "IELTS Band Score Calculator",
    "description": "Free IELTS band score calculator. Calculate your overall band score using official IELTS rounding rules. Instant results, no sign-up required.",
    "url": "https://typogrammar.com/ielts-band-score-calculator",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "creator": {
      "@type": "Organization",
      "name": "Typogrammar",
      "url": "https://typogrammar.com"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://typogrammar.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "IELTS Band Score Calculator",
        "item": "https://typogrammar.com/ielts-band-score-calculator"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
            <li><Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link></li>
            <li><span className="mx-2">/</span></li>
            <li className="text-slate-900 dark:text-slate-100 font-medium">IELTS Band Score Calculator</li>
          </ol>
        </nav>

        {/* H1 - Main Heading */}
        <header className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-tight">
            IELTS Band Score Calculator <span className="text-blue-600 dark:text-blue-400">(Instant Overall Band Calculation)</span>
          </h1>
          
          {/* Intro Paragraph */}
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed mb-6">
            Calculate your <strong>IELTS overall band score</strong> instantly with our free calculator. Enter your scores for 
            Listening, Reading, Writing, and Speaking, and get your overall band using the <strong>official IELTS rounding rules</strong>. 
            This calculator works for both <strong>IELTS Academic</strong> and <strong>IELTS General Training</strong> tests.
          </p>
          <p className="text-base text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8">
            Understanding how IELTS calculates your overall score is essential for setting realistic goals and tracking your progress. 
            The overall band score is an average of your four component scores, rounded to the nearest whole or half band according to 
            specific rounding rules. <strong>No sign-up required</strong>-calculate your score immediately below.
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToTool}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 transform"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Calculate Your Score Now - It's Free
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </header>

        {/* CALCULATOR TOOL SECTION */}
        <section id="calculator-tool" className="mb-12 scroll-mt-8">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 border border-slate-200 dark:border-slate-700">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6 text-center">
              Enter Your Component Scores
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {/* Listening */}
              <div>
                <label htmlFor="listening" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Listening
                </label>
                <select
                  id="listening"
                  value={listening}
                  onChange={(e) => setListening(e.target.value)}
                  className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg 
                           focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                           bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
                >
                  <option value="">Select Band Score</option>
                  {validBandScores.map(score => (
                    <option key={`listening-${score}`} value={score}>{score}</option>
                  ))}
                </select>
              </div>

              {/* Reading */}
              <div>
                <label htmlFor="reading" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Reading
                </label>
                <select
                  id="reading"
                  value={reading}
                  onChange={(e) => setReading(e.target.value)}
                  className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg 
                           focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                           bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
                >
                  <option value="">Select Band Score</option>
                  {validBandScores.map(score => (
                    <option key={`reading-${score}`} value={score}>{score}</option>
                  ))}
                </select>
              </div>

              {/* Writing */}
              <div>
                <label htmlFor="writing" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Writing
                </label>
                <select
                  id="writing"
                  value={writing}
                  onChange={(e) => setWriting(e.target.value)}
                  className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg 
                           focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                           bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
                >
                  <option value="">Select Band Score</option>
                  {validBandScores.map(score => (
                    <option key={`writing-${score}`} value={score}>{score}</option>
                  ))}
                </select>
              </div>

              {/* Speaking */}
              <div>
                <label htmlFor="speaking" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Speaking
                </label>
                <select
                  id="speaking"
                  value={speaking}
                  onChange={(e) => setSpeaking(e.target.value)}
                  className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg 
                           focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                           bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
                >
                  <option value="">Select Band Score</option>
                  {validBandScores.map(score => (
                    <option key={`speaking-${score}`} value={score}>{score}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={calculateOverallBand}
                className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 
                         text-white font-bold text-lg rounded-lg 
                         transition-all duration-200 
                         focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                         flex items-center justify-center gap-2 shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Calculate Overall Band
              </button>
              <button
                onClick={clearForm}
                className="px-6 py-4 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 
                         text-slate-700 dark:text-slate-200 font-bold rounded-lg 
                         transition-colors"
              >
                Clear
              </button>
            </div>
          </div>

          {error && (
            <div className="mt-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-semibold text-red-900 dark:text-red-200">Error</h3>
                  <p className="text-red-700 dark:text-red-300 mt-1">{error}</p>
                </div>
              </div>
            </div>
          )}

          {result && (
            <div className="mt-6 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 
                         border border-green-200 dark:border-green-800 rounded-xl shadow-lg p-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2">Your Overall IELTS Band Score</h3>
                <div className="text-6xl font-bold text-green-600 dark:text-green-400 mb-2">
                  {result.overall}
                </div>
                <p className="text-xl font-medium text-slate-600 dark:text-slate-400 mb-4">
                  {getBandLevel(result.overall)} User
                </p>
                <div className="text-sm text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 rounded-lg p-4 inline-block">
                  <p className="mb-1"><strong>Raw Average:</strong> {result.average.toFixed(3)}</p>
                  <p><strong>Rounded (IELTS rules):</strong> {result.overall}</p>
                </div>
              </div>
              
              <div className="mt-6 grid sm:grid-cols-4 gap-3 text-center">
                <div className="bg-white dark:bg-slate-800 rounded-lg p-3">
                  <div className="text-sm text-slate-500 dark:text-slate-400">Listening</div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">{listening}</div>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-3">
                  <div className="text-sm text-slate-500 dark:text-slate-400">Reading</div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">{reading}</div>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-3">
                  <div className="text-sm text-slate-500 dark:text-slate-400">Writing</div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">{writing}</div>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-3">
                  <div className="text-sm text-slate-500 dark:text-slate-400">Speaking</div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">{speaking}</div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* How IELTS Band Scores Are Calculated */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            How IELTS Band Scores Are Calculated
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
            Your <strong>IELTS overall band score</strong> is calculated as the average of your four component scores: 
            Listening, Reading, Writing, and Speaking. Each component is scored on a scale of 0 to 9, with half bands possible (e.g., 6.5, 7.5).
          </p>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
            <strong>The IELTS rounding rules work as follows:</strong>
          </p>
          <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2 mb-4">
            <li>If your average ends in <strong>.25</strong>, it rounds <strong>up to .5</strong> (e.g., 6.25 → 6.5)</li>
            <li>If your average ends in <strong>.75</strong>, it rounds <strong>up to the next whole number</strong> (e.g., 6.75 → 7.0)</li>
            <li>If your average ends in <strong>.125</strong> or below, it rounds <strong>down</strong> (e.g., 6.125 → 6.0)</li>
            <li>If your average ends in <strong>.625</strong> or below, it rounds <strong>to .5</strong> (e.g., 6.625 → 6.5)</li>
          </ul>
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-blue-800 dark:text-blue-200">
              <strong>Example:</strong> If you score Listening 7.0, Reading 6.5, Writing 6.0, Speaking 7.0, your average is 6.625. 
              This rounds to <strong>6.5</strong> overall.
            </p>
          </div>
        </section>

        {/* IELTS Band Score Chart */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            IELTS Band Score Chart
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
            IELTS uses a 9-band scale to measure English language proficiency. Here's what each band level means:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
              <thead className="bg-slate-100 dark:bg-slate-700">
                <tr>
                  <th className="px-4 py-3 text-left font-bold text-slate-900 dark:text-slate-100">Band</th>
                  <th className="px-4 py-3 text-left font-bold text-slate-900 dark:text-slate-100">Level</th>
                  <th className="px-4 py-3 text-left font-bold text-slate-900 dark:text-slate-100">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                {bandDescriptions.map((item) => (
                  <tr key={item.band} className={item.band >= 6 ? 'bg-green-50/50 dark:bg-green-900/10' : ''}>
                    <td className="px-4 py-3 font-bold text-slate-900 dark:text-slate-100">{item.band}</td>
                    <td className="px-4 py-3 font-medium text-slate-700 dark:text-slate-300">{item.level}</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-400 text-sm">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Academic vs General Scoring */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Academic vs General Scoring
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
            Both IELTS Academic and IELTS General Training use the same 0-9 band scale. However, there are important differences in the tests:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
              <thead className="bg-slate-100 dark:bg-slate-700">
                <tr>
                  <th className="px-4 py-3 text-left font-bold text-slate-900 dark:text-slate-100">Aspect</th>
                  <th className="px-4 py-3 text-left font-bold text-slate-900 dark:text-slate-100">Academic</th>
                  <th className="px-4 py-3 text-left font-bold text-slate-900 dark:text-slate-100">General Training</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-700 dark:text-slate-300">Purpose</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-400">University admission</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-400">Immigration, work, training</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-700 dark:text-slate-300">Reading Content</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-400">Academic texts, journals</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-400">Everyday texts, workplace documents</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-700 dark:text-slate-300">Writing Task 1</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-400">Describe charts/graphs/diagrams</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-400">Write a letter (formal/informal)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-700 dark:text-slate-300">Scoring System</td>
                  <td className="px-4 py-3 text-green-600 dark:text-green-400">Same 0-9 bands</td>
                  <td className="px-4 py-3 text-green-600 dark:text-green-400">Same 0-9 bands</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-700 dark:text-slate-300">Listening & Speaking</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-400">Identical for both</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-400">Identical for both</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Calculate Your IELTS Score Now</h3>
          <p className="text-blue-100 mb-6">Scroll up and enter your component scores to get your overall band instantly.</p>
          <button
            onClick={scrollToTool}
            className="inline-flex items-center px-6 py-3 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            Calculate My Score
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </section>

        {/* How to Improve Your IELTS Band */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            How to Improve Your IELTS Band
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
            Improving your IELTS score requires targeted practice in each skill area:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Listening", tips: ["Practice with authentic British/American/Australian accents", "Focus on note-taking skills", "Learn to predict answer types", "Practice listening at 1.25x speed"] },
              { title: "Reading", tips: ["Practice skimming and scanning techniques", "Build academic vocabulary", "Time yourself strictly (20 min per passage)", "Learn to identify paraphrases"] },
              { title: "Writing", tips: ["Learn essay structures for all question types", "Practice paraphrasing the question", "Use varied vocabulary and grammar", "Always plan before writing"] },
              { title: "Speaking", tips: ["Practice speaking for 2 minutes on any topic", "Learn linking phrases naturally", "Expand answers with examples", "Record yourself and identify errors"] }
            ].map((skill, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
                <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {skill.title}
                </h3>
                <ul className="space-y-1">
                  {skill.tips.map((tip, i) => (
                    <li key={i} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Links - Related Resources */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            IELTS Preparation Resources
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
            Explore our comprehensive IELTS preparation materials to boost your score:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link to="/ielts/ielts-writing-task-2-essay-types/" className="block p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 transition-colors group">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">IELTS Writing Task 2</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Master all 5 essay types with sample answers.</p>
            </Link>
            <Link to="/grammar-checker/" className="block p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 transition-colors group">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Grammar Checker</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Check your IELTS essays for grammar errors.</p>
            </Link>
            <Link to="/ielts/vocabulary/band-7/" className="block p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 transition-colors group">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">IELTS Vocabulary Band 7</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Learn vocabulary for Band 7+ scores.</p>
            </Link>
            <Link to="/paraphrasing-tool/" className="block p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 transition-colors group">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Paraphrasing Tool</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Practice paraphrasing for IELTS Writing.</p>
            </Link>
            <Link to="/ielts/band-8-ielts-sample-answers/" className="block p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 transition-colors group">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Band 8 Sample Answers</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Study high-scoring IELTS essay examples.</p>
            </Link>
            <Link to="/grammar/verb-tenses/" className="block p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 transition-colors group">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Verb Tenses</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Master all 12 English tenses for accuracy.</p>
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                >
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 pr-4">{faq.question}</h3>
                  <svg className={`w-5 h-5 text-slate-500 dark:text-slate-400 flex-shrink-0 transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-slate-700 dark:text-slate-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="mb-8 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-700 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Ready to Calculate Your IELTS Score?</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Our free IELTS band score calculator uses official rounding rules. 
            No sign-up required-get your overall band score instantly.
          </p>
          <button
            onClick={scrollToTool}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-lg rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Calculate Your Score Now - 100% Free
          </button>
        </section>

        {/* Trust Signals */}
        <section className="text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            <strong>Trusted by IELTS students worldwide</strong> · Uses official IELTS rounding rules · 
            Built by <Link to="/about/editorial-team/" className="text-blue-600 dark:text-blue-400 hover:underline">language experts</Link> at Typogrammar
          </p>
        </section>
      </article>
    </div>
  );
};

export default IELTSBandScoreCalculatorPage;
