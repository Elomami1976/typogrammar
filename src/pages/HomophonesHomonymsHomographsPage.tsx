import React from 'react';
import GoogleAd from '../components/GoogleAd';
import SchemaMarkup from '../components/SchemaMarkup';
import { ArticleParagraph, ArticleHeading, InlineCode } from '../components/ArticleComponents';
import { HOMOPHONES, HOMONYMS, HOMOGRAPHS } from '../constants/homophones';
import { WordGroup } from '../types';
import usePageMetadata from '../hooks/usePageMetadata';

const WordTable: React.FC<{ items: WordGroup[] }> = ({ items }) => (
  <div className="overflow-x-auto my-6">
    <table className="min-w-full text-left text-lg font-body">
      <thead className="bg-slate-100 dark:bg-slate-700">
        <tr>
          <th scope="col" className="px-6 py-3 font-semibold text-slate-800 rounded-tl-lg w-1/4 dark:text-slate-200">Word(s)</th>
          <th scope="col" className="px-6 py-3 font-semibold text-slate-800 rounded-tr-lg w-3/4 dark:text-slate-200">Meaning & Example</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
        {items.map((group) => (
          <tr key={group.group} className="odd:bg-white even:bg-slate-50 dark:odd:bg-slate-800/50 dark:even:bg-slate-800/20">
            <td className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 align-top">
              {group.words.map(w => w.word).join(' / ')}
            </td>
            <td className="px-6 py-4">
              {group.words.map((word, index) => (
                <div key={index} className={index < group.words.length - 1 ? 'pb-3 mb-3 border-b border-slate-200 dark:border-slate-700' : ''}>
                  <p><InlineCode>{word.word}</InlineCode> {word.pronunciation && <span className="font-code text-slate-500">{word.pronunciation}</span>}</p>
                  <p className="text-slate-700 dark:text-slate-300">{word.meaning}</p>
                  <p className="text-slate-600 dark:text-slate-400 italic">"{word.example}"</p>
                </div>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const HomophonesHomonymsHomographsPage: React.FC = () => {
  usePageMetadata({
    title: 'Homophones, Homonyms & Homographs: Complete Guide with 100+ Examples | TypoGrammar',
    description: 'Master confusing English words that sound or look alike. Complete guide to homophones (their/there), homonyms (bank/bank), and homographs (bow/bow) with pronunciations, meanings, and examples for ESL learners.'
  });

  return (
    <>
    <SchemaMarkup
      type="Article"
      data={{
        headline: 'Homophones, Homonyms, & Homographs: A Complete Guide',
        description: 'Comprehensive guide explaining the differences between homophones, homonyms, and homographs in English with extensive examples and pronunciations.',
        author: {
          '@type': 'Organization',
          name: 'TypoGrammar'
        },
        publisher: {
          '@type': 'Organization',
          name: 'TypoGrammar',
          url: 'https://typogrammar.com'
        },
        datePublished: '2024-01-15',
        dateModified: '2025-12-25',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://typogrammar.com/vocabulary/homophones-homonyms-homographs'
        },
        keywords: 'homophones, homonyms, homographs, confusing English words, sound alike words, ESL vocabulary, English spelling, pronunciation guide',
        educationalLevel: 'Beginner to Intermediate',
        learningResourceType: 'Reference Guide'
      }}
    />
    <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
      <div>
        <p className="font-body text-base font-semibold text-blue-600 mb-4 dark:text-blue-400">Vocabulary • English Learning</p>
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight dark:text-slate-100">Homophones, Homonyms, & Homographs</h1>
        <p className="font-body text-xl text-slate-600 mb-8 dark:text-slate-400">
          Understanding words that sound alike or look the same but have different meanings
        </p>
      </div>

      <ArticleParagraph>
        The English language is full of tricky words that look or sound alike but have different meanings. Understanding the distinction between homophones, homonyms, and homographs is key to avoiding confusion in both writing and speaking. This guide will help you master these commonly confused word types.
      </ArticleParagraph>

      <ArticleHeading>Homophones</ArticleHeading>
      <ArticleParagraph>
        <strong>Homophones</strong> are words that are pronounced the same but have different meanings and spellings. The name comes from Greek: <InlineCode>homo-</InlineCode> (same) + <InlineCode>-phone</InlineCode> (sound).
      </ArticleParagraph>
      <WordTable items={HOMOPHONES} />

      <ArticleHeading>Homonyms</ArticleHeading>
      <ArticleParagraph>
        <strong>Homonyms</strong> are words that are spelled the same and pronounced the same, but have different meanings. The name comes from Greek: <InlineCode>homo-</InlineCode> (same) + <InlineCode>-nym</InlineCode> (name).
      </ArticleParagraph>
      <WordTable items={HOMONYMS} />

      <ArticleHeading>Homographs</ArticleHeading>
      <ArticleParagraph>
        <strong>Homographs</strong> are words that are spelled the same but have different meanings and may have different pronunciations. The name comes from Greek: <InlineCode>homo-</InlineCode> (same) + <InlineCode>-graph</InlineCode> (writing).
      </ArticleParagraph>
      <WordTable items={HOMOGRAPHS} />
    </article>
        <div className="mt-8">
          <GoogleAd adSlot="6406598038" />
        </div>
    </>
  );
};

export default HomophonesHomonymsHomographsPage;
