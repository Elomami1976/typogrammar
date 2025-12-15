import React, { useState } from 'react';
import GoogleAd from '../components/GoogleAd';
import { ArticleHeading, ArticleParagraph } from '../components/ArticleComponents';
import usePageMetadata from '../hooks/usePageMetadata';

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
    title: 'Prompts for Teachers | TypoGrammar',
    description: 'A collection of curated prompts for English teachers to use with AI language models like ChatGPT to generate lesson plans, materials, and ideas.'
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
      <div className="flex justify-between items-start">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight dark:text-slate-100">Prompts for Teachers</h1>
      </div>
      
      <ArticleParagraph>
        Here are some curated prompts designed for teachers to use with AI language models like ChatGPT. You can copy these prompts to generate lesson plans, teaching materials, and creative ideas for your classroom.
      </ArticleParagraph>

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
    </article>
  );
};

export default TeacherPage;