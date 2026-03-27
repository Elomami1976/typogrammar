import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';

// SEO Meta:
// Title: Free Essay Topic Generator – IELTS & Academic Writing Prompts | Typogrammar
// Description: Generate random essay topics for IELTS Writing Task 2 and academic essays. Practice with argumentative, opinion, and discussion essay prompts. Free, no sign-up required.

// FAQ Data for SEO and rendering
const faqData = [
  {
    question: "How does the essay topic generator work?",
    answer: "Our AI-powered essay topic generator creates unique, exam-relevant essay prompts based on your selected category. Each topic follows the structure and style of real IELTS Writing Task 2 questions and academic essay prompts."
  },
  {
    question: "Are these topics similar to real IELTS questions?",
    answer: "Yes, our essay topics are designed to mirror the structure, themes, and difficulty level of actual IELTS Writing Task 2 questions. They cover the same categories tested in real exams: education, technology, environment, society, economy, health, and more."
  },
  {
    question: "Can I use these topics for academic essay practice?",
    answer: "Absolutely! While designed with IELTS in mind, these essay prompts work perfectly for general academic writing practice, university assignments, English proficiency test preparation, and developing argumentative writing skills."
  },
  {
    question: "How many topics can I generate?",
    answer: "You can generate unlimited essay topics completely free. There's no cap on usage, and you don't need to create an account. Keep generating until you find topics that challenge you."
  },
  {
    question: "What types of essay topics are included?",
    answer: "Our generator produces various essay types including opinion essays, discussion essays, advantages/disadvantages essays, problem-solution essays, and two-part question essays—all common formats in IELTS and academic writing."
  },
  {
    question: "Is this tool free to use?",
    answer: "Yes, our essay topic generator is 100% free with no sign-up required. We believe every student should have access to quality practice materials without barriers."
  },
  {
    question: "How should I practice with these essay topics?",
    answer: "For best results: 1) Set a 40-minute timer (like real IELTS), 2) Write a full 250+ word essay, 3) Use our Grammar Checker to review your work, 4) Compare your response to model answers in our IELTS Writing guides."
  },
  {
    question: "Can I choose the essay topic category?",
    answer: "Yes! You can select a specific category (Education, Technology, Environment, Society, Economy, Health) or generate from all categories combined. This helps you practice topics in areas where you need improvement."
  }
];

// Common IELTS essay themes for content section
const commonThemes = [
  { category: "Education", examples: ["Online learning vs traditional education", "University education free for all", "Gap year before university", "Teaching methods effectiveness"] },
  { category: "Technology", examples: ["Social media impact on society", "Artificial intelligence in the workplace", "Children and screen time", "Automation and employment"] },
  { category: "Environment", examples: ["Climate change responsibility", "Plastic pollution solutions", "Renewable energy adoption", "Wildlife conservation priorities"] },
  { category: "Society", examples: ["Aging population challenges", "Gender equality progress", "Work-life balance importance", "Urbanization effects"] },
  { category: "Economy", examples: ["Globalization benefits and drawbacks", "Tourism impact on local communities", "Consumerism in modern society", "Income inequality solutions"] },
  { category: "Health", examples: ["Public health vs individual responsibility", "Fast food regulation", "Mental health awareness", "Healthcare system funding"] }
];

