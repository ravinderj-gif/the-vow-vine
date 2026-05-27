import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials';
import { useGSAPReveal } from '../hooks/useGSAPReveal';
import pricingRef from '../assets/images/pricing-reference.jpg';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function Testimonials() {
  const headerRef = useGSAPReveal();

  return (
    <section id="testimonials" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={pricingRef}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-elegant-black/85 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div ref={headerRef} className="text-center mb-12">
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-poppins">
            Love Notes
          </span>
          <h2 className="luxury-heading text-ivory mt-4">
            Client Stories
          </h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          className="pb-12"
        >
          {TESTIMONIALS.map((item) => (
            <SwiperSlide key={item.id}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="glass-dark rounded-sm p-8 md:p-12 text-center"
              >
                <Quote className="text-gold mx-auto mb-6" size={32} />
                <p className="font-cormorant text-2xl md:text-3xl text-ivory leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-8 flex items-center justify-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-14 h-14 rounded-full object-cover border-2 border-gold/30"
                  />
                  <div className="text-left">
                    <p className="font-playfair text-ivory text-lg">{item.name}</p>
                    <p className="text-ivory/50 text-sm font-poppins">{item.location}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
