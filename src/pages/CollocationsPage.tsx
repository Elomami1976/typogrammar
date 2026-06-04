
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import GoogleAd from '../components/GoogleAd';
import SchemaMarkup from '../components/SchemaMarkup';
import { ArticleParagraph, ArticleHeading, InlineCode } from '../components/ArticleComponents';
import { COLLOCATION_CATEGORIES } from '../constants/collocations';
import usePageMetadata from '../hooks/usePageMetadata';

const CollocationsTable: React.FC<{ items: { collocation: string; example: string }[]; id: string }> = ({ items, id }) => (
  <div className="overflow-x-auto my-6" id={id}>
    <table className="min-w-full text-left text-lg font-body">
      <thead>
        <tr className="bg-slate-100 dark:bg-slate-700">
          <th scope="col" className="px-6 py-3 font-semibold text-slate-800 rounded-tl-lg w-1/3 dark:text-slate-200">Collocation</th>
          <th scope="col" className="px-6 py-3 font-semibold text-slate-800 rounded-tr-lg w-2/3 dark:text-slate-200">Example Sentence</th>
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
  const totalCollocations = useMemo(() => {
    return COLLOCATION_CATEGORIES.reduce((total, cat) => total + cat.collocations.length, 0);
  }, []);

  usePageMetadata({
    title: `English Collocations Guide: ${totalCollocations}+ Natural Word Combinations | TypoGrammar`,
    description: `Master ${totalCollocations}+ English collocations to sound more fluent. Learn verb-noun, adjective-noun, and adverb-adjective word combinations with example sentences. Essential for IELTS, TOEFL, and natural English speaking.`
  });

  return (
    <>
    <SchemaMarkup
      type="Article"
      data={{
        headline: `${totalCollocations}+ English Collocations: Complete Guide to Natural Word Combinations`,
        description: `Comprehensive guide to ${totalCollocations}+ English collocations including verb-noun, adjective-noun, and adverb-adjective word combinations with practical examples for ESL learners.`,
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
          '@id': 'https://typogrammar.com/vocabulary/collocations'
        },
        keywords: 'English collocations, word combinations, English fluency, ESL vocabulary, natural English expressions, verb noun collocations, adjective noun collocations, make do collocations, IELTS collocations',
        educationalLevel: 'Intermediate to Advanced',
        learningResourceType: 'Reference Guide',
        inLanguage: 'en',
        isAccessibleForFree: true,
        audience: {
          '@type': 'EducationalAudience',
          educationalRole: 'student',
          audienceType: 'ESL learners, English students, IELTS/TOEFL test takers'
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
          name: 'What are collocations in English?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Collocations are words that naturally go together in English. They are not grammar rules but conventional combinations that native speakers use. For example, we say "make a decision" not "do a decision," and "heavy rain" not "strong rain." Learning collocations is essential for sounding natural and fluent in English.'
          }
        },
        {
          '@type': 'Question',
          name: 'What is the difference between "make" and "do" collocations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Generally, "make" is used with collocations about creating, producing, or causing something (make a decision, make a mistake, make progress, make an effort). "Do" is used with collocations about actions, work, or tasks (do homework, do the dishes, do business, do research). There are exceptions, so it\'s best to memorize common collocations.'
          }
        },
        {
          '@type': 'Question',
          name: 'Why are collocations important for IELTS and TOEFL?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Collocations are crucial for scoring well on IELTS and TOEFL, especially in the speaking and writing sections. Using correct collocations demonstrates lexical resource and vocabulary range. Examiners look for natural word combinations as a sign of advanced English proficiency. Incorrect collocations can lower your score even if the meaning is understood.'
          }
        },
        {
          '@type': 'Question',
          name: 'What are the most common English collocations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Common English collocations include: make a decision, take a risk, save time, heavy rain, strong coffee, catch a cold, break a promise, fully aware, highly successful, deeply concerned. These combinations appear frequently in everyday English and are essential for fluent communication.'
          }
        }
      ]
    })}} />

    <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
      <header>
        <p className="font-body text-base font-semibold text-blue-600 mb-4 dark:text-blue-400">Vocabulary • Word Combinations</p>
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight dark:text-slate-100">English Collocations Guide</h1>
        <p className="font-body text-xl text-slate-600 mb-4 dark:text-slate-400">
          Master <strong>{totalCollocations}+ natural word combinations</strong> used by native speakers
        </p>
        <p className="font-body text-sm text-slate-500 dark:text-slate-400 mb-8">
          Last updated: March 2026 • {COLLOCATION_CATEGORIES.length} categories • With example sentences
        </p>
      </header>

      {/* Stats section */}
      <section className="mb-10 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100 dark:from-slate-700/50 dark:to-slate-700/30 dark:border-slate-600">
        <h2 className="font-heading text-2xl font-bold text-slate-800 mb-4 dark:text-slate-200">What Are Collocations?</h2>
        <p className="font-body text-slate-700 mb-4 dark:text-slate-300">
          <strong>Collocations</strong> are words that frequently appear together in natural English. They aren't fixed grammar rules, but conventional word combinations that native speakers use automatically. For example, we say <InlineCode>heavy rain</InlineCode> not <InlineCode>strong rain</InlineCode>, and <InlineCode>make a decision</InlineCode> not <InlineCode>do a decision</InlineCode>.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white/70 dark:bg-slate-800/50 p-4 rounded-lg text-center">
            <span className="block text-3xl font-bold text-blue-600 dark:text-blue-400">{totalCollocations}+</span>
            <span className="text-sm text-slate-600 dark:text-slate-400">Collocations</span>
          </div>
          <div className="bg-white/70 dark:bg-slate-800/50 p-4 rounded-lg text-center">
            <span className="block text-3xl font-bold text-blue-600 dark:text-blue-400">{COLLOCATION_CATEGORIES.length}</span>
            <span className="text-sm text-slate-600 dark:text-slate-400">Categories</span>
          </div>
          <div className="bg-white/70 dark:bg-slate-800/50 p-4 rounded-lg text-center">
            <span className="block text-3xl font-bold text-blue-600 dark:text-blue-400">100%</span>
            <span className="text-sm text-slate-600 dark:text-slate-400">With Examples</span>
          </div>
        </div>
      </section>

      {/* Quick navigation */}
      <nav className="mb-8" aria-label="Collocation categories">
        <h2 className="font-heading text-lg font-semibold text-slate-800 mb-3 dark:text-slate-200">Jump to Category:</h2>
        <div className="flex flex-wrap gap-2">
          {COLLOCATION_CATEGORIES.map(cat => (
            <a
              key={cat.category}
              href={`#${cat.category.toLowerCase().replace(/\s+/g, '-').replace(/\+/g, '')}`}
              className="px-3 py-1.5 bg-slate-100 hover:bg-blue-100 text-slate-700 hover:text-blue-700 rounded-full text-sm font-medium transition-colors dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-blue-900/50"
            >
              {cat.category}
            </a>
          ))}
        </div>
      </nav>

      <div className="my-8">
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/61FftJIe2SI?rel=0&modestbranding=1"
            title="Collocations in English"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      {COLLOCATION_CATEGORIES.map(category => (
        <section 
          key={category.category} 
          id={category.category.toLowerCase().replace(/\s+/g, '-').replace(/\+/g, '')}
          className="scroll-mt-24"
        >
          <ArticleHeading>{category.category} ({category.collocations.length})</ArticleHeading>
          <ArticleParagraph>{category.description}</ArticleParagraph>
          <CollocationsTable items={category.collocations} id={`${category.category.toLowerCase().replace(/\s+/g, '-')}-table`} />
        </section>
      ))}

      {/* Tips section */}
      <section className="mt-12 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100 dark:from-slate-700/50 dark:to-slate-700/30 dark:border-slate-600">
        <h2 className="font-heading text-2xl font-bold text-slate-800 mb-4 dark:text-slate-200">How to Learn Collocations Effectively</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-slate-800 mb-2 dark:text-slate-200">✅ Best Strategies</h3>
            <ul className="space-y-2 text-slate-700 dark:text-slate-300">
              <li>• <strong>Learn in chunks</strong> - Don't memorize individual words; learn the whole collocation</li>
              <li>• <strong>Read extensively</strong> - Notice collocations in context while reading</li>
              <li>• <strong>Keep a collocations notebook</strong> - Group new collocations by verb or topic</li>
              <li>• <strong>Practice with sentences</strong> - Write your own sentences using new collocations</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800 mb-2 dark:text-slate-200">⚠️ Common Mistakes</h3>
            <ul className="space-y-2 text-slate-700 dark:text-slate-300">
              <li>• <strong>✗ do a decision</strong> → ✓ make a decision</li>
              <li>• <strong>✗ strong rain</strong> → ✓ heavy rain</li>
              <li>• <strong>✗ big mistake</strong> → ✓ big/serious mistake (both work!)</li>
              <li>• <strong>✗ make homework</strong> → ✓ do homework</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mt-12">
        <h2 className="font-heading text-2xl font-bold text-slate-800 mb-6 dark:text-slate-200">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="group bg-slate-50 dark:bg-slate-700/50 rounded-lg">
            <summary className="flex justify-between items-center cursor-pointer p-4 font-semibold text-slate-800 dark:text-slate-200">
              What are collocations?
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <p className="px-4 pb-4 text-slate-700 dark:text-slate-300">Collocations are words that naturally go together in English. They're conventional combinations that native speakers use. For example, "make a decision" not "do a decision."</p>
          </details>
          <details className="group bg-slate-50 dark:bg-slate-700/50 rounded-lg">
            <summary className="flex justify-between items-center cursor-pointer p-4 font-semibold text-slate-800 dark:text-slate-200">
              What's the difference between "make" and "do" collocations?
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <p className="px-4 pb-4 text-slate-700 dark:text-slate-300">"Make" is typically used with creating/producing (make a decision, make progress). "Do" is used with actions/tasks (do homework, do the dishes). There are exceptions, so memorize common combinations.</p>
          </details>
          <details className="group bg-slate-50 dark:bg-slate-700/50 rounded-lg">
            <summary className="flex justify-between items-center cursor-pointer p-4 font-semibold text-slate-800 dark:text-slate-200">
              Why are collocations important for IELTS/TOEFL?
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <p className="px-4 pb-4 text-slate-700 dark:text-slate-300">Using correct collocations demonstrates advanced vocabulary range. Examiners look for natural word combinations. Incorrect collocations can lower your score even if your meaning is understood.</p>
          </details>
        </div>
      </section>

      {/* Related Resources */}
      <aside className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-100 dark:bg-slate-700/50 dark:border-slate-600">
        <h2 className="font-heading text-xl font-bold text-slate-800 mb-4 dark:text-slate-200">Related Vocabulary Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link to="/phrasal-verbs/" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow dark:bg-slate-800 dark:hover:bg-slate-700">
            <span className="text-2xl">🔤</span>
            <h3 className="font-semibold text-slate-800 mt-2 dark:text-slate-200">Phrasal Verbs</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Multi-word verbs</p>
          </Link>
          <Link to="/idioms/" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow dark:bg-slate-800 dark:hover:bg-slate-700">
            <span className="text-2xl">💬</span>
            <h3 className="font-semibold text-slate-800 mt-2 dark:text-slate-200">English Idioms</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">300+ expressions</p>
          </Link>
          <Link to="/prefixes-suffixes/" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow dark:bg-slate-800 dark:hover:bg-slate-700">
            <span className="text-2xl">🧩</span>
            <h3 className="font-semibold text-slate-800 mt-2 dark:text-slate-200">Prefixes & Suffixes</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Word formation</p>
          </Link>
          <Link to="/preposition-combinations/" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow dark:bg-slate-800 dark:hover:bg-slate-700">
            <span className="text-2xl">🎯</span>
            <h3 className="font-semibold text-slate-800 mt-2 dark:text-slate-200">Prepositions</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Verb + preposition</p>
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

export default CollocationsPage;
