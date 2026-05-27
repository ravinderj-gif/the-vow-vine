'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, ZoomIn } from 'lucide-react';
import { PORTFOLIO_CATEGORIES } from '@/lib/constants';

export default function PortfolioGallery({ items = [] }) {
  const [cat, setCat] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = cat === 'All' ? items : items.filter((i) => i.category === cat);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {PORTFOLIO_CATEGORIES.map((c) => (
          <button key={c} onClick={() => setCat(c)} className={`px-5 py-2 text-xs uppercase tracking-[0.15em] transition-all ${cat === c ? 'bg-wine text-ivory' : 'border border-elegant-black/10 text-elegant-black/60 hover:border-gold'}`}>{c}</button>
        ))}
      </div>
      <div className="masonry-grid">
        <AnimatePresence mode="popLayout">
          {filtered.map((item, i) => (
            <motion.div key={item.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="masonry-item group relative overflow-hidden cursor-pointer rounded-sm" onClick={() => setLightbox(item)}>
              {item.type === 'video' ? (
                <div className="relative h-64 bg-elegant-black flex items-center justify-center">
                  <video src={item.src} className="w-full h-full object-cover" muted />
                  <Play className="absolute text-ivory" size={32} />
                </div>
              ) : (
                <img src={item.src} alt={item.caption || 'Portfolio'} loading="lazy" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
              )}
              <div className="absolute inset-0 bg-wine/0 group-hover:bg-wine/40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100"><ZoomIn className="text-ivory" size={28} /></div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {lightbox && (
        <div className="fixed inset-0 z-[100] bg-elegant-black/95 flex items-center justify-center p-5" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-ivory" onClick={() => setLightbox(null)}><X size={32} /></button>
          {lightbox.type === 'video' ? (
            <video src={lightbox.src} controls autoPlay className="max-h-[85vh] rounded-sm" onClick={(e) => e.stopPropagation()} />
          ) : (
            <img src={lightbox.src} alt="" className="max-h-[85vh] object-contain" onClick={(e) => e.stopPropagation()} />
          )}
        </div>
      )}
    </>
  );
}
