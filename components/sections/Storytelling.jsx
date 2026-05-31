'use client';

import { motion } from 'framer-motion';
import { STORY_BLOCKS } from '@/lib/assets';
import { useGSAPReveal } from '@/hooks/useGSAPReveal';

export default function Storytelling() {
  const headerRef = useGSAPReveal();

  return (
    <section className="bg-elegant-black overflow-hidden">
      <div ref={headerRef} className="text-center section-padding !pb-0">
        <span className="text-gold text-xs uppercase tracking-[0.3em] font-[family-name:var(--font-poppins)]">Our Philosophy</span>
        <h2 className="luxury-heading text-ivory mt-4">Cinematic Storytelling</h2>
      </div>
      {STORY_BLOCKS.map((block, i) => (
        <div key={block.id} className={`grid lg:grid-cols-2 min-h-[60vh] ${block.reverse ? 'lg:direction-rtl' : ''}`}>
          <motion.div initial={{ opacity: 0, x: block.reverse ? 60 : -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }} className={`relative overflow-hidden ${block.reverse ? 'lg:order-2' : ''}`}>
            <img src={block.image} alt={block.quote} loading="lazy" className="w-full h-full min-h-[400px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-elegant-black/30 to-transparent" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: block.reverse ? -60 : 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }} className={`flex flex-col justify-center px-8 md:px-16 lg:px-20 py-16 ${block.reverse ? 'lg:order-1' : ''}`}>
            <span className="text-gold/60 font-[family-name:var(--font-playfair)] text-6xl md:text-8xl leading-none mb-4">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-ivory leading-tight">{block.quote}</h3>
            <p className="mt-6 font-[family-name:var(--font-cormorant)] text-lg md:text-xl text-ivory/60 leading-relaxed max-w-lg">{block.description}</p>
            <div className="mt-8 w-16 h-[1px] bg-gold" />
          </motion.div>
        </div>
      ))}
    </section>
  );
}
