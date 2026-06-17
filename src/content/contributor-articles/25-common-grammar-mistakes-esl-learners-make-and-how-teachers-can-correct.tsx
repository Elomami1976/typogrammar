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

const TwentyFiveGrammarMistakesTeachersCorrect: React.FC = () => (
  <>
    <P>
      I did not anticipate encountering this issue, especially not in that
      school or among those students.
    </P>
    <P>
      The school where I began my teaching career was the first fully
      English-medium institution in our town. Many students met or even exceeded
      my expectations. However, several students' grammar was simply weak. That
      question has remained with me for seventeen years. The following insights
      are drawn from seventeen years of classroom observation.
    </P>

    <H2 id="the-25-mistakes">The 25 Mistakes</H2>

    <H3 id="1-l1-transfer">1. English Words, Urdu Thinking Behind Them</H3>
    <P>
      The most persistent source of error I have noticed across every level,
      from Grade 7 and Pre-Cambridge through Cambridge I and II to HSSC, is
      direct translation from Urdu. Students are accustomed to forming sentences
      in their first language mentally and then translating them word-for-word
      into English. The result is grammatically incorrect sentences: "My hand is
      paining", "I go to mess yesterday", and "She is knowing the answer". These
      are not careless mistakes. They are systematic ones. At SST Public School
      Rashidabad, I notice the same pattern at all levels. What differs is the
      temperament of the mistake; the root cause is the same.
    </P>

    <H3 id="2-articles">2. Misusing Articles: a, an, the</H3>
    <P>
      One of the most common errors I have faced is the misuse of articles. Many
      of my students come from a language that has no articles at all. Their
      minds simply do not feel the difference. I have marked essays in which all
      articles are missing or used incorrectly throughout.
    </P>

    <H3 id="3-subject-verb-agreement">3. Subject-Verb Agreement</H3>
    <P>
      "She play in the garden every day." I have encountered this error
      frequently. The third-person singular -s presents a challenge even for
      upper-intermediate students preparing for examinations. The solution is to
      identify whether the subject is singular or plural and ensure the verb
      agrees in number.
    </P>

    <H3 id="4-verb-tense">4. Incorrect Use of Verb Tense</H3>
    <P>
      Another common error is the inconsistent use of verb tenses. For instance,
      a paragraph may begin in the past tense but shift to the present tense.
      This is not a careless oversight; rather, it reflects a lack of awareness
      that maintaining a consistent verb tense is essential in English grammar.
    </P>

    <H3 id="5-prepositions">5. Prepositional Mistakes</H3>
    <P>
      "My brother is good in English." "She is married with Raja." Prepositional
      errors are among the most persistent, as there are few definitive rules
      for preposition usage. Prepositions must often be memorised in context with
      the words they accompany. I recommend that students use reference books
      containing commonly used prepositional phrases.
    </P>

    <H3 id="6-uncountable-nouns">6. Uncountable Nouns Treated as Plurals</H3>
    <P>
      "He asked for some informations." "My teacher gave me good advices." This
      error stems directly from first-language reasoning, as Urdu allows plural
      forms for all nouns. In English, however, certain nouns such as
      information, advice, furniture, luggage, evidence, knowledge, and news are
      uncountable and must be memorised as such.
    </P>

    <H3 id="7-double-negatives">7. Double Negatives</H3>
    <P>
      Many South Asian languages use double negatives for emphasis, leading
      students to consider expressions like "I don't know nothing" as correct. I
      consistently explain that double negatives cancel each other out. Students
      should use <em>not</em> or <em>never</em> with <em>any</em> (anything,
      anyone, anywhere), but never combine them with words beginning with
      <em> no</em> (nobody, nothing, nowhere).
    </P>

    <H3 id="8-complex-sentences">8. Complex Sentences and Missing Commas</H3>
    <P>
      "As I walked to school it began to rain." This sentence has a punctuation
      error. When a dependent clause such as "As I walked to school" comes first
      in a complex sentence, it must be separated from the main clause with a
      comma. It is a higher-order mistake and should be corrected as soon as it
      appears.
    </P>

    <H3 id="9-comma-splices">9. Comma Splices and Run-On Sentences</H3>
    <P>
      In my classes, many students write excessively long sentences without
      appropriate punctuation. ESL learners often avoid using full stops,
      perceiving them as a sign of weakness. I emphasise that short, simple
      sentences are preferable to lengthy ones filled with punctuation errors.
      When connecting two independent clauses, a semicolon or full stop should
      be used instead of a comma.
    </P>

    <H3 id="10-question-formation">10. Incorrect Question Formation</H3>
    <P>
      "Where you are going?" The auxiliary shift is the one mistake I hear again
      and again every year. Students completely lose the inversion. The auxiliary
      verbs <em>do, does, did, is, are, was,</em> and <em>were</em> must precede
      the subject in a direct question.
    </P>

    <H3 id="11-gerunds-infinitives">
      11. Confusion Between Gerunds and Infinitives
    </H3>
    <P>
      "I enjoy to play." Using either form is not unreasonable to a learner, but
      only one is correct with each verb. I tell my students that certain verbs
      are best learned as collocations: verbs such as <em>enjoy, avoid,</em> and{' '}
      <em>finish</em> take the gerund, while verbs such as <em>want, hope,
      decide,</em> and <em>plan</em> take the infinitive. There is no
      hard-and-fast rule; it must be learned and practised.
    </P>

    <H3 id="12-conditionals">12. Conditional Sentence Errors</H3>
    <P>
      At the secondary level, many students confuse the two main types of
      conditionals. A particularly persistent mistake is the use of <em>will</em>{' '}
      in the if-clause, a direct carry-over from Urdu. I teach my students one
      clear rule: there is no <em>will</em> or <em>would</em> in the if-clause,
      without exception.
    </P>

    <H3 id="13-reported-speech">13. Reported Speech Errors</H3>
    <P>
      Reported speech requires three changes: tense, pronoun, and sometimes time
      expressions. Students frequently omit one or more of these adjustments.
      For example, I often see "she said she is tired" instead of the correct
      back-shifted form "she said she was tired". Under exam pressure, students
      tend to overlook these changes, even though they should become automatic
      with practice.
    </P>

    <H3 id="14-tricky-words">
      14. Tricky Words: affect/effect, there/their/they're
    </H3>
    <P>
      It is very common for even strong learners to be confused by homophones
      and near-homophones. These are not grammar errors but word and spelling
      awareness errors. I ask students to maintain a list of confusing words,
      each with its meaning and a sample sentence. They must review this list
      once a week.
    </P>

    <H3 id="15-passive-voice">15. Passive Voice Errors</H3>
    <P>
      Students often overuse the passive voice or construct it incorrectly by
      omitting the auxiliary <em>be</em>. The correct structure requires the
      appropriate form of <em>be</em> followed by the past participle. I also
      explain when passive voice is stylistically appropriate, emphasising that
      it should not be used indiscriminately.
    </P>

    <H3 id="16-capitalisation">16. Inconsistent Capitalisation</H3>
    <P>
      "i go to karachi on monday." There is no capitalisation rule in the Urdu
      script, which leads to this transfer error. I always teach students to
      capitalise the pronoun <em>I</em>, names of people, places, languages,
      days, months, nationalities, and the first word of every sentence.
    </P>

    <H3 id="17-apostrophes">17. Apostrophe Misuse</H3>
    <P>
      A common issue is students inserting apostrophes into nearly every word
      ending in -s. Apostrophes are used only for contractions and possession,
      never for forming plurals. I reinforce this rule repeatedly until it is
      fully understood.
    </P>

    <H3 id="18-make-vs-do">18. Make vs Do Confusion</H3>
    <P>
      In Urdu, the word <em>karna</em> means both "make" and "do", so the
      distinction is not apparent to many students. Collocational mistakes such
      as "do a mistake" and "make homework" are common. I group verbs into
      collocation sets: <em>make</em> for create, produce, and cause; <em>do</em>{' '}
      for tasks, activities, and work.
    </P>

    <H3 id="19-double-comparatives">19. Double Comparatives</H3>
    <P>
      "She's more better." "This is the most easiest task." The -er/-est forms
      and the more/most forms are taught and practised separately, and students
      are then clearly instructed never to combine them. The rule is absolute:
      use one form or the other, never both.
    </P>

    <H3 id="20-sentence-fragments">20. Sentence Fragments</H3>
    <P>
      "Because he was tired." Many students use subordinate clauses as complete
      sentences. A complete sentence requires both a subject and a verb. Clauses
      beginning with words such as <em>because, which, although,</em> or{' '}
      <em>when</em> must be attached to a main clause.
    </P>

    <H3 id="21-modal-verbs">21. Modal Verb Errors</H3>
    <P>
      "I must to go." "She can able to do it." Adding <em>to</em> after a modal
      verb is one of the most frequent errors I see at all levels. The rule is
      absolute: always use a bare infinitive after a modal verb, with no
      exceptions.
    </P>

    <H3 id="22-present-perfect">22. Present Perfect vs Simple Past</H3>
    <P>
      The present perfect is a confusing construction, as many languages lack an
      equivalent form. The distinction I explain is this: use the simple past
      for definite, completed time expressions; use the present perfect for
      indefinite time or when the action has relevance to the present. A common
      error in a British English context is "I saw him today" when the student
      means the action relates to the current day, which requires "I have seen
      him today."
    </P>

    <H3 id="23-word-order">23. Incorrect Word Order</H3>
    <P>
      English follows a Subject-Verb-Object structure, with adverbs, adjectives,
      and time expressions occupying specific positions. Urdu, by contrast, is a
      Subject-Object-Verb language, leading to word-order errors due to
      first-language interference. In English, adjectives precede nouns, and
      time expressions typically appear at the end of a sentence.
    </P>

    <H3 id="24-phonetic-spelling">24. Phonetic Spelling</H3>
    <P>
      Some students who learn through the phonics approach spell words exactly as
      they sound, producing forms such as <em>nite, cud,</em> or <em>recieve</em>.
      Spelling is a distinct skill from pronunciation. I have found that keeping
      a personal spelling error log alongside wide reading are the most effective
      remedies.
    </P>

    <H3 id="25-direct-translation">25. Direct Translation from L1</H3>
    <P>
      Direct translation may account for as many as half of the mistakes in this
      list. When students cannot recall the correct English construction, they
      form the sentence in Urdu and translate it word for word. Errors such as
      "My head is hurting" are not random; they are systematically logical in
      the student's native language. The only remedy that works consistently is
      wide reading combined with patient, consistent correction.
    </P>

    <H2 id="conclusion">A Note After Seventeen Years</H2>
    <P>
      After seventeen years of teaching, I have learned one thing: these errors
      are not failures. They are signs of a learner acquiring a second language,
      managing two grammatical systems simultaneously, building new neural
      pathways, and bridging the gap between meaning and expression over time. I
      have never seen myself as merely a paper corrector. The important work is
      understanding why an error occurs and teaching in a way that makes the
      correct form feel natural, logical, and permanent.
    </P>
    <P>
      There is a solution to each of these issues. I have seen this consistently
      throughout my teaching career.
    </P>
  </>
);

export default TwentyFiveGrammarMistakesTeachersCorrect;
