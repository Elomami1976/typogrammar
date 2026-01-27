
import React, { useState, useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { GRAMMAR_TOPICS } from '../constants/grammarTopics';
import { GrammarTopic } from '../types';
import { useProgress } from '../contexts/ProgressContext';
import DidYouKnow from './DidYouKnow';

interface SidebarProps {
  isMobileOpen: boolean;
  onClose: () => void;
}

// Helper component to highlight search terms
const Highlight: React.FC<{ text: string; highlight: string }> = ({ text, highlight }) => {
  if (!highlight.trim()) {
    return <>{text}</>;
  }
  const regex = new RegExp(`(${highlight})`, 'gi');
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} className="bg-yellow-200 text-slate-900 rounded-sm px-0.5 py-0 dark:bg-yellow-500/50 dark:text-slate-100">
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </>
  );
};

const activeLinkClass = 'bg-blue-50 text-blue-600 font-semibold border-l-4 border-blue-500 dark:bg-blue-900/50 dark:text-blue-400 dark:border-blue-500';
const defaultLinkClass = 'text-slate-600 hover:bg-slate-200/60 hover:text-slate-900 border-l-4 border-transparent hover:border-slate-300 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-slate-100 dark:border-l-4 dark:border-transparent dark:hover:border-slate-600';


// List of verb tense IDs that should use canonical URLs
const VERB_TENSE_IDS = [
  'present-simple', 'present-progressive', 'past-simple', 'past-progressive',
  'present-perfect', 'present-perfect-progressive', 'past-perfect', 'past-perfect-progressive',
  'future-simple', 'future-progressive', 'future-perfect', 'future-perfect-progressive'
];

const SidebarLink: React.FC<{
  to: string;
  text: string;
  onClick: () => void;
  isCompleted?: boolean;
  topicId?: string;
}> = ({ to, text, onClick, isCompleted, topicId }) => {
  // Redirect verb tense topics to canonical URLs
  const finalTo = topicId && VERB_TENSE_IDS.includes(topicId) 
    ? `/grammar/verb-tenses/${topicId}` 
    : to;

  return (
    <NavLink
      to={finalTo}
      onClick={onClick}
      className={({ isActive }) =>
        `flex items-center justify-between py-2.5 px-6 font-body text-[15px] transition-colors duration-150 ${isActive ? activeLinkClass : defaultLinkClass}`
      }
    >
      <span>{text}</span>
      {isCompleted && (
         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )}
    </NavLink>
  );
};

