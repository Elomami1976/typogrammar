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

const P: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="mb-5 font-body text-base leading-relaxed text-slate-700 dark:text-slate-300 md:text-lg">
    {children}
  </p>
);

const Ul: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ul className="mb-6 space-y-3 pl-0">{children}</ul>
);

const Li: React.FC<{ label: string; children: React.ReactNode }> = ({
  label,
  children,
}) => (
  <li className="flex gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/50">
    <span className="mt-0.5 h-5 w-5 flex-shrink-0 rounded-full bg-red-100 text-center text-xs font-bold leading-5 text-red-700 dark:bg-red-900/40 dark:text-red-300">
      &#10003;
    </span>
    <span className="font-body text-base leading-relaxed text-slate-700 dark:text-slate-300">
      <strong className="font-semibold text-slate-800 dark:text-slate-200">
        {label}
      </strong>{' '}
      {children}
    </span>
  </li>
);

const ThePsychologyOfLanguageLearning: React.FC = () => (
  <>
    <P>
      Every English teacher has experienced it. You spend a productive lesson
      introducing fifteen carefully selected vocabulary items. Students repeat
      them, write sentences, even laugh at your examples. The next class, you
      ask a simple review question and you are met with blank stares. The
      words are gone, as if they were never learned at all.
    </P>
    <P>
      This is not laziness. It is not a lack of effort. It is cognitive
      science at work. After more than a decade of teaching English at
      university level in Uzbekistan and researching applied linguistics, I
      have come to believe that vocabulary forgetting is one of the most
      misunderstood phenomena in language education. The good news is that
      once we understand why it happens, we can begin to address it more
      effectively.
    </P>

    <H2 id="brain-not-designed-for-word-lists">
      The Brain Was Not Designed for Random Word Lists
    </H2>
    <P>
      The first thing we must accept is that the human brain is not a
      dictionary. It is an associative network - a vast, interconnected
      system that stores information in relation to other information. When
      students encounter a new word in isolation, the brain has very little
      to anchor it to. Without meaningful connections, the item is filed in
      short-term memory, where it typically survives for no more than 20 to
      30 seconds without active rehearsal.
    </P>
    <P>
      This was proven by the work of a cognitive psychologist named Hermann
      Ebbinghaus over a hundred years ago, referred to as the Forgetting
      Curve. He demonstrated through his studies that during the first 24
      hours following exposure to new knowledge, around 70% of that
      information is forgotten. In one week, retention goes below 10%. These
      numbers alone seem frighteningly high; however, they become even more
      striking when we consider the usual circumstances in a language
      classroom, where new vocabulary is presented in lists, reviewed once,
      and never revisited.
    </P>

    <H2 id="shallow-processing">Shallow Processing: The Underrated Enemy</H2>
    <P>
      It was not until the 1970s that psychologists Craik and Lockhart
      identified what became known as levels of processing. Their studies
      proved that the amount of information stored in memory depends on the
      depth at which that information is processed during encoding. Shallow
      processing includes simple activities like reading a word and looking up
      its translation. The deepest form includes understanding the context of
      the word, using it in an original sentence, and making it personal.
    </P>
    <P>
      In practice, many vocabulary activities in EFL and ESL classrooms
      operate at shallow levels. Students match words to definitions. They
      fill gaps. They circle the correct option. These activities are not
      without value, but they rarely push learners into the deep processing
      territory where lasting memories are formed. The student who can
      complete a gap-fill correctly on Thursday may still fail to recall that
      word in free conversation by Monday, because the encoding was simply not
      deep enough to survive.
    </P>
    <P>
      This pattern is common in many classroom textbooks used across
      Uzbekistan, which still rely heavily on translation and matching
      exercises rather than tasks that require learners to produce language of
      their own.
    </P>

    <H2 id="interference-problem">The Interference Problem</H2>
    <P>
      Another reason vocabulary disappears so quickly is interference - a
      well-documented memory phenomenon in which older or newer information
      disrupts the retention of target items. In a language learning context,
      this is particularly acute. Consider a student who learns the word
      "resilient" in one lesson and "resistant" the following week. The
      phonological and semantic proximity of these two items creates what
      psychologists call proactive interference (old learning disrupting new)
      and retroactive interference (new learning disrupting old).
    </P>
    <P>
      This is not a theoretical concern. Research in second language
      acquisition consistently finds that semantically related words taught
      together - synonyms, antonyms, or words from the same semantic field -
      are harder to retain than words from varied conceptual categories.
      Teachers who introduce vocabulary thematically ("all words related to
      travel", "all adjectives describing personality") may inadvertently be
      working against their students' memory systems.
    </P>
    <P>
      For learners in Uzbekistan, this problem often carries an extra layer.
      Many students already operate in Uzbek and Russian, and a number of
      international words have entered Russian in forms that closely resemble
      English - "organization", "information", "document". These near-cognates
      can give students a useful head start, but they can equally become a
      source of interference when the English form differs from its Russian
      counterpart in pronunciation, spelling, or shade of meaning, since the
      existing mental entry for that word already feels occupied.
    </P>

    <H2 id="emotion-context-relevance">
      Emotion, Context, and the Role of Personal Relevance
    </H2>
    <P>
      The neuroscience of memory tells us something important: the amygdala,
      the brain's emotion-processing centre, plays a significant role in
      consolidating long-term memories. Information that carries emotional
      weight is far more likely to be retained. This is why most people can
      remember exactly where they were when they received significant personal
      news, yet cannot recall what they had for lunch two Thursdays ago.
    </P>
    <P>
      For language learners, this means that vocabulary encountered in
      emotionally resonant contexts - a gripping story, a personal
      conversation, a moment of genuine communication - is far more likely to
      stick than vocabulary encountered in a textbook exercise. The word
      "devastated" means very little as a dictionary entry. But a student who
      first encounters it while talking about a relative who has had to move
      abroad for work - a common experience in Uzbekistan - or while reading a
      passage that genuinely moves them, is far more likely to remember it.
    </P>
    <P>
      This has practical implications for how we design learning experiences.
      The question is not only "did the student encounter this word?" but "did
      the encounter matter to them?"
    </P>

    <H2 id="spacing-effect">
      The Spacing Effect: What Research Tells Us About Review
    </H2>
    <P>
      Perhaps the most robust finding in the cognitive science of memory is
      the spacing effect - the principle that distributed practice across time
      produces far superior retention to massed practice in a single session.
      Put simply, reviewing a word ten times over ten days is dramatically
      more effective than reviewing it ten times in one sitting.
    </P>
    <P>
      Yet the architecture of most language courses works against spacing.
      Vocabulary is introduced in a unit, tested at the end of the unit, and
      rarely revisited systematically. Students who pass a vocabulary quiz one
      week may have almost no access to those words six months later, not
      because they lack ability, but because the learning schedule was not
      designed to support long-term retention.
    </P>
    <P>
      This pattern is familiar in many Uzbek universities, where each semester
      is organised around discrete units, every one closing with its own
      vocabulary test. Once a unit is finished, both teachers and students
      tend to move on, and the words introduced in October rarely resurface
      before the final exam in January.
    </P>
    <P>
      Spaced repetition systems - either digital tools like Anki, or low-tech
      approaches such as vocabulary revision schedules built into the
      curriculum - can make a significant difference. The key insight is that
      a word needs to be retrieved multiple times, with increasing intervals
      between each retrieval, for it to move from fragile short-term storage
      into durable long-term memory.
    </P>

    <H2 id="retrieval-practice">
      Retrieval Practice: Why Testing Beats Re-reading
    </H2>
    <P>
      Closely related to spacing is the testing effect, sometimes called
      retrieval practice. Psychologist Henry Roediger and colleagues have
      demonstrated repeatedly that the act of trying to recall information -
      even when you fail - strengthens memory more effectively than passively
      reviewing it. Re-reading a vocabulary list is a far less effective study
      strategy than trying to recall the meanings of words, checking yourself,
      and noticing where your memory breaks down.
    </P>
    <P>
      This has implications for how we structure classroom review. Activities
      that require active recall - flashcards, self-testing, retrieval quizzes
      with feedback - are not merely assessment tools. They are among the most
      powerful learning tools available to us. When students understand this,
      they can become more strategic about their own vocabulary development.
    </P>
    <P>
      In the large lecture groups common in many English departments across
      Uzbekistan, this does not require new equipment. Asking students, in
      pairs, to recall as many words as possible from the previous lesson at
      the start of class can achieve much the same effect as a digital quiz,
      at no cost and with no technology required.
    </P>

    <H2 id="what-teachers-can-do">
      How Teachers and Students Can Proceed Differently
    </H2>
    <P>
      Being aware of the psychological mechanisms behind vocabulary forgetting
      does not leave teachers and students helpless. On the contrary, there
      are a number of scientifically validated strategies that can make a real
      difference:
    </P>
    <Ul>
      <Li label="Prioritise depth over frequency.">
        Ask students to create new sentences using new words, or to put those
        words into a personal context and analyse them. In vocabulary
        acquisition, depth of engagement matters far more than the number of
        times a word appears on a list.
      </Li>
      <Li label="Build spaced review into lessons.">
        Plan deliberate vocabulary recall activities into each lesson and
        schedule regular revisits of previously studied items. Do not assume
        that a word learned in week three is still available in week nine.
      </Li>
      <Li label="Be cautious with semantic clustering.">
        Avoid introducing large groups of closely related words at once.
        Teaching synonyms or semantically similar items together can create
        confusion and interference, making all of them harder to retain.
      </Li>
      <Li label="Use context and emotional resonance.">
        Supply target vocabulary through stories, discussions, and situations
        that feel personally meaningful to learners. Help students understand
        the Forgetting Curve: once they grasp why spaced retrieval works, they
        study more strategically on their own.
      </Li>
      <Li label="Adapt tools to local realities.">
        Apps such as Anki work well where students have reliable smartphones
        and data access. Where digital access is uneven - as it often is
        across Uzbekistan - a shared class notebook of "words to revisit", or
        a printed revision calendar, can achieve comparable results.
      </Li>
    </Ul>

    <H2 id="conclusion">Conclusion</H2>
    <P>
      Vocabulary forgetting is not a failure of students, nor is it a failure
      of teachers. It is a predictable outcome of misaligned teaching
      practices and misunderstood cognitive processes. When we design
      instruction that works with the brain rather than against it - when we
      prioritise depth over breadth, spacing over cramming, and retrieval over
      passive review - we begin to close the gap between words encountered and
      words truly learned.
    </P>
    <P>
      The classroom is not a warehouse where we deposit words and expect them
      to remain. It is a dynamic cognitive environment where the conditions we
      create determine what survives. As language educators, that is both a
      responsibility and an opportunity. For institutions such as Samarkand
      State Institute of Foreign Languages, where students are preparing for
      further study and international exams, that responsibility carries
      particular weight.
    </P>
  </>
);

export default ThePsychologyOfLanguageLearning;
