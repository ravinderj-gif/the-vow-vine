'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { BRAND } from '@/lib/constants';

export default function Hero({ videoSrc = '/assets/videos/instagram/post-08-01.mp4' }) {
  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover scale-105 animate-[pulse_20s_ease-in-out_infinite]" src={videoSrc} />
      <div className="cinematic-overlay absolute inset-0" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-5">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-gold text-xs md:text-sm uppercase tracking-[0.4em] mb-6">{BRAND.services}</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="luxury-heading text-ivory max-w-5xl shimmer-text">{BRAND.tagline}</motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="mt-6 max-w-2xl text-ivory/70 font-[family-name:var(--font-cormorant)] text-xl md:text-2xl">Luxury Wedding Photography & Cinematic Storytelling That Preserves Every Emotion Forever.</motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 }} className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link href="/portfolio" className="btn-primary">View Portfolio</Link>
          <Link href="/booking" className="btn-outline">Book Now</Link>
          <Link href="/films" className="btn-gold">Watch Films</Link>
        </motion.div>
      </div>
    </section>
  );
}
