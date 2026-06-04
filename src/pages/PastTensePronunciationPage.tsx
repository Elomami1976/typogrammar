
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleAd from '../components/GoogleAd';
import SchemaMarkup from '../components/SchemaMarkup';
import { ArticleParagraph, ArticleHeading, InlineCode, BulletList } from '../components/ArticleComponents';
import PronunciationFetcher from '../components/PronunciationFetcher';
import usePageMetadata from '../hooks/usePageMetadata';

const VerbTable: React.FC<{ verbs: { base: string, past: string }[]; id?: string }> = ({ verbs, id }) => (
    <div id={id} className="overflow-x-auto my-6 scroll-mt-24">
        <table className="min-w-full text-left text-lg font-body">
            <thead>
                <tr className="bg-slate-100 dark:bg-slate-700">
                    <th scope="col" className="px-6 py-3 font-semibold text-slate-800 rounded-tl-lg dark:text-slate-200">Base Verb</th>
                    <th scope="col" className="px-6 py-3 font-semibold text-slate-800 rounded-tr-lg dark:text-slate-200">Past Tense (-ed)</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                {verbs.map(({ base, past }) => (
                    <tr key={base} className="odd:bg-white even:bg-slate-50 dark:odd:bg-slate-800/50 dark:even:bg-slate-800/20">
                        <td className="px-6 py-4"><InlineCode>{base}</InlineCode></td>
                        <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                                <InlineCode>{past}</InlineCode>
                                <PronunciationFetcher word={past} />
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

const PastTensePronunciationPage: React.FC = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    usePageMetadata({
        title: 'How to Pronounce -ED Endings: 3 Rules with Audio Examples | TypoGrammar',
        description: 'Master the 3 pronunciation rules for -ed endings in English: /t/, /d/, and /ɪd/ sounds. Interactive audio examples for walked, played, wanted & 20+ verbs. Essential for ESL learners.'
    });

    const tSoundVerbs = [
        { base: 'ask', past: 'asked' },
        { base: 'help', past: 'helped' },
        { base: 'laugh', past: 'laughed' },
        { base: 'look', past: 'looked' },
        { base: 'miss', past: 'missed' },
        { base: 'watch', past: 'watched' },
        { base: 'wash', past: 'washed' },
    ];

    const dSoundVerbs = [
        { base: 'allow', past: 'allowed' },
        { base: 'call', past: 'called' },
        { base: 'clean', past: 'cleaned' },
        { base: 'enjoy', past: 'enjoyed' },
        { base: 'live', past: 'lived' },
        { base: 'open', past: 'opened' },
        { base: 'play', past: 'played' },
    ];

    const idSoundVerbs = [
        { base: 'accept', past: 'accepted' },
        { base: 'add', past: 'added' },
        { base: 'decide', past: 'decided' },
        { base: 'need', past: 'needed' },
        { base: 'start', past: 'started' },
        { base: 'visit', past: 'visited' },
        { base: 'want', past: 'wanted' },
    ];

    const faqData = [
        {
            question: 'Why is the -ed ending pronounced differently in different words?',
            answer: 'The -ed ending has three pronunciations (/t/, /d/, /ɪd/) based on the final sound of the base verb. This variation exists to make words easier to pronounce. For example, saying "walked" with a /d/ sound would be awkward, so we naturally use /t/. The rules follow voicing patterns in English phonology.'
        },
        {
            question: 'How do I know if a sound is voiced or voiceless?',
            answer: 'Place your fingers on your throat while making a sound. If you feel vibration, it\'s voiced (b, g, v, z, etc.). If there\'s no vibration, it\'s voiceless (p, k, f, s, etc.). Vowels are always voiced. This determines whether -ed is pronounced /t/ (after voiceless) or /d/ (after voiced).'
        },
        {
            question: 'When do I add an extra syllable with -ed?',
            answer: 'Add an extra syllable (/ɪd/) only when the base verb ends in a /t/ or /d/ sound. Examples: wanted (want-ed), needed (need-ed), started (start-ed). This creates two syllables from the -ed ending, unlike /t/ or /d/ which blend into the word.'
        },
        {
            question: 'What are common mistakes with -ed pronunciation?',
            answer: 'Common mistakes include: (1) Always pronouncing -ed as a separate syllable ("walk-ed" instead of "walkt"), (2) Using /d/ after voiceless sounds, (3) Not adding the extra syllable after t/d sounds. Listening and practice help overcome these issues.'
        },
        {
            question: 'Does this apply to all words ending in -ed?',
            answer: 'These rules apply to regular past tense verbs and past participles. They also apply to adjectives derived from verbs (bored, excited, interested). However, some -ed words are always pronounced /ɪd/ regardless of the root: naked, wicked, beloved, sacred, crooked.'
        },
        {
            question: 'How can I practice -ed pronunciation?',
            answer: 'Practice by: (1) Grouping verbs by their -ed sound and practicing each group, (2) Recording yourself and comparing to native speakers, (3) Using minimal pairs (walked/wanted), (4) Reading aloud and exaggerating the sounds at first, (5) Using the audio buttons on this page to hear correct pronunciation.'
        }
    ];

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqData.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
            }
        }))
    };

    return (
        <>
        <SchemaMarkup
            type="Article"
            data={{
                headline: 'How to Pronounce -ED Endings: Complete Guide with Audio',
                description: 'Master the three pronunciation rules for -ed endings in English past tense verbs with interactive audio examples.',
                author: {
                    '@type': 'Organization',
                    name: 'TypoGrammar'
                },
                publisher: {
                    '@type': 'Organization',
                    name: 'TypoGrammar',
                    url: 'https://typogrammar.com'
                },
                datePublished: '2024-02-01',
                dateModified: '2025-12-25',
                mainEntityOfPage: {
                    '@type': 'WebPage',
                    '@id': 'https://typogrammar.com/pronunciation-of-ed'
                },
                keywords: '-ed pronunciation, past tense pronunciation, English pronunciation rules, voiced voiceless sounds, ESL pronunciation, walked wanted played pronunciation',
                educationalLevel: 'Beginner to Intermediate',
                learningResourceType: 'Pronunciation Guide'
            }}
        />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-body text-base font-semibold text-blue-600 mb-4 dark:text-blue-400">Pronunciation Guide • Past Tense</p>
                <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight dark:text-slate-100">Pronunciation of -ed Endings</h1>
                <p className="font-body text-xl text-slate-600 mb-8 dark:text-slate-400">
                  Master the three sounds of past tense: /t/, /d/, and /ɪd/
                </p>
              </div>
            </div>

            {/* Quick Summary Cards */}
            <div className="grid md:grid-cols-3 gap-4 mb-10">
                <a href="#t-sound" className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-md transition-all dark:from-blue-900/30 dark:to-blue-800/30 dark:border-blue-700">
                    <div className="text-3xl font-bold text-blue-600 mb-2 dark:text-blue-400">/t/</div>
                    <div className="font-semibold text-slate-800 dark:text-slate-200">After voiceless sounds</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">walked, helped, washed</div>
                </a>
                <a href="#d-sound" className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200 hover:shadow-md transition-all dark:from-green-900/30 dark:to-green-800/30 dark:border-green-700">
                    <div className="text-3xl font-bold text-green-600 mb-2 dark:text-green-400">/d/</div>
                    <div className="font-semibold text-slate-800 dark:text-slate-200">After voiced sounds</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">played, called, lived</div>
                </a>
                <a href="#id-sound" className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200 hover:shadow-md transition-all dark:from-purple-900/30 dark:to-purple-800/30 dark:border-purple-700">
                    <div className="text-3xl font-bold text-purple-600 mb-2 dark:text-purple-400">/ɪd/</div>
                    <div className="font-semibold text-slate-800 dark:text-slate-200">After /t/ or /d/ sounds</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">wanted, needed, started</div>
                </a>
            </div>

            <ArticleParagraph>
                In English, the <InlineCode>-ed</InlineCode> ending for regular past tense verbs isn't always pronounced the same way. It has three distinct sounds: /t/, /d/, and /ɪd/ (which sounds like 'id'). The correct pronunciation depends on the final sound of the base verb. Understanding these rules will make your spoken English sound much more natural.
            </ArticleParagraph>

            {/* Key Insight Box */}
            <div className="my-8 p-6 bg-teal-50 rounded-xl border border-teal-200 dark:bg-teal-900/20 dark:border-teal-800/30">
                <h3 className="font-heading text-lg font-bold text-teal-800 mb-3 dark:text-teal-200">The Simple Rule</h3>
                <p className="text-slate-700 dark:text-slate-300">
                    <strong>Touch your throat</strong> while saying the last sound of the base verb. If you feel vibration → use <strong>/d/</strong>. No vibration → use <strong>/t/</strong>. If it ends in t or d → use <strong>/ɪd/</strong>.
                </p>
            </div>

            <ArticleHeading id="t-sound">Rule 1: The /t/ Sound</ArticleHeading>
            <ArticleParagraph>
                If the base verb ends in a <strong>voiceless</strong> sound, the <InlineCode>-ed</InlineCode> ending is pronounced as /t/. Voiceless sounds are made without vibrating your vocal cords.
            </ArticleParagraph>
            <BulletList items={[
                "Sounds like: /p/, /k/, /s/, /f/, /θ/ (th), /ʃ/ (sh), /tʃ/ (ch)."
            ]} />
            <ArticleParagraph>
                Think of these sounds as sharp and whispery. When you add <InlineCode>-ed</InlineCode>, it sounds like a 't' is added to the end. For example, 'helped' sounds like 'helpt'.
            </ArticleParagraph>
            <VerbTable verbs={tSoundVerbs} id="t-sound-table" />

            <ArticleHeading id="d-sound">Rule 2: The /d/ Sound</ArticleHeading>
            <ArticleParagraph>
                If the base verb ends in a <strong>voiced</strong> sound, the <InlineCode>-ed</InlineCode> ending is pronounced as /d/. Voiced sounds are made by vibrating your vocal cords. You can feel this vibration if you touch your throat.
            </ArticleParagraph>
            <BulletList items={[
                "Sounds like: /b/, /g/, /v/, /z/, /ð/ (th), /ʒ/ (zh), /dʒ/ (j), /l/, /m/, /n/, /ŋ/ (ng), /r/, and all vowel sounds (a, e, i, o, u)."
            ]} />
            <ArticleParagraph>
                When you add <InlineCode>-ed</InlineCode>, it sounds like a 'd' is added. For example, 'called' sounds like 'calld'.
            </ArticleParagraph>
            <VerbTable verbs={dSoundVerbs} id="d-sound-table" />

            <div className="my-8">
                <GoogleAd adSlot="6406598038" />
            </div>

            <ArticleHeading id="id-sound">Rule 3: The /ɪd/ Sound</ArticleHeading>
            <ArticleParagraph>
                If the base verb ends in a /t/ or /d/ sound, the <InlineCode>-ed</InlineCode> ending is pronounced as /ɪd/. This adds an extra syllable to the word.
            </ArticleParagraph>
            <ArticleParagraph>
                This is the easiest rule to remember. If the verb already ends in the sound 't' or 'd', we need to add a vowel sound before the final 'd' to make it pronounceable. For example, 'wanted' sounds like 'want-id'.
            </ArticleParagraph>
            <VerbTable verbs={idSoundVerbs} id="id-sound-table" />

            {/* Practice Tips Section */}
            <div className="mt-12 p-6 bg-green-50 rounded-xl border border-green-200 dark:bg-green-900/20 dark:border-green-800/30">
                <h3 className="font-heading text-xl font-bold text-green-800 mb-4 dark:text-green-200">Practice Tips</h3>
                <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-3">
                        <span className="text-green-500 mt-1">✓</span>
                        <span><strong>Feel your throat:</strong> Place your fingers on your throat while making the final sound of the base verb. Vibration = voiced = /d/. No vibration = voiceless = /t/.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-green-500 mt-1">✓</span>
                        <span><strong>Practice in groups:</strong> Group verbs by their -ed sound and practice each group together to build muscle memory.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-green-500 mt-1">✓</span>
                        <span><strong>Listen and repeat:</strong> Click the audio buttons above to hear correct pronunciation, then imitate what you hear.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-green-500 mt-1">✓</span>
                        <span><strong>Record yourself:</strong> Compare your recordings to native speakers to identify areas for improvement.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-green-500 mt-1">✓</span>
                        <span><strong>Remember exceptions:</strong> Some adjectives like "naked," "wicked," and "beloved" always use /ɪd/ regardless of the rules.</span>
                    </li>
                </ul>
            </div>

            {/* FAQ Section */}
            <section className="mt-12">
                <ArticleHeading>Frequently Asked Questions</ArticleHeading>
                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <div key={index} className="border border-slate-200 rounded-lg overflow-hidden dark:border-slate-700">
                            <button
                                className="w-full px-6 py-4 text-left flex justify-between items-center bg-slate-50 hover:bg-slate-100 dark:bg-slate-800/50 dark:hover:bg-slate-800"
                                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                                aria-expanded={openFAQ === index}
                            >
                                <span className="font-semibold text-slate-800 dark:text-slate-200">{faq.question}</span>
                                <span className="text-slate-500 text-xl">{openFAQ === index ? '−' : '+'}</span>
                            </button>
                            {openFAQ === index && (
                                <div className="px-6 py-4 bg-white dark:bg-slate-800/30">
                                    <p className="text-slate-700 dark:text-slate-300">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Related Resources */}
            <section className="mt-12 p-6 bg-slate-50 rounded-xl border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700">
                <h3 className="font-heading text-xl font-bold text-slate-800 mb-4 dark:text-slate-200">Related Pronunciation & Grammar Resources</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Link to="/pronunciation/" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all dark:bg-slate-800 dark:border-slate-700 dark:hover:border-blue-600">
                        <h4 className="font-semibold text-slate-800 dark:text-slate-200">Pronunciation Tool</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Look up any word's pronunciation</p>
                    </Link>
                    <Link to="/irregular-verbs/" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all dark:bg-slate-800 dark:border-slate-700 dark:hover:border-blue-600">
                        <h4 className="font-semibold text-slate-800 dark:text-slate-200">Irregular Verbs</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Verbs that don't follow -ed rules</p>
                    </Link>
                    <Link to="/topics/past-simple/" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all dark:bg-slate-800 dark:border-slate-700 dark:hover:border-blue-600">
                        <h4 className="font-semibold text-slate-800 dark:text-slate-200">Past Simple Tense</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">When and how to use past tense</p>
                    </Link>
                    <Link to="/homophones-homonyms-homographs/" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all dark:bg-slate-800 dark:border-slate-700 dark:hover:border-blue-600">
                        <h4 className="font-semibold text-slate-800 dark:text-slate-200">Homophones</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Words that sound the same</p>
                    </Link>
                    <Link to="/commonly-confused-words/" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all dark:bg-slate-800 dark:border-slate-700 dark:hover:border-blue-600">
                        <h4 className="font-semibold text-slate-800 dark:text-slate-200">Confused Words</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Words that are often mixed up</p>
                    </Link>
                    <Link to="/basic-grammar-terminology/" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all dark:bg-slate-800 dark:border-slate-700 dark:hover:border-blue-600">
                        <h4 className="font-semibold text-slate-800 dark:text-slate-200">Grammar Terminology</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Key terms explained simply</p>
                    </Link>
                </div>
            </section>
        </article>
        <div className="mt-8">
            <GoogleAd adSlot="6406598038" />
        </div>
        </>
    );
};

export default PastTensePronunciationPage;
