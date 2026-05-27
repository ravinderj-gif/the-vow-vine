import { motion } from 'framer-motion';
import { useGSAPReveal, useParallax } from '../hooks/useGSAPReveal';
import { useCounter } from '../hooks/useCounter';
import { COUNTERS } from '../utils/constants';
import { indianCouple } from '../data/images';

function CounterItem({ value, suffix, label }) {
  const { count, ref } = useCounter(value, 2500);

  return (
    <div ref={ref} className="text-center">
      <p className="font-playfair text-4xl md:text-5xl lg:text-6xl text-wine">
        {count}{suffix}
      </p>
      <p className="mt-2 text-sm uppercase tracking-[0.2em] text-elegant-black/60 font-poppins">
        {label}
      </p>
    </div>
  );
}

export default function About() {
  const textRef = useGSAPReveal();
  const imageRef = useParallax(0.15);

  return (
    <section id="about" className="section-padding bg-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div ref={textRef}>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gold text-xs uppercase tracking-[0.3em] font-poppins"
            >
              Our Story
            </motion.span>
            <h2 className="luxury-heading text-elegant-black mt-4">
              Every Wedding Has A Soul.
            </h2>
            <p className="mt-6 font-cormorant text-xl md:text-2xl text-elegant-black/70 leading-relaxed">
              At THE VOW VINE, weddings are transformed into timeless cinematic stories through
              emotional photography, artistic direction, and unforgettable storytelling.
            </p>
            <p className="mt-4 font-inter text-base text-elegant-black/50 leading-relaxed">
              From intimate ceremonies to grand destination celebrations across South India,
              we craft visual narratives that transcend time — preserving every glance, every tear,
              and every joyous celebration for generations to come.
            </p>
          </div>

          <div className="relative">
            <div ref={imageRef} className="relative overflow-hidden rounded-sm">
              <img
                src={indianCouple}
                alt="Luxury Indian wedding couple"
                loading="lazy"
                className="w-full h-[400px] md:h-[500px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wine/30 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-gold/30 hidden md:block" />
            <div className="absolute -top-6 -right-6 w-32 h-32 border border-gold/30 hidden md:block" />
          </div>
        </div>

        <div className="mt-20 md:mt-28 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {COUNTERS.map((counter) => (
            <CounterItem key={counter.label} {...counter} />
          ))}
        </div>
      </div>
    </section>
  );
}
