import Link from 'next/link';
import Image from 'next/image';
import { BRAND, NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-elegant-black text-ivory pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 md:px-10 grid md:grid-cols-3 gap-12 pb-12 border-b border-ivory/10">
        <div>
          <Image src="/assets/logo/instagram-profile.jpg" alt={BRAND.name} width={64} height={64} className="rounded-full mb-4" />
          <p className="font-[family-name:var(--font-cormorant)] text-ivory/50 italic">{BRAND.tagline}</p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-6">Navigation</h4>
          <ul className="space-y-3">{NAV_LINKS.map((l) => <li key={l.href}><Link href={l.href} className="text-ivory/60 hover:text-gold text-sm">{l.label}</Link></li>)}</ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-6">Connect</h4>
          <p className="text-ivory/60 text-sm mb-2">{BRAND.phoneFormatted}</p>
          <p className="text-ivory/60 text-sm mb-2">{BRAND.email}</p>
          <a href={BRAND.instagramUrl} className="text-ivory/60 hover:text-gold text-sm">{BRAND.instagram}</a>
        </div>
      </div>
      <p className="text-center text-ivory/30 text-xs pt-8">&copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
    </footer>
  );
}
