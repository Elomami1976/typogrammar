import React, { useEffect, useMemo, useRef, useState } from 'react';

// ===== Types =====

export type TOEFLCompleteWordsItem = {
  item_id: string;
  given: string;
  answer: string;
  blanks: number;
};

export type TOEFLCompleteWordsTask = {
  task_id: string;
  type: 'complete_words';
  title: string;
  directions: string;
  passage: string;
  items: TOEFLCompleteWordsItem[];
};

export type TOEFLOptions =
  | Record<string, string>
  | Array<{ key: string; text: string }>;

export type TOEFLMCQuestion = {
  question_id: string;
  type:
    | 'factual'
    | 'negative_factual'
    | 'inference'
    | 'rhetorical_purpose'
    | 'vocabulary'
    | 'reference'
    | 'sentence_simplification'
    | 'insert_text';
  prompt: string;
  options: TOEFLOptions;
  correct: string[];
  explanation: string;
  target_word?: string;
};

export type TOEFLProseSummary = {
  question_id: string;
  type: 'prose_summary';
  prompt: string;
  select_count: number;
  options: TOEFLOptions;
  correct: string[];
  explanation: string;
};

export type TOEFLAcademicQuestion = TOEFLMCQuestion | TOEFLProseSummary;

export type TOEFLDailyLifeTask = {
  task_id: string;
  type: 'daily_life';
  title: string;
  context_label?: string;
  passage: string;
  questions: TOEFLMCQuestion[];
};

export type TOEFLAcademicTask = {
  task_id: string;
  type: 'academic';
  title: string;
  passage: string;
  questions: TOEFLAcademicQuestion[];
};

export type TOEFLTask = TOEFLCompleteWordsTask | TOEFLDailyLifeTask | TOEFLAcademicTask;

export type BandRow = { min_raw: number; label: string; approx_band: string };

export type TOEFLReadingTest = {
  test_id: string;
  exam: string;
  section: string;
  format_year: number;
  title: string;
  description: string;
  time_limit_seconds: number;
  total_questions: number;
  instructions: string;
  tasks: TOEFLTask[];
  scoring: { max_raw_score: number; band_estimate: BandRow[] };
};

// ===== Helpers =====

const normalize = (s: string) =>
  s.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, ' ').replace(/\s+/g, ' ').trim();

const arraysEqualAsSet = (a: string[], b: string[]) => {
  if (a.length !== b.length) return false;
  const A = [...a].map((x) => x.toUpperCase()).sort();
  const B = [...b].map((x) => x.toUpperCase()).sort();
  return A.every((x, i) => x === B[i]);
};

const formatTime = (totalSeconds: number) => {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
};

const bandFor = (raw: number, rows: BandRow[]): BandRow => {
  const sorted = [...rows].sort((a, b) => b.min_raw - a.min_raw);
  for (const r of sorted) {
    if (raw >= r.min_raw) return r;
  }
  return sorted[sorted.length - 1];
};

// Options may be authored as either a keyed object ({A: "...", B: "..."}) or
// an array of {key, text} entries. Normalize to [key, text] tuples.
const optionEntries = (options: TOEFLOptions): Array<[string, string]> => {
  if (Array.isArray(options)) {
    return options.map((o) => [o.key, o.text] as [string, string]);
  }
  return Object.entries(options);
};

// Render a passage that contains [[1]]..[[4]] markers as numbered insertion points.
const renderInsertPassage = (
  text: string,
  highlightWord?: string,
  highlightSentence?: string,
) => {
  // Split on the insertion tokens but keep them.
  const parts = text.split(/(\[\[\d+\]\])/g);
  return (
    <>
      {parts.map((part, idx) => {
        const m = part.match(/^\[\[(\d+)\]\]$/);
        if (m) {
          return (
            <span
              key={idx}
              className="inline-flex items-center justify-center align-middle mx-1 px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 text-xs font-bold border border-blue-300 dark:border-blue-700"
              title={`Insertion position ${m[1]}`}
            >
              ▍{m[1]}
            </span>
          );
        }
        return (
          <React.Fragment key={idx}>
            {highlightChunk(part, highlightWord, highlightSentence)}
          </React.Fragment>
        );
      })}
    </>
  );
};

