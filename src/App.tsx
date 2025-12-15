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
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="getting-started" element={<GettingStartedPage />} />
            <Route path="grammar-guide" element={<GrammarGuidePage />} />
            <Route path="grammar-glossary" element={<GlossaryPage />} />
            <Route path="writing-assistant" element={<WritingAssistantPage />} />
            <Route path="progress" element={<ProgressPage />} />
            <Route path="topics/:topicId" element={<TopicPage />} />
            <Route path="tense-visualizer" element={<TenseVisualizerPage />} />
            <Route path="preposition-combinations" element={<PrepositionCombinationsPage />} />
            <Route path="grammar-fundamentals/basic-terminology" element={<BasicGrammarTerminologyPage />} />
            <Route path="idioms" element={<IdiomsPage />} />
            <Route path="irregular-verbs" element={<IrregularVerbsPage />} />
            <Route path="phrasal-verbs" element={<PhrasalVerbsPage />} />
            <Route path="prefixes-suffixes" element={<PrefixesSuffixesPage />} />
            <Route path="commonly-confused-words" element={<CommonlyConfusedWordsPage />} />
            <Route path="vocabulary/collocations" element={<CollocationsPage />} />
            <Route path="vocabulary/homophones-homonyms-homographs" element={<HomophonesHomonymsHomographsPage />} />
            <Route path="writing/how-to-write-an-essay" element={<WritingPage />} />
            <Route path="essay-types" element={<EssayTypesPage />} />
            <Route path="writing/how-to-write-a-professional-email" element={<ProfessionalEmailPage />} />
            <Route path="writing/how-to-build-an-argument" element={<BuildingArgumentPage />} />
            <Route path="writing/how-to-paraphrase" element={<ParaphrasingPage />} />
            <Route path="writing/how-to-vary-sentence-structure" element={<VaryingSentenceStructurePage />} />
            <Route path="reading/how-to-read-efficiently" element={<ReadingPage />} />
            <Route path="reading/reading-comprehension-practice" element={<ReadingComprehensionPage />} />
            <Route path="reading/how-to-read-critically" element={<CriticalReadingPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="terms-of-service" element={<TermsOfServicePage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="blog/:slug" element={<BlogPostPage />} />
            <Route path="faq" element={<FaqPage />} />
            <Route path="teacher" element={<TeacherPage />} />
            <Route path="pronunciation-of-ed" element={<PastTensePronunciationPage />} />
            <Route path="pronunciation" element={<PronunciationPage />} />
            <Route path="worksheets" element={<WorksheetsPage />} />
            <Route path="practice-tools" element={<PracticeToolsPage />} />
            <Route path="interactive-exercises" element={<InteractiveExercisesPage />} />
          </Route>
        </Routes>
      </Suspense>
    </ProgressProvider>
  );
};

export default App;