import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import SEO from './SEO';
import ScrollProgress from './ScrollProgress';
import BackToTop from './BackToTop';
import AdDebugOverlay from './AdDebugOverlay';
import TypoGrammarChatbot from './TypoGrammarChatbot';
import { useGlobalKeyboardShortcuts } from '../hooks/useKeyboardShortcuts';
import { normalizeAllSeoSignalsInDOM } from '../seo/normalizeSeoSignals';

const Layout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Site renders in light mode for all viewports. The inline script in
  // index.html clears any stale `dark` class before React mounts.

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Final-guard SEO-signal normalizer.
  //
  // Effect ordering in React runs deepest-child first, parent-component last,
  // so by the time this Layout effect runs on a route change, every page-level
  // hook (usePageMetadata, <SchemaMarkup>, inline JSON-LD <script> tags) has
  // already committed to the DOM. We then walk the live <head> and force every
  // SEO signal (canonical, og:url, hreflang, every JSON-LD `@id` / `url`) to
  // the trailing-slash convention used by sitemap.xml + .htaccess.
  //
  // This eliminates the entire class of "Google chose different canonical
  // than user" / "Alternate page with proper canonical tag" / "Page with
  // redirect" issues caused by mismatched canonical signals — without
  // requiring 150+ page files to be edited individually.
  //
  // We also schedule a microtask + a 0ms timeout pass to catch any schemas
  // injected by lazily-loaded child effects that commit just after Layout's
  // effect (e.g. <FaqAccordion> nested deep inside an Outlet'd page).
  useEffect(() => {
    normalizeAllSeoSignalsInDOM();
    const t = window.setTimeout(normalizeAllSeoSignalsInDOM, 0);
    return () => window.clearTimeout(t);
  }, [location.pathname, location.search]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Enable keyboard shortcuts
  useGlobalKeyboardShortcuts();

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-surface-50 text-slate-800">
      {/* Global SEO - automatically applied to all pages based on current route */}
      <SEO path={location.pathname} />

      {/* Reading progress bar (gradient, fixed top-0) */}
      <ScrollProgress />

      <Header 
        onMenuClick={toggleMobileMenu}
      />
      <div className="flex flex-1 w-full max-w-screen-2xl mx-auto">
        <Sidebar isMobileOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
        <main className="flex-1 min-w-0 py-4 sm:py-6 md:py-8 lg:py-12 px-4 sm:px-6 md:px-8 lg:px-10">
          <Outlet />
        </main>
      </div>
      <Footer />

      {/* Back to top button with progress ring */}
      <BackToTop threshold={500} />

      {/* AdSense diagnostic overlay — only renders when ?ad-debug=1 was used */}
      <AdDebugOverlay />

      {/* TypoGrammar AI chatbot — replaces Jotform */}
      <TypoGrammarChatbot />
    </div>
  );
};

export default Layout;