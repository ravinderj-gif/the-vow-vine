'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(interval); setTimeout(onComplete, 500); return 100; }
        return p + 3;
      });
    }, 25);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div exit={{ opacity: 0 }} className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-elegant-black">
      <Image src="/assets/logo/instagram-profile.jpg" alt="THE VOW VINE" width={112} height={112} className="rounded-full mb-8" priority />
      <p className="text-gold font-[family-name:var(--font-cormorant)] text-lg tracking-[0.3em] uppercase">We Elevate Moments Into Legacy</p>
      <div className="mt-10 w-48 h-px bg-ivory/10 relative overflow-hidden">
        <motion.div className="absolute inset-y-0 left-0 bg-gold" style={{ width: `${progress}%` }} />
      </div>
    </motion.div>
  );
}

export function PageLoader({ children }) {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <AnimatePresence>{loading && <Loader onComplete={() => setLoading(false)} />}</AnimatePresence>
      {!loading && children}
    </>
  );
}
