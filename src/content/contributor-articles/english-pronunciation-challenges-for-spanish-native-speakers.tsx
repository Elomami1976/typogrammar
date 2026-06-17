import React from 'react';

const H2: React.FC<{ children: React.ReactNode; id?: string }> = ({
  children,
  id,
}) => (
  <h2
    id={id}
    className="font-heading mt-12 mb-4 text-2xl font-extrabold leading-tight text-slate-900 dark:text-slate-100 md:text-3xl"
  >
    {children}
    <span aria-hidden="true" className="mt-3 block h-[3px] w-12 bg-red-600" />
  </h2>
);

const H3: React.FC<{ children: React.ReactNode; id?: string }> = ({
  children,
  id,
}) => (
  <h3
    id={id}
    className="font-heading mt-8 mb-3 text-xl font-bold text-slate-900 dark:text-slate-100"
  >
    {children}
  </h3>
);

const P: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="mb-5 font-body text-base leading-relaxed text-slate-700 dark:text-slate-300 md:text-lg">
    {children}
  </p>
);

const UL: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ul className="mb-5 ml-6 space-y-2 list-disc font-body text-base leading-relaxed text-slate-700 dark:text-slate-300 md:text-lg">
    {children}
  </ul>
);

const OL: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ol className="mb-5 ml-6 space-y-2 list-decimal font-body text-base leading-relaxed text-slate-700 dark:text-slate-300 md:text-lg">
    {children}
  </ol>
);

const LI: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li>{children}</li>
);

const Table: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="mb-6 overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
    <table className="w-full border-collapse text-sm md:text-base">
      {children}
    </table>
  </div>
);

const THead: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <thead className="bg-slate-100 dark:bg-slate-800">{children}</thead>
);

const TBody: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <tbody>{children}</tbody>
);

const TR: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <tr className="border-b border-slate-200 dark:border-slate-700 last:border-0">
    {children}
  </tr>
);

const TH: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <th className="px-4 py-2 text-left font-semibold text-slate-700 dark:text-slate-300">
    {children}
  </th>
);

const TD: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <td className="px-4 py-2 text-slate-700 dark:text-slate-300">{children}</td>
);

const WordBox: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="mb-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 px-5 py-4 font-body text-base leading-relaxed text-slate-700 dark:text-slate-300">
    {children}
  </div>
);

const DialogueLine: React.FC<{ children: React.ReactNode; speaker?: boolean }> = ({
  children,
  speaker,
}) => (
  <p
    className={`mb-1 font-body text-base text-slate-700 dark:text-slate-300 ${
      speaker ? 'pl-4 italic' : 'font-semibold'
    }`}
  >
    {children}
  </p>
);

