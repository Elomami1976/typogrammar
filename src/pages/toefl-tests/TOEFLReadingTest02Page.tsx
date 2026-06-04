import React from 'react';
import usePageMetadata from '../../hooks/usePageMetadata';
import TOEFLReadingExamEngine, { TOEFLReadingTest } from '../../components/TOEFLReadingExamEngine';
import testData from '../../quiz-data/toefl-reading-test-02.json';

const TOEFLReadingTest02Page: React.FC = () => {
  usePageMetadata({
    title: 'TOEFL Reading Practice Test 2 (2026 Format, Free) | TypoGrammar',
    description:
      'Free TOEFL iBT Reading practice test 2 in the 2026 format with fresh passages on astronomy, cave art, and behavioral economics. Includes instant scoring, band estimate, and full explanations.',
  });

  return (
    <div className="py-6">
      <TOEFLReadingExamEngine test={testData as unknown as TOEFLReadingTest} />
    </div>
  );
};

export default TOEFLReadingTest02Page;