const SidebarSection: React.FC<{ title: string; children: React.ReactNode; defaultOpen?: boolean }> = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="py-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-6 py-2 text-left text-sm font-semibold text-slate-500 uppercase tracking-wider hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
      >
        <span>{title}</span>
        <svg
          className={`w-5 h-5 transform transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      {isOpen && <div className="mt-2">{children}</div>}
    </div>
  );
};

const SidebarContent: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { progress } = useProgress();
  const location = useLocation();

  const groupedTopics = useMemo(() => GRAMMAR_TOPICS.reduce((acc: Record<string, GrammarTopic[]>, topic) => {
    const category = topic.category;
    (acc[category] = acc[category] || []).push(topic);
    return acc;
  }, {} as Record<string, GrammarTopic[]>), []);

  const filteredTopics = useMemo(() => {
    if (!searchTerm.trim()) return null;
    return GRAMMAR_TOPICS.filter(topic => topic.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [searchTerm]);

  const isTopicPage = location.pathname.startsWith('/topics/');
  const isWritingPage = location.pathname.startsWith('/writing/');
  const isVocabularyPage = location.pathname.startsWith('/vocabulary/') || location.pathname.startsWith('/commonly-confused-words') || location.pathname.startsWith('/idioms') || location.pathname.startsWith('/phrasal-verbs') || location.pathname.startsWith('/prefixes-suffixes');
  const isIELTSPage = location.pathname.startsWith('/ielts/');


  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-slate-200 dark:border-slate-700">
        <input
          type="search"
          placeholder="Search topics..."
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-body text-base dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200 dark:focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <nav className="flex-1 overflow-y-auto py-4">
        {filteredTopics ? (
          <div>
            <h3 className="px-6 py-2 text-sm font-semibold text-slate-500 uppercase tracking-wider">Search Results</h3>
            {filteredTopics.length > 0 ? filteredTopics.map(topic => (
              <NavLink
                key={topic.id}
                to={`/topics/${topic.id}`}
                onClick={onClose}
                className={({ isActive }) => `flex items-center justify-between py-2.5 px-6 font-body text-[15px] transition-colors duration-150 ${isActive ? activeLinkClass : defaultLinkClass}`}
              >
                <Highlight text={topic.title} highlight={searchTerm} />
              </NavLink>
            )) : <p className="px-6 py-2 text-slate-500">No topics found.</p>}
          </div>
        ) : (
          <>
            <SidebarLink to="/" text="Home" onClick={onClose} />
            <SidebarLink to="/progress" text="My Progress" onClick={onClose} />
            <SidebarLink to="/blog" text="Blog" onClick={onClose} />
            
            <SidebarSection title="Grammar Topics" defaultOpen={isTopicPage}>
              {/* FIX: Replaced Object.entries with Object.keys for more robust type inference to resolve 'map' does not exist on 'unknown' error. */}
              {Object.keys(groupedTopics).map((category) => (
                <div key={category} className="py-2">
                  <h4 className="px-6 py-1 text-sm font-semibold text-slate-400 dark:text-slate-500">{category}</h4>
                  {groupedTopics[category].map(topic => (
                    <SidebarLink
                      key={topic.id}
                      to={`/topics/${topic.id}`}
                      text={topic.title}
                      onClick={onClose}
                      isCompleted={progress.completedTopics.includes(topic.id)}
                      topicId={topic.id}
                    />
                  ))}
                </div>
              ))}
            </SidebarSection>
            
            <SidebarSection title="Vocabulary" defaultOpen={isVocabularyPage}>
               <SidebarLink to="/commonly-confused-words" text="Commonly Confused Words" onClick={onClose} />
               <SidebarLink to="/vocabulary/collocations" text="Collocations" onClick={onClose} />
               <SidebarLink to="/vocabulary/homophones-homonyms-homographs" text="Homophones & Homonyms" onClick={onClose} />
               <SidebarLink to="/idioms" text="Idioms & Expressions" onClick={onClose} />
               <SidebarLink to="/phrasal-verbs" text="Phrasal Verbs" onClick={onClose} />
               <SidebarLink to="/prefixes-suffixes" text="Prefixes & Suffixes" onClick={onClose} />
            </SidebarSection>

            <SidebarSection title="Writing Skills" defaultOpen={isWritingPage}>
              <SidebarLink to="/writing/how-to-write-an-essay" text="How to Write an Essay" onClick={onClose} />
              <SidebarLink to="/essay-types" text="Types of Essays" onClick={onClose} />
              <SidebarLink to="/writing/how-to-write-a-professional-email" text="Writing a Professional Email" onClick={onClose} />
              <SidebarLink to="/writing/how-to-build-an-argument" text="Building a Strong Argument" onClick={onClose} />
              <SidebarLink to="/writing/how-to-paraphrase" text="Paraphrasing & Plagiarism" onClick={onClose} />
              <SidebarLink to="/writing/how-to-vary-sentence-structure" text="Varying Sentence Structure" onClick={onClose} />
            </SidebarSection>

            <SidebarSection title="IELTS Preparation" defaultOpen={isIELTSPage}>
              <SidebarLink to="/ielts/ielts-writing-task-2-essay-types" text="IELTS Writing Task 2 Hub" onClick={onClose} />
              <SidebarLink to="/ielts/opinion-essay-ielts-band-7-9" text="Opinion Essays" onClick={onClose} />
              <SidebarLink to="/ielts/discussion-essay-ielts-band-7-9" text="Discussion Essays" onClick={onClose} />
              <SidebarLink to="/ielts/advantages-disadvantages-essay-ielts" text="Advantages/Disadvantages" onClick={onClose} />
              <SidebarLink to="/ielts/problem-solution-essay-ielts" text="Problem/Solution Essays" onClick={onClose} />
              <SidebarLink to="/ielts/two-part-question-essay-ielts" text="Two-Part Questions" onClick={onClose} />
              <SidebarLink to="/ielts/mixed-essay-types-ielts" text="Mixed Essay Types" onClick={onClose} />
              <h4 className="px-6 py-2 pt-4 text-sm font-semibold text-slate-400 dark:text-slate-500">IELTS Vocabulary</h4>
              <SidebarLink to="/ielts/vocabulary/band-6" text="Band 6 Vocabulary" onClick={onClose} />
              <SidebarLink to="/ielts/vocabulary/band-7" text="Band 7 Vocabulary" onClick={onClose} />
              <SidebarLink to="/ielts/vocabulary/band-8" text="Band 8 Vocabulary" onClick={onClose} />
              <SidebarLink to="/ielts/vocabulary/band-9" text="Band 9 Vocabulary" onClick={onClose} />
              <h4 className="px-6 py-2 pt-4 text-sm font-semibold text-slate-400 dark:text-slate-500">Free Resources</h4>
              <SidebarLink to="/ielts/academic-vocabulary-book" text="Free IELTS Vocabulary Book (PDF)" onClick={onClose} />
              <h4 className="px-6 py-2 pt-4 text-sm font-semibold text-slate-400 dark:text-slate-500">IELTS Tests</h4>
              <div className="ml-4">
                <h5 className="px-6 py-2 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Listening</h5>
                <SidebarLink to="/ielts/tests/listening/mock-test-1/section-1" text="Mock Test 1 – Section 1" onClick={onClose} />
              </div>
            </SidebarSection>

            <SidebarSection title="Reading Skills">
              <SidebarLink to="/reading/how-to-read-efficiently" text="How to Read Efficiently" onClick={onClose} />
              <SidebarLink to="/reading/reading-comprehension-practice" text="Comprehension Practice" onClick={onClose} />
              <SidebarLink to="/reading/how-to-read-critically" text="How to Read Critically" onClick={onClose} />
            </SidebarSection>

             <SidebarSection title="Pronunciation">
              <SidebarLink to="/pronunciation-of-ed" text="Pronunciation of -ed" onClick={onClose} />
              <SidebarLink to="/pronunciation" text="Pronunciation Practice" onClick={onClose} />
            </SidebarSection>
            
            <SidebarSection title="Tools & Reference">
               <SidebarLink to="/grammar-glossary" text="Grammar Glossary A-Z" onClick={onClose} />
               <SidebarLink to="/irregular-verbs" text="Irregular Verbs List" onClick={onClose} />
               <SidebarLink to="/tense-visualizer" text="Visual Tense Guide" onClick={onClose} />
               <SidebarLink to="/preposition-combinations" text="Preposition Combinations" onClick={onClose} />
               <SidebarLink to="/grammar-fundamentals/basic-terminology" text="Basic Terminology" onClick={onClose} />
               <SidebarLink to="/practice-tools" text="Grammar Flashcards" onClick={onClose} />
               <SidebarLink to="/interactive-exercises" text="Interactive Exercises" onClick={onClose} />
               <SidebarLink to="/quizzes/verb-tenses-quiz" text="Verb Tenses Quiz (50 Q)" onClick={onClose} />
               <SidebarLink to="/worksheets" text="Worksheets & PDFs" onClick={onClose} />
               <SidebarLink to="/ai-prompts" text="AI Learning Prompts" onClick={onClose} />
               <SidebarLink to="/teacher" text="Prompts for Teachers" onClick={onClose} />
            </SidebarSection>

            <div className="py-4 mt-2 border-t border-slate-200 dark:border-slate-700">
                <SidebarLink to="/about" text="About" onClick={onClose} />
                <SidebarLink to="/faq" text="FAQ" onClick={onClose} />
                <SidebarLink to="/contact" text="Contact" onClick={onClose} />
            </div>
          </>
        )}
      </nav>

      <div className="p-4 mt-auto border-t border-slate-200 dark:border-slate-700">
        <DidYouKnow />
      </div>
    </div>
  );
};


const Sidebar: React.FC<SidebarProps> = ({ isMobileOpen, onClose }) => {
  return (
    <>
      {/* Mobile overlay */}
      <div
        className={`fixed top-[69px] left-0 right-0 bottom-0 bg-black/40 z-20 md:hidden transition-opacity ${
          isMobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      ></div>
      
      {/* Sidebar */}
      <aside
        className={`fixed md:sticky top-[69px] h-[calc(100vh-69px)] md:h-auto md:top-[69px] md:max-h-[calc(100vh-69px)] w-72 md:w-80 flex-shrink-0 bg-white border-r border-slate-200 z-30 transition-transform duration-300 ease-in-out ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 dark:bg-slate-900 dark:border-slate-700`}
      >
        <SidebarContent onClose={onClose} />
      </aside>
    </>
  );
};

export default Sidebar;
