import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import SchemaMarkup from '../components/SchemaMarkup';
import GoogleAd from '../components/GoogleAd';

interface StatCardProps {
  value: string;
  label: string;
  description: string;
  source: string;
  color?: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, description, source, color = 'blue' }) => {
  const colorMap: Record<string, string> = {
    blue: 'bg-blue-50 border-blue-200 text-blue-700',
    indigo: 'bg-indigo-50 border-indigo-200 text-indigo-700',
    emerald: 'bg-emerald-50 border-emerald-200 text-emerald-700',
    violet: 'bg-violet-50 border-violet-200 text-violet-700',
    amber: 'bg-amber-50 border-amber-200 text-amber-700',
    rose: 'bg-rose-50 border-rose-200 text-rose-700',
    sky: 'bg-sky-50 border-sky-200 text-sky-700',
    teal: 'bg-teal-50 border-teal-200 text-teal-700',
  };
  const cls = colorMap[color] || colorMap.blue;
  return (
    <div className={`border rounded-xl p-5 flex flex-col gap-1 ${cls}`}>
      <div className="text-3xl font-extrabold tracking-tight">{value}</div>
      <div className="text-sm font-semibold uppercase tracking-wide opacity-80">{label}</div>
      <p className="text-sm leading-snug mt-1 text-slate-700">{description}</p>
      <p className="text-xs mt-2 text-slate-500 italic">{source}</p>
    </div>
  );
};

const SectionHeader: React.FC<{ id: string; number: string; title: string; subtitle: string }> = ({ id, number, title, subtitle }) => (
  <div id={id} className="mt-14 mb-6">
    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">{number}</p>
    <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
    <p className="text-base text-slate-500 mt-1">{subtitle}</p>
    <div className="mt-4 border-b border-slate-200" />
  </div>
);

