import TestimonialSlider from '@/components/sections/TestimonialSlider';
import { getInstagramPosts, getTestimonialsFromCaptions } from '@/lib/instagram';
import { BRAND } from '@/lib/constants';

export const metadata = { title: `Testimonials | ${BRAND.name}` };

export default async function TestimonialsPage() {
  const posts = await getInstagramPosts();
  const testimonials = getTestimonialsFromCaptions(posts);

  return (
    <div className="pt-24 section-padding relative min-h-screen">
      <img src="/assets/images/instagram/post-06-02.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden />
      <div className="absolute inset-0 bg-elegant-black/85" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-gold text-xs uppercase tracking-[0.3em]">Love Notes</span>
          <h1 className="luxury-heading text-ivory mt-4">Client Stories</h1>
        </div>
        <TestimonialSlider testimonials={testimonials} />
      </div>
    </div>
  );
}
