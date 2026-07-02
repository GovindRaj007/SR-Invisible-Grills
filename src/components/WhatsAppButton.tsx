import { BUSINESS } from '@/data/services';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${BUSINESS.whatsapp}?text=Hi%20SR%20Invisible%20Grills%20%26%20Safety%20Nets,%20I'd%20like%20to%20know%20more%20about%20your%20services.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 md:bottom-6 right-4 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-transform hover:scale-110"
      style={{ background: 'linear-gradient(135deg, #102B5E 0%, #163D7A 100%)', boxShadow: '0 10px 30px rgba(16, 43, 94, 0.2)' }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-white" />
    </a>
  );
}
