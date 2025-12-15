
import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { useGlobalKeyboardShortcuts } from '../hooks/useKeyboardShortcuts';

const Layout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Force light mode - remove any dark class
  useEffect(() => {
    document.documentElement.classList.remove('dark');
    localStorage.removeItem('theme');
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Enable keyboard shortcuts
  useGlobalKeyboardShortcuts();

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-100 text-slate-800">
      <Header 
        onMenuClick={toggleMobileMenu}
      />
      <div className="flex flex-1 w-full max-w-screen-2xl mx-auto">
        <Sidebar isMobileOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
        <main className="flex-1 min-w-0 py-6 sm:py-8 md:py-12 px-6 md:px-10">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;