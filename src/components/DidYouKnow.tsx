
import React, { useState, useEffect } from 'react';
import { DID_YOU_KNOW_FACTS } from '../constants/didYouKnowFacts';

const DidYouKnow: React.FC = () => {
  const [fact, setFact] = useState('');

  useEffect(() => {
    // Select a random fact when the component mounts
    const randomIndex = Math.floor(Math.random() * DID_YOU_KNOW_FACTS.length);
    setFact(DID_YOU_KNOW_FACTS[randomIndex]);
  }, []);

  if (!fact) {
    return null;
  }

  return (
    <div className="p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg mt-4 dark:bg-slate-800 dark:border-blue-500">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <div>
          <h4 className="font-heading text-base font-bold text-slate-700 dark:text-slate-300">Did You Know?</h4>
          <p className="font-body text-slate-600 text-sm mt-1 dark:text-slate-400">
            {fact}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DidYouKnow;