import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';

const faqItems = [
  {
    q: 'How do you write an overview for an IELTS bar chart?',
    a: 'An overview should summarize the most significant trends, such as the highest and lowest figures, major increases or decreases, and overall patterns. It should not include specific numbers.',
  },
  {
    q: 'How many words should IELTS Writing Task 1 contain?',
    a: 'You should write at least 150 words. Most high-scoring responses are between 160 and 200 words.',
  },
  {
    q: 'Do I need to include every number?',
    a: 'No. Focus on the most important features and make relevant comparisons rather than describing every figure.',
  },
  {
    q: 'What is the best structure for a bar chart answer?',
    a: 'Use four paragraphs: 1) Introduction, 2) Overview, 3) Body Paragraph 1, 4) Body Paragraph 2.',
  },
  {
    q: 'Are bar charts common in IELTS Academic Writing Task 1?',
    a: 'Yes. Bar charts are one of the most frequently tested chart types alongside line graphs, pie charts, tables, maps, and process diagrams.',
  },
];

const schemaMarkup = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'IELTS Writing Task 1 Bar Chart Sample Answer (3 Band 8+ Examples)',
      description:
        'Practice with three IELTS Writing Task 1 bar chart questions and Band 8+ sample answers. Learn how to write effective overviews, compare data, and improve your IELTS Academic Writing score.',
      url: 'https://typogrammar.com/ielts/ielts-writing-task-1-bar-chart-sample-answer/',
      image: [
        'https://typogrammar.com/images/IELTS%20TASK/tourists-visiting-different-countries-bar-chart.webp',
        'https://typogrammar.com/images/IELTS%20TASK/average-monthly-rainfall-five-cities-bar-chart.webp',
        'https://typogrammar.com/images/IELTS%20TASK/energy-consumption-four-countries-bar-chart.webp',
      ],
      author: { '@type': 'Organization', name: 'TypoGrammar', url: 'https://typogrammar.com' },
      publisher: { '@type': 'Organization', name: 'TypoGrammar', url: 'https://typogrammar.com' },
      mainEntityOfPage: 'https://typogrammar.com/ielts/ielts-writing-task-1-bar-chart-sample-answer/',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://typogrammar.com' },
        { '@type': 'ListItem', position: 2, name: 'IELTS', item: 'https://typogrammar.com/ielts/' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Bar Chart Sample Answer',
          item: 'https://typogrammar.com/ielts/ielts-writing-task-1-bar-chart-sample-answer/',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqItems.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
};

