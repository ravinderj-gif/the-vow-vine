import BookingForm from '@/components/sections/BookingForm';
import { BRAND } from '@/lib/constants';

export const metadata = { title: `Book Your Wedding | ${BRAND.name}` };

export default function BookingPage() {
  return (
    <div className="pt-24 section-padding bg-wine min-h-screen">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <span className="text-gold text-xs uppercase tracking-[0.3em]">Begin Your Journey</span>
        <h1 className="luxury-heading text-ivory mt-4">Let&apos;s Create Your Forever Story</h1>
      </div>
      <BookingForm />
    </div>
  );
}
