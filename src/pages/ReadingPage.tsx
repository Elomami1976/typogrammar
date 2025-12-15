import React from 'react';
import GoogleAd from '../components/GoogleAd';
import { ArticleParagraph, ArticleHeading, InlineCode, BulletList } from '../components/ArticleComponents';
import usePageMetadata from '../hooks/usePageMetadata';

const ReadingPage: React.FC = () => {
  usePageMetadata({
    title: 'How to Read Efficiently and Effectively | TypoGrammar',
    description: 'Learn proven strategies to become a more strategic and powerful reader. Master active reading techniques like SQ3R, skimming, scanning, and annotation to improve comprehension and retention.'
  });

  return (
    <>
    <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
      <div className="flex justify-between items-start">
        <div>
          <p className="font-body text-base font-semibold text-blue-600 mb-4 dark:text-blue-400">Reading Skills</p>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight dark:text-slate-100">How to Read Efficiently and Effectively</h1>
        </div>
      </div>
      
      <ArticleParagraph>
        In a world overflowing with information, reading quickly is not enough; we need to read effectively. Efficient reading is about understanding and retaining more in less time. It involves moving from a passive to an active mindset, engaging with the text instead of just letting your eyes scan the words. This guide covers proven strategies to help you become a more strategic and powerful reader.
      </ArticleParagraph>

      <ArticleHeading>1. Before You Read: Prepare for Success</ArticleHeading>
      <ArticleParagraph>
        What you do before you start reading is just as important as the reading itself. Setting a clear purpose primes your brain to look for the right information.
      </ArticleParagraph>
      <BulletList items={[
        <><strong>Define Your Purpose:</strong> Ask yourself, "Why am I reading this?" Are you reading for a general overview, to find a specific fact, or for deep understanding? Your purpose dictates your reading strategy.</>,
        <><strong>Preview the Text:</strong> Spend 2-3 minutes surveying the material. Look at headings, subheadings, introductions, conclusions, and any bolded text or visuals. This creates a mental map of the content before you dive in.</>,
      ]} />

      <ArticleHeading>2. Active Reading Techniques</ArticleHeading>
      <ArticleParagraph>
        Active reading transforms you from a spectator into a participant. It's about having a conversation with the text.
      </ArticleParagraph>
      
      <h4 className="font-heading text-2xl font-bold text-slate-800 mt-8 mb-4 dark:text-slate-200">The SQ3R Method</h4>
      <ArticleParagraph>
        SQ3R is a classic five-step method for comprehensive reading:
      </ArticleParagraph>
      <BulletList items={[
        <><strong>Survey:</strong> Skim the chapter. (This is the preview you did earlier).</>,
        <><strong>Question:</strong> Turn headings and subheadings into questions. For example, a heading like "Active Reading Techniques" becomes "What are the best active reading techniques?". This makes your brain actively seek answers.</>,
        <><strong>Read:</strong> Read the section with the goal of answering your questions. Pay close attention to anything that seems important.</>,
        <><strong>Recite:</strong> After each section, look away and try to recall the main points. Summarize them aloud or by jotting down notes. This is a critical step for memory retention.</>,
        <><strong>Review:</strong> After you finish, go back over your notes and the text to solidify your understanding. Regular, brief reviews are more effective than one long cramming session.</>,
      ]} />

      <h4 className="font-heading text-2xl font-bold text-slate-800 mt-8 mb-4 dark:text-slate-200">Skimming and Scanning</h4>
      <ArticleParagraph>
        Not all reading requires deep comprehension.
      </ArticleParagraph>
      <BulletList items={[
        <><strong>Skimming:</strong> Reading quickly to get the main idea. Let your eyes glide over the text, focusing on the first sentence of each paragraph, headings, and keywords. Use this to decide if a text is worth a deeper read.</>,
        <><strong>Scanning:</strong> Looking for a specific piece of information, like a name, date, or keyword. You know what you're looking for, and you ignore everything else.</>,
      ]} />
      
      <h4 className="font-heading text-2xl font-bold text-slate-800 mt-8 mb-4 dark:text-slate-200">Annotation and Note-Taking</h4>
      <ArticleParagraph>
        Engage directly with the text by making it your own.
      </ArticleParagraph>
      <BulletList items={[
          "Highlight key points, but do so sparingly. If everything is highlighted, nothing is.",
          "Write notes, questions, and summaries in the margins.",
          "Draw arrows to connect related ideas.",
          "Challenge the author's arguments. Do you agree or disagree? Why?"
      ]} />


      <ArticleHeading>3. After You Read: Consolidate Your Knowledge</ArticleHeading>
      <ArticleParagraph>
        Your work isn't done when you read the last word. Consolidation is key to long-term memory.
      </ArticleParagraph>
      <BulletList items={[
        <><strong>Summarize:</strong> In your own words, write a short summary of what you just read. If you can't explain it simply, you haven't fully understood it.</>,
        <><strong>Discuss:</strong> Talk about the material with someone else. Teaching or explaining a concept is one of the most powerful ways to cement it in your own mind.</>,
      ]} />
      
      <ArticleHeading>Conclusion</ArticleHeading>
      <ArticleParagraph>
        Becoming an efficient reader doesn't happen overnight. It requires conscious practice. Start by incorporating one or two of these techniques into your reading habits. By being strategic and active, you'll soon find yourself reading faster, understanding more, and remembering it for longer.
      </ArticleParagraph>
    </article>
        <div className="mt-8">
          <GoogleAd adSlot="6406598038" />
        </div>
    </>
  );
};

export default ReadingPage;