const EssayTopicGeneratorPage: React.FC = () => {
  usePageMetadata({
    title: 'Free Essay Topic Generator – IELTS & Academic Writing Prompts | Typogrammar',
    description: 'Generate random essay topics for IELTS Writing Task 2 and academic essays. Practice with argumentative, opinion, and discussion essay prompts. Free, no sign-up required.',
    canonical: 'https://typogrammar.com/essay-topic-generator'
  });

  const [category, setCategory] = useState<string>('all');
  const [topic, setTopic] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [generatedCount, setGeneratedCount] = useState<number>(0);

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'education', label: 'Education' },
    { value: 'technology', label: 'Technology' },
    { value: 'environment', label: 'Environment' },
    { value: 'society', label: 'Society' },
    { value: 'economy', label: 'Economy' },
    { value: 'health', label: 'Health' }
  ];

  const generateTopic = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        "https://typogrammar-ai.elomami1976.workers.dev",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            type: "essay",
            category: category === 'all' ? undefined : category
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
        setTopic(data.result);
        setGeneratedCount(prev => prev + 1);
      } else {
        throw new Error('No topic received from server.');
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

  const scrollToTool = () => {
    const toolSection = document.getElementById('generator-tool');
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
    "name": "Essay Topic Generator",
    "description": "Free AI-powered essay topic generator for IELTS Writing Task 2 and academic essay practice. Generate random argumentative, opinion, and discussion essay prompts.",
    "url": "https://typogrammar.com/essay-topic-generator",
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
        "name": "Essay Topic Generator",
        "item": "https://typogrammar.com/essay-topic-generator"
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
            <li className="text-slate-900 dark:text-slate-100 font-medium">Essay Topic Generator</li>
          </ol>
        </nav>

        {/* H1 - Main Heading */}
        <header className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-tight">
            Free Essay Topic Generator <span className="text-blue-600 dark:text-blue-400">(IELTS & Academic Writing)</span>
          </h1>
          
          {/* Intro Paragraph */}
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed mb-6">
            Generate random <strong>essay topics</strong> for <strong>IELTS Writing Task 2</strong>, academic essays, and argumentative 
            writing practice. Our AI-powered generator creates unique, exam-relevant prompts covering education, technology, 
            environment, society, and more—matching the style and difficulty of real IELTS questions.
          </p>
          <p className="text-base text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8">
            Brainstorming essay ideas shouldn't be the hard part. Use our generator to get instant writing prompts and focus your 
            energy on crafting strong arguments. <strong>No sign-up required</strong>. <strong>100% free</strong>. 
            Perfect for IELTS students, university applicants, and anyone looking to improve their essay writing skills.
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToTool}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 transform"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Generate Essay Topic Now – It's Free
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </header>

        {/* GENERATOR TOOL SECTION */}
        <section id="generator-tool" className="mb-12 scroll-mt-8">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 border border-slate-200 dark:border-slate-700">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6 text-center">
              Generate Your Essay Topic
            </h2>
            
            {/* Category Selector */}
            <div className="mb-6">
              <label htmlFor="category" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Select Category (Optional)
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg 
                         focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                         bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
              >
                {categories.map(cat => (
                  <option key={cat.value} value={cat.value}>{cat.label}</option>
                ))}
              </select>
            </div>

            <button
              onClick={generateTopic}
              disabled={loading}
              className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 
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
                  <span>Generating Topic...</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Generate Essay Topic</span>
                </>
              )}
            </button>

            {generatedCount > 0 && (
              <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-2">
                Topics generated: {generatedCount}
              </p>
            )}
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

          {topic && (
            <div className="mt-6 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 
                         border border-green-200 dark:border-green-800 rounded-xl shadow-lg p-6">
              <div className="flex items-start gap-3 mb-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clipRule="evenodd" />
                </svg>
                <h3 className="text-xl font-bold text-green-900 dark:text-green-200">
                  Your Essay Topic
                </h3>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-5 border border-green-200 dark:border-green-700">
                <p className="text-lg text-slate-800 dark:text-slate-200 leading-relaxed italic">
                  "{topic}"
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  onClick={generateTopic}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Generate Another
                </button>
                <Link
                  to="/ielts/ielts-writing-task-2-essay-types"
                  className="inline-flex items-center px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-medium rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Learn Essay Structure
                </Link>
              </div>
            </div>
          )}
        </section>

        {/* Why Practice With Random Essay Topics? */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Why Practice With Random Essay Topics?
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
            Practicing with random essay topics is one of the most effective ways to prepare for <strong>IELTS Writing Task 2</strong> 
            and academic essays. Here's why:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Build Adaptability", desc: "In the real exam, you can't choose your topic. Random practice trains you to handle any subject confidently." },
              { title: "Expand Knowledge", desc: "Writing about unfamiliar topics forces you to think critically and develop opinions on diverse issues." },
              { title: "Improve Speed", desc: "Regular practice with new topics helps you brainstorm and outline faster under time pressure." },
              { title: "Identify Weaknesses", desc: "Random topics reveal which subject areas need more vocabulary building and background knowledge." }
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

        {/* How IELTS Writing Task 2 Topics Are Structured */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            How IELTS Writing Task 2 Topics Are Structured
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
            IELTS Writing Task 2 questions follow specific patterns. Understanding these structures helps you identify 
            what the examiner expects in your response:
          </p>
          <div className="space-y-4">
            {[
              { type: "Opinion Essay", instruction: "To what extent do you agree or disagree?", example: "Some people believe that children should be allowed to use smartphones from an early age. To what extent do you agree or disagree?" },
              { type: "Discussion Essay", instruction: "Discuss both views and give your opinion.", example: "Some people think that parents should teach children how to be good members of society. Others believe that school is the place to learn this. Discuss both views and give your own opinion." },
              { type: "Advantages/Disadvantages", instruction: "Discuss the advantages and disadvantages.", example: "More and more people are working from home rather than in offices. What are the advantages and disadvantages of this trend?" },
              { type: "Problem-Solution", instruction: "What are the problems and solutions?", example: "In many countries, the amount of household waste is increasing. What are the problems associated with this, and what solutions can be proposed?" },
              { type: "Two-Part Question", instruction: "Why...? What measures...?", example: "Many people today are overweight. Why do you think this is? What can be done to address this problem?" }
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded">
                    {item.type}
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    Key phrase: "{item.instruction}"
                  </span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-sm italic">
                  Example: {item.example}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12 bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Ready to Practice?</h3>
          <p className="text-green-100 mb-6">Generate a topic and start writing. No excuses—your IELTS score depends on practice!</p>
          <button
            onClick={scrollToTool}
            className="inline-flex items-center px-6 py-3 bg-white text-green-700 font-bold rounded-lg hover:bg-green-50 transition-colors shadow-lg"
          >
            Generate Essay Topic
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </section>

        {/* Common IELTS Essay Themes */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Common IELTS Essay Themes
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
            IELTS Writing Task 2 topics consistently appear in these major categories. Build your vocabulary and 
            ideas in each area:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {commonThemes.map((theme, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
                <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 text-sm font-bold">
                    {index + 1}
                  </span>
                  {theme.category}
                </h3>
                <ul className="space-y-1">
                  {theme.examples.map((example, i) => (
                    <li key={i} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Related Writing Resources - Internal Links */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Related Writing Resources
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
            Explore our comprehensive writing guides to improve your essay skills:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link to="/ielts/ielts-writing-task-2-essay-types" className="block p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 transition-colors group">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">IELTS Writing Task 2 Guide</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Master all 5 essay types with structures and examples.</p>
            </Link>
            <Link to="/paraphrasing-tool" className="block p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 transition-colors group">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Paraphrasing Tool</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Learn to paraphrase essay questions effectively.</p>
            </Link>
            <Link to="/grammar-checker" className="block p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 transition-colors group">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Grammar Checker</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Check your essays for grammar errors.</p>
            </Link>
            <Link to="/ielts/vocabulary/band-7" className="block p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 transition-colors group">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">IELTS Vocabulary</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Build topic-specific vocabulary for essays.</p>
            </Link>
            <Link to="/ielts/band-8-ielts-sample-answers" className="block p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 transition-colors group">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Band 8 Sample Essays</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Study high-scoring essay examples.</p>
            </Link>
            <Link to="/writing/how-to-build-an-argument" className="block p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 transition-colors group">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Building Arguments</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Learn to structure persuasive arguments.</p>
            </Link>
          </div>
        </section>

        {/* Related Tools */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            More Writing Tools
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link to="/grammar-checker" className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 rounded-lg border border-green-200 dark:border-green-700 hover:border-green-400 dark:hover:border-green-500 transition-colors">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-green-900 dark:text-green-100">Grammar Checker</h3>
                <p className="text-sm text-green-700 dark:text-green-300">Check your essay for grammar and spelling errors.</p>
              </div>
            </Link>
            <Link to="/paraphrasing-tool" className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-lg border border-purple-200 dark:border-purple-700 hover:border-purple-400 dark:hover:border-purple-500 transition-colors">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-purple-900 dark:text-purple-100">Paraphrasing Tool</h3>
                <p className="text-sm text-purple-700 dark:text-purple-300">Rewrite sentences and avoid repetition.</p>
              </div>
            </Link>
            <Link to="/ielts-band-score-calculator" className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-lg border border-blue-200 dark:border-blue-700 hover:border-blue-400 dark:hover:border-blue-500 transition-colors">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-blue-900 dark:text-blue-100">IELTS Band Calculator</h3>
                <p className="text-sm text-blue-700 dark:text-blue-300">Calculate your overall IELTS band score.</p>
              </div>
            </Link>
            <Link to="/ielts/ielts-writing-task-2-essay-types" className="flex items-center gap-4 p-4 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 rounded-lg border border-orange-200 dark:border-orange-700 hover:border-orange-400 dark:hover:border-orange-500 transition-colors">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-orange-900 dark:text-orange-100">IELTS Essay Guide</h3>
                <p className="text-sm text-orange-700 dark:text-orange-300">Complete guide to all IELTS essay types.</p>
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
          <h3 className="text-2xl font-bold text-white mb-3">Start Writing Better Essays Today</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Our free essay topic generator helps thousands of IELTS students practice every day. 
            No sign-up, no fees—just unlimited essay prompts at your fingertips.
          </p>
          <button
            onClick={scrollToTool}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-lg rounded-lg hover:from-green-600 hover:to-green-700 transition-all shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Generate Essay Topic Now – 100% Free
          </button>
        </section>

        {/* Trust Signals */}
        <section className="text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            <strong>Trusted by IELTS students worldwide</strong> · Designed for IELTS preparation · 
            Built by <Link to="/about/editorial-team" className="text-blue-600 dark:text-blue-400 hover:underline">language experts</Link> at Typogrammar
          </p>
        </section>
      </article>
    </div>
  );
};

export default EssayTopicGeneratorPage;
