import { motion } from 'framer-motion';
import { SERVICES } from '../data/services';
import { useGSAPReveal } from '../hooks/useGSAPReveal';

export default function Services() {
  const headerRef = useGSAPReveal();

  return (
    <section id="services" className="section-padding bg-elegant-black relative">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="text-center mb-16 md:mb-20">
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-poppins">
            What We Offer
          </span>
          <h2 className="luxury-heading text-ivory mt-4">
            Crafted With Passion
          </h2>
          <p className="mt-4 font-cormorant text-xl text-ivory/60 max-w-2xl mx-auto">
            Every service is designed to capture the essence of your celebration with cinematic precision.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="group relative overflow-hidden rounded-sm aspect-[3/4] cursor-pointer"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-elegant-black/90 via-elegant-black/40 to-transparent transition-opacity duration-500 group-hover:from-wine/90" />
                <div className="absolute inset-0 glass opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <Icon className="text-gold mb-3 transition-transform duration-500 group-hover:-translate-y-1" size={24} />
                  <h3 className="font-playfair text-lg text-ivory leading-tight">
                    {service.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
