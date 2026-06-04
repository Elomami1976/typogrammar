import React from 'react';
import GoogleAd from '../components/GoogleAd';
import { ArticleParagraph, ArticleHeading, BulletList } from '../components/ArticleComponents';
import usePageMetadata from '../hooks/usePageMetadata';

const PrivacyPolicyPage: React.FC = () => {
  usePageMetadata({
    title: 'Privacy Policy | TypoGrammar',
    description: 'Read the TypoGrammar privacy policy: what data we collect, how we use cookies, how analytics and ads work, and your rights as a user.',
    canonical: 'https://typogrammar.com/privacy-policy/',
    ogTitle: 'Privacy Policy | TypoGrammar',
    ogDescription: 'How TypoGrammar handles data, cookies, analytics, and your privacy rights.',
    ogUrl: 'https://typogrammar.com/privacy-policy/',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Privacy Policy | TypoGrammar',
    twitterDescription: 'How TypoGrammar handles data, cookies, analytics, and your privacy rights.'
  });
  return (
    <>
    <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
      <div className="flex justify-between items-start">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight dark:text-slate-100">Privacy Policy</h1>
      </div>
      
      <p className="font-body text-slate-500 mb-6 dark:text-slate-400">Last Updated: May 24, 2026</p>

      <ArticleParagraph>
        Welcome to TypoGrammar ("we," "our," or "us"). We are committed to protecting your privacy and being transparent about how we handle information on our website. This Privacy Policy explains our data collection practices, how we use cookies, and your rights as a user of our educational platform.
      </ArticleParagraph>

      <ArticleParagraph>
        TypoGrammar is designed as a free educational resource focused on helping users learn English grammar. We take your privacy seriously and have structured our platform to minimize data collection while still providing you with an excellent learning experience.
      </ArticleParagraph>

      <ArticleHeading>Information We Collect</ArticleHeading>
      <ArticleParagraph>
        TypoGrammar operates on a privacy-first principle. We minimize data collection wherever possible. You do not need an account to access any of our content.
      </ArticleParagraph>
      <BulletList items={[
          "Browsing our content, quizzes, and grammar articles requires no registration and no personal information.",
          "Your learning progress (completed topics and quiz scores) is stored locally in your browser using HTML5 localStorage and is never transmitted to our servers.",
          "We do not collect your IP address or precise location for our own purposes.",
      ]} />

      <ArticleHeading>Newsletter Subscription Data</ArticleHeading>
      <ArticleParagraph>
        If you choose to subscribe to our newsletter or updates through the subscription form on our website, we collect the following information:
      </ArticleParagraph>
      <BulletList items={[
          "First name and last name",
          "Email address",
          "Phone number (optional — used for SMS updates in your language)",
          "Country of residence (used to send region-specific content in your language)",
      ]} />
      <ArticleParagraph>
        This data is stored securely in our own database hosted on Hostinger servers. We do not sell, rent, or share your personal information with third parties for marketing purposes. Your data is used solely to send you grammar tips, learning resources, and updates relevant to your country and language.
      </ArticleParagraph>
      <ArticleParagraph>
        You may request deletion of your subscription data at any time by emailing us at <a href="mailto:contact@typogrammar.com" className="text-blue-600 hover:underline dark:text-blue-400">contact@typogrammar.com</a>. We will remove your record within 7 business days.
      </ArticleParagraph>

      <ArticleHeading>Cookies and Local Storage</ArticleHeading>
      <ArticleParagraph>
        TypoGrammar uses browser localStorage to save your learning progress, including which topics you've completed and your quiz scores. This data remains entirely on your device and is not sent to our servers. You can clear this data at any time through your browser settings.
      </ArticleParagraph>

      <ArticleParagraph>
        We also use cookies for essential site functionality, such as remembering your dark mode preference. These cookies do not track you across other websites.
      </ArticleParagraph>

      <ArticleHeading>Third-Party Services</ArticleHeading>
      
      <ArticleParagraph>
        <strong>Google AdSense:</strong> This website displays advertisements through Google AdSense to keep our content free. Google may use cookies and web beacons to collect information about your visits to this and other websites in order to provide advertisements about goods and services of interest to you. Google's use of advertising cookies enables it and its partners to serve ads based on your visits to our site and/or other sites on the Internet.
      </ArticleParagraph>

      <ArticleParagraph>
        You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-blue-600 hover:underline dark:text-blue-400" target="_blank" rel="noopener noreferrer">Google's Ads Settings</a>. Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting <a href="http://www.aboutads.info/choices/" className="text-blue-600 hover:underline dark:text-blue-400" target="_blank" rel="noopener noreferrer">www.aboutads.info</a>.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Google Analytics:</strong> We use Google Analytics to understand how visitors use our site. This helps us improve our content and user experience. Google Analytics collects information anonymously and reports website trends without identifying individual visitors. You can learn more about Google's privacy practices at <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline dark:text-blue-400" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>TypoGrammar AI Chatbot:</strong> Our website includes an AI-powered chatbot assistant to help answer grammar questions. The chatbot processes your queries to generate responses but does not store your conversation history on our servers beyond the active session. Please do not submit sensitive personal information through the chatbot.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>TypoGrammar Chrome Extension:</strong> If you use our Chrome extension, it operates as a standalone tool to assist with grammar on the web. The extension does not collect or transmit personal data to our servers. Any preferences set within the extension are stored locally in your browser.
      </ArticleParagraph>

      <ArticleHeading>How We Use Information</ArticleHeading>
      <ArticleParagraph>
        The locally stored progress data in your browser is used solely to enhance your learning experience by tracking your advancement through our content. For subscribers, the information you provide through our subscription form is used to:
      </ArticleParagraph>
      <BulletList items={[
          "Send grammar tips, lessons, and educational updates by email",
          "Send SMS updates tailored to your country and preferred language (if phone number provided)",
          "Improve the relevance of content we share based on regional language preferences",
      ]} />

      <ArticleParagraph>
        Information collected by third-party services like Google AdSense and Google Analytics is governed by their respective privacy policies. We do not have access to or control over the cookies used by these third parties.
      </ArticleParagraph>

      <ArticleHeading>Your Rights and Choices</ArticleHeading>
      <ArticleParagraph>
        You have several options to control your data:
      </ArticleParagraph>
      <BulletList items={[
          "You can clear your locally stored progress data at any time by clearing your browser's localStorage for our domain.",
          "You can disable cookies in your browser settings, though this may affect some site functionality.",
          "You can opt out of personalized advertising through Google's Ads Settings or use browser extensions that block advertising cookies.",
          "You can use private/incognito browsing mode to prevent any local data storage.",
          "If you have subscribed to our newsletter, you may request complete deletion of your personal data by emailing contact@typogrammar.com at any time.",
      ]} />

      <ArticleHeading>Data Security</ArticleHeading>
      <ArticleParagraph>
        Since we do not collect or store personal information on our servers, there is minimal risk to your privacy from our platform. Your progress data stored locally in your browser is as secure as your device and browser security settings.
      </ArticleParagraph>

      <ArticleHeading>Children's Privacy</ArticleHeading>
      <ArticleParagraph>
        TypoGrammar is designed for general audiences and can be used by learners of all ages. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can take appropriate action.
      </ArticleParagraph>

      <ArticleHeading>Changes to This Privacy Policy</ArticleHeading>
       <ArticleParagraph>
        We may update this Privacy Policy from time to time to reflect changes in our practices or for legal and regulatory reasons. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically to stay informed about how we protect your privacy.
      </ArticleParagraph>

      <ArticleParagraph>
        If we make material changes to how we handle user data, we will provide notice through a prominent announcement on our website before the changes take effect.
      </ArticleParagraph>

       <ArticleHeading>Contact Us</ArticleHeading>
       <ArticleParagraph>
        If you have any questions about this Privacy Policy, our data practices, or your rights, please contact us at <a href="mailto:contact@typogrammar.com" className="text-blue-600 hover:underline font-semibold dark:text-blue-400">contact@typogrammar.com</a>. We're committed to addressing your concerns and ensuring your privacy is protected.
      </ArticleParagraph>
    </article>
        <div className="mt-8">
          <GoogleAd adSlot="6406598038" />
        </div>
    </>
  );
};

export default PrivacyPolicyPage;