import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BLOG_SEARCH_INDEX, STATIC_PAGES_INDEX, SearchEntryType } from '../constants/searchIndex';

interface SearchEntry {
  title: string;
  subtitle: string;
  url: string;
  type: SearchEntryType | 'grammar';
}

const TYPE_LABELS: Record<string, string> = {
  grammar: 'Grammar',
  blog: 'Blog',
  page: 'Page',
};

const TYPE_COLORS: Record<string, string> = {
  grammar: 'bg-blue-100 text-blue-700',
  blog: 'bg-purple-100 text-purple-700',
  page: 'bg-emerald-100 text-emerald-700',
};

// Base index available immediately (lightweight — no JSX, no grammar topics)
const BASE_RESULTS: SearchEntry[] = [
  ...BLOG_SEARCH_INDEX,
  ...STATIC_PAGES_INDEX,
];

const GlobalSearch: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchEntry[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [allResults, setAllResults] = useState<SearchEntry[]>(BASE_RESULTS);
  const grammarLoaded = useRef(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Lazy-load grammar topics only when search is first opened
  const openSearch = () => {
    setIsOpen(true);
    if (!grammarLoaded.current) {
      grammarLoaded.current = true;
      import('../constants/grammarTopics').then(({ GRAMMAR_TOPICS }) => {
        setAllResults([
          ...GRAMMAR_TOPICS.map(t => ({
            title: t.title,
            subtitle: t.category,
            url: `/topics/${t.id}`,
            type: 'grammar' as const,
          })),
          ...BLOG_SEARCH_INDEX,
          ...STATIC_PAGES_INDEX,
        ]);
      });
    }
  };

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
    setQuery('');
  }, [location.pathname]);

  // Focus input when modal opens; reset when it closes
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setResults([]);
      setActiveIndex(-1);
    }
  }, [isOpen]);

  // Global keyboard shortcut: Ctrl+K / Cmd+K
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        openSearch();
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Search logic
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setActiveIndex(-1);
      return;
    }
    const q = query.toLowerCase();
    const filtered = allResults.filter(
      r => r.title.toLowerCase().includes(q) || r.subtitle.toLowerCase().includes(q)
    ).slice(0, 8);
    setResults(filtered);
    setActiveIndex(-1);
  }, [query, allResults]);

  const close = () => setIsOpen(false);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      close();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(i => Math.min(i + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(i => Math.max(i - 1, -1));
    } else if (e.key === 'Enter' && activeIndex >= 0) {
      navigate(results[activeIndex].url);
      close();
    }
  };

  const handleSelect = (url: string) => {
    navigate(url);
    close();
  };

  return (
    <>
      {/* Trigger — pill search bar on desktop, icon-only on mobile */}
      <button
        onClick={openSearch}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 bg-slate-50 hover:bg-white hover:border-blue-400 hover:shadow-sm transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:border-slate-700 dark:hover:border-blue-500 dark:hover:bg-slate-700"
        aria-label="Search (Ctrl+K)"
        title="Search (Ctrl+K)"
      >
        <svg className="h-4 w-4 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="hidden md:inline text-sm text-slate-400 dark:text-slate-500 pr-1 whitespace-nowrap">Search…</span>
        <kbd className="hidden lg:inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-white border border-slate-200 text-slate-400 dark:bg-slate-700 dark:border-slate-600 dark:text-slate-400">
          Ctrl K
        </kbd>
      </button>

      {/* Modal + backdrop */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40"
            aria-hidden="true"
            onMouseDown={close}
          />

          {/* Search panel */}
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Site search"
            className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-lg px-4 z-50"
          >
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
              {/* Input row */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-100">
                <svg className="h-5 w-5 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Search topics, lessons, blog posts…"
                  className="flex-1 bg-transparent text-slate-800 placeholder-slate-400 text-base focus:outline-none"
                  autoComplete="off"
                  spellCheck={false}
                />
                <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-500 border border-slate-200">
                  Esc
                </kbd>
              </div>

              {/* Results list */}
              {results.length > 0 && (
                <ul role="listbox" aria-label="Search results" className="max-h-80 overflow-y-auto py-2">
                  {results.map((r, i) => (
                    <li key={r.url} role="option" aria-selected={i === activeIndex}>
                      <button
                        onMouseDown={() => handleSelect(r.url)}
                        onMouseEnter={() => setActiveIndex(i)}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                          i === activeIndex
                            ? 'bg-blue-50'
                            : 'hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-slate-800 truncate">{r.title}</p>
                          <p className="text-xs text-slate-500 mt-0.5">{r.subtitle}</p>
                        </div>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0 ${TYPE_COLORS[r.type]}`}>
                          {TYPE_LABELS[r.type]}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              {/* No results message */}
              {query.trim() && results.length === 0 && (
                <div className="px-4 py-8 text-center text-sm text-slate-500">
                  No results for{' '}
                  <span className="font-semibold text-slate-700">"{query}"</span>
                </div>
              )}

              {/* Empty state hint */}
              {!query.trim() && (
                <div className="px-4 py-5 text-center text-xs text-slate-400">
                  Search grammar topics, vocabulary, IELTS &amp; TOEFL guides, tools, and more
                </div>
              )}

              {/* Footer hint */}
              <div className="flex items-center gap-3 px-4 py-2 border-t border-slate-100 bg-slate-50 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200 text-slate-500">↑</kbd>
                  <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200 text-slate-500">↓</kbd>
                  Navigate
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200 text-slate-500">↵</kbd>
                  Select
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200 text-slate-500">Esc</kbd>
                  Close
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default GlobalSearch;
