
import React from 'react';
import { GrammarTopic } from '../types';
import { ArticleParagraph, ArticleHeading, InlineCode, CodeBlock, ExampleList, BulletList } from '../components/ArticleComponents';
import { SentenceTransformationDiagram, TimelineDiagram } from '../components/VisualAids';
import { CONFUSING_AREAS_TOPICS } from './confusingAreasTopics';

export const GRAMMAR_TOPICS: GrammarTopic[] = [
  // Tenses
  {
    id: 'present-simple',
    title: 'Present Simple Tense',
    category: 'Present & Past Tenses',
    content: (
      <>
        <ArticleParagraph>
          The Present Simple is the most basic tense in English. We use it to talk about things that are generally true, habits, routines, and scheduled future events.
        </ArticleParagraph>
        <TimelineDiagram 
          title="Tense Timeline: Present Simple"
          summary="Used for habits, routines, and general truths that happen repeatedly."
          events={[
            { type: 'recurring', position: 20, label: 'Habit' },
            { type: 'recurring', position: 40, label: 'Habit' },
            { type: 'now', position: 60, label: 'Now' },
            { type: 'recurring', position: 60, label: 'Habit' },
            { type: 'recurring', position: 80, label: 'Habit' },
          ]}
        />
        <ArticleHeading>Formation</ArticleHeading>
        <ArticleParagraph>
          The structure is quite straightforward. For most subjects, you use the base form of the verb. For third-person singular subjects (he, she, it), you add an -s or -es.
        </ArticleParagraph>
        <CodeBlock>{`// Positive
Subject + verb (base / -s)

// Negative
Subject + do/does + not + verb (base)

// Question
Do/Does + subject + verb (base)?`}</CodeBlock>
        <ArticleHeading>Usage & Examples</ArticleHeading>
        <ArticleParagraph><strong>1. For Habits and Routines:</strong></ArticleParagraph>
        <ExampleList items={["I drink coffee every morning.", "She goes to the gym on weekends."]} />
        <ArticleParagraph><strong>2. For General Truths or Facts:</strong></ArticleParagraph>
        <ExampleList items={["The Earth revolves around the Sun.", "Water boils at 100 degrees Celsius."]} />
        <ArticleParagraph><strong>3. For Scheduled Future Events (like timetables):</strong></ArticleParagraph>
        <ExampleList items={["The train leaves at 7 AM tomorrow.", "The conference starts next Monday."]} />
      </>
    ),
  },
  {
    id: 'present-progressive',
    title: 'Present Progressive Tense',
    category: 'Present & Past Tenses',
    content: (
      <>
        <ArticleParagraph>
          The Present Progressive tense is used for actions happening at the moment of speaking, temporary situations, and planned future arrangements. It emphasizes the ongoing nature of an action.
        </ArticleParagraph>
        <TimelineDiagram 
          title="Tense Timeline: Present Progressive"
          summary="Used for an action happening at the exact moment of speaking."
          events={[
            { type: 'now', position: 60, label: 'Now' },
            { type: 'duration', start: 55, end: 65, label: 'Happening Now', position: 0 },
          ]}
        />
        <ArticleHeading>Formation</ArticleHeading>
        <ArticleParagraph>This tense is formed using the present tense of the verb "to be" (<InlineCode>am</InlineCode>/<InlineCode>is</InlineCode>/<InlineCode>are</InlineCode>) and the present participle of the main verb (<InlineCode>-ing</InlineCode> form).</ArticleParagraph>
        <CodeBlock>{`// Positive
Subject + am/is/are + verb(-ing)

// Negative
Subject + am/is/are + not + verb(-ing)

// Question
Am/Is/Are + subject + verb(-ing)?`}</CodeBlock>
        <ArticleHeading>Usage & Examples</ArticleHeading>
        <ArticleParagraph><strong>1. Actions Happening Now:</strong></ArticleParagraph>
        <ExampleList items={["I am writing an email right now.", "Listen! Someone is playing the piano."]} />
        <ArticleParagraph><strong>2. Temporary Situations:</strong></ArticleParagraph>
        <ExampleList items={["She is living in London for a few months.", "We are studying a lot for our final exams."]} />
        <ArticleParagraph><strong>3. Planned Future Arrangements:</strong></ArticleParagraph>
        <ExampleList items={["I am meeting my friends for dinner tonight.", "They are flying to Paris next week."]} />
        <ArticleHeading>Stative Verbs (Non-Progressive Verbs)</ArticleHeading>
        <ArticleParagraph>
            Some verbs describe states or conditions, not actions. These "stative" verbs are generally not used in progressive tenses. Common examples include <InlineCode>know</InlineCode>, <InlineCode>believe</InlineCode>, <InlineCode>love</InlineCode>, <InlineCode>hate</InlineCode>, <InlineCode>own</InlineCode>, <InlineCode>seem</InlineCode>, and <InlineCode>understand</InlineCode>.
        </ArticleParagraph>
         <ExampleList items={["Incorrect: I am knowing the answer.", "Correct: I know the answer."]} />
      </>
    ),
  },
    {
    id: 'past-simple',
    title: 'Past Simple Tense',
    category: 'Present & Past Tenses',
    content: (
       <>
        <ArticleParagraph>
          The Past Simple tense is used to talk about completed actions, states, or habits in the past. The action is finished.
        </ArticleParagraph>
        <TimelineDiagram 
          title="Tense Timeline: Past Simple"
          summary="Used for a completed action at a specific point in the past."
          events={[
            { type: 'point', position: 30, label: 'Finished Action' },
            { type: 'now', position: 60, label: 'Now' },
          ]}
        />
        <ArticleHeading>Formation</ArticleHeading>
        <ArticleParagraph>
          For regular verbs, add <InlineCode>-ed</InlineCode> to the base form. Many common verbs are irregular and have unique past tense forms.
        </ArticleParagraph>
        <CodeBlock>{`// Positive
Subject + verb(-ed or irregular form)

// Negative
Subject + did + not + verb (base)

// Question
Did + subject + verb (base)?`}</CodeBlock>
        <ArticleHeading>Usage & Examples</ArticleHeading>
        <ArticleParagraph><strong>1. Completed Action in the Past:</strong></ArticleParagraph>
        <ExampleList items={["I visited Japan last year.", "She finished her work an hour ago."]} />
        <ArticleParagraph><strong>2. Series of Completed Actions:</strong></ArticleParagraph>
        <ExampleList items={["He woke up, brushed his teeth, and made breakfast."]} />
         <ArticleParagraph><strong>3. Irregular Verbs:</strong></ArticleParagraph>
        <ExampleList items={["They went to the cinema. (go → went)", "I saw a great movie. (see → saw)"]}/>
      </>
    )
  },
  {
    id: 'past-progressive',
    title: 'Past Progressive Tense',
    category: 'Present & Past Tenses',
    content: (
      <>
        <ArticleParagraph>
            The Past Progressive tense describes actions or events that were in progress at a specific time in the past. It emphasizes the duration of an action.
        </ArticleParagraph>
        <TimelineDiagram 
          title="Tense Timeline: Past Progressive"
          summary="An ongoing action in the past, often interrupted by another event."
          events={[
            { type: 'duration', start: 20, end: 40, label: 'Ongoing Past Action', position: 0 },
            { type: 'point', position: 35, label: 'Interruption' },
            { type: 'now', position: 60, label: 'Now' },
          ]}
        />
        <ArticleHeading>Formation</ArticleHeading>
        <ArticleParagraph>
            This tense is formed using the past tense of the verb "to be" (<InlineCode>was</InlineCode>/<InlineCode>were</InlineCode>) and the present participle of the main verb (<InlineCode>-ing</InlineCode> form).
        </ArticleParagraph>
        <CodeBlock>{`// Positive
Subject + was/were + verb(-ing)

// Negative
Subject + was/were + not + verb(-ing)

// Question
Was/Were + subject + verb(-ing)?`}</CodeBlock>
        <ArticleHeading>Usage & Examples</ArticleHeading>
        <ArticleParagraph><strong>1. Action in Progress at a Past Time:</strong></ArticleParagraph>
        <ExampleList items={["At 8 PM last night, I was watching a movie.", "They were still working at midnight."]} />
        <ArticleParagraph><strong>2. Interrupted Action in the Past:</strong></ArticleParagraph>
        <ExampleList items={["I was reading when the phone rang.", "He was driving to work when he saw the accident."]} />
        <ArticleParagraph><strong>3. Parallel Actions in the Past:</strong></ArticleParagraph>
        <ExampleList items={["While she was cooking, he was setting the table."]} />
        <ArticleHeading>Stative Verbs (Non-Progressive Verbs)</ArticleHeading>
        <ArticleParagraph>
            Some verbs describe states or conditions, not actions. These "stative" verbs are generally not used in progressive tenses. Common examples include <InlineCode>know</InlineCode>, <InlineCode>believe</InlineCode>, <InlineCode>love</InlineCode>, <InlineCode>hate</InlineCode>, <InlineCode>own</InlineCode>, <InlineCode>seem</InlineCode>, and <InlineCode>understand</InlineCode>.
        </ArticleParagraph>
         <ExampleList items={["Incorrect: He was wanting a new car.", "Correct: He wanted a new car."]} />
      </>
    ),
  },
  {
    id: 'present-perfect',
    title: 'Present Perfect Tense',
    category: 'Present & Past Tenses',
    content: (
       <>
        <ArticleParagraph>
          The Present Perfect tense is used to describe actions that happened at an unspecified time in the past, or actions that began in the past and continue to the present. It connects the past with the present.
        </ArticleParagraph>
        <TimelineDiagram 
          title="Tense Timeline: Present Perfect"
          summary="An action that started in the past and continues to the present, or an action with a result in the present."
          events={[
            { type: 'arrow', start: 20, end: 60, label: '', position: 0 },
            { type: 'point', position: 20, label: 'Action Started' },
            { type: 'now', position: 60, label: 'Now (Still True)' },
          ]}
        />
        <ArticleHeading>Formation</ArticleHeading>
        <ArticleParagraph>
          This tense is formed using the verb "to have" (<InlineCode>has</InlineCode>/<InlineCode>have</InlineCode>) and the past participle of the main verb.
        </ArticleParagraph>
        <CodeBlock>{`// Positive
Subject + has/have + past participle

// Negative
Subject + has/have + not + past participle

// Question
Has/Have + subject + past participle?`}</CodeBlock>
        <ArticleHeading>Usage & Examples</ArticleHeading>
        <ArticleParagraph><strong>1. Unspecified Past Action (Life Experience):</strong></ArticleParagraph>
        <ExampleList items={["I have been to Spain.", "She has seen that movie before."]} />
        <ArticleParagraph><strong>2. Action Started in the Past, Continuing to Present:</strong></ArticleParagraph>
        <ExampleList items={["They have lived here for ten years.", "He has worked as a teacher since 2015."]} />
        <ArticleParagraph><strong>3. Recent Past Action with Present Result:</strong></ArticleParagraph>
        <ExampleList items={["I have lost my keys. (I can't find them now).", "She has just finished her homework."]} />
      </>
    )
  },
  {
    id: 'present-perfect-progressive',
    title: 'Present Perfect Progressive',
    category: 'Present & Past Tenses',
    content: (
      <>
        <ArticleParagraph>
            The Present Perfect Progressive emphasizes the duration of an action that started in the past and is still continuing, or has only recently stopped.
        </ArticleParagraph>
        <TimelineDiagram
          title="Tense Timeline: Present Perfect Progressive"
          summary="An ongoing action that started in the past and continues right up to the present moment."
          events={[
            { type: 'duration', start: 20, end: 60, label: 'Ongoing Action', position: 0 },
            { type: 'point', position: 20, label: 'Started' },
            { type: 'now', position: 60, label: 'Now' },
          ]}
        />
        <ArticleHeading>Formation</ArticleHeading>
        <ArticleParagraph>
            This tense is formed with <InlineCode>has/have</InlineCode> + <InlineCode>been</InlineCode> + the present participle (<InlineCode>-ing</InlineCode> form).
        </ArticleParagraph>
        <CodeBlock>{`// Positive
Subject + has/have + been + verb(-ing)

// Negative
Subject + has/have + not + been + verb(-ing)

// Question
Has/Have + subject + been + verb(-ing)?`}</CodeBlock>
        <ArticleHeading>Usage & Examples</ArticleHeading>
        <ArticleParagraph><strong>1. Action Started in Past, Continuing Now:</strong></ArticleParagraph>
        <ExampleList items={["I have been waiting for two hours.", "She has been working on this report all day."]} />
        <ArticleParagraph><strong>2. Recently Stopped Action with Present Result:</strong></ArticleParagraph>
        <ExampleList items={["It has been raining (the ground is wet).", "I'm tired because I have been studying."]} />
        <ArticleHeading>Stative Verbs (Non-Progressive Verbs)</ArticleHeading>
        <ArticleParagraph>
            Remember, stative verbs (like <InlineCode>know</InlineCode>, <InlineCode>love</InlineCode>, <InlineCode>own</InlineCode>) describe states, not actions, and are not typically used in progressive tenses.
        </ArticleParagraph>
         <ExampleList items={["Incorrect: I have been knowing him for years.", "Correct: I have known him for years."]} />
      </>
    ),
  },
  {
    id: 'past-perfect',
    title: 'Past Perfect Tense',
    category: 'Present & Past Tenses',
    content: (
      <>
        <ArticleParagraph>
          The Past Perfect tense is used to talk about an action that was completed before another point or action in the past. It clarifies that one event happened earlier than another. Think of it as the "past in the past."
        </ArticleParagraph>
        <TimelineDiagram
          title="Tense Timeline: Past Perfect"
          summary="An action that happened before another action in the past."
          events={[
            { type: 'point', position: 20, label: 'Past Action 1' },
            { type: 'point', position: 40, label: 'Past Action 2' },
            { type: 'now', position: 60, label: 'Now' },
          ]}
        />
        <ArticleHeading>Formation</ArticleHeading>
        <ArticleParagraph>
          This tense is formed using the auxiliary verb <InlineCode>had</InlineCode> and the past participle of the main verb.
        </ArticleParagraph>
        <CodeBlock>{`// Positive
Subject + had + past participle

// Negative
Subject + had + not + past participle

// Question
Had + subject + past participle?`}</CodeBlock>
        <ArticleHeading>Usage & Examples</ArticleHeading>
        <ArticleParagraph><strong>1. An Action Completed Before Another Past Action:</strong></ArticleParagraph>
        <ExampleList items={["The train had already left when I arrived at the station.", "She told me she had studied French before."]} />
        <ArticleParagraph><strong>2. With Time Expressions:</strong> Used with expressions like 'before', 'after', 'by the time'.</ArticleParagraph>
        <ExampleList items={["By the time he got a job, he had graduated from college.", "He hadn't seen snow before he moved to Canada."]} />
      </>
    ),
  },
   {
    id: 'past-perfect-progressive',
    title: 'Past Perfect Progressive',
    category: 'Present & Past Tenses',
    content: (
      <>
        <ArticleParagraph>
          The Past Perfect Progressive describes the duration of an action that was in progress before another action or event in the past. It focuses on the "how long".
        </ArticleParagraph>
        <TimelineDiagram
          title="Tense Timeline: Past Perfect Progressive"
          summary="An ongoing past action that was happening before another past event occurred."
          events={[
            { type: 'duration', start: 10, end: 30, label: 'Ongoing Past Action', position: 0 },
            { type: 'point', position: 30, label: 'Second Past Action' },
            { type: 'now', position: 60, label: 'Now' },
          ]}
        />
        <ArticleHeading>Formation</ArticleHeading>
        <ArticleParagraph>
          This tense is formed with <InlineCode>had</InlineCode> + <InlineCode>been</InlineCode> + the present participle (<InlineCode>-ing</InlineCode> form).
        </ArticleParagraph>
        <CodeBlock>{`// Positive
Subject + had + been + verb(-ing)

// Negative
Subject + had + not + been + verb(-ing)

// Question
Had + subject + been + verb(-ing)?`}</CodeBlock>
        <ArticleHeading>Usage & Examples</ArticleHeading>
        <ArticleParagraph><strong>1. Duration Before a Past Event:</strong></ArticleParagraph>
        <ExampleList items={["They had been playing tennis for two hours before it started to rain.", "He was tired because he had been working all night."]} />
        <ArticleParagraph><strong>2. Cause of a Past Action:</strong></ArticleParagraph>
        <ExampleList items={["Her eyes were red because she had been crying."]} />
        <ArticleHeading>Stative Verbs (Non-Progressive Verbs)</ArticleHeading>
        <ArticleParagraph>
            Stative verbs describe states, not actions, and are not typically used in progressive tenses.
        </ArticleParagraph>
         <ExampleList items={["Incorrect: We had been owning the car for a year when it broke down.", "Correct: We had owned the car for a year when it broke down."]} />
      </>
    ),
  },
  // Future Tenses
  {
    id: 'future-simple',
    title: 'Future Simple Tense',
    category: 'Future Tenses',
    content: (
      <>
        <ArticleParagraph>
          The Future Simple tense is used to talk about the future. It's often used for predictions, promises, and spontaneous decisions made at the moment of speaking.
        </ArticleParagraph>
        <TimelineDiagram
          title="Tense Timeline: Future Simple"
          summary="An action or event that will happen at some point in the future."
          events={[
            { type: 'now', position: 60, label: 'Now' },
            { type: 'point', position: 85, label: 'Future Action' },
          ]}
        />
        <ArticleHeading>Formation</ArticleHeading>
        <ArticleParagraph>
          The Future Simple is formed with the modal auxiliary verb <InlineCode>will</InlineCode> followed by the base form of the main verb.
        </ArticleParagraph>
        <CodeBlock>{`// Positive
Subject + will + verb (base)

// Negative
Subject + will + not (won't) + verb (base)

// Question
Will + subject + verb (base)?`}</CodeBlock>
        <ArticleHeading>Usage & Examples</ArticleHeading>
        <ArticleParagraph><strong>1. Predictions:</strong></ArticleParagraph>
        <ExampleList items={["It will be sunny tomorrow.", "I think the blue team will win the game."]} />
        <ArticleParagraph><strong>2. Spontaneous Decisions:</strong></ArticleParagraph>
        <ExampleList items={["The phone is ringing. I'll get it.", "It's cold in here. I'll close the window."]} />
        <ArticleParagraph><strong>3. Promises, Offers, and Requests:</strong></ArticleParagraph>
        <ExampleList items={["I will help you with your homework.", "Will you marry me?"]}/>
      </>
    ),
  },
  {
    id: 'future-progressive',
    title: 'Future Progressive Tense',
    category: 'Future Tenses',
    content: (
      <>
        <ArticleParagraph>
          The Future Progressive tense describes an ongoing action that will be in progress at a specific time in the future.
        </ArticleParagraph>
        <TimelineDiagram
          title="Tense Timeline: Future Progressive"
          summary="An ongoing action at a specific point in the future."
          events={[
            { type: 'now', position: 60, label: 'Now' },
            { type: 'duration', start: 80, end: 90, label: 'Ongoing Future Action', position: 0 },
          ]}
        />
        <ArticleHeading>Formation</ArticleHeading>
        <ArticleParagraph>
          This tense is formed with <InlineCode>will</InlineCode> + <InlineCode>be</InlineCode> + the present participle (<InlineCode>-ing</InlineCode> form).
        </ArticleParagraph>
        <CodeBlock>{`// Positive
Subject + will + be + verb(-ing)

// Negative
Subject + will + not (won't) + be + verb(-ing)

// Question
Will + subject + be + verb(-ing)?`}</CodeBlock>
        <ArticleHeading>Usage & Examples</ArticleHeading>
        <ArticleParagraph><strong>1. Action in Progress at a Future Time:</strong></ArticleParagraph>
        <ExampleList items={["This time next week, I will be relaxing on a beach.", "At 10 PM tonight, she will be studying for her exam."]} />
        <ArticleParagraph><strong>2. Interrupted Future Action:</strong></ArticleParagraph>
        <ExampleList items={["When you arrive, I will be cooking dinner."]} />
        <ArticleHeading>Stative Verbs (Non-Progressive Verbs)</ArticleHeading>
        <ArticleParagraph>
            As with other progressive tenses, stative verbs (like <InlineCode>believe</InlineCode>, <InlineCode>seem</InlineCode>, <InlineCode>understand</InlineCode>) are generally not used in the Future Progressive form.
        </ArticleParagraph>
        <ExampleList items={["Incorrect: At this time tomorrow, I will be knowing the result.", "Correct: At this time tomorrow, I will know the result."]} />
      </>
    ),
  },
  {
    id: 'future-perfect',
    title: 'Future Perfect Tense',
    category: 'Future Tenses',
    content: (
      <>
        <ArticleParagraph>
          The Future Perfect tense is used to describe an action that will be completed before a specific point in the future.
        </ArticleParagraph>
        <TimelineDiagram
          title="Tense Timeline: Future Perfect"
          summary="An action that will be finished before a certain time in the future."
          events={[
            { type: 'now', position: 60, label: 'Now' },
            { type: 'point', position: 80, label: 'Completed Action' },
            { type: 'point', position: 90, label: 'Future Point' },
          ]}
        />
        <ArticleHeading>Formation</ArticleHeading>
        <ArticleParagraph>
          This tense is formed with <InlineCode>will</InlineCode> + <InlineCode>have</InlineCode> + the past participle of the main verb.
        </ArticleParagraph>
        <CodeBlock>{`// Positive
Subject + will + have + past participle

// Negative
Subject + will + not (won't) + have + past participle

// Question
Will + subject + have + past participle?`}</CodeBlock>
        <ArticleHeading>Usage & Examples</ArticleHeading>
        <ArticleParagraph><strong>1. Action Completed Before a Future Time:</strong></ArticleParagraph>
        <ExampleList items={["By 10 PM, I will have finished my homework.", "By the time you read this, I will have left."]} />
        <ArticleParagraph><strong>2. Duration Up to a Future Point:</strong></ArticleParagraph>
        <ExampleList items={["Next month, we will have been married for five years."]} />
      </>
    ),
  },
  {
    id: 'future-perfect-progressive',
    title: 'Future Perfect Progressive',
    category: 'Future Tenses',
    content: (
      <>
        <ArticleParagraph>
          The Future Perfect Progressive tense is used to emphasize the duration of an action that will be in progress up to a specific point in the future.
        </ArticleParagraph>
        <TimelineDiagram
          title="Tense Timeline: Future Perfect Progressive"
          summary="An ongoing action that will continue up to a specific point in the future."
          events={[
            { type: 'now', position: 60, label: 'Now' },
            { type: 'duration', start: 70, end: 90, label: 'Ongoing Action', position: 0 },
            { type: 'point', position: 90, label: 'Future Point' },
          ]}
        />
        <ArticleHeading>Formation</ArticleHeading>
        <ArticleParagraph>
          This tense is formed with <InlineCode>will</InlineCode> + <InlineCode>have</InlineCode> + <InlineCode>been</InlineCode> + the present participle (<InlineCode>-ing</InlineCode> form).
        </ArticleParagraph>
        <CodeBlock>{`// Positive
Subject + will + have + been + verb(-ing)

// Negative
Subject + will + not (won't) + have + been + verb(-ing)

// Question
Will + subject + have + been + verb(-ing)?`}</CodeBlock>
        <ArticleHeading>Usage & Examples</ArticleHeading>
        <ArticleParagraph><strong>1. Duration Up to a Future Event:</strong></ArticleParagraph>
        <ExampleList items={["By the time you arrive, I will have been waiting for two hours.", "In November, she will have been teaching for 20 years."]} />
        <ArticleHeading>Stative Verbs (Non-Progressive Verbs)</ArticleHeading>
        <ArticleParagraph>
            Remember that stative verbs, which describe states rather than actions, are not used in progressive tenses.
        </ArticleParagraph>
        <ExampleList items={["Incorrect: By next year, I will have been owning this house for a decade.", "Correct: By next year, I will have owned this house for a decade."]} />
      </>
    ),
  },

  // Nouns & Determiners
  {
    id: 'articles',
    title: 'Articles: A, An, The',
    category: 'Nouns & Determiners',
    content: (
      <>
        <ArticleParagraph>
          Articles are determiners that specify the grammatical definiteness of a noun. English has two types: the indefinite article (<InlineCode>a</InlineCode>/<InlineCode>an</InlineCode>) and the definite article (<InlineCode>the</InlineCode>). Mastering articles is essential for natural-sounding English, as their misuse is one of the most common mistakes made by learners.
        </ArticleParagraph>
        
        <ArticleHeading>Indefinite Article (a/an)</ArticleHeading>
        <ArticleParagraph>
            We use <InlineCode>a</InlineCode> or <InlineCode>an</InlineCode> with singular, countable nouns when we are talking about them in a general sense, or when the listener doesn't know which specific one we mean. Use <InlineCode>a</InlineCode> before a consonant sound and <InlineCode>an</InlineCode> before a vowel sound.
        </ArticleParagraph>
        <ExampleList items={[
          "I need a new phone. (any phone, not a specific one)", 
          "She is an excellent teacher. (one teacher among many)", 
          "He saw a university (starts with 'y' sound).",
          "An hour passed quickly. (starts with vowel sound, silent 'h')",
          "I want to buy a house. (any house, not specified)",
          "She's an honest person. (starts with vowel sound)"
        ]} />
        
        <ArticleHeading>When to Use A/An</ArticleHeading>
        <BulletList items={[
            <><strong>First mention:</strong> When introducing something for the first time. <InlineCode>I saw a cat in the garden.</InlineCode></>,
            <><strong>Describing jobs or professions:</strong> <InlineCode>She's a doctor. He works as an engineer.</InlineCode></>,
            <><strong>Expressing "one":</strong> <InlineCode>I need a minute. We'll meet in an hour.</InlineCode></>,
            <><strong>Generalizations:</strong> <InlineCode>A dog is a loyal animal. (dogs in general)</InlineCode></>,
            <><strong>With exclamations:</strong> <InlineCode>What a beautiful day! What an amazing performance!</InlineCode></>,
        ]}/>
        
        <ArticleHeading>Definite Article (the)</ArticleHeading>
        <ArticleParagraph>
            We use <InlineCode>the</InlineCode> when we are talking about a specific noun that both the speaker and listener know. It indicates that the noun is particular and identifiable.
        </ArticleParagraph>
        <BulletList items={[
            <><strong>Previously Mentioned:</strong> <InlineCode>I bought a shirt and a pair of shoes. The shirt was expensive.</InlineCode></>,
            <><strong>Unique Things:</strong> <InlineCode>The sun is very bright today. The moon is full tonight.</InlineCode></>,
            <><strong>Specific Noun:</strong> <InlineCode>Can you pass me the salt? (the salt on the table)</InlineCode></>,
            <><strong>Superlatives:</strong> <InlineCode>She's the best student in the class. This is the most expensive car.</InlineCode></>,
            <><strong>Ordinal Numbers:</strong> <InlineCode>This is the first time I've been here. She lives on the third floor.</InlineCode></>,
            <><strong>Musical Instruments:</strong> <InlineCode>He plays the piano. She's learning the guitar.</InlineCode></>,
            <><strong>With Certain Geographical Names:</strong> <InlineCode>the United States, the United Kingdom, the Pacific Ocean, the Sahara Desert</InlineCode></>,
        ]}/>
        
        <ArticleHeading>When NOT to Use Articles (Zero Article)</ArticleHeading>
        <ArticleParagraph>
            Sometimes we use no article at all. This is called the "zero article" and is common in several situations.
        </ArticleParagraph>
        <BulletList items={[
            <><strong>Plural nouns used generally:</strong> <InlineCode>Cats are independent animals. Books are expensive.</InlineCode></>,
            <><strong>Uncountable nouns used generally:</strong> <InlineCode>Coffee is popular worldwide. Music makes me happy.</InlineCode></>,
            <><strong>Most countries, cities, streets:</strong> <InlineCode>France, London, Main Street (but: the Netherlands, the Philippines)</InlineCode></>,
            <><strong>Meals:</strong> <InlineCode>We have breakfast at 8 AM. Lunch is ready.</InlineCode></>,
            <><strong>Languages:</strong> <InlineCode>She speaks Spanish. I'm learning Japanese.</InlineCode></>,
            <><strong>Sports and activities:</strong> <InlineCode>He plays football. They enjoy swimming.</InlineCode></>,
            <><strong>Academic subjects:</strong> <InlineCode>I study mathematics. She's good at chemistry.</InlineCode></>,
        ]}/>
        
        <ArticleHeading>Common Mistakes to Avoid</ArticleHeading>
        <BulletList items={[
            <>❌ <InlineCode>I am student.</InlineCode> → ✅ <InlineCode>I am a student.</InlineCode> (job/profession needs article)</>,
            <>❌ <InlineCode>The life is beautiful.</InlineCode> → ✅ <InlineCode>Life is beautiful.</InlineCode> (general uncountable noun)</>,
            <>❌ <InlineCode>I play the football.</InlineCode> → ✅ <InlineCode>I play football.</InlineCode> (sports don't need article)</>,
            <>❌ <InlineCode>She is best teacher.</InlineCode> → ✅ <InlineCode>She is the best teacher.</InlineCode> (superlative needs 'the')</>,
            <>❌ <InlineCode>I live in United States.</InlineCode> → ✅ <InlineCode>I live in the United States.</InlineCode> (country exception)</>,
        ]}/>
        
        <ArticleHeading>Practice Tips</ArticleHeading>
        <ArticleParagraph>
            To master articles, practice by asking yourself: "Am I talking about something specific or general?" If specific and known to the listener, use "the". If general or first mention (singular countable), use "a/an". If general and plural or uncountable, use no article.
        </ArticleParagraph>
      </>
    )
  },
  {
    id: 'countable-uncountable-nouns',
    title: 'Countable & Uncountable Nouns',
    category: 'Nouns & Determiners',
    content: (
        <>
            <ArticleParagraph>
                In English, nouns can be classified as either countable or uncountable. This distinction is important because it affects which articles and quantifiers can be used with them.
            </ArticleParagraph>
            <ArticleHeading>Countable Nouns</ArticleHeading>
            <ArticleParagraph>
                Countable nouns are things we can count using numbers. They have both singular and plural forms.
            </ArticleParagraph>
            <ExampleList items={["one book, two books", "a friend, many friends"]} />
            <ArticleHeading>Uncountable Nouns</ArticleHeading>
            <ArticleParagraph>
                Uncountable nouns are things we cannot count with numbers. They are often abstract ideas, liquids, or materials. They do not have a plural form.
            </ArticleParagraph>
            <ExampleList items={["water (not 'waters')", "advice (not 'advices')", "information"]} />
             <ArticleParagraph>
                To quantify uncountable nouns, we use phrases like <InlineCode>a piece of</InlineCode>, <InlineCode>a bottle of</InlineCode>, or <InlineCode>a lot of</InlineCode>.
            </ArticleParagraph>
             <ExampleList items={["a piece of advice", "two bottles of water"]} />
        </>
    )
  },
    {
    id: 'pronouns',
    title: 'Pronouns',
    category: 'Nouns & Determiners',
    content: (
        <>
            <ArticleParagraph>
                A pronoun is a word that replaces a noun in a sentence to avoid repetition. Pronouns help make communication more efficient and less redundant. Understanding the different types of pronouns and when to use each one is crucial for clear and grammatically correct English.
            </ArticleParagraph>
            
            <ArticleHeading>Subject & Object Pronouns</ArticleHeading>
            <ArticleParagraph>
                Subject pronouns perform the action in a sentence, while object pronouns receive the action. This distinction is important for proper sentence structure.
            </ArticleParagraph>
            <BulletList items={[
                <><strong>Subject Pronouns</strong> (who does the action): <InlineCode>I, you, he, she, it, we, they</InlineCode></>,
                <><strong>Object Pronouns</strong> (who receives the action): <InlineCode>me, you, him, her, it, us, them</InlineCode></>
            ]} />
            <ExampleList items={[
              "She is a doctor. (subject pronoun - 'she' performs the action of being)", 
              "He called me yesterday. (object pronoun - 'me' receives the action of calling)",
              "We invited them to the party. (subject: we, object: them)",
              "They saw us at the concert. (subject: they, object: us)",
              "I told him the truth. (subject: I, object: him)",
              "It surprised me. (subject: it, object: me)"
            ]} />
            
            <ArticleHeading>Possessive Pronouns vs. Possessive Adjectives</ArticleHeading>
            <ArticleParagraph>
               Possessive pronouns show ownership and stand alone (replacing the noun), while possessive adjectives come before a noun. Many learners confuse these two forms.
            </ArticleParagraph>
            <BulletList items={[
                <><strong>Possessive Adjectives</strong> (before nouns): <InlineCode>my, your, his, her, its, our, their</InlineCode></>,
                <><strong>Possessive Pronouns</strong> (standalone): <InlineCode>mine, yours, his, hers, ours, theirs</InlineCode></>
            ]} />
            <ExampleList items={[
              "That book is mine. (possessive pronoun - replaces 'my book')", 
              "This is my book. (possessive adjective - before the noun)",
              "The car is theirs. (possessive pronoun)",
              "Their car is blue. (possessive adjective)",
              "Is this pen yours? (possessive pronoun)",
              "Is this your pen? (possessive adjective)"
            ]} />
            
            <ArticleHeading>Reflexive Pronouns</ArticleHeading>
            <ArticleParagraph>
                Reflexive pronouns are used when the subject and object of a sentence are the same person or thing. They end in <InlineCode>-self</InlineCode> (singular) or <InlineCode>-selves</InlineCode> (plural).
            </ArticleParagraph>
            <ArticleParagraph>
                <InlineCode>myself, yourself, himself, herself, itself, ourselves, yourselves, themselves</InlineCode>
            </ArticleParagraph>
            <ExampleList items={[
              "She taught herself to play guitar. (she = herself)",
              "I hurt myself while cooking. (I = myself)",
              "They enjoyed themselves at the party.",
              "We should be proud of ourselves.",
              "He talks to himself sometimes.",
              "The cat cleaned itself after eating."
            ]} />
            
            <ArticleHeading>Demonstrative Pronouns</ArticleHeading>
            <ArticleParagraph>
                Demonstrative pronouns point to specific things. <InlineCode>This</InlineCode> and <InlineCode>these</InlineCode> refer to things nearby, while <InlineCode>that</InlineCode> and <InlineCode>those</InlineCode> refer to things farther away.
            </ArticleParagraph>
            <BulletList items={[
                <><strong>Near (singular):</strong> <InlineCode>This is my favorite song.</InlineCode></>,
                <><strong>Near (plural):</strong> <InlineCode>These are delicious cookies.</InlineCode></>,
                <><strong>Far (singular):</strong> <InlineCode>That is a beautiful building over there.</InlineCode></>,
                <><strong>Far (plural):</strong> <InlineCode>Those are my friends across the street.</InlineCode></>,
            ]} />
            
            <ArticleHeading>Indefinite Pronouns</ArticleHeading>
            <ArticleParagraph>
                Indefinite pronouns refer to non-specific people or things. Some common ones include <InlineCode>someone, anyone, everyone, no one, somebody, anybody, everybody, nobody, something, anything, everything, nothing</InlineCode>.
            </ArticleParagraph>
            <ExampleList items={[
              "Everyone is here. (all people, not specific)",
              "I need something to eat.",
              "Did anyone see my keys?",
              "Nothing is impossible.",
              "Somebody called you earlier.",
              "Nobody knows the answer."
            ]} />
            
            <ArticleHeading>Relative Pronouns</ArticleHeading>
            <ArticleParagraph>
                Relative pronouns introduce relative clauses and connect them to the main clause. The most common are <InlineCode>who, whom, whose, which, that</InlineCode>.
            </ArticleParagraph>
            <BulletList items={[
                <><strong>Who/Whom:</strong> For people. <InlineCode>The woman who lives next door is a teacher. The person whom I met was kind.</InlineCode></>,
                <><strong>Which:</strong> For things and animals. <InlineCode>The book which I borrowed was interesting.</InlineCode></>,
                <><strong>That:</strong> For people, things, or animals. <InlineCode>The car that I bought is red.</InlineCode></>,
                <><strong>Whose:</strong> For possession. <InlineCode>The student whose project won is from our class.</InlineCode></>,
            ]} />
            
            <ArticleHeading>Common Mistakes to Avoid</ArticleHeading>
            <BulletList items={[
                <>❌ <InlineCode>Me and John went to the store.</InlineCode> → ✅ <InlineCode>John and I went to the store.</InlineCode> (subject pronoun)</>,
                <>❌ <InlineCode>This is me book.</InlineCode> → ✅ <InlineCode>This is my book.</InlineCode> (possessive adjective before noun)</>,
                <>❌ <InlineCode>The book is my.</InlineCode> → ✅ <InlineCode>The book is mine.</InlineCode> (possessive pronoun standalone)</>,
                <>❌ <InlineCode>She learned English by her.</InlineCode> → ✅ <InlineCode>She learned English by herself.</InlineCode> (reflexive)</>,
                <>❌ <InlineCode>Between you and I...</InlineCode> → ✅ <InlineCode>Between you and me...</InlineCode> (object after preposition)</>,
            ]} />
            
            <ArticleHeading>Practice Tips</ArticleHeading>
            <ArticleParagraph>
                When choosing between subject and object pronouns, identify whether the pronoun is doing the action (subject) or receiving it (object). For possessive forms, remember that possessive pronouns replace the entire noun phrase, while possessive adjectives modify a noun that follows.
            </ArticleParagraph>
        </>
    )
  },

  // Adjectives & Adverbs
  {
    id: 'adjectives-adverbs',
    title: 'Adjectives & Adverbs',
    category: 'Adjectives & Adverbs',
    content: (
      <>
        <ArticleParagraph>
          Adjectives and adverbs are descriptive words that make your writing more vivid and precise. While they both add detail, they modify different parts of a sentence.
        </ArticleParagraph>
        <ArticleHeading>Adjectives</ArticleHeading>
        <ArticleParagraph>
          An adjective describes or modifies a noun or a pronoun. It answers questions like: What kind? How many? Which one?
        </ArticleParagraph>
        <ExampleList items={["The quick brown fox jumps over the lazy dog. ('quick', 'brown', and 'lazy' are adjectives)", "She wore a beautiful dress. ('beautiful' describes the dress)", "He is smart. ('smart' describes the pronoun 'he')"]} />
        <ArticleHeading>Adverbs</ArticleHeading>
        <ArticleParagraph>
          An adverb describes or modifies a verb, an adjective, or another adverb. Adverbs often end in <InlineCode>-ly</InlineCode> and answer questions like: How? When? Where? How often?
        </ArticleParagraph>
        <BulletList items={[
            <><strong>Modifying a verb:</strong> <InlineCode>He speaks slowly. (How does he speak?)</InlineCode></>,
            <><strong>Modifying an adjective:</strong> <InlineCode>She is very tall. (How tall is she?)</InlineCode></>,
            <><strong>Modifying another adverb:</strong> <InlineCode>The race finished too quickly. (How quickly did it finish?)</InlineCode></>,
        ]}/>
        <ArticleHeading>Common Confusion: Good vs. Well</ArticleHeading>
        <ArticleParagraph>
          <InlineCode>Good</InlineCode> is an adjective. It modifies nouns.
          <br />
          <InlineCode>Well</InlineCode> is an adverb. It modifies verbs.
        </ArticleParagraph>
        <ExampleList items={["You did a good job. ('good' describes the noun 'job')", "You did the job well. ('well' describes the verb 'did')"]} />
        
        <ArticleHeading>Types of Adverbs</ArticleHeading>
        <ArticleParagraph>
          Adverbs can be grouped into several categories based on the type of information they provide.
        </ArticleParagraph>
        <BulletList items={[
            <><strong>Adverbs of Manner:</strong> These describe *how* an action is performed. They often end in -ly. (e.g., <InlineCode>slowly</InlineCode>, <InlineCode>carefully</InlineCode>, <InlineCode>beautifully</InlineCode>)</>,
            <><strong>Adverbs of Place:</strong> These describe *where* an action happens. (e.g., <InlineCode>here</InlineCode>, <InlineCode>there</InlineCode>, <InlineCode>outside</InlineCode>, <InlineCode>everywhere</InlineCode>)</>,
            <><strong>Adverbs of Time:</strong> These describe *when* an action happens. (e.g., <InlineCode>now</InlineCode>, <InlineCode>yesterday</InlineCode>, <InlineCode>soon</InlineCode>, <InlineCode>later</InlineCode>)</>,
            <><strong>Adverbs of Frequency:</strong> These describe *how often* an action happens. (e.g., <InlineCode>always</InlineCode>, <InlineCode>sometimes</InlineCode>, <InlineCode>never</InlineCode>, <InlineCode>usually</InlineCode>)</>,
        ]} />

        <ArticleHeading>Adverb Placement in a Sentence</ArticleHeading>
        <ArticleParagraph>
          While adverb placement can be flexible, there are some general rules for where they usually appear in a sentence.
        </ArticleParagraph>
        <BulletList items={[
            <>
                <strong>Adverbs of Manner (how):</strong> Describe how an action is done. They usually go after the main verb if there is no direct object. If there is a direct object, they go after the object.
                <div className="pl-6 mt-2 space-y-2">
                    <p className="font-body text-slate-600 text-lg dark:text-slate-400">e.g., <InlineCode>He drove carefully.</InlineCode></p>
                    <p className="font-body text-slate-600 text-lg dark:text-slate-400">e.g., <InlineCode>She speaks English fluently.</InlineCode></p>
                </div>
            </>,
            <>
                <strong>Adverbs of Place (where):</strong> Describe where an action happens. They are typically placed after the main verb or after the object.
                <div className="pl-6 mt-2 space-y-2">
                    <p className="font-body text-slate-600 text-lg dark:text-slate-400">e.g., <InlineCode>The children play outside.</InlineCode></p>
                    <p className="font-body text-slate-600 text-lg dark:text-slate-400">e.g., <InlineCode>I left my keys there.</InlineCode></p>
                </div>
            </>,
            <>
                <strong>Adverbs of Time (when):</strong> Describe when an action happens. They are most commonly placed at the end of a sentence. For emphasis, they can also be at the beginning.
                <div className="pl-6 mt-2 space-y-2">
                    <p className="font-body text-slate-600 text-lg dark:text-slate-400">e.g., <InlineCode>We went to the movies yesterday.</InlineCode></p>
                    <p className="font-body text-slate-600 text-lg dark:text-slate-400">e.g., <InlineCode>Next week, the exams will begin.</InlineCode></p>
                </div>
            </>,
            <>
                <strong>Adverbs of Frequency (how often):</strong> Describe how often an action happens. Their position depends on the verb. They go <strong>before</strong> the main verb, but <strong>after</strong> the verb 'to be' (am, is, are, was, were).
                <div className="pl-6 mt-2 space-y-2">
                    <p className="font-body text-slate-600 text-lg dark:text-slate-400">e.g., <InlineCode>He often checks his email.</InlineCode></p>
                    <p className="font-body text-slate-600 text-lg dark:text-slate-400">e.g., <InlineCode>She is always on time.</InlineCode></p>
                </div>
            </>,
        ]}/>
        <ArticleParagraph>
          When using multiple adverbs in one sentence, a common order is <strong>Manner → Place → Time</strong>.
        </ArticleParagraph>
        <ExampleList items={["She sang beautifully (manner) in the concert hall (place) last night (time)."]}/>


        <ArticleHeading>Comparative & Superlative Adverbs</ArticleHeading>
        <ArticleParagraph>
          Just like adjectives, many adverbs can be used to make comparisons.
        </ArticleParagraph>
        <BulletList items={[
            <><strong>Comparative Adverbs:</strong> For short adverbs (often those without an -ly ending), add <InlineCode>-er</InlineCode>. For adverbs ending in <InlineCode>-ly</InlineCode>, use <InlineCode>more</InlineCode>. (e.g., <InlineCode>He runs faster than me.</InlineCode>, <InlineCode>She speaks more clearly than her brother.</InlineCode>)</>,
            <><strong>Superlative Adverbs:</strong> For short adverbs, add <InlineCode>-est</InlineCode>. For adverbs ending in <InlineCode>-ly</InlineCode>, use <InlineCode>most</InlineCode>. (e.g., <InlineCode>He runs the fastest of all.</InlineCode>, <InlineCode>She speaks the most clearly in the class.</InlineCode>)</>
        ]} />
        <ArticleParagraph>
            Some adverbs have irregular forms:
        </ArticleParagraph>
        <CodeBlock>{`well -> better -> best
badly -> worse -> worst
far -> farther/further -> farthest/furthest`}</CodeBlock>
      </>
    ),
  },
  {
    id: 'comparative-superlative',
    title: 'Comparatives & Superlatives',
    category: 'Adjectives & Adverbs',
    content: (
      <>
        <ArticleParagraph>
          Comparatives and superlatives are special forms of adjectives and adverbs used to compare things. Comparatives compare two items, while superlatives identify the highest or lowest degree among three or more items. Understanding when and how to form these structures is essential for making accurate comparisons in English.
        </ArticleParagraph>
        
        <ArticleHeading>Comparative Form (Comparing Two Things)</ArticleHeading>
        <ArticleParagraph>
          The comparative form is used to compare two things, people, or groups. The formation depends on the length of the adjective or adverb.
        </ArticleParagraph>
        
        <ArticleHeading>Rules for Forming Comparatives</ArticleHeading>
        <BulletList items={[
            <><strong>One-syllable adjectives:</strong> Add <InlineCode>-er</InlineCode>. Examples: <InlineCode>tall → taller, fast → faster, old → older</InlineCode></>,
            <><strong>One-syllable ending in consonant-vowel-consonant:</strong> Double the final consonant and add <InlineCode>-er</InlineCode>. Examples: <InlineCode>big → bigger, hot → hotter, sad → sadder</InlineCode></>,
            <><strong>Two-syllable adjectives ending in -y:</strong> Change <InlineCode>-y</InlineCode> to <InlineCode>-ier</InlineCode>. Examples: <InlineCode>happy → happier, busy → busier, easy → easier</InlineCode></>,
            <><strong>Two or more syllables (longer adjectives):</strong> Use <InlineCode>more</InlineCode> before the adjective. Examples: <InlineCode>more interesting, more beautiful, more expensive</InlineCode></>,
            <><strong>With adverbs ending in -ly:</strong> Use <InlineCode>more</InlineCode>. Examples: <InlineCode>more carefully, more quickly, more slowly</InlineCode></>,
        ]}/>
        
        <ExampleList items={[
          "She is taller than her brother. (one syllable + -er)",
          "This book is more interesting than the last one. (longer adjective + more)",
          "The weather is hotter today than yesterday. (double consonant + -er)",
          "My new job is easier than my old one. (-y changes to -ier)",
          "He runs faster than me. (one syllable adverb)",
          "She speaks more fluently than before. (adverb ending in -ly)"
        ]} />

        <ArticleHeading>Superlative Form (The Most/Least Among Three or More)</ArticleHeading>
        <ArticleParagraph>
          The superlative form is used to compare three or more things and to show which has the highest or lowest degree of a quality. Superlatives are usually preceded by <InlineCode>the</InlineCode>.
        </ArticleParagraph>
        
        <ArticleHeading>Rules for Forming Superlatives</ArticleHeading>
        <BulletList items={[
            <><strong>One-syllable adjectives:</strong> Add <InlineCode>-est</InlineCode>. Examples: <InlineCode>tall → the tallest, fast → the fastest, old → the oldest</InlineCode></>,
            <><strong>One-syllable ending in consonant-vowel-consonant:</strong> Double final consonant and add <InlineCode>-est</InlineCode>. Examples: <InlineCode>big → the biggest, hot → the hottest</InlineCode></>,
            <><strong>Two-syllable adjectives ending in -y:</strong> Change <InlineCode>-y</InlineCode> to <InlineCode>-iest</InlineCode>. Examples: <InlineCode>happy → the happiest, busy → the busiest</InlineCode></>,
            <><strong>Two or more syllables:</strong> Use <InlineCode>most</InlineCode>. Examples: <InlineCode>the most interesting, the most beautiful, the most expensive</InlineCode></>,
        ]}/>
        
        <ExampleList items={[
          "He is the tallest student in the class. (one syllable + -est)",
          "This is the most exciting movie I have ever seen. (longer adjective + most)",
          "Mount Everest is the highest mountain in the world.",
          "She is the happiest person I know. (-y changes to -iest)",
          "That was the biggest mistake of my life. (double consonant + -est)",
          "This is the most expensive restaurant in the city."
        ]} />

        <ArticleHeading>Irregular Forms (Must Be Memorized)</ArticleHeading>
        <ArticleParagraph>
            Some common adjectives and adverbs have irregular comparative and superlative forms that don't follow the standard rules. These must be memorized.
        </ArticleParagraph>
        <CodeBlock>{`good → better → best
(She is a good singer → She is better than me → She is the best singer)

bad → worse → worst
(This is a bad idea → This is worse → This is the worst idea)

far → farther/further → farthest/furthest
(The store is far → It's farther than I thought → It's the farthest store)

little → less → least
(I have little time → I have less time → I have the least time)

much/many → more → most
(I have many books → I have more books → I have the most books)`}</CodeBlock>

        <ArticleHeading>Using "Than" with Comparatives</ArticleHeading>
        <ArticleParagraph>
            When making direct comparisons, we typically use <InlineCode>than</InlineCode> after the comparative form to introduce what we're comparing to.
        </ArticleParagraph>
        <ExampleList items={[
          "My car is faster than yours.",
          "This exam was more difficult than the last one.",
          "She arrived earlier than expected.",
          "He is less confident than his sister.",
          "Coffee is more popular than tea in this country."
        ]} />
        
        <ArticleHeading>Using "In" or "Of" with Superlatives</ArticleHeading>
        <ArticleParagraph>
            With superlatives, we use <InlineCode>in</InlineCode> for places and <InlineCode>of</InlineCode> for groups or periods of time.
        </ArticleParagraph>
        <ExampleList items={[
          "She is the smartest student in the class. (place)",
          "He is the oldest of my three brothers. (group)",
          "This is the best restaurant in town. (place)",
          "It was the happiest day of my life. (time period)"
        ]} />
        
        <ArticleHeading>Common Mistakes to Avoid</ArticleHeading>
        <BulletList items={[
            <>❌ <InlineCode>more better</InlineCode> → ✅ <InlineCode>better</InlineCode> (don't use 'more' with irregular forms)</>,
            <>❌ <InlineCode>the most best</InlineCode> → ✅ <InlineCode>the best</InlineCode> (don't double up)</>,
            <>❌ <InlineCode>more easy</InlineCode> → ✅ <InlineCode>easier</InlineCode> (two-syllable ending in -y uses -ier)</>,
            <>❌ <InlineCode>She is tallest than me.</InlineCode> → ✅ <InlineCode>She is taller than me.</InlineCode> (comparative, not superlative)</>,
            <>❌ <InlineCode>He is the taller.</InlineCode> → ✅ <InlineCode>He is taller.</InlineCode> (comparing two: no 'the')</>,
        ]}/>
        
        <ArticleHeading>Less and Least (Opposites)</ArticleHeading>
        <ArticleParagraph>
            To express the opposite comparison, use <InlineCode>less</InlineCode> (comparative) and <InlineCode>least</InlineCode> (superlative) with any adjective or adverb.
        </ArticleParagraph>
        <ExampleList items={[
          "This book is less interesting than that one.",
          "She is the least experienced member of the team.",
          "I am less worried now than before.",
          "That was the least expensive option."
        ]} />
        
        <ArticleHeading>Practice Tips</ArticleHeading>
        <ArticleParagraph>
            Remember: short adjectives (1 syllable) usually take <InlineCode>-er/-est</InlineCode>, while long adjectives (2+ syllables) use <InlineCode>more/most</InlineCode>. Watch for irregular forms like good/better/best. When comparing two things, use the comparative; when comparing three or more, use the superlative with "the".
        </ArticleParagraph>
      </>
    ),
  },

  // Verbs
  {
    id: 'modal-verbs',
    title: 'Modal Verbs',
    category: 'Verbs',
    content: (
        <>
            <ArticleParagraph>
                Modal verbs are auxiliary verbs that express necessity, possibility, permission, or ability. The main modal verbs are <InlineCode>can</InlineCode>, <InlineCode>could</InlineCode>, <InlineCode>may</InlineCode>, <InlineCode>might</InlineCode>, <InlineCode>must</InlineCode>, <InlineCode>should</InlineCode>, <InlineCode>will</InlineCode>, and <InlineCode>would</InlineCode>.
            </ArticleParagraph>
             <ArticleHeading>Key Characteristics</ArticleHeading>
             <BulletList items={[
                "They are followed by the base form of a verb.",
                "They do not add -s in the third person.",
                "To make questions, you invert the subject and the modal verb."
             ]}/>
            <ArticleHeading>Usage & Examples</ArticleHeading>
             <ArticleParagraph><strong>Ability:</strong> (<InlineCode>can</InlineCode>, <InlineCode>could</InlineCode>)</ArticleParagraph>
            <ExampleList items={["I can speak English.", "She could swim when she was five."]} />
             <ArticleParagraph><strong>Permission:</strong> (<InlineCode>can</InlineCode>, <InlineCode>may</InlineCode>)</ArticleParagraph>
            <ExampleList items={["Can I borrow your pen?", "You may begin the exam now."]} />
             <ArticleParagraph><strong>Obligation / Advice:</strong> (<InlineCode>must</InlineCode>, <InlineCode>should</InlineCode>)</ArticleParagraph>
            <ExampleList items={["You must wear a seatbelt.", "You should see a doctor."]} />
        </>
    )
  },
  {
    id: 'gerunds-infinitives',
    title: 'Gerunds & Infinitives',
    category: 'Verbs',
    content: (
      <>
        <ArticleParagraph>
          Gerunds and infinitives are verb forms that can take the place of a noun in a sentence. Knowing when to use each can be tricky.
        </ArticleParagraph>
        <ArticleHeading>Gerunds</ArticleHeading>
        <ArticleParagraph>
          A gerund is the <InlineCode>-ing</InlineCode> form of a verb that functions as a noun.
        </ArticleParagraph>
        <BulletList items={[
            <><strong>As the subject of a sentence:</strong> <InlineCode>Swimming is my favorite hobby.</InlineCode></>,
            <><strong>After certain verbs (e.g., enjoy, avoid, finish):</strong> <InlineCode>I enjoy reading.</InlineCode></>,
            <><strong>After a preposition:</strong> <InlineCode>I am interested in learning more.</InlineCode></>,
        ]}/>
        <ArticleHeading>Infinitives</ArticleHeading>
        <ArticleParagraph>
          An infinitive is the base form of a verb, usually preceded by <InlineCode>to</InlineCode>.
        </ArticleParagraph>
        <BulletList items={[
            <><strong>After certain verbs (e.g., want, decide, hope):</strong> <InlineCode>She wants to leave.</InlineCode></>,
            <><strong>After many adjectives:</strong> <InlineCode>It is important to be on time.</InlineCode></>,
            <><strong>To show purpose:</strong> <InlineCode>He went to the store to buy milk.</InlineCode></>,
        ]}/>
      </>
    ),
  },

  // Prepositions & Conjunctions
  {
    id: 'prepositions',
    title: 'Prepositions',
    category: 'Prepositions & Conjunctions',
    content: (
      <>
        <ArticleParagraph>
          Prepositions are small but powerful words that show the relationship between a noun (or pronoun) and other words in a sentence. They often indicate location, time, direction, or other abstract relationships. Mastering prepositions is one of the most challenging aspects of English because their usage often doesn't follow strict logical rules and varies by context.
        </ArticleParagraph>
        
        <ArticleHeading>Prepositions of Time</ArticleHeading>
        <ArticleParagraph>
            Prepositions of time tell us when something happens. The three most common are <InlineCode>at</InlineCode>, <InlineCode>in</InlineCode>, and <InlineCode>on</InlineCode>, each used for different types of time expressions.
        </ArticleParagraph>
        <BulletList items={[
            <><strong>At:</strong> Used for a precise time. <InlineCode>at 3 o'clock, at midnight, at noon, at night, at sunset, at Christmas</InlineCode></>,
            <><strong>In:</strong> Used for months, years, centuries, and long periods. <InlineCode>in May, in 2023, in the morning, in the summer, in the 21st century, in the future</InlineCode></>,
            <><strong>On:</strong> Used for days and dates. <InlineCode>on Sunday, on June 5th, on my birthday, on Christmas Day, on weekends</InlineCode></>,
            <><strong>During:</strong> Used for a period when something happens. <InlineCode>during the meeting, during the vacation, during the war</InlineCode></>,
            <><strong>For:</strong> Used for duration (how long). <InlineCode>for two hours, for three weeks, for a long time</InlineCode></>,
            <><strong>Since:</strong> Used for the starting point. <InlineCode>since Monday, since 2020, since I was a child</InlineCode></>,
        ]}/>
        <ExampleList items={[
          "I wake up at 7 AM every day.",
          "She was born in 1995.",
          "The meeting is on Friday.",
          "I studied English for five years.",
          "He has lived here since 2015.",
          "We traveled a lot during the summer."
        ]} />
        
        <ArticleHeading>Prepositions of Place</ArticleHeading>
        <ArticleParagraph>
            Prepositions of place indicate location or position. Understanding the nuances between them is essential for accurate spatial descriptions.
        </ArticleParagraph>
        <BulletList items={[
            <><strong>At:</strong> Used for a specific point or location. <InlineCode>at the corner, at the bus stop, at the door, at home, at work, at school</InlineCode></>,
            <><strong>In:</strong> Used for an enclosed space or larger area. <InlineCode>in the garden, in London, in my pocket, in the box, in the sky, in a book</InlineCode></>,
            <><strong>On:</strong> Used for a surface. <InlineCode>on the table, on the wall, on the floor, on the roof, on page 5</InlineCode></>,
            <><strong>Above/Over:</strong> Higher than something. <InlineCode>The plane flew above/over the clouds.</InlineCode></>,
            <><strong>Below/Under:</strong> Lower than something. <InlineCode>The cat is under the table. The temperature is below zero.</InlineCode></>,
            <><strong>Between:</strong> In the space separating two things. <InlineCode>The bank is between the cafe and the library.</InlineCode></>,
            <><strong>Among:</strong> Surrounded by (three or more). <InlineCode>She felt safe among friends.</InlineCode></>,
            <><strong>Next to/Beside:</strong> At the side of. <InlineCode>Sit next to me. The lamp is beside the bed.</InlineCode></>,
            <><strong>In front of/Behind:</strong> <InlineCode>The car is in front of the house. The garden is behind the house.</InlineCode></>,
        ]}/>
        <ExampleList items={[
          "I'll meet you at the station.",
          "She lives in New York.",
          "Your keys are on the kitchen counter.",
          "The picture hangs above the fireplace.",
          "The ball rolled under the couch.",
          "The restaurant is between the bank and the post office."
        ]} />
        
        <ArticleHeading>Prepositions of Movement/Direction</ArticleHeading>
        <ArticleParagraph>
            These prepositions describe movement from one place to another or the direction of movement.
        </ArticleParagraph>
         <BulletList items={[
            <><strong>To:</strong> Movement towards a destination. <InlineCode>We went to the cinema. She's going to Paris.</InlineCode></>,
            <><strong>From:</strong> Movement starting at a point. <InlineCode>He came from Paris. I walked from home to school.</InlineCode></>,
            <><strong>Into:</strong> Movement to the inside of something. <InlineCode>The cat jumped into the box. She walked into the room.</InlineCode></>,
            <><strong>Out of:</strong> Movement from inside to outside. <InlineCode>He ran out of the building.</InlineCode></>,
            <><strong>Towards:</strong> In the direction of. <InlineCode>He walked towards the door.</InlineCode></>,
            <><strong>Through:</strong> Moving from one side to the other. <InlineCode>We drove through the tunnel.</InlineCode></>,
            <><strong>Across:</strong> From one side to the other (surface). <InlineCode>She swam across the river.</InlineCode></>,
            <><strong>Along:</strong> Following a line or path. <InlineCode>We walked along the beach.</InlineCode></>,
        ]}/>
        
        <ArticleHeading>Prepositions in Common Expressions</ArticleHeading>
        <ArticleParagraph>
            Many prepositions appear in fixed expressions and phrases that must be memorized as units.
        </ArticleParagraph>
        <BulletList items={[
            <><strong>With adjectives:</strong> <InlineCode>good at, interested in, afraid of, proud of, worried about, satisfied with, different from</InlineCode></>,
            <><strong>With verbs:</strong> <InlineCode>look for, listen to, wait for, depend on, believe in, agree with, apologize for</InlineCode></>,
            <><strong>With nouns:</strong> <InlineCode>by mistake, on purpose, in advance, at risk, under control, in charge of</InlineCode></>,
        ]}/>
        <ExampleList items={[
          "She is good at mathematics.",
          "I'm interested in learning Spanish.",
          "We are waiting for the bus.",
          "It happened by mistake.",
          "Who is in charge of this project?"
        ]} />
        
        <ArticleHeading>Common Mistakes to Avoid</ArticleHeading>
        <BulletList items={[
            <>❌ <InlineCode>I arrive to home.</InlineCode> → ✅ <InlineCode>I arrive home.</InlineCode> (no preposition with 'home')</>,
            <>❌ <InlineCode>In Monday</InlineCode> → ✅ <InlineCode>On Monday</InlineCode> (days use 'on')</>,
            <>❌ <InlineCode>In the morning of June 5th</InlineCode> → ✅ <InlineCode>On the morning of June 5th</InlineCode> (specific date)</>,
            <>❌ <InlineCode>I'm waiting you.</InlineCode> → ✅ <InlineCode>I'm waiting for you.</InlineCode> (wait requires 'for')</>,
            <>❌ <InlineCode>Depend of</InlineCode> → ✅ <InlineCode>Depend on</InlineCode> (fixed expression)</>,
            <>❌ <InlineCode>Married with</InlineCode> → ✅ <InlineCode>Married to</InlineCode> (correct preposition)</>,
        ]}/>
        
        <ArticleHeading>Practice Tips</ArticleHeading>
        <ArticleParagraph>
            Prepositions often don't translate directly between languages, so learning them in context is crucial. Pay attention to prepositions in the phrases and expressions you encounter. Create a personal list of common prepositional phrases you need for your own communication. Remember that some verbs and adjectives always pair with specific prepositions—these combinations must be memorized.
        </ArticleParagraph>
      </>
    ),
  },
  {
    id: 'conjunctions',
    title: 'Conjunctions',
    category: 'Prepositions & Conjunctions',
    content: (
      <>
        <ArticleParagraph>
          Conjunctions are words that link other words, phrases, or clauses together. They are essential for creating complex, fluent, and well-connected sentences. Without conjunctions, our writing would be choppy and repetitive. Understanding the different types of conjunctions and how to use them correctly will significantly improve your English communication.
        </ArticleParagraph>
        
        <ArticleHeading>Coordinating Conjunctions (FANBOYS)</ArticleHeading>
        <ArticleParagraph>
          Coordinating conjunctions join words, phrases, and independent clauses of equal grammatical rank. They connect elements that are grammatically similar. You can remember them with the acronym <strong>FANBOYS</strong>.
        </ArticleParagraph>
        <BulletList items={[
            <><strong>For:</strong> Explains reason or purpose (similar to 'because'). <InlineCode>I stayed inside, for it was raining.</InlineCode></>,
            <><strong>And:</strong> Adds one thing to another. <InlineCode>She is smart and hardworking.</InlineCode></>,
            <><strong>Nor:</strong> Used to present an additional negative idea. <InlineCode>He doesn't like coffee, nor does he like tea.</InlineCode></>,
            <><strong>But:</strong> Shows contrast or exception. <InlineCode>I wanted to go, but I was too tired.</InlineCode></>,
            <><strong>Or:</strong> Presents an alternative or a choice. <InlineCode>Would you like tea or coffee?</InlineCode></>,
            <><strong>Yet:</strong> Introduces a contrasting idea (similar to 'but'). <InlineCode>She's small, yet she's very strong.</InlineCode></>,
            <><strong>So:</strong> Indicates effect, result, or consequence. <InlineCode>It was cold, so I wore a jacket.</InlineCode></>,
        ]}/>
        <ExampleList items={[
          "I went to the store, and I bought some bread. (addition)",
          "She studied hard, but she failed the exam. (contrast)",
          "We can eat now, or we can wait for them. (choice)",
          "He was tired, so he went to bed early. (result)",
          "I wanted to call you, but I lost your number. (contrast)",
          "The movie was long, yet it was entertaining. (contrast)"
        ]} />
        
        <ArticleHeading>Punctuation with Coordinating Conjunctions</ArticleHeading>
        <ArticleParagraph>
            When joining two independent clauses with a coordinating conjunction, use a comma before the conjunction. When joining words or phrases, no comma is needed.
        </ArticleParagraph>
        <ExampleList items={[
          "I like pizza, and she likes pasta. (comma before 'and' - two clauses)",
          "I like pizza and pasta. (no comma - two words)"
        ]} />
        
        <ArticleHeading>Subordinating Conjunctions</ArticleHeading>
        <ArticleParagraph>
          Subordinating conjunctions join an independent clause with a dependent (subordinate) clause. They show various relationships like cause-and-effect, time, contrast, condition, or purpose between the clauses. The dependent clause cannot stand alone as a complete sentence.
        </ArticleParagraph>
        
        <ArticleHeading>Types of Subordinating Conjunctions</ArticleHeading>
        <BulletList items={[
            <><strong>Time:</strong> <InlineCode>when, while, after, before, since, until, as soon as, whenever</InlineCode></>,
            <><strong>Cause/Reason:</strong> <InlineCode>because, since, as</InlineCode></>,
            <><strong>Contrast:</strong> <InlineCode>although, though, even though, whereas, while</InlineCode></>,
            <><strong>Condition:</strong> <InlineCode>if, unless, whether, provided that, as long as</InlineCode></>,
            <><strong>Purpose:</strong> <InlineCode>so that, in order that</InlineCode></>,
            <><strong>Result:</strong> <InlineCode>so...that, such...that</InlineCode></>,
        ]}/>
        
        <ExampleList items={[
          "I stayed home because it was raining. (reason)",
          "Although he was tired, he finished the race. (contrast)",
          "Call me when you arrive. (time)",
          "If it rains, we'll stay inside. (condition)",
          "I'm studying hard so that I can pass the exam. (purpose)",
          "She left before the meeting ended. (time)",
          "I'll wait here until you come back. (time)",
          "Unless you hurry, we'll be late. (condition)"
        ]} />
        
        <ArticleHeading>Punctuation with Subordinating Conjunctions</ArticleHeading>
        <ArticleParagraph>
            When the dependent clause comes first (before the independent clause), use a comma. When it comes second (after the independent clause), usually no comma is needed.
        </ArticleParagraph>
        <ExampleList items={[
          "Because it was raining, I stayed home. (comma when dependent clause is first)",
          "I stayed home because it was raining. (no comma when dependent clause is second)"
        ]} />
        
        <ArticleHeading>Correlative Conjunctions (Paired Conjunctions)</ArticleHeading>
        <ArticleParagraph>
            Correlative conjunctions work in pairs to join equal elements. Both parts of the pair are required to make the sentence grammatically correct.
        </ArticleParagraph>
        <BulletList items={[
            <><InlineCode>both...and</InlineCode> → <InlineCode>Both my sister and my brother live abroad.</InlineCode></>,
            <><InlineCode>either...or</InlineCode> → <InlineCode>You can either stay here or come with us.</InlineCode></>,
            <><InlineCode>neither...nor</InlineCode> → <InlineCode>Neither the teacher nor the students knew the answer.</InlineCode></>,
            <><InlineCode>not only...but also</InlineCode> → <InlineCode>She is not only intelligent but also kind.</InlineCode></>,
            <><InlineCode>whether...or</InlineCode> → <InlineCode>I don't know whether to laugh or cry.</InlineCode></>,
        ]}/>
        
        <ArticleHeading>Common Mistakes to Avoid</ArticleHeading>
        <BulletList items={[
            <>❌ <InlineCode>Because I was tired. So I went to bed.</InlineCode> → ✅ <InlineCode>Because I was tired, I went to bed.</InlineCode> (complete sentence)</>,
            <>❌ <InlineCode>Although it was raining, but I went out.</InlineCode> → ✅ <InlineCode>Although it was raining, I went out.</InlineCode> (don't use 'but' with 'although')</>,
            <>❌ <InlineCode>I like and you.</InlineCode> → ✅ <InlineCode>I like you.</InlineCode> (conjunctions need two elements)</>,
            <>❌ <InlineCode>I studied hard, I passed.</InlineCode> → ✅ <InlineCode>I studied hard, so I passed.</InlineCode> (need conjunction for two clauses)</>,
            <>❌ <InlineCode>I don't like neither coffee nor tea.</InlineCode> → ✅ <InlineCode>I like neither coffee nor tea.</InlineCode> (avoid double negative)</>,
        ]}/>
        
        <ArticleHeading>Practice Tips</ArticleHeading>
        <ArticleParagraph>
            Pay attention to the logical relationship you want to express: addition (and), contrast (but, although), cause (because), condition (if), etc. Remember that subordinating conjunctions create dependent clauses that cannot stand alone. When using correlative conjunctions, make sure the elements you're joining are parallel in structure.
        </ArticleParagraph>
      </>
    ),
  },

  // Sentence Structure
  {
    id: 'passive-voice',
    title: 'Passive Voice',
    category: 'Sentence Structure',
    content: (
      <>
        <ArticleParagraph>
            In an active voice sentence, the subject performs the action. In a passive voice sentence, the subject receives the action. The passive voice is used to emphasize the action or the object of the action rather than the person who performs it.
        </ArticleParagraph>
        <SentenceTransformationDiagram active="John writes the report." passive="The report is written by John." />
        <ArticleHeading>Formation</ArticleHeading>
        <ArticleParagraph>
            The passive voice is formed using the verb "to be" in the appropriate tense, followed by the past participle of the main verb.
        </ArticleParagraph>
        <CodeBlock>{`Subject + to be (conjugated) + past participle (+ by + agent)`}</CodeBlock>
        <ArticleHeading>When to Use the Passive Voice</ArticleHeading>
        <ArticleParagraph>Use the passive when the agent (the person doing the action) is unknown, unimportant, or obvious from the context.</ArticleParagraph>
        <ExampleList items={["My car was stolen last night. (We don't know who stole it).", "This bridge was built in 1950."]} />
      </>
    )
  },
  {
    id: 'subject-verb-agreement',
    title: 'Subject-Verb Agreement',
    category: 'Sentence Structure',
    content: (
      <>
        <ArticleParagraph>
          Subject-verb agreement is a fundamental rule of English grammar. The basic idea is that a singular subject must have a singular verb, and a plural subject must have a plural verb.
        </ArticleParagraph>
        <ArticleHeading>Basic Rule</ArticleHeading>
        <ExampleList items={["The dog barks. (Singular subject 'dog', singular verb 'barks')", "The dogs bark. (Plural subject 'dogs', plural verb 'bark')"]} />
        <ArticleHeading>Tricky Cases</ArticleHeading>
        <BulletList items={[
            <><strong>Compound subjects with 'and':</strong> Usually take a plural verb. <InlineCode>The cat and the dog are friends.</InlineCode></>,
            <><strong>Subjects with 'or'/'nor':</strong> The verb agrees with the subject closest to it. <InlineCode>Either my brothers or my sister is coming.</InlineCode></>,
            <><strong>Collective nouns (team, family, group):</strong> Can be singular or plural, depending on whether they act as a single unit or as individuals. <InlineCode>The team is winning. / The team are arguing among themselves.</InlineCode></>,
            <><strong>Indefinite pronouns (each, everyone, nobody):</strong> These are usually singular. <InlineCode>Everyone is here.</InlineCode></>,
        ]}/>
      </>
    )
  },
  {
    id: 'question-formation',
    title: 'Question Formation',
    category: 'Sentence Structure',
    content: (
      <>
        <ArticleParagraph>
          Knowing how to form questions correctly is essential for effective communication in English. Questions allow us to gather information, confirm understanding, and engage in conversation. English has several types of questions, each with specific formation rules and purposes.
        </ArticleParagraph>
        
        <ArticleHeading>Yes/No Questions</ArticleHeading>
        <ArticleParagraph>
          Yes/No questions are questions that can be answered with a simple "yes" or "no" (though in practice, answers often include more detail). They are formed by inverting the subject and the auxiliary verb, or by using the auxiliary verb <InlineCode>do/does/did</InlineCode> when there is no other auxiliary.
        </ArticleParagraph>
        
        <ArticleHeading>Formation Rules for Yes/No Questions</ArticleHeading>
        <BulletList items={[
            <><strong>With 'be' verb:</strong> Invert subject and verb. <InlineCode>Statement: She is a doctor. → Question: Is she a doctor?</InlineCode></>,
            <><strong>With 'have' as auxiliary:</strong> Invert subject and have. <InlineCode>Statement: They have finished. → Question: Have they finished?</InlineCode></>,
            <><strong>With modal verbs (can, will, should, etc.):</strong> Invert subject and modal. <InlineCode>Statement: You can swim. → Question: Can you swim?</InlineCode></>,
            <><strong>With other verbs:</strong> Use do/does/did. <InlineCode>Statement: You play guitar. → Question: Do you play guitar?</InlineCode></>,
        ]}/>
        
        <ExampleList items={[
          "Are you ready? (be verb)",
          "Is he coming to the party? (be + ing)",
          "Have you seen this movie? (present perfect)",
          "Did they call you yesterday? (past simple)",
          "Can she speak French? (modal)",
          "Will you help me? (modal)",
          "Does he like pizza? (present simple, third person)",
          "Do you understand? (present simple)"
        ]} />
        
        <ArticleHeading>Wh- Questions (Information Questions)</ArticleHeading>
        <ArticleParagraph>
          Wh- questions use question words to ask for specific information. They cannot be answered with just "yes" or "no." The structure is typically: <strong>Question Word + Auxiliary Verb + Subject + Main Verb</strong> (+ rest of sentence).
        </ArticleParagraph>
        
        <ArticleHeading>Common Question Words</ArticleHeading>
        <BulletList items={[
            <><strong>Who:</strong> Asks about people. <InlineCode>Who is that man? Who called you?</InlineCode></>,
            <><strong>What:</strong> Asks about things or actions. <InlineCode>What is your name? What did you do?</InlineCode></>,
            <><strong>Where:</strong> Asks about place or location. <InlineCode>Where do you live? Where is the bank?</InlineCode></>,
            <><strong>When:</strong> Asks about time. <InlineCode>When does the class start? When did you arrive?</InlineCode></>,
            <><strong>Why:</strong> Asks about reasons. <InlineCode>Why are you late? Why did she leave?</InlineCode></>,
            <><strong>How:</strong> Asks about manner or condition. <InlineCode>How are you? How did you do that?</InlineCode></>,
            <><strong>Which:</strong> Asks about choices. <InlineCode>Which book do you want? Which one is yours?</InlineCode></>,
            <><strong>Whose:</strong> Asks about possession. <InlineCode>Whose bag is this? Whose car is parked outside?</InlineCode></>,
        ]}/>
        
        <ExampleList items={[
          "Where are you going? (present continuous)",
          "Why did he leave early? (past simple)",
          "What time does the train arrive? (present simple)",
          "How long have you lived here? (present perfect)",
          "Who is your favorite teacher? (be verb)",
          "Which color do you prefer? (present simple)",
          "When will you finish the project? (future)",
          "Whose phone is ringing? (possession)"
        ]} />
        
        <ArticleHeading>Questions About the Subject</ArticleHeading>
        <ArticleParagraph>
            When the question word is the subject of the sentence, we don't use <InlineCode>do/does/did</InlineCode>. The word order is the same as a statement.
        </ArticleParagraph>
        <BulletList items={[
            <><strong>Object question:</strong> <InlineCode>Who did you see?</InlineCode> (You saw someone - 'who' is the object)</>,
            <><strong>Subject question:</strong> <InlineCode>Who saw you?</InlineCode> (Someone saw you - 'who' is the subject)</>,
            <><strong>Object:</strong> <InlineCode>What did she say?</InlineCode></>,
            <><strong>Subject:</strong> <InlineCode>What happened?</InlineCode></>,
        ]}/>
        
        <ArticleHeading>Tag Questions</ArticleHeading>
        <ArticleParagraph>
            Tag questions are mini-questions added to the end of a statement to ask for confirmation or agreement. The tag uses the opposite polarity: if the statement is positive, the tag is negative, and vice versa. Tags use the auxiliary verb from the statement.
        </ArticleParagraph>
        
        <ArticleHeading>Rules for Tag Questions</ArticleHeading>
        <BulletList items={[
            <><strong>Positive statement → Negative tag:</strong> <InlineCode>It's a beautiful day, isn't it?</InlineCode></>,
            <><strong>Negative statement → Positive tag:</strong> <InlineCode>You haven't seen my keys, have you?</InlineCode></>,
            <><strong>With 'be':</strong> <InlineCode>She is your sister, isn't she?</InlineCode></>,
            <><strong>With modal verbs:</strong> <InlineCode>He can swim, can't he?</InlineCode></>,
            <><strong>With other verbs (use do/does/did):</strong> <InlineCode>You like coffee, don't you?</InlineCode></>,
            <><strong>With 'I am':</strong> <InlineCode>I'm late, aren't I?</InlineCode> (special case - 'aren't')</>,
        ]}/>
        
        <ExampleList items={[
          "You're coming to the party, aren't you? (positive → negative)",
          "She doesn't like spicy food, does she? (negative → positive)",
          "They have finished the work, haven't they?",
          "He won't be late, will he?",
          "We should leave now, shouldn't we?",
          "You didn't forget, did you?"
        ]} />
        
        <ArticleHeading>Indirect Questions (Polite Questions)</ArticleHeading>
        <ArticleParagraph>
            Indirect questions are more polite and formal. They start with phrases like <InlineCode>Can you tell me...</InlineCode>, <InlineCode>Do you know...</InlineCode>, <InlineCode>I wonder...</InlineCode>, <InlineCode>Could you explain...</InlineCode>. After these phrases, use normal word order (subject + verb), not question word order.
        </ArticleParagraph>
        <BulletList items={[
            <>Direct: <InlineCode>Where is the station?</InlineCode> → Indirect: <InlineCode>Can you tell me where the station is?</InlineCode></>,
            <>Direct: <InlineCode>What time does it start?</InlineCode> → Indirect: <InlineCode>Do you know what time it starts?</InlineCode></>,
            <>Direct: <InlineCode>Is she coming?</InlineCode> → Indirect: <InlineCode>Do you know if she is coming?</InlineCode></>,
        ]}/>
        
        <ArticleHeading>Common Mistakes to Avoid</ArticleHeading>
        <BulletList items={[
            <>❌ <InlineCode>Where you are going?</InlineCode> → ✅ <InlineCode>Where are you going?</InlineCode> (need inversion)</>,
            <>❌ <InlineCode>Do you can help me?</InlineCode> → ✅ <InlineCode>Can you help me?</InlineCode> (don't use 'do' with modals)</>,
            <>❌ <InlineCode>What you want?</InlineCode> → ✅ <InlineCode>What do you want?</InlineCode> (need auxiliary 'do')</>,
            <>❌ <InlineCode>Who did come?</InlineCode> → ✅ <InlineCode>Who came?</InlineCode> (subject question - no 'did')</>,
            <>❌ <InlineCode>You like pizza, don't you like?</InlineCode> → ✅ <InlineCode>You like pizza, don't you?</InlineCode> (tag is short)</>,
            <>❌ <InlineCode>Where is the bank is?</InlineCode> → ✅ <InlineCode>Where is the bank?</InlineCode> (only one 'is')</>,
        ]}/>
        
        <ArticleHeading>Practice Tips</ArticleHeading>
        <ArticleParagraph>
            When forming questions, first identify if there's an auxiliary verb (be, have, modal). If yes, invert it with the subject. If no auxiliary exists, use do/does/did. For tag questions, identify the auxiliary in the statement and flip the polarity (positive ↔ negative). Practice with indirect questions to sound more polite in formal situations.
        </ArticleParagraph>
      </>
    ),
  },
  {
    id: 'reported-speech',
    title: 'Reported Speech',
    category: 'Sentence Structure',
    content: (
      <>
        <ArticleParagraph>
          Reported speech (also called indirect speech) is how we report what someone else has said without using their exact words. This often involves changes in tense, pronouns, and time expressions.
        </ArticleParagraph>
        <ArticleHeading>Tense Backshift</ArticleHeading>
        <ArticleParagraph>
          When the reporting verb (e.g., <InlineCode>said</InlineCode>, <InlineCode>told</InlineCode>) is in the past, the tense in the reported clause usually moves one step back into the past.
        </ArticleParagraph>
        <BulletList items={[
            <><strong>Present Simple → Past Simple:</strong> <InlineCode>"I am happy." → He said he was happy.</InlineCode></>,
            <><strong>Past Simple → Past Perfect:</strong> <InlineCode>"I saw a movie." → She said she had seen a movie.</InlineCode></>,
            <><strong>Present Perfect → Past Perfect:</strong> <InlineCode>"I have finished." → He said he had finished.</InlineCode></>,
        ]}/>
        <ArticleHeading>Pronoun and Time Changes</ArticleHeading>
        <ArticleParagraph>
          Pronouns and time/place words often need to change to reflect the new perspective.
        </ArticleParagraph>
        <ExampleList items={['"I will see you tomorrow." → She said she would see me the next day.']} />
      </>
    )
  },
  {
    id: 'direct-and-indirect-speech',
    title: 'Direct & Indirect Speech',
    category: 'Sentence Structure',
    content: (
      <>
        <ArticleParagraph>
          When we want to report what someone said, we can do it in two ways: by quoting their exact words (direct speech) or by reporting the meaning of what they said (indirect or reported speech). Understanding the difference is key to structuring clear sentences.
        </ArticleParagraph>
        <ArticleHeading>Direct Speech (Quoted Speech)</ArticleHeading>
        <ArticleParagraph>
          Direct speech uses the speaker's exact words. It is often used in stories and journalism to be precise.
        </ArticleParagraph>
        <BulletList items={[
          "The exact words are enclosed in quotation marks (\" \").",
          "The quote is often separated from the rest of the sentence by a comma.",
          "The first word of the quote begins with a capital letter.",
        ]}/>
        <ExampleList items={['"I am going to the library," she said.', 'He asked, "Have you finished your homework?"']} />
        
        <ArticleHeading>Indirect Speech (Reported Speech)</ArticleHeading>
        <ArticleParagraph>
          Indirect speech reports the meaning of what someone said, without using their exact words. Quotation marks are not used. The word <InlineCode>that</InlineCode> is often used to introduce the reported words, but it can be omitted.
        </ArticleParagraph>
        <ArticleParagraph>
            When changing from direct to indirect speech, you often need to change tenses, pronouns, and words related to time and place.
        </ArticleParagraph>
        <CodeBlock>{`// Transformation Example
Direct: He said, "I am studying now."
Indirect: He said that he was studying then.`}</CodeBlock>
        <ArticleParagraph>
          For a detailed guide on the grammatical changes involved (like tense backshift), please see our topic on <strong>Reported Speech</strong>.
        </ArticleParagraph>
      </>
    )
  },
  {
    id: 'sentence-fragments',
    title: 'Sentence Fragments',
    category: 'Sentence Structure',
    content: (
      <>
        <ArticleParagraph>
          A sentence fragment is an incomplete sentence that is punctuated as if it were a complete sentence. It lacks a subject, a complete verb, or doesn't express a complete thought. While sometimes used for stylistic effect in creative writing, they are considered errors in formal and academic writing.
        </ArticleParagraph>
        <ArticleParagraph>
          A complete sentence must have three things: a <strong>subject</strong> (who or what the sentence is about), a <strong>verb</strong> (the action or state of being), and a <strong>complete thought</strong>.
        </ArticleParagraph>
        <ArticleHeading>Common Types of Fragments</ArticleHeading>
        <BulletList items={[
          <><strong>Dependent Clause Fragments:</strong> These have a subject and a verb, but they start with a subordinating word (like <InlineCode>because</InlineCode>, <InlineCode>although</InlineCode>, <InlineCode>since</InlineCode>, <InlineCode>while</InlineCode>) that makes them unable to stand alone. <br/><em>Fragment:</em> Because I forgot my keys. <br/><em>Correction:</em> I was late because I forgot my keys.</>,
          <><strong>-ing Fragments:</strong> A word ending in <InlineCode>-ing</InlineCode> needs a helping verb (like <InlineCode>is</InlineCode>, <InlineCode>was</InlineCode>, <InlineCode>are</InlineCode>) to function as the main verb. <br/><em>Fragment:</em> Running down the street. <br/><em>Correction:</em> He was running down the street.</>,
          <><strong>Missing Subject or Verb:</strong> The fragment is missing one of the essential components of a sentence. <br/><em>Fragment:</em> The big red car in the driveway. (Missing a verb) <br/><em>Correction:</em> The big red car in the driveway is mine.</>,
        ]} />
        <ArticleHeading>How to Fix Sentence Fragments</ArticleHeading>
        <ArticleParagraph>
          Fixing fragments usually involves one of two main strategies:
        </ArticleParagraph>
        <BulletList items={[
            <><strong>Add what's missing:</strong> Add the missing subject, verb, or helping verb to make it a complete thought.</>,
            <><strong>Connect it:</strong> Attach the fragment to a nearby independent clause. Often, a fragment is just a piece of the sentence before or after it.</>,
        ]}/>
      </>
    )
  },
  {
    id: 'simple-and-complex-sentences',
    title: 'Simple & Complex Sentences',
    category: 'Sentence Structure',
    content: (
      <>
        <ArticleParagraph>
          Understanding the difference between simple and complex sentences is fundamental to improving your writing style and clarity. A simple sentence contains a single, complete thought, while a complex sentence can express more intricate relationships between ideas.
        </ArticleParagraph>
        
        <ArticleHeading>The Building Blocks: Clauses</ArticleHeading>
        <ArticleParagraph>
          Before diving into sentence types, you need to understand clauses. A clause is a group of words with a subject and a verb.
        </ArticleParagraph>
        <BulletList items={[
          <><strong>Independent Clause:</strong> Expresses a complete thought and can stand alone as a sentence. (e.g., <InlineCode>The dog barked.</InlineCode>)</>,
          <><strong>Dependent (or Subordinate) Clause:</strong> Has a subject and a verb, but does not express a complete thought and cannot stand alone. It often begins with a subordinating conjunction. (e.g., <InlineCode>because the dog was hungry.</InlineCode>)</>,
        ]}/>

        <ArticleHeading>Simple Sentences</ArticleHeading>
        <ArticleParagraph>
          A simple sentence consists of just one independent clause. It has a subject and a verb and expresses a single, complete thought. It can have compound subjects or verbs, but it still only has one main clause.
        </ArticleParagraph>
        <ExampleList items={[
          "The train arrived.",
          "Maria and Sam laughed and danced.",
          "The sun shines brightly in the summer."
        ]} />
        
        <ArticleHeading>Complex Sentences</ArticleHeading>
        <ArticleParagraph>
          A complex sentence is made up of one independent clause and one or more dependent clauses. The dependent clause is linked to the independent clause by a subordinating conjunction.
        </ArticleParagraph>
        <CodeBlock>{`Independent Clause + Dependent Clause
// or
Dependent Clause, + Independent Clause`}</CodeBlock>
        <ArticleParagraph>
          Common subordinating conjunctions include:
        </ArticleParagraph>
        <ExampleList items={["after, although, as, because, before, if, since, unless, until, when, while"]} />
        <ArticleHeading>Punctuation Note</ArticleHeading>
        <ArticleParagraph>
            When the dependent clause comes before the independent clause, you must use a comma to separate them. If the independent clause comes first, no comma is needed.
        </ArticleParagraph>
        <ExampleList items={[
          "Although it was raining, we went to the park.",
          "We went to the park although it was raining."
        ]} />
      </>
    )
  },

  // Clauses
  {
    id: 'conditionals',
    title: 'Conditionals (If Clauses)',
    category: 'Clauses',
    content: (
       <>
        <ArticleParagraph>
            Conditional sentences are used to express that the action in the main clause (without if) can only take place if a certain condition (in the clause with if) is fulfilled. There are four main types.
        </ArticleParagraph>
        <ArticleHeading>Zero Conditional</ArticleHeading>
        <ArticleParagraph>Used for general truths and scientific facts. Structure: <InlineCode>If + present simple, ... present simple</InlineCode>.</ArticleParagraph>
        <ExampleList items={["If you heat water to 100 degrees, it boils."]} />

        <ArticleHeading>First Conditional</ArticleHeading>
        <ArticleParagraph>Used for a possible or likely situation in the future. Structure: <InlineCode>If + present simple, ... will + base verb</InlineCode>.</ArticleParagraph>
        <ExampleList items={["If it rains tomorrow, we will stay home."]} />
        
        <ArticleHeading>Second Conditional</ArticleHeading>
        <ArticleParagraph>Used for hypothetical or unlikely situations. Structure: <InlineCode>If + past simple, ... would + base verb</InlineCode>.</ArticleParagraph>
        <ExampleList items={["If I won the lottery, I would buy a big house."]} />

        <ArticleHeading>Third Conditional</ArticleHeading>
        <ArticleParagraph>Used to talk about a hypothetical past situation that did not happen. Structure: <InlineCode>If + past perfect, ... would have + past participle</InlineCode>.</ArticleParagraph>
        <ExampleList items={["If you had studied, you would have passed the exam."]} />
       </>
    )
  },
  {
    id: 'relative-clauses',
    title: 'Relative Clauses',
    category: 'Clauses',
    content: (
        <>
            <ArticleParagraph>
                Relative clauses are used to give additional information about a noun in the main sentence without starting a new sentence. They are introduced by relative pronouns like <InlineCode>who</InlineCode>, <InlineCode>whom</InlineCode>, <InlineCode>whose</InlineCode>, <InlineCode>which</InlineCode>, and <InlineCode>that</InlineCode>.
            </ArticleParagraph>
            <ArticleHeading>Restrictive vs. Non-Restrictive Clauses</ArticleHeading>
            <ArticleParagraph>
                The most important distinction with relative clauses is whether they are restrictive (essential) or non-restrictive (non-essential). This determines whether or not you use commas.
            </ArticleParagraph>
            <ArticleParagraph><strong>Restrictive (or Defining) Clauses</strong> provide essential information that identifies the noun. The sentence would have a different meaning without this clause. <strong>No commas are used.</strong></ArticleParagraph>
            <ExampleList items={["The man who lives next door is a doctor."]} />
            <ArticleParagraph>In this example, "who lives next door" is essential. Without it, we wouldn't know which man is being discussed.</ArticleParagraph>
            
            <ArticleParagraph><strong>Non-Restrictive (or Non-Defining) Clauses</strong> give extra, non-essential information. The meaning of the sentence is clear without the clause. <strong>Commas are always used</strong> to set the clause apart.</ArticleParagraph>
            <ExampleList items={["My brother, who is an engineer, lives in London."]} />
            <ArticleParagraph>Here, "who is an engineer" is extra information. The main point is that "My brother lives in London." We assume the speaker has only one brother.</ArticleParagraph>
            
            <ArticleHeading>When to Use Commas</ArticleHeading>
            <ArticleParagraph>
                The rule is simple: use commas to separate non-restrictive clauses, but do not use them for restrictive clauses. The presence or absence of commas can change the meaning of the sentence.
            </ArticleParagraph>
            <BulletList items={[
                <><strong>Without Commas (Restrictive):</strong> <InlineCode>The students who passed the exam can move to the next level.</InlineCode><br/>(This implies that *only* the students who passed can move on. The clause identifies a specific group of students.)</>,
                <><strong>With Commas (Non-Restrictive):</strong> <InlineCode>The students, who passed the exam, can move to the next level.</InlineCode><br/>(This implies that *all* the students passed the exam, and they can all move on. The fact that they passed is extra information.)</>
            ]}/>

            <ArticleHeading>Relative Pronouns</ArticleHeading>
            <BulletList items={[
                <><strong>Who/That:</strong> Used for people. <InlineCode>The student who/that won the prize is smart.</InlineCode></>,
                <><strong>Which/That:</strong> Used for things. <InlineCode>This is the laptop which/that I bought.</InlineCode></>,
                <><strong>Whose:</strong> Used for possession. <InlineCode>She's the artist whose paintings are popular.</InlineCode></>,
            ]}/>
        </>
    )
  },

  // Punctuation
  {
    id: 'commas',
    title: 'Commas',
    category: 'Punctuation',
    content: (
        <>
            <ArticleParagraph>
                The comma is one of the most common punctuation marks, but it can be tricky to use correctly. It is used to separate elements in a sentence.
            </ArticleParagraph>
            <ArticleHeading>Main Uses</ArticleHeading>
            <BulletList items={[
                <><strong>Separating Items in a List:</strong> <InlineCode>I need to buy apples, bananas, and oranges.</InlineCode></>,
                <><strong>Separating Independent Clauses:</strong> With a conjunction. <InlineCode>I wanted to go, but it started to rain.</InlineCode></>,
                <><strong>Separating Introductory Elements:</strong> <InlineCode>After the movie, we went out for dinner.</InlineCode></>,
                <><strong>Separating Non-Defining Clauses:</strong> <InlineCode>My sister, who lives in New York, is a writer.</InlineCode></>,
            ]}/>
        </>
    )
  },
  {
    id: 'apostrophes',
    title: 'Apostrophes',
    category: 'Punctuation',
    content: (
      <>
        <ArticleParagraph>
          The apostrophe has two main uses in English: to show possession and to indicate a contraction.
        </ArticleParagraph>
        <ArticleHeading>Possession</ArticleHeading>
        <ArticleParagraph>Apostrophes are used to show that something belongs to someone or something.</ArticleParagraph>
        <BulletList items={[
            <><strong>Singular nouns:</strong> Add <InlineCode>'s</InlineCode>. <InlineCode>the dog's bone, the student's book</InlineCode></>,
            <><strong>Plural nouns ending in -s:</strong> Add only an apostrophe. <InlineCode>the dogs' bones, the students' books</InlineCode></>,
            <><strong>Plural nouns not ending in -s:</strong> Add <InlineCode>'s</InlineCode>. <InlineCode>the children's toys, the women's meeting</InlineCode></>,
        ]}/>
        <ArticleHeading>Contractions</ArticleHeading>
        <ArticleParagraph>
          An apostrophe is used to show where letters have been omitted in a contraction.
        </ArticleParagraph>
        <ExampleList items={["it's (it is)", "don't (do not)", "you're (you are)", "can't (cannot)"]} />
        <ArticleParagraph>
          Be careful not to confuse <InlineCode>its</InlineCode> (possessive) with <InlineCode>it's</InlineCode> (contraction).
        </ArticleParagraph>
      </>
    ),
  },
  {
    id: 'semicolons-colons',
    title: 'Semicolons & Colons',
    category: 'Punctuation',
    content: (
      <>
        <ArticleParagraph>
          Semicolons (;) and colons (:) are punctuation marks used to connect and separate parts of a sentence.
        </ArticleParagraph>
        <ArticleHeading>Semicolons (;)</ArticleHeading>
        <BulletList items={[
          <><strong>To join two related independent clauses:</strong> They can replace a period if the two sentences are closely linked in thought. <InlineCode>I have a big test tomorrow; I can't go out tonight.</InlineCode></>,
          <><strong>To separate items in a complex list:</strong> Use a semicolon to separate items in a list when the items themselves contain commas. <InlineCode>The conference has people from London, England; Paris, France; and Tokyo, Japan.</InlineCode></>,
        ]}/>
        <ArticleHeading>Colons (:)</ArticleHeading>
        <BulletList items={[
          <><strong>To introduce a list:</strong> The clause before the colon must be a complete sentence. <InlineCode>I need three things from the store: milk, bread, and eggs.</InlineCode></>,
          <><strong>To introduce an explanation or quotation:</strong> <InlineCode>He had one goal in mind: to win.</InlineCode></>,
        ]}/>
      </>
    ),
  },
  {
    id: 'quotation-marks',
    title: 'Quotation Marks',
    category: 'Punctuation',
    content: (
      <>
        <ArticleParagraph>
          Quotation marks (" ") are used to set off direct quotations and certain titles.
        </ArticleParagraph>
        <ArticleHeading>Direct Quotations</ArticleHeading>
        <ArticleParagraph>
          Use quotation marks to enclose the exact words of a speaker.
        </ArticleParagraph>
        <ExampleList items={['"I am going to the library," she said.', 'He asked, "Have you finished your homework?"']} />
        <ArticleHeading>Punctuation with Quotation Marks</ArticleHeading>
        <ArticleParagraph>
          In American English, commas and periods always go inside the closing quotation mark.
        </ArticleParagraph>
        <ExampleList items={['"I don\'t know," he replied.']} />
        <ArticleHeading>Titles of Short Works</ArticleHeading>
        <ArticleParagraph>
          Use quotation marks for the titles of short works like articles, essays, poems, songs, and short stories.
        </ArticleParagraph>
        <ExampleList items={['My favorite poem is "The Raven" by Edgar Allan Poe.']} />
      </>
    ),
  },
  {
    id: 'hyphens',
    title: 'Hyphens & Compound Words',
    category: 'Punctuation',
    content: (
      <>
        <ArticleParagraph>
          The hyphen (-) is a punctuation mark used to join words and to separate syllables of a single word. Its main purpose is to eliminate ambiguity. Words connected by a hyphen are called hyphenated words, while words that have merged into a single word without a space are called unhyphenated or closed compound words.
        </ArticleParagraph>
        <ArticleHeading>When to Use a Hyphen</ArticleHeading>
        <ArticleParagraph><strong>1. Compound Adjectives:</strong></ArticleParagraph>
        <ArticleParagraph>
          When two or more words work together as a single adjective <span className="font-bold">before</span> a noun, they should be hyphenated.
        </ArticleParagraph>
        <ExampleList items={["She is a well-known author.", "He drives a state-of-the-art car.", "It was a last-minute decision."]} />
        <ArticleParagraph>
          However, if these words come <span className="font-bold">after</span> the noun, they are usually not hyphenated.
        </ArticleParagraph>
        <ExampleList items={["The author is well known.", "His car is state of the art."]} />

        <ArticleParagraph><strong>2. Numbers:</strong></ArticleParagraph>
        <ArticleParagraph>
          Use a hyphen to write out compound numbers from twenty-one to ninety-nine.
        </ArticleParagraph>
        <ExampleList items={["He is twenty-five years old.", "There are ninety-nine problems."]} />

        <ArticleParagraph><strong>3. Certain Prefixes:</strong></ArticleParagraph>
        <ArticleParagraph>
            Use a hyphen with the prefixes <InlineCode>ex-</InlineCode> (meaning former), <InlineCode>self-</InlineCode>, and <InlineCode>all-</InlineCode>. A hyphen is also used to avoid confusion with another word.
        </ArticleParagraph>
        <ExampleList items={["His ex-wife is a lawyer.", "She has high self-esteem.", "The all-inclusive resort was amazing.", "I need to re-sign the contract (sign again), not resign from my job (quit)."]} />
        
        <ArticleHeading>Hyphenated vs. Unhyphenated (Closed) Words</ArticleHeading>
        <ArticleParagraph>
            Compound words can be written in three ways: open (two words, e.g., <InlineCode>ice cream</InlineCode>), hyphenated (e.g., <InlineCode>mother-in-law</InlineCode>), or closed/unhyphenated (one word, e.g., <InlineCode>website</InlineCode>). Over time, many hyphenated words become closed.
        </ArticleParagraph>
        <BulletList items={[
            <><strong>Hyphenated:</strong> These words are joined by a hyphen and function as a single concept. Examples: <InlineCode>well-being</InlineCode>, <InlineCode>state-of-the-art</InlineCode>, <InlineCode>long-term</InlineCode>.</>,
            <><strong>Unhyphenated (Closed):</strong> These are words that have fused into a single word. Examples: <InlineCode>website</InlineCode>, <InlineCode>notebook</InlineCode>, <InlineCode>bookkeeper</InlineCode>. The word "bookkeeper" is famous for being the only unhyphenated English word with three consecutive double letters.</>,
        ]}/>
        <ArticleParagraph>
            When in doubt, it's always best to check a modern dictionary, as usage can change over time.
        </ArticleParagraph>
      </>
    ),
  },

  // Advanced Grammar Topics
  {
    id: 'subjunctive-mood',
    title: 'Subjunctive Mood',
    category: 'Advanced Grammar',
    content: (
      <>
        <ArticleParagraph>
          The subjunctive mood is a grammatical mood used to express wishes, hypothetical situations, demands, suggestions, and conditions contrary to fact. While it's less common in modern English than in other languages like Spanish or French, it still appears in formal writing and specific constructions. According to linguistic research by Quirk et al. (1985), the subjunctive mood in English has been gradually declining, but it remains important in certain fixed expressions and formal contexts.
        </ArticleParagraph>
        
        <ArticleHeading>Present Subjunctive</ArticleHeading>
        <ArticleParagraph>
          The present subjunctive uses the base form of the verb (without -s for third person singular). It's most commonly found after verbs like <InlineCode>suggest</InlineCode>, <InlineCode>recommend</InlineCode>, <InlineCode>demand</InlineCode>, <InlineCode>insist</InlineCode>, <InlineCode>request</InlineCode>, and <InlineCode>propose</InlineCode>, as well as after expressions like <InlineCode>it is important that</InlineCode>, <InlineCode>it is necessary that</InlineCode>.
        </ArticleParagraph>
        <BulletList items={[
          <><strong>After verbs of demand/suggestion:</strong> <InlineCode>The teacher insists that he <strong>be</strong> on time.</InlineCode> (NOT "is")</>,
          <><strong>After "It is + adjective + that":</strong> <InlineCode>It is essential that she <strong>arrive</strong> early.</InlineCode></>,
          <><strong>In formal proposals:</strong> <InlineCode>I propose that the meeting <strong>take</strong> place on Monday.</InlineCode></>,
        ]}/>
        <ExampleList items={[
          "The doctor recommends that he rest for a week.",
          "It is crucial that everyone attend the briefing.",
          "She demanded that the policy be changed immediately.",
          "It is vital that you submit your application on time."
        ]}/>
        
        <ArticleHeading>Past Subjunctive ("Were" for All Subjects)</ArticleHeading>
        <ArticleParagraph>
          The past subjunctive is most commonly seen with the verb "be," where <InlineCode>were</InlineCode> is used for all subjects (including I, he, she, it). This form appears in hypothetical statements, wishes, and conditions contrary to present fact. Research by Huddleston & Pullum (2002) notes that in informal speech, "was" is increasingly replacing "were," but "were" remains standard in formal writing.
        </ArticleParagraph>
        <BulletList items={[
          <><strong>Second conditional:</strong> <InlineCode>If I <strong>were</strong> rich, I would travel the world.</InlineCode></>,
          <><strong>Wish statements:</strong> <InlineCode>I wish I <strong>were</strong> taller.</InlineCode></>,
          <><strong>"As if/as though" constructions:</strong> <InlineCode>He acts as if he <strong>were</strong> the boss.</InlineCode></>,
        ]}/>
        <ExampleList items={[
          "If she were here, she would know what to do.",
          "I wish it were easier to understand.",
          "He talks as though he were an expert.",
          "If I were you, I would accept the offer."
        ]}/>
        
        <ArticleHeading>Common Fixed Expressions</ArticleHeading>
        <ArticleParagraph>
          The subjunctive appears in many traditional fixed expressions that have survived in modern English.
        </ArticleParagraph>
        <ExampleList items={[
          "God save the Queen!",
          "Long live the king!",
          "Be that as it may...",
          "Come what may...",
          "Heaven forbid!",
          "Suffice it to say..."
        ]}/>
        
        <ArticleHeading>Common Mistakes</ArticleHeading>
        <BulletList items={[
          <>❌ <InlineCode>I suggest that he goes home.</InlineCode> → ✅ <InlineCode>I suggest that he go home.</InlineCode></>,
          <>❌ <InlineCode>If I was rich...</InlineCode> → ✅ <InlineCode>If I were rich...</InlineCode> (formal)</>,
          <>❌ <InlineCode>It's important that she is there.</InlineCode> → ✅ <InlineCode>It's important that she be there.</InlineCode></>,
        ]}/>
      </>
    ),
  },
  
  {
    id: 'cleft-sentences',
    title: 'Cleft Sentences',
    category: 'Advanced Grammar',
    content: (
      <>
        <ArticleParagraph>
          Cleft sentences are grammatical structures that divide (or "cleave") a simple sentence into two clauses to emphasize a particular piece of information. They're called "cleft" from the Old English word meaning "split." According to Biber et al. (1999), cleft sentences are particularly common in academic and formal writing where precision and emphasis are important. They allow speakers to highlight specific information and control the flow of information in discourse.
        </ArticleParagraph>
        
        <ArticleHeading>It-Cleft Sentences</ArticleHeading>
        <ArticleParagraph>
          It-clefts begin with <InlineCode>It + be + emphasized element + that/who clause</InlineCode>. This structure puts emphasis on the element immediately after "be."
        </ArticleParagraph>
        <CodeBlock>{`Basic sentence: Sarah broke the window yesterday.
It-cleft (emphasize Sarah): It was Sarah who broke the window yesterday.
It-cleft (emphasize window): It was the window that Sarah broke yesterday.
It-cleft (emphasize time): It was yesterday that Sarah broke the window.`}</CodeBlock>
        <ExampleList items={[
          "It was John who called you last night. (emphasizes who called)",
          "It was her dedication that made the difference. (emphasizes what made the difference)",
          "It was in Paris that we first met. (emphasizes where)",
          "It is because of you that I'm here. (emphasizes reason)"
        ]}/>
        
        <ArticleHeading>Wh-Cleft Sentences (Pseudo-Clefts)</ArticleHeading>
        <ArticleParagraph>
          Wh-clefts start with a <InlineCode>wh-</InlineCode> clause (what, where, when, why, how) followed by <InlineCode>be</InlineCode> and the emphasized information. These are also called pseudo-clefts.
        </ArticleParagraph>
        <CodeBlock>{`Basic sentence: I need a vacation.
Wh-cleft: What I need is a vacation.

Basic sentence: She resigned because of the stress.
Wh-cleft: Why she resigned was because of the stress.`}</CodeBlock>
        <ExampleList items={[
          "What I want is to be left alone.",
          "What surprised me was his reaction.",
          "Where we went was to the mountains.",
          "How he succeeded was through hard work.",
          "What bothers me most is the noise."
        ]}/>
        
        <ArticleHeading>Reverse Wh-Clefts</ArticleHeading>
        <ArticleParagraph>
          Reverse wh-clefts place the emphasized element before the wh-clause.
        </ArticleParagraph>
        <ExampleList items={[
          "A vacation is what I need right now.",
          "Through hard work is how he succeeded.",
          "Your support is what matters most.",
          "The truth is what we're looking for."
        ]}/>
        
        <ArticleHeading>All-Clefts</ArticleHeading>
        <ArticleParagraph>
          All-clefts use <InlineCode>All (that)</InlineCode> to emphasize exhaustiveness or exclusivity.
        </ArticleParagraph>
        <ExampleList items={[
          "All I want is some peace and quiet.",
          "All she did was apologize.",
          "All we need is more time.",
          "All that matters is your safety."
        ]}/>
        
        <ArticleHeading>When to Use Cleft Sentences</ArticleHeading>
        <BulletList items={[
          <><strong>To correct misinformation:</strong> <InlineCode>It wasn't John who called; it was Sarah.</InlineCode></>,
          <><strong>To introduce new information dramatically:</strong> <InlineCode>What shocked everyone was his confession.</InlineCode></>,
          <><strong>To emphasize contrast:</strong> <InlineCode>It's quality that matters, not quantity.</InlineCode></>,
          <><strong>In answers to questions:</strong> "Who ate the cake?" → <InlineCode>It was Tom who ate it.</InlineCode></>,
        ]}/>
      </>
    ),
  },
  
  {
    id: 'inversion',
    title: 'Inversion',
    category: 'Advanced Grammar',
    content: (
      <>
        <ArticleParagraph>
          Inversion is a grammatical construction where the normal word order of subject and verb is reversed. While questions naturally use inversion, there are several other contexts where inversion occurs in English, particularly in formal and literary writing. Linguistic studies by Swan (2005) show that inversion serves various functions including emphasis, maintaining cohesion, and conforming to stylistic conventions in formal registers.
        </ArticleParagraph>
        
        <ArticleHeading>Inversion After Negative Adverbials</ArticleHeading>
        <ArticleParagraph>
          When sentences begin with negative or restrictive adverbials like <InlineCode>never</InlineCode>, <InlineCode>rarely</InlineCode>, <InlineCode>seldom</InlineCode>, <InlineCode>hardly</InlineCode>, <InlineCode>no sooner</InlineCode>, <InlineCode>not only</InlineCode>, the subject and auxiliary verb are inverted. This creates emphasis and is common in formal writing.
        </ArticleParagraph>
        <BulletList items={[
          <>Normal: <InlineCode>I have never seen such beauty.</InlineCode> → Inverted: <InlineCode>Never have I seen such beauty.</InlineCode></>,
          <>Normal: <InlineCode>She rarely goes out.</InlineCode> → Inverted: <InlineCode>Rarely does she go out.</InlineCode></>,
          <>Normal: <InlineCode>They had hardly arrived when it started raining.</InlineCode> → Inverted: <InlineCode>Hardly had they arrived when it started raining.</InlineCode></>,
        ]}/>
        <ExampleList items={[
          "Never have I been so embarrassed!",
          "Seldom do we see such dedication.",
          "Not only did he fail the test, but he also missed the makeup exam.",
          "No sooner had we left than the storm began.",
          "Little did she know what awaited her.",
          "Under no circumstances will I agree to this."
        ]}/>
        
        <ArticleHeading>Inversion After "Only"</ArticleHeading>
        <ArticleParagraph>
          When <InlineCode>only</InlineCode> is followed by a time expression or a prepositional phrase at the beginning of a sentence, inversion occurs.
        </ArticleParagraph>
        <ExampleList items={[
          "Only then did I realize my mistake.",
          "Only after leaving home did she feel truly free.",
          "Only in this way can we solve the problem.",
          "Only when it's too late do people appreciate what they had.",
          "Only by working together can we succeed."
        ]}/>
        
        <ArticleHeading>Inversion with "So/Neither/Nor"</ArticleHeading>
        <ArticleParagraph>
          To show agreement with a previous statement, we use <InlineCode>so</InlineCode> for affirmative and <InlineCode>neither/nor</InlineCode> for negative statements, followed by inversion.
        </ArticleParagraph>
        <ExampleList items={[
          "\"I love pizza.\" \"So do I.\" (I also love pizza)",
          "\"She has been to Paris.\" \"So have I.\"",
          "\"I don't like horror movies.\" \"Neither do I.\"",
          "\"He can't swim.\" \"Nor can his brother.\"",
          "\"I would never do that.\" \"Neither would I.\""
        ]}/>
        
        <ArticleHeading>Inversion After Place Adverbials</ArticleHeading>
        <ArticleParagraph>
          For literary or dramatic effect, sentences can begin with a place adverbial, followed by the verb and then the subject. This is common in narrative writing.
        </ArticleParagraph>
        <ExampleList items={[
          "On the hill stood an ancient castle.",
          "Down the street came a parade of protestors.",
          "In the corner sat a small child.",
          "From the shadows emerged a mysterious figure.",
          "Round the bend came a speeding car."
        ]}/>
        
        <ArticleHeading>Inversion in Conditional Sentences</ArticleHeading>
        <ArticleParagraph>
          In formal writing, <InlineCode>if</InlineCode> can be omitted in conditional sentences by inverting <InlineCode>had</InlineCode>, <InlineCode>were</InlineCode>, or <InlineCode>should</InlineCode>.
        </ArticleParagraph>
        <BulletList items={[
          <>With "had": <InlineCode>If I had known → Had I known</InlineCode></>,
          <>With "were": <InlineCode>If she were here → Were she here</InlineCode></>,
          <>With "should": <InlineCode>If you should need help → Should you need help</InlineCode></>,
        ]}/>
        <ExampleList items={[
          "Had I known earlier, I would have helped.",
          "Were I in your position, I would resign.",
          "Should you require assistance, please call.",
          "Had they arrived on time, they would have seen it."
        ]}/>
      </>
    ),
  },
  
  {
    id: 'ellipsis',
    title: 'Ellipsis',
    category: 'Advanced Grammar',
    content: (
      <>
        <ArticleParagraph>
          Ellipsis is the omission of words from a sentence when the meaning can be understood from context. It makes speech and writing more efficient by avoiding unnecessary repetition. Research by Halliday & Hasan (1976) identified ellipsis as one of the key cohesive devices in English, helping to connect sentences and create text flow. Ellipsis is particularly common in conversational English and informal writing.
        </ArticleParagraph>
        
        <ArticleHeading>Nominal Ellipsis (Omitting Nouns)</ArticleHeading>
        <ArticleParagraph>
          When the noun is understood from context, it can be omitted after determiners and adjectives.
        </ArticleParagraph>
        <BulletList items={[
          <>Full: <InlineCode>Do you want the red pen or the blue pen?</InlineCode> → Ellipsis: <InlineCode>Do you want the red or the blue (one)?</InlineCode></>,
          <>Full: <InlineCode>I'll have some coffee.</InlineCode> → Ellipsis: <InlineCode>I'll have some. (coffee understood)</InlineCode></>,
          <>Full: <InlineCode>Which car is yours? The expensive car?</InlineCode> → Ellipsis: <InlineCode>Which car is yours? The expensive (one)?</InlineCode></>,
        ]}/>
        <ExampleList items={[
          "\"Do you want large or small fries?\" \"I'll take the large.\" (fries omitted)",
          "Many people applied, but only a few were selected. (people omitted)",
          "She has two dogs. One is brown and the other is black. (dog omitted)",
          "His car is faster than mine. (car omitted after 'mine')"
        ]}/>
        
        <ArticleHeading>Verbal Ellipsis (Omitting Verbs)</ArticleHeading>
        <ArticleParagraph>
          Auxiliary verbs and main verbs can be omitted when they can be recovered from earlier in the sentence or from previous context.
        </ArticleParagraph>
        <ExampleList items={[
          "\"Are you coming?\" \"Yes, I am.\" (coming omitted)",
          "She can play the piano, and he can too. (play the piano omitted)",
          "\"Have you finished?\" \"Not yet.\" (I have finished omitted)",
          "I said I would help, and I will. (help omitted)",
          "\"Who broke the vase?\" \"John did.\" (broke the vase omitted)"
        ]}/>
        
        <ArticleHeading>Clausal Ellipsis</ArticleHeading>
        <ArticleParagraph>
          Entire clauses can be omitted when the meaning is clear, especially in responses and with coordinating conjunctions.
        </ArticleParagraph>
        <ExampleList items={[
          "\"Where is John?\" \"(He's) In his room.\" (subject and verb omitted)",
          "\"Want some coffee?\" \"(I'd) Love some.\" (subject and auxiliary omitted)",
          "She ordered pasta and (she ordered) salad. (subject and verb omitted in second clause)",
          "When (you are) in doubt, ask for help. (subject and verb omitted after 'when')"
        ]}/>
        
        <ArticleHeading>Ellipsis in Comparisons</ArticleHeading>
        <ArticleParagraph>
          Comparative structures often use ellipsis to avoid repetition.
        </ArticleParagraph>
        <ExampleList items={[
          "She is taller than I (am). (verb omitted)",
          "I work harder than he (does/works). (verb omitted)",
          "You did better than we expected (you would do). (clause omitted)",
          "The movie was not as good as (the movie was) last week. (subject and verb omitted)"
        ]}/>
        
        <ArticleHeading>Common Ellipsis Patterns in Questions</ArticleHeading>
        <ArticleParagraph>
          In informal conversation, questions often have ellipsis at the beginning.
        </ArticleParagraph>
        <ExampleList items={[
          "(Have you) Seen John?",
          "(Do you) Want some tea?",
          "(Are you) Going to the party?",
          "(Have you) Got any plans?",
          "(Would you) Like to come along?"
        ]}/>
        
        <ArticleHeading>Ellipsis vs. Incomplete Sentences</ArticleHeading>
        <ArticleParagraph>
          It's important to distinguish between ellipsis (grammatically acceptable omission where meaning is recoverable) and incomplete sentences (grammatically incorrect fragments).
        </ArticleParagraph>
        <BulletList items={[
          <>✅ Ellipsis: <InlineCode>"Can you help?" "Sure, (I) can."</InlineCode> (meaning clear from context)</>,
          <>❌ Fragment: <InlineCode>"Because I was tired."</InlineCode> (incomplete thought, not recoverable from context)</>,
        ]}/>
      </>
    ),
  },

  // Confusing Areas Lessons
  {
    id: 'used-to-vs-would',
    title: 'Used To vs Would',
    category: 'Common Confusions',
    content: (
      <>
        <ArticleParagraph>
          Both <InlineCode>used to</InlineCode> and <InlineCode>would</InlineCode> can describe past habits and repeated actions, but they're not interchangeable. Understanding the difference is crucial for natural, accurate English. According to Carter & McCarthy (2006), these forms represent different aspectual perspectives on past events and are selected based on specific contextual requirements.
        </ArticleParagraph>
        
        <ArticleHeading>Used To: Past States and Habits</ArticleHeading>
        <ArticleParagraph>
          <InlineCode>Used to + infinitive</InlineCode> describes both past habits and past states that are no longer true. It emphasizes the contrast between past and present.
        </ArticleParagraph>
        <BulletList items={[
          <><strong>Past habits:</strong> <InlineCode>I used to smoke, but I quit last year.</InlineCode></>,
          <><strong>Past states:</strong> <InlineCode>There used to be a cinema here.</InlineCode></>,
          <><strong>Past situations:</strong> <InlineCode>She used to live in Paris.</InlineCode></>,
        ]}/>
        <ExampleList items={[
          "I used to play tennis every weekend. (past habit, no longer true)",
          "This building used to be a school. (past state)",
          "We used to be best friends. (past relationship)",
          "He used to have long hair. (past appearance)",
          "There used to be more trees in this area. (past existence)"
        ]}/>
        
        <ArticleHeading>Would: Past Repeated Actions Only</ArticleHeading>
        <ArticleParagraph>
          <InlineCode>Would + infinitive</InlineCode> can only describe past repeated actions and habits. It <strong>cannot</strong> be used for past states. It's often used in nostalgic reminiscences or when describing characteristic behavior.
        </ArticleParagraph>
        <ExampleList items={[
          "When I was young, I would spend hours reading. (repeated action)",
          "Every summer, we would visit my grandparents. (repeated action)",
          "She would always arrive late to meetings. (habitual behavior)",
          "He would often tell the same stories. (repeated action)"
        ]}/>
        
        <ArticleHeading>Key Differences</ArticleHeading>
        <CodeBlock>{`✅ Correct with both:
"I used to go swimming every day."
"I would go swimming every day."

✅ Only "used to" works for states:
"I used to live in London." ✅
"I would live in London." ❌

✅ "Would" often needs time context:
"Every morning, I would wake up at 6 AM." ✅
"I would wake up at 6 AM." ❌ (needs time reference)
"I used to wake up at 6 AM." ✅ (no time reference needed)`}</CodeBlock>
        
        <ArticleHeading>Questions and Negatives</ArticleHeading>
        <BulletList items={[
          <><strong>Used to - Questions:</strong> <InlineCode>Did you use to play football?</InlineCode> (Note: "use" not "used")</>,
          <><strong>Used to - Negatives:</strong> <InlineCode>I didn't use to like coffee.</InlineCode></>,
          <><strong>Would:</strong> Standard question/negative formation: <InlineCode>Would you visit often?</InlineCode></>,
        ]}/>
        
        <ArticleHeading>Common Mistakes</ArticleHeading>
        <BulletList items={[
          <>❌ <InlineCode>I would have long hair.</InlineCode> → ✅ <InlineCode>I used to have long hair.</InlineCode> (state)</>,
          <>❌ <InlineCode>I used to go there yesterday.</InlineCode> → ✅ <InlineCode>I went there yesterday.</InlineCode> (specific past, not habit)</>,
          <>❌ <InlineCode>Did you used to smoke?</InlineCode> → ✅ <InlineCode>Did you use to smoke?</InlineCode> (no -d in questions)</>,
          <>❌ <InlineCode>I'm not used to swim.</InlineCode> → ✅ <InlineCode>I'm not used to swimming.</InlineCode> (be used to + -ing is different!)</>,
        ]}/>
        
        <ArticleHeading>Be Used To vs Used To</ArticleHeading>
        <ArticleParagraph>
          Don't confuse <InlineCode>used to + infinitive</InlineCode> with <InlineCode>be used to + -ing</InlineCode> (meaning "be accustomed to").
        </ArticleParagraph>
        <BulletList items={[
          <><InlineCode>I used to drive</InlineCode> = I drove in the past (but don't now)</>,
          <><InlineCode>I'm used to driving</InlineCode> = I'm accustomed to driving (it's normal for me now)</>,
        ]}/>
      </>
    ),
  },
  
  {
    id: 'wish-vs-hope',
    title: 'Wish vs Hope',
    category: 'Common Confusions',
    content: (
      <>
        <ArticleParagraph>
          <InlineCode>Wish</InlineCode> and <InlineCode>hope</InlineCode> both express desires, but they differ in terms of possibility and grammatical structure. According to Palmer (1986), the key distinction lies in the speaker's perception of likelihood: "wish" implies impossibility or improbability, while "hope" suggests possibility. Mastering this difference is essential for expressing desires accurately in English.
        </ArticleParagraph>
        
        <ArticleHeading>Hope: For Possible/Likely Events</ArticleHeading>
        <ArticleParagraph>
          <InlineCode>Hope</InlineCode> is used when we think something is possible or likely to happen. It's followed by present simple or will for future events.
        </ArticleParagraph>
        <BulletList items={[
          <><strong>Structure:</strong> <InlineCode>hope + (that) + present simple/will</InlineCode></>,
          <><strong>Future possibility:</strong> <InlineCode>I hope it doesn't rain tomorrow.</InlineCode></>,
          <><strong>Current possibility:</strong> <InlineCode>I hope you're feeling better.</InlineCode></>,
        ]}/>
        <ExampleList items={[
          "I hope she passes the exam. (it's possible)",
          "We hope to see you soon. (likely/possible)",
          "I hope the package arrives on time. (could happen)",
          "They hope to buy a house next year. (realistic goal)",
          "I hope you enjoy your vacation! (possible outcome)"
        ]}/>
        
        <ArticleHeading>Wish: For Impossible/Unlikely Events</ArticleHeading>
        <ArticleParagraph>
          <InlineCode>Wish</InlineCode> is used for situations that are impossible, unlikely, or contrary to reality. It expresses regret or desire for a different reality. The verb form changes based on the time reference.
        </ArticleParagraph>
        
        <ArticleHeading>Wish + Past Simple (Present Unreal)</ArticleHeading>
        <ArticleParagraph>
          For situations you want to be different now, but are not (contrary to present fact).
        </ArticleParagraph>
        <ExampleList items={[
          "I wish I had more time. (but I don't)",
          "She wishes she were taller. (but she isn't)",
          "I wish I spoke Spanish. (but I don't)",
          "He wishes he lived closer to work. (but he doesn't)",
          "They wish they knew the answer. (but they don't)"
        ]}/>
        
        <ArticleHeading>Wish + Past Perfect (Past Unreal)</ArticleHeading>
        <ArticleParagraph>
          For regrets about the past—things you wish had happened differently but didn't.
        </ArticleParagraph>
        <ExampleList items={[
          "I wish I had studied harder. (but I didn't)",
          "She wishes she had taken that job. (but she didn't)",
          "We wish we had bought tickets earlier. (but we didn't)",
          "He wishes he hadn't said that. (but he did)",
          "They wish they had known sooner. (but they didn't)"
        ]}/>
        
        <ArticleHeading>Wish + Would (Future/Habitual Complaint)</ArticleHeading>
        <ArticleParagraph>
          For complaints about annoying habits or desires for future changes (often things outside your control).
        </ArticleParagraph>
        <ExampleList items={[
          "I wish you would stop doing that! (complaint about habit)",
          "I wish it would stop raining. (desire for change)",
          "She wishes he would listen to her. (frustration)",
          "I wish they would hurry up. (impatience)",
          "We wish the neighbors would be quieter. (complaint)"
        ]}/>
        
        <ArticleHeading>Quick Comparison</ArticleHeading>
        <CodeBlock>{`Hope (possible/likely):
"I hope I pass the test." (I studied, it's possible)
"I hope it's sunny tomorrow." (weather might be good)

Wish (impossible/unlikely now):
"I wish I were rich." (I'm not rich)
"I wish I had studied more." (too late now)
"I wish it would stop raining." (it's raining and I can't control it)`}</CodeBlock>
        
        <ArticleHeading>Common Mistakes</ArticleHeading>
        <BulletList items={[
          <>❌ <InlineCode>I wish I will pass.</InlineCode> → ✅ <InlineCode>I hope I will pass.</InlineCode> (use hope for possible future)</>,
          <>❌ <InlineCode>I hope I was rich.</InlineCode> → ✅ <InlineCode>I wish I were rich.</InlineCode> (impossible now)</>,
          <>❌ <InlineCode>I wish you will stop.</InlineCode> → ✅ <InlineCode>I wish you would stop.</InlineCode> (would, not will)</>,
          <>❌ <InlineCode>I hope I have more time.</InlineCode> → ✅ <InlineCode>I wish I had more time.</InlineCode> OR <InlineCode>I hope I will have more time.</InlineCode></>,
        ]}/>
      </>
    ),
  },
  ...CONFUSING_AREAS_TOPICS, // Add additional confusing topics
];
