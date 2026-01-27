import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import { ProgressProvider } from './contexts/ProgressContext';

// Lazy load all secondary pages for better performance
const TopicPage = lazy(() => import('./pages/TopicPage'));
const IrregularVerbsPage = lazy(() => import('./pages/IrregularVerbsPage'));
const PhrasalVerbsPage = lazy(() => import('./pages/PhrasalVerbsPage'));
const WritingPage = lazy(() => import('./pages/WritingPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsOfServicePage = lazy(() => import('./pages/TermsOfServicePage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const FaqPage = lazy(() => import('./pages/FaqPage'));
const CommonlyConfusedWordsPage = lazy(() => import('./pages/CommonlyConfusedWordsPage'));
const ReadingPage = lazy(() => import('./pages/ReadingPage'));
const TeacherPage = lazy(() => import('./pages/TeacherPage'));
const ProfessionalEmailPage = lazy(() => import('./pages/ProfessionalEmailPage'));
const BuildingArgumentPage = lazy(() => import('./pages/BuildingArgumentPage'));
const PronunciationPage = lazy(() => import('./pages/PronunciationPage'));
const ProgressPage = lazy(() => import('./pages/ProgressPage'));
const IdiomsPage = lazy(() => import('./pages/IdiomsPage'));
const PastTensePronunciationPage = lazy(() => import('./pages/PastTensePronunciationPage'));
const ParaphrasingPage = lazy(() => import('./pages/ParaphrasingPage'));
const ReadingComprehensionPage = lazy(() => import('./pages/ReadingComprehensionPage'));
const PrefixesSuffixesPage = lazy(() => import('./pages/PrefixesSuffixesPage'));
const BasicGrammarTerminologyPage = lazy(() => import('./pages/BasicGrammarTerminologyPage'));
const PrepositionCombinationsPage = lazy(() => import('./pages/PrepositionCombinationsPage'));
const VaryingSentenceStructurePage = lazy(() => import('./pages/VaryingSentenceStructurePage'));
const CriticalReadingPage = lazy(() => import('./pages/CriticalReadingPage'));
const TenseVisualizerPage = lazy(() => import('./pages/TenseVisualizerPage'));
const EssayTypesPage = lazy(() => import('./pages/EssayTypesPage'));
const CollocationsPage = lazy(() => import('./pages/CollocationsPage'));
const HomophonesHomonymsHomographsPage = lazy(() => import('./pages/HomophonesHomonymsHomographsPage'));
const GrammarGuidePage = lazy(() => import('./pages/GrammarGuidePage'));
const WritingAssistantPage = lazy(() => import('./pages/WritingAssistantPage'));
const GettingStartedPage = lazy(() => import('./pages/GettingStartedPage'));
const GlossaryPage = lazy(() => import('./pages/GlossaryPage'));
const WorksheetsPage = lazy(() => import('./pages/WorksheetsPage'));
const PracticeToolsPage = lazy(() => import('./pages/PracticeToolsPage'));
const InteractiveExercisesPage = lazy(() => import('./pages/InteractiveExercisesPage'));
const AIPromptsPage = lazy(() => import('./pages/AIPromptsPage'));
const IELTSWritingTask2Page = lazy(() => import('./pages/IELTSWritingTask2Page'));
const OpinionEssayIELTSPage = lazy(() => import('./pages/OpinionEssayIELTSPage'));
const DiscussionEssayIELTSPage = lazy(() => import('./pages/DiscussionEssayIELTSPage'));
const AdvantagesDisadvantagesEssayIELTSPage = lazy(() => import('./pages/AdvantagesDisadvantagesEssayIELTSPage'));
const ProblemSolutionEssayIELTSPage = lazy(() => import('./pages/ProblemSolutionEssayIELTSPage'));
const TwoPartQuestionEssayIELTSPage = lazy(() => import('./pages/TwoPartQuestionEssayIELTSPage'));
const MixedEssayTypesIELTSPage = lazy(() => import('./pages/MixedEssayTypesIELTSPage'));
const IELTSVocabularyBand6Page = lazy(() => import('./pages/IELTSVocabularyBand6Page'));
const IELTSVocabularyBand7Page = lazy(() => import('./pages/IELTSVocabularyBand7Page'));
const IELTSVocabularyBand8Page = lazy(() => import('./pages/IELTSVocabularyBand8Page'));
const IELTSVocabularyBand9Page = lazy(() => import('./pages/IELTSVocabularyBand9Page'));
const IeltsAcademicVocabularyBookPage = lazy(() => import('./pages/IeltsAcademicVocabularyBookPage'));
const WhatIsTypogrammarPage = lazy(() => import('./pages/WhatIsTypogrammarPage'));
const EditorialTeamPage = lazy(() => import('./pages/EditorialTeamPage'));
const VerbTensesQuizPage = lazy(() => import('./pages/quizzes/VerbTensesQuizPage'));
const IELTSTestsPage = lazy(() => import('./pages/IELTSTestsPage'));
const IELTSListeningMockTest1Section1Page = lazy(() => import('./pages/IELTSListeningMockTest1Section1Page'));

// Verb Tenses Hub and Individual Tense Pages
const VerbTensesHubPage = lazy(() => import('./pages/VerbTensesHubPage'));
const PresentSimpleTensePage = lazy(() => import('./pages/PresentSimpleTensePage'));
const PresentProgressiveTensePage = lazy(() => import('./pages/PresentProgressiveTensePage'));
const PastSimpleTensePage = lazy(() => import('./pages/PastSimpleTensePage'));
const PastProgressiveTensePage = lazy(() => import('./pages/PastProgressiveTensePage'));
const PresentPerfectTensePage = lazy(() => import('./pages/PresentPerfectTensePage'));
const PresentPerfectProgressiveTensePage = lazy(() => import('./pages/PresentPerfectProgressiveTensePage'));
const PastPerfectTensePage = lazy(() => import('./pages/PastPerfectTensePage'));
const PastPerfectProgressiveTensePage = lazy(() => import('./pages/PastPerfectProgressiveTensePage'));
const FutureSimpleTensePage = lazy(() => import('./pages/FutureSimpleTensePage'));
const FutureProgressiveTensePage = lazy(() => import('./pages/FutureProgressiveTensePage'));
const FuturePerfectTensePage = lazy(() => import('./pages/FuturePerfectTensePage'));
const FuturePerfectProgressiveTensePage = lazy(() => import('./pages/FuturePerfectProgressiveTensePage'));

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 dark:border-blue-400"></div>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Loading...</p>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <ProgressProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="what-is-typogrammar" element={<Suspense fallback={<PageLoader />}><WhatIsTypogrammarPage /></Suspense>} />
            <Route path="getting-started" element={<Suspense fallback={<PageLoader />}><GettingStartedPage /></Suspense>} />
            <Route path="grammar-guide" element={<Suspense fallback={<PageLoader />}><GrammarGuidePage /></Suspense>} />
            <Route path="grammar-glossary" element={<Suspense fallback={<PageLoader />}><GlossaryPage /></Suspense>} />
            <Route path="writing-assistant" element={<Suspense fallback={<PageLoader />}><WritingAssistantPage /></Suspense>} />
            <Route path="progress" element={<Suspense fallback={<PageLoader />}><ProgressPage /></Suspense>} />
            <Route path="topics/:topicId" element={<Suspense fallback={<PageLoader />}><TopicPage /></Suspense>} />
            
            {/* Verb Tenses - Canonical SEO-optimized pages */}
            <Route path="grammar/verb-tenses" element={<Suspense fallback={<PageLoader />}><VerbTensesHubPage /></Suspense>} />
            <Route path="grammar/verb-tenses/present-simple" element={<Suspense fallback={<PageLoader />}><PresentSimpleTensePage /></Suspense>} />
            <Route path="grammar/verb-tenses/present-progressive" element={<Suspense fallback={<PageLoader />}><PresentProgressiveTensePage /></Suspense>} />
            <Route path="grammar/verb-tenses/past-simple" element={<Suspense fallback={<PageLoader />}><PastSimpleTensePage /></Suspense>} />
            <Route path="grammar/verb-tenses/past-progressive" element={<Suspense fallback={<PageLoader />}><PastProgressiveTensePage /></Suspense>} />
            <Route path="grammar/verb-tenses/present-perfect" element={<Suspense fallback={<PageLoader />}><PresentPerfectTensePage /></Suspense>} />
            <Route path="grammar/verb-tenses/present-perfect-progressive" element={<Suspense fallback={<PageLoader />}><PresentPerfectProgressiveTensePage /></Suspense>} />
            <Route path="grammar/verb-tenses/past-perfect" element={<Suspense fallback={<PageLoader />}><PastPerfectTensePage /></Suspense>} />
            <Route path="grammar/verb-tenses/past-perfect-progressive" element={<Suspense fallback={<PageLoader />}><PastPerfectProgressiveTensePage /></Suspense>} />
            <Route path="grammar/verb-tenses/future-simple" element={<Suspense fallback={<PageLoader />}><FutureSimpleTensePage /></Suspense>} />
            <Route path="grammar/verb-tenses/future-progressive" element={<Suspense fallback={<PageLoader />}><FutureProgressiveTensePage /></Suspense>} />
            <Route path="grammar/verb-tenses/future-perfect" element={<Suspense fallback={<PageLoader />}><FuturePerfectTensePage /></Suspense>} />
            <Route path="grammar/verb-tenses/future-perfect-progressive" element={<Suspense fallback={<PageLoader />}><FuturePerfectProgressiveTensePage /></Suspense>} />
            
            <Route path="tense-visualizer" element={<Suspense fallback={<PageLoader />}><TenseVisualizerPage /></Suspense>} />
            <Route path="preposition-combinations" element={<Suspense fallback={<PageLoader />}><PrepositionCombinationsPage /></Suspense>} />
            <Route path="grammar-fundamentals/basic-terminology" element={<Suspense fallback={<PageLoader />}><BasicGrammarTerminologyPage /></Suspense>} />
            <Route path="idioms" element={<Suspense fallback={<PageLoader />}><IdiomsPage /></Suspense>} />
            <Route path="irregular-verbs" element={<Suspense fallback={<PageLoader />}><IrregularVerbsPage /></Suspense>} />
            <Route path="phrasal-verbs" element={<Suspense fallback={<PageLoader />}><PhrasalVerbsPage /></Suspense>} />
            <Route path="prefixes-suffixes" element={<Suspense fallback={<PageLoader />}><PrefixesSuffixesPage /></Suspense>} />
            <Route path="commonly-confused-words" element={<Suspense fallback={<PageLoader />}><CommonlyConfusedWordsPage /></Suspense>} />
            <Route path="vocabulary/collocations" element={<Suspense fallback={<PageLoader />}><CollocationsPage /></Suspense>} />
            <Route path="vocabulary/homophones-homonyms-homographs" element={<Suspense fallback={<PageLoader />}><HomophonesHomonymsHomographsPage /></Suspense>} />
            <Route path="writing/how-to-write-an-essay" element={<Suspense fallback={<PageLoader />}><WritingPage /></Suspense>} />
            <Route path="essay-types" element={<Suspense fallback={<PageLoader />}><EssayTypesPage /></Suspense>} />
            <Route path="writing/how-to-write-a-professional-email" element={<Suspense fallback={<PageLoader />}><ProfessionalEmailPage /></Suspense>} />
            <Route path="writing/how-to-build-an-argument" element={<Suspense fallback={<PageLoader />}><BuildingArgumentPage /></Suspense>} />
            <Route path="writing/how-to-paraphrase" element={<Suspense fallback={<PageLoader />}><ParaphrasingPage /></Suspense>} />
            <Route path="writing/how-to-vary-sentence-structure" element={<Suspense fallback={<PageLoader />}><VaryingSentenceStructurePage /></Suspense>} />
            <Route path="reading/how-to-read-efficiently" element={<Suspense fallback={<PageLoader />}><ReadingPage /></Suspense>} />
            <Route path="reading/reading-comprehension-practice" element={<Suspense fallback={<PageLoader />}><ReadingComprehensionPage /></Suspense>} />
            <Route path="reading/how-to-read-critically" element={<Suspense fallback={<PageLoader />}><CriticalReadingPage /></Suspense>} />
            <Route path="about" element={<Suspense fallback={<PageLoader />}><AboutPage /></Suspense>} />
            <Route path="about/editorial-team" element={<Suspense fallback={<PageLoader />}><EditorialTeamPage /></Suspense>} />
            <Route path="contact" element={<Suspense fallback={<PageLoader />}><ContactPage /></Suspense>} />
            <Route path="privacy-policy" element={<Suspense fallback={<PageLoader />}><PrivacyPolicyPage /></Suspense>} />
            <Route path="terms-of-service" element={<Suspense fallback={<PageLoader />}><TermsOfServicePage /></Suspense>} />
            <Route path="blog" element={<Suspense fallback={<PageLoader />}><BlogPage /></Suspense>} />
            <Route path="blog/:slug" element={<Suspense fallback={<PageLoader />}><BlogPostPage /></Suspense>} />
            <Route path="faq" element={<Suspense fallback={<PageLoader />}><FaqPage /></Suspense>} />
            <Route path="teacher" element={<Suspense fallback={<PageLoader />}><TeacherPage /></Suspense>} />
            <Route path="ai-prompts" element={<Suspense fallback={<PageLoader />}><AIPromptsPage /></Suspense>} />
            <Route path="pronunciation-of-ed" element={<Suspense fallback={<PageLoader />}><PastTensePronunciationPage /></Suspense>} />
            <Route path="pronunciation" element={<Suspense fallback={<PageLoader />}><PronunciationPage /></Suspense>} />
            <Route path="worksheets" element={<Suspense fallback={<PageLoader />}><WorksheetsPage /></Suspense>} />
            <Route path="practice-tools" element={<Suspense fallback={<PageLoader />}><PracticeToolsPage /></Suspense>} />
            <Route path="interactive-exercises" element={<Suspense fallback={<PageLoader />}><InteractiveExercisesPage /></Suspense>} />
            
            {/* Quizzes Routes */}
            <Route path="quizzes/verb-tenses-quiz" element={<Suspense fallback={<PageLoader />}><VerbTensesQuizPage /></Suspense>} />
            
            {/* IELTS Writing Task 2 Routes */}
            <Route path="ielts/ielts-writing-task-2-essay-types" element={<Suspense fallback={<PageLoader />}><IELTSWritingTask2Page /></Suspense>} />
            <Route path="ielts/opinion-essay-ielts-band-7-9" element={<Suspense fallback={<PageLoader />}><OpinionEssayIELTSPage /></Suspense>} />
            <Route path="ielts/discussion-essay-ielts-band-7-9" element={<Suspense fallback={<PageLoader />}><DiscussionEssayIELTSPage /></Suspense>} />
            <Route path="ielts/advantages-disadvantages-essay-ielts" element={<Suspense fallback={<PageLoader />}><AdvantagesDisadvantagesEssayIELTSPage /></Suspense>} />
            <Route path="ielts/problem-solution-essay-ielts" element={<Suspense fallback={<PageLoader />}><ProblemSolutionEssayIELTSPage /></Suspense>} />
            <Route path="ielts/two-part-question-essay-ielts" element={<Suspense fallback={<PageLoader />}><TwoPartQuestionEssayIELTSPage /></Suspense>} />
            <Route path="ielts/mixed-essay-types-ielts" element={<Suspense fallback={<PageLoader />}><MixedEssayTypesIELTSPage /></Suspense>} />
            
            {/* IELTS Vocabulary Routes */}
            <Route path="ielts/vocabulary/band-6" element={<Suspense fallback={<PageLoader />}><IELTSVocabularyBand6Page /></Suspense>} />
            <Route path="ielts/vocabulary/band-7" element={<Suspense fallback={<PageLoader />}><IELTSVocabularyBand7Page /></Suspense>} />
            <Route path="ielts/vocabulary/band-8" element={<Suspense fallback={<PageLoader />}><IELTSVocabularyBand8Page /></Suspense>} />
            <Route path="ielts/vocabulary/band-9" element={<Suspense fallback={<PageLoader />}><IELTSVocabularyBand9Page /></Suspense>} />
            
            {/* IELTS Free Book Route */}
            <Route path="ielts/academic-vocabulary-book" element={<Suspense fallback={<PageLoader />}><IeltsAcademicVocabularyBookPage /></Suspense>} />
            
            {/* IELTS Tests Routes */}
            <Route path="ielts/tests" element={<Suspense fallback={<PageLoader />}><IELTSTestsPage /></Suspense>} />
            <Route path="ielts/tests/listening/mock-test-1/section-1" element={<Suspense fallback={<PageLoader />}><IELTSListeningMockTest1Section1Page /></Suspense>} />
          </Route>
        </Routes>
    </ProgressProvider>
  );
};

export default App;