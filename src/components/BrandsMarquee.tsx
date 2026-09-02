import { BRANDS } from '../data/content';
import { Language } from '../types';

interface BrandsMarqueeProps {
  language: Language;
}

export default function BrandsMarquee({ language }: BrandsMarqueeProps) {
  const row1 = BRANDS.slice(0, 6);
  const row2 = BRANDS.slice(6);

  // Duplicate for seamless infinite marquee loop
  const marqueeRow1 = [...row1, ...row1, ...row1, ...row1];
  const marqueeRow2 = [...row2, ...row2, ...row2, ...row2];

  return (
    <section className="brands py-16 border-t border-b border-[#121215] bg-[#070808] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 mb-8 text-center sm:text-left">
        <h2 className="text-xs uppercase tracking-[0.15em] text-[#7C7C80] font-medium">
          {language === 'en' ? "Brands I've worked with" : 'Varumärken jag arbetat med'}
        </h2>
      </div>

      <div className="marquee relative w-full overflow-hidden mb-6">
        <div className="marquee-track flex items-center gap-12 w-max animate-marquee">
          {marqueeRow1.map((b, idx) => (
            <div
              key={`r1-${idx}`}
              className="cell flex items-center justify-center px-6 py-4 h-16 min-w-[140px] opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src={b.logo}
                alt={b.name}
                loading="lazy"
                decoding="async"
                className="max-h-7 max-w-[120px] object-contain filter brightness-90 grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="marquee relative w-full overflow-hidden">
        <div className="marquee-track marquee-track--reverse flex items-center gap-12 w-max animate-marquee-reverse">
          {marqueeRow2.map((b, idx) => (
            <div
              key={`r2-${idx}`}
              className="cell flex items-center justify-center px-6 py-4 h-16 min-w-[140px] opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src={b.logo}
                alt={b.name}
                loading="lazy"
                decoding="async"
                className="max-h-7 max-w-[120px] object-contain filter brightness-90 grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
