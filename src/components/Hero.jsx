import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';
import gsap from 'gsap';
import heroVideo from '../assets/videos/hero-teaser.mp4';
import { BRAND } from '../utils/constants';
import { scrollToSection } from '../hooks/useSmoothScroll';

function Particles() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 5,
    duration: Math.random() * 4 + 4,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle absolute rounded-full bg-gold/30"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const videoRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      gsap.fromTo(
        videoRef.current,
        { scale: 1 },
        { scale: 1.15, duration: 20, ease: 'none', repeat: -1, yoyo: true }
      );
    }
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[700px] overflow-hidden">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
          poster=""
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="cinematic-overlay absolute inset-0" />
        <Particles />
      </div>

      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-5"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-gold text-xs md:text-sm uppercase tracking-[0.4em] font-poppins mb-6"
        >
          {BRAND.services}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="luxury-heading text-ivory max-w-5xl shimmer-text"
        >
          {BRAND.tagline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mt-6 md:mt-8 max-w-2xl text-ivory/70 font-cormorant text-lg md:text-xl lg:text-2xl font-light leading-relaxed"
        >
          Luxury Wedding Photography &amp; Cinematic Storytelling That Preserves Every Emotion Forever.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <button onClick={() => scrollToSection('#portfolio')} className="btn-primary">
            Explore Portfolio
          </button>
          <button onClick={() => scrollToSection('#booking')} className="btn-outline">
            Book Your Wedding
          </button>
          <a
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold flex items-center gap-2"
          >
            <MessageCircle size={16} />
            WhatsApp Enquiry
          </a>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ivory/50 hover:text-gold transition-colors z-10"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} className="animate-bounce" />
      </motion.button>
    </section>
  );
}
