import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, ZoomIn } from 'lucide-react';
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES, REEL_ITEMS } from '../data/portfolio';
import { useGSAPReveal } from '../hooks/useGSAPReveal';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState(null);
  const [playingReel, setPlayingReel] = useState(null);
  const headerRef = useGSAPReveal();

  const filtered = activeCategory === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding bg-ivory">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="text-center mb-12">
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-poppins">
            Our Work
          </span>
          <h2 className="luxury-heading text-elegant-black mt-4">
            Portfolio
          </h2>
          <p className="mt-4 font-cormorant text-xl text-elegant-black/60">
            A curated collection of timeless wedding moments
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {PORTFOLIO_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-xs uppercase tracking-[0.15em] font-poppins transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-wine text-ivory'
                  : 'bg-transparent text-elegant-black/60 border border-elegant-black/10 hover:border-gold hover:text-wine'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="masonry-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className="masonry-item group relative overflow-hidden rounded-sm cursor-pointer"
                onClick={() => setLightbox(item)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className={`w-full object-cover transition-all duration-700 group-hover:scale-105 ${
                    item.tall ? 'h-80 md:h-96' : 'h-56 md:h-64'
                  }`}
                />
                <div className="absolute inset-0 bg-wine/0 group-hover:bg-wine/40 transition-all duration-500 flex items-center justify-center">
                  <ZoomIn className="text-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-500" size={32} />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-elegant-black/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-ivory text-sm font-poppins">{item.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-20">
          <h3 className="font-playfair text-2xl md:text-3xl text-elegant-black text-center mb-8">
            Cinematic Reels
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REEL_ITEMS.map((reel) => (
              <div
                key={reel.id}
                className="group relative aspect-[9/16] max-h-[500px] mx-auto overflow-hidden rounded-sm cursor-pointer"
                onClick={() => setPlayingReel(reel)}
              >
                <img
                  src={reel.thumbnail}
                  alt={reel.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-elegant-black/40 group-hover:bg-elegant-black/20 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full glass flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="text-ivory ml-1" size={28} fill="currentColor" />
                  </div>
                </div>
                <p className="absolute bottom-4 left-4 text-ivory font-poppins text-sm">{reel.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-elegant-black/95 flex items-center justify-center p-5"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-ivory hover:text-gold transition-colors"
              onClick={() => setLightbox(null)}
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-sm"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {playingReel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-elegant-black/95 flex items-center justify-center p-5"
            onClick={() => setPlayingReel(null)}
          >
            <button
              className="absolute top-6 right-6 text-ivory hover:text-gold transition-colors z-10"
              onClick={() => setPlayingReel(null)}
              aria-label="Close video"
            >
              <X size={32} />
            </button>
            <video
              autoPlay
              controls
              className="max-w-full max-h-[85vh] rounded-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <source src={playingReel.video} type="video/mp4" />
            </video>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
