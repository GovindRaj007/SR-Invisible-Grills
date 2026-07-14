import { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSlider from '@/components/HeroSlider';
import { ImageShowcase } from '@/components/ImageShowcase';
import ServiceCategories from '@/components/ServiceCategories';
import { BUSINESS } from '@/data/services';
import { useScrollRestoration } from '@/hooks/useScrollRestoration';

// Lazy load below-the-fold components
const WhyChooseUs = lazy(() => import('@/components/WhyChooseUs'));
const HowItWorks = lazy(() => import('@/components/HowItWorks'));
const Testimonials = lazy(() => import('@/components/Testimonials'));
const ServiceAreaChennai = lazy(() => import('@/components/ServiceAreaChennai'));
const CTASection = lazy(() => import('@/components/CTASection'));

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: BUSINESS.name,
  description: 'SR Invisible Grills & Safety Nets provides invisible grills, safety nets, sports nets, and ceiling cloth drying hangers in Chennai.',
  telephone: [BUSINESS.phone, BUSINESS.secondaryPhone],
  email: BUSINESS.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Door no: 8/3, 14th St, Vallal Pari Nagar, Pari Nagar, Pallikaranai',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    postalCode: '600100',
    addressCountry: 'IN',
  },
  url: 'https://srinvisiblegrillschennai.in',
  areaServed: { '@type': 'City', name: BUSINESS.city },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: BUSINESS.phone,
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['en', 'ta'],
    },
    {
      '@type': 'ContactPoint',
      telephone: BUSINESS.secondaryPhone,
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['en', 'ta'],
    },
  ],
  openingHours: 'Mo-Sa 09:00-19:00',
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 12.979471249228329,
    longitude: 80.20454437116413,
  },
};

export default function Index() {
  useScrollRestoration();
  
  return (
    <>
      <Helmet>
        <title>SR Invisible Grills & Safety Nets — Invisible Grills, Safety Nets & More in Chennai</title>
        <meta name="description" content="SR Invisible Grills & Safety Nets provides premium invisible grills, safety nets, sports nets, and ceiling cloth drying hangers in Chennai. Warranty-based. Free site visit. Call now." />
        <meta name="keywords" content="invisible grills, invisible grills chennai, balcony safety nets chennai, invisible grills near me, balcony invisible grills, invisible grills for balcony, safety nets chennai, pigeon nets chennai, sports nets chennai, ceiling cloth hangers, Chennai, SS316" />
        <link rel="canonical" href="https://srinvisiblegrillschennai.in/" />
        <meta property="og:title" content="SR Invisible Grills & Safety Nets — Exterior Safety Solutions in Chennai" />
        <meta property="og:description" content="Premium invisible grills, safety nets, sports nets & ceiling hangers in Chennai. Free quote." />
        <meta property="og:url" content="https://srinvisiblegrillschennai.in/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SR Invisible Grills & Safety Nets — Exterior Safety Solutions in Chennai" />
        <meta name="twitter:description" content="Premium invisible grills, safety nets, sports nets & ceiling hangers in Chennai. Free quote." />
        <script type="application/ld+json">{JSON.stringify(localBusinessJsonLd)}</script>
      </Helmet>
      <HeroSlider />
      <ImageShowcase />
      <ServiceCategories />
      <Suspense fallback={<div className="h-96" />}>
        <WhyChooseUs />
      </Suspense>
      <Suspense fallback={<div className="h-96" />}>
        <HowItWorks />
      </Suspense>
      <Suspense fallback={<div className="h-96" />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<div className="h-96" />}>
        <ServiceAreaChennai />
      </Suspense>
      <Suspense fallback={<div className="h-96" />}>
        <CTASection />
      </Suspense>
    </>
  );
}
