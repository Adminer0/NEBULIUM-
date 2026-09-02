import { useState, useEffect, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export default function BookingModal({ isOpen, onClose, language }: BookingModalProps) {
  const [productType, setProductType] = useState('Scale-up');
  const [topic, setTopic] = useState('Design leadership');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setIsSubmitted(true);
    setTimeout(() => {
      window.open('https://calendly.com/simon-metacci/30min', '_blank');
      onClose();
      setIsSubmitted(false);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#070808]/80 backdrop-blur-md"
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-[560px] bg-[#121215] border border-[#262828] rounded-3xl p-8 sm:p-10 shadow-2xl z-10"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-[#8C8C90] hover:text-[#E9E9EB] text-2xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#1C1D20] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              ✕
            </button>

            <span className="text-xs uppercase tracking-wider text-[#7C7C80] font-medium block mb-2">
              Metacci Studios
            </span>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-medium text-[#E9E9EB] mb-3">
              {language === 'en' ? 'Book an intro call' : 'Boka ett introsamtal'}
            </h2>
            <p className="text-sm sm:text-base text-[#B4B4B8] mb-8 leading-relaxed">
              {language === 'en'
                ? '30-minute introductory conversation with Simon Metacci. We’ll discuss your team, current bottlenecks, and whether fractional design leadership is the right fit.'
                : '30-minuters introduktionssamtal med Simon Metacci. Vi diskuterar ditt team, nuvarande flaskhalsar och om fractional design leadership passar er.'}
            </p>

            {isSubmitted ? (
              <div className="py-12 text-center">
                <div className="text-3xl mb-3">✨</div>
                <h3 className="text-xl font-medium text-[#E9E9EB] mb-2">
                  {language === 'en' ? 'Opening Calendly...' : 'Öppnar Calendly...'}
                </h3>
                <p className="text-sm text-[#8C8C90]">
                  {language === 'en'
                    ? 'Redirecting to pick a time directly on Simon’s calendar.'
                    : 'Skickas vidare för att välja en tid i Simons kalender.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8C8C90] mb-2 font-medium">
                    {language === 'en' ? 'Company Type' : 'Företagstyp'}
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Scale-up', 'Fintech', 'E-commerce'].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setProductType(type)}
                        className={`py-2 px-3 text-xs sm:text-sm rounded-xl border transition-all cursor-pointer ${
                          productType === type
                            ? 'border-[#E9E9EB] bg-[#1C1D20] text-[#E9E9EB] font-medium'
                            : 'border-[#262828] text-[#8C8C90] hover:border-[#48484D]'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8C8C90] mb-2 font-medium">
                    {language === 'en' ? 'Primary Focus' : 'Primärt fokus'}
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Speed / Velocity', 'Design Systems', 'Strategy'].map((top) => (
                      <button
                        type="button"
                        key={top}
                        onClick={() => setTopic(top)}
                        className={`py-2 px-3 text-xs sm:text-sm rounded-xl border transition-all cursor-pointer ${
                          topic === top
                            ? 'border-[#E9E9EB] bg-[#1C1D20] text-[#E9E9EB] font-medium'
                            : 'border-[#262828] text-[#8C8C90] hover:border-[#48484D]'
                        }`}
                      >
                        {top}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8C8C90] mb-2 font-medium">
                    {language === 'en' ? 'Your Work Email' : 'Din e-post'}
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full bg-[#070808] border border-[#262828] focus:border-[#E9E9EB] rounded-xl px-4 py-3 text-sm text-[#E9E9EB] outline-none transition-colors"
                  />
                </div>

                <div className="pt-2 flex flex-col gap-3">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#E9E9EB] text-[#070808] font-semibold text-base hover:bg-white hover:shadow-[0_0_24px_rgba(233,233,235,0.25)] transition-all cursor-pointer"
                  >
                    {language === 'en' ? 'Continue to Calendly →' : 'Fortsätt till Calendly →'}
                  </button>

                  <a
                    href="mailto:simon@metacci.com"
                    className="text-center text-xs text-[#7C7C80] hover:text-[#E9E9EB] transition-colors py-1"
                  >
                    {language === 'en' ? 'Or email simon@metacci.com directly' : 'Eller mejla simon@metacci.com direkt'}
                  </a>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
