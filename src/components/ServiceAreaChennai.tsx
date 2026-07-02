import { useState } from 'react';
import { BUSINESS } from '@/data/services';
import { Phone, Mail, MapPin, Clock, Map } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceAreaChennaiProps {
  className?: string;
}

export default function ServiceAreaChennai({ className }: ServiceAreaChennaiProps) {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <section className={cn("section-dark py-16 md:py-24", className)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-secondary-foreground">
            Serving All of <span className="text-[#7DD3FC]">Chennai</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden relative" style={{ minHeight: '400px' }}>
            {/* Map loading placeholder */}
            {!mapLoaded && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 rounded-lg bg-[#EEF3FA]">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <Map className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm font-medium text-[#5B6475]">Loading Map...</p>
                <div className="h-1 w-32 overflow-hidden rounded-full bg-[#D9E1EC]">
                  <div className="h-full bg-primary rounded-full animate-pulse" style={{ width: '60%' }} />
                </div>
              </div>
            )}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497511.55843576!2d79.87893!3d13.04996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SR Invisible Grills & Safety Nets Chennai Service Area"
              onLoad={() => setMapLoaded(true)}
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}
