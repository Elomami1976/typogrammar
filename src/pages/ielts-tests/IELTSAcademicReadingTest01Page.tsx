import React from 'react';
import usePageMetadata from '../../hooks/usePageMetadata';
import IELTSReadingExamEngine, { IELTSReadingTest } from '../../components/IELTSReadingExamEngine';
import testData from '../../quiz-data/ielts-academic-reading-test-01.json';

const IELTSAcademicReadingTest01Page: React.FC = () => {
  usePageMetadata({
    title: 'IELTS Academic Reading Practice Test 1 (Free, 2026) | TypoGrammar',
    description:
      'Free, full-length IELTS Academic Reading practice test: 3 passages, 40 questions, 60-minute timer, instant scoring with estimated band and detailed explanations for every question.',
  });

  return (
    <div className="py-6">
      <IELTSReadingExamEngine test={testData as IELTSReadingTest} />
    </div>
  );
};

export default IELTSAcademicReadingTest01Page;
