'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle } from 'lucide-react';
import { BRAND } from '@/lib/constants';

export default function BookingForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', date: '', eventType: '', venue: '', budget: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/inquiry', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      if (res.ok) {
        setStatus('success');
        const msg = encodeURIComponent(`*Wedding Enquiry - ${BRAND.name}*\nName: ${form.name}\nPhone: ${form.phone}\nDate: ${form.date}\nVenue: ${form.venue}`);
        window.open(`${BRAND.whatsappUrl}?text=${msg}`, '_blank');
      }
    } catch {
      setStatus('error');
    }
  };

  const cls = 'w-full bg-ivory/5 border border-ivory/10 px-5 py-4 text-ivory placeholder:text-ivory/30 text-sm focus:outline-none focus:border-gold';

  return (
    <form onSubmit={handleSubmit} className="glass-dark rounded-sm p-8 md:p-12 space-y-5 max-w-3xl mx-auto">
      <div className="grid md:grid-cols-2 gap-5">
        <input required placeholder="Bride / Groom Name *" className={cls} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input required type="tel" placeholder="Phone *" className={cls} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        <input required type="email" placeholder="Email *" className={cls} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input required type="date" className={cls} value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
        <input required placeholder="Event Type *" className={cls} value={form.eventType} onChange={(e) => setForm({ ...form, eventType: e.target.value })} />
        <input required placeholder="Venue *" className={cls} value={form.venue} onChange={(e) => setForm({ ...form, venue: e.target.value })} />
      </div>
      <input placeholder="Budget Range" className={cls} value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} />
      <textarea placeholder="Tell us about your dream wedding..." rows={4} className={`${cls} resize-none`} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
      <div className="flex flex-col sm:flex-row gap-4">
        <button type="submit" className="btn-gold flex-1 flex items-center justify-center gap-2"><Send size={16} />Submit Enquiry</button>
        <a href={BRAND.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-outline flex-1 flex items-center justify-center gap-2"><MessageCircle size={16} />WhatsApp Booking</a>
      </div>
      {status === 'success' && <p className="text-gold text-sm text-center">Enquiry sent! Redirecting to WhatsApp...</p>}
    </form>
  );
}
