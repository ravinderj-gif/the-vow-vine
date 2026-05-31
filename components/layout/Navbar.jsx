'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, BRAND } from '@/lib/constants';
import { scrollToSection } from '@/lib/scroll';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const handleNavClick = (e, href) => {
    if (!href.includes('#')) return;
    const hash = href.split('#')[1];
    if (pathname === '/' && hash) {
      e.preventDefault();
      scrollToSection(`#${hash}`);
      setOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }} animate={{ y: 0 }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'glass-dark py-3' : 'bg-transparent py-5'}`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/assets/logo/instagram-profile.jpg" alt={BRAND.name} width={48} height={48} className="rounded-full" />
            <span className="hidden md:block font-[family-name:var(--font-playfair)] text-ivory text-sm tracking-[0.2em]">{BRAND.name}</span>
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} onClick={(e) => handleNavClick(e, l.href)} className="text-ivory/80 hover:text-gold text-xs uppercase tracking-[0.2em] transition-colors">{l.label}</Link>
            ))}
            <a href={BRAND.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-gold !px-6 !py-3 !text-xs">Book Now</a>
          </div>
          <button onClick={() => setOpen(!open)} className="lg:hidden text-ivory" aria-label="Menu">{open ? <X /> : <Menu />}</button>
        </div>
      </motion.nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-elegant-black/95 lg:hidden flex flex-col items-center justify-center gap-8">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} onClick={(e) => { handleNavClick(e, l.href); setOpen(false); }} className="font-[family-name:var(--font-playfair)] text-3xl text-ivory">{l.label}</Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
