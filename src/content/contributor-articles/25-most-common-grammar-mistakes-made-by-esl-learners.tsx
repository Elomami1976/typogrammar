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

const P: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="mb-5 font-body text-base leading-relaxed text-slate-700 dark:text-slate-300 md:text-lg">
    {children}
  </p>
);

const OL: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ol className="mb-6 ml-6 list-decimal space-y-5 font-body text-base leading-relaxed text-slate-700 dark:text-slate-300 md:text-lg">
    {children}
  </ol>
);

const LI: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="pl-2">{children}</li>
);

const Mistake: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <strong className="font-semibold text-slate-900 dark:text-slate-100">
    {children}
  </strong>
);

const TwentyFiveMostCommonGrammarMistakes: React.FC = () => (
  <>
    <P>
      English grammar can be really tricky, even for advanced learners. Some
      students cannot grasp the idea of a gerund, while others stumble over
      conditionals. But there is a number of mistakes that almost every ESL
      student makes on their learning journey. Have you noticed one of them in
      the previous sentence? If yes, then good for you! If not, well, let us
      dive in and find out!
    </P>
    <P>
      Here is our list of the 25 most common grammar mistakes made by ESL
      students. Shall we count how many of them you have made yourself?
    </P>

    <H2>The 25 Most Common Grammar Mistakes</H2>
    <OL>
      <LI>
        <Mistake>Spent hours doing something.</Mistake> A lot of students say
        "spend hours ON doing something", although the preposition "on" is not
        needed here.
      </LI>
      <LI>
        <Mistake>Classical vs. classic (historical vs. historic, economical vs. economic):</Mistake>{' '}
        these words look similar but have different meanings. Classical music =
        traditional art music; a classic novel = an outstanding or famous work.
        Historical records = related to history; a historic event = important
        in history. Economic growth = related to the economy; an economical
        car = cheap to run, and so on.
      </LI>
      <LI>
        <Mistake>Forget doing vs. forget to do:</Mistake> if you forget doing
        something, you did it but you do not remember; if you forget to do
        something, you do not do it.
      </LI>
      <LI>
        <Mistake>Using the wrong article (a, an, the):</Mistake> "I bought a
        car" is not the same as "I bought the car". It is one of the hardest
        topics for my Eastern European students because most Slavic languages
        do not have articles.
      </LI>
      <LI>
        <Mistake>Omitting articles:</Mistake> while we are at it, you cannot
        just omit articles. "I went to the store", not "I went to store".
      </LI>
      <LI>
        <Mistake>Confusing Present Simple and Present Continuous:</Mistake>{' '}
        yes, we all know the slogan "I'm lovin' it", but generally we should
        not use the Present Continuous with stative verbs like know, love, or
        understand. I hear this all the time in my lessons: "I'm understanding
        this."
      </LI>
      <LI>
        <Mistake>Forgetting the third-person singular -s:</Mistake> such a
        typical mistake, especially with beginners!
      </LI>
      <LI>
        <Mistake>Using double negatives:</Mistake> ain't nobody got no time for
        checking double negatives!
      </LI>
      <LI>
        <Mistake>Confusing countable and uncountable nouns:</Mistake> do not
        give people advices when all they wanted was a piece of advice!
      </LI>
      <LI>
        <Mistake>Confusing much, many, and a lot of:</Mistake> "I don't have
        many friends" but "I don't have much time". Know the difference. And
        call your friends, say you miss them!
      </LI>
      <LI>
        <Mistake>Confusing There is / There are:</Mistake> "There is a car
        outside the building" vs. "There are cars outside the building". As
        simple as that.
      </LI>
      <LI>
        <Mistake>Incorrect prepositions:</Mistake> you are not interested on
        music, because you are interested in music!
      </LI>
      <LI>
        <Mistake>Using adjective forms instead of adverbs:</Mistake> adverbs
        are for verbs. That is why you sing well, and not sing good.
      </LI>
      <LI>
        <Mistake>Wrong adjective order:</Mistake> a lovely, small, old, round,
        red, Italian, wooden, coffee table. Remember OSASCOMP: opinion, size,
        age, shape, colour, origin, material, purpose.
      </LI>
      <LI>
        <Mistake>A number of vs. the number of:</Mistake> do not confuse these
        two, because they require different forms. "A number of mistakes are
        common among ESL learners" vs. "The number of mistakes is increasing".
      </LI>
      <LI>
        <Mistake>Confusing make and do:</Mistake> make sure you make mistakes,
        and not do mistakes! Doing your homework helps a lot. Make yourself do
        it every time.
      </LI>
      <LI>
        <Mistake>Using infinitives and gerunds incorrectly:</Mistake> there is
        a list of verbs that require either a gerund or an infinitive. Compare
        these sentences, for example: "She avoids talking about it, but he
        decided to discuss the matter anyway."
      </LI>
      <LI>
        <Mistake>Forgetting auxiliary verbs in questions:</Mistake> you think
        you can just forget about "do"? You really believe no one will notice?
        Not a chance.
      </LI>
      <LI>
        <Mistake>Confusing since and for:</Mistake> a typical mistake for
        Germans, who often confuse "since" and "seit". Remember: since means
        "from a specific point in time", while for means "during a period of
        time".
      </LI>
      <LI>
        <Mistake>Using the wrong pronoun:</Mistake> sometimes learners say "Me
        and my friend went" instead of "My friend and I went".
      </LI>
      <LI>
        <Mistake>Run-on sentences:</Mistake> run-on sentences happen because
        learners often forget to separate complete ideas with a conjunction, a
        semicolon, or proper punctuation. "I was tired I went to bed early"
        should be "I was tired, so I went to bed early".
      </LI>
      <LI>
        <Mistake>Misusing comparatives and superlatives:</Mistake> do not
        forget that "more good" is not a thing - better is!
      </LI>
      <LI>
        <Mistake>Confusing will and going to:</Mistake> although these forms
        are used to express the future, they are not always interchangeable.
        Compare these two: "Look at those clouds! It's going to rain." vs. "I
        think it will rain tomorrow".
      </LI>
      <LI>
        <Mistake>Using a singular verb after plural subjects:</Mistake> for
        example, "My parents is" instead of "My parents are."
      </LI>
      <LI>
        <Mistake>Using the wrong verb tense form:</Mistake> no, you cannot say
        "I have went home after work"!
      </LI>
    </OL>

    <H2>Final Thoughts</H2>
    <P>
      If you found yourself in these examples, do not worry! There is nothing
      to be ashamed of. Every mistake is proof that you are using the language
      and getting better at it every day. After all, the goal is not to avoid
      mistakes but to learn from them and move on. Do not give up on
      practising, be persistent, and your English will get better with time.
      Good luck!
    </P>
  </>
);

export default TwentyFiveMostCommonGrammarMistakes;
