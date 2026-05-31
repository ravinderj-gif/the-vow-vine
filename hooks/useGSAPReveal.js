'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGSAPReveal(options = {}) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from(el, {
        y: options.y ?? 60, opacity: 0, duration: options.duration ?? 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: options.start ?? 'top 85%', toggleActions: 'play none none reverse' },
      });
    });
    return () => ctx.revert();
  }, [options.y, options.duration, options.start]);
  return ref;
}

export function useParallax(speed = 0.15) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.to(el, {
        yPercent: speed * 100, ease: 'none',
        scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
      });
    });
    return () => ctx.revert();
  }, [speed]);
  return ref;
}
