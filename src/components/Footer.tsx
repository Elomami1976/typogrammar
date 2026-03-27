
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
          </nav>

        </div>
      </div>
    </footer>
  );
};

export default Footer;