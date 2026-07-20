import { Link, Navigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Building2, Factory, Home, MapPin, ShieldCheck, Sparkles, Sun, Trees, Wrench, Wind, Eye, BadgeCheck, Phone } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';
import { heroImages } from '@/data/images';
import { BUSINESS } from '@/data/services';
import { getLocationPageContent, locationAreaLinks } from '@/data/locationContent';

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  Eye,
  Wind,
  Wrench,
  Building2,
  Factory,
  Home,
  BadgeCheck,
  Trees,
  Sparkles,
  Sun,
  Shield: ShieldCheck,
};

const locationSectionSpacing = 'py-12 md:py-16';
const otherAreaLinks = [
  ...locationAreaLinks.map((item) => ({ ...item, to: `/invisible-grills-${item.slug}` })),
  { slug: 'chennai', name: 'All of Chennai', to: '/invisible-grills-chennai' },
];

export default function LocationPage() {
  const { pathname } = useLocation();
  const normalizedSlug = pathname === '/invisible-grills-chennai'
    ? 'chennai'
    : pathname.replace('/invisible-grills-', '');
  const content = getLocationPageContent(normalizedSlug);

  if (!content) {
    return <Navigate to="/" replace />;
  }

  const path = content.slug === 'chennai' ? '/invisible-grills-chennai' : `/invisible-grills-${content.slug}`;
  const title = `${content.heroTitle} | SR Invisible Grills & Safety Nets`;
  const description = `${content.intro} We install invisible grills, safety nets, ceiling cloth hangers and sports nets across ${content.name}, Chennai with premium materials and warranty-backed workmanship.`;
  const canonicalPath = path;
  const heroImage = heroImages['invisible-grills'];

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={content.keywords} />
        <link rel="canonical" href={`https://srinvisiblegrillschennai.in${canonicalPath}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`https://srinvisiblegrillschennai.in${canonicalPath}`} />
        <meta name="robots" content="index,follow" />
      </Helmet>

      <div>
        <section className="relative h-[61vh] md:h-[60vh] overflow-hidden">
          <img
            src={heroImage}
            alt={`${content.name} safety solutions`}
            className="absolute inset-0 h-full w-full object-cover"
            width={1920}
            height={1080}
            loading="eager"
            decoding="async"
            fetchpriority="high"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(20,35,61,0.92) 35%, rgba(16,43,94,0.22) 100%)' }} />
          <div className="relative z-10 flex h-full flex-col justify-end container mx-auto px-4 pb-10 pt-20 md:pb-12 md:pt-24">
            <Breadcrumb items={[{ label: content.name }]} />
            <h1 className="mt-3 font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary-foreground">
              {content.heroTitle}
            </h1>
            <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">
              {content.intro}
            </p>
          </div>
        </section>

        <section className={`section-light ${locationSectionSpacing}`}>
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="rounded-2xl border border-[#0F3D8A]/20 bg-white p-8 shadow-sm">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {content.overview}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={`tel:${BUSINESS.phone}`} className="inline-flex items-center gap-2 rounded-full bg-[#0F3D8A] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0F3D8A]/90">
                  <Phone className="h-4 w-4" /> Call Now
                </a>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-[#0F3D8A]/30 px-4 py-2 text-sm font-semibold text-[#0F3D8A] transition hover:bg-[#0F3D8A]/5">
                  Request Free Site Visit <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className={`section-surface ${locationSectionSpacing}`}>
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <span className="mb-3 inline-block rounded-full bg-[#7DD3FC]/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#0F3D8A]">
                Why SR Invisible Grills & Safety Nets
              </span>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-foreground">
                Premium safety for {content.name}
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {content.whyChoose.map((item) => {
                const Icon = iconMap[item.icon] || ShieldCheck;
                return (
                  <div key={item.title} className="rounded-xl border border-[#0F3D8A]/15 bg-white p-5 shadow-sm">
                    <Icon className="mb-3 h-6 w-6 text-[#0F3D8A]" />
                    <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className={`section-dark ${locationSectionSpacing}`}>
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <span className="mb-3 inline-block rounded-full bg-[#7DD3FC]/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#7DD3FC]">
                Services in {content.name}
              </span>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-secondary-foreground">
                Tailored solutions for homes, businesses and industrial spaces
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {content.serviceCards.map((service) => (
                <Link key={service.title} to={service.href} className="rounded-2xl border border-white/10 bg-[#14233D] p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-[#7DD3FC]/40">
                  <h3 className="mb-2 font-heading text-lg font-semibold text-white">{service.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-white/70">{service.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#7DD3FC]">
                    Explore <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={`section-light ${locationSectionSpacing}`}>
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <span className="mb-3 inline-block rounded-full bg-[#7DD3FC]/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#0F3D8A]">
                Installation process
              </span>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-foreground">
                Simple, clean and dependable
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {content.steps.map((step) => (
                <div key={step.n} className="rounded-2xl border border-[#0F3D8A]/15 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#7DD3FC] font-heading text-sm font-bold text-[#0F172A]">
                    {step.n}
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={`section-surface ${locationSectionSpacing}`}>
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <span className="mb-3 inline-block rounded-full bg-[#7DD3FC]/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#0F3D8A]">
                Areas we serve
              </span>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-foreground">
                Other Chennai service areas
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {otherAreaLinks.filter((item) => item.slug !== content.slug || item.slug === 'chennai').map((item) => (
                <Link key={item.slug} to={item.to} className="rounded-xl border border-[#0F3D8A]/15 bg-white p-4 text-sm font-semibold text-[#0F3D8A] shadow-sm transition hover:border-[#7DD3FC]/40 hover:bg-[#F8FBFF]">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" /> {item.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <FAQAccordion faqs={content.faqs} className={locationSectionSpacing} />
        <CTASection categorySlug="invisible-grills" className={locationSectionSpacing} />
      </div>
    </>
  );
}
