
import React from 'react';
import GoogleAd from '../components/GoogleAd';
import { ArticleParagraph, ArticleHeading, InlineCode, BulletList } from '../components/ArticleComponents';
import PronunciationFetcher from '../components/PronunciationFetcher';
import usePageMetadata from '../hooks/usePageMetadata';

const VerbTable: React.FC<{ verbs: { base: string, past: string }[] }> = ({ verbs }) => (
    <div className="overflow-x-auto my-6">
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
    usePageMetadata({
        title: 'How to Pronounce -ED Endings | Past Tense Pronunciation Rules | TypoGrammar',
        description: 'Master the three pronunciation rules for -ed endings in English past tense verbs: /t/, /d/, and /ɪd/ sounds. Learn which verbs use each pronunciation with examples and practice.'
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

    return (
        <>
        <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 dark:shadow-slate-900/50">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-body text-base font-semibold text-blue-600 mb-4 dark:text-blue-400">Pronunciation Guide</p>
                <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight dark:text-slate-100">Pronunciation of -ed Endings</h1>
              </div>
            </div>

            <ArticleParagraph>
                In English, the <InlineCode>-ed</InlineCode> ending for regular past tense verbs isn't always pronounced the same way. It has three distinct sounds: /t/, /d/, and /ɪd/ (which sounds like 'id'). The correct pronunciation depends on the final sound of the base verb. Understanding these rules will make your spoken English sound much more natural.
            </ArticleParagraph>

            <ArticleHeading>Rule 1: The /t/ Sound</ArticleHeading>
            <ArticleParagraph>
                If the base verb ends in a <strong>voiceless</strong> sound, the <InlineCode>-ed</InlineCode> ending is pronounced as /t/. Voiceless sounds are made without vibrating your vocal cords.
            </ArticleParagraph>
            <BulletList items={[
                "Sounds like: /p/, /k/, /s/, /f/, /θ/ (th), /ʃ/ (sh), /tʃ/ (ch)."
            ]} />
            <ArticleParagraph>
                Think of these sounds as sharp and whispery. When you add <InlineCode>-ed</InlineCode>, it sounds like a 't' is added to the end. For example, 'helped' sounds like 'helpt'.
            </ArticleParagraph>
            <VerbTable verbs={tSoundVerbs} />

            <ArticleHeading>Rule 2: The /d/ Sound</ArticleHeading>
            <ArticleParagraph>
                If the base verb ends in a <strong>voiced</strong> sound, the <InlineCode>-ed</InlineCode> ending is pronounced as /d/. Voiced sounds are made by vibrating your vocal cords. You can feel this vibration if you touch your throat.
            </ArticleParagraph>
            <BulletList items={[
                "Sounds like: /b/, /g/, /v/, /z/, /ð/ (th), /ʒ/ (zh), /dʒ/ (j), /l/, /m/, /n/, /ŋ/ (ng), /r/, and all vowel sounds (a, e, i, o, u)."
            ]} />
            <ArticleParagraph>
                When you add <InlineCode>-ed</InlineCode>, it sounds like a 'd' is added. For example, 'called' sounds like 'calld'.
            </ArticleParagraph>
            <VerbTable verbs={dSoundVerbs} />

            <ArticleHeading>Rule 3: The /ɪd/ Sound</ArticleHeading>
            <ArticleParagraph>
                If the base verb ends in a /t/ or /d/ sound, the <InlineCode>-ed</InlineCode> ending is pronounced as /ɪd/. This adds an extra syllable to the word.
            </ArticleParagraph>
            <ArticleParagraph>
                This is the easiest rule to remember. If the verb already ends in the sound 't' or 'd', we need to add a vowel sound before the final 'd' to make it pronounceable. For example, 'wanted' sounds like 'want-id'.
            </ArticleParagraph>
            <VerbTable verbs={idSoundVerbs} />

            <ArticleHeading>Practice Tip</ArticleHeading>
            <ArticleParagraph>
                A great way to practice is to say the base verb aloud and feel your throat. If your vocal cords vibrate on the final sound, the ending is /d/. If they don't, it's /t/. And if the verb already ends in a 't' or 'd' sound, you know it's /ɪd/. Listen to native speakers and try to imitate the sounds you hear!
            </ArticleParagraph>
        </article>
                <div className="mt-8">
                    <GoogleAd adSlot="6406598038" />
                </div>
        </>
    );
};

export default PastTensePronunciationPage;
