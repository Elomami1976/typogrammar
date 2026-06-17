import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
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
const DailyEnglishReadsPage = lazy(() => import('./pages/DailyEnglishReadsPage'));
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
const Band8IELTSSampleAnswersPage = lazy(() => import('./pages/Band8IELTSSampleAnswersPage'));
const Band9IELTSEssaysPage = lazy(() => import('./pages/Band9IELTSEssaysPage'));
const IELTSSpeakingQuestionsPage = lazy(() => import('./pages/IELTSSpeakingQuestionsPage'));
const ConditionalsInIELTSPage = lazy(() => import('./pages/ConditionalsInIELTSPage'));
const PassiveVoiceIELTSPage = lazy(() => import('./pages/PassiveVoiceIELTSPage'));
const ComplexSentencesIELTSPage = lazy(() => import('./pages/ComplexSentencesIELTSPage'));
const CommonGrammarMistakesIELTSPage = lazy(() => import('./pages/CommonGrammarMistakesIELTSPage'));
const TaskAchievementIELTSPage = lazy(() => import('./pages/TaskAchievementIELTSPage'));
const LexicalResourceIELTSPage = lazy(() => import('./pages/LexicalResourceIELTSPage'));
const IELTSVocabularyBand6Page = lazy(() => import('./pages/IELTSVocabularyBand6Page'));
const IELTSVocabularyBand7Page = lazy(() => import('./pages/IELTSVocabularyBand7Page'));
const IELTSVocabularyBand8Page = lazy(() => import('./pages/IELTSVocabularyBand8Page'));
const IELTSVocabularyBand9Page = lazy(() => import('./pages/IELTSVocabularyBand9Page'));
const IeltsAcademicVocabularyBookPage = lazy(() => import('./pages/IeltsAcademicVocabularyBookPage'));
const IeltsIdiomsBookPage = lazy(() => import('./pages/IeltsIdiomsBookPage'));
const HealthVocabularyBookPage = lazy(() => import('./pages/HealthVocabularyBookPage'));
const IeltsBand9EssaysBookPage = lazy(() => import('./pages/IeltsBand9EssaysBookPage'));
const IeltsGrammarMasterBookPage = lazy(() => import('./pages/IeltsGrammarMasterBookPage'));
const IeltsCueCardsBookPage = lazy(() => import('./pages/IeltsCueCardsBookPage'));
const ComplexSentencesPDFPage = lazy(() => import('./pages/ComplexSentencesPDFPage'));
const EnglishGrammarPDFPage = lazy(() => import('./pages/EnglishGrammarPDFPage'));
const IsIELTSGettingHarderPage = lazy(() => import('./pages/IsIELTSGettingHarderPage'));
const WhyStuckAt65Page = lazy(() => import('./pages/WhyStuckAt65Page'));
const IELTSIn3DaysPage = lazy(() => import('./pages/IELTSIn3DaysPage'));
const IELTSScoreRequirementsPage = lazy(() => import('./pages/IELTSScoreRequirementsPage'));
const CountriesWithoutIELTSPage = lazy(() => import('./pages/CountriesWithoutIELTSPage'));
const WhatIsTypogrammarPage = lazy(() => import('./pages/WhatIsTypogrammarPage'));
const EditorialTeamPage = lazy(() => import('./pages/EditorialTeamPage'));

