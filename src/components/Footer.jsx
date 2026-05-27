import { Phone, Mail } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import Logo from './Logo';
import { NAV_LINKS, BRAND } from '../utils/constants';
import { scrollToSection } from '../hooks/useSmoothScroll';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-elegant-black text-ivory pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-3 gap-12 pb-12 border-b border-ivory/10">
          <div>
            <Logo className="w-36 h-auto mb-4" variant="light" />
            <p className="font-cormorant text-ivory/50 text-lg italic">
              {BRAND.tagline}
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-gold font-poppins">
              {BRAND.services}
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold font-poppins mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-ivory/60 hover:text-gold text-sm font-inter transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold font-poppins mb-6">
              Connect
            </h4>
            <div className="space-y-4">
              <a href={`tel:+91${BRAND.phone}`} className="flex items-center gap-3 text-ivory/60 hover:text-gold transition-colors text-sm">
                <Phone size={16} />
                {BRAND.phoneFormatted}
              </a>
              <a href={`mailto:${BRAND.email}`} className="flex items-center gap-3 text-ivory/60 hover:text-gold transition-colors text-sm">
                <Mail size={16} />
                {BRAND.email}
              </a>
              <a href={BRAND.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-ivory/60 hover:text-gold transition-colors text-sm">
                <InstagramIcon size={16} />
                {BRAND.instagram}
              </a>
            </div>

            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 btn-outline !px-6 !py-3 !text-xs"
            >
              Follow on Instagram
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-ivory/30 text-xs font-inter">
            &copy; {currentYear} {BRAND.name}. All rights reserved.
          </p>
          <p className="text-ivory/20 text-xs font-inter">
            Luxury Wedding Photography &amp; Cinematic Films
          </p>
        </div>
      </div>
    </footer>
  );
}
