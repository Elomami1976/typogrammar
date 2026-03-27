import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading, BulletList, CodeBlock } from '../components/ArticleComponents';
import GoogleAd from '../components/GoogleAd';
import SchemaMarkup from '../components/SchemaMarkup';

const ConditionalsInIELTSPage: React.FC = () => {
  usePageMetadata({
    title: 'Conditionals in IELTS Writing & Speaking: Band 9 Guide [2026]',
    description: 'Master all conditionals for IELTS: Zero, First, Second, Third & Mixed. Band 9 examples, structures, common mistakes + free exercises. Score 7-9 easily!'
  });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are conditionals in IELTS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Conditionals are grammar structures used to express possible, hypothetical, or imaginary situations. In IELTS, they demonstrate advanced grammar skills and help improve your Grammatical Range and Accuracy score."
        }
      },
      {
        "@type": "Question",
        "name": "Are conditionals important in IELTS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, conditionals are essential for IELTS. They improve your Grammatical Range and Accuracy score in both Writing and Speaking. Using conditionals correctly can help you achieve Band 7, 8, or 9."
        }
      },
      {
        "@type": "Question",
        "name": "Which conditional is best for IELTS Writing Task 2?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Second Conditional (If + past simple, would + verb) and Third Conditional (If + had + past participle, would have + past participle) are most powerful for IELTS Writing Task 2. They allow you to discuss hypothetical situations and past regrets effectively."
        }
      },
      {
        "@type": "Question",
        "name": "How many types of conditionals are there in IELTS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There are 5 types of conditionals used in IELTS: Zero Conditional (facts), First Conditional (real future), Second Conditional (hypothetical), Third Conditional (past unreal), and Mixed Conditionals (combining time frames)."
        }
      },
      {
        "@type": "Question",
        "name": "Do conditionals increase IELTS score?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Using conditionals correctly demonstrates complex grammar control, which is required for Band 7 and above in Grammatical Range and Accuracy criterion."
        }
      },
      {
        "@type": "Question",
        "name": "What is the structure of Second Conditional?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Second Conditional structure is: If + past simple, would + base verb. Example: If governments invested more in education, crime would decrease."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use conditionals in IELTS Speaking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, conditionals are excellent for IELTS Speaking, especially in Part 2 and Part 3. They help you give longer, more developed answers about hypothetical situations, future possibilities, and past experiences."
        }
      },
      {
        "@type": "Question",
        "name": "What is the most common mistake with conditionals in IELTS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The most common mistake is using 'will' in the if-clause. Incorrect: If people will recycle. Correct: If people recycle. Another common error is mixing up second and third conditional structures."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Conditionals in IELTS Writing & Speaking: Complete Band 9 Guide",
    "description": "Master all conditionals for IELTS: Zero, First, Second, Third & Mixed. Band 9 examples, structures, common mistakes and free exercises.",
    "author": {
      "@type": "Organization",
      "name": "Typogrammar",
      "url": "https://typogrammar.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Typogrammar",
      "url": "https://typogrammar.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://typogrammar.com/images/logo.png"
      }
    },
    "datePublished": "2025-06-15",
    "dateModified": "2026-03-02",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://typogrammar.com/ielts/conditionals-in-ielts"
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup type="Article" data={articleSchema} />

      <div className="mb-6">
        <Link
          to="/ielts/ielts-writing-task-2-essay-types"
          className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
        >
          ← Back to IELTS Writing Task 2 Essay Types
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100">
        Conditionals in IELTS Writing & Speaking: Complete Band 9 Guide
      </h1>

      {/* Key Takeaways - Featured Snippet Optimization */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 border-2 border-blue-200 dark:border-blue-700 p-6 my-8 rounded-xl shadow-sm">
        <h2 className="text-xl font-bold mb-4 text-blue-900 dark:text-blue-200">🎯 Key Takeaways: Conditionals in IELTS</h2>
        <ul className="space-y-2 text-blue-800 dark:text-blue-300">
          <li className="flex items-start gap-2"><span className="text-green-600 dark:text-green-400 font-bold">✓</span> <strong>5 types:</strong> Zero, First, Second, Third, and Mixed Conditionals</li>
          <li className="flex items-start gap-2"><span className="text-green-600 dark:text-green-400 font-bold">✓</span> <strong>Best for Band 9:</strong> Second Conditional (If + past simple, would + verb)</li>
          <li className="flex items-start gap-2"><span className="text-green-600 dark:text-green-400 font-bold">✓</span> <strong>Scoring impact:</strong> Improves Grammatical Range and Accuracy (25% of score)</li>
          <li className="flex items-start gap-2"><span className="text-green-600 dark:text-green-400 font-bold">✓</span> <strong>Common mistake:</strong> Using "will" in the if-clause</li>
          <li className="flex items-start gap-2"><span className="text-green-600 dark:text-green-400 font-bold">✓</span> <strong>Use in:</strong> Writing Task 2 essays + Speaking Part 2 & 3</li>
        </ul>
      </div>

      {/* Table of Contents */}
      <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-6 my-8 rounded-xl">
        <h2 className="text-lg font-bold mb-4 text-slate-900 dark:text-slate-100">📚 Table of Contents</h2>
        <nav className="space-y-2 text-sm">
          <a href="#what-are-conditionals" className="block text-blue-600 dark:text-blue-400 hover:underline">1. What Are Conditionals in IELTS?</a>
          <a href="#why-important" className="block text-blue-600 dark:text-blue-400 hover:underline">2. Why Are Conditionals Important?</a>
          <a href="#types" className="block text-blue-600 dark:text-blue-400 hover:underline">3. Types of Conditionals (Zero, First, Second, Third, Mixed)</a>
          <a href="#writing-task-2" className="block text-blue-600 dark:text-blue-400 hover:underline">4. How to Use Conditionals in Writing Task 2</a>
          <a href="#speaking" className="block text-blue-600 dark:text-blue-400 hover:underline">5. How to Use Conditionals in Speaking</a>
          <a href="#band-scores" className="block text-blue-600 dark:text-blue-400 hover:underline">6. How Conditionals Improve Your Band Score</a>
          <a href="#mistakes" className="block text-blue-600 dark:text-blue-400 hover:underline">7. Common Mistakes to Avoid</a>
          <a href="#band-9-sentences" className="block text-blue-600 dark:text-blue-400 hover:underline">8. Best Conditional Sentences for Band 9</a>
          <a href="#practice" className="block text-blue-600 dark:text-blue-400 hover:underline">9. Practice Exercises</a>
          <a href="#faq" className="block text-blue-600 dark:text-blue-400 hover:underline">10. Frequently Asked Questions</a>
        </nav>
      </div>

      {/* Quick Summary */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
        <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-200">📌 Quick Summary</h3>
        <p className="text-blue-800 dark:text-blue-300">
          Conditionals are one of the most important grammar structures in the IELTS exam. If you want to achieve <strong>Band 7, Band 8, or Band 9</strong>, you must know how to use conditionals correctly in IELTS Writing and Speaking.
        </p>
      </div>

      <ArticleParagraph>
        In this complete guide, you will learn:
      </ArticleParagraph>
      <BulletList items={[
        <>What conditionals are</>,
        <>Types of conditionals in IELTS</>,
        <>How to use conditionals in IELTS Writing Task 2</>,
        <>How to use conditionals in IELTS Speaking</>,
        <>Band 9 examples</>,
        <>Common mistakes</>,
        <>Tips to get Band 9</>
      ]} />

      <ArticleParagraph>
        This guide is designed for <strong>IELTS students</strong> and <strong>academic English learners</strong>.
      </ArticleParagraph>

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>

      {/* What Are Conditionals */}
      <ArticleHeading id="what-are-conditionals">What Are Conditionals in IELTS?</ArticleHeading>

      <ArticleParagraph>
        Conditionals are sentences used to talk about:
      </ArticleParagraph>
      <BulletList items={[
        <>Possible situations</>,
        <>Hypothetical situations</>,
        <>Future results</>,
        <>Imaginary ideas</>,
        <>Past regrets</>
      ]} />

      <ArticleParagraph>
        Conditionals usually follow this structure:
      </ArticleParagraph>

      <CodeBlock>{`If + condition, result`}</CodeBlock>

      <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-5 my-6 border border-green-200 dark:border-green-700">
        <h4 className="font-semibold text-green-900 dark:text-green-200 mb-2">Example:</h4>
        <p className="text-slate-800 dark:text-slate-200 italic">
          If people study regularly, they improve faster.
        </p>
      </div>

      <ArticleParagraph>
        Using conditionals in IELTS shows the examiner that you can use <strong>complex grammar structures</strong>, which increases your band score.
      </ArticleParagraph>

      {/* Why Are Conditionals Important */}
      <ArticleHeading id="why-important">Why Are Conditionals Important in IELTS Writing and Speaking?</ArticleHeading>

      <ArticleParagraph>
        Conditionals improve your <strong>Grammatical Range and Accuracy</strong>, which is one of the four IELTS scoring criteria.
      </ArticleParagraph>

      <ArticleParagraph>
        Using conditionals helps you:
      </ArticleParagraph>
      <BulletList items={[
        <>Show advanced grammar</>,
        <>Express complex ideas</>,
        <>Discuss problems and solutions</>,
        <>Explain causes and effects</>
      ]} />

      <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 my-6 rounded-r-lg">
        <p className="text-amber-800 dark:text-amber-300 font-medium">
          💡 Students who use conditionals correctly often achieve <strong>Band 7 or higher</strong>.
        </p>
      </div>

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>

      {/* Types of Conditionals */}
      <ArticleHeading id="types">Types of Conditionals in IELTS</ArticleHeading>

      <ArticleParagraph>
        There are four main types of conditionals you must know for IELTS.
      </ArticleParagraph>

      {/* Zero Conditional */}
      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 my-6 border border-slate-200 dark:border-slate-700">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">Zero Conditional in IELTS</h3>

        <div className="mb-4">
          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Structure</h4>
          <CodeBlock>{`If + present simple, present simple`}</CodeBlock>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Use</h4>
          <p className="text-slate-700 dark:text-slate-300">Facts and general truths</p>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Examples</h4>
          <BulletList items={[
            <><em>If people eat too much fast food, they gain weight.</em></>,
            <><em>If students practice English daily, they improve quickly.</em></>
          ]} />
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-700">
          <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">IELTS Writing Example</h4>
          <p className="text-slate-800 dark:text-slate-200 italic">
            If governments invest in education, societies become more successful.
          </p>
        </div>
      </div>

      {/* First Conditional */}
      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 my-6 border border-slate-200 dark:border-slate-700">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">First Conditional in IELTS</h3>

        <div className="mb-4">
          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Structure</h4>
          <CodeBlock>{`If + present simple, will + verb`}</CodeBlock>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Use</h4>
          <p className="text-slate-700 dark:text-slate-300">Real future possibility</p>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Examples</h4>
          <BulletList items={[
            <><em>If governments improve public transport, traffic will decrease.</em></>,
            <><em>If people recycle more, pollution will reduce.</em></>
          ]} />
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-700">
          <h4 className="font-semibold text-green-900 dark:text-green-200 mb-2">Band 8 Example</h4>
          <p className="text-slate-800 dark:text-slate-200 italic">
            If countries invest in renewable energy, environmental problems will decrease.
          </p>
        </div>
      </div>

      {/* Second Conditional */}
      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 my-6 border border-purple-200 dark:border-purple-700">
        <h3 className="text-xl font-bold text-purple-900 dark:text-purple-200 mb-2">Second Conditional in IELTS</h3>
        <span className="inline-block bg-purple-200 dark:bg-purple-800 text-purple-900 dark:text-purple-200 text-xs font-bold px-3 py-1 rounded-full mb-4">VERY IMPORTANT</span>

        <ArticleParagraph>
          This is one of the most powerful structures in IELTS Writing Task 2.
        </ArticleParagraph>

        <div className="mb-4">
          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Structure</h4>
          <CodeBlock>{`If + past simple, would + verb`}</CodeBlock>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Use</h4>
          <p className="text-slate-700 dark:text-slate-300">Imaginary or hypothetical situations</p>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-slate-900 dark:text-slate-200 mb-2">Band 9 Examples</h4>
          <BulletList items={[
            <><em>If governments spent more money on education, crime would decrease.</em></>,
            <><em>If people used public transport, pollution would be reduced.</em></>,
            <><em>If universities were free, more students would attend.</em></>
          ]} />
        </div>
      </div>

      {/* Third Conditional */}
      <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-6 my-6 border border-amber-200 dark:border-amber-700">
        <h3 className="text-xl font-bold text-amber-900 dark:text-amber-200 mb-2">Third Conditional in IELTS</h3>
        <span className="inline-block bg-amber-200 dark:bg-amber-800 text-amber-900 dark:text-amber-200 text-xs font-bold px-3 py-1 rounded-full mb-4">BAND 9 LEVEL</span>

        <div className="mb-4">
          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Structure</h4>
          <CodeBlock>{`If + had + past participle, would have + past participle`}</CodeBlock>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Use</h4>
          <p className="text-slate-700 dark:text-slate-300">Past unreal situations or regrets</p>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-slate-900 dark:text-slate-200 mb-2">Band 9 Examples</h4>
          <BulletList items={[
            <><em>If governments had acted earlier, pollution would have been reduced.</em></>,
            <><em>If cities had improved transport, traffic would have decreased.</em></>,
            <><em>If people had followed the rules, accidents would have been prevented.</em></>
          ]} />
        </div>
      </div>

      {/* Mixed Conditionals */}
      <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 my-6 border border-green-200 dark:border-green-700">
        <h3 className="text-xl font-bold text-green-900 dark:text-green-200 mb-4">Mixed Conditionals in IELTS</h3>

        <ArticleParagraph>
          Mixed conditionals show <strong>very advanced grammar</strong>.
        </ArticleParagraph>

        <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-green-300 dark:border-green-600">
          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Example:</h4>
          <p className="text-slate-800 dark:text-slate-200 italic">
            If governments had invested in education, crime would be lower today.
          </p>
        </div>

        <div className="mt-4 bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg">
          <p className="text-amber-800 dark:text-amber-300 font-medium">
            💡 This structure is very impressive for IELTS examiners.
          </p>
        </div>
      </div>

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>

      {/* How to Use in Writing Task 2 */}
      <ArticleHeading id="writing-task-2">How to Use Conditionals in IELTS Writing Task 2</ArticleHeading>

      <ArticleParagraph>Conditionals are perfect for:</ArticleParagraph>
      <BulletList items={[
        <>Opinion essays</>,
        <>Problem and solution essays</>,
        <>Discussion essays</>,
        <>Advantage and disadvantage essays</>
      ]} />

      <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 my-6 border border-green-200 dark:border-green-700">
        <h4 className="font-semibold text-lg text-green-900 dark:text-green-200 mb-4">✅ Band 9 Writing Example Using Conditionals</h4>
        <div className="text-slate-800 dark:text-slate-200 space-y-4">
          <p>
            Traffic congestion is a serious issue in many cities. <strong>If governments invested more in public transport, traffic would decrease significantly.</strong> Furthermore, <strong>if people used buses and trains instead of cars, pollution would be reduced.</strong> As a result, cities would become healthier places to live.
          </p>
        </div>
        <div className="mt-4 bg-green-100 dark:bg-green-800/30 rounded-lg p-3">
          <p className="text-green-900 dark:text-green-200 text-sm font-medium">
            ✅ This paragraph shows Band 9 grammar level.
          </p>
        </div>
      </div>

      {/* How to Use in Speaking */}
      <ArticleHeading id="speaking">How to Use Conditionals in IELTS Speaking</ArticleHeading>

      <ArticleParagraph>
        Conditionals help you give longer and more advanced answers.
      </ArticleParagraph>

      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 my-6 border border-slate-200 dark:border-slate-700">
        <h4 className="font-semibold text-lg text-slate-900 dark:text-slate-100 mb-3">📝 Speaking Example Question</h4>
        <p className="text-slate-700 dark:text-slate-300 italic mb-4">
          What would happen if people stopped using cars?
        </p>

        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-700">
          <h4 className="font-semibold text-green-900 dark:text-green-200 mb-2">Band 9 Answer</h4>
          <p className="text-slate-800 dark:text-slate-200 italic">
            If people stopped using cars, pollution would decrease dramatically. Cities would become cleaner, and people would be healthier.
          </p>
        </div>
      </div>

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>

      {/* How Conditionals Improve Score */}
      <ArticleHeading id="band-scores">How Conditionals Improve Your IELTS Score</ArticleHeading>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse border border-slate-300 dark:border-slate-600">
          <thead>
            <tr className="bg-blue-50 dark:bg-blue-900/30">
              <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold text-slate-900 dark:text-slate-100">Band Score</th>
              <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold text-slate-900 dark:text-slate-100">Conditional Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300 font-medium">Band 6</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Uses simple sentences only</td>
            </tr>
            <tr className="bg-slate-50 dark:bg-slate-800/30">
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300 font-medium">Band 7</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Uses some conditionals</td>
            </tr>
            <tr>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300 font-medium">Band 8</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Uses different conditional types correctly</td>
            </tr>
            <tr className="bg-slate-50 dark:bg-slate-800/30">
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300 font-medium">Band 9</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Uses conditionals naturally, accurately, and flexibly</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Common Mistakes */}
      <ArticleHeading id="mistakes">Common Mistakes in IELTS Conditionals</ArticleHeading>

      <div className="space-y-4 my-6">
        <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-5 border border-red-200 dark:border-red-700">
          <h4 className="font-semibold text-red-900 dark:text-red-200 mb-3">Mistake 1</h4>
          <div className="space-y-2">
            <p className="text-slate-800 dark:text-slate-200">
              <span className="text-red-600 dark:text-red-400 font-medium">❌ Incorrect:</span> <em>If people will recycle, pollution will decrease.</em>
            </p>
            <p className="text-slate-800 dark:text-slate-200">
              <span className="text-green-600 dark:text-green-400 font-medium">✅ Correct:</span> <em>If people recycle, pollution will decrease.</em>
            </p>
          </div>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-5 border border-red-200 dark:border-red-700">
          <h4 className="font-semibold text-red-900 dark:text-red-200 mb-3">Mistake 2</h4>
          <div className="space-y-2">
            <p className="text-slate-800 dark:text-slate-200">
              <span className="text-red-600 dark:text-red-400 font-medium">❌ Incorrect:</span> <em>If governments spend more money, crime will decreased.</em>
            </p>
            <p className="text-slate-800 dark:text-slate-200">
              <span className="text-green-600 dark:text-green-400 font-medium">✅ Correct:</span> <em>If governments spend more money, crime will decrease.</em>
            </p>
          </div>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-5 border border-red-200 dark:border-red-700">
          <h4 className="font-semibold text-red-900 dark:text-red-200 mb-3">Mistake 3</h4>
          <div className="space-y-2">
            <p className="text-slate-800 dark:text-slate-200">
              <span className="text-red-600 dark:text-red-400 font-medium">❌ Incorrect:</span> <em>If people would exercise, they would be healthy.</em>
            </p>
            <p className="text-slate-800 dark:text-slate-200">
              <span className="text-green-600 dark:text-green-400 font-medium">✅ Correct:</span> <em>If people exercised, they would be healthier.</em>
            </p>
          </div>
        </div>
      </div>

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>

      {/* Best Conditional Sentences */}
      <ArticleHeading id="band-9-sentences">Best Conditional Sentences for IELTS Band 9</ArticleHeading>

      <ArticleParagraph>Use these in your essays:</ArticleParagraph>

      <div className="space-y-3 my-6">
        {[
          'If governments invested more in education, society would improve.',
          'If people reduced plastic use, pollution would decrease.',
          'If authorities had acted earlier, problems would have been avoided.',
          'If this trend continues, the situation will worsen.',
          'If immediate action is taken, the problem can be solved.'
        ].map((sentence, i) => (
          <div key={i} className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-700">
            <p className="text-slate-800 dark:text-slate-200 italic">{sentence}</p>
          </div>
        ))}
      </div>

      {/* Practice Exercise */}
      <ArticleHeading id="practice">Practice Exercise</ArticleHeading>

      <ArticleParagraph>Complete these sentences:</ArticleParagraph>

      <div className="space-y-4 my-6">
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
          <p className="text-slate-800 dark:text-slate-200 font-medium mb-2">1. If people studied more, __________</p>
          <p className="text-slate-800 dark:text-slate-200 font-medium mb-2">2. If governments improve healthcare, __________</p>
          <p className="text-slate-800 dark:text-slate-200 font-medium">3. If cities had invested in public transport, __________</p>
        </div>

        <details className="bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
          <summary className="p-4 cursor-pointer font-semibold text-green-900 dark:text-green-200">
            Click to see answers
          </summary>
          <div className="px-5 pb-5 space-y-2">
            <p className="text-slate-800 dark:text-slate-200">
              <strong>1.</strong> If people studied more, <em>they would achieve higher scores.</em>
            </p>
            <p className="text-slate-800 dark:text-slate-200">
              <strong>2.</strong> If governments improve healthcare, <em>citizens will live longer.</em>
            </p>
            <p className="text-slate-800 dark:text-slate-200">
              <strong>3.</strong> If cities had invested in public transport, <em>traffic would have decreased.</em>
            </p>
          </div>
        </details>
      </div>

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>

      {/* Tips */}
      <ArticleHeading>Tips to Use Conditionals Correctly in IELTS</ArticleHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        {[
          { tip: 'Use Second Conditional in Writing Task 2', icon: '✍️' },
          { tip: 'Use Third Conditional for past situations', icon: '📝' },
          { tip: 'Use different conditional types', icon: '🔄' },
          { tip: 'Avoid grammar mistakes', icon: '⚠️' },
          { tip: 'Use conditionals naturally', icon: '💬' },
          { tip: 'Do not overuse them', icon: '⚖️' },
          { tip: 'Practice regularly', icon: '📚' }
        ].map((item, i) => (
          <div key={i} className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700 flex items-center gap-3">
            <span className="text-2xl">{item.icon}</span>
            <p className="text-slate-800 dark:text-slate-200 font-medium">{item.tip}</p>
          </div>
        ))}
      </div>

      {/* Conclusion */}
      <ArticleHeading>Conclusion: How to Use Conditionals in IELTS Successfully</ArticleHeading>

      <ArticleParagraph>
        Conditionals are essential if you want a high IELTS score. They help you:
      </ArticleParagraph>
      <BulletList items={[
        <>Improve grammar score</>,
        <>Show advanced English level</>,
        <>Write Band 9 essays</>,
        <>Speak more fluently</>
      ]} />

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-6 rounded-r-lg">
        <p className="text-blue-800 dark:text-blue-300 font-medium">
          If you use conditionals correctly, you can significantly improve your IELTS Writing and Speaking scores.
        </p>
      </div>

      {/* FAQ */}
      <ArticleHeading id="faq">Frequently Asked Questions</ArticleHeading>

      <div className="space-y-4 my-6">
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
          <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">What are conditionals in IELTS?</p>
          <p className="text-slate-700 dark:text-slate-300">Conditionals are grammar structures used to express possible, hypothetical, or imaginary situations. In IELTS, they demonstrate advanced grammar skills and help improve your Grammatical Range and Accuracy score.</p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
          <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Are conditionals important in IELTS?</p>
          <p className="text-slate-700 dark:text-slate-300">Yes, conditionals are essential for IELTS. They improve your Grammatical Range and Accuracy score in both Writing and Speaking. Using conditionals correctly can help you achieve Band 7, 8, or 9.</p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
          <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Which conditional is best for IELTS Writing Task 2?</p>
          <p className="text-slate-700 dark:text-slate-300">The Second Conditional (If + past simple, would + verb) and Third Conditional (If + had + past participle, would have + past participle) are most powerful for IELTS Writing Task 2.</p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
          <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">How many types of conditionals are there in IELTS?</p>
          <p className="text-slate-700 dark:text-slate-300">There are 5 types: Zero Conditional (facts), First Conditional (real future), Second Conditional (hypothetical), Third Conditional (past unreal), and Mixed Conditionals (combining time frames).</p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
          <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Do conditionals increase IELTS score?</p>
          <p className="text-slate-700 dark:text-slate-300">Yes. Using conditionals correctly demonstrates complex grammar control, which is required for Band 7 and above.</p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
          <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">What is the structure of Second Conditional?</p>
          <p className="text-slate-700 dark:text-slate-300">The Second Conditional structure is: If + past simple, would + base verb. Example: If governments invested more in education, crime would decrease.</p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
          <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Can I use conditionals in IELTS Speaking?</p>
          <p className="text-slate-700 dark:text-slate-300">Yes, conditionals are excellent for IELTS Speaking, especially in Part 2 and Part 3. They help you give longer, more developed answers about hypothetical situations.</p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
          <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">What is the most common mistake with conditionals?</p>
          <p className="text-slate-700 dark:text-slate-300">The most common mistake is using "will" in the if-clause. Incorrect: If people will recycle. Correct: If people recycle.</p>
        </div>
      </div>

      {/* Related Links */}
      <ArticleHeading>Related Guides</ArticleHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <Link to="/blog/grammatical-range-and-accuracy-ielts" className="block p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 transition-colors">
          <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-1">Grammatical Range and Accuracy in IELTS</h4>
          <p className="text-sm text-blue-700 dark:text-blue-400">Full guide with examples on how grammar affects your IELTS score.</p>
        </Link>
        <Link to="/ielts/task-achievement-in-ielts" className="block p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800 hover:border-green-400 dark:hover:border-green-600 transition-colors">
          <h4 className="font-semibold text-green-900 dark:text-green-200 mb-1">What Is Task Achievement in IELTS?</h4>
          <p className="text-sm text-green-700 dark:text-green-400">Band 9 guide to answering IELTS questions fully.</p>
        </Link>
        <Link to="/ielts/lexical-resource-in-ielts" className="block p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-800 hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors">
          <h4 className="font-semibold text-indigo-900 dark:text-indigo-200 mb-1">What Is Lexical Resource in IELTS?</h4>
          <p className="text-sm text-indigo-700 dark:text-indigo-400">Vocabulary scoring guide for Band 7-9.</p>
        </Link>
        <Link to="/ielts/passive-voice-ielts-writing" className="block p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 transition-colors">
          <h4 className="font-semibold text-purple-900 dark:text-purple-200 mb-1">Passive Voice for IELTS Writing</h4>
          <p className="text-sm text-purple-700 dark:text-purple-400">Full guide with Band 9 examples.</p>
        </Link>
        <Link to="/ielts/how-to-write-complex-sentences" className="block p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-200 dark:border-teal-800 hover:border-teal-400 dark:hover:border-teal-600 transition-colors">
          <h4 className="font-semibold text-teal-900 dark:text-teal-200 mb-1">Complex Sentences for IELTS</h4>
          <p className="text-sm text-teal-700 dark:text-teal-400">Write Band 7-9 level sentences.</p>
        </Link>
        <Link to="/ielts/common-grammar-mistakes-ielts-writing" className="block p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800 hover:border-red-400 dark:hover:border-red-600 transition-colors">
          <h4 className="font-semibold text-red-900 dark:text-red-200 mb-1">Common Grammar Mistakes in IELTS</h4>
          <p className="text-sm text-red-700 dark:text-red-400">20 errors and how to fix them.</p>
        </Link>
        <Link to="/ielts/ielts-writing-task-2-essay-types" className="block p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800 hover:border-amber-400 dark:hover:border-amber-600 transition-colors">
          <h4 className="font-semibold text-amber-900 dark:text-amber-200 mb-1">IELTS Writing Task 2 Essay Types</h4>
          <p className="text-sm text-amber-700 dark:text-amber-400">Band 7–9 model answers for every essay type.</p>
        </Link>
        <Link to="/ielts/band-8-ielts-sample-answers" className="block p-4 bg-rose-50 dark:bg-rose-900/20 rounded-lg border border-rose-200 dark:border-rose-800 hover:border-rose-400 dark:hover:border-rose-600 transition-colors">
          <h4 className="font-semibold text-rose-900 dark:text-rose-200 mb-1">Band 8+ IELTS Sample Answers</h4>
          <p className="text-sm text-rose-700 dark:text-rose-400">Writing Task 1 & Task 2 with expert explanation.</p>
        </Link>
      </div>

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>
    </div>
  );
};

export default ConditionalsInIELTSPage;
