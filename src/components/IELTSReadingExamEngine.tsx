import React, { useEffect, useMemo, useRef, useState } from 'react';

// ===== Types =====

type OptionKV = { key: string; text: string };

type BaseQ = {
  question_id: string;
  type: string;
  prompt: string;
  explanation: string;
  correct: string[];
};

type MCQ = BaseQ & {
  type: 'multiple_choice';
  options: OptionKV[];
};

type MCQMulti = BaseQ & {
  type: 'multiple_choice_multi';
  options: OptionKV[];
  select_count: number;
};

type TFNG = BaseQ & {
  type: 'true_false_notgiven';
  options: OptionKV[];
};

type YNNG = BaseQ & {
  type: 'yes_no_notgiven';
  options: OptionKV[];
};

type MatchHeadings = BaseQ & {
  type: 'matching_headings';
  heading_bank: OptionKV[];
  target_paragraph: string;
};

type MatchInfo = BaseQ & {
  type: 'matching_information';
  feature_bank: OptionKV[];
  statement: string;
};

type MatchFeatures = BaseQ & {
  type: 'matching_features';
  feature_bank: OptionKV[];
  statement: string;
};

type MatchEndings = BaseQ & {
  type: 'matching_sentence_endings';
  ending_bank: OptionKV[];
};

type SentenceCompletion = BaseQ & {
  type: 'sentence_completion';
  word_limit: string;
};

type SummaryCompletion = BaseQ & {
  type: 'summary_completion';
  word_limit: string;
  word_bank?: string[];
};

type NoteTableFlowchart = BaseQ & {
  type: 'note_table_flowchart_completion';
  word_limit: string;
};

type ShortAnswer = BaseQ & {
  type: 'short_answer';
  word_limit: string;
};

export type Question =
  | MCQ
  | MCQMulti
  | TFNG
  | YNNG
  | MatchHeadings
  | MatchInfo
  | MatchFeatures
  | MatchEndings
  | SentenceCompletion
  | SummaryCompletion
  | NoteTableFlowchart
  | ShortAnswer;

export type Passage = {
  passage_id: string;
  order: number;
  title: string;
  context_label: string;
  instructions: string;
  body: string;
  questions: Question[];
};

export type BandRow = { min_correct: number; band: number };

export type IELTSReadingTest = {
  id: string;
  exam: string;
  module: 'academic' | 'general';
  section: string;
  title: string;
  topic_summary: string;
  time_limit_seconds: number;
  passages: Passage[];
  scoring: {
    total_items: number;
    module: 'academic' | 'general';
    band_estimate: BandRow[];
  };
};

// ===== Helpers =====

