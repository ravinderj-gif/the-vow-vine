import { BRAND } from '@/lib/constants';
import { Phone, Mail, MapPin } from 'lucide-react';

export const metadata = { title: `Contact | ${BRAND.name}` };

export default function ContactPage() {
  const items = [
    { icon: Phone, label: 'Phone', value: BRAND.phoneFormatted, href: `tel:+91${BRAND.phone}` },
    { icon: Mail, label: 'Email', value: BRAND.email, href: `mailto:${BRAND.email}` },
    { icon: MapPin, label: 'Location', value: 'Hyderabad, India' },
  ];

  return (
    <div className="pt-24 section-padding relative min-h-screen">
      <img src="/assets/images/instagram/post-11-05.jpg" alt="" className="absolute inset-0 w-full h-full object-cover blur-sm scale-110" aria-hidden />
      <div className="absolute inset-0 bg-elegant-black/80" />
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <span className="text-gold text-xs uppercase tracking-[0.3em]">Get In Touch</span>
        <h1 className="luxury-heading text-ivory mt-4">Contact Us</h1>
        <div className="grid sm:grid-cols-3 gap-6 mt-16">
          {items.map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="glass-dark p-8 rounded-sm">
              <Icon className="text-gold mx-auto mb-4" size={28} />
              <p className="text-xs uppercase tracking-[0.2em] text-ivory/40 mb-2">{label}</p>
              {href ? <a href={href} className="font-[family-name:var(--font-cormorant)] text-lg text-ivory hover:text-gold">{value}</a> : <p className="font-[family-name:var(--font-cormorant)] text-lg text-ivory">{value}</p>}
            </div>
          ))}
        </div>
        <a href={BRAND.instagramUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-12 inline-flex">{BRAND.instagram}</a>
      </div>
    </div>
  );
}
