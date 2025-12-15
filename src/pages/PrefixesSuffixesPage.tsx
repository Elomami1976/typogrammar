
import React from 'react';
import GoogleAd from '../components/GoogleAd';
import { ArticleHeading, ArticleParagraph, InlineCode } from '../components/ArticleComponents';
import { PREFIX_CATEGORIES, SUFFIX_CATEGORIES } from '../constants/affixes';
import { Affix, AffixCategory } from '../types';
import usePageMetadata from '../hooks/usePageMetadata';

const AffixTable: React.FC<{ affixes: Affix[] }> = ({ affixes }) => (
  <div className="overflow-x-auto my-6">
    <table className="min-w-full text-left text-lg font-body">
      <thead>
        <tr className="bg-slate-100 dark:bg-slate-700">
          <th scope="col" className="px-6 py-3 font-semibold text-slate-800 w-1/4 rounded-tl-lg dark:text-slate-200">Affix</th>
          <th scope="col" className="px-6 py-3 font-semibold text-slate-800 w-1/4 dark:text-slate-200">Meaning</th>
          <th scope="col" className="px-6 py-3 font-semibold text-slate-800 w-1/2 rounded-tr-lg dark:text-slate-200">Example</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
        {affixes.map((affix, index) => (
          <tr key={index} className="odd:bg-white even:bg-slate-50 dark:odd:bg-slate-800/50 dark:even:bg-slate-800/20">
            <td className="px-6 py-4"><InlineCode>{affix.affix}</InlineCode></td>
            <td className="px-6 py-4 text-slate-700 dark:text-slate-300">{affix.meaning}</td>
            <td className="px-6 py-4 text-slate-600 dark:text-slate-400" dangerouslySetInnerHTML={{ __html: affix.example }} />
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Section: React.FC<{ title: string; categories: AffixCategory[] }> = ({ title, categories }) => (
  <section className="mt-12">
    <ArticleHeading>{title}</ArticleHeading>
    {categories.map(category => (
      <div key={category.category} className="mt-8">
        <h3 className="font-heading text-2xl font-bold text-slate-800 dark:text-slate-200">{category.category}</h3>
        <ArticleParagraph>{category.description}</ArticleParagraph>
        <AffixTable affixes={category.affixes} />
      </div>
    ))}
  </section>
);

const PrefixesSuffixesPage: React.FC = () => {
  usePageMetadata({
    title: 'A Guide to Prefixes & Suffixes | TypoGrammar',
    description: 'Expand your vocabulary by learning the most common English prefixes and suffixes. Understand how they change a word\'s meaning with clear tables and examples.'
  });

  return (
    <>
    <article className="max-w-6xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
      <div className="flex justify-between items-start">
        <div>
          <p className="font-body text-base font-semibold text-blue-600 mb-4 dark:text-blue-400">Vocabulary</p>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight dark:text-slate-100">Understanding Prefixes & Suffixes</h1>
        </div>
      </div>

      <ArticleParagraph>
        Understanding prefixes and suffixes is like having a secret key to unlock the meaning of thousands of English words. A <strong>prefix</strong> is a group of letters added to the beginning of a word to change its meaning. A <strong>suffix</strong> is added to the end. By learning the most common ones, you can dramatically expand your vocabulary and improve your reading comprehension.
      </ArticleParagraph>

      <Section title="Common Prefixes" categories={PREFIX_CATEGORIES} />
      <Section title="Common Suffixes" categories={SUFFIX_CATEGORIES} />
    </article>
        <div className="mt-8">
          <GoogleAd adSlot="6406598038" />
        </div>
    </>
  );
};

export default PrefixesSuffixesPage;
