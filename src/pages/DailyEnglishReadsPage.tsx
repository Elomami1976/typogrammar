import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';

/* -------------------------------------------------------------------------
   Types
   ------------------------------------------------------------------------- */
type CategoryId =
  | 'technology'
  | 'famous-people'
  | 'animals'
  | 'space'
  | 'business'
  | 'sports';

interface Category {
  id: CategoryId;
  name: string;
  emoji: string;
  active: boolean;
  blurb: string;
}

interface QuizQuestion {
  q: string;
  options: string[];
  /** 0-based index of the correct option */
  correct: number;
}

interface Story {
  id: string;
  title: string;
  category: CategoryId;
  audioSrc: string;
  words: number;
  durationLabel: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  intro: string;
  questions: QuizQuestion[];
}

/* -------------------------------------------------------------------------
   Data - only "Technology" is active for now. Other categories are listed
   but display a friendly "coming soon" state to avoid 404s and to signal
   the roadmap to visitors and to Google.
   ------------------------------------------------------------------------- */
const CATEGORIES: Category[] = [
  {
    id: 'technology',
    name: 'Technology',
    emoji: '�',
    active: true,
    blurb: 'Short audio stories about the companies, ideas, and people that shape the tech world.',
  },
  { id: 'famous-people',  name: 'Famous People',  emoji: '🎤', active: true,  blurb: 'Mini-biographies of people who changed the world.' },
  { id: 'animals',        name: 'Animals',        emoji: '🐾', active: true,  blurb: 'Fascinating facts about animals around the planet.' },
  { id: 'space',          name: 'Space',          emoji: '🪐', active: true,  blurb: 'Easy stories about the universe, planets, and missions.' },
  { id: 'business',       name: 'Business',       emoji: '📊', active: true,  blurb: 'Quick stories about brands, money, and entrepreneurs.' },
  { id: 'sports',         name: 'Sports',         emoji: '🏆', active: true,  blurb: 'Famous athletes and unforgettable moments in sport.' },
];

/**
 * STORIES - add new stories here.
 * The MP3 file must live in `public/audio/daily-reads/<filename>.mp3`.
 *
 * NOTE: The "How Tesla Became Famous" story below is a placeholder. Replace
 * `audioSrc`, `words`, `durationLabel`, `intro`, and the 6 `questions` with
 * the real content once the MP3 is delivered.
 */
