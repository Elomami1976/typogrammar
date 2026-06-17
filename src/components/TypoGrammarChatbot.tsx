import React, { useEffect, useRef, useState } from 'react';

/**
 * TypoGrammarChatbot
 * ------------------
 * A floating chat widget that talks to the typogrammar-ai Cloudflare Worker
 * (type: "chat"). Replaces the previous Jotform embed.
 *
 * Worker contract (POST JSON):
 *   request:  { type: "chat", message: string, history?: Msg[] }
 *   response: { result: string, source?: { title, url } | null, mode, cached? }
 */

const WORKER_URL = 'https://typogrammar-ai.elomami1976.workers.dev/';
const EXTENSION_URL =
  'https://chromewebstore.google.com/search/TypoGrammar%20Write';

type Role = 'user' | 'assistant';

interface Msg {
  role: Role;
  content: string;
  source?: { title: string; url: string } | null;
}

const INITIAL_GREETING: Msg = {
  role: 'assistant',
  content:
    "Hi! I'm TypoGrammar AI. Ask me anything about English grammar, tenses, vocabulary, or writing — I'll search TypoGrammar first and link you to the right lesson.",
  source: null,
};

const TypoGrammarChatbot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([INITIAL_GREETING]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  // Auto-scroll on new message
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, loading]);

  // Focus input when panel opens
  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  const send = async () => {
    const message = input.trim();
    if (!message || loading) return;
    if (message.length > 500) {
      setError('Message too long (max 500 characters).');
      return;
    }
    setError(null);
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: message }]);
    setLoading(true);
    try {
      const res = await fetch(WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'chat', message }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error || `Request failed (${res.status})`);
      }
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: data.result || '(no response)',
          source: data.source || null,
        },
      ]);
    } catch (e: any) {
      setError(e?.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  const reset = () => {
    setMessages([INITIAL_GREETING]);
    setError(null);
  };

  return (
    <>
      {/* Floating toggle button */}
      {!open && (
        <button
          type="button"
          aria-label="Open TypoGrammar AI chat"
          onClick={() => setOpen(true)}
          className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 pl-2 pr-4 py-2 transition-all"
        >
          <img
            src="/typogrammar-ai-icon.png"
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 rounded-full"
          />
          <span className="text-sm font-semibold">Ask TypoGrammar AI</span>
        </button>
      )}

      {/* Chat panel */}
      {open && (
        <div
          role="dialog"
          aria-label="TypoGrammar AI chatbot"
          className="fixed bottom-5 right-5 z-50 flex flex-col w-[92vw] max-w-sm h-[70vh] max-h-[600px] rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between bg-blue-600 text-white px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-green-400" />
              <span className="font-semibold text-sm">TypoGrammar AI</span>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={reset}
                aria-label="Reset conversation"
                className="rounded p-1 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white/40"
                title="New chat"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M3 12a9 9 0 1 0 3-6.7" />
                  <path d="M3 3v6h6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="rounded p-1 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white/40"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div
            ref={listRef}
            className="flex-1 overflow-y-auto px-3 py-3 space-y-3 bg-slate-50"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${
                  m.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm whitespace-pre-wrap break-words ${
                    m.role === 'user'
                      ? 'bg-blue-600 text-white rounded-br-sm'
                      : 'bg-white text-slate-800 border border-slate-200 rounded-bl-sm'
                  }`}
                >
                  {m.content}
                  {m.source && (
                    <div className="mt-2 pt-2 border-t border-slate-200">
                      <a
                        href={m.source.url}
                        className="text-blue-600 hover:text-blue-800 hover:underline text-xs font-medium inline-flex items-center gap-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                        Read: {m.source.title}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white text-slate-500 border border-slate-200 rounded-2xl rounded-bl-sm px-3 py-2 text-sm">
                  <span className="inline-flex gap-1">
                    <span className="h-2 w-2 rounded-full bg-slate-400 animate-bounce [animation-delay:-0.2s]" />
                    <span className="h-2 w-2 rounded-full bg-slate-400 animate-bounce [animation-delay:-0.1s]" />
                    <span className="h-2 w-2 rounded-full bg-slate-400 animate-bounce" />
                  </span>
                </div>
              </div>
            )}
            {error && (
              <div className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                {error}
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-slate-200 bg-white p-2">
            <div className="flex items-end gap-2">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                rows={1}
                maxLength={500}
                placeholder="Ask about grammar, tenses, vocabulary…"
                className="flex-1 resize-none rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400"
                disabled={loading}
              />
              <button
                type="button"
                onClick={send}
                disabled={loading || !input.trim()}
                aria-label="Send message"
                className="rounded-lg bg-blue-600 text-white px-3 py-2 text-sm font-semibold hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Send
              </button>
            </div>

            {/* Required footer */}
            <div className="mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-[11px] text-slate-500">
              <span>Powered by TypoGrammar AI</span>
              <a
                href={EXTENSION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 hover:underline font-medium"
              >
                {/* Chrome logo */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  className="h-4 w-4 flex-shrink-0"
                  aria-hidden="true"
                >
                  <circle cx="24" cy="24" r="20" fill="#fff" />
                  <path
                    fill="#EA4335"
                    d="M24 4a20 20 0 0 1 17.32 10H24a10 10 0 0 0-8.66 5L7.06 13.4A20 20 0 0 1 24 4z"
                  />
                  <path
                    fill="#34A853"
                    d="M24 44a20 20 0 0 1-17.32-10l8.28-5A10 10 0 0 0 24 34l4.66 8.7A20 20 0 0 1 24 44z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M28.66 42.7 33.32 34A10 10 0 0 0 32.66 19h9.66A20 20 0 0 1 28.66 42.7z"
                  />
                  <circle cx="24" cy="24" r="8" fill="#4285F4" />
                </svg>
                Try TypoGrammar Write Extension →
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TypoGrammarChatbot;
