import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import GoogleAd from '../components/GoogleAd';

const ComplexSentencesPDFPage: React.FC = () => {
  usePageMetadata({
    title: '50 Complex Sentences for IELTS PDF (Band 7-9 Examples)',
    description: 'Download our free premium PDF with 50 complex sentences for IELTS. Includes Band 6 vs Band 9 comparison, explanations, and practice exercises.',
    canonical: 'https://typogrammar.com/ielts/50-complex-sentences-for-ielts-pdf/',
    ogTitle: '50 Complex Sentences for IELTS PDF (Band 7-9 Examples)',
    ogDescription: 'Download our free premium PDF with 50 complex sentences for IELTS. Includes Band 6 vs Band 9 comparison, explanations, and practice exercises.',
    ogUrl: 'https://typogrammar.com/ielts/50-complex-sentences-for-ielts-pdf',
    ogImage: 'https://typogrammar.com/images/books/50-Complex-Sentences-for-IELTS.jpg',
    ogType: 'book',
    twitterCard: 'summary_large_image',
    twitterTitle: '50 Complex Sentences for IELTS PDF (Band 7-9 Examples)',
    twitterDescription: 'Download our free premium PDF with 50 complex sentences for IELTS. Includes Band 6 vs Band 9 comparison, explanations, and practice exercises.',
    twitterImage: 'https://typogrammar.com/images/books/50-Complex-Sentences-for-IELTS.jpg',
  });

  useEffect(() => {
    const creativeWorkSchema = {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: '50 Complex Sentences for IELTS PDF',
      description: 'Free premium PDF with 50 advanced complex sentences for IELTS Writing Band 7-9.',
      author: {
        '@type': 'Organization',
        name: 'TypoGrammar',
      },
      fileFormat: 'application/pdf',
      url: 'https://typogrammar.com/ielts/50-complex-sentences-for-ielts-pdf',
    };

    const learningResourceSchema = {
      '@context': 'https://schema.org',
      '@type': 'LearningResource',
      name: '50 Complex Sentences for IELTS PDF',
      learningResourceType: 'ebook',
      about: ['IELTS Complex Sentences', 'Band 7-9 Sentence Structures', 'IELTS Writing preparation', 'Grammatical Range'],
      url: 'https://typogrammar.com/ielts/50-complex-sentences-for-ielts-pdf',
      description: 'Master 50 advanced complex sentence structures for IELTS Writing with Band comparisons and practice exercises.',
    };

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is this PDF suitable for beginners?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. It starts with clear structure explanations.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use these sentences directly in the exam?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You should adapt them to the question topic.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does this help with Writing Task 1?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, especially for process and report descriptions.',
          },
        },
      ],
    };

    const creativeWorkScript = document.createElement('script');
    creativeWorkScript.type = 'application/ld+json';
    creativeWorkScript.text = JSON.stringify(creativeWorkSchema);
    document.head.appendChild(creativeWorkScript);

    const learningScript = document.createElement('script');
    learningScript.type = 'application/ld+json';
    learningScript.text = JSON.stringify(learningResourceSchema);
    document.head.appendChild(learningScript);

    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.text = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    return () => {
      if (creativeWorkScript.parentNode) document.head.removeChild(creativeWorkScript);
      if (learningScript.parentNode) document.head.removeChild(learningScript);
      if (faqScript.parentNode) document.head.removeChild(faqScript);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const faqItems = [
    {
      question: 'Is this PDF suitable for beginners?',
      answer: 'Yes. It starts with clear structure explanations.',
    },
    {
      question: 'Can I use these sentences directly in the exam?',
      answer: 'You should adapt them to the question topic.',
    },
    {
      question: 'Does this help with Writing Task 1?',
      answer: 'Yes, especially for process and report descriptions.',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      {/* Last Updated - GEO Optimization */}
      <div className="text-sm text-slate-500 dark:text-slate-400 mb-4 text-center">
        Last updated: February 2026
      </div>

      {/* HERO SECTION */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 mb-4">
              Free Premium PDF
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-slate-100 mb-6 leading-tight">
              50 Complex Sentences for <span className="text-blue-600 dark:text-blue-400">IELTS</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              Band 7-9 Examples with Explanations
            </p>
            <p className="text-base text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              If you want to achieve Band 7, 8, or 9 in IELTS Writing, mastering complex sentences is essential. This free premium PDF includes 50 high-quality complex sentence models with Band comparisons and practice exercises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <a
                href="/downloads/50_Complex_Sentences_for_IELTS_Premium_TypoGrammar.pdf"
                download
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 text-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Free PDF
              </a>
              <button
                onClick={() => scrollToSection('contents')}
                className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-slate-800 border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-slate-700 transition-all duration-200"
              >
                What's Inside
              </button>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 italic">
              Free download, no signup required.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/images/books/50-Complex-Sentences-for-IELTS.jpg"
              alt="50 Complex Sentences for IELTS PDF Cover - Band 7-9 Examples by TypoGrammar"
              className="rounded-xl shadow-2xl max-w-full h-auto"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>

      {/* WHY COMPLEX SENTENCES MATTER */}
      <section className="mb-16">
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 md:p-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Why Complex Sentences Matter in IELTS
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
            Complex sentences improve your <strong>Grammatical Range and Accuracy</strong>, which counts for <strong>25% of your Writing score</strong>.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse border border-slate-300 dark:border-slate-600">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left">Band</th>
                  <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left">Requirement</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-slate-800">
                  <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 font-semibold">Band 6</td>
                  <td className="border border-slate-300 dark:border-slate-600 px-4 py-3">Some complex sentences</td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-700">
                  <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 font-semibold">Band 7</td>
                  <td className="border border-slate-300 dark:border-slate-600 px-4 py-3">Frequent and mostly error-free complex structures</td>
                </tr>
                <tr className="bg-white dark:bg-slate-800">
                  <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 font-semibold">Band 8-9</td>
                  <td className="border border-slate-300 dark:border-slate-600 px-4 py-3">Wide variety of natural and advanced structures</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            This PDF helps you build that variety.
          </p>
        </div>
      </section>

      {/* WHAT'S INSIDE */}
      <section id="contents" className="mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
          📖 What's Inside the PDF?
        </h2>

        <div className="space-y-6">
          {/* 50 Advanced Complex Sentences */}
          <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-700">
            <h3 className="font-semibold text-xl text-green-900 dark:text-green-200 mb-4">
              ✅ 50 Advanced Complex Sentences
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-3">Organized by:</p>
            <ul className="grid md:grid-cols-2 gap-2">
              {[
                'Cause & Effect',
                'Contrast',
                'Conditionals',
                'Relative Clauses',
                'Time Clauses',
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-700 dark:text-slate-300">
                  <span className="text-green-600 dark:text-green-400 mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Band Comparison Section */}
          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-700">
            <h3 className="font-semibold text-xl text-purple-900 dark:text-purple-200 mb-4">
              ✅ Band Comparison Section
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4">See the difference between:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg border border-red-200 dark:border-red-700">
                <p className="font-semibold text-red-800 dark:text-red-200 mb-2">Band 6:</p>
                <p className="text-red-700 dark:text-red-300 italic">"Many people use cars. It causes pollution."</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg border border-green-200 dark:border-green-700">
                <p className="font-semibold text-green-800 dark:text-green-200 mb-2">Band 9:</p>
                <p className="text-green-700 dark:text-green-300 italic">"Although many people rely on cars for convenience, this dependence significantly contributes to environmental pollution."</p>
              </div>
            </div>
          </div>

          {/* Structure Breakdown */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-700">
            <h3 className="font-semibold text-xl text-blue-900 dark:text-blue-200 mb-4">
              ✅ Structure Breakdown
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-3">Each sentence includes:</p>
            <ul className="space-y-2">
              {[
                'Clause identification',
                'Subordinating conjunction usage',
                'IELTS usage tip',
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-700 dark:text-slate-300">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Section */}
          <div className="bg-teal-50 dark:bg-teal-900/20 rounded-xl p-6 border border-teal-200 dark:border-teal-700">
            <h3 className="font-semibold text-xl text-teal-900 dark:text-teal-200 mb-4">
              ✅ Practice Section
            </h3>
            <p className="text-slate-700 dark:text-slate-300">
              Combine simple sentences into complex ones and check your answers.
            </p>
          </div>
        </div>
      </section>

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>

      {/* DOWNLOAD CTA SECTION */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Download the Free PDF
          </h2>
          <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
            Get instant access to 50 advanced complex sentences with explanations and practice exercises.
          </p>
          <a
            href="/downloads/50_Complex_Sentences_for_IELTS_Premium_TypoGrammar.pdf"
            download
            className="inline-flex items-center justify-center px-10 py-5 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all duration-200 text-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download 50 Complex Sentences PDF
          </a>
          <p className="text-sm text-blue-200 mt-4">
            File: 50_Complex_Sentences_for_IELTS_Premium_TypoGrammar.pdf
          </p>
        </div>
      </section>

      {/* WHO IS THIS FOR */}
      <section className="mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
          👤 Who Is This For?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            'IELTS Academic candidates',
            'IELTS General Training candidates',
            'Students targeting Band 7+',
            'Self-study learners',
            'Writing Task 2 practice students',
          ].map((item, i) => (
            <div key={i} className="flex items-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* HOW TO USE THIS RESOURCE */}
      <section className="mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
          📚 How to Use This Resource
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { step: '1', title: 'Study 5 sentences per day', desc: 'Focus on understanding the structure and usage' },
            { step: '2', title: 'Rewrite using different topics', desc: 'Practice adapting sentences to various IELTS themes' },
            { step: '3', title: 'Insert naturally into Task 2 essays', desc: 'Use them in your practice writing' },
            { step: '4', title: 'Focus on structure, not memorizing', desc: 'Avoid memorizing, understand the patterns' },
          ].map((item, i) => (
            <div key={i} className="flex items-start p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                {item.step}
              </div>
              <div>
                <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100 mb-1">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>

      {/* FAQ SECTION */}
      <section className="mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
          ❓ Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
              <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100 mb-2">
                {item.question}
              </h3>
              <p className="text-slate-700 dark:text-slate-300">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RELATED RESOURCES */}
      <section className="mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
          📚 Related Free Resources
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link
            to="/ielts/grammar-master-book/"
            className="block p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors border border-blue-200 dark:border-blue-800"
          >
            <h3 className="font-semibold text-lg text-blue-900 dark:text-blue-200 mb-2">Grammar Master Book (PDF)</h3>
            <p className="text-sm text-blue-700 dark:text-blue-300">Complete IELTS grammar guide with Band 9 secrets.</p>
          </Link>
          <Link
            to="/ielts/writing-task-2-band-9-essays-book/"
            className="block p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors border border-purple-200 dark:border-purple-800"
          >
            <h3 className="font-semibold text-lg text-purple-900 dark:text-purple-200 mb-2">Band 9 Essays Book (PDF)</h3>
            <p className="text-sm text-purple-700 dark:text-purple-300">Collection of Band 9 model essays for Task 2.</p>
          </Link>
          <Link
            to="/ielts/vocabulary/band-9/"
            className="block p-6 bg-green-50 dark:bg-green-900/20 rounded-xl hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors border border-green-200 dark:border-green-800"
          >
            <h3 className="font-semibold text-lg text-green-900 dark:text-green-200 mb-2">Band 9 Vocabulary</h3>
            <p className="text-sm text-green-700 dark:text-green-300">Advanced vocabulary for top-scoring essays.</p>
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mb-16">
        <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-8 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Ready to Master Complex Sentences?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Download your free premium PDF and start improving your IELTS Writing score today.
          </p>
          <a
            href="/downloads/50_Complex_Sentences_for_IELTS_Premium_TypoGrammar.pdf"
            download
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Free PDF Now
          </a>
        </div>
      </section>

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>
    </div>
  );
};

export default ComplexSentencesPDFPage;
