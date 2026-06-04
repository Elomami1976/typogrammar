
import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleAd from '../components/GoogleAd';
import SchemaMarkup from '../components/SchemaMarkup';
import { ArticleHeading, ArticleParagraph, InlineCode } from '../components/ArticleComponents';
import { PREFIX_CATEGORIES, SUFFIX_CATEGORIES } from '../constants/affixes';
import { Affix, AffixCategory } from '../types';
import usePageMetadata from '../hooks/usePageMetadata';

const AffixTable: React.FC<{ affixes: Affix[]; id?: string }> = ({ affixes, id }) => (
  <div id={id} className="overflow-x-auto my-6 scroll-mt-24">
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

const Section: React.FC<{ title: string; categories: AffixCategory[]; idPrefix: string }> = ({ title, categories, idPrefix }) => (
  <section className="mt-12">
    <ArticleHeading>{title}</ArticleHeading>
    {categories.map(category => {
      const categoryId = `${idPrefix}-${category.category.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
      return (
        <div key={category.category} className="mt-8">
          <h3 id={categoryId} className="font-heading text-2xl font-bold text-slate-800 dark:text-slate-200 scroll-mt-24">{category.category}</h3>
          <ArticleParagraph>{category.description}</ArticleParagraph>
          <AffixTable affixes={category.affixes} />
        </div>
      );
    })}
  </section>
);

const PrefixesSuffixesPage: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const { totalPrefixes, totalSuffixes, totalAffixes } = useMemo(() => {
    const prefixCount = PREFIX_CATEGORIES.reduce((acc, cat) => acc + cat.affixes.length, 0);
    const suffixCount = SUFFIX_CATEGORIES.reduce((acc, cat) => acc + cat.affixes.length, 0);
    return {
      totalPrefixes: prefixCount,
      totalSuffixes: suffixCount,
      totalAffixes: prefixCount + suffixCount
    };
  }, []);

  usePageMetadata({
    title: `Master ${totalAffixes}+ English Prefixes & Suffixes: Complete Guide | TypoGrammar`,
    description: `Master ${totalAffixes}+ English prefixes and suffixes to expand your vocabulary instantly. Learn word roots, meanings, and examples for un-, re-, -tion, -able, and more. Essential guide for ESL learners and students.`
  });

  const faqData = [
    {
      question: 'What is the difference between a prefix and a suffix?',
      answer: 'A prefix is a group of letters added to the BEGINNING of a root word to change its meaning (e.g., "un-" + "happy" = "unhappy"). A suffix is added to the END of a root word (e.g., "happy" + "-ness" = "happiness"). Both are types of affixes that modify word meanings and often change the word\'s grammatical category.'
    },
    {
      question: 'Why should I learn prefixes and suffixes?',
      answer: 'Learning prefixes and suffixes is one of the most efficient vocabulary-building strategies. A single prefix like "un-" can help you understand hundreds of words. This knowledge improves reading comprehension, helps you decode unfamiliar words, and is particularly valuable for standardized tests like TOEFL, IELTS, GRE, and SAT.'
    },
    {
      question: 'What are the most common English prefixes?',
      answer: 'The most common English prefixes include: un- (not), re- (again), dis- (not/opposite), pre- (before), mis- (wrongly), over- (too much), under- (too little), and in-/im-/il-/ir- (not). Mastering these 8-10 prefixes can help you understand thousands of English words.'
    },
    {
      question: 'What are the most useful suffixes to learn?',
      answer: 'The most useful suffixes to learn are: -tion/-sion (action/state), -ness (state of being), -ment (result/action), -able/-ible (capable of), -ful (full of), -less (without), -ly (manner), and -er/-or (person who). These suffixes appear in countless everyday words.'
    },
    {
      question: 'How do prefixes and suffixes change word meaning and form?',
      answer: 'Prefixes typically change meaning while keeping the same word class (happy → unhappy, both adjectives). Suffixes often change both meaning AND word class (happy adjective → happiness noun, teach verb → teacher noun). Understanding these patterns helps you predict word meanings and use words correctly in sentences.'
    },
    {
      question: 'Can a word have both a prefix and a suffix?',
      answer: 'Yes! Many English words have both prefixes and suffixes attached to a root. For example: "un-" + "happi" + "-ness" = "unhappiness", or "dis-" + "organize" + "-ation" = "disorganization". Recognizing these patterns helps you break down complex words into understandable parts.'
    }
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <>
    <SchemaMarkup
      type="Article"
      data={{
        headline: `Understanding Prefixes & Suffixes: ${totalAffixes}+ English Word Formation Patterns`,
        description: `Comprehensive guide to ${totalAffixes}+ English prefixes and suffixes with examples showing how they modify word meanings.`,
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
          '@id': 'https://typogrammar.com/prefixes-suffixes'
        },
        keywords: 'English prefixes, English suffixes, word formation, vocabulary building, word roots, morphology, ESL vocabulary, affixes',
        educationalLevel: 'Intermediate to Advanced',
        learningResourceType: 'Reference Guide'
      }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
    <article className="max-w-6xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
      <div className="flex justify-between items-start">
        <div>
          <p className="font-body text-base font-semibold text-blue-600 mb-4 dark:text-blue-400">Vocabulary Building • Word Formation</p>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight dark:text-slate-100">Understanding Prefixes & Suffixes</h1>
          <p className="font-body text-xl text-slate-600 mb-8 dark:text-slate-400">
            Unlock thousands of words by learning common prefixes and suffixes
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-4 mb-10 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100 dark:from-blue-900/20 dark:to-indigo-900/20 dark:border-blue-800/30">
        <div className="text-center">
          <div className="font-heading text-3xl font-bold text-blue-600 dark:text-blue-400">{totalPrefixes}</div>
          <div className="text-sm text-slate-600 dark:text-slate-400">Prefixes</div>
        </div>
        <div className="text-center border-x border-blue-200 dark:border-blue-700">
          <div className="font-heading text-3xl font-bold text-indigo-600 dark:text-indigo-400">{totalSuffixes}</div>
          <div className="text-sm text-slate-600 dark:text-slate-400">Suffixes</div>
        </div>
        <div className="text-center">
          <div className="font-heading text-3xl font-bold text-purple-600 dark:text-purple-400">{PREFIX_CATEGORIES.length + SUFFIX_CATEGORIES.length}</div>
          <div className="text-sm text-slate-600 dark:text-slate-400">Categories</div>
        </div>
      </div>

      {/* Quick Navigation */}
      <nav className="mb-10 p-6 bg-slate-50 rounded-xl border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700" aria-label="Quick navigation">
        <h2 className="font-heading text-lg font-bold text-slate-800 mb-4 dark:text-slate-200">Quick Navigation</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-slate-700 mb-2 dark:text-slate-300">Prefixes ({totalPrefixes})</h3>
            <div className="flex flex-wrap gap-2">
              {PREFIX_CATEGORIES.map(cat => {
                const categoryId = `prefix-${cat.category.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
                return (
                  <a
                    key={cat.category}
                    href={`#${categoryId}`}
                    className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors dark:bg-blue-900/40 dark:text-blue-300 dark:hover:bg-blue-800/60"
                  >
                    {cat.category.replace(' Prefixes', '')}
                  </a>
                );
              })}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-slate-700 mb-2 dark:text-slate-300">Suffixes ({totalSuffixes})</h3>
            <div className="flex flex-wrap gap-2">
              {SUFFIX_CATEGORIES.map(cat => {
                const categoryId = `suffix-${cat.category.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
                return (
                  <a
                    key={cat.category}
                    href={`#${categoryId}`}
                    className="px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded-full hover:bg-indigo-200 transition-colors dark:bg-indigo-900/40 dark:text-indigo-300 dark:hover:bg-indigo-800/60"
                  >
                    {cat.category.replace(' Suffixes', '')}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      <ArticleParagraph>
        Understanding prefixes and suffixes is like having a secret key to unlock the meaning of thousands of English words. A <strong>prefix</strong> is a group of letters added to the beginning of a word to change its meaning. A <strong>suffix</strong> is added to the end. By learning the most common ones, you can dramatically expand your vocabulary and improve your reading comprehension.
      </ArticleParagraph>

      {/* How Affixes Work */}
      <div className="my-8 p-6 bg-teal-50 rounded-xl border border-teal-200 dark:bg-teal-900/20 dark:border-teal-800/30">
        <h3 className="font-heading text-lg font-bold text-teal-800 mb-3 dark:text-teal-200">How Affixes Transform Words</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold text-teal-700 dark:text-teal-300 mb-2">Prefix Example:</p>
            <p className="text-slate-700 dark:text-slate-300">
              <span className="font-mono bg-teal-100 px-1 rounded dark:bg-teal-900/40">un-</span> + happy = <strong>unhappy</strong> (opposite meaning)
            </p>
          </div>
          <div>
            <p className="font-semibold text-teal-700 dark:text-teal-300 mb-2">Suffix Example:</p>
            <p className="text-slate-700 dark:text-slate-300">
              happy + <span className="font-mono bg-teal-100 px-1 rounded dark:bg-teal-900/40">-ness</span> = <strong>happiness</strong> (adjective → noun)
            </p>
          </div>
        </div>
      </div>

      <Section title="Common Prefixes" categories={PREFIX_CATEGORIES} idPrefix="prefix" />
      
      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>
      
      <Section title="Common Suffixes" categories={SUFFIX_CATEGORIES} idPrefix="suffix" />

      {/* Tips Section */}
      <div className="mt-12 p-6 bg-green-50 rounded-xl border border-green-200 dark:bg-green-900/20 dark:border-green-800/30">
        <h3 className="font-heading text-xl font-bold text-green-800 mb-4 dark:text-green-200">Tips for Learning Prefixes & Suffixes</h3>
        <ul className="space-y-3 text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-3">
            <span className="text-green-500 mt-1">✓</span>
            <span><strong>Start with the most common:</strong> Focus on un-, re-, dis-, -tion, -ness, -able first-they appear in thousands of words.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500 mt-1">✓</span>
            <span><strong>Learn word families:</strong> When you learn "create," also learn creation, creative, creativity, recreate.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500 mt-1">✓</span>
            <span><strong>Break words apart:</strong> When you encounter an unfamiliar word, look for prefixes and suffixes you recognize.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500 mt-1">✓</span>
            <span><strong>Notice spelling changes:</strong> Some suffixes change spelling (happy → happiness, create → creation).</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500 mt-1">✓</span>
            <span><strong>Practice with context:</strong> Use new words in sentences to remember both meaning and usage.</span>
          </li>
        </ul>
      </div>

      {/* FAQ Section */}
      <section className="mt-12">
        <ArticleHeading>Frequently Asked Questions</ArticleHeading>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="border border-slate-200 rounded-lg overflow-hidden dark:border-slate-700">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center bg-slate-50 hover:bg-slate-100 dark:bg-slate-800/50 dark:hover:bg-slate-800"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                aria-expanded={openFAQ === index}
              >
                <span className="font-semibold text-slate-800 dark:text-slate-200">{faq.question}</span>
                <span className="text-slate-500 text-xl">{openFAQ === index ? '−' : '+'}</span>
              </button>
              {openFAQ === index && (
                <div className="px-6 py-4 bg-white dark:bg-slate-800/30">
                  <p className="text-slate-700 dark:text-slate-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Related Resources */}
      <section className="mt-12 p-6 bg-slate-50 rounded-xl border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700">
        <h3 className="font-heading text-xl font-bold text-slate-800 mb-4 dark:text-slate-200">Continue Building Your Vocabulary</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link to="/collocations/" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all dark:bg-slate-800 dark:border-slate-700 dark:hover:border-blue-600">
            <h4 className="font-semibold text-slate-800 dark:text-slate-200">Collocations</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Natural word combinations</p>
          </Link>
          <Link to="/idioms/" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all dark:bg-slate-800 dark:border-slate-700 dark:hover:border-blue-600">
            <h4 className="font-semibold text-slate-800 dark:text-slate-200">Idioms</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Common English expressions</p>
          </Link>
          <Link to="/phrasal-verbs/" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all dark:bg-slate-800 dark:border-slate-700 dark:hover:border-blue-600">
            <h4 className="font-semibold text-slate-800 dark:text-slate-200">Phrasal Verbs</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Verbs with particles</p>
          </Link>
          <Link to="/homophones-homonyms-homographs/" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all dark:bg-slate-800 dark:border-slate-700 dark:hover:border-blue-600">
            <h4 className="font-semibold text-slate-800 dark:text-slate-200">Homophones & Homonyms</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Similar sounding words</p>
          </Link>
          <Link to="/commonly-confused-words/" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all dark:bg-slate-800 dark:border-slate-700 dark:hover:border-blue-600">
            <h4 className="font-semibold text-slate-800 dark:text-slate-200">Confused Words</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Commonly mixed-up words</p>
          </Link>
          <Link to="/irregular-verbs/" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all dark:bg-slate-800 dark:border-slate-700 dark:hover:border-blue-600">
            <h4 className="font-semibold text-slate-800 dark:text-slate-200">Irregular Verbs</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Master verb forms</p>
          </Link>
        </div>
      </section>
    </article>
    <div className="mt-8">
      <GoogleAd adSlot="6406598038" />
    </div>
    </>
  );
};

export default PrefixesSuffixesPage;
