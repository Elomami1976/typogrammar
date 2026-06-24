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
    className="font-heading mt-8 mb-3 text-xl font-bold leading-snug text-slate-800 dark:text-slate-100"
  >
    {children}
  </h3>
);

const P: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="mb-5 font-body text-base leading-relaxed text-slate-700 dark:text-slate-300 md:text-lg">
    {children}
  </p>
);

const BlockQuote: React.FC<{ children: React.ReactNode; source?: string }> = ({
  children,
  source,
}) => (
  <blockquote className="my-6 border-l-4 border-red-500 pl-5 italic text-slate-600 dark:text-slate-400">
    <p className="font-body text-base leading-relaxed md:text-lg">{children}</p>
    {source && (
      <footer className="mt-2 text-sm not-italic text-slate-500 dark:text-slate-500">
        {source}
      </footer>
    )}
  </blockquote>
);

const DefinitionBox: React.FC<{
  term: string;
  definition: string;
  color: 'blue' | 'green';
}> = ({ term, definition, color }) => {
  const styles = {
    blue: 'bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800',
    green: 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800',
  };
  const termStyles = {
    blue: 'text-blue-800 dark:text-blue-300',
    green: 'text-green-800 dark:text-green-300',
  };
  return (
    <div className={`my-3 rounded-lg border p-4 ${styles[color]}`}>
      <p className={`mb-1 font-semibold ${termStyles[color]}`}>{term}</p>
      <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
        {definition}
      </p>
    </div>
  );
};

