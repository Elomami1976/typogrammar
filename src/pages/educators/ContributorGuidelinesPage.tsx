import React from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../../hooks/usePageMetadata';
import EducatorsBanner from '../../components/educators/EducatorsBanner';
import SectionHeading from '../../components/educators/SectionHeading';
import EducatorsBreadcrumb from '../../components/educators/EducatorsBreadcrumb';

const SITE = 'https://typogrammar.com';
const CONTACT_EMAIL = 'contact@typogrammar.com';

const Card: React.FC<{
  title: string;
  intent?: 'allow' | 'deny' | 'neutral';
  children: React.ReactNode;
}> = ({ title, intent = 'neutral', children }) => {
  const accent =
    intent === 'allow'
      ? 'border-l-4 border-green-600'
      : intent === 'deny'
      ? 'border-l-4 border-red-600'
      : 'border-l-4 border-slate-900 dark:border-slate-100';
  return (
    <div
      className={`flex flex-col bg-white p-5 shadow-sm dark:bg-slate-800/40 ${accent} rounded-r-xl border border-slate-200 dark:border-slate-700`}
    >
      <h3 className="font-heading text-base font-bold text-slate-900 dark:text-slate-100">
        {title}
      </h3>
      <div className="mt-2 font-body text-sm text-slate-700 dark:text-slate-300">
        {children}
      </div>
    </div>
  );
};

const ContributorGuidelinesPage: React.FC = () => {
  usePageMetadata({
    title: 'Contributor Guidelines | TypoGrammar Educators Network',
    description:
      'Editorial standards, originality and AI policy, article requirements, and the submission process for the TypoGrammar Educators Network.',
    ogType: 'article',
    twitterCard: 'summary_large_image',
  });

  return (
    <div className="mx-auto max-w-4xl">
      <EducatorsBreadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Educators Network', href: '/educators/' },
          { label: 'Contributor Guidelines' },
        ]}
      />

      <EducatorsBanner
        compact
        eyebrow="Editorial policy"
        title="Contributor Guidelines"
        subtitle="What we publish, how we publish it, and how to submit your article to the TypoGrammar Educators Network."
      />

      {/* Originality */}
      <section className="mb-10">
        <SectionHeading
          eyebrow="01 - Originality"
          title="Originality Policy"
        />
        <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800/40">
          <ul className="space-y-2 font-body text-base text-slate-700 dark:text-slate-300">
            <li className="flex gap-2">
              <span aria-hidden="true" className="mt-1 text-red-600">▸</span>
              Articles must be original - written by you for the network.
            </li>
            <li className="flex gap-2">
              <span aria-hidden="true" className="mt-1 text-red-600">▸</span>
              They must not be already published elsewhere (including your own
              blog or LinkedIn long-form posts).
            </li>
            <li className="flex gap-2">
              <span aria-hidden="true" className="mt-1 text-red-600">▸</span>
              The article must reflect your professional expertise and lived
              teaching, training, examining, or research experience.
            </li>
          </ul>
        </div>
      </section>

      {/* AI Policy */}
      <section className="mb-10">
        <SectionHeading
          eyebrow="02 - AI policy"
          title="What AI tools you can and can't use"
        />
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="Allowed" intent="allow">
            <ul className="space-y-1.5">
              <li>· Grammar correction</li>
              <li>· Proofreading</li>
              <li>· Spelling correction</li>
              <li>· Readability improvements</li>
            </ul>
          </Card>
          <Card title="Not allowed" intent="deny">
            <ul className="space-y-1.5">
              <li>· Fully AI-generated articles</li>
              <li>· AI-generated "expertise"</li>
              <li>· AI-written personal experiences</li>
            </ul>
          </Card>
        </div>
        <p className="mt-4 font-body text-sm text-slate-600 dark:text-slate-400">
          We accept articles where AI tools polished <em>your</em> writing. We
          reject articles where AI tools generated the substance.
        </p>
      </section>

      {/* Article Requirements */}
      <section className="mb-10">
        <SectionHeading
          eyebrow="03 - Requirements"
          title="Article Requirements"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { k: 'Length', v: '800 - 1,500 words' },
            { k: 'Tone', v: 'Semi-formal' },
            { k: 'Style', v: 'Reader-friendly' },
            { k: 'Value', v: 'Practical insights' },
            { k: 'Voice', v: 'Author-written' },
            { k: 'Outcome', v: 'Clear educational value' },
          ].map((item) => (
            <div
              key={item.k}
              className="rounded-xl border border-slate-200 bg-white p-4 text-center dark:border-slate-700 dark:bg-slate-800/40"
            >
              <p className="font-heading text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-500">
                {item.k}
              </p>
              <p className="mt-1 font-body text-base font-semibold text-slate-900 dark:text-slate-100">
                {item.v}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Submission Process */}
      <section className="mb-10">
        <SectionHeading
          eyebrow="04 - Submission"
          title="Submission Process"
        />
        <div className="rounded-2xl border border-slate-900 bg-slate-900 p-6 text-white shadow-lg dark:border-slate-700 md:p-8">
          <ol className="space-y-4 font-body text-base">
            <li className="flex gap-3">
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-bold">1</span>
              <span>
                Prepare your article as a single <strong>PDF file</strong>.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-bold">2</span>
              <span>
                Attach your author information: full name, professional title,
                short biography, profile photo (400×400 minimum), LinkedIn URL,
                and optional personal website URL.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-bold">3</span>
              <span>
                Email both to{' '}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="underline decoration-red-500 underline-offset-4 hover:text-red-300"
                >
                  {CONTACT_EMAIL}
                </a>{' '}
                with the subject line <em>"Educators Network submission"</em>.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-bold">4</span>
              <span>
                Our editors review every submission. We reply with either an
                acceptance &amp; publication date, light revisions, or a
                respectful decline.
              </span>
            </li>
          </ol>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Educators%20Network%20submission`}
              className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-700"
            >
              Email your submission
            </a>
            <Link
              to="/educators/"
              className="inline-flex items-center gap-2 rounded-lg border border-white/40 bg-transparent px-5 py-2.5 text-sm font-semibold text-white hover:bg-white hover:text-slate-900"
            >
              Back to network
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContributorGuidelinesPage;
