import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import SchemaMarkup from '../components/SchemaMarkup';

// FAQ Data for SEO and rendering
const faqData = [
  {
    question: "Is this grammar checker really free?",
    answer: "Yes, the Typogrammar Grammar Checker is 100% free to use with no sign-up required. You can check unlimited text without any hidden fees or subscription requirements."
  },
  {
    question: "How accurate is the AI grammar checker?",
    answer: "Our AI grammar checker uses advanced language models to detect grammatical errors with high accuracy. It identifies subject-verb agreement issues, tense inconsistencies, punctuation errors, and stylistic improvements that basic spell checkers miss."
  },
  {
    question: "Can I use this for IELTS writing practice?",
    answer: "Absolutely! Our grammar checker is specifically designed for academic writing, making it ideal for IELTS, TOEFL, and other English proficiency exam preparation. It helps identify common errors that affect your writing band score."
  },
  {
    question: "What types of errors does the grammar checker detect?",
    answer: "The tool detects subject-verb agreement errors, verb tense mistakes, punctuation issues, sentence fragments, run-on sentences, word choice problems, preposition errors, article usage, and academic tone inconsistencies."
  },
  {
    question: "Is my text secure and private?",
    answer: "Yes, your text is processed securely and is not stored on our servers. We do not save, share, or use your content for any purpose other than providing grammar corrections during your session."
  },
  {
    question: "How is this different from Grammarly or other grammar checkers?",
    answer: "Typogrammar's grammar checker is purpose-built for academic and exam preparation contexts. It focuses on the types of errors commonly found in IELTS, TOEFL, and university writing, and integrates seamlessly with our comprehensive grammar learning resources."
  },
  {
    question: "Can I check grammar on my phone or tablet?",
    answer: "Yes, our grammar checker is fully responsive and works on all devices including smartphones, tablets, and desktop computers. No app download is required—just visit the page in your browser."
  },
  {
    question: "What is the character limit for checking text?",
    answer: "You can check up to 3,000 characters per submission. For longer texts, we recommend checking paragraph by paragraph for more detailed and accurate feedback."
  }
];

