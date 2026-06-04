import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading, BulletList, CodeBlock } from '../components/ArticleComponents';
import GoogleAd from '../components/GoogleAd';
import SchemaMarkup from '../components/SchemaMarkup';

const Band8IELTSSampleAnswersPage: React.FC = () => {
  usePageMetadata({
    title: 'Band 8+ IELTS Sample Answers: Writing Task 1 & Task 2 (With Expert Explanation)',
    description: 'Explore real Band 8+ IELTS sample answers for Writing Task 1 and Task 2 with detailed explanations, vocabulary, and structure analysis to help you achieve a high score.'
  });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is it possible to get Band 8 in IELTS Writing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. With practice, strong vocabulary, and correct structure, Band 8 is achievable."
        }
      },
      {
        "@type": "Question",
        "name": "How can I improve my IELTS writing score?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Study sample answers, practice daily, and get feedback."
        }
      },
      {
        "@type": "Question",
        "name": "Are these real Band 8 answers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. These answers follow official IELTS Band 8 descriptors."
        }
      },
      {
        "@type": "Question",
        "name": "Can I memorize Band 8 answers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Memorization can lower your score. Instead, study the structure and vocabulary to write your own answers."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Band 8+ IELTS Sample Answers",
    "description": "Band 8+ IELTS sample answers with explanations and vocabulary.",
    "author": {
      "@type": "Organization",
      "name": "Typogrammar"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Typogrammar"
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
          to="/ielts/ielts-writing-task-2-essay-types/"
          className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
        >
          ← Back to IELTS Writing Task 2 Essay Types
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100">
        Band 8+ IELTS Sample Answers: The Complete Guide
      </h1>

      {/* Quick Summary */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
        <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-200">📌 Quick Summary</h3>
        <p className="text-blue-800 dark:text-blue-300">
          If you want to achieve <strong>Band 8 or higher in IELTS Writing</strong>, studying high-quality sample answers is one of the most effective strategies. This page provides realistic Band 8+ IELTS sample answers, detailed explanations, vocabulary analysis, and expert tips.
        </p>
      </div>

      <ArticleParagraph>
        This page provides <strong>realistic Band 8+ IELTS sample answers</strong>, detailed explanations, vocabulary analysis, and expert tips to help you understand:
      </ArticleParagraph>
      <BulletList items={[
        <>What examiners expect</>,
        <>How Band 8 answers are structured</>,
        <>What vocabulary and grammar to use</>,
        <>How to improve your writing score fast</>
      ]} />

      <ArticleParagraph>
        This resource is designed for students preparing for:
      </ArticleParagraph>
      <BulletList items={[
        <>IELTS Academic</>,
        <>IELTS General Training</>,
        <>Self-study candidates</>,
        <>Students targeting Band 7, Band 8, or Band 9</>
      ]} />

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>

      {/* What Makes a Band 8 Answer */}
      <ArticleHeading>What Makes a Band 8 IELTS Answer?</ArticleHeading>

      <ArticleParagraph>
        According to official IELTS band descriptors, a Band 8 answer demonstrates excellence across four criteria:
      </ArticleParagraph>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-5 border border-green-200 dark:border-green-700">
          <h4 className="font-semibold text-green-900 dark:text-green-200 mb-2">1. Task Response</h4>
          <BulletList items={[
            <>Fully answers the question</>,
            <>Presents a clear position</>,
            <>Supports ideas with relevant examples</>
          ]} />
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-5 border border-blue-200 dark:border-blue-700">
          <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">2. Coherence and Cohesion</h4>
          <BulletList items={[
            <>Logical organization</>,
            <>Clear paragraphing</>,
            <>Effective linking words</>
          ]} />
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-5 border border-purple-200 dark:border-purple-700">
          <h4 className="font-semibold text-purple-900 dark:text-purple-200 mb-2">3. Lexical Resource</h4>
          <BulletList items={[
            <>Wide range of vocabulary</>,
            <>Accurate word choice</>,
            <>Natural collocations</>
          ]} />
        </div>
        <div className="bg-teal-50 dark:bg-teal-900/20 rounded-xl p-5 border border-teal-200 dark:border-teal-700">
          <h4 className="font-semibold text-teal-900 dark:text-teal-200 mb-2">4. Grammatical Range and Accuracy</h4>
          <BulletList items={[
            <>Complex sentence structures</>,
            <>Few grammar mistakes</>,
            <>High accuracy</>
          ]} />
        </div>
      </div>

      {/* Task 2 Sample Answer */}
      <ArticleHeading>Band 8+ IELTS Writing Task 2 Sample Answer</ArticleHeading>

      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 my-6 border border-slate-200 dark:border-slate-700">
        <h4 className="font-semibold text-lg text-slate-900 dark:text-slate-100 mb-3">📝 Question</h4>
        <p className="text-slate-700 dark:text-slate-300 italic">
          Some people believe that technology has made our lives easier, while others argue that it has made life more complicated. Discuss both views and give your opinion.
        </p>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 my-6 border border-green-200 dark:border-green-700">
        <h4 className="font-semibold text-lg text-green-900 dark:text-green-200 mb-4">✅ Band 8+ Sample Answer</h4>

        <div className="text-slate-800 dark:text-slate-200 space-y-4">
          <p>
            In recent decades, technology has transformed almost every aspect of human life. While some people argue that it has simplified daily activities, others believe it has introduced new complications. This essay will discuss both perspectives before presenting my own view.
          </p>
          <p>
            On the one hand, technology has made many tasks significantly easier. For example, smartphones allow people to communicate instantly regardless of distance, which was impossible in the past. In addition, modern appliances such as washing machines and robotic vacuum cleaners have reduced the amount of time required for household chores. As a result, individuals now have more free time to focus on work, education, or leisure.
          </p>
          <p>
            On the other hand, technology has also created new problems. One major issue is dependency. Many people rely heavily on technology, and when it fails, they struggle to complete basic tasks. Furthermore, excessive use of social media has been linked to mental health problems such as anxiety and depression. This shows that technology can negatively affect people's well-being.
          </p>
          <p>
            In my opinion, although technology has introduced certain challenges, its advantages outweigh the disadvantages. It has improved efficiency, communication, and access to information, making modern life far more convenient than before.
          </p>
          <p>
            In conclusion, technology has both simplified and complicated human life. However, I believe its overall impact has been positive.
          </p>
        </div>
      </div>

      {/* Why This Answer is Band 8+ */}
      <ArticleHeading>Why This Answer is Band 8+</ArticleHeading>

      <div className="space-y-4 my-6">
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">✅ Strong Task Response</h4>
          <BulletList items={[
            <>Fully answers all parts of the question</>,
            <>Clear opinion presented</>,
            <>Relevant examples provided</>
          ]} />
        </div>

        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">📚 Advanced Vocabulary Examples</h4>
          <div className="flex flex-wrap gap-2 mt-2">
            {['transformed almost every aspect', 'significantly easier', 'rely heavily on', 'excessive use', 'overall impact'].map((phrase, i) => (
              <span key={i} className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                {phrase}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">🔧 Complex Grammar Examples</h4>
          <BulletList items={[
            <><em>While some people argue..., others believe...</em></>,
            <><em>Although technology has introduced..., its advantages outweigh...</em></>
          ]} />
        </div>
      </div>

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>

      {/* Task 1 Sample Answer */}
      <ArticleHeading>Band 8+ IELTS Writing Task 1 Sample Answer (Academic)</ArticleHeading>

      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 my-6 border border-slate-200 dark:border-slate-700">
        <h4 className="font-semibold text-lg text-slate-900 dark:text-slate-100 mb-3">📝 Question</h4>
        <p className="text-slate-700 dark:text-slate-300 italic">
          The chart shows the percentage of households with internet access from 2000 to 2020.
        </p>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 my-6 border border-green-200 dark:border-green-700">
        <h4 className="font-semibold text-lg text-green-900 dark:text-green-200 mb-4">✅ Band 8+ Sample Answer</h4>

        <div className="text-slate-800 dark:text-slate-200 space-y-4">
          <p>
            The chart illustrates the proportion of households that had access to the internet between 2000 and 2020.
          </p>
          <p>
            Overall, there was a significant increase in internet access over the period. By 2020, the majority of households were connected.
          </p>
          <p>
            In 2000, only around 30% of households had internet access. This figure rose steadily to approximately 60% in 2010. The growth continued, reaching nearly 90% by 2020.
          </p>
          <p>
            This trend shows that internet access became increasingly common over time.
          </p>
        </div>
      </div>

      {/* Useful Vocabulary */}
      <ArticleHeading>Useful Band 8+ Vocabulary for IELTS Writing</ArticleHeading>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-5 border border-blue-200 dark:border-blue-700">
          <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-3">For Opinions</h4>
          <BulletList items={[
            <>In my opinion</>,
            <>I strongly believe</>,
            <>It is clear that</>,
            <>From my perspective</>
          ]} />
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-5 border border-green-200 dark:border-green-700">
          <h4 className="font-semibold text-green-900 dark:text-green-200 mb-3">For Advantages</h4>
          <BulletList items={[
            <>One major benefit is</>,
            <>This leads to</>,
            <>As a result</>
          ]} />
        </div>
        <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-5 border border-red-200 dark:border-red-700">
          <h4 className="font-semibold text-red-900 dark:text-red-200 mb-3">For Disadvantages</h4>
          <BulletList items={[
            <>One drawback is</>,
            <>This can result in</>,
            <>A major concern is</>
          ]} />
        </div>
      </div>

      {/* How to Use Sample Answers */}
      <ArticleHeading>How to Use Band 8 Sample Answers Effectively</ArticleHeading>

      <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 my-6 rounded-r-lg">
        <p className="font-semibold text-red-900 dark:text-red-200">
          ⚠️ Do NOT memorize answers. Memorization can lower your score.
        </p>
      </div>

      <ArticleParagraph>Instead, follow these steps:</ArticleParagraph>

      <div className="space-y-4 my-6">
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">1. Study the Structure</h4>
          <ArticleParagraph>
            Understand how the Introduction, Body paragraphs, and Conclusion are organized in a Band 8 essay.
          </ArticleParagraph>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">2. Learn Vocabulary</h4>
          <ArticleParagraph>
            Focus on phrases and collocations, not individual words.
          </ArticleParagraph>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">3. Practice Writing</h4>
          <ArticleParagraph>
            Write your own answers and compare them with the samples.
          </ArticleParagraph>
        </div>
      </div>

      {/* Writing Template */}
      <ArticleHeading>Band 8 Writing Template (Recommended Structure)</ArticleHeading>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse border border-slate-300 dark:border-slate-600">
          <thead>
            <tr className="bg-blue-50 dark:bg-blue-900/30">
              <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold text-slate-900 dark:text-slate-100">Section</th>
              <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold text-slate-900 dark:text-slate-100">Content</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300 font-medium">Introduction</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Paraphrase question + thesis</td>
            </tr>
            <tr className="bg-slate-50 dark:bg-slate-800/30">
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300 font-medium">Body Paragraph 1</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">First idea + example</td>
            </tr>
            <tr>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300 font-medium">Body Paragraph 2</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Second idea + example</td>
            </tr>
            <tr className="bg-slate-50 dark:bg-slate-800/30">
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300 font-medium">Conclusion</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Summary + opinion</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>

      {/* More Sample Answers */}
      <ArticleHeading>Download More Band 8+ Sample Answers</ArticleHeading>

      <ArticleParagraph>
        We provide free Band 8+ sample answers covering:
      </ArticleParagraph>
      <BulletList items={[
        <>Opinion essays</>,
        <>Discussion essays</>,
        <>Problem solution essays</>,
        <>Advantage disadvantage essays</>
      ]} />

      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 my-6 border border-blue-200 dark:border-blue-700">
        <p className="text-blue-900 dark:text-blue-200 font-medium">
          ➡ Explore more here:{' '}
          <Link to="/ielts/ielts-writing-task-2-essay-types/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline">
            IELTS Writing Task 2 Essay Types
          </Link>
        </p>
      </div>

      {/* Expert Tips */}
      <ArticleHeading>Expert Tips to Reach Band 8</ArticleHeading>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Tip 1: Focus on Task Achievement</h4>
          <p className="text-slate-700 dark:text-slate-300">Answer the question completely. Address all parts of the prompt.</p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Tip 2: Use Advanced Grammar</h4>
          <p className="text-slate-700 dark:text-slate-300">Use complex sentences, relative clauses, and conditionals naturally.</p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Tip 3: Improve Vocabulary</h4>
          <p className="text-slate-700 dark:text-slate-300">Avoid repetition. Use synonyms and collocations to demonstrate range.</p>
        </div>
      </div>

      {/* FAQ */}
      <ArticleHeading>Frequently Asked Questions</ArticleHeading>

      <div className="space-y-4 my-6">
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
          <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Is it possible to get Band 8 in IELTS Writing?</p>
          <p className="text-slate-700 dark:text-slate-300">Yes. With practice, strong vocabulary, and correct structure, Band 8 is achievable.</p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
          <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">How can I improve my IELTS writing score?</p>
          <p className="text-slate-700 dark:text-slate-300">Study sample answers, practice daily, and get feedback.</p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
          <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Are these real Band 8 answers?</p>
          <p className="text-slate-700 dark:text-slate-300">Yes. These answers follow official IELTS Band 8 descriptors.</p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
          <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Can I memorize Band 8 answers?</p>
          <p className="text-slate-700 dark:text-slate-300">No. Memorization can lower your score. Instead, study the structure and vocabulary to write your own answers.</p>
        </div>
      </div>

      {/* Conclusion */}
      <ArticleHeading>Conclusion</ArticleHeading>

      <ArticleParagraph>
        Studying Band 8+ sample answers is one of the fastest ways to improve your IELTS Writing score. Focus on:
      </ArticleParagraph>
      <BulletList items={[
        <>Structure</>,
        <>Vocabulary</>,
        <>Grammar</>,
        <>Practice</>
      ]} />
      <ArticleParagraph>
        With consistent effort, you can achieve Band 8 or higher.
      </ArticleParagraph>

      {/* Related Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <Link to="/ielts/ielts-writing-task-2-essay-types/" className="block p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 transition-colors">
          <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-1">IELTS Writing Task 2 Essay Types</h4>
          <p className="text-sm text-blue-700 dark:text-blue-400">Explore all essay types with strategies and sample answers.</p>
        </Link>
        <Link to="/ielts/opinion-essay-ielts-band-7-9/" className="block p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800 hover:border-green-400 dark:hover:border-green-600 transition-colors">
          <h4 className="font-semibold text-green-900 dark:text-green-200 mb-1">Opinion Essays Guide</h4>
          <p className="text-sm text-green-700 dark:text-green-400">Master the IELTS opinion essay with Band 7-9 model answers.</p>
        </Link>
      </div>

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>
    </div>
  );
};

export default Band8IELTSSampleAnswersPage;
