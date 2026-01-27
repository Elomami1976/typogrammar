import React from 'react';
import GoogleAd from '../components/GoogleAd';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading, InlineCode, CodeBlock, ExampleList, BulletList } from '../components/ArticleComponents';

const WritingPage: React.FC = () => {
  usePageMetadata({
    title: 'How to Write a Perfect Essay – Step-by-Step Guide | TypoGrammar',
    description: 'Master essay writing with our comprehensive guide. Learn how to craft strong thesis statements, develop body paragraphs, and write compelling conclusions. Includes examples and proven techniques.'
  });

  return (
    <>
    <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
      <div className="flex justify-between items-start">
        <div>
          <p className="font-body text-base font-semibold text-blue-600 mb-4 dark:text-blue-400">Writing Skills</p>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight dark:text-slate-100">How to Write a Perfect Essay</h1>
        </div>
      </div>
      
      <ArticleParagraph>
        Writing an essay can feel daunting, but it's a skill that can be mastered with a clear structure and a methodical approach. A great essay effectively communicates an argument, supported by evidence, in a coherent and persuasive way. This guide will walk you through a step-by-step process to help you write with clarity and confidence.
      </ArticleParagraph>

      <div className="my-6 p-4 bg-blue-50 border-l-4 border-blue-400 text-blue-800 dark:bg-blue-900/30 dark:border-blue-500 dark:text-blue-300">
        <p className="text-lg">
          Before you begin, it's important to know what kind of essay you're writing. For a detailed breakdown, see our guide on{' '}
          <Link to="/essay-types" className="font-bold hover:underline">
            the main types of essays.
          </Link>
        </p>
      </div>

      <ArticleHeading>Step 1: Understand the Prompt</ArticleHeading>
      <ArticleParagraph>
        Before you write a single word, you must fully understand the essay question or prompt. Misinterpreting the prompt is one of the most common reasons for a low grade. Break it down by identifying keywords and constraints.
      </ArticleParagraph>
      <BulletList items={[
        <><strong>Identify action words:</strong> These tell you what to do. Look for verbs like <InlineCode>analyze</InlineCode>, <InlineCode>compare</InlineCode>, <InlineCode>contrast</InlineCode>, <InlineCode>discuss</InlineCode>, <InlineCode>evaluate</InlineCode>, or <InlineCode>explain</InlineCode>.</>,
        <><strong>Identify key concepts:</strong> What are the main topics or ideas you need to focus on?</>,
        <><strong>Identify constraints:</strong> Note the required length (word count), formatting, and deadline.</>,
      ]} />

      <ArticleHeading>Step 2: Brainstorm & Outline</ArticleHeading>
      <ArticleParagraph>
        Once you understand the prompt, it's time to generate ideas. Don't censor yourself; write down everything that comes to mind. After brainstorming, organize your thoughts into a logical structure with an outline. This is your essay's roadmap.
      </ArticleParagraph>
      <CodeBlock>{`I. Introduction
   A. Hook (Engaging opening)
   B. Background Information
   C. Thesis Statement (Your main argument)

II. Body Paragraph 1
   A. Topic Sentence (Main point of the paragraph)
   B. Evidence/Example
   C. Explanation/Analysis
   D. Concluding/Transition Sentence

III. Body Paragraph 2 (Repeat structure)
   A. Topic Sentence
   B. Evidence/Example
   C. Explanation/Analysis
   D. Concluding/Transition Sentence

IV. Body Paragraph 3 (Repeat structure)
   A. Topic Sentence
   B. Evidence/Example
   C. Explanation/Analysis
   D. Concluding/Transition Sentence

V. Conclusion
   A. Restate Thesis (in new words)
   B. Summarize Main Points
   C. Final Thought / Broader Implication`}</CodeBlock>

      <ArticleHeading>Step 3: Writing the Introduction</ArticleHeading>
      <ArticleParagraph>
        Your introduction has three main goals: grab the reader's attention, provide context for your topic, and present your main argument in a clear thesis statement.
      </ArticleParagraph>
       <BulletList items={[
        <><strong>The Hook:</strong> Start with a compelling fact, a relevant quote, a thought-provoking question, or a brief anecdote.</>,
        <><strong>Background:</strong> Briefly provide context that the reader needs to understand your topic.</>,
        <><strong>Thesis Statement:</strong> This is the most important sentence in your essay. It's a clear, concise, and debatable statement that presents your main argument. It should tell the reader exactly what your essay will prove.</>,
      ]} />

      <ArticleHeading>Step 4: Crafting Body Paragraphs</ArticleHeading>
      <ArticleParagraph>
        Each body paragraph should focus on a single main idea that supports your thesis. A popular and effective structure for body paragraphs is the PEEL method (Point, Evidence, Explanation, Link).
      </ArticleParagraph>
      <BulletList items={[
        <><strong>Point:</strong> Start with a topic sentence that clearly states the main point of the paragraph.</>,
        <><strong>Evidence:</strong> Provide evidence to support your point. This could be a quote, a statistic, a fact, or an example.</>,
        <><strong>Explanation:</strong> Explain how your evidence proves your point. This is where you analyze the information and connect it back to your argument.</>,
        <><strong>Link:</strong> Conclude the paragraph by linking the point back to your main thesis or transitioning to the next paragraph.</>,
      ]} />
      <ArticleParagraph>Use transition words to ensure a smooth flow between paragraphs.</ArticleParagraph>
      <ExampleList items={["Furthermore,", "In addition,", "However,", "On the other hand,", "Therefore,", "Consequently,"]} />

      <ArticleHeading>Step 5: Writing a Strong Conclusion</ArticleHeading>
      <ArticleParagraph>
        The conclusion is your last chance to make an impact on the reader. Avoid introducing new information. Instead, synthesize what you've already discussed.
      </ArticleParagraph>
       <BulletList items={[
        <><strong>Restate the Thesis:</strong> Rephrase your main argument in a new way.</>,
        <><strong>Summarize Main Points:</strong> Briefly recap the main points from your body paragraphs.</>,
        <><strong>Provide a Final Thought:</strong> End with a memorable statement, suggest broader implications, or offer a final insight on the topic.</>,
      ]} />

      <ArticleHeading>Step 6: Revision & Proofreading</ArticleHeading>
      <ArticleParagraph>
        Don't skip this final, crucial step. It's best to take a break after writing before you start editing.
      </ArticleParagraph>
       <BulletList items={[
        <><strong>Revise for the big picture:</strong> Check your essay for clarity, logical flow, and strength of argument. Does each paragraph support the thesis? Is the structure logical?</>,
        <><strong>Proofread for small errors:</strong> Carefully check for grammar mistakes, spelling errors, punctuation issues, and typos. Reading your essay aloud is an excellent way to catch awkward phrasing and errors.</>,
      ]} />

    </article>
        <div className="mt-8">
          <GoogleAd adSlot="6406598038" />
        </div>
    </>
  );
};

export default WritingPage;