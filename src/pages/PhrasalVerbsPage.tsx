
import React, { useState, useRef, useLayoutEffect } from 'react';
import { PHRASAL_VERBS_CATEGORIES } from '../constants/phrasalVerbs';
import usePageMetadata from '../hooks/usePageMetadata';
import GoogleAd from '../components/GoogleAd';

const PhrasalVerbsPage: React.FC = () => {
  const mainTheadRef = useRef<HTMLTableSectionElement>(null);
  const [categoryHeaderTop, setCategoryHeaderTop] = useState(0);

  // Height of the main site header which is also sticky.
  const MAIN_SITE_HEADER_HEIGHT = 69;

  usePageMetadata({
    title: 'Phrasal Verbs List by Category | TypoGrammar',
    description: 'Learn and master common English phrasal verbs. Our comprehensive list is organized by category, with clear meanings and examples.'
  });

  useLayoutEffect(() => {
    // This effect runs after the layout has been calculated but before the screen is painted.
    // It measures the height of the main table header (thead) so we can calculate
    // the correct 'top' position for the sticky category headers.
    if (mainTheadRef.current) {
      const mainTheadHeight = mainTheadRef.current.getBoundingClientRect().height;
      setCategoryHeaderTop(MAIN_SITE_HEADER_HEIGHT + mainTheadHeight);
    }
    // The empty dependency array ensures this effect runs only once after the initial render.
  }, []);

  return (
    <>
    // Changed dark mode background to be fully opaque (slate-800 instead of slate-800/50)
    // to prevent any potential transparency issues with sticky elements.
    <article className="max-w-6xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800 dark:border-slate-700 dark:shadow-slate-900/50">
      <div className="flex justify-between items-start">
        <h1 className="font-heading text-5xl font-extrabold text-slate-900 mb-8 tracking-tight dark:text-slate-100">Phrasal Verbs</h1>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-lg font-body border-collapse">
          {/* Main table header. Sticks below the main site header. */}
          {/* We attach a ref to it so we can measure its height. */}
          <thead ref={mainTheadRef} className="sticky top-[69px] z-10 bg-slate-100 dark:bg-slate-700">
            <tr>
              <th scope="col" className="px-6 py-4 font-bold text-slate-800 w-1/4 rounded-tl-lg dark:text-slate-200">Phrasal Verb</th>
              <th scope="col" className="px-6 py-4 font-bold text-slate-800 w-1/4 dark:text-slate-200">Meaning</th>
              <th scope="col" className="px-6 py-4 font-bold text-slate-800 w-1/2 rounded-tr-lg dark:text-slate-200">Example</th>
            </tr>
          </thead>
          <tbody>
            {PHRASAL_VERBS_CATEGORIES.map(category => (
              <React.Fragment key={category.category}>
                {/* Category header row. Sticks below the main table header. */}
                {/* Its 'top' style is calculated dynamically to ensure it sticks at the correct position. */}
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
                {category.verbs.map((verb, index) => (
                  <tr key={index} className="border-b border-slate-200 dark:border-slate-700 odd:bg-white even:bg-slate-50 hover:bg-blue-50 transition-colors duration-150 dark:odd:bg-slate-800/50 dark:even:bg-slate-800/20 dark:hover:bg-slate-700/50">
                    <td className="px-6 py-4 font-medium text-slate-900 font-code dark:text-slate-200">{verb.phrasalVerb}</td>
                    <td className="px-6 py-4 text-slate-700 dark:text-slate-300">{verb.meaning}</td>
                    <td className="px-6 py-4 text-slate-600 italic dark:text-slate-400">"{verb.example}"</td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </article>
      <div className="mt-8">
        <GoogleAd adSlot="6406598038" />
      </div>
    </>
  );
};

export default PhrasalVerbsPage;
