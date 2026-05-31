'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import InstagramIcon from '@/components/ui/InstagramIcon';
import { REEL_ITEMS } from '@/lib/assets';
import { useGSAPReveal } from '@/hooks/useGSAPReveal';
import { BRAND } from '@/lib/constants';

const FEED_IMAGES = [
  '/assets/images/instagram/post-07-01.jpg',
  '/assets/images/instagram/post-09-02.jpg',
  '/assets/images/instagram/post-06-01.jpg',
  '/assets/images/instagram/post-11-04.jpg',
  '/assets/images/instagram/post-05-03.jpg',
  '/assets/images/instagram/post-02-02.jpg',
];

export default function InstagramFeed({ posts = [] }) {
  const headerRef = useGSAPReveal();

  const feedItems = posts.length >= 9
    ? posts.slice(0, 9).map((post, i) => ({
        id: post.id || `post-${i}`,
        src: post.thumbnail,
        isReel: post.type === 'video',
        alt: post.caption?.slice(0, 50) || 'THE VOW VINE wedding photography',
      }))
    : [
        ...FEED_IMAGES.map((src, i) => ({ id: `feed-${i}`, src, isReel: false, alt: 'THE VOW VINE wedding photography' })),
        ...REEL_ITEMS.map((reel) => ({ id: `reel-${reel.id}`, src: reel.thumbnail, isReel: true, alt: reel.title })),
      ].slice(0, 9);

  return (
    <section id="instagram" className="section-padding bg-ivory">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="text-center mb-12">
          <InstagramIcon className="text-wine mx-auto mb-4" size={28} />
          <h2 className="luxury-heading text-elegant-black">{BRAND.instagram}</h2>
          <p className="mt-4 font-[family-name:var(--font-cormorant)] text-xl text-elegant-black/60">Follow our journey through timeless wedding moments</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {feedItems.map((item, i) => (
            <motion.a key={item.id} href={BRAND.instagramUrl} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group relative aspect-square overflow-hidden">
              <img src={item.src} alt={item.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
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
          <a href={BRAND.instagramUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">Follow Our Journey</a>
        </div>
      </div>
    </section>
  );
}
