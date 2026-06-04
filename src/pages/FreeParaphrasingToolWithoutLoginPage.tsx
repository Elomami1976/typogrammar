import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';

// SEO Meta:
// Title: Free Paraphrasing Tool Without Login (No Sign Up) | TypoGrammar
// Description: Use our free paraphrasing tool without login. Rewrite sentences instantly with no sign up, no registration, and no hidden limits.

const FreeParaphrasingToolWithoutLoginPage: React.FC = () => {
  usePageMetadata({
    title: 'Free Paraphrasing Tool Without Login (No Sign Up) | TypoGrammar',
    description: 'Use our free paraphrasing tool without login. Rewrite sentences instantly with no sign up, no registration, and no hidden limits.',
    canonical: 'https://typogrammar.com/free-paraphrasing-tool-without-login/'
  });

  const [text, setText] = useState<string>('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
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

  const copyToClipboard = () => {
    if (result) {
      navigator.clipboard.writeText(result);
    }
  };

  // JSON-LD FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is this paraphrasing tool free without login?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. You can use the TypoGrammar paraphrasing tool without creating an account or signing up."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to register to use this tool?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No registration or email verification is required. You can start rewriting text instantly."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use this for IELTS writing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. It is suitable for IELTS writing practice, academic essays, and general writing improvement."
        }
      }
    ]
  };

  const webApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Free Paraphrasing Tool Without Login",
    "description": "Use our free paraphrasing tool without login. Rewrite sentences instantly with no sign up, no registration, and no hidden limits.",
    "url": "https://typogrammar.com/free-paraphrasing-tool-without-login",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "creator": {
      "@type": "Organization",
      "name": "TypoGrammar",
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
        "name": "AI Writing Tools",
        "item": "https://typogrammar.com/ai-writing-tools"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Free Paraphrasing Tool Without Login",
        "item": "https://typogrammar.com/free-paraphrasing-tool-without-login"
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
            <li><Link to="/ai-writing-tools/" className="hover:text-blue-600 dark:hover:text-blue-400">AI Writing Tools</Link></li>
            <li><span className="mx-2">/</span></li>
            <li className="text-slate-900 dark:text-slate-100 font-medium">Free Paraphrasing Tool Without Login</li>
          </ol>
        </nav>

        {/* H1 - Main Heading */}
        <header className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-tight">
            Free Paraphrasing Tool Without Login <span className="text-blue-600 dark:text-blue-400">, Rewrite Text Instantly</span>
          </h1>
          
          {/* Intro Section */}
          <div className="text-left max-w-3xl mx-auto mb-8">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
              Looking for a <strong>free paraphrasing tool without login</strong>?
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
              You're in the right place.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              With TypoGrammar's AI-powered paraphrasing tool, you can rewrite sentences, paragraphs, and essays instantly, <strong>no sign up</strong>, no registration, no email required.
            </p>
            
            {/* Feature Checkmarks */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="flex items-center text-slate-700 dark:text-slate-300">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                100% Free
              </div>
              <div className="flex items-center text-slate-700 dark:text-slate-300">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                No login required
              </div>
              <div className="flex items-center text-slate-700 dark:text-slate-300">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Instant rewriting
              </div>
              <div className="flex items-center text-slate-700 dark:text-slate-300">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Clean, accurate results
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
              Try the Free Paraphrasing Tool Now
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Paste your text below and get an instant rewrite.
            </p>
            <button
              onClick={scrollToTool}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Start Paraphrasing - No Login Required
            </button>
          </div>
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
                       text-white font-bold rounded-lg transition-all duration-200 
                       disabled:cursor-not-allowed shadow-md hover:shadow-lg"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Paraphrasing...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Paraphrase Text
                </span>
              )}
            </button>

            {/* Error Message */}
            {error && (
              <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <p className="text-red-700 dark:text-red-400 text-sm">{error}</p>
              </div>
            )}
          </div>

          {/* Result Section */}
          {result && (
            <div ref={resultRef} className="mt-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  Paraphrased Result
                </h3>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copy
                </button>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <p className="text-slate-800 dark:text-slate-200 whitespace-pre-wrap leading-relaxed">{result}</p>
              </div>
            </div>
          )}
        </section>

        {/* Why Use a Paraphrasing Tool Without Login? */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Why Use a Paraphrasing Tool Without Login?
          </h2>
          
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
            Many online rewriting tools force users to:
          </p>
          
          <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 mb-6 space-y-2 ml-4">
            <li>Create an account</li>
            <li>Verify their email</li>
            <li>Upgrade to paid plans</li>
            <li>Deal with word limits</li>
          </ul>
          
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 font-semibold">
            That slows you down.
          </p>
          
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
            Our tool is built for:
          </p>
          
          <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 mb-6 space-y-2 ml-4">
            <li>Students rewriting essays</li>
            <li>IELTS & TOEFL preparation</li>
            <li>Academic writing improvement</li>
            <li>Bloggers improving clarity</li>
            <li>Professionals refining emails</li>
          </ul>
          
          <p className="text-lg text-slate-700 dark:text-slate-300 font-semibold">
            You get immediate access, no barriers.
          </p>
        </section>

        {/* What Is a Paraphrasing Tool? */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            What Is a Paraphrasing Tool?
          </h2>
          
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
            A paraphrasing tool is an AI-powered writing assistant that rewrites text while preserving the original meaning.
          </p>
          
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
            It helps you:
          </p>
          
          <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 mb-6 space-y-2 ml-4">
            <li>Avoid repetition</li>
            <li>Improve sentence structure</li>
            <li>Make writing clearer</li>
            <li>Reduce plagiarism risk</li>
            <li>Adjust tone and style</li>
          </ul>
          
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            Unlike basic synonym replacers, modern AI paraphrasing tools understand context, grammar, and flow.
          </p>
        </section>

        {/* Key Features */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Key Features
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
              <div className="text-2xl mb-3">🔹</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">Instant Sentence Rewriting</h3>
              <p className="text-slate-600 dark:text-slate-400">Rewrite single sentences or full paragraphs in seconds.</p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
              <div className="text-2xl mb-3">🔹</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">Context-Aware AI</h3>
              <p className="text-slate-600 dark:text-slate-400">The tool understands meaning, not just words.</p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
              <div className="text-2xl mb-3">🔹</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">No Registration Required</h3>
              <p className="text-slate-600 dark:text-slate-400">Start using it immediately.</p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
              <div className="text-2xl mb-3">🔹</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">Clean & Natural Output</h3>
              <p className="text-slate-600 dark:text-slate-400">No awkward phrasing. No robotic sentences.</p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            TypoGrammar vs Other Paraphrasing Tools
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-700">
                  <th className="px-6 py-4 text-left font-bold text-slate-900 dark:text-slate-100">Feature</th>
                  <th className="px-6 py-4 text-center font-bold text-slate-900 dark:text-slate-100">TypoGrammar</th>
                  <th className="px-6 py-4 text-center font-bold text-slate-900 dark:text-slate-100">Grammarly</th>
                  <th className="px-6 py-4 text-center font-bold text-slate-900 dark:text-slate-100">QuillBot</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                <tr>
                  <td className="px-6 py-4 text-slate-700 dark:text-slate-300">Free Access</td>
                  <td className="px-6 py-4 text-center text-green-600 dark:text-green-400 font-semibold">✅ Yes</td>
                  <td className="px-6 py-4 text-center text-slate-500 dark:text-slate-400">Limited</td>
                  <td className="px-6 py-4 text-center text-slate-500 dark:text-slate-400">Limited</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-slate-700 dark:text-slate-300">No Login Required</td>
                  <td className="px-6 py-4 text-center text-green-600 dark:text-green-400 font-semibold">✅ Yes</td>
                  <td className="px-6 py-4 text-center text-red-500 dark:text-red-400">❌ No</td>
                  <td className="px-6 py-4 text-center text-red-500 dark:text-red-400">❌ No</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-slate-700 dark:text-slate-300">Instant Results</td>
                  <td className="px-6 py-4 text-center text-green-600 dark:text-green-400 font-semibold">✅ Yes</td>
                  <td className="px-6 py-4 text-center text-green-600 dark:text-green-400">✅ Yes</td>
                  <td className="px-6 py-4 text-center text-green-600 dark:text-green-400">✅ Yes</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-slate-700 dark:text-slate-300">Clean UI</td>
                  <td className="px-6 py-4 text-center text-green-600 dark:text-green-400 font-semibold">✅ Yes</td>
                  <td className="px-6 py-4 text-center text-green-600 dark:text-green-400">✅ Yes</td>
                  <td className="px-6 py-4 text-center text-green-600 dark:text-green-400">✅ Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-lg text-slate-700 dark:text-slate-300 mt-6 leading-relaxed">
            If you want a <strong>free paraphrasing tool without sign up</strong>, TypoGrammar gives you direct access with no restrictions.
          </p>
        </section>

        {/* Who Should Use This Tool? */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Who Should Use This Tool?
          </h2>
          
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
            This tool is ideal for:
          </p>
          
          <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 mb-6 space-y-2 ml-4">
            <li>IELTS Writing Task 2 preparation</li>
            <li>Academic essays</li>
            <li>Research summaries</li>
            <li>Email rewriting</li>
            <li>Blog content editing</li>
            <li>Improving grammar and clarity</li>
          </ul>
          
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
            You can also combine it with our:
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/grammar-checker/" className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors font-medium">
              Free AI Grammar Checker →
            </Link>
            <Link to="/essay-topic-generator/" className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors font-medium">
              Essay Topic Generator →
            </Link>
            <Link to="/ai-writing-tools/" className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors font-medium">
              AI Writing Tools Suite →
            </Link>
          </div>
        </section>

        {/* Is This Paraphrasing Tool Really Free? */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Is This Paraphrasing Tool Really Free?
          </h2>
          
          <p className="text-xl text-slate-700 dark:text-slate-300 mb-4 font-semibold">
            Yes.
          </p>
          
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
            There is:
          </p>
          
          <ul className="text-slate-700 dark:text-slate-300 mb-6 space-y-2 ml-4">
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              No registration
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              No hidden fees
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              No subscription required
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              No watermark
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              No forced upgrades
            </li>
          </ul>
          
          <p className="text-lg text-slate-700 dark:text-slate-300 font-semibold">
            You can use it instantly.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Is this paraphrasing tool free without login?</h3>
              <p className="text-slate-600 dark:text-slate-400">Yes. You can use it without creating an account.</p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Does it save my text?</h3>
              <p className="text-slate-600 dark:text-slate-400">No personal account is required. Your text is processed instantly.</p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Can I use it for academic writing?</h3>
              <p className="text-slate-600 dark:text-slate-400">Yes, but always review the output to ensure it matches your intended meaning.</p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Is this better than manual rewriting?</h3>
              <p className="text-slate-600 dark:text-slate-400">It saves time and improves clarity, but human review is always recommended.</p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Does it detect plagiarism?</h3>
              <p className="text-slate-600 dark:text-slate-400">No. This tool rewrites text. For plagiarism detection, use a dedicated checker.</p>
            </div>
          </div>
        </section>

        {/* Why Choose TypoGrammar? */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Why Choose TypoGrammar?
          </h2>
          
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
            TypoGrammar is more than a single tool.
          </p>
          
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
            It is a complete English learning and writing improvement platform offering:
          </p>
          
          <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 mb-6 space-y-2 ml-4">
            <li>Grammar lessons</li>
            <li>Writing guides</li>
            <li>IELTS preparation resources</li>
            <li>AI-powered writing tools</li>
          </ul>
          
          <p className="text-lg text-slate-700 dark:text-slate-300 font-semibold">
            If you need fast rewriting without login, this tool is built for you.
          </p>
        </section>

        {/* Final CTA */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Paraphrase Your Text?
          </h2>
          <p className="text-blue-100 mb-6">
            No sign up. No login. Just paste and rewrite.
          </p>
          <button
            onClick={scrollToTool}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-blue-700 bg-white rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-lg"
          >
            Start Free Paraphrasing Now
          </button>
        </section>
      </article>
    </div>
  );
};

export default FreeParaphrasingToolWithoutLoginPage;
