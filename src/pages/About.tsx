import { Helmet } from 'react-helmet-async';
import { BUSINESS, serviceCategories } from '@/data/services';
import { Shield, ShieldCheck, Eye, Users, Award, Clock, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import CTASection from '@/components/CTASection';
import { useScrollRestoration } from '@/hooks/useScrollRestoration';

const values = [
  { icon: Shield, title: 'Safety First', description: 'Every product and installation is designed with one goal — keeping your family safe.' },
  { icon: Eye, title: 'Aesthetic Integrity', description: 'We believe safety solutions should enhance your space, not compromise its beauty.' },
  { icon: Award, title: 'Quality Materials', description: 'We use only SS 316 marine-grade steel, UV-treated HDPE, and certified-grade materials.' },
  { icon: Users, title: 'Customer Focus', description: 'From free site visits to post-install support, every interaction is built on trust.' },
  { icon: Clock, title: 'On-Time Delivery', description: 'We respect your time. Every project is completed on schedule without compromising quality.' },
  { icon: CheckCircle, title: 'Transparent Pricing', description: 'No hidden costs. You get a detailed quote before we begin — and that\'s exactly what you pay.' },
];

const stats = [
  { value: '500+', label: 'Installations Completed' },
  { value: '10 Year', label: 'Warranty on Grills' },
  { value: '4.9/5', label: 'Customer Rating' },
  { value: 'Same Day', label: 'Free Site Visit' },
];

export default function About() {
  useScrollRestoration();
  return (
    <>
      <Helmet>
        <title>About SR Invisible Grills & Safety Nets — Exterior Safety Solutions in Chennai</title>
        <meta name="description" content="Learn about SR Invisible Grills & Safety Nets, Chennai's trusted provider of invisible grills, safety nets, sports nets, and ceiling cloth drying hangers. 500+ installations. Warranty-based." />
        <meta name="keywords" content="about SR Invisible Grills & Safety Nets, invisible grills chennai, safety nets chennai, balcony safety nets, child safety nets, sports nets chennai, ceiling cloth hangers, Chennai safety solutions" />
        <link rel="canonical" href="https://srinvisiblegrillschennai.in/about" />
        <meta property="og:title" content="About SR Invisible Grills & Safety Nets — Exterior Safety Solutions in Chennai" />
        <meta property="og:description" content="Learn about SR Invisible Grills & Safety Nets, Chennai's trusted provider of invisible grills, safety nets, sports nets, and ceiling cloth drying hangers." />
        <meta property="og:url" content="https://srinvisiblegrillschennai.in/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About SR Invisible Grills & Safety Nets — Exterior Safety Solutions in Chennai" />
        <meta name="twitter:description" content="Warranty-backed exterior safety solutions for Chennai homes and businesses." />
      </Helmet>

      {/* Hero */}
      <section className="section-dark py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <span className="golden-label mb-4 block text-[#7DD3FC]">About Us</span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-secondary-foreground mb-6">
              Chennai's Trusted <span className="text-[#7DD3FC]">Safety Partner</span>
            </h1>
            <p className="text-secondary-foreground/70 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              SR Invisible Grills & Safety Nets is Chennai's leading provider of exterior safety solutions — from invisible grills and safety nets to sports nets and ceiling cloth drying hangers. We combine premium materials, expert craftsmanship, and transparent service to protect what matters most — your family.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="section-light py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-foreground text-center mb-6">
              Our Story
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founded with a mission to make Chennai homes safer, SR Invisible Grills & Safety Nets began as a small team of safety installation experts passionate about protecting families in high-rise apartments. Over the years, we've grown into a full-service exterior safety company serving hundreds of residential and commercial clients across Chennai.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Chennai's rapidly growing skyline — with its sea-facing condominiums, modern apartment complexes, and independent villas — demands safety solutions that don't compromise on aesthetics. That's exactly what we deliver. Whether it's invisible grills for your balcony, child-safe nets, pigeon deterrent mesh, or a ceiling-mounted drying system, every SR Invisible Grills & Safety Nets installation is built to last.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We serve all of Chennai — from Anna Nagar and T. Nagar to OMR, Velachery, Adyar, Tambaram, Porur, and Nungambakkam — with same-day site visits, transparent pricing, and industry-leading warranties.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="section-dark py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-heading text-3xl md:text-4xl font-extrabold text-[#7DD3FC] mb-1">{s.value}</div>
                  <p className="text-secondary-foreground/60 text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="section-surface py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-foreground text-center mb-10">
              Our Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {values.map((v) => (
                <div key={v.title} className="flex gap-3 p-4 bg-card rounded-lg shadow-sm border-l-4 border-[#7DD3FC]">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <v.icon className="w-5 h-5 text-[#7DD3FC]" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground text-sm mb-1">{v.title}</h3>
                    <p className="text-muted-foreground text-xs">{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="section-light py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-foreground text-center mb-10">
              What We Offer
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {serviceCategories.map((cat) => (
                <div key={cat.slug} className="bg-secondary rounded-lg p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#7DD3FC]/20 flex items-center justify-center mx-auto mb-3">
                    <ShieldCheck className="w-6 h-6 text-[#7DD3FC]" />
                  </div>
                  <h3 className="font-heading font-bold text-secondary-foreground text-sm mb-2">{cat.name}</h3>
                  <p className="text-secondary-foreground/60 text-xs">
                    {cat.subServices.length} service{cat.subServices.length > 1 ? 's' : ''}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="section-surface py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-foreground text-center mb-10">
              Get In Touch
            </h2>
            <div className="bg-card rounded-lg p-6 shadow-sm space-y-4">
              <a href={`tel:${BUSINESS.phone}`} className="flex items-center gap-3 text-foreground hover:text-[#7DD3FC] transition-colors">
                <Phone className="w-5 h-5 text-[#7DD3FC]" />
                <span className="text-sm">{BUSINESS.phone}</span>
              </a>
              <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-3 text-foreground hover:text-[#7DD3FC] transition-colors">
                <Mail className="w-5 h-5 text-[#7DD3FC]" />
                <span className="text-sm">{BUSINESS.email}</span>
              </a>
              <div className="flex items-center gap-3 text-foreground">
                <MapPin className="w-5 h-5 text-[#7DD3FC]" />
                <span className="text-sm">{BUSINESS.address}</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <Clock className="w-5 h-5 text-[#7DD3FC]" />
                <span className="text-sm">{BUSINESS.hours}</span>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
    </>
  );
}
