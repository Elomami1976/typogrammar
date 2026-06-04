import React from 'react';
import usePageMetadata from '../../hooks/usePageMetadata';
import TOEFLReadingExamEngine, { TOEFLReadingTest } from '../../components/TOEFLReadingExamEngine';
import testData from '../../quiz-data/toefl-reading-test-01.json';

const TOEFLReadingTest01Page: React.FC = () => {
  usePageMetadata({
    title: 'TOEFL Reading Practice Test 1 (2026 Format, Free) | TypoGrammar',
    description:
      'Free full-length TOEFL iBT Reading practice test in the 2026 format: Complete the Words, two Daily Life passages, and three Academic passages with instant scoring, band estimate, and explanations.',
  });

  return (
    <div className="py-6">
      <TOEFLReadingExamEngine test={testData as unknown as TOEFLReadingTest} />
    </div>
  );
};

export default TOEFLReadingTest01Page;
