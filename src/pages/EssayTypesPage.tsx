import React from 'react';
import GoogleAd from '../components/GoogleAd';
import { ArticleParagraph, ArticleHeading, BulletList, InlineCode } from '../components/ArticleComponents';
import usePageMetadata from '../hooks/usePageMetadata';
import { Link } from 'react-router-dom';
import SchemaMarkup from '../components/SchemaMarkup';

const EssayTypesPage: React.FC = () => {
  const pageUrl = 'https://typogrammar.com/essay-types';
  const lastUpdated = '2026-02-25';
  const datePublished = '2025-03-10';

  // FAQ data for schema and display
  const faqData = [
    {
      question: 'What are the 3 main types of essays?',
      answer: 'The three main types of essays are narrative essays (telling a story), argumentative essays (making a persuasive claim with evidence), and expository essays (explaining or informing about a topic objectively).'
    },
    {
      question: 'What is a narrative essay?',
      answer: 'A narrative essay tells a story from a personal perspective, using vivid details and a clear plot structure (beginning, middle, end) to engage readers emotionally while making a meaningful point.'
    },
    {
      question: 'How is an argumentative essay different from an expository essay?',
      answer: 'An argumentative essay makes a debatable claim and uses evidence to persuade readers, while an expository essay neutrally explains or describes a topic without advocating for a particular viewpoint.'
    },
    {
      question: 'What is the structure of a 5-paragraph essay?',
      answer: 'A 5-paragraph essay consists of: 1) Introduction with thesis statement, 2) First body paragraph with supporting point, 3) Second body paragraph, 4) Third body paragraph, 5) Conclusion restating thesis and summarizing main points.'
    },
    {
      question: 'Which essay type is best for IELTS and TOEFL?',
      answer: 'IELTS and TOEFL primarily test argumentative essays (opinion/discussion essays) and expository essays (explaining causes, effects, or processes). IELTS Task 2 often requires argumentative writing with balanced viewpoints.'
    },
    {
      question: 'What is a descriptive essay vs an expository essay?',
      answer: 'A descriptive essay uses sensory details to paint a vivid picture of a person, place, or thing, appealing to emotions. An expository essay focuses on explaining facts and information objectively without personal opinions or vivid descriptions.'
    }
  ];
  
  usePageMetadata({
    title: 'Types of Essays (2026): Narrative, Argumentative & Expository Writing Guide | Typogrammar',
    description: 'Learn the key differences between narrative, argumentative, and expository essays. Understand purpose, structure, and examples to master academic and creative writing.',
    ogTitle: 'Types of Essays (2026): Narrative, Argumentative & Expository Writing Guide',
    ogDescription: 'Learn the key differences between narrative, argumentative, and expository essays. Understand purpose, structure, and examples to master academic writing.',
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
        headline: 'Types of Essays (2026): Narrative, Argumentative & Expository Writing Guide',
        description: 'Learn the key differences between narrative, argumentative, and expository essays. Understand purpose, structure, and examples to master academic writing.',
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
      <div className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-slate-700 dark:to-slate-600 border-l-4 border-blue-600 p-6 rounded-lg mb-8 shadow-md">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Definition:</h2>
        <p className="text-slate-800 dark:text-slate-200 leading-relaxed">
          Essay types are categories of written compositions distinguished by their purpose: narrative essays tell stories, argumentative essays persuade with evidence, and expository essays explain topics objectively.
        </p>
      </div>
      
      <div>
        <p className="font-body text-base font-semibold text-blue-600 mb-4 dark:text-blue-400">Writing Skills</p>
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight dark:text-slate-100">Types of Essays: Complete Guide (2026)</h1>
        
        {/* E-E-A-T Signals */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-8">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/></svg>
            By <Link to="/about/" className="text-blue-600 dark:text-blue-400 hover:underline">Typogrammar Team</Link>
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/></svg>
            Updated: {lastUpdated}
          </span>
          <span className="flex items-center gap-1 text-green-600 dark:text-green-400">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
            Reviewed by Writing Expert
          </span>
        </div>
        
        {/* GEO Optimization */}
        <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg mb-8">
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            This essay writing guide is designed for students and professionals worldwide, including those in the UK, US, Canada, Australia, and other English-speaking regions. We use neutral global English suitable for academic and professional contexts.
          </p>
        </div>
      </div>
      
      <ArticleParagraph>
        Not all essays are created equal. Depending on your purpose, you might need to tell a story, persuade a reader, or explain a topic. Understanding the three main types of essays-narrative, argumentative, and expository-is a crucial first step to becoming a more effective and versatile writer. Each type has a distinct purpose, structure, and style.
      </ArticleParagraph>

      <ArticleHeading>1. The Narrative Essay: Telling a Story</ArticleHeading>
      <ArticleParagraph>
        A narrative essay tells a story, usually from a personal perspective. Its primary goal is to share a meaningful experience and engage the reader on an emotional level. While it tells a story, a good narrative essay also has a point or purpose-a lesson learned or an insight gained.
      </ArticleParagraph>
      <BulletList items={[
        <><strong>Purpose:</strong> To tell a story that makes a point.</>,
        <><strong>Key Elements:</strong> A clear plot (beginning, middle, end), well-described characters, vivid sensory details, and often, a first-person point of view (<InlineCode>I</InlineCode>).</>,
        <><strong>Tone:</strong> Personal, reflective, and engaging.</>,
        <><strong>Example Prompt:</strong> "Write about a time you faced a significant challenge and what you learned from it."</>,
      ]} />
      <ArticleParagraph>
        A successful narrative essay connects with the reader by making the personal universal, allowing them to see themselves in your experience.
      </ArticleParagraph>

      <ArticleHeading>2. The Argumentative Essay: Making a Claim</ArticleHeading>
      <ArticleParagraph>
        An argumentative (or persuasive) essay makes a clear, debatable claim and supports it with evidence. The goal is to convince the reader to accept your point of view. This is the most common type of essay in academic settings. For a deeper dive, see our guide on <Link to="/writing/how-to-build-an-argument/" className="font-semibold hover:underline">Building a Strong Argument</Link>.
      </ArticleParagraph>
      <BulletList items={[
        <><strong>Purpose:</strong> To persuade the reader with a logical argument.</>,
        <><strong>Key Elements:</strong> A strong, debatable thesis statement, logical reasoning, credible evidence (facts, statistics, expert opinions), and an acknowledgment of counterarguments.</>,
        <><strong>Tone:</strong> Formal, objective, and confident.</>,
        <><strong>Example Prompt:</strong> "Should social media platforms be regulated by the government? Argue for or against this position."</>,
      ]} />
      <ArticleParagraph>
        The strength of an argumentative essay lies in the quality of its evidence and the logical connections made between the evidence and the claim.
      </ArticleParagraph>

      <ArticleHeading>3. The Expository Essay: Explaining a Topic</ArticleHeading>
      <ArticleParagraph>
        An expository essay aims to inform, explain, or describe a topic in a clear and objective manner. Unlike an argumentative essay, it does not try to persuade the reader to a particular viewpoint. It simply presents a balanced and comprehensive overview of a subject.
      </ArticleParagraph>
      <BulletList items={[
        <><strong>Purpose:</strong> To explain or inform.</>,
        <><strong>Key Elements:</strong> A clear, focused topic, logical organization (e.g., by cause and effect, comparison, or process analysis), and factual information from reliable sources.</>,
        <><strong>Tone:</strong> Neutral, objective, and informative.</>,
        <><strong>Example Prompt:</strong> "Explain the process of photosynthesis." or "Describe the main causes of the Industrial Revolution."</>,
      ]} />
      <ArticleParagraph>
        Expository writing is all about clarity. The goal is to make a complex topic easy for the reader to understand.
      </ArticleParagraph>

      <ArticleHeading>Conclusion: Choosing the Right Tool for the Job</ArticleHeading>
      <ArticleParagraph>
        Understanding these three essay types is like having different tools in a toolbox. By choosing the right approach for your prompt and purpose, you can structure your thoughts more effectively and communicate your ideas with greater impact.
      </ArticleParagraph>
      
      {/* Visible FAQ Section */}
      <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
        <ArticleHeading>Frequently Asked Questions About Essay Types</ArticleHeading>
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

export default EssayTypesPage;
