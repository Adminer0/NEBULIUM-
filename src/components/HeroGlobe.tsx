import { useEffect, useRef } from 'react';

export default function HeroGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const tokens = [
      '--color-text-primary',
      '--color-text-secondary',
      '--color-text-muted',
      '--color-text-inverse',
      '--color-surface-default',
      '--color-surface-raised',
      '--color-background-canvas',
      '--color-border-default',
      '--color-border-subtle',
      '--color-accent-emphasis',
      '--font-size-body-sm',
      '--font-size-body-md',
      '--font-size-heading-md',
      '--font-size-heading-lg',
      '--font-size-display-xl',
      '--font-weight-regular',
      '--font-weight-medium',
      '--font-weight-semibold',
      '--line-height-tight',
      '--line-height-default',
      '--letter-spacing-tight',
      '--space-xs',
      '--space-sm',
      '--space-md',
      '--space-lg',
      '--space-xl',
      '--space-2xl',
      '--radius-sm',
      '--radius-md',
      '--radius-full',
      '--shadow-sm',
      '--shadow-md',
      '--z-index-nav',
      '--z-index-modal',
      '--duration-fast',
      '--duration-medium',
      '--easing-standard',
      '--easing-emphasized',
      '--breakpoint-lg',
      '--container-max-width'
    ];

    const continentMatrix: Record<number, number[][]> = {
      2: [[8, 16], [30, 32], [48, 57]],
      3: [[6, 20], [22, 25], [29, 33], [40, 58]],
      4: [[3, 25], [27, 58]],
      5: [[3, 25], [27, 58]],
      6: [[3, 22], [28, 58]],
      7: [[4, 22], [28, 58]],
      8: [[5, 21], [28, 57]],
      9: [[6, 20], [27, 56]],
      10: [[8, 18], [27, 53]],
      11: [[10, 16], [27, 52]],
      12: [[13, 18], [27, 51]],
      13: [[15, 24], [27, 39], [46, 52]],
      14: [[17, 24], [28, 38], [47, 53]],
      15: [[17, 24], [29, 37], [48, 53]],
      16: [[17, 24], [29, 37], [48, 53]],
      17: [[17, 24], [30, 37], [49, 52]],
      18: [[18, 24], [30, 37], [49, 55]],
      19: [[18, 23], [31, 36], [48, 56]],
      20: [[18, 23], [32, 36], [49, 55]],
      21: [[19, 22], [33, 35], [50, 54]],
      22: [[19, 22]],
      23: [[19, 21]],
      24: [[19, 20]]
    };

    const degToRad = Math.PI / 180;
    const rawPoints: { x: number; y: number; z: number }[] = [];

    for (const key of Object.keys(continentMatrix)) {
      const latIndex = +key;
      const phi = (90 - latIndex * 6) * degToRad;
      for (const [startLng, endLng] of continentMatrix[latIndex]) {
        for (let a = startLng; a <= endLng; a++) {
          const theta = (a * 6 - 180) * degToRad;
          rawPoints.push({
            x: Math.cos(phi) * Math.cos(theta),
            y: Math.sin(phi),
            z: Math.cos(phi) * Math.sin(theta)
          });
        }
      }
    }

    const step = Math.max(1, Math.round(rawPoints.length / 155));
    interface Particle {
      x: number;
      y: number;
      z: number;
      t: string;
      disp: number;
      vel: number;
      rx: number;
      ry: number;
      front: boolean;
      _z: number;
    }

    const particles: Particle[] = [];
    for (let e = 0, t = 0; e < rawPoints.length; e += step, t++) {
      particles.push({
        ...rawPoints[e],
        t: tokens[t % tokens.length],
        disp: 0,
        vel: 0,
        rx: 0,
        ry: 0,
        front: false,
        _z: 0
      });
    }

    let width = 0;
    let height = 0;
    let centerX = 0;
    let centerY = 0;
    let radius = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(rect.width * dpr));
      canvas.height = Math.max(1, Math.round(rect.height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      width = rect.width;
      height = rect.height;
      centerX = width / 2;
      centerY = height / 2;
      radius = Math.min(width, height) * 0.44;
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });

    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handlePointerMove = (e: PointerEvent) => {
      targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = (e.clientY / window.innerHeight) * 2 - 1;
    };

    if (!prefersReducedMotion) {
      window.addEventListener('pointermove', handlePointerMove, { passive: true });
    }

    const perspectiveDistance = 2.5;
    const sortedIndices = particles.map((_, idx) => idx);

    let animFrameId = 0;
    let isRunning = false;
    let isVisible = true;

    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      mouseX += (targetMouseX - mouseX) * 0.045;
      mouseY += (targetMouseY - mouseY) * 0.045;

      const t = prefersReducedMotion ? 8000 : time;
      const rotY = t * 0.00007 + 0.5 * Math.sin(t * 0.00005) + mouseX * 0.38;
      const rotX = 0.22 * Math.sin(t * 0.00007 + 0.5) + 0.12 * Math.sin(t * 0.00017) + mouseY * 0.26;
      const rotZ = 0.14 * Math.sin(t * 0.00004 + 2.1) + mouseX * 0.05;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosZ = Math.cos(rotZ);
      const sinZ = Math.sin(rotZ);

      for (const p of particles) {
        const ox = p.x;
        const oy = p.y;
        const oz = p.z;

        // Rotation around Y
        const x1 = ox * cosY + oz * sinY;
        const z1 = -ox * sinY + oz * cosY;

        // Rotation around X
        const y2 = oy * cosX - z1 * sinX;
        const z2 = oy * sinX + z1 * cosX;

        // Rotation around Z
        const x3 = x1 * cosZ - y2 * sinZ;
        const y3 = x1 * sinZ + y2 * cosZ;

        const scale = perspectiveDistance / (perspectiveDistance - z2);
        p.rx = x3 * radius * scale;
        p.ry = y3 * radius * scale;
        p.front = z2 > 0;
        p._z = z2;
      }

      // Sort back-to-front
      sortedIndices.sort((a, b) => particles[a]._z - particles[b]._z);

      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      for (const idx of sortedIndices) {
        const p = particles[idx];
        const depthNorm = (p._z + 1) / 2; // 0 to 1
        const scale = perspectiveDistance / (perspectiveDistance - p._z);

        ctx.globalAlpha = 0.08 + Math.pow(depthNorm, 1.5) * 0.82;
        const fontSize = Math.max(8, radius * 0.0125 * (1 + depthNorm) * scale);
        ctx.font = `500 ${fontSize}px Silka, -apple-system, sans-serif`;
        ctx.fillStyle = depthNorm > 0.6 ? '#B4B4B8' : '#6E6E72';
        ctx.fillText(p.t, centerX + p.rx, centerY + p.ry);
      }

      ctx.globalAlpha = 1;

      if (isRunning) {
        animFrameId = requestAnimationFrame(render);
      }
    };

    const startAnimation = () => {
      if (!isRunning && isVisible && !document.hidden && !prefersReducedMotion) {
        isRunning = true;
        animFrameId = requestAnimationFrame(render);
      }
    };

    const stopAnimation = () => {
      isRunning = false;
      if (animFrameId) {
        cancelAnimationFrame(animFrameId);
        animFrameId = 0;
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) stopAnimation();
      else startAnimation();
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible) startAnimation();
          else stopAnimation();
        });
      },
      { rootMargin: '0px' }
    );

    observer.observe(canvas);

    if (prefersReducedMotion) {
      render(0);
    } else {
      startAnimation();
    }

    return () => {
      stopAnimation();
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="hero-globe" aria-hidden="true" style={{ width: '100%', height: '100%', position: 'relative' }}>
      <canvas
        ref={canvasRef}
        id="hero-globe"
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          position: 'absolute',
          inset: 0
        }}
      />
    </div>
  );
}
