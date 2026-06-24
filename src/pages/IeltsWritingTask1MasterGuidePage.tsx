import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import GoogleAd from '../components/GoogleAd';
import { Download, Check, Users, FileText, Star, HelpCircle, Target, BookOpen, TrendingUp, Award, Lightbulb, BarChart2 } from 'lucide-react';

const IeltsWritingTask1MasterGuidePage: React.FC = () => {
  usePageMetadata({
    title: 'IELTS Writing Task 1 Master Guide PDF (2026) | Templates, Vocabulary & Model Answers',
    description:
      'Download the IELTS Writing Task 1 Master Guide PDF. Learn line graphs, bar charts, pie charts, tables, maps, process diagrams, vocabulary, templates, model answers, and Band 9 strategies.',
    canonical: 'https://typogrammar.com/ielts-writing-task-1-master-guide/',
    ogTitle: 'IELTS Writing Task 1 Master Guide PDF (2026) | Templates, Vocabulary & Model Answers',
    ogDescription:
      'Download the IELTS Writing Task 1 Master Guide PDF. Learn line graphs, bar charts, pie charts, tables, maps, process diagrams, vocabulary, templates, model answers, and Band 9 strategies.',
    ogUrl: 'https://typogrammar.com/ielts-writing-task-1-master-guide',
    ogImage: 'https://typogrammar.com/images/books/ielts-writing-task-1-master-guide.jpg',
    ogType: 'book',
    twitterCard: 'summary_large_image',
    twitterTitle: 'IELTS Writing Task 1 Master Guide PDF (2026) | Templates, Vocabulary & Model Answers',
    twitterDescription:
      'Download the IELTS Writing Task 1 Master Guide PDF. Learn line graphs, bar charts, pie charts, tables, maps, process diagrams, vocabulary, templates, model answers, and Band 9 strategies.',
    twitterImage: 'https://typogrammar.com/images/books/ielts-writing-task-1-master-guide.jpg',
  });

  useEffect(() => {
    const bookSchema = {
      '@context': 'https://schema.org',
      '@type': 'Book',
      name: 'IELTS Writing Task 1 Master Guide (2026 Edition)',
      author: { '@type': 'Organization', name: 'TypoGrammar' },
      publisher: { '@type': 'Organization', name: 'TypoGrammar' },
      inLanguage: 'en',
      bookFormat: 'EBook',
      url: 'https://typogrammar.com/ielts-writing-task-1-master-guide',
      image: 'https://typogrammar.com/images/books/ielts-writing-task-1-master-guide.jpg',
      description:
        'A complete 160+ page step-by-step handbook for IELTS Academic Writing Task 1. Covers all visual types, 300+ vocabulary items, reusable templates, band descriptors, and Band 9 model answers.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
    };

    const learningResourceSchema = {
      '@context': 'https://schema.org',
      '@type': 'LearningResource',
      name: 'IELTS Writing Task 1 Master Guide (2026 Edition)',
      learningResourceType: 'ebook',
      about: [
        'IELTS Writing Task 1',
        'IELTS Academic Writing',
        'IELTS vocabulary for graphs and charts',
        'IELTS Task 1 templates',
        'Band 9 IELTS strategies',
      ],
      url: 'https://typogrammar.com/ielts-writing-task-1-master-guide',
      description:
        'Complete IELTS Academic Writing Task 1 guide with vocabulary, templates, model answers, and Band 9 strategies for all visual types.',
    };

    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'IELTS Writing Task 1 Master Guide PDF (2026) | Templates, Vocabulary & Model Answers',
      description:
        'Download the IELTS Writing Task 1 Master Guide PDF. Learn line graphs, bar charts, pie charts, tables, maps, process diagrams, vocabulary, templates, model answers, and Band 9 strategies.',
      author: { '@type': 'Organization', name: 'TypoGrammar', url: 'https://typogrammar.com' },
      publisher: {
        '@type': 'Organization',
        name: 'TypoGrammar',
        logo: { '@type': 'ImageObject', url: 'https://typogrammar.com/images/logo.png' },
      },
      datePublished: '2026-06-22',
      dateModified: '2026-06-22',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://typogrammar.com/ielts-writing-task-1-master-guide',
      },
    };

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is included in the IELTS Writing Task 1 Master Guide?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The guide includes 160+ pages covering all Task 1 visual types (line graphs, bar charts, pie charts, tables, maps, process diagrams, mixed charts), 300+ vocabulary items, reusable templates for every question type, band descriptor explanations, 20 practice tasks with model answers, and Band 9 strategies.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is the IELTS Writing Task 1 Master Guide free to download?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The IELTS Writing Task 1 Master Guide PDF is completely free to download from TypoGrammar. No signup or payment is required.',
          },
        },
        {
          '@type': 'Question',
          name: 'What band score can I achieve with this guide?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The guide is designed to take you from Band 6 to Band 7, 8, or 9. It includes strategies, vocabulary, and model answers at each level so you can target your specific score goal.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does the guide cover both Academic and General Training Task 1?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'This guide focuses on IELTS Academic Writing Task 1, which uses graphs, charts, maps, and process diagrams. For General Training Task 1 (letters), see the IELTS Informal Letter Guide on TypoGrammar.',
          },
        },
        {
          '@type': 'Question',
          name: 'What vocabulary does the guide teach for IELTS Task 1?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The guide covers 300+ expressions including trend verbs (rise, surge, plunge), adverbs of degree (dramatically, steadily, marginally), comparison language (whereas, in contrast), pie chart verbs (accounted for, constituted), process sequencing words, map transformation language, and overview sentence starters.',
          },
        },
        {
          '@type': 'Question',
          name: 'How should I use the templates in the guide?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The templates are flexible frameworks, not scripts to memorize. Study the four-paragraph structure (Introduction, Overview, Body 1, Body 2) and the sentence starters for each visual type, then practise adapting them to different questions until the structure becomes automatic.',
          },
        },
      ],
    };

    const scripts = [bookSchema, learningResourceSchema, articleSchema, faqSchema].map((schema) => {
      const s = document.createElement('script');
      s.type = 'application/ld+json';
      s.text = JSON.stringify(schema);
      document.head.appendChild(s);
      return s;
    });

    return () => scripts.forEach((s) => { if (s.parentNode) document.head.removeChild(s); });
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const faqItems = [
    {
      question: 'What is included in the IELTS Writing Task 1 Master Guide?',
      answer: 'The guide includes 160+ pages covering all Task 1 visual types (line graphs, bar charts, pie charts, tables, maps, process diagrams, mixed charts), 300+ vocabulary items, reusable templates for every question type, band descriptor explanations, 20 practice tasks with model answers, and Band 9 strategies.',
    },
    {
      question: 'Is the IELTS Writing Task 1 Master Guide free to download?',
      answer: 'Yes. The IELTS Writing Task 1 Master Guide PDF is completely free to download from TypoGrammar. No signup or payment is required.',
    },
    {
      question: 'What band score can I achieve with this guide?',
      answer: 'The guide is designed to take you from Band 6 to Band 7, 8, or 9. It includes strategies, vocabulary, and model answers at each level so you can target your specific score goal.',
    },
    {
      question: 'Does the guide cover both Academic and General Training Task 1?',
      answer: 'This guide focuses on IELTS Academic Writing Task 1 (graphs, charts, maps, and process diagrams). For General Training Task 1 (letters), see the IELTS Informal Letter Guide on TypoGrammar.',
    },
    {
      question: 'What vocabulary does the guide teach for IELTS Task 1?',
      answer: '300+ expressions including trend verbs (rise, surge, plunge), adverbs of degree (dramatically, steadily, marginally), comparison language (whereas, in contrast), pie chart verbs (accounted for, constituted), process sequencing words, map transformation language, and overview sentence starters.',
    },
    {
      question: 'How should I use the templates in the guide?',
      answer: 'The templates are flexible frameworks, not scripts to memorize. Study the four-paragraph structure (Introduction, Overview, Body 1, Body 2) and practise adapting the sentence starters to different questions until the structure becomes automatic.',
    },
  ];

  const peopleAlsoAsk = [
    {
      question: 'What is the best way to structure an IELTS Writing Task 1 answer?',
      answer: 'Use a four-paragraph structure: Introduction (paraphrase the question), Overview (2–3 key trends without data), Body Paragraph 1 (main trend with supporting data), Body Paragraph 2 (secondary trend or comparison with data). Always write the Overview — missing it caps your score at Band 5.',
    },
    {
      question: 'How many words do you need for IELTS Writing Task 1?',
      answer: 'The minimum is 150 words. Aim for 165–190 words — enough to cover the key features with data but without padding. Going under 150 costs marks; going far over 200 wastes time you need for Task 2.',
    },
    {
      question: 'What is the difference between IELTS Task 1 and Task 2?',
      answer: 'Task 1 asks you to describe a visual (graph, chart, map, or process) in a factual report of at least 150 words. Task 2 asks you to write a discursive essay of at least 250 words. Task 2 is worth double the marks, so spend about 20 minutes on Task 1 and 40 minutes on Task 2.',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      {/* Last Updated */}
      <div className="text-sm text-slate-500 dark:text-slate-400 mb-4 text-center">
        Last updated: June 2026
      </div>

      {/* HERO */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 mb-4">
              Free Download · 160+ Pages
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-slate-100 mb-6 leading-tight">
              IELTS Writing Task 1{' '}
              <span className="text-blue-600 dark:text-blue-400">Master Guide</span>{' '}
              <span className="text-slate-500 dark:text-slate-400 text-3xl md:text-4xl font-bold">(2026 Edition)</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              Master IELTS Academic Writing Task 1 with Confidence
            </p>
            <p className="text-base text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              A complete step-by-step handbook for every Task 1 visual type. Vocabulary, templates, model answers, and Band 9 strategies — all in one PDF.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <a
                href="/downloads/IELTS_Writing_Task1_Master_Guide_2026.pdf"
                download
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 text-center"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Free PDF
              </a>
              <button
                onClick={() => scrollToSection('contents')}
                className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-slate-800 border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-slate-700 transition-all duration-200"
              >
                What's Inside
              </button>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 italic">
              Free download, no signup required.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/images/books/ielts-writing-task-1-master-guide.jpg"
              alt="IELTS Writing Task 1 Master Guide PDF with templates, vocabulary, model answers and Band 9 strategies"
              className="rounded-xl shadow-2xl max-w-full h-auto"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { icon: <FileText className="h-6 w-6 text-blue-600" />, value: 'Free', label: 'Download' },
          { icon: <Download className="h-6 w-6 text-green-600" />, value: '160+ Pages', label: 'Full Guide' },
          { icon: <BarChart2 className="h-6 w-6 text-violet-600" />, value: '7 Visual Types', label: 'Covered' },
          { icon: <Star className="h-6 w-6 text-amber-500" />, value: 'Band 9', label: 'Model Answers' },
        ].map((stat, i) => (
          <div key={i} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 flex flex-col items-center text-center shadow-sm">
            {stat.icon}
            <div className="font-bold text-slate-900 dark:text-slate-100 mt-2">{stat.value}</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="my-8"><GoogleAd adSlot="6406598038" /></div>

      {/* AUTHORITY INTRO */}
      <section className="mb-16">
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 md:p-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Why This Guide Exists
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            Most IELTS candidates lose marks in Task 1 for the same reasons: repeating the same vocabulary, missing the overview, and misreading what the visual is actually showing. A strong Task 1 report is not about writing a lot — it is about selecting the right information and expressing it with precision and variety.
          </p>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            The <strong>IELTS Writing Task 1 Master Guide</strong> gives you a proven four-paragraph structure, 300+ vocabulary items organised by task type, flexible templates that adapt to any question, and Band 9 model answers with examiner commentary — everything you need to move from Band 6 to Band 7, 8, or 9.
          </p>
        </div>
      </section>

      {/* WHAT YOU WILL LEARN */}
      <section className="mb-16">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 md:p-12 shadow-lg">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
            <span className="inline-flex items-center gap-2"><Target className="h-7 w-7 text-blue-600" />What You Will Learn</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'All 7 Task 1 Visual Types', desc: 'Line graphs, bar charts, pie charts, tables, maps, process diagrams, mixed charts' },
              { title: 'The Universal 4-Paragraph Structure', desc: 'Introduction, Overview, Body 1, Body 2 — for every question type' },
              { title: '300+ Vocabulary Items', desc: 'Trend verbs, comparison language, pie chart verbs, map phrases, sequencing words' },
              { title: 'How Examiners Award Marks', desc: 'All four band descriptors explained with examples at Band 6, 7, 8, and 9' },
              { title: 'Reusable Templates', desc: 'Flexible sentence starters for every visual type — adapted during the exam, not memorised' },
              { title: 'Band 9 Model Answers', desc: '20 practice tasks with fully annotated Band 9 reports and examiner commentary' },
            ].map((item, i) => (
              <div key={i} className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 mt-1">
                  <Check className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100 mb-1">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INSIDE */}
      <section id="contents" className="mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
          <span className="inline-flex items-center gap-2"><BookOpen className="h-7 w-7 text-blue-600" />What's Inside the Guide</span>
        </h2>
        <div className="space-y-6">

          {/* Visual Types */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-700">
            <h3 className="font-semibold text-xl text-blue-900 dark:text-blue-200 mb-4">
              ✅ Complete Coverage of All 7 IELTS Task 1 Visuals
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-3">Each visual type includes visual analysis techniques, task-specific vocabulary, writing strategy, Band 9 tips, a reusable template, a model answer, and practice questions.</p>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {['Line Graphs', 'Bar Charts', 'Pie Charts', 'Tables', 'Process Diagrams', 'Maps', 'Mixed Charts', 'All Combinations'].map((item) => (
                <li key={item} className="flex items-center text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 rounded-lg px-3 py-2 text-sm">
                  <BarChart2 className="h-4 w-4 text-blue-500 mr-2 shrink-0" />{item}
                </li>
              ))}
            </ul>
          </div>

          {/* Structure */}
          <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-6 border border-emerald-200 dark:border-emerald-700">
            <h3 className="font-semibold text-xl text-emerald-900 dark:text-emerald-200 mb-4">
              ✅ The Universal Task 1 Four-Paragraph Structure
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { para: '1. Introduction', detail: 'How to paraphrase the question accurately without copying' },
                { para: '2. Overview', detail: 'How to identify and express the 2–3 most significant features (no data)' },
                { para: '3. Body Paragraph 1', detail: 'How to group the main trend with precise supporting data' },
                { para: '4. Body Paragraph 2', detail: 'How to compare, contrast, or extend with a second data grouping' },
              ].map(({ para, detail }) => (
                <div key={para} className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-emerald-100 dark:border-emerald-800">
                  <div className="font-semibold text-emerald-800 dark:text-emerald-300 mb-1">{para}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">{detail}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Vocabulary Bank */}
          <div className="bg-violet-50 dark:bg-violet-900/20 rounded-xl p-6 border border-violet-200 dark:border-violet-700">
            <h3 className="font-semibold text-xl text-violet-900 dark:text-violet-200 mb-4">
              ✅ 300+ Essential IELTS Writing Task 1 Expressions
            </h3>
            <div className="grid md:grid-cols-3 gap-3">
              {[
                { cat: 'Increase', words: 'rise, grow, climb, surge, soar, jump, leap' },
                { cat: 'Decrease', words: 'decline, fall, drop, dip, plunge, slide, tumble' },
                { cat: 'Stability', words: 'remain stable, plateau, level off, hover, stay constant' },
                { cat: 'Comparisons', words: 'whereas, in contrast, higher than, comparable to' },
                { cat: 'Pie Charts', words: 'accounted for, made up, constituted, represented' },
                { cat: 'Maps & Processes', words: 'was converted into, is extracted, subsequently' },
              ].map(({ cat, words }) => (
                <div key={cat} className="bg-white dark:bg-slate-800 rounded-lg p-3 border border-violet-100 dark:border-violet-800">
                  <div className="font-semibold text-violet-800 dark:text-violet-300 text-sm mb-1">{cat}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 italic">{words}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Band Descriptors */}
          <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-6 border border-amber-200 dark:border-amber-700">
            <h3 className="font-semibold text-xl text-amber-900 dark:text-amber-200 mb-4">
              ✅ Band Descriptors Explained — All 4 Criteria
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { crit: 'Task Achievement', detail: 'Select important information, avoid data dumping, write effective overviews' },
                { crit: 'Coherence and Cohesion', detail: 'Logical paragraph organisation, linking strategies, information grouping' },
                { crit: 'Lexical Resource', detail: 'Academic vocabulary, reporting verbs, comparison and trend language' },
                { crit: 'Grammatical Range & Accuracy', detail: 'Complex sentences, comparative structures, passive voice, tense accuracy' },
              ].map(({ crit, detail }) => (
                <div key={crit} className="flex items-start gap-3 bg-white dark:bg-slate-800 rounded-lg p-3 border border-amber-100 dark:border-amber-800">
                  <span className="text-amber-500 font-bold shrink-0 mt-0.5">✔</span>
                  <div>
                    <div className="font-semibold text-slate-800 dark:text-slate-200 text-sm">{crit}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Templates & Practice */}
          <div className="bg-teal-50 dark:bg-teal-900/20 rounded-xl p-6 border border-teal-200 dark:border-teal-700">
            <h3 className="font-semibold text-xl text-teal-900 dark:text-teal-200 mb-4">
              ✅ Templates, Practice Tasks &amp; Model Answers
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-slate-700 dark:text-slate-300 mb-2 font-medium text-sm">Reusable templates for:</p>
                <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                  {['Line Graphs', 'Bar Charts', 'Pie Charts', 'Tables', 'Process Diagrams', 'Maps', 'Mixed Charts'].map((t) => (
                    <li key={t} className="flex items-center gap-2"><span className="text-teal-500">→</span>{t}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-slate-700 dark:text-slate-300 mb-2 font-medium text-sm">Practice included:</p>
                <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                  {[
                    '20 additional practice tasks',
                    'Multiple chart-based exercises',
                    'Detailed Band 9 model answers',
                    'Band-level writing comparisons',
                    'Examiner commentary on each answer',
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-2"><span className="text-teal-500">✓</span>{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="my-8"><GoogleAd adSlot="6406598038" /></div>

      {/* BAND 9 TECHNIQUES */}
      <section className="mb-16">
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 md:p-12 border border-indigo-200 dark:border-slate-700">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            <span className="inline-flex items-center gap-2"><Lightbulb className="h-7 w-7 text-indigo-600" />Band 9 Task 1 Techniques Revealed</span>
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
            Top scorers separate themselves in four key ways:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { secret: 'Overview first, data second', detail: 'The overview is the most important paragraph — write it before the body' },
              { secret: 'Select, don\'t list', detail: 'Band 9 reports highlight key features; Band 5 reports list every number' },
              { secret: 'Vary verb and noun forms', detail: '"rose sharply" and "a sharp rise" — alternate to show grammatical range' },
              { secret: 'Group information logically', detail: 'Compare what should be compared; never describe one item per sentence' },
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold text-lg mr-2">✔</span>
                <span className="text-slate-800 dark:text-slate-200 font-semibold">{item.secret}</span>
                <p className="text-slate-600 dark:text-slate-400 mt-1 ml-6 text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IS THIS FOR */}
      <section className="mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
          <span className="inline-flex items-center gap-2"><Award className="h-7 w-7 text-blue-600" />Who Is This Guide For?</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            'IELTS Academic candidates',
            'University applicants',
            'International students',
            'Self-study learners',
            'IELTS teachers and tutors',
            'Anyone targeting Band 7+',
          ].map((item) => (
            <div key={item} className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700 text-center">
              <span className="text-slate-800 dark:text-slate-200 font-medium text-sm">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT IMPROVES YOUR SCORE */}
      <section className="mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
          <span className="inline-flex items-center gap-2"><TrendingUp className="h-7 w-7 text-blue-600" />How This Guide Will Improve Your Score</span>
        </h2>
        <div className="space-y-3">
          {[
            'Write a strong overview every time — the single biggest mark-gainer in Task 1',
            'Use 200+ vocabulary items accurately, eliminating repetition that costs Lexical Resource marks',
            'Organise every report in 4 clear paragraphs that examiners can follow instantly',
            'Apply task-specific templates that save time and reduce anxiety under exam conditions',
            'Compare and group data naturally, showing the Coherence and Cohesion examiners reward',
          ].map((item, i) => (
            <div key={i} className="flex items-center bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-100 dark:border-blue-800">
              <span className="text-blue-600 dark:text-blue-400 font-bold mr-3 shrink-0">{i + 1}.</span>
              <span className="text-slate-800 dark:text-slate-200 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="my-8"><GoogleAd adSlot="6406598038" /></div>

      {/* PEOPLE ALSO ASK */}
      <section className="mb-16">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          People Also Ask
        </h2>
        <div className="space-y-4">
          {peopleAlsoAsk.map((item, idx) => (
            <div key={idx} className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 flex items-center">
                <HelpCircle className="h-5 w-5 text-blue-500 mr-2 shrink-0" />{item.question}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 ml-6 text-sm">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqItems.map((faq, idx) => (
            <div key={idx} className="border-b border-slate-200 dark:border-slate-700 pb-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                {idx + 1}. {faq.question}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DOWNLOAD */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            <span className="inline-flex items-center gap-2"><Download className="h-7 w-7" />Download the Guide</span>
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Get the complete IELTS Writing Task 1 Master Guide PDF — 160+ pages, all visual types, 300+ vocabulary items, and Band 9 model answers.
          </p>
          <a
            href="/downloads/IELTS_Writing_Task1_Master_Guide_2026.pdf"
            download
            className="inline-flex items-center justify-center px-10 py-5 bg-white text-blue-600 font-bold text-lg rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all duration-200"
          >
            <Download className="h-6 w-6 mr-3" />
            Download IELTS Writing Task 1 Master Guide (PDF)
          </a>
          <p className="text-sm text-blue-200 mt-4">PDF · Instant Download · No signup required</p>
        </div>
      </section>

      {/* CTA */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-700 dark:to-emerald-700 rounded-xl p-8 text-center">
          <div className="flex justify-center mb-4"><Users className="h-8 w-8 text-white opacity-80" /></div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Continue Your IELTS Writing Preparation
          </h3>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Pair this guide with our Task 1 vocabulary page and Band 9 essay collection for complete IELTS Writing preparation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/ielts/ielts-writing-task-1-vocabulary/"
              className="inline-block px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors"
            >
              Task 1 Vocabulary Guide
            </Link>
            <Link
              to="/ielts/50-band-9-ielts-writing-task-2-sample-essays/"
              className="inline-block px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-400 transition-colors border border-green-400"
            >
              50 Band 9 Sample Essays
            </Link>
          </div>
        </div>
      </section>

      {/* RELATED LINKS */}
      <section className="mb-16">
        <h2 className="font-heading text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          Explore More IELTS Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link to="/ielts/ielts-writing-task-1-bar-chart-sample-answer/" className="block p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 transition-colors">
            <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-1">Task 1 Bar Chart Sample Answers</h4>
            <p className="text-sm text-blue-700 dark:text-blue-400">Band 8+ model answers with vocabulary notes.</p>
          </Link>
          <Link to="/ielts/lexical-resource-in-ielts/" className="block p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-200 dark:border-emerald-800 hover:border-emerald-400 dark:hover:border-emerald-600 transition-colors">
            <h4 className="font-semibold text-emerald-900 dark:text-emerald-200 mb-1">Lexical Resource in IELTS</h4>
            <p className="text-sm text-emerald-700 dark:text-emerald-400">Full Band 9 guide to vocabulary scoring.</p>
          </Link>
          <Link to="/ielts/grammar-master-book/" className="block p-4 bg-violet-50 dark:bg-violet-900/20 rounded-lg border border-violet-200 dark:border-violet-800 hover:border-violet-400 dark:hover:border-violet-600 transition-colors">
            <h4 className="font-semibold text-violet-900 dark:text-violet-200 mb-1">IELTS Grammar Master Book</h4>
            <p className="text-sm text-violet-700 dark:text-violet-400">Band 9 grammar secrets — free PDF.</p>
          </Link>
        </div>
      </section>

      <div className="my-8"><GoogleAd adSlot="6406598038" /></div>
    </div>
  );
};

export default IeltsWritingTask1MasterGuidePage;
