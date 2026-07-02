import { Home, ShieldCheck, Eye, Wind, Wrench, Building2, Factory, Warehouse, BadgeCheck, Trees, Sparkles, Baby, Shield } from 'lucide-react';

export interface LocationPageContent {
  slug: string;
  name: string;
  city: string;
  areaType: string;
  heroTitle: string;
  intro: string;
  overview: string;
  keywords: string;
  serviceCards: Array<{ title: string; description: string; href: string }>;
  whyChoose: Array<{ icon: string; title: string; description: string }>;
  steps: Array<{ n: string; title: string; description: string }>;
  faqs: Array<{ question: string; answer: string }>;
}

const baseServices = [
  {
    title: 'Invisible Grills',
    description: 'SS316 invisible grills for balconies, windows, terraces and premium apartments.',
    href: '/services/invisible-grills/installation',
  },
  {
    title: 'Safety Nets',
    description: 'Child-safe balcony nets, pigeon nets, monkey nets and duct-area protection.',
    href: '/services/safety-nets/child-safe-balcony',
  },
  {
    title: 'Ceiling Cloth Hangers',
    description: 'Space-saving ceiling hangers for laundry and utility areas.',
    href: '/services/ceiling-hangers/installation',
  },
  {
    title: 'Sports Nets',
    description: 'Terrace cricket nets and practice nets for homes, schools and clubs.',
    href: '/services/sports-nets/practice-nets',
  },
];

const commonWhyChoose = [
  { icon: 'ShieldCheck', title: 'Child-safe installation', description: 'Every installation is designed to protect children, pets and family members without compromising the look of the property.' },
  { icon: 'Eye', title: 'Almost invisible finish', description: 'The stainless-steel finish blends into modern architecture while keeping your view clear.' },
  { icon: 'Wind', title: 'Coastal-ready materials', description: 'SS316-grade components and UV-stable meshes are made for Chennai’s heat, humidity and coastal air.' },
  { icon: 'Wrench', title: 'Fast, clean execution', description: 'We handle measurement, fabrication and installation with minimal disruption to your routine.' },
  { icon: 'Building2', title: 'Residential to commercial', description: 'Ideal for apartments, villas, offices, warehouses and public-facing commercial properties.' },
  { icon: 'BadgeCheck', title: 'Warranty-backed quality', description: 'Every project is backed by clear warranty terms and professional after-sales support.' },
];

const commonSteps = [
  { n: '01', title: 'Free site assessment', description: 'We inspect the space, understand your safety needs and recommend the best solution.' },
  { n: '02', title: 'Custom measurement', description: 'Every grill, net or hanger is measured for a clean, secure and visually balanced fit.' },
  { n: '03', title: 'Professional installation', description: 'Our team installs the system with precision and leaves the area neat and safe.' },
  { n: '04', title: 'Quality handover', description: 'We test the installation, explain maintenance and support you with after-service assistance.' },
];

const commonFaqs = [
  { question: 'Do you serve both homes and commercial properties in this area?', answer: 'Yes. We work with apartments, villas, offices, warehouses, schools and commercial buildings across Chennai.' },
  { question: 'Are your materials suitable for Chennai weather?', answer: 'Yes. We use corrosion-resistant SS316 stainless steel and UV-stable safety nets designed specifically for coastal climates.' },
  { question: 'Do you provide free site visits?', answer: 'Yes. We offer free site visits and quotations for new projects and replacements.' },
];

