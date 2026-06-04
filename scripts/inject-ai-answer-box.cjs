/**
 * One-off codemod: insert <AIAnswerBox> on each of the 12 verb-tense pages.
 *
 * - Adds the import if missing.
 * - Inserts the component immediately before `{/* Table of Contents *\/}`.
 * - Idempotent: if `<AIAnswerBox` already exists in the file, it skips.
 *
 * Run once: `node scripts/inject-ai-answer-box.cjs`
 * Safe to delete this script after.
 */
'use strict';

const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.resolve(__dirname, '..', 'src', 'pages');

/**
 * Per-tense content. Each entry produces an <AIAnswerBox ... /> JSX block.
 * Keep `answer` to 2–4 sentences. AI engines quote this directly.
 */
const TENSES = [
  {
    file: 'PresentSimpleTensePage.tsx',
    term: 'Present Simple Tense',
    answer:
      "The present simple tense is used for habits, daily routines, general truths, and repeated actions. It is formed with the base verb, adding -s or -es for third-person singular subjects (he, she, it). Example: \"She works in a hospital every day.\"",
    keyFacts: [
      'Formula: subject + base verb (+ -s for he/she/it)',
      'Use: habits, routines, facts, schedules, general truths',
      'Signal words: always, usually, often, sometimes, every day, never',
      'Negative: do/does + not + base verb',
      'Question: Do/Does + subject + base verb?',
    ],
    faqs: [
      {
        q: 'What is the difference between present simple and present progressive?',
        a: 'Present simple describes habits and general truths ("I work in London"). Present progressive describes actions happening right now ("I am working on a report").',
      },
      {
        q: 'When do we add -s or -es to the verb?',
        a: 'Add -s or -es only with third-person singular subjects (he, she, it, or a singular noun). Add -es when the verb ends in -s, -ss, -sh, -ch, -x, or -o (goes, watches, fixes).',
      },
      {
        q: 'Can the present simple talk about the future?',
        a: 'Yes — for fixed schedules and timetables: "The train leaves at 8 p.m." or "The conference starts on Monday."',
      },
    ],
  },
  {
    file: 'PresentProgressiveTensePage.tsx',
    term: 'Present Progressive Tense (Present Continuous)',
    answer:
      "The present progressive tense describes actions happening right now, temporary situations, and definite future plans. It is formed with am/is/are + the -ing form of the verb. Example: \"I am studying English at the moment.\"",
    keyFacts: [
      'Formula: subject + am/is/are + verb-ing',
      'Use: actions in progress now, temporary situations, future arrangements',
      'Signal words: now, right now, at the moment, currently, today, this week',
      'Negative: am/is/are + not + verb-ing',
      'Question: Am/Is/Are + subject + verb-ing?',
    ],
    faqs: [
      {
        q: 'What verbs cannot be used in the present progressive?',
        a: 'Stative verbs (know, believe, love, want, need, seem, belong) are usually not used in the progressive. Say "I know" not "I am knowing".',
      },
      {
        q: 'Can the present progressive talk about the future?',
        a: 'Yes — for fixed plans and arrangements: "I am meeting Sarah tomorrow at 5 p.m."',
      },
    ],
  },
  {
    file: 'PresentPerfectTensePage.tsx',
    term: 'Present Perfect Tense',
    answer:
      "The present perfect tense connects a past action to the present moment. It is formed with have/has + the past participle of the verb. It is used for life experiences, recent actions with present results, and actions that started in the past and continue now. Example: \"I have lived in London for five years.\"",
    keyFacts: [
      'Formula: subject + have/has + past participle',
      'Use: life experiences, unfinished time periods, recent actions with present relevance',
      'Signal words: just, already, yet, ever, never, since, for, recently, so far',
      'Negative: have/has + not + past participle',
      'Question: Have/Has + subject + past participle?',
    ],
    faqs: [
      {
        q: 'What is the difference between present perfect and past simple?',
        a: 'Past simple describes a finished action at a specific past time ("I visited Paris in 2019"). Present perfect describes a past action with present relevance or no specific time ("I have visited Paris three times").',
      },
      {
        q: 'When do we use "since" vs "for" with present perfect?',
        a: 'Use "since" with a starting point in time ("since 2020", "since Monday"). Use "for" with a duration ("for five years", "for two hours").',
      },
      {
        q: 'Can I use the present perfect with "yesterday" or "last week"?',
        a: 'No. Present perfect cannot be used with finished time expressions. Use past simple instead: "I saw him yesterday" (not "I have seen him yesterday").',
      },
    ],
  },
  {
    file: 'PresentPerfectProgressiveTensePage.tsx',
    term: 'Present Perfect Progressive Tense (Present Perfect Continuous)',
    answer:
      "The present perfect progressive describes an action that started in the past and is still continuing now, with emphasis on the duration of the activity. It is formed with have/has been + the -ing form of the verb. Example: \"I have been studying English for three hours.\"",
    keyFacts: [
      'Formula: subject + have/has + been + verb-ing',
      'Use: ongoing past-to-present actions, emphasis on duration, recent activity with visible results',
      'Signal words: for, since, all day, lately, recently, how long',
      'Negative: have/has + not + been + verb-ing',
      'Question: Have/Has + subject + been + verb-ing?',
    ],
    faqs: [
      {
        q: 'What is the difference between present perfect and present perfect progressive?',
        a: 'Present perfect focuses on the completion or result ("I have written three emails"). Present perfect progressive focuses on the duration of the activity ("I have been writing emails for two hours").',
      },
      {
        q: 'Can stative verbs be used in the present perfect progressive?',
        a: 'No. Verbs like know, love, believe, and own cannot take the progressive form. Use the present perfect instead: "I have known her for years" (not "I have been knowing her").',
      },
    ],
  },
  {
    file: 'PastSimpleTensePage.tsx',
    term: 'Past Simple Tense',
    answer:
      "The past simple tense describes completed actions at a specific time in the past. Regular verbs add -ed; irregular verbs use unique past forms. Example: \"She visited Rome last summer.\"",
    keyFacts: [
      'Formula: subject + verb-ed (regular) OR irregular past form',
      'Use: finished actions, completed events, past habits, sequences in the past',
      'Signal words: yesterday, last week, in 2020, ago, when, then',
      'Negative: did + not + base verb',
      'Question: Did + subject + base verb?',
    ],
    faqs: [
      {
        q: 'What is the difference between past simple and present perfect?',
        a: 'Past simple is used with a specific finished time ("I saw the film last night"). Present perfect is used when the time is not specified or the action has present relevance ("I have seen that film").',
      },
      {
        q: 'How do I form the past simple of irregular verbs?',
        a: 'Irregular verbs do not follow the -ed rule. Common examples: go → went, see → saw, take → took, eat → ate, write → wrote. Memorize the top 100 irregular verbs to cover most cases.',
      },
    ],
  },
  {
    file: 'PastProgressiveTensePage.tsx',
    term: 'Past Progressive Tense (Past Continuous)',
    answer:
      "The past progressive tense describes an action that was in progress at a specific time in the past, often interrupted by another past action. It is formed with was/were + the -ing form of the verb. Example: \"I was reading when the phone rang.\"",
    keyFacts: [
      'Formula: subject + was/were + verb-ing',
      'Use: actions in progress in the past, interrupted actions, background description, parallel past actions',
      'Signal words: while, as, when, at 5 p.m. yesterday, all day',
      'Negative: was/were + not + verb-ing',
      'Question: Was/Were + subject + verb-ing?',
    ],
    faqs: [
      {
        q: 'When do we use past simple vs past progressive together?',
        a: 'Use past progressive for the longer background action and past simple for the shorter interrupting action: "I was cooking dinner when the doorbell rang."',
      },
      {
        q: 'Can stative verbs be used in the past progressive?',
        a: 'Usually no. Use the past simple instead: "I knew the answer" (not "I was knowing the answer").',
      },
    ],
  },
  {
    file: 'PastPerfectTensePage.tsx',
    term: 'Past Perfect Tense',
    answer:
      "The past perfect tense describes an action that was completed before another action or time in the past. It is formed with had + the past participle of the verb. Example: \"She had finished her homework before dinner started.\"",
    keyFacts: [
      'Formula: subject + had + past participle',
      'Use: an earlier past action, the cause of a past situation, reported speech, third conditional',
      'Signal words: before, after, by the time, already, just, when, until',
      'Negative: had + not + past participle',
      'Question: Had + subject + past participle?',
    ],
    faqs: [
      {
        q: 'When should I use the past perfect instead of the past simple?',
        a: 'Use the past perfect to show that one past action happened BEFORE another past action: "When I arrived, the meeting had already started." If two past actions happen in sequence with "and" or "then", past simple is enough.',
      },
      {
        q: 'Is past perfect required after "before" and "after"?',
        a: 'No. With "before" and "after", the time order is already clear, so past simple is often acceptable. Past perfect adds emphasis on the earlier completion.',
      },
    ],
  },
  {
    file: 'PastPerfectProgressiveTensePage.tsx',
    term: 'Past Perfect Progressive Tense (Past Perfect Continuous)',
    answer:
      "The past perfect progressive describes an ongoing action that was happening up to a specific moment in the past, with emphasis on its duration. It is formed with had been + the -ing form of the verb. Example: \"He had been working for ten hours before he took a break.\"",
    keyFacts: [
      'Formula: subject + had + been + verb-ing',
      'Use: duration of an action up to a past moment, cause of a past result, reported speech',
      'Signal words: for, since, all day, before, until, how long',
      'Negative: had + not + been + verb-ing',
      'Question: Had + subject + been + verb-ing?',
    ],
    faqs: [
      {
        q: 'What is the difference between past perfect and past perfect progressive?',
        a: 'Past perfect focuses on the completion of an earlier past action ("She had written the report"). Past perfect progressive focuses on the duration of an earlier ongoing action ("She had been writing the report for two hours").',
      },
    ],
  },
  {
    file: 'FutureSimpleTensePage.tsx',
    term: 'Future Simple Tense',
    answer:
      "The future simple tense describes actions, predictions, promises, or instant decisions about the future. It is formed with will + the base form of the verb. Example: \"I will call you tomorrow.\"",
    keyFacts: [
      'Formula: subject + will + base verb',
      'Use: predictions, promises, offers, instant decisions, future facts',
      'Signal words: tomorrow, next week, in 2030, soon, later, probably',
      'Negative: will + not (won\'t) + base verb',
      'Question: Will + subject + base verb?',
    ],
    faqs: [
      {
        q: 'What is the difference between "will" and "be going to"?',
        a: 'Use "will" for spontaneous decisions and predictions without evidence ("I\'ll help you!"). Use "be going to" for prior plans and predictions based on evidence ("It\'s going to rain — look at those clouds").',
      },
      {
        q: 'Can I use the present simple to talk about the future?',
        a: 'Yes, for timetables and schedules: "The flight departs at 7 a.m." Use the present progressive for personal arrangements: "I am meeting Sara on Friday."',
      },
    ],
  },
  {
    file: 'FutureProgressiveTensePage.tsx',
    term: 'Future Progressive Tense (Future Continuous)',
    answer:
      "The future progressive tense describes an ongoing action that will be in progress at a specific moment in the future. It is formed with will be + the -ing form of the verb. Example: \"This time tomorrow, I will be flying to Paris.\"",
    keyFacts: [
      'Formula: subject + will + be + verb-ing',
      'Use: actions in progress at a future point, polite questions about plans, predicted parallel actions',
      'Signal words: this time tomorrow, at 3 p.m. next Friday, all day, while',
      'Negative: will + not + be + verb-ing',
      'Question: Will + subject + be + verb-ing?',
    ],
    faqs: [
      {
        q: 'When do we use future progressive instead of future simple?',
        a: 'Use future progressive when you want to emphasize that the action will be in progress at a specific future time: "At 8 p.m. tonight I will be watching the game" (not just "I will watch the game").',
      },
    ],
  },
  {
    file: 'FuturePerfectTensePage.tsx',
    term: 'Future Perfect Tense',
    answer:
      "The future perfect tense describes an action that will be completed before a specific time or event in the future. It is formed with will have + the past participle of the verb. Example: \"By next June, I will have graduated from university.\"",
    keyFacts: [
      'Formula: subject + will + have + past participle',
      'Use: actions completed before a future point, deadlines, predictions about completion',
      'Signal words: by, by then, by the time, before, in two years',
      'Negative: will + not + have + past participle',
      'Question: Will + subject + have + past participle?',
    ],
    faqs: [
      {
        q: 'What is the difference between future simple and future perfect?',
        a: 'Future simple describes an action that will happen at a future time ("I will finish the project on Friday"). Future perfect describes an action that will be completed before another future point ("I will have finished the project by Friday").',
      },
    ],
  },
  {
    file: 'FuturePerfectProgressiveTensePage.tsx',
    term: 'Future Perfect Progressive Tense (Future Perfect Continuous)',
    answer:
      "The future perfect progressive describes the duration of an ongoing action up to a specific moment in the future. It is formed with will have been + the -ing form of the verb. Example: \"By next month, I will have been working here for ten years.\"",
    keyFacts: [
      'Formula: subject + will + have + been + verb-ing',
      'Use: duration of an action up to a future point, emphasis on continuous activity, predictions about ongoing future situations',
      'Signal words: by, by then, by the time, for, all day',
      'Negative: will + not + have + been + verb-ing',
      'Question: Will + subject + have + been + verb-ing?',
    ],
    faqs: [
      {
        q: 'What is the difference between future perfect and future perfect progressive?',
        a: 'Future perfect focuses on the completion of an action before a future point ("I will have written the book by December"). Future perfect progressive focuses on the duration of an ongoing action up to that future point ("I will have been writing the book for two years by December").',
      },
    ],
  },
];

