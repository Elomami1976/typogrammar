import React from 'react';
import usePageMetadata from '../hooks/usePageMetadata';
import SchemaMarkup from '../components/SchemaMarkup';
import { Link } from 'react-router-dom';

const WhatIsTypogrammarPage: React.FC = () => {
  usePageMetadata({
    title: 'What Is TypoGrammar? | Free Academic English Platform for IELTS & TOEFL',
    description: 'TypoGrammar is a free academic English learning platform that helps IELTS and TOEFL learners improve grammar accuracy, vocabulary, and writing clarity.',
    canonical: 'https://typogrammar.com/what-is-typogrammar',
    ogTitle: 'What Is TypoGrammar? | Free Academic English Platform for IELTS & TOEFL',
    ogDescription: 'TypoGrammar is a free academic English learning platform that helps IELTS and TOEFL learners improve grammar accuracy, vocabulary, and writing clarity.',
    ogType: 'website',
    ogUrl: 'https://typogrammar.com/what-is-typogrammar',
  });

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is TypoGrammar?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TypoGrammar is a free academic English learning platform designed to help IELTS and TOEFL learners improve grammar accuracy, academic vocabulary, and writing clarity.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is TypoGrammar free to use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TypoGrammar provides free access to its educational content and learning resources, with a focus on clarity, accuracy, and learner-first design.',
        },
      },
    ],
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={faqSchema} />

      <article className="prose prose-lg dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100">
          What Is TypoGrammar?
        </h1>

        <p className="text-lg mb-8 text-slate-700 dark:text-slate-300">
          TypoGrammar is a free academic English learning platform designed to help IELTS and TOEFL learners improve grammar accuracy, academic vocabulary, and writing clarity.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">
            What Does TypoGrammar Do?
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            TypoGrammar provides structured grammar explanations, vocabulary resources by proficiency level, and exam-focused guidance to support learners preparing for academic and professional English use.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">
            Who Is TypoGrammar For?
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-lg text-slate-700 dark:text-slate-300">
            <li>IELTS candidates</li>
            <li>TOEFL candidates</li>
            <li>Academic English learners</li>
            <li>Non-native English speakers</li>
            <li>Students preparing for study or work abroad</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">
            What Does TypoGrammar Focus On?
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-lg text-slate-700 dark:text-slate-300">
            <li>Grammar accuracy and sentence structure</li>
            <li>Academic vocabulary by IELTS band</li>
            <li>Clear and coherent academic writing</li>
            <li>Common English usage mistakes</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">
            Is TypoGrammar Free?
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            TypoGrammar provides free access to its educational content and learning resources, with a focus on clarity, accuracy, and learner-first design.
          </p>
        </section>

        <section className="mb-10 border-t border-slate-200 dark:border-slate-700 pt-8">
          <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">
            Explore TypoGrammar
          </h2>
          <ul className="space-y-2 text-lg">
            <li>
              <Link 
                to="/ielts" 
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                IELTS Preparation Resources
              </Link>
            </li>
            <li>
              <Link 
                to="/ielts/vocabulary" 
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Academic Vocabulary by IELTS Band
              </Link>
            </li>
            <li>
              <Link 
                to="/ielts/writing" 
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                IELTS Writing Guidance
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
};

export default WhatIsTypogrammarPage;
