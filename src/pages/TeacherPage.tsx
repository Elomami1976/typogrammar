import React, { useState } from 'react';
import GoogleAd from '../components/GoogleAd';
import { ArticleHeading, ArticleParagraph } from '../components/ArticleComponents';
import usePageMetadata from '../hooks/usePageMetadata';
import SchemaMarkup from '../components/SchemaMarkup';

const prompts = [
  {
    title: "Complete Language Course Framework",
    text: "You are an experienced ESL instructor specializing in curriculum development. Design a full-year English language program covering essential skills from foundational to advanced levels. Structure your curriculum to address: sentence construction, word usage, text interpretation, composition techniques, and critical analysis of literature. Include differentiated instruction strategies to accommodate visual, auditory, and kinesthetic learners. Integrate digital tools and authentic materials. Define measurable outcomes for each unit and describe varied assessment approaches including formative and summative evaluations."
  },
  {
    title: "Engaging Classroom Activities Generator",
    text: "Design 5 student-centered learning activities suitable for pre-intermediate (A2) English learners focusing on [Your chosen topic]. Each activity should promote active participation, peer interaction, and practical language use. Include materials needed, step-by-step procedures, and estimated time for completion."
  },
  {
    title: "Vocabulary Practice Sheet Creator",
    text: "Develop a comprehensive vocabulary exercise for elementary (A2) learners centered on '[Your selected theme]'. Structure the worksheet with three distinct sections: 1) word-definition pairing exercises, 2) contextual gap-fill sentences, and 3) situational multiple-choice scenarios. Append a complete answer guide for teacher reference."
  },
  {
    title: "Reading Passage with Questions",
    text: "Compose an original informational text of approximately 150-200 words appropriate for upper-intermediate (B2) students exploring '[Your chosen subject]'. Following the passage, develop 5 critical thinking questions that assess both literal comprehension and inferential understanding. Mix question formats between selected-response and constructed-response items."
  },
  {
    title: "Grammar Practice Builder",
    text: "Design a 10-item grammar practice set for intermediate (B1) students targeting [Your selected grammar structure]. Incorporate diverse exercise formats including error correction, sentence transformation, gap-filling, and application tasks. Provide detailed answer explanations showing why each answer is correct."
  },
  {
    title: "Creative Assignment Ideas",
    text: "Propose 3 innovative homework tasks for pre-intermediate (A2) learners to extend classroom learning on '[Your topic of choice]'. Each assignment should encourage creativity, real-world language application, and independent thinking while remaining achievable for this proficiency level."
  },
  {
    title: "Effective Class Leadership Strategies",
    text: "Share 5 evidence-based classroom management techniques specifically designed for intermediate (B1) English language classrooms. Address strategies for maintaining student engagement, establishing clear expectations, managing transitions, encouraging participation from reluctant speakers, and creating a supportive learning environment."
  },
  {
    title: "Differentiated Instruction Planner",
    text: "Create a lesson plan template for teaching [Your grammar or vocabulary topic] that includes three tiered activities addressing different proficiency levels within the same classroom (A2, B1, B2). Explain how each tier maintains the same learning objective while adjusting complexity, support, and output expectations."
  },
  {
    title: "Assessment Design Tool",
    text: "Construct a balanced assessment instrument for evaluating student mastery of [Your chosen language skill or topic]. Include at least 15 items spanning multiple difficulty levels and question types. Provide a detailed scoring rubric with clear criteria for each proficiency band."
  },
  {
    title: "Error Analysis Exercise",
    text: "Generate 8-10 sentences containing common grammatical errors typically made by [Your target proficiency level] English learners. Each sentence should contain one specific error related to [Your chosen grammar area]. Include the corrected versions with brief explanations of the grammar rule violated."
  },
  {
    title: "Lesson Plan Generator",
    text: "Create a 60-minute English lesson plan for intermediate students on the topic of travel vocabulary. Include learning objectives, warm-up, main activity, and homework suggestions."
  },
  {
    title: "Grammar Explanation and Practice",
    text: "Explain the difference between the past perfect and past simple tense with simple examples. Then, generate 5 fill-in-the-blank exercises and an answer key for A2-level learners."
  },
  {
    title: "Speaking Practice Prompts",
    text: "Generate 10 conversation questions for B1-level English learners about daily routines that encourage full-sentence responses and use of present tense verbs."
  },
  {
    title: "Writing Task Creator (IELTS/TOEFL Focus)",
    text: "Write one IELTS Writing Task 2 question about technology and education. Then, provide a band 8 sample essay and a list of useful vocabulary related to the topic."
  },
  {
    title: "Vocabulary Expansion Activity",
    text: "Create a short vocabulary list of 15 advanced adjectives for describing people's personalities. Include definitions, example sentences, and a short quiz."
  },
  {
    title: "Reading Comprehension Exercise",
    text: "Write a 200-word reading passage for B2 learners about the benefits of online learning. Then create 5 comprehension questions and 3 discussion questions."
  },
  {
    title: "Role-Play Scenarios for Speaking Class",
    text: "Provide 5 short role-play ideas for ESL students to practice customer service English in a restaurant setting. Include role descriptions and example useful phrases."
  },
  {
    title: "Error Correction Practice",
    text: "Give me 10 sentences with common grammar mistakes made by intermediate English learners. Then, corrected versions with explanations."
  },
  {
    title: "Listening Activity Script",
    text: "Write a short listening dialogue (around 1 minute long) between two friends planning a weekend trip. Then, provide comprehension questions and vocabulary notes."
  },
  {
    title: "Assessment Rubric Maker",
    text: "Create a simple rubric (1–5 scale) for assessing students' English speaking performance, focusing on fluency, pronunciation, vocabulary use, and accuracy."
  },
  {
    title: "Story Cube Generator",
    text: "Create 9 random 'story cubes' for B1 learners: each cube should have a word or image description (e.g. 'key', 'storm', 'clock'). Then give instructions and an example story using at least 5 of them."
  },
  {
    title: "Classroom Debate Kit",
    text: "Design a classroom debate activity for B2 students on the topic 'Should smartphones be banned in schools?'. Include: roles, useful phrases for agreeing/disagreeing, and 8 discussion questions."
  },
  {
    title: "Email Writing Workshop",
    text: "Create a mini-lesson for B1–B2 students on writing polite emails in English. Include a short explanation, a model email, a transformation exercise (informal → formal), and an error-correction task."
  },
  {
    title: "Culture & Speaking Activity",
    text: "Prepare 10 discussion questions about cultural differences in food, festivals, and daily life for mixed-level ESL classes. Include easier versions (A2–B1) and more advanced versions (B2–C1)."
  },
  {
    title: "Gamified Vocabulary Review",
    text: "Design a vocabulary revision game for online or in-person classes using 20 phrasal verbs with 'get'. Provide the verb list with example sentences, plus clear game rules and scoring."
  },
  {
    title: "Pronunciation Drill Builder",
    text: "Create a pronunciation practice activity for B1 learners focusing on minimal pairs (e.g., ship/sheep, bat/bet, cut/cat). Include 15 minimal pairs, a listening discrimination exercise, a tongue twister for each sound contrast, and a peer practice activity where students quiz each other."
  },
  {
    title: "Project-Based Learning Unit",
    text: "Design a 2-week project-based learning unit for B2 English learners on the theme 'My Dream Business'. Include weekly milestones, language objectives (presenting, persuading, describing), a final presentation rubric, peer evaluation forms, and scaffolded writing tasks leading to a business pitch."
  },
  {
    title: "Flipped Classroom Lesson Designer",
    text: "Create a flipped classroom lesson on reported speech for B1–B2 learners. Include: a short video script (3 minutes) explaining the grammar rules with examples, 5 pre-class comprehension questions, and an in-class activity plan with pair work, error correction, and a communicative task where students report on a news article."
  },
  {
    title: "End-of-Term Review Game",
    text: "Design a Jeopardy-style review game covering 5 grammar topics (tenses, articles, prepositions, conditionals, passive voice) for mixed B1–B2 classes. Create 5 questions per category at increasing difficulty (100–500 points), include answer keys, and provide rules for team play with a scoring sheet."
  },
  {
    title: "Scaffolded Writing Workshop",
    text: "Create a step-by-step guided writing workshop for A2–B1 learners on writing a 'for and against' essay about social media. Include: a brainstorming template, useful phrases for each paragraph, a model essay with annotations explaining structure and linking words, a peer review checklist, and a self-editing guide focusing on common errors."
  }
];