const HowToStopTranslatingAndStartCommunicating: React.FC = () => (
  <>
    <P>
      When people want to become fluent in English, their first instinct is
      often to learn more vocabulary and do more grammar exercises. Yet many
      discover that despite months of study, speaking still feels slow and
      unnatural.
    </P>
    <P>
      Thinking in English is neither a mysterious talent nor a technique
      reserved for advanced learners. It is a skill that develops gradually
      through consistent exposure to the language and regular opportunities to
      use it. In fact, throughout this article, you could replace "English"
      with any language you are learning because the principles remain the
      same. Thinking in a foreign language is not the starting point of
      language acquisition, but the result.
    </P>

    <H2 id="foundation">The Foundation: Good Input and Good Output</H2>
    <P>
      To think in English, learners need two things: regular input and regular
      output. Both are essential. If one is missing, progress slows down
      dramatically.
    </P>

    <H3 id="regular-input">Regular Input</H3>
    <P>
      Before the brain can process English naturally, it needs a steady "diet"
      of English. The question is not whether learners should read, listen, or
      watch English-language content. The question is what kind of content
      they should choose.
    </P>
    <P>
      A good strategy is to consume content that would be interesting
      regardless of the language. This might include books about a favourite
      hobby, articles related to work, information about an upcoming vacation
      destination, a podcast series, or a YouTube channel followed regularly.
      Interest creates attention, and attention creates memory. The more
      engaged learners are with a topic, the more likely they are to retain
      the vocabulary and expressions associated with it. The most important
      point is that the input should be connected to the learner's life: their
      job, their hobbies, their family, and their interests.
    </P>
    <P>
      When it comes to visual input, I always recommend sticking with familiar
      formats. Watching a favourite series is often more beneficial than
      constantly searching for new content. Familiar characters, voices,
      settings, and storylines reduce the amount of mental energy required to
      understand the context. The brain can devote more resources to
      processing language. There is also a practical advantage: finding time
      for a 30- or 45-minute episode is usually easier than committing to a
      two-hour movie.
    </P>

    <H3 id="regular-output">Regular Output</H3>
    <P>
      Input alone, however, is not enough. Many learners consume a lot of
      English but rarely produce any. They can understand meetings, podcasts,
      presentations, and articles with relative ease, yet struggle when asked
      to explain their own ideas.
    </P>
    <P>
      This imbalance is often described in terms of passive and active
      vocabulary:
    </P>
    <DefinitionBox
      term="Passive vocabulary"
      definition="The words and expressions that learners recognise and understand when they encounter them."
      color="blue"
    />
    <DefinitionBox
      term="Active vocabulary"
      definition="The words and expressions they can retrieve and use spontaneously in speaking or writing."
      color="green"
    />
    <P>
      Everybody's passive vocabulary is significantly larger than their active
      vocabulary, including native speakers'. The vocabulary is there, but it
      is not yet readily available.
    </P>
    <P>
      Thinking in English depends largely on turning passive into active
      vocabulary. And active vocabulary develops through use.
    </P>
    <P>
      Many learners expect a magical moment when they suddenly start thinking
      in English. In reality, thinking in English often begins as simple
      internal speech: describing what you are doing, rehearsing a
      conversation, or mentally commenting on everyday situations. This is why
      regular output is so important.
    </P>
    <P>
      For this reason, learners should speak as much as possible. If no
      conversation partner is available, they should speak to themselves.
      While this may sound slightly eccentric, it is surprisingly effective.
      Learners can describe their day, explain a work process, talk about a
      hobby, or rehearse future conversations.
    </P>
    <P>
      For example, they might imagine introducing their company to a customer
      visiting for the first time, explaining a production process to a
      supplier, comparing their role with that of a colleague, or presenting a
      new project to their team. These activities force the brain to retrieve
      vocabulary actively rather than merely recognise it.
    </P>
    <P>
      Recording oneself can be especially valuable. Many learners are
      surprised by how obvious their mistakes become once they hear themselves.
      During speaking, the brain is occupied with multiple tasks
      simultaneously: finding vocabulary, constructing sentences, applying
      grammar rules, and managing pronunciation. When listening to a
      recording, however, all attention can be focused on the output itself.
    </P>
    <P>
      This creates a powerful feedback loop. Learners begin to notice
      recurring mistakes and weaknesses. Eventually, they catch themselves a
      split second before making those mistakes and automatically choose a
      better alternative.
    </P>

    <H2 id="learn-words-in-context">Learn Words in Context</H2>
    <P>
      One of the most effective ways to move vocabulary from passive knowledge
      to active use is to learn words in context rather than isolation.
    </P>
    <P>
      When learners encounter a useful word in an article, podcast, video, or
      book, they should pay attention to the sentence in which it appears. If
      the sentence is too long, it can be shortened and copied on a flashcard,
      but the surrounding context should remain.
    </P>
    <P>
      This is one reason why I continue to recommend physical flashcards,
      despite the popularity of digital apps. A physical card allows learners
      to include exactly the information they need: pronunciation, word stress,
      example sentences, collocations, notes about their common mistakes, or
      perhaps a preposition highlighted in red because it is frequently
      forgotten.
    </P>
    <P>Consider the sentence:</P>
    <BlockQuote>This bolt has come loose.</BlockQuote>
    <P>
      The learner may never need to use this exact sentence. Nevertheless, it
      is infinitely more useful than memorising the word <em>bolt</em> in
      isolation. After all, language is not a collection of disconnected
      vocabulary items. Real communication happens through phrases, chunks,
      and complete thoughts. Besides, can you imagine a situation in which
      someone suddenly shouts, "Bolt!" and leaves it at that?
    </P>
    <P>
      The same principle applies to grammar. Many learners spend considerable
      time memorising explanations such as:
    </P>
    <BlockQuote>
      The "Present Perfect Progressive" is used when an action started in the
      past and continues up to the present, with emphasis on duration.
    </BlockQuote>
    <P>
      While technically accurate, such explanations are impossible to retrieve
      during a conversation.
    </P>
    <P>
      Personalised sentences such as "I've been working for this company for
      twelve years" or "I've been working for this company since 2014" are far
      more useful. Meaningful examples are easier to remember because they are
      connected to personal experience rather than abstract rules.
    </P>

    <H2 id="dont-look-up-every-word">Don't Look Up Every Unknown Word</H2>
    <P>
      Another habit that prevents learners from thinking in English is the
      constant use of a dictionary.
    </P>
    <P>
      When reading for pleasure, learners should not feel compelled to look up
      every unfamiliar word, since this interrupts the flow of reading and
      reinforces the habit of translating everything into the native language.
    </P>
    <P>
      A more effective approach is to infer meaning from context. Consider a
      line from Bob Dylan's <em>Forever Young</em>:
    </P>
    <BlockQuote source="-- Bob Dylan, Forever Young">
      May you build a ladder to the stars,{' '}
      <br />
      Climb on every rung.
    </BlockQuote>
    <P>
      Suppose you do not know the word <em>rung</em>. You know the word{' '}
      <em>ladder</em> and you know the word <em>climb</em>. Therefore,{' '}
      <em>rung</em> must be one of the horizontal bars that make climbing
      possible. What else could it possibly mean?
    </P>
    <P>
      This skill is essential because real-life communication does not come
      with subtitles, dictionaries, or pause buttons. Successful language
      users tolerate uncertainty remarkably well. They do not need to
      understand every word in order to understand the message.
    </P>
    <P>
      Like any skill, contextual guessing improves through practice. Learners
      should make it a regular habit: when reading for pleasure, they should
      try to do without a dictionary first. Later, when preparing their
      flashcards, dictionaries should, of course, be used.
    </P>

    <H2 id="most-important-tip">The Most Important Tip of All</H2>
    <P>
      If readers remember only one idea from this article, it should be this:
    </P>
    <div className="my-6 rounded-xl bg-red-50 border border-red-200 p-6 text-center dark:bg-red-900/20 dark:border-red-800">
      <p className="font-heading text-lg font-bold text-red-700 dark:text-red-300">
        Never learn isolated words. Learn the context in which they are used.
      </p>
    </div>
    <P>
      As a final example, consider a sentence from E. L. Doctorow's novel{' '}
      <em>Ragtime</em>:
    </P>
    <BlockQuote source="-- E. L. Doctorow, Ragtime">
      "Comrades, let us disagree, of course, but not by losing our decorum to
      the extent that the police may have an excuse to interrupt us."
    </BlockQuote>
    <P>
      Imagine learners want to learn the word <em>decorum</em>. It may be
      hard to come up with a personalised sentence for this one. In that case,
      I would recommend learning common combinations:
    </P>
    <div className="my-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
      {[
        'to break decorum',
        'to behave with decorum',
        'to show some decorum',
        'a breach of decorum',
      ].map((collocation) => (
        <div
          key={collocation}
          className="rounded-lg bg-slate-100 px-3 py-2 text-center text-sm font-medium text-slate-700 dark:bg-slate-700 dark:text-slate-300"
        >
          {collocation}
        </div>
      ))}
    </div>
    <P>
      These combinations, known as collocations, are fundamental to natural
      language use. Fluent speakers do not assemble every sentence from
      individual words. They rely heavily on familiar chunks and word
      partnerships.
    </P>
    <P>
      Knowing what a word means is only the beginning. Knowing which words
      typically accompany it is what makes the word usable.
    </P>

    <H2 id="final-thoughts">Final Thoughts</H2>
    <P>
      Thinking in English is not something learners achieve by sheer
      willpower. It is not a matter of forcing themselves to stop translating
      overnight. Rather, it emerges naturally from repeated exposure to
      meaningful input and frequent opportunities for meaningful output.
    </P>
    <P>
      The process is surprisingly simple. Read and listen to content that
      genuinely interests you. Speak regularly, even if only to yourself.
      Learn vocabulary through sentences rather than lists. Focus on context,
      collocations, and personal relevance. Accept that you will not
      understand every word, and resist the temptation to translate
      everything.
    </P>
    <P>
      Over time, a subtle but important shift occurs. English words and
      phrases become linked directly to ideas, experiences, situations, and
      emotions rather than to equivalents in the native language. When that
      happens, learners are no longer translating.
    </P>
    <P>
      And that is ultimately what thinking in English really means. It is not
      a technique. It is the natural consequence of effective language
      learning.
    </P>
  </>
);

export default HowToStopTranslatingAndStartCommunicating;
