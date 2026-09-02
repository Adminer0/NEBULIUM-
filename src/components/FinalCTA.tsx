import { Language } from '../types';

interface FinalCTAProps {
  language: Language;
  onOpenBooking: () => void;
}

export default function FinalCTA({ language, onOpenBooking }: FinalCTAProps) {
  return (
    <section className="final-cta py-32 px-6 sm:px-12 bg-[#070808] border-t border-[#121215] flex items-center justify-center text-center">
      <div className="final-cta-inner max-w-[960px] mx-auto flex flex-col items-center">
        <span className="final-cta-eyebrow text-xs uppercase tracking-[0.15em] text-[#7C7C80] font-medium mb-6">
          {language === 'en' ? 'Next step' : 'Nästa steg'}
        </span>

        <h2 className="final-cta-heading text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#E9E9EB] leading-[1.12] mb-8">
          {language === 'en'
            ? 'I take on one or two assignments at a time'
            : 'Jag tar ett eller två uppdrag i taget'}
        </h2>

        <p className="final-cta-body text-lg sm:text-xl text-[#B4B4B8] max-w-[680px] font-normal leading-relaxed mb-12">
          {language === 'en'
            ? "Embedded in your team, and owning the outcome together with you. If you're scaling a digital product and it's moving slower than your ambition, book a call."
            : 'Inbäddad i ditt team och äger utfallet tillsammans med er. Om du skalar en digital produkt och det går långsammare än din ambition, boka ett samtal.'}
        </p>

        <div className="final-cta-button">
          <button
            onClick={onOpenBooking}
            className="btn btn--primary inline-flex items-center justify-center px-10 py-5 rounded-full bg-[#E9E9EB] text-[#070808] font-semibold text-lg hover:bg-[#FFFFFF] hover:shadow-[0_0_32px_rgba(233,233,235,0.3)] transition-all duration-300 transform active:scale-95"
          >
            {language === 'en' ? 'Book an intro call' : 'Boka ett introsamtal'}
          </button>
        </div>
      </div>
    </section>
  );
}
