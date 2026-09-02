import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, CurrentView } from '../types';

interface HeaderProps {
  currentView: CurrentView;
  onNavigate: (view: CurrentView, caseId?: string) => void;
  language: Language;
  onToggleLanguage: () => void;
  onOpenBooking: () => void;
}

export default function Header({
  currentView,
  onNavigate,
  language,
  onToggleLanguage,
  onOpenBooking
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view: CurrentView) => {
    setIsMobileMenuOpen(false);
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'is-scrolled' : 'header--default'}`} id="site-header">
        <nav className="nav">
          {/* Desktop/tablet: "Metacci" text brand */}
          <button
            onClick={() => handleNavClick('index')}
            className="nav-brand-text text-left bg-transparent border-none cursor-pointer p-0 font-medium text-[20px] tracking-tight text-[#E9E9EB]"
            aria-label="Metacci Home"
          >
            Metacci
          </button>

          {/* Center: nav links */}
          <div className="nav-links">
            <button
              onClick={() => handleNavClick('index')}
              className={`nav-link ${currentView === 'index' ? 'is-active text-[#E9E9EB]' : 'text-[#8C8C90] hover:text-[#E9E9EB]'}`}
              aria-current={currentView === 'index' ? 'page' : undefined}
            >
              Index
            </button>
            <button
              onClick={() => handleNavClick('work')}
              className={`nav-link ${currentView === 'work' ? 'is-active text-[#E9E9EB]' : 'text-[#8C8C90] hover:text-[#E9E9EB]'}`}
              aria-current={currentView === 'work' ? 'page' : undefined}
            >
              Work
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`nav-link ${currentView === 'about' ? 'is-active text-[#E9E9EB]' : 'text-[#8C8C90] hover:text-[#E9E9EB]'}`}
              aria-current={currentView === 'about' ? 'page' : undefined}
            >
              About
            </button>
          </div>

          {/* Right: language switch at top; swaps to the Book-a-call CTA on scroll */}
          <div className="nav-right flex items-center gap-4">
            <button
              className="lang-switch bg-transparent border-none cursor-pointer flex items-center gap-1.5 text-sm text-[#8C8C90] hover:text-[#E9E9EB] transition-colors"
              onClick={onToggleLanguage}
              aria-label="Choose language"
            >
              <span className={`lang-opt ${language === 'en' ? 'is-active text-[#E9E9EB] font-medium' : 'text-[#7C7C80]'}`}>
                En
              </span>
              <span className="lang-sep text-[#48484D]">/</span>
              <span className={`lang-opt ${language === 'sv' ? 'is-active text-[#E9E9EB] font-medium' : 'text-[#7C7C80]'}`}>
                Sv
              </span>
            </button>

            <button
              onClick={onOpenBooking}
              className="nav-cta text-sm font-medium px-4 py-2 rounded-full border border-[#48484D] text-[#E9E9EB] hover:bg-[#E9E9EB] hover:text-[#070808] transition-all duration-200"
            >
              {language === 'en' ? 'Book a call' : 'Boka samtal'}
            </button>
          </div>

          {/* Mobile only: logo mark */}
          <button
            onClick={() => handleNavClick('index')}
            className="nav-brand-logo bg-transparent border-none p-0 cursor-pointer"
            aria-label="Home"
          >
            <svg width="36" height="36" viewBox="0 0 199 199" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M99.5063 99.5063L61.4952 199H0V0H61.4952L99.5063 99.5063Z" fill="#F0F0F0" />
              <path d="M199 0V199H137.505L99.5063 99.5063L137.505 0H199Z" fill="#F0F0F0" />
            </svg>
          </button>

          {/* Mobile only: hamburger */}
          <button
            className={`nav-hamburger ${isMobileMenuOpen ? 'is-active' : ''}`}
            id="nav-hamburger"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span
              style={{
                transform: isMobileMenuOpen ? 'translateY(4px) rotate(45deg)' : 'none',
                transition: 'transform 0.25s ease'
              }}
            />
            <span
              style={{
                transform: isMobileMenuOpen ? 'translateY(-4px) rotate(-45deg)' : 'none',
                transition: 'transform 0.25s ease'
              }}
            />
          </button>
        </nav>
      </header>

      {/* Mobile navigation modal with Framer Motion */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="nav-modal fixed inset-0 z-[100] bg-[#070808] flex flex-col justify-between p-8 pt-28"
            role="dialog"
            aria-label="Main menu"
          >
            <div className="flex justify-between items-center mb-8 border-b border-[#262828] pb-4">
              <button
                onClick={onToggleLanguage}
                className="lang-switch bg-transparent border-none text-base text-[#8C8C90] flex items-center gap-1.5"
              >
                <span className={language === 'en' ? 'text-[#E9E9EB] font-medium' : 'text-[#7C7C80]'}>En</span>
                <span className="text-[#48484D]">/</span>
                <span className={language === 'sv' ? 'text-[#E9E9EB] font-medium' : 'text-[#7C7C80]'}>Sv</span>
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#8C8C90] hover:text-[#E9E9EB] text-sm uppercase tracking-wider"
              >
                Close
              </button>
            </div>

            <div className="nav-modal-body flex flex-col gap-6 my-auto">
              <button
                onClick={() => handleNavClick('index')}
                className="text-left bg-transparent border-none text-4xl font-semibold text-[#E9E9EB] hover:text-[#B4B4B8] transition-colors"
              >
                Index
              </button>
              <button
                onClick={() => handleNavClick('work')}
                className="text-left bg-transparent border-none text-4xl font-semibold text-[#E9E9EB] hover:text-[#B4B4B8] transition-colors"
              >
                Work
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className="text-left bg-transparent border-none text-4xl font-semibold text-[#E9E9EB] hover:text-[#B4B4B8] transition-colors"
              >
                About
              </button>
            </div>

            <div className="nav-modal-footer pt-8 border-t border-[#262828] flex flex-col gap-4">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-4 text-center rounded-full bg-[#E9E9EB] text-[#070808] font-semibold text-lg"
              >
                {language === 'en' ? 'Book an intro call' : 'Boka ett introsamtal'}
              </button>
              <div className="flex justify-between items-center text-sm text-[#7C7C80]">
                <a
                  href="https://www.linkedin.com/in/simonmetacci/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E9E9EB]"
                >
                  LinkedIn
                </a>
                <a href="mailto:simon@metacci.com" className="hover:text-[#E9E9EB]">
                  simon@metacci.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
