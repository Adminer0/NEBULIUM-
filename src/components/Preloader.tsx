import { useEffect, useRef } from 'react';
import { animate } from 'animejs';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Check if seen in this session
    if (sessionStorage.getItem('preloaderSeen')) {
      onComplete();
      return;
    }

    const counter = { val: 0 };

    // Anime.js v4 count animation
    const anim = animate(counter, {
      val: 100,
      duration: 1000,
      ease: 'outExpo',
      onUpdate: () => {
        if (countRef.current) {
          countRef.current.textContent = `${Math.round(counter.val)}%`;
        }
      },
      onComplete: () => {
        sessionStorage.setItem('preloaderSeen', '1');
        // Slide out animation
        if (containerRef.current) {
          animate(containerRef.current, {
            opacity: [1, 0],
            y: [0, -20],
            duration: 400,
            ease: 'inQuad',
            onComplete: () => {
              onComplete();
            }
          });
        } else {
          onComplete();
        }
      }
    });

    return () => {
      anim.pause();
    };
  }, [onComplete]);


  return (
    <div
      ref={containerRef}
      id="preloader"
      className="preloader"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: '#070808',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none'
      }}
      aria-hidden="true"
    >
      <span
        ref={countRef}
        id="preloader-count"
        className="preloader-count"
        style={{
          color: '#E9E9EB',
          fontSize: 'clamp(3rem, 7vw, 6rem)',
          fontWeight: 500,
          letterSpacing: '-0.03em',
          fontVariantNumeric: 'tabular-nums'
        }}
      >
        0%
      </span>
    </div>
  );
}
