
import React from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import GoogleAd from '../components/GoogleAd';
import SchemaMarkup from '../components/SchemaMarkup';
import { useLanguage } from '../contexts/LanguageContext';

const HomePage: React.FC = () => {
  const { t } = useLanguage();
  
  usePageMetadata({
    title: 'TypoGrammar: Master English Grammar, Verb Tenses & Writing Skills | Free Learning Hub',
    description: 'Learn English grammar online for free. Master verb tenses, sentence structure, punctuation rules, and writing skills with clear explanations, examples, and quizzes. Perfect for ESL/EFL students, professionals, and native speakers.'
  });

  return (
    <div>
      <SchemaMarkup
        type="EducationalOrganization"
        data={{
          name: 'TypoGrammar',
          description: 'Free online English grammar learning platform',
          url: 'https://typogrammar.com',
          areaServed: 'Worldwide',
          teaches: 'English Grammar'
        }}
      />
      <div className="text-center p-8 bg-gradient-to-br from-white to-slate-50 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 max-w-3xl mx-auto dark:bg-slate-900 dark:border-slate-700 dark:shadow-slate-900/50">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-blue-100 rounded-full dark:bg-blue-900/40">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.906 59.906 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            </svg>
          </div>
        </div>
        <h2 className="font-heading text-5xl font-extrabold text-slate-800 mb-4 tracking-tight dark:text-white">{t.homeTitle}</h2>
        <p className="font-body text-xl text-slate-600 max-w-2xl mx-auto mb-8 dark:text-white">
          {t.homeSubtitle}{' '}
          <Link to="/topics/present-simple" className="text-blue-600 hover:underline font-semibold dark:text-blue-300">
            {t.presentSimpleTense}
          </Link>
          ,{' '}
          <Link to="/topics/passive-voice" className="text-blue-600 hover:underline font-semibold dark:text-blue-300">
            {t.activePassiveVoice}
          </Link>
          , or{' '}
          <Link to="/topics/conditionals" className="text-blue-600 hover:underline font-semibold dark:text-blue-300">
            {t.ifClausesConditionals}
          </Link>
          .
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/getting-started" 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            {t.startLearningNow}
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <Link 
            to="/grammar-guide" 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-blue-600 bg-white border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200 dark:bg-slate-800 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-slate-700"
          >
            {t.browseAllTopics}
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-12 bg-white p-8 md:p-10 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-900 dark:border-slate-700 dark:shadow-slate-900/50">
        <h3 className="font-heading text-3xl font-bold text-slate-900 mb-6 dark:text-white">{t.whatIsTypoGrammar}</h3>
        <p className="font-body text-lg text-slate-700 leading-relaxed mb-4 dark:text-slate-100">
          {t.whatIsTypoGrammarText1}
        </p>
        <p className="font-body text-lg text-slate-700 leading-relaxed mb-4 dark:text-slate-100">
          {t.whatIsTypoGrammarText2}
        </p>
        <p className="font-body text-lg text-slate-700 leading-relaxed dark:text-slate-100">
          {t.whatIsTypoGrammarText3}
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-8 bg-white p-8 md:p-10 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-900 dark:border-slate-700 dark:shadow-slate-900/50">
        <h3 className="font-heading text-3xl font-bold text-slate-900 mb-6 dark:text-white">{t.whatYouCanLearn}</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 dark:bg-blue-900/40">
              <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
            </div>
            <p className="font-body text-lg text-slate-700 dark:text-slate-100"><strong>{t.verbTensesTitle}</strong> {t.verbTensesDesc}</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 dark:bg-blue-900/40">
              <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
            </div>
            <p className="font-body text-lg text-slate-700 dark:text-slate-100"><strong>{t.sentenceStructureTitle}</strong> {t.sentenceStructureDesc}</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 dark:bg-blue-900/40">
              <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
            </div>
            <p className="font-body text-lg text-slate-700 dark:text-slate-100"><strong>{t.partsOfSpeechTitle}</strong> {t.partsOfSpeechDesc}</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 dark:bg-blue-900/40">
              <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
            </div>
            <p className="font-body text-lg text-slate-700 dark:text-slate-100"><strong>{t.punctuationTitle}</strong> {t.punctuationDesc}</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 dark:bg-blue-900/40">
              <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
            </div>
            <p className="font-body text-lg text-slate-700 dark:text-slate-100"><strong>{t.writingSkillsTitle}</strong> {t.writingSkillsDesc}</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 dark:bg-blue-900/40">
              <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
            </div>
            <p className="font-body text-lg text-slate-700 dark:text-slate-100"><strong>{t.commonMistakesTitle}</strong> {t.commonMistakesDesc}</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 dark:bg-blue-900/40">
              <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
            </div>
            <p className="font-body text-lg text-slate-700 dark:text-slate-100"><strong>{t.interactivePracticeTitle}</strong> {t.interactivePracticeDesc}</p>
          </div>
        </div>
      </div>

      {/* YouTube Video Section */}
      <div className="max-w-4xl mx-auto mt-8">
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-slate-200 dark:bg-slate-900 dark:border-slate-700">
          <h3 className="font-heading text-3xl font-bold text-slate-900 mb-6 text-center dark:text-white">{t.learnWithVideo}</h3>
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/J7Lvo9Aig9M?rel=0"
              title="English Grammar Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-8 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 md:p-10 rounded-xl shadow-lg border border-blue-100 dark:bg-slate-900 dark:border-slate-700">
        <h3 className="font-heading text-3xl font-bold text-slate-900 mb-6 dark:text-white">{t.whyTypoGrammarFree}</h3>
        <p className="font-body text-lg text-slate-700 leading-relaxed mb-4 dark:text-slate-100">
          {t.whyFreeText1}
        </p>
        <p className="font-body text-lg text-slate-700 leading-relaxed mb-4 dark:text-slate-100">
          {t.whyFreeText2}
        </p>
        <p className="font-body text-lg text-slate-700 leading-relaxed mb-6 dark:text-slate-100">
          {t.whyFreeText3}
        </p>
        <div className="flex justify-center">
          <Link 
            to="/worksheets" 
            className="inline-flex items-center justify-center px-6 py-3 text-lg font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {t.downloadFreeWorksheets}
          </Link>
        </div>
      </div>

        <div className="max-w-3xl mx-auto mt-8">
          <GoogleAd adSlot="6406598038" />
        </div>
    </div>
  );
};

export default HomePage;
