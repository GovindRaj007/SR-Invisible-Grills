import { BUSINESS } from '@/data/services';
import { Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CTASectionProps {
  categorySlug?: string;
  className?: string;
}

export default function CTASection({ categorySlug, className }: CTASectionProps) {
  const isSportsCategory = categorySlug === 'sports-nets';
  const isCeilingHangers = categorySlug === 'ceiling-hangers';
  
  const getHeading = () => {
    if (isSportsCategory) {
      return "Ready to Set Up Your Practice Arena?";
    }
    if (isCeilingHangers) {
      return "Ready to Save Your Drying Space?";
    }
    return "Ready to Secure Your Home?";
  };

  return (
    <section className={cn("py-16 md:py-20", className)} style={{ background: 'linear-gradient(135deg, #14233D 0%, #102B5E 100%)' }}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-2xl md:text-4xl font-extrabold text-white mb-4">
          {getHeading()}
        </h2>
        <p className="mb-8 max-w-lg mx-auto text-base text-white/80">
          Get a free site visit and custom quote — no obligations, no hidden charges.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href={`tel:${BUSINESS.phone}`} className="btn-charcoal flex items-center gap-2">
            <Phone className="w-4 h-4" /> Call Now
          </a>
          <a
            href={`https://wa.me/${BUSINESS.whatsapp}?text=Hi%20SR%20Invisible%20Grills%20%26%20Safety%20Nets,%20I'm%20interested%20in%20your%20services.`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/30 bg-white/10 px-6 py-3 font-heading font-bold text-white transition-all hover:bg-white/20"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
