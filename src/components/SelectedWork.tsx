import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { CASE_STUDIES } from '../data/content';
import { Language } from '../types';

interface SelectedWorkProps {
  language: Language;
  onSelectCase: (caseId: string) => void;
}

export default function SelectedWork({ language, onSelectCase }: SelectedWorkProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const totalCases = CASE_STUDIES.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(totalCases - 1, prev + 1));
  };

  return (
    <section className="featured-work py-28 px-6 sm:px-12 bg-[#070808] border-t border-[#121215]" id="case-studies">
      <div className="max-w-[1600px] mx-auto mb-12 flex items-end justify-between">
        <div className="cw-head">
          <h2 className="section-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#E9E9EB]">
            {language === 'en' ? 'Selected work' : 'Utvalt arbete'}
          </h2>
        </div>

        {/* Carousel Arrow Controls */}
        <div className="cw-arrows hidden sm:flex items-center gap-3">
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${
              currentIndex === 0
                ? 'border-[#262828] text-[#48484D] cursor-not-allowed opacity-40'
                : 'border-[#48484D] text-[#E9E9EB] hover:bg-[#E9E9EB] hover:text-[#070808] cursor-pointer'
            }`}
            aria-label="Previous case"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={currentIndex === totalCases - 1}
            className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${
              currentIndex === totalCases - 1
                ? 'border-[#262828] text-[#48484D] cursor-not-allowed opacity-40'
                : 'border-[#48484D] text-[#E9E9EB] hover:bg-[#E9E9EB] hover:text-[#070808] cursor-pointer'
            }`}
            aria-label="Next case"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Carousel Track */}
      <div className="cw-viewport relative overflow-hidden -mx-6 sm:-mx-12 px-6 sm:px-12">
        <motion.div
          ref={trackRef}
          animate={{ x: `-${currentIndex * 85}%` }}
          transition={{ type: 'spring', stiffness: 220, damping: 28 }}
          className="cw-track flex gap-8 select-none cursor-grab active:cursor-grabbing w-max"
        >
          {CASE_STUDIES.map((study, idx) => (
            <div
              key={study.id}
              onClick={() => onSelectCase(study.id)}
              onMouseEnter={() => study.videoSrc && setHoveredVideo(study.id)}
              onMouseLeave={() => setHoveredVideo(null)}
              className="cw-card group flex flex-col justify-between w-[85vw] sm:w-[680px] lg:w-[780px] bg-[#121215] rounded-3xl p-6 sm:p-10 border border-[#1C1D20] hover:border-[#48484D] transition-all duration-300 cursor-pointer"
            >
              {/* Media Preview */}
              <div className="cw-media relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#070808] mb-8">
                {study.videoSrc ? (
                  <video
                    src={study.videoSrc}
                    muted
                    loop
                    playsInline
                    autoPlay
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <img
                    src={study.heroImage}
                    alt={study.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070808]/60 via-transparent to-transparent opacity-60" />
              </div>

              {/* Text / Info */}
              <div className="cw-bottom flex flex-col justify-between">
                <div>
                  <p className="cw-label text-xs sm:text-sm font-semibold tracking-wider text-[#8C8C90] uppercase mb-3">
                    {study.client}
                  </p>
                  <h3 className="cw-title text-xl sm:text-2xl md:text-3xl font-medium text-[#E9E9EB] group-hover:text-white transition-colors leading-snug">
                    {study.title}
                  </h3>
                </div>

                <div className="cw-view-wrap mt-8 pt-6 border-t border-[#1C1D20] flex items-center justify-between">
                  <span className="cw-view text-sm font-medium text-[#8C8C90] group-hover:text-[#E9E9EB] flex items-center gap-2 transition-colors">
                    {language === 'en' ? 'View case' : 'Visa case'}
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>

                  <span className="text-xs text-[#7C7C80] font-mono">0{idx + 1} / 0{totalCases}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Pagination Dots */}
      <div className="cw-dots flex items-center justify-center gap-2 mt-12" role="group" aria-label="Selected work">
        {CASE_STUDIES.map((_, dotIdx) => (
          <button
            key={dotIdx}
            onClick={() => setCurrentIndex(dotIdx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === dotIdx ? 'w-8 bg-[#E9E9EB]' : 'w-2 bg-[#262828] hover:bg-[#48484D]'
            }`}
            aria-label={`Go to case ${dotIdx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
