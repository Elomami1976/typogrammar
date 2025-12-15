
import React, { useState, useRef } from 'react';
import { ArticleParagraph } from '../components/ArticleComponents';
import usePageMetadata from '../hooks/usePageMetadata';
import GoogleAd from '../components/GoogleAd';

interface PhoneticInfo {
  text: string;
  audio: string;
}

const PronunciationPage: React.FC = () => {
  usePageMetadata({
    title: 'Pronunciation Practice Tool | TypoGrammar',
    description: 'Practice your English pronunciation. Enter any word to hear its pronunciation and see the phonetic spelling.'
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

  return (
    <>
    <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
      <div className="text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight dark:text-slate-100">Pronunciation Practice</h1>
        <ArticleParagraph>
          Type an English word below and press 'Search' to hear its correct pronunciation and see the phonetic spelling.
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
    </article>
      <div className="mt-8">
        <GoogleAd adSlot="6406598038" />
      </div>
    </>
  );
};

export default PronunciationPage;
