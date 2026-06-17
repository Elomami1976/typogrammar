import React from 'react';

// Inline heading + paragraph primitives matching TypoGrammar's typography
// while keeping every contributor article visually consistent.

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

const WhyStudentsStruggleToSpeakEnglish: React.FC = () => (
  <>
    <P>
      The slides were ready. The script was memorized. But the moment I stood
      up to speak, my voice came out smaller than intended, awkward pauses
      swallowed my sentences, and one small error wiped out everything I had
      prepared.
    </P>
    <P>
      I wasn't speaking English that day. I was performing it, and the
      performance collapsed.
    </P>
    <P>
      I could read, write, and understand English perfectly well. So why
      couldn't I speak it with the same fluency?
    </P>
    <P>
      Was it a lack of confidence? Fear of judgment? Or simply not practicing
      enough? I asked myself these questions for years, until I realized the
      problem was never really mine to begin with.
    </P>

    <H2>You're Not Broken - The System Is</H2>
    <P>
      Think about how English was taught to you. How many hours were spent on
      grammar exercises, reading comprehensions, and written assignments? Now
      think about how many were spent actually speaking, not reciting memorized
      answers, but expressing a genuine thought in real time.
    </P>
    <P>
      For most ESL learners, especially in contexts like Bangladesh, the honest
      answer is: very little.
    </P>
    <P>
      This imbalance has a name in linguistics. Researchers distinguish between
      receptive skills (listening and reading) and productive skills (speaking
      and writing). For decades, ESL classrooms have heavily prioritized the
      former. As linguist Merrill Swain noted in her 1985 study, students who
      received years of rich language input developed almost native-level
      receptive abilities, yet their speaking and writing remained surprisingly
      weak. She attributed this weakness directly to limited opportunities to
      produce language meaningfully.
    </P>
    <P>
      The classroom reality many Bangladeshi students know reflects this almost
      exactly. Speaking activities exist, but occupy a fraction of the
      curriculum. In many Bangladeshi classrooms, a handful of confident
      speakers are praised, and while that is understandable, it leaves the
      hesitant learners without meaningful guidance. By consistently rewarding
      fluency while ignoring accuracy, instructors forget that these two are
      complementary, not competing. The result: performers who sound assured
      but lack prosodic awareness, instead of genuinely proficient, self-aware
      speakers. Ironically, while classrooms rarely address accuracy
      explicitly, learners still internalize an overwhelming pressure to
      perform it perfectly, a tension that, as we will see, lies at the very
      heart of the speaking struggle.
    </P>
    <P>
      Ali's 2007 study, "Willing Learners yet Unwilling Speakers," confirms
      that student reluctance stems from unaddressed classroom factors rather
      than a lack of motivation. The willingness was there. The preparation
      simply wasn't.
    </P>
    <P>
      This is not a confidence gap. It is a training gap, one built into the
      very structure of how English is taught across ESL and EFL contexts. To
      truly understand why the speaking struggle persists, we need to go deeper
      than the classroom, into the psychological mechanics happening inside the
      learner's mind.
    </P>

    <H2>The Three Real Reasons - And How They Ambush You All at Once</H2>
    <P>
      Picture this: a job interview, stakes high, eyes on you. You know exactly
      what you think about the question being asked. The answer exists, fully
      formed, somewhere in your mind. But the moment you open your mouth, the
      words feel wrong. The grammar is slipping. The sentence you just said
      made only partial sense. And yet you keep going, filling the silence with
      whatever comes, acutely aware of every error in real time, thinking: what
      am I even saying?
    </P>
    <P>
      This is neither nervousness, nor laziness, rather three distinct
      psychological mechanisms firing at once, and understanding each one
      separately is the first step toward dismantling them.
    </P>

    <H3>1. The Affective Filter: When Fear Blocks the Brain</H3>
    <P>
      The fear of judgment is a universal yet misunderstood barrier among ESL
      speakers, often incorrectly dismissed as a personality flaw or mere
      shyness that anxious people must simply overcome. But Stephen Krashen's
      Affective Filter Hypothesis (1982) offers a more precise explanation:
      anxiety, embarrassment, and fear of judgment don't just make speaking
      uncomfortable, they neurologically interfere with your ability to access
      language you already know. The filter rises, and suddenly words that were
      available moments ago feel completely out of reach.
    </P>
    <P>
      This explains why learners can speak relatively freely in informal,
      low-stakes settings, yet freeze entirely the moment something feels
      official or observed. The language hasn't changed. The filter has.
    </P>

    <H3>2. The Perfectionism Trap: When Preparation Becomes a Prison</H3>
    <P>
      Academic English training rewards precision. Years of written exams,
      timed essays, and carefully marked assignments teach learners one
      fundamental lesson: get it right before you submit. This is excellent
      advice for writing. For speaking, it is quietly devastating.
    </P>
    <P>
      Speaking is real-time and uneditable. There is no backspace. And when a
      learner conditioned by years of academic perfectionism steps into a timed
      speaking task, the desire to say everything perfectly crashes against the
      clock violently. In that struggle, something unexpected happens: the mind
      goes blank. Not because the knowledge isn't there, but because the
      pressure to retrieve it flawlessly, instantly, under observation,
      overloads the very system trying to produce it.
    </P>

    <H3>
      3. The Translation Loop: Speaking a Language You Haven't Yet Learned to
      Think In
    </H3>
    <P>
      Perhaps the most pervasive, yet least addressed reason: most ESL learners
      do not yet think in English. When formulating a response, the process
      runs something like this: form the idea, construct the sentence in your
      first language, translate it word by word, then speak. By the time the
      translation is complete, the conversational moment has passed, the
      grammar has frayed, and what comes out bears only partial resemblance to
      what was meant.
    </P>
    <P>
      Kroll &amp; Stewart's study (1994) on bilingual language processing
      confirms this: L2 learners typically access meaning through their first
      language rather than direct concept-to-target-language connections,
      making spontaneous speech significantly slower and more error-prone than
      comprehension. Understanding and producing language are not the same
      cognitive process. They never were.
    </P>

    <H2>The Chain Reaction Nobody Warns You About</H2>
    <P>
      The most destructive part is that these three psychological mechanisms
      rarely operate in isolation; instead, they trigger each other rapidly
      during high-pressure moments. Fear raises the affective filter, reducing
      vocabulary access, activating the translation loop and slowing speech.
      The slowing speech triggers perfectionism, the panic of running out of
      time, of leaving something crucial unsaid. And perfectionism, under
      enough pressure, produces the blank. The total, bewildering blank.
    </P>
    <P>
      You weren't failing at English. You were caught in a chain reaction that
      nobody ever explained to you, let alone taught you how to break.
    </P>

    <H2>So, What Actually Works?</H2>
    <P>
      Understanding the problem already does half the work. Now the other half
      is knowing where to begin, not with grand changes overnight, but with
      precise, evidence-backed shifts in how speaking should truly be taught
      and practiced.
    </P>

    <H3>For Learners:</H3>
    <P>
      <strong>Stop memorizing isolated words. Start collecting chunks.</strong>{' '}
      A framework developed by linguist Michael Lewis in 1993 shows that
      fluency is built not from individual vocabulary items but from ready-made
      phrases ("I find it difficult to...", "What I mean is...", "To be
      honest...") stored and retrieved as single units. Under pressure, chunks
      are far more accessible than words assembled on the spot.
    </P>
    <P>
      <strong>Seek pushed output</strong>; not comfortable conversation, but
      structured tasks that require you to reach slightly beyond what feels
      safe. A timed response, a voice recording, a role-play with a clear
      communicative goal. Producing language under challenge forces your brain
      to notice gaps and build real fluency in a way passive exposure cannot,
      as Swain's (1993) research consistently shows.
    </P>
    <P>
      <strong>Break the translation loop in small daily doses.</strong> Narrate
      simple actions in English mentally. React to things you see or hear in
      English before your mind switches back. These micro-practices build
      direct concept-to-English pathways and thus reduce the lag between
      thought and speech.
    </P>

    <H3>For Instructors:</H3>
    <P>
      <strong>Create low-stakes speaking environments deliberately;</strong>{' '}
      not as a soft option, but as a pedagogical strategy. A high affective
      filter blocks language access regardless of proficiency level, as proved
      by Krashen's affective filter research. Regular, low-pressure tasks
      normalize producing English imperfectly, which is precisely how
      improvement begins.
    </P>
    <P>
      <strong>Address accuracy alongside fluency</strong> - gently,
      specifically, consistently. Not to discourage, but to build genuine
      awareness. A learner who knows their pacing is off, or that a word is
      mispronounced, can work on it.
    </P>
    <P>
      <strong>Stop assuming the foundation is already there.</strong> Meeting
      students where they actually are, rather than where the curriculum
      assumes they should be, is not lowering the standard. It is the standard.
    </P>

    <H2>The Gap Is Real - But So Is the Way Forward</H2>
    <P>
      I still have days when the words don't come easily. But something has
      shifted - not my English dramatically, but my understanding of myself as
      a learner. Once you identify your specific reason for struggling, the
      solution stops feeling abstract.
    </P>
    <P>
      What I know now is this: the goal was never perfection. It was always
      communication, getting your message across, clearly and honestly.
      Accuracy and fluency matter, but they are tools in service of that goal,
      not replacements for it.
    </P>
    <P>
      This requires a reciprocal partnership: learners provide the lived
      experiences that reshape teaching, while instructors offer the structure
      to guide them. This mutual exchange transforms far more than just
      conversational mechanics.
    </P>
    <P>
      And the fluency you thought you lacked? It was always within you,
      waiting for you to understand what stood between you and it.
    </P>
    <P>Once you do, you already know where to begin.</P>
  </>
);

export default WhyStudentsStruggleToSpeakEnglish;