const GrammarCheckerPage: React.FC = () => {
  usePageMetadata({
    title: 'Free AI Grammar Checker Online – Instant & Accurate | Typogrammar',
    description: 'Check your grammar instantly with our free AI grammar checker. Perfect for IELTS, academic writing, and professional emails. No sign-up required. Fix grammar mistakes online now.',
    canonical: 'https://typogrammar.com/grammar-checker'
  });

  interface HistoryEntry {
    text: string;
    result: string;
    timestamp: number;
  }

  const HISTORY_KEY = 'tg_grammar_history';

  const [text, setText] = useState<string>('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [history, setHistory] = useState<HistoryEntry[]>(() => {
    try {
      return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
    } catch {
      return [];
    }
  });
  const resultRef = useRef<HTMLDivElement>(null);

  const CHARACTER_LIMIT = 3000;
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const characterCount = text.length;

  // Estimate IELTS band from result text
  const estimateIELTSBand = useCallback((resultText: string): string => {
    const patterns = [/\bcorrect(?:ion|ed)\b/gi, /\bshould be\b/gi, /\bchange\b/gi, /\bmistake\b/gi, /\berror\b/gi, /\bincorrect\b/gi, /\bfix\b/gi];
    const total = patterns.reduce((sum, p) => sum + (resultText.match(p)?.length ?? 0), 0);
    if (total === 0) return '8.0–9.0';
    if (total <= 2) return '7.0–8.0';
    if (total <= 5) return '6.0–7.0';
    if (total <= 9) return '5.5–6.5';
    return '4.5–5.5';
  }, []);

  const clearText = () => {
    setText('');
    setResult(null);
    setError(null);
  };

  useEffect(() => {
    if (result && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [result]);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    if (newText.length <= CHARACTER_LIMIT) {
      setText(newText);
      if (error) {
        setError(null);
      }
    }
  };

  const checkGrammar = async () => {
    if (!text.trim()) {
      setError('Please enter some text to check.');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setResult(null);

      const response = await fetch(
        "https://typogrammar-ai.elomami1976.workers.dev",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            type: "grammar",
            text: text.trim()
          })
        }
      );

      const rawText = await response.text();

      let data: { result?: string; error?: string | object };
      try {
        data = JSON.parse(rawText);
      } catch {
        throw new Error("Invalid JSON returned: " + rawText);
      }

      if (!response.ok) {
        throw new Error(
          typeof data.error === "string"
            ? data.error
            : JSON.stringify(data.error || data)
        );
      }

      if (data.result) {
        setResult(data.result);
        // Save to localStorage history (max 3 entries)
        setHistory(prev => {
          const entry: HistoryEntry = { text: text.trim().slice(0, 200), result: data.result as string, timestamp: Date.now() };
          const updated = [entry, ...prev].slice(0, 3);
          try { localStorage.setItem(HISTORY_KEY, JSON.stringify(updated)); } catch { /* storage full */ }
          return updated;
        });
      } else {
        throw new Error('No result received from server.');
      }

    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(typeof err.message === "string" ? err.message : JSON.stringify(err));
      } else if (typeof err === "string") {
        setError(err);
      } else {
        setError(JSON.stringify(err) || 'An unexpected error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      checkGrammar();
    }
  };

  const scrollToTool = () => {
    const toolSection = document.getElementById('grammar-tool');
    if (toolSection) {
      toolSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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
    "name": "Typogrammar Grammar Checker",
    "description": "Free AI-powered grammar checker for academic writing, IELTS preparation, and professional emails. Check grammar, spelling, and style instantly.",
    "url": "https://typogrammar.com/grammar-checker",
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
        "name": "Grammar Checker",
        "item": "https://typogrammar.com/grammar-checker"
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
            <li className="text-slate-900 dark:text-slate-100 font-medium">Grammar Checker</li>
          </ol>
        </nav>

        {/* H1 - Main Heading */}
        <header className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-tight">
            Free AI Grammar Checker <span className="text-blue-600 dark:text-blue-400">(Instant & Accurate)</span>
          </h1>
          
          {/* Intro Paragraph - 150-200 words */}
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed mb-6">
            Welcome to Typogrammar's <strong>free AI grammar checker</strong>—your instant solution for polishing essays, 
            professional emails, and academic writing. Whether you're preparing for <strong>IELTS</strong>, <strong>TOEFL</strong>, 
            or crafting important business correspondence, our advanced AI technology detects and corrects grammar mistakes in seconds. 
            Unlike basic spell checkers, our tool analyzes sentence structure, verb tense consistency, subject-verb agreement, 
            and academic tone to help you write with confidence.
          </p>
          <p className="text-base text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8">
            <strong>No sign-up required</strong>. Simply paste your text below and get instant corrections. 
            Perfect for students, professionals, non-native English speakers, and anyone who wants to communicate more effectively. 
            Start improving your writing today—it's 100% free and processes your text securely without storing any data.
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToTool}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 transform"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Start Checking Your Grammar Now – It's 100% Free
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </header>

        {/* TOOL UI SECTION */}
        <section id="grammar-tool" className="mb-12 scroll-mt-8">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 border border-slate-200 dark:border-slate-700">
            <label
              htmlFor="grammar-input"
              className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
            >
              Enter your text to check:
            </label>
            <textarea
              id="grammar-input"
              value={text}
              onChange={handleTextChange}
              onKeyDown={handleKeyPress}
              placeholder="Type or paste your text here... (Press Ctrl+Enter to check)"
              className="w-full min-h-[120px] sm:min-h-[160px] p-4 border border-slate-300 dark:border-slate-600 rounded-lg 
                       focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                       bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100
                       placeholder-slate-400 dark:placeholder-slate-500
                       resize-y transition-colors text-[17px] leading-relaxed"
              disabled={loading}
            />
            
            <div className="flex justify-between items-center mt-2 text-sm">
              <div className="text-slate-600 dark:text-slate-400">
                <span className="font-medium">{wordCount}</span> words · {' '}
                <span className={characterCount > CHARACTER_LIMIT * 0.9 ? 'text-orange-600 dark:text-orange-400 font-medium' : ''}>
                  {characterCount}/{CHARACTER_LIMIT}
                </span> characters
              </div>
              {text.trim() && (
                <button
                  onClick={clearText}
                  className="text-slate-500 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-400 text-xs font-semibold flex items-center gap-1 transition-colors"
                  type="button"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Clear
                </button>
              )}
            </div>

            <button
              onClick={checkGrammar}
              disabled={loading || !text.trim()}
              className="w-full mt-4 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 
                       disabled:from-slate-300 disabled:to-slate-300 dark:disabled:from-slate-600 dark:disabled:to-slate-600
                       disabled:cursor-not-allowed disabled:opacity-50
                       text-white font-bold text-lg rounded-lg 
                       transition-all duration-200 
                       focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                       flex items-center justify-center gap-2 shadow-lg"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span>Checking Grammar...</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Check Grammar</span>
                </>
              )}
            </button>
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
            <div
              ref={resultRef}
              className="mt-6 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 
                       border border-green-200 dark:border-green-800 rounded-xl shadow-lg p-6"
            >
              <div className="flex items-start gap-3 mb-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <h2 className="text-2xl font-bold text-green-900 dark:text-green-200">
                  Grammar Check Results
                </h2>
              </div>

              {/* IELTS Band Estimate */}
              <div className="mb-4 flex items-center gap-3 bg-white/70 dark:bg-slate-800/70 rounded-lg px-4 py-3 border border-green-200 dark:border-green-700">
                <span className="text-2xl" aria-hidden="true">🎯</span>
                <div>
                  <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-0.5">
                    Estimated IELTS Writing Band
                  </p>
                  <p className="text-lg font-extrabold text-blue-700 dark:text-blue-300">
                    {estimateIELTSBand(result!)}
                    <span className="ml-2 text-xs font-normal text-slate-500 dark:text-slate-400">(rough estimate – fix errors to improve)</span>
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-lg p-5 border border-green-200 dark:border-green-700">
                <pre className="whitespace-pre-wrap font-sans text-slate-800 dark:text-slate-200 leading-relaxed">
                  {result}
                </pre>
              </div>

              {/* Check again shortcut */}
              <div className="mt-4 flex justify-end">
                <button
                  onClick={clearText}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-blue-700 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50 rounded-lg transition-colors"
                  type="button"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Check another text
                </button>
              </div>
            </div>
          )}

          {/* Recent Check History */}
          {history.length > 0 && !result && (
            <div className="mt-8">
              <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Recent checks
              </h3>
              <div className="space-y-2">
                {history.map((entry, i) => (
                  <button
                    key={entry.timestamp}
                    onClick={() => { setText(entry.text); setResult(entry.result); }}
                    className="w-full text-left bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
                    type="button"
                  >
                    <p className="text-sm text-slate-700 dark:text-slate-300 truncate">{entry.text}…</p>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                      {i === 0 ? 'Most recent' : `${Math.round((Date.now() - entry.timestamp) / 60000)} min ago`}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* What Is an AI Grammar Checker? */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            What Is an AI Grammar Checker?
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
            An <strong>AI grammar checker</strong> is an advanced tool that uses artificial intelligence and natural language processing (NLP) 
            to analyze your writing and identify grammatical errors, spelling mistakes, punctuation issues, and stylistic improvements. 
            Unlike traditional spell checkers that only flag misspelled words, AI grammar checkers understand context and sentence structure.
          </p>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Modern AI grammar checkers can detect complex errors like subject-verb disagreement, incorrect verb tenses, 
            misplaced modifiers, and awkward phrasing. They learn from vast amounts of text data to provide suggestions 
            that help you write more clearly and professionally—whether you're composing an email, essay, or academic paper.
          </p>
        </section>

        {/* How Our Grammar Checker Works */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            How Our Grammar Checker Works
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Paste Your Text</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Copy and paste your essay, email, or any text into the input box above.</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">2</span>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2">AI Analysis</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Our AI instantly analyzes grammar, spelling, punctuation, and style.</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/40 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">3</span>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Get Corrections</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Receive detailed feedback with corrected text and explanations.</p>
            </div>
          </div>
        </section>

        {/* What Errors Does It Detect? */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            What Errors Does It Detect?
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
            Our AI grammar checker identifies a comprehensive range of writing errors to help you produce polished, professional text:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Subject-Verb Agreement", desc: "Ensures subjects and verbs match in number and person" },
              { title: "Verb Tense Errors", desc: "Detects inconsistent or incorrect verb tense usage" },
              { title: "Punctuation Mistakes", desc: "Fixes commas, periods, apostrophes, and other punctuation" },
              { title: "Sentence Fragments", desc: "Identifies incomplete sentences missing subjects or verbs" },
              { title: "Run-on Sentences", desc: "Flags overly long sentences that need proper punctuation" },
              { title: "Academic Tone", desc: "Suggests formal alternatives for informal expressions" },
              { title: "Word Choice", desc: "Recommends better vocabulary and clearer phrasing" },
              { title: "Preposition Errors", desc: "Corrects common preposition misuse and collocations" }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                <svg className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">{item.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA After Errors Section */}
        <section className="mb-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Ready to Perfect Your Writing?</h3>
          <p className="text-blue-100 mb-6">Scroll up and paste your text to get instant grammar corrections.</p>
          <button
            onClick={scrollToTool}
            className="inline-flex items-center px-6 py-3 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            Check Grammar Now – It's Free
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </section>

        {/* Who Should Use This Grammar Checker? */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Who Should Use This Grammar Checker?
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
            Our AI grammar checker is designed for anyone who wants to write better English:
          </p>
          <div className="space-y-4">
            {[
              { title: "IELTS Students", desc: "Prepare for Writing Task 1 and Task 2 by eliminating common grammar errors that lower your band score. Our tool focuses on academic English standards tested in IELTS." },
              { title: "TOEFL Test Takers", desc: "Polish your integrated and independent writing tasks with instant grammar feedback tailored for academic English proficiency exams." },
              { title: "University Students", desc: "Submit error-free essays, research papers, and dissertations. Perfect for ESL students and native speakers alike who want to improve their academic writing." },
              { title: "Working Professionals", desc: "Write professional emails, reports, and presentations with confidence. First impressions matter—ensure your business communication is polished." },
              { title: "Non-Native English Speakers", desc: "Build confidence in your English writing skills with real-time corrections and explanations that help you learn while you write." }
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
                <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                  </svg>
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA After Use Cases */}
        <section className="mb-12 bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Join Thousands of Writers Who Trust Typogrammar</h3>
          <p className="text-green-100 mb-6">No account needed. No credit card required. Start checking your grammar instantly.</p>
          <button
            onClick={scrollToTool}
            className="inline-flex items-center px-6 py-3 bg-white text-green-700 font-bold rounded-lg hover:bg-green-50 transition-colors shadow-lg"
          >
            Start Checking Your Grammar Now
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </section>

        {/* Grammar Checker vs Spell Checker */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Grammar Checker vs Spell Checker
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
            Many people confuse grammar checkers with spell checkers. Here's the key difference:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
              <thead className="bg-slate-100 dark:bg-slate-700">
                <tr>
                  <th className="px-6 py-4 text-left font-bold text-slate-900 dark:text-slate-100">Feature</th>
                  <th className="px-6 py-4 text-left font-bold text-slate-900 dark:text-slate-100">Spell Checker</th>
                  <th className="px-6 py-4 text-left font-bold text-slate-900 dark:text-slate-100">Grammar Checker</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                <tr>
                  <td className="px-6 py-4 text-slate-700 dark:text-slate-300">Misspelled words</td>
                  <td className="px-6 py-4 text-green-600 dark:text-green-400 font-semibold">✓ Yes</td>
                  <td className="px-6 py-4 text-green-600 dark:text-green-400 font-semibold">✓ Yes</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-slate-700 dark:text-slate-300">Subject-verb agreement</td>
                  <td className="px-6 py-4 text-red-600 dark:text-red-400 font-semibold">✗ No</td>
                  <td className="px-6 py-4 text-green-600 dark:text-green-400 font-semibold">✓ Yes</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-slate-700 dark:text-slate-300">Verb tense errors</td>
                  <td className="px-6 py-4 text-red-600 dark:text-red-400 font-semibold">✗ No</td>
                  <td className="px-6 py-4 text-green-600 dark:text-green-400 font-semibold">✓ Yes</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-slate-700 dark:text-slate-300">Punctuation rules</td>
                  <td className="px-6 py-4 text-red-600 dark:text-red-400 font-semibold">✗ No</td>
                  <td className="px-6 py-4 text-green-600 dark:text-green-400 font-semibold">✓ Yes</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-slate-700 dark:text-slate-300">Sentence structure</td>
                  <td className="px-6 py-4 text-red-600 dark:text-red-400 font-semibold">✗ No</td>
                  <td className="px-6 py-4 text-green-600 dark:text-green-400 font-semibold">✓ Yes</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-slate-700 dark:text-slate-300">Style suggestions</td>
                  <td className="px-6 py-4 text-red-600 dark:text-red-400 font-semibold">✗ No</td>
                  <td className="px-6 py-4 text-green-600 dark:text-green-400 font-semibold">✓ Yes</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-slate-700 dark:text-slate-300">Word choice improvements</td>
                  <td className="px-6 py-4 text-red-600 dark:text-red-400 font-semibold">✗ No</td>
                  <td className="px-6 py-4 text-green-600 dark:text-green-400 font-semibold">✓ Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Is This Better Than Grammarly? */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Is This Better Than Grammarly?
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
            Both Typogrammar and Grammarly are powerful grammar checking tools, but they serve different purposes. 
            Grammarly is a general-purpose writing assistant designed for broad audiences and multiple use cases.
          </p>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
            <strong>Typogrammar's grammar checker</strong> is specifically built for <strong>academic and exam preparation contexts</strong>. 
            If you're preparing for IELTS, TOEFL, or working on university-level writing, our tool focuses on the exact error types 
            that affect your scores and academic credibility.
          </p>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Additionally, Typogrammar's grammar checker is <strong>completely free</strong> with no premium tiers, 
            and it integrates with our comprehensive library of grammar lessons, vocabulary resources, and practice exercises—giving you 
            a complete learning ecosystem rather than just a standalone tool.
          </p>
        </section>

        {/* Why Choose Typogrammar? */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Why Choose Typogrammar?
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
              <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                Academic Focus
              </h3>
              <p className="text-slate-700 dark:text-slate-300">Purpose-built for essays, research papers, and exam writing with academic English standards.</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
              <h3 className="font-bold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Exam Preparation
              </h3>
              <p className="text-slate-700 dark:text-slate-300">Ideal for IELTS, TOEFL, Cambridge, and other English proficiency test preparation.</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
              <h3 className="font-bold text-purple-900 dark:text-purple-100 mb-2 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Secure Processing
              </h3>
              <p className="text-slate-700 dark:text-slate-300">Your text is never stored. We process it securely and delete it immediately after checking.</p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6 border border-orange-200 dark:border-orange-800">
              <h3 className="font-bold text-orange-900 dark:text-orange-100 mb-2 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
                100% Free Access
              </h3>
              <p className="text-slate-700 dark:text-slate-300">No sign-up required, no premium features hidden behind paywalls. Completely free forever.</p>
            </div>
            <div className="bg-cyan-50 dark:bg-cyan-900/20 rounded-lg p-6 border border-cyan-200 dark:border-cyan-800 sm:col-span-2">
              <h3 className="font-bold text-cyan-900 dark:text-cyan-100 mb-2 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
                Integrated Learning Resources
              </h3>
              <p className="text-slate-700 dark:text-slate-300">Access comprehensive grammar lessons, vocabulary builders, and practice exercises alongside your grammar checking—a complete learning ecosystem.</p>
            </div>
          </div>
        </section>

        {/* Improve Your Grammar Further - Internal Links */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Improve Your Grammar Further
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
            Grammar checking is just the first step. To truly master English writing, explore our comprehensive learning resources:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link to="/grammar/verb-tenses" className="block p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 transition-colors group">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Master Verb Tenses</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Learn all 12 English tenses with examples and exercises.</p>
            </Link>
            <Link to="/ielts/ielts-writing-task-2-essay-types" className="block p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 transition-colors group">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">IELTS Writing Task 2</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Complete guide to all IELTS essay types with sample answers.</p>
            </Link>
            <Link to="/commonly-confused-words" className="block p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 transition-colors group">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Common Grammar Mistakes</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Avoid the most frequently confused words in English.</p>
            </Link>
            <Link to="/ielts/vocabulary/band-7" className="block p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 transition-colors group">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">IELTS Vocabulary</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Build your academic vocabulary for Band 7+ scores.</p>
            </Link>
            <Link to="/writing/how-to-paraphrase" className="block p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 transition-colors group">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">How to Paraphrase</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Learn effective paraphrasing techniques for academic writing.</p>
            </Link>
            <Link to="/interactive-exercises" className="block p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 transition-colors group">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Interactive Exercises</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Practice grammar with fill-in-the-blank and matching exercises.</p>
            </Link>
          </div>
        </section>

        {/* Related Tools */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Related Tools
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
            Explore more free tools to enhance your English writing and learning:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link to="/writing/how-to-paraphrase" className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-lg border border-purple-200 dark:border-purple-700 hover:border-purple-400 dark:hover:border-purple-500 transition-colors">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-purple-900 dark:text-purple-100">Paraphrasing Guide</h3>
                <p className="text-sm text-purple-700 dark:text-purple-300">Learn techniques to rewrite text in your own words.</p>
              </div>
            </Link>
            <Link to="/writing-assistant" className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 rounded-lg border border-green-200 dark:border-green-700 hover:border-green-400 dark:hover:border-green-500 transition-colors">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-green-900 dark:text-green-100">Writing Assistant</h3>
                <p className="text-sm text-green-700 dark:text-green-300">Get AI-powered help with your writing projects.</p>
              </div>
            </Link>
            <Link to="/ielts/ielts-writing-task-2-essay-types" className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-lg border border-blue-200 dark:border-blue-700 hover:border-blue-400 dark:hover:border-blue-500 transition-colors">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-blue-900 dark:text-blue-100">IELTS Essay Guide</h3>
                <p className="text-sm text-blue-700 dark:text-blue-300">Master all 5 IELTS Writing Task 2 essay types.</p>
              </div>
            </Link>
            <Link to="/quizzes/verb-tenses-quiz" className="flex items-center gap-4 p-4 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 rounded-lg border border-orange-200 dark:border-orange-700 hover:border-orange-400 dark:hover:border-orange-500 transition-colors">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-orange-900 dark:text-orange-100">Verb Tenses Quiz</h3>
                <p className="text-sm text-orange-700 dark:text-orange-300">Test your knowledge of English verb tenses.</p>
              </div>
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
          <h3 className="text-2xl font-bold text-white mb-3">Start Writing Better English Today</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Our free AI grammar checker has helped thousands of students and professionals improve their writing. 
            No sign-up, no fees—just accurate grammar checking in seconds.
          </p>
          <button
            onClick={scrollToTool}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-lg rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Check Your Grammar Now – It's 100% Free
          </button>
        </section>

        {/* Trust Signals */}
        <section className="text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            <strong>Trusted by students worldwide</strong> · Used for IELTS, TOEFL, and academic writing preparation · 
            Built by <Link to="/about/editorial-team" className="text-blue-600 dark:text-blue-400 hover:underline">language experts</Link> at Typogrammar
          </p>
        </section>
      </article>
    </div>
  );
};

export default GrammarCheckerPage;
