import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';

// SEO Meta:
// Title: Free AI Paraphrasing Tool - Rewrite Sentences Instantly | Typogrammar
// Description: Paraphrase text instantly with our free AI paraphrasing tool. Perfect for IELTS, academic essays, and plagiarism prevention. No sign-up required. Rewrite sentences online now.

// FAQ Data for SEO and rendering
const faqData = [
  {
    question: "Is this paraphrasing tool really free?",
    answer: "Yes, the Typogrammar Paraphrasing Tool is 100% free to use with no sign-up required. You can paraphrase unlimited text without any hidden fees or subscription requirements."
  },
  {
    question: "How accurate is the AI paraphraser?",
    answer: "Our AI paraphraser uses advanced language models to rewrite text while preserving the original meaning. It produces natural, fluent paraphrases suitable for academic writing, IELTS preparation, and professional communication."
  },
  {
    question: "Can I use this for IELTS Writing Task 2?",
    answer: "Absolutely! Our paraphrasing tool is specifically designed for academic writing, making it ideal for IELTS Writing Task 1 and Task 2, where paraphrasing skills are essential for achieving higher band scores."
  },
  {
    question: "Does paraphrasing avoid plagiarism?",
    answer: "Proper paraphrasing helps avoid plagiarism by expressing ideas in your own words. However, you should always cite your sources even when paraphrasing. Our tool helps you rewrite text, but academic integrity requires proper attribution."
  },
  {
    question: "Is my text secure and private?",
    answer: "Yes, your text is processed securely and is not stored on our servers. We do not save, share, or use your content for any purpose other than providing paraphrased text during your session."
  },
  {
    question: "What is the difference between paraphrasing and summarizing?",
    answer: "Paraphrasing rewrites text in different words while keeping the same length and meaning. Summarizing condenses text to its main points, making it shorter. Both are important academic skills with different purposes."
  },
  {
    question: "Can I paraphrase in different writing styles?",
    answer: "Our AI paraphraser maintains the academic tone suitable for formal writing. It focuses on clarity, precision, and proper academic register-perfect for essays, research papers, and exam preparation."
  },
  {
    question: "What is the character limit for paraphrasing?",
    answer: "You can paraphrase up to 3,000 characters per submission. For longer texts, we recommend paraphrasing paragraph by paragraph for more accurate and controlled results."
  }
];

