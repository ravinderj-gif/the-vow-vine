import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle } from 'lucide-react';
import { useGSAPReveal } from '../hooks/useGSAPReveal';
import { BRAND } from '../utils/constants';

const EVENT_TYPES = [
  'Wedding',
  'Pre-Wedding',
  'Reception',
  'Haldi',
  'Destination Wedding',
  'Other',
];

const BUDGET_RANGES = [
  'Under ₹3,00,000',
  '₹3,00,000 – ₹5,00,000',
  '₹5,00,000 – ₹10,00,000',
  'Above ₹10,00,000',
];

const initialForm = {
  name: '',
  phone: '',
  email: '',
  date: '',
  eventType: '',
  venue: '',
  budget: '',
  message: '',
};

export default function Booking() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const headerRef = useGSAPReveal();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const buildWhatsAppMessage = () => {
    return encodeURIComponent(
      `*Wedding Enquiry - THE VOW VINE*\n\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Email: ${form.email}\n` +
      `Wedding Date: ${form.date}\n` +
      `Event Type: ${form.eventType}\n` +
      `Venue: ${form.venue}\n` +
      `Budget: ${form.budget}\n` +
      `Message: ${form.message}`
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.open(`${BRAND.whatsappUrl}?text=${buildWhatsAppMessage()}`, '_blank');
  };

  const inputClass =
    'w-full bg-ivory/5 border border-ivory/10 px-5 py-4 text-ivory placeholder:text-ivory/30 font-inter text-sm focus:outline-none focus:border-gold transition-colors';

  return (
    <section id="booking" className="section-padding bg-wine relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, #D4AF37 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <div ref={headerRef} className="text-center mb-12">
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-poppins">
            Begin Your Journey
          </span>
          <h2 className="luxury-heading text-ivory mt-4">
            Let&apos;s Create Your Forever Story
          </h2>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass-dark rounded-sm p-8 md:p-12 space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              name="name"
              placeholder="Bride / Groom Name *"
              required
              value={form.name}
              onChange={handleChange}
              className={inputClass}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              required
              value={form.phone}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              required
              value={form.email}
              onChange={handleChange}
              className={inputClass}
            />
            <input
              type="date"
              name="date"
              placeholder="Wedding Date"
              required
              value={form.date}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <select
              name="eventType"
              required
              value={form.eventType}
              onChange={handleChange}
              className={`${inputClass} appearance-none`}
            >
              <option value="" disabled>Event Type *</option>
              {EVENT_TYPES.map((t) => (
                <option key={t} value={t} className="bg-elegant-black">{t}</option>
              ))}
            </select>
            <input
              type="text"
              name="venue"
              placeholder="Venue Location *"
              required
              value={form.venue}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <select
            name="budget"
            required
            value={form.budget}
            onChange={handleChange}
            className={`${inputClass} appearance-none`}
          >
            <option value="" disabled>Budget Range *</option>
            {BUDGET_RANGES.map((b) => (
              <option key={b} value={b} className="bg-elegant-black">{b}</option>
            ))}
          </select>

          <textarea
            name="message"
            placeholder="Tell us about your dream wedding..."
            rows={4}
            value={form.message}
            onChange={handleChange}
            className={`${inputClass} resize-none`}
          />

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button type="submit" className="btn-gold flex-1 flex items-center justify-center gap-2">
              <Send size={16} />
              Submit Enquiry
            </button>
            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex-1 flex items-center justify-center gap-2"
            >
              <MessageCircle size={16} />
              WhatsApp Direct Booking
            </a>
          </div>

          {submitted && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gold text-sm text-center font-poppins"
            >
              Thank you! Redirecting to WhatsApp...
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
