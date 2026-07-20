import type { ReactNode } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { serviceCategories, BUSINESS } from "@/data/services";
import { locationPages } from "@/data/locationContent";
import { ChevronDown, Clock, Mail, MapPin, Phone } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import brandLogo from "@/assets/brand-logo.jpg";

const serviceAreaLinks = locationPages.map((item) => ({
  label: item.name,
  to: item.slug === 'chennai' ? '/invisible-grills-chennai' : `/invisible-grills-${item.slug}`,
}));

const accentColor = "#7DD3FC";

const quickLinks = [
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
  { label: "Privacy Policy", to: "/privacy-policy" },
];

function FooterLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      onClick={() => window.scrollTo(0, 0)}
      className="group flex items-start gap-2 text-sm text-white/70 transition-colors hover:text-[#7DD3FC]"
    >
      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#7DD3FC] shadow-[0_0_0_3px_rgba(125,211,252,0.18)] transition-shadow group-hover:shadow-[0_0_0_4px_rgba(125,211,252,0.28)]" />
      <span>{children}</span>
    </Link>
  );
}

export default function Footer() {
  const [quickLinksOpen, setQuickLinksOpen] = useState(false);

  return (
    <footer className="section-dark py-[24px]">
      <div className="container mx-auto px-4">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div>
            <Link
              to="/" 
              onClick={() => window.scrollTo(0, 0)}
              className="mb-4 inline-flex items-center gap-2"
            >
              <div className="flex items-center justify-center rounded-md bg-white py-3 shadow-md">
                <img
                  src={brandLogo}
                  alt="SR Invisible Grills & Safety Nets Logo"
                  className="h-14 w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                  fetchpriority="low"
                />
              </div>
            </Link>
            <p className="mb-4 text-sm text-white/70">
              Chennai's trusted provider of invisible grills, safety nets,
              sports nets, and ceiling cloth drying hangers - trusted by 500+ homes and businesses.
            </p>
            <div className="flex flex-col gap-2 text-sm text-white/80">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-[#7DD3FC]" /> {BUSINESS.phone}
              </a>
              <a
                href={`tel:${BUSINESS.secondaryPhone}`}
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-[#7DD3FC]" /> {BUSINESS.secondaryPhone}
              </a>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-[#7DD3FC]" /> {BUSINESS.email}
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#7DD3FC]" /> {BUSINESS.address}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#7DD3FC]" /> {BUSINESS.hours}
              </span>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="mb-4 font-heading text-sm font-bold text-white">
              Services
            </h4>
            <div className="grid gap-6 sm:grid-cols-2">
              {serviceCategories.map((cat) => (
                <div key={cat.slug}>
                  <h5
                    className="mb-3 font-heading text-sm font-bold"
                    style={{ color: accentColor }}
                  >
                    {cat.name}
                  </h5>
                  <ul className="space-y-2">
                    {cat.subServices.map((sub) => (
                      <li key={sub.slug}>
                        <FooterLink to={`/services/${cat.slug}/${sub.slug}`}>
                          {sub.name}
                        </FooterLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-bold text-white">
              Service Areas
            </h4>
            <ul className="space-y-2">
              {serviceAreaLinks.map((item) => (
                <li key={item.to}>
                  <FooterLink to={item.to}>
                    {item.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <Collapsible
            open={quickLinksOpen}
            onOpenChange={setQuickLinksOpen}
            className="rounded-lg border border-white/10 bg-white/[0.04] p-4 shadow-sm lg:self-start lg:max-h-[34rem] lg:overflow-auto"
          >
            <CollapsibleTrigger className="flex w-full items-center justify-between gap-3 text-left">
              <span className="font-heading text-sm font-bold text-white">Quick Links</span>
              <ChevronDown
                className={`h-4 w-4 text-[#7DD3FC] transition-transform ${
                  quickLinksOpen ? "rotate-180" : ""
                }`}
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-4">
              <ul className="space-y-2">
                {quickLinks.map((item) => (
                  <li key={item.to}>
                    <FooterLink to={item.to}>{item.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </CollapsibleContent>
          </Collapsible>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} SR Invisible Grills & Safety Nets — Exterior Safety Solutions.
            All rights reserved.
          </p>
          <p className="mt-3 inline-block rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-[#1B2740]">
            Made with ❤️ in Hyderabad
          </p>
        </div>
      </div>
    </footer>
  );
}
