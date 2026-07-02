import { BUSINESS } from '@/data/services';
import { Phone, MessageCircle, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MobileContactBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-secondary border-t border-primary/20 flex">
      <a
        href={`tel:${BUSINESS.phone}`}
        className="flex-1 flex flex-col items-center justify-center py-2.5 text-primary text-xs font-semibold gap-1"
      >
        <Phone className="w-4 h-4" /> Call
      </a>
      <a
        href={`https://wa.me/${BUSINESS.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-2.5 text-primary text-xs font-semibold gap-1 border-x border-primary/10"
      >
        <MessageCircle className="w-4 h-4" /> WhatsApp
      </a>
      <Link
        to="/contact"
        className="flex-1 flex flex-col items-center justify-center py-2.5 text-primary text-xs font-semibold gap-1"
      >
        <FileText className="w-4 h-4" /> Get Quote
      </Link>
    </div>
  );
}
