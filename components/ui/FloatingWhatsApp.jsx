'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { BRAND } from '@/lib/constants';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={BRAND.whatsappUrl} target="_blank" rel="noopener noreferrer"
      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg"
      aria-label="WhatsApp"
    >
      <MessageCircle size={28} className="text-white" fill="white" />
    </motion.a>
  );
}
