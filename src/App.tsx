import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BrandsMarquee from './components/BrandsMarquee';
import Growth from './components/Growth';
import SelectedWork from './components/SelectedWork';
import HowIWork from './components/HowIWork';
import AboutTeaser from './components/AboutTeaser';
import FAQSection from './components/FAQSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WorkView from './components/WorkView';
import AboutView from './components/AboutView';
import CaseStudyDetail from './components/CaseStudyDetail';
import BookingModal from './components/BookingModal';
import Preloader from './components/Preloader';
import { CurrentView, Language } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<CurrentView>('index');
  const [selectedCaseId, setSelectedCaseId] = useState<string>('systembolaget-app');
  const [language, setLanguage] = useState<Language>('en');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isPreloaderActive, setIsPreloaderActive] = useState(true);

  // Handle URL hash changes
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'work') {
        setCurrentView('work');
      } else if (hash === 'about') {
        setCurrentView('about');
      } else if (hash.startsWith('case/')) {
        const id = hash.replace('case/', '');
        setSelectedCaseId(id);
        setCurrentView('case-study');
      } else if (hash === 'index' || !hash) {
        setCurrentView('index');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (view: CurrentView, caseId?: string) => {
    if (caseId) {
      setSelectedCaseId(caseId);
      window.location.hash = `case/${caseId}`;
    } else {
      window.location.hash = view === 'index' ? '' : view;
    }
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'sv' : 'en'));
  };

  return (
    <div className="min-h-screen bg-[#070808] text-[#E9E9EB] selection:bg-[#E9E9EB] selection:text-[#070808]">
      {/* 0-100% Preloader */}
      {isPreloaderActive && <Preloader onComplete={() => setIsPreloaderActive(false)} />}

      {/* Global Header */}
      <Header
        currentView={currentView}
        onNavigate={handleNavigate}
        language={language}
        onToggleLanguage={handleToggleLanguage}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Main Views */}
      <main>
        {currentView === 'index' && (
          <>
            <Hero language={language} onOpenBooking={() => setIsBookingOpen(true)} />
            <BrandsMarquee language={language} />
            <Growth language={language} />
            <SelectedWork
              language={language}
              onSelectCase={(id) => handleNavigate('case-study', id)}
            />
            <HowIWork language={language} />
            <AboutTeaser
              language={language}
              onNavigateToAbout={() => handleNavigate('about')}
            />
            <FAQSection language={language} />
            <FinalCTA
              language={language}
              onOpenBooking={() => setIsBookingOpen(true)}
            />
          </>
        )}

        {currentView === 'work' && (
          <WorkView
            language={language}
            onSelectCase={(id) => handleNavigate('case-study', id)}
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        )}

        {currentView === 'about' && (
          <AboutView
            language={language}
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        )}

        {currentView === 'case-study' && (
          <CaseStudyDetail
            caseId={selectedCaseId}
            language={language}
            onBack={() => handleNavigate('index')}
            onSelectCase={(id) => handleNavigate('case-study', id)}
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        language={language}
      />
    </div>
  );
}
