
import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-20 dark:bg-slate-900/80 dark:border-slate-700">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-4 flex justify-between items-center h-[69px]">
        <div className="flex items-center gap-4">
          <div className="md:hidden">
            <button
              onClick={onMenuClick}
              className="p-2 rounded-md text-slate-600 hover:bg-slate-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-slate-400 dark:hover:bg-slate-800"
              aria-label="Open navigation menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <Link to="/" className="logo-link group">
            <div>
              <h1 className="font-heading text-3xl font-extrabold text-slate-800 tracking-tight dark:text-slate-200">
                <span className="relative inline-block transition-transform duration-300 group-hover:scale-105">
                  Typo<span className="text-blue-600 dark:text-blue-500 transition-colors duration-300 group-hover:text-blue-700 dark:group-hover:text-blue-400">Grammar</span>
                </span>
              </h1>
              <p className="font-body text-xs text-slate-500 dark:text-slate-400 mt-1 hidden sm:block transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                From Confused to Confident in English
              </p>
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://buymeacoffee.com/quiztarek2k"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-slate-600 hover:text-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:text-slate-400 dark:hover:text-pink-500 dark:focus:ring-offset-slate-900"
            aria-label="Support the creator"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          </a>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;