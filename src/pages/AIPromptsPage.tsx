import React, { useState } from 'react';
import GoogleAd from '../components/GoogleAd';
import { ArticleHeading, ArticleParagraph } from '../components/ArticleComponents';
import usePageMetadata from '../hooks/usePageMetadata';

const prompts = [
  {
    title: "IELTS Speaking Partner",
    text: "Act as an IELTS Speaking examiner. Ask me questions from Part 1, 2, and 3 on the topic of 'education'. After each answer, give a band score, brief feedback, and one improved model answer."
  },
  {
    title: "IELTS Writing Task Trainer",
    text: "Create 3 IELTS Writing Task 2 questions on technology. For each question, give: a band 9 outline, 10 topic-specific vocabulary items with examples, and 3 common mistakes students make."
  },
  {
    title: "TOEFL Integrated Writing Simulation",
    text: "Write a short TOEFL-style reading passage (200–250 words) and a lecture summary that disagrees with it. Then provide a model integrated writing answer and a checklist students can use to self-evaluate."
  },
  {
    title: "TOEFL Speaking Practice with Feedback",
    text: "Give me 4 TOEFL Independent Speaking questions. Time my response (45 seconds each), then evaluate for fluency, grammar, vocabulary, and coherence, and suggest 2–3 upgraded sentences I could have used."
  },
  {
    title: "Exam Strategy Explainer",
    text: "Explain, in simple English, a step-by-step strategy for IELTS Reading True/False/Not Given questions. Then create 5 practice questions with an answer key and short explanations."
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

const AIPromptsPage: React.FC = () => {
  usePageMetadata({
    title: 'AI Learning Prompts - IELTS & TOEFL | TypoGrammar',
    description: 'A collection of curated AI prompts for English learners to use with ChatGPT and other AI tools. Focused on IELTS and TOEFL exam preparation with speaking, writing, and strategy practice.'
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
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight dark:text-slate-100">AI Learning Prompts</h1>
      </div>
      
      <ArticleParagraph>
        These curated prompts are designed for English learners preparing for IELTS and TOEFL exams. Copy and paste these prompts into AI tools like ChatGPT to get personalized practice, feedback, and study materials tailored to your needs.
      </ArticleParagraph>

      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-8 border border-blue-100 dark:border-blue-800/30">
        <h2 className="font-heading text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center">
          <span className="text-2xl mr-2">💡</span>
          How to Use These Prompts
        </h2>
        <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
          <li>Click the <strong>"Copy Prompt"</strong> button on any prompt card</li>
          <li>Open ChatGPT, Claude, or your preferred AI assistant</li>
          <li>Paste the prompt and start your practice session</li>
          <li>Engage with the AI's responses and follow the instructions</li>
          <li>Use these regularly to supplement your exam preparation</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="font-heading text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          IELTS & TOEFL Focused Prompts
        </h2>
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

      <div className="mt-12 bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-100 dark:border-green-800/30">
        <h2 className="font-heading text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center">
          <span className="text-2xl mr-2">🎯</span>
          Tips for Effective AI-Assisted Learning
        </h2>
        <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
          <li><strong>Be specific:</strong> The more detailed your follow-up questions, the better the AI's responses</li>
          <li><strong>Practice regularly:</strong> Use these prompts as part of your daily study routine</li>
          <li><strong>Ask for clarification:</strong> If something isn't clear, ask the AI to explain differently</li>
          <li><strong>Request examples:</strong> Always ask for more examples to understand concepts better</li>
          <li><strong>Combine with real practice:</strong> Use AI for preparation, but also take official practice tests</li>
          <li><strong>Track your progress:</strong> Save useful responses and review them periodically</li>
        </ul>
      </div>

      <div className="mt-8">
        <GoogleAd adSlot="6406598038" />
      </div>
    </article>
  );
};

export default AIPromptsPage;
