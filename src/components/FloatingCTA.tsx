import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { BUSINESS } from "@/data/services";

export function FloatingCTA() {
  const [showWhatsApp, setShowWhatsApp] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowWhatsApp((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const href = showWhatsApp
    ? `https://wa.me/${BUSINESS.whatsapp}?text=Hi,%20I'm%20interested%20in%20your%20safety%20solutions.`
    : `tel:${BUSINESS.phone}`;

  const label = showWhatsApp ? "Chat on WhatsApp" : "Call Now";

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={href}
        data-track={showWhatsApp ? "whatsapp" : "call"}
        target={showWhatsApp ? "_blank" : undefined}
        rel={showWhatsApp ? "noopener noreferrer" : undefined}
        className="relative flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all hover:scale-110 hover:shadow-xl overflow-hidden"
        style={{
          background: showWhatsApp
            ? "#25D366"
            : "linear-gradient(135deg, #102B5E 0%, #163D7A 100%)",
        }}
        aria-label={label}
      >
        <div
          className="absolute inset-0 flex items-center justify-center transition-all duration-500"
          style={{
            opacity: showWhatsApp ? 1 : 0,
            transform: showWhatsApp ? "scale(1) rotate(0deg)" : "scale(0.5) rotate(-90deg)",
          }}
        >
          <WhatsAppIcon className="h-7 w-7 text-white" />
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center transition-all duration-500"
          style={{
            opacity: showWhatsApp ? 0 : 1,
            transform: showWhatsApp ? "scale(0.5) rotate(90deg)" : "scale(1) rotate(0deg)",
          }}
        >
          <Phone className="h-6 w-6 text-white" />
        </div>
      </a>
    </div>
  );
}
