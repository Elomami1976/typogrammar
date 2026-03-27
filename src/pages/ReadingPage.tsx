import React from 'react';
import GoogleAd from '../components/GoogleAd';
import { ArticleParagraph, ArticleHeading, InlineCode, BulletList } from '../components/ArticleComponents';
import usePageMetadata from '../hooks/usePageMetadata';
import { Link } from 'react-router-dom';
import SchemaMarkup from '../components/SchemaMarkup';

const ReadingPage: React.FC = () => {
  const pageUrl = 'https://typogrammar.com/reading/how-to-read-efficiently';
  const lastUpdated = '2026-02-25';
  const datePublished = '2025-04-10';
  
  // FAQ data for schema and display
  const faqData = [
    {
      question: 'What is the SQ3R reading method?',
      answer: 'SQ3R is a five-step active reading method: Survey (preview the text), Question (turn headings into questions), Read (read to answer questions), Recite (summarize from memory), and Review (revisit notes and text).'
    },
    {
      question: 'What is the difference between skimming and scanning?',
      answer: 'Skimming is reading quickly to get the main idea by focusing on headings and first sentences. Scanning is searching for specific information like names, dates, or keywords while ignoring everything else.'
    },
    {
      question: 'How can I improve reading comprehension?',
      answer: 'Improve comprehension by using active reading techniques: preview text before reading, ask questions, annotate key points, summarize in your own words, and review regularly to consolidate knowledge.'
    },
    {
      question: 'How can I read faster without losing comprehension?',
      answer: 'Read faster by: eliminating subvocalization (reading aloud in your head), using a pointer or finger to guide your eyes, expanding your peripheral vision, practicing with timed reading exercises, and previewing content before deep reading.'
    },
    {
      question: 'What is active reading and why is it important?',
      answer: 'Active reading means engaging with text through questioning, annotating, summarizing, and connecting ideas. It\'s important because it increases comprehension by 40-60%, improves retention, develops critical thinking, and makes study time more efficient.'
    },
    {
      question: 'How long should I read before taking a break?',
      answer: 'For optimal focus and retention, read for 25-50 minutes before taking a 5-10 minute break (the Pomodoro technique). Longer sessions lead to diminishing returns. During breaks, avoid screens and move around to refresh your mind.'
    }
  ];
  
  usePageMetadata({
    title: 'How to Read Efficiently (2026): SQ3R, Skimming & Active Reading Techniques | Typogrammar',
    description: 'Learn proven strategies to read faster and retain more. Master active reading techniques like SQ3R, skimming, scanning, and annotation to improve comprehension.',
    ogTitle: 'How to Read Efficiently (2026): SQ3R, Skimming & Active Reading Techniques',
    ogDescription: 'Learn proven strategies to read faster and retain more. Master active reading techniques like SQ3R, skimming, scanning, and annotation.',
    ogType: 'article',
    ogUrl: pageUrl,
  });

  return (
    <>
    {/* GEO Meta Tags */}
    <meta name="geo.region" content="Global" />
    <meta name="language" content="English" />
    
    {/* Article Schema */}
    <SchemaMarkup
      type="Article"
      data={{
        headline: 'How to Read Efficiently (2026): SQ3R, Skimming & Active Reading Techniques',
        description: 'Learn proven strategies to read faster and retain more. Master active reading techniques like SQ3R, skimming, scanning, and annotation.',
        author: {
          '@type': 'Organization',
          name: 'Typogrammar',
          url: 'https://typogrammar.com/about'
        },
        publisher: {
          '@type': 'Organization',
          name: 'Typogrammar',
          url: 'https://typogrammar.com'
        },
        datePublished: datePublished,
        dateModified: lastUpdated,
        mainEntityOfPage: pageUrl
      }}
    />
    
    {/* FAQ Schema */}
    <SchemaMarkup
      type="FAQPage"
      data={{
        mainEntity: faqData.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      }}
    />
    
    <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
      {/* AI-Friendly Definition Box */}
      <div className="bg-gradient-to-r from-green-100 to-teal-100 dark:from-slate-700 dark:to-slate-600 border-l-4 border-green-600 p-6 rounded-lg mb-8 shadow-md">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Definition:</h2>
        <p className="text-slate-800 dark:text-slate-200 leading-relaxed">
          Efficient reading is the skill of understanding and retaining information quickly by using active techniques like previewing, questioning, and annotating text.
        </p>
      </div>
      
      <div className="flex justify-between items-start">
        <div>
          <p className="font-body text-base font-semibold text-blue-600 mb-4 dark:text-blue-400">Reading Skills</p>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight dark:text-slate-100">How to Read Efficiently and Effectively (2026)</h1>
          
          {/* E-E-A-T Signals */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-6">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/></svg>
              By <Link to="/about" className="text-blue-600 dark:text-blue-400 hover:underline">Typogrammar Team</Link>
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/></svg>
              Updated: {lastUpdated}
            </span>
            <span className="flex items-center gap-1 text-green-600 dark:text-green-400">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
              Reviewed by Reading Expert
            </span>
          </div>
          
          {/* GEO Optimization */}
          <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg mb-8">
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              This reading guide is designed for students and professionals worldwide, including those in the UK, US, Canada, Australia, and other English-speaking regions. We use neutral global English suitable for academic and professional contexts.
            </p>
          </div>
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
      
      {/* Visible FAQ Section */}
      <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
        <ArticleHeading>Frequently Asked Questions About Efficient Reading</ArticleHeading>
        <div className="space-y-6 mt-6">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-6 border border-slate-200 dark:border-slate-600">
              <h3 className="font-heading text-xl font-bold text-slate-800 dark:text-slate-200 mb-3">
                {faq.question}
              </h3>
              <ArticleParagraph>{faq.answer}</ArticleParagraph>
            </div>
          ))}
        </div>
      </div>
    </article>
        <div className="mt-8">
          <GoogleAd adSlot="6406598038" />
        </div>
    </>
  );
};

export default ReadingPage;