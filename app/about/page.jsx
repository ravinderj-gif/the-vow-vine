import { BRAND, COUNTERS } from '@/lib/constants';

export const metadata = { title: `About | ${BRAND.name}` };

export default function AboutPage() {
  return (
    <div className="pt-24">
      <section className="section-padding bg-ivory">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-gold text-xs uppercase tracking-[0.3em]">About Us</span>
            <h1 className="luxury-heading text-elegant-black mt-4">Every Wedding Has A Soul.</h1>
            <p className="mt-6 font-[family-name:var(--font-cormorant)] text-xl text-elegant-black/70 leading-relaxed">At {BRAND.name}, we don&apos;t capture photos — we preserve emotions. Our vision is to elevate every wedding into a cinematic legacy that generations will cherish.</p>
            <p className="mt-4 text-elegant-black/50 leading-relaxed">From intimate ceremonies to grand destination celebrations across South India, we craft visual narratives with luxury fashion editorial quality and emotional depth.</p>
          </div>
          <img src="/assets/images/instagram/post-07-03.jpg" alt="About THE VOW VINE" className="w-full h-[500px] object-cover rounded-sm" />
        </div>
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {['Vision', 'Mission', 'Approach'].map((title, i) => (
            <div key={title} className="glass-dark bg-wine/5 p-8 rounded-sm border border-wine/10">
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-wine mb-4">{title}</h3>
              <p className="text-elegant-black/60 text-sm leading-relaxed">
                {i === 0 && 'To be India\'s most trusted luxury cinematic wedding storytelling brand.'}
                {i === 1 && 'Transform weddings into timeless cinematic stories through emotional artistry.'}
                {i === 2 && 'Emotional intelligence, cinematic direction, and editorial-grade craftsmanship.'}
              </p>
            </div>
          ))}
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
    </div>
  );
}
