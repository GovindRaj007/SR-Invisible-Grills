import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { serviceCategories, BUSINESS } from '@/data/services';
import { locationPages } from '@/data/locationContent';
import { Menu, X, Phone, ChevronDown, ChevronRight } from 'lucide-react';
import brandLogo from '@/assets/brand-logo.jpg';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';

const serviceAreaLinks = locationPages.map((item) => ({
  label: item.name,
  to: item.slug === 'chennai' ? '/invisible-grills-chennai' : `/invisible-grills-${item.slug}`,
}));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [serviceAreasOpen, setServiceAreasOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const location = useLocation();
  const megaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
    setServiceAreasOpen(false);
    setServicesOpen(false);
    setExpandedCategory(null);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled ? 'bg-card/95 backdrop-blur-md shadow-lg' : 'bg-card/95 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            onClick={() => window.scrollTo(0, 0)}
            className="flex items-center gap-2 relative z-[120] bg-transparent"
          >
            <img 
              src={brandLogo} 
              alt="SR Invisible Grills & Safety Nets Logo" 
              className="h-[4rem] w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-foreground hover:text-primary text-sm lg:text-base font-medium transition-colors">
              Home
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
              ref={megaRef}
            >
              <button className="flex items-center gap-1 text-foreground hover:text-primary text-sm lg:text-base font-medium transition-colors">
                Services <ChevronDown className="w-3 h-3" />
              </button>
              {megaOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[700px]">
                  <div className="grid grid-cols-4 gap-6 rounded-lg border border-[#E5E9F0] bg-white p-6 shadow-xl">
                    {serviceCategories.map((cat) => (
                      <div key={cat.slug}>
                        <h4 className="text-primary font-heading font-bold text-sm mb-3">{cat.name}</h4>
                        <ul className="space-y-2">
                          {cat.subServices.map((sub) => (
                            <li key={sub.slug}>
                              <Link
                                to={`/services/${cat.slug}/${sub.slug}`}
                                onClick={() => window.scrollTo(0, 0)}
                                className="text-xs text-[#5B6475] transition-colors hover:text-[#102B5E]"
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div
              className="relative"
              onMouseEnter={() => setServiceAreasOpen(true)}
              onMouseLeave={() => setServiceAreasOpen(false)}
            >
              <button className="flex items-center gap-1 text-foreground hover:text-primary text-sm lg:text-base font-medium transition-colors">
                Service Areas <ChevronDown className="w-3 h-3" />
              </button>
              {serviceAreasOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[320px]">
                  <div className="grid grid-cols-2 gap-2 rounded-lg border border-[#E5E9F0] bg-white p-4 shadow-xl">
                    {serviceAreaLinks.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={() => window.scrollTo(0, 0)}
                        className="rounded-md px-3 py-2 text-sm text-[#5B6475] transition-colors hover:bg-[#F4F8FD] hover:text-[#102B5E]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link to="/about" onClick={() => window.scrollTo(0, 0)} className="text-foreground hover:text-primary text-sm lg:text-base font-medium transition-colors">
              About
            </Link>
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="text-foreground hover:text-primary text-sm lg:text-base font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="hidden lg:block btn-golden text-sm py-2 px-5">
            Get Free Quote
          </Link>

          {/* Mobile Menu Trigger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <button 
                className="text-primary relative z-[120]"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80 p-0 flex flex-col bg-background pt-12">
              {/* Accessibility - Hidden but available for screen readers */}
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <SheetDescription className="sr-only">Browse services and pages</SheetDescription>
              
              {/* Navigation Items */}
              <div className="flex-1 overflow-y-auto px-6 scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {/* Home */}
                <Link 
                  to="/" 
                  onClick={() => {
                    setMobileOpen(false);
                    window.scrollTo(0, 0);
                  }}
                  className="block py-4 pt-[2rem] text-foreground font-medium hover:text-primary transition-colors"
                >
                  Home
                </Link>

                {/* Services */}
                <div>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="w-full py-4 flex items-center justify-between text-foreground font-medium hover:text-primary transition-colors"
                  >
                    <span>Services</span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {servicesOpen && (
                    <div>
                      {serviceCategories.map((category) => (
                        <div key={category.slug}>
                          {/* Category Button */}
                          <button
                            onClick={() => {
                              // Close current category if same one is clicked, otherwise open the new one
                              if (expandedCategory === category.slug) {
                                setExpandedCategory(null);
                              } else {
                                setExpandedCategory(category.slug);
                              }
                            }}
                            className={`w-full px-2 py-3 flex items-center justify-between text-sm transition-colors ${
                              expandedCategory === category.slug
                                ? 'font-semibold text-primary'
                                : 'text-[#1B2740] hover:text-primary'
                            }`}
                          >
                            <span>{category.name}</span>
                            <ChevronRight className={`w-4 h-4 transition-transform ${expandedCategory === category.slug ? 'rotate-90' : ''}`} />
                          </button>

                          {/* Sub-services */}
                          {expandedCategory === category.slug && (
                            <div>
                              {category.subServices.map((subService) => (
                                <Link
                                  key={subService.slug}
                                  to={`/services/${category.slug}/${subService.slug}`}
                                  onClick={() => {
                                    setMobileOpen(false);
                                    window.scrollTo(0, 0);
                                  }}
                                  className="block px-6 py-2.5 text-xs font-medium text-[#102B5E] transition-colors hover:text-[#163D7A]"
                                >
                                  {subService.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Service Areas */}
                <div>
                  <button
                    onClick={() => setServiceAreasOpen(!serviceAreasOpen)}
                    className="w-full py-4 flex items-center justify-between text-foreground font-medium hover:text-primary transition-colors"
                  >
                    <span>Service Areas</span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${serviceAreasOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {serviceAreasOpen && (
                    <div className="px-2 pb-2">
                      {serviceAreaLinks.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          onClick={() => {
                            setMobileOpen(false);
                            window.scrollTo(0, 0);
                          }}
                          className="block px-4 py-2.5 text-sm font-medium text-[#102B5E] transition-colors hover:text-[#163D7A]"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* About */}
                <Link 
                  to="/about" 
                  onClick={() => {
                    setMobileOpen(false);
                    window.scrollTo(0, 0);
                  }}
                  className="block py-4 text-foreground font-medium hover:text-primary transition-colors"
                >
                  About
                </Link>

                {/* Contact */}
                <Link 
                  to="/contact" 
                  onClick={() => {
                    setMobileOpen(false);
                    window.scrollTo(0, 0);
                  }}
                  className="block py-4 text-foreground font-medium hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </div>

              {/* CTA Buttons - Fixed at bottom */}
              <div className="bg-background p-6 space-y-2 w-full">
                <a 
                  href={`tel:${BUSINESS.phone}`} 
                  className="btn-golden w-full block text-center text-sm font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all hover:shadow-lg"
                >
                  <Phone className="w-4 h-4" />
                  Call
                </a>
                <a
                  href={`https://wa.me/${BUSINESS.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-charcoal w-full block text-center text-sm font-semibold py-3 rounded-lg transition-all hover:shadow-lg"
                >
                  WhatsApp
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}
