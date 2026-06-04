import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

interface NavItem {
  label: string;
  to: string;
}

interface NavSection {
  heading?: string;
  items: NavItem[];
}

interface NavGroup {
  id: string;
  label: string;
  columns: 1 | 2 | 3 | 4;
  align?: 'left' | 'right' | 'center';
  sections: NavSection[];
}

const NAV_GROUPS: NavGroup[] = [
  {
    id: 'grammar',
    label: 'Grammar',
    columns: 2,
    sections: [
      {
        heading: 'Core Topics',
        items: [
          { label: 'Grammar Guide', to: '/grammar-guide/' },
          { label: 'The 12 Verb Tenses', to: '/grammar/verb-tenses/' },
          { label: 'Tense Visualizer', to: '/tense-visualizer/' },
          { label: 'Grammar Glossary A-Z', to: '/grammar-glossary/' },
          { label: 'Irregular Verbs List', to: '/irregular-verbs/' },
          { label: 'Basic Terminology', to: '/grammar-fundamentals/basic-terminology/' },
          { label: 'Preposition Combinations', to: '/preposition-combinations/' },
        ],
      },
      {
        heading: 'Grammar Mistakes',
        items: [
          { label: 'All Grammar Mistakes', to: '/grammar-mistakes/' },
          { label: 'Subject-Verb Agreement', to: '/grammar-mistakes/people-is-or-people-are/' },
          { label: 'Verb Form Errors', to: '/grammar-mistakes/i-am-agree-or-i-agree/' },
          { label: 'Word Confusion', to: '/grammar-mistakes/advice-vs-advise/' },
          { label: 'Preposition Errors', to: '/grammar-mistakes/discuss-or-discuss-about/' },
          { label: 'Quantifier Errors', to: '/grammar-mistakes/much-people-or-many-people/' },
        ],
      },
    ],
  },
  {
    id: 'vocabulary',
    label: 'Vocabulary',
    columns: 1,
    sections: [
      {
        items: [
          { label: 'Commonly Confused Words', to: '/commonly-confused-words/' },
          { label: 'Idioms & Expressions', to: '/idioms/' },
          { label: 'Phrasal Verbs', to: '/phrasal-verbs/' },
          { label: 'Collocations', to: '/vocabulary/collocations/' },
          { label: 'Homophones & Homonyms', to: '/vocabulary/homophones-homonyms-homographs/' },
          { label: 'Prefixes & Suffixes', to: '/prefixes-suffixes/' },
        ],
      },
    ],
  },
  {
    id: 'ielts',
    label: 'IELTS',
    columns: 3,
    align: 'center',
    sections: [
      {
        heading: 'Writing & Essays',
        items: [
          { label: 'Writing Task 2 Hub', to: '/ielts/ielts-writing-task-2-essay-types/' },
          { label: 'Opinion Essays', to: '/ielts/opinion-essay-ielts-band-7-9/' },
          { label: 'Discussion Essays', to: '/ielts/discussion-essay-ielts-band-7-9/' },
          { label: 'Advantages/Disadvantages', to: '/ielts/advantages-disadvantages-essay-ielts/' },
          { label: 'Problem/Solution Essays', to: '/ielts/problem-solution-essay-ielts/' },
          { label: 'Two-Part Question Essays', to: '/ielts/two-part-question-essay-ielts/' },
          { label: 'Band 8+ Sample Answers', to: '/ielts/band-8-ielts-sample-answers/' },
          { label: '50 Band 9 Essays', to: '/ielts/50-band-9-ielts-writing-task-2-sample-essays/' },
          { label: '1000 Speaking Questions', to: '/ielts/1000-ielts-speaking-questions/' },
        ],
      },
      {
        heading: 'Grammar Skills',
        items: [
          { label: 'Conditionals in IELTS', to: '/ielts/conditionals-in-ielts/' },
          { label: 'Passive Voice in IELTS', to: '/ielts/passive-voice-ielts-writing/' },
          { label: 'Complex Sentences', to: '/ielts/how-to-write-complex-sentences/' },
          { label: 'Common Grammar Mistakes', to: '/ielts/common-grammar-mistakes-ielts-writing/' },
          { label: 'Task Achievement', to: '/ielts/task-achievement-in-ielts/' },
          { label: 'Lexical Resource', to: '/ielts/lexical-resource-in-ielts/' },
        ],
      },
      {
        heading: 'Practice Tests',
        items: [
          { label: 'All IELTS Tests', to: '/ielts/tests/' },
          { label: 'Academic Reading — Test 1', to: '/ielts/tests/reading/academic/test-1/' },
          { label: 'General Reading — Test 1', to: '/ielts/tests/reading/general/test-1/' },
          { label: 'Listening Mock Test 1 (S1)', to: '/ielts/tests/listening/mock-test-1/section-1/' },
        ],
      },
      {
        heading: 'Resources & Scores',
        items: [
          { label: 'Band Score Calculator', to: '/ielts-band-score-calculator/' },
          { label: 'Reading Score Conversion', to: '/ielts/reading-raw-score-to-band-conversion/' },
          { label: 'Is 7.5 Good Enough?', to: '/ielts/is-7-5-ielts-score-good-enough/' },
          { label: 'Why Stuck at 6.5?', to: '/ielts/why-stuck-at-6-5/' },
          { label: 'Is IELTS Getting Harder?', to: '/ielts/is-ielts-getting-harder-2026/' },
          { label: 'IELTS in 3 Days', to: '/ielts/ielts-in-3-days/' },
          { label: 'Band 6 Vocabulary', to: '/ielts/vocabulary/band-6/' },
          { label: 'Band 7 Vocabulary', to: '/ielts/vocabulary/band-7/' },
          { label: 'Band 8 Vocabulary', to: '/ielts/vocabulary/band-8/' },
          { label: 'Band 9 Vocabulary', to: '/ielts/vocabulary/band-9/' },
          { label: 'Grammar PDF', to: '/ielts/english-grammar-pdf/' },
          { label: 'Free IELTS Vocabulary Book', to: '/ielts/academic-vocabulary-book/' },
          { label: '100 English Idioms PDF', to: '/ielts/idioms-book/' },
          { label: 'Health Vocabulary Book', to: '/ielts/health-vocabulary-book/' },
          { label: 'Band 9 Essays PDF', to: '/ielts/writing-task-2-band-9-essays-book/' },
          { label: '50 Complex Sentences PDF', to: '/ielts/50-complex-sentences-for-ielts-pdf/' },
          { label: 'Score Requirements by Country', to: '/ielts/ielts-score-requirements-by-country/' },
          { label: 'Countries Without IELTS', to: '/ielts/countries-without-ielts/' },
        ],
      },
    ],
  },
  {
    id: 'toefl',
    label: 'TOEFL',
    columns: 4,
    align: 'center',
    sections: [
      {
        heading: 'Practice Tests',
        items: [
          { label: 'Reading Practice Test 1', to: '/toefl/tests/reading/test-1/' },
          { label: 'Reading Practice Test 2', to: '/toefl/tests/reading/test-2/' },
          { label: 'Reading Practice Test 3', to: '/toefl/tests/reading/test-3/' },
        ],
      },
      {
        heading: 'Reading',
        items: [
          { label: 'Reading Section Explained', to: '/toefl/toefl-reading/toefl-reading-section-explained/' },
          { label: 'Reading Strategies', to: '/toefl/toefl-reading/toefl-reading-strategies/' },
          { label: 'Reading Question Types', to: '/toefl/toefl-reading/toefl-reading-question-types/' },
          { label: 'Reading Time Management', to: '/toefl/toefl-reading/toefl-reading-time-management/' },
          { label: 'Reading Practice Questions', to: '/toefl/toefl-reading/toefl-reading-practice-questions/' },
          { label: 'Daily Life Reading Task', to: '/toefl/toefl-reading/toefl-daily-life-reading-task/' },
        ],
      },
      {
        heading: 'Writing',
        items: [
          { label: 'Writing Task 1', to: '/toefl/toefl-writing/toefl-writing-task-1-explained/' },
          { label: 'Writing Task 2', to: '/toefl/toefl-writing/toefl-writing-task-2-explained/' },
          { label: 'Writing Templates', to: '/toefl/toefl-writing/toefl-writing-templates/' },
          { label: 'Writing Topics', to: '/toefl/toefl-writing/toefl-writing-topics/' },
          { label: 'Writing Practice Questions', to: '/toefl/toefl-writing/toefl-writing-practice-questions/' },
        ],
      },
      {
        heading: 'Strategy & Resources',
        items: [
          { label: 'TOEFL 2026 Scoring', to: '/toefl/strategy-success/toefl-2026-scoring/' },
          { label: 'Old vs New TOEFL 2026', to: '/toefl/strategy-success/old-toefl-vs-new-toefl/' },
          { label: 'iBT vs LTP', to: '/toefl/strategy-success/toefl-ibt-vs-toefl-ltp/' },
          { label: 'Speaking: Average vs High-Scoring', to: '/toefl/strategy-success/toefl-speaking-average-vs-high-scoring-answer/' },
          { label: 'Complete the Words', to: '/toefl/strategy-success/toefl-complete-the-words/' },
          { label: 'Vocabulary PDF', to: '/toefl/toefl-vocabulary-pdf/' },
          { label: 'Writing PDF', to: '/toefl/toefl-writing-pdf/' },
          { label: 'Reading Practice PDF', to: '/toefl/toefl-reading-practice-pdf/' },
          { label: '1000 Speaking Questions', to: '/toefl/1000-toefl-speaking-questions/' },
        ],
      },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    columns: 2,
    align: 'right',
    sections: [
      {
        heading: 'AI Tools',
        items: [
          { label: 'Grammar Checker', to: '/grammar-checker/' },
          { label: 'Writing Assistant', to: '/writing-assistant/' },
          { label: 'Paraphrasing Tool', to: '/paraphrasing-tool/' },
          { label: 'Essay Topic Generator', to: '/essay-topic-generator/' },
          { label: 'IELTS Band Calculator', to: '/ielts-band-score-calculator/' },
          { label: 'AI Prompts for English', to: '/ai-prompts/' },
          { label: 'All AI Writing Tools', to: '/ai-writing-tools/' },
        ],
      },
      {
        heading: 'Practice',
        items: [
          { label: 'Grammar Flashcards', to: '/practice-tools/' },
          { label: 'Interactive Exercises', to: '/interactive-exercises/' },
          { label: 'Verb Tenses Quiz', to: '/quizzes/verb-tenses-quiz/' },
          { label: 'Pronunciation Guide', to: '/pronunciation/' },
          { label: 'Worksheets & PDFs', to: '/worksheets/' },
          { label: 'For Teachers', to: '/teacher/' },
          { label: 'My Progress', to: '/progress/' },
        ],
      },
    ],
  },
];

const DesktopNav: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  // Close on route change
  useEffect(() => {
    setOpenId(null);
  }, [location.pathname]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenId(null);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  const openMenu = (id: string) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setOpenId(id);
  };

  const scheduleClose = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => setOpenId(null), 150);
  };

  return (
    <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
      {NAV_GROUPS.map(group => (
        <div
          key={group.id}
          className="relative"
          onMouseEnter={() => openMenu(group.id)}
          onMouseLeave={scheduleClose}
        >
          {/* Trigger button */}
          <button
            onClick={() => setOpenId(prev => prev === group.id ? null : group.id)}
            className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-150 ${
              openId === group.id
                ? 'text-blue-600 bg-blue-50'
                : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100'
            }`}
            aria-expanded={openId === group.id}
            aria-haspopup="menu"
          >
            {group.label}
            <svg
              className={`w-3.5 h-3.5 text-slate-400 flex-shrink-0 transition-transform duration-150 ${
                openId === group.id ? 'rotate-180 text-blue-500' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dropdown panel */}
          {openId === group.id && (
            <div
              role="menu"
              onMouseEnter={() => openMenu(group.id)}
              onMouseLeave={scheduleClose}
              className={`absolute top-full mt-1 ${group.align === 'right' ? 'right-0' : group.align === 'center' ? 'left-1/2 -translate-x-1/2' : 'left-0'} bg-white border border-slate-200 rounded-xl shadow-2xl z-50 py-4 max-w-[calc(100vw-2rem)] ${
                group.columns === 4 ? 'flex w-[880px]' : group.columns === 3 ? 'flex w-[820px]' : group.columns === 2 ? 'flex w-[460px]' : 'w-56'
              }`}
            >
              {group.sections.map((section, i) => (
                <div
                  key={i}
                  className={`flex-1 px-5 ${
                    i < group.sections.length - 1 ? 'border-r border-slate-100' : ''
                  }`}
                >
                  {section.heading && (
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2.5">
                      {section.heading}
                    </p>
                  )}
                  <ul role="none">
                    {section.items.map(item => (
                      <li key={item.to} role="none">
                        <Link
                          to={item.to}
                          role="menuitem"
                          onClick={() => setOpenId(null)}
                          className="block py-1.5 text-[13px] text-slate-700 rounded-md hover:text-blue-600 transition-colors duration-100 leading-snug"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Blog, direct link */}
      <NavLink
        to="/blog/"
        className={({ isActive }) =>
          `px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-150 ${
            isActive
              ? 'text-blue-600 bg-blue-50'
              : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100'
          }`
        }
      >
        Blog
      </NavLink>
    </nav>
  );
};

export default DesktopNav;
