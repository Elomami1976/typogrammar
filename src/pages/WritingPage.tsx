import React, { useState } from 'react';
import GoogleAd from '../components/GoogleAd';
import SchemaMarkup from '../components/SchemaMarkup';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading, InlineCode, CodeBlock, ExampleList, BulletList } from '../components/ArticleComponents';

const WritingPage: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  usePageMetadata({
    title: 'How to Write a Perfect Essay – Step-by-Step Guide (2025) | TypoGrammar',
    description: 'Master essay writing with our comprehensive 6-step guide. Learn how to craft strong thesis statements, develop body paragraphs using the PEEL method, and write compelling conclusions. Includes templates and examples.'
  });

  const faqData = [
    {
      question: 'What is the best structure for an essay?',
      answer: 'The standard essay structure includes five main parts: an Introduction (with hook, background, and thesis), three Body Paragraphs (each with topic sentence, evidence, explanation, and link), and a Conclusion (restating thesis and summarizing key points). This structure works for most academic essays, though longer essays may have more body paragraphs.'
    },
    {
      question: 'What is a thesis statement and where does it go?',
      answer: 'A thesis statement is a clear, concise sentence that presents your main argument or position on the topic. It should be debatable (not just a fact) and specific. The thesis statement typically appears at the end of your introduction paragraph, serving as a roadmap for your entire essay.'
    },
    {
      question: 'How do I write a strong hook for my essay introduction?',
      answer: 'Effective hooks include: a surprising statistic or fact, a thought-provoking question, a relevant quote, a brief anecdote, or a bold statement. The hook should relate directly to your topic and make the reader want to continue reading. Avoid clichés like "Since the beginning of time."'
    },
    {
      question: 'What is the PEEL method for body paragraphs?',
      answer: 'PEEL stands for Point, Evidence, Explanation, Link. Start with a Point (your topic sentence), provide Evidence (quotes, facts, examples), add Explanation (analyze how the evidence supports your point), and end with a Link (connect back to your thesis or transition to the next paragraph). This structure ensures well-developed paragraphs.'
    },
    {
      question: 'How long should an essay be?',
      answer: 'Essay length depends on the assignment requirements. A typical high school essay is 500-800 words (5 paragraphs), while college essays range from 1,000-2,500 words. Graduate-level essays may be longer. Always check your specific assignment guidelines and focus on quality over quantity.'
    },
    {
      question: 'What should I avoid in essay writing?',
      answer: 'Avoid: using first person (I, me) in formal essays, introducing new ideas in the conclusion, plagiarism, vague language, unsupported claims, run-on sentences, contractions in academic writing, and submitting without proofreading. Also avoid starting sentences with "This essay will..." or using filler phrases.'
    }
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <>
    <SchemaMarkup
      type="Article"
      data={{
        headline: 'How to Write a Perfect Essay: Complete Step-by-Step Guide',
        description: 'Master essay writing with our comprehensive guide. Learn structure, thesis statements, body paragraphs, and conclusions with examples.',
        author: {
          '@type': 'Organization',
          name: 'TypoGrammar'
        },
        publisher: {
          '@type': 'Organization',
          name: 'TypoGrammar',
          url: 'https://typogrammar.com'
        },
        datePublished: '2024-01-10',
        dateModified: '2025-12-25',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://typogrammar.com/writing/how-to-write-an-essay'
        },
        keywords: 'essay writing, how to write an essay, essay structure, thesis statement, PEEL method, academic writing, body paragraphs, introduction, conclusion',
        educationalLevel: 'High School to University',
        learningResourceType: 'Writing Guide'
      }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
    <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
      <div className="flex justify-between items-start">
        <div>
          <p className="font-body text-base font-semibold text-blue-600 mb-4 dark:text-blue-400">Writing Skills • Essay Writing</p>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight dark:text-slate-100">How to Write a Perfect Essay</h1>
          <p className="font-body text-xl text-slate-600 mb-8 dark:text-slate-400">
            A complete step-by-step guide to writing clear, persuasive, and well-structured essays
          </p>
        </div>
      </div>

      {/* Quick Navigation */}
      <nav className="mb-10 p-6 bg-slate-50 rounded-xl border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700" aria-label="Essay writing steps">
        <h2 className="font-heading text-lg font-bold text-slate-800 mb-4 dark:text-slate-200">6 Steps to Essay Success</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { num: '1', label: 'Understand the Prompt', id: 'step-1' },
            { num: '2', label: 'Brainstorm & Outline', id: 'step-2' },
            { num: '3', label: 'Write Introduction', id: 'step-3' },
            { num: '4', label: 'Craft Body Paragraphs', id: 'step-4' },
            { num: '5', label: 'Write Conclusion', id: 'step-5' },
            { num: '6', label: 'Revise & Proofread', id: 'step-6' },
          ].map(step => (
            <a
              key={step.id}
              href={`#${step.id}`}
              className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all dark:bg-slate-800 dark:border-slate-700 dark:hover:border-blue-600"
            >
              <span className="w-6 h-6 flex items-center justify-center bg-blue-600 text-white rounded-full text-sm font-bold">{step.num}</span>
              <span className="text-sm text-slate-700 dark:text-slate-300">{step.label}</span>
            </a>
          ))}
        </div>
      </nav>
      
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

      <ArticleHeading id="step-1">Step 1: Understand the Prompt</ArticleHeading>
      <ArticleParagraph>
        Before you write a single word, you must fully understand the essay question or prompt. Misinterpreting the prompt is one of the most common reasons for a low grade. Break it down by identifying keywords and constraints.
      </ArticleParagraph>
      <BulletList items={[
        <><strong>Identify action words:</strong> These tell you what to do. Look for verbs like <InlineCode>analyze</InlineCode>, <InlineCode>compare</InlineCode>, <InlineCode>contrast</InlineCode>, <InlineCode>discuss</InlineCode>, <InlineCode>evaluate</InlineCode>, or <InlineCode>explain</InlineCode>.</>,
        <><strong>Identify key concepts:</strong> What are the main topics or ideas you need to focus on?</>,
        <><strong>Identify constraints:</strong> Note the required length (word count), formatting, and deadline.</>,
      ]} />

      <ArticleHeading id="step-2">Step 2: Brainstorm & Outline</ArticleHeading>
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

      <ArticleHeading id="step-3">Step 3: Writing the Introduction</ArticleHeading>
      <ArticleParagraph>
        Your introduction has three main goals: grab the reader's attention, provide context for your topic, and present your main argument in a clear thesis statement.
      </ArticleParagraph>
       <BulletList items={[
        <><strong>The Hook:</strong> Start with a compelling fact, a relevant quote, a thought-provoking question, or a brief anecdote.</>,
        <><strong>Background:</strong> Briefly provide context that the reader needs to understand your topic.</>,
        <><strong>Thesis Statement:</strong> This is the most important sentence in your essay. It's a clear, concise, and debatable statement that presents your main argument. It should tell the reader exactly what your essay will prove.</>,
      ]} />

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>

      <ArticleHeading id="step-4">Step 4: Crafting Body Paragraphs</ArticleHeading>
      <ArticleParagraph>
        Each body paragraph should focus on a single main idea that supports your thesis. A popular and effective structure for body paragraphs is the PEEL method (Point, Evidence, Explanation, Link).
      </ArticleParagraph>
      
      {/* PEEL Method Visual */}
      <div className="my-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200 dark:from-blue-900/20 dark:to-indigo-900/20 dark:border-blue-800/30">
        <h3 className="font-heading text-lg font-bold text-blue-800 mb-4 dark:text-blue-200">The PEEL Method</h3>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="p-4 bg-white rounded-lg border border-blue-100 dark:bg-slate-800 dark:border-slate-700">
            <div className="text-2xl font-bold text-blue-600 mb-2">P</div>
            <div className="font-semibold text-slate-800 dark:text-slate-200">Point</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Topic sentence stating your main point</div>
          </div>
          <div className="p-4 bg-white rounded-lg border border-blue-100 dark:bg-slate-800 dark:border-slate-700">
            <div className="text-2xl font-bold text-indigo-600 mb-2">E</div>
            <div className="font-semibold text-slate-800 dark:text-slate-200">Evidence</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Facts, quotes, statistics, examples</div>
          </div>
          <div className="p-4 bg-white rounded-lg border border-blue-100 dark:bg-slate-800 dark:border-slate-700">
            <div className="text-2xl font-bold text-purple-600 mb-2">E</div>
            <div className="font-semibold text-slate-800 dark:text-slate-200">Explanation</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Analyze how evidence supports point</div>
          </div>
          <div className="p-4 bg-white rounded-lg border border-blue-100 dark:bg-slate-800 dark:border-slate-700">
            <div className="text-2xl font-bold text-pink-600 mb-2">L</div>
            <div className="font-semibold text-slate-800 dark:text-slate-200">Link</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Connect back to thesis or next point</div>
          </div>
        </div>
      </div>

      <ArticleParagraph>Use transition words to ensure a smooth flow between paragraphs.</ArticleParagraph>
      <ExampleList items={["Furthermore,", "In addition,", "However,", "On the other hand,", "Therefore,", "Consequently,"]} />

      <ArticleHeading id="step-5">Step 5: Writing a Strong Conclusion</ArticleHeading>
      <ArticleParagraph>
        The conclusion is your last chance to make an impact on the reader. Avoid introducing new information. Instead, synthesize what you've already discussed.
      </ArticleParagraph>
       <BulletList items={[
        <><strong>Restate the Thesis:</strong> Rephrase your main argument in a new way.</>,
        <><strong>Summarize Main Points:</strong> Briefly recap the main points from your body paragraphs.</>,
        <><strong>Provide a Final Thought:</strong> End with a memorable statement, suggest broader implications, or offer a final insight on the topic.</>,
      ]} />

      <ArticleHeading id="step-6">Step 6: Revision & Proofreading</ArticleHeading>
      <ArticleParagraph>
        Don't skip this final, crucial step. It's best to take a break after writing before you start editing.
      </ArticleParagraph>
       <BulletList items={[
        <><strong>Revise for the big picture:</strong> Check your essay for clarity, logical flow, and strength of argument. Does each paragraph support the thesis? Is the structure logical?</>,
        <><strong>Proofread for small errors:</strong> Carefully check for grammar mistakes, spelling errors, punctuation issues, and typos. Reading your essay aloud is an excellent way to catch awkward phrasing and errors.</>,
      ]} />

      {/* Tips Section */}
      <div className="mt-12 p-6 bg-green-50 rounded-xl border border-green-200 dark:bg-green-900/20 dark:border-green-800/30">
        <h3 className="font-heading text-xl font-bold text-green-800 mb-4 dark:text-green-200">Pro Tips for Better Essays</h3>
        <ul className="space-y-3 text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-3">
            <span className="text-green-500 mt-1">✓</span>
            <span><strong>Start early:</strong> Give yourself time to brainstorm, write, and revise. Rushed essays are rarely good essays.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500 mt-1">✓</span>
            <span><strong>Read your essay aloud:</strong> This helps you catch awkward phrasing, run-on sentences, and errors your eyes might miss.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500 mt-1">✓</span>
            <span><strong>Get feedback:</strong> Ask a friend, teacher, or writing center to review your essay before submitting.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500 mt-1">✓</span>
            <span><strong>Use specific evidence:</strong> Vague claims are weak. Support every point with concrete examples, quotes, or data.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500 mt-1">✓</span>
            <span><strong>Vary your sentence structure:</strong> Mix short and long sentences to create rhythm and keep readers engaged.</span>
          </li>
        </ul>
      </div>

      {/* FAQ Section */}
      <section className="mt-12">
        <ArticleHeading>Frequently Asked Questions</ArticleHeading>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="border border-slate-200 rounded-lg overflow-hidden dark:border-slate-700">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center bg-slate-50 hover:bg-slate-100 dark:bg-slate-800/50 dark:hover:bg-slate-800"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                aria-expanded={openFAQ === index}
              >
                <span className="font-semibold text-slate-800 dark:text-slate-200">{faq.question}</span>
                <span className="text-slate-500 text-xl">{openFAQ === index ? '−' : '+'}</span>
              </button>
              {openFAQ === index && (
                <div className="px-6 py-4 bg-white dark:bg-slate-800/30">
                  <p className="text-slate-700 dark:text-slate-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Related Resources */}
      <section className="mt-12 p-6 bg-slate-50 rounded-xl border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700">
        <h3 className="font-heading text-xl font-bold text-slate-800 mb-4 dark:text-slate-200">Related Writing Resources</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link to="/essay-types" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all dark:bg-slate-800 dark:border-slate-700 dark:hover:border-blue-600">
            <h4 className="font-semibold text-slate-800 dark:text-slate-200">Types of Essays</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Argumentative, expository, narrative & more</p>
          </Link>
          <Link to="/ielts/advantages-disadvantages-essay" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all dark:bg-slate-800 dark:border-slate-700 dark:hover:border-blue-600">
            <h4 className="font-semibold text-slate-800 dark:text-slate-200">IELTS Essay Writing</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Advantages/disadvantages essays</p>
          </Link>
          <Link to="/punctuation-guide" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all dark:bg-slate-800 dark:border-slate-700 dark:hover:border-blue-600">
            <h4 className="font-semibold text-slate-800 dark:text-slate-200">Punctuation Guide</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Master commas, colons, and more</p>
          </Link>
          <Link to="/sentence-structure" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all dark:bg-slate-800 dark:border-slate-700 dark:hover:border-blue-600">
            <h4 className="font-semibold text-slate-800 dark:text-slate-200">Sentence Structure</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Build clear, effective sentences</p>
          </Link>
          <Link to="/collocations" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all dark:bg-slate-800 dark:border-slate-700 dark:hover:border-blue-600">
            <h4 className="font-semibold text-slate-800 dark:text-slate-200">Collocations</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Natural word combinations</p>
          </Link>
          <Link to="/ai-writing-tools" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all dark:bg-slate-800 dark:border-slate-700 dark:hover:border-blue-600">
            <h4 className="font-semibold text-slate-800 dark:text-slate-200">AI Writing Tools</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Tools to improve your writing</p>
          </Link>
        </div>
      </section>
    </article>
    <div className="mt-8">
      <GoogleAd adSlot="6406598038" />
    </div>
    </>
  );
};

export default WritingPage;