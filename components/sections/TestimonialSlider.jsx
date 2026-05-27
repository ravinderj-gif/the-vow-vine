'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { Quote } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function TestimonialSlider({ testimonials = [] }) {
  return (
    <Swiper modules={[Autoplay, Pagination, EffectFade]} effect="fade" autoplay={{ delay: 5000 }} pagination={{ clickable: true }} loop className="pb-12">
      {testimonials.map((t) => (
        <SwiperSlide key={t.id}>
          <div className="glass-dark rounded-sm p-8 md:p-12 text-center">
            <Quote className="text-gold mx-auto mb-6" size={32} />
            <p className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl text-ivory italic leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
            <p className="mt-6 font-[family-name:var(--font-playfair)] text-ivory text-lg">{t.name}</p>
            <p className="text-ivory/50 text-sm">{t.location}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