const ParaphrasingToolPage: React.FC = () => {
  usePageMetadata({
    title: 'Free AI Paraphrasing Tool - Rewrite Sentences Instantly | Typogrammar',
    description: 'Paraphrase text instantly with our free AI paraphrasing tool. Perfect for IELTS, academic essays, and plagiarism prevention. No sign-up required. Rewrite sentences online now.',
    canonical: 'https://typogrammar.com/paraphrasing-tool/'
  });

  const [text, setText] = useState<string>('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const CHARACTER_LIMIT = 3000;
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const characterCount = text.length;

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

  const paraphraseText = async () => {
    if (!text.trim()) {
      setError('Please enter some text to paraphrase.');
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
            type: "paraphrase",
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
      paraphraseText();
    }
  };

  const scrollToTool = () => {
    const toolSection = document.getElementById('paraphrase-tool');
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
    "name": "Typogrammar Paraphrasing Tool",
    "description": "Free AI-powered paraphrasing tool for academic writing, IELTS preparation, and essay rewriting. Rewrite sentences and avoid plagiarism instantly.",
    "url": "https://typogrammar.com/paraphrasing-tool",
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
        "name": "Paraphrasing Tool",
        "item": "https://typogrammar.com/paraphrasing-tool"
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
            <li className="text-slate-900 dark:text-slate-100 font-medium">Paraphrasing Tool</li>
          </ol>
        </nav>

        {/* H1 - Main Heading */}
        <header className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-tight">
            Free AI Paraphrasing Tool <span className="text-blue-600 dark:text-blue-400">(Rewrite Sentences Instantly)</span>
          </h1>
          
          {/* Intro Paragraph - 150-200 words */}
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed mb-6">
            Welcome to Typogrammar's <strong>free AI paraphrasing tool</strong>-your instant solution for rewriting sentences, 
            improving academic essays, and avoiding plagiarism. Whether you're preparing for <strong>IELTS</strong>, working on 
            university assignments, or polishing professional documents, our advanced AI technology helps you express ideas 
            in fresh, original language while preserving the original meaning.
          </p>
          <p className="text-base text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8">
            Paraphrasing is a critical skill in academic writing. It demonstrates your understanding of source material and helps 
            you integrate research into your own work. Our <strong>AI paraphraser</strong> generates natural, fluent rewrites instantly-perfect 
            for students, researchers, and professionals. <strong>No sign-up required</strong>. Simply paste your text below and get 
            instant paraphrased content. It's <strong>100% free</strong> and processes your text securely without storing any data.
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToTool}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 transform"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Start Paraphrasing Now - It's Free
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </header>

        {/* TOOL UI SECTION */}
        <section id="paraphrase-tool" className="mb-12 scroll-mt-8">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 border border-slate-200 dark:border-slate-700">
            <label
              htmlFor="paraphrase-input"
              className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
            >
              Enter your text to paraphrase:
            </label>
            <textarea
              id="paraphrase-input"
              value={text}
              onChange={handleTextChange}
              onKeyDown={handleKeyPress}
              placeholder="Type or paste your text here... (Press Ctrl+Enter to paraphrase)"
              className="w-full min-h-48 p-4 border border-slate-300 dark:border-slate-600 rounded-lg 
                       focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                       bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100
                       placeholder-slate-400 dark:placeholder-slate-500
                       resize-y transition-colors"
              disabled={loading}
            />
            
            <div className="flex justify-between items-center mt-2 text-sm">
              <div className="text-slate-600 dark:text-slate-400">
                <span className="font-medium">{wordCount}</span> words · {' '}
                <span className={characterCount > CHARACTER_LIMIT * 0.9 ? 'text-teal-600 dark:text-teal-400 font-medium' : ''}>
                  {characterCount}/{CHARACTER_LIMIT}
                </span> characters
              </div>
            </div>

            <button
              onClick={paraphraseText}
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
                  <span>Paraphrasing...</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span>Paraphrase Text</span>
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
              className="mt-6 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 
                       border border-purple-200 dark:border-purple-800 rounded-xl shadow-lg p-6"
            >
              <div className="flex items-start gap-3 mb-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <h2 className="text-2xl font-bold text-purple-900 dark:text-purple-200">
                  Paraphrased Text
                </h2>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-5 border border-purple-200 dark:border-purple-700">
                <pre className="whitespace-pre-wrap font-sans text-slate-800 dark:text-slate-200 leading-relaxed">
                  {result}
                </pre>
              </div>
            </div>
          )}
        </section>

        {/* What Is a Paraphrasing Tool? */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            What Is a Paraphrasing Tool?
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
            A <strong>paraphrasing tool</strong> is an AI-powered application that rewrites text while preserving its original meaning. 
            Unlike simple word replacement or synonym swapping, advanced paraphrasers understand context, sentence structure, and 
            semantic relationships to produce natural, fluent rewrites.
          </p>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Our AI paraphraser analyzes your input text, identifies key ideas and relationships, and generates alternative expressions 
            that maintain the same meaning. This is essential for academic writing, where you need to incorporate source material 
            into your own work without copying verbatim.
          </p>
        </section>

        {/* How Our AI Paraphraser Works */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            How Our AI Paraphraser Works
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Paste Your Text</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Copy and paste the sentence, paragraph, or passage you want to paraphrase.</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/40 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">2</span>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2">AI Processing</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Our AI analyzes meaning, context, and structure to generate alternatives.</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">3</span>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Get Paraphrased Text</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Receive natural, fluent rewrites that preserve the original meaning.</p>
            </div>
          </div>
        </section>

        {/* When Should You Use a Paraphrasing Tool? */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            When Should You Use a Paraphrasing Tool?
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
            Paraphrasing tools are valuable in many academic and professional situations:
          </p>
          <div className="space-y-4">
            {[
              { title: "Academic Essays & Research Papers", desc: "Integrate source material into your writing while demonstrating understanding. Paraphrasing shows you can explain concepts in your own words." },
              { title: "IELTS Writing Task 2", desc: "Paraphrase the essay question in your introduction to show lexical resource. IELTS examiners reward candidates who can express ideas using varied vocabulary." },
              { title: "Avoiding Plagiarism", desc: "Rewrite information from sources to avoid direct copying. Always remember to cite your sources even when paraphrasing-it's about integrity, not just avoiding detection." },
              { title: "Improving Clarity", desc: "Sometimes your first draft isn't as clear as it could be. Paraphrasing helps you find better ways to express complex ideas." },
              { title: "Learning English", desc: "See how the same idea can be expressed differently. This expands your vocabulary and understanding of English sentence structures." }
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
                <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA After Use Cases */}
        <section className="mb-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Ready to Rewrite Your Text?</h3>
          <p className="text-purple-100 mb-6">Scroll up and paste your text to get instant paraphrased content.</p>
          <button
            onClick={scrollToTool}
            className="inline-flex items-center px-6 py-3 bg-white text-purple-700 font-bold rounded-lg hover:bg-purple-50 transition-colors shadow-lg"
          >
            Paraphrase Now - It's Free
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </section>

        {/* Is This Tool Safe for IELTS and Academic Writing? */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Is This Tool Safe for IELTS and Academic Writing?
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
            Yes, our paraphrasing tool is designed specifically with <strong>academic and IELTS writing</strong> in mind. 
            The AI produces formal, academic-appropriate language that meets the standards expected in university essays and 
            English proficiency exams.
          </p>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
            <strong>For IELTS candidates:</strong> Paraphrasing the question in your introduction is a proven technique for 
            demonstrating lexical resource (vocabulary range). Our tool helps you practice this skill and see various ways to 
            express the same ideas-essential for achieving Band 7+ scores.
          </p>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            <strong>Important:</strong> While our tool helps you learn paraphrasing techniques, in actual exams you must 
            paraphrase independently. Use this tool as a learning aid to develop your skills, not as a substitute for genuine learning.
          </p>
        </section>

        {/* Paraphrasing vs Summarizing */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Paraphrasing vs Summarizing
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
            Students often confuse paraphrasing with summarizing. Here's the key difference:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
              <thead className="bg-slate-100 dark:bg-slate-700">
                <tr>
                  <th className="px-6 py-4 text-left font-bold text-slate-900 dark:text-slate-100">Aspect</th>
                  <th className="px-6 py-4 text-left font-bold text-slate-900 dark:text-slate-100">Paraphrasing</th>
                  <th className="px-6 py-4 text-left font-bold text-slate-900 dark:text-slate-100">Summarizing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-700 dark:text-slate-300">Length</td>
                  <td className="px-6 py-4 text-slate-700 dark:text-slate-300">Similar to original</td>
                  <td className="px-6 py-4 text-slate-700 dark:text-slate-300">Shorter than original</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-700 dark:text-slate-300">Purpose</td>
                  <td className="px-6 py-4 text-slate-700 dark:text-slate-300">Restate in different words</td>
                  <td className="px-6 py-4 text-slate-700 dark:text-slate-300">Condense main points</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-700 dark:text-slate-300">Detail Level</td>
                  <td className="px-6 py-4 text-slate-700 dark:text-slate-300">All details preserved</td>
                  <td className="px-6 py-4 text-slate-700 dark:text-slate-300">Only key points included</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-700 dark:text-slate-300">When to Use</td>
                  <td className="px-6 py-4 text-slate-700 dark:text-slate-300">Specific ideas/quotes</td>
                  <td className="px-6 py-4 text-slate-700 dark:text-slate-300">Overall article/chapter</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-700 dark:text-slate-300">Citation Needed</td>
                  <td className="px-6 py-4 text-green-600 dark:text-green-400 font-semibold">Yes</td>
                  <td className="px-6 py-4 text-green-600 dark:text-green-400 font-semibold">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Improve Your Writing Further - Internal Links */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Improve Your Writing Further
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
            Paraphrasing is just one skill in academic writing. Explore our comprehensive learning resources to master English writing:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link to="/grammar-checker/" className="block p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 transition-colors group">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Grammar Checker</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Check your paraphrased text for grammar errors instantly.</p>
            </Link>
            <Link to="/ielts/ielts-writing-task-2-essay-types/" className="block p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 transition-colors group">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">IELTS Writing Task 2</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Master all IELTS essay types with sample answers.</p>
            </Link>
            <Link to="/commonly-confused-words/" className="block p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 transition-colors group">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Common Grammar Mistakes</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Avoid frequently confused words in your writing.</p>
            </Link>
            <Link to="/ielts/vocabulary/band-7/" className="block p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 transition-colors group">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">IELTS Vocabulary</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Expand your vocabulary for better paraphrasing.</p>
            </Link>
            <Link to="/writing/how-to-paraphrase/" className="block p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 transition-colors group">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Paraphrasing Guide</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Learn manual paraphrasing techniques step by step.</p>
            </Link>
            <Link to="/grammar/verb-tenses/" className="block p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 transition-colors group">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Master Verb Tenses</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Essential for accurate paraphrasing and writing.</p>
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
            <Link to="/grammar-checker/" className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 rounded-lg border border-green-200 dark:border-green-700 hover:border-green-400 dark:hover:border-green-500 transition-colors">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-green-900 dark:text-green-100">Grammar Checker</h3>
                <p className="text-sm text-green-700 dark:text-green-300">Check grammar, spelling, and punctuation instantly.</p>
              </div>
            </Link>
            <Link to="/ielts/ielts-writing-task-2-essay-types/" className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-lg border border-blue-200 dark:border-blue-700 hover:border-blue-400 dark:hover:border-blue-500 transition-colors">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-blue-900 dark:text-blue-100">IELTS Writing Guide</h3>
                <p className="text-sm text-blue-700 dark:text-blue-300">Master all 5 IELTS Writing Task 2 essay types.</p>
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
          <h3 className="text-2xl font-bold text-white mb-3">Start Paraphrasing Better Today</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Our free AI paraphrasing tool has helped thousands of students and professionals improve their writing. 
            No sign-up, no fees-just instant, natural paraphrases in seconds.
          </p>
          <button
            onClick={scrollToTool}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold text-lg rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Paraphrase Your Text Now - It's 100% Free
          </button>
        </section>

        {/* Trust Signals */}
        <section className="text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            <strong>Trusted by students worldwide</strong> · Used for IELTS, TOEFL, and academic writing preparation · 
            Built by <Link to="/about/editorial-team/" className="text-blue-600 dark:text-blue-400 hover:underline">language experts</Link> at Typogrammar
          </p>
        </section>
      </article>
    </div>
  );
};

export default ParaphrasingToolPage;
