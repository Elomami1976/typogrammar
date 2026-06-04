import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import SchemaMarkup from '../components/SchemaMarkup';

const TOEFLReadingQuestionTypesPage: React.FC = () => {
  usePageMetadata({
    title: 'TOEFL Reading Question Types Explained (With Examples) | TypoGrammar',
    description: 'Discover all TOEFL reading question types for the 2026 iBT format, with real examples, strategies, and tips to answer every type correctly.',
    canonical: 'https://typogrammar.com/toefl/toefl-reading/toefl-reading-question-types/'
  });

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "TOEFL Reading Question Types Explained (With Examples)",
    "description": "Discover all TOEFL reading question types for the 2026 iBT format, with real examples, strategies, and tips to answer every type correctly.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": {
      "@type": "Organization",
      "name": "TypoGrammar",
      "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://typogrammar.com/toefl/toefl-reading/toefl-reading-question-types"
    },
    "datePublished": "2026-03-29",
    "dateModified": "2026-03-29"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the TOEFL reading question types in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The 2026 TOEFL iBT has two tasks with question types: Read in Daily Life (Main Purpose, Detail, Vocabulary in Context, Inference, Rhetorical Purpose, and NOT/EXCEPT) and Read an Academic Passage (the same types plus two new ones: Important Idea / Select the Sentence and Paragraph Relationship)."
        }
      },
      {
        "@type": "Question",
        "name": "How many question types are on the TOEFL reading section?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There are 8 distinct question types across the two reading tasks. Some appear in both tasks; two (Important Idea and Paragraph Relationship) are exclusive to the Academic Passage and are new as of 2026."
        }
      },
      {
        "@type": "Question",
        "name": "What is the hardest TOEFL reading question type?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Paragraph Relationship and Important Idea (Select the Sentence) are considered the most challenging because they require understanding the structure of the passage, not just a single sentence or fact."
        }
      },
      {
        "@type": "Question",
        "name": "What is the easiest TOEFL reading question type?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Detail and Vocabulary in Context questions are generally the fastest and most straightforward, especially in the Read in Daily Life task, because the answer is usually directly stated or easily inferred from context."
        }
      },
      {
        "@type": "Question",
        "name": "Does the 2026 TOEFL still have vocabulary questions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Vocabulary in Context questions appear in both the Read in Daily Life task and the Read an Academic Passage task. They test the meaning of a word as used in the text, not its general dictionary definition."
        }
      },
      {
        "@type": "Question",
        "name": "What changed about TOEFL reading question types in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Two question types were added in 2026: Important Idea (Select the Sentence), where you click directly on a sentence in the passage, and Paragraph Relationship, where you explain how one paragraph connects to others. The old 700-word passage format was completely replaced by shorter 200-word academic texts."
        }
      }
    ]
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

  const dailyLifeTypes = [
    {
      number: 1,
      name: "Main Purpose (Big Picture)",
      tests: "Why the text was written, to inform, warn, invite, promote, confirm, or instruct.",
      signals: ['"What is the main purpose of this email?"', '"What is this notice mainly about?"', '"Why did [person] write to [person]?"'],
      strategy: "Check the title, subject line, or opening sentence. These almost always reveal the purpose. Choose the answer that best summarizes the whole text, not just one detail.",
      example: {
        text: "A municipal bank notice inviting customers to switch to paperless billing via their mobile app.",
        question: '"What type of business posted this notice?"',
        options: ["A) Internet provider", "B) Computer manufacturer", "C) Paper supplier", "D) Bank"],
        answer: "D) Bank, the notice mentions savings accounts and monthly statements."
      },
      tip: 'The purpose is almost never hidden. If the email subject says "Driving Exam Confirmation," the purpose is to confirm a driving exam.'
    },
    {
      number: 2,
      name: "Detail",
      tests: "Whether you can locate specific facts, dates, times, prices, names, locations, steps, or requirements.",
      signals: ['"What time should the test taker arrive?"', '"What is Mr. Davis asked to provide?"', '"How can customers sign up for paperless billing?"'],
      strategy: 'Do not re-read the whole text. Scan for the keyword from the question (a name, number, date, or place), then read one sentence before and after it to confirm. Watch for conditions, "must arrive 15 minutes early" means 8:45, not 9:00.',
      example: {
        text: "An email from the DMV confirming a driving exam at 9:00 AM, with a requirement to arrive 15 minutes early.",
        question: '"What time should the test taker arrive?"',
        options: ["A) 8:30 AM", "B) 8:45 AM", "C) 9:00 AM", "D) 9:15 AM"],
        answer: "B) 8:45 AM, because 9:00 minus 15 minutes = 8:45."
      },
      tip: "The answer is always in the text but is often paraphrased. Never pick an option just because it uses the same word from the text."
    },
    {
      number: 3,
      name: "Vocabulary in Context",
      tests: "The meaning of a specific word or phrase as used in the passage, not its dictionary definition.",
      signals: ['"What does \'[word]\' most likely mean in this email?"', '"The word \'[word]\' is closest in meaning to..."'],
      strategy: 'Cover the word in question and read the surrounding sentences. What would make sense there? Use contrast clues, if the text says "first-time drivers and those with expired licenses must complete this; renewals are not required," you can infer "renew" means to extend something before it expires.',
      example: {
        text: 'DMV email stating the test is required for "first-time drivers and those with expired licenses" but not for "renewals."',
        question: '"What does \'renew\' most likely mean in the email?"',
        options: ["A) Cancel a license", "B) Apply for a new license", "C) Extend or update something that is expiring", "D) Transfer a license to another state"],
        answer: "C, the context of \"expired licenses vs renewals\" shows renew means extending something."
      },
      tip: "The correct answer is always supported by context clues in the text. Never choose based on what you think the word normally means."
    },
    {
      number: 4,
      name: "Inference",
      tests: "Something that is implied but not directly stated, a logical conclusion based on what the text says.",
      signals: ['"What will most likely happen if...?"', '"What can be inferred about...?"', '"What is most likely [person]\'s job?"'],
      strategy: "Find the relevant part of the text. Ask: if this condition is true, what follows logically? Do not guess, stay close to what the text actually says. Eliminate options that go beyond the text.",
      example: {
        text: 'DMV email states the driver "must hold valid driver\'s insurance in the state of California."',
        question: '"What will happen on test day if the driver has insurance for the state of New York?"',
        options: ["A) They will be allowed to take the test", "B) They will receive a one-day exception", "C) They will not be allowed to take the test", "D) They can reschedule for free"],
        answer: "C, California insurance is required; New York insurance does not qualify."
      },
      tip: "Inference answers are supported by the text, they are never wild guesses. If you cannot find support, eliminate and choose the closest option."
    },
    {
      number: 5,
      name: "Rhetorical Purpose",
      tests: "Why the writer included a specific detail, phrase, or example, the communicative function.",
      signals: ['"Why does the email mention \'[phrase]\'?"', '"Why does the author include information about [topic]?"'],
      strategy: "Ask yourself: what role does this detail play in the text? Is it an example? A warning? A requirement? A clarification? Then choose the option that describes that role accurately.",
      example: {
        text: 'DMV email advising the test taker to "practice key maneuvers, such as parallel parking and three-point turns."',
        question: '"Why does the email mention \'parallel parking and three-point turns\'?"',
        options: ["A) These are challenging maneuvers the test taker should practice", "B) These are the only maneuvers tested in California", "C) The test taker already knows how to do these", "D) These are optional skills for experienced drivers"],
        answer: "A, they are given as examples of what the test taker should practice before the exam."
      },
      tip: "The answer always matches the function of the phrase in the text, not what you know about the topic from outside."
    }
  ];

  const academicTypes = [
    {
      number: 1,
      name: "Factual Information",
      isNew: false,
      tests: "Information directly stated in the passage.",
      signals: ['"According to the passage..."', '"The passage states that..."', '"What is one way...?"'],
      strategy: "Find the relevant section by scanning for keywords from the question. Read carefully, the answer is stated directly. Watch out for distractors that use words from the passage but distort the meaning.",
      example: {
        text: "About urban trees and their environmental benefits.",
        question: '"According to the passage, what is one way urban trees contribute to public health?"',
        options: ["A) By reducing temperatures near roads", "B) By preventing erosion on farmland", "C) By removing pollutants", "D) By displacing concrete and asphalt"],
        answer: "C) By removing pollutants, directly stated. Option A is tricky: the passage says trees help people cope with temperatures, not that they lower temperatures."
      }
    },
    {
      number: 2,
      name: "Negative Factual Information (NOT/EXCEPT)",
      isNew: false,
      tests: "Which answer option is NOT mentioned or NOT true according to the passage.",
      signals: ['"Which of the following is NOT mentioned...?"', '"All of the following are true EXCEPT..."'],
      strategy: "Check each answer option against the passage. Eliminate the three options that are supported by the text. The one left, not mentioned or contradicted, is the answer. These take more time, so budget a few extra seconds.",
      example: {
        text: "About urban trees and their social/psychological benefits.",
        question: '"Which of the following is NOT mentioned as a social or psychological benefit of trees?"',
        options: ["A) Reduced crime rates", "B) Lower stress levels", "C) Higher income levels", "D) More community involvement"],
        answer: "C) Higher income levels, A, B, and D are all mentioned; higher income levels are not."
      }
    },
    {
      number: 3,
      name: "Vocabulary in Context",
      isNew: false,
      tests: "The meaning of a word or phrase as used in the academic passage.",
      signals: ['"The word \'[word]\' in the passage is closest in meaning to..."'],
      strategy: "Read the full sentence and the sentences around the target word. Try to guess the meaning before looking at the options. These are usually quick, do not overthink them.",
      example: {
        text: "About bioplastics and their resistance to environmental degradation.",
        question: '"The word \'resist\' in the passage is closest in meaning to which word?"',
        options: ["A) capture", "B) prevent", "C) withstand", "D) measure"],
        answer: "C) withstand, resist in context means to hold up against something."
      }
    },
    {
      number: 4,
      name: "Rhetorical Purpose",
      isNew: false,
      tests: "Why the author included a specific piece of information, its role or function in the argument.",
      signals: ['"Why does the author discuss [topic]?"', '"Why does the author mention [detail]?"'],
      strategy: "Identify what the author is doing with that information. Is it providing an example? Giving a contrast? Explaining a consequence? Choose the option that matches the function, not the content.",
      example: {
        text: "About urban trees and the threats they face.",
        question: '"Why does the author discuss construction projects?"',
        options: ["A) To explain why cities need more parks", "B) To show how urban development can unintentionally harm trees", "C) To demonstrate how tree coverage can be increased", "D) To highlight the effect of global warming on trees"],
        answer: "B, construction projects are mentioned to show how development threatens trees, not to promote parks or discuss climate."
      }
    },
    {
      number: 5,
      name: "Inference",
      isNew: false,
      tests: "A conclusion that logically follows from the passage but is not directly stated.",
      signals: ['"What can be inferred from the passage...?"', '"The author implies that..."', '"What would most likely happen if...?"'],
      strategy: "Find the relevant part of the passage and reason carefully. The answer must be supported by evidence in the text. Eliminate options that require information not in the passage.",
      example: null
    },
    {
      number: 6,
      name: "Important Idea (Select the Sentence)",
      isNew: true,
      tests: "Your ability to identify which sentence expresses a specific idea. This is NOT multiple-choice, you click directly on a sentence in the passage.",
      signals: ['"Click the sentence that expresses [specific idea]."'],
      strategy: "Read the description carefully. Then read the passage looking for the sentence that best matches that description. Often it is the sentence that most closely paraphrases the idea given in the question.",
      example: {
        text: "About urban trees and their benefits.",
        question: '"Click the sentence that expresses the reason why people who live in areas with many trees might be happier than people who do not."',
        options: [],
        answer: "Paragraph 2, sentence 3, which explains the psychological/social benefits of tree-lined areas."
      }
    },
    {
      number: 7,
      name: "Paragraph Relationship",
      isNew: true,
      tests: "How one paragraph connects to or relates to another.",
      signals: ['"How does paragraph [X] relate to paragraphs [Y] and [Z]?"'],
      strategy: "Read both paragraphs carefully. Ask: does paragraph 3 give an example of what paragraphs 1 and 2 discussed? Does it add a counterargument? Does it extend or contradict the previous ideas? Choose the option that best describes that relationship.",
      example: {
        text: "About bioplastics (3 paragraphs).",
        question: '"How does paragraph 3 relate to paragraphs 1 and 2?"',
        options: ["A) It highlights weaknesses in the argument", "B) It describes possible objections to the claims", "C) It contradicts the claims", "D) It gives an example of the benefits mentioned"],
        answer: "D, paragraph 3 illustrates the benefits of bioplastics mentioned in the earlier paragraphs."
      }
    }
  ];

  const universalStrategies = [
    {
      n: 1,
      title: "Read the Question First",
      body: "Before reading the full text, skim the questions. This tells you what to look for and saves time. You will read with purpose instead of reading blindly and then trying to remember details."
    },
    {
      n: 2,
      title: "Scan, Don't Read Word for Word",
      body: "For most question types, you do not need to read every sentence. Scan for the keyword from the question, then read closely around it. This is especially effective for Detail and Vocabulary in Context questions."
    },
    {
      n: 3,
      title: "Watch for Paraphrasing",
      body: "The correct answer almost never uses the same words as the passage. ETS always paraphrases. Train yourself to recognize synonyms and reworded ideas. If an answer choice copies the passage word-for-word, treat it with suspicion."
    },
    {
      n: 4,
      title: "Use Elimination Aggressively",
      body: "If you are unsure, eliminate the two most obviously wrong answers first. Then choose between the remaining two. This raises your odds from 25% to 50% on every uncertain question."
    },
    {
      n: 5,
      title: "Never Rely on Outside Knowledge",
      body: "Every correct answer is supported by something in the text. If you cannot find textual support, the answer is wrong, no matter how correct it seems from your own knowledge. The TOEFL tests reading comprehension, not general knowledge."
    }
  ];

  return (
    <>
      <SchemaMarkup type="Article" data={articleSchema} />

      <nav className="mb-6 text-slate-600 dark:text-slate-400 text-sm">
        <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
        {' › '}
        <Link to="/toefl/toefl-reading/toefl-reading-section-explained/" className="hover:text-blue-600 dark:hover:text-blue-400">TOEFL Reading</Link>
        {' › '}
        <span className="text-slate-900 dark:text-slate-100">Question Types</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">

        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-3 tracking-tight dark:text-slate-100">
          TOEFL Reading Question Types Explained (With Examples)
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">Last Updated: March 2026</p>

        {/* Intro */}
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
          The TOEFL iBT reading section changed completely on <strong>March 29, 2026</strong>. Gone are the long
          700-word academic passages. In their place, you now face three distinct reading task types, each with
          its own set of question types.
        </p>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
          Many test-takers lose points not because they lack reading skills, but because they do not recognize
          which type of question they are looking at. This guide covers every TOEFL reading question type in the
          2026 format, explains exactly what each one is testing, and shows you real examples with proven
          strategies to answer each one correctly.
        </p>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            How the 2026 TOEFL Reading Section Works
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            On <strong>March 29, 2026</strong>, ETS launched a completely redesigned TOEFL iBT. Instead of three
            or four 700-word academic passages with 10 questions each, the new format uses three shorter task
            types that test a wider range of reading skills. Together they contain approximately{' '}
            <strong>50 items in about 30 minutes</strong>.
          </p>
          <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-400 p-5 rounded-r-lg mb-6">
            <p className="text-slate-800 dark:text-slate-200 font-semibold mb-1">Adaptive Format</p>
            <p className="text-slate-700 dark:text-slate-300">
              The section uses a multistage adaptive format. The first routing module is the same for everyone.
              Based on performance, the system routes you to a harder or easier second module, so no two
              test-takers see the exact same questions.
            </p>
          </div>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
            The new scoring scale is <strong>1.0-6.0</strong> (CEFR-aligned), with the traditional 0-120 scale
            also reported during the 2026-2028 transition. Traditional question types only exist in{' '}
            <strong>Task 2</strong> (Read in Daily Life) and <strong>Task 3</strong> (Read an Academic Passage).
            Task 1 (Complete the Words) is strictly fill-in-the-blank spelling.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm md:text-base">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-700">
                  <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 font-semibold text-slate-800 dark:text-slate-200">Task</th>
                  <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 font-semibold text-slate-800 dark:text-slate-200">Type of Text</th>
                  <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 font-semibold text-slate-800 dark:text-slate-200"># of Questions</th>
                  <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 font-semibold text-slate-800 dark:text-slate-200">Skills Tested</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Complete the Words", "70-100 word academic paragraph", "10 fill-in-the-blank letters", "Spelling, grammar, word structure"],
                  ["Read in Daily Life", "Short real-world texts (15-150 words)", "2-3 per set (1-2 sets)", "Practical comprehension, purpose, details, inference"],
                  ["Read an Academic Passage", "Short academic texts (~200 words)", "5 per passage", "Main ideas, details, vocabulary, inference, paragraph relationships"],
                ].map(([task, type, q, skills], i) => (
                  <tr key={task} className={i % 2 === 0 ? "bg-white dark:bg-slate-800/40" : "bg-slate-50 dark:bg-slate-700/40"}>
                    <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 font-medium text-blue-700 dark:text-blue-300">{task}</td>
                    <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">{type}</td>
                    <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">{q}</td>
                    <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">{skills}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Complete List Overview */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            TOEFL Reading Question Types: The Complete List
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            For the Read in Daily Life task there are <strong>5 question types</strong>. For the Academic Passage
            task there are <strong>7 question types</strong>. Some overlap; two types are exclusive to academic
            passages and are new in 2026.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm md:text-base">
              <thead>
                <tr className="bg-blue-600 dark:bg-blue-700 text-white">
                  <th className="border border-blue-500 px-4 py-3 font-semibold">Question Type</th>
                  <th className="border border-blue-500 px-4 py-3 font-semibold">Appears In</th>
                  <th className="border border-blue-500 px-4 py-3 font-semibold">What It Tests</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Main Purpose / Big Picture", "Read in Daily Life", "Why was this text written?"],
                  ["Detail", "Both tasks", "Specific facts: dates, prices, steps, locations"],
                  ["Vocabulary in Context", "Both tasks", "Word meaning from surrounding context"],
                  ["Inference", "Both tasks", "Reading between the lines"],
                  ["Rhetorical Purpose", "Both tasks", "Why the writer included a specific detail"],
                  ["Negative Factual (NOT/EXCEPT)", "Both tasks", "Which option is NOT mentioned or NOT true"],
                  ["Important Idea (Select the Sentence) ★ New", "Academic Passage", "Click the sentence that expresses a specific idea"],
                  ["Paragraph Relationship ★ New", "Academic Passage", "How one paragraph relates to another"],
                ].map(([type, appears, tests], i) => (
                  <tr key={type} className={i % 2 === 0 ? "bg-white dark:bg-slate-800/40" : "bg-slate-50 dark:bg-slate-700/40"}>
                    <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 font-medium text-slate-800 dark:text-slate-200">
                      {type.includes('★') ? (
                        <>{type.replace(' ★ New', '')} <span className="text-xs font-bold text-teal-600 dark:text-teal-400 ml-1">★ NEW</span></>
                      ) : type}
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">{appears}</td>
                    <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">{tests}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Read in Daily Life Question Types */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2 pb-2 border-b border-slate-200 dark:border-slate-700">
            Read in Daily Life Question Types (Task 2)
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Short everyday texts, emails, notices, social media posts, text message chains, menus, flyers,
            advertisements, and invoices. Each text is 15-150 words with 2-3 multiple-choice questions.
            Once you submit an answer, you cannot change it.
          </p>
          <div className="space-y-6">
            {dailyLifeTypes.map((qt) => (
              <div key={qt.number} className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
                <div className="bg-blue-600 dark:bg-blue-700 px-5 py-3 flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-white text-blue-700 font-bold text-sm flex items-center justify-center flex-shrink-0">{qt.number}</span>
                  <h3 className="text-white font-bold text-lg">{qt.name}</h3>
                </div>
                <div className="p-5 space-y-3">
                  <p className="text-slate-700 dark:text-slate-300">
                    <span className="font-semibold text-slate-900 dark:text-slate-100">What it tests: </span>{qt.tests}
                  </p>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-slate-100 mb-1">How to recognize it:</p>
                    <ul className="list-none space-y-1">
                      {qt.signals.map((s, i) => (
                        <li key={i} className="text-slate-600 dark:text-slate-400 italic text-sm">{s}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">
                    <span className="font-semibold text-slate-900 dark:text-slate-100">Strategy: </span>{qt.strategy}
                  </p>
                  {qt.example && (
                    <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
                      <p className="font-semibold text-slate-800 dark:text-slate-200 text-sm mb-2">Real Example:</p>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-2"><em>Text: {qt.example.text}</em></p>
                      <p className="text-slate-700 dark:text-slate-300 text-sm mb-2">Question: {qt.example.question}</p>
                      {qt.example.options.length > 0 && (
                        <ul className="text-slate-600 dark:text-slate-400 text-sm mb-2 space-y-0.5">
                          {qt.example.options.map((o, i) => <li key={i}>{o}</li>)}
                        </ul>
                      )}
                      <p className="text-green-700 dark:text-green-400 text-sm font-medium">✔ {qt.example.answer}</p>
                    </div>
                  )}
                  <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 pl-4 py-2 rounded-r-lg">
                    <p className="text-green-800 dark:text-green-200 text-sm">
                      <span className="font-semibold">Quick tip: </span>{qt.tip}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Read an Academic Passage Question Types */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2 pb-2 border-b border-slate-200 dark:border-slate-700">
            Read an Academic Passage Question Types (Task 3)
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Academic passages are about <strong>200 words</strong> long, much shorter than the old 700-word
            passages. Topics include science, history, business, art, or social studies. Background knowledge is
            never required. Each passage has 5 questions and no paragraph indicators, you must search the whole
            passage.
          </p>
          <div className="space-y-6">
            {academicTypes.map((qt) => (
              <div key={qt.number} className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
                <div className={`px-5 py-3 flex items-center gap-3 ${qt.isNew ? 'bg-teal-600 dark:bg-teal-700' : 'bg-slate-700 dark:bg-slate-600'}`}>
                  <span className={`w-7 h-7 rounded-full font-bold text-sm flex items-center justify-center flex-shrink-0 ${qt.isNew ? 'bg-white text-teal-700' : 'bg-white text-slate-700'}`}>{qt.number}</span>
                  <h3 className="text-white font-bold text-lg">
                    {qt.name}
                    {qt.isNew && <span className="ml-2 text-xs bg-white text-teal-700 px-2 py-0.5 rounded-full font-bold">NEW 2026</span>}
                  </h3>
                </div>
                <div className="p-5 space-y-3">
                  <p className="text-slate-700 dark:text-slate-300">
                    <span className="font-semibold text-slate-900 dark:text-slate-100">What it tests: </span>{qt.tests}
                  </p>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-slate-100 mb-1">How to recognize it:</p>
                    <ul className="list-none space-y-1">
                      {qt.signals.map((s, i) => (
                        <li key={i} className="text-slate-600 dark:text-slate-400 italic text-sm">{s}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">
                    <span className="font-semibold text-slate-900 dark:text-slate-100">Strategy: </span>{qt.strategy}
                  </p>
                  {qt.example && (
                    <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
                      <p className="font-semibold text-slate-800 dark:text-slate-200 text-sm mb-2">Real Example:</p>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-2"><em>Text: {qt.example.text}</em></p>
                      <p className="text-slate-700 dark:text-slate-300 text-sm mb-2">Question: {qt.example.question}</p>
                      {qt.example.options.length > 0 && (
                        <ul className="text-slate-600 dark:text-slate-400 text-sm mb-2 space-y-0.5">
                          {qt.example.options.map((o, i) => <li key={i}>{o}</li>)}
                        </ul>
                      )}
                      <p className="text-green-700 dark:text-green-400 text-sm font-medium">✔ {qt.example.answer}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Comparison Table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Quick Comparison: Daily Life vs. Academic Question Types
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm md:text-base">
              <thead>
                <tr className="bg-blue-600 dark:bg-blue-700 text-white">
                  <th className="border border-blue-500 px-4 py-3 font-semibold">Question Type</th>
                  <th className="border border-blue-500 px-4 py-3 font-semibold text-center">Read in Daily Life</th>
                  <th className="border border-blue-500 px-4 py-3 font-semibold text-center">Academic Passage</th>
                  <th className="border border-blue-500 px-4 py-3 font-semibold">Difficulty</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Main Purpose / Big Picture", "✓", "-", "Easy"],
                  ["Detail", "✓", "✓", "Easy-Medium"],
                  ["Vocabulary in Context", "✓", "✓", "Medium"],
                  ["Inference", "✓", "✓", "Medium-Hard"],
                  ["Rhetorical Purpose", "✓", "✓", "Medium"],
                  ["Negative Factual (NOT/EXCEPT)", "✓", "✓", "Medium-Hard"],
                  ["Important Idea ★ New", "-", "✓", "Hard (New)"],
                  ["Paragraph Relationship ★ New", "-", "✓", "Hard (New)"],
                ].map(([type, daily, academic, diff], i) => (
                  <tr key={type} className={i % 2 === 0 ? "bg-white dark:bg-slate-800/40" : "bg-slate-50 dark:bg-slate-700/40"}>
                    <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 font-medium text-slate-800 dark:text-slate-200">
                      {type.includes('★') ? (
                        <>{type.replace(' ★ New', '')} <span className="text-xs font-bold text-teal-600 dark:text-teal-400 ml-1">★ NEW</span></>
                      ) : type}
                    </td>
                    <td className={`border border-slate-300 dark:border-slate-600 px-4 py-3 text-center font-semibold ${daily === '✓' ? 'text-green-600 dark:text-green-400' : 'text-slate-400'}`}>{daily}</td>
                    <td className={`border border-slate-300 dark:border-slate-600 px-4 py-3 text-center font-semibold ${academic === '✓' ? 'text-green-600 dark:text-green-400' : 'text-slate-400'}`}>{academic}</td>
                    <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">{diff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 5 Universal Strategies */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            5 Universal Strategies That Work Across All Question Types
          </h2>
          <div className="space-y-4">
            {universalStrategies.map((s) => (
              <div key={s.n} className="flex gap-4 bg-white dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700 p-5 rounded-xl">
                <span className="w-9 h-9 rounded-full bg-blue-600 text-white font-bold text-lg flex items-center justify-center flex-shrink-0 mt-0.5">{s.n}</span>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-slate-100 mb-1">{s.title}</p>
                  <p className="text-slate-700 dark:text-slate-300">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Common Mistakes Table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Common Mistakes by Question Type
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm md:text-base">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-700">
                  <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 font-semibold text-slate-800 dark:text-slate-200">Question Type</th>
                  <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 font-semibold text-slate-800 dark:text-slate-200">Most Common Mistake</th>
                  <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 font-semibold text-slate-800 dark:text-slate-200">Fix</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Main Purpose", "Choosing a detail instead of the overall purpose", "Read the whole text first, then choose"],
                  ["Detail", "Picking the option that uses the same words as the passage (but wrong meaning)", "Check context, not just keywords"],
                  ["Vocabulary in Context", "Using the dictionary definition instead of context meaning", "Read the surrounding sentences first"],
                  ["Inference", "Going too far, choosing options not supported by the text", "Stay close to what the text actually says"],
                  ["Rhetorical Purpose", "Choosing the content of the detail, not its function", 'Ask "why is this here?" not "what is this?"'],
                  ["NOT/EXCEPT", "Forgetting to flip the logic", "Eliminate what IS mentioned; what's left is the answer"],
                  ["Important Idea", "Clicking too fast without checking the whole passage", "Read all candidate sentences before clicking"],
                  ["Paragraph Relationship", "Guessing based on topic, not structure", "Read both paragraphs and identify the logical link"],
                ].map(([type, mistake, fix], i) => (
                  <tr key={type} className={i % 2 === 0 ? "bg-white dark:bg-slate-800/40" : "bg-slate-50 dark:bg-slate-700/40"}>
                    <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 font-medium text-slate-800 dark:text-slate-200 whitespace-nowrap">{type}</td>
                    <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-red-700 dark:text-red-400">{mistake}</td>
                    <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-green-700 dark:text-green-400">{fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Sample Practice Set */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Sample Full Practice Set (Daily Life + Academic)
          </h2>

          {/* Daily Life Sample */}
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">Daily Life Sample: Farmers' Market Social Media Post</h3>
          <div className="bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-700 rounded-xl p-5 mb-5">
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">Sample Text</p>
            <p className="text-slate-700 dark:text-slate-300 italic text-sm">
              A social media post by Sofia Baker describing a Saturday farmers' market with fresh produce, a popular
              organic stall by the Thompson family, a busy bakery stall with treats that sell out quickly, handmade
              crafts, and live music.
            </p>
          </div>
          <div className="space-y-3 mb-8">
            {[
              {
                label: "Q1 (Main Purpose)",
                q: "What is the main purpose of the post?",
                options: ["A) To explain the health benefits of organic farming", "B) To describe the variety of products at the market", "C) To compare several markets in the area", "D) To give advice on starting a market stall"],
                answer: "B, The post describes many different stalls, showing the variety of what the market offers."
              },
              {
                label: "Q2 (Detail)",
                q: "Why is the Thompson family's stall especially popular?",
                options: ["A) They give cooking tips and recipes", "B) They sell items at the lowest prices", "C) They offer excellent organic produce and friendly service", "D) Their stall design is especially beautiful"],
                answer: "C, The post describes the stall as a \"must-visit\" for high-quality produce and cordial service."
              },
              {
                label: "Q3 (Inference)",
                q: "Why do customers visit the bakery stall early?",
                options: ["A) To get free samples in the morning", "B) To buy freshly baked goods before they sell out", "C) To meet a famous baker", "D) To receive early-morning discounts"],
                answer: "B, The post says the treats \"disappear quickly,\" implying they sell out."
              }
            ].map((item) => (
              <div key={item.label} className="bg-white dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700 rounded-lg p-4">
                <p className="font-semibold text-slate-800 dark:text-slate-200 mb-1">{item.label}: {item.q}</p>
                <ul className="text-slate-600 dark:text-slate-400 text-sm mb-2 space-y-0.5">
                  {item.options.map((o, i) => <li key={i}>{o}</li>)}
                </ul>
                <p className="text-green-700 dark:text-green-400 text-sm font-medium">✔ Answer: {item.answer}</p>
              </div>
            ))}
          </div>

          {/* Academic Sample */}
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">Academic Passage Sample: Urban Trees</h3>
          <div className="bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-700 rounded-xl p-5 mb-5">
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">Sample Passage (~200 words)</p>
            <p className="text-slate-700 dark:text-slate-300 text-sm italic">
              Urban trees provide significant environmental, health, social, and psychological benefits. They remove
              pollutants from the air and help city residents cope with rising temperatures. Research shows that
              neighborhoods with mature trees have lower crime rates, stronger community involvement, and residents
              who report lower stress levels. However, urban development often harms trees, construction projects
              compact soil, damage roots, and cut off water supply, threatening long-term tree health.
            </p>
          </div>
          <div className="space-y-3">
            {[
              { label: "Q1 (Factual)", q: "According to the passage, what is one way urban trees contribute to public health?", answer: "C) By removing pollutants, directly stated. (Not \"reducing temperatures\", they help people cope, not lower temps.)" },
              { label: "Q2 (Negative Factual)", q: "Which is NOT mentioned as a social or psychological benefit?", answer: "C) Higher income levels, crime rates, stress, and community involvement are all mentioned; income is not." },
              { label: "Q3 (Rhetorical Purpose)", q: "Why does the author discuss construction projects?", answer: "B) To show how urban development can unintentionally harm trees." },
              { label: "Q4 (Vocabulary)", q: '"Compounded" is closest in meaning to:', answer: "C) intensified" },
              { label: "Q5 (Important Idea ★)", q: "Click the sentence that expresses why people in tree-lined areas might be happier.", answer: "Paragraph 2, sentence 3, the sentence about lower stress and community connection." },
            ].map((item) => (
              <div key={item.label} className="bg-white dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700 rounded-lg p-4">
                <p className="font-semibold text-slate-800 dark:text-slate-200 mb-1">{item.label}: {item.q}</p>
                <p className="text-green-700 dark:text-green-400 text-sm font-medium">✔ Answer: {item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((item) => (
              <div key={item.name} className="bg-slate-50 dark:bg-slate-700/50 p-5 rounded-lg">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Q: {item.name}</h3>
                <p className="text-slate-700 dark:text-slate-300">A: {item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">Start Practicing Every Question Type Today</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            The fastest way to improve your TOEFL reading score is to practice each question type separately before
            combining them in full-length practice sets. Focus especially on the two new question types
            (Important Idea and Paragraph Relationship), since most prep materials have not yet caught up with
            the 2026 format.
          </p>
          <p className="text-slate-600 dark:text-slate-400">
            Explore these related guides:
          </p>
          <ul className="mt-3 space-y-2 text-lg">
            <li><Link to="/toefl/toefl-reading/toefl-reading-section-explained/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">→ TOEFL Reading Section Explained (2026 Format)</Link></li>
            <li><Link to="/toefl/toefl-reading/toefl-reading-strategies/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">→ TOEFL Reading Strategies</Link></li>
            <li><Link to="/toefl/toefl-reading/toefl-daily-life-reading-task/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">→ TOEFL Daily Life Reading Task Guide</Link></li>
            <li><Link to="/toefl/toefl-reading/toefl-reading-practice-questions/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">→ TOEFL Reading Practice Questions</Link></li>
            <li><Link to="/toefl/toefl-reading/toefl-reading-time-management/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">→ TOEFL Reading Time Management</Link></li>
          </ul>
        </section>

        <p className="text-xs text-slate-500 dark:text-slate-500 border-t border-slate-200 dark:border-slate-700 pt-4">
          Source: All official data in this article is based on the ETS TOEFL iBT specifications (
          <a href="https://www.ets.org/toefl.html" target="_blank" rel="noopener noreferrer" className="hover:underline">ets.org/toefl</a>).
        </p>
      </article>
    </>
  );
};

export default TOEFLReadingQuestionTypesPage;
