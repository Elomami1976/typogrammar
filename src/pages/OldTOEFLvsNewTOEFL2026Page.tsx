import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading, BulletList } from '../components/ArticleComponents';

const OldTOEFLvsNewTOEFL2026Page: React.FC = () => {
  usePageMetadata({
    title: 'Old TOEFL vs New TOEFL 2026: Every Change Explained | TypoGrammar',
    description: 'Confused about the 2026 TOEFL changes? Compare the old TOEFL iBT vs new TOEFL 2026 format section by section: scoring, timing, tasks, and how to prepare.',
  });

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can I still take the old TOEFL iBT format?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. ETS replaced the old format globally on January 21, 2026. All TOEFL iBT test-takers worldwide now take the new 2026 format. There is no option to choose the old version.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will universities accept the new 1.0-6.0 TOEFL scores?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. ETS is working with institutions worldwide to update their score requirements. During the 2026-2028 transition period, score reports will show both the new band score and the old 0-120 equivalent, so institutions can evaluate applicants fairly.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do my old TOEFL scores (from before January 2026) still count?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TOEFL scores are valid for 2 years from the test date. If you took the old test and your scores are within the 2-year validity window, they are still officially valid and reportable. Most universities will accept them normally.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the new TOEFL 2026 harder for non-native speakers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not inherently. The adaptive format means the test calibrates to your level, making it neither unfairly easy nor unfairly difficult. The inclusion of real-world tasks such as emails and everyday conversations may actually feel more natural to learners who use English in practical settings.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does the new TOEFL 2026 compare to IELTS?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Both tests now use a band scale aligned to CEFR, which makes comparisons more straightforward. A TOEFL 5.0 and an IELTS 7.0 both correspond to approximately C1 (Advanced). However, the tests still assess different skills through different task formats, check your target institution\'s requirements for which test they prefer.',
        },
      },
      {
        '@type': 'Question',
        name: 'What score do I need for university admission on the new TOEFL?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'This depends entirely on the institution and program. Most competitive universities that previously required a 90-100 on the old 120-point scale will likely require approximately 4.0-4.5 on the new band scale (B2-C1 level). Always check directly with your target school\'s admissions office for updated requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the new TOEFL 2026 scoring scale?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The new TOEFL iBT (2026) uses a 1.0-6.0 band scale reported in 0.5 increments, replacing the old 0-120 point scale. Each of the four sections (Reading, Listening, Speaking, Writing) receives a score from 1.0 to 6.0, and the overall score is the average of these four section scores.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long is the new TOEFL 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The new TOEFL iBT (2026) takes approximately 1.5 hours (90 minutes), compared to approximately 2 hours for the old format. The time breakdown is: Reading ~30 min, Listening ~29 min, Writing ~23 min, Speaking ~8 min.',
        },
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Old TOEFL vs New TOEFL 2026: Every Change Explained',
    description:
      'Confused about the 2026 TOEFL changes? Compare the old TOEFL iBT vs new TOEFL 2026 format section by section: scoring, timing, tasks, and how to prepare.',
    datePublished: '2026-04-04',
    dateModified: '2026-04-04',
    author: { '@type': 'Organization', name: 'TypoGrammar' },
    publisher: {
      '@type': 'Organization',
      name: 'TypoGrammar',
      url: 'https://typogrammar.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://typogrammar.com/toefl/strategy-success/old-toefl-vs-new-toefl',
    },
  };

  useEffect(() => {
    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.text = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    const articleScript = document.createElement('script');
    articleScript.type = 'application/ld+json';
    articleScript.text = JSON.stringify(articleSchema);
    document.head.appendChild(articleScript);

    return () => {
      document.head.removeChild(faqScript);
      document.head.removeChild(articleScript);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">

      {/* Last updated notice */}
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
        Last updated: <strong>April 2026</strong>, All information reflects the TOEFL iBT format in effect as of January 21, 2026.
      </p>

      <h1 className="text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100">
        Old TOEFL vs New TOEFL 2026: Every Change Explained
      </h1>

      {/* Key Takeaways, Featured Snippet Optimized */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-5 my-6 rounded-r-lg">
        <p className="font-bold text-slate-800 dark:text-slate-100 mb-3 text-lg">Key Takeaways</p>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-[15px]">
          <li>✅ The new TOEFL iBT launched <strong>January 21, 2026</strong>, the biggest redesign in the test's history.</li>
          <li>✅ Total test time dropped from <strong>~2 hours to ~1.5 hours</strong> (90 minutes).</li>
          <li>✅ Reading and Listening are now <strong>adaptive</strong>, the test adjusts to your level in real time.</li>
          <li>✅ The old 0-120 point scale is replaced by a <strong>1.0-6.0 band scale</strong> aligned to CEFR.</li>
          <li>✅ Scores are now delivered in <strong>72 hours</strong> instead of 4-8 days.</li>
          <li>✅ A <strong>dual-reporting system</strong> runs through 2026-2028, so institutions receive both old and new scores.</li>
        </ul>
      </div>

      <ArticleParagraph>
        If you searched <strong>"old TOEFL vs new TOEFL 2026,"</strong> you came to the right place. On January 21, 2026,
        ETS launched the most significant redesign of the TOEFL iBT in its entire history. Every single section changed
       , the tasks, the timing, the scoring, and even the underlying testing technology. Whether you are just starting
        your preparation or you have been studying for months under the old format, this guide breaks down every change
        side by side so you know exactly what to expect.
      </ArticleParagraph>

      {/* ─── Quick Overview ─── */}
      <ArticleHeading>Quick Overview: Old TOEFL vs New TOEFL 2026</ArticleHeading>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse rounded-lg overflow-hidden shadow-sm">
          <thead>
            <tr className="bg-slate-700 text-white">
              <th className="px-4 py-3 text-left font-semibold">Feature</th>
              <th className="px-4 py-3 text-left font-semibold">Old TOEFL iBT</th>
              <th className="px-4 py-3 text-left font-semibold">New TOEFL iBT (2026)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            {[
              ['Total Time', '~2 hours', '~1.5 hours (90 min)'],
              ['Difficulty', 'Fixed', 'Adaptive (Reading & Listening)'],
              ['Scoring Scale', '0-120 points', '1.0-6.0 band scale'],
              ['Score Delivery', '4-8 days', '72 hours'],
              ['CEFR Alignment', 'Indirect', 'Direct (built-in)'],
              ['Sections', 'Reading, Listening, Speaking, Writing', 'Reading, Listening, Speaking, Writing'],
              ['MyBest Scores', 'Available', 'Still available'],
              ['Transition Period', '-', 'Dual reporting 2026-2028'],
            ].map(([feature, oldVal, newVal], i) => (
              <tr
                key={feature}
                className={i % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-slate-50 dark:bg-slate-700/50'}
              >
                <td className="px-4 py-3 font-medium text-slate-800 dark:text-slate-200">{feature}</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{oldVal}</td>
                <td className="px-4 py-3 text-emerald-700 dark:text-emerald-400 font-medium">{newVal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ArticleParagraph>
        The structure is familiar, four sections in the same order, but the experience inside each section is
        fundamentally different.
      </ArticleParagraph>

      {/* ─── READING ─── */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-3">
        Reading Section: Old vs New TOEFL 2026
      </h2>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-800 dark:text-slate-200">Old TOEFL Reading</h3>
      <ArticleParagraph>
        The old Reading section presented <strong>2 long academic passages</strong>, each approximately 700 words long,
        followed by 10 questions per passage. You had 36 minutes to complete the section, and the difficulty was fixed
        regardless of your performance. Question types included multiple choice, vocabulary in context, insert a sentence,
        and prose summary.
      </ArticleParagraph>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-800 dark:text-slate-200">New TOEFL Reading (2026)</h3>
      <ArticleParagraph>
        The new Reading section runs for approximately <strong>30 minutes</strong> and is <strong>adaptive</strong>,
        meaning the difficulty of subsequent tasks adjusts based on how well you perform on earlier ones. Instead of two
        long passages, you now work through three distinct task types with a total of approximately 50 items.
      </ArticleParagraph>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse rounded-lg overflow-hidden shadow-sm">
          <thead>
            <tr className="bg-slate-700 text-white">
              <th className="px-4 py-3 text-left font-semibold">Task</th>
              <th className="px-4 py-3 text-left font-semibold">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            {[
              ['Task 1: Complete the Words', 'A 70-100 word paragraph with 10 fill-in-the-blank letters. Tests spelling, grammar, and word structure knowledge.'],
              ['Task 2: Read in Daily Life', 'Short real-world texts (15-150 words) such as emails, notices, menus, and flyers, with 2-3 questions per set.'],
              ['Task 3: Read an Academic Passage', '~200-word academic texts with 5 questions each. Closer to the old format but much shorter.'],
            ].map(([task, desc], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-slate-50 dark:bg-slate-700/50'}>
                <td className="px-4 py-3 font-semibold text-slate-800 dark:text-slate-200 whitespace-nowrap">{task}</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-5 rounded-r-lg">
        <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">What's new: Two entirely new question types</p>
        <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1 text-[15px]">
          <li><strong>Important Idea (Select the Sentence):</strong> Identify the sentence that expresses the most important idea in a paragraph.</li>
          <li><strong>Paragraph Relationship:</strong> Determine how two paragraphs relate to each other (e.g., cause/effect, contrast, example).</li>
        </ul>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-4 my-5 rounded-r-lg">
        <p className="font-semibold text-slate-800 dark:text-slate-100 mb-1">What's gone:</p>
        <p className="text-slate-700 dark:text-slate-300 text-[15px]">
          The old <strong>"Insert a Sentence"</strong> and <strong>"Prose Summary"</strong> question types have been removed entirely.
        </p>
      </div>

      <ArticleHeading>Reading Section Comparison Table</ArticleHeading>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse rounded-lg overflow-hidden shadow-sm">
          <thead>
            <tr className="bg-slate-700 text-white">
              <th className="px-4 py-3 text-left font-semibold">Feature</th>
              <th className="px-4 py-3 text-left font-semibold">Old Reading</th>
              <th className="px-4 py-3 text-left font-semibold">New Reading (2026)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            {[
              ['Time', '36 minutes', '~30 minutes'],
              ['Passages', '2 × ~700 words', 'Multiple short texts (15-200 words)'],
              ['Questions', '20 total', '~50 items'],
              ['Difficulty', 'Fixed', 'Adaptive'],
              ['Task Types', '4-5 question types', '3 task types, 2 new question types'],
              ['Removed Types', '-', 'Insert a Sentence, Prose Summary'],
              ['New Types', '-', 'Important Idea, Paragraph Relationship'],
            ].map(([feature, oldVal, newVal], i) => (
              <tr key={feature} className={i % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-slate-50 dark:bg-slate-700/50'}>
                <td className="px-4 py-3 font-medium text-slate-800 dark:text-slate-200">{feature}</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{oldVal}</td>
                <td className="px-4 py-3 text-emerald-700 dark:text-emerald-400 font-medium">{newVal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ArticleParagraph>
        Preparing for the reading section? See our guides on{' '}
        <Link to="/toefl/toefl-reading/toefl-reading-question-types/" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
          TOEFL Reading Question Types
        </Link>{' '}
        and{' '}
        <Link to="/toefl/toefl-reading/toefl-reading-strategies/" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
          TOEFL Reading Strategies
        </Link>.
      </ArticleParagraph>

      {/* ─── LISTENING ─── */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-3">
        Listening Section: Old vs New TOEFL 2026
      </h2>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-800 dark:text-slate-200">Old TOEFL Listening</h3>
      <ArticleParagraph>
        The old Listening section included <strong>3 academic lectures</strong> (6 questions each) and <strong>2 conversations</strong>{' '}
        (5 questions each), for a total of 28 questions in 36 minutes. All audio was played once, and difficulty was fixed.
      </ArticleParagraph>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-800 dark:text-slate-200">New TOEFL Listening (2026)</h3>
      <ArticleParagraph>
        The new Listening section lasts approximately <strong>29 minutes</strong> and is adaptive. It contains approximately
        47 total items across four task types:
      </ArticleParagraph>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse rounded-lg overflow-hidden shadow-sm">
          <thead>
            <tr className="bg-slate-700 text-white">
              <th className="px-4 py-3 text-left font-semibold">Task</th>
              <th className="px-4 py-3 text-left font-semibold">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            {[
              ['Listen and Choose a Response', 'Hear a short spoken prompt and select the most appropriate reply.'],
              ['Listen to a Conversation', 'A two-person dialogue, similar to the old format but shorter, followed by comprehension questions.'],
              ['Listen to an Announcement', 'A public or campus announcement; tests real-world listening comprehension.'],
              ['Listen to an Academic Talk', 'A short academic lecture or presentation with follow-up questions.'],
            ].map(([task, desc], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-slate-50 dark:bg-slate-700/50'}>
                <td className="px-4 py-3 font-semibold text-slate-800 dark:text-slate-200 whitespace-nowrap">{task}</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ArticleHeading>Listening Section Comparison Table</ArticleHeading>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse rounded-lg overflow-hidden shadow-sm">
          <thead>
            <tr className="bg-slate-700 text-white">
              <th className="px-4 py-3 text-left font-semibold">Feature</th>
              <th className="px-4 py-3 text-left font-semibold">Old Listening</th>
              <th className="px-4 py-3 text-left font-semibold">New Listening (2026)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            {[
              ['Time', '36 minutes', '~29 minutes'],
              ['Audio Content', '3 lectures + 2 conversations', '4 task types (conversations, announcements, talks)'],
              ['Questions', '28 total', '~47 items'],
              ['Difficulty', 'Fixed', 'Adaptive'],
              ['Real-World Texts', 'None', 'Yes (announcements, daily-life conversations)'],
            ].map(([feature, oldVal, newVal], i) => (
              <tr key={feature} className={i % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-slate-50 dark:bg-slate-700/50'}>
                <td className="px-4 py-3 font-medium text-slate-800 dark:text-slate-200">{feature}</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{oldVal}</td>
                <td className="px-4 py-3 text-emerald-700 dark:text-emerald-400 font-medium">{newVal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ArticleParagraph>
        The most notable shift is the addition of real-world listening contexts, announcements and short conversational
        exchanges, alongside the familiar academic content. This reflects a broader move in the new test toward measuring
        English as it is actually used, not just in academic settings.
      </ArticleParagraph>

      {/* ─── WRITING ─── */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-3">
        Writing Section: Old vs New TOEFL 2026
      </h2>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-800 dark:text-slate-200">Old TOEFL Writing</h3>
      <ArticleParagraph>
        The old Writing section had two tasks running 30 minutes total:
      </ArticleParagraph>
      <BulletList items={[
        <><strong>Integrated Task:</strong> Read a passage, listen to a lecture, then write a response (20 minutes).</>,
        <><strong>Academic Discussion Task:</strong> Respond to an online professor discussion board prompt (10 minutes).</>,
      ]} />

      <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-800 dark:text-slate-200">New TOEFL Writing (2026)</h3>
      <ArticleParagraph>
        The new Writing section lasts approximately <strong>23 minutes</strong> and contains approximately 12 items across
        three task types:
      </ArticleParagraph>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse rounded-lg overflow-hidden shadow-sm">
          <thead>
            <tr className="bg-slate-700 text-white">
              <th className="px-4 py-3 text-left font-semibold">Task</th>
              <th className="px-4 py-3 text-left font-semibold">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            {[
              ['Build a Sentence', 'Arrange given words or phrases into a grammatically correct sentence.'],
              ['Write an Email', 'Compose a short, purpose-driven email (e.g., to a professor, classmate, or business contact).'],
              ['Write for an Academic Discussion', 'Similar to the old Academic Discussion Task, respond to a professor\'s discussion prompt.'],
            ].map(([task, desc], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-slate-50 dark:bg-slate-700/50'}>
                <td className="px-4 py-3 font-semibold text-slate-800 dark:text-slate-200 whitespace-nowrap">{task}</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ArticleHeading>Writing Section Comparison Table</ArticleHeading>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse rounded-lg overflow-hidden shadow-sm">
          <thead>
            <tr className="bg-slate-700 text-white">
              <th className="px-4 py-3 text-left font-semibold">Feature</th>
              <th className="px-4 py-3 text-left font-semibold">Old Writing</th>
              <th className="px-4 py-3 text-left font-semibold">New Writing (2026)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            {[
              ['Time', '30 minutes', '~23 minutes'],
              ['Tasks', '2 tasks', '3 task types'],
              ['Items', '2', '~12'],
              ['Integrated Reading+Listening', 'Yes (Integrated Task)', 'No'],
              ['Real-World Writing', 'No', 'Yes (Write an Email)'],
              ['Academic Discussion', 'Yes', 'Yes (retained)'],
            ].map(([feature, oldVal, newVal], i) => (
              <tr key={feature} className={i % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-slate-50 dark:bg-slate-700/50'}>
                <td className="px-4 py-3 font-medium text-slate-800 dark:text-slate-200">{feature}</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{oldVal}</td>
                <td className="px-4 py-3 text-emerald-700 dark:text-emerald-400 font-medium">{newVal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ArticleParagraph>
        The removal of the Integrated Task is significant. Previously, you had to read a passage and listen to a lecture
        before writing, a multi-skill exercise. The new format separates skills more cleanly and introduces sentence-level
        grammar testing through <strong>"Build a Sentence."</strong>
      </ArticleParagraph>

      <ArticleParagraph>
        For a deep dive into the writing tasks, see our guides on{' '}
        <Link to="/toefl/toefl-writing/toefl-writing-task-1-explained/" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
          TOEFL Writing Task 1
        </Link>{' '}
        and{' '}
        <Link to="/toefl/toefl-writing/toefl-writing-task-2-explained/" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
          TOEFL Writing Task 2
        </Link>.
      </ArticleParagraph>

      {/* ─── SPEAKING ─── */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-3">
        Speaking Section: Old vs New TOEFL 2026
      </h2>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-800 dark:text-slate-200">Old TOEFL Speaking</h3>
      <ArticleParagraph>
        The old Speaking section had <strong>4 tasks</strong> in approximately 17 minutes:
      </ArticleParagraph>
      <BulletList items={[
        <><strong>Task 1: Independent</strong>, speak about a personal preference or opinion.</>,
        <><strong>Tasks 2-4: Integrated</strong>, read and/or listen to content, then speak in response.</>,
      ]} />

      <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-800 dark:text-slate-200">New TOEFL Speaking (2026)</h3>
      <ArticleParagraph>
        The new Speaking section runs approximately <strong>8 minutes</strong> and contains approximately 11 items across
        two task types:
      </ArticleParagraph>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse rounded-lg overflow-hidden shadow-sm">
          <thead>
            <tr className="bg-slate-700 text-white">
              <th className="px-4 py-3 text-left font-semibold">Task</th>
              <th className="px-4 py-3 text-left font-semibold">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            {[
              ['Listen and Repeat', 'Hear a spoken sentence or phrase and repeat it accurately (7 questions). Tests pronunciation, rhythm, and intonation.'],
              ['Take an Interview', 'Answer 3-4 interview-style questions on a given topic. Similar to the old independent task but in a structured Q&A format.'],
            ].map(([task, desc], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-slate-50 dark:bg-slate-700/50'}>
                <td className="px-4 py-3 font-semibold text-slate-800 dark:text-slate-200 whitespace-nowrap">{task}</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ArticleHeading>Speaking Section Comparison Table</ArticleHeading>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse rounded-lg overflow-hidden shadow-sm">
          <thead>
            <tr className="bg-slate-700 text-white">
              <th className="px-4 py-3 text-left font-semibold">Feature</th>
              <th className="px-4 py-3 text-left font-semibold">Old Speaking</th>
              <th className="px-4 py-3 text-left font-semibold">New Speaking (2026)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            {[
              ['Time', '~17 minutes', '~8 minutes'],
              ['Tasks', '4', '2 task types'],
              ['Items', '4', '~11'],
              ['Integrated Tasks', '3 (read/listen + speak)', 'None'],
              ['Pronunciation Focus', 'Indirect', 'Direct (Listen and Repeat)'],
              ['Preparation Time', 'Yes (15-30 sec per task)', 'Shorter / none for repeat tasks'],
            ].map(([feature, oldVal, newVal], i) => (
              <tr key={feature} className={i % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-slate-50 dark:bg-slate-700/50'}>
                <td className="px-4 py-3 font-medium text-slate-800 dark:text-slate-200">{feature}</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{oldVal}</td>
                <td className="px-4 py-3 text-emerald-700 dark:text-emerald-400 font-medium">{newVal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ArticleParagraph>
        This is the section that changed most dramatically in feel. The old Speaking section required you to synthesize
        reading, listening, and speaking skills simultaneously. The new version isolates speaking more cleanly, testing
        your ability to repeat accurately and respond naturally to questions.
      </ArticleParagraph>

      {/* ─── SCORING ─── */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-3">
        Scoring: Old vs New TOEFL 2026
      </h2>

      <ArticleParagraph>
        This is perhaps the most consequential change for test-takers applying to universities or immigration programs.
      </ArticleParagraph>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-800 dark:text-slate-200">Old TOEFL Scoring</h3>
      <BulletList items={[
        <><strong>Total score:</strong> 0-120 points</>,
        <><strong>Section scores:</strong> 0-30 per section (Reading, Listening, Speaking, Writing)</>,
        <><strong>Score delivery:</strong> 4-8 business days</>,
      ]} />

      <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-800 dark:text-slate-200">New TOEFL Scoring (2026)</h3>
      <BulletList items={[
        <><strong>Total score:</strong> 1.0-6.0 band (reported in 0.5 increments)</>,
        <><strong>Section scores:</strong> 1.0-6.0 per section</>,
        <><strong>Overall score:</strong> Average of the four section scores</>,
        <><strong>Score delivery:</strong> Within 72 hours</>,
      ]} />

      <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-800 dark:text-slate-200">CEFR Alignment</h3>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse rounded-lg overflow-hidden shadow-sm">
          <thead>
            <tr className="bg-slate-700 text-white">
              <th className="px-4 py-3 text-left font-semibold">New TOEFL Band</th>
              <th className="px-4 py-3 text-left font-semibold">CEFR Level</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            {[
              ['6.0', 'C2 (Mastery)'],
              ['5.0-5.5', 'C1 (Advanced)'],
              ['4.0-4.5', 'B2 (Upper-Intermediate)'],
              ['3.0-3.5', 'B1 (Intermediate)'],
            ].map(([band, cefr], i) => (
              <tr key={band} className={i % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-slate-50 dark:bg-slate-700/50'}>
                <td className="px-4 py-3 font-bold text-emerald-700 dark:text-emerald-400">{band}</td>
                <td className="px-4 py-3 text-slate-700 dark:text-slate-300">{cefr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-800 dark:text-slate-200">Dual Reporting During the Transition (2026-2028)</h3>
      <ArticleParagraph>
        ETS recognizes that universities, employers, and immigration authorities have built admissions cutoffs around the
        old 0-120 scale. To ease the transition, both the old and new score scales will be reported on official score
        reports through 2028. This means your score report will show both your new band score and its equivalent on the
        old scale, so institutions can compare candidates regardless of which test version they took.
      </ArticleParagraph>
      <ArticleParagraph>
        <strong>MyBest Scores</strong>, which aggregate your highest section scores across multiple test dates, remain
        available under the new system.
      </ArticleParagraph>

      {/* ─── EASIER OR HARDER ─── */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-3">
        Is the New TOEFL Easier or Harder?
      </h2>

      <ArticleParagraph>
        This is the first question most test-takers ask, and the honest answer is: <strong>neither easier nor harder,
        it is fairer and more efficient.</strong>
      </ArticleParagraph>

      <div className="space-y-4 my-6">
        {[
          {
            title: 'The adaptive format works in your favor.',
            body: 'In the old test, a very strong reader and a struggling reader faced identical passages. In the new test, the system adjusts. If you answer early questions well, you get harder items that can push your score higher. If you struggle early, the test scales back. This means your score reflects your actual ability more accurately.',
          },
          {
            title: 'The shorter time does not mean lower standards.',
            body: 'The new test measures the same underlying English proficiency, it just does so with more targeted tasks and less "filler" time. Academic English is still assessed through reading passages and academic talks; the new tasks simply include more practical, real-world language contexts alongside the academic ones.',
          },
          {
            title: 'The Speaking section is more manageable for anxious test-takers.',
            body: 'Many students found the 4-task old Speaking section stressful because of tight 45-second response windows and multi-step integrated tasks. The "Listen and Repeat" task removes that pressure for half of the speaking items, you simply need to repeat what you hear clearly and accurately.',
          },
          {
            title: 'The new scoring scale may help some applicants.',
            body: 'Many English learners are already familiar with CEFR levels from other contexts (language courses, European exams). A 5.0 on the TOEFL now maps directly to C1, a level most people intuitively understand.',
          },
        ].map(({ title, body }) => (
          <div key={title} className="bg-slate-50 dark:bg-slate-800 border-l-4 border-slate-400 dark:border-slate-600 p-4 rounded-r-lg">
            <p className="font-semibold text-slate-800 dark:text-slate-100 mb-1">{title}</p>
            <p className="text-slate-700 dark:text-slate-300 text-[15px]">{body}</p>
          </div>
        ))}
      </div>

      {/* ─── HOW TO PREPARE ─── */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-3">
        How to Prepare for the New TOEFL 2026
      </h2>

      {[
        {
          num: '1',
          title: 'Get Familiar with the New Task Types First',
          body: 'Before you open any practice materials, read the official ETS descriptions of all the new task types. The "Complete the Words," "Build a Sentence," and "Listen and Repeat" tasks do not appear anywhere in old TOEFL prep books, you need to know they exist before you can practice them.',
        },
        {
          num: '2',
          title: 'Practice Real-World English, Not Just Academic English',
          body: 'The new test includes emails, menus, notices, and everyday conversations. Supplement your academic reading with practical texts, email threads, news articles, office memos. This makes a direct difference on Task 2 (Read in Daily Life) and Write an Email.',
        },
        {
          num: '3',
          title: 'Train Your Listening at Different Speeds',
          body: 'The adaptive Listening section can serve you faster and more complex audio if you perform well early. Practice with a range of accents and speaking speeds, podcasts, university lectures, TED talks, and casual conversations all build different muscles.',
        },
        {
          num: '4',
          title: 'Focus on Pronunciation for the New Speaking Section',
          body: '"Listen and Repeat" is a direct test of phonological accuracy. If you have never focused on English pronunciation before, this is the moment to start. Practice minimal pairs, sentence stress, and connected speech. Even 10-15 minutes of daily pronunciation drills over 4-6 weeks produces measurable improvement.',
        },
        {
          num: '5',
          title: 'Do Not Neglect Grammar at the Sentence Level',
          body: '"Build a Sentence" in Writing and "Complete the Words" in Reading both test granular grammar and spelling, areas that the old test touched only indirectly. Review word forms (noun/verb/adjective/adverb), common prefixes and suffixes, and sentence structure patterns.',
        },
        {
          num: '6',
          title: 'Use Official ETS Materials',
          body: 'ETS publishes official practice tests and sample questions for the new format. These should be your primary resource. Third-party materials written before 2026 may not reflect the current test.',
        },
        {
          num: '7',
          title: 'Simulate Test Conditions',
          body: 'Even though the test is shorter (90 minutes), you should still practice without breaks, in a quiet room, using headphones. Adaptive tests respond to your pace and accuracy in real time, practicing under pressure prepares you to perform when it matters.',
        },
      ].map(({ num, title, body }) => (
        <div key={num} className="flex gap-4 my-5">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
            {num}
          </div>
          <div>
            <p className="font-semibold text-slate-800 dark:text-slate-100 mb-1">{title}</p>
            <p className="text-slate-700 dark:text-slate-300 text-[15px]">{body}</p>
          </div>
        </div>
      ))}

      {/* ─── FULL SIDE-BY-SIDE ─── */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-3">
        Full Side-by-Side Comparison: Old vs New TOEFL 2026
      </h2>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse rounded-lg overflow-hidden shadow-sm">
          <thead>
            <tr className="bg-slate-700 text-white">
              <th className="px-4 py-3 text-left font-semibold">Section</th>
              <th className="px-4 py-3 text-left font-semibold">Old Format</th>
              <th className="px-4 py-3 text-left font-semibold">New Format (2026)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            {[
              ['Reading', '2 passages (~700 words), 20 Qs, 36 min, fixed', '3 task types, ~50 items, ~30 min, adaptive'],
              ['Listening', '3 lectures + 2 conversations, 28 Qs, 36 min, fixed', '4 task types, ~47 items, ~29 min, adaptive'],
              ['Writing', '2 tasks (Integrated + Discussion), 30 min', '3 task types, ~12 items, ~23 min'],
              ['Speaking', '4 tasks (1 independent + 3 integrated), ~17 min', '2 task types, ~11 items, ~8 min'],
              ['Total Time', '~2 hours', '~1.5 hours'],
              ['Score Scale', '0-120 points', '1.0-6.0 band'],
              ['Score Report', '4-8 business days', '72 hours'],
              ['Adaptive', 'No', 'Yes (Reading + Listening)'],
            ].map(([section, oldVal, newVal], i) => (
              <tr key={section} className={i % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-slate-50 dark:bg-slate-700/50'}>
                <td className="px-4 py-3 font-semibold text-slate-800 dark:text-slate-200">{section}</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{oldVal}</td>
                <td className="px-4 py-3 text-emerald-700 dark:text-emerald-400 font-medium">{newVal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ─── FAQ ─── */}
      <h2 className="text-2xl font-bold mt-12 mb-6 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-3">
        FAQ: Old TOEFL vs New TOEFL 2026
      </h2>

      <div className="space-y-6">
        {[
          {
            q: 'Can I still take the old TOEFL iBT format?',
            a: 'No. ETS replaced the old format globally on January 21, 2026. All TOEFL iBT test-takers worldwide now take the new 2026 format. There is no option to choose the old version.',
          },
          {
            q: 'Will universities accept the new 1.0-6.0 scores?',
            a: 'Yes. ETS is working with institutions worldwide to update their score requirements. During the 2026-2028 transition period, score reports will show both the new band score and the old 0-120 equivalent, so institutions that have not yet updated their requirements can still evaluate applicants fairly.',
          },
          {
            q: 'Do my old TOEFL scores (from before January 2026) still count?',
            a: 'TOEFL scores are valid for 2 years from the test date. If you took the old test and your scores are within the 2-year validity window, they are still officially valid and reportable. Most universities will accept them normally.',
          },
          {
            q: 'Is the new TOEFL 2026 harder for non-native speakers?',
            a: 'Not inherently. The adaptive format means the test calibrates to your level, making it neither unfairly easy nor unfairly difficult. The inclusion of real-world tasks (emails, everyday conversations) may actually feel more natural to learners who use English in practical settings.',
          },
          {
            q: 'How does the new TOEFL compare to IELTS?',
            a: 'Both tests now use a band scale aligned to CEFR, which makes comparisons more straightforward. A TOEFL 5.0 and an IELTS 7.0 both correspond to approximately C1 (Advanced). However, the tests still assess different skills through different task formats, check your target institution\'s requirements for which test they prefer.',
          },
          {
            q: 'What score do I need for university admission?',
            a: 'This depends entirely on the institution and program. Most competitive universities that previously required a 90-100 on the old 120-point scale will likely require approximately 4.0-4.5 on the new band scale (B2-C1 level). Always check directly with your target school\'s admissions office for updated requirements.',
          },
          {
            q: 'What is the new TOEFL 2026 scoring scale?',
            a: 'The new TOEFL iBT uses a 1.0-6.0 band scale reported in 0.5 increments, replacing the old 0-120 point scale. Each section scores 1.0-6.0 and the overall score is the average of all four sections.',
          },
          {
            q: 'How long is the new TOEFL 2026?',
            a: 'The new TOEFL iBT takes approximately 1.5 hours (90 minutes): Reading ~30 min, Listening ~29 min, Writing ~23 min, Speaking ~8 min.',
          },
        ].map(({ q, a }) => (
          <div key={q} className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
            <div className="bg-slate-50 dark:bg-slate-800 px-5 py-4">
              <p className="font-semibold text-slate-800 dark:text-slate-100">{q}</p>
            </div>
            <div className="px-5 py-4 bg-white dark:bg-slate-900">
              <p className="text-slate-700 dark:text-slate-300 text-[15px]">{a}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ─── FINAL THOUGHTS ─── */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-3">
        Final Thoughts
      </h2>

      <ArticleParagraph>
        The new TOEFL iBT 2026 is not a minor update, it is a complete reimagining of how English proficiency is tested.
        The shorter duration, adaptive difficulty, real-world task types, and CEFR-aligned scoring all represent a genuine
        shift in ETS's philosophy: test English as it is actually used, at every level, as efficiently as possible.
      </ArticleParagraph>

      <ArticleParagraph>
        If you are preparing for the TOEFL in 2026, the single most important step is to <strong>study the new task types
        specifically</strong>. Do not rely on old prep materials that pre-date January 2026. Combine official ETS resources
        with focused practice on pronunciation, sentence-level grammar, and real-world English reading and listening, and
        you will be well-positioned to succeed under the new format.
      </ArticleParagraph>

      {/* Internal links block */}
      <div className="mt-10 p-5 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <p className="font-semibold text-slate-800 dark:text-slate-100 mb-3">Continue your TOEFL preparation:</p>
        <ul className="space-y-2 text-[15px]">
          <li>
            <Link to="/toefl/toefl-reading/toefl-reading-section-explained/" className="text-blue-600 dark:text-blue-400 hover:underline">
              → TOEFL Reading Section Explained (New 2026 Format)
            </Link>
          </li>
          <li>
            <Link to="/toefl/toefl-reading/toefl-reading-strategies/" className="text-blue-600 dark:text-blue-400 hover:underline">
              → TOEFL Reading Strategies
            </Link>
          </li>
          <li>
            <Link to="/toefl/toefl-reading/toefl-reading-question-types/" className="text-blue-600 dark:text-blue-400 hover:underline">
              → TOEFL Reading Question Types
            </Link>
          </li>
          <li>
            <Link to="/toefl/toefl-writing/toefl-writing-task-1-explained/" className="text-blue-600 dark:text-blue-400 hover:underline">
              → TOEFL Writing Task 1 Explained
            </Link>
          </li>
          <li>
            <Link to="/toefl/toefl-writing/toefl-writing-task-2-explained/" className="text-blue-600 dark:text-blue-400 hover:underline">
              → TOEFL Writing Task 2 Explained
            </Link>
          </li>
          <li>
            <Link to="/toefl/toefl-writing/toefl-writing-templates/" className="text-blue-600 dark:text-blue-400 hover:underline">
              → TOEFL Writing Templates
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OldTOEFLvsNewTOEFL2026Page;
