import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading, BulletList, CodeBlock } from '../components/ArticleComponents';
import GoogleAd from '../components/GoogleAd';
import SchemaMarkup from '../components/SchemaMarkup';

const ComplexSentencesIELTSPage: React.FC = () => {
  usePageMetadata({
    title: 'How to Write Complex Sentences for IELTS (Band 7-9 Guide)',
    description: 'Learn how to write complex sentences for IELTS Writing Task 1 & 2. Includes Band 7-9 examples, structures, mistakes, and practice exercises.'
  });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are complex sentences required for Band 7 in IELTS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Band 7 requires frequent and mostly error-free use of complex structures."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get Band 8 without complex sentences?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It is very unlikely. Advanced grammatical structures are necessary for higher bands."
        }
      },
      {
        "@type": "Question",
        "name": "How can I practice complex sentences for IELTS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Practice combining simple sentences, learn subordinating conjunctions, and analyze Band 9 sample essays."
        }
      },
      {
        "@type": "Question",
        "name": "Are long sentences better in IELTS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not necessarily. Sentences must be clear, accurate, and natural."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Write Complex Sentences for IELTS (Band 7-9 Guide)",
    "description": "Learn how to write complex sentences for IELTS Writing Task 1 & 2. Includes Band 7-9 examples, structures, mistakes, and exercises.",
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
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://typogrammar.com/ielts/how-to-write-complex-sentences"
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
        "name": "Complex Sentences for IELTS",
        "item": "https://typogrammar.com/ielts/how-to-write-complex-sentences"
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
          <li className="text-slate-600 dark:text-slate-400">Complex Sentences</li>
        </ol>
      </nav>

      <h1 className="text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100">
        How to Write Complex Sentences for IELTS (Band 7-9 Guide)
      </h1>

      {/* Quick Summary for AI Snippets */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
        <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-200">📌 Quick Summary</h3>
        <p className="text-blue-800 dark:text-blue-300">
          A complex sentence in IELTS consists of one independent clause and at least one dependent clause joined by subordinating conjunctions such as <strong>because</strong>, <strong>although</strong>, <strong>if</strong>, <strong>while</strong>, and <strong>since</strong>. Using complex sentences improves your Grammatical Range and Accuracy score and is essential for achieving <strong>Band 7 or higher</strong>.
        </p>
      </div>

      <ArticleParagraph>
        Complex sentences are essential if you want to score <strong>Band 7 or higher</strong> in IELTS Writing. In fact, complex sentence structures directly improve your <strong>Grammatical Range and Accuracy score</strong> (25% of the Writing band).
      </ArticleParagraph>

      <ArticleParagraph>
        This guide explains:
      </ArticleParagraph>
      <BulletList items={[
        <>What a complex sentence is</>,
        <>Why IELTS examiners look for it</>,
        <>How to build complex sentences correctly</>,
        <>Band 6 vs Band 9 examples</>,
        <>Common mistakes to avoid</>,
        <>Practice exercises</>
      ]} />

      <GoogleAd adSlot="6406598038" />

      {/* What Is a Complex Sentence */}
      <ArticleHeading>What Is a Complex Sentence?</ArticleHeading>
      <ArticleParagraph>
        A complex sentence contains:
      </ArticleParagraph>
      <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg mb-6">
        <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">One independent clause + One (or more) subordinate clauses.</p>
      </div>

      <ArticleParagraph>
        <strong>Formula:</strong>
      </ArticleParagraph>
      <CodeBlock>
        Independent clause + Subordinating conjunction + Dependent clause
      </CodeBlock>

      <ArticleParagraph>
        <strong>Example:</strong>
      </ArticleParagraph>
      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-6 border-l-4 border-green-500">
        <p className="text-green-800 dark:text-green-200 italic">
          "Although many people prefer online shopping, traditional stores remain popular."
        </p>
      </div>

      {/* Why Complex Sentences Are Important */}
      <ArticleHeading>Why Complex Sentences Are Important in IELTS</ArticleHeading>
      <ArticleParagraph>
        IELTS Writing scoring includes <strong>Grammatical Range and Accuracy (25%)</strong>. According to the{' '}
        <a 
          href="https://www.britishcouncil.org/exam/ielts" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          British Council
        </a>{' '}
        and{' '}
        <a 
          href="https://www.ielts.org/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          IDP IELTS
        </a>, grammatical range is crucial for achieving higher bands.
      </ArticleParagraph>

      <ArticleParagraph>
        To achieve:
      </ArticleParagraph>
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse border border-slate-300 dark:border-slate-600">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left">Band</th>
              <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left">Requirement</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white dark:bg-slate-800">
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 font-semibold">Band 6</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3">Mix of simple and complex sentences</td>
            </tr>
            <tr className="bg-slate-50 dark:bg-slate-700">
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 font-semibold">Band 7</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3">Frequent error-free complex sentences</td>
            </tr>
            <tr className="bg-white dark:bg-slate-800">
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 font-semibold">Band 8-9</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3">Wide variety of complex structures used naturally</td>
            </tr>
          </tbody>
        </table>
      </div>

      <ArticleParagraph>
        Examiners expect flexibility in:
      </ArticleParagraph>
      <BulletList items={[
        <>Cause and effect</>,
        <>Contrast</>,
        <>Condition</>,
        <>Concession</>,
        <>Relative clauses</>
      ]} />

      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-6 border-l-4 border-red-500">
        <p className="text-red-800 dark:text-red-200 font-semibold">
          ⚠️ Without complex sentences, it is difficult to go beyond Band 6.
        </p>
      </div>

      <GoogleAd adSlot="6406598038" />

      {/* Comparison Table: Simple vs Complex vs Compound */}
      <ArticleHeading>Sentence Types Comparison: Simple vs Compound vs Complex</ArticleHeading>
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse border border-slate-300 dark:border-slate-600">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left">Type</th>
              <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left">Structure</th>
              <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left">Example</th>
              <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left">IELTS Use</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white dark:bg-slate-800">
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 font-semibold">Simple</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3">One independent clause</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 italic">Many people use cars.</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3">Basic - Band 5-6</td>
            </tr>
            <tr className="bg-slate-50 dark:bg-slate-700">
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 font-semibold">Compound</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3">Two independent clauses + coordinating conjunction (and, but, or)</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 italic">Many people use cars, and this causes pollution.</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3">Good - Band 6-7</td>
            </tr>
            <tr className="bg-white dark:bg-slate-800">
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 font-semibold">Complex</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3">Independent clause + subordinate clause</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 italic">Although many people use cars, this causes pollution.</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3">Best - Band 7-9</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Types of Complex Sentences */}
      <ArticleHeading>Types of Complex Sentences for IELTS</ArticleHeading>

      {/* 1. Cause and Effect */}
      <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg mb-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">1. Cause and Effect (Because / Since / As)</h3>
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500">
          <p className="text-green-800 dark:text-green-200 italic">
            "Many governments invest in renewable energy because fossil fuels are unsustainable."
          </p>
        </div>
      </div>

      {/* 2. Contrast */}
      <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg mb-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">2. Contrast (Although / Even though / Whereas)</h3>
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500">
          <p className="text-green-800 dark:text-green-200 italic">
            "Although public transport is affordable, many individuals still prefer private vehicles."
          </p>
        </div>
      </div>

      {/* 3. Condition */}
      <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg mb-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">3. Condition (If / Unless)</h3>
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500">
          <p className="text-green-800 dark:text-green-200 italic">
            "If governments impose stricter laws, pollution levels may decrease significantly."
          </p>
        </div>
      </div>

      {/* 4. Relative Clauses */}
      <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg mb-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">4. Relative Clauses (Who / Which / That)</h3>
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500">
          <p className="text-green-800 dark:text-green-200 italic">
            "Students who practice daily tend to achieve higher IELTS scores."
          </p>
        </div>
      </div>

      {/* 5. Time Clauses */}
      <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg mb-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">5. Time Clauses (While / When / After / Before)</h3>
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500">
          <p className="text-green-800 dark:text-green-200 italic">
            "While technology improves communication, it can reduce face-to-face interaction."
          </p>
        </div>
      </div>

      <GoogleAd adSlot="6406598038" />

      {/* Band 6 vs Band 9 Comparison */}
      <ArticleHeading>Band 6 vs Band 9 Comparison</ArticleHeading>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Band 6 */}
        <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border-2 border-red-300 dark:border-red-700">
          <h3 className="text-lg font-bold text-red-800 dark:text-red-200 mb-3">❌ Band 6 (Mostly Simple Sentences)</h3>
          <p className="text-red-700 dark:text-red-300 italic">
            "Many people use cars. This causes pollution. Governments should stop this problem."
          </p>
        </div>

        {/* Band 9 */}
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-2 border-green-300 dark:border-green-700">
          <h3 className="text-lg font-bold text-green-800 dark:text-green-200 mb-3">✅ Band 9 Version</h3>
          <p className="text-green-700 dark:text-green-300 italic">
            "Although many people rely on cars for convenience, this dependence significantly contributes to environmental pollution, which governments must address through sustainable transport policies."
          </p>
        </div>
      </div>

      <ArticleParagraph>
        <strong>Difference:</strong>
      </ArticleParagraph>
      <BulletList items={[
        <>Clear subordination</>,
        <>Relative clause</>,
        <>Logical connection</>,
        <>Natural academic tone</>
      ]} />

      {/* 15 Ready-to-Use Complex Sentences */}
      <ArticleHeading>15 Ready-to-Use Complex Sentences for IELTS Task 2</ArticleHeading>

      <div className="space-y-4 mb-6">
        {[
          "Although globalization promotes economic growth, it can widen the gap between rich and poor nations.",
          "If governments invested more in education, unemployment rates would likely decrease.",
          "While social media connects people worldwide, it may negatively affect mental health.",
          "Since climate change is accelerating, urgent action is required.",
          "People who exercise regularly tend to live longer lives.",
          "Even though technology saves time, it often increases stress levels.",
          "Unless stricter regulations are introduced, environmental degradation will continue.",
          "Whereas some believe university education is essential, others argue practical skills are more valuable.",
          "After governments implemented new policies, crime rates declined.",
          "Because urban areas offer better job opportunities, many young people migrate to cities.",
          "Although online learning is flexible, it lacks direct interaction.",
          "If public transport were improved, traffic congestion would decrease.",
          "Students who develop critical thinking skills perform better academically.",
          "While economic development is necessary, environmental protection should not be ignored.",
          "Since healthcare is a fundamental right, governments must ensure equal access."
        ].map((sentence, index) => (
          <div key={index} className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg border-l-4 border-blue-500">
            <span className="font-bold text-blue-600 dark:text-blue-400 mr-2">{index + 1}.</span>
            <span className="text-slate-700 dark:text-slate-300">{sentence}</span>
          </div>
        ))}
      </div>

      <GoogleAd adSlot="6406598038" />

      {/* Common Mistakes to Avoid */}
      <ArticleHeading>Common Mistakes to Avoid</ArticleHeading>

      <div className="space-y-6 mb-6">
        {/* Mistake 1 */}
        <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
          <h3 className="text-lg font-bold text-red-800 dark:text-red-200 mb-2">❌ 1. Overusing "Because"</h3>
          <p className="text-red-700 dark:text-red-300">
            Repeating the same conjunction reduces variety. Use alternatives like <em>since</em>, <em>as</em>, <em>due to the fact that</em>.
          </p>
        </div>

        {/* Mistake 2 */}
        <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
          <h3 className="text-lg font-bold text-red-800 dark:text-red-200 mb-2">❌ 2. Creating Run-On Sentences</h3>
          <div className="space-y-2">
            <p className="text-red-700 dark:text-red-300">
              <strong>Incorrect:</strong> <em>Although pollution is serious many people ignore it.</em>
            </p>
            <p className="text-green-700 dark:text-green-300">
              <strong>Correct:</strong> <em>Although pollution is serious, many people ignore it.</em>
            </p>
          </div>
        </div>

        {/* Mistake 3 */}
        <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
          <h3 className="text-lg font-bold text-red-800 dark:text-red-200 mb-2">❌ 3. Making Sentences Too Long</h3>
          <p className="text-red-700 dark:text-red-300">
            Complex does not mean confusing. <strong>Clarity is essential.</strong>
          </p>
        </div>

        {/* Mistake 4 */}
        <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
          <h3 className="text-lg font-bold text-red-800 dark:text-red-200 mb-2">❌ 4. Grammar Errors in Subordinate Clauses</h3>
          <p className="text-red-700 dark:text-red-300">
            Wrong tense consistency reduces band score.
          </p>
        </div>
      </div>

      {/* How Many Complex Sentences */}
      <ArticleHeading>How Many Complex Sentences Should You Use?</ArticleHeading>
      <ArticleParagraph>
        There is no exact number, but ideally:
      </ArticleParagraph>
      <BulletList items={[
        <>At least 1-2 complex sentences per paragraph</>,
        <>A mix of simple, compound, and complex sentences</>,
        <>Natural variation, not forced complexity</>
      ]} />
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-6 border-l-4 border-blue-500">
        <p className="text-blue-800 dark:text-blue-300 font-semibold">
          💡 Quality is more important than quantity.
        </p>
      </div>

      <GoogleAd adSlot="6406598038" />

      {/* Practice Exercise */}
      <ArticleHeading>Practice Exercise</ArticleHeading>
      <ArticleParagraph>
        <strong>Combine these sentences into one complex sentence:</strong>
      </ArticleParagraph>

      <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg mb-6 space-y-4">
        <div>
          <span className="font-bold text-slate-900 dark:text-slate-100">1.</span>
          <span className="text-slate-700 dark:text-slate-300 ml-2">Many people work long hours. They experience stress.</span>
        </div>
        <div>
          <span className="font-bold text-slate-900 dark:text-slate-100">2.</span>
          <span className="text-slate-700 dark:text-slate-300 ml-2">Governments increase taxes. Citizens become dissatisfied.</span>
        </div>
        <div>
          <span className="font-bold text-slate-900 dark:text-slate-100">3.</span>
          <span className="text-slate-700 dark:text-slate-300 ml-2">Technology improves communication. It reduces privacy.</span>
        </div>
      </div>

      {/* Answers */}
      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mb-6">
        <h3 className="text-lg font-bold text-green-800 dark:text-green-200 mb-4">✅ Answers</h3>
        <div className="space-y-3">
          <div>
            <span className="font-bold text-green-700 dark:text-green-300">1.</span>
            <span className="text-green-700 dark:text-green-300 ml-2 italic">Many people experience stress because they work long hours.</span>
          </div>
          <div>
            <span className="font-bold text-green-700 dark:text-green-300">2.</span>
            <span className="text-green-700 dark:text-green-300 ml-2 italic">When governments increase taxes, citizens often become dissatisfied.</span>
          </div>
          <div>
            <span className="font-bold text-green-700 dark:text-green-300">3.</span>
            <span className="text-green-700 dark:text-green-300 ml-2 italic">While technology improves communication, it can reduce privacy.</span>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <ArticleHeading>Frequently Asked Questions</ArticleHeading>

      <div className="space-y-4 mb-6">
        <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Are complex sentences required for Band 7 in IELTS?</h3>
          <p className="text-slate-700 dark:text-slate-300">
            Yes. Band 7 requires frequent and mostly error-free use of complex structures.
          </p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Can I get Band 8 without complex sentences?</h3>
          <p className="text-slate-700 dark:text-slate-300">
            It is very unlikely. Advanced grammatical structures are necessary for higher bands.
          </p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">How can I practice complex sentences for IELTS?</h3>
          <p className="text-slate-700 dark:text-slate-300">
            Practice combining simple sentences, learn subordinating conjunctions, and analyze Band 9 sample essays.
          </p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Are long sentences better in IELTS?</h3>
          <p className="text-slate-700 dark:text-slate-300">
            Not necessarily. Sentences must be clear, accurate, and natural.
          </p>
        </div>
      </div>

      {/* E-E-A-T Author Expertise Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg mb-6 border border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3">👨‍🏫 About This Guide</h3>
        <p className="text-slate-700 dark:text-slate-300 mb-3">
          This guide is written by the <strong>TypoGrammar Editorial Team</strong>, a group of experienced IELTS instructors and English language experts. Our content is based on official{' '}
          <a 
            href="https://www.ielts.org/for-organisations/ielts-scoring-in-detail" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            IELTS scoring criteria
          </a>{' '}
          and years of teaching experience helping students achieve Band 7-9 scores.
        </p>
        <p className="text-slate-700 dark:text-slate-300">
          All examples follow the band descriptors published by the{' '}
          <a 
            href="https://www.britishcouncil.org/exam/ielts/prepare/free-ielts-practice-tests" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            British Council
          </a>{' '}
          and{' '}
          <a 
            href="https://www.ielts.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            IDP IELTS
          </a>.
        </p>
      </div>

      <GoogleAd adSlot="6406598038" />

      {/* Related Articles */}
      <ArticleHeading>Related IELTS Grammar Guides</ArticleHeading>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <Link
          to="/ielts/passive-voice-ielts-writing/"
          className="block p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
        >
          <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-1">Passive Voice for IELTS</h4>
          <p className="text-sm text-blue-700 dark:text-blue-300">Learn how to use passive voice effectively in IELTS Writing.</p>
        </Link>
        <Link
          to="/ielts/conditionals-in-ielts/"
          className="block p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
        >
          <h4 className="font-semibold text-purple-900 dark:text-purple-200 mb-1">Conditionals in IELTS</h4>
          <p className="text-sm text-purple-700 dark:text-purple-300">Master zero, first, second, and third conditionals for Band 9.</p>
        </Link>
        <Link
          to="/ielts/ielts-writing-task-2-essay-types/"
          className="block p-6 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
        >
          <h4 className="font-semibold text-green-900 dark:text-green-200 mb-1">IELTS Writing Task 2 Essay Types</h4>
          <p className="text-sm text-green-700 dark:text-green-300">Complete guide to all essay types with structures and examples.</p>
        </Link>
        <Link
          to="/ielts/band-8-ielts-sample-answers/"
          className="block p-6 bg-teal-50 dark:bg-teal-900/20 rounded-lg hover:bg-teal-100 dark:hover:bg-teal-900/30 transition-colors"
        >
          <h4 className="font-semibold text-teal-900 dark:text-teal-200 mb-1">Band 8+ Sample Answers</h4>
          <p className="text-sm text-teal-700 dark:text-teal-300">Analyze real Band 8 and 9 essays with complex sentences highlighted.</p>
        </Link>
      </div>

      <GoogleAd adSlot="6406598038" />
    </div>
  );
};

export default ComplexSentencesIELTSPage;