export const locationPages: LocationPageContent[] = [
  {
    slug: 'chennai',
    name: 'Chennai',
    city: 'Chennai',
    areaType: 'Metropolitan city',
    heroTitle: 'Invisible Grills, Safety Nets & Ceiling Hangers in Chennai',
    intro: 'SR Invisible Grills & Safety Nets provides premium invisible grills, balcony safety nets, pigeon nets, monkey nets, ceiling cloth hangers and sports nets for homes, apartments, commercial buildings and industrial spaces across Chennai.',
    overview: 'From high-rise apartments in Anna Nagar to warehouse zones in Ambattur and IT corridors in OMR, SR Invisible Grills & Safety Nets offers location-specific safety solutions built for Chennai’s varied architecture, humidity and traffic conditions.',
    keywords: 'invisible grills Chennai, safety nets Chennai, ceiling cloth hangers Chennai, balcony nets Chennai, commercial safety nets Chennai, industrial safety nets Chennai, sports nets Chennai, SR Invisible Grills & Safety Nets Chennai',
    serviceCards: baseServices,
    whyChoose: commonWhyChoose,
    steps: commonSteps,
    faqs: commonFaqs,
  },
  {
    slug: 'anna-nagar',
    name: 'Anna Nagar',
    city: 'Chennai',
    areaType: 'Premium residential and commercial hub',
    heroTitle: 'Invisible Grills & Safety Nets in Anna Nagar',
    intro: 'SR Invisible Grills & Safety Nets offers invisible grills for upscale apartments, child-safe balcony nets for family homes and ceiling cloth hangers for compact utility spaces in Anna Nagar.',
    overview: 'Anna Nagar has a mix of premium homes, apartments and commercial properties. Our installations are designed for luxury balconies, family safety, terrace usage and modern utility spaces with a clean, minimal look.',
    keywords: 'invisible grills Anna Nagar, balcony safety nets Anna Nagar, ceiling cloth hangers Anna Nagar, child-safe balcony nets Anna Nagar, sports nets Anna Nagar, SR Invisible Grills & Safety Nets Anna Nagar',
    serviceCards: baseServices,
    whyChoose: commonWhyChoose,
    steps: commonSteps,
    faqs: commonFaqs,
  },
  {
    slug: 'velachery',
    name: 'Velachery',
    city: 'Chennai',
    areaType: 'Residential and IT corridor',
    heroTitle: 'Invisible Grills in Velachery for Modern Homes',
    intro: 'SR Invisible Grills & Safety Nets serves Velachery with invisible grills for apartments, safety nets for balconies and terraces, and ceiling hangers for compact homes and duplex residences.',
    overview: 'Velachery’s high-density apartments and growing families need safety systems that avoid clutter while improving comfort. Our invisible grills and nets suit modern homes, gated communities and mixed-use buildings.',
    keywords: 'invisible grills Velachery, safety nets Velachery, ceiling cloth hangers Velachery, balcony nets Velachery, child-safe balcony nets Velachery, SR Invisible Grills & Safety Nets Velachery',
    serviceCards: baseServices,
    whyChoose: commonWhyChoose,
    steps: commonSteps,
    faqs: commonFaqs,
  },
  {
    slug: 'omr',
    name: 'OMR',
    city: 'Chennai',
    areaType: 'IT corridor and apartment belt',
    heroTitle: 'Invisible Grills & Safety Solutions in OMR',
    intro: 'SR Invisible Grills & Safety Nets supports OMR apartments, startups and tech parks with invisible grills, balcony safety nets, commercial netting and ceiling hangers tailored for contemporary workspaces.',
    overview: 'OMR is a fast-moving business and residential corridor. We provide reliable safety upgrades for apartments, villa projects and office spaces where aesthetics, durability and fast installation matter.',
    keywords: 'invisible grills OMR, balcony safety nets OMR, ceiling cloth hangers OMR, commercial safety nets OMR, sports nets OMR, SR Invisible Grills & Safety Nets OMR',
    serviceCards: baseServices,
    whyChoose: commonWhyChoose,
    steps: commonSteps,
    faqs: commonFaqs,
  },
  {
    slug: 't-nagar',
    name: 'T. Nagar',
    city: 'Chennai',
    areaType: 'Commercial and residential landmark',
    heroTitle: 'Invisible Grills & Safety Nets in T. Nagar',
    intro: 'SR Invisible Grills & Safety Nets works in T. Nagar for heritage homes, apartments and commercial buildings that need durable, space-saving safety systems without sacrificing appearance.',
    overview: 'T. Nagar combines retail pressure, narrow layouts and high-traffic residential use. Our invisible grills and safety nets help protect balconies, terraces and utility areas while keeping the property sleek and practical.',
    keywords: 'invisible grills T Nagar, safety nets T Nagar, balcony nets T Nagar, ceiling cloth hangers T Nagar, commercial safety nets T Nagar, SR Invisible Grills & Safety Nets T Nagar',
    serviceCards: baseServices,
    whyChoose: commonWhyChoose,
    steps: commonSteps,
    faqs: commonFaqs,
  },
  {
    slug: 'adyar',
    name: 'Adyar',
    city: 'Chennai',
    areaType: 'Premium residential and waterfront locality',
    heroTitle: 'Invisible Grills in Adyar for Sea-Facing Homes',
    intro: 'SR Invisible Grills & Safety Nets provides invisible grills and balcony safety nets in Adyar for premium homes, apartments and villa compounds that want clear views and robust protection.',
    overview: 'Adyar’s coastal air and scenic homes demand corrosion-resistant and elegant safety solutions. Our systems are ideal for sea-facing balconies, large windows and premium terrace spaces.',
    keywords: 'invisible grills Adyar, balcony safety nets Adyar, sea-facing balcony safety Adyar, ceiling cloth hangers Adyar, child-safe grills Adyar, SR Invisible Grills & Safety Nets Adyar',
    serviceCards: baseServices,
    whyChoose: commonWhyChoose,
    steps: commonSteps,
    faqs: commonFaqs,
  },
  {
    slug: 'tambaram',
    name: 'Tambaram',
    city: 'Chennai',
    areaType: 'Growing residential and transport hub',
    heroTitle: 'Safety Nets & Invisible Grills in Tambaram',
    intro: 'SR Invisible Grills & Safety Nets serves Tambaram with balcony safety nets, invisible grills for villas and apartments, and ceiling cloth hangers that make everyday living safer and more practical.',
    overview: 'Tambaram is expanding rapidly with new apartments, gated communities and independent houses. Our systems are designed to fit both compact homes and larger family residences without adding visual bulk.',
    keywords: 'invisible grills Tambaram, balcony nets Tambaram, child-safe balcony nets Tambaram, ceiling cloth hangers Tambaram, safety nets Tambaram, SR Invisible Grills & Safety Nets Tambaram',
    serviceCards: baseServices,
    whyChoose: commonWhyChoose,
    steps: commonSteps,
    faqs: commonFaqs,
  },
  {
    slug: 'porur',
    name: 'Porur',
    city: 'Chennai',
    areaType: 'Industrial and commercial growth zone',
    heroTitle: 'Commercial & Industrial Safety Nets in Porur',
    intro: 'SR Invisible Grills & Safety Nets provides invisible grills, industrial safety nets and warehouse-grade protection around homes, commercial buildings and industrial properties in Porur.',
    overview: 'Porur is known for factories, warehousing and commercial growth. We offer safety systems that protect balconies, open gaps, loading areas and utility zones with robust installation and fast response.',
    keywords: 'invisible grills Porur, industrial safety nets Porur, commercial safety nets Porur, balcony nets Porur, warehouse safety nets Porur, SR Invisible Grills & Safety Nets Porur',
    serviceCards: baseServices,
    whyChoose: commonWhyChoose,
    steps: commonSteps,
    faqs: commonFaqs,
  },
  {
    slug: 'nungambakkam',
    name: 'Nungambakkam',
    city: 'Chennai',
    areaType: 'Premium urban locality',
    heroTitle: 'Invisible Grills & Ceiling Hangers in Nungambakkam',
    intro: 'SR Invisible Grills & Safety Nets serves Nungambakkam with elegant invisible grills, child-safe balcony nets and ceiling cloth hangers for premium homes, boutique offices and modern residences.',
    overview: 'Nungambakkam demands a polished finish and premium workmanship. We deliver premium safety solutions that blend with architectural interiors while providing dependable protection for families and properties.',
    keywords: 'invisible grills Nungambakkam, ceiling cloth hangers Nungambakkam, safety nets Nungambakkam, balcony safety nets Nungambakkam, premium invisible grills Nungambakkam, SR Invisible Grills & Safety Nets Nungambakkam',
    serviceCards: baseServices,
    whyChoose: commonWhyChoose,
    steps: commonSteps,
    faqs: commonFaqs,
  },
  {
    slug: 'guindy',
    name: 'Guindy',
    city: 'Chennai',
    areaType: 'Industrial, institutional and business zone',
    heroTitle: 'Invisible Grills & Safety Nets in Guindy',
    intro: 'SR Invisible Grills & Safety Nets offers durable invisible grills, commercial balcony nets and industrial-grade safety netting in Guindy for institutions, offices, residential properties and service buildings.',
    overview: 'Guindy’s dense mix of institutions, industrial units and business properties requires safety systems that keep spaces secure without compromising access. Our installations fit technical and commercial environments as effectively as homes.',
    keywords: 'invisible grills Guindy, industrial safety nets Guindy, commercial safety nets Guindy, balcony nets Guindy, safety nets Guindy, SR Invisible Grills & Safety Nets Guindy',
    serviceCards: baseServices,
    whyChoose: commonWhyChoose,
    steps: commonSteps,
    faqs: commonFaqs,
  },
  {
    slug: 'ambattur',
    name: 'Ambattur',
    city: 'Chennai',
    areaType: 'Industrial estate and growing residential zone',
    heroTitle: 'Industrial Safety Nets & Invisible Grills in Ambattur',
    intro: 'SR Invisible Grills & Safety Nets supports Ambattur’s industrial estates, factory premises, warehouses and growing residential areas with robust safety nets and invisible grill installations.',
    overview: 'Ambattur blends industrial activity with residential growth, making safety and durability essential. We install systems that secure balconies, terraces, open areas and factory-adjacent spaces with low-maintenance materials.',
    keywords: 'invisible grills Ambattur, industrial safety nets Ambattur, warehouse safety nets Ambattur, balcony nets Ambattur, commercial safety nets Ambattur, SR Invisible Grills & Safety Nets Ambattur',
    serviceCards: baseServices,
    whyChoose: commonWhyChoose,
    steps: commonSteps,
    faqs: commonFaqs,
  },
];

export function getLocationPageContent(slug: string) {
  return locationPages.find((item) => item.slug === slug);
}

export const locationAreaLinks = locationPages
  .filter((item) => item.slug !== 'chennai')
  .map((item) => ({ slug: item.slug, name: item.name }));