function toJsxString(v) {
  // Use JSON.stringify but produce JS-string-literal form acceptable in JSX attrs.
  // For arrays/objects we emit `{...}` braces with JSON serialization.
  return JSON.stringify(v);
}

function buildBlock({ term, answer, keyFacts, faqs }) {
  // Render as JSX. ALL string props are wrapped in `{...}` so that JSON.stringify
  // output (which may contain escaped quotes like \") is valid JavaScript, not
  // raw JSX attribute text. `term="foo"` would break if `foo` contains `\"`.
  const indent = '        ';
  return (
    `${indent}{/* Quick Answer block — emits DefinedTerm + FAQPage JSON-LD for AI engines */}\n` +
    `${indent}<AIAnswerBox\n` +
    `${indent}  term={${toJsxString(term)}}\n` +
    `${indent}  answer={${toJsxString(answer)}}\n` +
    `${indent}  keyFacts={${JSON.stringify(keyFacts)}}\n` +
    `${indent}  faqs={${JSON.stringify(faqs)}}\n` +
    `${indent}/>\n\n`
  );
}

/**
 * Remove a previously-injected AIAnswerBox block (and its leading marker
 * comment) so we can safely re-inject. Matches the block produced by
 * buildBlock() above.
 */
function stripExistingBlock(src) {
  const re =
    /\s*\{\/\* Quick Answer block[^}]*\*\/\}\s*<AIAnswerBox[\s\S]*?\/>\s*\n*/;
  return src.replace(re, '\n\n        ');
}

