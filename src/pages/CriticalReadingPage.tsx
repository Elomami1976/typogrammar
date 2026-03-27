import React from 'react';
import GoogleAd from '../components/GoogleAd';
import { ArticleParagraph, ArticleHeading, InlineCode, BulletList } from '../components/ArticleComponents';
import usePageMetadata from '../hooks/usePageMetadata';
import { Link } from 'react-router-dom';
import SchemaMarkup from '../components/SchemaMarkup';

const CriticalReadingPage: React.FC = () => {
  const pageUrl = 'https://typogrammar.com/reading/how-to-read-critically';
  const lastUpdated = '2026-02-25';
  const datePublished = '2025-04-20';
  
  // FAQ data for schema and display
  const faqData = [
    {
      question: 'What is critical reading?',
      answer: 'Critical reading is the process of analyzing, questioning, and evaluating a text beyond basic comprehension. It involves examining arguments, evidence, bias, and assumptions to form independent judgments.'
    },
    {
      question: 'How do you identify bias in a text?',
      answer: 'Identify bias by looking for loaded language with strong connotations, analyzing the author\'s tone, considering what information is omitted, and examining the author\'s credentials and potential motivations.'
    },
    {
      question: 'What is the difference between critical reading and regular reading?',
      answer: 'Regular reading focuses on understanding content, while critical reading goes further to analyze arguments, evaluate evidence quality, recognize author bias, and form independent judgments about the text\'s validity.'
    },
    {
      question: 'What questions should I ask when reading critically?',
      answer: 'Key questions include: What is the author\'s purpose? What evidence supports the claims? Is the evidence reliable? What assumptions are being made? What perspective is missing? Do I agree with the conclusions?'
    },
    {
      question: 'How do I evaluate the quality of evidence in a text?',
      answer: 'Evaluate evidence by checking: Is it from credible, recent sources? Is it relevant to the claim? Is there enough evidence? Are statistics used accurately? Could the data be interpreted differently? Is there counter-evidence?'
    },
    {
      question: 'Why is critical reading important for academic success?',
      answer: 'Critical reading is essential because it develops analytical thinking, enables you to write stronger arguments, helps you identify reliable sources, prepares you for academic debates, and is tested in exams like IELTS, GRE, and GMAT.'
    }
  ];
  
  usePageMetadata({
    title: 'How to Read Critically (2026): Analysis & Evaluation Techniques | Typogrammar',
    description: 'Learn to analyze and evaluate texts critically. Master techniques for identifying arguments, evaluating evidence, recognizing bias, and making inferences in academic reading.',
    ogTitle: 'How to Read Critically (2026): Analysis & Evaluation Techniques',
    ogDescription: 'Learn to analyze and evaluate texts critically. Master techniques for identifying arguments, evaluating evidence, and recognizing bias.',
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
        headline: 'How to Read Critically (2026): Analysis & Evaluation Techniques',
        description: 'Learn to analyze and evaluate texts critically. Master techniques for identifying arguments, evaluating evidence, and recognizing bias.',
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
      <div className="bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-slate-700 dark:to-slate-600 border-l-4 border-purple-600 p-6 rounded-lg mb-8 shadow-md">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Definition:</h2>
        <p className="text-slate-800 dark:text-slate-200 leading-relaxed">
          Critical reading is the active process of analyzing, questioning, and evaluating a text to assess its arguments, evidence, and underlying assumptions.
        </p>
      </div>
      
      <div>
        <p className="font-body text-base font-semibold text-blue-600 mb-4 dark:text-blue-400">Reading Skills</p>
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight dark:text-slate-100">How to Read Critically (2026)</h1>
        
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
            Reviewed by Academic Expert
          </span>
        </div>
        
        {/* GEO Optimization */}
        <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg mb-8">
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            This critical reading guide is designed for students and academics worldwide, including those in the UK, US, Canada, Australia, and other English-speaking regions. We use neutral global English suitable for academic contexts.
          </p>
        </div>
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
      
      {/* Visible FAQ Section */}
      <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
        <ArticleHeading>Frequently Asked Questions About Critical Reading</ArticleHeading>
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

export default CriticalReadingPage;
