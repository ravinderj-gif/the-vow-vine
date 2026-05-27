import Hero from '@/components/sections/Hero';
import { InstagramPreview } from '@/components/sections/InstagramGrid';
import Link from 'next/link';
import { getInstagramPosts, getReels } from '@/lib/instagram';
import { BRAND, COUNTERS, PACKAGE } from '@/lib/constants';

export default async function HomePage() {
  const posts = await getInstagramPosts();
  const reels = getReels(posts);

  return (
    <>
      <Hero videoSrc={reels[0]?.video || '/assets/videos/instagram/post-08-01.mp4'} />
      <section className="section-padding bg-ivory">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-gold text-xs uppercase tracking-[0.3em]">Our Story</span>
            <h2 className="luxury-heading text-elegant-black mt-4">Every Wedding Has A Soul.</h2>
            <p className="mt-6 font-[family-name:var(--font-cormorant)] text-xl text-elegant-black/70 leading-relaxed">At {BRAND.name}, weddings are transformed into timeless cinematic stories through emotional photography, artistic direction, and unforgettable storytelling.</p>
            <Link href="/about" className="btn-primary mt-8 inline-flex">Discover Our Story</Link>
          </div>
          <img src="/assets/images/instagram/post-07-03.jpg" alt="THE VOW VINE wedding" className="w-full h-[500px] object-cover rounded-sm" />
        </div>
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {COUNTERS.map((c) => (
            <div key={c.label} className="text-center">
              <p className="font-[family-name:var(--font-playfair)] text-5xl text-wine">{c.value}{c.suffix}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-elegant-black/60">{c.label}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section-padding bg-maroon text-ivory">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="luxury-heading mb-4">{PACKAGE.title}</h2>
          <p className="text-5xl font-[family-name:var(--font-playfair)] text-gold mb-8">Starts from {PACKAGE.price}</p>
          <Link href="/packages" className="btn-gold">View Packages</Link>
        </div>
      </section>
      <InstagramPreview posts={posts} />
    </>
  );
}
