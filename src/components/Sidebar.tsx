
import React, { useState, useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { GRAMMAR_TOPICS_META as GRAMMAR_TOPICS, GrammarTopicMeta } from '../constants/grammarTopicsMeta';
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

  const groupedTopics = useMemo(() => GRAMMAR_TOPICS.reduce((acc: Record<string, GrammarTopicMeta[]>, topic) => {
    const category = topic.category;
    (acc[category] = acc[category] || []).push(topic);
    return acc;
  }, {} as Record<string, GrammarTopicMeta[]>), []);

  const filteredTopics = useMemo(() => {
    if (!searchTerm.trim()) return null;
    return GRAMMAR_TOPICS.filter(topic => topic.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [searchTerm]);

  const isTopicPage = location.pathname.startsWith('/topics/');
  const isWritingPage = location.pathname.startsWith('/writing/');
  const isVocabularyPage = location.pathname.startsWith('/vocabulary/') || location.pathname.startsWith('/commonly-confused-words') || location.pathname.startsWith('/idioms') || location.pathname.startsWith('/phrasal-verbs') || location.pathname.startsWith('/prefixes-suffixes');
  const isIELTSPage = location.pathname.startsWith('/ielts/');
  const isTOEFLPage = location.pathname.startsWith('/toefl/');
  const isGrammarMistakesPage = location.pathname.startsWith('/grammar-mistakes');
  const isDownloadsPage =
    location.pathname.startsWith('/downloads/') ||
    location.pathname.startsWith('/ielts/english-grammar-pdf') ||
    location.pathname.startsWith('/ielts/academic-vocabulary-book') ||
    location.pathname.startsWith('/ielts/idioms-book') ||
    location.pathname.startsWith('/ielts/health-vocabulary-book') ||
    location.pathname.startsWith('/ielts/writing-task-2-band-9-essays-book') ||
    location.pathname.startsWith('/ielts/grammar-master-book') ||
    location.pathname.startsWith('/ielts/cue-cards-book') ||
    location.pathname.startsWith('/ielts/50-complex-sentences-for-ielts-pdf') ||
    location.pathname.startsWith('/toefl/toefl-vocabulary-pdf') ||
    location.pathname.startsWith('/toefl/toefl-writing-pdf') ||
    location.pathname.startsWith('/toefl/toefl-reading-practice-pdf') ||
    location.pathname.startsWith('/toefl/1000-toefl-speaking-questions') ||
    location.pathname.startsWith('/ielts-writing-task-1-master-guide');


  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-slate-200 dark:border-slate-700">
        <input
          id="sidebar-search"
          name="sidebar-search"
          type="search"
          autoComplete="off"
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
            <SidebarLink to="/getting-started/" text="Getting Started" onClick={onClose} />
            <SidebarLink to="/what-is-typogrammar/" text="What Is TypoGrammar?" onClick={onClose} />
            <SidebarLink to="/grammar-guide/" text="Grammar Guide" onClick={onClose} />
            <SidebarLink to="/writing-assistant/" text="Writing Assistant" onClick={onClose} />
            <SidebarLink to="/progress/" text="My Progress" onClick={onClose} />
            <SidebarLink to="/blog/" text="Blog" onClick={onClose} />
            
            <SidebarSection title="Grammar Topics" defaultOpen={isTopicPage}>
              <SidebarLink to="/grammar/verb-tenses/" text="📚 The 12 Verb Tenses (Hub)" onClick={onClose} />
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
            
            <SidebarSection title="Grammar Mistakes" defaultOpen={isGrammarMistakesPage}>
              <SidebarLink to="/grammar-mistakes/" text="📋 Grammar Mistakes Hub" onClick={onClose} />
              <h4 className="px-6 py-2 text-sm font-semibold text-slate-400 dark:text-slate-500">Subject-Verb Agreement</h4>
              <SidebarLink to="/grammar-mistakes/people-is-or-people-are/" text="People Is or People Are?" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/he-go-or-he-goes/" text="He Go or He Goes?" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/everyone-is-or-everyone-are/" text="Everyone Is or Everyone Are?" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/each-are-or-each-is/" text="Each Are or Each Is?" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/someone-is-or-are/" text="Someone Is or Are?" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/someone-has-or-have/" text="Someone Has or Have?" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/everybody-has-or-have/" text="Everybody Has or Have?" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/none-is-or-are/" text="None Is or Are?" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/a-number-of-vs-the-number-of/" text="A Number Of vs The Number Of" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/a-lot-of-people-is-or-are/" text="A Lot of People Is or Are?" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/one-of-the-students-is-or-are/" text="One of the Students Is or Are?" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/each-of-the-students-is-or-are/" text="Each of the Students Is or Are?" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/a-group-of-people-is-or-are/" text="A Group of People Is or Are?" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/everybody-is-or-are/" text="Everybody Is or Are?" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/nobody-is-or-are/" text="Nobody Is or Are?" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/everyone-has-or-have/" text="Everyone Has or Have?" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/each-of-or-every-of/" text="Each of or Every of?" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/either-of-or-neither-of/" text="Either of / Neither of" onClick={onClose} />
              <h4 className="px-6 py-2 pt-4 text-sm font-semibold text-slate-400 dark:text-slate-500">Verb Form Errors</h4>
              <SidebarLink to="/grammar-mistakes/i-am-agree-or-i-agree/" text="I Am Agree or I Agree?" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/he-didnt-went-or-he-didnt-go/" text="He Didn't Went or Go?" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/did-you-went-or-did-you-go/" text="Did You Went or Go?" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/i-did-or-i-done/" text="I Did or I Done?" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/i-have-saw-or-seen/" text="I Have Saw or Seen?" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/i-have-ate-or-eaten/" text="I Have Ate or Eaten?" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/i-have-wrote-or-written/" text="I Have Wrote or Written?" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/i-have-drank-or-drunk/" text="I Have Drank or Drunk?" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/i-have-went-or-have-gone/" text="I Have Went or Gone?" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/he-has-came-or-come/" text="He Has Came or Come?" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/i-seen-or-i-saw/" text="I Seen or I Saw?" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/she-has-went-or-gone/" text="She Has Went or Gone?" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/should-have-vs-should-of/" text="Should Have vs. Should Of" onClick={onClose} />
              <h4 className="px-6 py-2 pt-4 text-sm font-semibold text-slate-400 dark:text-slate-500">Word Confusion</h4>
              <SidebarLink to="/grammar-mistakes/advice-vs-advise/" text="Advice vs Advise" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/do-vs-make/" text="Do vs Make" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/speak-vs-talk/" text="Speak vs Talk" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/bring-vs-take/" text="Bring vs Take" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/listen-vs-hear/" text="Listen vs Hear" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/say-vs-tell/" text="Say vs Tell" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/look-vs-see-vs-watch/" text="Look vs See vs Watch" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/learn-vs-study/" text="Learn vs Study" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/borrow-vs-lend/" text="Borrow vs Lend" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/remember-vs-remind/" text="Remember vs Remind" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/win-vs-beat/" text="Win vs Beat" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/a-lot-or-alot/" text="A Lot or Alot?" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/everyday-vs-every-day/" text="Everyday vs Every Day" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/sometime-vs-sometimes/" text="Sometime vs Sometimes" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/into-vs-in-to/" text="Into vs In To" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/sensible-vs-sensitive/" text="Sensible vs Sensitive" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/efficient-vs-effective/" text="Efficient vs Effective" onClick={onClose} />
              <h4 className="px-6 py-2 pt-4 text-sm font-semibold text-slate-400 dark:text-slate-500">Preposition Errors</h4>
              <SidebarLink to="/grammar-mistakes/discuss-or-discuss-about/" text="Discuss or Discuss About?" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/married-with-or-married-to/" text="Married With or To?" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/different-from-or-different-than/" text="Different From or Than?" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/interested-in-or-interested-on/" text="Interested In or On?" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/good-in-or-good-at/" text="Good In or Good At?" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/in-the-weekend-or-on-the-weekend/" text="In/On the Weekend?" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/arrive-in-or-arrive-at/" text="Arrive In or At?" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/afraid-of-or-afraid-from/" text="Afraid Of or From?" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/proud-of-or-proud-for/" text="Proud Of or For?" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/responsible-for-or-responsible-of/" text="Responsible For or Of?" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/explain-or-explain-about/" text="Explain or Explain About?" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/request-or-request-for/" text="Request or Request For?" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/enter-or-enter-to/" text="Enter or Enter To?" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/complain-about-or-complain-of/" text="Complain About or Of?" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/by-accident-vs-on-accident/" text="By Accident vs. On Accident" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/capable-of-or-capable-to/" text="Capable of or Capable to?" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/fond-of-or-fond-for/" text="Fond of or Fond for?" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/accused-of-or-accused-for/" text="Accused of or Accused for?" onClick={onClose} />
              <h4 className="px-6 py-2 pt-4 text-sm font-semibold text-slate-400 dark:text-slate-500">Quantifier Errors</h4>
              <SidebarLink to="/grammar-mistakes/much-people-or-many-people/" text="Much People or Many?" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/less-people-or-fewer-people/" text="Less People or Fewer?" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/little-vs-few/" text="Little vs Few" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/many-vs-much/" text="Many vs Much" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/too-much-vs-too-many/" text="Too Much vs Too Many" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/some-vs-any/" text="Some vs Any" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/so-much-vs-so-many/" text="So Much vs So Many" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/a-few-vs-few/" text="A Few vs Few" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/a-little-vs-little/" text="A Little vs Little" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/several-vs-some/" text="Several vs Some" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/plenty-of-vs-a-lot-of/" text="Plenty of vs A Lot of" onClick={onClose} />
              <h4 className="px-6 py-2 pt-4 text-sm font-semibold text-slate-400 dark:text-slate-500">Redundancy Errors</h4>
              <SidebarLink to="/grammar-mistakes/return-back-or-return/" text="Return Back or Return?" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/repeat-again-or-repeat/" text="Repeat Again or Repeat?" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/advance-planning/" text="Advance Planning" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/free-gift/" text="Free Gift" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/end-result/" text="End Result" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/final-outcome/" text="Final Outcome" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/past-history/" text="Past History" onClick={onClose} />
              <SidebarLink to="/grammar-mistakes/close-proximity/" text="Close Proximity" onClick={onClose} />
            </SidebarSection>
            
            <SidebarSection title="Vocabulary" defaultOpen={isVocabularyPage}>
               <SidebarLink to="/commonly-confused-words/" text="Commonly Confused Words" onClick={onClose} />
               <SidebarLink to="/vocabulary/collocations/" text="Collocations" onClick={onClose} />
               <SidebarLink to="/vocabulary/homophones-homonyms-homographs/" text="Homophones & Homonyms" onClick={onClose} />
               <SidebarLink to="/idioms/" text="Idioms & Expressions" onClick={onClose} />
               <SidebarLink to="/phrasal-verbs/" text="Phrasal Verbs" onClick={onClose} />
               <SidebarLink to="/prefixes-suffixes/" text="Prefixes & Suffixes" onClick={onClose} />
            </SidebarSection>

            <SidebarSection title="Writing Skills" defaultOpen={isWritingPage}>
              <SidebarLink to="/writing/how-to-write-an-essay/" text="How to Write an Essay" onClick={onClose} />
              <SidebarLink to="/essay-types/" text="Types of Essays" onClick={onClose} />
              <SidebarLink to="/writing/how-to-write-a-professional-email/" text="Writing a Professional Email" onClick={onClose} />
              <SidebarLink to="/writing/how-to-build-an-argument/" text="Building a Strong Argument" onClick={onClose} />
              <SidebarLink to="/writing/how-to-paraphrase/" text="Paraphrasing & Plagiarism" onClick={onClose} />
              <SidebarLink to="/writing/how-to-vary-sentence-structure/" text="Varying Sentence Structure" onClick={onClose} />
            </SidebarSection>

            <SidebarSection title="Downloads" defaultOpen={isDownloadsPage}>
              <h4 className="px-6 py-2 text-sm font-semibold text-slate-400 dark:text-slate-500">IELTS PDFs</h4>
              <SidebarLink to="/ielts/english-grammar-pdf/" text="English Grammar PDF" onClick={onClose} />
              <SidebarLink to="/ielts/academic-vocabulary-book/" text="IELTS Academic Vocabulary Book" onClick={onClose} />
              <SidebarLink to="/ielts/idioms-book/" text="100 English Idioms PDF" onClick={onClose} />
              <SidebarLink to="/ielts/health-vocabulary-book/" text="Health Vocabulary Book" onClick={onClose} />
              <SidebarLink to="/ielts/writing-task-2-band-9-essays-book/" text="Band 9 Essays PDF" onClick={onClose} />
              <SidebarLink to="/ielts/50-complex-sentences-for-ielts-pdf/" text="50 Complex Sentences PDF" onClick={onClose} />
              <SidebarLink to="/ielts/grammar-master-book/" text="IELTS Grammar Master Book" onClick={onClose} />
              <SidebarLink to="/ielts/cue-cards-book/" text="IELTS Cue Cards (2026 Edition)" onClick={onClose} />
              <SidebarLink to="/ielts-writing-task-1-master-guide/" text="Task 1 Master Guide (2026)" onClick={onClose} />
              <h4 className="px-6 py-2 pt-4 text-sm font-semibold text-slate-400 dark:text-slate-500">TOEFL &amp; PTE PDFs</h4>
              <SidebarLink to="/toefl/toefl-vocabulary-pdf/" text="TOEFL Vocabulary PDF" onClick={onClose} />
              <SidebarLink to="/toefl/toefl-writing-pdf/" text="TOEFL Writing PDF" onClick={onClose} />
              <SidebarLink to="/toefl/toefl-reading-practice-pdf/" text="TOEFL Reading Practice PDF" onClick={onClose} />
              <SidebarLink to="/toefl/1000-toefl-speaking-questions/" text="1000 TOEFL Speaking Questions" onClick={onClose} />
              <SidebarLink to="/downloads/1000-pte-academic-practice-questions/" text="1000 PTE Academic Practice Questions" onClick={onClose} />
              <h4 className="px-6 py-2 pt-4 text-sm font-semibold text-slate-400 dark:text-slate-500">General English PDFs</h4>
              <SidebarLink to="/downloads/3000-most-common-english-words-pdf/" text="3000 Most Common English Words" onClick={onClose} />
            </SidebarSection>

            <SidebarSection title="IELTS Preparation" defaultOpen={isIELTSPage}>
              <SidebarLink to="/ielts/ielts-writing-task-1-bar-chart-sample-answer/" text="Task 1 Bar Chart Sample Answers" onClick={onClose} />
              <SidebarLink to="/ielts/ielts-writing-task-1-vocabulary/" text="Task 1 Vocabulary Guide" onClick={onClose} />
              <SidebarLink to="/ielts/how-to-write-an-IELTS-letter-informal/" text="Informal Letter Guide" onClick={onClose} />
              <SidebarLink to="/ielts/ielts-writing-task-2-essay-types/" text="IELTS Writing Task 2 Hub" onClick={onClose} />
              <SidebarLink to="/ielts/opinion-essay-ielts-band-7-9/" text="Opinion Essays" onClick={onClose} />
              <SidebarLink to="/ielts/discussion-essay-ielts-band-7-9/" text="Discussion Essays" onClick={onClose} />
              <SidebarLink to="/ielts/advantages-disadvantages-essay-ielts/" text="Advantages/Disadvantages" onClick={onClose} />
              <SidebarLink to="/ielts/problem-solution-essay-ielts/" text="Problem/Solution Essays" onClick={onClose} />
              <SidebarLink to="/ielts/two-part-question-essay-ielts/" text="Two-Part Questions" onClick={onClose} />
              <SidebarLink to="/ielts/mixed-essay-types-ielts/" text="Mixed Essay Types" onClick={onClose} />
              <SidebarLink to="/ielts/band-8-ielts-sample-answers/" text="Band 8+ Sample Answers" onClick={onClose} />
              <SidebarLink to="/ielts/50-band-9-ielts-writing-task-2-sample-essays/" text="50 Band 9 Sample Essays" onClick={onClose} />
              <SidebarLink to="/ielts/1000-ielts-speaking-questions/" text="1000 Speaking Questions" onClick={onClose} />
              <h4 className="px-6 py-2 pt-4 text-sm font-semibold text-slate-400 dark:text-slate-500">IELTS Grammar</h4>
              <SidebarLink to="/ielts/task-achievement-in-ielts/" text="What Is Task Achievement?" onClick={onClose} />
              <SidebarLink to="/ielts/lexical-resource-in-ielts/" text="What Is Lexical Resource?" onClick={onClose} />
              <SidebarLink to="/ielts/conditionals-in-ielts/" text="Conditionals in IELTS" onClick={onClose} />
              <SidebarLink to="/ielts/passive-voice-ielts-writing/" text="Passive Voice for IELTS" onClick={onClose} />
              <SidebarLink to="/ielts/how-to-write-complex-sentences/" text="Complex Sentences for IELTS" onClick={onClose} />
              <SidebarLink to="/ielts/common-grammar-mistakes-ielts-writing/" text="Common Grammar Mistakes" onClick={onClose} />
              <h4 className="px-6 py-2 pt-4 text-sm font-semibold text-slate-400 dark:text-slate-500">IELTS Vocabulary</h4>
              <SidebarLink to="/ielts/vocabulary/band-6/" text="Band 6 Vocabulary" onClick={onClose} />
              <SidebarLink to="/ielts/vocabulary/band-7/" text="Band 7 Vocabulary" onClick={onClose} />
              <SidebarLink to="/ielts/vocabulary/band-8/" text="Band 8 Vocabulary" onClick={onClose} />
              <SidebarLink to="/ielts/vocabulary/band-9/" text="Band 9 Vocabulary" onClick={onClose} />
              <h4 className="px-6 py-2 pt-4 text-sm font-semibold text-slate-400 dark:text-slate-500">Free Resources</h4>
              <SidebarLink to="/ielts/english-grammar-pdf/" text="Complete English Grammar (PDF)" onClick={onClose} />
              <SidebarLink to="/ielts/academic-vocabulary-book/" text="Free IELTS Vocabulary Book (PDF)" onClick={onClose} />
              <SidebarLink to="/ielts/idioms-book/" text="100 Most Used English Idioms (PDF)" onClick={onClose} />
              <SidebarLink to="/ielts/health-vocabulary-book/" text="Health Vocabulary Book (PDF)" onClick={onClose} />
              <SidebarLink to="/ielts/writing-task-2-band-9-essays-book/" text="Band 9 Essays Book (PDF)" onClick={onClose} />
              <SidebarLink to="/ielts/grammar-master-book/" text="Grammar Master Book (PDF)" onClick={onClose} />
              <SidebarLink to="/ielts/cue-cards-book/" text="IELTS Cue Cards (PDF)" onClick={onClose} />
              <SidebarLink to="/ielts/50-complex-sentences-for-ielts-pdf/" text="50 Complex Sentences (PDF)" onClick={onClose} />
<h4 className="px-6 py-2 pt-4 text-sm font-semibold text-slate-400 dark:text-slate-500">IELTS Strategy & Success</h4>
              <SidebarLink to="/ielts/is-ielts-getting-harder-2026/" text="Is IELTS Getting Harder in 2026?" onClick={onClose} />
              <SidebarLink to="/ielts/why-stuck-at-6-5/" text="Why Stuck at 6.5? (Band 7 Guide)" onClick={onClose} />
              <SidebarLink to="/ielts/ielts-in-3-days/" text="IELTS in 3 Days (Last-Minute Strategy)" onClick={onClose} />
              <SidebarLink to="/ielts/reading-raw-score-to-band-conversion/" text="Reading Raw Score → Band" onClick={onClose} />
              <SidebarLink to="/ielts/is-7-5-ielts-score-good-enough/" text="Is 7.5 IELTS Good Enough?" onClick={onClose} />
              <h4 className="px-6 py-2 pt-4 text-sm font-semibold text-slate-400 dark:text-slate-500">IELTS Tests</h4>
              <div className="ml-4">
                <h5 className="px-6 py-2 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Reading</h5>
                <SidebarLink to="/ielts/tests/reading/academic/test-1/" text="Academic Reading — Test 1" onClick={onClose} />
                <SidebarLink to="/ielts/tests/reading/general/test-1/" text="General Reading — Test 1" onClick={onClose} />
                <h5 className="px-6 py-2 pt-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Listening</h5>
                <SidebarLink to="/ielts/tests/listening/mock-test-1/section-1/" text="Mock Test 1 - Section 1" onClick={onClose} />
              </div>
            </SidebarSection>

            <SidebarSection title="TOEFL Preparation" defaultOpen={isTOEFLPage}>
              <h4 className="px-6 py-2 text-sm font-semibold text-slate-400 dark:text-slate-500">TOEFL Tests</h4>
              <SidebarLink to="/toefl/tests/reading/test-1/" text="Reading Practice Test 1" onClick={onClose} />
              <SidebarLink to="/toefl/tests/reading/test-2/" text="Reading Practice Test 2" onClick={onClose} />
              <SidebarLink to="/toefl/tests/reading/test-3/" text="Reading Practice Test 3" onClick={onClose} />

              <h4 className="px-6 py-2 pt-4 text-sm font-semibold text-slate-400 dark:text-slate-500">TOEFL Reading</h4>
              <SidebarLink to="/toefl/toefl-reading/toefl-reading-section-explained/" text="TOEFL Reading Section Explained" onClick={onClose} />
              <SidebarLink to="/toefl/toefl-reading/toefl-reading-strategies/" text="TOEFL Reading Strategies" onClick={onClose} />
              <SidebarLink to="/toefl/toefl-reading/toefl-reading-question-types/" text="TOEFL Reading Question Types" onClick={onClose} />
              <SidebarLink to="/toefl/toefl-reading/toefl-reading-time-management/" text="TOEFL Reading Time Management" onClick={onClose} />
              <SidebarLink to="/toefl/toefl-reading/toefl-reading-practice-questions/" text="TOEFL Reading Practice Questions" onClick={onClose} />
              <SidebarLink to="/toefl/toefl-reading/toefl-daily-life-reading-task/" text="TOEFL Daily Life Reading Task" onClick={onClose} />
              
              <h4 className="px-6 py-2 text-sm font-semibold text-slate-400 dark:text-slate-500">TOEFL Writing</h4>
              <SidebarLink to="/toefl/toefl-writing/toefl-writing-task-1-explained/" text="TOEFL Writing Task 1 Explained" onClick={onClose} />
              <SidebarLink to="/toefl/toefl-writing/toefl-writing-task-2-explained/" text="TOEFL Writing Task 2 Explained" onClick={onClose} />
              <SidebarLink to="/toefl/toefl-writing/toefl-writing-templates/" text="TOEFL Writing Templates" onClick={onClose} />
              <SidebarLink to="/toefl/toefl-writing/toefl-writing-topics/" text="TOEFL Writing Topics" onClick={onClose} />
              <SidebarLink to="/toefl/toefl-writing/toefl-writing-practice-questions/" text="TOEFL Writing Practice Questions" onClick={onClose} />
              
              <h4 className="px-6 py-2 text-sm font-semibold text-slate-400 dark:text-slate-500">Free Resources</h4>
              <SidebarLink to="/toefl/toefl-reading-practice-pdf/" text="TOEFL Reading Practice PDF" onClick={onClose} />
              <SidebarLink to="/toefl/toefl-vocabulary-pdf/" text="TOEFL Vocabulary PDF (500 Words)" onClick={onClose} />
              <SidebarLink to="/toefl/toefl-writing-pdf/" text="TOEFL Writing PDF (Task 1 & 2)" onClick={onClose} />

              <h4 className="px-6 py-2 pt-4 text-sm font-semibold text-slate-400 dark:text-slate-500">Resources &amp; Scores</h4>
              <SidebarLink to="/toefl/1000-toefl-speaking-questions/" text="1000 TOEFL Speaking Questions (PDF)" onClick={onClose} />

              <h4 className="px-6 py-2 pt-4 text-sm font-semibold text-slate-400 dark:text-slate-500">TOEFL Strategy &amp; Success</h4>
              <SidebarLink to="/toefl/strategy-success/old-toefl-vs-new-toefl/" text="Old TOEFL vs New TOEFL 2026" onClick={onClose} />
              <SidebarLink to="/toefl/strategy-success/toefl-complete-the-words/" text="TOEFL Complete the Words (2026)" onClick={onClose} />
              <SidebarLink to="/toefl/strategy-success/toefl-2026-scoring/" text="TOEFL 2026 Scoring System" onClick={onClose} />
            </SidebarSection>

            <SidebarSection title="Reading Skills">
              <SidebarLink to="/reading/how-to-read-efficiently/" text="How to Read Efficiently" onClick={onClose} />
              <SidebarLink to="/reading/reading-comprehension-practice/" text="Comprehension Practice" onClick={onClose} />
              <SidebarLink to="/reading/how-to-read-critically/" text="How to Read Critically" onClick={onClose} />
            </SidebarSection>

             <SidebarSection title="Pronunciation">
              <SidebarLink to="/pronunciation-of-ed/" text="Pronunciation of -ed" onClick={onClose} />
              <SidebarLink to="/pronunciation/" text="Pronunciation Practice" onClick={onClose} />
            </SidebarSection>
            
            <SidebarSection title="Tools & Reference">
               <h4 className="px-6 py-2 text-sm font-semibold text-slate-400 dark:text-slate-500">AI Writing Tools</h4>
               <SidebarLink to="/grammar-checker/" text="Grammar Checker" onClick={onClose} />
               <SidebarLink to="/typogrammar-write/" text="TypoGrammar Write (Extension)" onClick={onClose} />
               <SidebarLink to="/writing-assistant/" text="Writing Assistant" onClick={onClose} />
               <SidebarLink to="/paraphrasing-tool/" text="Paraphrasing Tool" onClick={onClose} />
               <SidebarLink to="/free-paraphrasing-tool-without-login/" text="Free Paraphrasing (No Login)" onClick={onClose} />
               <SidebarLink to="/essay-topic-generator/" text="Essay Topic Generator" onClick={onClose} />
               <SidebarLink to="/ielts-band-score-calculator/" text="IELTS Band Calculator" onClick={onClose} />
               <SidebarLink to="/ai-writing-tools/" text="All AI Writing Tools" onClick={onClose} />
               <h4 className="px-6 py-2 pt-4 text-sm font-semibold text-slate-400 dark:text-slate-500">Reference</h4>
               <SidebarLink to="/grammar-glossary/" text="Grammar Glossary A-Z" onClick={onClose} />
               <SidebarLink to="/irregular-verbs/" text="Irregular Verbs List" onClick={onClose} />
               <SidebarLink to="/tense-visualizer/" text="Visual Tense Guide" onClick={onClose} />
               <SidebarLink to="/preposition-combinations/" text="Preposition Combinations" onClick={onClose} />
               <SidebarLink to="/grammar-fundamentals/basic-terminology/" text="Basic Terminology" onClick={onClose} />
               <h4 className="px-6 py-2 pt-4 text-sm font-semibold text-slate-400 dark:text-slate-500">Practice</h4>
               <SidebarLink to="/practice-tools/" text="Grammar Flashcards" onClick={onClose} />
               <SidebarLink to="/interactive-exercises/" text="Interactive Exercises" onClick={onClose} />
               <SidebarLink to="/quizzes/verb-tenses-quiz/" text="Verb Tenses Quiz (50 Q)" onClick={onClose} />
               <SidebarLink to="/worksheets/" text="Worksheets & PDFs" onClick={onClose} />
               <SidebarLink to="/ai-prompts/" text="AI Learning Prompts" onClick={onClose} />
               <SidebarLink to="/teacher/" text="Prompts for Teachers" onClick={onClose} />
            </SidebarSection>

            <div className="py-4 mt-2 border-t border-slate-200 dark:border-slate-700">
                <SidebarLink to="/about/" text="About" onClick={onClose} />
                <SidebarLink to="/about/editorial-team/" text="Editorial Team" onClick={onClose} />
                <SidebarLink to="/faq/" text="FAQ" onClick={onClose} />
                <SidebarLink to="/contact/" text="Contact" onClick={onClose} />
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
      {/* Mobile overlay, hidden on desktop */}
      <div
        className={`fixed top-[69px] left-0 right-0 bottom-0 bg-black/40 z-20 lg:hidden transition-opacity ${
          isMobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Drawer, mobile/tablet only */}
      <aside
        className={`fixed top-[69px] h-[calc(100vh-69px)] w-80 max-w-[85vw] flex-shrink-0 bg-white border-r border-slate-200 z-30 lg:hidden transition-transform duration-300 ease-in-out ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        } dark:bg-slate-900 dark:border-slate-700`}
      >
        <SidebarContent onClose={onClose} />
      </aside>
    </>
  );
};

export default Sidebar;
