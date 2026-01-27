
import React, { useState, useMemo, useRef, useLayoutEffect } from 'react';
import GoogleAd from '../components/GoogleAd';
import SchemaMarkup from '../components/SchemaMarkup';
import { IDIOMS_CATEGORIES } from '../constants/idioms';
import usePageMetadata from '../hooks/usePageMetadata';

const IdiomsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const mainTheadRef = useRef<HTMLTableSectionElement>(null);
  const [categoryHeaderTop, setCategoryHeaderTop] = useState(0);

  const MAIN_SITE_HEADER_HEIGHT = 69;

  usePageMetadata({
    title: '250+ Common English Idioms & Expressions with Examples | TypoGrammar',
    description: 'Discover 250+ English idioms and expressions organized by category. Searchable database with meanings and examples. Learn idioms about time, money, emotions, success, relationships, health, and more to speak like a native.'
  });

  useLayoutEffect(() => {
    if (mainTheadRef.current) {
      const mainTheadHeight = mainTheadRef.current.getBoundingClientRect().height;
      setCategoryHeaderTop(MAIN_SITE_HEADER_HEIGHT + mainTheadHeight);
    }
  }, []);

  const filteredCategories = useMemo(() => {
    if (!searchTerm) {
      return IDIOMS_CATEGORIES;
    }
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    return IDIOMS_CATEGORIES.map(category => {
      const filteredIdioms = category.idioms.filter(
        idiom =>
          idiom.idiom.toLowerCase().includes(lowercasedSearchTerm) ||
          idiom.meaning.toLowerCase().includes(lowercasedSearchTerm)
      );
      return { ...category, idioms: filteredIdioms };
    }).filter(category => category.idioms.length > 0);
  }, [searchTerm]);

  return (
    <>
    <SchemaMarkup
      type="Article"
      data={{
        headline: 'Common English Idioms & Expressions: A Complete Searchable Guide',
        description: 'Comprehensive collection of 250+ English idioms organized by topic with meanings and example sentences for ESL learners.',
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
          '@id': 'https://typogrammar.com/idioms'
        },
        keywords: 'English idioms, idiomatic expressions, figurative language, ESL idioms, common phrases, English expressions, native speaker English',
        educationalLevel: 'Intermediate to Advanced',
        learningResourceType: 'Reference Guide',
        interactivityType: 'active'
      }}
    />
    <article className="max-w-6xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800 dark:border-slate-700 dark:shadow-slate-900/50">
      <div className="flex justify-between items-start">
        <div>
          <p className="font-body text-base font-semibold text-blue-600 mb-4 dark:text-blue-400">Vocabulary • Idioms</p>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight dark:text-slate-100">English Idioms & Expressions</h1>
          <p className="font-body text-xl text-slate-600 max-w-3xl mb-8 dark:text-slate-400">
            Master 250+ common idioms to make your English sound more natural and fluent. Search by phrase or meaning.
          </p>
        </div>
      </div>

      <div className="mb-8 sticky top-[80px] z-10">
        <input
          type="search"
          placeholder="Search for an idiom or meaning..."
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-body text-lg transition-shadow duration-200 shadow-sm dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200 dark:focus:ring-blue-500 dark:placeholder-slate-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search idioms"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-lg font-body border-collapse">
          <thead ref={mainTheadRef} className="sticky top-[69px] z-10 bg-slate-100 dark:bg-slate-700">
            <tr>
              <th scope="col" className="px-6 py-4 font-bold text-slate-800 w-1/4 rounded-tl-lg dark:text-slate-200">Idiom</th>
              <th scope="col" className="px-6 py-4 font-bold text-slate-800 w-1/4 dark:text-slate-200">Meaning</th>
              <th scope="col" className="px-6 py-4 font-bold text-slate-800 w-1/2 rounded-tr-lg dark:text-slate-200">Example</th>
            </tr>
          </thead>
          <tbody>
            {filteredCategories.length > 0 ? filteredCategories.map(category => (
              <React.Fragment key={category.category}>
                <tr>
                  <th
                    colSpan={3}
                    scope="colgroup"
                    className="px-6 py-3 font-heading text-2xl font-bold text-slate-700 bg-slate-200 sticky z-5 border-b border-t border-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-600"
                    style={categoryHeaderTop > 0 ? { top: `${categoryHeaderTop}px` } : {}}
                  >
                    {category.category}
                  </th>
                </tr>
                {category.idioms.map((idiom, index) => (
                  <tr key={index} className="border-b border-slate-200 dark:border-slate-700 odd:bg-white even:bg-slate-50 hover:bg-blue-50 transition-colors duration-150 dark:odd:bg-slate-800/50 dark:even:bg-slate-800/20 dark:hover:bg-slate-700/50">
                    <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-200">{idiom.idiom}</td>
                    <td className="px-6 py-4 text-slate-700 dark:text-slate-300">{idiom.meaning}</td>
                    <td className="px-6 py-4 text-slate-600 italic dark:text-slate-400">"{idiom.example}"</td>
                  </tr>
                ))}
              </React.Fragment>
            )) : (
               <tr>
                <td colSpan={3} className="text-center py-12 text-slate-500 dark:text-slate-400">
                  No idioms found. Try a different search term.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="mt-8">
        <GoogleAd adSlot="6406598038" />
      </div>
    </article>
    </>
  );
};

export default IdiomsPage;
