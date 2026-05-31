'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import InstagramIcon from '@/components/ui/InstagramIcon';
import { useGSAPReveal } from '@/hooks/useGSAPReveal';
import { BRAND } from '@/lib/constants';
import { ASSETS } from '@/lib/assets';

export default function Contact() {
  const headerRef = useGSAPReveal();

  const contactItems = [
    { icon: Phone, label: 'Phone', value: BRAND.phoneFormatted, href: `tel:+91${BRAND.phone}` },
    { icon: Mail, label: 'Email', value: BRAND.email, href: `mailto:${BRAND.email}` },
    { icon: InstagramIcon, label: 'Instagram', value: BRAND.instagram, href: BRAND.instagramUrl },
    { icon: MapPin, label: 'Location', value: 'Hyderabad, India', href: null },
  ];

  return (
    <section id="contact" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0">
        <img src={ASSETS.contactBg} alt="" loading="lazy" className="w-full h-full object-cover blur-sm scale-110" aria-hidden="true" />
        <div className="absolute inset-0 bg-elegant-black/80" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto">
        <div ref={headerRef} className="text-center mb-16">
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-[family-name:var(--font-poppins)]">Get In Touch</span>
          <h2 className="luxury-heading text-ivory mt-4">Contact Us</h2>
          <p className="mt-4 font-[family-name:var(--font-cormorant)] text-xl text-ivory/60">We&apos;d love to hear about your special day</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactItems.map((item, i) => {
            const Icon = item.icon;
            const content = (
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-dark rounded-sm p-8 text-center hover:border-gold/30 transition-colors duration-500 group">
                <Icon className="text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" size={28} />
                <p className="text-xs uppercase tracking-[0.2em] text-ivory/40 font-[family-name:var(--font-poppins)] mb-2">{item.label}</p>
                <p className="font-[family-name:var(--font-cormorant)] text-lg text-ivory">{item.value}</p>
              </motion.div>
            );
            return item.href ? (
              <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{content}</a>
            ) : (
              <div key={item.label}>{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
