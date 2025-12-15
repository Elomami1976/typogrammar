import React from 'react';
import GoogleAd from '../components/GoogleAd';
import { ArticleParagraph, ArticleHeading, InlineCode, CodeBlock, ExampleList, BulletList } from '../components/ArticleComponents';
import usePageMetadata from '../hooks/usePageMetadata';

const ProfessionalEmailPage: React.FC = () => {
  usePageMetadata({
    title: 'How to Write a Professional Email | TypoGrammar',
    description: 'Master professional email writing with clear subject lines, proper salutations, concise body paragraphs, and polite closings. Examples and tips for business communication.'
  });

  return (
    <>
    <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
      <div className="flex justify-between items-start">
        <div>
          <p className="font-body text-base font-semibold text-blue-600 mb-4 dark:text-blue-400">Writing Skills</p>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight dark:text-slate-100">How to Write a Professional Email</h1>
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

    </article>
        <div className="mt-8">
          <GoogleAd adSlot="6406598038" />
        </div>
    </>
  );
};

export default ProfessionalEmailPage;