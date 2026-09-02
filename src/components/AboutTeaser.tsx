import { Language } from '../types';

interface AboutTeaserProps {
  language: Language;
  onNavigateToAbout: () => void;
}

export default function AboutTeaser({ language, onNavigateToAbout }: AboutTeaserProps) {
  return (
    <section className="about-teaser py-28 px-6 sm:px-12 bg-[#070808] border-t border-[#121215]">
      <div className="at-inner max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Left: Video / Portrait */}
        <div className="at-image lg:col-span-5 relative aspect-[4/5] rounded-3xl overflow-hidden bg-[#121215] border border-[#1C1D20]">
          <video
            className="at-video w-full h-full object-cover"
            src="/_astro/metacci-smile.BIO4p4pV.mp4"
            poster="/_astro/metacci-def.DVFklYC9_ZjbsOr.webp"
            muted
            loop
            playsInline
            autoPlay
            aria-label="Simon Metacci"
          />
        </div>

        {/* Right: Text */}
        <div className="at-text lg:col-span-7 flex flex-col justify-center">
          <h2 className="at-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#E9E9EB] leading-[1.15] mb-8">
            {language === 'en' ? (
              <>
                I'm Simon.
                <br />
                I've done this for <span className="at-nowrap font-serif italic text-white">19 years.</span>
              </>
            ) : (
              <>
                Jag är Simon.
                <br />
                Jag har gjort detta i <span className="at-nowrap font-serif italic text-white">19 år.</span>
              </>
            )}
          </h2>

          <p className="at-body text-lg sm:text-xl text-[#B4B4B8] leading-relaxed mb-10 max-w-[640px]">
            {language === 'en'
              ? "I taught myself front-end before finishing school, spent a decade in agencies shipping e-commerce, then moved upstream to Systembolaget, Electrolux, and scale-ups since. I work inside your team, not next to it. The designers I've worked with leave sharper. The systems I've built are still running."
              : 'Jag lärde mig front-end innan jag gick ut skolan, tillbringade ett decennium på byråer med att skeppa e-handel och rörde mig sedan uppströms till Systembolaget, Electrolux och scale-ups därefter. Jag arbetar i ditt team, inte bredvid det. Formgivarna jag jobbat med lämnar vassare. Systemen jag byggt rullar fortfarande.'}
          </p>

          <div>
            <button
              onClick={onNavigateToAbout}
              className="at-link inline-flex items-center gap-2 text-base font-medium text-[#E9E9EB] hover:text-white border-b border-[#48484D] hover:border-[#E9E9EB] pb-1 transition-colors cursor-pointer"
            >
              {language === 'en' ? 'More about me' : 'Mer om mig'}
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
