
import React from 'react';
import GoogleAd from '../components/GoogleAd';
import { ArticleParagraph, ArticleHeading } from '../components/ArticleComponents';

const ContactPage: React.FC = () => {
  return (
    <>
    <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
      <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight dark:text-slate-100">Contact Us</h1>
      
      <ArticleParagraph>
        We'd love to hear from you! Whether you have a question about English grammar, a suggestion for a new topic, feedback on existing content, or have found an error that needs correction, please don't hesitate to reach out. Your feedback is invaluable in helping us improve TypoGrammar for everyone.
      </ArticleParagraph>

      <ArticleParagraph>
        TypoGrammar is built by learners, for learners. We believe that the best educational resources are those shaped by the people who use them. Every email we receive helps us understand what's working well and where we can do better.
      </ArticleParagraph>

      <ArticleHeading>Why Contact Us?</ArticleHeading>
      <ArticleParagraph>
        Here are some reasons you might want to get in touch:
      </ArticleParagraph>
      <ul className="font-body text-slate-700 leading-relaxed mb-6 dark:text-slate-300 space-y-2 list-disc list-inside">
        <li><strong>Questions about grammar:</strong> If you have a specific grammar question that isn't covered in our articles, we'll do our best to help or point you to the right resource.</li>
        <li><strong>Topic suggestions:</strong> Is there a grammar topic you'd like to see covered? Let us know and we'll add it to our content roadmap.</li>
        <li><strong>Error reports:</strong> Spotted a typo, grammatical error, or factual mistake? We appreciate your eagle eyes and will fix it promptly.</li>
        <li><strong>Technical issues:</strong> Experiencing problems with the site, quizzes, or progress tracking? We want to know so we can resolve it.</li>
        <li><strong>Partnership inquiries:</strong> Teachers, educational institutions, or content creators interested in collaborating can reach out to discuss opportunities.</li>
        <li><strong>General feedback:</strong> We welcome all constructive feedback about the design, usability, content quality, or any other aspect of TypoGrammar.</li>
      </ul>

      <ArticleHeading>Get in Touch</ArticleHeading>
      <ArticleParagraph>
        For all inquiries, please email us at:
      </ArticleParagraph>
      <p className="font-body text-slate-700 leading-relaxed mb-6 text-lg dark:text-slate-300">
        <a href="mailto:contact@typogrammar.com" className="text-blue-600 hover:underline font-semibold text-2xl dark:text-blue-400">
          contact@typogrammar.com
        </a>
      </p>
      <ArticleParagraph>
        When sending an email, please include as much detail as possible. For error reports, let us know which page you were on and what the issue is. For topic suggestions, tell us what you'd like to learn and why it would be helpful. The more information you provide, the better we can assist you.
      </ArticleParagraph>

      <ArticleHeading>Response Time</ArticleHeading>
      <ArticleParagraph>
        We do our best to respond to every message within 2-3 business days. During busy periods, it may take a bit longer, but we promise to get back to you. Thank you for your patience and for being a valued member of the TypoGrammar community!
      </ArticleParagraph>

      <ArticleParagraph>
        We're excited to hear from you and grateful for your support in making TypoGrammar the best free English grammar resource on the web.
      </ArticleParagraph>
    </article>
        <div className="mt-8">
          <GoogleAd adSlot="6406598038" />
        </div>
    </>
  );
};

export default ContactPage;