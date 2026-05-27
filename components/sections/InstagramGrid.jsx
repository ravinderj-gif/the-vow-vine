'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { BRAND } from '@/lib/constants';

export default function InstagramGrid({ posts = [] }) {
  const feed = posts.slice(0, 9);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
      {feed.map((post, i) => (
        <motion.a
          key={post.id} href={post.permalink || BRAND.instagramUrl} target="_blank" rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
          className="group relative aspect-square overflow-hidden"
        >
          <img src={post.thumbnail} alt={post.caption?.slice(0, 50) || 'Instagram'} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute inset-0 bg-wine/0 group-hover:bg-wine/50 transition-all flex items-center justify-center">
            {post.type === 'video' && <Play className="text-ivory opacity-0 group-hover:opacity-100 transition-opacity" size={32} fill="currentColor" />}
          </div>
        </motion.a>
      ))}
    </div>
  );
}

export function InstagramPreview({ posts }) {
  return (
    <section className="section-padding bg-ivory">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="luxury-heading text-elegant-black mb-4">{BRAND.instagram}</h2>
        <p className="font-[family-name:var(--font-cormorant)] text-xl text-elegant-black/60 mb-12">Latest from our Instagram portfolio</p>
        <InstagramGrid posts={posts} />
        <Link href={BRAND.instagramUrl} target="_blank" className="btn-primary mt-12 inline-flex">Follow Our Journey</Link>
      </div>
    </section>
  );
}
