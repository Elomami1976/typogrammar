
import React, { useState, useRef, useLayoutEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { PHRASAL_VERBS_CATEGORIES } from '../constants/phrasalVerbs';
import usePageMetadata from '../hooks/usePageMetadata';
import GoogleAd from '../components/GoogleAd';
import SchemaMarkup from '../components/SchemaMarkup';

const PhrasalVerbsPage: React.FC = () => {
  const mainTheadRef = useRef<HTMLTableSectionElement>(null);
  const [categoryHeaderTop, setCategoryHeaderTop] = useState(0);

  const MAIN_SITE_HEADER_HEIGHT = 69;

  // Calculate total phrasal verbs count
  const totalPhrasalVerbsCount = useMemo(() => {
    return PHRASAL_VERBS_CATEGORIES.reduce((total, category) => total + category.verbs.length, 0);
  }, []);

  usePageMetadata({
    title: `${totalPhrasalVerbsCount}+ English Phrasal Verbs List with Meanings & Examples | TypoGrammar`,
    description: `Master ${totalPhrasalVerbsCount}+ essential English phrasal verbs organized by ${PHRASAL_VERBS_CATEGORIES.length} categories. Complete list with definitions, meanings, and example sentences. Learn phrasal verbs for communication, work, travel, relationships, and more.`
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
    <SchemaMarkup
      type="Article"
      data={{
        headline: `${totalPhrasalVerbsCount}+ English Phrasal Verbs: Complete List with Meanings & Examples`,
        description: `Comprehensive collection of ${totalPhrasalVerbsCount}+ essential English phrasal verbs organized by ${PHRASAL_VERBS_CATEGORIES.length} categories with definitions and example sentences for ESL learners.`,
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
          '@id': 'https://typogrammar.com/phrasal-verbs'
        },
        keywords: 'English phrasal verbs, phrasal verbs list, phrasal verbs with meanings, phrasal verbs examples, multi-word verbs, ESL phrasal verbs, common phrasal verbs, phrasal verbs for IELTS, phrasal verbs for TOEFL',
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
          name: 'What is a phrasal verb in English?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A phrasal verb is a verb combined with one or more particles (preposition or adverb) that creates a meaning different from the original verb. For example, "give up" means to stop trying, which is completely different from "give." Phrasal verbs are essential for natural English communication.'
          }
        },
        {
          '@type': 'Question',
          name: 'How many phrasal verbs are there in English?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'English has over 10,000 phrasal verbs, but most learners need to know around 200-300 commonly used ones for effective communication. This guide covers the most frequently used phrasal verbs organized by practical categories like work, travel, relationships, and communication.'
          }
        },
        {
          '@type': 'Question',
          name: 'What are the most common English phrasal verbs?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The most common English phrasal verbs include: "give up" (stop trying), "look forward to" (anticipate), "come up with" (think of an idea), "get along" (have good relations), "break down" (stop functioning), "turn out" (result), "figure out" (understand), and "carry on" (continue).'
          }
        },
        {
          '@type': 'Question',
          name: 'Are phrasal verbs tested on IELTS and TOEFL?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, phrasal verbs are commonly tested on IELTS and TOEFL exams, particularly in the listening and reading sections. Using phrasal verbs naturally in speaking and writing can also improve your band score by demonstrating a more advanced vocabulary range.'
          }
        },
        {
          '@type': 'Question',
          name: 'What is the difference between separable and inseparable phrasal verbs?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Separable phrasal verbs allow you to put an object between the verb and particle (e.g., "turn the light off" or "turn off the light"). Inseparable phrasal verbs must keep the verb and particle together (e.g., "look after the children," NOT "look the children after"). Many phrasal verbs with prepositions are inseparable.'
          }
        }
      ]
    })}} />

    <article className="max-w-6xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800 dark:border-slate-700 dark:shadow-slate-900/50">
      <header className="flex justify-between items-start">
        <div>
          <p className="font-body text-base font-semibold text-blue-600 mb-4 dark:text-blue-400">Vocabulary • Phrasal Verbs</p>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight dark:text-slate-100">English Phrasal Verbs List</h1>
          <p className="font-body text-xl text-slate-600 max-w-3xl mb-4 dark:text-slate-400">
            Master <strong>{totalPhrasalVerbsCount}+ essential phrasal verbs</strong> to speak English more naturally. Organized by category with clear meanings and examples.
          </p>
          <p className="font-body text-sm text-slate-500 dark:text-slate-400 mb-8">
            Last updated: March 2026 • {PHRASAL_VERBS_CATEGORIES.length} categories • Complete reference guide
          </p>
        </div>
      </header>

      {/* Introduction section for better SEO/GEO */}
      <section className="mb-10 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100 dark:from-slate-700/50 dark:to-slate-700/30 dark:border-slate-600">
        <h2 className="font-heading text-2xl font-bold text-slate-800 mb-4 dark:text-slate-200">What Are Phrasal Verbs?</h2>
        <p className="font-body text-slate-700 mb-4 dark:text-slate-300">
          <strong>Phrasal verbs</strong> are combinations of a verb and one or more particles (prepositions or adverbs) that create a completely new meaning. For example, "<em>give up</em>" doesn't mean "give" + "up" literally—it means to stop trying or quit something.
        </p>
        <p className="font-body text-slate-700 mb-4 dark:text-slate-300">
          This comprehensive guide contains <strong>{totalPhrasalVerbsCount}+ carefully curated phrasal verbs</strong> organized into {PHRASAL_VERBS_CATEGORIES.length} practical categories including <strong>communication, work, relationships, travel, health,</strong> and more—essential for IELTS, TOEFL, and everyday conversation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white/70 dark:bg-slate-800/50 p-4 rounded-lg text-center">
            <span className="block text-3xl font-bold text-blue-600 dark:text-blue-400">{totalPhrasalVerbsCount}+</span>
            <span className="text-sm text-slate-600 dark:text-slate-400">Phrasal Verbs</span>
          </div>
          <div className="bg-white/70 dark:bg-slate-800/50 p-4 rounded-lg text-center">
            <span className="block text-3xl font-bold text-blue-600 dark:text-blue-400">{PHRASAL_VERBS_CATEGORIES.length}</span>
            <span className="text-sm text-slate-600 dark:text-slate-400">Topic Categories</span>
          </div>
          <div className="bg-white/70 dark:bg-slate-800/50 p-4 rounded-lg text-center">
            <span className="block text-3xl font-bold text-blue-600 dark:text-blue-400">100%</span>
            <span className="text-sm text-slate-600 dark:text-slate-400">With Examples</span>
          </div>
        </div>
      </section>

      {/* Category quick navigation */}
      <nav className="mb-8" aria-label="Phrasal verb categories">
        <h2 className="font-heading text-lg font-semibold text-slate-800 mb-3 dark:text-slate-200">Jump to Category:</h2>
        <div className="flex flex-wrap gap-2">
          {PHRASAL_VERBS_CATEGORIES.map(cat => (
            <a
              key={cat.category}
              href={`#${cat.category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and').replace(/:/g, '')}`}
              className="px-3 py-1.5 bg-slate-100 hover:bg-blue-100 text-slate-700 hover:text-blue-700 rounded-full text-sm font-medium transition-colors dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-blue-900/50 dark:hover:text-blue-300"
            >
              {cat.category}
            </a>
          ))}
        </div>
      </nav>
      
      <section className="overflow-x-auto" aria-label="Phrasal verbs table">
        <table className="min-w-full text-left text-lg font-body border-collapse">
          {/* Main table header. Sticks below the main site header. */}
          {/* We attach a ref to it so we can measure its height. */}
          <thead ref={mainTheadRef} className="sticky top-[69px] z-10 bg-slate-100 dark:bg-slate-700">
            <tr>
              <th scope="col" className="px-6 py-4 font-bold text-slate-800 w-1/4 rounded-tl-lg dark:text-slate-200">Phrasal Verb</th>
              <th scope="col" className="px-6 py-4 font-bold text-slate-800 w-1/4 dark:text-slate-200">Meaning</th>
              <th scope="col" className="px-6 py-4 font-bold text-slate-800 w-1/2 rounded-tr-lg dark:text-slate-200">Example Sentence</th>
            </tr>
          </thead>
          <tbody>
            {PHRASAL_VERBS_CATEGORIES.map(category => (
              <React.Fragment key={category.category}>
                <tr>
                  <th 
                    colSpan={3} 
                    scope="colgroup"
                    id={category.category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and').replace(/:/g, '')}
                    className="px-6 py-3 font-heading text-2xl font-bold text-slate-700 bg-slate-200 sticky z-5 border-b border-t border-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-600 scroll-mt-32"
                    style={categoryHeaderTop > 0 ? { top: `${categoryHeaderTop}px` } : {}}
                  >
                    {category.category} Phrasal Verbs
                    <span className="ml-2 text-sm font-normal text-slate-500 dark:text-slate-400">({category.verbs.length} verbs)</span>
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
      </section>

      {/* Tips for Learning Phrasal Verbs */}
      <section className="mt-12 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100 dark:from-slate-700/50 dark:to-slate-700/30 dark:border-slate-600">
        <h2 className="font-heading text-2xl font-bold text-slate-800 mb-4 dark:text-slate-200">How to Learn Phrasal Verbs Effectively</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-slate-800 mb-2 dark:text-slate-200">✅ Best Practices</h3>
            <ul className="space-y-2 text-slate-700 dark:text-slate-300">
              <li>• <strong>Learn in context</strong> – Study phrasal verbs through example sentences, not just definitions</li>
              <li>• <strong>Group by topic</strong> – Learn related verbs together (all work verbs, all travel verbs)</li>
              <li>• <strong>Practice actively</strong> – Use new phrasal verbs in your writing and speaking</li>
              <li>• <strong>Note separability</strong> – Learn whether objects can go between the verb and particle</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800 mb-2 dark:text-slate-200">⚠️ Common Mistakes to Avoid</h3>
            <ul className="space-y-2 text-slate-700 dark:text-slate-300">
              <li>• Don't memorize long lists without context—you'll forget them quickly</li>
              <li>• Avoid separating inseparable phrasal verbs ("look after him" ✓, not "look him after")</li>
              <li>• Be aware that the same phrasal verb can have multiple meanings</li>
              <li>• Don't overuse phrasal verbs in formal academic writing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Separable vs Inseparable explanation */}
      <section className="mt-8 p-6 bg-amber-50 rounded-xl border border-amber-100 dark:bg-slate-700/50 dark:border-slate-600">
        <h2 className="font-heading text-xl font-bold text-slate-800 mb-4 dark:text-slate-200">Separable vs. Inseparable Phrasal Verbs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-green-700 mb-2 dark:text-green-400">✓ Separable (object can go in the middle)</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-2">"Turn off the light" OR "Turn the light off"</p>
            <p className="text-slate-700 dark:text-slate-300">"Pick up your clothes" OR "Pick your clothes up"</p>
            <p className="text-sm text-slate-500 mt-2 dark:text-slate-400">Note: When using pronouns, you MUST separate: "Turn it off" (not "Turn off it")</p>
          </div>
          <div>
            <h3 className="font-semibold text-red-700 mb-2 dark:text-red-400">✗ Inseparable (keep verb + particle together)</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-2">"Look after the children" ✓ (not "Look the children after")</p>
            <p className="text-slate-700 dark:text-slate-300">"Get over the illness" ✓ (not "Get the illness over")</p>
            <p className="text-sm text-slate-500 mt-2 dark:text-slate-400">Note: Most phrasal verbs with prepositions are inseparable.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section (visible on page) */}
      <section className="mt-12">
        <h2 className="font-heading text-2xl font-bold text-slate-800 mb-6 dark:text-slate-200">Frequently Asked Questions About Phrasal Verbs</h2>
        <div className="space-y-4">
          <details className="group bg-slate-50 dark:bg-slate-700/50 rounded-lg">
            <summary className="flex justify-between items-center cursor-pointer p-4 font-semibold text-slate-800 dark:text-slate-200">
              What is a phrasal verb in English?
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <p className="px-4 pb-4 text-slate-700 dark:text-slate-300">A phrasal verb is a verb combined with one or more particles (preposition or adverb) that creates a meaning different from the original verb. For example, "<em>give up</em>" means to stop trying, which is completely different from "<em>give</em>." Phrasal verbs are essential for natural English communication.</p>
          </details>
          <details className="group bg-slate-50 dark:bg-slate-700/50 rounded-lg">
            <summary className="flex justify-between items-center cursor-pointer p-4 font-semibold text-slate-800 dark:text-slate-200">
              How many phrasal verbs are there in English?
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <p className="px-4 pb-4 text-slate-700 dark:text-slate-300">English has over 10,000 phrasal verbs, but most learners need to know around 200-300 commonly used ones for effective communication. This guide covers the most frequently used phrasal verbs organized by practical categories.</p>
          </details>
          <details className="group bg-slate-50 dark:bg-slate-700/50 rounded-lg">
            <summary className="flex justify-between items-center cursor-pointer p-4 font-semibold text-slate-800 dark:text-slate-200">
              Are phrasal verbs tested on IELTS and TOEFL?
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <p className="px-4 pb-4 text-slate-700 dark:text-slate-300">Yes, phrasal verbs are commonly tested on IELTS and TOEFL exams, particularly in the listening and reading sections. Using phrasal verbs naturally in speaking and writing can also improve your band score by demonstrating a more advanced vocabulary range.</p>
          </details>
          <details className="group bg-slate-50 dark:bg-slate-700/50 rounded-lg">
            <summary className="flex justify-between items-center cursor-pointer p-4 font-semibold text-slate-800 dark:text-slate-200">
              What's the difference between separable and inseparable phrasal verbs?
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <p className="px-4 pb-4 text-slate-700 dark:text-slate-300">Separable phrasal verbs allow you to put an object between the verb and particle (e.g., "<em>turn the light off</em>" or "<em>turn off the light</em>"). Inseparable phrasal verbs must keep the verb and particle together (e.g., "<em>look after the children</em>," NOT "<em>look the children after</em>").</p>
          </details>
        </div>
      </section>

      {/* Related Resources */}
      <aside className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-100 dark:bg-slate-700/50 dark:border-slate-600">
        <h2 className="font-heading text-xl font-bold text-slate-800 mb-4 dark:text-slate-200">Related Vocabulary Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link to="/idioms" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow dark:bg-slate-800 dark:hover:bg-slate-700">
            <span className="text-2xl">💬</span>
            <h3 className="font-semibold text-slate-800 mt-2 dark:text-slate-200">Idioms & Expressions</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">300+ common English idioms</p>
          </Link>
          <Link to="/collocations" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow dark:bg-slate-800 dark:hover:bg-slate-700">
            <span className="text-2xl">🔗</span>
            <h3 className="font-semibold text-slate-800 mt-2 dark:text-slate-200">Collocations</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Natural word combinations</p>
          </Link>
          <Link to="/irregular-verbs" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow dark:bg-slate-800 dark:hover:bg-slate-700">
            <span className="text-2xl">📝</span>
            <h3 className="font-semibold text-slate-800 mt-2 dark:text-slate-200">Irregular Verbs</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Complete verb forms list</p>
          </Link>
          <Link to="/preposition-combinations" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow dark:bg-slate-800 dark:hover:bg-slate-700">
            <span className="text-2xl">🎯</span>
            <h3 className="font-semibold text-slate-800 mt-2 dark:text-slate-200">Preposition Combinations</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Verb + preposition patterns</p>
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

export default PhrasalVerbsPage;
