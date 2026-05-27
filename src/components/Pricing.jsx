import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { pricingImage } from '../data/images';
import { useGSAPReveal } from '../hooks/useGSAPReveal';
import { BRAND } from '../utils/constants';

const SERVICES_INCLUDED = [
  'Candid Photographer',
  'Cinematographer',
  'Traditional Photographer',
  'Traditional Videographer',
];

const DELIVERABLES = [
  'Cinematic Wedding Film',
  'Master Video',
  'Professionally Color Graded Photos',
  'Online Gallery (1 Year Validity)',
  'Cinematic Reels',
  'Same Day 20 Edited Photos',
];

export default function Pricing() {
  const headerRef = useGSAPReveal();

  return (
    <section id="pricing" className="section-padding bg-ivory">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="text-center mb-16">
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-poppins">
            Investment
          </span>
          <h2 className="luxury-heading text-elegant-black mt-4">
            Luxury Packages
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 overflow-hidden rounded-sm shadow-2xl max-w-5xl mx-auto"
        >
          <div className="relative min-h-[400px]">
            <img
              src={pricingImage}
              alt="Luxury wedding photography"
              loading="lazy"
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-maroon/20 lg:hidden" />
          </div>

          <div className="bg-maroon p-8 md:p-12 lg:p-14 text-ivory relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />

            <p className="text-xs uppercase tracking-[0.3em] text-gold font-poppins">
              Featured Package
            </p>
            <h3 className="font-playfair text-3xl md:text-4xl mt-3">
              Luxury Wedding Experience
            </h3>

            <div className="mt-8 mb-10">
              <p className="text-xs uppercase tracking-[0.2em] text-ivory/60 font-poppins">
                Package Starts From
              </p>
              <p className="font-playfair text-5xl md:text-6xl text-ivory mt-2">
                ₹3,00,000
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-gold font-poppins mb-4">
                  Services
                </h4>
                <ul className="space-y-3">
                  {SERVICES_INCLUDED.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm font-inter text-ivory/80">
                      <Check size={16} className="text-gold mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-gold font-poppins mb-4">
                  Deliverables
                </h4>
                <ul className="space-y-3">
                  {DELIVERABLES.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm font-inter text-ivory/80">
                      <Check size={16} className="text-gold mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href={BRAND.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-gold text-center">
                Book Your Date
              </a>
              <a href="#booking" className="btn-outline text-center !text-ivory">
                Enquire Now
              </a>
            </div>

            <p className="mt-6 text-xs text-ivory/40 font-inter">
              Now taking bookings for 2026–27 weddings. Limited slots available.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
