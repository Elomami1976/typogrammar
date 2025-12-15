
import React from 'react';
import { ArticleParagraph, ArticleHeading } from '../components/ArticleComponents';
import GoogleAd from '../components/GoogleAd';

const AboutPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
      <div className="flex justify-between items-start">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight dark:text-slate-100">About TypoGrammar</h1>
      </div>
      
      <ArticleParagraph>
        TypoGrammar was born from a simple idea: learning English grammar shouldn't be complicated or boring. We believe that a clean, beautiful, and intuitive interface can make a world of difference in the learning experience. Our goal is to provide clear, concise, and accurate grammar explanations that are easy to understand and a joy to read.
      </ArticleParagraph>

      <ArticleParagraph>
        English is the most widely spoken language in the world, serving as the primary means of communication in business, education, science, and international relations. Yet for millions of learners around the globe, mastering English grammar can feel like an overwhelming challenge. Traditional textbooks are often dense and difficult to navigate, while many online resources lack the clarity and depth needed for true understanding.
      </ArticleParagraph>

      <ArticleParagraph>
        That's where TypoGrammar comes in. We've created a platform that combines rigorous grammatical accuracy with modern web design principles to deliver an exceptional learning experience. Every article, example, and explanation has been carefully crafted to help you not just memorize rules, but truly understand how English works.
      </ArticleParagraph>

      <ArticleHeading>Our Mission</ArticleHeading>
      <ArticleParagraph>
        Our mission is to empower learners to communicate more effectively and confidently in English. We aim to be a reliable and friendly guide on your journey to mastering the intricacies of the English language. Whether you're a non-native speaker working to improve your fluency, a student preparing for standardized tests, or a professional looking to polish your business writing, TypoGrammar provides the resources you need to succeed.
      </ArticleParagraph>

      <ArticleParagraph>
        We believe that everyone deserves access to high-quality educational resources, regardless of their location or financial circumstances. That's why TypoGrammar is completely free to use. We're supported by advertising, which allows us to keep our content accessible to learners worldwide while maintaining the quality and depth you'd expect from a premium educational platform.
      </ArticleParagraph>

      <ArticleHeading>Our Philosophy</ArticleHeading>
      <ArticleParagraph>
        <strong>Clarity First:</strong> We break down complex grammar rules into simple, digestible pieces. Our examples are practical and designed to illustrate the concepts in real-world contexts. We avoid unnecessary jargon and explain technical terms whenever they're needed, ensuring that learners at all levels can benefit from our content.
      </ArticleParagraph>
       <ArticleParagraph>
        <strong>Design Matters:</strong> We are passionate about good typography and clean design. A well-presented page reduces cognitive load and helps you focus on what's important: the content. We've carefully chosen fonts, colors, and layouts to create a comfortable reading environment that makes learning feel effortless. Our interface is responsive and works beautifully on all devices, from smartphones to desktop computers.
      </ArticleParagraph>
       <ArticleParagraph>
        <strong>Accessible to All:</strong> This is a free resource for English learners around the globe. Whether you're a student, a professional, or just someone looking to brush up on your skills, TypoGrammar is here to help. We're committed to removing barriers to education and making grammar learning an enjoyable, stress-free experience.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Continuous Improvement:</strong> Language education is constantly evolving, and so are we. We regularly update our content to reflect the latest teaching methodologies and incorporate feedback from our community of learners. We're always adding new topics, refining explanations, and improving our interactive features to serve you better.
      </ArticleParagraph>

      <ArticleHeading>Who We Help</ArticleHeading>
      <ArticleParagraph>
        TypoGrammar serves a diverse community of learners from all walks of life. Our users include English language learners (ESL/EFL students) building foundational skills, university students preparing for academic writing assignments, professionals crafting important business communications, teachers looking for reliable reference materials, and native speakers who want to refine their understanding of grammar rules.
      </ArticleParagraph>

      <ArticleParagraph>
        No matter your background or current level, you'll find valuable resources here. Our content is structured to accommodate beginners who are just starting their English learning journey, while also providing the depth and nuance that advanced learners need to perfect their skills.
      </ArticleParagraph>

      <ArticleHeading>Our Commitment to You</ArticleHeading>
      <ArticleParagraph>
        We're committed to maintaining the highest standards of accuracy and clarity in all our content. Every article is written and reviewed by experienced educators who understand both the technical aspects of English grammar and the challenges that learners face. We regularly update our materials to ensure they remain current and relevant.
      </ArticleParagraph>

      <ArticleParagraph>
        Thank you for choosing TypoGrammar as your learning companion. We're honored to be part of your English learning journey and look forward to supporting your success. If you have questions, suggestions, or feedback, we'd love to hear from you. Your input helps us create better resources for the entire TypoGrammar community.
      </ArticleParagraph>

      <div className="mt-8">
        <GoogleAd adSlot="6406598038" />
      </div>
    </article>
  );
};

export default AboutPage;