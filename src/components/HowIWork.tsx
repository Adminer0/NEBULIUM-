import { HOW_PHASES } from '../data/content';
import { Language } from '../types';

interface HowIWorkProps {
  language: Language;
}

export default function HowIWork({ language }: HowIWorkProps) {
  return (
    <section className="how py-28 px-6 sm:px-12 bg-[#070808] border-t border-[#121215]">
      <div className="how-inner max-w-[1600px] mx-auto">
        <div className="how-head mb-20 max-w-[800px]">
          <span className="how-eyebrow text-xs uppercase tracking-[0.15em] text-[#7C7C80] font-medium block mb-4">
            {language === 'en' ? 'How I work' : 'Hur jag arbetar'}
          </span>
          <h2 className="how-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#E9E9EB]">
            {language === 'en' ? 'Four phases, measurable outcomes' : 'Fyra faser, mätbara utfall'}
          </h2>
        </div>

        <div className="how-cols grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {HOW_PHASES.map((phase) => (
            <div
              key={phase.num}
              className="how-col flex flex-col justify-between p-8 rounded-3xl bg-[#121215] border border-[#1C1D20] hover:border-[#48484D] transition-colors duration-300 min-h-[300px]"
            >
              <div>
                <h3 className="how-col-title text-xl font-medium text-[#E9E9EB] mb-4 flex items-center gap-3">
                  <span className="how-col-num font-mono text-sm text-[#7C7C80]">{phase.num}</span>
                  {phase.title[language]}
                </h3>
                <p className="how-col-body text-base text-[#B4B4B8] leading-relaxed">
                  {phase.body[language]}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-[#1C1D20]">
          <p className="how-note text-lg sm:text-xl text-[#8C8C90] italic max-w-[600px] font-normal leading-relaxed">
            {language === 'en' ? (
              <>
                The hand over closes the engagement.
                <br />
                It usually opens the next one.
              </>
            ) : (
              <>
                Överlämningen avslutar uppdraget.
                <br />
                Den öppnar oftast nästa.
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