const PromptCard: React.FC<{
  title: string;
  prompt: string;
  isCopied: boolean;
  onCopy: () => void;
}> = ({ title, prompt, isCopied, onCopy }) => (
  <>
    <ArticleHeading>{title}</ArticleHeading>
    <div className="relative bg-slate-50 p-6 rounded-lg border border-slate-200 my-6 dark:bg-slate-800 dark:border-slate-700">
      <button
        onClick={onCopy}
        className="absolute top-4 right-4 bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm dark:bg-blue-500 dark:hover:bg-blue-600 flex items-center gap-2"
        aria-live="polite"
      >
        {isCopied ? (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Copied!</span>
          </>
        ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <span>Copy Prompt</span>
          </>
        )}
      </button>
      <p className="font-code text-slate-700 leading-relaxed text-base dark:text-slate-300 pr-32">
        {prompt}
      </p>
    </div>
  </>
);

const TeacherPage: React.FC = () => {
  usePageMetadata({
    title: '30 Free AI Prompts for English Teachers 2026 – ChatGPT Lesson Plans & ESL Activities | TypoGrammar',
    description: 'Copy 30 free AI prompts for ESL/EFL teachers. Generate lesson plans, grammar exercises, speaking activities, vocabulary games & assessment rubrics with ChatGPT, Claude, or Gemini in seconds.',
    ogTitle: '30 Free AI Prompts for English Teachers – ChatGPT Lesson Plans & ESL Activities',
    ogDescription: 'Ready-to-use AI prompts for teachers: lesson plans, worksheets, quizzes, speaking activities, and rubrics. Save hours of prep time with ChatGPT.',
    ogType: 'article',
    ogUrl: 'https://typogrammar.com/teacher'
  });

  const [copiedPromptTitle, setCopiedPromptTitle] = useState<string | null>(null);

  const handleCopy = (text: string, title: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedPromptTitle(title);
      setTimeout(() => setCopiedPromptTitle(null), 2000);
    }, () => {
      // Could add an error state here if needed
    });
  };

  return (
    <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
      {/* Schema Markup */}
      <SchemaMarkup
        type="Article"
        data={{
          headline: '30 Free AI Prompts for English Teachers 2026 – ChatGPT Lesson Plans & ESL Activities',
          description: 'Copy 30 free AI prompts for ESL/EFL teachers. Generate lesson plans, grammar exercises, speaking activities, vocabulary games & assessment rubrics with ChatGPT, Claude, or Gemini.',
          author: { '@type': 'Organization', name: 'Typogrammar', url: 'https://typogrammar.com/about' },
          publisher: { '@type': 'Organization', name: 'Typogrammar', url: 'https://typogrammar.com' },
          datePublished: '2025-06-01',
          dateModified: '2026-02-28',
          mainEntityOfPage: 'https://typogrammar.com/teacher'
        }}
      />
      
      {/* Featured Snippet Box */}
      <div className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-slate-700 dark:to-slate-600 border-l-4 border-blue-600 p-6 rounded-lg mb-8 shadow-md">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">What are AI Prompts for Teachers?</h2>
        <p className="text-slate-800 dark:text-slate-200 leading-relaxed mb-4">
          <strong>AI prompts for teachers</strong> are pre-written instructions you copy into ChatGPT, Claude, or Gemini to instantly generate: lesson plans, worksheets, quizzes, speaking activities, writing tasks, and assessment rubrics. They save hours of preparation time.
        </p>
        <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
          <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Quick Answer: How do I use these prompts?</h3>
          <p className="text-slate-700 dark:text-slate-300">Click <strong>Copy Prompt</strong> on any card below, paste into ChatGPT/Claude/Gemini, customize the [bracketed fields] for your class level and topic, and receive ready-to-use materials in seconds.</p>
        </div>
      </div>
      
      <div className="flex justify-between items-start">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight dark:text-slate-100">AI Prompts for English Teachers</h1>
      </div>
      
      <ArticleParagraph>
        These <strong>30 ready-to-use AI prompts</strong> are designed for ESL and English teachers to use with ChatGPT, Gemini, Claude, or any AI language model. Copy any prompt below to instantly generate lesson plans, grammar exercises, speaking activities, writing workshops, vocabulary games, and assessment rubrics — saving hours of preparation time.
      </ArticleParagraph>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-5 my-6 rounded-r-lg">
        <p className="text-slate-700 dark:text-slate-300 text-sm">
          <strong>How to use:</strong> Click <em>Copy Prompt</em> on any card below, paste it into your preferred AI tool, and customize the bracketed fields (e.g., [Your chosen topic]) to match your class. Each prompt is designed to produce classroom-ready materials in seconds.
        </p>
      </div>

      {prompts.map((p) => (
        <PromptCard
          key={p.title}
          title={p.title}
          prompt={p.text}
          isCopied={copiedPromptTitle === p.title}
          onCopy={() => handleCopy(p.text, p.title)}
        />
      ))}
      <div className="mt-8">
        <GoogleAd adSlot="6406598038" />
      </div>

      <div className="bg-slate-50 dark:bg-slate-700/50 p-6 my-8 rounded-lg border border-slate-200 dark:border-slate-600">
        <h2 className="font-heading text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">Why Use AI Prompts for Teaching?</h2>
        <ArticleParagraph>
          AI tools like ChatGPT can help teachers create differentiated materials, generate practice exercises at multiple levels, and brainstorm fresh activity ideas in minutes. These prompts are starting points — adjust proficiency levels, topics, and formats to fit your students' needs.
        </ArticleParagraph>
        <ArticleParagraph>
          <strong>Tip:</strong> Combine prompts for richer results. For example, use the <em>Lesson Plan Generator</em> first, then follow up with the <em>Assessment Rubric Maker</em> to create a complete teaching package.
        </ArticleParagraph>
      </div>
      
      {/* Visible FAQ Section */}
      <div className="bg-white dark:bg-slate-700/50 p-6 my-8 rounded-lg border border-slate-200 dark:border-slate-600">
        <h2 className="font-heading text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-2">
          <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          Frequently Asked Questions: AI Prompts for English Teachers
        </h2>
        
        <div className="space-y-6">
          <div className="border-b border-slate-200 dark:border-slate-600 pb-4">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">What AI tools work best with these prompts?</h3>
            <p className="text-slate-700 dark:text-slate-300">These prompts work with ChatGPT (GPT-4), Claude, Gemini, and most AI language models. ChatGPT and Claude typically produce the most detailed and classroom-ready outputs, but all major AI tools will generate useful materials.</p>
          </div>
          
          <div className="border-b border-slate-200 dark:border-slate-600 pb-4">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Are these AI prompts free to use?</h3>
            <p className="text-slate-700 dark:text-slate-300">Yes, all 30 prompts on this page are completely free. Copy and use them as many times as you want. You only need access to an AI tool like ChatGPT (free version works) to generate materials.</p>
          </div>
          
          <div className="border-b border-slate-200 dark:border-slate-600 pb-4">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Can I modify the AI-generated content?</h3>
            <p className="text-slate-700 dark:text-slate-300">Absolutely! AI-generated materials are starting points. Always review and adapt them for your specific students, classroom context, and teaching goals. You know your students best.</p>
          </div>
          
          <div className="border-b border-slate-200 dark:border-slate-600 pb-4">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">How do I customize prompts for different proficiency levels?</h3>
            <p className="text-slate-700 dark:text-slate-300">Change the level markers in brackets. Replace [A2] with [B2] or [C1], or add specific instructions like "for adult learners" or "for young learners ages 8-10." The AI will adjust vocabulary, complexity, and activities accordingly.</p>
          </div>
          
          <div className="border-b border-slate-200 dark:border-slate-600 pb-4">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">What prompts are best for IELTS or exam preparation?</h3>
            <p className="text-slate-700 dark:text-slate-300">Use the "Writing Task Creator (IELTS/TOEFL Focus)" and "Assessment Design Tool" prompts. You can also modify any prompt by adding "for IELTS Band 7 preparation" or "using TOEFL-style formats" to the instructions.</p>
          </div>
          
          <div className="pb-2">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">How much time can AI prompts save teachers?</h3>
            <p className="text-slate-700 dark:text-slate-300">Teachers report saving 2-5 hours per week using AI prompts for lesson planning and material creation. A lesson plan that might take 30-60 minutes to write manually can be generated in under 2 minutes with these prompts.</p>
          </div>
        </div>
      </div>
      
      {/* FAQ Schema */}
      <SchemaMarkup
        type="FAQPage"
        data={{
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What AI tools work best with these prompts?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'These prompts work with ChatGPT (GPT-4), Claude, Gemini, and most AI language models. ChatGPT and Claude typically produce the most detailed and classroom-ready outputs, but all major AI tools will generate useful materials.'
              }
            },
            {
              '@type': 'Question',
              name: 'Are these AI prompts free to use?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, all 30 prompts on this page are completely free. Copy and use them as many times as you want. You only need access to an AI tool like ChatGPT (free version works) to generate materials.'
              }
            },
            {
              '@type': 'Question',
              name: 'Can I modify the AI-generated content?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Absolutely! AI-generated materials are starting points. Always review and adapt them for your specific students, classroom context, and teaching goals.'
              }
            },
            {
              '@type': 'Question',
              name: 'How do I customize prompts for different proficiency levels?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Change the level markers in brackets. Replace [A2] with [B2] or [C1], or add specific instructions like for adult learners or for young learners ages 8-10. The AI will adjust vocabulary, complexity, and activities accordingly.'
              }
            },
            {
              '@type': 'Question',
              name: 'What prompts are best for IELTS or exam preparation?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Use the Writing Task Creator (IELTS/TOEFL Focus) and Assessment Design Tool prompts. You can also modify any prompt by adding for IELTS Band 7 preparation or using TOEFL-style formats to the instructions.'
              }
            },
            {
              '@type': 'Question',
              name: 'How much time can AI prompts save teachers?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Teachers report saving 2-5 hours per week using AI prompts for lesson planning and material creation. A lesson plan that might take 30-60 minutes to write manually can be generated in under 2 minutes with these prompts.'
              }
            }
          ]
        }}
      />
    </article>
  );
};

export default TeacherPage;