import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import SchemaMarkup from '../components/SchemaMarkup';
import GoogleAd from '../components/GoogleAd';

const IELTSWritingTask1VocabularyPage: React.FC = () => {
  usePageMetadata({
    title: 'IELTS Writing Task 1 Vocabulary: 200+ Essential Words & Phrases (Band 7–9)',
    description:
      'Complete IELTS Writing Task 1 vocabulary guide: 200+ words and phrases for describing trends, graphs, charts, maps, and processes. Includes band 7–9 examples, common mistakes, and 12 FAQs.',
  });

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'IELTS Writing Task 1 Vocabulary: 200+ Essential Words and Phrases for Band 7–9',
    description:
      'A complete vocabulary guide for IELTS Academic Writing Task 1, covering language for trends, comparisons, pie charts, tables, maps, and process diagrams — with band 7–9 model sentences, common mistakes, and FAQs.',
    datePublished: '2026-06-22',
    dateModified: '2026-06-22',
    author: { '@type': 'Organization', name: 'TypoGrammar', url: 'https://typogrammar.com' },
    publisher: { '@type': 'Organization', name: 'TypoGrammar', url: 'https://typogrammar.com' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://typogrammar.com/ielts/ielts-writing-task-1-vocabulary',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://typogrammar.com' },
      { '@type': 'ListItem', position: 2, name: 'IELTS', item: 'https://typogrammar.com/ielts/ielts-writing-task-2-essay-types' },
      { '@type': 'ListItem', position: 3, name: 'IELTS Writing Task 1 Vocabulary', item: 'https://typogrammar.com/ielts/ielts-writing-task-1-vocabulary' },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What vocabulary is most important for IELTS Writing Task 1?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The highest-value vocabulary covers three areas: (1) verbs and nouns for trends (rise, decline, surge, fluctuation), (2) adverbs and adjectives to quantify change (dramatically, gradual, sharp), and (3) comparison language (whereas, in contrast, compared to). These appear in every task type and directly affect your Lexical Resource band score.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I describe an increase in IELTS Writing Task 1?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Use verb + adverb combinations: "rose sharply", "increased steadily", "climbed significantly", "surged dramatically". For nouns: "there was a sharp rise", "a significant increase was recorded". Vary between verb and noun forms to show grammatical range.',
        },
      },
      {
        '@type': 'Question',
        name: 'What words can I use instead of "increase" in IELTS Task 1?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Synonyms for increase (verb): rise, grow, climb, surge, soar, rocket, jump, leap, go up, escalate. Synonyms for increase (noun): rise, growth, surge, jump, leap, upturn, climb, escalation. Use stronger words (surge, soar) for dramatic changes and gentler words (edge up, inch up) for small ones.',
        },
      },
      {
        '@type': 'Question',
        name: 'What words can I use instead of "decrease" in IELTS Task 1?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Synonyms for decrease (verb): fall, drop, decline, dip, plummet, plunge, tumble, sink, slide, go down. Synonyms for decrease (noun): fall, drop, decline, dip, downturn, slump, reduction. Use "plummet" and "plunge" for steep drops, "dip" or "edge down" for minor ones.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I describe a stable trend in IELTS Task 1?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Use: "remained stable/steady/constant", "levelled off at", "plateaued at", "stayed relatively flat", "showed little change". For the noun form: "the figure showed remarkable stability", "there was little fluctuation". Always state the value the figure stayed at: "remained stable at approximately 30%".',
        },
      },
      {
        '@type': 'Question',
        name: 'What vocabulary do I use for pie charts in IELTS Task 1?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Key verbs: accounted for, made up, represented, constituted, comprised. Key nouns: proportion, share, fraction, percentage. Model sentence: "Renewable energy accounted for the largest share at 42%, while coal represented just 18% of total output." Avoid simply saying "was" — use these academic verbs instead.',
        },
      },
      {
        '@type': 'Question',
        name: 'What language do I need for IELTS Task 1 maps?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Transformation language: was replaced by, gave way to, was converted into, was demolished, was constructed, was extended. Location language: to the north/south/east/west of, adjacent to, opposite, to the left/right of, in the centre of, on the outskirts of. Contrast language: whereas in the original plan, compared to the current layout.',
        },
      },
      {
        '@type': 'Question',
        name: 'What linking words should I use in IELTS Writing Task 1?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For contrast: whereas, while, in contrast, by comparison, on the other hand. For similarity: similarly, likewise, in the same way. For time: initially, subsequently, eventually, over the period, by [year]. For addition: furthermore, in addition, also. For overview: overall, in general, as a whole, it is clear that. Avoid overusing "however" — vary your cohesive devices.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I write a good overview sentence in IELTS Task 1?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An overview identifies the most significant features without data. Start with: "Overall, it is clear that…", "In general, the data show…", or "The most striking feature is…". Then name 2–3 key trends without numbers. Example: "Overall, the proportion of energy from renewables rose considerably over the period, while fossil fuel usage declined steadily."',
        },
      },
      {
        '@type': 'Question',
        name: 'What vocabulary do I need for IELTS Task 1 process diagrams?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sequencing: first/firstly, then, next, subsequently, following this, after that, once, finally/lastly, at the final stage. Passive voice is essential: is produced, is extracted, is converted, is filtered, is transported, is heated. Modal passive for purpose: is used to, is designed to. Noun phrases: the first stage, the next step, the final phase.',
        },
      },
      {
        '@type': 'Question',
        name: 'What adverbs and adjectives describe the size of a change in IELTS Task 1?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For big changes — adjectives: sharp, steep, dramatic, significant, considerable, marked, substantial. Adverbs: sharply, steeply, dramatically, significantly, considerably. For small changes — adjectives: slight, marginal, modest, gradual, moderate, gentle. Adverbs: slightly, marginally, modestly, gradually, moderately. Never mix: avoid "decreased dramatically slightly".',
        },
      },
      {
        '@type': 'Question',
        name: 'How many vocabulary words do I need to know for IELTS Task 1?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Quality beats quantity. Master 8–10 trend verbs with their noun forms, 6–8 adverbs for size, 5–6 comparison expressions, and task-specific vocabulary for the chart types you may see. Being able to use 40 words accurately and flexibly is more valuable than knowing 200 you cannot produce under exam pressure.',
        },
      },
    ],
  };

  useEffect(() => {
    const schemas = [breadcrumbSchema, faqSchema];
    const scripts = schemas.map((schema) => {
      const s = document.createElement('script');
      s.type = 'application/ld+json';
      s.text = JSON.stringify(schema);
      document.head.appendChild(s);
      return s;
    });
    return () => scripts.forEach((s) => document.head.removeChild(s));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup type="Article" data={articleSchema} />

      {/* Breadcrumb */}
      <div className="mb-6">
        <Link to="/ielts/ielts-writing-task-2-essay-types/" className="text-blue-600 hover:underline text-sm">
          ← Back to IELTS Preparation
        </Link>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-4 text-slate-900 leading-tight">
        IELTS Writing Task 1 Vocabulary
      </h1>
      <p className="text-lg text-slate-500 mb-2">200+ Essential Words &amp; Phrases for Band 7–9 (Academic)</p>

      {/* Quick reference bar */}
      <div className="grid grid-cols-3 gap-3 my-6">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-blue-700">200+</div>
          <div className="text-xs text-blue-600 font-medium mt-1">vocabulary items</div>
        </div>
        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-indigo-700">6</div>
          <div className="text-xs text-indigo-600 font-medium mt-1">task types covered</div>
        </div>
        <div className="bg-violet-50 border border-violet-200 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-violet-700">Band 9</div>
          <div className="text-xs text-violet-600 font-medium mt-1">model sentences</div>
        </div>
      </div>

      <p className="text-slate-700 leading-relaxed mb-8">
        <strong>Lexical Resource</strong> — your ability to use a wide and accurate range of vocabulary — accounts for <strong>25% of your IELTS Writing Task 1 band score</strong>. Examiners look for variety, precision, and the natural use of academic language. This guide gives you everything: trend vocabulary for line graphs and bar charts, quantifying language for size of change, comparison expressions, pie chart and table language, map transformation phrases, process sequence vocabulary, and high-band sentence starters — all in one place.
      </p>

      {/* Table of Contents */}
      <nav className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-10">
        <h2 className="text-base font-bold mb-4 text-slate-800 uppercase tracking-wide">Contents</h2>
        <ul className="grid md:grid-cols-2 gap-1 text-sm">
          {[
            ['#why-vocabulary', 'Why vocabulary matters in Task 1'],
            ['#trend-verbs', 'Trend verbs: increase & decrease'],
            ['#quantifying', 'Quantifying change (adverbs & adjectives)'],
            ['#stable', 'Stable trends & fluctuations'],
            ['#comparison', 'Comparison & contrast language'],
            ['#pie-charts', 'Vocabulary for pie charts'],
            ['#tables', 'Vocabulary for tables'],
            ['#maps', 'Vocabulary for maps & plans'],
            ['#process', 'Vocabulary for process diagrams'],
            ['#overview', 'Overview & opening sentences'],
            ['#mistakes', 'Common vocabulary mistakes'],
            ['#faq', 'Frequently asked questions'],
          ].map(([href, label]) => (
            <li key={href}>
              <a href={href} className="text-blue-700 hover:underline">{label}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── Why Vocabulary Matters ── */}
      <section id="why-vocabulary" className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Vocabulary Matters in IELTS Writing Task 1</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          The IELTS Writing Task 1 examiner assesses your <strong>Lexical Resource</strong> on the following: range of vocabulary, accuracy, collocations, and the ability to paraphrase. Repeating the same words ("the number increased… the number increased again…") signals a limited range and keeps your band at 5–6.
        </p>
        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="bg-red-50 border border-red-200 rounded-xl p-5">
            <h3 className="font-bold text-red-800 mb-3 text-sm">Band 5–6 (limited vocabulary)</h3>
            <p className="text-sm text-red-700 italic">"The number of cars increased. The number of bikes also increased. The number of buses decreased."</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-5">
            <h3 className="font-bold text-green-800 mb-3 text-sm">Band 8–9 (varied, precise vocabulary)</h3>
            <p className="text-sm text-green-700 italic">"Car ownership surged dramatically, while cycling saw a modest but steady upturn. Bus usage, by contrast, fell sharply over the same period."</p>
          </div>
        </div>
        <p className="text-slate-700 leading-relaxed">
          The goal is not to use long, obscure words — it is to use the <strong>right word for the right degree of change</strong>, combine verbs and nouns naturally, and avoid repetition across your 150–200-word response.
        </p>
      </section>

      <div className="my-8"><GoogleAd adSlot="6406598038" /></div>

      {/* ── Trend Verbs ── */}
      <section id="trend-verbs" className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Trend Verbs: Increase &amp; Decrease</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          These are your most-used words in Task 1. Learn each as a <strong>verb + noun pair</strong> so you can vary your sentence structure between "prices <em>rose</em>" and "there was a <em>rise</em> in prices".
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Increase */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
            <h3 className="font-bold text-emerald-800 mb-4 flex items-center gap-2">
              <span className="text-emerald-600 text-lg">↑</span> Increase (verb / noun)
            </h3>
            <div className="space-y-2 text-sm">
              {[
                ['rise / a rise', 'neutral, very common'],
                ['increase / an increase', 'neutral, very common'],
                ['grow / growth', 'neutral — suits long-term change'],
                ['climb / a climb', 'gradual movement upward'],
                ['surge / a surge', 'fast and large — use sparingly'],
                ['soar / —', 'very fast and high — dramatic'],
                ['rocket / —', 'informal but emphatic'],
                ['jump / a jump', 'sudden and notable'],
                ['leap / a leap', 'sudden and large'],
                ['escalate / escalation', 'often negative connotation'],
              ].map(([word, note]) => (
                <div key={word} className="flex justify-between items-start gap-2">
                  <span className="font-semibold text-emerald-900 shrink-0">{word}</span>
                  <span className="text-emerald-700 text-right">{note}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Decrease */}
          <div className="bg-rose-50 border border-rose-200 rounded-xl p-5">
            <h3 className="font-bold text-rose-800 mb-4 flex items-center gap-2">
              <span className="text-rose-600 text-lg">↓</span> Decrease (verb / noun)
            </h3>
            <div className="space-y-2 text-sm">
              {[
                ['fall / a fall', 'neutral, very common'],
                ['decrease / a decrease', 'neutral, very common'],
                ['drop / a drop', 'neutral — suits sudden change'],
                ['decline / a decline', 'gradual, longer-term'],
                ['dip / a dip', 'small and often temporary'],
                ['plummet / —', 'fast and dramatic — strong'],
                ['plunge / a plunge', 'fast and dramatic — strong'],
                ['tumble / —', 'quick and uncontrolled'],
                ['slide / a slide', 'gradual and sustained'],
                ['slip / —', 'small and gradual'],
              ].map(([word, note]) => (
                <div key={word} className="flex justify-between items-start gap-2">
                  <span className="font-semibold text-rose-900 shrink-0">{word}</span>
                  <span className="text-rose-700 text-right">{note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-4">
          <h3 className="font-bold text-blue-800 mb-3">Model sentences using verb / noun variation</h3>
          <ul className="text-sm text-blue-700 space-y-2">
            <li><strong>Verb form:</strong> "The unemployment rate <em>fell sharply</em> between 2010 and 2015."</li>
            <li><strong>Noun form:</strong> "There was a <em>sharp fall</em> in the unemployment rate between 2010 and 2015."</li>
            <li><strong>Verb form:</strong> "Smartphone sales <em>surged dramatically</em> over the decade."</li>
            <li><strong>Noun form:</strong> "The decade saw a <em>dramatic surge</em> in smartphone sales."</li>
          </ul>
        </div>
      </section>

      {/* ── Quantifying ── */}
      <section id="quantifying" className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Quantifying Change: Adverbs &amp; Adjectives</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Using the <strong>right intensity word</strong> is as important as using the right verb. "Increased slightly" and "increased dramatically" describe very different situations. Examiners penalise imprecision.
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-slate-100 text-slate-700">
                <th className="text-left px-4 py-3 font-semibold">Scale</th>
                <th className="text-left px-4 py-3 font-semibold">Adjective (noun form)</th>
                <th className="text-left px-4 py-3 font-semibold">Adverb (verb form)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Very large', 'dramatic, sharp, steep, substantial, considerable', 'dramatically, sharply, steeply, substantially, considerably'],
                ['Large', 'significant, marked, notable', 'significantly, markedly, notably'],
                ['Medium', 'moderate, steady', 'moderately, steadily'],
                ['Small', 'gradual, gentle, modest', 'gradually, gently, modestly'],
                ['Very small', 'slight, marginal, minimal', 'slightly, marginally, minimally'],
              ].map(([scale, adj, adv]) => (
                <tr key={scale} className="border-t border-slate-200">
                  <td className="px-4 py-3 font-semibold text-slate-700">{scale}</td>
                  <td className="px-4 py-3 text-slate-600">{adj}</td>
                  <td className="px-4 py-3 text-slate-600">{adv}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl">
          <p className="text-amber-800 text-sm">
            <strong>Never mix opposite intensities:</strong> "decreased dramatically slightly" is an error. Choose one word for the scale of change.
          </p>
        </div>
      </section>

      <div className="my-8"><GoogleAd adSlot="6406598038" /></div>

      {/* ── Stable & Fluctuations ── */}
      <section id="stable" className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Stable Trends &amp; Fluctuations</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-sky-50 border border-sky-200 rounded-xl p-5">
            <h3 className="font-bold text-sky-800 mb-3">Stable / flat language</h3>
            <ul className="text-sm text-sky-700 space-y-1">
              <li>remained stable / steady / constant / unchanged</li>
              <li>levelled off at [value]</li>
              <li>plateaued at [value]</li>
              <li>stayed relatively flat</li>
              <li>showed little change / variation</li>
              <li>hovered around [value]</li>
              <li>held steady at [value]</li>
            </ul>
          </div>
          <div className="bg-violet-50 border border-violet-200 rounded-xl p-5">
            <h3 className="font-bold text-violet-800 mb-3">Fluctuation language</h3>
            <ul className="text-sm text-violet-700 space-y-1">
              <li>fluctuated / varied / oscillated</li>
              <li>showed an erratic pattern</li>
              <li>rose and fell throughout the period</li>
              <li>experienced considerable volatility</li>
              <li>peaked at [value] before falling back</li>
              <li>reached a high of [value] / a low of [value]</li>
            </ul>
          </div>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
          <h3 className="font-bold text-slate-800 mb-3 text-sm">Model sentences</h3>
          <ul className="text-sm text-slate-600 space-y-2">
            <li>"The proportion of energy from coal <strong>remained relatively stable</strong>, hovering around 35% throughout the decade."</li>
            <li>"Visitor numbers <strong>peaked at</strong> 4.2 million in 2018 before declining sharply."</li>
            <li>"The unemployment rate <strong>fluctuated considerably</strong> between 2008 and 2012, reaching a high of 12% before levelling off."</li>
          </ul>
        </div>
      </section>

      {/* ── Comparison Language ── */}
      <section id="comparison" className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Comparison &amp; Contrast Language</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Comparing two data sets in a single sentence shows grammatical range. These expressions are essential for achieving a high Coherence and Cohesion score.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h3 className="font-bold text-blue-800 mb-3 text-xs uppercase tracking-wide">Contrast (within a sentence)</h3>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>whereas</li>
              <li>while</li>
              <li>in contrast to</li>
              <li>unlike</li>
              <li>compared to / with</li>
            </ul>
          </div>
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
            <h3 className="font-bold text-indigo-800 mb-3 text-xs uppercase tracking-wide">Contrast (between sentences)</h3>
            <ul className="text-sm text-indigo-700 space-y-1">
              <li>In contrast, …</li>
              <li>By comparison, …</li>
              <li>On the other hand, …</li>
              <li>Conversely, …</li>
            </ul>
          </div>
          <div className="bg-teal-50 border border-teal-200 rounded-xl p-4">
            <h3 className="font-bold text-teal-800 mb-3 text-xs uppercase tracking-wide">Similarity</h3>
            <ul className="text-sm text-teal-700 space-y-1">
              <li>Similarly, …</li>
              <li>Likewise, …</li>
              <li>In the same way, …</li>
              <li>mirrored the trend of</li>
              <li>followed a similar pattern to</li>
            </ul>
          </div>
        </div>
        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5">
          <h3 className="font-bold text-indigo-800 mb-3 text-sm">Model sentences</h3>
          <ul className="text-sm text-indigo-700 space-y-2">
            <li>"Oil consumption rose steadily, <strong>whereas</strong> the use of renewable energy remained negligible until 2015."</li>
            <li>"France recorded the highest tourist numbers. <strong>By contrast,</strong> Portugal attracted the fewest visitors throughout the period."</li>
            <li>"The pattern for buses <strong>mirrored</strong> that of trains, with both modes of transport declining after 2018."</li>
          </ul>
        </div>
      </section>

      <div className="my-8"><GoogleAd adSlot="6406598038" /></div>

      {/* ── Pie Charts ── */}
      <section id="pie-charts" className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Vocabulary for Pie Charts</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Pie charts describe <strong>proportions at a specific point in time</strong>. The key language involves academic verbs for "represented" and nouns for proportion.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
            <h3 className="font-bold text-emerald-800 mb-3">Key verbs for pie charts</h3>
            <ul className="text-sm text-emerald-700 space-y-1">
              <li>accounted for (the largest share)</li>
              <li>made up (approximately a third)</li>
              <li>represented (just over half)</li>
              <li>constituted (nearly a quarter)</li>
              <li>comprised (less than 10%)</li>
            </ul>
          </div>
          <div className="bg-teal-50 border border-teal-200 rounded-xl p-5">
            <h3 className="font-bold text-teal-800 mb-3">Key nouns for proportion</h3>
            <ul className="text-sm text-teal-700 space-y-1">
              <li>proportion, share, fraction</li>
              <li>percentage, figure</li>
              <li>the majority / minority of</li>
              <li>nearly / just over / approximately</li>
              <li>almost half / a third / a quarter</li>
            </ul>
          </div>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="text-sm text-slate-600 font-medium mb-2">Model sentence:</p>
          <p className="text-sm text-slate-700 italic">"Household energy consumption <strong>accounted for the largest share</strong> of total usage at 42%, while industry <strong>represented</strong> approximately a third. Transport <strong>made up</strong> the remaining 25%."</p>
        </div>
      </section>

      {/* ── Tables ── */}
      <section id="tables" className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Vocabulary for Tables</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Tables present numerical data in rows and columns. Your job is to <strong>select the most significant figures</strong> and describe them — not list every number. Use the same trend and comparison language as for charts, plus these specific expressions:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-800 mb-3">Highlighting key figures</h3>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>the highest figure was recorded in…</li>
              <li>the lowest value was seen in…</li>
              <li>the most notable figure was…</li>
              <li>with the exception of…</li>
              <li>across all categories, … was the highest</li>
              <li>stood at / came in at [value]</li>
            </ul>
          </div>
          <div className="bg-violet-50 border border-violet-200 rounded-xl p-5">
            <h3 className="font-bold text-violet-800 mb-3">Describing data relationships</h3>
            <ul className="text-sm text-violet-700 space-y-1">
              <li>more than double / twice as high as</li>
              <li>roughly three times that of</li>
              <li>nearly half the figure for</li>
              <li>only marginally higher / lower than</li>
              <li>a difference of [X] between … and …</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="my-8"><GoogleAd adSlot="6406598038" /></div>

      {/* ── Maps ── */}
      <section id="maps" className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Vocabulary for Maps &amp; Plans</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Map tasks show how a place has changed over time or compare two plans. You need <strong>transformation language</strong> (what replaced what) and <strong>location language</strong> (where things are).
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <h3 className="font-bold text-amber-800 mb-3">Transformation language</h3>
            <ul className="text-sm text-amber-700 space-y-1">
              <li>was replaced by / gave way to</li>
              <li>was converted into / was transformed into</li>
              <li>was demolished / was removed / was cleared</li>
              <li>was constructed / was built / was added</li>
              <li>was extended / was widened / was expanded</li>
              <li>remained unchanged / was retained</li>
              <li>a new [building] was introduced</li>
            </ul>
          </div>
          <div className="bg-sky-50 border border-sky-200 rounded-xl p-5">
            <h3 className="font-bold text-sky-800 mb-3">Location language</h3>
            <ul className="text-sm text-sky-700 space-y-1">
              <li>to the north / south / east / west of</li>
              <li>in the north-eastern corner of</li>
              <li>adjacent to / next to / beside</li>
              <li>opposite / facing</li>
              <li>in the centre / on the outskirts of</li>
              <li>along the [river / road / coastline]</li>
              <li>between [X] and [Y]</li>
            </ul>
          </div>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="text-sm text-slate-600 font-medium mb-2">Model sentences:</p>
          <p className="text-sm text-slate-700 italic mb-2">"The farmland to the south of the river <strong>was converted into</strong> a residential area by 2020."</p>
          <p className="text-sm text-slate-700 italic">"A new sports centre <strong>was constructed adjacent to</strong> the school, while the car park opposite the main entrance <strong>was removed</strong>."</p>
        </div>
      </section>

      {/* ── Process ── */}
      <section id="process" className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Vocabulary for Process Diagrams</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Process diagrams describe how something is made or how a natural cycle works. The two pillars are <strong>sequencing language</strong> and <strong>passive voice</strong>.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5">
            <h3 className="font-bold text-indigo-800 mb-3">Sequencing words</h3>
            <ul className="text-sm text-indigo-700 space-y-1">
              <li>First / Firstly / To begin with</li>
              <li>Then / Next / After that</li>
              <li>Subsequently / Following this</li>
              <li>Once [this stage is complete]</li>
              <li>At the next stage / phase</li>
              <li>Finally / Lastly / At the final stage</li>
              <li>Before / After / When</li>
            </ul>
          </div>
          <div className="bg-teal-50 border border-teal-200 rounded-xl p-5">
            <h3 className="font-bold text-teal-800 mb-3">Key passive verb phrases</h3>
            <ul className="text-sm text-teal-700 space-y-1">
              <li>is produced / are manufactured</li>
              <li>is extracted / is harvested</li>
              <li>is converted into / is transformed</li>
              <li>is filtered / is purified / is treated</li>
              <li>is transported / is delivered</li>
              <li>is heated / is cooled / is dried</li>
              <li>is collected / is stored / is packaged</li>
            </ul>
          </div>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="text-sm text-slate-600 font-medium mb-2">Model paragraph:</p>
          <p className="text-sm text-slate-700 italic">"<strong>First,</strong> raw materials <strong>are extracted</strong> from the earth and <strong>transported</strong> to a processing facility. <strong>Following this,</strong> the materials <strong>are heated</strong> to remove impurities. <strong>Once</strong> the refining stage <strong>is complete,</strong> the product <strong>is packaged</strong> and <strong>distributed</strong> to retailers."</p>
        </div>
      </section>

      <div className="my-8"><GoogleAd adSlot="6406598038" /></div>

      {/* ── Overview Language ── */}
      <section id="overview" className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Overview &amp; Opening Sentences</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          The <strong>overview</strong> is the most important paragraph in Task 1 — it shows you understand the big picture. It must contain <strong>no figures</strong> and identify 2–3 key trends. No overview = maximum Band 5.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
            <h3 className="font-bold text-emerald-800 mb-3">Overview starters</h3>
            <ul className="text-sm text-emerald-700 space-y-1">
              <li>Overall, it is clear that …</li>
              <li>In general, the data show that …</li>
              <li>As an overall trend, …</li>
              <li>The most striking feature is …</li>
              <li>What stands out most is …</li>
              <li>A number of key trends are apparent.</li>
            </ul>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-800 mb-3">Introduction paraphrase starters</h3>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>The [chart / graph / table / diagram] illustrates …</li>
              <li>The data provide information about …</li>
              <li>The [bar chart] compares …</li>
              <li>The figures show the [number / proportion] of …</li>
              <li>According to the [graph], …</li>
            </ul>
          </div>
        </div>
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl">
          <p className="text-amber-800 text-sm">
            <strong>Never copy the task question word for word.</strong> Paraphrase by changing key nouns, verbs, and sentence structure. "The bar chart shows" → "The data illustrate" or "The graph presents".
          </p>
        </div>
      </section>

      {/* Internal links box */}
      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5 my-8">
        <h3 className="font-semibold text-indigo-900 mb-2">More IELTS Writing practice</h3>
        <ul className="space-y-1 text-sm">
          <li><Link to="/ielts/ielts-writing-task-1-bar-chart-sample-answer/" className="text-indigo-700 hover:underline">Task 1 Bar Chart — Band 8+ model answers with vocabulary notes</Link></li>
          <li><Link to="/ielts/lexical-resource-in-ielts/" className="text-indigo-700 hover:underline">What Is Lexical Resource in IELTS? Full Band 9 Guide</Link></li>
          <li><Link to="/ielts/50-band-9-ielts-writing-task-2-sample-essays/" className="text-indigo-700 hover:underline">50 Band 9 Writing Task 2 sample essays</Link></li>
          <li><Link to="/typogrammar-write" className="text-indigo-700 hover:underline">TypoGrammar Write — check your writing with AI before the exam</Link></li>
        </ul>
      </div>

      {/* ── Common Mistakes ── */}
      <section id="mistakes" className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Common Vocabulary Mistakes in IELTS Task 1</h2>
        <div className="space-y-3">
          {[
            ['Repeating the same word', 'Using "increased" five times in one response. Solution: rotate between verb and noun forms, and use synonyms listed above.'],
            ['Mismatching intensity', '"Decreased dramatically slightly" or "rose marginally and substantially". Choose one adverb per change — it must match the data.'],
            ['Copying the question wording', '"The graph shows the number of…" copied exactly from the task. Solution: paraphrase by changing key words ("The data illustrate the volume of…").'],
            ['Using informal language', '"went up a lot", "went way down", "was huge". These lower your Lexical Resource score. Use "rose considerably" and "fell sharply" instead.'],
            ['Confusing verb and noun collocations', '"made a rise", "did an increase". These are not natural. Correct collocations: "showed a rise", "recorded an increase", "saw a fall".'],
            ['Ignoring peak/trough language', 'Missing the highest or lowest point is a lost opportunity. Always use "peaked at", "reached a high of", "hit a low of", "bottomed out at".'],
          ].map(([mistake, fix]) => (
            <div key={mistake} className="flex gap-3 items-start bg-red-50 border border-red-200 rounded-xl p-4">
              <span className="text-red-500 font-bold text-lg shrink-0 mt-0.5">✗</span>
              <div>
                <div className="font-semibold text-red-900">{mistake}</div>
                <div className="text-sm text-red-700 mt-0.5">{fix}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="my-8"><GoogleAd adSlot="6406598038" /></div>

      {/* ── FAQ ── */}
      <section id="faq" className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'What vocabulary is most important for IELTS Writing Task 1?',
              a: 'The highest-value vocabulary covers three areas: (1) verbs and nouns for trends (rise, decline, surge, fluctuation), (2) adverbs and adjectives to quantify change (dramatically, gradual, sharp), and (3) comparison language (whereas, in contrast, compared to). These appear in every task type and directly affect your Lexical Resource band score.',
            },
            {
              q: 'How do I describe an increase in IELTS Writing Task 1?',
              a: 'Use verb + adverb combinations: "rose sharply", "increased steadily", "climbed significantly", "surged dramatically". For nouns: "there was a sharp rise", "a significant increase was recorded". Vary between verb and noun forms to show grammatical range.',
            },
            {
              q: 'What words can I use instead of "increase"?',
              a: 'Synonyms (verb): rise, grow, climb, surge, soar, rocket, jump, leap, escalate. Synonyms (noun): rise, growth, surge, jump, leap, upturn, climb, escalation. Use stronger words (surge, soar) for dramatic changes and gentler words (edge up, inch up) for small ones.',
            },
            {
              q: 'What words can I use instead of "decrease"?',
              a: 'Synonyms (verb): fall, drop, decline, dip, plummet, plunge, tumble, sink, slide. Synonyms (noun): fall, drop, decline, dip, downturn, slump, reduction. Use "plummet" and "plunge" for steep drops, "dip" or "edge down" for minor ones.',
            },
            {
              q: 'How do I describe a stable trend?',
              a: 'Use: "remained stable/steady/constant", "levelled off at", "plateaued at", "stayed relatively flat", "showed little change". Always state the value the figure stayed at: "remained stable at approximately 30%".',
            },
            {
              q: 'What vocabulary do I use for pie charts?',
              a: 'Key verbs: accounted for, made up, represented, constituted, comprised. Key nouns: proportion, share, fraction, percentage. Model: "Renewable energy accounted for the largest share at 42%, while coal represented just 18%."',
            },
            {
              q: 'What language do I need for IELTS Task 1 maps?',
              a: 'Transformation language: was replaced by, gave way to, was converted into, was demolished, was constructed, was extended. Location language: to the north/south/east/west of, adjacent to, opposite, in the centre of, on the outskirts of.',
            },
            {
              q: 'What linking words should I use in IELTS Writing Task 1?',
              a: 'For contrast: whereas, while, in contrast, by comparison. For similarity: similarly, likewise. For time: initially, subsequently, eventually. For overview: overall, in general, it is clear that. Vary your cohesive devices — avoid overusing "however".',
            },
            {
              q: 'How do I write a good overview sentence?',
              a: 'An overview identifies the most significant features without data. Start with: "Overall, it is clear that…" Then name 2–3 key trends without numbers. Example: "Overall, the proportion of energy from renewables rose considerably, while fossil fuel usage declined steadily."',
            },
            {
              q: 'What vocabulary do I need for process diagrams?',
              a: 'Sequencing: first, then, next, subsequently, following this, finally. Passive voice: is produced, is extracted, is converted, is filtered, is transported, is heated. Always use passive for manufactured processes.',
            },
            {
              q: 'What adverbs and adjectives describe the size of a change?',
              a: 'For big changes — adjectives: sharp, steep, dramatic, significant, considerable. Adverbs: sharply, steeply, dramatically, significantly, considerably. For small changes — adjectives: slight, marginal, modest, gradual. Adverbs: slightly, marginally, gradually, moderately.',
            },
            {
              q: 'How many vocabulary words do I need to know for Task 1?',
              a: 'Quality beats quantity. Master 8–10 trend verbs with their noun forms, 6–8 adverbs for size, and 5–6 comparison expressions. Using 40 words accurately is more valuable than knowing 200 you cannot produce under exam pressure.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 mb-2">{q}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom links */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mt-4">
        <h3 className="font-semibold text-slate-800 mb-3">Continue your IELTS preparation</h3>
        <div className="grid md:grid-cols-2 gap-3 text-sm">
          <Link to="/ielts/ielts-writing-task-1-bar-chart-sample-answer/" className="flex items-center gap-2 text-blue-700 hover:underline">
            <span className="text-slate-400">→</span> Task 1 Bar Chart Sample Answers
          </Link>
          <Link to="/ielts/lexical-resource-in-ielts/" className="flex items-center gap-2 text-blue-700 hover:underline">
            <span className="text-slate-400">→</span> Lexical Resource in IELTS: Full Guide
          </Link>
          <Link to="/ielts/50-band-9-ielts-writing-task-2-sample-essays/" className="flex items-center gap-2 text-blue-700 hover:underline">
            <span className="text-slate-400">→</span> 50 Band 9 Writing Task 2 Essays
          </Link>
          <Link to="/ielts/how-to-write-an-IELTS-letter-informal/" className="flex items-center gap-2 text-blue-700 hover:underline">
            <span className="text-slate-400">→</span> How to Write an Informal IELTS Letter
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IELTSWritingTask1VocabularyPage;
