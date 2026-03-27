
import React, { useState, useMemo, useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import GoogleAd from '../components/GoogleAd';
import SchemaMarkup from '../components/SchemaMarkup';
import { IDIOMS_CATEGORIES } from '../constants/idioms';
import usePageMetadata from '../hooks/usePageMetadata';

const IdiomsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const mainTheadRef = useRef<HTMLTableSectionElement>(null);
  const [categoryHeaderTop, setCategoryHeaderTop] = useState(0);

  const MAIN_SITE_HEADER_HEIGHT = 69;

  // Calculate total idioms count
  const totalIdiomsCount = useMemo(() => {
    return IDIOMS_CATEGORIES.reduce((total, category) => total + category.idioms.length, 0);
  }, []);

  usePageMetadata({
    title: `${totalIdiomsCount}+ English Idioms and Expressions with Meanings & Examples | TypoGrammar`,
    description: `Master ${totalIdiomsCount}+ common English idioms organized by 20 categories. Complete searchable database with definitions, meanings, and example sentences. Learn idioms about animals, body parts, food, money, time, weather, work, emotions, relationships, and more to speak English like a native.`
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
        headline: `${totalIdiomsCount}+ English Idioms and Expressions: Complete Guide with Meanings & Examples`,
        description: `Comprehensive collection of ${totalIdiomsCount}+ English idioms organized by 20 topics including animals, body parts, food, money, time, weather, work, emotions, and more. Each idiom includes clear definitions and example sentences for ESL learners.`,
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
        dateModified: '2026-03-20',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://typogrammar.com/idioms'
        },
        keywords: 'English idioms, idiomatic expressions, figurative language, ESL idioms, common English phrases, English expressions, native speaker English, idioms with meanings, idioms with examples, American idioms, British idioms',
        educationalLevel: 'Intermediate to Advanced',
        learningResourceType: 'Reference Guide',
        interactivityType: 'active',
        inLanguage: 'en',
        isAccessibleForFree: true,
        audience: {
          '@type': 'EducationalAudience',
          educationalRole: 'student',
          audienceType: 'ESL learners, English students, TOEFL/IELTS test takers'
        }
      }}
    />
    
    {/* FAQ Schema for GEO optimization */}
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is an idiom in English?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'An idiom is a phrase or expression that has a figurative meaning different from the literal meaning of the individual words. For example, "break the ice" doesn\'t mean physically breaking ice—it means to initiate conversation in a social setting to reduce tension or awkwardness.'
          }
        },
        {
          '@type': 'Question',
          name: 'Why should I learn English idioms?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Learning idioms is essential for fluency because native speakers use them constantly in everyday conversation. Understanding idioms helps you: 1) Comprehend movies, TV shows, and books better, 2) Sound more natural when speaking, 3) Score higher on English proficiency tests like TOEFL and IELTS, 4) Understand workplace communication, and 5) Connect with native speakers on a deeper level.'
          }
        },
        {
          '@type': 'Question',
          name: 'What are the most common English idioms?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Some of the most common English idioms include: "Break the ice" (start a conversation), "Piece of cake" (very easy), "Hit the nail on the head" (be exactly right), "Once in a blue moon" (very rarely), "Bite the bullet" (face a difficult situation), "Cost an arm and a leg" (very expensive), "Under the weather" (feeling sick), and "Let the cat out of the bag" (reveal a secret).'
          }
        },
        {
          '@type': 'Question',
          name: 'How many idioms are in the English language?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The English language contains over 25,000 idiomatic expressions. However, native speakers typically use around 500-1,000 idioms in everyday conversation. This guide covers over 300 of the most commonly used English idioms organized by category to help learners master the most practical expressions first.'
          }
        },
        {
          '@type': 'Question',
          name: 'What is the difference between an idiom and a proverb?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'While both are figurative expressions, idioms are phrases whose meaning cannot be deduced from the literal words (e.g., "kick the bucket" means to die), whereas proverbs are short sayings that express a general truth or piece of advice (e.g., "A stitch in time saves nine" advises addressing problems early). Proverbs are complete sentences; idioms are often phrases used within sentences.'
          }
        }
      ]
    })}} />

    {/* DefinedTermSet Schema for idiom definitions */}
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'DefinedTermSet',
      name: 'English Idioms and Expressions Dictionary',
      description: `A comprehensive collection of ${totalIdiomsCount}+ English idioms with definitions and example sentences`,
      inLanguage: 'en',
      hasDefinedTerm: IDIOMS_CATEGORIES.slice(0, 3).flatMap(cat => 
        cat.idioms.slice(0, 5).map(idiom => ({
          '@type': 'DefinedTerm',
          name: idiom.idiom,
          description: idiom.meaning,
          inDefinedTermSet: 'https://typogrammar.com/idioms'
        }))
      )
    })}} />

    <article className="max-w-6xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800 dark:border-slate-700 dark:shadow-slate-900/50">
      <header className="flex justify-between items-start">
        <div>
          <p className="font-body text-base font-semibold text-blue-600 mb-4 dark:text-blue-400">Vocabulary • Idioms & Expressions</p>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight dark:text-slate-100">English Idioms & Expressions</h1>
          <p className="font-body text-xl text-slate-600 max-w-3xl mb-4 dark:text-slate-400">
            Master <strong>{totalIdiomsCount}+ common idioms</strong> to make your English sound more natural and fluent. Search by phrase or meaning.
          </p>
          <p className="font-body text-sm text-slate-500 dark:text-slate-400 mb-8">
            Last updated: March 2026 • {IDIOMS_CATEGORIES.length} categories • Searchable database
          </p>
        </div>
      </header>

      {/* Introduction section for better SEO/GEO */}
      <section className="mb-10 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100 dark:from-slate-700/50 dark:to-slate-700/30 dark:border-slate-600">
        <h2 className="font-heading text-2xl font-bold text-slate-800 mb-4 dark:text-slate-200">What Are English Idioms?</h2>
        <p className="font-body text-slate-700 mb-4 dark:text-slate-300">
          <strong>Idioms</strong> are phrases or expressions whose meaning cannot be understood from the literal definition of the words. They are a crucial part of natural English communication. For example, when someone says "<em>it's raining cats and dogs</em>," they don't mean animals are falling from the sky—they mean it's raining heavily.
        </p>
        <p className="font-body text-slate-700 mb-4 dark:text-slate-300">
          This comprehensive guide contains <strong>{totalIdiomsCount}+ carefully curated English idioms</strong> organized into {IDIOMS_CATEGORIES.length} practical categories including idioms about <strong>animals, body parts, food, money, time, weather, work, emotions, relationships,</strong> and more.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white/70 dark:bg-slate-800/50 p-4 rounded-lg text-center">
            <span className="block text-3xl font-bold text-blue-600 dark:text-blue-400">{totalIdiomsCount}+</span>
            <span className="text-sm text-slate-600 dark:text-slate-400">Idioms & Expressions</span>
          </div>
          <div className="bg-white/70 dark:bg-slate-800/50 p-4 rounded-lg text-center">
            <span className="block text-3xl font-bold text-blue-600 dark:text-blue-400">{IDIOMS_CATEGORIES.length}</span>
            <span className="text-sm text-slate-600 dark:text-slate-400">Topic Categories</span>
          </div>
          <div className="bg-white/70 dark:bg-slate-800/50 p-4 rounded-lg text-center">
            <span className="block text-3xl font-bold text-blue-600 dark:text-blue-400">100%</span>
            <span className="text-sm text-slate-600 dark:text-slate-400">With Examples</span>
          </div>
        </div>
      </section>

      {/* Category quick navigation */}
      <nav className="mb-8" aria-label="Idiom categories">
        <h2 className="font-heading text-lg font-semibold text-slate-800 mb-3 dark:text-slate-200">Jump to Category:</h2>
        <div className="flex flex-wrap gap-2">
          {IDIOMS_CATEGORIES.map(cat => (
            <a
              key={cat.category}
              href={`#${cat.category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
              className="px-3 py-1.5 bg-slate-100 hover:bg-blue-100 text-slate-700 hover:text-blue-700 rounded-full text-sm font-medium transition-colors dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-blue-900/50 dark:hover:text-blue-300"
            >
              {cat.category}
            </a>
          ))}
        </div>
      </nav>

      <div className="mb-8 sticky top-[80px] z-10">
        <input
          id="idioms-search"
          name="idioms-search"
          type="search"
          autoComplete="off"
          placeholder="Search for an idiom or meaning..."
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-body text-lg transition-shadow duration-200 shadow-sm dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200 dark:focus:ring-blue-500 dark:placeholder-slate-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search idioms"
        />
      </div>

      <section className="overflow-x-auto" aria-label="Idioms table">
        <table className="min-w-full text-left text-lg font-body border-collapse">
          <thead ref={mainTheadRef} className="sticky top-[69px] z-10 bg-slate-100 dark:bg-slate-700">
            <tr>
              <th scope="col" className="px-6 py-4 font-bold text-slate-800 w-1/4 rounded-tl-lg dark:text-slate-200">Idiom</th>
              <th scope="col" className="px-6 py-4 font-bold text-slate-800 w-1/4 dark:text-slate-200">Meaning</th>
              <th scope="col" className="px-6 py-4 font-bold text-slate-800 w-1/2 rounded-tr-lg dark:text-slate-200">Example Sentence</th>
            </tr>
          </thead>
          <tbody>
            {filteredCategories.length > 0 ? filteredCategories.map(category => (
              <React.Fragment key={category.category}>
                <tr>
                  <th
                    colSpan={3}
                    scope="colgroup"
                    id={category.category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}
                    className="px-6 py-3 font-heading text-2xl font-bold text-slate-700 bg-slate-200 sticky z-5 border-b border-t border-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-600 scroll-mt-32"
                    style={categoryHeaderTop > 0 ? { top: `${categoryHeaderTop}px` } : {}}
                  >
                    {category.category} Idioms
                    <span className="ml-2 text-sm font-normal text-slate-500 dark:text-slate-400">({category.idioms.length} expressions)</span>
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
                  No idioms found matching "<strong>{searchTerm}</strong>". Try a different search term.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
      {/* Tips for Learning Idioms */}
      <section className="mt-12 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100 dark:from-slate-700/50 dark:to-slate-700/30 dark:border-slate-600">
        <h2 className="font-heading text-2xl font-bold text-slate-800 mb-4 dark:text-slate-200">How to Learn English Idioms Effectively</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-slate-800 mb-2 dark:text-slate-200">✅ Best Practices</h3>
            <ul className="space-y-2 text-slate-700 dark:text-slate-300">
              <li>• <strong>Learn in context</strong> – Study idioms through example sentences, not just definitions</li>
              <li>• <strong>Group by theme</strong> – Learn related idioms together (all food idioms, all weather idioms)</li>
              <li>• <strong>Practice actively</strong> – Use new idioms in your writing and speaking</li>
              <li>• <strong>Watch native content</strong> – Movies and shows expose you to natural idiom usage</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800 mb-2 dark:text-slate-200">⚠️ Common Mistakes to Avoid</h3>
            <ul className="space-y-2 text-slate-700 dark:text-slate-300">
              <li>• Don't translate idioms literally to your native language</li>
              <li>• Avoid mixing parts of different idioms together</li>
              <li>• Be aware of regional differences (British vs. American idioms)</li>
              <li>• Don't overuse idioms – they should enhance, not dominate, your speech</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section (visible on page) */}
      <section className="mt-12">
        <h2 className="font-heading text-2xl font-bold text-slate-800 mb-6 dark:text-slate-200">Frequently Asked Questions About English Idioms</h2>
        <div className="space-y-4">
          <details className="group bg-slate-50 dark:bg-slate-700/50 rounded-lg">
            <summary className="flex justify-between items-center cursor-pointer p-4 font-semibold text-slate-800 dark:text-slate-200">
              What is an idiom in English?
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <p className="px-4 pb-4 text-slate-700 dark:text-slate-300">An idiom is a phrase or expression whose meaning cannot be understood from the literal definition of the words. For example, "<em>break the ice</em>" doesn't mean physically breaking ice—it means to initiate conversation in a social setting to reduce tension or awkwardness.</p>
          </details>
          <details className="group bg-slate-50 dark:bg-slate-700/50 rounded-lg">
            <summary className="flex justify-between items-center cursor-pointer p-4 font-semibold text-slate-800 dark:text-slate-200">
              Why should I learn English idioms?
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <p className="px-4 pb-4 text-slate-700 dark:text-slate-300">Learning idioms is essential for fluency because native speakers use them constantly. Understanding idioms helps you comprehend movies and books better, sound more natural when speaking, score higher on tests like TOEFL and IELTS, understand workplace communication, and connect with native speakers.</p>
          </details>
          <details className="group bg-slate-50 dark:bg-slate-700/50 rounded-lg">
            <summary className="flex justify-between items-center cursor-pointer p-4 font-semibold text-slate-800 dark:text-slate-200">
              What are the most common English idioms?
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <p className="px-4 pb-4 text-slate-700 dark:text-slate-300">Some of the most common idioms include: "<em>Break the ice</em>" (start a conversation), "<em>Piece of cake</em>" (very easy), "<em>Hit the nail on the head</em>" (be exactly right), "<em>Once in a blue moon</em>" (very rarely), "<em>Bite the bullet</em>" (face difficulty), and "<em>Cost an arm and a leg</em>" (very expensive).</p>
          </details>
          <details className="group bg-slate-50 dark:bg-slate-700/50 rounded-lg">
            <summary className="flex justify-between items-center cursor-pointer p-4 font-semibold text-slate-800 dark:text-slate-200">
              What's the difference between an idiom and a proverb?
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <p className="px-4 pb-4 text-slate-700 dark:text-slate-300">Idioms are phrases whose meaning can't be deduced from the literal words (e.g., "<em>kick the bucket</em>" = to die), while proverbs are sayings that express a general truth or advice (e.g., "<em>A stitch in time saves nine</em>"). Proverbs are complete sentences; idioms are often phrases used within sentences.</p>
          </details>
        </div>
      </section>

      {/* Related Resources */}
      <aside className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-100 dark:bg-slate-700/50 dark:border-slate-600">
        <h2 className="font-heading text-xl font-bold text-slate-800 mb-4 dark:text-slate-200">Related Vocabulary Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link to="/phrasal-verbs" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow dark:bg-slate-800 dark:hover:bg-slate-700">
            <span className="text-2xl">🔤</span>
            <h3 className="font-semibold text-slate-800 mt-2 dark:text-slate-200">Phrasal Verbs</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Essential multi-word verbs</p>
          </Link>
          <Link to="/collocations" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow dark:bg-slate-800 dark:hover:bg-slate-700">
            <span className="text-2xl">🔗</span>
            <h3 className="font-semibold text-slate-800 mt-2 dark:text-slate-200">Collocations</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Natural word combinations</p>
          </Link>
          <Link to="/confused-words" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow dark:bg-slate-800 dark:hover:bg-slate-700">
            <span className="text-2xl">🔄</span>
            <h3 className="font-semibold text-slate-800 mt-2 dark:text-slate-200">Confused Words</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Commonly mixed-up words</p>
          </Link>
          <Link to="/homophones" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow dark:bg-slate-800 dark:hover:bg-slate-700">
            <span className="text-2xl">👂</span>
            <h3 className="font-semibold text-slate-800 mt-2 dark:text-slate-200">Homophones</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Same sound, different meaning</p>
          </Link>
        </div>
      </aside>

      <div className="mt-8">
        <GoogleAd adSlot="6406598038" />
      </div>
    </article>
    </>
  );
};

export default IdiomsPage;
