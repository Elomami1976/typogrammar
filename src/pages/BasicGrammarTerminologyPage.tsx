
import React from 'react';
import GoogleAd from '../components/GoogleAd';
import { ArticleParagraph, ArticleHeading, InlineCode, BulletList, ExampleList } from '../components/ArticleComponents';
import { SentenceDiagram } from '../components/VisualAids';
import usePageMetadata from '../hooks/usePageMetadata';

const TerminologyTable: React.FC<{ items: { term: string, example: string }[] }> = ({ items }) => (
    <div className="overflow-x-auto my-6">
        <table className="min-w-full text-left text-lg font-body">
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                {items.map(({ term, example }) => (
                    <tr key={term} className="odd:bg-white even:bg-slate-50 dark:odd:bg-slate-800/50 dark:even:bg-slate-800/20">
                        <td className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 w-1/3">{term}</td>
                        <td className="px-6 py-4 text-slate-600 dark:text-slate-400 w-2/3"><InlineCode>{example}</InlineCode></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

const PrepositionsTable: React.FC<{ prepositions: string[] }> = ({ prepositions }) => {
    const columns = 3;
    const itemsPerColumn = Math.ceil(prepositions.length / columns);
    const tableData: string[][] = Array.from({ length: itemsPerColumn }, () => Array(columns).fill(''));

    prepositions.forEach((prep, index) => {
        const col = Math.floor(index / itemsPerColumn);
        const row = index % itemsPerColumn;
        tableData[row][col] = prep;
    });

    return (
        <div className="overflow-x-auto my-6">
            <table className="min-w-full text-left text-lg font-body">
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                    {tableData.map((row, rowIndex) => (
                        <tr key={rowIndex} className="odd:bg-white even:bg-slate-50 dark:odd:bg-slate-800/50 dark:even:bg-slate-800/20">
                            {row.map((prep, colIndex) => (
                                <td key={colIndex} className="px-6 py-3 text-slate-700 dark:text-slate-300">{prep}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


const BasicGrammarTerminologyPage: React.FC = () => {
  usePageMetadata({
    title: 'Basic Grammar Terminology | TypoGrammar',
    description: 'Learn the fundamental building blocks of English: subjects, verbs, objects, adjectives, adverbs, and prepositions. A clear and simple reference guide.'
  });

  const intransitiveVerbs = [
    { term: 'agree', example: 'We agree.' },
    { term: 'arrive', example: 'The train arrived.' },
    { term: 'come', example: 'Please come in.' },
    { term: 'cry', example: 'The baby cried.' },
    { term: 'exist', example: 'Dinosaurs existed.' },
    { term: 'go', example: 'She will go.' },
    { term: 'happen', example: 'An accident happened.' },
    { term: 'live', example: 'They live in the city.' },
    { term: 'occur', example: 'A change occurred.' },
    { term: 'rain', example: 'It rained yesterday.' },
    { term: 'rise', example: 'The sun rises.' },
    { term: 'sleep', example: 'He is sleeping.' },
    { term: 'stay', example: 'Please stay here.' },
  ];

  const transitiveVerbs = [
    { term: 'build', example: 'They will build a house.' },
    { term: 'cut', example: 'She cut the paper.' },
    { term: 'find', example: 'I will find the keys.' },
    { term: 'like', example: 'We like pizza.' },
    { term: 'make', example: 'He made a cake.' },
    { term: 'need', example: 'I need some help.' },
    { term: 'send', example: 'Please send an email.' },
    { term: 'use', example: 'Can I use your phone?' },
    { term: 'want', example: 'They want a new car.' },
  ];
  
  const midSentenceAdverbs = [
    {term: 'always', example: 'She is always on time. She always comes on time.'},
    {term: 'usually', example: 'He is usually busy. He usually works late.'},
    {term: 'often', example: 'We are often tired. We often go to the movies.'},
    {term: 'frequently', example: 'It is frequently cold. It frequently rains here.'},
    {term: 'generally', example: 'They are generally happy. They generally eat at home.'},
    {term: 'occasionally', example: 'I am occasionally late. I occasionally read books.'},
    {term: 'seldom', example: 'He is seldom angry. He seldom travels.'},
    {term: 'hardly ever', example: 'You are hardly ever wrong. You hardly ever call.'},
    {term: 'never', example: 'I am never sad. I never eat meat.'},
  ];

  const commonPrepositions = [
    'about', 'above', 'across', 'after', 'along', 'around', 'at',
    'behind', 'below', 'beside', 'besides', 'between', 'beyond', 'by',
    'despite', 'during', 'for', 'from', 'in', 'into', 'like', 'near',
    'of', 'off', 'on', 'out', 'over', 'since', 'through', 'to',
    'under', 'until', 'up', 'with', 'without'
  ];

  return (
    <>
    <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
      <div>
        <p className="font-body text-base font-semibold text-blue-600 mb-4 dark:text-blue-400">Grammar Fundamentals</p>
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight dark:text-slate-100">Basic Grammar Terminology</h1>
      </div>
      
      <ArticleParagraph>
        Understanding the basic components of a sentence is the first step to mastering English grammar. This guide provides a quick reference to the fundamental building blocks of the language.
      </ArticleParagraph>

      <ArticleHeading>A-1: Subjects, Verbs, and Objects</ArticleHeading>
      <ArticleParagraph>
        Almost all English sentences contain a subject (S) and a verb (V). The subject is the person or thing that performs the action. The verb is the action or state of being.
      </ArticleParagraph>
      <div className="space-y-4">
        <SentenceDiagram subject="Birds" verb="fly" />
        <SentenceDiagram subject="The baby" verb="cried" />
      </div>
      
      <h3 className="font-heading text-2xl font-bold text-slate-800 mt-8 mb-4 dark:text-slate-200">Transitive and Intransitive Verbs</h3>
      <ArticleParagraph>
        Verbs can be classified as transitive or intransitive.
      </ArticleParagraph>
      <BulletList items={[
          <><strong>Intransitive Verbs:</strong> These verbs are not followed by an object. The action is complete on its own.</>,
          <><strong>Transitive Verbs:</strong> These verbs are followed by an object (O), which is the noun that receives the action of the verb.</>
      ]} />
      <div className="space-y-6">
        <div>
            <p className="font-semibold text-slate-600 mb-2 dark:text-slate-400">Intransitive Example (S + V):</p>
            <SentenceDiagram subject="A student" verb="studies" />
        </div>
        <div>
            <p className="font-semibold text-slate-600 mb-2 dark:text-slate-400">Transitive Example (S + V + O):</p>
            <SentenceDiagram subject="A student" verb="studies" object="books" />
        </div>
      </div>
      <h4 className="font-heading text-xl font-semibold text-slate-700 mt-6 mb-3 dark:text-slate-300">Common Intransitive Verbs</h4>
      <TerminologyTable items={intransitiveVerbs} />
      <h4 className="font-heading text-xl font-semibold text-slate-700 mt-6 mb-3 dark:text-slate-300">Common Transitive Verbs</h4>
      <TerminologyTable items={transitiveVerbs} />
      
      <ArticleHeading>A-2: Adjectives</ArticleHeading>
      <ArticleParagraph>
        Adjectives describe or modify nouns. They provide more information about the noun, answering questions like "What kind?" or "Which one?".
      </ArticleParagraph>
      <div className="my-8 p-6 bg-slate-50 rounded-lg border border-slate-200 dark:bg-slate-800 dark:border-slate-700 space-y-8">
        <div>
          <p className="font-semibold text-center text-slate-600 mb-4 dark:text-slate-400">Adjective before a noun:</p>
          <div className="flex justify-center items-center gap-2 flex-wrap text-lg font-semibold">
            <span>an</span>
            <div className="relative p-2 px-4 bg-yellow-100 text-yellow-800 rounded-md text-center dark:bg-yellow-900/50 dark:text-yellow-300">
              <span className="text-xs uppercase font-semibold tracking-wider text-yellow-500 dark:text-yellow-400">Adjective</span>
              <p>intelligent</p>
            </div>
            <svg width="40" height="24" className="text-yellow-400 dark:text-yellow-500 mx-2"><path d="M0 12 L36 12" stroke="currentColor" strokeWidth="3" fill="none" /><path d="M30 6 L36 12 L30 18" stroke="currentColor" strokeWidth="3" fill="none" /></svg>
            <div className="p-2 px-4 bg-sky-100 text-sky-800 rounded-md text-center dark:bg-sky-900/50 dark:text-sky-300">
              <span className="text-xs uppercase font-semibold tracking-wider text-sky-500 dark:text-sky-400">Noun</span>
              <p>student</p>
            </div>
          </div>
        </div>
        
        <div className="pt-8">
          <p className="font-semibold text-center text-slate-600 mb-4 dark:text-slate-400">Adjective after the verb 'to be':</p>
          <div className="relative flex justify-center items-center gap-2 flex-wrap text-lg font-semibold pb-8">
            <span>The</span>
             <div className="p-2 px-4 bg-sky-100 text-sky-800 rounded-md text-center dark:bg-sky-900/50 dark:text-sky-300">
              <span className="text-xs uppercase font-semibold tracking-wider text-sky-500 dark:text-sky-400">Noun</span>
              <p>student</p>
            </div>
            <span>is</span>
            <div className="p-2 px-4 bg-yellow-100 text-yellow-800 rounded-md text-center dark:bg-yellow-900/50 dark:text-yellow-300">
              <span className="text-xs uppercase font-semibold tracking-wider text-yellow-500 dark:text-yellow-400">Adjective</span>
              <p>intelligent</p>
            </div>
            <svg width="120" height="40" className="absolute text-yellow-400 dark:text-yellow-500" style={{top: '100%', left: '50%', transform: 'translate(-50%, -100%)'}}>
                <path d="M110 5 C 110 25, 10 25, 10 5" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="4 4" />
                <path d="M15 11 L10 5 L5 11" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>
          </div>
        </div>
      </div>
       <ArticleParagraph>
          <strong>Remember:</strong> Adjectives are never plural. You never add a final <InlineCode>-s</InlineCode> to an adjective: <InlineCode>beautiful pictures</InlineCode> (not <InlineCode>beautifuls pictures</InlineCode>).
       </ArticleParagraph>
       
      <ArticleHeading>A-3: Adverbs</ArticleHeading>
      <ArticleParagraph>
        Adverbs modify verbs, adjectives, or other adverbs. They often answer questions like "How?", "When?", or "Where?". Many adverbs are formed by adding <InlineCode>-ly</InlineCode> to an adjective (e.g., <InlineCode>quick → quickly</InlineCode>).
      </ArticleParagraph>
      <div className="my-8 p-6 bg-slate-50 rounded-lg border border-slate-200 dark:bg-slate-800 dark:border-slate-700 space-y-8">
          <div className="pt-8">
            <p className="font-semibold text-center text-slate-600 mb-4 dark:text-slate-400">Adverb modifying a verb:</p>
            <div className="relative flex justify-center items-center gap-2 flex-wrap text-lg font-semibold pb-8">
              <span>He</span>
               <div className="p-2 px-4 bg-green-100 text-green-800 rounded-md text-center dark:bg-green-900/50 dark:text-green-300">
                <span className="text-xs uppercase font-semibold tracking-wider text-green-500 dark:text-green-400">Verb</span>
                <p>walks</p>
              </div>
              <div className="p-2 px-4 bg-pink-100 text-pink-800 rounded-md text-center dark:bg-pink-900/50 dark:text-pink-300">
                <span className="text-xs uppercase font-semibold tracking-wider text-pink-500 dark:text-pink-400">Adverb</span>
                <p>quickly</p>
              </div>
              <svg width="80" height="40" className="absolute text-pink-400 dark:text-pink-500" style={{top: '100%', left: '50%', transform: 'translate(-50%, -100%)'}}>
                  <path d="M70 5 C 70 25, 10 25, 10 5" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="4 4" />
                  <path d="M15 11 L10 5 L5 11" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </div>
          </div>
        </div>

       <h3 className="font-heading text-2xl font-bold text-slate-800 mt-8 mb-4 dark:text-slate-200">Mid-Sentence Adverbs</h3>
       <ArticleParagraph>
        A common group of adverbs, often related to frequency, typically appears in the middle of a sentence. Their position depends on the verb: they come <strong>after</strong> the verb <InlineCode>be</InlineCode>, but <strong>before</strong> other main verbs.
       </ArticleParagraph>
       <TerminologyTable items={midSentenceAdverbs} />
       
      <ArticleHeading>A-4: Prepositions and Prepositional Phrases</ArticleHeading>
      <ArticleParagraph>
        A preposition is a word that shows a relationship between a noun (or pronoun) and another word in the sentence. A prepositional phrase consists of a preposition and its object (a noun or pronoun).
      </ArticleParagraph>
       <SentenceDiagram subject="The student" verb="studies" prepPhrase="in the library" />
       
       <div className="my-8 p-6 bg-slate-50 rounded-lg border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
          <p className="font-semibold text-center text-slate-600 mb-4 dark:text-slate-400">Breakdown of a Prepositional Phrase:</p>
          <div className="flex justify-center items-center gap-2 flex-wrap text-lg font-semibold">
              <div className="p-2 px-4 bg-orange-100 text-orange-800 rounded-md text-center dark:bg-orange-900/50 dark:text-orange-300">
                  <span className="text-xs uppercase font-semibold tracking-wider text-orange-500 dark:text-orange-400">Preposition</span>
                  <p>in</p>
              </div>
              <div className="p-2 px-4 bg-sky-100 text-sky-800 rounded-md text-center dark:bg-sky-900/50 dark:text-sky-300">
                  <span className="text-xs uppercase font-semibold tracking-wider text-sky-500 dark:text-sky-400">Object of Prep.</span>
                  <p>the library</p>
              </div>
          </div>
       </div>

        <ArticleParagraph>
            When a sentence has prepositional phrases of both place and time, the phrase of <strong>place comes before</strong> the phrase of <strong>time</strong>.
        </ArticleParagraph>
        <ExampleList items={["We went to the zoo (place) in the afternoon (time)."]} />
       <h3 className="font-heading text-2xl font-bold text-slate-800 mt-8 mb-4 dark:text-slate-200">Common Prepositions</h3>
       <PrepositionsTable prepositions={commonPrepositions} />
    </article>
        <div className="mt-8">
          <GoogleAd adSlot="6406598038" />
        </div>
    </>
  );
};

export default BasicGrammarTerminologyPage;
