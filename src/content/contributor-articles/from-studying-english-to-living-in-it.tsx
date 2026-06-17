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

const LI: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li>{children}</li>
);

const FromStudyingEnglishToLivingInIt: React.FC = () => (
  <>
    <P>
      You understand English but cannot speak it. This is a moment that almost
      every English learner recognizes. The idea is clear in their mind. The
      intention to speak is there. Yet the words do not come, or when they do,
      they arrive after an exhausting internal detour: first formed in the mother
      tongue, then translated, then spoken. The result is speech that is slow,
      effortful, and rarely natural.
    </P>
    <P>
      As educators, we see this pattern constantly. And one of the most valuable
      things we can do for our learners is not to give them more grammar
      exercises or longer vocabulary lists. It is to help them build the small,
      consistent habits that gradually rewire how they use English: from a
      language they study to a language they think in.
    </P>
    <P>
      Second language acquisition research gives us a clearer picture of what is
      actually happening. Stephen Krashen drew a foundational distinction between
      learning, the conscious study of rules and forms, and acquisition: the
      subconscious process that occurs when learners engage meaningfully with
      language just beyond their current level. Most classroom instruction
      targets the former. The habits in this article target the latter.
    </P>
    <P>
      Lev Vygotsky's work on inner speech adds another dimension. He observed
      that children use self-directed language, talking to themselves, to
      regulate their thinking, and that this private speech gradually becomes
      internalized as the basis of thought. For language learners, this suggests
      something actionable: using English as the language of inner experience,
      not just of classroom performance, is not a trivial exercise. It is, in
      cognitive terms, how a second language becomes a first-resort one.
    </P>
    <P>
      Finally, Barry McLaughlin's Automaticity Theory explains why fluency feels
      so effortful at first. When learners must simultaneously retrieve
      vocabulary, apply grammar, manage pronunciation, and monitor their output,
      they overwhelm their working memory. The path to fluency is not learning
      more; it is automating what has already been learned, through consistent,
      low-stakes repetition, until it requires minimal conscious effort. The
      habits below are designed with exactly this process in mind.
    </P>

    <H2 id="think-out-loud">
      Think Out Loud: Even When No One Is Listening
    </H2>
    <P>
      Encourage your learners to narrate their daily activities in English,
      quietly or aloud, even when alone. Deciding what to cook, commenting on
      the weather, thinking through a problem: all of it, in English. This is
      not a performance exercise. It is a direct application of Vygotsky's
      insight about private speech: the language we use to talk to ourselves
      gradually becomes the language we use to think.
    </P>
    <P>
      For beginners, this habit builds vocabulary in authentic, personally
      meaningful contexts, far more durable than list-based memorization. For
      advanced learners, it disrupts the translation habit at its root by making
      English the first language of inner experience, not the second.
    </P>
    <P>
      In the classroom, this can be primed with a brief daily think-aloud
      activity: one to two minutes of unscripted speaking about anything from
      the learner's day, with no notes and no preparation. The discomfort
      learners feel is not a sign that it is not working. In McLaughlin's terms,
      it is precisely the signal of controlled processing on its way to becoming
      automatic.
    </P>

    <H2 id="put-the-pen-down">Put the Pen Down Before You Speak</H2>
    <P>
      This recommendation surprises many learners and some educators. We have
      long associated preparation with quality. But when it comes to building
      oral fluency, scripting speech in advance bypasses the very cognitive
      process that needs training: real-time encoding in English.
    </P>
    <P>
      When learners write out everything they want to say before speaking, they
      are not practicing speaking; they are practicing reading aloud. The
      sentence construction, the vocabulary search, the grammatical
      decision-making all happen on paper, in a safe and unlimited time frame.
      None of that transfers to the conditions of real conversation.
    </P>
    <P>
      The more productive habit is to allow thirty seconds of thinking time,
      perhaps with one or two anchor words noted, and then speak. Educators can
      scaffold this gradually: begin with sixty seconds of preparation, reduce it
      over weeks, and eventually remove it. Each reduction is a step toward the
      spontaneous, real-time production that genuine fluency requires.
    </P>

    <H2 id="practice-topics">Practice Topics, Not Scripts</H2>
    <P>
      Many learners, particularly those preparing for IELTS, TOEFL, or
      professional contexts, fall into the rehearsal trap: memorizing polished
      answers to anticipated questions and reproducing them under exam
      conditions. This strategy is understandable, but it produces a fragile
      kind of performance. When the actual prompt differs slightly from what was
      expected, the learner is stranded.
    </P>
    <P>
      Krashen's distinction between acquisition and learning is instructive here.
      A memorized answer is a product of learning, stored consciously and
      retrieved consciously. But adaptable, fluent speech requires acquired
      language: internalized patterns that can be recombined freely in response
      to any situation. The goal of practice should therefore be flexibility, not
      recall.
    </P>
    <P>
      A useful classroom exercise is the same topic, different angle approach:
      give learners a topic and ask them to speak about it for ninety seconds.
      Then ask them to speak on the same topic again, this time saying entirely
      different things. This trains the brain to access language generatively
      rather than retrieving a pre-stored response. Over time, it builds the kind
      of conversational agility that no script can provide.
    </P>

    <H2 id="chunk-library">Build a Personal Chunk Library</H2>
    <P>
      Fluent speakers do not construct every sentence word by word. Corpus
      linguists have established that a significant proportion of natural spoken
      English consists of formulaic sequences: fixed and semi-fixed phrases
      retrieved as single units. Phrases like "As far as I know", "What I mean
      is", "It depends on", and "To be honest with you" are not assembled from
      grammatical rules each time; they are retrieved holistically, freeing
      cognitive resources for higher-level meaning-making.
    </P>
    <P>
      One of the most efficient habits an educator can encourage is chunk
      collection: asking learners to keep a small notebook, physical or digital,
      where they record phrases from authentic English they encounter in films,
      podcasts, conversations, or articles. The guiding question is simple: would
      a fluent speaker actually say this?
    </P>
    <P>
      Collecting chunks is only the first step. A chunk becomes truly acquired,
      in Krashen's sense, only when the learner has used it spontaneously, in a
      sentence they did not plan. Educators should build regular chunk activation
      exercises into lessons: give learners three chunks from their collection
      and ask them to use all three naturally within a two-minute conversation.
      The constraints make it challenging; the challenge makes it memorable.
    </P>

    <H2 id="record-yourself">Record Yourself Speaking Every Day</H2>
    <P>
      Two to three minutes of unscripted spoken English, recorded on any device,
      is one of the most consistently effective fluency habits available to
      learners at any level. It requires no partner, no classroom, and no special
      equipment, only the willingness to speak imperfectly into a microphone.
    </P>
    <P>
      Krashen's affective filter hypothesis suggests that anxiety, low
      confidence, and fear of judgment can suppress acquisition even when the
      learner has adequate input. Recording oneself eliminates the primary source
      of speaking anxiety: an audience. In this low-pressure environment,
      learners are free to experiment with language: to reach for a new chunk,
      attempt a more complex sentence, or simply speak without stopping to
      translate.
    </P>
    <P>
      For beginners, two sentences a day is a genuine starting point. The
      consistency of the habit matters more than its duration. Learners who
      maintain a voice journal for eight to twelve weeks consistently report a
      reduction in the subjective effort of speaking, which is precisely the
      experiential signature of growing automaticity.
    </P>

    <H2 id="english-rich-environment">
      Switch the World into English: Engineer an English-Rich Environment
    </H2>
    <P>
      Individual practice habits are most effective when supported by an
      environment that increases the frequency and naturalness of English
      exposure. Krashen's input hypothesis reminds us that acquisition requires
      meaningful, comprehensible contact with the target language, and that
      contact does not have to be formal or structured to count.
    </P>
    <P>
      Educators should encourage learners to make the following low-effort,
      high-frequency environmental adjustments:
    </P>
    <UL>
      <LI>
        Switch device language settings to English. Each daily interaction with a
        phone or laptop becomes a micro-exposure in a personally relevant context.
      </LI>
      <LI>
        Follow English-language content that genuinely interests them. Motivating,
        comprehensible input, the kind Krashen described as most conducive to
        acquisition, is far more effective than content chosen purely for
        educational purposes.
      </LI>
      <LI>
        Watch with English subtitles, not first-language subtitles. This keeps the
        learner's processing within the English system rather than creating a
        dependency on translation.
      </LI>
      <LI>
        Read in English for five to ten minutes daily. Any topic of genuine
        interest. The accumulated effect on vocabulary and syntactic intuition is
        substantial over time.
      </LI>
    </UL>
    <P>
      These are not time-intensive commitments. What they require is a shift in
      default behavior, which is, at its core, what all habit formation consists
      of.
    </P>

    <H2 id="words-as-concepts">Learn Words as Concepts, Not Translations</H2>
    <P>
      One of the most cognitively significant habits on this list is also one of
      the least discussed in language classrooms. Most learners store new English
      vocabulary as a translation equivalent of a word in their native language.
      This creates a retrieval chain with an unnecessary detour: from the native
      language concept to the native language word to the English word. Every
      link in that chain costs time and cognitive effort.
    </P>
    <P>
      The alternative is to build direct associations: English word to concept,
      image, feeling, or memory. The word <em>melancholy</em> should not be
      stored as the translation of its equivalent in Arabic, French, or Mandarin.
      It should be stored as a felt sense: grey light, old photographs, something
      bittersweet and unresolved. When retrieval is direct, it is faster, more
      reliable, and more naturally integrated into spontaneous speech.
    </P>
    <P>
      In the classroom, this can be developed through concept description
      activities: learners describe a target word using only images, colors,
      emotions, or situations, never a translation or a dictionary definition. It
      is a slower activity than conventional vocabulary review, but it produces a
      qualitatively deeper form of lexical ownership: words that feel like one's
      own, not like borrowed items.
    </P>

    <H2 id="compound-effect">
      In a Nutshell: The Compound Effect of Small Habits
    </H2>
    <P>
      None of the habits described here will produce overnight transformation.
      Language acquisition does not work that way, and neither does habit
      formation. What these practices offer instead is something more reliable: a
      gradual, cumulative shift in the learner's cognitive relationship with
      English.
    </P>
    <P>
      What Krashen called acquisition, what Vygotsky called internalization, and
      what McLaughlin called automaticity all describe the same underlying
      process: a language moving from the periphery of conscious effort toward
      the center of effortless expression. That process cannot be rushed, but it
      can be cultivated, one small daily habit at a time.
    </P>
    <P>
      Our role as educators is not only to teach English. It is to help learners
      build the conditions in which English begins to teach itself: through
      repetition, through immersion, through imperfect and courageous daily use.
      The habits in this article are modest in their individual demands. Their
      cumulative effect, sustained over months, is anything but.
    </P>
  </>
);

export default FromStudyingEnglishToLivingInIt;
