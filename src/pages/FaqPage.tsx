import React, { useState, useMemo } from 'react';
import GoogleAd from '../components/GoogleAd';
import usePageMetadata from '../hooks/usePageMetadata';

// FAQ data structure with ReactNode for answers
const faqItems: { question: string; answer: React.ReactNode }[] = [
  {
    question: 'What is TypoGrammar?',
    answer: 'TypoGrammar is a free online resource dedicated to helping users master English grammar. We provide clear, beautifully designed articles on a wide range of topics, from verb tenses to punctuation rules, with a strong emphasis on readability and practical examples.'
  },
  {
    question: 'Who is this website for?',
    answer: 'This site is for anyone looking to improve their English grammar skills. This includes English language learners (ESL/EFL students), native speakers who want to brush up on the rules, writers, students, and professionals who need to communicate clearly and effectively.'
  },
  {
    question: 'Do I need to create an account to use TypoGrammar?',
    answer: 'No! TypoGrammar does not require you to create an account, sign up, or provide any personal information. You can browse all our content freely without any registration. Your progress is automatically saved in your browser so you can track your learning journey.'
  },
  {
    question: 'How is my progress tracked? Is my data private?',
    answer: 'Your progress, including completed topics and quiz scores, is saved directly in your own browser using local storage. No data is sent to our servers. This means your learning progress is completely private and accessible only on the device you use.'
  },
  {
    question: 'Can I access my progress on multiple devices?',
    answer: 'Since progress is stored locally in your browser, it won\'t automatically sync across devices. Each device maintains its own separate progress record. This ensures your data never leaves your device and remains completely private.'
  },
  {
    question: 'How can I suggest a new topic or report an error?',
    answer: 'We welcome feedback! If you have a suggestion for a new topic or have found an error, please send us an email. You can find our contact details on the Contact page, which is accessible from the main navigation menu. We appreciate your help in making this resource better.'
  },
  {
    question: 'Are all the resources on this site free?',
    answer: 'Yes, absolutely. Our mission is to make high-quality grammar education accessible to everyone. All articles, lists, quizzes, and guides on TypoGrammar are completely free to use with no hidden fees or premium tiers.'
  },
  {
    question: 'How often is the content updated?',
    answer: 'We are constantly working to expand our content library and refine existing articles. We aim to add new topics and blog posts regularly to keep the information fresh and comprehensive. Check back often for new material!'
  },
  {
    question: 'How do I use the quizzes effectively?',
    answer: 'Our quizzes are designed to reinforce what you\'ve learned from the articles. We recommend reading the relevant article first, then taking the quiz to test your understanding. You can retake quizzes as many times as you like to improve your score and solidify your knowledge.'
  },
  {
    question: 'What grammar topics do you cover?',
    answer: 'We cover a comprehensive range of English grammar topics including verb tenses (present, past, future, perfect, continuous), sentence structure, parts of speech, punctuation, conditionals, passive voice, reported speech, and much more. We also have sections on writing techniques and reading comprehension.'
  },
  {
    question: 'Is TypoGrammar suitable for beginners?',
    answer: 'Absolutely! We design our content to be accessible to learners at all levels. Our explanations start with the basics and use clear, simple language. Examples are practical and easy to understand, making grammar less intimidating for beginners while still providing depth for advanced learners.'
  },
  {
    question: 'Can teachers use TypoGrammar in their classrooms?',
    answer: 'Yes, teachers are welcome to use TypoGrammar as a supplementary resource in their classrooms. You can share links to specific articles with your students or use our content for lesson planning. However, please do not reproduce large portions of our content in your own materials without permission.'
  },
  {
    question: 'Does TypoGrammar work on mobile devices?',
    answer: 'Yes! TypoGrammar is fully responsive and works beautifully on smartphones, tablets, and desktop computers. Our clean design adapts to any screen size, ensuring a comfortable reading experience wherever you are.'
  },
  {
    question: 'Why do you show advertisements?',
    answer: 'TypoGrammar is supported by advertisements, which allow us to keep all our content completely free for users worldwide. The ads help cover the costs of maintaining and improving the site. We\'re committed to keeping ads non-intrusive while maintaining our educational mission.'
  },
  {
    question: 'How can I turn on dark mode?',
    answer: 'Look for the theme toggle button (usually a sun/moon icon) in the site header. Clicking it will switch between light and dark themes. Your preference is saved automatically in your browser so the site remembers your choice for future visits.'
  },
  {
    question: 'Are there any downloadable resources?',
    answer: 'Currently, our content is designed for online use. However, you can print individual articles from your browser if you need offline reference materials. We\'re considering adding downloadable study guides in the future based on user feedback.'
  },
  {
    question: 'What makes TypoGrammar different from other grammar websites?',
    answer: 'TypoGrammar stands out through its combination of design excellence, clarity, and accessibility. We prioritize beautiful typography, clean layouts, and user-friendly navigation. Our explanations are concise yet comprehensive, and everything is completely free with no paywalls or account requirements.'
  },
  {
    question: 'How accurate is the grammar information on TypoGrammar?',
    answer: 'We take accuracy very seriously. All our content is carefully written and reviewed to ensure it follows standard English grammar rules and conventions. We rely on authoritative sources and established grammar guides. If you ever spot an error, please let us know so we can correct it promptly.'
  }
];

