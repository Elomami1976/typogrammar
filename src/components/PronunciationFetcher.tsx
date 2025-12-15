
import React, { useState, useRef } from 'react';

interface PhoneticInfo {
  text: string;
  audio?: string;
}

const PronunciationFetcher: React.FC<{ word: string }> = ({ word }) => {
  const [phonetics, setPhonetics] = useState<PhoneticInfo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasFetched, setHasFetched] = useState(false);
  const activeAudio = useRef<HTMLAudioElement | null>(null);

  // For words that are structurally invalid (contain spaces, apostrophes, etc.),
  // don't render the component. This maintains alignment in tables.
  const validWordRegex = /^[a-zA-Z]+$/;
  if (!validWordRegex.test(word)) {
    return (
      <span className="inline-block h-6 w-6" aria-hidden="true">
        {/* Placeholder for alignment */}
      </span>
    );
  }

  const handleFetchPronunciation = async () => {
    if (hasFetched || isLoading) {
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.toLowerCase()}`);
      if (!response.ok) {
        throw new Error(`API request failed`);
      }
      const data = await response.json();

      if (data && data.length > 0 && data[0].phonetics && data[0].phonetics.length > 0) {
        const allPhonetics = data[0].phonetics
          .map((p: any) => {
            if (!p.text) return null;
            return { text: p.text, audio: p.audio };
          })
          .filter((p: PhoneticInfo | null): p is PhoneticInfo => p !== null)
          .reduce((acc: PhoneticInfo[], current: PhoneticInfo) => {
            const existing = acc.find(item => item.text === current.text);
            if (!existing) {
              acc.push(current);
            } else if (!existing.audio && current.audio) {
              const index = acc.indexOf(existing);
              acc[index] = current;
            }
            return acc;
          }, []);
        
        if (allPhonetics.length > 0) {
          setPhonetics(allPhonetics);
        } else {
          setError('Not found');
        }
      } else {
        setError('Not found');
      }
    } catch (err) {
      console.error(`Could not fetch pronunciation for "${word}":`, err);
      setError('Failed to fetch');
    } finally {
      setIsLoading(false);
      setHasFetched(true);
    }
  };

  const playAudio = (e: React.MouseEvent, audioSrc?: string) => {
    e.stopPropagation();
    if (activeAudio.current) {
      activeAudio.current.pause();
      activeAudio.current = null;
    }
    if (audioSrc) {
      const audio = new Audio(audioSrc);
      activeAudio.current = audio;
      audio.play().catch(err => console.error("Error playing audio:", err));
    }
  };

  const firstAudio = phonetics.find(p => p.audio)?.audio;

  return (
    <div
      className="relative group inline-flex align-middle"
      onMouseEnter={handleFetchPronunciation}
      onFocus={handleFetchPronunciation}
    >
      <button
        className="text-slate-400 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full disabled:text-slate-300 disabled:hover:text-slate-300 dark:text-slate-500 dark:hover:text-blue-400"
        aria-label={`Show pronunciations for ${word}`}
        onClick={(e) => playAudio(e, firstAudio)}
        disabled={isLoading || !firstAudio}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        </svg>
      </button>

      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-xs z-20
                      invisible opacity-0 scale-95 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 transition-all duration-200">
        <div className="bg-slate-800 text-white rounded-lg shadow-lg p-3 text-sm font-sans dark:bg-slate-700">
          {isLoading && <div className="text-slate-300">Loading...</div>}
          {error && <div className="text-red-400 max-w-[200px] whitespace-normal">{error}</div>}
          {!isLoading && !error && phonetics.length > 0 && (
            <div className="space-y-2">
              {phonetics.map((p, index) => (
                <div key={index} className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="font-code">{p.text}</span>
                  </div>
                  {p.audio && (
                    <button
                      onClick={(e) => playAudio(e, p.audio)}
                      className="text-slate-300 hover:text-white transition-colors"
                      aria-label={`Play pronunciation: ${p.text}`}
                    >
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                      </svg>
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PronunciationFetcher;
