import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import SchemaMarkup from '../components/SchemaMarkup';
import GoogleAd from '../components/GoogleAd';

const IELTSInformalLetterPage: React.FC = () => {
  usePageMetadata({
    title: 'How to Write an Informal IELTS Letter – General Training Task 1 Guide (Band 7–9)',
    description:
      'Complete guide to writing an informal IELTS General Training Writing Task 1 letter. Structure, language features, phrase bank, model answer, common mistakes, marking criteria, and 12 FAQs.',
  });

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Write an Informal IELTS Letter (General Training – Writing Task 1)',
    description:
      'A complete guide to writing an informal IELTS General Training Writing Task 1 letter, including structure, language features, a model answer, common mistakes, and marking criteria.',
    datePublished: '2026-06-19',
    dateModified: '2026-06-19',
    author: { '@type': 'Organization', name: 'TypoGrammar', url: 'https://typogrammar.com' },
    publisher: { '@type': 'Organization', name: 'TypoGrammar', url: 'https://typogrammar.com' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://typogrammar.com/ielts/how-to-write-an-IELTS-letter-informal',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://typogrammar.com' },
      { '@type': 'ListItem', position: 2, name: 'IELTS', item: 'https://typogrammar.com/ielts/ielts-writing-task-2-essay-types' },
      { '@type': 'ListItem', position: 3, name: 'How to Write an Informal IELTS Letter', item: 'https://typogrammar.com/ielts/how-to-write-an-IELTS-letter-informal' },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How long should an informal IELTS letter be?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'At least 150 words. Aim for 160–190 — enough to develop all three points without rushing or running out of time. Going under 150 will cost you marks.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much time should I spend on IELTS Writing Task 1?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'About 20 minutes. Task 2 is worth more, so don\'t overspend. Roughly: 3–4 minutes planning, 13–14 writing, 3 checking.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I know if the IELTS letter should be informal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Look at who you\'re writing to. If it\'s a friend, family member, or someone you know well, write informally. If it\'s a manager, official, or company, write formally.',
        },
      },
      {
        '@type': 'Question',
        name: 'What greeting should I use in an informal IELTS letter?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Dear + first name (Dear Sam,) is safe and natural. Hi or Hello + name also work for informal letters. Never use Dear Sir/Madam — that\'s strictly formal.',
        },
      },
      {
        '@type': 'Question',
        name: 'How should I sign off an informal IELTS letter?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Use a casual closing such as Best wishes, All the best, Take care, or Love, followed by your first name only. Avoid Yours faithfully or Yours sincerely — those are formal.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I use contractions in an informal IELTS letter?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes — contractions (I\'m, don\'t, you\'ll) are expected in informal letters. Use mild idioms and phrasal verbs too. Avoid heavy slang or text-speak (gonna, u, lol), which can look careless.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will I lose marks for not covering all three bullet points in an IELTS letter?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Missing or under-developing a bullet point lowers your Task Achievement band. Cover all three in roughly equal detail.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between informal and semi-formal IELTS letters?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Informal is for close friends and family (relaxed, contractions, first names). Semi-formal is for people you know but aren\'t close to — a neighbour, a colleague, a landlord — so it\'s polite but a little warmer than a fully formal letter.',
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

      {/* Title */}
      <h1 className="text-4xl font-bold mb-4 text-slate-900 leading-tight">
        How to Write an Informal IELTS Letter
      </h1>
      <p className="text-lg text-slate-500 mb-2">General Training – Writing Task 1</p>

      {/* Quick reference bar */}
      <div className="grid grid-cols-3 gap-3 my-6">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-blue-700">150+</div>
          <div className="text-xs text-blue-600 font-medium mt-1">minimum words</div>
        </div>
        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-indigo-700">20 min</div>
          <div className="text-xs text-indigo-600 font-medium mt-1">recommended time</div>
        </div>
        <div className="bg-violet-50 border border-violet-200 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-violet-700">3</div>
          <div className="text-xs text-violet-600 font-medium mt-1">bullet points to cover</div>
        </div>
      </div>

      <p className="text-slate-700 leading-relaxed mb-8">
        In the <strong>IELTS General Training Writing Task 1</strong>, you're given a situation and asked to write a letter of <strong>at least 150 words</strong> in about <strong>20 minutes</strong>. The letter can be formal, semi-formal, or <strong>informal</strong> — and the tone you choose directly affects your score. This guide focuses on the <strong>informal letter</strong>: how to recognise it, structure it, and fill it with the right language to hit a high band.
      </p>

      {/* Table of Contents */}
      <nav className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-10">
        <h2 className="text-base font-bold mb-4 text-slate-800 uppercase tracking-wide">Contents</h2>
        <ul className="grid md:grid-cols-2 gap-1 text-sm">
          {[
            ['#when-informal', 'When is the letter informal?'],
            ['#structure', 'Structure of an informal letter'],
            ['#language', 'Language features'],
            ['#phrase-bank', 'Quick phrase bank'],
            ['#method', 'Step-by-step method'],
            ['#sample', 'Sample question & model answer'],
            ['#mistakes', 'Common mistakes to avoid'],
            ['#marking', 'How it\'s marked'],
            ['#checklist', 'Final checklist'],
            ['#faq', 'Frequently asked questions'],
          ].map(([href, label]) => (
            <li key={href}>
              <a href={href} className="text-blue-700 hover:underline">{label}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── When Informal ── */}
      <section id="when-informal" className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">When Is the Letter Informal?</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          You write an informal letter when the person you're writing to is someone you <strong>know well</strong> — a close friend, a family member, or a relative. The prompt usually signals this clearly with words like <em>a friend</em>, <em>your cousin</em>, or <em>someone you know well</em>.
        </p>
        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="bg-green-50 border border-green-200 rounded-xl p-5">
            <h3 className="font-bold text-green-800 mb-3">Informal — write casually when the prompt says:</h3>
            <ul className="text-sm text-green-700 space-y-1">
              <li>✓ "a friend"</li>
              <li>✓ "your cousin"</li>
              <li>✓ "someone you know well"</li>
              <li>✓ "a close colleague"</li>
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-5">
            <h3 className="font-bold text-red-800 mb-3">Formal — switch tone when the prompt says:</h3>
            <ul className="text-sm text-red-700 space-y-1">
              <li>✗ "the manager"</li>
              <li>✗ "a company"</li>
              <li>✗ "an official"</li>
              <li>✗ "whom it may concern"</li>
            </ul>
          </div>
        </div>
        <p className="text-slate-700 leading-relaxed">
          Reading the prompt carefully to identify the relationship is the <strong>single most important first step</strong>. Getting the tone wrong costs you marks in both Task Achievement and Lexical Resource.
        </p>
      </section>

      <div className="my-8"><GoogleAd adSlot="6406598038" /></div>

      {/* ── Structure ── */}
      <section id="structure" className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Structure of an Informal IELTS Letter</h2>
        <p className="text-slate-700 leading-relaxed mb-6">A strong informal letter has five clear parts:</p>
        <div className="space-y-4">
          {[
            {
              num: '1',
              title: 'Greeting (Salutation)',
              desc: 'Use Dear + first name, or a more relaxed opener.',
              example: 'Dear Sam, / Hi Anna, / Hello Tom,',
              color: 'blue',
            },
            {
              num: '2',
              title: 'Opening line',
              desc: 'Start warmly. Ask how they are, mention your last contact, or jump straight to your reason for writing.',
              example: "How are you doing? It's been ages since we last spoke!",
              color: 'indigo',
            },
            {
              num: '3',
              title: 'Body (the three bullet points)',
              desc: 'The prompt gives you three things to cover. Each one usually becomes its own short paragraph. Address all three fully — missing one will lower your Task Achievement score.',
              example: null,
              color: 'violet',
            },
            {
              num: '4',
              title: 'Closing line',
              desc: 'Wrap up in a friendly way.',
              example: "Anyway, I'd better get going. Write back soon!",
              color: 'sky',
            },
            {
              num: '5',
              title: 'Sign-off',
              desc: 'Use a casual closing + your first name only.',
              example: 'Best wishes, / All the best, / Take care, / Love,\nJamie',
              color: 'teal',
            },
          ].map(({ num, title, desc, example, color }) => {
            const colors: Record<string, string> = {
              blue: 'bg-blue-50 border-blue-200',
              indigo: 'bg-indigo-50 border-indigo-200',
              violet: 'bg-violet-50 border-violet-200',
              sky: 'bg-sky-50 border-sky-200',
              teal: 'bg-teal-50 border-teal-200',
            };
            const numColors: Record<string, string> = {
              blue: 'bg-blue-600',
              indigo: 'bg-indigo-600',
              violet: 'bg-violet-600',
              sky: 'bg-sky-600',
              teal: 'bg-teal-600',
            };
            return (
              <div key={num} className={`border rounded-xl p-5 ${colors[color]}`}>
                <div className="flex items-start gap-4">
                  <span className={`${numColors[color]} text-white text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5`}>{num}</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900 mb-1">{title}</h3>
                    <p className="text-sm text-slate-700 mb-2">{desc}</p>
                    {example && (
                      <div className="bg-white/60 rounded-lg px-4 py-2 text-sm text-slate-600 italic whitespace-pre-line border border-white/80">
                        {example}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Language Features ── */}
      <section id="language" className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Language Features of Informal Letters</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          This is what separates an informal letter from a formal one. Aim to include:
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {[
            { label: 'Contractions', examples: "I'm, you're, don't, can't, it's, I'd" },
            { label: 'Phrasal verbs', examples: 'catch up, drop by, sort out, get hold of, pop round' },
            { label: 'Friendly idioms', examples: 'a lifesaver, owe you one, ages, no worries' },
            { label: 'Personal touches', examples: 'questions, exclamations, asides like Oh, and… / By the way… / Guess what!' },
          ].map(({ label, examples }) => (
            <div key={label} className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
              <div className="font-semibold text-emerald-800 mb-1">{label}</div>
              <div className="text-sm text-emerald-700 italic">{examples}</div>
            </div>
          ))}
        </div>
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl">
          <p className="text-amber-800 text-sm">
            <strong>Avoid</strong> stiff phrases like <em>"I am writing to inform you"</em> or <em>"I look forward to your prompt response"</em> — those belong in a formal letter.
          </p>
        </div>
      </section>

      <div className="my-8"><GoogleAd adSlot="6406598038" /></div>

      {/* ── Phrase Bank ── */}
      <section id="phrase-bank" className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">A Quick Phrase Bank</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-800 mb-3 text-sm uppercase tracking-wide">Openers</h3>
            <ul className="text-sm text-blue-700 space-y-2">
              <li>How's everything going?</li>
              <li>Thanks so much for your letter — it was great to hear from you.</li>
              <li>Sorry I haven't been in touch lately, I've been so busy!</li>
            </ul>
          </div>
          <div className="bg-violet-50 border border-violet-200 rounded-xl p-5">
            <h3 className="font-bold text-violet-800 mb-3 text-sm uppercase tracking-wide">Linking / body</h3>
            <ul className="text-sm text-violet-700 space-y-2">
              <li>Anyway, the reason I'm writing is…</li>
              <li>Oh, and another thing…</li>
              <li>You'll never guess what happened…</li>
            </ul>
          </div>
          <div className="bg-teal-50 border border-teal-200 rounded-xl p-5">
            <h3 className="font-bold text-teal-800 mb-3 text-sm uppercase tracking-wide">Closers</h3>
            <ul className="text-sm text-teal-700 space-y-2">
              <li>Anyway, I'd better dash.</li>
              <li>Can't wait to see you!</li>
              <li>Let me know what you think.</li>
              <li>Give my love to everyone.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Method ── */}
      <section id="method" className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Step-by-Step Method</h2>
        <div className="space-y-3">
          {[
            ['Read the prompt twice', 'Decide the tone (here: informal). Identify the relationship before writing a single word.'],
            ['Underline the three bullet points', 'You must cover all three. Mark them clearly so you don\'t miss one under time pressure.'],
            ['Plan briefly', 'One paragraph per bullet, plus an opener and closer. Thirty seconds of planning saves three minutes of rewriting.'],
            ['Write in a natural, friendly voice', 'Aim for 160–190 words. Use contractions and phrasal verbs throughout.'],
            ['Check', 'Spelling, contractions, whether all three points are fully covered, and your word count.'],
          ].map(([step, detail], i) => (
            <div key={step} className="flex gap-4 items-start bg-slate-50 border border-slate-200 rounded-xl p-4">
              <span className="bg-slate-700 text-white text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center shrink-0">{i + 1}</span>
              <div>
                <div className="font-semibold text-slate-900">{step}</div>
                <div className="text-sm text-slate-600 mt-0.5">{detail}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="my-8"><GoogleAd adSlot="6406598038" /></div>

      {/* ── Sample ── */}
      <section id="sample" className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Sample Question + Model Answer</h2>

        <div className="bg-slate-100 border border-slate-300 rounded-xl p-6 mb-6">
          <p className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-3">Question</p>
          <p className="text-slate-700 mb-3">
            A friend has agreed to look after your house and pet while you are on holiday. Write a letter to your friend. In your letter:
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-700 text-sm">
            <li>give contact details you will need while you are away</li>
            <li>explain how to care for your pet</li>
            <li>describe other things they should do around the house</li>
          </ul>
        </div>

        <div className="bg-white border-2 border-blue-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">Model Answer</span>
            <span className="text-xs text-slate-400">≈ 175 words · Band 7–9</span>
          </div>
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
            <p><strong>Dear Sam,</strong></p>
            <p>
              Thanks a million for agreeing to look after the house while I'm off in Spain next week — you're a real lifesaver! I honestly owe you one.
            </p>
            <p>
              Let me give you my details so you can reach me. I'll be staying at the Sol Hotel in Barcelona, and the easiest way to get hold of me is on WhatsApp, since normal calls might be pricey. If it's ever urgent, my sister Lara has the hotel number too.
            </p>
            <p>
              Now, about Biscuit. He needs feeding twice a day, morning and evening — there's a big bag of food in the kitchen cupboard. Don't forget to take him for a quick walk every afternoon, or he gets really grumpy! He also loves a belly rub before bed.
            </p>
            <p>
              Oh, one more thing — could you water the plants every couple of days and pop the bins out on Thursday? That would be brilliant.
            </p>
            <p>
              Thanks again, Sam. I'll bring you back something nice!
            </p>
            <p><strong>All the best,<br />Jamie</strong></p>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-4 text-sm text-blue-800">
          Notice the <strong>contractions</strong>, <strong>phrasal verbs</strong> (<em>get hold of, pop out</em>), <strong>idioms</strong> (<em>a lifesaver, owe you one</em>), and a separate paragraph for each bullet point.
        </div>
      </section>

      {/* Internal links box */}
      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5 my-8">
        <h3 className="font-semibold text-indigo-900 mb-2">More IELTS Writing practice</h3>
        <ul className="space-y-1 text-sm">
          <li><Link to="/ielts/ielts-writing-task-1-bar-chart-sample-answer/" className="text-indigo-700 hover:underline">Task 1 Bar Chart — Band 8+ model answers with vocabulary notes</Link></li>
          <li><Link to="/ielts/50-band-9-ielts-writing-task-2-sample-essays/" className="text-indigo-700 hover:underline">50 Band 9 Writing Task 2 sample essays</Link></li>
          <li><Link to="/ielts/tests/reading/academic/test-1/" className="text-indigo-700 hover:underline">IELTS Academic Reading Practice Test 1 — full 60-minute mock</Link></li>
          <li><Link to="/typogrammar-write" className="text-indigo-700 hover:underline">TypoGrammar Write — check your letter with AI before the exam</Link></li>
        </ul>
      </div>

      <div className="my-8"><GoogleAd adSlot="6406598038" /></div>

      {/* ── Common Mistakes ── */}
      <section id="mistakes" className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Common Mistakes to Avoid</h2>
        <div className="space-y-3">
          {[
            ['Mixing tones', 'Slipping into formal phrases in an informal letter. Keep the register consistent throughout.'],
            ['Missing a bullet point', 'All three must be covered, ideally in roughly equal detail. Missing one directly lowers Task Achievement.'],
            ['Going under 150 words', 'You lose marks, so always check your length. Aim for 160–190.'],
            ['Overusing slang', 'Keep it friendly, not sloppy or full of text-speak. Contractions yes; u, gonna, lol — no.'],
            ['Forgetting the greeting or sign-off', 'Both are expected in every letter. Missing either signals poor letter-writing conventions.'],
            ['Writing one giant paragraph', 'Use clear paragraphing for each idea. One paragraph per bullet point is the clearest approach.'],
          ].map(([mistake, fix]) => (
            <div key={mistake} className="flex gap-3 items-start bg-red-50 border border-red-200 rounded-xl p-4">
              <span className="text-red-500 font-bold text-lg shrink-0 mt-0.5">✗</span>
              <div>
                <div className="font-semibold text-red-900">{mistake}</div>
                <div className="text-sm text-red-700 mt-0.5">{fix}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Marking ── */}
      <section id="marking" className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">How It's Marked</h2>
        <p className="text-slate-700 mb-4">Examiners score Task 1 on four equal criteria:</p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { label: 'Task Achievement', desc: 'Did you cover all three points and use the right tone?', color: 'blue' },
            { label: 'Coherence and Cohesion', desc: 'Is it well organised with good linking between ideas?', color: 'violet' },
            { label: 'Lexical Resource', desc: 'Is your vocabulary varied and appropriate — here, suitably informal?', color: 'emerald' },
            { label: 'Grammatical Range and Accuracy', desc: 'Variety of structures with few errors.', color: 'amber' },
          ].map(({ label, desc, color }) => {
            const cls: Record<string, string> = {
              blue: 'bg-blue-50 border-blue-200 text-blue-700',
              violet: 'bg-violet-50 border-violet-200 text-violet-700',
              emerald: 'bg-emerald-50 border-emerald-200 text-emerald-700',
              amber: 'bg-amber-50 border-amber-200 text-amber-700',
            };
            return (
              <div key={label} className={`border rounded-xl p-5 ${cls[color]}`}>
                <div className="font-bold mb-1">{label}</div>
                <div className="text-sm opacity-90">{desc}</div>
              </div>
            );
          })}
        </div>
        <p className="text-slate-600 text-sm mt-4">
          Getting the <strong>tone right</strong> feeds directly into Task Achievement and Lexical Resource, which is why informal language matters so much here.
        </p>
      </section>

      {/* ── Checklist ── */}
      <section id="checklist" className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Final Checklist</h2>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <ul className="space-y-2 text-slate-700 text-sm">
            {[
              'Correct informal greeting (Dear + first name)',
              'Friendly opening line',
              'All three bullet points covered, one paragraph each',
              'Contractions, phrasal verbs, and a chatty tone',
              'Warm closing line',
              'Informal sign-off + first name',
              'At least 150 words (aim for 160–190)',
              'Checked spelling and grammar',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="w-5 h-5 border-2 border-slate-400 rounded flex items-center justify-center shrink-0 text-slate-400 text-xs">☐</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="my-8"><GoogleAd adSlot="6406598038" /></div>

      {/* ── FAQ ── */}
      <section id="faq" className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How long should an informal IELTS letter be?',
              a: 'At least 150 words. Aim for 160–190 — enough to develop all three points without rushing or running out of time. Going under 150 will cost you marks.',
            },
            {
              q: 'How much time should I spend on it?',
              a: "About 20 minutes. Task 2 is worth more, so don't overspend. Roughly: 3–4 minutes planning, 13–14 writing, 3 checking.",
            },
            {
              q: 'How do I know if the letter should be informal?',
              a: "Look at who you're writing to. If it's a friend, family member, or someone you know well, write informally. If it's a manager, official, or company, write formally.",
            },
            {
              q: 'What greeting should I use?',
              a: "Dear + first name (Dear Sam,) is safe and natural. Hi or Hello + name also work for informal letters. Never use Dear Sir/Madam — that's strictly formal.",
            },
            {
              q: 'How should I sign off?',
              a: 'Use a casual closing such as Best wishes, All the best, Take care, or Love, followed by your first name only. Avoid Yours faithfully or Yours sincerely — those are formal.',
            },
            {
              q: 'Can I use contractions and slang?',
              a: "Yes to contractions (I'm, don't, you'll) — they're expected in informal letters. Use mild idioms and phrasal verbs too. Avoid heavy slang or text-speak (gonna, u, lol), which can look careless.",
            },
            {
              q: 'Do I need to invent a name and details?',
              a: "Yes — you can make up any names, dates, places, and details to make the letter realistic. Examiners don't check facts; they check your English.",
            },
            {
              q: 'Should each bullet point be a separate paragraph?',
              a: "That's the clearest approach. One paragraph per bullet, plus a short opener and closer, gives you a tidy, well-organised letter that's easy to mark.",
            },
            {
              q: 'Will I lose marks for not covering all three points?',
              a: 'Yes. Missing or under-developing a bullet point lowers your Task Achievement band. Cover all three in roughly equal detail.',
            },
            {
              q: "What's the difference between informal and semi-formal letters?",
              a: "Informal is for close friends and family (relaxed, contractions, first names). Semi-formal is for people you know but aren't close to — a neighbour, a colleague, a landlord — so it's polite but a little warmer than a fully formal letter.",
            },
            {
              q: 'Can I start with "How are you?"',
              a: "Yes, that's a natural informal opener. You can also reference your last contact (It's been ages!) before getting to your reason for writing.",
            },
            {
              q: 'Is handwriting or word count my main worry?',
              a: "On paper-based IELTS, write neatly. In both formats, count your words mentally and make sure you're over 150 — that and covering all three points are the two things most likely to cost you marks.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 mb-2">{q}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom links */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mt-4">
        <h3 className="font-semibold text-slate-800 mb-3">Continue your IELTS preparation</h3>
        <div className="grid md:grid-cols-2 gap-3 text-sm">
          <Link to="/ielts/ielts-writing-task-1-bar-chart-sample-answer/" className="flex items-center gap-2 text-blue-700 hover:underline">
            <span className="text-slate-400">→</span> Task 1 Bar Chart Sample Answers
          </Link>
          <Link to="/ielts/50-band-9-ielts-writing-task-2-sample-essays/" className="flex items-center gap-2 text-blue-700 hover:underline">
            <span className="text-slate-400">→</span> 50 Band 9 Writing Task 2 Essays
          </Link>
          <Link to="/ielts/tests/reading/academic/test-1/" className="flex items-center gap-2 text-blue-700 hover:underline">
            <span className="text-slate-400">→</span> Academic Reading Practice Test 1
          </Link>
          <Link to="/typogrammar-write" className="flex items-center gap-2 text-blue-700 hover:underline">
            <span className="text-slate-400">→</span> TypoGrammar Write Extension
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IELTSInformalLetterPage;
