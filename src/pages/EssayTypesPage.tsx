import React from 'react';
import GoogleAd from '../components/GoogleAd';
import { ArticleParagraph, ArticleHeading, BulletList, InlineCode } from '../components/ArticleComponents';
import usePageMetadata from '../hooks/usePageMetadata';
import { Link } from 'react-router-dom';

const EssayTypesPage: React.FC = () => {
  usePageMetadata({
    title: 'Types of Essays: Narrative, Argumentative, Expository | TypoGrammar',
    description: 'Learn the key differences between narrative, argumentative, and expository essays. Understand the purpose, structure, and key elements of each type to improve your writing.'
  });

  return (
    <>
    <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
      <div>
        <p className="font-body text-base font-semibold text-blue-600 mb-4 dark:text-blue-400">Writing Skills</p>
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight dark:text-slate-100">Understanding Essay Types</h1>
      </div>
      
      <ArticleParagraph>
        Not all essays are created equal. Depending on your purpose, you might need to tell a story, persuade a reader, or explain a topic. Understanding the three main types of essays—narrative, argumentative, and expository—is a crucial first step to becoming a more effective and versatile writer. Each type has a distinct purpose, structure, and style.
      </ArticleParagraph>

      <ArticleHeading>1. The Narrative Essay: Telling a Story</ArticleHeading>
      <ArticleParagraph>
        A narrative essay tells a story, usually from a personal perspective. Its primary goal is to share a meaningful experience and engage the reader on an emotional level. While it tells a story, a good narrative essay also has a point or purpose—a lesson learned or an insight gained.
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
        An argumentative (or persuasive) essay makes a clear, debatable claim and supports it with evidence. The goal is to convince the reader to accept your point of view. This is the most common type of essay in academic settings. For a deeper dive, see our guide on <Link to="/writing/how-to-build-an-argument" className="font-semibold hover:underline">Building a Strong Argument</Link>.
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
    </article>
        <div className="mt-8">
          <GoogleAd adSlot="6406598038" />
        </div>
    </>
  );
};

export default EssayTypesPage;
