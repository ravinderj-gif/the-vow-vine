import Link from 'next/link';
import { BRAND, PACKAGE } from '@/lib/constants';
import { Check } from 'lucide-react';

export const metadata = { title: `Packages | ${BRAND.name}` };

export default function PackagesPage() {
  return (
    <div className="pt-24 section-padding bg-ivory min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold text-xs uppercase tracking-[0.3em]">Investment</span>
          <h1 className="luxury-heading text-elegant-black mt-4">Luxury Packages</h1>
        </div>
        <div className="grid lg:grid-cols-2 overflow-hidden rounded-sm shadow-2xl">
          <img src="/assets/images/instagram/post-09-01.jpg" alt="Luxury wedding" className="w-full min-h-[400px] object-cover" />
          <div className="bg-maroon p-10 lg:p-14 text-ivory">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Featured Package</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl mt-3">{PACKAGE.title}</h2>
            <p className="font-[family-name:var(--font-playfair)] text-5xl mt-6">Starts from {PACKAGE.price}</p>
            <div className="grid sm:grid-cols-2 gap-8 mt-10">
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Services</h3>
                <ul className="space-y-2">{PACKAGE.services.map((s) => <li key={s} className="flex gap-2 text-sm"><Check size={14} className="text-gold mt-1" />{s}</li>)}</ul>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Deliverables</h3>
                <ul className="space-y-2">{PACKAGE.deliverables.map((d) => <li key={d} className="flex gap-2 text-sm"><Check size={14} className="text-gold mt-1" />{d}</li>)}</ul>
              </div>
            </div>
            <div className="mt-10 flex gap-4 flex-wrap">
              <Link href="/booking" className="btn-gold">Book Your Date</Link>
              <a href={BRAND.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">Enquire Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
