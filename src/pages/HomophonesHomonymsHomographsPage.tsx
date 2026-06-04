import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import GoogleAd from '../components/GoogleAd';
import SchemaMarkup from '../components/SchemaMarkup';
import { ArticleParagraph, ArticleHeading, InlineCode } from '../components/ArticleComponents';
import { HOMOPHONES, HOMONYMS, HOMOGRAPHS } from '../constants/homophones';
import { WordGroup } from '../types';
import usePageMetadata from '../hooks/usePageMetadata';

const WordTable: React.FC<{ items: WordGroup[]; id: string }> = ({ items, id }) => (
  <div className="overflow-x-auto my-6" id={id}>
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
  const totalExamples = useMemo(() => {
    return HOMOPHONES.length + HOMONYMS.length + HOMOGRAPHS.length;
  }, []);

  usePageMetadata({
    title: `Homophones, Homonyms & Homographs: ${totalExamples}+ Examples with Meanings | TypoGrammar`,
    description: `Master ${totalExamples}+ confusing English words that sound or look alike. Complete guide to homophones (their/there/they\'re), homonyms (bank/bank), and homographs (bow/bow) with pronunciations, meanings, and example sentences. Essential for ESL learners and English students.`
  });

  return (
    <>
    <SchemaMarkup
      type="Article"
      data={{
        headline: `Homophones, Homonyms & Homographs: Complete Guide with ${totalExamples}+ Examples`,
        description: 'Comprehensive guide explaining the differences between homophones, homonyms, and homographs in English with extensive examples, pronunciations, and meanings.',
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
          '@id': 'https://typogrammar.com/vocabulary/homophones-homonyms-homographs'
        },
        keywords: 'homophones, homonyms, homographs, confusing English words, sound alike words, ESL vocabulary, English spelling, pronunciation guide, their there they\'re, to too two, affect effect',
        educationalLevel: 'Beginner to Intermediate',
        learningResourceType: 'Reference Guide',
        inLanguage: 'en',
        isAccessibleForFree: true,
        audience: {
          '@type': 'EducationalAudience',
          educationalRole: 'student',
          audienceType: 'ESL learners, English students, writers'
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
          name: 'What is the difference between homophones, homonyms, and homographs?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Homophones are words that sound the same but have different spellings and meanings (e.g., their/there/they\'re). Homonyms are words that are spelled and pronounced the same but have different meanings (e.g., bank - financial institution vs. river bank). Homographs are words that are spelled the same but may have different pronunciations and meanings (e.g., bow - a weapon vs. bow - to bend forward).'
          }
        },
        {
          '@type': 'Question',
          name: 'What are the most commonly confused homophones in English?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The most commonly confused homophones include: their/there/they\'re, your/you\'re, its/it\'s, to/too/two, affect/effect, accept/except, principal/principle, stationary/stationery, and weather/whether. These pairs cause frequent spelling mistakes even among native speakers.'
          }
        },
        {
          '@type': 'Question',
          name: 'How can I remember the difference between homophones?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Use memory tricks: "There" has "here" in it (both about location). "Their" has "heir" in it (ownership). "You\'re" = "you are" (apostrophe replaces a letter). "It\'s" always means "it is" or "it has." Practice in context by reading and writing sentences, and use spell-check tools that catch homophone errors.'
          }
        },
        {
          '@type': 'Question',
          name: 'Are homophones tested on IELTS and TOEFL?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, understanding homophones is crucial for IELTS and TOEFL, especially in the listening sections where you must distinguish between similar-sounding words. In the writing sections, using the wrong homophone (e.g., "there" instead of "their") will lower your score for grammatical range and accuracy.'
          }
        }
      ]
    })}} />

    <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
      <header>
        <p className="font-body text-base font-semibold text-blue-600 mb-4 dark:text-blue-400">Vocabulary • Confusing Words</p>
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight dark:text-slate-100">Homophones, Homonyms & Homographs</h1>
        <p className="font-body text-xl text-slate-600 mb-4 dark:text-slate-400">
          Master <strong>{totalExamples}+ confusing word groups</strong> that sound alike or look the same but have different meanings
        </p>
        <p className="font-body text-sm text-slate-500 dark:text-slate-400 mb-8">
          Last updated: March 2026 • With pronunciations & examples
        </p>
      </header>

      {/* Stats section */}
      <section className="mb-10 p-6 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl border border-purple-100 dark:from-slate-700/50 dark:to-slate-700/30 dark:border-slate-600">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/70 dark:bg-slate-800/50 p-4 rounded-lg text-center">
            <span className="block text-3xl font-bold text-purple-600 dark:text-purple-400">{HOMOPHONES.length}</span>
            <span className="text-sm text-slate-600 dark:text-slate-400">Homophone Groups</span>
          </div>
          <div className="bg-white/70 dark:bg-slate-800/50 p-4 rounded-lg text-center">
            <span className="block text-3xl font-bold text-purple-600 dark:text-purple-400">{HOMONYMS.length}</span>
            <span className="text-sm text-slate-600 dark:text-slate-400">Homonym Groups</span>
          </div>
          <div className="bg-white/70 dark:bg-slate-800/50 p-4 rounded-lg text-center">
            <span className="block text-3xl font-bold text-purple-600 dark:text-purple-400">{HOMOGRAPHS.length}</span>
            <span className="text-sm text-slate-600 dark:text-slate-400">Homograph Groups</span>
          </div>
        </div>
      </section>

      {/* Quick navigation */}
      <nav className="mb-8" aria-label="Page sections">
        <h2 className="font-heading text-lg font-semibold text-slate-800 mb-3 dark:text-slate-200">Jump to Section:</h2>
        <div className="flex flex-wrap gap-2">
          <a href="#homophones" className="px-4 py-2 bg-slate-100 hover:bg-purple-100 text-slate-700 hover:text-purple-700 rounded-full text-sm font-medium transition-colors dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-purple-900/50">Homophones</a>
          <a href="#homonyms" className="px-4 py-2 bg-slate-100 hover:bg-purple-100 text-slate-700 hover:text-purple-700 rounded-full text-sm font-medium transition-colors dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-purple-900/50">Homonyms</a>
          <a href="#homographs" className="px-4 py-2 bg-slate-100 hover:bg-purple-100 text-slate-700 hover:text-purple-700 rounded-full text-sm font-medium transition-colors dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-purple-900/50">Homographs</a>
          <a href="#comparison" className="px-4 py-2 bg-slate-100 hover:bg-purple-100 text-slate-700 hover:text-purple-700 rounded-full text-sm font-medium transition-colors dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-purple-900/50">Comparison Chart</a>
          <a href="#faq" className="px-4 py-2 bg-slate-100 hover:bg-purple-100 text-slate-700 hover:text-purple-700 rounded-full text-sm font-medium transition-colors dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-purple-900/50">FAQ</a>
        </div>
      </nav>

      <ArticleParagraph>
        The English language is full of tricky words that look or sound alike but have different meanings. Understanding the distinction between homophones, homonyms, and homographs is key to avoiding confusion in both writing and speaking. This guide will help you master these commonly confused word types.
      </ArticleParagraph>

      <section id="homophones" className="scroll-mt-24">
        <ArticleHeading>Homophones ({HOMOPHONES.length} groups)</ArticleHeading>
        <ArticleParagraph>
          <strong>Homophones</strong> are words that are pronounced the same but have different meanings and spellings. The name comes from Greek: <InlineCode>homo-</InlineCode> (same) + <InlineCode>-phone</InlineCode> (sound). These are the most common source of spelling errors in English.
        </ArticleParagraph>
        <WordTable items={HOMOPHONES} id="homophones-table" />
      </section>

      <section id="homonyms" className="scroll-mt-24">
        <ArticleHeading>Homonyms ({HOMONYMS.length} groups)</ArticleHeading>
        <ArticleParagraph>
          <strong>Homonyms</strong> are words that are spelled the same and pronounced the same, but have different meanings. The name comes from Greek: <InlineCode>homo-</InlineCode> (same) + <InlineCode>-nym</InlineCode> (name). Context is essential for understanding which meaning is intended.
        </ArticleParagraph>
        <WordTable items={HOMONYMS} id="homonyms-table" />
      </section>

      <section id="homographs" className="scroll-mt-24">
        <ArticleHeading>Homographs ({HOMOGRAPHS.length} groups)</ArticleHeading>
        <ArticleParagraph>
          <strong>Homographs</strong> are words that are spelled the same but have different meanings and may have different pronunciations. The name comes from Greek: <InlineCode>homo-</InlineCode> (same) + <InlineCode>-graph</InlineCode> (writing). Pay attention to the pronunciation guides!
        </ArticleParagraph>
        <WordTable items={HOMOGRAPHS} id="homographs-table" />
      </section>

      {/* Comparison Chart */}
      <section id="comparison" className="mt-12 scroll-mt-24">
        <ArticleHeading>Quick Comparison Chart</ArticleHeading>
        <div className="overflow-x-auto my-6">
          <table className="min-w-full text-left text-lg font-body">
            <thead className="bg-slate-100 dark:bg-slate-700">
              <tr>
                <th className="px-6 py-3 font-semibold text-slate-800 dark:text-slate-200">Type</th>
                <th className="px-6 py-3 font-semibold text-slate-800 dark:text-slate-200">Same Spelling?</th>
                <th className="px-6 py-3 font-semibold text-slate-800 dark:text-slate-200">Same Sound?</th>
                <th className="px-6 py-3 font-semibold text-slate-800 dark:text-slate-200">Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              <tr className="bg-white dark:bg-slate-800/50">
                <td className="px-6 py-4 font-semibold text-purple-600 dark:text-purple-400">Homophone</td>
                <td className="px-6 py-4 text-red-500">✗ No</td>
                <td className="px-6 py-4 text-green-500">✓ Yes</td>
                <td className="px-6 py-4 text-slate-600 dark:text-slate-400">their / there / they're</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800/20">
                <td className="px-6 py-4 font-semibold text-purple-600 dark:text-purple-400">Homonym</td>
                <td className="px-6 py-4 text-green-500">✓ Yes</td>
                <td className="px-6 py-4 text-green-500">✓ Yes</td>
                <td className="px-6 py-4 text-slate-600 dark:text-slate-400">bank (money) / bank (river)</td>
              </tr>
              <tr className="bg-white dark:bg-slate-800/50">
                <td className="px-6 py-4 font-semibold text-purple-600 dark:text-purple-400">Homograph</td>
                <td className="px-6 py-4 text-green-500">✓ Yes</td>
                <td className="px-6 py-4 text-teal-500">Sometimes</td>
                <td className="px-6 py-4 text-slate-600 dark:text-slate-400">bow /boʊ/ / bow /baʊ/</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Tips section */}
      <section className="mt-12 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100 dark:from-slate-700/50 dark:to-slate-700/30 dark:border-slate-600">
        <h2 className="font-heading text-2xl font-bold text-slate-800 mb-4 dark:text-slate-200">Tips for Avoiding Homophone Errors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-slate-800 mb-2 dark:text-slate-200">✅ Memory Tricks</h3>
            <ul className="space-y-2 text-slate-700 dark:text-slate-300">
              <li>• <strong>"There"</strong> contains "here" - both refer to places</li>
              <li>• <strong>"Their"</strong> contains "heir" - both imply ownership</li>
              <li>• <strong>"You're"</strong> = "you are" - if you can't substitute, use "your"</li>
              <li>• <strong>"It's"</strong> always means "it is" or "it has"</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800 mb-2 dark:text-slate-200">📝 Practice Strategies</h3>
            <ul className="space-y-2 text-slate-700 dark:text-slate-300">
              <li>• Read extensively to see words used in context</li>
              <li>• Write sentences using both words in a pair</li>
              <li>• Use a grammar checker that catches homophone errors</li>
              <li>• Create flashcards for the most confusing pairs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="mt-12 scroll-mt-24">
        <h2 className="font-heading text-2xl font-bold text-slate-800 mb-6 dark:text-slate-200">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="group bg-slate-50 dark:bg-slate-700/50 rounded-lg">
            <summary className="flex justify-between items-center cursor-pointer p-4 font-semibold text-slate-800 dark:text-slate-200">
              What's the difference between homophones, homonyms, and homographs?
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <p className="px-4 pb-4 text-slate-700 dark:text-slate-300">Homophones sound the same but are spelled differently (their/there). Homonyms are spelled and pronounced the same but have different meanings (bank - money vs. river). Homographs are spelled the same but may be pronounced differently (bow - weapon vs. bow - to bend).</p>
          </details>
          <details className="group bg-slate-50 dark:bg-slate-700/50 rounded-lg">
            <summary className="flex justify-between items-center cursor-pointer p-4 font-semibold text-slate-800 dark:text-slate-200">
              What are the most commonly confused homophones?
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <p className="px-4 pb-4 text-slate-700 dark:text-slate-300">The most confused homophones include: their/there/they're, your/you're, its/it's, to/too/two, affect/effect, accept/except, and weather/whether. These cause errors even among native speakers.</p>
          </details>
          <details className="group bg-slate-50 dark:bg-slate-700/50 rounded-lg">
            <summary className="flex justify-between items-center cursor-pointer p-4 font-semibold text-slate-800 dark:text-slate-200">
              Are homophones tested on IELTS and TOEFL?
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <p className="px-4 pb-4 text-slate-700 dark:text-slate-300">Yes! In listening sections, you must distinguish between similar-sounding words. In writing, using the wrong homophone ("there" instead of "their") lowers your grammar score.</p>
          </details>
        </div>
      </section>

      {/* Related Resources */}
      <aside className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-100 dark:bg-slate-700/50 dark:border-slate-600">
        <h2 className="font-heading text-xl font-bold text-slate-800 mb-4 dark:text-slate-200">Related Vocabulary Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link to="/commonly-confused-words/" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow dark:bg-slate-800 dark:hover:bg-slate-700">
            <span className="text-2xl">🔄</span>
            <h3 className="font-semibold text-slate-800 mt-2 dark:text-slate-200">Confused Words</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Affect vs. Effect & more</p>
          </Link>
          <Link to="/vocabulary/collocations/" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow dark:bg-slate-800 dark:hover:bg-slate-700">
            <span className="text-2xl">🔗</span>
            <h3 className="font-semibold text-slate-800 mt-2 dark:text-slate-200">Collocations</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Natural word combinations</p>
          </Link>
          <Link to="/prefixes-suffixes/" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow dark:bg-slate-800 dark:hover:bg-slate-700">
            <span className="text-2xl">🧩</span>
            <h3 className="font-semibold text-slate-800 mt-2 dark:text-slate-200">Prefixes & Suffixes</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Word formation guide</p>
          </Link>
          <Link to="/idioms/" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow dark:bg-slate-800 dark:hover:bg-slate-700">
            <span className="text-2xl">💬</span>
            <h3 className="font-semibold text-slate-800 mt-2 dark:text-slate-200">English Idioms</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">300+ expressions</p>
          </Link>
        </div>
      </aside>
    </article>
        <div className="mt-8">
          <GoogleAd adSlot="6406598038" />
        </div>
    </>
  );
};

export default HomophonesHomonymsHomographsPage;
