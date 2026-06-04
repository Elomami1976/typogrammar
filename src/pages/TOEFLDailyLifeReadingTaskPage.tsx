import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import SchemaMarkup from '../components/SchemaMarkup';

const TOEFLDailyLifeReadingTaskPage: React.FC = () => {
  usePageMetadata({
    title: 'TOEFL Daily Life Reading Task: What It Is + How to Ace It | TypoGrammar',
    description: 'Learn what the TOEFL Read in Daily Life task is, which question types appear, and expert strategies to ace it, updated for the 2026 TOEFL iBT format.',
    canonical: 'https://typogrammar.com/toefl/toefl-reading/toefl-daily-life-reading-task/'
  });

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "TOEFL Daily Life Reading Task: What It Is + How to Ace It",
    "description": "Learn what the TOEFL Read in Daily Life task is, which question types appear, and expert strategies to ace it, updated for the 2026 TOEFL iBT format.",
    "author": { "@type": "Organization", "name": "TypoGrammar" },
    "publisher": {
      "@type": "Organization",
      "name": "TypoGrammar",
      "logo": { "@type": "ImageObject", "url": "https://typogrammar.com/logo.png" }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://typogrammar.com/toefl/toefl-reading/toefl-daily-life-reading-task"
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
        "name": "What is the TOEFL daily life reading task?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Read in Daily Life task is one of three reading task types on the 2026 TOEFL iBT. You read short, real-world texts, such as emails, notices, or social media posts, and answer 2 to 3 multiple-choice questions about the main purpose, key details, or inferences."
        }
      },
      {
        "@type": "Question",
        "name": "When was the Read in Daily Life task added to the TOEFL?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ETS introduced this task as part of the major TOEFL iBT update on March 29, 2026. The new format includes a mix of real-world and academic reading tasks."
        }
      },
      {
        "@type": "Question",
        "name": "How long is the Read in Daily Life text on the TOEFL?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Texts range from 15 to 150 words. Short texts (around 40-50 words) come with 2 questions. Longer texts (around 100-140 words) come with 3 questions."
        }
      },
      {
        "@type": "Question",
        "name": "Is the TOEFL daily life reading task easy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It is considered the most accessible reading task on the TOEFL iBT. The texts are short and practical, and correct answers are usually directly stated or clearly implied. Focused preparation makes it very achievable."
        }
      },
      {
        "@type": "Question",
        "name": "What question types appear in the Read in Daily Life task?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The five question types are: Big Picture (main purpose), Detail (specific facts), Vocabulary in Context (word meaning), Inference (reading between the lines), and Rhetorical Purpose (why the writer included something)."
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

  const questionTypes = [
    {
      number: 1,
      name: "Big Picture",
      tests: "The main purpose or main idea of the text.",
      signals: '"What is the main purpose of this email?" / "What is the message mainly about?"',
      example: '"What is the main purpose of this email?" → To remind the test-taker about their driving exam.',
      tip: "Ask yourself: Why did the writer send this? The answer is almost always in the first one or two sentences."
    },
    {
      number: 2,
      name: "Detail",
      tests: "Specific facts such as dates, times, prices, or locations.",
      signals: '"What time should the test-taker arrive?" / "How much does the item cost?"',
      example: '"What time should the test-taker arrive?" → 8:45 AM (the exam is at 9:00 AM and the email says to arrive 15 minutes early).',
      tip: "Scan the text for numbers, dates, and capitalized words. Detail questions point to concrete information that is directly stated."
    },
    {
      number: 3,
      name: "Vocabulary in Context",
      tests: 'The meaning of a word or phrase based on the surrounding context.',
      signals: '"What does \'renew\' most likely mean in the email?" / "The word \'complimentary\' is closest in meaning to..."',
      example: '"What does \'renew\' most likely mean?" → To extend or update something that is expiring.',
      tip: "Replace the target word with each answer choice in the sentence. The correct answer will fit the context naturally without changing the meaning."
    },
    {
      number: 4,
      name: "Inference",
      tests: "Reading between the lines, consequences, reasons, or unstated conclusions.",
      signals: '"What will happen if...?" / "What can be inferred from the notice?" / "What is most likely true about...?"',
      example: '"What will happen on test day if the driver has insurance for the state of New York?" → They will not be allowed to take the test.',
      tip: 'The answer is not stated word-for-word. Look for clues in conditions, requirements, or consequences described in the text.'
    },
    {
      number: 5,
      name: "Rhetorical Purpose",
      tests: "Why the writer includes a specific piece of information.",
      signals: '"Why does the email mention \'parallel parking\'?" / "The writer includes the deadline in order to..."',
      example: '"Why does the email mention parallel parking and three-point turns?" → These are key maneuvers the test-taker should practice before the exam.',
      tip: "Think about the writer's goal. Every detail in a short text serves a practical purpose, to inform, warn, remind, or instruct."
    }
  ];

  const expertTips = [
    {
      number: 1,
      title: "Read With Purpose",
      body: "Before answering any question, identify the sender, the audience, and the goal of the text. This takes about 10 seconds and prevents you from misunderstanding the overall context."
    },
    {
      number: 2,
      title: "Focus on Function, Not Vocabulary",
      body: "Pay attention to structural clues: headings, bold text, bullet lists, and action items. These elements reveal the text's purpose faster than reading every word."
    },
    {
      number: 3,
      title: "Watch for Imperative Verbs",
      body: 'Command verbs like "sign up," "enroll," "submit," and "register" reveal the writer\'s purpose. If an ad says "Sign up today for a free trial," the main purpose is to encourage enrollment. Imperative verbs are especially useful for Big Picture questions.'
    },
    {
      number: 4,
      title: "Understand Common Idiomatic and Informal Language",
      body: 'Daily life texts use casual language that academic passages do not. Familiarize yourself with phrases like "limited time offer," "paperless billing," and "no strings attached." The more comfortable you are with informal English, the faster you will answer.'
    },
    {
      number: 5,
      title: "Use Elimination Strategically",
      body: "When unsure, eliminate choices that: (a) add information not in the text, (b) contradict a detail, or (c) are too broad or too narrow. If you can eliminate two out of four choices, your odds improve dramatically."
    },
    {
      number: 6,
      title: "Practice With Real-World Materials",
      body: "Collect real emails, ads, menus, and social media posts (80-150 words). Write your own questions and practice under timed conditions (3-4 minutes per set). This builds the speed and familiarity you need on test day."
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
        <span className="text-slate-900 dark:text-slate-100">TOEFL Daily Life Reading Task</span>
      </nav>

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">

        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-3 tracking-tight dark:text-slate-100">
          TOEFL Daily Life Reading Task: What It Is + How to Ace It
        </h1>

        <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">Last Updated: March 2026</p>

        {/* Intro */}
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
          The TOEFL iBT changed significantly on <strong>March 29, 2026</strong>. One of the biggest additions
          is the <strong>Read in Daily Life</strong> task, a new reading task type that tests practical,
          real-world English. Whether you are preparing for the first time or retaking under the new format,
          understanding this task is essential to boosting your Reading score.
        </p>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
          In this guide, you will learn exactly what the TOEFL daily life reading task is, what question types
          to expect, and proven strategies to answer correctly. All data is from official ETS specifications
          (<a href="https://www.ets.org/toefl.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">ets.org/toefl</a>).
        </p>

        {/* What Is the Task */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            What Is the TOEFL Daily Life Reading Task?
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            The TOEFL daily life reading task (officially called <strong>"Read in Daily Life"</strong>) is
            Task 2 in the Reading section of the 2026 TOEFL iBT. It presents short, real-world texts,
            typically <strong>15 to 150 words</strong>, and asks you to answer <strong>2 to 3 multiple-choice
            questions</strong> about each text.
          </p>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            Unlike the academic passages you may be used to, these texts are <strong>non-academic</strong>.
            They include everyday materials such as emails, notices, social media posts, text message chains,
            menus, flyers, advertisements, invoices, schedules, forms, and posters.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-5 rounded-r-lg">
            <p className="text-blue-800 dark:text-blue-200">
              ETS introduced this task on <strong>March 29, 2026</strong>, shifting the exam toward
              practical, real-world English, measuring whether test-takers can understand the kind of English
              they encounter daily, not just in a classroom.
            </p>
          </div>
        </section>

        {/* How It Fits Into the 2026 TOEFL */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            How Does It Fit Into the 2026 TOEFL iBT Reading Section?
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            The 2026 TOEFL iBT Reading section contains approximately <strong>50 items in about 30 minutes</strong>.
            It uses an <strong>adaptive (multistage) format</strong>: everyone completes the same routing module,
            then receives a harder or easier second module based on performance. Score roughly 60% in routing
            to unlock the harder module and higher scores.
          </p>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
            The new scoring scale is <strong>1.0 to 6.0</strong> (CEFR-aligned), reported alongside the
            traditional 0-120 scale during the 2026-2028 transition. There are three reading task types:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse text-left text-sm md:text-base">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-700">
                  <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 font-semibold text-slate-800 dark:text-slate-200">Task</th>
                  <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 font-semibold text-slate-800 dark:text-slate-200">Description</th>
                  <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 font-semibold text-slate-800 dark:text-slate-200"># of Questions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-slate-800/40">
                  <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 font-medium text-slate-800 dark:text-slate-200">Complete the Words</td>
                  <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Fill in missing letters in a 70-100 word academic paragraph</td>
                  <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">10 (fill-in-the-blank)</td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-700/40">
                  <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 font-medium text-blue-700 dark:text-blue-300">Read in Daily Life</td>
                  <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Answer questions about short real-world texts</td>
                  <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">2-3 per set (1-2 sets)</td>
                </tr>
                <tr className="bg-white dark:bg-slate-800/40">
                  <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 font-medium text-slate-800 dark:text-slate-200">Read an Academic Passage</td>
                  <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Comprehension questions on 200-word academic texts</td>
                  <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">5 per passage</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Read in Daily Life tasks appear in both the routing and the second module. Because the texts are
            short and the questions are straightforward, this task is a <strong>quick-scoring opportunity</strong>,
            typically easier than the academic passages.
          </p>
        </section>

        {/* Text Types */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            What Types of Texts Appear in the Daily Life Task?
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            The Read in Daily Life task draws from a variety of real-world text types:
          </p>
          <div className="space-y-3 mb-6">
            {[
              { label: "Emails and notices", desc: "Messages from organizations, employers, schools, or government offices. Often include instructions, deadlines, or confirmations." },
              { label: "Social media posts and comments", desc: "Short public posts, replies, or status updates written in informal or semi-formal language." },
              { label: "Text message chains", desc: "Back-and-forth conversations between two or more people. Telegraphic language and abbreviations are common." },
              { label: "Menus and schedules", desc: "Restaurant menus, class schedules, event timetables, or transit schedules with structured data." },
              { label: "Flyers and advertisements", desc: 'Promotional materials for events, sales, services, or products. Imperative verbs ("Sign up today!") appear frequently.' },
              { label: "Invoices and forms", desc: "Bills, receipts, registration forms, or application instructions. Details like dates, prices, and steps are key." },
            ].map((item) => (
              <div key={item.label} className="flex gap-3 bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg">
                <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                <div>
                  <span className="font-semibold text-slate-900 dark:text-slate-100">{item.label}: </span>
                  <span className="text-slate-700 dark:text-slate-300">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-400 p-4 rounded-r-lg">
            <p className="text-slate-800 dark:text-slate-200">
              Text length varies. Short texts (around <strong>40-50 words</strong>) come with 2 questions.
              Longer texts (around <strong>100-140 words</strong>) come with 3 questions. You will typically
              encounter 1 to 2 sets (2 to 3 daily life tasks total) on the exam.
            </p>
          </div>
        </section>

        {/* Question Types */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            TOEFL Daily Life Reading Question Types (With Examples)
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
            The TOEFL daily life reading task features <strong>five question types</strong>. Understanding each
            type helps you identify what the question is really asking and where to find the answer.
          </p>
          <div className="space-y-6">
            {questionTypes.map((qt) => (
              <div key={qt.number} className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
                <div className="bg-blue-600 dark:bg-blue-700 px-5 py-3 flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-white text-blue-700 font-bold text-sm flex items-center justify-center flex-shrink-0">{qt.number}</span>
                  <h3 className="text-white font-bold text-lg">{qt.name}</h3>
                </div>
                <div className="p-5 space-y-3">
                  <p className="text-slate-700 dark:text-slate-300"><span className="font-semibold text-slate-900 dark:text-slate-100">What it tests: </span>{qt.tests}</p>
                  <p className="text-slate-700 dark:text-slate-300"><span className="font-semibold text-slate-900 dark:text-slate-100">Signal phrases: </span><em>{qt.signals}</em></p>
                  <p className="text-slate-700 dark:text-slate-300"><span className="font-semibold text-slate-900 dark:text-slate-100">Example: </span>{qt.example}</p>
                  <div className="bg-green-50 dark:bg-green-900/20 border-l-3 border-green-500 pl-4 py-2 rounded-r-lg">
                    <p className="text-green-800 dark:text-green-200 text-sm"><span className="font-semibold">Quick tip: </span>{qt.tip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practice Set */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            A Real Example: Read in Daily Life Practice Set
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
            Below is a sample passage simulating a real TOEFL daily life set. Read the email, then try
            answering the questions before checking the answers.
          </p>

          {/* Sample Email */}
          <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-xl overflow-hidden mb-8 shadow-sm">
            <div className="bg-slate-100 dark:bg-slate-800 px-5 py-3 border-b border-slate-300 dark:border-slate-600">
              <p className="text-sm text-slate-600 dark:text-slate-400"><strong>From:</strong> Santa Clara DMV &lt;noreply@dmv.ca.gov&gt;</p>
              <p className="text-sm text-slate-600 dark:text-slate-400"><strong>To:</strong> Li Shen &lt;li.shen@email.com&gt;</p>
              <p className="text-sm text-slate-600 dark:text-slate-400"><strong>Subject:</strong> Driving Exam Confirmation, August 13, 2025</p>
            </div>
            <div className="px-5 py-5">
              <p className="text-slate-700 dark:text-slate-300 mb-3">Dear Li Shen,</p>
              <p className="text-slate-700 dark:text-slate-300 mb-3">
                This email confirms your driving exam scheduled for <strong>August 13, 2025 at 9:00 AM</strong> at
                the Santa Clara DMV office.
              </p>
              <p className="text-slate-700 dark:text-slate-300 mb-3">
                Please arrive at least 15 minutes early. You must bring your learner's permit, a valid photo ID,
                and proof of valid California driver's insurance. <strong>Insurance from other states (e.g., New York)
                will not be accepted.</strong>
              </p>
              <p className="text-slate-700 dark:text-slate-300 mb-3">
                We recommend that you review the California Driver's Handbook and practice key maneuvers, including
                <strong> parallel parking</strong> and <strong>three-point turns</strong>.
              </p>
              <p className="text-slate-700 dark:text-slate-300 mb-3">
                If you need to reschedule, please call <strong>(408) 555-0192</strong> at least 48 hours in advance.
              </p>
              <p className="text-slate-700 dark:text-slate-300">Good luck,<br /><strong>Santa Clara DMV</strong></p>
            </div>
          </div>

          {/* Sample Q&A */}
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">Sample Questions and Answers</h3>
          <div className="space-y-4">
            {[
              {
                q: "Q1 (Big Picture): What is the main purpose of this email?",
                a: "To remind the test-taker about their upcoming driving exam and provide important instructions. The very first sentence states the email is a confirmation."
              },
              {
                q: "Q2 (Detail): What time should the test-taker arrive?",
                a: "8:45 AM. The exam is at 9:00 AM and the email says to arrive at least 15 minutes early (9:00 AM minus 15 minutes = 8:45 AM)."
              },
              {
                q: "Q3 (Vocabulary in Context): What does \"renew\" most likely mean in this context?",
                a: "To extend or update something that is expiring. In this context, it relates to making sure documents or insurance are current and valid."
              },
              {
                q: "Q4 (Inference): What will happen on test day if the driver has insurance for the state of New York?",
                a: "They will not be allowed to take the test. The email explicitly states that insurance from other states will not be accepted, only valid California driver's insurance."
              },
              {
                q: "Q5 (Rhetorical Purpose): Why does the email mention \"parallel parking and three-point turns\"?",
                a: "These are key driving maneuvers the test-taker should practice before the exam. The writer includes them to help the reader prepare effectively."
              }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 dark:bg-slate-700/50 p-5 rounded-lg">
                <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">{item.q}</p>
                <p className="text-slate-700 dark:text-slate-300"><span className="text-green-600 dark:text-green-400 font-semibold">Answer: </span>{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4-Step Strategy */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            4-Step Strategy to Answer Every Question
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
            Follow this strategy every time you encounter a Read in Daily Life question set. With practice,
            each question will take less than 60 seconds.
          </p>
          <div className="space-y-4">
            {[
              {
                step: 1,
                title: "Read the text first (skim for sender, audience, and goal)",
                body: "Before looking at any question, read the entire text quickly. Identify: Who sent this? Who is the audience? What is the purpose? This quick scan gives you a framework for every question."
              },
              {
                step: 2,
                title: "Identify the question type",
                body: "Is it asking for the main purpose (Big Picture), a specific fact (Detail), a word meaning (Vocabulary in Context), a logical conclusion (Inference), or a reason for including something (Rhetorical Purpose)? Knowing the type tells you where to look."
              },
              {
                step: 3,
                title: "Find keywords in the text",
                body: 'Locate the specific words or sentences that relate to the question. For detail questions, look for numbers, dates, and names. For inference questions, look for conditions ("if," "must," "only").'
              },
              {
                step: 4,
                title: "Choose the best answer (use elimination)",
                body: "Read all answer choices. Eliminate any option that adds information not in the text, contradicts the text, or is only partially correct. Choose the answer most fully supported by the text."
              }
            ].map((s) => (
              <div key={s.step} className="flex gap-4 bg-white dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700 p-5 rounded-xl">
                <span className="w-9 h-9 rounded-full bg-blue-600 text-white font-bold text-lg flex items-center justify-center flex-shrink-0 mt-0.5">{s.step}</span>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-slate-100 mb-1">{s.title}</p>
                  <p className="text-slate-700 dark:text-slate-300">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6 Expert Tips */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            6 Expert Tips to Ace the TOEFL Daily Life Reading Task
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
            Apply these six tips to maximize your score on the TOEFL daily life reading task.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {expertTips.map((tip) => (
              <div key={tip.number} className="bg-slate-50 dark:bg-slate-700/50 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">{tip.number}</span>
                  <h3 className="font-bold text-slate-900 dark:text-slate-100">{tip.title}</h3>
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-sm">{tip.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Common Mistakes to Avoid
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            Even strong English readers make these mistakes. Awareness is the first step to avoiding them.
          </p>
          <div className="space-y-3">
            {[
              { mistake: "Overanalyzing simple texts", fix: 'These texts are short and direct. If a flyer says "Sale ends Sunday," the answer is Sunday, no deeper analysis needed.' },
              { mistake: "Translating word by word", fix: "Translating every word into your native language slows you down. Focus on overall meaning and function instead." },
              { mistake: "Ignoring titles and headings", fix: '"Driving Exam Confirmation" immediately tells you the main purpose. Subject lines and headings contain critical clues.' },
              { mistake: "Skimming too fast and missing key phrases", fix: 'Short texts pack meaning into few words. A phrase like "Insurance from other states will not be accepted" can be the key to a correct answer. Read carefully.' },
            ].map((item) => (
              <div key={item.mistake} className="flex gap-3 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 p-4 rounded-lg">
                <span className="text-red-500 mt-1 text-xl flex-shrink-0">✘</span>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-slate-100">{item.mistake}</p>
                  <p className="text-slate-700 dark:text-slate-300 text-sm mt-1">{item.fix}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How to Practice */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            How to Practice for the Daily Life Task
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
            Consistent, targeted practice is the fastest way to improve on the Read in Daily Life task.
            Follow this four-step routine:
          </p>
          <div className="space-y-3">
            {[
              { n: 1, text: "Collect real everyday texts. Gather emails, notices, social media posts, and advertisements (80-150 words). The more variety, the better." },
              { n: 2, text: "Write your own questions. For each text, write four questions: one Big Picture, two detail, and one inference. This forces you to think like the test maker." },
              { n: 3, text: "Practice under timed conditions. Give yourself 3-4 minutes per set. Use a timer. Speed and accuracy matter equally on the TOEFL." },
              { n: 4, text: 'Review wording traps. Watch for NOT, EXCEPT, and FALSE in questions. These ask you to find the incorrect or unmentioned answer. Many test-takers lose points by rushing past these qualifiers.' },
            ].map((item) => (
              <div key={item.n} className="flex gap-4 bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg">
                <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center flex-shrink-0">{item.n}</span>
                <p className="text-slate-700 dark:text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            For official TOEFL practice materials, visit{' '}
            <a href="https://www.ets.org/toefl.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">ets.org/toefl</a>.
            You can also explore our{' '}
            <Link to="/toefl/toefl-reading/toefl-reading-practice-questions/" className="text-blue-600 dark:text-blue-400 hover:underline">TOEFL Reading Practice Questions</Link>{' '}
            for additional sets.
          </p>
        </section>

        {/* Quick Reference Table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Quick-Reference Summary Table
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">Use this table as a fast review before test day:</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm md:text-base">
              <thead>
                <tr className="bg-blue-600 dark:bg-blue-700 text-white">
                  <th className="border border-blue-500 dark:border-blue-600 px-4 py-3 font-semibold">Element</th>
                  <th className="border border-blue-500 dark:border-blue-600 px-4 py-3 font-semibold">Details</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Task name", "Read in Daily Life"],
                  ["Task position", "Task 2 in the Reading section"],
                  ["Text length", "15-150 words"],
                  ["# of questions", "2-3 per set"],
                  ["Time budget", "~3-4 minutes per set (~45-60 seconds per question)"],
                  ["Text types", "Emails, notices, social media posts, flyers, menus, text message chains, invoices, forms"],
                  ["Question types", "Big Picture, Detail, Vocabulary in Context, Inference, Rhetorical Purpose"],
                  ["Scoring scale", "1.0-6.0 (2026 TOEFL iBT, CEFR-aligned)"],
                ].map(([el, detail], i) => (
                  <tr key={el} className={i % 2 === 0 ? "bg-white dark:bg-slate-800/40" : "bg-slate-50 dark:bg-slate-700/40"}>
                    <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 font-medium text-slate-800 dark:text-slate-200">{el}</td>
                    <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">{detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "What is the TOEFL daily life reading task?",
                a: "The Read in Daily Life task is one of three reading task types on the 2026 TOEFL iBT. You read short, real-world texts, such as emails, notices, or social media posts, and answer 2 to 3 multiple-choice questions about the main purpose, key details, or inferences."
              },
              {
                q: "When was the Read in Daily Life task added to the TOEFL?",
                a: "ETS introduced this task as part of the major TOEFL iBT update on March 29, 2026. The new format includes a mix of real-world and academic reading tasks."
              },
              {
                q: "How long is the Read in Daily Life text on the TOEFL?",
                a: "Texts range from 15 to 150 words. Short texts (around 40-50 words) come with 2 questions. Longer texts (around 100-140 words) come with 3 questions."
              },
              {
                q: "Is the TOEFL daily life reading task easy?",
                a: "It is considered the most accessible reading task on the TOEFL iBT. The texts are short and practical, and correct answers are usually directly stated or clearly implied. Focused preparation makes it very achievable."
              },
              {
                q: "What question types appear in the Read in Daily Life task?",
                a: "The five question types are: Big Picture (main purpose), Detail (specific facts), Vocabulary in Context (word meaning), Inference (reading between the lines), and Rhetorical Purpose (why the writer included something)."
              }
            ].map((item) => (
              <div key={item.q} className="bg-slate-50 dark:bg-slate-700/50 p-5 rounded-lg">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Q: {item.q}</h3>
                <p className="text-slate-700 dark:text-slate-300">A: {item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">
            Start Preparing Today
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            The TOEFL daily life reading task is one of the best opportunities to earn quick, confident points
            on the Reading section. Bookmark this guide and practice with real-world texts daily, even 10
            minutes builds the skills you need.
          </p>
          <p className="text-slate-600 dark:text-slate-400 mb-2">
            For more detailed guidance on the other reading tasks, check out our{' '}
            <Link to="/toefl/toefl-reading/toefl-reading-question-types/" className="text-blue-600 dark:text-blue-400 hover:underline">TOEFL Reading Question Types</Link>{' '}
            and{' '}
            <Link to="/toefl/toefl-reading/toefl-reading-strategies/" className="text-blue-600 dark:text-blue-400 hover:underline">TOEFL Reading Strategies</Link>{' '}
            guides. You can also explore our{' '}
            <Link to="/toefl/toefl-reading/toefl-reading-practice-questions/" className="text-blue-600 dark:text-blue-400 hover:underline">TOEFL Reading Practice Questions</Link>{' '}
            to simulate the real exam experience.
          </p>
          <p className="text-slate-500 dark:text-slate-500 text-sm mt-4">Good luck on your TOEFL journey!</p>
        </section>

        <p className="text-xs text-slate-500 dark:text-slate-500 border-t border-slate-200 dark:border-slate-700 pt-4">
          Source: All official data in this article is based on the ETS TOEFL iBT specifications (
          <a href="https://www.ets.org/toefl.html" target="_blank" rel="noopener noreferrer" className="hover:underline">ets.org/toefl</a>
          ).
        </p>

        {/* Related Links */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">Related TOEFL Reading Guides</h2>
          <ul className="space-y-2 text-lg">
            <li>
              <Link to="/toefl/toefl-reading/toefl-reading-section-explained/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → TOEFL Reading Section Explained (2026 Format)
              </Link>
            </li>
            <li>
              <Link to="/toefl/toefl-reading/toefl-reading-question-types/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → TOEFL Reading Question Types
              </Link>
            </li>
            <li>
              <Link to="/toefl/toefl-reading/toefl-reading-strategies/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → TOEFL Reading Strategies
              </Link>
            </li>
            <li>
              <Link to="/toefl/toefl-reading/toefl-reading-practice-questions/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → TOEFL Reading Practice Questions
              </Link>
            </li>
            <li>
              <Link to="/toefl/toefl-reading/toefl-reading-time-management/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                → TOEFL Reading Time Management
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
};

export default TOEFLDailyLifeReadingTaskPage;