const IELTSWritingTask1BarChartPage: React.FC = () => {
  usePageMetadata({
    title: 'IELTS Writing Task 1 Bar Chart Sample Answer (3 Band 8+ Examples)',
    description:
      'Practice with three IELTS Writing Task 1 bar chart questions and Band 8+ sample answers. Learn how to write effective overviews, compare data, and improve your IELTS Academic Writing score.',
    canonical: 'https://typogrammar.com/ielts/ielts-writing-task-1-bar-chart-sample-answer/',
    ogTitle: 'IELTS Writing Task 1 Bar Chart Sample Answer (3 Band 8+ Examples)',
    ogDescription:
      'Three IELTS Academic Writing Task 1 bar chart questions with Band 8+ model answers. Includes vocabulary, structure tips, and common mistakes to avoid.',
    ogType: 'article',
    ogUrl: 'https://typogrammar.com/ielts/ielts-writing-task-1-bar-chart-sample-answer/',
    twitterCard: 'summary_large_image',
    twitterTitle: 'IELTS Writing Task 1 Bar Chart Sample Answer (3 Band 8+ Examples)',
    twitterDescription:
      'Three IELTS Academic Writing Task 1 bar chart questions with Band 8+ model answers. Vocabulary, structure tips, and common mistakes included.',
  });

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaMarkup);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <li><Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link></li>
          <li><span className="mx-1">/</span></li>
          <li><Link to="/ielts/ielts-writing-task-2-essay-types/" className="hover:text-blue-600 dark:hover:text-blue-400">IELTS</Link></li>
          <li><span className="mx-1">/</span></li>
          <li className="text-slate-800 dark:text-slate-200 font-medium">Bar Chart Sample Answer</li>
        </ol>
      </nav>

      {/* H1 */}
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-tight">
        IELTS Writing Task 1 Bar Chart Sample Answer (3 Band 8+ Examples)
      </h1>

      {/* Intro */}
      <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
        Bar charts are one of the most common question types in IELTS Academic Writing Task 1. To achieve a high band score, you should identify the main trends, compare figures, and provide a clear overview instead of describing every number individually.
      </p>
      <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
        Below are three IELTS bar chart questions with Band 8+ model answers.
      </p>

      {/* Sample 1 */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-5">
          Sample 1: Number of Tourists Visiting Different Countries in 2023
        </h2>

        <div className="mb-6 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700">
          <img
            src="/images/IELTS%20TASK/tourists-visiting-different-countries-bar-chart.webp"
            alt="IELTS Writing Task 1 bar chart showing the number of tourists visiting six countries in 2023."
            className="w-full h-auto"
            loading="lazy"
          />
        </div>

        <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 mb-6">
          <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-3">Question</h3>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            The bar chart shows the number of tourists (in millions) visiting six different countries in 2023. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">Band 8+ Sample Answer</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">Word Count: 158</span>
          </div>
          <div className="space-y-3 text-slate-800 dark:text-slate-200 leading-relaxed">
            <p>The bar chart compares the number of international tourists who visited six countries in 2023, measured in millions.</p>
            <p>Overall, France attracted the highest number of tourists, whereas Turkey received the fewest visitors. In general, there was a steady decline in tourist arrivals from France to Turkey.</p>
            <p>France welcomed 89 million tourists, making it the most popular destination among the six countries. Spain ranked second with 71 million visitors, while the United States attracted exactly 50 million tourists.</p>
            <p>The remaining countries recorded considerably lower figures. China received 35 million tourists, followed by Italy with 28 million. Turkey was the least visited country, attracting only 20 million tourists. Notably, France received more than four times as many tourists as Turkey and almost 20 million more than Spain.</p>
          </div>
        </div>
      </section>

      {/* Sample 2 */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-5">
          Sample 2: Average Monthly Rainfall in Five Cities
        </h2>

        <div className="mb-6 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700">
          <img
            src="/images/IELTS%20TASK/average-monthly-rainfall-five-cities-bar-chart.webp"
            alt="IELTS Academic bar chart comparing average monthly rainfall in five cities throughout the year."
            className="w-full h-auto"
            loading="lazy"
          />
        </div>

        <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 mb-6">
          <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-3">Question</h3>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            The bar chart shows the average monthly rainfall, measured in millimetres, in five different cities. Summarize the information by selecting and reporting the main features and make comparisons where relevant.
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">Band 8+ Sample Answer</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">Word Count: 170</span>
          </div>
          <div className="space-y-3 text-slate-800 dark:text-slate-200 leading-relaxed">
            <p>The bar chart illustrates the average monthly rainfall in five cities over a one-year period.</p>
            <p>Overall, Mumbai experienced by far the highest rainfall levels, particularly during the middle of the year, whereas Cairo remained extremely dry throughout the year. New York and London recorded relatively stable rainfall figures compared with the other cities.</p>
            <p>Mumbai's rainfall increased dramatically from May onwards, reaching approximately 160 mm in June before remaining exceptionally high in July and August. In contrast, Cairo consistently recorded very low rainfall, generally below 20 mm throughout the year.</p>
            <p>New York experienced moderate rainfall, fluctuating between about 70 and 110 mm. London showed a similar pattern, although its figures were generally lower than those of New York. Sydney recorded substantial rainfall during the first half of the year before gradually declining in the later months.</p>
            <p>Overall, the greatest variation was observed in Mumbai, while Cairo showed the most stable pattern.</p>
          </div>
        </div>
      </section>

      {/* Sample 3 */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-5">
          Sample 3: Energy Consumption by Source in Four Countries in 2022
        </h2>

        <div className="mb-6 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700">
          <img
            src="/images/IELTS%20TASK/energy-consumption-four-countries-bar-chart.webp"
            alt="IELTS Writing Task 1 bar chart showing energy consumption by source in four countries in 2022."
            className="w-full h-auto"
            loading="lazy"
          />
        </div>

        <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 mb-6">
          <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-3">Question</h3>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            The bar chart shows energy consumption from five different sources in four countries in 2022, measured in thousand terawatt-hours. Summarize the information by selecting and reporting the main features and make comparisons where relevant.
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">Band 8+ Sample Answer</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">Word Count: 179</span>
          </div>
          <div className="space-y-3 text-slate-800 dark:text-slate-200 leading-relaxed">
            <p>The bar chart compares energy consumption from five sources across four countries in 2022.</p>
            <p>Overall, fossil fuels remained the dominant source of energy in all countries. China consumed the largest amount of coal, while the United States relied most heavily on natural gas. Germany recorded the highest consumption of renewable energy.</p>
            <p>China consumed 39 thousand terawatt-hours of coal, considerably more than any other country. It also used substantial quantities of oil and natural gas, at 25 and 16 thousand terawatt-hours respectively. By contrast, the United States relied primarily on natural gas, which accounted for 33 thousand terawatt-hours.</p>
            <p>India's energy consumption was generally lower across all categories. Coal remained its primary source at 21 thousand terawatt-hours, while nuclear energy contributed only 1 thousand terawatt-hour.</p>
            <p>Germany displayed a different pattern. Renewable energy was its largest source at 20 thousand terawatt-hours, significantly exceeding the corresponding figures in the other countries. Nevertheless, fossil fuels continued to account for a considerable share of Germany's overall energy use.</p>
          </div>
        </div>
      </section>

      {/* Vocabulary */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          Useful Vocabulary for IELTS Bar Charts
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {[
            {
              title: 'Describing Increases',
              color: 'border-green-400 dark:border-green-600',
              bg: 'bg-green-50 dark:bg-green-950',
              words: ['increase', 'rise', 'grow', 'climb', 'surge'],
            },
            {
              title: 'Describing Decreases',
              color: 'border-red-400 dark:border-red-600',
              bg: 'bg-red-50 dark:bg-red-950',
              words: ['decline', 'fall', 'drop', 'decrease', 'plunge'],
            },
            {
              title: 'Comparing Data',
              color: 'border-blue-400 dark:border-blue-600',
              bg: 'bg-blue-50 dark:bg-blue-950',
              words: ['higher than', 'lower than', 'exceeded', 'was greater than', 'accounted for'],
            },
            {
              title: 'Describing Stability',
              color: 'border-amber-400 dark:border-amber-600',
              bg: 'bg-amber-50 dark:bg-amber-950',
              words: ['remained stable', 'stayed constant', 'showed little change', 'maintained a similar level'],
            },
          ].map(group => (
            <div key={group.title} className={`${group.bg} border-l-4 ${group.color} rounded-xl p-5`}>
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-3 text-sm uppercase tracking-wide">
                {group.title}
              </h3>
              <ul className="space-y-1.5">
                {group.words.map(w => (
                  <li key={w} className="text-slate-700 dark:text-slate-300 text-sm flex items-center gap-2">
                    <span className="text-slate-400">+</span> {w}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-5">
          Common Mistakes in IELTS Bar Charts
        </h2>
        <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
          <ol className="space-y-3">
            {[
              'Describing every number individually.',
              'Forgetting to write an overview.',
              'Using personal opinions.',
              'Ignoring major trends.',
              'Copying wording directly from the question.',
            ].map((mistake, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 text-xs font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                {mistake}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqItems.map((item, i) => (
            <div
              key={i}
              className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden bg-white dark:bg-slate-800"
            >
              <button
                className="w-full text-left px-6 py-4 font-semibold text-slate-900 dark:text-slate-100 flex justify-between items-center"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                aria-expanded={openFaq === i}
              >
                <span>{item.q}</span>
                <span className="text-slate-400 ml-4 flex-shrink-0 text-lg leading-none">
                  {openFaq === i ? '-' : '+'}
                </span>
              </button>
              {openFaq === i && (
                <div className="px-6 pb-5 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-700 pt-4">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Related Links */}
      <section className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
        <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4">Related IELTS Resources</h2>
        <ul className="space-y-2">
          {[
            { label: 'IELTS Writing Task 2 Essay Types', to: '/ielts/ielts-writing-task-2-essay-types/' },
            { label: 'Band 9 IELTS Writing Task 2 Sample Essays', to: '/ielts/50-band-9-ielts-writing-task-2-sample-essays/' },
            { label: 'Band 8 IELTS Sample Answers', to: '/ielts/band-8-ielts-sample-answers/' },
            { label: 'Conditionals in IELTS Writing', to: '/ielts/conditionals-in-ielts/' },
            { label: 'Passive Voice for IELTS Writing', to: '/ielts/passive-voice-ielts-writing/' },
            { label: 'IELTS Band Score Calculator', to: '/ielts-band-score-calculator/' },
          ].map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default IELTSWritingTask1BarChartPage;