function processFile(entry) {
  const filePath = path.join(PAGES_DIR, entry.file);
  if (!fs.existsSync(filePath)) {
    console.warn(`SKIP (not found): ${entry.file}`);
    return;
  }
  let src = fs.readFileSync(filePath, 'utf8');

  // Remove any previously-injected (possibly broken) block so we can re-inject
  // with the correct JSX. Idempotent.
  if (src.includes('<AIAnswerBox')) {
    src = stripExistingBlock(src);
  }

  // 1) Add import after SchemaMarkup import (or after first import).
  if (!src.includes("from '../components/AIAnswerBox'")) {
    const schemaImportRe =
      /(import\s+SchemaMarkup\s+from\s+'\.\.\/components\/SchemaMarkup';\n)/;
    if (schemaImportRe.test(src)) {
      src = src.replace(
        schemaImportRe,
        `$1import AIAnswerBox from '../components/AIAnswerBox';\n`
      );
    } else {
      // Fallback: insert after first import line.
      src = src.replace(
        /^(import[^\n]+\n)/,
        `$1import AIAnswerBox from '../components/AIAnswerBox';\n`
      );
    }
  }

  // 2) Insert block right before `{/* Table of Contents */}`.
  const tocMarker = '{/* Table of Contents */}';
  const idx = src.indexOf(tocMarker);
  if (idx === -1) {
    console.warn(`SKIP (no TOC marker): ${entry.file}`);
    return;
  }
  const block = buildBlock(entry);
  src = src.slice(0, idx) + block + src.slice(idx);

  fs.writeFileSync(filePath, src, 'utf8');
  console.log(`OK: ${entry.file}`);
}

for (const t of TENSES) processFile(t);
