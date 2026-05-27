'use client';

import { useState } from 'react';
import { Play, X } from 'lucide-react';
import { BRAND } from '@/lib/constants';

const REELS = [
  { id: 1, src: '/assets/videos/instagram/post-08-01.mp4', thumb: '/assets/images/instagram/post-09-01.jpg', title: 'Love Story — A&N' },
  { id: 2, src: '/assets/videos/instagram/post-04-01.mp4', thumb: '/assets/images/instagram/post-05-01.jpg', title: 'Wedding Film — D&K' },
  { id: 3, src: '/assets/videos/instagram/post-01-01.mp4', thumb: '/assets/images/instagram/post-03-01.jpg', title: 'Sangeet Teaser — A&N' },
];

export default function FilmsPage() {
  const [active, setActive] = useState(null);

  return (
    <div className="pt-24 section-padding bg-elegant-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold text-xs uppercase tracking-[0.3em]">Cinematic</span>
          <h1 className="luxury-heading text-ivory mt-4">Wedding Films</h1>
          <p className="mt-4 font-[family-name:var(--font-cormorant)] text-xl text-ivory/60">Story-driven cinematic wedding films by {BRAND.name}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {REELS.map((reel) => (
            <div key={reel.id} className="group relative aspect-[9/16] max-h-[560px] mx-auto overflow-hidden rounded-sm cursor-pointer" onClick={() => setActive(reel)}>
              <img src={reel.thumb} alt={reel.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-elegant-black/40 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full glass flex items-center justify-center"><Play className="text-ivory ml-1" size={28} fill="currentColor" /></div>
              </div>
              <p className="absolute bottom-4 left-4 text-ivory text-sm">{reel.title}</p>
            </div>
          ))}
        </div>
      </div>
      {active && (
        <div className="fixed inset-0 z-[100] bg-elegant-black/95 flex items-center justify-center p-5" onClick={() => setActive(null)}>
          <button className="absolute top-6 right-6 text-ivory" onClick={() => setActive(null)}><X size={32} /></button>
          <video src={active.src} controls autoPlay className="max-h-[85vh] rounded-sm" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
}