const FaqItem: React.FC<{
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-200 dark:border-slate-700">
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full py-5 px-2 text-left font-heading text-xl font-semibold text-slate-800 dark:text-slate-200"
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <div className="flex-shrink-0 ml-4">
          <svg
            className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-600 dark:text-blue-500' : 'text-slate-400'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
           <div className="pb-5 px-2 font-body text-slate-600 text-lg leading-relaxed dark:text-slate-400">
             {answer}
           </div>
        </div>
      </div>
    </div>
  );
};


const FaqPage: React.FC = () => {
  usePageMetadata({
    title: 'FAQ – Frequently Asked Questions About TypoGrammar',
    description: 'Find answers to common questions about TypoGrammar. Learn how to use our platform, track your progress, access quizzes, and improve your English grammar skills. Free and no registration required.'
  });

  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState('');

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = useMemo(() => {
    if (!searchTerm) {
      return faqItems;
    }
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    return faqItems.filter(
      item =>
        item.question.toLowerCase().includes(lowercasedSearchTerm) ||
        (typeof item.answer === 'string' && item.answer.toLowerCase().includes(lowercasedSearchTerm))
    );
  }, [searchTerm]);

  return (
    <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
      <div className="text-center mb-12">
        <h1 className="font-heading text-5xl font-extrabold text-slate-900 mb-4 tracking-tight dark:text-slate-100">Frequently Asked Questions</h1>
        <p className="font-body text-xl text-slate-600 max-w-2xl mx-auto dark:text-slate-400">
          Have a question? We're here to help.
        </p>
      </div>

      <div className="mb-10">
        <input
          type="search"
          placeholder="Search questions..."
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-body text-lg transition-shadow duration-200 shadow-sm dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200 dark:focus:ring-blue-500 dark:placeholder-slate-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search frequently asked questions"
        />
      </div>

      <div>
        {filteredFaqs.length > 0 ? (
      <>
      <div className="max-w-4xl mx-auto mt-8">
        <GoogleAd adSlot="6406598038" />
      </div>
      {filteredFaqs.map((item, index) => (
            <FaqItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
      </>
        ) : (
          <div className="text-center py-12 text-slate-500 dark:text-slate-400">
            <h3 className="font-heading text-2xl font-bold">No questions found</h3>
            <p className="mt-2 text-lg">Try a different search term.</p>
          </div>
        )}
      </div>
    </article>
  );
};

export default FaqPage;