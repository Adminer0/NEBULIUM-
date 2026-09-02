import { useEffect, useRef, useState } from 'react';
import { animate } from 'animejs';
import { GROWTH_STATS } from '../data/content';
import { Language } from '../types';

interface GrowthProps {
  language: Language;
}

export default function Growth({ language }: GrowthProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hasAnimatedRef = useRef(false);
  const [counts, setCounts] = useState(GROWTH_STATS.map(() => 0));

  // Canvas interactive nebula / wave animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    const resize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let animId = 0;
    let t = 0;

    const render = () => {
      t += 0.008;
      ctx.clearRect(0, 0, width, height);

      // Subtle atmospheric glow
      const grad = ctx.createRadialGradient(
        width * 0.5 + Math.sin(t * 0.5) * 80,
        height * 0.5 + Math.cos(t * 0.3) * 50,
        20,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.7
      );
      grad.addColorStop(0, 'rgba(38, 40, 40, 0.45)');
      grad.addColorStop(0.5, 'rgba(18, 18, 21, 0.25)');
      grad.addColorStop(1, 'rgba(7, 8, 8, 0)');

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  // Anime.js number counter trigger on scroll
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;

          GROWTH_STATS.forEach((stat, i) => {
            const obj = { val: 0 };
            animate(obj, {
              val: stat.num,
              duration: 1400 + i * 150,
              ease: 'outExpo',
              onUpdate: () => {
                setCounts((prev) => {
                  const copy = [...prev];
                  copy[i] = Math.round(obj.val);
                  return copy;
                });
              }
            });
          });
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);


  const heading =
    language === 'en' ? (
      <>
        Growth comes from shipping <span className="fast text-[#FFFFFF] italic font-serif">faster</span> than your competition
      </>
    ) : (
      <>
        Tillväxt kommer från att skeppa <span className="fast text-[#FFFFFF] italic font-serif">snabbare</span> än dina konkurrenter
      </>
    );

  const body =
    language === 'en'
      ? 'I embed with your team as a force multiplier. I set direction so everyone builds toward the same outcome, turn your design system into a speed advantage, and validate ideas before they cost engineering time. The team you already have ships faster and growth follows.'
      : 'Jag går in i ditt team som en kraftmultiplikator. Jag sätter riktning så att alla bygger mot samma utfall, gör ditt designsystem till en hastighetsfördel och validerar idéer innan de kostar utvecklingstid. Teamet du redan har skeppar snabbare och tillväxten följer.';

  return (
    <section ref={sectionRef} className="growth relative py-28 px-6 sm:px-12 bg-[#070808] overflow-hidden">
      <canvas
        ref={canvasRef}
        className="growth-nebula absolute inset-0 w-full h-full pointer-events-none opacity-60"
        aria-hidden="true"
      />

      <div className="growth-inner max-w-[1400px] mx-auto relative z-10">
        <div className="growth-text max-w-[920px] mb-20">
          <h2 className="growth-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#E9E9EB] leading-[1.15]">
            {heading}
          </h2>
          <p className="growth-body mt-8 text-lg sm:text-xl text-[#B4B4B8] font-normal leading-relaxed max-w-[760px]">
            {body}
          </p>
        </div>

        <div className="growth-stats grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-[#1C1D20]">
          {GROWTH_STATS.map((stat, idx) => (
            <div key={idx} className="stat flex flex-col">
              <span className="stat-value text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#E9E9EB] font-mono">
                {counts[idx]}
                {stat.suffix}
              </span>
              <span className="stat-label mt-2 text-sm sm:text-base text-[#8C8C90] font-normal">
                {stat.label[language]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
