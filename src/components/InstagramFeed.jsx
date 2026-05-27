import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { INSTAGRAM_FEED, REEL_THUMBNAILS } from '../data/images';
import { REEL_ITEMS } from '../data/portfolio';
import { useGSAPReveal } from '../hooks/useGSAPReveal';
import { BRAND } from '../utils/constants';

export default function InstagramFeed() {
  const headerRef = useGSAPReveal();

  const feedItems = [
    ...INSTAGRAM_FEED.slice(0, 6).map((src, i) => ({
      id: `feed-${i}`,
      src,
      isReel: false,
      alt: 'THE VOW VINE wedding photography',
    })),
    ...REEL_ITEMS.map((reel, i) => ({
      id: `reel-${reel.id}`,
      src: REEL_THUMBNAILS[i] || reel.thumbnail,
      isReel: true,
      alt: reel.title,
    })),
  ].slice(0, 9);

  return (
    <section className="section-padding bg-ivory">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="text-center mb-12">
          <InstagramIcon className="text-wine mx-auto mb-4" size={28} />
          <h2 className="luxury-heading text-elegant-black">
            {BRAND.instagram}
          </h2>
          <p className="mt-4 font-cormorant text-xl text-elegant-black/60">
            Follow our journey through timeless wedding moments
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {feedItems.map((item, i) => (
            <motion.a
              key={item.id}
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative aspect-square overflow-hidden"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-wine/0 group-hover:bg-wine/50 transition-all duration-500 flex items-center justify-center">
                {item.isReel ? (
                  <Play className="text-ivory opacity-0 group-hover:opacity-100 transition-opacity" size={32} fill="currentColor" />
                ) : (
                  <InstagramIcon className="text-ivory opacity-0 group-hover:opacity-100 transition-opacity" size={28} />
                )}
              </div>
            </motion.a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Follow Our Journey
          </a>
        </div>
      </div>
    </section>
  );
}
