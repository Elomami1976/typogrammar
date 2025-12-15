import React from 'react';
import { GrammarTopic } from '../types';
import { ArticleParagraph, ArticleHeading, InlineCode, CodeBlock, ExampleList, BulletList } from '../components/ArticleComponents';

// Additional confusing grammar areas - append these to GRAMMAR_TOPICS
export const CONFUSING_AREAS_TOPICS: GrammarTopic[] = [
  {
    id: 'make-vs-do',
    title: 'Make vs Do',
    category: 'Common Confusions',
    content: (
      <>
        <ArticleParagraph>
          <InlineCode>Make</InlineCode> and <InlineCode>do</InlineCode> are two of the most frequently used verbs in English, but learners often struggle to choose between them. While both can mean "to perform an action," they follow different patterns. According to corpus linguistics research (Lewis, 2000), <InlineCode>make</InlineCode> typically combines with nouns indicating creation or production, while <InlineCode>do</InlineCode> combines with nouns indicating activities or tasks.
        </ArticleParagraph>
        
        <ArticleHeading>Make: Creation and Production</ArticleHeading>
        <ArticleParagraph>
          Use <InlineCode>make</InlineCode> when something is created, produced, or constructed as a result of the action.
        </ArticleParagraph>
        <BulletList items={[
          <><strong>Physical creation:</strong> make breakfast, make a cake, make dinner, make coffee</>,
          <><strong>Sounds:</strong> make a noise, make a sound, make music</>,
          <><strong>Actions with visible results:</strong> make a mistake, make a decision, make a plan</>,
          <><strong>Money:</strong> make money, make a profit, make a living</>,
          <><strong>Communication:</strong> make a phone call, make a speech, make a suggestion</>,
        ]}/>
        <ExampleList items={[
          "I need to make a reservation for dinner.",
          "She makes beautiful jewelry.",
          "They're making too much noise!",
          "He makes a lot of money as a lawyer.",
          "Can you make a copy of this document?"
        ]}/>
        
        <ArticleHeading>Do: Activities and Tasks</ArticleHeading>
        <ArticleParagraph>
          Use <InlineCode>do</InlineCode> for activities, jobs, and tasks, especially when the action itself is more important than the result.
        </ArticleParagraph>
        <BulletList items={[
          <><strong>Work and tasks:</strong> do homework, do work, do a job, do the ironing</>,
          <><strong>Household chores:</strong> do the dishes, do the laundry, do the cleaning</>,
          <><strong>General activities:</strong> do exercise, do sport, do yoga</>,
          <><strong>Studies:</strong> do research, do a course, do an exam</>,
          <><strong>Favors:</strong> do someone a favor, do your best</>,
        ]}/>
        <ExampleList items={[
          "I need to do my homework before dinner.",
          "She does yoga every morning.",
          "Have you done the dishes yet?",
          "He's doing research on climate change.",
          "Can you do me a favor?"
        ]}/>
        
        <ArticleHeading>Common Fixed Expressions</ArticleHeading>
        <CodeBlock>{`MAKE:
- make a choice
- make friends
- make progress
- make sense
- make sure
- make time
- make an effort
- make a difference

DO:
- do business
- do damage
- do good
- do harm
- do your duty
- do nothing
- do well
- do wrong`}</CodeBlock>
        
        <ArticleHeading>Common Mistakes</ArticleHeading>
        <BulletList items={[
          <>❌ <InlineCode>I need to make my homework.</InlineCode> → ✅ <InlineCode>I need to do my homework.</InlineCode></>,
          <>❌ <InlineCode>She did a cake for the party.</InlineCode> → ✅ <InlineCode>She made a cake for the party.</InlineCode></>,
          <>❌ <InlineCode>Do a decision quickly!</InlineCode> → ✅ <InlineCode>Make a decision quickly!</InlineCode></>,
          <>❌ <InlineCode>I'll make the dishes later.</InlineCode> → ✅ <InlineCode>I'll do the dishes later.</InlineCode></>,
        ]}/>
      </>
    ),
  },

  {
    id: 'few-little-less-fewer',
    title: 'Few vs Little, Less vs Fewer',
    category: 'Common Confusions',
    content: (
      <>
        <ArticleParagraph>
          These quantifiers cause confusion because they all indicate small quantities, but they're used with different types of nouns. The distinction between countable and uncountable nouns determines which word to use. Prescriptive grammar guides (Strunk & White, 1999) emphasize the importance of this distinction in formal writing.
        </ArticleParagraph>
        
        <ArticleHeading>Few vs Little (Small Quantity)</ArticleHeading>
        <BulletList items={[
          <><strong>Few:</strong> Used with countable nouns (things you can count). <InlineCode>I have few friends in this city.</InlineCode></>,
          <><strong>Little:</strong> Used with uncountable nouns (things you cannot count). <InlineCode>There is little time left.</InlineCode></>,
        ]}/>
        <ExampleList items={[
          "Few people attended the meeting. (countable: people)",
          "He has little patience with children. (uncountable: patience)",
          "Few students passed the difficult exam. (countable: students)",
          "We have little information about the incident. (uncountable: information)",
          "There are few options available. (countable: options)"
        ]}/>
        
        <ArticleHeading>A Few vs A Little (Some, But Not Many)</ArticleHeading>
        <ArticleParagraph>
          Adding <InlineCode>a</InlineCode> changes the meaning slightly—it becomes more positive, meaning "some" rather than "not many/much."
        </ArticleParagraph>
        <BulletList items={[
          <><InlineCode>few friends</InlineCode> = not many friends (negative tone)</>,
          <><InlineCode>a few friends</InlineCode> = some friends (more positive)</>,
          <><InlineCode>little money</InlineCode> = not much money (negative)</>,
          <><InlineCode>a little money</InlineCode> = some money (more positive)</>,
        ]}/>
        <ExampleList items={[
          "I have a few ideas. (some ideas - positive)",
          "I have few ideas. (not many ideas - negative)",
          "We need a little help. (some help - positive)",
          "We have little hope. (not much hope - negative)"
        ]}/>
        
        <ArticleHeading>Less vs Fewer (Comparatives)</ArticleHeading>
        <ArticleParagraph>
          These are the comparative forms and follow the same countable/uncountable distinction.
        </ArticleParagraph>
        <BulletList items={[
          <><strong>Fewer:</strong> Comparative of "few" - used with countable nouns. <InlineCode>There are fewer cars on the road today.</InlineCode></>,
          <><strong>Less:</strong> Comparative of "little" - used with uncountable nouns. <InlineCode>I drink less coffee than I used to.</InlineCode></>,
        ]}/>
        <ExampleList items={[
          "Fewer people are smoking nowadays. (countable: people)",
          "I have less energy than before. (uncountable: energy)",
          "We received fewer applications this year. (countable: applications)",
          "There is less traffic on Sundays. (uncountable: traffic)",
          "Eat fewer cookies! (countable: cookies)",
          "Use less sugar in your coffee. (uncountable: sugar)"
        ]}/>
        
        <ArticleHeading>Common Exceptions and Informal Usage</ArticleHeading>
        <ArticleParagraph>
          Note: In informal English, "less" is increasingly used with countable nouns, especially in expressions like "less than 10 items" or with time, money, and distance. However, in formal writing, maintain the distinction.
        </ArticleParagraph>
        <BulletList items={[
          <>Informal: "10 items or less" → Formal: "10 items or fewer"</>,
          <>Time/Distance (often use "less"): "less than 5 minutes," "less than 10 miles"</>,
        ]}/>
        
        <ArticleHeading>Common Mistakes</ArticleHeading>
        <BulletList items={[
          <>❌ <InlineCode>I have few money.</InlineCode> → ✅ <InlineCode>I have little money.</InlineCode> (uncountable)</>,
          <>❌ <InlineCode>There are less students today.</InlineCode> → ✅ <InlineCode>There are fewer students today.</InlineCode> (countable)</>,
          <>❌ <InlineCode>A little people came.</InlineCode> → ✅ <InlineCode>A few people came.</InlineCode> (countable)</>,
          <>❌ <InlineCode>We need fewer water.</InlineCode> → ✅ <InlineCode>We need less water.</InlineCode> (uncountable)</>,
        ]}/>
      </>
    ),
  },

  {
    id: 'affect-vs-effect',
    title: 'Affect vs Effect',
    category: 'Common Confusions',
    content: (
      <>
        <ArticleParagraph>
          <InlineCode>Affect</InlineCode> and <InlineCode>effect</InlineCode> are among the most commonly confused words in English because they sound similar and relate to similar concepts. However, they're usually different parts of speech: <InlineCode>affect</InlineCode> is typically a verb, and <InlineCode>effect</InlineCode> is typically a noun. According to Garner's Modern English Usage (2016), this confusion persists even among native speakers in formal writing.
        </ArticleParagraph>
        
        <ArticleHeading>Affect (Verb) = To Influence</ArticleHeading>
        <ArticleParagraph>
          <InlineCode>Affect</InlineCode> as a verb means to influence, change, or have an impact on something.
        </ArticleParagraph>
        <ExampleList items={[
          "The weather affects my mood. (influences)",
          "How will this decision affect the company? (impact)",
          "The medicine didn't affect my symptoms. (change)",
          "Pollution affects air quality. (influences)",
          "His speech affected the audience deeply. (moved emotionally)"
        ]}/>
        
        <ArticleHeading>Effect (Noun) = The Result</ArticleHeading>
        <ArticleParagraph>
          <InlineCode>Effect</InlineCode> as a noun means a result, consequence, or outcome of something.
        </ArticleParagraph>
        <ExampleList items={[
          "The effect of the medicine was immediate. (result)",
          "Climate change has many effects on wildlife. (consequences)",
          "What effect will this have on sales? (impact/result)",
          "The special effects in the movie were amazing. (results of techniques)",
          "His words had no effect on her decision. (impact)"
        ]}/>
        
        <ArticleHeading>Memory Trick: RAVEN</ArticleHeading>
        <ArticleParagraph>
          Remember: <strong>R</strong>emember <strong>A</strong>ffect <strong>V</strong>erb, <strong>E</strong>ffect <strong>N</strong>oun
        </ArticleParagraph>
        <CodeBlock>{`RAVEN Rule:
Affect = Verb (usually)
Effect = Noun (usually)

"How does X affect Y?"
"What is the effect of X on Y?"`}</CodeBlock>
        
        <ArticleHeading>Less Common Uses</ArticleHeading>
        <ArticleParagraph>
          Occasionally, these words switch roles, though this is less common:
        </ArticleParagraph>
        <BulletList items={[
          <><strong>Effect as a verb:</strong> Means "to bring about" or "to cause to happen." <InlineCode>The new law will effect change in the system.</InlineCode> (cause change to happen)</>,
          <><strong>Affect as a noun:</strong> A psychology term for observable emotion. <InlineCode>The patient showed flat affect.</InlineCode> (emotional expression)</>,
        ]}/>
        
        <ArticleHeading>Common Phrases with Affect and Effect</ArticleHeading>
        <CodeBlock>{`With AFFECT (verb):
- adversely affect
- directly affect
- greatly affect
- negatively affect
- positively affect

With EFFECT (noun):
- cause and effect
- domino effect
- in effect
- side effect
- take effect
- to great effect
- greenhouse effect`}</CodeBlock>
        
        <ArticleHeading>Common Mistakes</ArticleHeading>
        <BulletList items={[
          <>❌ <InlineCode>The weather effected my plans.</InlineCode> → ✅ <InlineCode>The weather affected my plans.</InlineCode> (verb)</>,
          <>❌ <InlineCode>What's the affect of this policy?</InlineCode> → ✅ <InlineCode>What's the effect of this policy?</InlineCode> (noun)</>,
          <>❌ <InlineCode>This medicine effects quickly.</InlineCode> → ✅ <InlineCode>This medicine affects you quickly.</InlineCode> OR <InlineCode>This medicine takes effect quickly.</InlineCode></>,
        ]}/>
      </>
    ),
  },

  {
    id: 'lay-vs-lie',
    title: 'Lay vs Lie',
    category: 'Common Confusions',
    content: (
      <>
        <ArticleParagraph>
          <InlineCode>Lay</InlineCode> and <InlineCode>lie</InlineCode> are notoriously confused because their forms overlap and their meanings are related to position. The key distinction: <InlineCode>lay</InlineCode> is transitive (requires an object), while <InlineCode>lie</InlineCode> is intransitive (no object). Even native speakers struggle with this distinction, as documented in usage studies (Brians, 2013).
        </ArticleParagraph>
        
        <ArticleHeading>Lay = To Put/Place Something Down (Transitive)</ArticleHeading>
        <ArticleParagraph>
          <InlineCode>Lay</InlineCode> means to put or place something down. It requires a direct object (you lay SOMETHING down).
        </ArticleParagraph>
        <CodeBlock>{`Present: lay/lays
Past: laid
Past Participle: laid
Present Participle: laying

Examples:
- I lay the book on the table. (present)
- She laid the baby in the crib. (past)
- Have you laid the newspapers out? (past participle)`}</CodeBlock>
        <ExampleList items={[
          "Please lay the papers on my desk.",
          "The hen lays eggs every day.",
          "She laid her coat on the chair.",
          "They are laying new carpet in the office.",
          "He has laid the foundation for success."
        ]}/>
        
        <ArticleHeading>Lie = To Recline/Be in a Horizontal Position (Intransitive)</ArticleHeading>
        <ArticleParagraph>
          <InlineCode>Lie</InlineCode> means to recline or be in a flat position. It does NOT take a direct object (you just lie—no object).
        </ArticleParagraph>
        <CodeBlock>{`Present: lie/lies
Past: lay (!) - This is the confusing part!
Past Participle: lain
Present Participle: lying

Examples:
- I lie down when I'm tired. (present)
- Yesterday I lay down for an hour. (past)
- She has lain in bed all morning. (past participle)`}</CodeBlock>
        <ExampleList items={[
          "I'm going to lie down for a nap.",
          "The dog lies by the fire every evening.",
          "The book lay on the floor all night. (past)",
          "He has lain awake worrying.",
          "The town lies in a valley."
        ]}/>
        
        <ArticleHeading>The Confusing Part: Past Tense</ArticleHeading>
        <ArticleParagraph>
          The past tense of <InlineCode>lie</InlineCode> is <InlineCode>lay</InlineCode>, which is the same as the present tense of the transitive verb. This is the main source of confusion!
        </ArticleParagraph>
        <BulletList items={[
          <><InlineCode>Lay</InlineCode> (present) = put something down: "I lay the book on the table." (now)</>,
          <><InlineCode>Lay</InlineCode> (past of lie) = reclined: "I lay on the beach yesterday." (past)</>,
        ]}/>
        
        <ArticleHeading>Memory Tricks</ArticleHeading>
        <BulletList items={[
          <><strong>LAy needs An object:</strong> Both have the letter 'A'</>,
          <><strong>LIe = LIe down:</strong> No object needed, you just do it</>,
          <><strong>Think "place":</strong> If you can replace the verb with "place," use LAY</>,
        ]}/>
        
        <ArticleHeading>Don't Confuse with Lie = To Tell an Untruth</ArticleHeading>
        <ArticleParagraph>
          There's also <InlineCode>lie</InlineCode> meaning "to tell an untruth," which has different forms: lie/lied/lied.
        </ArticleParagraph>
        <ExampleList items={[
          "Don't lie to me! (tell an untruth)",
          "He lied about his age. (past)",
          "She has lied before. (past participle)"
        ]}/>
        
        <ArticleHeading>Common Mistakes</ArticleHeading>
        <BulletList items={[
          <>❌ <InlineCode>I'm going to lay down.</InlineCode> → ✅ <InlineCode>I'm going to lie down.</InlineCode> (no object)</>,
          <>❌ <InlineCode>Lie the book on the table.</InlineCode> → ✅ <InlineCode>Lay the book on the table.</InlineCode> (has object)</>,
          <>❌ <InlineCode>I lied on the beach yesterday.</InlineCode> → ✅ <InlineCode>I lay on the beach yesterday.</InlineCode> (past of lie = recline)</>,
          <>❌ <InlineCode>The dog laid on the rug.</InlineCode> → ✅ <InlineCode>The dog lay on the rug.</InlineCode> (no object)</>,
        ]}/>
      </>
    ),
  },

  {
    id: 'its-vs-its',
    title: "It's vs Its",
    category: 'Common Confusions',
    content: (
      <>
        <ArticleParagraph>
          Despite being one of the most common errors in English writing, the distinction between <InlineCode>it's</InlineCode> and <InlineCode>its</InlineCode> is actually quite simple. The confusion arises because we're used to apostrophes indicating possession (like "John's book"), but with <InlineCode>its</InlineCode>, the rule is different. This exception trips up even educated native speakers (Truss, 2003).
        </ArticleParagraph>
        
        <ArticleHeading>It's = It Is OR It Has (Contraction)</ArticleHeading>
        <ArticleParagraph>
          <InlineCode>It's</InlineCode> with an apostrophe is ALWAYS a contraction—a shortened form of "it is" or "it has." If you can expand it to "it is" or "it has," use the apostrophe.
        </ArticleParagraph>
        <ExampleList items={[
          "It's raining. (It is raining)",
          "It's been a long day. (It has been a long day)",
          "I think it's time to go. (it is time)",
          "It's never too late to learn. (It is never)",
          "It's made from recycled materials. (It is made)"
        ]}/>
        
        <ArticleHeading>Its = Possessive (Belonging To It)</ArticleHeading>
        <ArticleParagraph>
          <InlineCode>Its</InlineCode> without an apostrophe is the possessive form, showing that something belongs to "it." Like other possessive pronouns (his, hers, yours, theirs), it doesn't use an apostrophe.
        </ArticleParagraph>
        <ExampleList items={[
          "The dog wagged its tail. (the tail belonging to the dog)",
          "The company announced its new policy. (the policy of the company)",
          "The bird built its nest in the tree. (the nest belonging to the bird)",
          "The book has lost its cover. (the cover of the book)",
          "Every country has its own culture. (the culture belonging to each country)"
        ]}/>
        
        <ArticleHeading>Simple Test: Can You Replace It?</ArticleHeading>
        <ArticleParagraph>
          If you're unsure which to use, try this replacement test:
        </ArticleParagraph>
        <CodeBlock>{`Replace with "it is" or "it has":
✅ If it makes sense → use IT'S
❌ If it doesn't make sense → use ITS

Example: "The cat licked _____ paws."
Test: "The cat licked it is paws." ❌ Doesn't work
Answer: Use ITS (possessive)

Example: "_____ a beautiful day."
Test: "It is a beautiful day." ✅ Works!
Answer: Use IT'S (contraction)`}</CodeBlock>
        
        <ArticleHeading>Remember: Possessive Pronouns Never Have Apostrophes</ArticleHeading>
        <BulletList items={[
          <><InlineCode>his</InlineCode> (not hi's)</>,
          <><InlineCode>hers</InlineCode> (not her's)</>,
          <><InlineCode>yours</InlineCode> (not your's)</>,
          <><InlineCode>theirs</InlineCode> (not their's)</>,
          <><InlineCode>its</InlineCode> (not it's for possessive)</>,
        ]}/>
        
        <ArticleHeading>Common Mistakes</ArticleHeading>
        <BulletList items={[
          <>❌ <InlineCode>The car lost it's wheel.</InlineCode> → ✅ <InlineCode>The car lost its wheel.</InlineCode> (possessive)</>,
          <>❌ <InlineCode>Its raining outside.</InlineCode> → ✅ <InlineCode>It's raining outside.</InlineCode> (it is)</>,
          <>❌ <InlineCode>The team celebrated it's victory.</InlineCode> → ✅ <InlineCode>The team celebrated its victory.</InlineCode> (possessive)</>,
          <>❌ <InlineCode>I think its broken.</InlineCode> → ✅ <InlineCode>I think it's broken.</InlineCode> (it is)</>,
        ]}/>
        
        <ArticleParagraph>
          <strong>Pro tip:</strong> When in doubt, expand the contraction in your head. If "it is" or "it has" makes sense in the sentence, use <InlineCode>it's</InlineCode>. Otherwise, use <InlineCode>its</InlineCode>.
        </ArticleParagraph>
      </>
    ),
  },
];