const EnglishPronunciationChallengesForSpanishSpeakers: React.FC = () => (
  <>
    <H2 id="introduction">Introduction</H2>
    <P>
      After a few months of teaching English to Spanish native learners, I
      noticed that elementary and intermediate learners continued to make the
      same pronunciation mistakes as beginner learners. All this manifests
      itself despite having been exposed to the language for years and years.
      Therefore, the issue was not a lack of knowledge but a lack of exposure
      to the language. In this article, I will share the strategies that helped
      my students overcome these challenges and improve their accuracy in
      everyday communication. And in between I will add some anecdotes about my
      own blunders as a Spanish native speaker myself.
    </P>

    <H2 id="why-english-is-difficult">
      Why English Pronunciation is Difficult for Native Spanish Speakers
    </H2>
    <P>
      Unlike Spanish, English does not always follow predictable
      spelling-to-sound rules. The same letter combination is pronounced
      differently in different words. For that reason, Spanish speakers have
      significant difficulties in speaking practise.
    </P>

    <H2 id="challenge-1">
      Challenge 1: Final Consonants and Consonant Clusters
    </H2>
    <P>
      The most common error is the pronunciation of regular and irregular verbs.
      It is commonly seen when studying grammar that among the obstacles of
      putting grammar rules in practice, the students take two stances: hesitate
      during speech or guessing sounds with a Spanish mindset of word
      pronunciation. The pronunciation of final consonants is important as they
      set both verb tense and plural, such as worked, walks, dogs.
    </P>

    <Table>
      <THead>
        <TR>
          <TH>Typical mistake</TH>
          <TH>Examples</TH>
        </TR>
      </THead>
      <TBody>
        <TR>
          <TD>Final consonant omission</TD>
          <TD>
            <em>worked</em> reduced to <em>work</em>; <em>old</em> to{' '}
            <em>ol</em>; <em>trying</em> to <em>try</em>
          </TD>
        </TR>
        <TR>
          <TD>Adding a vowel as backup</TD>
          <TD>
            <em>student</em> becomes <em>estudent</em>;{' '}
            <em>organized</em> becomes <em>organaized</em>
          </TD>
        </TR>
        <TR>
          <TD>Reducing consonant clusters</TD>
          <TD>
            <em>asked</em>, <em>world</em>, <em>strengths</em>
          </TD>
        </TR>
      </TBody>
    </Table>

    <P>
      <strong>Activity to improve:</strong> Work gradual chains: starting from{' '}
      <em>ask</em>, then <em>asked</em>, then <em>I asked</em>, then{' '}
      <em>I asked him</em>. First, work the isolated consonant, then add it
      into sentences.
    </P>

    <H2 id="challenge-2">
      Challenge 2: Sounds That Do Not Exist in the Spanish Alphabet
    </H2>
    <P>
      For many Spanish learners, the biggest pronunciation obstacles are the
      /theta/ sound as in <em>think</em> and the /eth/ sound as in{' '}
      <em>this</em>. Also problematic are the combination of English vowel
      contrasts, final consonants, word stress, and reduced speech, because
      these features affect intelligibility across thousands of everyday words
      and sentences.
    </P>
    <P>
      Even though manuals give great importance to the /th/ sounds, for native
      Spanish speakers from certain regions of the Iberian Peninsula, this tends
      to be less critical to intelligibility than the other problems mentioned.
      The peninsular Spanish already possessed a nearby /th/ sound (as in{' '}
      <em>fianza</em> or <em>ceder</em>), so <em>think</em> tends to be easier
      to pronounce than for other Spanish speakers. For this case, the real
      challenge tends to be the voiced /th/ sound, as in <em>this</em>,{' '}
      <em>thousand</em>, <em>month</em>, because English requires a continuous
      interdental articulation that does not exist in Spanish.
    </P>
    <P>
      Although English is the king of homophones, it has a great difference
      between the /v/ and /b/ sounds (at least for English speakers). In
      Spanish, these sounds are homophones, so learners tend to transfer the
      spelling of these consonants. The /v/ sound is labiodental while the /b/
      sound is bilabial. I have my own embarrassing moment with this: while
      talking to a native English speaker, the person started to laugh when I
      pronounced a /b/ instead of a /v/ in the word <em>very</em>. I felt
      really embarrassed until they respectfully explained to me the difference
      between the sounds. At that time, it was quite a revelation for me.
    </P>
    <P>
      The "standard" Spanish has a really short vocalic system (just five
      sounds), while English has at least fourteen. It is important to highlight
      the vowel distinctions since they can totally change the meaning of a
      word, causing misunderstandings. Here are some of the most common vowel
      mistakes:
    </P>

    <Table>
      <THead>
        <TR>
          <TH>Contrast</TH>
          <TH>Typical mistake</TH>
          <TH>Example</TH>
        </TR>
      </THead>
      <TBody>
        <TR>
          <TD>/short-i/ vs /long-ee/</TD>
          <TD>
            Both pronounced as the /i/ sound in Spanish (the short vowel in
            English)
          </TD>
          <TD>
            <em>hit</em> vs <em>heat</em>
          </TD>
        </TR>
        <TR>
          <TD>/short-u/ vs /long-oo/</TD>
          <TD>
            Both pronounced as the /u/ sound in Spanish (the short vowel in
            English)
          </TD>
          <TD>
            <em>full</em> vs <em>fool</em>
          </TD>
        </TR>
        <TR>
          <TD>/ae/ (cat vowel)</TD>
          <TD>Pronounced as the /a/ sound in Spanish</TD>
          <TD>
            <em>cat</em>, <em>man</em>
          </TD>
        </TR>
        <TR>
          <TD>/short-o/ vs /aw/</TD>
          <TD>
            Both pronounced as the /o/ sound in Spanish (the short vowel in
            English)
          </TD>
          <TD>
            <em>sock</em> vs <em>horse</em>
          </TD>
        </TR>
      </TBody>
    </Table>

    <H3 id="activities-to-improve">Activities to Improve</H3>
    <P>Learners should:</P>
    <UL>
      <LI>
        Focus on minimal pairs, that is, words that differ by only one sound.
        Examples: <em>think / sink</em>, <em>berry / very</em>,{' '}
        <em>it / eat</em>. Listening to and repeating these pairs helps train
        the ear and mouth to distinguish important differences. It can also be
        helpful to record themselves so they can listen back and evaluate their
        pronunciation.
      </LI>
    </UL>

    <P>Here are some further exercises to practise:</P>

    <H3 id="exercise-1">Exercise 1</H3>
    <P>
      In the following groups of words, underline the word which contains the
      short form of the vowel:
    </P>
    <WordBox>
      <p className="mb-2 font-semibold text-slate-800 dark:text-slate-200">
        Group A
      </p>
      <p className="mb-3">Yield &nbsp; Lease &nbsp; Reach &nbsp; Risk &nbsp; Growth &nbsp; Profit &nbsp; Loss &nbsp; Portfolio</p>
      <p className="mb-2 font-semibold text-slate-800 dark:text-slate-200">
        Group B
      </p>
      <p>Cash &nbsp; Fund &nbsp; Loan &nbsp; Bond &nbsp; Asset &nbsp; Budget &nbsp; Market &nbsp; Finance</p>
    </WordBox>

    <H3 id="exercise-2">Exercise 2</H3>
    <P>
      Read the following groups of words. Which word in each group has a
      different vowel sound?
    </P>
    <WordBox>
      <p className="mb-3">Fund &nbsp; Budget &nbsp; Profit &nbsp; Loan &nbsp; Asset &nbsp; Bank &nbsp; Trade &nbsp; Cash</p>
      <p>Bear &nbsp; Tier &nbsp; Fair &nbsp; Share &nbsp; Market &nbsp; Bluff &nbsp; Rough &nbsp; Trust</p>
    </WordBox>

    <P>
      Practising frequent sentences using <em>this</em>, <em>those</em>, and{' '}
      <em>the other</em> can work better than practising isolated words.
      Examples:
    </P>
    <UL>
      <LI>This is a bank account.</LI>
      <LI>Those are company shares.</LI>
      <LI>This account is active; the other account is closed.</LI>
    </UL>

    <H3 id="short-practice-dialogue">Short Practice Dialogue</H3>
    <WordBox>
      <DialogueLine>What is this?</DialogueLine>
      <DialogueLine speaker>This is a budget report.</DialogueLine>
      <DialogueLine>What are those?</DialogueLine>
      <DialogueLine speaker>Those are company shares.</DialogueLine>
      <DialogueLine>Which investment do you prefer?</DialogueLine>
      <DialogueLine speaker>I prefer the other investment.</DialogueLine>
    </WordBox>

    <H2 id="challenge-3">
      Challenge 3: The Initial /h/ Sound and the /sh/ Pronunciation
    </H2>
    <P>
      Continuing with the obstacles of producing unfamiliar sounds. We also have
      the /h/ sound as in the word <em>hotel</em>. And we have the difference
      between the /ch/ and /sh/ sounds, as in the typical examples{' '}
      <em>beach</em> vs <em>bitch</em>.
    </P>
    <P>
      The aspirated /h/ in English, whose sound is similar to a Spanish soft
      /j/, tends to be pronounced as if it were the silent letter /h/ in
      Spanish. The /h/ is a voiceless glottal fricative sound. That is why in
      Spanish we say it is like a soft /j/: you have to push the air through
      your throat. One example of this is commonly seen in words like{' '}
      <em>hotel</em>, which gets reduced to <em>otel</em>. In this case, the
      problem is not the difficulty of producing the consonant itself; it is the
      knowledge transferred from the English alphabet, where <em>h</em> can be
      silent.
    </P>
    <P>
      Meanwhile, the /ch/ and /sh/ sounds are an interesting case for the
      Spanish-speaking community. The /sh/ sound is not universally pejorative,
      but in some Spanish-speaking regions, particularly in areas influenced by
      indigenous languages that contain similar sounds, speakers may encounter
      social attitudes toward this pronunciation that differ from those found in
      English. As a native speaker of Chilean Spanish who has lived in northern
      Chile and studied both Quechua and Aymara, I have observed that the /sh/
      sound can carry social connotations that extend beyond pronunciation
      itself. In some contexts, an exaggerated realization of sounds similar to
      /sh/ may be associated with rural speech, indigenous heritage, or lower
      social status, reflecting broader historical attitudes toward Andean
      cultures. While these perceptions vary across regions and speakers, they
      may cause some learners to feel uncomfortable producing the /sh/ sound,
      even when they understand that it is necessary for accurate English
      pronunciation. In English, however, /sh/ is simply another phoneme with
      no inherent social meaning.
    </P>
    <P>
      On the other hand, in Spain, the /sh/ sound is native to co-official
      languages like Galician and Catalan, but it does not exist in standard
      Castilian Spanish. While in English this is nothing more than just another
      sound in the alphabet without any sociolinguistic connotation, for Spanish
      speakers, especially from Latin America, it is worth discussing the
      cultural dimension when introducing this sound. It has also been
      interesting to discuss this with students from Spain, allowing them to
      recognize for themselves that this sound exists in the co-official
      languages of their country.
    </P>

    <H2 id="challenge-4">
      Challenge 4: Lack of Confidence and Fear of Mistakes
    </H2>
    <P>
      As we are coming to the end, we must mention that many pronunciation
      problems are psychological rather than technical.
    </P>
    <P>
      As an English teacher, I often see my students stay completely silent
      because they are terrified of making mistakes or being judged. I quickly
      realized that before we can even practise speaking, my first and most
      important job is to build a safe space grounded in absolute mutual
      respect. When students know that no one will laugh at them, their anxiety
      disappears and they finally find the courage to speak up. Implementing
      this supportive environment has completely transformed my classroom: my
      students are improving much faster, they are no longer afraid to
      participate, and some are even volunteering to speak completely on their
      own.
    </P>
    <P>
      For greater effectiveness, I always tell my students that the most
      important thing is to be understood, rather than having a perfect accent
      or speaking super fast. Most successful English users around the world
      speak with an accent. Effective communication depends more on being
      understood clearly than on sounding exactly like a native speaker.
    </P>
    <P>Learners can build confidence by:</P>
    <OL>
      <LI>
        Watching TV shows or movies in English with Spanish subtitles at the
        beginning, then switching to English subtitles for at least 15 to 30
        minutes per day.
      </LI>
      <LI>Repeating sentences aloud rather than reading silently.</LI>
      <LI>Recording themselves speaking.</LI>
      <LI>Practising minimal pairs.</LI>
      <LI>Practising regularly with language partners.</LI>
      <LI>Reminding themselves to keep trying, even when it feels difficult.</LI>
    </OL>

    <H2 id="conclusion">Conclusion</H2>
    <P>
      English pronunciation presents a range of challenges for native Spanish
      speakers, many of which persist even after years of formal language study.
      As discussed throughout this article, these difficulties often arise not
      only from differences between the sound systems of English and Spanish,
      but also from learners' previous linguistic experiences and, in some
      cases, sociocultural attitudes toward certain sounds. However,
      pronunciation problems are not permanent obstacles. With targeted
      practice, increased exposure to authentic spoken English, and greater
      awareness of how sounds are produced, learners can significantly improve
      their intelligibility and confidence. Teachers can support this process by
      addressing both the linguistic and cultural dimensions of pronunciation.
      Ultimately, successful pronunciation development depends less on achieving
      a native-like accent and more on communicating clearly and effectively in
      real-life situations.
    </P>
  </>
);

export default EnglishPronunciationChallengesForSpanishSpeakers;