const EnglishLanguageStatistics2026Page: React.FC = () => {
  usePageMetadata({
    title: 'English Language Statistics 2026: 100+ Verified Facts About Global Speakers, Learners & the Web',
    description:
      'Comprehensive English language statistics for 2026: 1.53 billion speakers, 1.5 billion learners, 49% of the web, 600K+ OED words, IELTS & EF EPI data. Over 100 verified facts with sources.',
  });

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'English Language Statistics 2026: 100+ Verified Facts',
    description:
      'Over 100 verified English language statistics covering global speakers, learners, web presence, vocabulary, business, proficiency exams, history, and fun facts.',
    datePublished: '2026-06-19',
    dateModified: '2026-06-19',
    author: { '@type': 'Organization', name: 'TypoGrammar', url: 'https://typogrammar.com' },
    publisher: { '@type': 'Organization', name: 'TypoGrammar', url: 'https://typogrammar.com' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://typogrammar.com/ielts/english-language-statistics-2026',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://typogrammar.com' },
      { '@type': 'ListItem', position: 2, name: 'IELTS', item: 'https://typogrammar.com/ielts/ielts-writing-task-2-essay-types' },
      { '@type': 'ListItem', position: 3, name: 'English Language Statistics 2026', item: 'https://typogrammar.com/ielts/english-language-statistics-2026' },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How many people speak English in the world in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Approximately 1.53 billion people speak English worldwide in 2026, including both native and second-language speakers. Around 390 million are native speakers and over 1.14 billion use it as a second language.',
        },
      },
      {
        '@type': 'Question',
        name: 'What percentage of websites are in English?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Around 49% of all websites use English as their primary content language, according to W3Techs data from 2025. Spanish is a distant second at about 6%.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many words are in the English language?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Oxford English Dictionary documents over 600,000 words across the history of the language, with 171,476 in current active use. A Harvard/Google study estimated over 1 million distinct words.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many people are learning English?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'More than 1.5 billion people are estimated to be learning English worldwide at any given time, making it the most studied language in history. The global language-learning market was valued at about $85.1 billion in 2025.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which country has the highest English proficiency?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'According to the EF English Proficiency Index 2025, the Netherlands ranked first for the seventh consecutive year with a score of 624 out of 800.',
        },
      },
    ],
  };

  useEffect(() => {
    const schemas = [breadcrumbSchema, faqSchema];
    const scripts = schemas.map((schema) => {
      const s = document.createElement('script');
      s.type = 'application/ld+json';
      s.text = JSON.stringify(schema);
      document.head.appendChild(s);
      return s;
    });
    return () => scripts.forEach((s) => document.head.removeChild(s));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup type="Article" data={articleSchema} />

      {/* Breadcrumb */}
      <div className="mb-6">
        <Link to="/ielts/ielts-writing-task-2-essay-types/" className="text-blue-600 hover:underline text-sm">
          ← Back to IELTS Preparation
        </Link>
      </div>

      {/* Hero */}
      <h1 className="text-4xl font-bold mb-3 text-slate-900 leading-tight">
        English Language Statistics 2026
      </h1>
      <p className="text-xl text-slate-500 mb-8 leading-relaxed">
        One language, 1.5 billion voices. A field guide to English by the numbers: who speaks it, who is learning it, where it lives online, how big its vocabulary really is, and how the world is tested on it. Over 100 verified facts, each tied to its source.
      </p>

      {/* Hero stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <div className="bg-blue-600 text-white rounded-xl p-5 text-center">
          <div className="text-3xl font-extrabold">1.53B</div>
          <div className="text-xs font-semibold uppercase tracking-wide mt-1 opacity-90">total English speakers</div>
          <p className="text-xs mt-2 opacity-80">Ethnologue, 2025 · Visual Capitalist</p>
        </div>
        <div className="bg-indigo-600 text-white rounded-xl p-5 text-center">
          <div className="text-3xl font-extrabold">~390M</div>
          <div className="text-xs font-semibold uppercase tracking-wide mt-1 opacity-90">native speakers</div>
          <p className="text-xs mt-2 opacity-80">Ethnologue, 2025</p>
        </div>
        <div className="bg-violet-600 text-white rounded-xl p-5 text-center">
          <div className="text-3xl font-extrabold">67</div>
          <div className="text-xs font-semibold uppercase tracking-wide mt-1 opacity-90">countries with English official</div>
          <p className="text-xs mt-2 opacity-80">Geography Worlds; UN</p>
        </div>
        <div className="bg-sky-600 text-white rounded-xl p-5 text-center">
          <div className="text-3xl font-extrabold">~49%</div>
          <div className="text-xs font-semibold uppercase tracking-wide mt-1 opacity-90">of all websites</div>
          <p className="text-xs mt-2 opacity-80">W3Techs, 2025</p>
        </div>
      </div>

      {/* Table of Contents */}
      <nav className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-10">
        <h2 className="text-base font-bold mb-4 text-slate-800 uppercase tracking-wide">What is inside</h2>
        <div className="grid md:grid-cols-2 gap-2">
          {[
            ['#global-speakers', '01 · Global speakers and reach', '18 facts'],
            ['#learners', '02 · Learners and the market', '18 facts'],
            ['#web', '03 · English on the web', '12 facts'],
            ['#vocabulary', '04 · Vocabulary and the dictionary', '17 facts'],
            ['#business', '05 · Business, science and the skies', '13 facts'],
            ['#proficiency', '06 · Proficiency and exams', '14 facts'],
            ['#history', '07 · Origins and history', '8 facts'],
            ['#fun', '08 · Surprising and fun facts', '12 facts'],
          ].map(([href, label, count]) => (
            <a key={href} href={href} className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-slate-100 text-blue-700 hover:text-blue-900 transition-colors">
              <span className="text-sm font-medium">{label}</span>
              <span className="text-xs text-slate-400 ml-2 whitespace-nowrap">{count}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* ── 01 Global Speakers ── */}
      <SectionHeader
        id="global-speakers"
        number="01"
        title="Global speakers and reach"
        subtitle="How far English actually reaches"
      />
      <p className="text-slate-600 mb-6">
        The headline number surprises most people: the vast majority of English speakers never learned it at home. Growth comes from classrooms and careers, not birth rates.
      </p>
      <div className="grid md:grid-cols-3 gap-4 mb-4">
        <StatCard value="1.53B" label="total speakers" description="English is the most spoken language in the world by total speakers, ahead of Mandarin Chinese (about 1.18 billion)." source="Ethnologue 2025 / Visual Capitalist" color="blue" />
        <StatCard value="~390M" label="native speakers" description="Only around 390 million people speak English as their first language, about one quarter of all speakers." source="Ethnologue 2025" color="indigo" />
        <StatCard value="~1.14B" label="second-language" description="More than a billion people use English as a second or foreign language, making it the dominant global lingua franca." source="Ethnologue 2025" color="violet" />
        <StatCard value="~75%" label="are non-native" description="Nearly three in four English speakers learned it as an additional language rather than from family." source="Ethnologue 2025 / Visual Capitalist" color="sky" />
        <StatCard value="1 in 6" label="people on Earth" description="About 18.8% of the world population speaks English, even though a clear majority of humanity does not." source="Ethnologue 2025 / Visual Capitalist" color="teal" />
        <StatCard value="2.3B" label="to some level" description="The British Council estimates that up to 2.3 billion people speak English to some degree once learners are included." source="British Council, Future of English" color="emerald" />
        <StatCard value="~1.9B" label="non-native users" description="Of that wider total, the British Council counts over 1.9 billion as non-native users of the language." source="British Council, Future of English" color="emerald" />
        <StatCard value="67" label="countries" description='English holds official or national status in roughly 67 countries. It is one of the six official languages of the United Nations.' source="Geography Worlds; UN" color="amber" />
        <StatCard value="~186" label="countries" description="English is spoken in some form in about 186 countries, spanning every inhabited continent." source="Ethnologue, via secondary reporting" color="amber" />
        <StatCard value="~265M" label="in India" description="India has the second-largest English-speaking population in the world, behind only the United States." source="Ethnologue / population analysis" color="rose" />
        <StatCard value="~460M" label="across Asia" description="Asia is now the biggest driver of non-native English growth, with hundreds of millions of speakers." source="Ethnologue / population analysis" color="rose" />
        <StatCard value="~200M" label="across Europe" description="Europe adds around 200 million speakers, boosted by very high proficiency in Scandinavia and the Netherlands." source="Ethnologue / population analysis" color="blue" />
        <StatCard value="+28%" label="2019 to 2023" description="Total English speakers rose about 28%, from roughly 1.13 billion in 2019 to 1.46 billion in 2023." source="Compiled from Ethnologue, Statista, British Council" color="indigo" />
        <StatCard value="3 of 5" label="UN powers" description="Three of the five permanent members of the UN Security Council use English as an official language." source="Geography Worlds" color="violet" />
        <StatCard value="~5%" label="native share" description="Native English speakers make up just under 5% of the global population, far below English's online and institutional footprint." source="Rest of World, citing Ethnologue" color="sky" />
        <StatCard value="#2 Mandarin" label="closest rival" description="Mandarin Chinese ranks second by total speakers but has far more native speakers (around 990 million) than English." source="Ethnologue 2025" color="teal" />
        <StatCard value="2B" label="by 2030?" description="Several projections suggest the total could approach 2 billion speakers by 2030, led by Asia and Africa." source="Population analyses citing Ethnologue / British Council" color="emerald" />
        <StatCard value="7,000+" label="living languages" description="Of the roughly 7,159 living languages catalogued in 2025, English sits at the very top by total speakers." source="Ethnologue 2025" color="amber" />
      </div>

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>

      {/* ── 02 Learners ── */}
      <SectionHeader
        id="learners"
        number="02"
        title="Learners and the market"
        subtitle="The largest classroom in human history"
      />
      <p className="text-slate-600 mb-6">
        English is the most studied language ever, and the business of teaching it is now measured in tens of billions of dollars a year.
      </p>
      <div className="grid md:grid-cols-3 gap-4 mb-4">
        <StatCard value="1.5B+" label="learning English" description="More than 1.5 billion people are estimated to be learning English worldwide at any given time." source="Industry market reports, 2024-2025" color="blue" />
        <StatCard value="#1" label="most studied" description="English is the most studied language in the world and the most learned language on major platforms." source="British Council; Preply" color="indigo" />
        <StatCard value="300M+" label="in China" description="China alone has more than 300 million people engaged in learning English." source="Market Growth Reports" color="violet" />
        <StatCard value="250M+" label="in India" description="India has over 250 million active English learners." source="Market Growth Reports" color="sky" />
        <StatCard value="100+" label="countries" description="More than 100 countries have made English a compulsory part of their school curriculum." source="Business Research Insights" color="teal" />
        <StatCard value="$85.1B" label="market, 2025" description="The global language-learning market was valued at about $85.1 billion in 2025." source="Global Market Insights" color="emerald" />
        <StatCard value="~$101.5B" label="in 2026" description="It is projected to grow to roughly $101.5 billion in 2026, on the way to a far larger figure by the mid-2030s." source="Global Market Insights" color="amber" />
        <StatCard value="~42%" label="is English" description="English learning represents about 42% of the entire language-learning market, the single largest segment." source="Business Research Insights" color="rose" />
        <StatCard value="43%" label="of learners" description="On Preply, 43% of all language learners are studying English, far ahead of second-place Spanish at 13%." source="Preply Global Language Report" color="blue" />
        <StatCard value="~40%" label="Asia-Pacific" description="Asia-Pacific accounts for roughly 40% of the global English-learning market by share." source="Business Research Insights" color="indigo" />
        <StatCard value="~60%" label="go digital" description="About 60% of learners now prefer online or app-based formats over traditional in-person classes." source="Business Research Insights" color="violet" />
        <StatCard value="+41%" label="Duolingo revenue" description="Duolingo reported a 41% rise in revenue and a 40% jump in daily active users in 2025." source="Business Research Insights" color="sky" />
        <StatCard value="6.7%" label="EF market lead" description="EF Education First led the language-learning market with over 6.7% share in 2025." source="Global Market Insights" color="teal" />
        <StatCard value="70%+" label="of employers" description="Over 70% of multinational companies list English as their preferred business language." source="Market Growth Reports" color="emerald" />
        <StatCard value="98.5%" label="test English" description="In a survey of 38 countries, 98.5% of employers assess job candidates' English competency." source="Simon & Simon, citing industry data" color="amber" />
        <StatCard value="50%" label="pay more" description="Half of those employers offer better starting packages to candidates with strong English skills." source="Simon & Simon, citing industry data" color="rose" />
        <StatCard value="~30%" label="retention gain" description="AI-driven adaptive platforms are reported to improve learner retention by nearly 30% over static courses." source="Market Growth Reports" color="blue" />
        <StatCard value="~2B" label="have studied it" description="EF estimates around 2 billion people have studied English at some point in their lives." source="EF Education First, 2025" color="indigo" />
      </div>

      {/* Internal link box */}
      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5 my-8">
        <h3 className="font-semibold text-indigo-900 mb-2">Practise the English you are studying</h3>
        <p className="text-sm text-indigo-800 mb-3">
          With over 1.5 billion people learning English, accurate grammar matters more than ever. Use these free tools to sharpen your writing:
        </p>
        <ul className="space-y-1 text-sm">
          <li><Link to="/grammar-checker" className="text-indigo-700 hover:underline font-medium">Grammar Checker — catch errors instantly</Link></li>
          <li><Link to="/grammar-mistakes" className="text-indigo-700 hover:underline font-medium">Common Grammar Mistakes — the errors learners make most</Link></li>
          <li><Link to="/ai-prompts" className="text-indigo-700 hover:underline font-medium">AI Prompts for English Practice — structured prompts for fluency</Link></li>
          <li><Link to="/typogrammar-write" className="text-indigo-700 hover:underline font-medium">TypoGrammar Write — AI-powered writing assistant</Link></li>
        </ul>
      </div>

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>

      {/* ── 03 Web ── */}
      <SectionHeader
        id="web"
        number="03"
        title="English on the web"
        subtitle="The default language of the internet"
      />
      <p className="text-slate-600 mb-6">
        English dominates online content far beyond its share of speakers, a gap that researchers and UNESCO have flagged for two decades.
      </p>
      <div className="grid md:grid-cols-3 gap-4 mb-4">
        <StatCard value="~49%" label="of websites" description="Nearly half of all websites use English as their primary content language, the most of any language." source="W3Techs, 2025" color="sky" />
        <StatCard value="#1" label="online language" description="English has been the leading language of web content for as long as the metric has been tracked." source="W3Techs; Statista, Oct 2025" color="blue" />
        <StatCard value="~6%" label="Spanish (2nd)" description="Spanish is a distant second among web content languages, at around 6% of sites." source="Statista / DataReportal, Oct 2025" color="indigo" />
        <StatCard value="~5.9%" label="German (3rd)" description="German follows closely in third place at roughly 5.9% of web content." source="Statista / DataReportal, Oct 2025" color="violet" />
        <StatCard value="~1.4%" label="Chinese online" description="Despite being the second most spoken language, Chinese accounts for only about 1.4% of web domains." source="Rest of World, citing W3Techs" color="teal" />
        <StatCard value="~0.07%" label="Hindi online" description="Hindi, spoken by hundreds of millions, makes up roughly 0.07% of domains." source="Rest of World, citing W3Techs" color="emerald" />
        <StatCard value="14" label="languages >1%" description="Only about 14 languages appear on more than 1% of domains, underlining the web's linguistic imbalance." source="UNESCO; W3Techs" color="amber" />
        <StatCard value="75%" label="of pages, 1998" description="In 1998, an estimated 75% of all web pages were in English, before the web diversified." source="UNESCO, 2009 report" color="rose" />
        <StatCard value="~45%" label="by 2005" description="By 2005 the English share of monitored web content had fallen to about 45%." source="UNESCO, 2009 report" color="blue" />
        <StatCard value="+281%" label="2001 to 2011" description="English use online grew about 281% in that decade, even as other languages grew faster." source="Internet usage statistics" color="indigo" />
        <StatCard value="25.9%" label="of users, 2020" description="As of 2020, English speakers were the largest single language group of internet users worldwide." source="Internet World Stats" color="violet" />
        <StatCard value="1B+" label="US + India" description="The US and India, both major English markets, together held over a billion internet users, fueling English content." source="Statista, Jan 2023" color="sky" />
      </div>

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>

      {/* ── 04 Vocabulary ── */}
      <SectionHeader
        id="vocabulary"
        number="04"
        title="Vocabulary and the dictionary"
        subtitle="A million words, and counting"
      />
      <p className="text-slate-600 mb-6">
        English has one of the largest vocabularies of any language, yet most of daily life runs on a tiny fraction of it.
      </p>
      <div className="grid md:grid-cols-3 gap-4 mb-4">
        <StatCard value="600K+" label="OED entries" description="The Oxford English Dictionary documents over 600,000 words across the history of the language." source="Oxford English Dictionary" color="violet" />
        <StatCard value="171,476" label="in current use" description="The OED lists 171,476 words in active, current use, plus 47,156 that are now obsolete." source="Oxford English Dictionary, 2nd ed." color="indigo" />
        <StatCard value="~1,022,000" label="total words" description="A Harvard and Google study estimated more than a million distinct English words, growing every year." source="Harvard / Google, 2010" color="blue" />
        <StatCard value="~4,000" label="added yearly" description="Roughly 4,000 new words enter English dictionaries each year as the language keeps expanding." source="Lexicography reporting" color="sky" />
        <StatCard value="~800" label="neologisms/yr" description="One estimate puts genuinely new coinages, like acronyms and blends, at around 800 per year." source="Bloomsbury Dictionary of Word Origins" color="teal" />
        <StatCard value="~25%" label="native origin" description="Only about a quarter of English words are of native Germanic origin; the rest are borrowed." source="alphaDictionary, citing OED" color="emerald" />
        <StatCard value="~28%" label="from Latin" description="Around 28% of English words come from Latin, and a similar share from French." source="alphaDictionary, citing OED" color="amber" />
        <StatCard value="350+" label="source languages" description="Words from more than 350 languages have entered English over the centuries." source="Encyclopaedia Britannica" color="rose" />
        <StatCard value="3M+" label="quotations" description="The OED includes over 3 million illustrative quotations showing how words have been used over time." source="Oxford English Dictionary" color="violet" />
        <StatCard value="20–35K" label="words known" description="Most adult native speakers have an active vocabulary of roughly 20,000 to 35,000 words." source="testyourvocab.com / EF" color="indigo" />
        <StatCard value="~40K" label="passive words" description="The number of words an adult recognizes but rarely uses — the passive vocabulary — is often around 40,000." source="Etcetera Translations" color="blue" />
        <StatCard value="~3,000" label="cover 95%" description="Linguists estimate a vocabulary of about 3,000 words covers roughly 95% of everyday speech and print." source="Cited in vocabulary research" color="sky" />
        <StatCard value="1 / 2 days" label="new word" description="The average adult adds roughly one new word to their vocabulary every two days across a lifetime." source="Etcetera Translations" color="teal" />
        <StatCard value="~470,000" label="Webster's" description="Webster's Third New International, Unabridged, includes some 470,000 entries." source="Merriam-Webster / Word Counter" color="emerald" />
        <StatCard value="1B" label="corpus words" description="The Oxford English Corpus, used to spot new usage, passed one billion words of running text." source="Oxford University Press" color="amber" />
        <StatCard value="Germanic" label="but Romance" description="English is Germanic in grammar and sound, yet the bulk of its vocabulary is Romance or Classical in origin." source="Encyclopaedia Britannica" color="rose" />
        <StatCard value="~50K" label="words, average" description="By some estimates the average contemporary English speaker recognizes around 50,000 words in total." source="Bloomsbury Dictionary of Word Origins" color="violet" />
      </div>

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>

      {/* ── 05 Business ── */}
      <SectionHeader
        id="business"
        number="05"
        title="Business, science and the skies"
        subtitle="Where English is not optional"
      />
      <p className="text-slate-600 mb-6">
        In research, aviation and global commerce, English is less a choice than an operating standard.
      </p>
      <div className="grid md:grid-cols-3 gap-4 mb-4">
        <StatCard value="~98%" label="of research" description="Around 98% of peer-reviewed scientific articles are published in English." source="Cited in arXiv (Liu, 2017)" color="blue" />
        <StatCard value="~75%" label="of journals" description="About 75% of all academic journals worldwide are published in English." source="WordsRated" color="indigo" />
        <StatCard value="~35,070" label="EN journals" description="Roughly 35,070 English-language journals were published in a single recent year." source="WordsRated" color="violet" />
        <StatCard value="5M+" label="papers/year" description="Over five million academic papers are published every year, most of them in English." source="WordsRated" color="sky" />
        <StatCard value="~7%" label="native, globally" description="Only about 7% of the world speaks English as a first language, yet it dominates global science." source="Cited in arXiv (Liu, 2017)" color="teal" />
        <StatCard value="~50%" label="by non-natives" description="Around half of all articles in English peer-reviewed journals are written by non-native speakers." source="Kourilova-Urbanczik, 2012" color="emerald" />
        <StatCard value="+3.22%" label="EN journal growth" description="English-language journals have grown about 3.22% a year, faster than non-English titles." source="WordsRated" color="amber" />
        <StatCard value="ICAO" label="aviation standard" description="English is the official language of international aviation under ICAO standards." source="ICAO" color="rose" />
        <StatCard value="Required" label="for pilots" description="ICAO mandates a minimum level of English proficiency for pilots and air-traffic controllers on international routes." source="ICAO" color="blue" />
        <StatCard value="Maritime" label="standard" description="English is also the working language of international maritime communication." source="Geography Worlds" color="indigo" />
        <StatCard value="Lingua franca" label="of business" description="English is the dominant lingua franca of international business, diplomacy, computing and tourism." source="Middlebury; Wikipedia" color="violet" />
        <StatCard value="UK #1" label="journal output" description="The United Kingdom is the world's single biggest producer of academic journals." source="WordsRated" color="sky" />
        <StatCard value="6 of 6" label="UN languages" description="English is one of just six official languages of the United Nations, alongside Arabic, Chinese, French, Russian and Spanish." source="United Nations" color="teal" />
      </div>

      {/* Quote */}
      <blockquote className="bg-slate-50 border-l-4 border-slate-400 p-6 my-8 rounded-r-xl">
        <p className="text-slate-700 text-lg italic leading-relaxed mb-3">
          "English remains the world's most widely shared language for international communication. In a time of growing global complexity, its role as a common bridge between cultures, economies and ideas is more important than ever."
        </p>
        <footer className="text-sm text-slate-500 font-medium">— Kate Bell, author of the EF English Proficiency Index 2025</footer>
      </blockquote>

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>

      {/* ── 06 Proficiency ── */}
      <SectionHeader
        id="proficiency"
        number="06"
        title="Proficiency and exams"
        subtitle="How the world measures English"
      />
      <p className="text-slate-600 mb-6">
        Millions sit high-stakes English exams each year, and one annual index ranks entire nations by skill.
      </p>
      <div className="grid md:grid-cols-3 gap-4 mb-4">
        <StatCard value="2.2M" label="tested for EPI" description="The EF English Proficiency Index 2025 is based on test data from 2.2 million adults across 123 countries and regions." source="EF EPI 2025" color="emerald" />
        <StatCard value="#1 Netherlands" label="top ranked" description="The Netherlands ranked first for the seventh year running, with a score of 624 out of 800." source="EF EPI 2025" color="teal" />
        <StatCard value="617 / 616" label="Croatia, Austria" description="Croatia (617) and Austria (616) took second and third, both climbing the rankings." source="EF EPI 2025" color="sky" />
        <StatCard value="15" label="very high band" description='Fifteen countries reached the "very high proficiency" band in 2025, up from nine the year before.' source="EF EPI 2025 / StudyTravel" color="blue" />
        <StatCard value="Europe #1" label="by region" description="Europe has the highest average English proficiency of any region; the Middle East has the lowest." source="EF EPI 2025" color="indigo" />
        <StatCard value="464 / 482" label="China / Brazil" description='Major source markets like China (464) and Brazil (482) remained in the "low proficiency" band.' source="EF EPI 2025 / StudyTravel" color="violet" />
        <StatCard value="4M+" label="IELTS tests" description="IELTS was taken more than 4 million times in 2023, more than all other high-stakes English tests combined." source="IELTS.org" color="amber" />
        <StatCard value="~1M" label="TOEFL/year" description="The TOEFL is taken about one million times per year, according to ETS leadership." source="ETS, via TOEFL Resources" color="rose" />
        <StatCard value="1 to 9" label="IELTS bands" description="IELTS scores run on a banded scale from 1 (non-user) to 9 (expert user) across four skills." source="IELTS.org" color="blue" />
        <StatCard value="800+" label="test locations" description="The British Council delivers IELTS in more than 800 locations across over 100 countries." source="British Council" color="indigo" />
        <StatCard value="96%" label="of EU students" description="English was the most studied foreign language in EU upper-secondary general education, taken by 96% of students." source="Eurostat, 2023" color="violet" />
        <StatCard value="95%" label="study a language" description="In Europe, about 95% of secondary students study at least one foreign language, most often English." source="British Council / SNS Insider" color="sky" />
        <StatCard value="Singapore" label="reclassified" description="From 2025, Singapore was excluded from the EF EPI after being reclassified as a native English-speaking country." source="EF EPI / Wikipedia" color="teal" />
        <StatCard value="AI-scored" label="first time" description="For the first time in 2025, EF assessed speaking and writing using proprietary AI scoring technology." source="EF EPI 2025" color="emerald" />
      </div>

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>

      {/* ── 07 History ── */}
      <SectionHeader
        id="history"
        number="07"
        title="Origins and history"
        subtitle="From a small island tongue to a world language"
      />
      <p className="text-slate-600 mb-6">
        English began as a Germanic dialect on the edge of Europe and absorbed words from everywhere it went.
      </p>
      <div className="grid md:grid-cols-3 gap-4 mb-4">
        <StatCard value="5th c." label="Anglo-Saxons" description="English arrived in Britain with Anglo-Saxon migrants between roughly the 5th and 7th centuries AD." source="English Path; historical record" color="amber" />
        <StatCard value="West Germanic" label="language family" description="Despite its global spread, English is a West Germanic language by family, related to Frisian and Dutch." source="Encyclopaedia Britannica" color="amber" />
        <StatCard value="7th c." label="first written" description="Old English was first written down using the Latin alphabet in the 7th century." source="English Path" color="rose" />
        <StatCard value="26" label="letters" description="The modern 26-letter English alphabet, derived from Latin script, had mostly settled by the 16th century." source="English Path" color="rose" />
        <StatCard value="30%+" label="borrowed" description="The origins of well over 30% of English words trace to French, Latin and many other languages." source="English Path; Britannica" color="violet" />
        <StatCard value="Norse" label="influence" description='Old Norse, brought by Viking settlers, gave English everyday words such as sky, egg and they.' source="Linguistic histories" color="blue" />
        <StatCard value="Great Vowel Shift" label="1400s–1700s" description="Between the 1400s and 1700s a sweeping change in pronunciation reshaped English long vowels and spelling." source="History of English linguistics" color="indigo" />
        <StatCard value="Empire & trade" label="global spread" description="English spread worldwide first through the British Empire, then through American economic and cultural influence." source="Geography Worlds; Britannica" color="sky" />
      </div>

      <div className="my-8">
        <GoogleAd adSlot="6406598038" />
      </div>

      {/* ── 08 Fun Facts ── */}
      <SectionHeader
        id="fun"
        number="08"
        title="Surprising and fun facts"
        subtitle="The quirks behind the numbers"
      />
      <p className="text-slate-600 mb-6">
        The statistics that make English a fascinating language to teach, and to learn.
      </p>
      <div className="grid md:grid-cols-3 gap-4 mb-4">
        <StatCard value="~11%" label='letter "E"' description='"E" is the most common letter in English, appearing in around 11% of all words.' source="Concise OED analysis / Reader's Digest" color="rose" />
        <StatCard value='1 / 500' label='letter "Q"' description='"Q" is the rarest letter, turning up only about once every 500 letters.' source="Listen & Learn" color="rose" />
        <StatCard value='"the"' label="most used word" description='"The" is the single most-used word in written English.' source="Premier TEFL" color="violet" />
        <StatCard value='"time"' label="top noun" description='"Time" is the most commonly used noun in the English language.' source="Premier TEFL" color="violet" />
        <StatCard value="189,819" label="longest word" description="The longest English word, the chemical name for the protein titin, has 189,819 letters." source="English Path" color="blue" />
        <StatCard value='"Go!"' label="shortest sentence" description='"Go!" is often cited as one of the shortest grammatically complete sentences in English.' source="Escuela PCE" color="sky" />
        <StatCard value="26 in one line" label="pangram" description='"The quick brown fox jumps over the lazy dog" is a pangram containing all 26 letters.' source="Listen & Learn" color="teal" />
        <StatCard value="3×" label="happy vs sad" description='The word "happy" is used roughly three times more often than the word "sad."' source="Escuela PCE" color="emerald" />
        <StatCard value="8 years" label="a ghost word" description='"Dord," a word created by a printing error, sat in a dictionary for about eight years before removal.' source="English Path" color="amber" />
        <StatCard value='"nice"' label='meant "ignorant"' description='"Nice" comes from Latin nescius, meaning ignorant, and only later shifted to mean pleasant.' source="The Collector" color="amber" />
        <StatCard value='"mortgage"' label="death pledge" description='"Mortgage" derives from French roots meaning, literally, a "dead pledge."' source="Listen & Learn" color="rose" />
        <StatCard value="contronyms" label="self-opposite" description='English has contronyms — single words with opposite meanings — such as "dust" (to add or remove) and "cleave."' source="The TEFL Org" color="indigo" />
      </div>

      {/* ── Sources ── */}
      <div className="mt-14 border-t border-slate-200 pt-8">
        <h2 className="text-xl font-bold text-slate-900 mb-3">Sources and method</h2>
        <p className="text-sm text-slate-600 mb-4 leading-relaxed">
          Every figure above is drawn from a published source, listed below. Where estimates differ between organizations, the most widely cited 2024–2026 figure was used, and ranges are shown as ranges. Statistics on language change over time, so treat figures as best-available snapshots rather than fixed constants. Last reviewed June 2026.
        </p>
        <div className="grid md:grid-cols-2 gap-2 text-sm text-slate-700">
          {[
            ['Ethnologue (2025)', 'speakers'],
            ['British Council, Future of English', 'learners'],
            ['EF English Proficiency Index 2025', 'proficiency'],
            ['W3Techs', 'web content'],
            ['Statista / DataReportal', 'web, users'],
            ['Oxford English Dictionary & Corpus', 'vocabulary'],
            ['Harvard / Google word study (2010)', 'word count'],
            ['IELTS.org & British Council', 'exams'],
            ['ETS (TOEFL)', 'exams'],
            ['Global Market Insights', 'market'],
            ['Business Research Insights', 'market'],
            ['Preply Global Language Report', 'learners'],
            ['WordsRated', 'publishing'],
            ['Eurostat', 'EU education'],
            ['ICAO', 'aviation'],
            ['Encyclopaedia Britannica', 'history'],
            ['Visual Capitalist', 'speakers'],
            ['Rest of World / UNESCO', 'web equity'],
          ].map(([source, topic]) => (
            <div key={source} className="flex items-baseline gap-2 py-1 border-b border-slate-100">
              <span className="font-medium">{source}</span>
              <span className="text-slate-400 text-xs">{topic}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom internal links */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mt-12">
        <h3 className="font-semibold text-slate-800 mb-3">Keep improving your English</h3>
        <div className="grid md:grid-cols-2 gap-3 text-sm">
          <Link to="/grammar-mistakes" className="flex items-center gap-2 text-blue-700 hover:underline">
            <span className="text-slate-400">→</span> Common Grammar Mistakes
          </Link>
          <Link to="/grammar-checker" className="flex items-center gap-2 text-blue-700 hover:underline">
            <span className="text-slate-400">→</span> Free Grammar Checker
          </Link>
          <Link to="/ai-prompts" className="flex items-center gap-2 text-blue-700 hover:underline">
            <span className="text-slate-400">→</span> AI Prompts for English Practice
          </Link>
          <Link to="/typogrammar-write" className="flex items-center gap-2 text-blue-700 hover:underline">
            <span className="text-slate-400">→</span> TypoGrammar Write Extension
          </Link>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-12" id="faq">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {[
            {
              q: 'How many people speak English in the world in 2026?',
              a: 'Approximately 1.53 billion people speak English worldwide in 2026, including both native and second-language speakers. Around 390 million are native speakers and over 1.14 billion use it as a second language. The British Council estimates a broader total of up to 2.3 billion once casual learners are included.',
            },
            {
              q: 'What percentage of websites are in English?',
              a: 'Around 49% of all websites use English as their primary content language, according to W3Techs data from 2025. Spanish is a distant second at about 6%, and German is third at roughly 5.9%.',
            },
            {
              q: 'How many words are in the English language?',
              a: 'The Oxford English Dictionary documents over 600,000 words across the history of the language, with 171,476 in current active use. A Harvard/Google study estimated over 1 million distinct words. Roughly 4,000 new words enter dictionaries each year.',
            },
            {
              q: 'How many people are learning English?',
              a: 'More than 1.5 billion people are estimated to be learning English worldwide at any given time, making it the most studied language in history. The global language-learning market was valued at about $85.1 billion in 2025.',
            },
            {
              q: 'Which country has the highest English proficiency?',
              a: 'According to the EF English Proficiency Index 2025, the Netherlands ranked first for the seventh consecutive year with a score of 624 out of 800. Croatia and Austria took second and third place respectively.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 mb-2">{q}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnglishLanguageStatistics2026Page;
