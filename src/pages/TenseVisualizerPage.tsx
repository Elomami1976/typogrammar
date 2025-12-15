
import React from 'react';
import GoogleAd from '../components/GoogleAd';
import { GRAMMAR_TOPICS } from '../constants/grammarTopics';
import { GrammarTopic } from '../types';
import { ArticleHeading, ArticleParagraph } from '../components/ArticleComponents';
import { TimelineDiagram } from '../components/VisualAids';
import usePageMetadata from '../hooks/usePageMetadata';

const TenseVisualizerPage: React.FC = () => {
  usePageMetadata({
    title: 'Visual Tense Guide | TypoGrammar',
    description: 'Explore dynamic timelines for all English verb tenses. A visual guide to present, past, and future tenses.'
  });

  const findTimelineDiagram = (contentNode: React.ReactNode) => {
    if (!React.isValidElement(contentNode)) {
      return null;
    }
    // Cast to access children safely
    const children = React.Children.toArray((contentNode.props as { children?: React.ReactNode }).children);
    
    return children.find(child => 
      React.isValidElement(child) && child.type === TimelineDiagram
    );
  };
  
  const presentTenses = GRAMMAR_TOPICS.filter(t => t.id.startsWith('present'));
  const pastTenses = GRAMMAR_TOPICS.filter(t => t.id.startsWith('past'));
  const futureTenses = GRAMMAR_TOPICS.filter(t => t.id.startsWith('future'));

  const TenseSection: React.FC<{ title: string; topics: GrammarTopic[] }> = ({ title, topics }) => (
    <section className="mb-12">
      <ArticleHeading>{title}</ArticleHeading>
      <div className="space-y-8 mt-8">
        {topics.map(topic => {
          const diagram = findTimelineDiagram(topic.content);
          return (
            <div key={topic.id} className="p-6 bg-white rounded-lg border border-slate-200 shadow-sm dark:bg-slate-800/50 dark:border-slate-700">
              <h3 className="font-heading text-2xl font-bold text-slate-800 mb-4 dark:text-slate-200">{topic.title}</h3>
              {diagram ? diagram : <p className="text-slate-500">No diagram available for this topic.</p>}
            </div>
          );
        })}
      </div>
    </section>
  );

  return (
    <>
    <article className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight dark:text-slate-100">Visual Tense Guide</h1>
        <ArticleParagraph>
          An interactive overview of all English verb tenses, illustrated with dynamic timelines to help you understand how they relate to the past, present, and future.
        </ArticleParagraph>
      </div>

      <TenseSection title="Present Tenses" topics={presentTenses} />
      <TenseSection title="Past Tenses" topics={pastTenses} />
      <TenseSection title="Future Tenses" topics={futureTenses} />
    </article>
        <div className="mt-8">
          <GoogleAd adSlot="6406598038" />
        </div>
    </>
  );
};

export default TenseVisualizerPage;
