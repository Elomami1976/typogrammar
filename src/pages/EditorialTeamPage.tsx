import React from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';

const EditorialTeamPage: React.FC = () => {
  usePageMetadata({
    title: 'About Our Team | TypoGrammar Editorial Standards & Authors',
    description: 'Meet the TypoGrammar editorial team. Learn about our content standards, review process, and commitment to accuracy in English grammar education.'
  });

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TypoGrammar",
    "url": "https://typogrammar.com",
    "logo": "https://typogrammar.com/logo.png",
    "description": "Free English grammar learning platform with lessons, IELTS & TOEFL prep, and AI writing tools.",
    "foundingDate": "2024",
    "slogan": "Master English Grammar for Free",
    "areaServed": "Worldwide",
    "knowsAbout": ["English Grammar", "IELTS Preparation", "TOEFL Preparation", "Academic Writing", "ESL Education"],
    "sameAs": []
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Our Team",
    "description": "Meet the TypoGrammar editorial team responsible for creating grammar-focused learning guides.",
    "url": "https://typogrammar.com/about/editorial-team",
    "mainEntity": organizationSchema
  };

  const teamMembers = [
    {
      name: "Lead Content Editor",
      role: "Content Strategy & Quality Assurance",
      experience: "10+ years in ESL curriculum development",
      responsibilities: [
        "Oversees all grammar content accuracy",
        "Develops lesson structures and learning paths",
        "Reviews complex grammar explanations"
      ]
    },
    {
      name: "IELTS & TOEFL Specialist",
      role: "Test Preparation Content",
      experience: "8+ years teaching exam preparation",
      responsibilities: [
        "Creates exam-focused practice materials",
        "Develops scoring insights and strategies",
        "Ensures content aligns with current test formats"
      ]
    },
    {
      name: "Technical Writer",
      role: "Grammar Reference & Documentation",
      experience: "6+ years in technical writing",
      responsibilities: [
        "Writes clear, structured grammar explanations",
        "Creates reference tables and quick guides",
        "Maintains consistency across all content"
      ]
    }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
        <nav className="mb-6 text-slate-600 dark:text-slate-400">
          <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
          {' › '}
          <Link to="/about/" className="hover:text-blue-600 dark:hover:text-blue-400">About</Link>
          {' › '}
          <span className="text-slate-900 dark:text-slate-100">Editorial Team</span>
        </nav>

        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight dark:text-slate-100">
          About the TypoGrammar Editorial Team
        </h1>

        {/* Mission Statement */}
        <section className="mb-10">
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">Our Mission</h2>
            <p className="text-lg text-blue-800 dark:text-blue-200">
              To provide accurate, accessible, and practical English grammar education for learners worldwide-completely free.
            </p>
          </div>

          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
            The TypoGrammar Editorial Team is a group of experienced language educators and content specialists dedicated to creating high-quality English learning resources. Our team combines expertise in grammar instruction, exam preparation, and educational content development.
          </p>
        </section>

        {/* Expertise & Experience */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 pb-2 border-b border-slate-200 dark:border-slate-700">
            Our Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-5">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Grammar Education</h3>
              <p className="text-slate-700 dark:text-slate-300">Deep knowledge of English grammar rules, exceptions, and real-world usage patterns.</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-5">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Test Preparation</h3>
              <p className="text-slate-700 dark:text-slate-300">Understanding of IELTS, TOEFL, and other English proficiency exam formats and requirements.</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-5">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Curriculum Development</h3>
              <p className="text-slate-700 dark:text-slate-300">Experience designing structured learning paths from beginner to advanced levels.</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-5">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2">ESL Teaching</h3>
              <p className="text-slate-700 dark:text-slate-300">Years of hands-on experience teaching English to non-native speakers worldwide.</p>
            </div>
          </div>
        </section>

        {/* Team Roles */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 pb-2 border-b border-slate-200 dark:border-slate-700">
            Team Roles
          </h2>
          <div className="space-y-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">{member.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{member.role}</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">{member.experience}</p>
                <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
                  {member.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Editorial Standards */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 pb-2 border-b border-slate-200 dark:border-slate-700">
            Editorial Standards
          </h2>
          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
            Every piece of content on TypoGrammar follows strict editorial guidelines:
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <span className="text-green-600 dark:text-green-400 font-bold">1</span>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-slate-100">Accuracy First</h3>
                <p className="text-slate-700 dark:text-slate-300">All grammar rules are verified against authoritative sources and standard academic usage.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <span className="text-green-600 dark:text-green-400 font-bold">2</span>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-slate-100">Clear Explanations</h3>
                <p className="text-slate-700 dark:text-slate-300">Complex concepts are broken down into understandable steps with practical examples.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <span className="text-green-600 dark:text-green-400 font-bold">3</span>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-slate-100">Regular Updates</h3>
                <p className="text-slate-700 dark:text-slate-300">Content is reviewed and updated when language standards or exam formats change.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <span className="text-green-600 dark:text-green-400 font-bold">4</span>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-slate-100">Independence</h3>
                <p className="text-slate-700 dark:text-slate-300">TypoGrammar is not affiliated with any testing organization. We provide unbiased educational content.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Review Process */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 pb-2 border-b border-slate-200 dark:border-slate-700">
            Content Review Process
          </h2>
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-6">
            <ol className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                <div>
                  <strong className="text-slate-900 dark:text-slate-100">Research</strong>
                  <p className="text-slate-700 dark:text-slate-300 text-sm">Topic is researched using grammar references and style guides.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                <div>
                  <strong className="text-slate-900 dark:text-slate-100">Draft Creation</strong>
                  <p className="text-slate-700 dark:text-slate-300 text-sm">Content is written with clear explanations and practical examples.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                <div>
                  <strong className="text-slate-900 dark:text-slate-100">Expert Review</strong>
                  <p className="text-slate-700 dark:text-slate-300 text-sm">Content is reviewed for accuracy and clarity by team experts.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                <div>
                  <strong className="text-slate-900 dark:text-slate-100">Publication & Monitoring</strong>
                  <p className="text-slate-700 dark:text-slate-300 text-sm">Content is published and monitored for user feedback and updates.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* Disclaimer */}
        <footer className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-700">
          <p className="text-sm text-slate-600 dark:text-slate-400 italic mb-4">
            TypoGrammar is an independent educational platform. All trademarks (IELTS, TOEFL, etc.) belong to their respective owners. We are not affiliated with ETS, British Council, IDP, or any testing organization.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link to="/about/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
              About TypoGrammar
            </Link>
            <Link to="/contact/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
              Contact Us
            </Link>
            <Link to="/privacy-policy/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
              Privacy Policy
            </Link>
          </div>
        </footer>
      </article>
    </>
  );
};

export default EditorialTeamPage;
