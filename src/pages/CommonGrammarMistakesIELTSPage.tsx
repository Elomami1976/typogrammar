import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading, BulletList } from '../components/ArticleComponents';
import GoogleAd from '../components/GoogleAd';
import SchemaMarkup from '../components/SchemaMarkup';

const CommonGrammarMistakesIELTSPage: React.FC = () => {
  const pageUrl = 'https://typogrammar.com/ielts/common-grammar-mistakes-ielts-writing';
  const lastUpdated = '2026-03-01';
  const datePublished = '2026-03-01';

  usePageMetadata({
    title: 'Common Grammar Mistakes in IELTS Writing (15-20 Errors + Fixes)',
    description: 'Struggling with grammar in IELTS Writing? Discover the 20 most common grammar mistakes that lower your band score, with clear explanations and corrected examples.',
    ogTitle: 'Common Grammar Mistakes in IELTS Writing (15-20 Errors + Fixes)',
    ogDescription: 'Discover the 20 most common grammar mistakes that lower your IELTS band score, with clear explanations and corrected examples.',
    ogType: 'article',
    ogUrl: pageUrl,
  });

  // FAQ data for schema and display
  const faqData = [
    {
      question: 'What grammar mistakes lower IELTS score the most?',
      answer: 'Subject-verb agreement errors, incorrect tense usage, article mistakes, and sentence fragments significantly reduce your band score. These basic errors signal weak grammatical control to examiners.'
    },
    {
      question: 'How many grammar mistakes are allowed in IELTS?',
      answer: 'Band 7 requires good control with only occasional errors. Frequent mistakes usually limit candidates to Band 6. Band 8+ requires rare minor errors only.'
    },
    {
      question: 'Can grammar mistakes reduce my band score by 1 point?',
      answer: 'Yes. Frequent grammar errors can reduce your score by 0.5-1 band depending on severity and frequency. Grammar directly affects 25% of your Writing score.'
    },
    {
      question: 'What is the difference between Band 6 and Band 7 grammar?',
      answer: 'Band 6 shows frequent errors and limited complex sentences. Band 7 demonstrates occasional errors, effective use of complex sentences, and a clear range of structures.'
    },
    {
      question: 'How can I improve my grammar for IELTS quickly?',
      answer: 'Focus on: 1) Subject-verb agreement, 2) Article usage (a/an/the), 3) Correct verb tenses, 4) Complex sentence structures, 5) Punctuation. Practice with grammar checkers and analyze Band 9 essays.'
    },
    {
      question: 'Are complex sentences required for Band 7 in IELTS?',
      answer: 'Yes. Band 7 requires frequent and mostly error-free use of complex structures. Simple sentences alone will not achieve Band 7.'
    }
  ];

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

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Common Grammar Mistakes in IELTS Writing (15-20 Errors + Fixes)",
    "description": "Struggling with grammar in IELTS Writing? Discover the 20 most common grammar mistakes that lower your band score, with clear explanations and corrected examples.",
    "author": {
      "@type": "Organization",
      "name": "TypoGrammar"
    },
    "publisher": {
      "@type": "Organization",
      "name": "TypoGrammar",
      "logo": {
        "@type": "ImageObject",
        "url": "https://typogrammar.com/logo.png"
      }
    },
    "datePublished": datePublished,
    "dateModified": lastUpdated,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": pageUrl
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
        "name": "IELTS Writing Task 2",
        "item": "https://typogrammar.com/ielts/ielts-writing-task-2-essay-types"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Common Grammar Mistakes",
        "item": pageUrl
      }
    ]
  };

  useEffect(() => {
    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.text = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.text = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(breadcrumbScript);

    return () => {
      document.head.removeChild(faqScript);
      document.head.removeChild(breadcrumbScript);
    };
  }, []);

  // Grammar mistake component for consistent styling
  const GrammarMistake: React.FC<{
    number: number;
    title: string;
    incorrect: string;
    correct: string;
    explanation: string;
  }> = ({ number, title, incorrect, correct, explanation }) => (
    <div className="mb-8 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border border-slate-200 dark:border-slate-700">
      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
        {number}. {title}
      </h3>
      <div className="space-y-3 mb-4">
        <div className="flex items-start gap-3 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg border-l-4 border-red-500">
          <span className="text-red-600 dark:text-red-400 font-bold text-lg">❌</span>
          <p className="text-red-800 dark:text-red-300 italic">{incorrect}</p>
        </div>
        <div className="flex items-start gap-3 bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border-l-4 border-green-500">
          <span className="text-green-600 dark:text-green-400 font-bold text-lg">✅</span>
          <p className="text-green-800 dark:text-green-300 italic">{correct}</p>
        </div>
      </div>
      <p className="text-slate-600 dark:text-slate-400 text-sm">
        <strong>Why it matters:</strong> {explanation}
      </p>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup type="Article" data={articleSchema} />

      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2">
          <li>
            <Link to="/" className="text-blue-600 dark:text-blue-400 hover:underline">Home</Link>
          </li>
          <li className="text-slate-400">/</li>
          <li>
            <Link to="/ielts/ielts-writing-task-2-essay-types/" className="text-blue-600 dark:text-blue-400 hover:underline">IELTS Writing Task 2</Link>
          </li>
          <li className="text-slate-400">/</li>
          <li className="text-slate-600 dark:text-slate-400">Common Grammar Mistakes</li>
        </ol>
      </nav>

      <h1 className="text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100">
        Common Grammar Mistakes in IELTS Writing (15-20 Errors + Fixes)
      </h1>

      {/* E-E-A-T Signals */}
      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-6">
        <span className="flex items-center gap-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/></svg>
          By <Link to="/about/" className="text-blue-600 dark:text-blue-400 hover:underline">Typogrammar Team</Link>
        </span>
        <span className="flex items-center gap-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/></svg>
          Updated: {lastUpdated}
        </span>
        <span className="flex items-center gap-1 text-green-600 dark:text-green-400">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
          IELTS Expert Reviewed
        </span>
      </div>

      {/* Quick Summary for AI Snippets */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
        <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-200">📌 Quick Summary</h3>
        <p className="text-blue-800 dark:text-blue-300">
          Grammar mistakes are one of the biggest reasons candidates lose marks in IELTS Writing Task 1 and Task 2. According to IELTS band descriptors, <strong>Band 6 candidates make noticeable errors</strong>, while <strong>Band 7+ writers demonstrate better control</strong> with fewer mistakes. The 20 most common errors include subject-verb agreement, article usage, run-on sentences, and incorrect tense usage.
        </p>
      </div>

      <ArticleParagraph>
        Grammar mistakes are one of the biggest reasons candidates lose marks in IELTS Writing Task 1 and Task 2. Even strong ideas can receive a lower band score if they contain frequent grammatical errors.
      </ArticleParagraph>

      <ArticleParagraph>
        According to IELTS band descriptors, <strong>Band 6 candidates make noticeable errors in grammar</strong>, while <strong>Band 7+ writers demonstrate better control</strong> of complex structures with fewer mistakes.
      </ArticleParagraph>

      <ArticleParagraph>
        In this guide, you'll discover the <strong>20 most common grammar mistakes in IELTS Writing</strong>, along with clear corrections and explanations.
      </ArticleParagraph>

      <GoogleAd adSlot="6406598038" />

      {/* 20 Grammar Mistakes */}
      <ArticleHeading>The 20 Most Common Grammar Mistakes in IELTS Writing</ArticleHeading>

      <GrammarMistake
        number={1}
        title="Subject-Verb Agreement Errors"
        incorrect="He go to university every day."
        correct="He goes to university every day."
        explanation="Examiners immediately notice basic agreement errors. Third-person singular requires -s/-es."
      />

      <GrammarMistake
        number={2}
        title="Incorrect Article Usage (A / An / The)"
        incorrect="Government should invest in education system."
        correct="The government should invest in the education system."
        explanation="Article mistakes are extremely common among Band 6 writers. Use 'the' for specific or unique nouns."
      />

      <GrammarMistake
        number={3}
        title="Run-on Sentences"
        incorrect="Many people work long hours they feel stressed."
        correct="Many people work long hours, so they feel stressed."
        explanation="Use conjunctions (and, but, so) or punctuation properly to connect clauses."
      />

      <GrammarMistake
        number={4}
        title="Sentence Fragments"
        incorrect="Because pollution is increasing rapidly."
        correct="Pollution is increasing rapidly because of industrial growth."
        explanation="A sentence must express a complete idea with both a subject and a main verb."
      />

      <GrammarMistake
        number={5}
        title="Incorrect Verb Tense"
        incorrect="In the past, people use bicycles."
        correct="In the past, people used bicycles."
        explanation="Always match tense with time references. Past time = past tense."
      />

      <GrammarMistake
        number={6}
        title="Misuse of Complex Sentences"
        incorrect="Although technology improves education but it creates distraction."
        correct="Although technology improves education, it also creates distractions."
        explanation="Do not use 'although' and 'but' together, choose one subordinating structure."
      />

      <GrammarMistake
        number={7}
        title="Plural / Singular Confusion"
        incorrect="Many student face difficulty."
        correct="Many students face difficulties."
        explanation="Check plural forms carefully. 'Many' requires a plural noun."
      />

      <GrammarMistake
        number={8}
        title="Incorrect Prepositions"
        incorrect="Different than other countries."
        correct="Different from other countries."
        explanation="Preposition errors reduce grammatical accuracy. Learn common collocations."
      />

      <GrammarMistake
        number={9}
        title="Overusing Simple Sentences"
        incorrect="Technology is important. It helps communication. It improves education."
        correct="Technology is important because it improves communication and education."
        explanation="IELTS rewards varied sentence structures. Combine ideas using complex sentences."
      />

      <GrammarMistake
        number={10}
        title="Incorrect Conditional Structures"
        incorrect="If people will exercise, they will stay healthy."
        correct="If people exercise, they will stay healthy."
        explanation="First conditional: if + present simple, will + infinitive. Don't use 'will' in the if-clause."
      />

      <GoogleAd adSlot="6406598038" />

      <GrammarMistake
        number={11}
        title="Misplaced Modifiers"
        incorrect="Walking through the city, the buildings were impressive."
        correct="Walking through the city, I found the buildings impressive."
        explanation="Make sure the subject matches the action. 'Buildings' cannot 'walk.'"
      />

      <GrammarMistake
        number={12}
        title="Incorrect Comparatives"
        incorrect="More easier"
        correct="Easier"
        explanation="Never use double comparatives. One-syllable adjectives add -er, not 'more.'"
      />

      <GrammarMistake
        number={13}
        title="Confusing Adjectives and Adverbs"
        incorrect="People drive careless."
        correct="People drive carelessly."
        explanation="Adverbs (ending in -ly) modify verbs. Adjectives modify nouns."
      />

      <GrammarMistake
        number={14}
        title="Incorrect Word Form"
        incorrect="The government should make a strong decisionment."
        correct="The government should make a strong decision."
        explanation="Use correct word forms. 'Decision' is the noun; there is no word 'decisionment.'"
      />

      <GrammarMistake
        number={15}
        title="Punctuation Errors"
        incorrect="However many people disagree."
        correct="However, many people disagree."
        explanation="Transitional words like 'however' need a comma when starting a sentence."
      />

      <GrammarMistake
        number={16}
        title="Overusing 'Very'"
        incorrect="Very important, very big, very serious."
        correct="Crucial, significant, severe."
        explanation="Improve vocabulary precision. Replace 'very + adjective' with stronger vocabulary."
      />

      <GrammarMistake
        number={17}
        title="Double Negatives"
        incorrect="It is not uncommon that nobody agrees."
        correct="It is uncommon that nobody agrees. OR It is not uncommon that people disagree."
        explanation="Double negatives create confusion. Use single negative forms for clarity."
      />

      <GrammarMistake
        number={18}
        title="Inconsistent Pronouns"
        incorrect="If a person studies hard, they will succeed."
        correct="If a person studies hard, he or she will succeed."
        explanation="Formal consistency is preferred in IELTS. Match singular subjects with singular pronouns."
      />

      <GrammarMistake
        number={19}
        title="Wrong Collocations"
        incorrect="Do a mistake"
        correct="Make a mistake"
        explanation="Collocations are fixed expressions. Learn common verb + noun combinations."
      />

      <GrammarMistake
        number={20}
        title="Overcomplicated Sentences"
        incorrect="The implementation of governmental policies regarding environmental sustainability..."
        correct="Government policies on the environment..."
        explanation="Trying too hard to sound 'advanced' often creates grammar errors. Keep sentences clear and controlled."
      />

      {/* Why Grammar Is Important */}
      <ArticleHeading>📊 Why Grammar Is So Important for IELTS</ArticleHeading>
      
      <ArticleParagraph>
        Grammar directly affects your score under <strong>Grammatical Range and Accuracy</strong>, one of four scoring criteria (25% of your Writing score).
      </ArticleParagraph>

      <ArticleParagraph>
        Band descriptors show:
      </ArticleParagraph>

      <BulletList items={[
        <><strong>Band 6</strong> → Frequent grammar mistakes</>,
        <><strong>Band 7</strong> → Fewer errors, good control</>,
        <><strong>Band 8+</strong> → Rare minor errors only</>
      ]} />

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 my-8 rounded-r-lg">
        <p className="text-green-800 dark:text-green-300 font-semibold">
          💡 Improving grammar can raise your band score by 0.5-1.0 immediately.
        </p>
      </div>

      <GoogleAd adSlot="6406598038" />

      {/* Band 6 vs Band 7 Comparison */}
      <ArticleHeading>📌 Band 6 vs Band 7 Grammar Difference</ArticleHeading>

      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse border border-slate-300 dark:border-slate-600">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left">Band 6</th>
              <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left">Band 7</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white dark:bg-slate-800">
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3">Frequent errors</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3">Occasional errors</td>
            </tr>
            <tr className="bg-slate-50 dark:bg-slate-700">
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3">Limited complex sentences</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3">Effective use of complex sentences</td>
            </tr>
            <tr className="bg-white dark:bg-slate-800">
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3">Basic sentence variety</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3">Clear range of structures</td>
            </tr>
            <tr className="bg-slate-50 dark:bg-slate-700">
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3">Article mistakes common</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3">Articles mostly accurate</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* How to Avoid Grammar Mistakes */}
      <ArticleHeading>How to Avoid Grammar Mistakes in IELTS</ArticleHeading>

      <BulletList items={[
        <>Review <Link to="/topics/subject-verb-agreement/" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">subject-verb agreement</Link> daily</>,
        <>Practice <Link to="/ielts/how-to-write-complex-sentences/" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">complex sentences</Link> correctly</>,
        <>Check <Link to="/topics/articles/" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">articles</Link> carefully</>,
        <>Use a <Link to="/grammar-checker/" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">grammar checker</Link> before submitting practice essays</>,
        <>Avoid writing overly long sentences</>
      ]} />

      {/* Quick Grammar Checklist */}
      <ArticleHeading>✔ Quick Grammar Checklist Before Submitting Your Essay</ArticleHeading>

      <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-xl mb-8">
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
            <span className="text-green-600">✔</span> Check verb tenses
          </li>
          <li className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
            <span className="text-green-600">✔</span> Check plural forms
          </li>
          <li className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
            <span className="text-green-600">✔</span> Check articles (a/an/the)
          </li>
          <li className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
            <span className="text-green-600">✔</span> Check punctuation
          </li>
          <li className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
            <span className="text-green-600">✔</span> Remove sentence fragments
          </li>
          <li className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
            <span className="text-green-600">✔</span> Simplify overcomplicated sentences
          </li>
        </ul>
      </div>

      <GoogleAd adSlot="6406598038" />

      {/* Visible FAQ Section */}
      <ArticleHeading>Frequently Asked Questions</ArticleHeading>
      
      <div className="space-y-6 mt-6">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-6 border border-slate-200 dark:border-slate-600">
            <h3 className="font-heading text-xl font-bold text-slate-800 dark:text-slate-200 mb-3">
              {faq.question}
            </h3>
            <ArticleParagraph>{faq.answer}</ArticleParagraph>
          </div>
        ))}
      </div>

      {/* Related Resources */}
      <ArticleHeading>Related IELTS Grammar Resources</ArticleHeading>

      <div className="grid md:grid-cols-2 gap-4 mt-6">
        <Link to="/ielts/how-to-write-complex-sentences/" className="block p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 transition-colors">
          <h4 className="font-semibold text-blue-900 dark:text-blue-200">Complex Sentences for IELTS</h4>
          <p className="text-sm text-blue-700 dark:text-blue-300">Learn how to write complex sentences for Band 7-9.</p>
        </Link>
        <Link to="/ielts/conditionals-in-ielts/" className="block p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 transition-colors">
          <h4 className="font-semibold text-purple-900 dark:text-purple-200">Conditionals in IELTS</h4>
          <p className="text-sm text-purple-700 dark:text-purple-300">Master conditional structures for Writing and Speaking.</p>
        </Link>
        <Link to="/ielts/passive-voice-ielts-writing/" className="block p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800 hover:border-green-400 dark:hover:border-green-600 transition-colors">
          <h4 className="font-semibold text-green-900 dark:text-green-200">Passive Voice for IELTS</h4>
          <p className="text-sm text-green-700 dark:text-green-300">Use passive voice effectively in Task 1 and Task 2.</p>
        </Link>
        <Link to="/ielts/vocabulary/band-7/" className="block p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-200 dark:border-teal-800 hover:border-teal-400 dark:hover:border-teal-600 transition-colors">
          <h4 className="font-semibold text-teal-900 dark:text-teal-200">Band 7 Vocabulary</h4>
          <p className="text-sm text-teal-700 dark:text-teal-300">Essential vocabulary to boost your IELTS score.</p>
        </Link>
      </div>

      <div className="mt-8">
        <GoogleAd adSlot="6406598038" />
      </div>
    </div>
  );
};

export default CommonGrammarMistakesIELTSPage;