const highlightChunk = (chunk: string, word?: string, sentence?: string) => {
  let nodes: React.ReactNode[] = [chunk];
  if (sentence && chunk.includes(sentence)) {
    const idx = chunk.indexOf(sentence);
    nodes = [
      chunk.slice(0, idx),
      <mark
        key="hs"
        className="bg-yellow-200 dark:bg-yellow-700/60 dark:text-yellow-50 px-0.5 rounded"
      >
        {sentence}
      </mark>,
      chunk.slice(idx + sentence.length),
    ];
  }
  if (word) {
    const re = new RegExp(`\\b(${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})\\b`, 'gi');
    nodes = nodes.flatMap((n, i) => {
      if (typeof n !== 'string') return [n];
      const pieces: React.ReactNode[] = [];
      let lastIndex = 0;
      let match: RegExpExecArray | null;
      let k = 0;
      while ((match = re.exec(n)) !== null) {
        if (match.index > lastIndex) pieces.push(n.slice(lastIndex, match.index));
        pieces.push(
          <strong
            key={`w-${i}-${k}`}
            className="bg-amber-100 dark:bg-amber-700/50 dark:text-amber-50 px-0.5 rounded font-semibold"
          >
            {match[1]}
          </strong>,
        );
        lastIndex = match.index + match[1].length;
        k++;
      }
      if (lastIndex < n.length) pieces.push(n.slice(lastIndex));
      return pieces;
    });
  }
  return <>{nodes}</>;
};

// ===== Complete-Words Task =====

const CompleteWordsTask: React.FC<{
  task: TOEFLCompleteWordsTask;
  answers: Record<string, string>;
  setAnswer: (qid: string, value: string) => void;
  submitted: boolean;
}> = ({ task, answers, setAnswer, submitted }) => {
  const itemMap = useMemo(() => {
    const m = new Map<string, TOEFLCompleteWordsItem>();
    task.items.forEach((it) => m.set(it.item_id, it));
    return m;
  }, [task]);

  const parts = task.passage.split(/(\{\{w\d+\}\})/g);

  return (
    <div className="space-y-6">
      <p className="text-sm italic text-slate-600 dark:text-slate-400">{task.directions}</p>
      <div className="text-lg leading-relaxed text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/40 p-5 rounded-lg border border-slate-200 dark:border-slate-700">
        {parts.map((part, idx) => {
          const m = part.match(/^\{\{(w\d+)\}\}$/);
          if (m) {
            const itemId = m[1];
            const item = itemMap.get(itemId);
            if (!item) return <span key={idx}>{part}</span>;
            const qid = `${task.task_id}-${itemId}`;
            const userVal = answers[qid] || '';
            const isCorrect = normalize(userVal) === normalize(item.answer);
            return (
              <span key={idx} className="inline-flex items-center mx-1 align-baseline">
                <span className="font-mono font-semibold text-blue-700 dark:text-blue-300">
                  {item.given}
                </span>
                <input
                  type="text"
                  value={userVal}
                  onChange={(e) => setAnswer(qid, e.target.value)}
                  disabled={submitted}
                  placeholder={'_'.repeat(item.blanks)}
                  className={`mx-1 px-2 py-0.5 border-b-2 bg-transparent text-base font-medium focus:outline-none disabled:cursor-not-allowed ${
                    submitted
                      ? isCorrect
                        ? 'border-green-500 text-green-700 dark:text-green-300'
                        : 'border-red-500 text-red-700 dark:text-red-300'
                      : 'border-slate-400 dark:border-slate-500 focus:border-blue-500'
                  }`}
                  style={{ width: `${Math.max(item.blanks + item.given.length + 2, 6)}ch` }}
                />
                {submitted && !isCorrect && (
                  <span className="text-xs ml-1 text-green-600 dark:text-green-400">
                    ({item.given}
                    {item.answer.slice(item.given.length)})
                  </span>
                )}
              </span>
            );
          }
          return <span key={idx}>{part}</span>;
        })}
      </div>
    </div>
  );
};

// ===== MCQ / Prose Summary block =====

