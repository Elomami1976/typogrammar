import React from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading, BulletList } from '../components/ArticleComponents';
import SchemaMarkup from '../components/SchemaMarkup';

const IELTSReadingScoreConversionPage: React.FC = () => {
  usePageMetadata({
    title: 'IELTS Reading Raw Score to Band Conversion: Full Table (Academic & General) 2026',
    description: 'What does 27/40 mean in IELTS Reading? Full raw-score-to-band tables for Academic and General Training, with worked examples for 25, 27, 30, 33 and 35 out of 40.',
    canonical: 'https://typogrammar.com/ielts/reading-raw-score-to-band-conversion/',
  });

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does 27 out of 40 mean in IELTS Reading?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '27 out of 40 in IELTS Reading converts to Band 6.5 on the Academic test and Band 5.5 on the General Training test. Academic and General Training use different conversion scales because General Training texts are considered easier, so you need more correct answers for the same band.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many questions do I need right to get Band 7 in IELTS Reading?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'On IELTS Academic Reading you need roughly 30 out of 40 correct answers to achieve Band 7.0. On IELTS General Training Reading you need about 34 out of 40 correct answers for Band 7.0. These thresholds are based on IELTS published guidance and can vary by plus or minus 1 question depending on test difficulty.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many correct answers is Band 8 in IELTS Reading?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Band 8.0 in IELTS Academic Reading requires approximately 35 out of 40 correct answers. In IELTS General Training Reading you need about 38 out of 40 correct answers for Band 8.0.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is IELTS Reading scored the same for Academic and General Training?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Both versions have 40 questions and use the same 0 to 9 band scale, but the raw-score thresholds are different. General Training Reading requires more correct answers at every band because the texts are less academic. Scores cannot be transferred between the two versions.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is 30 out of 40 in IELTS Reading?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '30 out of 40 is Band 7.0 in IELTS Academic Reading and Band 6.0 in IELTS General Training Reading.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is 33 out of 40 in IELTS Reading?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '33 out of 40 is Band 7.5 in IELTS Academic Reading and Band 6.5 in IELTS General Training Reading.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is 35 out of 40 in IELTS Reading?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '35 out of 40 is Band 8.0 in IELTS Academic Reading and Band 7.0 in IELTS General Training Reading.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there negative marking in IELTS Reading?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. IELTS Reading has no negative marking. You should answer every question even if you are not sure, leaving blanks only reduces your raw score.',
        },
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup type="FAQPage" data={faqSchema} />

      <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
        IELTS Reading Raw Score to Band Conversion: Full Table (Academic &amp; General) 2026
      </h1>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-6 rounded-r-lg">
        <h2 className="text-lg font-semibold mb-2 text-blue-900 dark:text-blue-200">Quick Answer</h2>
        <p className="text-blue-800 dark:text-blue-300">
          <strong>27 out of 40 = Band 6.5 (Academic) or Band 5.5 (General Training).</strong> IELTS Reading has 40 questions and a 0-9 band scale. Academic and General Training use different raw-score thresholds: Academic is more generous because the texts are harder, so you need fewer correct answers to hit the same band.
        </p>
      </div>

      <nav className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-6 my-8">
        <h2 className="text-lg font-semibold mb-4 text-slate-800 dark:text-slate-200">On this page</h2>
        <ul className="space-y-2 text-blue-600 dark:text-blue-400 text-sm">
          <li><a href="#academic-table" className="hover:underline">→ Academic Reading conversion table</a></li>
          <li><a href="#general-table" className="hover:underline">→ General Training conversion table</a></li>
          <li><a href="#why-different" className="hover:underline">→ Why Academic and General scores differ</a></li>
          <li><a href="#common-scores" className="hover:underline">→ Common scores explained (25, 27, 30, 33, 35/40)</a></li>
          <li><a href="#how-scoring-works" className="hover:underline">→ How IELTS Reading scoring actually works</a></li>
          <li><a href="#improve" className="hover:underline">→ How to add 3-5 raw marks (one band up)</a></li>
          <li><a href="#faq" className="hover:underline">→ FAQ</a></li>
        </ul>
      </nav>

      <ArticleHeading>What is an IELTS Reading raw score?</ArticleHeading>
      <ArticleParagraph>
        Your IELTS Reading <strong>raw score</strong> is simply the number of questions you answer correctly out of 40. That raw score is then converted to a band score from 0 to 9 using a fixed conversion scale published by IELTS. There is <strong>no negative marking</strong>, wrong answers are treated the same as blanks, so you should answer every question.
      </ArticleParagraph>
      <ArticleParagraph>
        The key thing most candidates get wrong: Academic and General Training use <strong>different</strong> conversion scales. The same raw score produces a lower band on General Training than on Academic. This is deliberate, because the two tests use different source texts.
      </ArticleParagraph>

      <section id="academic-table">
        <ArticleHeading>IELTS Academic Reading: raw score to band (0-40)</ArticleHeading>
        <ArticleParagraph>
          The table below shows how each raw score out of 40 converts to an IELTS Academic Reading band. These thresholds are based on IELTS official guidance and are stable across test versions (occasional ±1 question variation is possible when a specific paper is unusually easy or hard).
        </ArticleParagraph>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-100 dark:bg-slate-800">
              <tr>
                <th className="p-3 border border-slate-300 dark:border-slate-700">Raw score (out of 40)</th>
                <th className="p-3 border border-slate-300 dark:border-slate-700">Academic band</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-3 border border-slate-300 dark:border-slate-700">39-40</td><td className="p-3 border border-slate-300 dark:border-slate-700 font-semibold">9.0</td></tr>
              <tr><td className="p-3 border border-slate-300 dark:border-slate-700">37-38</td><td className="p-3 border border-slate-300 dark:border-slate-700 font-semibold">8.5</td></tr>
              <tr><td className="p-3 border border-slate-300 dark:border-slate-700">35-36</td><td className="p-3 border border-slate-300 dark:border-slate-700 font-semibold">8.0</td></tr>
              <tr><td className="p-3 border border-slate-300 dark:border-slate-700">33-34</td><td className="p-3 border border-slate-300 dark:border-slate-700 font-semibold">7.5</td></tr>
              <tr><td className="p-3 border border-slate-300 dark:border-slate-700">30-32</td><td className="p-3 border border-slate-300 dark:border-slate-700 font-semibold">7.0</td></tr>
              <tr><td className="p-3 border border-slate-300 dark:border-slate-700">27-29</td><td className="p-3 border border-slate-300 dark:border-slate-700 font-semibold">6.5</td></tr>
              <tr><td className="p-3 border border-slate-300 dark:border-slate-700">23-26</td><td className="p-3 border border-slate-300 dark:border-slate-700 font-semibold">6.0</td></tr>
              <tr><td className="p-3 border border-slate-300 dark:border-slate-700">19-22</td><td className="p-3 border border-slate-300 dark:border-slate-700 font-semibold">5.5</td></tr>
              <tr><td className="p-3 border border-slate-300 dark:border-slate-700">15-18</td><td className="p-3 border border-slate-300 dark:border-slate-700 font-semibold">5.0</td></tr>
              <tr><td className="p-3 border border-slate-300 dark:border-slate-700">13-14</td><td className="p-3 border border-slate-300 dark:border-slate-700 font-semibold">4.5</td></tr>
              <tr><td className="p-3 border border-slate-300 dark:border-slate-700">10-12</td><td className="p-3 border border-slate-300 dark:border-slate-700 font-semibold">4.0</td></tr>
              <tr><td className="p-3 border border-slate-300 dark:border-slate-700">8-9</td><td className="p-3 border border-slate-300 dark:border-slate-700 font-semibold">3.5</td></tr>
              <tr><td className="p-3 border border-slate-300 dark:border-slate-700">6-7</td><td className="p-3 border border-slate-300 dark:border-slate-700 font-semibold">3.0</td></tr>
              <tr><td className="p-3 border border-slate-300 dark:border-slate-700">4-5</td><td className="p-3 border border-slate-300 dark:border-slate-700 font-semibold">2.5</td></tr>
              <tr><td className="p-3 border border-slate-300 dark:border-slate-700">3</td><td className="p-3 border border-slate-300 dark:border-slate-700 font-semibold">2.0</td></tr>
              <tr><td className="p-3 border border-slate-300 dark:border-slate-700">2</td><td className="p-3 border border-slate-300 dark:border-slate-700 font-semibold">1.5</td></tr>
              <tr><td className="p-3 border border-slate-300 dark:border-slate-700">1</td><td className="p-3 border border-slate-300 dark:border-slate-700 font-semibold">1.0</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="general-table">
        <ArticleHeading>IELTS General Training Reading: raw score to band (0-40)</ArticleHeading>
        <ArticleParagraph>
          General Training Reading uses a stricter conversion because the texts (notices, workplace documents, short articles) are easier than Academic passages. You need roughly <strong>3-4 more correct answers</strong> than an Academic candidate to reach the same band at the Band 6-7 range.
        </ArticleParagraph>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-100 dark:bg-slate-800">
              <tr>
                <th className="p-3 border border-slate-300 dark:border-slate-700">Raw score (out of 40)</th>
                <th className="p-3 border border-slate-300 dark:border-slate-700">General Training band</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-3 border border-slate-300 dark:border-slate-700">40</td><td className="p-3 border border-slate-300 dark:border-slate-700 font-semibold">9.0</td></tr>
              <tr><td className="p-3 border border-slate-300 dark:border-slate-700">39</td><td className="p-3 border border-slate-300 dark:border-slate-700 font-semibold">8.5</td></tr>
              <tr><td className="p-3 border border-slate-300 dark:border-slate-700">37-38</td><td className="p-3 border border-slate-300 dark:border-slate-700 font-semibold">8.0</td></tr>
              <tr><td className="p-3 border border-slate-300 dark:border-slate-700">36</td><td className="p-3 border border-slate-300 dark:border-slate-700 font-semibold">7.5</td></tr>
              <tr><td className="p-3 border border-slate-300 dark:border-slate-700">34-35</td><td className="p-3 border border-slate-300 dark:border-slate-700 font-semibold">7.0</td></tr>
              <tr><td className="p-3 border border-slate-300 dark:border-slate-700">32-33</td><td className="p-3 border border-slate-300 dark:border-slate-700 font-semibold">6.5</td></tr>
              <tr><td className="p-3 border border-slate-300 dark:border-slate-700">30-31</td><td className="p-3 border border-slate-300 dark:border-slate-700 font-semibold">6.0</td></tr>
              <tr><td className="p-3 border border-slate-300 dark:border-slate-700">27-29</td><td className="p-3 border border-slate-300 dark:border-slate-700 font-semibold">5.5</td></tr>
              <tr><td className="p-3 border border-slate-300 dark:border-slate-700">23-26</td><td className="p-3 border border-slate-300 dark:border-slate-700 font-semibold">5.0</td></tr>
              <tr><td className="p-3 border border-slate-300 dark:border-slate-700">19-22</td><td className="p-3 border border-slate-300 dark:border-slate-700 font-semibold">4.5</td></tr>
              <tr><td className="p-3 border border-slate-300 dark:border-slate-700">15-18</td><td className="p-3 border border-slate-300 dark:border-slate-700 font-semibold">4.0</td></tr>
              <tr><td className="p-3 border border-slate-300 dark:border-slate-700">12-14</td><td className="p-3 border border-slate-300 dark:border-slate-700 font-semibold">3.5</td></tr>
              <tr><td className="p-3 border border-slate-300 dark:border-slate-700">9-11</td><td className="p-3 border border-slate-300 dark:border-slate-700 font-semibold">3.0</td></tr>
              <tr><td className="p-3 border border-slate-300 dark:border-slate-700">6-8</td><td className="p-3 border border-slate-300 dark:border-slate-700 font-semibold">2.5</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="why-different">
        <ArticleHeading>Why Academic and General Training scores differ</ArticleHeading>
        <ArticleParagraph>
          IELTS Academic Reading uses long passages from journals, textbooks and magazines. Vocabulary is dense, arguments are abstract, and question types like <em>matching headings</em> and <em>Yes/No/Not Given</em> demand careful inference. General Training Reading, by contrast, starts with short workplace and everyday texts that are linguistically simpler.
        </ArticleParagraph>
        <ArticleParagraph>
          IELTS balances these differences on the conversion scale, not on the test itself. That way a Band 7 in Academic Reading and a Band 7 in General Training Reading represent the same underlying proficiency, even though the raw-score thresholds are different.
        </ArticleParagraph>
      </section>

      <section id="common-scores">
        <ArticleHeading>Common IELTS Reading scores explained</ArticleHeading>

        <h3 className="text-xl font-semibold mt-6 mb-2 text-slate-900 dark:text-slate-100">25 out of 40</h3>
        <ArticleParagraph>
          25/40 is <strong>Band 6.0 (Academic)</strong> and <strong>Band 5.0 (General Training)</strong>. A common "stuck zone" score, usually caused by losing marks on Matching Headings and True/False/Not Given.
        </ArticleParagraph>

        <h3 className="text-xl font-semibold mt-6 mb-2 text-slate-900 dark:text-slate-100">27 out of 40</h3>
        <ArticleParagraph>
          27/40 is <strong>Band 6.5 (Academic)</strong> and <strong>Band 5.5 (General Training)</strong>. This is the most-searched score on Google because it sits right at the 6.5 threshold many universities require.
        </ArticleParagraph>

        <h3 className="text-xl font-semibold mt-6 mb-2 text-slate-900 dark:text-slate-100">30 out of 40</h3>
        <ArticleParagraph>
          30/40 is <strong>Band 7.0 (Academic)</strong> and <strong>Band 6.0 (General Training)</strong>. On Academic, this is the typical requirement for Russell Group universities and most master's programmes.
        </ArticleParagraph>

        <h3 className="text-xl font-semibold mt-6 mb-2 text-slate-900 dark:text-slate-100">33 out of 40</h3>
        <ArticleParagraph>
          33/40 is <strong>Band 7.5 (Academic)</strong> and <strong>Band 6.5 (General Training)</strong>. This sits just below the Band 7.0 threshold required for Canadian Express Entry (CLB 9) on General Training, you need 34+.
        </ArticleParagraph>

        <h3 className="text-xl font-semibold mt-6 mb-2 text-slate-900 dark:text-slate-100">35 out of 40</h3>
        <ArticleParagraph>
          35/40 is <strong>Band 8.0 (Academic)</strong> and <strong>Band 7.0 (General Training)</strong>. Strong enough for every medical council registration in the UK, Australia and New Zealand.
        </ArticleParagraph>
      </section>

      <section id="how-scoring-works">
        <ArticleHeading>How IELTS Reading scoring actually works</ArticleHeading>
        <BulletList items={[
          <><strong>40 questions, 60 minutes.</strong> You have no extra time to transfer answers to the answer sheet.</>,
          <><strong>Each question = 1 raw mark.</strong> No question is weighted more than any other.</>,
          <><strong>No negative marking.</strong> Always write an answer, even a guess.</>,
          <><strong>Spelling and grammar count.</strong> "Childern" instead of "children" is wrong even if you understood the passage.</>,
          <><strong>Your overall IELTS band</strong> is the average of Listening, Reading, Writing and Speaking, rounded to the nearest 0.5.</>,
        ]} />
        <ArticleParagraph>
          Want to try the calculation yourself? Use our <Link to="/ielts-band-score-calculator/" className="text-blue-600 hover:underline dark:text-blue-400">IELTS band score calculator</Link> to convert your four raw scores into an overall band.
        </ArticleParagraph>
      </section>

      <section id="improve">
        <ArticleHeading>How to add 3-5 raw marks (one band up) fast</ArticleHeading>
        <ArticleParagraph>
          Most candidates plateau 3-5 marks short of their target. Here is the highest-leverage checklist, drawn from our Band 7+ IELTS guides:
        </ArticleParagraph>
        <BulletList items={[
          <><strong>Master True/False/Not Given logic.</strong> Not Given = the text neither confirms nor contradicts. Most band-6.5 candidates confuse "Not Given" with "False".</>,
          <><strong>Skim, then scan.</strong> Read each passage's first sentence of each paragraph in 90 seconds. Then scan for answers. Do not read linearly.</>,
          <><strong>Do Matching Headings last.</strong> It rewards a full reading of the passage and is worth the same as every other question.</>,
          <><strong>Budget 20/20/20 minutes per passage.</strong> Passage 3 is hardest; never leave yourself under 18 minutes for it.</>,
          <><strong>Transfer as you go.</strong> There is no extra transfer time in Reading (unlike Listening). Write directly on the answer sheet.</>,
          <>For deeper drills, see our <Link to="/ielts/why-stuck-at-6-5/" className="text-blue-600 hover:underline dark:text-blue-400">Why Stuck at 6.5 guide</Link> and <Link to="/ielts/vocabulary/band-7/" className="text-blue-600 hover:underline dark:text-blue-400">Band 7 vocabulary page</Link>.</>,
        ]} />
      </section>

      <section id="faq">
        <ArticleHeading>Frequently asked questions</ArticleHeading>

        <h3 className="text-xl font-semibold mt-6 mb-2 text-slate-900 dark:text-slate-100">Is the IELTS Reading conversion table the same every year?</h3>
        <ArticleParagraph>
          The table above is stable across test versions. IELTS occasionally adjusts a single band boundary by one question if a specific paper is unusually easy or hard, but the scale has not fundamentally changed in more than a decade.
        </ArticleParagraph>

        <h3 className="text-xl font-semibold mt-6 mb-2 text-slate-900 dark:text-slate-100">Is Computer-Delivered IELTS Reading scored differently?</h3>
        <ArticleParagraph>
          No. Paper-based and computer-delivered IELTS use the same 0-40 raw score and the same conversion scale. Only the delivery method differs.
        </ArticleParagraph>

        <h3 className="text-xl font-semibold mt-6 mb-2 text-slate-900 dark:text-slate-100">Can I get half a raw mark?</h3>
        <ArticleParagraph>
          No. Every answer is marked strictly right or wrong. Half-marks only appear in the final band (e.g. 6.5, 7.5), not in raw scoring.
        </ArticleParagraph>

        <h3 className="text-xl font-semibold mt-6 mb-2 text-slate-900 dark:text-slate-100">What is a "safe" IELTS Reading score for most universities?</h3>
        <ArticleParagraph>
          30 out of 40 (Band 7.0 Academic) is accepted by the majority of English-speaking universities for undergraduate and taught master's programmes. For medicine, law or PhD programmes, aim for 33+ (Band 7.5).
        </ArticleParagraph>
      </section>

      <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6 my-8">
        <h2 className="text-lg font-semibold mb-3 text-slate-900 dark:text-slate-100">Keep going</h2>
        <ul className="space-y-2 text-blue-600 dark:text-blue-400">
          <li>→ <Link to="/ielts/is-7-5-ielts-score-good-enough/" className="hover:underline">Is a 7.5 IELTS Score Good Enough? (Universities, Visas &amp; Jobs)</Link></li>
          <li>→ <Link to="/blog/how-to-achieve-band-9-in-ielts-real-examples/" className="hover:underline">How to Achieve Band 9 in IELTS (Real Examples)</Link></li>
          <li>→ <Link to="/blog/ielts-band-9-synonyms-table-200-words/" className="hover:underline">IELTS Band 9 Synonyms Table (200 Words)</Link></li>
          <li>→ <Link to="/ielts/vocabulary/band-8/" className="hover:underline">IELTS Vocabulary Band 8: Advanced Academic Words</Link></li>
          <li>→ <Link to="/ielts-band-score-calculator/" className="hover:underline">IELTS Band Score Calculator</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default IELTSReadingScoreConversionPage;
