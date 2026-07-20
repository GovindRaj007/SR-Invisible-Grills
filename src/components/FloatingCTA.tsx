import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { BUSINESS } from "@/data/services";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href={`https://wa.me/${BUSINESS.whatsapp}?text=Hi,%20I'm%20interested%20in%20your%20safety%20solutions.`}
        data-track="whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-[#25D366] shadow-lg transition-all hover:scale-110 hover:shadow-xl"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="h-7 w-7 text-white" />
      </a>

      <a
        href={`tel:${BUSINESS.phone}`}
        data-track="call"
        className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-[#102B5E] to-[#163D7A] shadow-lg transition-all hover:scale-110 hover:shadow-xl"
        aria-label="Call Now"
      >
        <Phone className="h-6 w-6 text-white" />
      </a>
    </div>
  );
}
