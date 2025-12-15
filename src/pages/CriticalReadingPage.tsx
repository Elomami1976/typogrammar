
import React from 'react';
import GoogleAd from '../components/GoogleAd';
import { ArticleParagraph, ArticleHeading, InlineCode, BulletList } from '../components/ArticleComponents';
import usePageMetadata from '../hooks/usePageMetadata';

const CriticalReadingPage: React.FC = () => {
  usePageMetadata({
    title: 'How to Read Critically | TypoGrammar',
    description: 'Learn to move beyond comprehension to analysis and evaluation. This guide teaches you how to question, analyze, and engage with texts on a deeper level.'
  });

  return (
    <>
    <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
      <div>
        <p className="font-body text-base font-semibold text-blue-600 mb-4 dark:text-blue-400">Reading Skills</p>
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight dark:text-slate-100">How to Read Critically</h1>
      </div>
      
      <ArticleParagraph>
        Reading critically is the art of moving beyond simply understanding a text to analyzing, questioning, and evaluating it. It is an active process, a dialogue between you and the author. While efficient reading helps you absorb information quickly, critical reading helps you assess its validity, logic, and implications. This skill is essential for academic success and for navigating a world full of complex information.
      </ArticleParagraph>

      <ArticleHeading>1. The Mindset Shift: From Passive to Active Reading</ArticleHeading>
      <ArticleParagraph>
        The first step in critical reading is to change your mindset. A passive reader absorbs information, while an active, critical reader engages with it. Before you even start reading the main text, ask yourself a few questions to prime your brain:
      </ArticleParagraph>
      <BulletList items={[
        <><strong>Who is the author?</strong> What are their credentials or potential biases?</>,
        <><strong>What is the purpose of this text?</strong> Is it to inform, persuade, entertain, or something else?</>,
        <><strong>Who is the intended audience?</strong> How might that influence the way information is presented?</>,
      ]} />

      <ArticleHeading>2. Identify the Core Argument and Main Points</ArticleHeading>
      <ArticleParagraph>
        To analyze a text, you must first understand its central message.
      </ArticleParagraph>
      <BulletList items={[
        <><strong>Find the Thesis:</strong> Locate the author's main argument, or thesis statement. In academic articles and essays, this is often found in the introduction.</>,
        <><strong>Identify Supporting Claims:</strong> Look for the topic sentences of each paragraph, which usually state the main point supporting the thesis. Ask yourself: "How does this paragraph contribute to the overall argument?"</>,
      ]} />

      <ArticleHeading>3. Evaluate the Evidence and Support</ArticleHeading>
      <ArticleParagraph>
        A strong argument is built on solid evidence. Your job as a critical reader is to question the evidence presented. Don't take it at face value.
      </ArticleParagraph>
      <BulletList items={[
          <><strong>Is the evidence relevant?</strong> Does it directly support the claim being made?</>,
          <><strong>Is it sufficient?</strong> Is there enough evidence to be convincing, or is the author making a broad claim based on a single, weak example?</>,
          <><strong>Is the source credible?</strong> Is the evidence from a respected, up-to-date source? Be wary of outdated data or biased sources.</>,
          <><strong>What kind of evidence is it?</strong> Is it a fact, an expert opinion, a statistic, or a personal anecdote? Each has different strengths and weaknesses.</>,
      ]} />

      <ArticleHeading>4. Recognize Bias, Tone, and Purpose</ArticleHeading>
      <ArticleParagraph>
        No text is completely neutral. A critical reader is aware of the author's perspective and how it shapes the text.
      </ArticleParagraph>
       <BulletList items={[
        <><strong>Look for Loaded Language:</strong> Pay attention to words with strong positive or negative connotations. These can reveal the author's bias.</>,
        <><strong>Analyze the Tone:</strong> Is the tone objective, passionate, sarcastic, or something else? The tone can tell you a lot about the author's attitude toward the subject.</>,
        <><strong>Consider What's Omitted:</strong> Sometimes, what an author *doesn't* say is as important as what they do say. Are they ignoring a significant counterargument or piece of evidence?</>,
      ]} />

      <ArticleHeading>5. Make Inferences and Read Between the Lines</ArticleHeading>
      <ArticleParagraph>
        Critical reading involves understanding not just what the author states directly, but also what they imply.
      </ArticleParagraph>
       <BulletList items={[
        <><strong>Identify Assumptions:</strong> What does the author take for granted that the reader will believe?</>,
        <><strong>Draw Conclusions:</strong> Based on the evidence and reasoning, what logical conclusions can you draw that the author doesn't state explicitly?</>,
        <><strong>Connect to Your Own Knowledge:</strong> How does this information fit with what you already know? Does it challenge or support your existing beliefs?</>,
      ]} />

      <ArticleHeading>Conclusion</ArticleHeading>
      <ArticleParagraph>
        Becoming a critical reader is a skill that develops with practice. By consistently asking these questions, you'll learn to engage with texts on a deeper level, distinguish strong arguments from weak ones, and become a more discerning, independent thinker.
      </ArticleParagraph>
    </article>
        <div className="mt-8">
          <GoogleAd adSlot="6406598038" />
        </div>
    </>
  );
};

export default CriticalReadingPage;