// TypoGrammar Educators Network
const EducatorsHomePage = lazy(() => import('./pages/educators/EducatorsHomePage'));
const AuthorsDirectoryPage = lazy(() => import('./pages/educators/AuthorsDirectoryPage'));
const AuthorProfilePage = lazy(() => import('./pages/educators/AuthorProfilePage'));
const ContributorArticlesPage = lazy(() => import('./pages/educators/ContributorArticlesPage'));
const ContributorArticlePage = lazy(() => import('./pages/educators/ContributorArticlePage'));
const ContributorGuidelinesPage = lazy(() => import('./pages/educators/ContributorGuidelinesPage'));
const VerbTensesQuizPage = lazy(() => import('./pages/quizzes/VerbTensesQuizPage'));
const EnglishLevelTestPage = lazy(() => import('./pages/EnglishLevelTestPage'));
const IELTSWritingTask1BarChartPage = lazy(() => import('./pages/IELTSWritingTask1BarChartPage'));
const IELTSTestsPage = lazy(() => import('./pages/IELTSTestsPage'));
const IELTSListeningMockTest1Section1Page = lazy(() => import('./pages/IELTSListeningMockTest1Section1Page'));
const IELTSAcademicReadingTest01Page = lazy(() => import('./pages/ielts-tests/IELTSAcademicReadingTest01Page'));
const IELTSGeneralReadingTest01Page = lazy(() => import('./pages/ielts-tests/IELTSGeneralReadingTest01Page'));
const GrammarCheckerPage = lazy(() => import('./pages/GrammarCheckerPage'));
const ParaphrasingToolPage = lazy(() => import('./pages/ParaphrasingToolPage'));
const FreeParaphrasingToolWithoutLoginPage = lazy(() => import('./pages/FreeParaphrasingToolWithoutLoginPage'));
const IELTSBandScoreCalculatorPage = lazy(() => import('./pages/IELTSBandScoreCalculatorPage'));
const IELTSReadingScoreConversionPage = lazy(() => import('./pages/IELTSReadingScoreConversionPage'));
const Is75IELTSScoreGoodEnoughPage = lazy(() => import('./pages/Is75IELTSScoreGoodEnoughPage'));
const EssayTopicGeneratorPage = lazy(() => import('./pages/EssayTopicGeneratorPage'));
const AIWritingToolsPage = lazy(() => import('./pages/AIWritingToolsPage'));
const TypoGrammarWriteExtensionPage = lazy(() => import('./pages/TypoGrammarWriteExtensionPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// TOEFL Preparation Pages
const TOEFLReadingSectionExplainedPage = lazy(() => import('./pages/TOEFLReadingSectionExplainedPage'));
const TOEFLReadingStrategiesPage = lazy(() => import('./pages/TOEFLReadingStrategiesPage'));
const TOEFLReadingQuestionTypesPage = lazy(() => import('./pages/TOEFLReadingQuestionTypesPage'));
const TOEFLReadingTimeManagementPage = lazy(() => import('./pages/TOEFLReadingTimeManagementPage'));
const TOEFLReadingPracticeQuestionsPage = lazy(() => import('./pages/TOEFLReadingPracticeQuestionsPage'));
const TOEFLDailyLifeReadingTaskPage = lazy(() => import('./pages/TOEFLDailyLifeReadingTaskPage'));
// TOEFL Free Resources
const TOEFLReadingPracticePDFPage = lazy(() => import('./pages/TOEFLReadingPracticePDFPage'));
const TOEFLVocabularyPDFPage = lazy(() => import('./pages/TOEFLVocabularyPDFPage'));
const TOEFLWritingPDFPage = lazy(() => import('./pages/TOEFLWritingPDFPage'));
const TOEFL1000SpeakingQuestionsPage = lazy(() => import('./pages/TOEFL1000SpeakingQuestionsPage'));
// PTE Academic Free Resources
const PTE1000AcademicPracticeQuestionsPage = lazy(() => import('./pages/PTE1000AcademicPracticeQuestionsPage'));
// TOEFL Strategy & Success
const OldTOEFLvsNewTOEFL2026Page = lazy(() => import('./pages/OldTOEFLvsNewTOEFL2026Page'));
const TOEFLCompleteTheWordsPage = lazy(() => import('./pages/TOEFLCompleteTheWordsPage'));
const TOEFL2026ScoringPage = lazy(() => import('./pages/TOEFL2026ScoringPage'));
const TOEFLiBTvsLTPPage = lazy(() => import('./pages/TOEFLiBTvsLTPPage'));
const TOEFLSpeakingAverageVsHighScoringPage = lazy(() => import('./pages/TOEFLSpeakingAverageVsHighScoringPage'));
// TOEFL Writing
const TOEFLWritingTask1ExplainedPage = lazy(() => import('./pages/TOEFLWritingTask1ExplainedPage'));
const TOEFLWritingTask2ExplainedPage = lazy(() => import('./pages/TOEFLWritingTask2ExplainedPage'));
const TOEFLWritingTemplatesPage = lazy(() => import('./pages/TOEFLWritingTemplatesPage'));
const TOEFLWritingTopicsPage = lazy(() => import('./pages/TOEFLWritingTopicsPage'));
const TOEFLWritingPracticeQuestionsPage = lazy(() => import('./pages/TOEFLWritingPracticeQuestionsPage'));

// TOEFL Reading Practice Tests (2026 format)
const TOEFLReadingTest01Page = lazy(() => import('./pages/toefl-tests/TOEFLReadingTest01Page'));
const TOEFLReadingTest02Page = lazy(() => import('./pages/toefl-tests/TOEFLReadingTest02Page'));
const TOEFLReadingTest03Page = lazy(() => import('./pages/toefl-tests/TOEFLReadingTest03Page'));

// Grammar Mistakes Pillar Pages
const GrammarMistakesPage = lazy(() => import('./pages/GrammarMistakesPage'));
// Subject-Verb Agreement
const PeopleIsOrPeopleArePage = lazy(() => import('./pages/grammar-mistakes/PeopleIsOrPeopleArePage'));
const HeGoOrHeGoesPage = lazy(() => import('./pages/grammar-mistakes/HeGoOrHeGoesPage'));
const EveryoneIsOrEveryoneArePage = lazy(() => import('./pages/grammar-mistakes/EveryoneIsOrEveryoneArePage'));
const EachAreOrEachIsPage = lazy(() => import('./pages/grammar-mistakes/EachAreOrEachIsPage'));
const SomeoneIsOrArePage = lazy(() => import('./pages/grammar-mistakes/SomeoneIsOrArePage'));
const SomeoneHasOrHavePage = lazy(() => import('./pages/grammar-mistakes/SomeoneHasOrHavePage'));
const EverybodyHasOrHavePage = lazy(() => import('./pages/grammar-mistakes/EverybodyHasOrHavePage'));
const NoneIsOrArePage = lazy(() => import('./pages/grammar-mistakes/NoneIsOrArePage'));
const ANumberOfVsTheNumberOfPage = lazy(() => import('./pages/grammar-mistakes/ANumberOfVsTheNumberOfPage'));
const ALotOfPeopleIsOrArePage = lazy(() => import('./pages/grammar-mistakes/ALotOfPeopleIsOrArePage'));
const OneOfTheStudentsIsOrArePage = lazy(() => import('./pages/grammar-mistakes/OneOfTheStudentsIsOrArePage'));
const EachOfTheStudentsIsOrArePage = lazy(() => import('./pages/grammar-mistakes/EachOfTheStudentsIsOrArePage'));
const AGroupOfPeopleIsOrArePage = lazy(() => import('./pages/grammar-mistakes/AGroupOfPeopleIsOrArePage'));
const EverybodyIsOrArePage = lazy(() => import('./pages/grammar-mistakes/EverybodyIsOrArePage'));
const NobodyIsOrArePage = lazy(() => import('./pages/grammar-mistakes/NobodyIsOrArePage'));
const EveryoneHasOrHavePage = lazy(() => import('./pages/grammar-mistakes/EveryoneHasOrHavePage'));
// Subject-Verb Agreement (new)
const EachOfOrEveryOfPage = lazy(() => import('./pages/grammar-mistakes/EachOfOrEveryOfPage'));
const EitherOfOrNeitherOfPage = lazy(() => import('./pages/grammar-mistakes/EitherOfOrNeitherOfPage'));
// Verb Form Errors
const IAmAgreeOrIAgreePage = lazy(() => import('./pages/grammar-mistakes/IAmAgreeOrIAgreePage'));
const HeDidntWentOrHeDidntGoPage = lazy(() => import('./pages/grammar-mistakes/HeDidntWentOrHeDidntGoPage'));
const DidYouWentOrDidYouGoPage = lazy(() => import('./pages/grammar-mistakes/DidYouWentOrDidYouGoPage'));
const IDidOrIDonePage = lazy(() => import('./pages/grammar-mistakes/IDidOrIDonePage'));
const IHaveSawOrSeenPage = lazy(() => import('./pages/grammar-mistakes/IHaveSawOrSeenPage'));
const IHaveAteOrEatenPage = lazy(() => import('./pages/grammar-mistakes/IHaveAteOrEatenPage'));
const IHaveWroteOrWrittenPage = lazy(() => import('./pages/grammar-mistakes/IHaveWroteOrWrittenPage'));
const IHaveDrankOrDrunkPage = lazy(() => import('./pages/grammar-mistakes/IHaveDrankOrDrunkPage'));
const IHaveWentOrGonePage = lazy(() => import('./pages/grammar-mistakes/IHaveWentOrGonePage'));
const HeHasCameOrComePage = lazy(() => import('./pages/grammar-mistakes/HeHasCameOrComePage'));
const ISeenOrISawPage = lazy(() => import('./pages/grammar-mistakes/ISeenOrISawPage'));
const SheHasWentOrGonePage = lazy(() => import('./pages/grammar-mistakes/SheHasWentOrGonePage'));
// Word Confusion
const AdviceVsAdvisePage = lazy(() => import('./pages/grammar-mistakes/AdviceVsAdvisePage'));
const DoVsMakePage = lazy(() => import('./pages/grammar-mistakes/DoVsMakePage'));
const SpeakVsTalkPage = lazy(() => import('./pages/grammar-mistakes/SpeakVsTalkPage'));
const BringVsTakePage = lazy(() => import('./pages/grammar-mistakes/BringVsTakePage'));
const ListenVsHearPage = lazy(() => import('./pages/grammar-mistakes/ListenVsHearPage'));
const SayVsTellPage = lazy(() => import('./pages/grammar-mistakes/SayVsTellPage'));
const LookVsSeeVsWatchPage = lazy(() => import('./pages/grammar-mistakes/LookVsSeeVsWatchPage'));
const LearnVsStudyPage = lazy(() => import('./pages/grammar-mistakes/LearnVsStudyPage'));
const BorrowVsLendPage = lazy(() => import('./pages/grammar-mistakes/BorrowVsLendPage'));
const RememberVsRemindPage = lazy(() => import('./pages/grammar-mistakes/RememberVsRemindPage'));
const WinVsBeatPage = lazy(() => import('./pages/grammar-mistakes/WinVsBeatPage'));
const ALotOrAlotPage = lazy(() => import('./pages/grammar-mistakes/ALotOrAlotPage'));
const EverydayVsEveryDayPage = lazy(() => import('./pages/grammar-mistakes/EverydayVsEveryDayPage'));
const SometimeVsSometimesPage = lazy(() => import('./pages/grammar-mistakes/SometimeVsSometimesPage'));
const IntoVsInToPage = lazy(() => import('./pages/grammar-mistakes/IntoVsInToPage'));
// Preposition Errors
const DiscussOrDiscussAboutPage = lazy(() => import('./pages/grammar-mistakes/DiscussOrDiscussAboutPage'));
const MarriedWithOrMarriedToPage = lazy(() => import('./pages/grammar-mistakes/MarriedWithOrMarriedToPage'));
const DifferentFromOrDifferentThanPage = lazy(() => import('./pages/grammar-mistakes/DifferentFromOrDifferentThanPage'));
const InterestedInOrInterestedOnPage = lazy(() => import('./pages/grammar-mistakes/InterestedInOrInterestedOnPage'));
const GoodInOrGoodAtPage = lazy(() => import('./pages/grammar-mistakes/GoodInOrGoodAtPage'));
const InTheWeekendOrOnTheWeekendPage = lazy(() => import('./pages/grammar-mistakes/InTheWeekendOrOnTheWeekendPage'));
const ArriveInOrArriveAtPage = lazy(() => import('./pages/grammar-mistakes/ArriveInOrArriveAtPage'));
const AfraidOfOrAfraidFromPage = lazy(() => import('./pages/grammar-mistakes/AfraidOfOrAfraidFromPage'));
const ProudOfOrProudForPage = lazy(() => import('./pages/grammar-mistakes/ProudOfOrProudForPage'));
const ResponsibleForOrResponsibleOfPage = lazy(() => import('./pages/grammar-mistakes/ResponsibleForOrResponsibleOfPage'));
const ExplainOrExplainAboutPage = lazy(() => import('./pages/grammar-mistakes/ExplainOrExplainAboutPage'));
const RequestOrRequestForPage = lazy(() => import('./pages/grammar-mistakes/RequestOrRequestForPage'));
const EnterOrEnterToPage = lazy(() => import('./pages/grammar-mistakes/EnterOrEnterToPage'));
const ComplainAboutOrComplainOfPage = lazy(() => import('./pages/grammar-mistakes/ComplainAboutOrComplainOfPage'));
// Preposition Errors (new)
const CapableOfOrCapableToPage = lazy(() => import('./pages/grammar-mistakes/CapableOfOrCapableToPage'));
const FondOfOrFondForPage = lazy(() => import('./pages/grammar-mistakes/FondOfOrFondForPage'));
const AccusedOfOrAccusedForPage = lazy(() => import('./pages/grammar-mistakes/AccusedOfOrAccusedForPage'));
// Word Confusion (new)
const SensibleVsSensitivePage = lazy(() => import('./pages/grammar-mistakes/SensibleVsSensitivePage'));
const EfficientVsEffectivePage = lazy(() => import('./pages/grammar-mistakes/EfficientVsEffectivePage'));
// Quantifier Errors (new)
const SeveralVsSomePage = lazy(() => import('./pages/grammar-mistakes/SeveralVsSomePage'));
const PlentyOfVsALotOfPage = lazy(() => import('./pages/grammar-mistakes/PlentyOfVsALotOfPage'));
// Quantifier Errors
const MuchPeopleOrManyPeoplePage = lazy(() => import('./pages/grammar-mistakes/MuchPeopleOrManyPeoplePage'));
const LessPeopleOrFewerPeoplePage = lazy(() => import('./pages/grammar-mistakes/LessPeopleOrFewerPeoplePage'));
const LittleVsFewPage = lazy(() => import('./pages/grammar-mistakes/LittleVsFewPage'));
const ManyVsMuchPage = lazy(() => import('./pages/grammar-mistakes/ManyVsMuchPage'));
const TooMuchVsTooManyPage = lazy(() => import('./pages/grammar-mistakes/TooMuchVsTooManyPage'));
const SomeVsAnyPage = lazy(() => import('./pages/grammar-mistakes/SomeVsAnyPage'));
const SoMuchVsSoManyPage = lazy(() => import('./pages/grammar-mistakes/SoMuchVsSoManyPage'));
const AFewVsFewPage = lazy(() => import('./pages/grammar-mistakes/AFewVsFewPage'));
const ALittleVsLittlePage = lazy(() => import('./pages/grammar-mistakes/ALittleVsLittlePage'));
// Verb Form Errors (modal perfect)
const ShouldHaveVsShouldOfPage = lazy(() => import('./pages/grammar-mistakes/ShouldHaveVsShouldOfPage'));
// Preposition Errors (additional)
const ByAccidentVsOnAccidentPage = lazy(() => import('./pages/grammar-mistakes/ByAccidentVsOnAccidentPage'));
// Redundancy Errors
const ReturnBackOrReturnPage = lazy(() => import('./pages/grammar-mistakes/ReturnBackOrReturnPage'));
const RepeatAgainOrRepeatPage = lazy(() => import('./pages/grammar-mistakes/RepeatAgainOrRepeatPage'));
const AdvancePlanningPage = lazy(() => import('./pages/grammar-mistakes/AdvancePlanningPage'));
const FreeGiftPage = lazy(() => import('./pages/grammar-mistakes/FreeGiftPage'));
const EndResultPage = lazy(() => import('./pages/grammar-mistakes/EndResultPage'));
const FinalOutcomePage = lazy(() => import('./pages/grammar-mistakes/FinalOutcomePage'));
const PastHistoryPage = lazy(() => import('./pages/grammar-mistakes/PastHistoryPage'));
const CloseProximityPage = lazy(() => import('./pages/grammar-mistakes/CloseProximityPage'));
// Word Confusion (new)
const VeryVsTooVsSoPage = lazy(() => import('./pages/grammar-mistakes/VeryVsTooVsSoPage'));
const SoVsSuchPage = lazy(() => import('./pages/grammar-mistakes/SoVsSuchPage'));
const StillVsYetVsAlreadyPage = lazy(() => import('./pages/grammar-mistakes/StillVsYetVsAlreadyPage'));
// Verb Form Errors (new)
const UsedToVsBeUsedToPage = lazy(() => import('./pages/grammar-mistakes/UsedToVsBeUsedToPage'));
// Preposition Errors (new)
const SinceVsForPage = lazy(() => import('./pages/grammar-mistakes/SinceVsForPage'));
const DuringVsForVsWhilePage = lazy(() => import('./pages/grammar-mistakes/DuringVsForVsWhilePage'));
const InVsOnVsAtTimeAndPlacePage = lazy(() => import('./pages/grammar-mistakes/InVsOnVsAtTimeAndPlacePage'));
const InVsOnVsAtPlacePage = lazy(() => import('./pages/grammar-mistakes/InVsOnVsAtPlacePage'));
const ToVsForPage = lazy(() => import('./pages/grammar-mistakes/ToVsForPage'));
const ByVsWithPage = lazy(() => import('./pages/grammar-mistakes/ByVsWithPage'));
const AboutVsOfPage = lazy(() => import('./pages/grammar-mistakes/AboutVsOfPage'));

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
            <Route path="vocabulary" element={<Navigate to="/vocabulary/collocations/" replace />} />
            <Route path="vocabulary/collocations" element={<Suspense fallback={<PageLoader />}><CollocationsPage /></Suspense>} />
            <Route path="vocabulary/homophones-homonyms-homographs" element={<Suspense fallback={<PageLoader />}><HomophonesHomonymsHomographsPage /></Suspense>} />
            <Route path="writing/how-to-write-an-essay" element={<Suspense fallback={<PageLoader />}><WritingPage /></Suspense>} />
            <Route path="essay-types" element={<Suspense fallback={<PageLoader />}><EssayTypesPage /></Suspense>} />
            <Route path="writing/how-to-write-a-professional-email" element={<Suspense fallback={<PageLoader />}><ProfessionalEmailPage /></Suspense>} />
            <Route path="writing/how-to-build-an-argument" element={<Suspense fallback={<PageLoader />}><BuildingArgumentPage /></Suspense>} />
            <Route path="writing/how-to-paraphrase" element={<Suspense fallback={<PageLoader />}><ParaphrasingPage /></Suspense>} />
            <Route path="writing/how-to-vary-sentence-structure" element={<Suspense fallback={<PageLoader />}><VaryingSentenceStructurePage /></Suspense>} />
            <Route path="reading/how-to-read-efficiently" element={<Suspense fallback={<PageLoader />}><ReadingPage /></Suspense>} />
            <Route path="daily-english-reads" element={<Suspense fallback={<PageLoader />}><DailyEnglishReadsPage /></Suspense>} />
            <Route path="reading/reading-comprehension-practice" element={<Suspense fallback={<PageLoader />}><ReadingComprehensionPage /></Suspense>} />
            <Route path="reading/how-to-read-critically" element={<Suspense fallback={<PageLoader />}><CriticalReadingPage /></Suspense>} />
            <Route path="about" element={<Suspense fallback={<PageLoader />}><AboutPage /></Suspense>} />
            <Route path="about/editorial-team" element={<Suspense fallback={<PageLoader />}><EditorialTeamPage /></Suspense>} />

            {/* TypoGrammar Educators Network */}
            <Route path="educators" element={<Suspense fallback={<PageLoader />}><EducatorsHomePage /></Suspense>} />
            <Route path="authors" element={<Suspense fallback={<PageLoader />}><AuthorsDirectoryPage /></Suspense>} />
            <Route path="author/:slug" element={<Suspense fallback={<PageLoader />}><AuthorProfilePage /></Suspense>} />
            <Route path="contributor-articles" element={<Suspense fallback={<PageLoader />}><ContributorArticlesPage /></Suspense>} />
            <Route path="contributor-articles/:slug" element={<Suspense fallback={<PageLoader />}><ContributorArticlePage /></Suspense>} />
            <Route path="contributor-guidelines" element={<Suspense fallback={<PageLoader />}><ContributorGuidelinesPage /></Suspense>} />
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
            <Route path="ai-writing-tools" element={<Suspense fallback={<PageLoader />}><AIWritingToolsPage /></Suspense>} />
            <Route path="typogrammar-write" element={<Suspense fallback={<PageLoader />}><TypoGrammarWriteExtensionPage /></Suspense>} />
            <Route path="grammar-checker" element={<Suspense fallback={<PageLoader />}><GrammarCheckerPage /></Suspense>} />
            <Route path="paraphrasing-tool" element={<Suspense fallback={<PageLoader />}><ParaphrasingToolPage /></Suspense>} />
            <Route path="free-paraphrasing-tool-without-login" element={<Suspense fallback={<PageLoader />}><FreeParaphrasingToolWithoutLoginPage /></Suspense>} />
            <Route path="ielts-band-score-calculator" element={<Suspense fallback={<PageLoader />}><IELTSBandScoreCalculatorPage /></Suspense>} />
            <Route path="essay-topic-generator" element={<Suspense fallback={<PageLoader />}><EssayTopicGeneratorPage /></Suspense>} />
            
            {/* Quizzes & Tests Routes */}
            <Route path="quizzes/verb-tenses-quiz" element={<Suspense fallback={<PageLoader />}><VerbTensesQuizPage /></Suspense>} />
            <Route path="english-level-test" element={<Suspense fallback={<PageLoader />}><EnglishLevelTestPage /></Suspense>} />
            
            {/* IELTS Writing Task 1 Routes */}
            <Route path="ielts/ielts-writing-task-1-bar-chart-sample-answer" element={<Suspense fallback={<PageLoader />}><IELTSWritingTask1BarChartPage /></Suspense>} />

            {/* IELTS Writing Task 2 Routes */}
            <Route path="ielts/ielts-writing-task-2-essay-types" element={<Suspense fallback={<PageLoader />}><IELTSWritingTask2Page /></Suspense>} />
            <Route path="ielts/opinion-essay-ielts-band-7-9" element={<Suspense fallback={<PageLoader />}><OpinionEssayIELTSPage /></Suspense>} />
            <Route path="ielts/discussion-essay-ielts-band-7-9" element={<Suspense fallback={<PageLoader />}><DiscussionEssayIELTSPage /></Suspense>} />
            <Route path="ielts/advantages-disadvantages-essay-ielts" element={<Suspense fallback={<PageLoader />}><AdvantagesDisadvantagesEssayIELTSPage /></Suspense>} />
            <Route path="ielts/problem-solution-essay-ielts" element={<Suspense fallback={<PageLoader />}><ProblemSolutionEssayIELTSPage /></Suspense>} />
            <Route path="ielts/two-part-question-essay-ielts" element={<Suspense fallback={<PageLoader />}><TwoPartQuestionEssayIELTSPage /></Suspense>} />
            <Route path="ielts/mixed-essay-types-ielts" element={<Suspense fallback={<PageLoader />}><MixedEssayTypesIELTSPage /></Suspense>} />
            <Route path="ielts/band-8-ielts-sample-answers" element={<Suspense fallback={<PageLoader />}><Band8IELTSSampleAnswersPage /></Suspense>} />
            <Route path="ielts/50-band-9-ielts-writing-task-2-sample-essays" element={<Suspense fallback={<PageLoader />}><Band9IELTSEssaysPage /></Suspense>} />
            <Route path="ielts/1000-ielts-speaking-questions" element={<Suspense fallback={<PageLoader />}><IELTSSpeakingQuestionsPage /></Suspense>} />
            <Route path="ielts/conditionals-in-ielts" element={<Suspense fallback={<PageLoader />}><ConditionalsInIELTSPage /></Suspense>} />
            <Route path="ielts/passive-voice-ielts-writing" element={<Suspense fallback={<PageLoader />}><PassiveVoiceIELTSPage /></Suspense>} />
            <Route path="ielts/how-to-write-complex-sentences" element={<Suspense fallback={<PageLoader />}><ComplexSentencesIELTSPage /></Suspense>} />
            <Route path="ielts/common-grammar-mistakes-ielts-writing" element={<Suspense fallback={<PageLoader />}><CommonGrammarMistakesIELTSPage /></Suspense>} />
            <Route path="ielts/task-achievement-in-ielts" element={<Suspense fallback={<PageLoader />}><TaskAchievementIELTSPage /></Suspense>} />
            <Route path="ielts/lexical-resource-in-ielts" element={<Suspense fallback={<PageLoader />}><LexicalResourceIELTSPage /></Suspense>} />
            
            {/* IELTS High-Intent Guides */}
            <Route path="ielts/reading-raw-score-to-band-conversion" element={<Suspense fallback={<PageLoader />}><IELTSReadingScoreConversionPage /></Suspense>} />
            <Route path="ielts/is-7-5-ielts-score-good-enough" element={<Suspense fallback={<PageLoader />}><Is75IELTSScoreGoodEnoughPage /></Suspense>} />

            {/* IELTS Vocabulary Routes */}
            <Route path="ielts/vocabulary/band-6" element={<Suspense fallback={<PageLoader />}><IELTSVocabularyBand6Page /></Suspense>} />
            <Route path="ielts/vocabulary/band-7" element={<Suspense fallback={<PageLoader />}><IELTSVocabularyBand7Page /></Suspense>} />
            <Route path="ielts/vocabulary/band-8" element={<Suspense fallback={<PageLoader />}><IELTSVocabularyBand8Page /></Suspense>} />
            <Route path="ielts/vocabulary/band-9" element={<Suspense fallback={<PageLoader />}><IELTSVocabularyBand9Page /></Suspense>} />
            
            {/* IELTS Free Book Route */}
            <Route path="ielts/academic-vocabulary-book" element={<Suspense fallback={<PageLoader />}><IeltsAcademicVocabularyBookPage /></Suspense>} />
            <Route path="ielts/idioms-book" element={<Suspense fallback={<PageLoader />}><IeltsIdiomsBookPage /></Suspense>} />
            <Route path="ielts/health-vocabulary-book" element={<Suspense fallback={<PageLoader />}><HealthVocabularyBookPage /></Suspense>} />
            <Route path="ielts/writing-task-2-band-9-essays-book" element={<Suspense fallback={<PageLoader />}><IeltsBand9EssaysBookPage /></Suspense>} />
            <Route path="ielts/grammar-master-book" element={<Suspense fallback={<PageLoader />}><IeltsGrammarMasterBookPage /></Suspense>} />
            <Route path="ielts/cue-cards-book" element={<Suspense fallback={<PageLoader />}><IeltsCueCardsBookPage /></Suspense>} />
            <Route path="ielts/50-complex-sentences-for-ielts-pdf" element={<Suspense fallback={<PageLoader />}><ComplexSentencesPDFPage /></Suspense>} />
            <Route path="ielts/english-grammar-pdf" element={<Suspense fallback={<PageLoader />}><EnglishGrammarPDFPage /></Suspense>} />
            
            {/* IELTS Strategy & Success Routes */}
            <Route path="ielts/is-ielts-getting-harder-2026" element={<Suspense fallback={<PageLoader />}><IsIELTSGettingHarderPage /></Suspense>} />
            <Route path="ielts/why-stuck-at-6-5" element={<Suspense fallback={<PageLoader />}><WhyStuckAt65Page /></Suspense>} />
            <Route path="ielts/ielts-in-3-days" element={<Suspense fallback={<PageLoader />}><IELTSIn3DaysPage /></Suspense>} />
            <Route path="ielts/ielts-score-requirements-by-country" element={<Suspense fallback={<PageLoader />}><IELTSScoreRequirementsPage /></Suspense>} />
            <Route path="ielts/countries-without-ielts" element={<Suspense fallback={<PageLoader />}><CountriesWithoutIELTSPage /></Suspense>} />
            
            {/* IELTS Tests Routes */}
            <Route path="ielts/tests" element={<Suspense fallback={<PageLoader />}><IELTSTestsPage /></Suspense>} />
            <Route path="ielts/tests/listening/mock-test-1/section-1" element={<Suspense fallback={<PageLoader />}><IELTSListeningMockTest1Section1Page /></Suspense>} />
            <Route path="ielts/tests/reading/academic/test-1" element={<Suspense fallback={<PageLoader />}><IELTSAcademicReadingTest01Page /></Suspense>} />
            <Route path="ielts/tests/reading/general/test-1" element={<Suspense fallback={<PageLoader />}><IELTSGeneralReadingTest01Page /></Suspense>} />
            
            {/* TOEFL Preparation Routes */}
            <Route path="toefl/toefl-reading/toefl-reading-section-explained" element={<Suspense fallback={<PageLoader />}><TOEFLReadingSectionExplainedPage /></Suspense>} />
            <Route path="toefl/toefl-reading/toefl-reading-strategies" element={<Suspense fallback={<PageLoader />}><TOEFLReadingStrategiesPage /></Suspense>} />
            <Route path="toefl/toefl-reading/toefl-reading-question-types" element={<Suspense fallback={<PageLoader />}><TOEFLReadingQuestionTypesPage /></Suspense>} />
            <Route path="toefl/toefl-reading/toefl-reading-time-management" element={<Suspense fallback={<PageLoader />}><TOEFLReadingTimeManagementPage /></Suspense>} />
            <Route path="toefl/toefl-reading/toefl-reading-practice-questions" element={<Suspense fallback={<PageLoader />}><TOEFLReadingPracticeQuestionsPage /></Suspense>} />
            <Route path="toefl/toefl-reading/toefl-daily-life-reading-task" element={<Suspense fallback={<PageLoader />}><TOEFLDailyLifeReadingTaskPage /></Suspense>} />
            {/* TOEFL Reading Practice Tests */}
            <Route path="toefl/tests/reading/test-1" element={<Suspense fallback={<PageLoader />}><TOEFLReadingTest01Page /></Suspense>} />
            <Route path="toefl/tests/reading/test-2" element={<Suspense fallback={<PageLoader />}><TOEFLReadingTest02Page /></Suspense>} />
            <Route path="toefl/tests/reading/test-3" element={<Suspense fallback={<PageLoader />}><TOEFLReadingTest03Page /></Suspense>} />
            {/* TOEFL Writing Routes */}
            <Route path="toefl/toefl-writing/toefl-writing-task-1-explained" element={<Suspense fallback={<PageLoader />}><TOEFLWritingTask1ExplainedPage /></Suspense>} />
            <Route path="toefl/toefl-writing/toefl-writing-task-2-explained" element={<Suspense fallback={<PageLoader />}><TOEFLWritingTask2ExplainedPage /></Suspense>} />
            <Route path="toefl/toefl-writing/toefl-writing-templates" element={<Suspense fallback={<PageLoader />}><TOEFLWritingTemplatesPage /></Suspense>} />
            <Route path="toefl/toefl-writing/toefl-writing-topics" element={<Suspense fallback={<PageLoader />}><TOEFLWritingTopicsPage /></Suspense>} />
            <Route path="toefl/toefl-writing/toefl-writing-practice-questions" element={<Suspense fallback={<PageLoader />}><TOEFLWritingPracticeQuestionsPage /></Suspense>} />
            {/* TOEFL Free Resources Routes */}
            <Route path="toefl/toefl-reading-practice-pdf" element={<Suspense fallback={<PageLoader />}><TOEFLReadingPracticePDFPage /></Suspense>} />
            <Route path="toefl/toefl-vocabulary-pdf" element={<Suspense fallback={<PageLoader />}><TOEFLVocabularyPDFPage /></Suspense>} />
            <Route path="toefl/toefl-writing-pdf" element={<Suspense fallback={<PageLoader />}><TOEFLWritingPDFPage /></Suspense>} />
            <Route path="toefl/1000-toefl-speaking-questions" element={<Suspense fallback={<PageLoader />}><TOEFL1000SpeakingQuestionsPage /></Suspense>} />
            {/* PTE Academic Free Resources Routes */}
            <Route path="downloads/1000-pte-academic-practice-questions" element={<Suspense fallback={<PageLoader />}><PTE1000AcademicPracticeQuestionsPage /></Suspense>} />
            {/* TOEFL Strategy & Success Routes */}
            <Route path="toefl/strategy-success/old-toefl-vs-new-toefl" element={<Suspense fallback={<PageLoader />}><OldTOEFLvsNewTOEFL2026Page /></Suspense>} />
            <Route path="toefl/strategy-success/toefl-complete-the-words" element={<Suspense fallback={<PageLoader />}><TOEFLCompleteTheWordsPage /></Suspense>} />
            <Route path="toefl/strategy-success/toefl-2026-scoring" element={<Suspense fallback={<PageLoader />}><TOEFL2026ScoringPage /></Suspense>} />
            <Route path="toefl/strategy-success/toefl-ibt-vs-toefl-ltp" element={<Suspense fallback={<PageLoader />}><TOEFLiBTvsLTPPage /></Suspense>} />
            <Route path="toefl/strategy-success/toefl-speaking-average-vs-high-scoring-answer" element={<Suspense fallback={<PageLoader />}><TOEFLSpeakingAverageVsHighScoringPage /></Suspense>} />
            
            {/* Grammar Mistakes Pillar Routes */}
            <Route path="grammar-mistakes" element={<Suspense fallback={<PageLoader />}><GrammarMistakesPage /></Suspense>} />
            {/* Subject-Verb Agreement */}
            <Route path="grammar-mistakes/people-is-or-people-are" element={<Suspense fallback={<PageLoader />}><PeopleIsOrPeopleArePage /></Suspense>} />
            <Route path="grammar-mistakes/he-go-or-he-goes" element={<Suspense fallback={<PageLoader />}><HeGoOrHeGoesPage /></Suspense>} />
            <Route path="grammar-mistakes/everyone-is-or-everyone-are" element={<Suspense fallback={<PageLoader />}><EveryoneIsOrEveryoneArePage /></Suspense>} />
            <Route path="grammar-mistakes/each-are-or-each-is" element={<Suspense fallback={<PageLoader />}><EachAreOrEachIsPage /></Suspense>} />
            <Route path="grammar-mistakes/someone-is-or-are" element={<Suspense fallback={<PageLoader />}><SomeoneIsOrArePage /></Suspense>} />
            <Route path="grammar-mistakes/someone-has-or-have" element={<Suspense fallback={<PageLoader />}><SomeoneHasOrHavePage /></Suspense>} />
            <Route path="grammar-mistakes/everybody-has-or-have" element={<Suspense fallback={<PageLoader />}><EverybodyHasOrHavePage /></Suspense>} />
            <Route path="grammar-mistakes/none-is-or-are" element={<Suspense fallback={<PageLoader />}><NoneIsOrArePage /></Suspense>} />
            <Route path="grammar-mistakes/a-number-of-vs-the-number-of" element={<Suspense fallback={<PageLoader />}><ANumberOfVsTheNumberOfPage /></Suspense>} />
            <Route path="grammar-mistakes/a-lot-of-people-is-or-are" element={<Suspense fallback={<PageLoader />}><ALotOfPeopleIsOrArePage /></Suspense>} />
            <Route path="grammar-mistakes/one-of-the-students-is-or-are" element={<Suspense fallback={<PageLoader />}><OneOfTheStudentsIsOrArePage /></Suspense>} />
            <Route path="grammar-mistakes/each-of-the-students-is-or-are" element={<Suspense fallback={<PageLoader />}><EachOfTheStudentsIsOrArePage /></Suspense>} />
            <Route path="grammar-mistakes/a-group-of-people-is-or-are" element={<Suspense fallback={<PageLoader />}><AGroupOfPeopleIsOrArePage /></Suspense>} />
            <Route path="grammar-mistakes/everybody-is-or-are" element={<Suspense fallback={<PageLoader />}><EverybodyIsOrArePage /></Suspense>} />
            <Route path="grammar-mistakes/nobody-is-or-are" element={<Suspense fallback={<PageLoader />}><NobodyIsOrArePage /></Suspense>} />
            <Route path="grammar-mistakes/everyone-has-or-have" element={<Suspense fallback={<PageLoader />}><EveryoneHasOrHavePage /></Suspense>} />
            <Route path="grammar-mistakes/each-of-or-every-of" element={<Suspense fallback={<PageLoader />}><EachOfOrEveryOfPage /></Suspense>} />
            <Route path="grammar-mistakes/either-of-or-neither-of" element={<Suspense fallback={<PageLoader />}><EitherOfOrNeitherOfPage /></Suspense>} />
            {/* Verb Form Errors */}
            <Route path="grammar-mistakes/i-am-agree-or-i-agree" element={<Suspense fallback={<PageLoader />}><IAmAgreeOrIAgreePage /></Suspense>} />
            <Route path="grammar-mistakes/he-didnt-went-or-he-didnt-go" element={<Suspense fallback={<PageLoader />}><HeDidntWentOrHeDidntGoPage /></Suspense>} />
            <Route path="grammar-mistakes/did-you-went-or-did-you-go" element={<Suspense fallback={<PageLoader />}><DidYouWentOrDidYouGoPage /></Suspense>} />
            <Route path="grammar-mistakes/i-did-or-i-done" element={<Suspense fallback={<PageLoader />}><IDidOrIDonePage /></Suspense>} />
            <Route path="grammar-mistakes/i-have-saw-or-seen" element={<Suspense fallback={<PageLoader />}><IHaveSawOrSeenPage /></Suspense>} />
            <Route path="grammar-mistakes/i-have-ate-or-eaten" element={<Suspense fallback={<PageLoader />}><IHaveAteOrEatenPage /></Suspense>} />
            <Route path="grammar-mistakes/i-have-wrote-or-written" element={<Suspense fallback={<PageLoader />}><IHaveWroteOrWrittenPage /></Suspense>} />
            <Route path="grammar-mistakes/i-have-drank-or-drunk" element={<Suspense fallback={<PageLoader />}><IHaveDrankOrDrunkPage /></Suspense>} />
            <Route path="grammar-mistakes/i-have-went-or-have-gone" element={<Suspense fallback={<PageLoader />}><IHaveWentOrGonePage /></Suspense>} />
            <Route path="grammar-mistakes/he-has-came-or-come" element={<Suspense fallback={<PageLoader />}><HeHasCameOrComePage /></Suspense>} />
            <Route path="grammar-mistakes/i-seen-or-i-saw" element={<Suspense fallback={<PageLoader />}><ISeenOrISawPage /></Suspense>} />
            <Route path="grammar-mistakes/she-has-went-or-gone" element={<Suspense fallback={<PageLoader />}><SheHasWentOrGonePage /></Suspense>} />
            <Route path="grammar-mistakes/should-have-vs-should-of" element={<Suspense fallback={<PageLoader />}><ShouldHaveVsShouldOfPage /></Suspense>} />
            {/* Word Confusion */}
            <Route path="grammar-mistakes/advice-vs-advise" element={<Suspense fallback={<PageLoader />}><AdviceVsAdvisePage /></Suspense>} />
            <Route path="grammar-mistakes/do-vs-make" element={<Suspense fallback={<PageLoader />}><DoVsMakePage /></Suspense>} />
            <Route path="grammar-mistakes/speak-vs-talk" element={<Suspense fallback={<PageLoader />}><SpeakVsTalkPage /></Suspense>} />
            <Route path="grammar-mistakes/bring-vs-take" element={<Suspense fallback={<PageLoader />}><BringVsTakePage /></Suspense>} />
            <Route path="grammar-mistakes/listen-vs-hear" element={<Suspense fallback={<PageLoader />}><ListenVsHearPage /></Suspense>} />
            <Route path="grammar-mistakes/say-vs-tell" element={<Suspense fallback={<PageLoader />}><SayVsTellPage /></Suspense>} />
            <Route path="grammar-mistakes/look-vs-see-vs-watch" element={<Suspense fallback={<PageLoader />}><LookVsSeeVsWatchPage /></Suspense>} />
            <Route path="grammar-mistakes/learn-vs-study" element={<Suspense fallback={<PageLoader />}><LearnVsStudyPage /></Suspense>} />
            <Route path="grammar-mistakes/borrow-vs-lend" element={<Suspense fallback={<PageLoader />}><BorrowVsLendPage /></Suspense>} />
            <Route path="grammar-mistakes/remember-vs-remind" element={<Suspense fallback={<PageLoader />}><RememberVsRemindPage /></Suspense>} />
            <Route path="grammar-mistakes/win-vs-beat" element={<Suspense fallback={<PageLoader />}><WinVsBeatPage /></Suspense>} />
            <Route path="grammar-mistakes/a-lot-or-alot" element={<Suspense fallback={<PageLoader />}><ALotOrAlotPage /></Suspense>} />
            <Route path="grammar-mistakes/everyday-vs-every-day" element={<Suspense fallback={<PageLoader />}><EverydayVsEveryDayPage /></Suspense>} />
            <Route path="grammar-mistakes/sometime-vs-sometimes" element={<Suspense fallback={<PageLoader />}><SometimeVsSometimesPage /></Suspense>} />
            <Route path="grammar-mistakes/into-vs-in-to" element={<Suspense fallback={<PageLoader />}><IntoVsInToPage /></Suspense>} />
            <Route path="grammar-mistakes/sensible-vs-sensitive" element={<Suspense fallback={<PageLoader />}><SensibleVsSensitivePage /></Suspense>} />
            <Route path="grammar-mistakes/efficient-vs-effective" element={<Suspense fallback={<PageLoader />}><EfficientVsEffectivePage /></Suspense>} />
            {/* Preposition Errors */}
            <Route path="grammar-mistakes/discuss-or-discuss-about" element={<Suspense fallback={<PageLoader />}><DiscussOrDiscussAboutPage /></Suspense>} />
            <Route path="grammar-mistakes/married-with-or-married-to" element={<Suspense fallback={<PageLoader />}><MarriedWithOrMarriedToPage /></Suspense>} />
            <Route path="grammar-mistakes/different-from-or-different-than" element={<Suspense fallback={<PageLoader />}><DifferentFromOrDifferentThanPage /></Suspense>} />
            <Route path="grammar-mistakes/interested-in-or-interested-on" element={<Suspense fallback={<PageLoader />}><InterestedInOrInterestedOnPage /></Suspense>} />
            <Route path="grammar-mistakes/good-in-or-good-at" element={<Suspense fallback={<PageLoader />}><GoodInOrGoodAtPage /></Suspense>} />
            <Route path="grammar-mistakes/in-the-weekend-or-on-the-weekend" element={<Suspense fallback={<PageLoader />}><InTheWeekendOrOnTheWeekendPage /></Suspense>} />
            <Route path="grammar-mistakes/arrive-in-or-arrive-at" element={<Suspense fallback={<PageLoader />}><ArriveInOrArriveAtPage /></Suspense>} />
            <Route path="grammar-mistakes/afraid-of-or-afraid-from" element={<Suspense fallback={<PageLoader />}><AfraidOfOrAfraidFromPage /></Suspense>} />
            <Route path="grammar-mistakes/proud-of-or-proud-for" element={<Suspense fallback={<PageLoader />}><ProudOfOrProudForPage /></Suspense>} />
            <Route path="grammar-mistakes/responsible-for-or-responsible-of" element={<Suspense fallback={<PageLoader />}><ResponsibleForOrResponsibleOfPage /></Suspense>} />
            <Route path="grammar-mistakes/explain-or-explain-about" element={<Suspense fallback={<PageLoader />}><ExplainOrExplainAboutPage /></Suspense>} />
            <Route path="grammar-mistakes/request-or-request-for" element={<Suspense fallback={<PageLoader />}><RequestOrRequestForPage /></Suspense>} />
            <Route path="grammar-mistakes/enter-or-enter-to" element={<Suspense fallback={<PageLoader />}><EnterOrEnterToPage /></Suspense>} />
            <Route path="grammar-mistakes/complain-about-or-complain-of" element={<Suspense fallback={<PageLoader />}><ComplainAboutOrComplainOfPage /></Suspense>} />
            <Route path="grammar-mistakes/by-accident-vs-on-accident" element={<Suspense fallback={<PageLoader />}><ByAccidentVsOnAccidentPage /></Suspense>} />
            <Route path="grammar-mistakes/capable-of-or-capable-to" element={<Suspense fallback={<PageLoader />}><CapableOfOrCapableToPage /></Suspense>} />
            <Route path="grammar-mistakes/fond-of-or-fond-for" element={<Suspense fallback={<PageLoader />}><FondOfOrFondForPage /></Suspense>} />
            <Route path="grammar-mistakes/accused-of-or-accused-for" element={<Suspense fallback={<PageLoader />}><AccusedOfOrAccusedForPage /></Suspense>} />
            {/* Quantifier Errors */}
            <Route path="grammar-mistakes/much-people-or-many-people" element={<Suspense fallback={<PageLoader />}><MuchPeopleOrManyPeoplePage /></Suspense>} />
            <Route path="grammar-mistakes/less-people-or-fewer-people" element={<Suspense fallback={<PageLoader />}><LessPeopleOrFewerPeoplePage /></Suspense>} />
            <Route path="grammar-mistakes/little-vs-few" element={<Suspense fallback={<PageLoader />}><LittleVsFewPage /></Suspense>} />
            <Route path="grammar-mistakes/many-vs-much" element={<Suspense fallback={<PageLoader />}><ManyVsMuchPage /></Suspense>} />
            <Route path="grammar-mistakes/too-much-vs-too-many" element={<Suspense fallback={<PageLoader />}><TooMuchVsTooManyPage /></Suspense>} />
            <Route path="grammar-mistakes/some-vs-any" element={<Suspense fallback={<PageLoader />}><SomeVsAnyPage /></Suspense>} />
            <Route path="grammar-mistakes/so-much-vs-so-many" element={<Suspense fallback={<PageLoader />}><SoMuchVsSoManyPage /></Suspense>} />
            <Route path="grammar-mistakes/a-few-vs-few" element={<Suspense fallback={<PageLoader />}><AFewVsFewPage /></Suspense>} />
            <Route path="grammar-mistakes/a-little-vs-little" element={<Suspense fallback={<PageLoader />}><ALittleVsLittlePage /></Suspense>} />
            <Route path="grammar-mistakes/several-vs-some" element={<Suspense fallback={<PageLoader />}><SeveralVsSomePage /></Suspense>} />
            <Route path="grammar-mistakes/plenty-of-vs-a-lot-of" element={<Suspense fallback={<PageLoader />}><PlentyOfVsALotOfPage /></Suspense>} />
            {/* Redundancy Errors */}
            <Route path="grammar-mistakes/return-back-or-return" element={<Suspense fallback={<PageLoader />}><ReturnBackOrReturnPage /></Suspense>} />
            <Route path="grammar-mistakes/repeat-again-or-repeat" element={<Suspense fallback={<PageLoader />}><RepeatAgainOrRepeatPage /></Suspense>} />
            <Route path="grammar-mistakes/advance-planning" element={<Suspense fallback={<PageLoader />}><AdvancePlanningPage /></Suspense>} />
            <Route path="grammar-mistakes/free-gift" element={<Suspense fallback={<PageLoader />}><FreeGiftPage /></Suspense>} />
            <Route path="grammar-mistakes/end-result" element={<Suspense fallback={<PageLoader />}><EndResultPage /></Suspense>} />
            <Route path="grammar-mistakes/final-outcome" element={<Suspense fallback={<PageLoader />}><FinalOutcomePage /></Suspense>} />
            <Route path="grammar-mistakes/past-history" element={<Suspense fallback={<PageLoader />}><PastHistoryPage /></Suspense>} />
            <Route path="grammar-mistakes/close-proximity" element={<Suspense fallback={<PageLoader />}><CloseProximityPage /></Suspense>} />
            {/* Word Confusion (new) */}
            <Route path="grammar-mistakes/very-vs-too-vs-so" element={<Suspense fallback={<PageLoader />}><VeryVsTooVsSoPage /></Suspense>} />
            <Route path="grammar-mistakes/so-vs-such" element={<Suspense fallback={<PageLoader />}><SoVsSuchPage /></Suspense>} />
            <Route path="grammar-mistakes/still-vs-yet-vs-already" element={<Suspense fallback={<PageLoader />}><StillVsYetVsAlreadyPage /></Suspense>} />
            {/* Verb Form Errors (new) */}
            <Route path="grammar-mistakes/used-to-vs-be-used-to" element={<Suspense fallback={<PageLoader />}><UsedToVsBeUsedToPage /></Suspense>} />
            {/* Preposition Errors (new) */}
            <Route path="grammar-mistakes/since-vs-for" element={<Suspense fallback={<PageLoader />}><SinceVsForPage /></Suspense>} />
            <Route path="grammar-mistakes/during-vs-for-vs-while" element={<Suspense fallback={<PageLoader />}><DuringVsForVsWhilePage /></Suspense>} />
            <Route path="grammar-mistakes/in-vs-on-vs-at-time-and-place" element={<Suspense fallback={<PageLoader />}><InVsOnVsAtTimeAndPlacePage /></Suspense>} />
            <Route path="grammar-mistakes/in-vs-on-vs-at-place" element={<Suspense fallback={<PageLoader />}><InVsOnVsAtPlacePage /></Suspense>} />
            <Route path="grammar-mistakes/to-vs-for" element={<Suspense fallback={<PageLoader />}><ToVsForPage /></Suspense>} />
            <Route path="grammar-mistakes/by-vs-with" element={<Suspense fallback={<PageLoader />}><ByVsWithPage /></Suspense>} />
            <Route path="grammar-mistakes/about-vs-of" element={<Suspense fallback={<PageLoader />}><AboutVsOfPage /></Suspense>} />
            
            {/* 404 Catch-all Route */}
            <Route path="*" element={<Suspense fallback={<PageLoader />}><NotFoundPage /></Suspense>} />
          </Route>
        </Routes>
    </ProgressProvider>
  );
};

export default App;