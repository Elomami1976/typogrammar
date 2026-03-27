
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArticleParagraph } from '../components/ArticleComponents';
import SchemaMarkup from '../components/SchemaMarkup';
import usePageMetadata from '../hooks/usePageMetadata';
import GoogleAd from '../components/GoogleAd';

interface PhoneticInfo {
  text: string;
  audio: string;
}

const PronunciationPage: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  usePageMetadata({
    title: 'Free English Pronunciation Tool: Hear Any Word with Phonetics | TypoGrammar',
    description: 'Free online pronunciation tool. Enter any English word to hear its correct pronunciation and see IPA phonetic spelling. Perfect for ESL learners, students, and anyone improving their English speaking skills.'
  });
  
  const [word, setWord] = useState('');
  const [result, setResult] = useState<{ word: string; phonetics: PhoneticInfo[] } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleFetchPronunciation = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!word.trim()) {
      return;
    }

    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.trim().toLowerCase()}`);
      if (!response.ok) {
        throw new Error('Word not found. Please check your spelling and try again.');
      }
      const data = await response.json();

      if (data && data.length > 0) {
        const phoneticsWithAudio = data[0].phonetics
          .filter((p: any) => p.text && p.audio)
          .map((p: any) => ({ text: p.text, audio: p.audio }))
          // Deduplicate based on text to avoid showing the same phonetic spelling multiple times
          .reduce((acc: PhoneticInfo[], current: PhoneticInfo) => {
            if (!acc.some(item => item.text === current.text)) {
              acc.push(current);
            }
            return acc;
          }, []);

        if (phoneticsWithAudio.length > 0) {
          setResult({ word: data[0].word, phonetics: phoneticsWithAudio });
        } else {
          setError('Pronunciation audio is not available for this word.');
        }
      } else {
        setError('Word not found. Please check your spelling and try again.');
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred while fetching the pronunciation.');
    } finally {
      setIsLoading(false);
    }
  };

  const playAudio = (audioSrc: string) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    const audio = new Audio(audioSrc);
    audioRef.current = audio;
    audio.play().catch(err => console.error("Error playing audio:", err));
  };

  const faqData = [
    {
      question: 'What is IPA (International Phonetic Alphabet)?',
      answer: 'The IPA is a standardized system of phonetic notation that represents the sounds of spoken language using symbols. It helps learners understand exact pronunciation regardless of spelling. For example, "phone" is written /foʊn/ in IPA, showing the "f" sound (not "ph"), the "oh" vowel, and the "n" ending.'
    },
    {
      question: 'Why does English pronunciation differ from spelling?',
      answer: 'English spelling developed over centuries and borrowed words from many languages (Latin, French, German, Greek). The spelling often reflects historical pronunciation or the word\'s origin rather than current pronunciation. This is why "knight" has a silent "k" and "gh", or why "read" can be /riːd/ or /rɛd/.'
    },
    {
      question: 'How can I improve my English pronunciation?',
      answer: 'Practice regularly by: (1) Using tools like this to hear correct pronunciation, (2) Recording yourself and comparing to native speakers, (3) Learning IPA symbols to understand phonetic patterns, (4) Focusing on problem sounds specific to your native language, (5) Listening to English podcasts, movies, and music with attention to how words sound.'
    },
    {
      question: 'What is the difference between British and American pronunciation?',
      answer: 'British and American English have systematic pronunciation differences. Key differences include: the "r" sound (American is rhotic, pronouncing all r\'s; British often drops r after vowels), the "a" in words like "bath" (British: /bɑːθ/, American: /bæθ/), and the "t" sound (American often uses a flap "d" sound in words like "butter").'
    },
    {
      question: 'Why do some words have multiple pronunciations?',
      answer: 'Words can have multiple pronunciations due to: (1) Regional accents (British vs. American), (2) Different word classes (the noun "record" vs. verb "record"), (3) Historical changes in progress, (4) Acceptable variations. This tool shows available pronunciations when multiple exist.'
    },
    {
      question: 'Can I use this tool offline?',
      answer: 'This pronunciation tool requires an internet connection as it fetches pronunciation data and audio from an online dictionary API. For offline practice, consider downloading pronunciation apps or using a dictionary with offline audio features.'
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

  const commonWords = ['communication', 'pronunciation', 'necessary', 'restaurant', 'entrepreneur', 'schedule', 'hierarchy', 'receipt'];

  return (
    <>
    <SchemaMarkup
      type="Article"
      data={{
        headline: 'Free English Pronunciation Practice Tool with Audio and Phonetics',
        description: 'Interactive tool to hear correct pronunciation of any English word with IPA phonetic spelling.',
        author: {
          '@type': 'Organization',
          name: 'TypoGrammar'
        },
        publisher: {
          '@type': 'Organization',
          name: 'TypoGrammar',
          url: 'https://typogrammar.com'
        },
        datePublished: '2024-01-20',
        dateModified: '2025-12-25',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://typogrammar.com/pronunciation'
        },
        keywords: 'English pronunciation tool, pronunciation practice, IPA phonetic alphabet, word pronunciation, ESL pronunciation, learn English pronunciation, phonetic spelling',
        educationalLevel: 'All Levels',
        learningResourceType: 'Interactive Tool'
      }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
    <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
      <div className="text-center">
        <p className="font-body text-base font-semibold text-blue-600 mb-4 dark:text-blue-400">Pronunciation Tool • Free</p>
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight dark:text-slate-100">Pronunciation Practice</h1>
        <ArticleParagraph>
          Type an English word below and press 'Search' to hear its correct pronunciation and see the phonetic spelling (IPA).
        </ArticleParagraph>
      </div>

      <form onSubmit={handleFetchPronunciation} className="mt-8 max-w-lg mx-auto">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            placeholder="e.g., communication"
            className="flex-grow w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-body text-lg transition-shadow duration-200 shadow-sm dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200 dark:focus:ring-blue-500 dark:placeholder-slate-400"
            aria-label="Enter a word to pronounce"
            required
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors text-lg disabled:bg-slate-400 disabled:cursor-not-allowed dark:bg-blue-500 dark:hover:bg-blue-600 dark:disabled:bg-slate-600 flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Searching...</span>
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span>Search</span>
              </>
            )}
          </button>
        </div>
      </form>

      {/* Quick Try Words */}
      <div className="mt-6 text-center">
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">Try these commonly mispronounced words:</p>
        <div className="flex flex-wrap justify-center gap-2">
          {commonWords.map(w => (
            <button
              key={w}
              onClick={() => setWord(w)}
              className="px-3 py-1 text-sm bg-slate-100 text-slate-700 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-blue-900 dark:hover:text-blue-300"
            >
              {w}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12">
        {error && (
          <div className="text-center p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg dark:bg-red-900/30 dark:border-red-500/50 dark:text-red-300">
            <p>{error}</p>
          </div>
        )}
        {result && (
          <div className="p-6 md:p-8 bg-slate-50 rounded-lg border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
            <h2 className="font-heading text-3xl font-bold text-slate-800 mb-6 capitalize dark:text-slate-200">{result.word}</h2>
            <div className="space-y-4">
              {result.phonetics.map((p, index) => (
                <div key={index} className="flex items-center justify-between gap-4 p-4 bg-white rounded-md shadow-sm dark:bg-slate-700">
                  <span className="font-code text-xl text-slate-700 dark:text-slate-300">{p.text}</span>
                  <button
                    onClick={() => playAudio(p.audio)}
                    className="p-3 rounded-full text-slate-500 bg-slate-100 hover:bg-blue-100 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-slate-600 dark:text-slate-300 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-offset-slate-800"
                    aria-label={`Play pronunciation: ${p.text}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="my-10">
        <GoogleAd adSlot="6406598038" />
      </div>

      {/* Tips Section */}
      <div className="mt-12 p-6 bg-green-50 rounded-xl border border-green-200 dark:bg-green-900/20 dark:border-green-800/30">
        <h3 className="font-heading text-xl font-bold text-green-800 mb-4 dark:text-green-200">Tips for Better Pronunciation</h3>
        <ul className="space-y-3 text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-3">
            <span className="text-green-500 mt-1">✓</span>
            <span><strong>Listen multiple times:</strong> Click the play button several times before trying to say the word yourself.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500 mt-1">✓</span>
            <span><strong>Break it down:</strong> For long words, try to identify syllables and practice them separately.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500 mt-1">✓</span>
            <span><strong>Focus on stress:</strong> English words have stressed syllables. Notice which part of the word sounds louder or longer.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500 mt-1">✓</span>
            <span><strong>Learn IPA basics:</strong> Understanding phonetic symbols helps you predict pronunciation from dictionaries.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500 mt-1">✓</span>
            <span><strong>Practice regularly:</strong> A few minutes of daily practice is more effective than occasional long sessions.</span>
          </li>
        </ul>
      </div>

      {/* FAQ Section */}
      <section className="mt-12">
        <h2 className="font-heading text-2xl font-bold text-slate-800 mb-6 dark:text-slate-200">Frequently Asked Questions</h2>
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
        <h3 className="font-heading text-xl font-bold text-slate-800 mb-4 dark:text-slate-200">Related Pronunciation Resources</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link to="/pronunciation-of-ed" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all dark:bg-slate-800 dark:border-slate-700 dark:hover:border-blue-600">
            <h4 className="font-semibold text-slate-800 dark:text-slate-200">-ED Pronunciation</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Master the 3 sounds of past tense</p>
          </Link>
          <Link to="/homophones-homonyms-homographs" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all dark:bg-slate-800 dark:border-slate-700 dark:hover:border-blue-600">
            <h4 className="font-semibold text-slate-800 dark:text-slate-200">Homophones</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Words that sound the same</p>
          </Link>
          <Link to="/confused-words" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all dark:bg-slate-800 dark:border-slate-700 dark:hover:border-blue-600">
            <h4 className="font-semibold text-slate-800 dark:text-slate-200">Confused Words</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Similar words often mixed up</p>
          </Link>
          <Link to="/irregular-verbs" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all dark:bg-slate-800 dark:border-slate-700 dark:hover:border-blue-600">
            <h4 className="font-semibold text-slate-800 dark:text-slate-200">Irregular Verbs</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Verbs with unique forms</p>
          </Link>
          <Link to="/prefixes-suffixes" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all dark:bg-slate-800 dark:border-slate-700 dark:hover:border-blue-600">
            <h4 className="font-semibold text-slate-800 dark:text-slate-200">Prefixes & Suffixes</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Word building patterns</p>
          </Link>
          <Link to="/basic-grammar-terminology" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all dark:bg-slate-800 dark:border-slate-700 dark:hover:border-blue-600">
            <h4 className="font-semibold text-slate-800 dark:text-slate-200">Grammar Terms</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Essential terminology explained</p>
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

export default PronunciationPage;