const QuestionBlock: React.FC<{
  task: TOEFLDailyLifeTask | TOEFLAcademicTask;
  question: TOEFLAcademicQuestion;
  index: number;
  answers: Record<string, string[]>;
  setMulti: (qid: string, keys: string[]) => void;
  submitted: boolean;
}> = ({ task, question, index, answers, setMulti, submitted }) => {
  const qid = `${task.task_id}-${question.question_id}`;
  const selected = answers[qid] || [];
  const isProseSummary = question.type === 'prose_summary';
  const selectCount = isProseSummary ? (question as TOEFLProseSummary).select_count : 1;
  const correct = question.correct;
  const userCorrect = submitted && arraysEqualAsSet(selected, correct);

  const toggle = (key: string) => {
    if (submitted) return;
    if (isProseSummary) {
      if (selected.includes(key)) {
        setMulti(qid, selected.filter((k) => k !== key));
      } else if (selected.length < selectCount) {
        setMulti(qid, [...selected, key]);
      }
    } else {
      setMulti(qid, [key]);
    }
  };

  return (
    <div
      className={`p-4 rounded-lg border ${
        submitted
          ? userCorrect
            ? 'bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-700'
            : 'bg-red-50 dark:bg-red-900/20 border-red-300 dark:border-red-700'
          : 'bg-white dark:bg-slate-800/40 border-slate-200 dark:border-slate-700'
      }`}
    >
      <div className="flex items-start gap-2 mb-3">
        <span className="text-sm font-bold text-blue-600 dark:text-blue-400 mt-1">{index + 1}.</span>
        <div className="flex-1">
          <p className="text-sm font-medium text-slate-800 dark:text-slate-100 whitespace-pre-wrap">
            {question.prompt}
          </p>
          {isProseSummary && (
            <p className="text-xs italic mt-1 text-slate-500 dark:text-slate-400">
              Select {selectCount} answers. ({selected.length}/{selectCount} selected)
            </p>
          )}
        </div>
      </div>

      <ul className="space-y-2 ml-6">
        {optionEntries(question.options).map(([key, text]) => {
          const isSelected = selected.includes(key);
          const isAnswerKey = correct.includes(key);
          let cls =
            'border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700/40';
          if (submitted) {
            if (isAnswerKey && isSelected) {
              cls = 'border-green-600 bg-green-100 dark:bg-green-900/40 ring-2 ring-green-500';
            } else if (isAnswerKey) {
              cls = 'border-green-500 bg-green-50 dark:bg-green-900/20';
            } else if (isSelected) {
              cls = 'border-red-500 bg-red-100 dark:bg-red-900/30 ring-2 ring-red-400';
            } else {
              cls = 'border-slate-300 dark:border-slate-600 opacity-70';
            }
          } else if (isSelected) {
            cls = 'border-blue-500 bg-blue-50 dark:bg-blue-900/30';
          }
          return (
            <li key={key}>
              <button
                type="button"
                onClick={() => toggle(key)}
                disabled={submitted}
                aria-pressed={isSelected}
                className={`w-full text-left px-3 py-2 rounded border text-sm transition ${cls} disabled:cursor-not-allowed`}
              >
                <span className="font-bold mr-2">{key}.</span>
                <span className="text-slate-700 dark:text-slate-200">{text}</span>
                {submitted && isSelected && (
                  <span
                    className={`ml-2 inline-block px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide ${
                      isAnswerKey
                        ? 'bg-green-600 text-white'
                        : 'bg-red-600 text-white'
                    }`}
                  >
                    Your answer {isAnswerKey ? '✓' : '✗'}
                  </span>
                )}
                {submitted && !isSelected && isAnswerKey && (
                  <span className="ml-2 inline-block px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200 border border-green-500">
                    Correct
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ul>

      {submitted && (
        <div className="mt-3 ml-6 text-xs">
          <p className="text-slate-700 dark:text-slate-300">
            <strong>Your answer{selected.length === 1 ? '' : 's'}:</strong>{' '}
            {selected.length > 0 ? selected.join(', ') : <em>(no answer)</em>}
          </p>
          <p className="text-slate-700 dark:text-slate-300">
            <strong>Correct answer{correct.length > 1 ? 's' : ''}:</strong> {correct.join(', ')}
          </p>
          <p className="mt-1 text-slate-600 dark:text-slate-400 italic">{question.explanation}</p>
        </div>
      )}
    </div>
  );
};

// ===== Reading task wrapper (daily_life + academic) =====

const ReadingTask: React.FC<{
  task: TOEFLDailyLifeTask | TOEFLAcademicTask;
  answers: Record<string, string[]>;
  setMulti: (qid: string, keys: string[]) => void;
  submitted: boolean;
}> = ({ task, answers, setMulti, submitted }) => {
  // Find highlight hints from any active question for the current task.
  // Simpler: build a per-question pair; render passage once but allow simple word highlight from first vocab/reference question if present.
  const firstHighlightWord = useMemo(() => {
    const q = task.questions.find(
      (x) => (x.type === 'vocabulary' || x.type === 'reference') && (x as TOEFLMCQuestion).target_word,
    ) as TOEFLMCQuestion | undefined;
    return q?.target_word;
  }, [task]);

  const isAcademic = task.type === 'academic';
  const passageNode = isAcademic
    ? renderInsertPassage(task.passage, firstHighlightWord)
    : highlightChunk(task.passage, firstHighlightWord);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="lg:sticky lg:top-4 lg:max-h-[80vh] lg:overflow-y-auto">
        {task.type === 'daily_life' && task.context_label && (
          <p className="mb-2 text-xs uppercase tracking-wide font-semibold text-blue-600 dark:text-blue-400">
            {task.context_label}
          </p>
        )}
        <div className="text-base leading-relaxed text-slate-800 dark:text-slate-200 whitespace-pre-wrap bg-slate-50 dark:bg-slate-800/40 p-5 rounded-lg border border-slate-200 dark:border-slate-700">
          {passageNode}
        </div>
      </div>

      <div className="space-y-4">
        {task.questions.map((q, i) => (
          <QuestionBlock
            key={q.question_id}
            task={task}
            question={q}
            index={i}
            answers={answers}
            setMulti={setMulti}
            submitted={submitted}
          />
        ))}
      </div>
    </div>
  );
};

// ===== Main exam engine =====

const TOEFLReadingExamEngine: React.FC<{ test: TOEFLReadingTest }> = ({ test }) => {
  const [started, setStarted] = useState(false);
  const [activeTaskIdx, setActiveTaskIdx] = useState(0);
  const [timeLeft, setTimeLeft] = useState(test.time_limit_seconds);
  const [submitted, setSubmitted] = useState(false);

  // complete_words answers: { "<taskId>-<itemId>": string }
  const [cwAnswers, setCwAnswers] = useState<Record<string, string>>({});
  // mcq + prose summary answers: { question_id: string[] }
  const [mcAnswers, setMcAnswers] = useState<Record<string, string[]>>({});

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!started || submitted) return;
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          setSubmitted(true);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [started, submitted]);

  // ===== Scoring =====
  const { rawScore, maxScore, perTask } = useMemo(() => {
    let raw = 0;
    let max = 0;
    const per: { taskId: string; correct: number; total: number }[] = [];

    test.tasks.forEach((task) => {
      let tCorrect = 0;
      let tTotal = 0;
      if (task.type === 'complete_words') {
        task.items.forEach((it) => {
          tTotal += 1;
          const v = cwAnswers[`${task.task_id}-${it.item_id}`] || '';
          if (normalize(v) === normalize(it.answer)) tCorrect += 1;
        });
      } else {
        task.questions.forEach((q) => {
          tTotal += 1;
          const sel = mcAnswers[`${task.task_id}-${q.question_id}`] || [];
          if (arraysEqualAsSet(sel, q.correct)) tCorrect += 1;
        });
      }
      raw += tCorrect;
      max += tTotal;
      per.push({ taskId: task.task_id, correct: tCorrect, total: tTotal });
    });
    return { rawScore: raw, maxScore: max, perTask: per };
  }, [test, cwAnswers, mcAnswers]);

  const band = submitted ? bandFor(rawScore, test.scoring.band_estimate) : null;

  const handleSubmit = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setStarted(false);
    setSubmitted(false);
    setActiveTaskIdx(0);
    setTimeLeft(test.time_limit_seconds);
    setCwAnswers({});
    setMcAnswers({});
  };

  // ===== Start screen =====
  if (!started) {
    return (
      <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-slate-200 dark:border-slate-700">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
          {test.exam} · {test.section} · {test.format_year} Format
        </p>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">{test.title}</h1>
        <p className="text-slate-600 dark:text-slate-300 mb-6">{test.description}</p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded text-center">
            <p className="text-xs text-slate-500 dark:text-slate-400">Time</p>
            <p className="text-lg font-bold text-slate-800 dark:text-slate-100">
              {Math.round(test.time_limit_seconds / 60)} min
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded text-center">
            <p className="text-xs text-slate-500 dark:text-slate-400">Questions</p>
            <p className="text-lg font-bold text-slate-800 dark:text-slate-100">
              {test.total_questions}
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded text-center">
            <p className="text-xs text-slate-500 dark:text-slate-400">Tasks</p>
            <p className="text-lg font-bold text-slate-800 dark:text-slate-100">
              {test.tasks.length}
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded text-center">
            <p className="text-xs text-slate-500 dark:text-slate-400">Max Score</p>
            <p className="text-lg font-bold text-slate-800 dark:text-slate-100">
              {test.scoring.max_raw_score}
            </p>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 mb-6 rounded">
          <p className="text-sm text-slate-700 dark:text-slate-200">{test.instructions}</p>
        </div>

        <button
          type="button"
          onClick={() => setStarted(true)}
          className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow transition"
        >
          Start Test
        </button>
      </div>
    );
  }

  // ===== Results banner (when submitted) =====
  const activeTask = test.tasks[activeTaskIdx];

  return (
    <div className="space-y-6">
      {/* Top bar: timer + nav */}
      <div className="sticky top-0 z-10 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow p-3 flex flex-wrap items-center gap-3">
        <div
          className={`px-3 py-1 rounded font-mono font-bold text-lg ${
            submitted
              ? 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
              : timeLeft < 300
                ? 'bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 animate-pulse'
                : 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300'
          }`}
        >
          ⏱ {formatTime(timeLeft)}
        </div>

        <div className="flex flex-wrap gap-1">
          {test.tasks.map((t, i) => (
            <button
              key={t.task_id}
              type="button"
              onClick={() => setActiveTaskIdx(i)}
              className={`px-3 py-1 rounded text-xs font-semibold border transition ${
                i === activeTaskIdx
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-600'
              }`}
            >
              Task {i + 1}
              {submitted && (
                <span className="ml-1 opacity-80">
                  ({perTask[i].correct}/{perTask[i].total})
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="ml-auto flex gap-2">
          {!submitted ? (
            <button
              type="button"
              onClick={handleSubmit}
              className="px-4 py-1.5 bg-green-600 hover:bg-green-700 text-white text-sm font-bold rounded shadow"
            >
              Submit
            </button>
          ) : (
            <button
              type="button"
              onClick={handleReset}
              className="px-4 py-1.5 bg-slate-600 hover:bg-slate-700 text-white text-sm font-bold rounded shadow"
            >
              Reset
            </button>
          )}
        </div>
      </div>

      {/* Results banner */}
      {submitted && band && (
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-xl shadow-lg">
          <p className="text-sm uppercase tracking-widest opacity-80 mb-1">Your Result</p>
          <p className="text-4xl font-bold mb-2">
            {rawScore} / {maxScore}
          </p>
          <p className="text-xl">
            {band.label} — <span className="font-semibold">{band.approx_band}</span>
          </p>
        </div>
      )}

      {/* Active task */}
      <div className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow border border-slate-200 dark:border-slate-700">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{activeTask.title}</h2>

        {activeTask.type === 'complete_words' ? (
          <CompleteWordsTask
            task={activeTask}
            answers={cwAnswers}
            setAnswer={(qid, v) => setCwAnswers((prev) => ({ ...prev, [qid]: v }))}
            submitted={submitted}
          />
        ) : (
          <ReadingTask
            task={activeTask}
            answers={mcAnswers}
            setMulti={(qid, keys) => setMcAnswers((prev) => ({ ...prev, [qid]: keys }))}
            submitted={submitted}
          />
        )}
      </div>

      {/* Footer nav */}
      <div className="flex justify-between">
        <button
          type="button"
          onClick={() => setActiveTaskIdx((i) => Math.max(0, i - 1))}
          disabled={activeTaskIdx === 0}
          className="px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded font-semibold disabled:opacity-50"
        >
          ← Previous Task
        </button>
        <button
          type="button"
          onClick={() => setActiveTaskIdx((i) => Math.min(test.tasks.length - 1, i + 1))}
          disabled={activeTaskIdx === test.tasks.length - 1}
          className="px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded font-semibold disabled:opacity-50"
        >
          Next Task →
        </button>
      </div>
    </div>
  );
};

export default TOEFLReadingExamEngine;
