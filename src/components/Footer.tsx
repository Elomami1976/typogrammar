
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 mt-auto dark:bg-slate-900/80 dark:border-slate-700">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 py-8">
        <div className="mb-8 pb-8 border-b border-slate-200 dark:border-slate-700">
          <h3 className="font-heading font-semibold text-slate-900 dark:text-slate-100 text-lg mb-4 text-center md:text-left">
            Products
          </h3>
          <ul className="flex flex-wrap justify-center md:justify-start items-center gap-x-8 gap-y-3">
            <li>
              <Link
                to="/grammar-checker/"
                className="font-body text-base text-slate-600 hover:text-blue-600 transition-colors dark:text-slate-400 dark:hover:text-blue-400"
              >
                AI Grammar Checker
              </Link>
            </li>
            <li>
              <Link
                to="/paraphrasing-tool/"
                className="font-body text-base text-slate-600 hover:text-blue-600 transition-colors dark:text-slate-400 dark:hover:text-blue-400"
              >
                AI Paraphrasing
              </Link>
            </li>
            <li>
              <a
                href="https://chromewebstore.google.com/detail/typogrammar-write/efdcbgkkccmclmfifkhpkampenagicki?utm_source=typogrammar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-base text-slate-600 hover:text-blue-600 transition-colors dark:text-slate-400 dark:hover:text-blue-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <path fill="#fff" d="M24 14a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z" />
                  <path fill="#EA4335" d="M24 4a20 20 0 0 1 17.32 10H24a10 10 0 0 0-9.43 6.67L6.66 14A20 20 0 0 1 24 4Z" />
                  <path fill="#34A853" d="M14 24a10 10 0 0 0 18.86 4.67L24.93 44A20 20 0 0 1 6.66 14L14.57 20.67A9.96 9.96 0 0 0 14 24Z" />
                  <path fill="#4285F4" d="M44 24a20 20 0 0 1-19.07 20l7.93-15.33A9.96 9.96 0 0 0 34 24a10 10 0 0 0-1.18-4.67L41.32 14A19.92 19.92 0 0 1 44 24Z" />
                  <path fill="#FBBC05" d="M24 14h17.32l-8.5 5.33A10 10 0 0 0 14 24a9.96 9.96 0 0 0 .57 3.33L6.66 14A20 20 0 0 1 24 4v10Z" />
                  <circle cx="24" cy="24" r="6" fill="#4285F4" />
                </svg>
                TypoGrammar Write Extension
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="font-body text-slate-500 text-base dark:text-slate-400">
              &copy; {currentYear} TypoGrammar. All Rights Reserved.
            </p>
          </div>
          <nav className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
            <Link to="/about/" className="font-body text-base text-slate-600 hover:text-blue-600 transition-colors dark:text-slate-400 dark:hover:text-blue-400">
              About
            </Link>
            <Link to="/faq/" className="font-body text-base text-slate-600 hover:text-blue-600 transition-colors dark:text-slate-400 dark:hover:text-blue-400">
              FAQ
            </Link>
            <Link to="/contact/" className="font-body text-base text-slate-600 hover:text-blue-600 transition-colors dark:text-slate-400 dark:hover:text-blue-400">
              Contact
            </Link>
            <Link to="/privacy-policy/" className="font-body text-base text-slate-600 hover:text-blue-600 transition-colors dark:text-slate-400 dark:hover:text-blue-400">
              Privacy & Policy
            </Link>
            <Link to="/terms-of-service/" className="font-body text-base text-slate-600 hover:text-blue-600 transition-colors dark:text-slate-400 dark:hover:text-blue-400">
              Terms of Service
            </Link>
          </nav>

        </div>
      </div>
    </footer>
  );
};

export default Footer;