const STORIES: Story[] = [
  {
    id: 'how-ai-helps-people-every-day',
    title: 'How AI Helps People Every Day',
    category: 'technology',
    audioSrc: '/audio/daily-reads/ai-story.mp3',
    words: 120,
    durationLabel: '1 min listen',
    level: 'Beginner',
    intro:
      'A short story about how Artificial Intelligence (AI) is quietly helping people every single day, in smartphones, schools, businesses, and even hospitals.',
    questions: [
      {
        q: 'What does AI stand for?',
        options: ['Artificial Information', 'Artificial Intelligence', 'Automatic Internet'],
        correct: 1,
      },
      {
        q: 'How do smartphones use AI?',
        options: [
          'To cook food',
          'To improve photos and understand voice commands',
          'To clean the screen',
        ],
        correct: 1,
      },
      {
        q: 'Why do students use AI tools?',
        options: [
          'To build cars',
          'To practice sports',
          'To learn new skills and practice English',
        ],
        correct: 2,
      },
      {
        q: 'How do businesses use AI?',
        options: [
          'To organize work and improve services',
          'To fly airplanes',
          'To paint buildings',
        ],
        correct: 0,
      },
      {
        q: 'Where do hospitals use AI?',
        options: [
          'To help doctors find diseases earlier',
          'To sell phones',
          'To build roads',
        ],
        correct: 0,
      },
      {
        q: 'What do experts believe about AI?',
        options: [
          'AI will disappear soon',
          'AI will continue to grow in the future',
          'AI is only for games',
        ],
        correct: 1,
      },
    ],
  },
  {
    id: 'elon-musk-and-his-companies',
    title: 'Elon Musk and His Companies',
    category: 'famous-people',
    audioSrc: '/audio/daily-reads/Elon Musk and His Companies.mp3',
    words: 120,
    durationLabel: '1 min listen',
    level: 'Beginner',
    intro:
      'A short biography of Elon Musk: where he was born, what he loved as a child, and the companies he built, including Tesla, SpaceX, and Neuralink.',
    questions: [
      {
        q: 'Where was Elon Musk born?',
        options: ['Canada', 'South Africa', 'Germany'],
        correct: 1,
      },
      {
        q: 'What did Elon Musk enjoy as a child?',
        options: [
          'Playing football',
          'Reading books and learning about computers',
          'Traveling around the world',
        ],
        correct: 1,
      },
      {
        q: 'What does Tesla produce?',
        options: ['Airplanes', 'Electric cars', 'Smartphones'],
        correct: 1,
      },
      {
        q: 'What is SpaceX?',
        options: [
          'A social media company',
          'A food company',
          'A company that builds rockets',
        ],
        correct: 2,
      },
      {
        q: 'What does Neuralink study?',
        options: ['Ocean life', 'Brain technology', 'Weather changes'],
        correct: 1,
      },
      {
        q: 'Why do many people admire Elon Musk?',
        options: [
          'Because he works on future technology and big ideas',
          'Because he is a movie actor',
          'Because he plays professional sports',
        ],
        correct: 0,
      },
    ],
  },
  {
    id: 'the-arabian-horse',
    title: 'The Arabian Horse',
    category: 'animals',
    audioSrc: '/audio/daily-reads/The Arabian Horse.mp3',
    words: 120,
    durationLabel: '1 min listen',
    level: 'Beginner',
    intro:
      'A short story about the Arabian horse: where it came from, why Bedouin tribes loved it, and how it became one of the most famous and admired horse breeds in the world.',
    questions: [
      {
        q: 'Where did Arabian horses originally come from?',
        options: ['Europe', 'The Arabian Peninsula', 'South America'],
        correct: 1,
      },
      {
        q: 'What are Arabian horses known for?',
        options: [
          'Beauty, intelligence, and speed',
          'Heavy weight',
          'Short legs',
        ],
        correct: 0,
      },
      {
        q: 'Why were Arabian horses important in the past?',
        options: [
          'For cooking and farming only',
          'For travel, trade, and battles',
          'For building houses',
        ],
        correct: 1,
      },
      {
        q: 'Who cared closely for Arabian horses in the past?',
        options: ['Roman soldiers', 'Bedouin tribes', 'Pirates'],
        correct: 1,
      },
      {
        q: 'What are Arabian horses used for today?',
        options: [
          'Racing and riding competitions',
          'Flying airplanes',
          'Pulling trains',
        ],
        correct: 0,
      },
      {
        q: 'Why do many people think Arabian horses are special?',
        options: [
          'Because of their history and connection to Arab culture',
          'Because they can swim underwater',
          'Because they are the biggest horses in the world',
        ],
        correct: 0,
      },
    ],
  },
  {
    id: 'the-rise-of-online-business',
    title: 'The Rise of Online Business',
    category: 'business',
    audioSrc: '/audio/daily-reads/Online business.mp3',
    words: 120,
    durationLabel: '1 min listen',
    level: 'Beginner',
    intro:
      'A short story about how online business has changed the way people buy and sell, and why it continues to grow around the world.',
    questions: [
      {
        q: 'Why is online business popular?',
        options: [
          'Because many people use the internet to buy and sell',
          'Because people stopped using phones',
          'Because stores are disappearing completely',
        ],
        correct: 0,
      },
      {
        q: 'What can customers do online?',
        options: [
          'Compare prices and read reviews',
          'Build airplanes',
          'Print money',
        ],
        correct: 0,
      },
      {
        q: 'How can small businesses reach customers?',
        options: [
          'By using websites and social media',
          'By traveling to space',
          'By building factories only',
        ],
        correct: 0,
      },
      {
        q: 'What do online businesses sell?',
        options: [
          'Clothes, electronics, courses, and services',
          'Only food',
          'Only books',
        ],
        correct: 0,
      },
      {
        q: 'What is one challenge of online business?',
        options: [
          'Protecting customer information',
          'Learning to drive',
          'Growing trees',
        ],
        correct: 0,
      },
      {
        q: 'Why do experts think online business will grow more?',
        options: [
          'Because more people use smartphones and internet services',
          'Because the internet is disappearing',
          'Because people no longer shop online',
        ],
        correct: 0,
      },
    ],
  },
  {
    id: 'can-humans-live-on-mars',
    title: 'Can Humans Live on Mars?',
    category: 'space',
    audioSrc: '/audio/daily-reads/Can Humans Live on Mars.mp3',
    words: 120,
    durationLabel: '1 min listen',
    level: 'Beginner',
    intro:
      'A short story about Mars, the Red Planet, and whether humans could ever live there — exploring the challenges, the technology being developed, and the dreams scientists have for the future.',
    questions: [
      {
        q: 'Why is Mars called the "Red Planet"?',
        options: ['Because of its color', 'Because of its size', 'Because of its temperature'],
        correct: 0,
      },
      {
        q: 'Why can humans not breathe normally on Mars?',
        options: [
          'Because Mars is too small',
          'Because there is very little oxygen',
          'Because Mars has too much water',
        ],
        correct: 1,
      },
      {
        q: 'Where may astronauts live on Mars?',
        options: [
          'Inside special buildings',
          'In caves under the ocean',
          'In airplanes',
        ],
        correct: 0,
      },
      {
        q: 'What is one big challenge of going to Mars?',
        options: [
          'Learning to swim',
          'Traveling takes many months',
          'Finding animals',
        ],
        correct: 1,
      },
      {
        q: 'Which company is working on rockets for Mars travel?',
        options: ['Apple', 'Tesla', 'SpaceX'],
        correct: 2,
      },
      {
        q: 'What do many people believe about the future?',
        options: [
          'Humans may build communities on Mars',
          'Mars will disappear soon',
          'People will stop studying space',
        ],
        correct: 0,
      },
    ],
  },
  {
    id: 'the-fifa-world-cup-2026',
    title: 'The FIFA World Cup 2026',
    category: 'sports',
    audioSrc: '/audio/daily-reads/The FIFA World Cup 2026.mp3',
    words: 120,
    durationLabel: '1 min listen',
    level: 'Beginner',
    intro:
      'A short story about the FIFA World Cup 2026: which countries will host it, how many teams will play, and why fans around the world are excited about this historic tournament.',
    questions: [
      {
        q: 'Which sport is the World Cup about?',
        options: ['Basketball', 'Football', 'Tennis'],
        correct: 1,
      },
      {
        q: 'Which countries will host the 2026 World Cup?',
        options: [
          'Brazil, Spain, and Italy',
          'United States, Canada, and Mexico',
          'France, Germany, and England',
        ],
        correct: 1,
      },
      {
        q: 'Why are fans excited about the tournament?',
        options: [
          'Because they want to watch famous players and exciting matches',
          'Because the tournament is very short',
          'Because there will be no teams',
        ],
        correct: 0,
      },
      {
        q: 'How many teams are planned for the 2026 World Cup?',
        options: ['24', '32', '48'],
        correct: 2,
      },
      {
        q: 'How may the World Cup help the host countries?',
        options: [
          'By improving tourism and business',
          'By stopping travel',
          'By reducing sports events',
        ],
        correct: 0,
      },
      {
        q: 'Why do many people think the 2026 World Cup will be memorable?',
        options: [
          'Because of its large size and international atmosphere',
          'Because only one team will play',
          'Because it will happen online only',
        ],
        correct: 0,
      },
    ],
  },
];

