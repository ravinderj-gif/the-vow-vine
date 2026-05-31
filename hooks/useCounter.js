'use client';

import { useEffect, useState } from 'react';

export function useCounter(end, duration = 2000) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;
    let startTime;
    let frame;
    const animate = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1 - progress, 3)) * end));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [end, duration, hasStarted]);

  const ref = (node) => {
    if (!node || hasStarted) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setHasStarted(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    obs.observe(node);
  };
  return { count, ref };
}
