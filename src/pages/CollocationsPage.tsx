
import React from 'react';
import GoogleAd from '../components/GoogleAd';
import { ArticleParagraph, ArticleHeading, InlineCode } from '../components/ArticleComponents';
import { COLLOCATION_CATEGORIES } from '../constants/collocations';
import usePageMetadata from '../hooks/usePageMetadata';

const CollocationsTable: React.FC<{ items: { collocation: string; example: string }[] }> = ({ items }) => (
  <div className="overflow-x-auto my-6">
    <table className="min-w-full text-left text-lg font-body">
      <thead>
        <tr className="bg-slate-100 dark:bg-slate-700">
          <th scope="col" className="px-6 py-3 font-semibold text-slate-800 rounded-tl-lg w-1/3 dark:text-slate-200">Collocation</th>
          <th scope="col" className="px-6 py-3 font-semibold text-slate-800 rounded-tr-lg w-2/3 dark:text-slate-200">Example</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
        {items.map(({ collocation, example }) => (
          <tr key={collocation} className="odd:bg-white even:bg-slate-50 dark:odd:bg-slate-800/50 dark:even:bg-slate-800/20">
            <td className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300"><InlineCode>{collocation}</InlineCode></td>
            <td className="px-6 py-4 text-slate-600 dark:text-slate-400 italic">"{example}"</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const CollocationsPage: React.FC = () => {
  usePageMetadata({
    title: 'Collocations: Sound More Natural in English | TypoGrammar',
    description: 'Learn common English collocations (words that go together) to improve your fluency. Examples of verb-noun, adjective-noun, and adverb-adjective pairings.'
  });

  return (
    <>
    <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
      <div>
        <p className="font-body text-base font-semibold text-blue-600 mb-4 dark:text-blue-400">Vocabulary</p>
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight dark:text-slate-100">Understanding Collocations</h1>
      </div>

      <ArticleParagraph>
        Collocations are words that frequently appear together. They are not fixed rules of grammar, but natural-sounding word combinations that native speakers use all the time. For example, we say <InlineCode>heavy rain</InlineCode> not <InlineCode>strong rain</InlineCode>. Learning collocations is one of the best ways to make your English sound more fluent and natural.
      </ArticleParagraph>

      {COLLOCATION_CATEGORIES.map(category => (
        <section key={category.category}>
          <ArticleHeading>{category.category}</ArticleHeading>
          <ArticleParagraph>{category.description}</ArticleParagraph>
          <CollocationsTable items={category.collocations} />
        </section>
      ))}
    </article>
        <div className="mt-8">
          <GoogleAd adSlot="6406598038" />
        </div>
    </>
  );
};

export default CollocationsPage;