/* -------------------------------------------------------------------------
   Helpers - localStorage progress
   ------------------------------------------------------------------------- */
const STORAGE_KEY = 'dailyReads:completed';

const loadCompleted = (): string[] => {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((v) => typeof v === 'string') : [];
  } catch {
    return [];
  }
};

const saveCompleted = (ids: string[]) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  } catch {
    /* localStorage may be unavailable (private mode) */
  }
};

/* -------------------------------------------------------------------------
   Icons (inline, no external deps)
   ------------------------------------------------------------------------- */
const IconChevron: React.FC<{ open: boolean }> = ({ open }) => (
  <svg
    viewBox="0 0 20 20"
    className={`w-5 h-5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
      clipRule="evenodd"
    />
  </svg>
);

const IconCheck: React.FC = () => (
  <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 111.4-1.4L8.5 12l6.8-6.8a1 1 0 011.4.1z"
      clipRule="evenodd"
    />
  </svg>
);

const IconSearch: React.FC = () => (
  <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M9 3.5a5.5 5.5 0 103.4 9.83l3.13 3.14a.75.75 0 101.06-1.06l-3.13-3.13A5.5 5.5 0 009 3.5zM5 9a4 4 0 118 0 4 4 0 01-8 0z"
      clipRule="evenodd"
    />
  </svg>
);

/* -------------------------------------------------------------------------
   Audio Player with speed control
   ------------------------------------------------------------------------- */
const AudioPlayer: React.FC<{ src: string; title: string }> = ({ src, title }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [rate, setRate] = useState<number>(1);

  useEffect(() => {
    if (audioRef.current) audioRef.current.playbackRate = rate;
  }, [rate]);

  const rates: number[] = [0.75, 1, 1.25];

  return (
    <div className="mt-4">
      <audio
        ref={audioRef}
        controls
        preload="none"
        className="w-full"
        aria-label={`Audio for ${title}`}
      >
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div className="flex items-center gap-2 mt-3 flex-wrap">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Speed
        </span>
        {rates.map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => setRate(r)}
            className={`text-xs font-bold px-3 py-1.5 rounded-full transition-colors ring-1 ${
              rate === r
                ? 'bg-blue-600 text-white ring-blue-600'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 ring-slate-200 dark:ring-slate-700 hover:ring-blue-400'
            }`}
            aria-pressed={rate === r}
          >
            {r}x
          </button>
        ))}
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------
   Quiz block (6 questions)
   ------------------------------------------------------------------------- */
const StoryQuiz: React.FC<{
  story: Story;
  onComplete: (score: number, total: number) => void;
}> = ({ story, onComplete }) => {
  const [answers, setAnswers] = useState<number[]>(() => Array(story.questions.length).fill(-1));
  const [checked, setChecked] = useState<boolean>(false);

  const score = useMemo(
    () => answers.reduce((acc, a, i) => (a === story.questions[i].correct ? acc + 1 : acc), 0),
    [answers, story.questions],
  );

  const total = story.questions.length;
  const allAnswered = answers.every((v) => v !== -1);

  const handleSelect = (qIdx: number, optIdx: number) => {
    if (checked) return;
    setAnswers((prev) => {
      const next = [...prev];
      next[qIdx] = optIdx;
      return next;
    });
  };

  const handleCheck = () => {
    setChecked(true);
    onComplete(score, total);
    if (typeof window !== 'undefined') {
      // gentle scroll-to-result for mobile
      window.requestAnimationFrame(() => {
        document
          .getElementById(`result-${story.id}`)
          ?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    }
  };

  const handleReset = () => {
    setAnswers(Array(total).fill(-1));
    setChecked(false);
  };

  return (
    <div className="mt-6">
      <h4 className="font-heading font-bold text-slate-900 dark:text-white mb-4">
        Comprehension quiz
        <span className="ml-2 text-xs font-medium text-slate-500 dark:text-slate-400">
          ({total} questions)
        </span>
      </h4>

      <ol className="space-y-5">
        {story.questions.map((question, qIdx) => {
          const selected = answers[qIdx];
          return (
            <li key={qIdx}>
              <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
                {qIdx + 1}. {question.q}
              </p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {question.options.map((opt, optIdx) => {
                  const isSelected = selected === optIdx;
                  const isCorrect = question.correct === optIdx;
                  let cls =
                    'block text-sm px-3 py-2 rounded-lg ring-1 cursor-pointer transition-colors text-left w-full ';
                  if (!checked) {
                    cls += isSelected
                      ? 'bg-blue-50 dark:bg-blue-500/10 ring-blue-400 dark:ring-blue-500 text-slate-900 dark:text-white'
                      : 'bg-white dark:bg-slate-800 ring-slate-200 dark:ring-slate-700 text-slate-700 dark:text-slate-200 hover:ring-blue-300';
                  } else if (isCorrect) {
                    cls +=
                      'bg-emerald-50 dark:bg-emerald-500/10 ring-emerald-400 dark:ring-emerald-500 text-emerald-900 dark:text-emerald-100 font-semibold';
                  } else if (isSelected) {
                    cls +=
                      'bg-rose-50 dark:bg-rose-500/10 ring-rose-300 dark:ring-rose-500/60 text-rose-900 dark:text-rose-100';
                  } else {
                    cls +=
                      'bg-white dark:bg-slate-800 ring-slate-200 dark:ring-slate-700 text-slate-500 dark:text-slate-400';
                  }
                  return (
                    <li key={optIdx}>
                      <button
                        type="button"
                        className={cls}
                        onClick={() => handleSelect(qIdx, optIdx)}
                        disabled={checked}
                        aria-pressed={isSelected}
                      >
                        {opt}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ol>

      <div className="flex flex-wrap items-center gap-3 mt-6">
        {!checked ? (
          <button
            type="button"
            onClick={handleCheck}
            disabled={!allAnswered}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Check Answers
          </button>
        ) : (
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 font-bold text-sm transition-colors"
          >
            Try again
          </button>
        )}
        {!allAnswered && !checked && (
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Answer all {total} questions to check.
          </span>
        )}
      </div>

      {checked && (
        <div
          id={`result-${story.id}`}
          className={`mt-5 rounded-xl p-4 ring-1 ${
            score === total
              ? 'bg-emerald-50 dark:bg-emerald-500/10 ring-emerald-300 dark:ring-emerald-500/40 text-emerald-900 dark:text-emerald-100'
              : score >= Math.ceil(total / 2)
                ? 'bg-amber-50 dark:bg-amber-500/10 ring-amber-300 dark:ring-amber-500/40 text-amber-900 dark:text-amber-100'
                : 'bg-rose-50 dark:bg-rose-500/10 ring-rose-300 dark:ring-rose-500/40 text-rose-900 dark:text-rose-100'
          }`}
        >
          <p className="font-bold">
            {score === total
              ? 'Great job!'
              : score >= Math.ceil(total / 2)
                ? 'Nice work! Keep practicing.'
                : 'Good try! Listen again and retry.'}
          </p>
          <p className="text-sm mt-0.5">
            You scored <span className="font-bold">{score}/{total}</span>.
          </p>
        </div>
      )}
    </div>
  );
};

/* -------------------------------------------------------------------------
   Story card
   ------------------------------------------------------------------------- */
const StoryCard: React.FC<{
  story: Story;
  isCompleted: boolean;
  onComplete: (storyId: string, score: number, total: number) => void;
}> = ({ story, isCompleted, onComplete }) => {
  return (
    <article className="rounded-2xl bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-800 p-5 sm:p-6">
      <header className="flex items-start justify-between gap-3 flex-wrap">
        <div>
          <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-snug">
            {story.title}
          </h3>
          <div className="flex flex-wrap items-center gap-2 mt-2 text-xs text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 ring-1 ring-slate-200 dark:ring-slate-700 font-semibold">
              {story.durationLabel}
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 ring-1 ring-slate-200 dark:ring-slate-700 font-semibold">
              {story.words} words
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-teal-100 dark:bg-teal-500/10 ring-1 ring-teal-200 dark:ring-teal-500/30 text-teal-800 dark:text-teal-200 font-semibold">
              {story.level}
            </span>
          </div>
        </div>
        {isCompleted && (
          <span className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/15 ring-1 ring-emerald-300 dark:ring-emerald-500/40 text-emerald-800 dark:text-emerald-200">
            <IconCheck /> Completed
          </span>
        )}
      </header>

      <p className="text-slate-700 dark:text-slate-300 mt-3 leading-relaxed">{story.intro}</p>

      <AudioPlayer src={story.audioSrc} title={story.title} />

      <StoryQuiz
        story={story}
        onComplete={(score, total) => onComplete(story.id, score, total)}
      />
    </article>
  );
};

/* -------------------------------------------------------------------------
   Category accordion section
   ------------------------------------------------------------------------- */
const CategorySection: React.FC<{
  category: Category;
  stories: Story[];
  defaultOpen: boolean;
  completedIds: string[];
  onComplete: (storyId: string, score: number, total: number) => void;
}> = ({ category, stories, defaultOpen, completedIds, onComplete }) => {
  const [open, setOpen] = useState<boolean>(defaultOpen);
  const sectionId = `category-${category.id}`;

  const completedHere = stories.filter((s) => completedIds.includes(s.id)).length;

  return (
    <section id={sectionId} className="scroll-mt-24">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 rounded-2xl bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-800 px-5 sm:px-6 py-4 hover:ring-blue-300 dark:hover:ring-blue-500/40 transition-colors text-left"
        aria-expanded={open}
        aria-controls={`${sectionId}-panel`}
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className="text-2xl" aria-hidden="true">{category.emoji}</span>
          <div className="min-w-0">
            <h2 className="font-heading text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white truncate">
              {category.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 truncate">
              {category.active
                ? `${stories.length} ${stories.length === 1 ? 'story' : 'stories'}${
                    completedHere > 0 ? ` • ${completedHere} completed` : ''
                  }`
                : 'Coming soon'}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {!category.active && (
            <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full bg-amber-100 dark:bg-amber-500/10 ring-1 ring-amber-300 dark:ring-amber-500/30 text-amber-800 dark:text-amber-200">
              Soon
            </span>
          )}
          <span className="text-slate-500 dark:text-slate-400">
            <IconChevron open={open} />
          </span>
        </div>
      </button>

      {open && (
        <div id={`${sectionId}-panel`} className="mt-4 space-y-4">
          {!category.active ? (
            <div className="rounded-2xl bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-800 p-6 text-slate-700 dark:text-slate-300">
              <p className="leading-relaxed">{category.blurb}</p>
              <p className="text-sm mt-2 text-slate-500 dark:text-slate-400">
                New stories for <strong>{category.name}</strong> are being recorded.
                Check back soon, or start with the{' '}
                <a
                  href="#category-technology"
                  className="text-blue-600 dark:text-blue-400 underline underline-offset-2"
                >
                  Technology stories
                </a>{' '}
                that are live today.
              </p>
            </div>
          ) : stories.length === 0 ? (
            <div className="rounded-2xl bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-800 p-6 text-slate-600 dark:text-slate-300">
              No stories match your search in this category.
            </div>
          ) : (
            stories.map((story) => (
              <StoryCard
                key={story.id}
                story={story}
                isCompleted={completedIds.includes(story.id)}
                onComplete={onComplete}
              />
            ))
          )}
        </div>
      )}
    </section>
  );
};

/* -------------------------------------------------------------------------
   Page
   ------------------------------------------------------------------------- */
const DailyEnglishReadsPage: React.FC = () => {
  usePageMetadata({
    title: 'Daily English Reads: Short Audio Stories for English Listening Practice | TypoGrammar',
    description:
      'Improve your English with free short audio stories and easy reading practice. Beginner-friendly listening lessons across Technology, Famous People, Animals, Space, Business, and Sports, with a quick quiz after every story.',
    canonical: 'https://typogrammar.com/daily-english-reads/',
  });

  const [query, setQuery] = useState<string>('');
  const [completedIds, setCompletedIds] = useState<string[]>([]);

  useEffect(() => {
    setCompletedIds(loadCompleted());
  }, []);

  const activeStoriesTotal = useMemo(
    () => STORIES.filter((s) => CATEGORIES.find((c) => c.id === s.category)?.active).length,
    [],
  );
  const completedActiveCount = completedIds.filter((id) =>
    STORIES.some((s) => s.id === id && CATEGORIES.find((c) => c.id === s.category)?.active),
  ).length;

  const handleComplete = (storyId: string, score: number, total: number) => {
    // Mark as completed when the learner answers at least half correctly.
    if (score < Math.ceil(total / 2)) return;
    setCompletedIds((prev) => {
      if (prev.includes(storyId)) return prev;
      const next = [...prev, storyId];
      saveCompleted(next);
      return next;
    });
  };

  const filteredStoriesByCategory = useMemo(() => {
    const q = query.trim().toLowerCase();
    const map: Record<CategoryId, Story[]> = {
      'technology': [],
      'famous-people': [],
      'animals': [],
      'space': [],
      'business': [],
      'sports': [],
    };
    for (const story of STORIES) {
      if (q && !story.title.toLowerCase().includes(q) && !story.intro.toLowerCase().includes(q)) {
        continue;
      }
      map[story.category].push(story);
    }
    return map;
  }, [query]);

  /* -- JSON-LD: CollectionPage + ItemList of audio stories ------------- */
  useEffect(() => {
    const audioItems = STORIES.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'AudioObject',
        name: s.title,
        description: s.intro,
        contentUrl: `https://typogrammar.com${s.audioSrc}`,
        encodingFormat: 'audio/mpeg',
        inLanguage: 'en',
        learningResourceType: 'Listening practice',
        educationalLevel: s.level,
        wordCount: s.words,
      },
    }));
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Daily English Reads',
      description:
        'Free short audio stories for English listening and reading practice, with a comprehension quiz after every story.',
      url: 'https://typogrammar.com/daily-english-reads',
      inLanguage: 'en',
      isAccessibleForFree: true,
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: audioItems,
      },
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-jsonld', 'daily-english-reads');
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-10">

      {/* =================== 1. HERO =================== */}
      <header className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-teal-600 text-white p-8 sm:p-12">
        <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 w-72 h-72 rounded-full bg-amber-300/15 blur-3xl" aria-hidden="true" />

        <div className="relative z-10">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest bg-white/15 ring-1 ring-white/20 px-2.5 py-1 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
            New on TypoGrammar
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold leading-[1.05] mb-4">
            Daily English Reads
          </h1>
          <p className="text-white/85 text-base sm:text-lg max-w-2xl leading-relaxed">
            Improve your English with short audio stories and easy reading practice.
            Learn new words, train your <strong>listening</strong>, and finish each
            story with a quick 6-question quiz.
          </p>

          <ul className="flex flex-wrap gap-2 mt-6">
            {[
              `${CATEGORIES.length} Categories`,
              'Short Audio Lessons',
              'Beginner Friendly',
              'Free, no signup',
            ].map((chip) => (
              <li
                key={chip}
                className="text-[11px] sm:text-xs font-bold bg-white/15 ring-1 ring-white/20 px-3 py-1.5 rounded-full"
              >
                {chip}
              </li>
            ))}
          </ul>

          {activeStoriesTotal > 0 && (
            <p className="mt-6 text-sm text-white/80">
              Your progress:{' '}
              <span className="font-bold">
                {completedActiveCount}/{activeStoriesTotal}
              </span>{' '}
              {activeStoriesTotal === 1 ? 'story' : 'stories'} completed
            </p>
          )}
        </div>
      </header>

      {/* =================== 2. CATEGORY NAV =================== */}
      <nav aria-label="Story categories">
        <ul className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <li key={cat.id}>
              <a
                href={`#category-${cat.id}`}
                className={`inline-flex items-center gap-1.5 text-sm font-semibold px-3.5 py-2 rounded-full ring-1 transition-colors ${
                  cat.active
                    ? 'bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 ring-slate-200 dark:ring-slate-700 hover:ring-blue-400'
                    : 'bg-slate-50 dark:bg-slate-900/60 text-slate-500 dark:text-slate-400 ring-slate-200 dark:ring-slate-800'
                }`}
              >
                <span aria-hidden="true">{cat.emoji}</span>
                {cat.name}
                {!cat.active && (
                  <span className="ml-1 text-[10px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300">
                    soon
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* =================== 3. SEARCH =================== */}
      <div>
        <label htmlFor="story-search" className="sr-only">
          Search stories
        </label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            <IconSearch />
          </span>
          <input
            id="story-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search stories..."
            className="w-full pl-9 pr-3 py-2.5 rounded-full bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* =================== 4. CATEGORIES (ACCORDION) =================== */}
      <div className="space-y-6">
        {CATEGORIES.map((cat) => (
          <CategorySection
            key={cat.id}
            category={cat}
            stories={filteredStoriesByCategory[cat.id]}
            defaultOpen={cat.active}
            completedIds={completedIds}
            onComplete={handleComplete}
          />
        ))}
      </div>

      {/* =================== 5. CONTINUE LEARNING =================== */}
      <section className="rounded-2xl bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-800 p-6 sm:p-8">
        <h2 className="font-heading text-2xl font-extrabold text-slate-900 dark:text-white mb-2">
          More English Practice
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-5">
          Keep your daily streak going with these short, focused lessons.
        </p>
        <ul className="grid sm:grid-cols-2 gap-3">
          {[
            { to: '/quizzes/verb-tenses-quiz/', label: '50-question verb tenses quiz', emoji: '🎯' },
            { to: '/pronunciation/', label: 'English pronunciation guide', emoji: '🔊' },
            { to: '/reading/reading-comprehension-practice/', label: 'Reading comprehension practice', emoji: '📖' },
            { to: '/phrasal-verbs/', label: 'Most common phrasal verbs', emoji: '🔗' },
            { to: '/idioms/', label: 'English idioms with meanings', emoji: '💬' },
            { to: '/grammar-checker/', label: 'Free grammar checker', emoji: '✅' },
          ].map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="flex items-center gap-3 p-3.5 rounded-xl ring-1 ring-slate-200 dark:ring-slate-700 bg-slate-50 dark:bg-slate-800/50 hover:ring-blue-400 hover:bg-white dark:hover:bg-slate-800 transition-colors"
              >
                <span className="text-xl" aria-hidden="true">{item.emoji}</span>
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* =================== 6. FOOTER CTA =================== */}
      <section className="relative overflow-hidden rounded-3xl bg-slate-950 text-white p-8 sm:p-12 text-center">
        <div className="pointer-events-none absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-teal-500/15 blur-3xl" aria-hidden="true" />
        <div className="relative z-10">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mb-3">
            Practice English every day with TypoGrammar.
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-7 leading-relaxed">
            A few minutes a day is all it takes. Free lessons, quizzes, and audio stories, built for learners on the go.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/getting-started/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-blue-900 font-bold text-sm transition-colors"
            >
              Start learning free
            </Link>
            <Link
              to="/blog/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-white hover:bg-white/10 font-semibold text-sm transition-colors"
            >
              Read the blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DailyEnglishReadsPage;
