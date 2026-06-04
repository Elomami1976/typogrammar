
import React from 'react';
import { GrammarTopic } from '../types';
import { ArticleParagraph, ArticleHeading, InlineCode, CodeBlock, ExampleList, BulletList } from '../components/ArticleComponents';
import { SentenceTransformationDiagram, TimelineDiagram } from '../components/VisualAids';
import { Link } from 'react-router-dom';
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
            <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-4 mb-6 rounded-r">
              <p className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Quick Summary</p>
              <p className="text-blue-700 dark:text-blue-300 text-sm">Countable nouns can be numbered (one apple, two apples). Uncountable nouns cannot be counted directly (water, advice, information). This distinction affects article usage (a/an/the), quantifiers (many/much), and plural forms.</p>
            </div>

            <ArticleParagraph>
                Understanding the difference between countable and uncountable nouns is fundamental to mastering English grammar. This distinction affects which articles (a, an, the), quantifiers (some, many, much), and verb forms you can use. Many non-native speakers struggle with this concept because their native language may not make the same distinctions.
            </ArticleParagraph>

            <ArticleHeading>Countable Nouns</ArticleHeading>
            <ArticleParagraph>
                <strong>Countable nouns</strong> refer to things that can be counted as individual units. They have both singular and plural forms, and you can use numbers with them.
            </ArticleParagraph>
            <ExampleList items={[
                "one book → two books → three books",
                "a car → several cars → many cars",
                "one friend → a few friends → hundreds of friends",
                "an idea → multiple ideas → countless ideas"
            ]} />

            <ArticleParagraph><strong>Key Characteristics of Countable Nouns:</strong></ArticleParagraph>
            <BulletList items={[
                <>Can use <strong>a/an</strong> with singular forms: a book, an apple, a meeting</>,
                <>Can use <strong>numbers</strong>: one chair, two tables, five questions</>,
                <>Can use <strong>many, few, a few, several</strong>: many students, a few problems</>,
                <>Have <strong>plural forms</strong>: book → books, child → children</>,
                <>Can use <strong>the</strong> or <strong>no article</strong>: the book, books (in general)</>
            ]}/>

            <ArticleParagraph><strong>Common Countable Nouns:</strong></ArticleParagraph>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded">
                <thead className="bg-slate-100 dark:bg-slate-700">
                  <tr>
                    <th className="px-4 py-2 border-b text-left text-slate-800 dark:text-slate-200">Category</th>
                    <th className="px-4 py-2 border-b text-left text-slate-800 dark:text-slate-200">Examples</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700 dark:text-slate-300">
                  <tr><td className="px-4 py-2 border-b">People</td><td className="px-4 py-2 border-b">student, teacher, friend, doctor, child</td></tr>
                  <tr><td className="px-4 py-2 border-b">Objects</td><td className="px-4 py-2 border-b">book, car, phone, table, chair</td></tr>
                  <tr><td className="px-4 py-2 border-b">Animals</td><td className="px-4 py-2 border-b">dog, cat, bird, elephant, fish</td></tr>
                  <tr><td className="px-4 py-2 border-b">Places</td><td className="px-4 py-2 border-b">city, country, house, building, park</td></tr>
                  <tr><td className="px-4 py-2 border-b">Abstract (countable)</td><td className="px-4 py-2 border-b">idea, suggestion, problem, question, dream</td></tr>
                </tbody>
              </table>
            </div>

            <ArticleHeading>Uncountable Nouns</ArticleHeading>
            <ArticleParagraph>
                <strong>Uncountable nouns</strong> (also called mass nouns or non-count nouns) refer to things that cannot be counted as separate units. They represent substances, abstract concepts, or collective items treated as wholes.
            </ArticleParagraph>

            <ArticleParagraph><strong>Key Characteristics of Uncountable Nouns:</strong></ArticleParagraph>
            <BulletList items={[
                <>Cannot use <strong>a/an</strong>: NOT "an advice" → "some advice"</>,
                <>Cannot use <strong>numbers directly</strong>: NOT "two informations" → "two pieces of information"</>,
                <>Use <strong>much, little, a little</strong>: much water, little time, a little help</>,
                <>Have <strong>no plural form</strong>: advice (NOT advices), news (NOT newses)</>,
                <>Often take <strong>singular verbs</strong>: The information is correct. The news is surprising.</>
            ]}/>

            <ArticleParagraph><strong>Categories of Uncountable Nouns:</strong></ArticleParagraph>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded">
                <thead className="bg-slate-100 dark:bg-slate-700">
                  <tr>
                    <th className="px-4 py-2 border-b text-left text-slate-800 dark:text-slate-200">Category</th>
                    <th className="px-4 py-2 border-b text-left text-slate-800 dark:text-slate-200">Examples</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700 dark:text-slate-300">
                  <tr><td className="px-4 py-2 border-b">Liquids</td><td className="px-4 py-2 border-b">water, milk, coffee, tea, juice, oil</td></tr>
                  <tr><td className="px-4 py-2 border-b">Materials/Substances</td><td className="px-4 py-2 border-b">wood, metal, glass, paper, plastic, gold</td></tr>
                  <tr><td className="px-4 py-2 border-b">Food (mass)</td><td className="px-4 py-2 border-b">bread, rice, meat, cheese, sugar, flour</td></tr>
                  <tr><td className="px-4 py-2 border-b">Abstract concepts</td><td className="px-4 py-2 border-b">advice, information, knowledge, love, happiness</td></tr>
                  <tr><td className="px-4 py-2 border-b">Weather</td><td className="px-4 py-2 border-b">rain, snow, sunshine, wind, weather</td></tr>
                  <tr><td className="px-4 py-2 border-b">Fields of study</td><td className="px-4 py-2 border-b">mathematics, physics, economics, history</td></tr>
                  <tr><td className="px-4 py-2 border-b">Activities</td><td className="px-4 py-2 border-b">homework, work, research, travel, shopping</td></tr>
                </tbody>
              </table>
            </div>

            <ArticleHeading>Quantifying Uncountable Nouns</ArticleHeading>
            <ArticleParagraph>
                Since you can't count uncountable nouns directly, use containers, measurements, or quantity words to express specific amounts:
            </ArticleParagraph>
            <ExampleList items={[
                "a piece of advice / information / furniture / news",
                "a glass of water / milk / juice",
                "a cup of coffee / tea / sugar",
                "a bottle of wine / water / oil",
                "a loaf of bread",
                "a slice of bread / pizza / cake",
                "a grain of rice / sand / truth",
                "a drop of water / rain / blood",
                "a bar of soap / chocolate / gold",
                "a sheet of paper / music"
            ]} />

            <ArticleHeading>Quantifiers: Which to Use?</ArticleHeading>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded">
                <thead className="bg-slate-100 dark:bg-slate-700">
                  <tr>
                    <th className="px-4 py-2 border-b text-left text-slate-800 dark:text-slate-200">Countable Only</th>
                    <th className="px-4 py-2 border-b text-left text-slate-800 dark:text-slate-200">Uncountable Only</th>
                    <th className="px-4 py-2 border-b text-left text-slate-800 dark:text-slate-200">Both</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700 dark:text-slate-300">
                  <tr><td className="px-4 py-2 border-b">many books</td><td className="px-4 py-2 border-b">much water</td><td className="px-4 py-2 border-b">some books/water</td></tr>
                  <tr><td className="px-4 py-2 border-b">few students</td><td className="px-4 py-2 border-b">little time</td><td className="px-4 py-2 border-b">a lot of students/time</td></tr>
                  <tr><td className="px-4 py-2 border-b">a few ideas</td><td className="px-4 py-2 border-b">a little money</td><td className="px-4 py-2 border-b">no books/water</td></tr>
                  <tr><td className="px-4 py-2 border-b">several people</td><td className="px-4 py-2 border-b">a bit of help</td><td className="px-4 py-2 border-b">plenty of food/options</td></tr>
                  <tr><td className="px-4 py-2 border-b">each/every student</td><td className="px-4 py-2 border-b">-</td><td className="px-4 py-2 border-b">enough food/chairs</td></tr>
                  <tr><td className="px-4 py-2 border-b">a/an (singular)</td><td className="px-4 py-2 border-b">-</td><td className="px-4 py-2 border-b">any help/books</td></tr>
                </tbody>
              </table>
            </div>

            <ArticleHeading>Tricky Nouns: Countable AND Uncountable</ArticleHeading>
            <ArticleParagraph>
                Some nouns can be both countable and uncountable, with different meanings:
            </ArticleParagraph>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded">
                <thead className="bg-slate-100 dark:bg-slate-700">
                  <tr>
                    <th className="px-4 py-2 border-b text-left text-slate-800 dark:text-slate-200">Noun</th>
                    <th className="px-4 py-2 border-b text-left text-slate-800 dark:text-slate-200">Uncountable Meaning</th>
                    <th className="px-4 py-2 border-b text-left text-slate-800 dark:text-slate-200">Countable Meaning</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700 dark:text-slate-300">
                  <tr><td className="px-4 py-2 border-b">coffee</td><td className="px-4 py-2 border-b">I love coffee. (the drink)</td><td className="px-4 py-2 border-b">Two coffees, please. (cups of coffee)</td></tr>
                  <tr><td className="px-4 py-2 border-b">paper</td><td className="px-4 py-2 border-b">I need paper. (material)</td><td className="px-4 py-2 border-b">I wrote a paper. (document/essay)</td></tr>
                  <tr><td className="px-4 py-2 border-b">hair</td><td className="px-4 py-2 border-b">She has beautiful hair. (all of it)</td><td className="px-4 py-2 border-b">There's a hair in my soup. (single strand)</td></tr>
                  <tr><td className="px-4 py-2 border-b">experience</td><td className="px-4 py-2 border-b">She has experience. (general)</td><td className="px-4 py-2 border-b">It was an amazing experience. (event)</td></tr>
                  <tr><td className="px-4 py-2 border-b">glass</td><td className="px-4 py-2 border-b">Made of glass. (material)</td><td className="px-4 py-2 border-b">I need a glass. (drinking vessel)</td></tr>
                  <tr><td className="px-4 py-2 border-b">light</td><td className="px-4 py-2 border-b">The room needs more light.</td><td className="px-4 py-2 border-b">Turn off the lights. (lamps)</td></tr>
                  <tr><td className="px-4 py-2 border-b">chicken</td><td className="px-4 py-2 border-b">I ate chicken. (the meat)</td><td className="px-4 py-2 border-b">We have three chickens. (animals)</td></tr>
                  <tr><td className="px-4 py-2 border-b">time</td><td className="px-4 py-2 border-b">I don't have time. (general)</td><td className="px-4 py-2 border-b">I've been there three times. (occasions)</td></tr>
                </tbody>
              </table>
            </div>

            <ArticleHeading>Common Mistakes to Avoid</ArticleHeading>
            <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 p-4 mb-6 rounded">
              <p className="font-bold text-red-800 dark:text-red-200 mb-3">❌ Frequently Made Errors</p>
              <ul className="text-red-700 dark:text-red-300 ml-4 list-disc space-y-2">
                <li><strong>"an advice" / "advices"</strong> → CORRECT: "some advice" / "pieces of advice"</li>
                <li><strong>"an information" / "informations"</strong> → CORRECT: "some information" / "pieces of information"</li>
                <li><strong>"a homework" / "homeworks"</strong> → CORRECT: "homework" / "homework assignments"</li>
                <li><strong>"a furniture" / "furnitures"</strong> → CORRECT: "some furniture" / "pieces of furniture"</li>
                <li><strong>"many water"</strong> → CORRECT: "much water" or "a lot of water"</li>
                <li><strong>"much books"</strong> → CORRECT: "many books"</li>
                <li><strong>"a news"</strong> → CORRECT: "some news" or "a piece of news"</li>
                <li><strong>"an equipment"</strong> → CORRECT: "equipment" or "a piece of equipment"</li>
              </ul>
            </div>

            <ArticleHeading>Special Cases: Always Uncountable in English</ArticleHeading>
            <ArticleParagraph>
                These nouns are uncountable in English (though they may be countable in other languages):
            </ArticleParagraph>
            <BulletList items={[
                <><strong>advice</strong>, "She gave me good advice." (NOT "advices")</>,
                <><strong>information</strong>, "The information is useful." (NOT "informations")</>,
                <><strong>news</strong>, "The news is shocking." (singular verb!)</>,
                <><strong>furniture</strong>, "The furniture is expensive." (NOT "furnitures")</>,
                <><strong>luggage/baggage</strong>, "My luggage is heavy." (NOT "luggages")</>,
                <><strong>equipment</strong>, "The equipment works well." (NOT "equipments")</>,
                <><strong>homework</strong>, "There's a lot of homework." (NOT "homeworks")</>,
                <><strong>progress</strong>, "We've made good progress." (NOT "progresses")</>,
                <><strong>knowledge</strong>, "Knowledge is power." (NOT "knowledges")</>,
                <><strong>traffic</strong>, "The traffic is terrible." (NOT "traffics")</>
            ]}/>

            <ArticleHeading>Frequently Asked Questions</ArticleHeading>
            <div className="space-y-4 mb-6">
              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700">
                <p className="font-semibold text-slate-800 dark:text-slate-200">Why is "news" singular even though it ends in "s"?</p>
                <p className="text-slate-600 dark:text-slate-400 mt-2">"News" is always treated as an uncountable, singular noun in English. It takes singular verbs: "The news is good" (NOT "The news are good"). Similarly: mathematics, physics, economics are singular despite the -s ending.</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700">
                <p className="font-semibold text-slate-800 dark:text-slate-200">Can I say "waters" or "coffees"?</p>
                <p className="text-slate-600 dark:text-slate-400 mt-2">In some contexts, yes! "Two coffees, please" (meaning two cups) is acceptable. "The waters of the Pacific" (meaning bodies of water) is also correct. However, "I drank much waters" is still incorrect-use "much water."</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700">
                <p className="font-semibold text-slate-800 dark:text-slate-200">What's the difference between "few" and "a few"?</p>
                <p className="text-slate-600 dark:text-slate-400 mt-2">"Few" has a negative connotation (not enough): "Few people came" (disappointing). "A few" is more positive (some): "A few people came" (at least some showed up). Same applies to "little" vs. "a little" for uncountable nouns.</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700">
                <p className="font-semibold text-slate-800 dark:text-slate-200">Is "hair" countable or uncountable?</p>
                <p className="text-slate-600 dark:text-slate-400 mt-2">Both! When referring to all the hair on someone's head, it's uncountable: "Her hair is beautiful." When referring to individual strands, it's countable: "I found two hairs in my food." This dual usage is common with several nouns.</p>
              </div>
            </div>
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
        <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-xl p-5 mb-8">
          <h2 className="font-heading text-lg font-bold text-blue-800 dark:text-blue-300 mb-2">Quick Summary</h2>
          <p className="text-blue-900 dark:text-blue-200 text-base"><strong>Adjectives</strong> describe nouns ("a <em>tall</em> building"). <strong>Adverbs</strong> describe verbs, adjectives, or other adverbs ("she runs <em>quickly</em>"). There are four main adverb types, manner, place, time, and frequency, each with specific placement rules. A common confusion: <strong>good</strong> is an adjective; <strong>well</strong> is an adverb.</p>
        </div>
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

        <ArticleHeading>Related Topics</ArticleHeading>
        <BulletList items={[
          <><Link to="/topics/comparative-superlative/" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800">Comparatives &amp; Superlatives</Link>, Deep dive into comparing things with adjectives and adverbs.</>,
          <><Link to="/writing/how-to-vary-sentence-structure/" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800">Varying Sentence Structure</Link>, Use adjectives and adverbs to add rhythm and variety to your writing.</>,
          <><Link to="/topics/simple-and-complex-sentences/" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800">Simple &amp; Complex Sentences</Link>, Understand how adverbs connect to dependent clauses.</>,
        ]} />

        <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-6 mt-10">
          <h2 className="font-heading text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-slate-700 dark:text-slate-300">What is the difference between an adjective and an adverb?</h3>
              <p className="text-slate-600 dark:text-slate-400 mt-1">An adjective modifies a noun or pronoun ("a <em>fast</em> car"), while an adverb modifies a verb, adjective, or another adverb ("she drives <em>fast</em>"). Many adverbs end in -ly, but not all, "fast," "well," and "hard" are common exceptions.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-700 dark:text-slate-300">What is the difference between "good" and "well"?</h3>
              <p className="text-slate-600 dark:text-slate-400 mt-1">"Good" is an adjective that modifies nouns: "a good job." "Well" is an adverb that modifies verbs: "She did the job well." A common exception: "I feel well" (describing health) vs. "I feel good" (describing mood).</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-700 dark:text-slate-300">Where do adverbs of frequency go in a sentence?</h3>
              <p className="text-slate-600 dark:text-slate-400 mt-1">Adverbs of frequency (always, usually, often, sometimes, never) go <strong>before the main verb</strong> but <strong>after the verb "to be."</strong> Examples: "She always arrives early" but "She is always early."</p>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 'comparative-superlative',
    title: 'Comparatives & Superlatives',
    category: 'Adjectives & Adverbs',
    content: (
      <>
        <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-xl p-5 mb-8">
          <h2 className="font-heading text-lg font-bold text-blue-800 dark:text-blue-300 mb-2">Quick Summary</h2>
          <p className="text-blue-900 dark:text-blue-200 text-base"><strong>Comparatives</strong> compare two things: short adjectives add <em>-er</em> ("taller"), long adjectives use <em>more</em> ("more beautiful"). <strong>Superlatives</strong> compare three or more: short adjectives add <em>-est</em> ("tallest"), long adjectives use <em>most</em> ("most beautiful"). Key irregular forms: good → better → best, bad → worse → worst.</p>
        </div>
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

        <ArticleHeading>Related Topics</ArticleHeading>
        <BulletList items={[
          <><Link to="/topics/adjectives-adverbs/" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800">Adjectives &amp; Adverbs</Link>, Review the basics of adjectives and adverbs before comparing them.</>,
          <><Link to="/topics/few-little-less-fewer/" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800">Few vs Little, Less vs Fewer</Link>, Related comparison words that follow different rules.</>,
          <><Link to="/commonly-confused-words/" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800">Commonly Confused Words</Link>, Avoid mixing up similar-sounding comparative forms.</>,
        ]} />

        <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-6 mt-10">
          <h2 className="font-heading text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-slate-700 dark:text-slate-300">What is a comparative adjective?</h3>
              <p className="text-slate-600 dark:text-slate-400 mt-1">A comparative adjective compares two things. For short adjectives, add -er ("taller"). For longer adjectives (2+ syllables), use "more" ("more interesting"). Always use "than" when stating the comparison: "She is taller than her sister."</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-700 dark:text-slate-300">What is a superlative adjective?</h3>
              <p className="text-slate-600 dark:text-slate-400 mt-1">A superlative adjective identifies the extreme degree among three or more items. Short adjectives take -est ("the tallest"), longer ones use "most" ("the most interesting"). Always precede with "the": "He is the tallest student in the class."</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-700 dark:text-slate-300">Why can't I say "more better" or "most best"?</h3>
              <p className="text-slate-600 dark:text-slate-400 mt-1">"Better" and "best" are already the comparative and superlative forms of "good." Adding "more" or "most" creates a double comparison, which is grammatically incorrect. The same applies to "worse/worst" (bad) and "farther/farthest" (far).</p>
            </div>
          </div>
        </div>
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
            <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-4 mb-6 rounded-r">
              <p className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Quick Summary</p>
              <p className="text-blue-700 dark:text-blue-300 text-sm">Modal verbs (can, could, may, might, must, shall, should, will, would) are auxiliary verbs that express ability, possibility, permission, obligation, or necessity. They follow special grammar rules and are essential for nuanced communication in English.</p>
            </div>

            <ArticleParagraph>
                Modal verbs are a special class of auxiliary (helping) verbs that modify the main verb to express various meanings such as ability, permission, possibility, obligation, and willingness. Unlike regular verbs, modals have unique grammatical properties that make them distinct. Mastering modal verbs is essential for expressing subtle shades of meaning in English.
            </ArticleParagraph>

            <ArticleHeading>Key Characteristics of Modal Verbs</ArticleHeading>
            <BulletList items={[
                <><strong>Followed by base form:</strong> Modal + base verb (no "to"): "She can swim" (NOT "can to swim")</>,
                <><strong>No -s in third person:</strong> "He can" (NOT "He cans"), "She must" (NOT "She musts")</>,
                <><strong>No infinitive or -ing form:</strong> No "to can," "to must," "canning," or "musting"</>,
                <><strong>Questions by inversion:</strong> "Can you help?" (NOT "Do you can help?")</>,
                <><strong>Negatives without "do":</strong> "You cannot" / "You can't" (NOT "You don't can")</>
            ]}/>

            <ArticleHeading>The Nine Core Modal Verbs</ArticleHeading>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded">
                <thead className="bg-slate-100 dark:bg-slate-700">
                  <tr>
                    <th className="px-4 py-2 border-b text-left text-slate-800 dark:text-slate-200">Modal</th>
                    <th className="px-4 py-2 border-b text-left text-slate-800 dark:text-slate-200">Primary Use</th>
                    <th className="px-4 py-2 border-b text-left text-slate-800 dark:text-slate-200">Example</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700 dark:text-slate-300">
                  <tr><td className="px-4 py-2 border-b">can</td><td className="px-4 py-2 border-b">ability, permission</td><td className="px-4 py-2 border-b">I can swim. Can I help?</td></tr>
                  <tr><td className="px-4 py-2 border-b">could</td><td className="px-4 py-2 border-b">past ability, polite requests</td><td className="px-4 py-2 border-b">I could swim as a child.</td></tr>
                  <tr><td className="px-4 py-2 border-b">may</td><td className="px-4 py-2 border-b">permission, possibility</td><td className="px-4 py-2 border-b">You may leave. It may rain.</td></tr>
                  <tr><td className="px-4 py-2 border-b">might</td><td className="px-4 py-2 border-b">possibility (less certain)</td><td className="px-4 py-2 border-b">It might rain later.</td></tr>
                  <tr><td className="px-4 py-2 border-b">must</td><td className="px-4 py-2 border-b">obligation, logical conclusion</td><td className="px-4 py-2 border-b">You must stop. She must be tired.</td></tr>
                  <tr><td className="px-4 py-2 border-b">shall</td><td className="px-4 py-2 border-b">future (formal), offers</td><td className="px-4 py-2 border-b">Shall I open the window?</td></tr>
                  <tr><td className="px-4 py-2 border-b">should</td><td className="px-4 py-2 border-b">advice, expectation</td><td className="px-4 py-2 border-b">You should rest. It should work.</td></tr>
                  <tr><td className="px-4 py-2 border-b">will</td><td className="px-4 py-2 border-b">future, willingness</td><td className="px-4 py-2 border-b">I will call you. Will you help?</td></tr>
                  <tr><td className="px-4 py-2 border-b">would</td><td className="px-4 py-2 border-b">conditional, polite requests</td><td className="px-4 py-2 border-b">I would go if I could.</td></tr>
                </tbody>
              </table>
            </div>

            <ArticleHeading>1. Ability: Can, Could, Be Able To</ArticleHeading>
            <ArticleParagraph><strong>Can</strong>, present ability:</ArticleParagraph>
            <ExampleList items={[
                "I can speak three languages.",
                "She can play the piano beautifully.",
                "Can you see that sign from here?"
            ]} />

            <ArticleParagraph><strong>Could</strong>, past ability (general) or present possibility:</ArticleParagraph>
            <ExampleList items={[
                "I could swim when I was five. (past ability)",
                "She could read before starting school.",
                "You could try calling them again. (suggestion/possibility)"
            ]} />

            <ArticleParagraph><strong>Be able to</strong>, used when modals can't work (with other modals, in infinitives):</ArticleParagraph>
            <ExampleList items={[
                "I will be able to help tomorrow. (future ability)",
                "She has been able to finish the project. (present perfect)",
                "I'd like to be able to speak Spanish. (infinitive)"
            ]} />

            <ArticleHeading>2. Permission: Can, Could, May</ArticleHeading>
            <ArticleParagraph>These modals are used to ask for or grant permission, with varying levels of formality:</ArticleParagraph>
            <ExampleList items={[
                "Can I borrow your pen? (informal)",
                "Could I use your phone? (more polite)",
                "May I ask a question? (formal/polite)",
                "You can leave early today. (giving permission)",
                "Students may not use phones during exams. (formal rule)"
            ]} />

            <div className="bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-700 p-4 mb-6 rounded">
              <p className="font-bold text-teal-800 dark:text-teal-200 mb-2">💡 Formality Scale for Permission</p>
              <p className="text-teal-700 dark:text-teal-300">Can (informal) → Could (polite) → May (formal)</p>
              <p className="text-teal-700 dark:text-teal-300 mt-2">"Can I..." is fine with friends. "May I..." is best in formal situations.</p>
            </div>

            <ArticleHeading>3. Possibility: May, Might, Could</ArticleHeading>
            <ArticleParagraph>These modals express how certain we are about something:</ArticleParagraph>
            <ExampleList items={[
                "It may rain tomorrow. (possible, ~50%)",
                "She might be at home. (possible but less certain)",
                "He could be stuck in traffic. (possible explanation)",
                "They may not come to the party. (possible negative)"
            ]} />

            <ArticleParagraph><strong>Certainty scale:</strong></ArticleParagraph>
            <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700 mb-6">
              <p className="text-slate-700 dark:text-slate-300">will (100%) → must (95%) → should (80%) → may (50%) → might/could (30%)</p>
              <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm">"She will be there" = certainty | "She might be there" = less likely</p>
            </div>

            <ArticleHeading>4. Obligation & Necessity: Must, Have To, Should</ArticleHeading>
            <ArticleParagraph><strong>Must</strong>, strong obligation (often internal or rules):</ArticleParagraph>
            <ExampleList items={[
                "You must wear a seatbelt. (law/rule)",
                "I must finish this report today. (personal obligation)",
                "Passengers must fasten their seatbelts."
            ]} />

            <ArticleParagraph><strong>Have to</strong>, obligation (often external):</ArticleParagraph>
            <ExampleList items={[
                "I have to work tomorrow. (external requirement)",
                "She has to take medicine every day.",
                "Do you have to leave so early?"
            ]} />

            <ArticleParagraph><strong>Should</strong>, advice or expectation:</ArticleParagraph>
            <ExampleList items={[
                "You should see a doctor. (advice)",
                "He should arrive by 6:00. (expectation)",
                "Students should study regularly."
            ]} />

            <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700 mb-6">
              <p className="font-bold text-slate-800 dark:text-slate-200 mb-2">Must vs. Have to: The Negative Difference</p>
              <p className="text-slate-700 dark:text-slate-300"><strong>must not</strong> = prohibition (don't do it!): "You must not smoke here."</p>
              <p className="text-slate-700 dark:text-slate-300 mt-2"><strong>don't have to</strong> = no obligation (optional): "You don't have to come."</p>
            </div>

            <ArticleHeading>5. Logical Deduction: Must, Can't, Should</ArticleHeading>
            <ArticleParagraph>Use modals to make logical conclusions based on evidence:</ArticleParagraph>
            <ExampleList items={[
                "She must be tired. She worked 12 hours. (logical conclusion, almost certain)",
                "That can't be true! (impossibility)",
                "He can't be at work. His car is here.",
                "They should be home by now. (expectation based on logic)"
            ]} />

            <ArticleHeading>6. Requests & Offers: Can, Could, Will, Would, Shall</ArticleHeading>
            <ArticleParagraph><strong>Requests:</strong></ArticleParagraph>
            <ExampleList items={[
                "Can you help me? (informal)",
                "Could you open the door? (polite)",
                "Will you pass the salt? (direct)",
                "Would you mind waiting? (very polite)"
            ]} />

            <ArticleParagraph><strong>Offers:</strong></ArticleParagraph>
            <ExampleList items={[
                "Can I help you with that?",
                "Shall I carry your bags?",
                "Would you like some tea?"
            ]} />

            <ArticleHeading>7. Conditional Sentences with Modals</ArticleHeading>
            <ExampleList items={[
                "If it rains, we will stay home. (real condition)",
                "If I won the lottery, I would travel the world. (hypothetical)",
                "If she studied harder, she could pass. (hypothetical ability)",
                "If I were you, I would apologize. (advice)"
            ]} />

            <ArticleHeading>Modal Verbs in the Past</ArticleHeading>
            <ArticleParagraph>
                To talk about the past, use modal + have + past participle:
            </ArticleParagraph>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded">
                <thead className="bg-slate-100 dark:bg-slate-700">
                  <tr>
                    <th className="px-4 py-2 border-b text-left text-slate-800 dark:text-slate-200">Structure</th>
                    <th className="px-4 py-2 border-b text-left text-slate-800 dark:text-slate-200">Meaning</th>
                    <th className="px-4 py-2 border-b text-left text-slate-800 dark:text-slate-200">Example</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700 dark:text-slate-300">
                  <tr><td className="px-4 py-2 border-b">must have + pp</td><td className="px-4 py-2 border-b">Logical conclusion (past)</td><td className="px-4 py-2 border-b">She must have left already.</td></tr>
                  <tr><td className="px-4 py-2 border-b">might have + pp</td><td className="px-4 py-2 border-b">Past possibility</td><td className="px-4 py-2 border-b">He might have forgotten.</td></tr>
                  <tr><td className="px-4 py-2 border-b">could have + pp</td><td className="px-4 py-2 border-b">Past ability / possibility</td><td className="px-4 py-2 border-b">I could have helped but wasn't asked.</td></tr>
                  <tr><td className="px-4 py-2 border-b">should have + pp</td><td className="px-4 py-2 border-b">Regret / criticism</td><td className="px-4 py-2 border-b">You should have called me!</td></tr>
                  <tr><td className="px-4 py-2 border-b">would have + pp</td><td className="px-4 py-2 border-b">Hypothetical past</td><td className="px-4 py-2 border-b">I would have gone if I had known.</td></tr>
                </tbody>
              </table>
            </div>

            <ArticleHeading>Common Mistakes to Avoid</ArticleHeading>
            <BulletList items={[
                <><strong>"I can to swim"</strong> → CORRECT: "I can swim" (no "to" after modals)</>,
                <><strong>"She musts go"</strong> → CORRECT: "She must go" (no -s in third person)</>,
                <><strong>"Do you can help?"</strong> → CORRECT: "Can you help?" (invert subject and modal)</>,
                <><strong>"I must to finish"</strong> → CORRECT: "I must finish"</>,
                <><strong>"You don't must go"</strong> → CORRECT: "You must not go" or "You don't have to go"</>
            ]}/>

            <ArticleHeading>Frequently Asked Questions</ArticleHeading>
            <div className="space-y-4 mb-6">
              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700">
                <p className="font-semibold text-slate-800 dark:text-slate-200">What's the difference between "must" and "have to"?</p>
                <p className="text-slate-600 dark:text-slate-400 mt-2">"Must" often expresses internal obligation or rules: "I must study" (my decision). "Have to" often expresses external obligation: "I have to work" (my boss requires it). In negatives, they differ greatly: "must not" = prohibited; "don't have to" = not necessary.</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700">
                <p className="font-semibold text-slate-800 dark:text-slate-200">Can I use "may" for ability?</p>
                <p className="text-slate-600 dark:text-slate-400 mt-2">No! "May" is for permission or possibility, not ability. Use "can" for ability: "I can swim" (NOT "I may swim" for ability). "May I swim?" is asking permission.</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700">
                <p className="font-semibold text-slate-800 dark:text-slate-200">When do I use "shall"?</p>
                <p className="text-slate-600 dark:text-slate-400 mt-2">"Shall" is somewhat formal and less common in American English. It's used for offers/suggestions with "I" or "we": "Shall I help?" "Shall we go?" In legal/formal documents, it indicates obligation: "The tenant shall pay rent monthly."</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700">
                <p className="font-semibold text-slate-800 dark:text-slate-200">How do I express past ability for a specific action?</p>
                <p className="text-slate-600 dark:text-slate-400 mt-2">Use "was able to" or "managed to" for specific achievements: "I was able to finish the exam" (I succeeded). "Could" is for general past ability: "I could swim when I was young" (general skill).</p>
              </div>
            </div>
        </>
    )
  },
  {
    id: 'gerunds-infinitives',
    title: 'Gerunds & Infinitives',
    category: 'Verbs',
    content: (
      <>
        <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-4 mb-6 rounded-r">
          <p className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Quick Summary</p>
          <p className="text-blue-700 dark:text-blue-300 text-sm">Gerunds (-ing form as noun) and infinitives (to + verb) are verb forms that function as nouns. Some verbs take gerunds only (enjoy reading), some take infinitives only (decide to go), and some take both (love reading/to read).</p>
        </div>

        <ArticleParagraph>
          Gerunds and infinitives are two verb forms that can function as nouns in sentences. One of the trickiest aspects of English grammar is knowing which form to use after certain verbs, as there's no universal rule-you often have to memorize which verbs take which form. However, understanding patterns and practicing common combinations will help you master this challenging area.
        </ArticleParagraph>

        <ArticleHeading>What Are Gerunds?</ArticleHeading>
        <ArticleParagraph>
          A <strong>gerund</strong> is the <strong>-ing form</strong> of a verb used as a noun. Despite looking like a present participle (verb + ing), it functions grammatically as a noun.
        </ArticleParagraph>
        <ExampleList items={[
            "Swimming is great exercise. (subject)",
            "I enjoy reading novels. (object of verb)",
            "She's interested in learning Japanese. (object of preposition)",
            "His favorite activity is cooking. (subject complement)"
        ]} />

        <ArticleHeading>Gerund Uses</ArticleHeading>
        <ArticleParagraph><strong>1. As the Subject of a Sentence:</strong></ArticleParagraph>
        <ExampleList items={[
            "Smoking is bad for your health.",
            "Learning a new language takes time.",
            "Running every day keeps me fit.",
            "Cooking at home saves money."
        ]} />

        <ArticleParagraph><strong>2. As the Object of Certain Verbs:</strong></ArticleParagraph>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded">
            <thead className="bg-slate-100 dark:bg-slate-700">
              <tr>
                <th className="px-4 py-2 border-b text-left text-slate-800 dark:text-slate-200" colSpan={4}>Verbs Followed by Gerunds</th>
              </tr>
            </thead>
            <tbody className="text-slate-700 dark:text-slate-300">
              <tr><td className="px-4 py-2 border-b">enjoy</td><td className="px-4 py-2 border-b">avoid</td><td className="px-4 py-2 border-b">finish</td><td className="px-4 py-2 border-b">mind</td></tr>
              <tr><td className="px-4 py-2 border-b">suggest</td><td className="px-4 py-2 border-b">consider</td><td className="px-4 py-2 border-b">practice</td><td className="px-4 py-2 border-b">deny</td></tr>
              <tr><td className="px-4 py-2 border-b">admit</td><td className="px-4 py-2 border-b">discuss</td><td className="px-4 py-2 border-b">keep</td><td className="px-4 py-2 border-b">quit</td></tr>
              <tr><td className="px-4 py-2 border-b">risk</td><td className="px-4 py-2 border-b">miss</td><td className="px-4 py-2 border-b">postpone</td><td className="px-4 py-2 border-b">imagine</td></tr>
              <tr><td className="px-4 py-2 border-b">understand</td><td className="px-4 py-2 border-b">appreciate</td><td className="px-4 py-2 border-b">delay</td><td className="px-4 py-2 border-b">resist</td></tr>
            </tbody>
          </table>
        </div>
        <ExampleList items={[
            "I enjoy dancing at parties.",
            "She avoids eating junk food.",
            "They finished cleaning the house.",
            "Would you mind closing the window?",
            "He denied stealing the money."
        ]} />

        <ArticleParagraph><strong>3. After Prepositions:</strong></ArticleParagraph>
        <ArticleParagraph>Gerunds ALWAYS follow prepositions-never infinitives.</ArticleParagraph>
        <ExampleList items={[
            "I'm interested in learning more. (NOT: in to learn)",
            "She's good at playing tennis.",
            "Thank you for helping me.",
            "He apologized for being late.",
            "They're thinking about moving abroad.",
            "We talked about starting a business."
        ]} />

        <ArticleParagraph><strong>4. After Certain Expressions:</strong></ArticleParagraph>
        <ExampleList items={[
            "It's no use crying over spilled milk.",
            "It's worth visiting that museum.",
            "I can't help laughing at his jokes.",
            "Have difficulty/trouble understanding",
            "Spend time reading",
            "Be busy working"
        ]} />

        <ArticleHeading>What Are Infinitives?</ArticleHeading>
        <ArticleParagraph>
          An <strong>infinitive</strong> is <strong>to + base verb</strong>. It can function as a noun, adjective, or adverb.
        </ArticleParagraph>
        <ExampleList items={[
            "To err is human. (subject, formal)",
            "She wants to leave early. (object of verb)",
            "He has a lot of work to do. (adjective, modifying 'work')",
            "I went to the store to buy milk. (adverb, showing purpose)"
        ]} />

        <ArticleHeading>Infinitive Uses</ArticleHeading>
        <ArticleParagraph><strong>1. After Certain Verbs:</strong></ArticleParagraph>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded">
            <thead className="bg-slate-100 dark:bg-slate-700">
              <tr>
                <th className="px-4 py-2 border-b text-left text-slate-800 dark:text-slate-200" colSpan={4}>Verbs Followed by Infinitives</th>
              </tr>
            </thead>
            <tbody className="text-slate-700 dark:text-slate-300">
              <tr><td className="px-4 py-2 border-b">want</td><td className="px-4 py-2 border-b">decide</td><td className="px-4 py-2 border-b">hope</td><td className="px-4 py-2 border-b">plan</td></tr>
              <tr><td className="px-4 py-2 border-b">need</td><td className="px-4 py-2 border-b">expect</td><td className="px-4 py-2 border-b">promise</td><td className="px-4 py-2 border-b">agree</td></tr>
              <tr><td className="px-4 py-2 border-b">refuse</td><td className="px-4 py-2 border-b">learn</td><td className="px-4 py-2 border-b">afford</td><td className="px-4 py-2 border-b">choose</td></tr>
              <tr><td className="px-4 py-2 border-b">offer</td><td className="px-4 py-2 border-b">pretend</td><td className="px-4 py-2 border-b">seem</td><td className="px-4 py-2 border-b">appear</td></tr>
              <tr><td className="px-4 py-2 border-b">manage</td><td className="px-4 py-2 border-b">threaten</td><td className="px-4 py-2 border-b">tend</td><td className="px-4 py-2 border-b">fail</td></tr>
            </tbody>
          </table>
        </div>
        <ExampleList items={[
            "She wants to travel the world.",
            "We decided to stay home.",
            "He hopes to become a doctor.",
            "They agreed to help us.",
            "I can't afford to buy a new car."
        ]} />

        <ArticleParagraph><strong>2. After Adjectives:</strong></ArticleParagraph>
        <ExampleList items={[
            "It is important to be on time.",
            "I'm happy to help you.",
            "She was sad to hear the news.",
            "He's ready to go.",
            "The book is easy to read."
        ]} />

        <ArticleParagraph><strong>3. To Express Purpose (Why?):</strong></ArticleParagraph>
        <ExampleList items={[
            "I went to the store to buy groceries.",
            "She called to ask about the meeting.",
            "He's saving money to buy a house.",
            "We stopped to take a break."
        ]} />

        <ArticleParagraph><strong>4. After Question Words:</strong></ArticleParagraph>
        <ExampleList items={[
            "I don't know what to do.",
            "Can you tell me how to get there?",
            "She asked where to park.",
            "We haven't decided when to leave."
        ]} />

        <ArticleHeading>Verbs That Take Both (with Same Meaning)</ArticleHeading>
        <ArticleParagraph>Some verbs can use either gerund or infinitive with little or no difference in meaning:</ArticleParagraph>
        <ExampleList items={[
            "I love swimming. / I love to swim.",
            "She likes reading. / She likes to read.",
            "He hates waiting. / He hates to wait.",
            "They prefer walking. / They prefer to walk.",
            "We started learning. / We started to learn."
        ]} />

        <ArticleHeading>Verbs That Take Both (with Different Meanings)</ArticleHeading>
        <div className="bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-700 p-4 mb-6 rounded">
          <p className="font-bold text-teal-800 dark:text-teal-200 mb-3">⚠️ Critical Differences</p>
          
          <p className="text-teal-700 dark:text-teal-300 font-semibold">STOP:</p>
          <p className="text-teal-700 dark:text-teal-300 mb-2">• "I stopped smoking" = I quit the habit</p>
          <p className="text-teal-700 dark:text-teal-300 mb-3">• "I stopped to smoke" = I paused in order to smoke</p>

          <p className="text-teal-700 dark:text-teal-300 font-semibold">REMEMBER:</p>
          <p className="text-teal-700 dark:text-teal-300 mb-2">• "I remember locking the door" = I have a memory of doing it</p>
          <p className="text-teal-700 dark:text-teal-300 mb-3">• "I remembered to lock the door" = I didn't forget to do it</p>

          <p className="text-teal-700 dark:text-teal-300 font-semibold">FORGET:</p>
          <p className="text-teal-700 dark:text-teal-300 mb-2">• "I'll never forget meeting you" = memory of past event</p>
          <p className="text-teal-700 dark:text-teal-300 mb-3">• "I forgot to meet him" = I didn't do it</p>

          <p className="text-teal-700 dark:text-teal-300 font-semibold">TRY:</p>
          <p className="text-teal-700 dark:text-teal-300 mb-2">• "Try eating less sugar" = experiment with this method</p>
          <p className="text-teal-700 dark:text-teal-300 mb-3">• "Try to eat less sugar" = make an effort</p>

          <p className="text-teal-700 dark:text-teal-300 font-semibold">REGRET:</p>
          <p className="text-teal-700 dark:text-teal-300 mb-2">• "I regret telling him" = I wish I hadn't told him</p>
          <p className="text-teal-700 dark:text-teal-300">• "I regret to tell you..." = I'm sorry to inform you (formal)</p>
        </div>

        <ArticleHeading>Bare Infinitives (Without "To")</ArticleHeading>
        <ArticleParagraph>Some verbs take infinitives without "to" (bare infinitives):</ArticleParagraph>
        <BulletList items={[
            <><strong>Modal verbs:</strong> can, could, will, would, shall, should, may, might, must<br/>"I can swim" (NOT: can to swim)</>,
            <><strong>Make and let:</strong> "She made me laugh" / "Let me help you"</>,
            <><strong>Help:</strong> "Help me carry this" OR "Help me to carry this" (both acceptable)</>,
            <><strong>Perception verbs:</strong> see, hear, watch, feel<br/>"I saw him leave" / "I heard her sing"</>
        ]}/>

        <ArticleHeading>Common Mistakes to Avoid</ArticleHeading>
        <BulletList items={[
            <><strong>"I enjoy to swim"</strong> → CORRECT: "I enjoy swimming" (enjoy + gerund only)</>,
            <><strong>"She wants learning"</strong> → CORRECT: "She wants to learn" (want + infinitive only)</>,
            <><strong>"I'm interested in to learn"</strong> → CORRECT: "I'm interested in learning" (preposition + gerund)</>,
            <><strong>"I decided going"</strong> → CORRECT: "I decided to go" (decide + infinitive)</>,
            <><strong>"She suggested to go"</strong> → CORRECT: "She suggested going" (suggest + gerund)</>
        ]}/>

        <ArticleHeading>Memory Tips</ArticleHeading>
        <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700 mb-6">
          <p className="font-bold text-slate-800 dark:text-slate-200 mb-2">Helpful Patterns:</p>
          <p className="text-slate-700 dark:text-slate-300 mb-2">• <strong>GEMS verbs</strong> = Gerund: Give up, Enjoy, Miss, Suggest</p>
          <p className="text-slate-700 dark:text-slate-300 mb-2">• <strong>After prepositions</strong> = Always gerund</p>
          <p className="text-slate-700 dark:text-slate-300 mb-2">• <strong>Future/intention verbs</strong> (want, hope, decide, plan, promise) = Usually infinitive</p>
          <p className="text-slate-700 dark:text-slate-300">• <strong>Mental process verbs</strong> (enjoy, consider, imagine) = Usually gerund</p>
        </div>

        <ArticleHeading>Frequently Asked Questions</ArticleHeading>
        <div className="space-y-4 mb-6">
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700">
            <p className="font-semibold text-slate-800 dark:text-slate-200">Is there a simple rule for gerund vs. infinitive?</p>
            <p className="text-slate-600 dark:text-slate-400 mt-2">Unfortunately, no universal rule exists. Some patterns help: prepositions always take gerunds; many future-oriented verbs (want, hope, plan) take infinitives. But ultimately, you need to learn common verb + gerund/infinitive combinations through practice.</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700">
            <p className="font-semibold text-slate-800 dark:text-slate-200">What's the difference between "I like swimming" and "I like to swim"?</p>
            <p className="text-slate-600 dark:text-slate-400 mt-2">With "like," "love," "hate," and "prefer," the difference is minimal. Some say the gerund emphasizes enjoyment of the activity itself, while the infinitive emphasizes the choice or habit. In practice, they're often interchangeable.</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700">
            <p className="font-semibold text-slate-800 dark:text-slate-200">Why can't I say "I want going"?</p>
            <p className="text-slate-600 dark:text-slate-400 mt-2">"Want" refers to a desire for future action. Verbs expressing future intentions, desires, or decisions typically take infinitives. There's no deep grammatical reason-it's just how English evolved.</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700">
            <p className="font-semibold text-slate-800 dark:text-slate-200">Is "help to do" or "help do" correct?</p>
            <p className="text-slate-600 dark:text-slate-400 mt-2">Both are correct! "Help" can take either an infinitive or bare infinitive. "Can you help me to carry this?" and "Can you help me carry this?" are equally valid.</p>
          </div>
        </div>
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
            Prepositions often don't translate directly between languages, so learning them in context is crucial. Pay attention to prepositions in the phrases and expressions you encounter. Create a personal list of common prepositional phrases you need for your own communication. Remember that some verbs and adjectives always pair with specific prepositions-these combinations must be memorized.
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
        <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-xl p-5 mb-8">
          <h2 className="font-heading text-lg font-bold text-blue-800 dark:text-blue-300 mb-2">Quick Summary</h2>
          <p className="text-blue-900 dark:text-blue-200 text-base">In the <strong>passive voice</strong>, the subject receives the action instead of performing it. It is formed with <strong>to be + past participle</strong>. Use it when the doer is unknown, unimportant, or obvious. Example: <em>"The report was written by John."</em></p>
        </div>
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

        <ArticleHeading>Related Topics</ArticleHeading>
        <BulletList items={[
          <><Link to="/topics/direct-and-indirect-speech/" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800">Direct &amp; Indirect Speech</Link>, Learn how reported speech interacts with passive constructions.</>,
          <><Link to="/topics/subject-verb-agreement/" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800">Subject-Verb Agreement</Link>, Ensure the verb agrees with the subject in passive sentences.</>,
          <><Link to="/topics/simple-and-complex-sentences/" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800">Simple &amp; Complex Sentences</Link>, Combine passive voice with complex sentence structures.</>,
          <><Link to="/writing/how-to-vary-sentence-structure/" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800">Varying Sentence Structure</Link>, Use passive voice as a tool to vary your writing style.</>,
        ]} />

        <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-6 mt-10">
          <h2 className="font-heading text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-slate-700 dark:text-slate-300">When should I use the passive voice?</h3>
              <p className="text-slate-600 dark:text-slate-400 mt-1">Use the passive voice when the doer of the action is unknown, unimportant, or obvious. It is also used in formal writing, especially scientific and academic texts, to focus on the action or result rather than who performed it.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-700 dark:text-slate-300">How do I convert active voice to passive voice?</h3>
              <p className="text-slate-600 dark:text-slate-400 mt-1">Move the object of the active sentence to the subject position, use the appropriate form of "to be" plus the past participle of the main verb, and optionally add "by + agent." Example: "John writes the report" → "The report is written by John."</p>
            </div>
          </div>
        </div>
      </>
    )
  },
  {
    id: 'subject-verb-agreement',
    title: 'Subject-Verb Agreement',
    category: 'Sentence Structure',
    content: (
      <>
        <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-xl p-5 mb-8">
          <h2 className="font-heading text-lg font-bold text-blue-800 dark:text-blue-300 mb-2">Quick Summary</h2>
          <p className="text-blue-900 dark:text-blue-200 text-base"><strong>Subject-verb agreement</strong> means singular subjects take singular verbs and plural subjects take plural verbs. Tricky cases include compound subjects with "and/or," collective nouns, and indefinite pronouns like "everyone."</p>
        </div>
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

        <ArticleHeading>Related Topics</ArticleHeading>
        <BulletList items={[
          <><Link to="/topics/passive-voice/" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800">Passive Voice</Link>, Agreement becomes trickier in passive constructions.</>,
          <><Link to="/topics/sentence-fragments/" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800">Sentence Fragments</Link>, Missing verbs lead to both fragments and agreement errors.</>,
          <><Link to="/topics/simple-and-complex-sentences/" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800">Simple &amp; Complex Sentences</Link>, Understand clauses where agreement rules apply.</>,
        ]} />

        <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-6 mt-10">
          <h2 className="font-heading text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-slate-700 dark:text-slate-300">What is subject-verb agreement?</h3>
              <p className="text-slate-600 dark:text-slate-400 mt-1">Subject-verb agreement is the grammar rule that the verb in a sentence must match the subject in number. A singular subject takes a singular verb ("she runs"), and a plural subject takes a plural verb ("they run").</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-700 dark:text-slate-300">Is "everyone" singular or plural?</h3>
              <p className="text-slate-600 dark:text-slate-400 mt-1">"Everyone" is grammatically singular, so it takes a singular verb: "Everyone is here," not "Everyone are here." The same applies to "everybody," "someone," "nobody," and "each."</p>
            </div>
          </div>
        </div>
      </>
    )
  },
  {
    id: 'question-formation',
    title: 'Question Formation',
    category: 'Sentence Structure',
    content: (
      <>
        <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-xl p-5 mb-8">
          <h2 className="font-heading text-lg font-bold text-blue-800 dark:text-blue-300 mb-2">Quick Summary</h2>
          <p className="text-blue-900 dark:text-blue-200 text-base">English has four main question types: <strong>Yes/No questions</strong> (invert subject + auxiliary), <strong>Wh- questions</strong> (question word + auxiliary + subject), <strong>Tag questions</strong> (statement + opposite-polarity tag), and <strong>Indirect questions</strong> (polite phrasing with normal word order).</p>
        </div>
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

        <ArticleHeading>Related Topics</ArticleHeading>
        <BulletList items={[
          <><Link to="/topics/reported-speech/" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800">Reported Speech</Link>, Learn how questions change in indirect/reported speech.</>,
          <><Link to="/topics/direct-and-indirect-speech/" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800">Direct &amp; Indirect Speech</Link>, Understand quoting vs reporting questions.</>,
          <><Link to="/topics/subject-verb-agreement/" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800">Subject-Verb Agreement</Link>, Ensure correct agreement in question forms.</>,
          <><Link to="/writing/how-to-vary-sentence-structure/" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800">Varying Sentence Structure</Link>, Use questions to add variety to your writing.</>,
        ]} />

        <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-6 mt-10">
          <h2 className="font-heading text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-slate-700 dark:text-slate-300">What is the difference between a subject question and an object question?</h3>
              <p className="text-slate-600 dark:text-slate-400 mt-1">In a subject question, the question word replaces the subject, so no auxiliary "do" is needed: "Who called you?" In an object question, the question word replaces the object, and you need an auxiliary: "Who did you call?"</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-700 dark:text-slate-300">What are indirect questions and when should I use them?</h3>
              <p className="text-slate-600 dark:text-slate-400 mt-1">Indirect questions are polite forms that use normal word order (subject + verb) after phrases like "Can you tell me..." or "Do you know...". Use them in formal situations or when speaking to strangers.</p>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 'reported-speech',
    title: 'Reported Speech',
    category: 'Sentence Structure',
    content: (
      <>
        <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-xl p-5 mb-8">
          <h2 className="font-heading text-lg font-bold text-blue-800 dark:text-blue-300 mb-2">Quick Summary</h2>
          <p className="text-blue-900 dark:text-blue-200 text-base"><strong>Reported speech</strong> (indirect speech) is used to relay what someone said. It requires <strong>tense backshift</strong> (present → past, past → past perfect), plus pronoun and time-expression changes. Example: <em>"I am happy" → He said he was happy.</em></p>
        </div>
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

        <ArticleHeading>Related Topics</ArticleHeading>
        <BulletList items={[
          <><Link to="/topics/direct-and-indirect-speech/" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800">Direct &amp; Indirect Speech</Link>, Compare quoted speech with reported speech in detail.</>,
          <><Link to="/topics/question-formation/" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800">Question Formation</Link>, Understand how question structure changes in reported speech.</>,
          <><Link to="/topics/passive-voice/" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800">Passive Voice</Link>, Learn how passive sentences are reported.</>,
        ]} />

        <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-6 mt-10">
          <h2 className="font-heading text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-slate-700 dark:text-slate-300">What is tense backshift in reported speech?</h3>
              <p className="text-slate-600 dark:text-slate-400 mt-1">Tense backshift means shifting the verb one step into the past when the reporting verb ("said," "told") is in the past tense. Present simple becomes past simple, past simple becomes past perfect, and so on.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-700 dark:text-slate-300">Do I always need to backshift the tense?</h3>
              <p className="text-slate-600 dark:text-slate-400 mt-1">No. If the reporting verb is in the present tense ("He says..."), no backshift is needed. Also, if the reported information is still true, backshift is optional: "She said the earth is/was round."</p>
            </div>
          </div>
        </div>
      </>
    )
  },
  {
    id: 'direct-and-indirect-speech',
    title: 'Direct & Indirect Speech',
    category: 'Sentence Structure',
    content: (
      <>
        <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-xl p-5 mb-8">
          <h2 className="font-heading text-lg font-bold text-blue-800 dark:text-blue-300 mb-2">Quick Summary</h2>
          <p className="text-blue-900 dark:text-blue-200 text-base"><strong>Direct speech</strong> quotes the speaker's exact words in quotation marks. <strong>Indirect speech</strong> reports the meaning without quotation marks, often requiring tense, pronoun, and time changes. Example: <em>"I am going" → She said she was going.</em></p>
        </div>
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

        <ArticleHeading>Related Topics</ArticleHeading>
        <BulletList items={[
          <><Link to="/topics/reported-speech/" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800">Reported Speech</Link>, Deep dive into tense backshift rules and more examples.</>,
          <><Link to="/topics/question-formation/" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800">Question Formation</Link>, Learn how to report questions using indirect speech.</>,
          <><Link to="/topics/passive-voice/" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800">Passive Voice</Link>, Combine passive constructions with direct and indirect speech.</>,
          <><Link to="/writing/how-to-vary-sentence-structure/" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800">Varying Sentence Structure</Link>, Use direct and indirect speech to add variety to your writing.</>,
        ]} />

        <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-6 mt-10">
          <h2 className="font-heading text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-slate-700 dark:text-slate-300">What is the difference between direct and indirect speech?</h3>
              <p className="text-slate-600 dark:text-slate-400 mt-1">Direct speech quotes the speaker's exact words inside quotation marks ("I am happy"). Indirect speech reports the meaning without quotation marks, with grammatical changes (He said he was happy).</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-700 dark:text-slate-300">When should I use direct speech vs indirect speech?</h3>
              <p className="text-slate-600 dark:text-slate-400 mt-1">Use direct speech in stories, journalism, or when the exact words matter. Use indirect speech in essays, reports, and everyday conversation when paraphrasing someone's message.</p>
            </div>
          </div>
        </div>
      </>
    )
  },
  {
    id: 'sentence-fragments',
    title: 'Sentence Fragments',
    category: 'Sentence Structure',
    content: (
      <>
        <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-xl p-5 mb-8">
          <h2 className="font-heading text-lg font-bold text-blue-800 dark:text-blue-300 mb-2">Quick Summary</h2>
          <p className="text-blue-900 dark:text-blue-200 text-base">A <strong>sentence fragment</strong> is an incomplete sentence, it's missing a subject, a verb, or a complete thought. Common types: dependent-clause fragments, <em>-ing</em> fragments, and phrases missing a subject or verb. Fix them by adding what's missing or attaching them to a nearby sentence.</p>
        </div>
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

        <ArticleHeading>Related Topics</ArticleHeading>
        <BulletList items={[
          <><Link to="/topics/simple-and-complex-sentences/" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800">Simple &amp; Complex Sentences</Link>, Understand what makes a complete sentence vs. a fragment.</>,
          <><Link to="/topics/subject-verb-agreement/" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800">Subject-Verb Agreement</Link>, A missing or mismatched verb can create fragments.</>,
          <><Link to="/writing/how-to-vary-sentence-structure/" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800">Varying Sentence Structure</Link>, Learn to vary sentences without accidentally creating fragments.</>,
        ]} />

        <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-6 mt-10">
          <h2 className="font-heading text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-slate-700 dark:text-slate-300">What is a sentence fragment?</h3>
              <p className="text-slate-600 dark:text-slate-400 mt-1">A sentence fragment is a group of words that is punctuated like a sentence but is missing a subject, a verb, or a complete thought. For example, "Because I forgot my keys" is a fragment, it needs an independent clause to be complete.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-700 dark:text-slate-300">Are sentence fragments always wrong?</h3>
              <p className="text-slate-600 dark:text-slate-400 mt-1">In formal and academic writing, fragments are considered errors. However, skilled writers sometimes use them intentionally in creative writing, advertising, or dialogue for emphasis or stylistic effect.</p>
            </div>
          </div>
        </div>
      </>
    )
  },
  {
    id: 'simple-and-complex-sentences',
    title: 'Simple & Complex Sentences',
    category: 'Sentence Structure',
    content: (
      <>
        <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-xl p-5 mb-8">
          <h2 className="font-heading text-lg font-bold text-blue-800 dark:text-blue-300 mb-2">Quick Summary</h2>
          <p className="text-blue-900 dark:text-blue-200 text-base">A <strong>simple sentence</strong> has one independent clause. A <strong>compound sentence</strong> joins two independent clauses. A <strong>complex sentence</strong> combines an independent clause with a dependent clause using subordinating conjunctions (because, although, when). A <strong>compound-complex</strong> sentence has both.</p>
        </div>
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

        <ArticleHeading>Related Topics</ArticleHeading>
        <BulletList items={[
          <><Link to="/topics/sentence-fragments/" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800">Sentence Fragments</Link>, Learn what happens when a clause can't stand alone.</>,
          <><Link to="/topics/passive-voice/" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800">Passive Voice</Link>, Combine passive forms with complex sentence structures.</>,
          <><Link to="/topics/conditionals/" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800">Conditionals (If Clauses)</Link>, A key type of complex sentence with dependent clauses.</>,
          <><Link to="/writing/how-to-vary-sentence-structure/" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800">Varying Sentence Structure</Link>, Practical tips for mixing sentence types in your writing.</>,
        ]} />

        <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-6 mt-10">
          <h2 className="font-heading text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-slate-700 dark:text-slate-300">What is the difference between a simple and complex sentence?</h3>
              <p className="text-slate-600 dark:text-slate-400 mt-1">A simple sentence has just one independent clause (one complete thought). A complex sentence has one independent clause plus one or more dependent clauses joined by subordinating conjunctions like "because," "although," or "when."</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-700 dark:text-slate-300">Do I need a comma in a complex sentence?</h3>
              <p className="text-slate-600 dark:text-slate-400 mt-1">Yes, but only when the dependent clause comes first. "Although it rained, we went out" needs a comma. "We went out although it rained" does not.</p>
            </div>
          </div>
        </div>
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
        <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-4 mb-6 rounded-r">
          <p className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Quick Summary</p>
          <p className="text-blue-700 dark:text-blue-300 text-sm">Conditionals express "if...then" relationships. Zero conditional = facts; First conditional = likely future; Second conditional = unlikely/hypothetical present; Third conditional = impossible past. Mixed conditionals combine these for nuanced meanings.</p>
        </div>

        <ArticleParagraph>
            Conditional sentences (also called "if clauses" or "if sentences") express that one action depends on another. They're essential for discussing possibilities, hypothetical situations, giving advice, expressing regrets, and describing cause-and-effect relationships. Mastering conditionals allows you to express complex ideas about possibility, probability, and hypothetical scenarios.
        </ArticleParagraph>

        <ArticleHeading>Overview of Conditional Types</ArticleHeading>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded">
            <thead className="bg-slate-100 dark:bg-slate-700">
              <tr>
                <th className="px-4 py-2 border-b text-left text-slate-800 dark:text-slate-200">Type</th>
                <th className="px-4 py-2 border-b text-left text-slate-800 dark:text-slate-200">If Clause</th>
                <th className="px-4 py-2 border-b text-left text-slate-800 dark:text-slate-200">Main Clause</th>
                <th className="px-4 py-2 border-b text-left text-slate-800 dark:text-slate-200">Use</th>
              </tr>
            </thead>
            <tbody className="text-slate-700 dark:text-slate-300">
              <tr><td className="px-4 py-2 border-b">Zero</td><td className="px-4 py-2 border-b">present simple</td><td className="px-4 py-2 border-b">present simple</td><td className="px-4 py-2 border-b">Facts/general truths</td></tr>
              <tr><td className="px-4 py-2 border-b">First</td><td className="px-4 py-2 border-b">present simple</td><td className="px-4 py-2 border-b">will + base</td><td className="px-4 py-2 border-b">Likely future situations</td></tr>
              <tr><td className="px-4 py-2 border-b">Second</td><td className="px-4 py-2 border-b">past simple</td><td className="px-4 py-2 border-b">would + base</td><td className="px-4 py-2 border-b">Unlikely/hypothetical now</td></tr>
              <tr><td className="px-4 py-2 border-b">Third</td><td className="px-4 py-2 border-b">past perfect</td><td className="px-4 py-2 border-b">would have + pp</td><td className="px-4 py-2 border-b">Impossible past</td></tr>
            </tbody>
          </table>
        </div>

        <ArticleHeading>Zero Conditional: General Truths and Facts</ArticleHeading>
        <ArticleParagraph>
            Use the zero conditional for things that are always true-scientific facts, general truths, and habitual actions.
        </ArticleParagraph>
        <ArticleParagraph><strong>Structure:</strong> If + present simple, ... present simple</ArticleParagraph>
        <ExampleList items={[
            "If you heat water to 100°C, it boils.",
            "If you mix blue and yellow, you get green.",
            "If it rains, the ground gets wet.",
            "If I don't eat breakfast, I feel tired.",
            "Plants die if they don't get water."
        ]} />
        <ArticleParagraph>
            <strong>Note:</strong> "When" can often replace "if" in zero conditionals: "When you heat water, it boils."
        </ArticleParagraph>

        <ArticleHeading>First Conditional: Real/Likely Future Possibilities</ArticleHeading>
        <ArticleParagraph>
            Use the first conditional for real possibilities in the future-situations that are likely to happen.
        </ArticleParagraph>
        <ArticleParagraph><strong>Structure:</strong> If + present simple, ... will + base verb</ArticleParagraph>
        <ExampleList items={[
            "If it rains tomorrow, we will stay home.",
            "If she studies hard, she will pass the exam.",
            "If you call me, I will answer.",
            "If we leave now, we will catch the train.",
            "The boss will be angry if we are late."
        ]} />

        <ArticleParagraph><strong>Variations with other modals:</strong></ArticleParagraph>
        <ExampleList items={[
            "If you're tired, you should rest. (advice)",
            "If it stops raining, we can go outside. (possibility)",
            "If you finish early, you may leave. (permission)",
            "If he calls, I might not answer. (uncertain intention)"
        ]} />

        <ArticleHeading>Second Conditional: Unlikely/Hypothetical Present or Future</ArticleHeading>
        <ArticleParagraph>
            Use the second conditional for hypothetical, unlikely, or imaginary situations in the present or future.
        </ArticleParagraph>
        <ArticleParagraph><strong>Structure:</strong> If + past simple, ... would + base verb</ArticleParagraph>
        <ExampleList items={[
            "If I won the lottery, I would buy a big house.",
            "If I had more time, I would learn Japanese.",
            "If she lived closer, we would meet more often.",
            "What would you do if you saw a ghost?",
            "If I were you, I would apologize."
        ]} />

        <div className="bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-700 p-4 mb-6 rounded">
          <p className="font-bold text-teal-800 dark:text-teal-200 mb-2">💡 "If I were" vs. "If I was"</p>
          <p className="text-teal-700 dark:text-teal-300 mb-2">Traditionally, "were" is used for all subjects in second conditionals (subjunctive mood):</p>
          <p className="text-teal-700 dark:text-teal-300">• "If I <strong>were</strong> rich..." (formal/traditional)</p>
          <p className="text-teal-700 dark:text-teal-300">• "If I <strong>was</strong> rich..." (informal/colloquial)</p>
          <p className="text-teal-700 dark:text-teal-300 mt-2">Both are acceptable in modern English, but "were" is preferred in formal writing and the phrase "If I were you."</p>
        </div>

        <ArticleParagraph><strong>Variations with could and might:</strong></ArticleParagraph>
        <ExampleList items={[
            "If I had a car, I could drive you there. (ability)",
            "If she tried harder, she might succeed. (uncertain result)",
            "If we left now, we could still make it. (possibility)"
        ]} />

        <ArticleHeading>Third Conditional: Impossible Past Situations</ArticleHeading>
        <ArticleParagraph>
            Use the third conditional to talk about hypothetical situations in the past-things that didn't happen but you're imagining if they had.
        </ArticleParagraph>
        <ArticleParagraph><strong>Structure:</strong> If + past perfect, ... would have + past participle</ArticleParagraph>
        <ExampleList items={[
            "If you had studied, you would have passed the exam.",
            "If I had known about the party, I would have come.",
            "If we had left earlier, we wouldn't have missed the flight.",
            "She would have helped if you had asked her.",
            "If he hadn't broken his leg, he would have won the race."
        ]} />

        <ArticleParagraph><strong>Expressing regret and criticism:</strong></ArticleParagraph>
        <ExampleList items={[
            "If only I had listened to you! (regret)",
            "If you had been more careful, this wouldn't have happened. (criticism)",
            "I would have bought it if I had had enough money. (missed opportunity)"
        ]} />

        <ArticleHeading>Mixed Conditionals</ArticleHeading>
        <ArticleParagraph>
            Mixed conditionals combine elements from different conditional types, usually to show how a past event affects the present, or how a general truth relates to the past.
        </ArticleParagraph>

        <ArticleParagraph><strong>Type 1: Past condition → Present result</strong></ArticleParagraph>
        <ArticleParagraph>If + past perfect, ... would + base verb</ArticleParagraph>
        <ExampleList items={[
            "If I had studied medicine, I would be a doctor now.",
            "If she had accepted the job, she would be living in Paris.",
            "If we hadn't moved, we would still live in London."
        ]} />

        <ArticleParagraph><strong>Type 2: Present condition → Past result</strong></ArticleParagraph>
        <ArticleParagraph>If + past simple, ... would have + past participle</ArticleParagraph>
        <ExampleList items={[
            "If I were taller, I would have played basketball in school.",
            "If she didn't have allergies, she would have eaten the cake.",
            "If he weren't so shy, he would have asked her out."
        ]} />

        <ArticleHeading>Unless, As Long As, Provided That</ArticleHeading>
        <ArticleParagraph>Other words can introduce conditional clauses:</ArticleParagraph>
        <BulletList items={[
            <><strong>Unless</strong> = if not: "Unless you hurry, you'll miss the bus." (= If you don't hurry...)</>,
            <><strong>As long as / So long as</strong> = only if: "You can borrow my car as long as you're careful."</>,
            <><strong>Provided that / Providing</strong> = only if: "I'll help you provided that you pay me."</>,
            <><strong>On condition that</strong> = only if (formal): "She agreed on condition that we keep it secret."</>,
            <><strong>In case</strong> = because something might happen: "Take an umbrella in case it rains."</>
        ]}/>

        <ArticleHeading>Word Order: Can If Clauses Come Second?</ArticleHeading>
        <ArticleParagraph>
            Yes! The if-clause can come before or after the main clause. When it comes first, use a comma. When it comes second, no comma is needed.
        </ArticleParagraph>
        <ExampleList items={[
            "If it rains, we will stay home. (comma needed)",
            "We will stay home if it rains. (no comma)",
            "If I were you, I would accept. (comma needed)",
            "I would accept if I were you. (no comma)"
        ]} />

        <ArticleHeading>Common Mistakes to Avoid</ArticleHeading>
        <BulletList items={[
            <><strong>"If I will see him"</strong> → CORRECT: "If I see him" (don't use "will" in the if-clause for first conditional)</>,
            <><strong>"If I would have known"</strong> → CORRECT: "If I had known" (don't use "would" in the if-clause)</>,
            <><strong>"If I was you"</strong> → BETTER: "If I were you" (use "were" for hypothetical with "you")</>,
            <><strong>"Unless you won't hurry"</strong> → CORRECT: "Unless you hurry" (unless = if not, don't double negate)</>,
            <><strong>Mixing tenses incorrectly</strong>: "If I won the lottery, I will buy" → CORRECT: "...I would buy"</>
        ]}/>

        <ArticleHeading>Quick Reference: Choosing the Right Conditional</ArticleHeading>
        <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700 mb-6">
          <p className="text-slate-700 dark:text-slate-300 mb-2"><strong>Is it always true?</strong> → Zero conditional</p>
          <p className="text-slate-700 dark:text-slate-300 mb-2"><strong>Is it possible/likely in the future?</strong> → First conditional</p>
          <p className="text-slate-700 dark:text-slate-300 mb-2"><strong>Is it unlikely/imaginary now or future?</strong> → Second conditional</p>
          <p className="text-slate-700 dark:text-slate-300 mb-2"><strong>Is it about something that didn't happen in the past?</strong> → Third conditional</p>
          <p className="text-slate-700 dark:text-slate-300"><strong>Does a past event affect the present?</strong> → Mixed conditional</p>
        </div>

        <ArticleHeading>Frequently Asked Questions</ArticleHeading>
        <div className="space-y-4 mb-6">
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700">
            <p className="font-semibold text-slate-800 dark:text-slate-200">Why can't I use "will" in the if-clause?</p>
            <p className="text-slate-600 dark:text-slate-400 mt-2">In standard conditionals, the if-clause already implies future reference, so "will" is redundant. However, "will" CAN appear in if-clauses for polite requests: "If you will wait here, I'll get the manager." This "will" expresses willingness, not future.</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700">
            <p className="font-semibold text-slate-800 dark:text-slate-200">What's the difference between first and second conditional?</p>
            <p className="text-slate-600 dark:text-slate-400 mt-2">First conditional = real possibility: "If it rains, I'll take an umbrella." (It might rain-this is likely.) Second conditional = hypothetical: "If it rained diamonds, I'd be rich." (This won't happen-it's imaginary.)</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700">
            <p className="font-semibold text-slate-800 dark:text-slate-200">Can I use "could" instead of "would"?</p>
            <p className="text-slate-600 dark:text-slate-400 mt-2">Yes! "Could" emphasizes ability or possibility: "If I had money, I could travel" (ability). "Would" emphasizes willingness or certainty: "If I had money, I would travel" (I definitely would). "Might" suggests uncertainty: "I might travel."</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700">
            <p className="font-semibold text-slate-800 dark:text-slate-200">When do I use "were" instead of "was" after "if"?</p>
            <p className="text-slate-600 dark:text-slate-400 mt-2">In formal English and the second conditional, use "were" for all subjects (subjunctive mood): "If I were," "If she were," "If it were." This is especially important in "If I were you." In casual speech, "was" is increasingly accepted.</p>
          </div>
        </div>
       </>
    )
  },
  {
    id: 'relative-clauses',
    title: 'Relative Clauses',
    category: 'Clauses',
    content: (
        <>
            <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-4 mb-6 rounded-r">
              <p className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Quick Summary</p>
              <p className="text-blue-700 dark:text-blue-300 text-sm">Relative clauses add information about nouns using pronouns like who, which, that, whose, and where. Defining clauses (no commas) identify which one; non-defining clauses (with commas) add extra information about something already identified.</p>
            </div>

            <ArticleParagraph>
                Relative clauses are clauses that give additional information about a noun in the main sentence. They begin with relative pronouns (who, whom, whose, which, that) or relative adverbs (where, when, why). Understanding relative clauses is essential for creating sophisticated, flowing sentences and avoiding choppy writing.
            </ArticleParagraph>

            <ArticleHeading>Relative Pronouns Overview</ArticleHeading>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded">
                <thead className="bg-slate-100 dark:bg-slate-700">
                  <tr>
                    <th className="px-4 py-2 border-b text-left text-slate-800 dark:text-slate-200">Pronoun</th>
                    <th className="px-4 py-2 border-b text-left text-slate-800 dark:text-slate-200">Used For</th>
                    <th className="px-4 py-2 border-b text-left text-slate-800 dark:text-slate-200">Function</th>
                    <th className="px-4 py-2 border-b text-left text-slate-800 dark:text-slate-200">Example</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700 dark:text-slate-300">
                  <tr><td className="px-4 py-2 border-b">who</td><td className="px-4 py-2 border-b">people</td><td className="px-4 py-2 border-b">subject</td><td className="px-4 py-2 border-b">The woman who called is here.</td></tr>
                  <tr><td className="px-4 py-2 border-b">whom</td><td className="px-4 py-2 border-b">people</td><td className="px-4 py-2 border-b">object (formal)</td><td className="px-4 py-2 border-b">The man whom I met was kind.</td></tr>
                  <tr><td className="px-4 py-2 border-b">whose</td><td className="px-4 py-2 border-b">people/things</td><td className="px-4 py-2 border-b">possession</td><td className="px-4 py-2 border-b">The artist whose work I admire...</td></tr>
                  <tr><td className="px-4 py-2 border-b">which</td><td className="px-4 py-2 border-b">things/animals</td><td className="px-4 py-2 border-b">subject/object</td><td className="px-4 py-2 border-b">The book which I bought...</td></tr>
                  <tr><td className="px-4 py-2 border-b">that</td><td className="px-4 py-2 border-b">people/things</td><td className="px-4 py-2 border-b">subject/object</td><td className="px-4 py-2 border-b">The car that he drives...</td></tr>
                  <tr><td className="px-4 py-2 border-b">where</td><td className="px-4 py-2 border-b">places</td><td className="px-4 py-2 border-b">location</td><td className="px-4 py-2 border-b">The city where I was born...</td></tr>
                  <tr><td className="px-4 py-2 border-b">when</td><td className="px-4 py-2 border-b">time</td><td className="px-4 py-2 border-b">time reference</td><td className="px-4 py-2 border-b">The day when we met...</td></tr>
                  <tr><td className="px-4 py-2 border-b">why</td><td className="px-4 py-2 border-b">reasons</td><td className="px-4 py-2 border-b">reason</td><td className="px-4 py-2 border-b">The reason why I left...</td></tr>
                </tbody>
              </table>
            </div>

            <ArticleHeading>Defining (Restrictive) Clauses</ArticleHeading>
            <ArticleParagraph>
                <strong>Defining clauses</strong> give essential information that identifies which person or thing we're talking about. Without this information, the sentence would have a different meaning or be unclear. <strong>No commas are used.</strong>
            </ArticleParagraph>
            <ExampleList items={[
                "The man who lives next door is a doctor. (Which man? The one who lives next door.)",
                "The book that you recommended was excellent. (Which book? The one you recommended.)",
                "Students who study hard usually succeed. (Which students? Those who study hard.)",
                "The restaurant where we had dinner is closing. (Which restaurant? Where we had dinner.)",
                "I need a car that is reliable. (What kind of car? A reliable one.)"
            ]} />

            <ArticleHeading>Non-Defining (Non-Restrictive) Clauses</ArticleHeading>
            <ArticleParagraph>
                <strong>Non-defining clauses</strong> give extra information about something already identified or unique. The main meaning is clear without this information. <strong>Always use commas.</strong>
            </ArticleParagraph>
            <ExampleList items={[
                "My brother, who is an engineer, lives in London. (I only have one brother; his profession is extra info.)",
                "Paris, which is the capital of France, is beautiful. (Paris is already identified; the extra info isn't essential.)",
                "Einstein, who developed relativity, was brilliant. (Einstein is already known.)",
                "My car, which I bought last year, broke down. (I only have one car.)",
                "She gave me the book, which I had been wanting to read. (The book has been specified already.)"
            ]} />

            <div className="bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-700 p-4 mb-6 rounded">
              <p className="font-bold text-teal-800 dark:text-teal-200 mb-3">⚠️ Commas Change Meaning!</p>
              <p className="text-teal-700 dark:text-teal-300 mb-2"><strong>No commas (defining):</strong> "The students who passed the exam can leave."<br/>→ Only the students who passed can leave. (Others must stay.)</p>
              <p className="text-teal-700 dark:text-teal-300"><strong>With commas (non-defining):</strong> "The students, who passed the exam, can leave."<br/>→ All students passed, and all can leave. (Extra info.)</p>
            </div>

            <ArticleHeading>That vs. Which</ArticleHeading>
            <ArticleParagraph>
                Understanding when to use "that" vs. "which" is important, especially in American English:
            </ArticleParagraph>
            <BulletList items={[
                <><strong>That</strong> = defining clauses (no commas): "The car <strong>that</strong> I bought is blue."</>,
                <><strong>Which</strong> = non-defining clauses (with commas): "My car, <strong>which</strong> I bought last year, is blue."</>,
                <><strong>Which</strong> can also be used in defining clauses (more common in British English): "The car which I bought is blue."</>,
                <><strong>That</strong> is NEVER used in non-defining clauses: "My car, that I bought last year..." ❌</>
            ]}/>

            <ArticleHeading>Who vs. Whom</ArticleHeading>
            <ArticleParagraph>
                "Who" is a subject pronoun; "whom" is an object pronoun. While "whom" is becoming less common in everyday speech, it's still preferred in formal writing.
            </ArticleParagraph>
            <ExampleList items={[
                "The teacher who taught me English was excellent. (WHO = subject of 'taught')",
                "The teacher whom I admire has retired. (WHOM = object of 'admire'; formal)",
                "The teacher who I admire has retired. (WHO replacing whom; informal but acceptable)",
                "To whom it may concern... (WHOM after preposition; formal)"
            ]} />
            <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700 mb-6">
              <p className="font-bold text-slate-800 dark:text-slate-200 mb-2">💡 Who/Whom Test</p>
              <p className="text-slate-700 dark:text-slate-300">Replace with he/him. If "he" works → use "who." If "him" works → use "whom."</p>
              <p className="text-slate-700 dark:text-slate-300 mt-2">"The man who/whom I met" → "I met <strong>him</strong>" → use "whom"</p>
              <p className="text-slate-700 dark:text-slate-300">"The man who/whom called" → "<strong>He</strong> called" → use "who"</p>
            </div>

            <ArticleHeading>Whose (Possession)</ArticleHeading>
            <ArticleParagraph>
                "Whose" shows possession and can refer to people or things (despite what some traditional guides say).
            </ArticleParagraph>
            <ExampleList items={[
                "She's the artist whose paintings sell for millions.",
                "I know a man whose wife is a famous actress.",
                "The company whose products we use is based in Japan.",
                "This is the house whose roof was damaged in the storm."
            ]} />

            <ArticleHeading>Where, When, Why (Relative Adverbs)</ArticleHeading>
            <ExampleList items={[
                "This is the restaurant where we first met. (place)",
                "I remember the day when we graduated. (time)",
                "Do you know the reason why she left? (reason)",
                "The town where I grew up is very small.",
                "That was the moment when everything changed."
            ]} />
            <ArticleParagraph>
                <strong>Note:</strong> "That" often replaces "when" and "why": "the day that we met," "the reason that she left."
            </ArticleParagraph>

            <ArticleHeading>Omitting Relative Pronouns</ArticleHeading>
            <ArticleParagraph>
                In defining clauses, you can omit the relative pronoun when it's the <strong>object</strong> of the clause:
            </ArticleParagraph>
            <ExampleList items={[
                "The book (that/which) I read was good. (Object: I read the book)",
                "The man (who/whom) she married is Italian. (Object: she married the man)",
                "The restaurant (that/where) we went to was expensive."
            ]} />
            <ArticleParagraph>
                <strong>Cannot omit when it's the subject:</strong>
            </ArticleParagraph>
            <ExampleList items={[
                "The man who lives here is nice. (NOT: The man lives here is nice.)",
                "The book which is on the table is mine. (NOT: The book is on the table is mine.)"
            ]} />

            <ArticleHeading>Prepositions with Relative Clauses</ArticleHeading>
            <ArticleParagraph>
                Prepositions can go at the end of the clause (informal) or before the pronoun (formal):
            </ArticleParagraph>
            <ExampleList items={[
                "The person (who/that) I spoke to was helpful. (informal, end position)",
                "The person to whom I spoke was helpful. (formal, before pronoun)",
                "The house (which/that) we looked at was too expensive.",
                "The house at which we looked was too expensive. (very formal)"
            ]} />

            <ArticleHeading>Common Mistakes to Avoid</ArticleHeading>
            <BulletList items={[
                <><strong>Using "that" in non-defining clauses:</strong> "My mother, that is a teacher,..." ❌ → "My mother, who is a teacher,..." ✓</>,
                <><strong>Missing commas in non-defining clauses:</strong> "Paris which is beautiful..." ❌ → "Paris, which is beautiful,..." ✓</>,
                <><strong>Adding commas to defining clauses:</strong> "Students, who study hard, succeed." ❌ (unless you mean ALL students study hard)</>,
                <><strong>Wrong pronoun for things:</strong> "The book who I read..." ❌ → "The book that/which I read..." ✓</>,
                <><strong>Omitting subject pronouns:</strong> "The man lives next door is nice." ❌ → "The man who lives next door is nice." ✓</>
            ]}/>

            <ArticleHeading>Combining Sentences with Relative Clauses</ArticleHeading>
            <ArticleParagraph>
                Relative clauses help combine choppy sentences into smoother, more sophisticated writing:
            </ArticleParagraph>
            <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700 mb-6">
              <p className="text-slate-700 dark:text-slate-300 mb-2"><strong>Before:</strong> "I met a woman. She works at Google."</p>
              <p className="text-slate-700 dark:text-slate-300"><strong>After:</strong> "I met a woman who works at Google."</p>
              <p className="text-slate-700 dark:text-slate-300 mt-4 mb-2"><strong>Before:</strong> "Tokyo is Japan's capital. It has over 13 million people."</p>
              <p className="text-slate-700 dark:text-slate-300"><strong>After:</strong> "Tokyo, which is Japan's capital, has over 13 million people."</p>
            </div>

            <ArticleHeading>Frequently Asked Questions</ArticleHeading>
            <div className="space-y-4 mb-6">
              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700">
                <p className="font-semibold text-slate-800 dark:text-slate-200">Can I use "that" for people?</p>
                <p className="text-slate-600 dark:text-slate-400 mt-2">Yes! "That" can refer to people in defining clauses: "The woman that called" is correct, though "who" is often preferred. In non-defining clauses, always use "who" for people.</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700">
                <p className="font-semibold text-slate-800 dark:text-slate-200">How do I know if a clause is defining or non-defining?</p>
                <p className="text-slate-600 dark:text-slate-400 mt-2">Ask: "If I remove this clause, will readers know exactly what/who I mean?" If yes → non-defining (use commas). If the sentence becomes vague → defining (no commas).</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700">
                <p className="font-semibold text-slate-800 dark:text-slate-200">Is "whom" dying out?</p>
                <p className="text-slate-600 dark:text-slate-400 mt-2">"Whom" is less common in everyday speech but still used in formal writing and after prepositions ("to whom," "for whom"). Using "who" as an object is widely accepted in informal contexts.</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700">
                <p className="font-semibold text-slate-800 dark:text-slate-200">Can "whose" refer to things?</p>
                <p className="text-slate-600 dark:text-slate-400 mt-2">Yes! While "whose" traditionally referred only to people, it's now widely accepted for things: "The company whose products we sell" is correct. The alternative "of which" sounds very formal: "The company the products of which we sell."</p>
              </div>
            </div>
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
            <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-4 mb-6 rounded-r">
              <p className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Quick Summary</p>
              <p className="text-blue-700 dark:text-blue-300 text-sm">The comma (,) is one of the most frequently used-and misused-punctuation marks in English. It separates elements within sentences, creates pauses for clarity, and prevents misreading. Mastering comma rules is essential for clear, professional writing.</p>
            </div>

            <ArticleParagraph>
                The comma is one of the most common punctuation marks in English, yet it remains one of the trickiest to use correctly. Unlike the period, which clearly marks the end of a sentence, the comma serves multiple functions within sentences. It separates elements, creates natural pauses, and helps readers understand the structure and meaning of your writing. Incorrect comma placement can change meaning entirely or make sentences difficult to understand.
            </ArticleParagraph>

            <ArticleHeading>1. Commas in Lists (The Serial Comma)</ArticleHeading>
            <ArticleParagraph>
                When listing three or more items in a sentence, commas separate each item. The final comma before "and" or "or" is called the <strong>Oxford comma</strong> (or serial comma). While some style guides make it optional, using the Oxford comma consistently prevents ambiguity.
            </ArticleParagraph>
            <ExampleList items={[
                "I need to buy apples, bananas, and oranges. (with Oxford comma)",
                "She speaks English, French, Spanish, and Mandarin.",
                "The flag was red, white, and blue.",
                "We visited Paris, Rome, and Athens during our trip."
            ]} />
            
            <ArticleParagraph>
                <strong>Why the Oxford Comma Matters:</strong> Consider the difference between these two sentences:
            </ArticleParagraph>
            <div className="bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-700 p-4 mb-6 rounded">
              <p className="text-teal-800 dark:text-teal-200"><strong>Without Oxford comma:</strong> "I love my parents, Batman and Wonder Woman." (This suggests your parents ARE Batman and Wonder Woman!)</p>
              <p className="text-teal-800 dark:text-teal-200 mt-2"><strong>With Oxford comma:</strong> "I love my parents, Batman, and Wonder Woman." (This clearly lists three separate things you love.)</p>
            </div>

            <ArticleHeading>2. Commas Before Coordinating Conjunctions</ArticleHeading>
            <ArticleParagraph>
                When joining two independent clauses (complete sentences) with a coordinating conjunction (for, and, nor, but, or, yet, so, remember FANBOYS), place a comma before the conjunction.
            </ArticleParagraph>
            <ExampleList items={[
                "I wanted to go to the concert, but the tickets were sold out.",
                "She studied hard for the exam, and she passed with flying colors.",
                "It was raining heavily, so we decided to stay home.",
                "He didn't want to admit it, yet he knew she was right.",
                "You can come with us, or you can stay here."
            ]} />
            <ArticleParagraph>
                <strong>Important:</strong> Do NOT use a comma if what follows the conjunction is not an independent clause:
            </ArticleParagraph>
            <ExampleList items={[
                "CORRECT: She studied hard and passed the exam. (no comma needed, 'passed the exam' is not a complete sentence)",
                "INCORRECT: She studied hard, and passed the exam."
            ]} />

            <ArticleHeading>3. Commas After Introductory Elements</ArticleHeading>
            <ArticleParagraph>
                Use a comma after introductory words, phrases, or clauses that come before the main clause of a sentence. This helps readers know where the introduction ends and the main point begins.
            </ArticleParagraph>
            <ArticleParagraph><strong>Introductory Words:</strong></ArticleParagraph>
            <ExampleList items={[
                "However, I disagree with that assessment.",
                "Unfortunately, the flight was delayed by three hours.",
                "Surprisingly, he agreed to help us.",
                "Meanwhile, the children played outside."
            ]} />
            <ArticleParagraph><strong>Introductory Phrases:</strong></ArticleParagraph>
            <ExampleList items={[
                "After the movie, we went out for dinner.",
                "In the morning, she always drinks coffee.",
                "Despite the rain, they continued with the outdoor wedding.",
                "According to the report, sales increased by 15%."
            ]} />
            <ArticleParagraph><strong>Introductory Clauses:</strong></ArticleParagraph>
            <ExampleList items={[
                "When the sun sets, the city lights come alive.",
                "If you need help, please don't hesitate to ask.",
                "Although he was tired, he finished the project.",
                "Before you leave, please turn off all the lights."
            ]} />

            <ArticleHeading>4. Commas with Non-Essential Information</ArticleHeading>
            <ArticleParagraph>
                Use commas to set off non-essential (non-restrictive) information-words, phrases, or clauses that add extra detail but aren't necessary to identify what you're talking about. If you can remove the information without changing the core meaning, use commas.
            </ArticleParagraph>
            <ExampleList items={[
                "My sister, who lives in New York, is a talented writer. (I only have one sister; 'who lives in New York' is extra information)",
                "The Eiffel Tower, which was built in 1889, attracts millions of visitors.",
                "Mr. Smith, our neighbor, offered to help with the move.",
                "The book, published in 2020, became an instant bestseller."
            ]} />
            <ArticleParagraph>
                <strong>Compare with Essential Information (no commas):</strong>
            </ArticleParagraph>
            <ExampleList items={[
                "The sister who lives in New York is visiting next week. (I have multiple sisters; I'm specifying WHICH one)",
                "The students who studied passed the exam. (Only the students who studied-not all students)"
            ]} />

            <ArticleHeading>5. Commas with Appositives</ArticleHeading>
            <ArticleParagraph>
                An appositive is a noun or noun phrase that renames or explains another noun right beside it. Non-essential appositives are set off by commas:
            </ArticleParagraph>
            <ExampleList items={[
                "Dr. Martin Luther King Jr., the famous civil rights leader, delivered the 'I Have a Dream' speech.",
                "My dog, a golden retriever named Max, loves to play fetch.",
                "Tokyo, the capital of Japan, has a population of over 13 million.",
                "Her favorite book, Pride and Prejudice, was written by Jane Austen."
            ]} />

            <ArticleHeading>6. Commas with Direct Address</ArticleHeading>
            <ArticleParagraph>
                When directly addressing someone by name or title, set off the name with commas:
            </ArticleParagraph>
            <ExampleList items={[
                "John, could you please close the door?",
                "I think, Professor, that you've made an excellent point.",
                "Ladies and gentlemen, welcome to the show.",
                "Thank you, Mom, for all your support."
            ]} />
            <div className="bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-700 p-4 mb-6 rounded">
              <p className="text-teal-800 dark:text-teal-200"><strong>The Famous "Let's eat" Example:</strong></p>
              <p className="text-teal-800 dark:text-teal-200 mt-2">"Let's eat, Grandma!" (You're inviting Grandma to eat.)</p>
              <p className="text-teal-800 dark:text-teal-200 mt-1">"Let's eat Grandma!" (You're suggesting eating Grandma! 😱)</p>
              <p className="text-teal-700 dark:text-teal-300 mt-2 text-sm italic">Commas save lives!</p>
            </div>

            <ArticleHeading>7. Commas with Quotations</ArticleHeading>
            <ArticleParagraph>
                Use commas to introduce or interrupt direct quotations:
            </ArticleParagraph>
            <ExampleList items={[
                "She said, \"I'll be there at noon.\"",
                "\"I'll be there,\" she said, \"at noon.\"",
                "\"The meeting is canceled,\" announced the manager.",
                "According to the witness, \"The car was speeding.\""
            ]} />

            <ArticleHeading>8. Commas with Coordinate Adjectives</ArticleHeading>
            <ArticleParagraph>
                When two or more adjectives equally modify a noun, separate them with commas. You can test this by seeing if "and" would work between them, or if you can reverse their order.
            </ArticleParagraph>
            <ExampleList items={[
                "She wore a beautiful, elegant dress. (You could say 'beautiful and elegant' or 'elegant, beautiful')",
                "It was a cold, rainy morning.",
                "He is a talented, dedicated musician."
            ]} />
            <ArticleParagraph>
                <strong>Do NOT use commas with cumulative adjectives</strong> (adjectives that build upon each other and can't be reordered):
            </ArticleParagraph>
            <ExampleList items={[
                "She bought a lovely blue silk scarf. (NOT 'lovely, blue, silk')",
                "Three large brown dogs. (NOT 'three, large, brown')"
            ]} />

            <ArticleHeading>9. Commas in Dates, Addresses, and Numbers</ArticleHeading>
            <ArticleParagraph><strong>Dates:</strong></ArticleParagraph>
            <ExampleList items={[
                "The meeting is scheduled for Monday, March 15, 2024.",
                "She was born on July 4, 1990, in Boston.",
                "In December 2023, we moved to a new office. (no comma needed between month and year alone)"
            ]} />
            <ArticleParagraph><strong>Addresses:</strong></ArticleParagraph>
            <ExampleList items={[
                "She lives at 123 Main Street, Apt. 4, Chicago, Illinois.",
                "The company is headquartered in San Francisco, California.",
                "Mail it to 456 Oak Avenue, Suite 200, New York, NY 10001."
            ]} />
            <ArticleParagraph><strong>Numbers:</strong></ArticleParagraph>
            <ExampleList items={[
                "The population is 1,234,567.",
                "The project cost $2,500,000.",
                "She ran 1,500 meters in record time."
            ]} />

            <ArticleHeading>Common Comma Mistakes to Avoid</ArticleHeading>
            <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 p-4 mb-6 rounded">
              <p className="font-semibold text-red-800 dark:text-red-200 mb-3">❌ Comma Splices (A Major Error)</p>
              <p className="text-red-700 dark:text-red-300 mb-2">A comma splice occurs when you join two independent clauses with only a comma. This is incorrect.</p>
              <p className="text-red-800 dark:text-red-200"><strong>Wrong:</strong> "I love to read, it's my favorite hobby."</p>
              <p className="text-green-700 dark:text-green-300 mt-2"><strong>Correct options:</strong></p>
              <ul className="text-green-700 dark:text-green-300 ml-4 mt-1 list-disc">
                <li>"I love to read. It's my favorite hobby." (period)</li>
                <li>"I love to read; it's my favorite hobby." (semicolon)</li>
                <li>"I love to read, and it's my favorite hobby." (comma + conjunction)</li>
              </ul>
            </div>

            <BulletList items={[
                <><strong>Don't separate subject and verb with a comma:</strong> WRONG: "The tall man in the blue coat, walked quickly." CORRECT: "The tall man in the blue coat walked quickly."</>,
                <><strong>Don't use a comma before "that" in essential clauses:</strong> WRONG: "She believes, that he is innocent." CORRECT: "She believes that he is innocent."</>,
                <><strong>Don't use a comma after "and" or "but":</strong> WRONG: "I went to the store, and, bought some milk." CORRECT: "I went to the store and bought some milk."</>,
                <><strong>Don't overuse commas:</strong> Too many commas can make writing choppy and hard to read. When in doubt, read the sentence aloud-natural pauses often indicate where commas should go.</>,
                <><strong>Don't forget commas in complex sentences:</strong> Long sentences with multiple clauses often need commas for clarity.</>
            ]}/>

            <ArticleHeading>Quick Reference: When to Use (and Not Use) Commas</ArticleHeading>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded">
                <thead className="bg-slate-100 dark:bg-slate-700">
                  <tr>
                    <th className="px-4 py-2 border-b text-left text-slate-800 dark:text-slate-200">Use a Comma ✓</th>
                    <th className="px-4 py-2 border-b text-left text-slate-800 dark:text-slate-200">Don't Use a Comma ✗</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700 dark:text-slate-300">
                  <tr><td className="px-4 py-2 border-b">Between items in a list</td><td className="px-4 py-2 border-b">Between only two items</td></tr>
                  <tr><td className="px-4 py-2 border-b">Before FANBOYS joining independent clauses</td><td className="px-4 py-2 border-b">Before FANBOYS joining phrases</td></tr>
                  <tr><td className="px-4 py-2 border-b">After introductory elements</td><td className="px-4 py-2 border-b">After short adverbs like "then"</td></tr>
                  <tr><td className="px-4 py-2 border-b">Around non-essential information</td><td className="px-4 py-2 border-b">Around essential information</td></tr>
                  <tr><td className="px-4 py-2 border-b">With direct address</td><td className="px-4 py-2 border-b">Between subject and verb</td></tr>
                  <tr><td className="px-4 py-2 border-b">To introduce quotations</td><td className="px-4 py-2 border-b">Before "that" clauses</td></tr>
                </tbody>
              </table>
            </div>

            <ArticleHeading>Frequently Asked Questions</ArticleHeading>
            <div className="space-y-4 mb-6">
              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700">
                <p className="font-semibold text-slate-800 dark:text-slate-200">Should I always use the Oxford comma?</p>
                <p className="text-slate-600 dark:text-slate-400 mt-2">While not universally required, the Oxford comma (the comma before "and" in a list) is recommended because it prevents ambiguity. Many style guides, including Chicago and APA, recommend using it consistently.</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700">
                <p className="font-semibold text-slate-800 dark:text-slate-200">How do I know if information is essential or non-essential?</p>
                <p className="text-slate-600 dark:text-slate-400 mt-2">Ask yourself: "If I remove this, will readers still know what I'm referring to?" If yes, it's non-essential and needs commas. If the sentence becomes unclear or changes meaning, it's essential and shouldn't have commas.</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700">
                <p className="font-semibold text-slate-800 dark:text-slate-200">Is it wrong to start a sentence with "However" followed by a comma?</p>
                <p className="text-slate-600 dark:text-slate-400 mt-2">No! Starting a sentence with "However," is perfectly acceptable and grammatically correct. The comma after "However" (and similar transitional words) helps readers pause and prepares them for the contrast to come.</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700">
                <p className="font-semibold text-slate-800 dark:text-slate-200">What's the difference between "which" and "that" with commas?</p>
                <p className="text-slate-600 dark:text-slate-400 mt-2">"Which" introduces non-essential clauses and is preceded by a comma: "The car, which is red, is fast." "That" introduces essential clauses and has no comma: "The car that is red is mine." (distinguishing it from other cars)</p>
              </div>
            </div>
        </>
    )
  },
  {
    id: 'apostrophes',
    title: 'Apostrophes',
    category: 'Punctuation',
    content: (
      <>
        <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-4 mb-6 rounded-r">
          <p className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Quick Summary</p>
          <p className="text-blue-700 dark:text-blue-300 text-sm">The apostrophe (') has two primary functions: showing possession (John's book) and indicating contractions (don't, it's). Despite being a small punctuation mark, apostrophe errors are among the most common in English writing.</p>
        </div>

        <ArticleParagraph>
          The apostrophe is a small punctuation mark with significant responsibilities in English. While it may seem straightforward, apostrophe misuse is one of the most common grammatical errors-appearing on shop signs, in professional documents, and throughout the internet. Understanding when to use (and when NOT to use) apostrophes is essential for clear, correct writing.
        </ArticleParagraph>

        <ArticleHeading>1. Apostrophes for Possession (Showing Ownership)</ArticleHeading>
        <ArticleParagraph>
          The possessive form shows that something belongs to someone or something else. The rules differ based on whether the noun is singular, plural, or ends in "s."
        </ArticleParagraph>

        <ArticleParagraph><strong>Singular Nouns:</strong> Add 's (apostrophe + s)</ArticleParagraph>
        <ExampleList items={[
          "the dog's bone (the bone belonging to the dog)",
          "Sarah's computer (the computer belonging to Sarah)",
          "the company's policy (the policy of the company)",
          "my boss's decision (the decision of my boss)",
          "the child's toy (the toy belonging to the child)"
        ]} />

        <ArticleParagraph><strong>Plural Nouns Ending in -s:</strong> Add only an apostrophe (s')</ArticleParagraph>
        <ExampleList items={[
          "the dogs' bones (bones belonging to multiple dogs)",
          "the students' textbooks (textbooks belonging to the students)",
          "the teachers' lounge (the lounge for the teachers)",
          "my parents' house (the house belonging to my parents)",
          "the companies' merger (merger between the companies)"
        ]} />

        <ArticleParagraph><strong>Plural Nouns NOT Ending in -s:</strong> Add 's (apostrophe + s)</ArticleParagraph>
        <ExampleList items={[
          "the children's toys (toys belonging to the children)",
          "the women's bathroom (bathroom for women)",
          "the people's choice (the choice of the people)",
          "the men's department (department for men)",
          "the mice's cage (cage of the mice)"
        ]} />

        <ArticleHeading>2. Special Cases for Possession</ArticleHeading>
        
        <ArticleParagraph><strong>Singular Nouns Ending in -s:</strong></ArticleParagraph>
        <ArticleParagraph>
          For singular nouns already ending in "s," you can add either 's or just an apostrophe. Both are acceptable, but consistency is key:
        </ArticleParagraph>
        <ExampleList items={[
          "James's car OR James' car",
          "the boss's office OR the boss' office",
          "Charles's book OR Charles' book",
          "the witness's testimony OR the witness' testimony"
        ]} />

        <ArticleParagraph><strong>Joint vs. Individual Possession:</strong></ArticleParagraph>
        <ExampleList items={[
          "Jack and Jill's bucket (they share ONE bucket), apostrophe on last name only",
          "Jack's and Jill's buckets (each has their OWN bucket), apostrophe on both names",
          "Mom and Dad's car (one car they share)",
          "Mom's and Dad's cars (separate cars)"
        ]} />

        <ArticleParagraph><strong>Compound Nouns:</strong></ArticleParagraph>
        <ExampleList items={[
          "my mother-in-law's advice",
          "the attorney general's ruling",
          "somebody else's problem",
          "the commander-in-chief's orders"
        ]} />

        <ArticleParagraph><strong>Time Expressions:</strong></ArticleParagraph>
        <ArticleParagraph>Use apostrophes with time periods to show possession:</ArticleParagraph>
        <ExampleList items={[
          "a day's work (the work of one day)",
          "two weeks' notice (notice of two weeks)",
          "a year's supply (supply for a year)",
          "three hours' delay (a delay of three hours)",
          "today's meeting (the meeting of today)"
        ]} />

        <ArticleHeading>3. Apostrophes in Contractions</ArticleHeading>
        <ArticleParagraph>
          A contraction combines two words into one, with an apostrophe marking where letters have been removed. Contractions are common in spoken English and informal writing but may be avoided in very formal contexts.
        </ArticleParagraph>

        <ArticleParagraph><strong>Common Contractions:</strong></ArticleParagraph>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded">
            <thead className="bg-slate-100 dark:bg-slate-700">
              <tr>
                <th className="px-4 py-2 border-b text-left text-slate-800 dark:text-slate-200">Contraction</th>
                <th className="px-4 py-2 border-b text-left text-slate-800 dark:text-slate-200">Full Form</th>
                <th className="px-4 py-2 border-b text-left text-slate-800 dark:text-slate-200">Example</th>
              </tr>
            </thead>
            <tbody className="text-slate-700 dark:text-slate-300">
              <tr><td className="px-4 py-2 border-b">I'm</td><td className="px-4 py-2 border-b">I am</td><td className="px-4 py-2 border-b">I'm going to the store.</td></tr>
              <tr><td className="px-4 py-2 border-b">don't</td><td className="px-4 py-2 border-b">do not</td><td className="px-4 py-2 border-b">I don't understand.</td></tr>
              <tr><td className="px-4 py-2 border-b">can't</td><td className="px-4 py-2 border-b">cannot</td><td className="px-4 py-2 border-b">She can't come today.</td></tr>
              <tr><td className="px-4 py-2 border-b">won't</td><td className="px-4 py-2 border-b">will not</td><td className="px-4 py-2 border-b">He won't be late.</td></tr>
              <tr><td className="px-4 py-2 border-b">you're</td><td className="px-4 py-2 border-b">you are</td><td className="px-4 py-2 border-b">You're doing great!</td></tr>
              <tr><td className="px-4 py-2 border-b">they're</td><td className="px-4 py-2 border-b">they are</td><td className="px-4 py-2 border-b">They're arriving soon.</td></tr>
              <tr><td className="px-4 py-2 border-b">it's</td><td className="px-4 py-2 border-b">it is / it has</td><td className="px-4 py-2 border-b">It's raining. / It's been fun.</td></tr>
              <tr><td className="px-4 py-2 border-b">we've</td><td className="px-4 py-2 border-b">we have</td><td className="px-4 py-2 border-b">We've finished the project.</td></tr>
              <tr><td className="px-4 py-2 border-b">shouldn't</td><td className="px-4 py-2 border-b">should not</td><td className="px-4 py-2 border-b">You shouldn't worry.</td></tr>
              <tr><td className="px-4 py-2 border-b">let's</td><td className="px-4 py-2 border-b">let us</td><td className="px-4 py-2 border-b">Let's go for a walk.</td></tr>
            </tbody>
          </table>
        </div>

        <ArticleHeading>4. The Most Confusing Apostrophe Pairs</ArticleHeading>
        
        <div className="bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-700 p-4 mb-6 rounded">
          <p className="font-bold text-teal-800 dark:text-teal-200 mb-3">⚠️ It's vs. Its, The #1 Apostrophe Mistake</p>
          <p className="text-teal-700 dark:text-teal-300 mb-2"><strong>it's</strong> = contraction of "it is" or "it has"</p>
          <p className="text-teal-700 dark:text-teal-300 mb-2"><strong>its</strong> = possessive pronoun (like his, her, their)</p>
          <p className="text-teal-700 dark:text-teal-300 mt-3"><strong>Test:</strong> Replace with "it is." If it makes sense, use "it's." If not, use "its."</p>
          <p className="text-teal-700 dark:text-teal-300 mt-2">• "The dog wagged <strong>its</strong> tail." (The dog wagged it is tail? NO → "its")</p>
          <p className="text-teal-700 dark:text-teal-300">• "<strong>It's</strong> raining outside." (It is raining outside? YES → "it's")</p>
        </div>

        <ArticleParagraph><strong>Other Commonly Confused Pairs:</strong></ArticleParagraph>
        <BulletList items={[
          <><strong>you're vs. your:</strong> "You're" = you are. "Your" = possessive. "You're going to love your new car."</>,
          <><strong>they're vs. their vs. there:</strong> "They're" = they are. "Their" = possessive. "There" = location. "They're going to their house over there."</>,
          <><strong>who's vs. whose:</strong> "Who's" = who is/has. "Whose" = possessive. "Who's the person whose car is blocking the driveway?"</>,
          <><strong>we're vs. were vs. where:</strong> "We're" = we are. "Were" = past tense of "be." "Where" = location.</>
        ]}/>

        <ArticleHeading>5. When NOT to Use Apostrophes</ArticleHeading>
        
        <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 p-4 mb-6 rounded">
          <p className="font-bold text-red-800 dark:text-red-200 mb-3">❌ Common Apostrophe Errors (The "Grocer's Apostrophe")</p>
          <p className="text-red-700 dark:text-red-300 mb-2">NEVER use apostrophes to form regular plurals!</p>
          <ul className="text-red-700 dark:text-red-300 ml-4 list-disc space-y-1">
            <li>WRONG: "Apple's for sale" → CORRECT: "Apples for sale"</li>
            <li>WRONG: "The Smith's live here" → CORRECT: "The Smiths live here"</li>
            <li>WRONG: "Video's available" → CORRECT: "Videos available"</li>
            <li>WRONG: "The 1990's" → CORRECT: "The 1990s"</li>
            <li>WRONG: "Two DVD's" → CORRECT: "Two DVDs"</li>
          </ul>
        </div>

        <ArticleParagraph><strong>More Rules for When NOT to Use Apostrophes:</strong></ArticleParagraph>
        <BulletList items={[
          <><strong>Possessive pronouns NEVER take apostrophes:</strong> his, hers, its, ours, yours, theirs, whose</>,
          <><strong>Plural abbreviations usually don't need apostrophes:</strong> "CEOs," "PhDs," "FAQs" (though some style guides accept "FAQ's")</>,
          <><strong>Decades:</strong> "the 1980s" NOT "the 1980's" (though the apostrophe version was once common)</>,
          <><strong>Family names in plural:</strong> "The Johnsons" NOT "The Johnson's" (unless showing possession: "The Johnsons' house")</>
        ]}/>

        <ArticleHeading>6. Special Uses of Apostrophes</ArticleHeading>
        
        <ArticleParagraph><strong>Omitted Numbers:</strong></ArticleParagraph>
        <ExampleList items={[
          "the '90s (the 1990s)",
          "class of '22 (class of 2022)",
          "the spirit of '76 (1776)"
        ]} />

        <ArticleParagraph><strong>Omitted Letters in Dialect or Casual Speech:</strong></ArticleParagraph>
        <ExampleList items={[
          "rock 'n' roll",
          "'cause (because)",
          "singin' and dancin'",
          "y'all (you all)"
        ]} />

        <ArticleParagraph><strong>Plurals of Single Letters (for clarity):</strong></ArticleParagraph>
        <ArticleParagraph>
          To avoid confusion, apostrophes are sometimes used when pluralizing single letters:
        </ArticleParagraph>
        <ExampleList items={[
          "Mind your p's and q's.",
          "She got all A's on her report card.",
          "Dot your i's and cross your t's."
        ]} />

        <ArticleHeading>Practice: Spot the Errors</ArticleHeading>
        <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700 mb-6">
          <p className="text-slate-700 dark:text-slate-300 mb-3">Can you find the apostrophe errors in these sentences?</p>
          <ol className="text-slate-700 dark:text-slate-300 ml-4 list-decimal space-y-2">
            <li>"The dog wagged it's tail happily." (Should be: its)</li>
            <li>"Fresh tomato's for sale!" (Should be: tomatoes)</li>
            <li>"Your going to love this movie." (Should be: You're)</li>
            <li>"The childrens' playground needs repair." (Should be: children's)</li>
            <li>"Whose coming to the party?" (Should be: Who's)</li>
          </ol>
        </div>

        <ArticleHeading>Frequently Asked Questions</ArticleHeading>
        <div className="space-y-4 mb-6">
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700">
            <p className="font-semibold text-slate-800 dark:text-slate-200">Should I write "James's" or "James'"?</p>
            <p className="text-slate-600 dark:text-slate-400 mt-2">Both are correct. Traditional rule: Add 's (James's). Modern alternative: Add just an apostrophe (James'). The key is consistency throughout your document. Chicago Manual of Style prefers "James's" while AP Style prefers "James'".</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700">
            <p className="font-semibold text-slate-800 dark:text-slate-200">Is it "1990s" or "1990's"?</p>
            <p className="text-slate-600 dark:text-slate-400 mt-2">Modern style guides recommend "1990s" without an apostrophe. The apostrophe version ("1990's") is considered outdated, though you might still see it in older texts.</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700">
            <p className="font-semibold text-slate-800 dark:text-slate-200">How do I make "it" possessive?</p>
            <p className="text-slate-600 dark:text-slate-400 mt-2">"Its" (no apostrophe) is possessive. "It's" (with apostrophe) always means "it is" or "it has." This is confusing because normally possessives have apostrophes, but possessive pronouns (his, hers, its, whose, theirs) never do.</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700">
            <p className="font-semibold text-slate-800 dark:text-slate-200">What about possessives with inanimate objects?</p>
            <p className="text-slate-600 dark:text-slate-400 mt-2">While "of" phrases are sometimes preferred for inanimate objects (the leg of the table), apostrophes are widely accepted: "the table's leg," "the building's entrance," "the car's engine." Both forms are grammatically correct.</p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 'semicolons-colons',
    title: 'Semicolons & Colons',
    category: 'Punctuation',
    content: (
      <>
        <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-4 mb-6 rounded-r">
          <p className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Quick Summary</p>
          <p className="text-blue-700 dark:text-blue-300 text-sm">Semicolons (;) connect closely related independent clauses and separate items in complex lists. Colons (:) introduce lists, explanations, or emphasis. Both marks add sophistication to your writing when used correctly.</p>
        </div>

        <ArticleParagraph>
          Semicolons and colons are powerful punctuation marks that many writers avoid because they seem confusing. However, mastering these marks can make your writing more sophisticated, clearer, and more professional. While commas and periods handle most punctuation needs, semicolons and colons fill important gaps that other punctuation cannot.
        </ArticleParagraph>

        <ArticleHeading>Part 1: The Semicolon (;)</ArticleHeading>
        
        <ArticleParagraph>
          The semicolon is stronger than a comma but weaker than a period. Think of it as a "soft period"-it indicates a closer relationship between two ideas than a period would, but maintains the separation between distinct thoughts.
        </ArticleParagraph>

        <ArticleHeading>Rule 1: Joining Related Independent Clauses</ArticleHeading>
        <ArticleParagraph>
          Use a semicolon to connect two independent clauses (complete sentences) that are closely related in meaning. This is the most common use of the semicolon.
        </ArticleParagraph>
        <ExampleList items={[
          "I have a big test tomorrow; I can't go out tonight.",
          "The weather was beautiful; we decided to have a picnic.",
          "She loves classical music; her brother prefers jazz.",
          "Some people learn by reading; others learn by doing.",
          "The project was challenging; however, we completed it on time."
        ]} />

        <div className="bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-700 p-4 mb-6 rounded">
          <p className="font-bold text-teal-800 dark:text-teal-200 mb-2">⚠️ Important Rule</p>
          <p className="text-teal-700 dark:text-teal-300">Both clauses joined by a semicolon must be complete sentences (independent clauses). Each side must have a subject and verb and be able to stand alone.</p>
          <p className="text-teal-700 dark:text-teal-300 mt-2">CORRECT: "I love pizza; it's my favorite food."</p>
          <p className="text-teal-700 dark:text-teal-300">WRONG: "I love pizza; especially pepperoni." (not a complete sentence)</p>
        </div>

        <ArticleHeading>Rule 2: With Transitional Words</ArticleHeading>
        <ArticleParagraph>
          Use a semicolon before transitional words (conjunctive adverbs) like <em>however</em>, <em>therefore</em>, <em>moreover</em>, <em>nevertheless</em>, <em>furthermore</em>, <em>consequently</em>, etc., when they connect two independent clauses. Follow the transitional word with a comma.
        </ArticleParagraph>
        <ExampleList items={[
          "The budget was tight; however, we managed to complete the project.",
          "She studied for weeks; therefore, she passed the exam easily.",
          "The team worked overtime; consequently, they met the deadline.",
          "He is very talented; moreover, he works incredibly hard.",
          "The weather forecast predicted rain; nevertheless, we went hiking."
        ]} />

        <ArticleParagraph><strong>Common Transitional Words:</strong></ArticleParagraph>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded">
            <thead className="bg-slate-100 dark:bg-slate-700">
              <tr>
                <th className="px-4 py-2 border-b text-left text-slate-800 dark:text-slate-200">Purpose</th>
                <th className="px-4 py-2 border-b text-left text-slate-800 dark:text-slate-200">Transitional Words</th>
              </tr>
            </thead>
            <tbody className="text-slate-700 dark:text-slate-300">
              <tr><td className="px-4 py-2 border-b">Contrast</td><td className="px-4 py-2 border-b">however, nevertheless, nonetheless, still, instead</td></tr>
              <tr><td className="px-4 py-2 border-b">Result</td><td className="px-4 py-2 border-b">therefore, consequently, thus, hence, accordingly</td></tr>
              <tr><td className="px-4 py-2 border-b">Addition</td><td className="px-4 py-2 border-b">moreover, furthermore, additionally, also, besides</td></tr>
              <tr><td className="px-4 py-2 border-b">Time</td><td className="px-4 py-2 border-b">meanwhile, subsequently, thereafter, later</td></tr>
              <tr><td className="px-4 py-2 border-b">Example</td><td className="px-4 py-2 border-b">for example, for instance, namely, specifically</td></tr>
            </tbody>
          </table>
        </div>

        <ArticleHeading>Rule 3: Super Commas in Complex Lists</ArticleHeading>
        <ArticleParagraph>
          When listing items that already contain commas, use semicolons to separate the items. This prevents confusion and acts like a "super comma."
        </ArticleParagraph>
        <ExampleList items={[
          "The conference attendees came from London, England; Paris, France; Tokyo, Japan; and Sydney, Australia.",
          "The committee includes Dr. Smith, the director; Ms. Johnson, the manager; and Mr. Brown, the coordinator.",
          "We visited Rome, Italy, in spring; Berlin, Germany, in summer; and Prague, Czech Republic, in fall.",
          "The winners were: John, first place; Mary, second place; and Tom, third place."
        ]} />

        <ArticleHeading>Part 2: The Colon (:)</ArticleHeading>
        
        <ArticleParagraph>
          The colon is an announcing punctuation mark-it signals that something important is coming. It says to the reader: "Here's what I'm talking about" or "Here's what I mean."
        </ArticleParagraph>

        <ArticleHeading>Rule 1: Introducing a List</ArticleHeading>
        <ArticleParagraph>
          Use a colon to introduce a list when the introductory statement is a complete sentence (independent clause).
        </ArticleParagraph>
        <ExampleList items={[
          "I need three things from the store: milk, bread, and eggs.",
          "The recipe calls for several spices: cumin, paprika, turmeric, and coriander.",
          "She has visited many countries: France, Italy, Spain, Germany, and Portugal.",
          "The company has three main goals: increase revenue, expand market share, and improve customer satisfaction."
        ]} />

        <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 p-4 mb-6 rounded">
          <p className="font-bold text-red-800 dark:text-red-200 mb-2">❌ Common Colon Error</p>
          <p className="text-red-700 dark:text-red-300 mb-2">Do NOT use a colon after an incomplete sentence or after "such as," "including," or "like."</p>
          <p className="text-red-700 dark:text-red-300">WRONG: "The ingredients are: flour, sugar, and butter."</p>
          <p className="text-green-700 dark:text-green-300">CORRECT: "The ingredients are flour, sugar, and butter."</p>
          <p className="text-green-700 dark:text-green-300">CORRECT: "The recipe requires three ingredients: flour, sugar, and butter."</p>
          <p className="text-red-700 dark:text-red-300 mt-2">WRONG: "I enjoy activities such as: hiking, reading, and cooking."</p>
          <p className="text-green-700 dark:text-green-300">CORRECT: "I enjoy activities such as hiking, reading, and cooking."</p>
        </div>

        <ArticleHeading>Rule 2: Introducing Explanations or Elaborations</ArticleHeading>
        <ArticleParagraph>
          Use a colon when the second clause explains, illustrates, or amplifies the first.
        </ArticleParagraph>
        <ExampleList items={[
          "He had one goal in mind: to win the championship.",
          "She finally understood the problem: the system was outdated.",
          "Remember this rule: always check your work twice.",
          "There was only one solution: start over from the beginning.",
          "Life is like a box of chocolates: you never know what you're going to get."
        ]} />

        <ArticleHeading>Rule 3: Introducing Quotations</ArticleHeading>
        <ArticleParagraph>
          Use a colon to introduce a formal quotation or when the quotation is more than one sentence.
        </ArticleParagraph>
        <ExampleList items={[
          "Shakespeare wrote: \"To be or not to be, that is the question.\"",
          "The sign clearly stated: \"No parking allowed. Violators will be towed.\"",
          "As the CEO announced: \"We will be expanding to three new markets this year.\""
        ]} />

        <ArticleHeading>Rule 4: Other Colon Uses</ArticleHeading>
        <ArticleParagraph><strong>Time:</strong></ArticleParagraph>
        <ExampleList items={["The meeting starts at 3:30 PM.", "The train departs at 08:15."]} />

        <ArticleParagraph><strong>Ratios:</strong></ArticleParagraph>
        <ExampleList items={["The ratio of students to teachers is 20:1.", "Mix the ingredients in a 2:1 proportion."]} />

        <ArticleParagraph><strong>Titles and Subtitles:</strong></ArticleParagraph>
        <ExampleList items={["Harry Potter: The Sorcerer's Stone", "Grammar Guide: A Complete Reference for Writers"]} />

        <ArticleParagraph><strong>Business Letters (Salutations):</strong></ArticleParagraph>
        <ExampleList items={["Dear Mr. Johnson:", "To Whom It May Concern:"]} />

        <ArticleParagraph><strong>Biblical and Legal Citations:</strong></ArticleParagraph>
        <ExampleList items={["Genesis 1:1", "The court cited Smith v. Jones, 123 F.3d 456:78"]} />

        <ArticleHeading>Semicolons vs. Colons: Quick Comparison</ArticleHeading>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded">
            <thead className="bg-slate-100 dark:bg-slate-700">
              <tr>
                <th className="px-4 py-2 border-b text-left text-slate-800 dark:text-slate-200">Semicolon (;)</th>
                <th className="px-4 py-2 border-b text-left text-slate-800 dark:text-slate-200">Colon (:)</th>
              </tr>
            </thead>
            <tbody className="text-slate-700 dark:text-slate-300">
              <tr><td className="px-4 py-2 border-b">Connects equal parts</td><td className="px-4 py-2 border-b">Introduces what follows</td></tr>
              <tr><td className="px-4 py-2 border-b">Between independent clauses</td><td className="px-4 py-2 border-b">Before lists, explanations, quotations</td></tr>
              <tr><td className="px-4 py-2 border-b">Shows close relationship</td><td className="px-4 py-2 border-b">Shows "here it is" relationship</td></tr>
              <tr><td className="px-4 py-2 border-b">Acts as a soft period</td><td className="px-4 py-2 border-b">Acts as an announcer</td></tr>
              <tr><td className="px-4 py-2 border-b">Separates complex list items</td><td className="px-4 py-2 border-b">Introduces complete lists</td></tr>
            </tbody>
          </table>
        </div>

        <ArticleHeading>Common Mistakes to Avoid</ArticleHeading>
        <BulletList items={[
          <><strong>Using a semicolon with a fragment:</strong> Both parts must be complete sentences. "I love hiking; especially in the mountains" is WRONG.</>,
          <><strong>Using a colon after an incomplete phrase:</strong> "My favorite colors are: blue and green" is WRONG. Remove the colon.</>,
          <><strong>Using a colon after "such as," "including," or "like":</strong> These words already serve as introducers.</>,
          <><strong>Overusing semicolons:</strong> One or two per paragraph is usually enough. Overuse makes writing feel heavy.</>,
          <><strong>Using a semicolon where a comma belongs:</strong> "Although I was tired; I kept working" is WRONG. Use a comma after "tired."</>
        ]}/>

        <ArticleHeading>Frequently Asked Questions</ArticleHeading>
        <div className="space-y-4 mb-6">
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700">
            <p className="font-semibold text-slate-800 dark:text-slate-200">Can I use a semicolon instead of a period?</p>
            <p className="text-slate-600 dark:text-slate-400 mt-2">Yes, but only when the two sentences are closely related in meaning. The semicolon signals to readers that the ideas are connected. If the sentences aren't closely related, use a period.</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700">
            <p className="font-semibold text-slate-800 dark:text-slate-200">Should I capitalize after a colon?</p>
            <p className="text-slate-600 dark:text-slate-400 mt-2">It depends. Capitalize the first word after a colon if it begins a complete sentence (especially in American English) or if it's a proper noun. Don't capitalize if it's a list of words or phrases.</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700">
            <p className="font-semibold text-slate-800 dark:text-slate-200">Can I use conjunctions with semicolons?</p>
            <p className="text-slate-600 dark:text-slate-400 mt-2">Generally, you don't need both. Use "I was tired, so I slept" (comma + conjunction) OR "I was tired; I slept" (semicolon). You CAN use a semicolon before transitional words like "however" or "therefore": "I was tired; however, I kept working."</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700">
            <p className="font-semibold text-slate-800 dark:text-slate-200">Are semicolons too formal for everyday writing?</p>
            <p className="text-slate-600 dark:text-slate-400 mt-2">Semicolons are more common in formal and academic writing, but they're not inappropriate in casual writing when used correctly. Many professional writers use them sparingly for variety and precision.</p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 'quotation-marks',
    title: 'Quotation Marks',
    category: 'Punctuation',
    content: (
      <>
        <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-4 mb-6 rounded-r">
          <p className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Quick Summary</p>
          <p className="text-blue-700 dark:text-blue-300 text-sm">Quotation marks (" ") enclose direct speech, exact quotes, and titles of short works. American and British English have different rules for punctuation placement. Mastering quotation marks is essential for academic writing, dialogue, and professional communication.</p>
        </div>

        <ArticleParagraph>
          Quotation marks are punctuation marks that set off direct speech, exact quotations, and titles of certain works. While they may seem straightforward, quotation marks have nuanced rules-especially regarding punctuation placement-that differ between American and British English. Understanding these rules is crucial for academic papers, creative writing, journalism, and professional documents.
        </ArticleParagraph>

        <ArticleHeading>1. Direct Quotations</ArticleHeading>
        <ArticleParagraph>
          Use quotation marks to enclose the exact words spoken or written by someone. This is called a <strong>direct quotation</strong>.
        </ArticleParagraph>
        <ExampleList items={[
          "\"I am going to the library,\" she said.",
          "He asked, \"Have you finished your homework?\"",
          "\"Please close the door,\" the teacher requested.",
          "She shouted, \"Watch out for the car!\"",
          "\"I'll be there at noon,\" John promised."
        ]} />

        <ArticleParagraph>
          <strong>Note:</strong> Do NOT use quotation marks for indirect quotations (paraphrased speech):
        </ArticleParagraph>
        <ExampleList items={[
          "Direct: She said, \"I'm tired.\"",
          "Indirect: She said that she was tired. (no quotation marks)",
          "Direct: He asked, \"Where are you going?\"",
          "Indirect: He asked where I was going. (no quotation marks)"
        ]} />

        <ArticleHeading>2. Punctuation with Quotation Marks: American vs. British Rules</ArticleHeading>
        
        <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700 mb-6">
          <p className="font-bold text-slate-800 dark:text-slate-200 mb-3">🇺🇸 American English Rules</p>
          <ul className="text-slate-700 dark:text-slate-300 ml-4 list-disc space-y-1">
            <li><strong>Commas and periods ALWAYS go inside</strong> closing quotation marks</li>
            <li>Colons and semicolons go OUTSIDE closing quotation marks</li>
            <li>Question marks and exclamation points: inside if part of the quote, outside if not</li>
          </ul>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700 mb-6">
          <p className="font-bold text-slate-800 dark:text-slate-200 mb-3">🇬🇧 British English Rules</p>
          <ul className="text-slate-700 dark:text-slate-300 ml-4 list-disc space-y-1">
            <li>Commas and periods: inside if part of the quote, outside if not (logical punctuation)</li>
            <li>Single quotation marks ('...') are preferred for regular quotes</li>
            <li>Double quotation marks ("...") are used for quotes within quotes</li>
          </ul>
        </div>

        <ArticleParagraph><strong>American English Examples:</strong></ArticleParagraph>
        <ExampleList items={[
          "\"I don't know,\" he replied. (comma inside)",
          "She called it a \"masterpiece.\" (period inside)",
          "The article discusses \"quantum computing\"; however, it's quite technical. (semicolon outside)",
          "Have you read \"War and Peace\"? (question mark outside-not part of the title)",
          "She asked, \"What time is it?\" (question mark inside-part of the quote)"
        ]} />

        <ArticleHeading>3. Single vs. Double Quotation Marks</ArticleHeading>
        
        <ArticleParagraph><strong>American English:</strong> Double quotation marks for regular quotes; single for quotes within quotes.</ArticleParagraph>
        <ExampleList items={[
          "She said, \"He told me, 'I'll be late,' and then he left.\"",
          "The professor explained, \"The term 'paradigm shift' was coined by Thomas Kuhn.\""
        ]} />

        <ArticleParagraph><strong>British English:</strong> Single quotation marks for regular quotes; double for quotes within quotes.</ArticleParagraph>
        <ExampleList items={[
          "'She said, \"He'll be late,\" and then she left.'",
          "'The term \"globalisation\" has different meanings in different contexts.'"
        ]} />

        <ArticleHeading>4. Quotation Marks for Titles</ArticleHeading>
        <ArticleParagraph>
          Use quotation marks for titles of <strong>short works</strong> or works that are part of a larger whole. Use italics (or underlining) for titles of full-length works.
        </ArticleParagraph>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded">
            <thead className="bg-slate-100 dark:bg-slate-700">
              <tr>
                <th className="px-4 py-2 border-b text-left text-slate-800 dark:text-slate-200">Quotation Marks " "</th>
                <th className="px-4 py-2 border-b text-left text-slate-800 dark:text-slate-200">Italics (Larger Works)</th>
              </tr>
            </thead>
            <tbody className="text-slate-700 dark:text-slate-300">
              <tr><td className="px-4 py-2 border-b">Articles: "Climate Change Today"</td><td className="px-4 py-2 border-b"><em>The New York Times</em> (newspaper)</td></tr>
              <tr><td className="px-4 py-2 border-b">Short stories: "The Lottery"</td><td className="px-4 py-2 border-b"><em>The Complete Stories</em> (collection)</td></tr>
              <tr><td className="px-4 py-2 border-b">Poems: "The Road Not Taken"</td><td className="px-4 py-2 border-b"><em>The Poetry of Robert Frost</em> (book)</td></tr>
              <tr><td className="px-4 py-2 border-b">Songs: "Bohemian Rhapsody"</td><td className="px-4 py-2 border-b"><em>A Night at the Opera</em> (album)</td></tr>
              <tr><td className="px-4 py-2 border-b">TV episodes: "The One Where..."</td><td className="px-4 py-2 border-b"><em>Friends</em> (TV series)</td></tr>
              <tr><td className="px-4 py-2 border-b">Essays: "Self-Reliance"</td><td className="px-4 py-2 border-b"><em>Essays: First Series</em> (book)</td></tr>
              <tr><td className="px-4 py-2 border-b">Chapter titles: "Chapter 1"</td><td className="px-4 py-2 border-b"><em>Harry Potter</em> (book)</td></tr>
            </tbody>
          </table>
        </div>

        <ExampleList items={[
          "My favorite poem is \"The Raven\" by Edgar Allan Poe.",
          "Have you read the article \"10 Tips for Better Writing\"?",
          "The episode \"The Contest\" is a classic Seinfeld moment.",
          "I just listened to \"Here Comes the Sun\" from the album Abbey Road."
        ]} />

        <ArticleHeading>5. Quotation Marks for Special Terms</ArticleHeading>
        <ArticleParagraph>
          Use quotation marks to indicate words used in special ways:
        </ArticleParagraph>

        <ArticleParagraph><strong>Words used ironically or with skepticism (scare quotes):</strong></ArticleParagraph>
        <ExampleList items={[
          "The \"fresh\" fish smelled like it had been sitting out for days.",
          "His \"help\" only made things worse.",
          "The company's \"voluntary\" overtime was anything but optional."
        ]} />
        <div className="bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-700 p-4 mb-6 rounded">
          <p className="text-teal-800 dark:text-teal-200">⚠️ <strong>Warning:</strong> Avoid overusing scare quotes. They can seem sarcastic or passive-aggressive. Use them sparingly and intentionally.</p>
        </div>

        <ArticleParagraph><strong>Words being defined or introduced:</strong></ArticleParagraph>
        <ExampleList items={[
          "The word \"serendipity\" means a fortunate accident.",
          "In grammar, a \"clause\" is a group of words containing a subject and verb.",
          "\"Ghosting\" refers to suddenly cutting off all communication."
        ]} />

        <ArticleParagraph><strong>Technical terms or jargon (first use):</strong></ArticleParagraph>
        <ExampleList items={[
          "The process of \"onboarding\" new employees takes about two weeks.",
          "Scientists call this phenomenon \"quantum entanglement.\""
        ]} />

        <ArticleHeading>6. Block Quotations</ArticleHeading>
        <ArticleParagraph>
          For longer quotations (usually 4+ lines or 40+ words), use a block quote format instead of quotation marks:
        </ArticleParagraph>
        <BulletList items={[
          <>Start on a new line</>,
          <>Indent the entire quotation (usually 0.5 inch or 1.27 cm)</>,
          <>Do NOT use quotation marks (the indentation serves this purpose)</>,
          <>Include the citation at the end</>
        ]} />

        <ArticleHeading>7. Dialogue Formatting</ArticleHeading>
        <ArticleParagraph>
          When writing dialogue, follow these conventions:
        </ArticleParagraph>
        <BulletList items={[
          <><strong>New paragraph for each speaker:</strong> Start a new paragraph every time the speaker changes.</>,
          <><strong>Dialogue tags:</strong> Use commas to connect dialogue to speaker tags ("said," "asked," "replied").</>,
          <><strong>Action beats:</strong> Use periods when the speaker tag is replaced by action.</>
        ]} />

        <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700 mb-6">
          <p className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Example Dialogue:</p>
          <p className="text-slate-700 dark:text-slate-300">"Where are you going?" Sarah asked.</p>
          <p className="text-slate-700 dark:text-slate-300 mt-2">"To the store," John replied. "We need milk."</p>
          <p className="text-slate-700 dark:text-slate-300 mt-2">Sarah grabbed her keys. "I'll come with you."</p>
          <p className="text-slate-700 dark:text-slate-300 mt-2">"Great!" He smiled. "Let's take your car."</p>
        </div>

        <ArticleHeading>Common Mistakes to Avoid</ArticleHeading>
        <BulletList items={[
          <><strong>Using quotation marks for emphasis:</strong> WRONG: We have "fresh" bread daily. (Unless you mean the bread isn't actually fresh.)</>,
          <><strong>Forgetting to close quotation marks:</strong> Always ensure quotes are properly closed.</>,
          <><strong>Incorrect punctuation placement:</strong> In American English, periods and commas always go inside.</>,
          <><strong>Mixing single and double incorrectly:</strong> Be consistent with your style (American vs. British).</>,
          <><strong>Using quotes for indirect speech:</strong> She said that she "was tired." WRONG → She said that she was tired.</>
        ]}/>

        <ArticleHeading>Frequently Asked Questions</ArticleHeading>
        <div className="space-y-4 mb-6">
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700">
            <p className="font-semibold text-slate-800 dark:text-slate-200">Should I use single or double quotation marks?</p>
            <p className="text-slate-600 dark:text-slate-400 mt-2">In American English, use double quotation marks for regular quotes and single for quotes within quotes. British English typically does the opposite. Follow the style guide for your context (academic, journalistic, etc.).</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700">
            <p className="font-semibold text-slate-800 dark:text-slate-200">Where do I put the period-inside or outside the quotation marks?</p>
            <p className="text-slate-600 dark:text-slate-400 mt-2">In American English, periods always go inside closing quotation marks. In British English, it depends on whether the period is part of the quoted material (logical punctuation).</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700">
            <p className="font-semibold text-slate-800 dark:text-slate-200">Can I use quotation marks for emphasis?</p>
            <p className="text-slate-600 dark:text-slate-400 mt-2">No! This is a common mistake. Quotation marks suggest irony, skepticism, or that you're using a term loosely. For emphasis, use italics, bold, or capitalization instead.</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700">
            <p className="font-semibold text-slate-800 dark:text-slate-200">Do I need quotation marks for thoughts?</p>
            <p className="text-slate-600 dark:text-slate-400 mt-2">It depends on the style. Some writers use quotation marks for direct thoughts, others use italics, and some use neither. Be consistent throughout your writing. Example: She thought, "This is going to be a long day." OR: She thought, <em>This is going to be a long day.</em></p>
          </div>
        </div>
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
        {/* Quick Summary for AI/GEO */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-6 rounded-r-lg">
          <h4 className="font-semibold text-lg mb-2 text-slate-900 dark:text-slate-100">Quick Summary</h4>
          <p className="text-slate-700 dark:text-slate-300">
            Both <strong>used to</strong> and <strong>would</strong> describe past habits, but only <strong>used to</strong> works for past states. "I used to live in Paris" is correct. "I would live in Paris" is not. Use "would" only for repeated past actions with a time context.
          </p>
        </div>

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

        {/* FAQ Section */}
        <ArticleHeading>Frequently Asked Questions</ArticleHeading>
        <div className="space-y-4 my-6">
          <div className="bg-slate-50 dark:bg-slate-700/50 p-5 rounded-lg">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Can I use "would" for past states?</h4>
            <p className="text-slate-700 dark:text-slate-300">No. "Would" can only describe repeated past actions, not states. Say <strong>"I used to have a dog"</strong> (state), not "I would have a dog."</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-700/50 p-5 rounded-lg">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">What's the difference between "used to" and "be used to"?</h4>
            <p className="text-slate-700 dark:text-slate-300"><strong>"Used to + infinitive"</strong> describes something that happened in the past but no longer happens. <strong>"Be used to + -ing"</strong> means to be accustomed to something now. Example: "I used to drive" (past) vs. "I'm used to driving" (accustomed now).</p>
          </div>
        </div>

        <ArticleParagraph>
          <strong>Related topics:</strong> <Link to="/topics/past-simple/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Past Simple Tense</Link> · <Link to="/topics/wish-vs-hope/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Wish vs Hope</Link> · <Link to="/topics/conditionals/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Conditionals</Link>
        </ArticleParagraph>
      </>
    ),
  },
  
  {
    id: 'wish-vs-hope',
    title: 'Wish vs Hope',
    category: 'Common Confusions',
    content: (
      <>
        {/* Quick Summary for AI/GEO */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-6 rounded-r-lg">
          <h4 className="font-semibold text-lg mb-2 text-slate-900 dark:text-slate-100">Quick Summary</h4>
          <p className="text-slate-700 dark:text-slate-300">
            Use <strong>hope</strong> for things that are possible: "I hope I pass the exam." Use <strong>wish</strong> for things that are impossible or unlikely: "I wish I were taller." Wish uses past tense for present unreal situations and past perfect for past regrets.
          </p>
        </div>

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
          For regrets about the past-things you wish had happened differently but didn't.
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

        {/* FAQ Section */}
        <ArticleHeading>Frequently Asked Questions</ArticleHeading>
        <div className="space-y-4 my-6">
          <div className="bg-slate-50 dark:bg-slate-700/50 p-5 rounded-lg">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Can I say "I wish I will pass the exam"?</h4>
            <p className="text-slate-700 dark:text-slate-300">No. Since a future exam result is possible, use <strong>hope</strong>: "I hope I will pass the exam." "Wish" is for impossible or unlikely situations, not possible future outcomes.</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-700/50 p-5 rounded-lg">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Why does "wish" use past tense for present situations?</h4>
            <p className="text-slate-700 dark:text-slate-300">English uses past tense after "wish" to signal unreality, the situation is contrary to fact. "I wish I were taller" uses "were" (past) to show this is not true now. This is called the <strong>subjunctive mood</strong>.</p>
          </div>
        </div>

        <ArticleParagraph>
          <strong>Related topics:</strong> <Link to="/topics/used-to-vs-would/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Used To vs Would</Link> · <Link to="/topics/conditionals/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Conditionals (If Clauses)</Link> · <Link to="/topics/subjunctive-mood/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Subjunctive Mood</Link>
        </ArticleParagraph>
      </>
    ),
  },
  ...CONFUSING_AREAS_TOPICS, // Add additional confusing topics
];
