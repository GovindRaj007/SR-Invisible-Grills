import { useParams } from 'react-router-dom';
import { useScrollRestoration } from '@/hooks/useScrollRestoration';
import { Helmet } from 'react-helmet-async';
import { getServiceBySlug } from '@/data/services';
import { serviceImages, serviceCardImages } from '@/data/images';
import Breadcrumb from '@/components/Breadcrumb';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';
import ServicePageSlider from '@/components/ServicePageSlider';
import ProgressiveImage from '@/components/ProgressiveImage';
import * as LucideIcons from 'lucide-react';
import NotFound from './NotFound';

export default function ServicePage() {
  useScrollRestoration();
  const { categorySlug, serviceSlug } = useParams<{ categorySlug: string; serviceSlug: string }>();
  const result = categorySlug && serviceSlug ? getServiceBySlug(categorySlug, serviceSlug) : null;

  if (!result) return <NotFound />;

  const { category, service } = result;
  const images = serviceImages[`${categorySlug}/${serviceSlug}`] || [];
  const overviewImage = serviceCardImages[`${categorySlug}/${serviceSlug}`];

  const getIcon = (name: string) => {
    const Icon = (LucideIcons as any)[name];
    return Icon ? <Icon className="w-5 h-5 text-[#7DD3FC]" /> : null;
  };

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.overview,
    provider: { '@type': 'LocalBusiness', name: 'SR Invisible Grills & Safety Nets' },
    areaServed: { '@type': 'City', name: 'Chennai' },
  };

  const metaKeywords = `${service.name}, ${category.name}, ${category.slug.replace(/-/g, ' ')}, ${service.slug.replace(/-/g, ' ')}, Chennai`;

  return (
    <>
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <link rel="canonical" href={`https://srinvisiblegrillschennai.in/services/${categorySlug}/${serviceSlug}`} />
        <meta property="og:title" content={service.metaTitle} />
        <meta property="og:description" content={service.metaDescription} />
        <meta property="og:url" content={`https://srinvisiblegrillschennai.in/services/${categorySlug}/${serviceSlug}`} />
        <script type="application/ld+json">{JSON.stringify(serviceJsonLd)}</script>
      </Helmet>

      {/* Hero - single image with heading then breadcrumb below */}
      <section className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <ProgressiveImage
            src={overviewImage}
            alt={service.name}
            width={1920}
            height={1080}
            loading="lazy"
            className="w-full h-full object-cover"
            containerClassName="relative w-full h-full overflow-hidden"
          />
        </div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(20,35,61,0.92) 35%, rgba(16,43,94,0.22) 100%)' }} />
        <div className="relative z-10 flex flex-col justify-end h-full container mx-auto px-4 pb-8 pt-24 md:pt-28">
          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary-foreground mb-3">
            {service.heroTitle}
          </h1>
          <Breadcrumb items={[
            { label: 'Services', href: '/#services', serviceCategorySlug: categorySlug },
            { label: category.name, href: '/#services', serviceCategorySlug: categorySlug },
            { label: service.name },
          ]} />
        </div>
      </section>

      {/* Overview with 3-image slider */}
      <section className="section-light py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-foreground mb-4">
                What Are {service.name}?
              </h2>
              <p className="text-muted-foreground leading-relaxed">{service.overview}</p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <ServicePageSlider images={images} alt={service.name} />
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="section-dark py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-secondary-foreground text-center mb-10">
            Applications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {service.applications.map((app) => (
              <div key={app.title} className="bg-surface-darker rounded-lg p-6 text-center">
                <div className="w-12 h-12 rounded-full border border-[#7DD3FC]/30 bg-[#7DD3FC]/15 flex items-center justify-center mx-auto mb-3">
                  {getIcon(app.icon)}
                </div>
                <h3 className="font-heading font-bold text-secondary-foreground text-sm mb-2">{app.title}</h3>
                <p className="text-secondary-foreground/60 text-xs">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-surface pt-16 md:pt-20">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-foreground text-center mb-10">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {service.benefits.map((b) => (
              <div key={b.title} className="flex gap-3 p-4 bg-card rounded-lg shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-[#7DD3FC]/30 bg-[#7DD3FC]/15 flex items-center justify-center">
                  {getIcon(b.icon)}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground text-sm mb-1">{b.title}</h3>
                  <p className="text-muted-foreground text-xs">{b.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="section-surface py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-foreground text-center mb-10">
            Technical Specifications
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {service.specs.map((spec) => (
              <div key={spec.label} className="bg-secondary rounded-lg p-4 text-center">
                <span className="text-secondary-foreground/50 text-xs block mb-1">{spec.label}</span>
                <span className="golden-pill text-xs">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="section-dark py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-secondary-foreground text-center mb-10">
            Installation Process
          </h2>
          {/* Desktop */}
          <div className="hidden md:flex items-start justify-center">
            {service.installationSteps.map((step, i) => (
              <div key={step} className="flex items-start">
                <div className="flex flex-col items-center text-center min-w-[140px]">
                  <div className="w-10 h-10 rounded-full bg-[#7DD3FC] flex items-center justify-center font-heading font-bold text-[#0F172A] text-sm">
                    {i + 1}
                  </div>
                  <span className="text-secondary-foreground text-sm mt-3">{step}</span>
                </div>
                {i < service.installationSteps.length - 1 && (
                  <div className="flex items-center" style={{ height: '40px' }}>
                    <div className="w-10 h-0.5 bg-[#7DD3FC]/80 mx-1" />
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Mobile */}
          <div className="flex md:hidden flex-col items-center">
            {service.installationSteps.map((step, i) => (
              <div key={step} className="flex flex-col items-center">
                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-[#7DD3FC] flex items-center justify-center font-heading font-bold text-[#0F172A] text-sm mb-2">
                    {i + 1}
                  </div>
                  <span className="text-secondary-foreground text-sm">{step}</span>
                </div>
                {i < service.installationSteps.length - 1 && (
                  <div className="w-0.5 h-8 bg-[#7DD3FC]/80 my-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Standards */}
      <section className="section-light pt-16 md:pt-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-foreground text-center mb-10">
            Safety Standards
          </h2>
          <ul className="space-y-3">
            {service.safetyStandards.map((std) => (
              <li key={std} className="flex items-start gap-3 text-foreground">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                  <LucideIcons.Check className="w-3 h-3 text-primary" />
                </span>
                <span className="text-sm">{std}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FAQAccordion faqs={service.faqs} />
      <CTASection categorySlug={categorySlug} />
    </>
  );
}
