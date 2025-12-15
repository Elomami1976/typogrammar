
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 mt-auto dark:bg-slate-900/80 dark:border-slate-700">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="font-body text-slate-500 text-base dark:text-slate-400">
              &copy; {currentYear} TypoGrammar. All Rights Reserved.
            </p>
          </div>
          <nav className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
            <Link to="/about" className="font-body text-base text-slate-600 hover:text-blue-600 transition-colors dark:text-slate-400 dark:hover:text-blue-400">
              About
            </Link>
            <Link to="/faq" className="font-body text-base text-slate-600 hover:text-blue-600 transition-colors dark:text-slate-400 dark:hover:text-blue-400">
              FAQ
            </Link>
            <Link to="/contact" className="font-body text-base text-slate-600 hover:text-blue-600 transition-colors dark:text-slate-400 dark:hover:text-blue-400">
              Contact
            </Link>
            <Link to="/privacy-policy" className="font-body text-base text-slate-600 hover:text-blue-600 transition-colors dark:text-slate-400 dark:hover:text-blue-400">
              Privacy & Policy
            </Link>
            <Link to="/terms-of-service" className="font-body text-base text-slate-600 hover:text-blue-600 transition-colors dark:text-slate-400 dark:hover:text-blue-400">
              Terms of Service
            </Link>
            <a
              href="https://linktr.ee/TypoGrammar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TypoGrammar Social Links"
              className="flex items-center gap-2 font-body text-base text-slate-600 hover:text-blue-600 transition-colors dark:text-slate-400 dark:hover:text-blue-400"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Follow Us
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;