const normalize = (s: string) =>
  s
    .toLowerCase()
    .trim()
    .replace(/[.,;:!?"'`]/g, '')
    .replace(/\s+/g, ' ');

const arraysEqualAsSet = (a: string[], b: string[]) => {
  if (a.length !== b.length) return false;
  const sa = new Set(a);
  return b.every((x) => sa.has(x));
};

const isCorrect = (q: Question, answer: string | string[] | undefined): boolean => {
  if (answer === undefined) return false;
  switch (q.type) {
    case 'multiple_choice':
    case 'true_false_notgiven':
    case 'yes_no_notgiven':
    case 'matching_headings':
    case 'matching_information':
    case 'matching_features':
    case 'matching_sentence_endings':
      return typeof answer === 'string' && q.correct.includes(answer);
    case 'multiple_choice_multi': {
      const arr = Array.isArray(answer) ? answer : [];
      return arraysEqualAsSet(arr, q.correct);
    }
    case 'sentence_completion':
    case 'summary_completion':
    case 'note_table_flowchart_completion':
    case 'short_answer': {
      if (typeof answer !== 'string') return false;
      const n = normalize(answer);
      if (!n) return false;
      return q.correct.some((c) => normalize(c) === n);
    }
    default:
      return false;
  }
};

const formatTime = (sec: number) => {
  const m = Math.floor(sec / 60).toString().padStart(2, '0');
  const s = (sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
};

const renderBodyWithParagraphs = (body: string) => {
  const blocks = body.split(/\n\n+/);
  return blocks.map((block, i) => {
    const match = block.match(/^\[([A-Z])\]\s*/);
    if (match) {
      const label = match[1];
      const rest = block.slice(match[0].length);
      return (
        <p key={i} className="mb-4 leading-relaxed text-slate-800 dark:text-slate-200">
          <span className="inline-block w-7 h-7 mr-2 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-bold text-center leading-7 text-sm align-middle">
            {label}
          </span>
          {rest}
        </p>
      );
    }
    return (
      <p key={i} className="mb-4 leading-relaxed text-slate-800 dark:text-slate-200 whitespace-pre-line">
        {block}
      </p>
    );
  });
};

const bandFor = (correct: number, table: BandRow[]) => {
  const sorted = [...table].sort((a, b) => b.min_correct - a.min_correct);
  for (const row of sorted) {
    if (correct >= row.min_correct) return row.band;
  }
  return sorted[sorted.length - 1]?.band ?? 0;
};

// ===== Question Renderers =====

type QProps = {
  q: Question;
  index: number;
  answer: any;
  setAnswer: (qid: string, val: any) => void;
  submitted: boolean;
};

const QuestionBlock: React.FC<QProps> = ({ q, index, answer, setAnswer, submitted }) => {
  const correct = submitted ? isCorrect(q, answer) : null;
  const borderClass = submitted
    ? correct
      ? 'border-green-400 dark:border-green-600'
      : 'border-red-400 dark:border-red-600'
    : 'border-slate-200 dark:border-slate-700';

  return (
    <div className={`p-4 mb-4 border rounded-lg bg-white dark:bg-slate-800 ${borderClass}`}>
      <div className="flex items-start gap-2 mb-3">
        <span className="font-bold text-blue-700 dark:text-blue-400 shrink-0">
          {index + 1}.
        </span>
        <div className="flex-1">
          <p className="font-medium text-slate-900 dark:text-slate-100">{q.prompt}</p>
          {'statement' in q && q.statement && (
            <p className="mt-2 italic text-slate-700 dark:text-slate-300">"{q.statement}"</p>
          )}
          {'word_limit' in q && q.word_limit && (
            <p className="mt-1 text-xs uppercase tracking-wide text-amber-700 dark:text-amber-400">
              {q.word_limit}
            </p>
          )}
          {'target_paragraph' in q && q.target_paragraph && (
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Paragraph {q.target_paragraph}
            </p>
          )}
        </div>
      </div>

      {/* MC-style options */}
      {('options' in q || 'heading_bank' in q || 'feature_bank' in q || 'ending_bank' in q) &&
        q.type !== 'multiple_choice_multi' && (() => {
          const bank: OptionKV[] =
            (q as any).options ||
            (q as any).heading_bank ||
            (q as any).feature_bank ||
            (q as any).ending_bank ||
            [];
          return (
            <div className="space-y-2 ml-6">
              {bank.map((opt) => {
                const selected = answer === opt.key;
                const isAnswerCorrect = submitted && q.correct.includes(opt.key);
                const isWrongPick = submitted && selected && !q.correct.includes(opt.key);
                return (
                  <label
                    key={opt.key}
                    className={`flex items-start gap-3 p-2 rounded cursor-pointer border ${
                      isAnswerCorrect
                        ? 'bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-700'
                        : isWrongPick
                        ? 'bg-red-50 dark:bg-red-900/20 border-red-300 dark:border-red-700'
                        : selected
                        ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-300 dark:border-blue-700'
                        : 'border-transparent hover:bg-slate-50 dark:hover:bg-slate-700/50'
                    }`}
                  >
                    <input
                      type="radio"
                      name={q.question_id}
                      value={opt.key}
                      checked={selected}
                      disabled={submitted}
                      onChange={() => setAnswer(q.question_id, opt.key)}
                      className="mt-1"
                    />
                    <span className="text-slate-800 dark:text-slate-200">
                      <strong className="mr-2">{opt.key}.</strong>
                      {opt.text}
                    </span>
                  </label>
                );
              })}
            </div>
          );
        })()}

      {/* Multi-select */}
      {q.type === 'multiple_choice_multi' && (
        <div className="space-y-2 ml-6">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
            Select {q.select_count} answers.
          </p>
          {q.options.map((opt) => {
            const selectedArr: string[] = Array.isArray(answer) ? answer : [];
            const selected = selectedArr.includes(opt.key);
            const isAnswerCorrect = submitted && q.correct.includes(opt.key);
            const isWrongPick = submitted && selected && !q.correct.includes(opt.key);
            return (
              <label
                key={opt.key}
                className={`flex items-start gap-3 p-2 rounded cursor-pointer border ${
                  isAnswerCorrect
                    ? 'bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-700'
                    : isWrongPick
                    ? 'bg-red-50 dark:bg-red-900/20 border-red-300 dark:border-red-700'
                    : selected
                    ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-300 dark:border-blue-700'
                    : 'border-transparent hover:bg-slate-50 dark:hover:bg-slate-700/50'
                }`}
              >
                <input
                  type="checkbox"
                  checked={selected}
                  disabled={submitted}
                  onChange={() => {
                    if (selected) {
                      setAnswer(q.question_id, selectedArr.filter((x) => x !== opt.key));
                    } else if (selectedArr.length < q.select_count) {
                      setAnswer(q.question_id, [...selectedArr, opt.key]);
                    }
                  }}
                  className="mt-1"
                />
                <span className="text-slate-800 dark:text-slate-200">
                  <strong className="mr-2">{opt.key}.</strong>
                  {opt.text}
                </span>
              </label>
            );
          })}
        </div>
      )}

      {/* Text input types */}
      {(q.type === 'sentence_completion' ||
        q.type === 'summary_completion' ||
        q.type === 'note_table_flowchart_completion' ||
        q.type === 'short_answer') && (
        <div className="ml-6">
          {'word_bank' in q && Array.isArray(q.word_bank) && q.word_bank.length > 0 && (
            <div className="mb-2 p-3 bg-slate-50 dark:bg-slate-700/40 rounded border border-slate-200 dark:border-slate-600">
              <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">WORD BANK</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                {q.word_bank.join(' · ')}
              </p>
            </div>
          )}
          <input
            type="text"
            value={typeof answer === 'string' ? answer : ''}
            disabled={submitted}
            onChange={(e) => setAnswer(q.question_id, e.target.value)}
            placeholder="Type your answer..."
            className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-70"
          />
        </div>
      )}

      {/* Explanation after submit */}
      {submitted && (
        <div className="mt-3 ml-6 p-3 rounded bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-700">
          <p className="text-sm">
            <strong className={correct ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'}>
              {correct ? 'Correct.' : 'Incorrect.'}
            </strong>{' '}
            <span className="text-slate-600 dark:text-slate-400">
              Answer: <strong>{q.correct.join(' / ')}</strong>
            </span>
          </p>
          <p className="text-sm mt-2 text-slate-700 dark:text-slate-300">{q.explanation}</p>
        </div>
      )}
    </div>
  );
};

// ===== Main Engine =====

type Props = { test: IELTSReadingTest };

const IELTSReadingExamEngine: React.FC<Props> = ({ test }) => {
  const [activePassage, setActivePassage] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(test.time_limit_seconds);
  const [started, setStarted] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!started || submitted) return;
    const t = setInterval(() => {
      setTimeLeft((s) => {
        if (s <= 1) {
          clearInterval(t);
          setSubmitted(true);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [started, submitted]);

  const setAnswer = (qid: string, val: any) =>
    setAnswers((prev) => ({ ...prev, [qid]: val }));

  const allQuestions = useMemo(
    () => test.passages.flatMap((p) => p.questions),
    [test]
  );

  const score = useMemo(() => {
    if (!submitted) return 0;
    return allQuestions.reduce(
      (acc, q) => acc + (isCorrect(q, answers[q.question_id]) ? 1 : 0),
      0
    );
  }, [submitted, allQuestions, answers]);

  const band = submitted ? bandFor(score, test.scoring.band_estimate) : 0;

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth' }), 50);
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
    setTimeLeft(test.time_limit_seconds);
    setStarted(false);
    setActivePassage(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Question numbering across the whole test
  const globalIndexMap = useMemo(() => {
    const map: Record<string, number> = {};
    let i = 0;
    test.passages.forEach((p) =>
      p.questions.forEach((q) => {
        map[q.question_id] = i++;
      })
    );
    return map;
  }, [test]);

  if (!started) {
    return (
      <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-slate-800 rounded-lg shadow border border-slate-200 dark:border-slate-700">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">{test.title}</h1>
        <p className="text-slate-700 dark:text-slate-300 mb-4">{test.topic_summary}</p>
        <ul className="text-sm text-slate-700 dark:text-slate-300 list-disc ml-5 mb-6 space-y-1">
          <li>3 passages, 40 questions in total.</li>
          <li>Time limit: {Math.round(test.time_limit_seconds / 60)} minutes.</li>
          <li>You can switch between passages at any time.</li>
          <li>The timer starts when you click <strong>Start Test</strong>.</li>
          <li>You will see your raw score and an estimated band when you submit.</li>
        </ul>
        <button
          onClick={() => setStarted(true)}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
        >
          Start Test
        </button>
      </div>
    );
  }

  const passage = test.passages[activePassage];
  const answeredCount = allQuestions.filter(
    (q) => answers[q.question_id] !== undefined && answers[q.question_id] !== '' && !(Array.isArray(answers[q.question_id]) && answers[q.question_id].length === 0)
  ).length;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Sticky header with timer */}
      <div className="sticky top-0 z-10 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 -mx-4 px-4 py-3 mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-lg font-semibold text-slate-900 dark:text-white">{test.title}</h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Answered {answeredCount} / {allQuestions.length}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div
            className={`px-4 py-2 rounded font-mono font-bold ${
              timeLeft < 300
                ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
                : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
            }`}
          >
            {formatTime(timeLeft)}
          </div>
          {!submitted && (
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded transition"
            >
              Submit
            </button>
          )}
        </div>
      </div>

      {/* Passage tabs */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {test.passages.map((p, i) => (
          <button
            key={p.passage_id}
            onClick={() => setActivePassage(i)}
            className={`px-3 py-2 rounded text-sm font-medium transition ${
              activePassage === i
                ? 'bg-blue-600 text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {p.context_label}
          </button>
        ))}
      </div>

      {/* Result banner */}
      {submitted && (
        <div
          ref={resultRef}
          className="mb-6 p-6 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-300 dark:border-blue-700 rounded-lg"
        >
          <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-200 mb-2">
            Your Result
          </h2>
          <p className="text-blue-800 dark:text-blue-300">
            Raw score: <strong>{score} / {test.scoring.total_items}</strong>
          </p>
          <p className="text-blue-800 dark:text-blue-300">
            Estimated band ({test.scoring.module === 'academic' ? 'Academic' : 'General Training'}):{' '}
            <strong className="text-2xl">{band}</strong>
          </p>
          <button
            onClick={handleReset}
            className="mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition"
          >
            Take Again
          </button>
        </div>
      )}

      {/* Two-pane layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Passage */}
        <div className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow border border-slate-200 dark:border-slate-700 lg:max-h-[70vh] lg:overflow-y-auto">
          <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1">
            {passage.context_label}
          </p>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            {passage.title}
          </h2>
          <p className="text-sm italic text-slate-600 dark:text-slate-400 mb-4">
            {passage.instructions}
          </p>
          <div className="prose prose-slate dark:prose-invert max-w-none">
            {renderBodyWithParagraphs(passage.body)}
          </div>
        </div>

        {/* Questions */}
        <div className="lg:max-h-[70vh] lg:overflow-y-auto pr-1">
          {passage.questions.map((q) => (
            <QuestionBlock
              key={q.question_id}
              q={q}
              index={globalIndexMap[q.question_id]}
              answer={answers[q.question_id]}
              setAnswer={setAnswer}
              submitted={submitted}
            />
          ))}

          {!submitted && activePassage === test.passages.length - 1 && (
            <button
              onClick={handleSubmit}
              className="w-full mt-4 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition"
            >
              Submit Test
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default IELTSReadingExamEngine;
