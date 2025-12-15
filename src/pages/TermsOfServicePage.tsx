
import React from 'react';
import GoogleAd from '../components/GoogleAd';
import { ArticleParagraph, ArticleHeading, BulletList } from '../components/ArticleComponents';
import usePageMetadata from '../hooks/usePageMetadata';

const TermsOfServicePage: React.FC = () => {
  usePageMetadata({
    title: 'Terms of Service | TypoGrammar',
    description: 'Read the Terms of Service for using the TypoGrammar website and its resources.'
  });

  return (
    <>
    <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
      <div className="flex justify-between items-start">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight dark:text-slate-100">Terms of Service</h1>
      </div>
      
      <p className="font-body text-slate-500 mb-6 dark:text-slate-400">Last Updated: November 20, 2025</p>

      <ArticleParagraph>
        Welcome to TypoGrammar. By accessing or using our website, you agree to be bound by these Terms of Service ("Terms"). Please read them carefully before using our platform. If you do not agree to these Terms, please do not use TypoGrammar.
      </ArticleParagraph>

      <ArticleParagraph>
        These Terms constitute a legal agreement between you ("User," "you," or "your") and TypoGrammar ("we," "us," or "our"). We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to this page. Your continued use of the site after changes are posted constitutes your acceptance of the revised Terms.
      </ArticleParagraph>

      <ArticleHeading>Acceptance of Terms</ArticleHeading>
      <ArticleParagraph>
        By using TypoGrammar, you represent that you are at least 13 years of age. If you are under 18, you should review these Terms with a parent or guardian to ensure they understand and agree to them on your behalf.
      </ArticleParagraph>

      <ArticleHeading>Description of Service</ArticleHeading>
      <ArticleParagraph>
        TypoGrammar is a free educational platform providing English grammar lessons, examples, quizzes, and interactive learning tools. We offer content on verb tenses, sentence structure, punctuation, writing techniques, reading comprehension, and other aspects of English language learning.
      </ArticleParagraph>

      <ArticleParagraph>
        Our service is provided "as is" and "as available" without any warranties, express or implied. We do not guarantee that our service will be uninterrupted, error-free, or completely secure. We may update, modify, suspend, or discontinue any aspect of our service at any time without prior notice.
      </ArticleParagraph>

      <ArticleHeading>Acceptable Use</ArticleHeading>
      <ArticleParagraph>
        You agree to use TypoGrammar only for lawful, educational purposes. When using our site, you agree NOT to:
      </ArticleParagraph>
      <BulletList items={[
          "Copy, reproduce, distribute, or publicly display our content without permission, except for personal, non-commercial educational use",
          "Attempt to reverse engineer, decompile, or extract source code from our website",
          "Use automated tools, bots, or scripts to scrape, download, or extract content in bulk",
          "Interfere with or disrupt the operation of our website or servers",
          "Attempt to gain unauthorized access to any portion of our site, other users' accounts, or our computer systems",
          "Upload or transmit viruses, malware, or any other harmful code",
          "Use our service for any illegal or unauthorized purpose",
          "Impersonate any person or entity, or falsely state or misrepresent your affiliation with any person or entity",
      ]} />

      <ArticleHeading>Intellectual Property Rights</ArticleHeading>
      <ArticleParagraph>
        All content on TypoGrammar, including but not limited to text, graphics, logos, images, audio clips, code, and software, is the property of TypoGrammar or its content suppliers and is protected by international copyright, trademark, and other intellectual property laws.
      </ArticleParagraph>

      <ArticleParagraph>
        You are granted a limited, non-exclusive, non-transferable license to access and use our content for personal, non-commercial educational purposes. You may view, print, and download content from our site for your own learning, but you may not republish, redistribute, or use our content for commercial purposes without our express written consent.
      </ArticleParagraph>

      <ArticleParagraph>
        Teachers and educators may use our content in classroom settings and may share links to our pages with students, but they may not reproduce substantial portions of our content in textbooks, course materials, or other publications without permission.
      </ArticleParagraph>

      <ArticleHeading>User Content and Feedback</ArticleHeading>
       <ArticleParagraph>
        TypoGrammar does not currently support user-generated content, accounts, or comment systems. However, if you contact us with feedback, suggestions, or error reports, you grant us the right to use that information to improve our service without compensation or attribution.
      </ArticleParagraph>

      <ArticleHeading>Third-Party Content and Links</ArticleHeading>
      <ArticleParagraph>
        Our website may contain advertisements and links to third-party websites or services. We do not control these third-party sites and are not responsible for their content, privacy practices, or terms of service. Your interactions with third-party advertisers and websites are solely between you and those third parties.
      </ArticleParagraph>

      <ArticleHeading>Limitation of Liability</ArticleHeading>
       <ArticleParagraph>
        To the fullest extent permitted by law, TypoGrammar and its operators, contributors, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
      </ArticleParagraph>
      <BulletList items={[
          "Your access to or use of (or inability to access or use) our service",
          "Any errors, inaccuracies, or omissions in our content",
          "Any reliance on information obtained through our service",
          "Any unauthorized access to or use of our servers or any personal information stored therein",
          "Any interruption or cessation of transmission to or from our service",
      ]} />

      <ArticleParagraph>
        While we strive to provide accurate and helpful educational content, we do not guarantee the accuracy, completeness, or usefulness of any information on our site. You are solely responsible for your use of our content and should verify critical information with additional authoritative sources.
      </ArticleParagraph>

      <ArticleHeading>Disclaimer of Warranties</ArticleHeading>
      <ArticleParagraph>
        TypoGrammar is provided on an "as is" and "as available" basis without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that our service will meet your requirements, be uninterrupted, timely, secure, or error-free.
      </ArticleParagraph>

      <ArticleHeading>Indemnification</ArticleHeading>
      <ArticleParagraph>
        You agree to indemnify, defend, and hold harmless TypoGrammar and its operators, contributors, and affiliates from any claims, liabilities, damages, losses, and expenses (including reasonable attorneys' fees) arising out of or related to your use of our service or violation of these Terms.
      </ArticleParagraph>

      <ArticleHeading>Governing Law</ArticleHeading>
       <ArticleParagraph>
        These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which TypoGrammar operates, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of our service shall be resolved in the courts of that jurisdiction.
      </ArticleParagraph>

      <ArticleHeading>Severability</ArticleHeading>
      <ArticleParagraph>
        If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect. The invalid or unenforceable provision shall be replaced with a valid provision that most closely reflects the intent of the original provision.
      </ArticleParagraph>

       <ArticleHeading>Contact Information</ArticleHeading>
       <ArticleParagraph>
        If you have any questions about these Terms of Service or need to report a violation, please contact us at <a href="mailto:contact@typogrammar.com" className="text-blue-600 hover:underline font-semibold dark:text-blue-400">contact@typogrammar.com</a>. We take violations seriously and will investigate all reports.
      </ArticleParagraph>

      <ArticleParagraph>
        Thank you for using TypoGrammar responsibly and helping us maintain a valuable educational resource for learners worldwide.
      </ArticleParagraph>
    </article>
        <div className="mt-8">
          <GoogleAd adSlot="6406598038" />
        </div>
    </>
  );
};

export default TermsOfServicePage;
