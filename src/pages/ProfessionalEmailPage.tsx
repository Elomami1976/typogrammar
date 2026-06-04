import React from 'react';
import GoogleAd from '../components/GoogleAd';
import { ArticleParagraph, ArticleHeading, InlineCode, CodeBlock, ExampleList, BulletList } from '../components/ArticleComponents';
import usePageMetadata from '../hooks/usePageMetadata';
import { Link } from 'react-router-dom';
import SchemaMarkup from '../components/SchemaMarkup';

const ProfessionalEmailPage: React.FC = () => {
  const pageUrl = 'https://typogrammar.com/writing/how-to-write-a-professional-email';
  const lastUpdated = '2026-02-25';
  const datePublished = '2025-04-15';

  // FAQ data for schema and display
  const faqData = [
    {
      question: 'How do you start a professional email?',
      answer: 'Start a professional email with a clear subject line, followed by a formal salutation like "Dear Mr./Ms. [Last Name]," and then state your purpose in the first sentence.'
    },
    {
      question: 'What is the best closing for a professional email?',
      answer: 'The best professional email closings include "Sincerely," "Best regards," "Kind regards," or "Thank you," followed by your full name and contact information.'
    },
    {
      question: 'How long should a professional email be?',
      answer: 'A professional email should be concise, typically 3-5 short paragraphs. State your purpose early, use clear language, and keep each paragraph to 2-3 sentences for easy readability.'
    },
    {
      question: 'What should I avoid in a professional email?',
      answer: 'Avoid: casual language ("Hey," "What\'s up"), typos and grammar errors, all caps (perceived as shouting), overly long emails, vague subject lines, and sharing confidential info insecurely.'
    },
    {
      question: 'How do you write a professional email to a professor or boss?',
      answer: 'Use a formal salutation (Dear Professor/Mr./Ms.), state your purpose clearly, be respectful and concise, provide context if needed, thank them for their time, and use a professional closing.'
    },
    {
      question: 'Should I use "Dear" or "Hi" in a professional email?',
      answer: '"Dear" is more formal and appropriate for initial contact, superiors, or formal situations. "Hi" is acceptable for colleagues you know well or in less formal workplace cultures. When in doubt, use "Dear."'
    }
  ];
  
  usePageMetadata({
    title: 'How to Write a Professional Email (2026): Templates, Examples & Tips | Typogrammar',
    description: 'Master professional email writing with clear subject lines, proper salutations, and polite closings. Includes templates and examples for business communication.',
    ogTitle: 'How to Write a Professional Email (2026): Templates, Examples & Tips',
    ogDescription: 'Master professional email writing with clear subject lines, proper salutations, and polite closings. Includes templates and examples for business communication.',
    ogType: 'article',
    ogUrl: pageUrl,
  });

  return (
    <>
    {/* GEO Meta Tags */}
    <meta name="geo.region" content="Global" />
    <meta name="language" content="English" />
    
    {/* Article Schema */}
    <SchemaMarkup
      type="Article"
      data={{
        headline: 'How to Write a Professional Email (2026): Templates, Examples & Tips',
        description: 'Master professional email writing with clear subject lines, proper salutations, and polite closings. Includes templates and examples for business communication.',
        author: {
          '@type': 'Organization',
          name: 'Typogrammar',
          url: 'https://typogrammar.com/about'
        },
        publisher: {
          '@type': 'Organization',
          name: 'Typogrammar',
          url: 'https://typogrammar.com'
        },
        datePublished: datePublished,
        dateModified: lastUpdated,
        mainEntityOfPage: pageUrl
      }}
    />
    
    {/* FAQ Schema */}
    <SchemaMarkup
      type="FAQPage"
      data={{
        mainEntity: faqData.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      }}
    />
    
    <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
      {/* AI-Friendly Definition Box */}
      <div className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-slate-700 dark:to-slate-600 border-l-4 border-blue-600 p-6 rounded-lg mb-8 shadow-md">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Definition:</h2>
        <p className="text-slate-800 dark:text-slate-200 leading-relaxed">
          A professional email is a formal written communication used in business contexts, featuring a clear subject line, appropriate salutation, concise body, and polite closing.
        </p>
      </div>
      
      <div className="flex justify-between items-start">
        <div>
          <p className="font-body text-base font-semibold text-blue-600 mb-4 dark:text-blue-400">Writing Skills</p>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight dark:text-slate-100">How to Write a Professional Email (2026)</h1>
          
          {/* E-E-A-T Signals */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-6">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/></svg>
              By <Link to="/about/" className="text-blue-600 dark:text-blue-400 hover:underline">Typogrammar Team</Link>
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/></svg>
              Updated: {lastUpdated}
            </span>
            <span className="flex items-center gap-1 text-green-600 dark:text-green-400">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
              Reviewed by Communication Expert
            </span>
          </div>
          
          {/* GEO Optimization */}
          <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg mb-8">
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              This professional email guide is designed for business professionals worldwide, including those in the UK, US, Canada, Australia, UAE, and other regions. We use neutral global English suitable for international business communication.
            </p>
          </div>
        </div>
      </div>

      <ArticleParagraph>
        Writing a professional email is a fundamental skill in today's world. Whether you're contacting a professor, applying for a job, or communicating with colleagues, a well-crafted email can make a significant impact. It reflects your professionalism, attention to detail, and communication skills. This guide will cover the essential components of a professional email.
      </ArticleParagraph>

      <ArticleHeading>1. The Subject Line: Clear and Concise</ArticleHeading>
      <ArticleParagraph>
        The subject line is the first thing your recipient sees. It should be informative and brief, giving the reader a clear idea of the email's content.
      </ArticleParagraph>
      <BulletList items={[
        <><strong>Be specific:</strong> Instead of "Question", try "Question about the Marketing Report".</>,
        <><strong>Include key information:</strong> If relevant, include dates, names, or reference numbers. Example: "Meeting Confirmation: Project Alpha, Oct 28".</>,
        <><strong>Keep it short:</strong> Aim for under 10 words.</>,
      ]} />
      <ExampleList items={['Marketing Internship Application - John Doe', 'Follow-up on our meeting last Tuesday', 'Urgent: Update on the Q4 Budget']} />

      <ArticleHeading>2. The Salutation: Formal and Respectful</ArticleHeading>
      <ArticleParagraph>
        Always start with a polite greeting. The level of formality depends on your relationship with the recipient.
      </ArticleParagraph>
      <BulletList items={[
          <><strong>Formal:</strong> Use "Dear Mr./Ms./Dr. [Last Name]," when you don't know the person well or they are in a position of authority.</>,
          <><strong>Slightly less formal:</strong> "Dear [First Name]," is acceptable if you have an established relationship.</>,
          <><strong>Avoid overly casual greetings:</strong> Steer clear of "Hey," or "Hi there," in initial or formal correspondence.</>,
          <><strong>If you don't know the name:</strong> Use a general salutation like "Dear Hiring Manager," or "To Whom It May Concern:".</>,
      ]} />

      <ArticleHeading>3. The Body: Get to the Point</ArticleHeading>
      <ArticleParagraph>
        The body of your email should be clear, concise, and easy to read.
      </ArticleParagraph>
      <BulletList items={[
        <><strong>State your purpose early:</strong> In the first sentence, explain why you are writing. "I am writing to inquire about..." or "I am writing to follow up on...".</>,
        <><strong>Use short paragraphs:</strong> Break your text into small paragraphs of 2-3 sentences each. This improves readability.</>,
        <><strong>Be clear and direct:</strong> Avoid jargon and overly complex sentences. State what you need or what you are offering clearly.</>,
        <><strong>Proofread:</strong> Always check for grammar, spelling, and punctuation errors before sending. An error-free email shows professionalism.</>,
      ]} />

      <ArticleHeading>4. The Closing and Signature</ArticleHeading>
      <ArticleParagraph>
        End your email with a polite closing, followed by your name and contact information.
      </ArticleParagraph>
       <BulletList items={[
        <><strong>Professional Closings:</strong> "Sincerely," "Best regards," "Kind regards," or "Thank you," are all safe choices.</>,
        <><strong>Your Name:</strong> Use your full name.</>,
        <><strong>Signature Block:</strong> Include your title, company (if applicable), and phone number. This makes it easy for the recipient to contact you.</>,
      ]} />

      <ArticleHeading>Professional Email Template</ArticleHeading>
      <CodeBlock>{`Subject: [Clear and concise subject]

Dear [Mr./Ms./Dr. Last Name],

[First sentence: State the purpose of your email clearly.]

[Second paragraph: Provide necessary details, background, or context. Keep it brief and organized.]

[Third paragraph: Clearly state your request, question, or the action you want the recipient to take.]

Thank you for your time and consideration.

Best regards,

[Your Full Name]
[Your Title/Position]
[Your Phone Number (Optional)]
[Your LinkedIn Profile URL (Optional)]`}</CodeBlock>
      
      {/* Visible FAQ Section */}
      <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
        <ArticleHeading>Frequently Asked Questions About Professional Emails</ArticleHeading>
        <div className="space-y-6 mt-6">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-6 border border-slate-200 dark:border-slate-600">
              <h3 className="font-heading text-xl font-bold text-slate-800 dark:text-slate-200 mb-3">
                {faq.question}
              </h3>
              <ArticleParagraph>{faq.answer}</ArticleParagraph>
            </div>
          ))}
        </div>
      </div>

    </article>
        <div className="mt-8">
          <GoogleAd adSlot="6406598038" />
        </div>
    </>
  );
};

export default ProfessionalEmailPage;