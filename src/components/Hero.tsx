import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import HeroGlobe from './HeroGlobe';
import { Language } from '../types';

interface HeroProps {
  language: Language;
  onOpenBooking: () => void;
}

export default function Hero({ language, onOpenBooking }: HeroProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const titleText =
    language === 'en'
      ? 'Fractional design leader for scale-up teams'
      : 'Fractional design leader för produktteam';

  const subText =
    language === 'en'
      ? 'I embed with your product teams to set design direction, build the systems and raise the bar on strategy, efficiency and craft.'
      : 'Jag går in i ditt produktteam, sätter designriktningen, bygger systemen och höjer ribban för strategi, effektivitet och hantverk.';

  const ctaText = language === 'en' ? 'Book an intro call' : 'Boka ett introsamtal';

  useEffect(() => {
    if (!headingRef.current) return;

    // Anime.js word reveal
    const words = titleText.split(' ');
    headingRef.current.innerHTML = words
      .map(
        (word) =>
          `<span class="inline-block overflow-hidden"><span class="hero-word inline-block opacity-0 translate-y-6">${word}</span></span>`
      )
      .join(' ');

    animate('.hero-word', {
      opacity: [0, 1],
      y: [24, 0],
      duration: 800,
      delay: stagger(55, { start: 200 }),
      ease: 'outQuart'
    });

    if (subRef.current) {
      animate(subRef.current, {
        opacity: [0, 1],
        y: [16, 0],
        duration: 900,
        delay: 500,
        ease: 'outQuart'
      });
    }

    if (ctaRef.current) {
      animate(ctaRef.current, {
        opacity: [0, 1],
        y: [16, 0],
        duration: 900,
        delay: 650,
        ease: 'outQuart'
      });
    }
  }, [titleText]);


  return (
    <section className="hero" id="intro">
      <div className="hero-inner">
        <div className="hero-text z-10 relative">
          <h1
            ref={headingRef}
            className="hero-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-[#E9E9EB] leading-[1.08] max-w-[840px]"
          >
            {titleText}
          </h1>

          <p
            ref={subRef}
            className="hero-sub mt-6 text-lg sm:text-xl text-[#B4B4B8] max-w-[620px] font-normal leading-relaxed opacity-0"
          >
            {subText}
          </p>

          <div ref={ctaRef} className="hero-cta mt-10 opacity-0">
            <button
              onClick={onOpenBooking}
              className="btn btn--primary inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#E9E9EB] text-[#070808] font-semibold text-base hover:bg-[#FFFFFF] hover:shadow-[0_0_24px_rgba(233,233,235,0.25)] transition-all duration-300 transform active:scale-95"
            >
              {ctaText}
            </button>
          </div>
        </div>

        <div className="hero-globe-wrap absolute right-0 top-1/2 -translate-y-1/2 w-[55%] h-[90%] pointer-events-none sm:pointer-events-auto">
          <HeroGlobe />
        </div>
      </div>
    </section>
  );
}
