import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading, BulletList } from '../components/ArticleComponents';

const TOEFLCompleteTheWordsPage: React.FC = () => {
  usePageMetadata({
    title: 'TOEFL Complete the Words: Spelling Strategies That Actually Work (2026) | TypoGrammar',
    description:
      'Learn how to ace the TOEFL Complete the Words task in 2026. Discover proven strategies, 3 full practice exercises, and expert tips to score higher on TOEFL Reading Task 1.',
  });

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is the TOEFL Complete the Words task only about spelling, or does it test reading comprehension too?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Both. You need to understand the paragraph to figure out which word belongs in each blank. Spelling is necessary to score, but comprehension gets you to the right word in the first place. Think of it as a two-step process: comprehension tells you what word to write, and spelling accuracy ensures you actually get credit.',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens if I can read the word in context but cannot spell it on TOEFL Complete the Words?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You will not receive credit. There is no partial credit on the TOEFL Complete the Words task, the spelling must be exact. This is why building an academic spelling drill practice alongside your reading preparation is so important.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are the words in TOEFL Complete the Words obscure academic vocabulary or common words?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Based on the ETS official example and the structure of the task, the words are drawn from standard academic English, the kind of vocabulary you would encounter in introductory university textbooks. Think words like estimate, significant, process, evidence, cultural, development. You will not be tested on rare technical jargon, but you should be comfortable with the full Academic Word List.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I go back and change a TOEFL Complete the Words blank I have already submitted?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Once you move to the next blank, your previous answer is locked in. This is why the commit-and-move-on strategy is so important. Hesitating too long on one blank costs you time without improving accuracy. Make your best judgment within 8 seconds and advance.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does the TOEFL Complete the Words task fit into the overall TOEFL iBT Reading score?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Complete the Words task is scored as part of the overall TOEFL Reading section score. Each correct blank earns you a point. Since there are 10 blanks per paragraph and up to 5 paragraphs (2-5 per test), there is meaningful raw score weight attached to this task type.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the TOEFL Complete the Words task case-sensitive?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Whether you type Climate, climate, or CLIMATE, the response will be marked correct as long as the letters are right. You do not need to think about capitalization at all.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many TOEFL Complete the Words tasks are on the 2026 TOEFL iBT?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'There are 2 to 5 Complete the Words tasks on any given 2026 TOEFL iBT test. Each paragraph contains 10 blanks, and you have approximately 60 seconds per paragraph (roughly 6-10 seconds per blank).',
        },
      },
      {
        '@type': 'Question',
        name: 'What does TOEFL Complete the Words test?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TOEFL Complete the Words tests five integrated skills: vocabulary recognition from partial spelling, use of context clues, accurate spelling of academic words, reading comprehension, and grammar knowledge (recognizing the correct word form, noun, verb, adjective, or adverb).',
        },
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'TOEFL Complete the Words: Spelling Strategies That Actually Work (2026)',
    description:
      'Learn how to ace the TOEFL Complete the Words task in 2026. Discover proven strategies, 3 full practice exercises, and expert tips to score higher on TOEFL Reading Task 1.',
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
      '@id': 'https://typogrammar.com/toefl/strategy-success/toefl-complete-the-words',
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

      {/* Last updated */}
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
        Last updated: <strong>April 2026</strong>, All information reflects the TOEFL iBT format in effect as of January 21, 2026.
      </p>

      <h1 className="text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100">
        TOEFL Complete the Words: Spelling Strategies That Actually Work (2026)
      </h1>

      {/* Key Takeaways, Featured Snippet block */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-5 my-6 rounded-r-lg">
        <p className="font-bold text-slate-800 dark:text-slate-100 mb-3 text-lg">Key Takeaways</p>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-[15px]">
          <li>✅ <strong>TOEFL Complete the Words</strong> is a brand-new task introduced in the 2026 TOEFL iBT Reading section (Task 1).</li>
          <li>✅ Each paragraph has <strong>10 blanks</strong> where the second half of every second word is hidden, you must type the missing letters exactly.</li>
          <li>✅ Each underscore represents <strong>one missing letter</strong>, use this to count and narrow down your answer.</li>
          <li>✅ Spelling must be <strong>100% exact</strong>, there is no partial credit.</li>
          <li>✅ You have roughly <strong>60 seconds per paragraph</strong> (~6-10 seconds per blank), so speed and accuracy both matter.</li>
          <li>✅ You <strong>cannot skip a blank</strong> and return to it later, commit and move on.</li>
          <li>✅ The <strong>first sentence is always shown in full</strong>, use it to set up context before you attempt any blanks.</li>
        </ul>
      </div>

      <ArticleParagraph>
        If you're preparing for the 2026 TOEFL iBT, you've probably heard about the new <strong>TOEFL Complete the Words
        task</strong>. This is one of the most talked-about changes to the test, and for good reason: it's unlike anything
        that appeared on previous versions of the TOEFL. Instead of choosing from multiple-choice options, you actually
        have to type the missing letters of words in an academic paragraph, from memory, under time pressure, with no
        room for spelling errors.
      </ArticleParagraph>

      <ArticleParagraph>
        The good news? This task is very learnable. Once you understand exactly how it works and apply the right
        strategies, it becomes one of the more predictable sections on the test. This guide covers everything: how the
        task is structured, what it actually tests, seven practical strategies, three full practice exercises with
        answers, and answers to the most common questions test-takers have.
      </ArticleParagraph>

      {/* ─── WHAT IS IT ─── */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-3">
        What Is the TOEFL Complete the Words Task?
      </h2>

      <ArticleParagraph>
        The <strong>TOEFL Complete the Words task</strong> is Task 1 in the 2026 TOEFL iBT Reading section, also
        referred to as the <strong>TOEFL 2026 Reading Task 1</strong>. It was introduced as part of ETS's significant
        redesign of the TOEFL for 2026, which added several new task types aimed at testing more integrated and authentic
        language skills.
      </ArticleParagraph>

      <ArticleParagraph>
        In this task, you read a short academic paragraph, the kind of text you'd find in a university textbook or
        research article. Some of the words in the paragraph have their second half removed, replaced by underscores.
        Your job is to figure out what the full word is and type the missing letters into the blank.
      </ArticleParagraph>

      <ArticleParagraph>
        There are <strong>2 to 5 Complete the Words tasks</strong> on any given test, so you'll encounter this format
        multiple times per exam. Each one follows the same structure.
      </ArticleParagraph>

      {/* ─── HOW IT WORKS ─── */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-3">
        How the TOEFL Complete the Words Task Works
      </h2>

      <ArticleParagraph>
        Here's the exact format you'll see on the 2026 TOEFL iBT:
      </ArticleParagraph>

      <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-5 my-6">
        <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-[15px]">
          {[
            'One short academic paragraph of approximately 70-100 words',
            'The first sentence is always shown in full, no blanks, no missing letters',
            'Starting from the second sentence, the second half of every second word is replaced with underscores',
            '10 blanks per paragraph, each representing one missing word (each underscore = one missing letter)',
            'You type the missing letters directly into the blank',
            'Spelling must be exact, no partial credit is awarded',
            'The task is case-insensitive (you do not need to capitalize correctly)',
            'You cannot skip a blank and return to it later, once you move past a blank, it is done',
            'You have approximately 60 seconds per paragraph, roughly 6-10 seconds per blank',
          ].map((item, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-blue-500 font-bold flex-shrink-0">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 p-4 my-5 rounded-r-lg">
        <p className="font-semibold text-slate-800 dark:text-slate-100 mb-1">Critical timing note:</p>
        <p className="text-slate-700 dark:text-slate-300 text-[15px]">
          Sixty seconds sounds tight, and it is. There's no time to second-guess yourself or run through long lists of
          possible words. You need a systematic approach, which is exactly what the seven strategies below provide.
        </p>
      </div>

      {/* ─── WHAT IT TESTS ─── */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-3">
        What Does TOEFL Complete the Words Actually Test?
      </h2>

      <ArticleParagraph>
        This isn't just a spelling test, although spelling accuracy is essential. The TOEFL 2026 Reading Task 1 measures
        a combination of skills that are fundamental to academic English:
      </ArticleParagraph>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse rounded-lg overflow-hidden shadow-sm">
          <thead>
            <tr className="bg-slate-700 text-white">
              <th className="px-4 py-3 text-left font-semibold">Skill Tested</th>
              <th className="px-4 py-3 text-left font-semibold">What It Means in Practice</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            {[
              ['Vocabulary recognition', 'Can you identify a word when you only see its first few letters?'],
              ['Context clues', 'Can you predict a missing word from the surrounding text?'],
              ['Accurate spelling', 'Can you reproduce academic words letter-perfect?'],
              ['Reading comprehension', 'Do you understand the paragraph well enough to predict what comes next?'],
              ['Grammar knowledge', 'Do you recognize what word form is needed (noun, verb, adjective, adverb)?'],
            ].map(([skill, meaning], i) => (
              <tr key={skill} className={i % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-slate-50 dark:bg-slate-700/50'}>
                <td className="px-4 py-3 font-semibold text-slate-800 dark:text-slate-200">{skill}</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{meaning}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ArticleParagraph>
        That grammar element is more important than it might seem. The task will often show you a word stem and ask you
        to complete a specific inflection or derivation. Recognizing that the blank calls for a noun ending in{' '}
        <strong>-tion</strong> versus a verb ending in <strong>-ing</strong> can be the difference between a correct
        and incorrect answer.
      </ArticleParagraph>

      {/* ─── OFFICIAL EXAMPLE ─── */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-3">
        Official ETS Example
      </h2>

      <ArticleParagraph>
        ETS has published the following example to illustrate the <strong>TOEFL fill in missing letters</strong> format.
        Study it carefully, this is one of the best ways to understand what the actual test looks like.
      </ArticleParagraph>

      <div className="bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg p-5 my-5 font-mono text-[15px] text-slate-700 dark:text-slate-300">
        <p className="font-semibold text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wide mb-3 not-italic font-sans">
          Paragraph as it appears on screen:
        </p>
        <p className="mb-3">
          We know from drawings that have been preserved in caves for over 10,000 years that early humans performed
          dances as a group activity.
        </p>
        <p>
          We mi<span className="bg-yellow-200 dark:bg-yellow-700 px-0.5 rounded">___</span> think th
          <span className="bg-yellow-200 dark:bg-yellow-700 px-0.5 rounded">__</span> prehistoric peo
          <span className="bg-yellow-200 dark:bg-yellow-700 px-0.5 rounded">___</span> concentrated on
          <span className="bg-yellow-200 dark:bg-yellow-700 px-0.5 rounded">__</span> on ba
          <span className="bg-yellow-200 dark:bg-yellow-700 px-0.5 rounded">___</span> survival.
        </p>
      </div>

      <ArticleHeading>What You Need to Type (the missing letters):</ArticleHeading>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse rounded-lg overflow-hidden shadow-sm">
          <thead>
            <tr className="bg-slate-700 text-white">
              <th className="px-4 py-3 text-left font-semibold">Blank</th>
              <th className="px-4 py-3 text-left font-semibold">What's shown</th>
              <th className="px-4 py-3 text-left font-semibold">Full word</th>
              <th className="px-4 py-3 text-left font-semibold">Missing letters</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            {[
              ['1', 'mi___', 'might', 'ght'],
              ['2', 'th__', 'that', 'at'],
              ['3', 'peo___', 'people', 'ple'],
              ['4', 'on__', 'only', 'ly'],
              ['5', 'ba___', 'basic', 'sic'],
            ].map(([blank, shown, full, missing], i) => (
              <tr key={blank} className={i % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-slate-50 dark:bg-slate-700/50'}>
                <td className="px-4 py-3 font-bold text-slate-800 dark:text-slate-200">{blank}</td>
                <td className="px-4 py-3 font-mono text-blue-700 dark:text-blue-400">{shown}</td>
                <td className="px-4 py-3 font-semibold text-slate-700 dark:text-slate-300">{full}</td>
                <td className="px-4 py-3 font-mono font-bold text-emerald-700 dark:text-emerald-400">{missing}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-5 rounded-r-lg">
        <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">Notice from this official example:</p>
        <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1 text-[15px]">
          <li>The words tested are <strong>common academic and functional words</strong>, not obscure vocabulary.</li>
          <li><strong>Context matters:</strong> "prehistoric peo___" clearly signals <em>people</em> because of the verb that follows.</li>
          <li><strong>Counting underscores helps:</strong> <em>on__</em> has two underscores, making <em>only</em> a perfect fit.</li>
          <li>The first sentence gives you the topic, ancient human dances, which frames everything that follows.</li>
        </ul>
      </div>

      {/* ─── 7 STRATEGIES ─── */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-3">
        7 Strategies for TOEFL Complete the Words
      </h2>

      <ArticleParagraph>
        These strategies are organized in the order you should apply them during the actual task.
      </ArticleParagraph>

      {[
        {
          num: '1',
          title: 'Read the Full First Sentence Carefully',
          body: (
            <>
              This is your most important move before touching a single blank. The first sentence is always shown in full
             , use those 5-10 seconds to absorb the topic, the academic register, and the key vocabulary. Everything
              that follows builds on that sentence. In the ETS example above, knowing the paragraph is about early human
              dancing immediately helps you predict that <em>prehistoric</em> and <em>people</em> are natural words for
              the context.
              <div className="mt-3 bg-slate-100 dark:bg-slate-700 rounded p-3 text-[14px]">
                <strong>Action:</strong> Before typing anything, read the first sentence twice in your head.
              </div>
            </>
          ),
        },
        {
          num: '2',
          title: 'Use Context Clues From Surrounding Words',
          body: (
            <>
              The words directly before and after a blank are your best friends. Look at what the sentence is trying to
              say. Academic paragraphs follow predictable logical structures, cause and effect, contrast, example,
              elaboration. Use that structure to predict the missing word. For example, if you see{' '}
              <strong>"the process of photo___"</strong>, the words around it and the academic context make{' '}
              <em>photosynthesis</em> a very strong candidate, even if you only see the first five letters.
              <div className="mt-3 bg-slate-100 dark:bg-slate-700 rounded p-3 text-[14px]">
                <strong>Action:</strong> Read the full sentence (with the blank as a placeholder) before committing to an answer.
              </div>
            </>
          ),
        },
        {
          num: '3',
          title: 'Count the Underscores',
          body: (
            <>
              Each underscore represents exactly one missing letter. This is one of the most powerful tools you have. If
              a blank shows <strong>"com____"</strong> with four underscores, you're looking for a word that is seven
              letters long (3 visible + 4 hidden). That rules out <em>completely</em> (10 letters) and <em>common</em>{' '}
              (6 letters), but fits <em>complex</em> (7 letters) or <em>combine</em> (7 letters).
              <div className="mt-3 bg-slate-100 dark:bg-slate-700 rounded p-3 text-[14px]">
                <strong>Action:</strong> Count the underscores before guessing, then verify your answer has the right number of letters.
              </div>
            </>
          ),
        },
        {
          num: '4',
          title: 'Identify the Part of Speech',
          body: (
            <>
              Grammar gives you a massive shortcut. Look at the surrounding words and ask: what part of speech belongs here?
              <ul className="list-disc list-inside mt-2 mb-3 space-y-1 text-[15px]">
                <li>After <em>the</em> or <em>a/an</em> → likely a <strong>noun or adjective</strong></li>
                <li>After a subject → likely a <strong>verb</strong></li>
                <li>Before a noun → likely an <strong>adjective</strong></li>
                <li>After a verb → could be an <strong>adverb or object noun</strong></li>
              </ul>
              If you know the blank needs a noun, you can instantly eliminate verb forms, even if the letters could theoretically match both.
              <div className="mt-3 bg-slate-100 dark:bg-slate-700 rounded p-3 text-[14px]">
                <strong>Action:</strong> Ask "What part of speech fits here?" before generating word candidates.
              </div>
            </>
          ),
        },
        {
          num: '5',
          title: 'Know Your Common Word Endings',
          body: (
            <>
              Academic English is full of predictable suffixes. Memorizing the most common ones, and what they signal
             , gives you a huge advantage on the TOEFL spelling task.
              <div className="overflow-x-auto my-4">
                <table className="w-full text-sm border-collapse rounded-lg overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-slate-700 text-white">
                      <th className="px-4 py-3 text-left font-semibold">Suffix</th>
                      <th className="px-4 py-3 text-left font-semibold">Word type</th>
                      <th className="px-4 py-3 text-left font-semibold">Example</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                    {[
                      ['-tion / -sion', 'Noun', 'cognition, expansion'],
                      ['-ment', 'Noun', 'development, agreement'],
                      ['-ence / -ance', 'Noun', 'evidence, importance'],
                      ['-ive', 'Adjective', 'cognitive, effective'],
                      ['-al', 'Adjective', 'cultural, biological'],
                      ['-ly', 'Adverb', 'significantly, rapidly'],
                      ['-ing', 'Verb (present) / Noun', 'processing, learning'],
                      ['-ed', 'Verb (past)', 'established, observed'],
                    ].map(([suffix, type, example], i) => (
                      <tr key={suffix} className={i % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-slate-50 dark:bg-slate-700/50'}>
                        <td className="px-4 py-3 font-mono font-bold text-blue-700 dark:text-blue-400">{suffix}</td>
                        <td className="px-4 py-3 text-slate-700 dark:text-slate-300">{type}</td>
                        <td className="px-4 py-3 text-slate-600 dark:text-slate-400 italic">{example}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-slate-100 dark:bg-slate-700 rounded p-3 text-[14px]">
                <strong>Action:</strong> Learn these eight suffixes and what part of speech each signals.
              </div>
            </>
          ),
        },
        {
          num: '6',
          title: 'Use the Base Word to Predict the Form',
          body: (
            <>
              When you can recognize a word stem in the visible letters, use your knowledge of related word forms to
              derive the answer. This is called <strong>word family knowledge</strong>, and it's a core vocabulary skill
              tested throughout the TOEFL.
              <ul className="list-disc list-inside mt-2 mb-3 space-y-1 text-[15px]">
                <li>You see <strong>"signi___"</strong> in a position that calls for an adverb → <em>significantly</em></li>
                <li>You see <strong>"evol___"</strong> in a position that calls for a noun → <em>evolution</em></li>
                <li>You see <strong>"cogni___"</strong> before a noun → <em>cognitive</em></li>
              </ul>
              <div className="bg-slate-100 dark:bg-slate-700 rounded p-3 text-[14px]">
                <strong>Action:</strong> When you recognize a root, ask: "What form of this word fits the grammar and letter count?"
              </div>
            </>
          ),
        },
        {
          num: '7',
          title: "Don't Overthink, Commit and Move On",
          body: (
            <>
              The most damaging mistake on this task is not a spelling error, it's <strong>losing time</strong>. You
              cannot go back to a blank once you've passed it, and 60 seconds is not long. If you've applied the
              strategies above and still aren't sure, make your best guess and move forward. A wrong answer costs you
              one point. Losing time costs you several.
              <div className="mt-3 bg-slate-100 dark:bg-slate-700 rounded p-3 text-[14px]">
                <strong>Action:</strong> Set a mental limit of <strong>8 seconds per blank</strong>. If you're stuck, commit to your best guess and advance.
              </div>
            </>
          ),
        },
      ].map(({ num, title, body }) => (
        <div key={num} className="flex gap-4 my-7">
          <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
            {num}
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">
              Strategy {num}: {title}
            </h3>
            <div className="text-slate-700 dark:text-slate-300 text-[15px] leading-relaxed">{body}</div>
          </div>
        </div>
      ))}

      {/* ─── PRACTICE EXERCISES ─── */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-3">
        TOEFL Complete the Words Practice Exercises
      </h2>

      <ArticleParagraph>
        These exercises mirror the format of the 2026 TOEFL iBT Complete the Words task. Set a timer for{' '}
        <strong>60 seconds</strong> and attempt each one before checking the answers.
      </ArticleParagraph>

      {/* Exercise 1 */}
      <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden my-8">
        <div className="bg-blue-600 px-5 py-3">
          <h3 className="text-white font-bold text-lg">Practice Exercise 1: Environmental Science</h3>
        </div>
        <div className="p-5">
          <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4 font-mono text-[15px] text-slate-700 dark:text-slate-300 mb-5">
            <p className="mb-2 font-semibold text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wide not-italic font-sans">Read and complete the blanks:</p>
            <p className="mb-2">
              The Amazon rainforest is one of the most biologically diverse ecosystems on Earth.
            </p>
            <p>
              Scientists esti<span className="bg-yellow-200 dark:bg-yellow-700 px-0.5 rounded">___</span>{' '}
              that th<span className="bg-yellow-200 dark:bg-yellow-700 px-0.5 rounded">__</span>{' '}
              region con<span className="bg-yellow-200 dark:bg-yellow-700 px-0.5 rounded">___</span>{' '}
              approximately ten<span className="bg-yellow-200 dark:bg-yellow-700 px-0.5 rounded">__</span>{' '}
              of all kno<span className="bg-yellow-200 dark:bg-yellow-700 px-0.5 rounded">___</span>{' '}
              plant and ani<span className="bg-yellow-200 dark:bg-yellow-700 px-0.5 rounded">___</span>{' '}
              species. The for<span className="bg-yellow-200 dark:bg-yellow-700 px-0.5 rounded">___</span>{' '}
              plays a cru<span className="bg-yellow-200 dark:bg-yellow-700 px-0.5 rounded">___</span>{' '}
              role in regu<span className="bg-yellow-200 dark:bg-yellow-700 px-0.5 rounded">___</span>{' '}
              the global cli<span className="bg-yellow-200 dark:bg-yellow-700 px-0.5 rounded">___</span>.
            </p>
          </div>

          <ArticleHeading>Answers and Explanations:</ArticleHeading>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-slate-700 text-white">
                  <th className="px-3 py-2 text-left">Blank</th>
                  <th className="px-3 py-2 text-left">Shown</th>
                  <th className="px-3 py-2 text-left">Full word</th>
                  <th className="px-3 py-2 text-left">Missing letters</th>
                  <th className="px-3 py-2 text-left">Why</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                {[
                  ['1', 'esti___', 'estimate', 'mate', 'Verb needed: "Scientists estimate"'],
                  ['2', 'th__', 'the', 'e', 'Determiner before "region"'],
                  ['3', 'con___', 'contains', 'tains', 'Verb: "the region contains"'],
                  ['4', 'ten__', 'tens', 's', '"tens of all", plural noun; 4 letters'],
                  ['5', 'kno___', 'known', 'wn', 'Adjective: "known plant"; past participle modifier'],
                  ['6', 'ani___', 'animal', 'mal', 'Parallel to "plant", noun modifier'],
                  ['7', 'for___', 'forest', 'est', 'Subject referring back to rainforest'],
                  ['8', 'cru___', 'crucial', 'cial', 'Adjective: "plays a crucial role"'],
                  ['9', 'regu___', 'regulating', 'lating', 'Gerund after "role in"'],
                  ['10', 'cli___', 'climate', 'mate', '"global climate", fixed academic phrase'],
                ].map(([blank, shown, full, missing, why], i) => (
                  <tr key={blank} className={i % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-slate-50 dark:bg-slate-700/50'}>
                    <td className="px-3 py-2 font-bold text-slate-800 dark:text-slate-200">{blank}</td>
                    <td className="px-3 py-2 font-mono text-blue-700 dark:text-blue-400">{shown}</td>
                    <td className="px-3 py-2 font-semibold text-slate-700 dark:text-slate-300">{full}</td>
                    <td className="px-3 py-2 font-mono font-bold text-emerald-700 dark:text-emerald-400">{missing}</td>
                    <td className="px-3 py-2 text-slate-600 dark:text-slate-400 text-xs">{why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 rounded-r-lg text-[14px] text-slate-700 dark:text-slate-300">
            <strong>Study tip:</strong> Notice how blanks 6 and 7 require you to read ahead to identify the noun being
            described. Blanks 8 and 9 rely entirely on knowing the phrase structure{' '}
            <em>"plays a crucial role in [verb]-ing"</em>.
          </div>
        </div>
      </div>

      {/* Exercise 2 */}
      <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden my-8">
        <div className="bg-emerald-600 px-5 py-3">
          <h3 className="text-white font-bold text-lg">Practice Exercise 2: Psychology</h3>
        </div>
        <div className="p-5">
          <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4 font-mono text-[15px] text-slate-700 dark:text-slate-300 mb-5">
            <p className="mb-2 font-semibold text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wide not-italic font-sans">Read and complete the blanks:</p>
            <p className="mb-2">
              Memory consolidation is the process by which newly acquired information becomes stable in the brain.
            </p>
            <p>
              Research sug<span className="bg-yellow-200 dark:bg-yellow-700 px-0.5 rounded">___</span>{' '}
              that sl<span className="bg-yellow-200 dark:bg-yellow-700 px-0.5 rounded">___</span>{' '}
              plays a vita<span className="bg-yellow-200 dark:bg-yellow-700 px-0.5 rounded">_</span>{' '}
              role in th<span className="bg-yellow-200 dark:bg-yellow-700 px-0.5 rounded">__</span>{' '}
              process. Dur<span className="bg-yellow-200 dark:bg-yellow-700 px-0.5 rounded">___</span>{' '}
              sleep, the br<span className="bg-yellow-200 dark:bg-yellow-700 px-0.5 rounded">___</span>{' '}
              replays rec<span className="bg-yellow-200 dark:bg-yellow-700 px-0.5 rounded">___</span>{' '}
              experiences and trans<span className="bg-yellow-200 dark:bg-yellow-700 px-0.5 rounded">___</span>{' '}
              them into long-<span className="bg-yellow-200 dark:bg-yellow-700 px-0.5 rounded">____</span>{' '}
              memory storage.
            </p>
          </div>

          <ArticleHeading>Answers and Explanations:</ArticleHeading>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-slate-700 text-white">
                  <th className="px-3 py-2 text-left">Blank</th>
                  <th className="px-3 py-2 text-left">Shown</th>
                  <th className="px-3 py-2 text-left">Full word</th>
                  <th className="px-3 py-2 text-left">Missing letters</th>
                  <th className="px-3 py-2 text-left">Why</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                {[
                  ['1', 'sug___', 'suggests', 'gests', 'Verb: "Research suggests"'],
                  ['2', 'sl___', 'sleep', 'eep', 'Subject noun after "that"; topic of paragraph'],
                  ['3', 'vita_', 'vital', 'l', 'Adjective: "vital role"; 5 letters'],
                  ['4', 'th__', 'this', 'is', 'Demonstrative: "this process" refers back'],
                  ['5', 'Dur___', 'During', 'ing', 'Preposition beginning a clause'],
                  ['6', 'br___', 'brain', 'ain', 'Subject: "the brain replays"'],
                  ['7', 'rec___', 'recent', 'ent', 'Adjective: "recent experiences"'],
                  ['8', 'trans___', 'transfers', 'fers', 'Verb parallel to "replays"'],
                  ['9', 'long-____', 'long-term', 'term', 'Fixed collocation: "long-term memory"'],
                  ['10', '(storage, shown fully)', '-', '-', '-'],
                ].map(([blank, shown, full, missing, why], i) => (
                  <tr key={blank} className={i % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-slate-50 dark:bg-slate-700/50'}>
                    <td className="px-3 py-2 font-bold text-slate-800 dark:text-slate-200">{blank}</td>
                    <td className="px-3 py-2 font-mono text-blue-700 dark:text-blue-400">{shown}</td>
                    <td className="px-3 py-2 font-semibold text-slate-700 dark:text-slate-300">{full}</td>
                    <td className="px-3 py-2 font-mono font-bold text-emerald-700 dark:text-emerald-400">{missing}</td>
                    <td className="px-3 py-2 text-slate-600 dark:text-slate-400 text-xs">{why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-400 p-4 rounded-r-lg text-[14px] text-slate-700 dark:text-slate-300">
            <strong>Study tip:</strong> Blank 9 tests knowledge of a fixed academic collocation,{' '}
            <em>long-term memory</em>. Building familiarity with common academic phrase pairs
            (short-term/long-term, cause/effect, significant/insignificant) is excellent preparation.
          </div>
        </div>
      </div>

      {/* Exercise 3 */}
      <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden my-8">
        <div className="bg-violet-600 px-5 py-3">
          <h3 className="text-white font-bold text-lg">Practice Exercise 3: Economics</h3>
        </div>
        <div className="p-5">
          <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4 font-mono text-[15px] text-slate-700 dark:text-slate-300 mb-5">
            <p className="mb-2 font-semibold text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wide not-italic font-sans">Read and complete the blanks:</p>
            <p className="mb-2">
              Supply and demand is one of the most fundamental principles in economics.
            </p>
            <p>
              When the sup<span className="bg-yellow-200 dark:bg-yellow-700 px-0.5 rounded">___</span>{' '}
              of a pro<span className="bg-yellow-200 dark:bg-yellow-700 px-0.5 rounded">____</span>{' '}
              falls, its pri<span className="bg-yellow-200 dark:bg-yellow-700 px-0.5 rounded">__</span>{' '}
              typically ri<span className="bg-yellow-200 dark:bg-yellow-700 px-0.5 rounded">___</span>{' '}
             , assu<span className="bg-yellow-200 dark:bg-yellow-700 px-0.5 rounded">____</span>{' '}
              that dem<span className="bg-yellow-200 dark:bg-yellow-700 px-0.5 rounded">____</span>{' '}
              remains con<span className="bg-yellow-200 dark:bg-yellow-700 px-0.5 rounded">_____</span>.{' '}
              This rela<span className="bg-yellow-200 dark:bg-yellow-700 px-0.5 rounded">________</span>{' '}
              between pri<span className="bg-yellow-200 dark:bg-yellow-700 px-0.5 rounded">__</span>{' '}
              and quan<span className="bg-yellow-200 dark:bg-yellow-700 px-0.5 rounded">____</span>{' '}
              is known as the law of demand.
            </p>
          </div>

          <ArticleHeading>Answers and Explanations:</ArticleHeading>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-slate-700 text-white">
                  <th className="px-3 py-2 text-left">Blank</th>
                  <th className="px-3 py-2 text-left">Shown</th>
                  <th className="px-3 py-2 text-left">Full word</th>
                  <th className="px-3 py-2 text-left">Missing letters</th>
                  <th className="px-3 py-2 text-left">Why</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                {[
                  ['1', 'sup___', 'supply', 'ply', 'Subject noun: "the supply of"'],
                  ['2', 'pro____', 'product', 'duct', '"supply of a product", core economics term'],
                  ['3', 'pri__', 'price', 'ce', 'Subject: "its price typically rises"'],
                  ['4', 'ri___', 'rises', 'ses', 'Verb: third-person singular present'],
                  ['5', 'assu____', 'assuming', 'ming', 'Participial phrase: "assuming that"'],
                  ['6', 'dem____', 'demand', 'and', 'Subject: "demand remains constant"'],
                  ['7', 'con_____', 'constant', 'stant', 'Adjective: "remains constant"'],
                  ['8', 'rela________', 'relationship', 'tionship', 'Noun: "this relationship between"'],
                  ['9', 'pri__', 'price', 'ce', '"between price and quantity"'],
                  ['10', 'quan____', 'quantity', 'tity', 'Noun: "price and quantity", economics pair'],
                ].map(([blank, shown, full, missing, why], i) => (
                  <tr key={blank} className={i % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-slate-50 dark:bg-slate-700/50'}>
                    <td className="px-3 py-2 font-bold text-slate-800 dark:text-slate-200">{blank}</td>
                    <td className="px-3 py-2 font-mono text-blue-700 dark:text-blue-400">{shown}</td>
                    <td className="px-3 py-2 font-semibold text-slate-700 dark:text-slate-300">{full}</td>
                    <td className="px-3 py-2 font-mono font-bold text-emerald-700 dark:text-emerald-400">{missing}</td>
                    <td className="px-3 py-2 text-slate-600 dark:text-slate-400 text-xs">{why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 bg-violet-50 dark:bg-violet-900/20 border-l-4 border-violet-400 p-4 rounded-r-lg text-[14px] text-slate-700 dark:text-slate-300">
            <strong>Study tip:</strong> Notice that <em>price</em> appears twice (blanks 3 and 9). The TOEFL may reuse
            the same word within a paragraph, and counting underscores confirms the match both times (pri__ = 5 letters = price).
          </div>
        </div>
      </div>

      {/* ─── COMMON MISTAKES ─── */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-3">
        Common Mistakes to Avoid
      </h2>

      <ArticleParagraph>
        Even well-prepared test-takers make these errors on the TOEFL Complete the Words task. Know them before test day:
      </ArticleParagraph>

      <div className="space-y-4 my-6">
        {[
          {
            icon: '❌',
            title: 'Misspelling by one letter',
            body: 'There is zero partial credit. Basicaly instead of basically earns you nothing. If you\'re uncertain about double letters (occurrence vs. occurence) or silent letters (knowledge vs. knowlege), add those high-risk words to your spelling drill list now.',
          },
          {
            icon: '❌',
            title: 'Ignoring context and guessing purely from letters',
            body: 'If you see "con___" and jump to content without reading the sentence, you\'ll miss that the grammar calls for a verb (contains, controls, concludes). Always read before you type.',
          },
          {
            icon: '❌',
            title: 'Spending too long on one blank',
            body: 'Eight seconds is your limit. Staring at a blank for 20 seconds while the clock runs down is the single most costly mistake on this task. A wrong answer loses 1 point. Running out of time can cost you 3-5 points.',
          },
          {
            icon: '❌',
            title: 'Not reading the first sentence',
            body: 'Some test-takers dive straight into the blanks to save time. This almost always backfires. Without the context from the first sentence, you\'re guessing blind. Those 5-10 seconds of reading pay dividends on every blank that follows.',
          },
          {
            icon: '❌',
            title: 'Typing a word that doesn\'t fit the letter count',
            body: 'If you count three underscores after the visible letters and type a word that adds five letters, the system will reject it. Always verify your answer length before submitting.',
          },
        ].map(({ icon, title, body }) => (
          <div key={title} className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-4 rounded-r-lg">
            <p className="font-semibold text-slate-800 dark:text-slate-100 mb-1">{icon} {title}</p>
            <p className="text-slate-700 dark:text-slate-300 text-[15px]">{body}</p>
          </div>
        ))}
      </div>

      {/* ─── HOW TO PRACTICE AT HOME ─── */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-3">
        How to Practice TOEFL Complete the Words at Home
      </h2>

      <ArticleParagraph>
        The best preparation combines vocabulary building, spelling accuracy, and timed practice. Here's a structured
        approach:
      </ArticleParagraph>

      {[
        {
          num: '1',
          title: 'Create your own blanks from academic texts',
          body: 'Find a paragraph from a science or social science textbook. Print it out or copy it into a document. Hide the second half of every second word starting from sentence two. Set a 60-second timer and complete your own exercise. This is the most direct simulation of the real task.',
        },
        {
          num: '2',
          title: 'Run timed spelling drills on academic vocabulary',
          body: 'Use the Academic Word List (AWL), a widely used list of the 570 word families most common in academic English, as your spelling drill source. Write each word from memory, check it, and repeat any you missed. Focus especially on words with tricky endings: -ence vs. -ance, -ible vs. -able, -tion vs. -sion.',
        },
        {
          num: '3',
          title: 'Read academic texts daily',
          body: 'The more academic English you read, the more natural academic vocabulary feels. News sources like The Economist, Scientific American, or university press releases are excellent. The goal is to build word recognition so that when you see "signi___", your brain fills in significant or significantly immediately, without conscious effort.',
        },
        {
          num: '4',
          title: 'Practice word family drills',
          body: 'Take a root word and write all its forms: cognize → cognition → cognitive → cognitively. Knowing that a word belongs to a family helps you produce the right form under pressure.',
        },
        {
          num: '5',
          title: 'Use the practice exercises in this article repeatedly',
          body: 'Redo the three exercises above with a timer. Track which words you consistently get wrong, then add those to your spelling drill list.',
        },
      ].map(({ num, title, body }) => (
        <div key={num} className="flex gap-4 my-5">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
            {num}
          </div>
          <div>
            <p className="font-semibold text-slate-800 dark:text-slate-100 mb-1">{title}</p>
            <p className="text-slate-700 dark:text-slate-300 text-[15px]">{body}</p>
          </div>
        </div>
      ))}

      {/* ─── FAQ ─── */}
      <h2 className="text-2xl font-bold mt-12 mb-6 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-3">
        FAQ: TOEFL Complete the Words
      </h2>

      <div className="space-y-5">
        {[
          {
            q: 'Is this task only about spelling, or does it test reading comprehension too?',
            a: 'Both. You need to understand the paragraph to figure out which word belongs in each blank. Spelling is necessary to score, but comprehension gets you to the right word in the first place. Think of it as a two-step process: comprehension tells you what word to write, and spelling accuracy ensures you actually get credit.',
          },
          {
            q: "What happens if I can read the word in context but can't spell it?",
            a: "You won't receive credit. There is no partial credit on the TOEFL Complete the Words task, the spelling must be exact. This is why building an academic spelling drill practice alongside your reading preparation is so important. Knowing a word's meaning is not enough; you must be able to reproduce it letter-perfect.",
          },
          {
            q: 'Are the words tested obscure academic vocabulary or common words?',
            a: "Based on the ETS official example and the structure of the task, the words are drawn from standard academic English, the kind of vocabulary you'd encounter in introductory university textbooks. Think words like estimate, significant, process, evidence, cultural, development. You won't be tested on rare technical jargon, but you should be comfortable with the full Academic Word List.",
          },
          {
            q: "Can I go back and change a blank I've already submitted?",
            a: "No. Once you move to the next blank, your previous answer is locked in. This is why the commit-and-move-on strategy is so important. Hesitating too long on one blank costs you time without improving accuracy. Make your best judgment within 8 seconds and advance.",
          },
          {
            q: 'How does the Complete the Words task fit into the overall TOEFL iBT Reading score?',
            a: "The Complete the Words task is scored as part of the overall TOEFL Reading section score. Each correct blank earns you a point. Since there are 10 blanks per paragraph and up to 5 paragraphs, there is meaningful raw score weight attached to this task type. Performing consistently well across all Complete the Words paragraphs can have a measurable positive effect on your Reading score.",
          },
          {
            q: 'Is the task case-sensitive?',
            a: "No. Whether you type Climate, climate, or CLIMATE, the response will be marked correct as long as the letters are right. This removes one source of anxiety, you don't need to think about capitalization at all.",
          },
          {
            q: 'How many Complete the Words tasks appear on the 2026 TOEFL?',
            a: 'There are 2 to 5 Complete the Words tasks on any given 2026 TOEFL iBT test. Each paragraph contains 10 blanks, and you have approximately 60 seconds per paragraph.',
          },
          {
            q: 'What is the best way to prepare for TOEFL Complete the Words?',
            a: 'The most effective preparation combines three things: daily academic reading (to build passive vocabulary), timed spelling drills using the Academic Word List (to build active spelling accuracy), and timed practice exercises in the exact TOEFL format (to build speed and a systematic approach under pressure).',
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

      {/* ─── SUMMARY ─── */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-3">
        Summary: What to Remember About TOEFL Complete the Words
      </h2>

      <ArticleParagraph>
        The TOEFL Complete the Words task rewards test-takers who prepare methodically. Here's the one-page summary:
      </ArticleParagraph>

      <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 my-6 border border-slate-200 dark:border-slate-700">
        <ol className="space-y-3 text-slate-700 dark:text-slate-300 text-[15px]">
          {[
            'Read the full first sentence to anchor your understanding of the topic.',
            'Use context clues, part-of-speech awareness, and suffix knowledge to identify the word.',
            'Count the underscores to verify your answer length before typing.',
            "Spell every word exactly right, there's no partial credit.",
            'Keep moving, 8 seconds per blank, no going back.',
            'Practice with timed exercises and academic vocabulary spelling drills before test day.',
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                {i + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Internal links block */}
      <div className="mt-10 p-5 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <p className="font-semibold text-slate-800 dark:text-slate-100 mb-3">Continue your TOEFL preparation:</p>
        <ul className="space-y-2 text-[15px]">
          <li>
            <Link to="/toefl/toefl-reading/toefl-reading-question-types/" className="text-blue-600 dark:text-blue-400 hover:underline">
              → TOEFL Reading Question Types (all 2026 task types explained)
            </Link>
          </li>
          <li>
            <Link to="/toefl/toefl-reading/toefl-reading-strategies/" className="text-blue-600 dark:text-blue-400 hover:underline">
              → TOEFL Reading Strategies (comprehension skills for every task)
            </Link>
          </li>
          <li>
            <Link to="/toefl/toefl-reading/toefl-reading-section-explained/" className="text-blue-600 dark:text-blue-400 hover:underline">
              → TOEFL Reading Section Explained (how the 2026 section works)
            </Link>
          </li>
          <li>
            <Link to="/toefl/strategy-success/old-toefl-vs-new-toefl/" className="text-blue-600 dark:text-blue-400 hover:underline">
              → Old TOEFL vs New TOEFL 2026: Every Change Explained
            </Link>
          </li>
          <li>
            <Link to="/toefl/toefl-writing/toefl-writing-task-1-explained/" className="text-blue-600 dark:text-blue-400 hover:underline">
              → TOEFL Writing Task 1 Explained
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TOEFLCompleteTheWordsPage;
