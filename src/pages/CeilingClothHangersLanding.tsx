import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BUSINESS } from '@/data/services';
import { useScrollRestoration } from '@/hooks/useScrollRestoration';
import Breadcrumb from '@/components/Breadcrumb';
import './ceiling-cloth-hangers-landing.css';

const CANONICAL = 'https://srinvisiblegrillschennai.in/ceiling-cloth-hangers-chennai';
const FORMSPREE = 'https://formspree.io/f/xykrzgjn';
const TEL = `tel:${BUSINESS.phone}`;
const wa = (text: string) => `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(text)}`;
/** "+91-9121149915" -> "+91 91211 49915" */
const prettyPhone = (raw: string) => {
  const digits = raw.replace(/\D/g, '').replace(/^91/, '');
  return digits.length === 10 ? `+91 ${digits.slice(0, 5)} ${digits.slice(5)}` : raw;
};
const PHONE = prettyPhone(BUSINESS.phone);

/* Inline glyphs — avoids pulling further icons into the shared vendor chunk. */
const CheckIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" /></svg>;
const PhoneIcon = () => <svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .57 3.6 1 1 0 0 1-.25 1z" /></svg>;
const WaIcon = () => <svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2m0 2a8 8 0 1 1-4.1 14.9l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 0 1 12 4m-3.4 4c-.2 0-.5.1-.7.4-.3.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.7 2.8 4.3 3.8 2.1.8 2.6.7 3 .6.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.6-.3-1.5-.7c-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-2-1.2 7.4 7.4 0 0 1-1.3-1.7c-.2-.3 0-.4.1-.5l.4-.5.3-.5v-.5l-.7-1.7c-.2-.4-.4-.4-.6-.4z" /></svg>;
const ArrowIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.2 5.6 11.8 7l4 4H4v2h11.8l-4 4 1.4 1.4L19.6 12z" /></svg>;
const Stars = () => (
  <span className="stars" aria-label="Rated 5 out of 5">
    {[0, 1, 2, 3, 4].map((i) => (
      <svg key={i} viewBox="0 0 24 24"><path d="m12 17.3 6.2 3.7-1.6-7L22 9.2l-7.2-.6L12 2 9.2 8.6 2 9.2l5.4 4.8-1.6 7z" /></svg>
    ))}
  </span>
);

const HANGER_TYPES = [
  {
    tag: 'Most Popular',
    title: 'Ceiling Cloth Hangers (Pulley System)',
    img: '/lp/ceiling-cloth-hanger-pulley.webp',
    w: 816, h: 584, fit: true,
    alt: 'Six-rod ceiling cloth hanger with nylon pulley system and stainless steel drying rods',
    body: 'The classic ceiling-mounted drying rack. Six stainless steel rods, each lowered and raised independently on a nylon-coated pulley, so you load at waist height and dry at ceiling height.',
    specs: ['4 ft / 6 ft / 8 ft rod lengths', '25 kg load per rod · 150 kg total', 'Child-safe rope cleat lock', 'Ideal for utility areas & covered balconies'],
  },
  {
    tag: 'Space Saver',
    title: 'Wall Mount Cloth Hangers',
    img: '/lp/wall-mount-cloth-hanger-chennai.webp',
    w: 800, h: 571, fit: false,
    alt: 'Wall mount cloth hanger fixed on a heavy-duty L-bracket, with six stainless steel rods hanging under a wooden ceiling',
    body: 'The rail is bolted to the side wall on heavy-duty L-brackets instead of into the ceiling slab. The rods still raise and lower on the same pulley ropes — so you get full drying length under a wooden, false or PVC ceiling that cannot be drilled.',
    specs: ['Wall-bracket fixing — no ceiling drilling', 'Best for false, wooden & PVC ceilings', 'Same 6-rod pulley operation', 'Rust-free stainless steel rods'],
  },
  {
    tag: 'Heavy Duty',
    title: 'Cloth Drying Pulley Hangers — Heavy Duty',
    img: '/lp/ceiling-cloth-hanger-balcony.webp',
    w: 500, h: 494, fit: false,
    alt: 'Cloth drying pulley hanger fitted to a balcony ceiling with ropes running down to a wall cleat',
    body: 'Reinforced brackets, thicker rods and upgraded pulleys for larger families and joint households. Built to take bedsheets, blankets, curtains and heavy denim without sagging.',
    specs: ['Custom lengths beyond 8 ft', '6, 8 or more rods per unit', 'Heavy-load anchors into the RCC slab', 'Suits terraces, villas & duplexes'],
  },
];

const BENEFITS = [
  { d: 'M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5z', t: 'Rust-Proof Stainless Steel', p: "Stainless rods and corrosion-resistant fittings that hold up to Chennai's coastal humidity — no flaking, no orange stains on your clothes." },
  { d: 'M3 21h18v-2H3zM5 17h4V9H5zm6 0h4V4h-4zm6 0h4v-5h-4z', t: 'Load-Tested Anchors', p: 'Every bracket is anchored into the RCC slab and load-tested before handover, so a full rod of wet bedsheets never becomes a risk.' },
  { d: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m1 10.6V6h-2v7.4l5.2 3.1 1-1.7z', t: 'Installed in Under 2 Hours', p: 'One visit, one team, one clean finish. Most ceiling cloth hanger installations across Chennai are done the same day you approve the quote.' },
  { d: 'M12 1 3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5zm-1.2 15L7 12.2l1.4-1.4 2.4 2.4 4.8-4.8L17 9.8z', t: '2-Year Written Warranty', p: 'Material and workmanship covered in writing. Rope, pulley and rod replacement handled by the same team that installed it.' },
  { d: 'M12 3 2 8l10 5 8-4v6h2V8zM6 13.2V17c0 1.7 2.7 3 6 3s6-1.3 6-3v-3.8l-6 3z', t: 'Free On-Site Measurement', p: 'We measure your ceiling height, drop distance and available span in person — so the hanger you get actually fits your utility area.' },
  { d: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m.9 15.2h-1.8v-1.8h1.8zm1.9-6.9-.8.8c-.7.7-1.1 1.2-1.1 2.4h-1.8v-.5c0-.9.4-1.7 1.1-2.4l1.1-1.1c.3-.3.5-.8.5-1.3a2 2 0 0 0-4 0H8a3.9 3.9 0 1 1 7.8 0c0 .8-.3 1.5-.9 2.1z', t: 'Fixed, Transparent Pricing', p: 'An itemised quote before we drill the first hole. What we quote is what you pay — no surprise charges for brackets, rope or labour.' },
];

const SPECS: [string, string][] = [
  ['Rod Material', 'Stainless steel, rust-resistant'],
  ['Rod Lengths', '4 ft / 6 ft / 8 ft (custom on request)'],
  ['Rods Per Unit', '6 rods standard'],
  ['Load Capacity', '25 kg per rod · up to 150 kg total'],
  ['Pulley', 'Nylon-coated, smooth-glide'],
  ['Locking', 'Child-safe wall-mounted rope cleat'],
  ['Warranty', '2 years on material & workmanship'],
];

const STEPS = [
  { t: 'Call or Send Enquiry', p: 'Tell us your area in Chennai and the space you want covered. We reply within 2 working hours.' },
  { t: 'Free Site Measurement', p: 'We check ceiling type, height and span on site, then hand you a fixed, itemised quote.' },
  { t: 'Installation', p: 'Brackets anchored, rods threaded, pulley and rope cleat fitted — typically under two hours.' },
  { t: 'Load Test & Handover', p: 'We load-test every rod, show you the operation, clear the debris and register your 2-year warranty.' },
];

/* Cross-sell cards link back into the real service pages already on the site. */
const OTHER_SERVICES = [
  {
    to: '/services/invisible-grills/installation',
    title: 'Invisible Grills',
    img: '/lp/invisible-grills-chennai.webp',
    alt: 'Technician installing stainless steel invisible grills on a high-rise apartment balcony in Chennai',
    body: 'SS 316 marine-grade cable grills for balconies and windows. Child-safe 25 mm spacing, load-tested cables and an uninterrupted view of the city — backed by a 10-year warranty.',
    specs: ['Balconies, windows & villa terraces', 'Rust-free in coastal Chennai air'],
  },
  {
    to: '/services/safety-nets/child-safe-balcony',
    title: 'Safety Nets',
    img: '/lp/balcony-safety-nets-chennai.webp',
    alt: 'Balcony safety net installed along an apartment balcony railing in Chennai',
    body: 'UV-treated HDPE and nylon nets for balconies, duct areas and open gaps. Dense child-safe mesh that stops falls without blocking light, air or the view.',
    specs: ['Child & pet safety nets', 'Duct area & monkey nets'],
  },
  {
    to: '/services/safety-nets/pigeon-nets',
    title: 'Bird Netting & Pigeon Nets',
    img: '/lp/bird-netting-chennai.webp',
    alt: 'Transparent bird netting fitted across an apartment balcony to keep pigeons out in Chennai',
    body: 'Near-invisible anti-bird netting that keeps pigeons off your balcony, AC units and window ledges — no droppings, no nesting, no cleaning every weekend.',
    specs: ['Pigeon & anti-bird nets', 'Balconies, ducts & AC ledges'],
  },
];

const AREAS = [
  'Anna Nagar', 'Velachery', 'OMR', 'T. Nagar', 'Adyar', 'Tambaram', 'Porur', 'Nungambakkam',
  'Guindy', 'Ambattur', 'Pallikaranai', 'Sholinganallur', 'Perungudi', 'Thoraipakkam', 'Medavakkam',
  'Madipakkam', 'Chromepet', 'Pallavaram', 'Mogappair', 'Kilpauk', 'Mylapore', 'Besant Nagar',
  'Thiruvanmiyur', 'Vadapalani', 'Ashok Nagar', 'Perambur', 'Avadi', 'Poonamallee', 'Navalur',
  'Siruseri', 'Kelambakkam', 'Selaiyur',
];

const REVIEWS = [
  { q: 'The ceiling cloth hanger is a game changer. So much space saved in our utility area. Highly recommend SR Invisible Grills & Safety Nets.', n: 'S. Selvi', l: 'Velachery, Chennai' },
  { q: 'The team installed invisible grills on our 12th-floor balcony. The view is untouched, and my kids are safe. Excellent work!', n: 'Alaguvelu Gopal', l: 'Anna Nagar, Chennai' },
  { q: 'We had a serious pigeon problem. The team installed nets within a day. Clean, professional, and affordable.', n: 'K. Venkataraman', l: 'OMR, Chennai' },
];

const FAQS = [
  { q: 'How much does a ceiling cloth hanger cost in Chennai?', a: 'Price depends on rod length (4 ft, 6 ft or 8 ft), the number of rods and your ceiling type. Because every utility area is different, we do not quote blind — we do a free site measurement and hand you a fixed, itemised price covering material, brackets and labour, with nothing added later.' },
  { q: 'What is the difference between a ceiling cloth hanger and a wall mount cloth hanger?', a: 'Only the fixing differs — the drying system is the same. A ceiling cloth hanger anchors the rail directly into the ceiling slab. A wall mount cloth hanger carries the same rail on heavy-duty L-brackets bolted to the side wall, so both give you the same six rods on the same pulley ropes. Choose the wall mount when the ceiling cannot be drilled — a false ceiling, a wooden or PVC ceiling, or a slab that is out of reach.' },
  { q: 'How much weight can each rod hold?', a: 'Each stainless steel rod carries up to 25 kg of wet clothes, so a standard six-rod ceiling cloth hanger supports around 150 kg in total. That comfortably covers bedsheets, blankets, curtains and heavy denim. For larger loads we fit the heavy-duty variant with reinforced brackets.' },
  { q: 'Will installation damage my ceiling or wall?', a: 'No. We use precision anchors sized to the fixing, which means a small number of clean holes drilled into the RCC slab. Our technicians dust-sheet the area and clear all debris before leaving. If you have a false ceiling, we anchor into the structural slab above it and route the fixing neatly.' },
  { q: 'How long does a ceiling cloth hanger installation take?', a: 'A standard installation is finished in under two hours. In most Chennai localities we can complete the site visit and the installation on the same day, provided the material size you need is in stock.' },
  { q: "Do the rods rust in Chennai's humidity?", a: "We fit stainless steel rods and corrosion-resistant fittings specifically because Chennai's coastal air destroys ordinary mild-steel hangers within a season. No rust flakes, and no orange marks transferring onto your clothes." },
  { q: 'Which areas of Chennai do you cover for cloth drying pulley hangers?', a: 'All of Chennai. That includes Anna Nagar, Velachery, OMR, T. Nagar, Adyar, Tambaram, Porur, Nungambakkam, Guindy, Ambattur, Pallikaranai, Sholinganallur, Perungudi, Thoraipakkam, Medavakkam, Chromepet, Mogappair, Kilpauk, Mylapore, Besant Nagar, Thiruvanmiyur, Vadapalani, Perambur, Avadi, Poonamallee and every surrounding locality in Greater Chennai.' },
  { q: 'Is there a warranty, and what happens if the rope or pulley wears out?', a: 'Every installation carries a 2-year warranty on material and workmanship. Rope, pulley and rod replacements are handled by the same team that installed your unit, and support continues after the warranty period at transparent service rates.' },
  { q: 'Can I get a cloth hanger fitted along with invisible grills or safety nets?', a: 'Yes, and it is the cheaper way to do it. We install invisible grills, balcony safety nets, and bird and pigeon netting alongside cloth hangers. Mention everything you need when you call and we will survey it all in one visit and give you a single combined quote.' },
];

type FieldKey = 'name' | 'phone' | 'hanger_type';

export default function CeilingClothHangersLanding() {
  useScrollRestoration();

  const [values, setValues] = useState({ name: '', phone: '', area: '', hanger_type: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<'ok' | 'no' | null>(null);

  const rules: Record<FieldKey, { test: (v: string) => boolean; msg: string }> = {
    name: { test: (v) => v.trim().length >= 3 && /^[A-Za-z][A-Za-z .'-]*$/.test(v.trim()), msg: 'Please enter your full name.' },
    phone: { test: (v) => /^[6-9]\d{9}$/.test(v), msg: 'Enter a valid 10-digit mobile number.' },
    hanger_type: { test: (v) => v !== '', msg: 'Please choose a hanger type.' },
  };

  const setField = (key: keyof typeof values, raw: string) => {
    const v = key === 'phone' ? raw.replace(/\D/g, '').slice(0, 10) : raw;
    setValues((prev) => ({ ...prev, [key]: v }));
    if (key in rules && rules[key as FieldKey].test(v)) {
      setErrors((prev) => ({ ...prev, [key]: '' }));
    }
  };

  const blur = (key: FieldKey) => {
    if (values[key] && !rules[key].test(values[key])) {
      setErrors((prev) => ({ ...prev, [key]: rules[key].msg }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    (Object.keys(rules) as FieldKey[]).forEach((k) => {
      if (!rules[k].test(values[k])) next[k] = rules[k].msg;
    });
    setErrors(next);
    if (Object.keys(next).length) return;

    setSending(true);
    setResult(null);
    try {
      const payload = new FormData();
      payload.append('name', values.name.trim());
      payload.append('phone', values.phone);
      payload.append('area', values.area.trim());
      payload.append('hanger_type', values.hanger_type);
      payload.append('source', 'Google Ads — Ceiling Cloth Hangers Landing Page');
      payload.append('_subject', 'New Ceiling Cloth Hanger Enquiry (Google Ads LP)');

      const res = await fetch(FORMSPREE, { method: 'POST', headers: { Accept: 'application/json' }, body: payload });
      if (!res.ok) throw new Error('Request failed');

      setValues({ name: '', phone: '', area: '', hanger_type: '' });
      setResult('ok');
      const win = window as Window & { dataLayer?: Array<Record<string, unknown>> };
      win.dataLayer = win.dataLayer || [];
      win.dataLayer.push({ event: 'generate_lead', form_name: 'ceiling_cloth_hangers_lp', page_type: 'ceiling_cloth_hangers_lp' });
    } catch {
      setResult('no');
    } finally {
      setSending(false);
    }
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `${CANONICAL}#business`,
        name: BUSINESS.name,
        description: 'Ceiling cloth hanger, wall mount cloth hanger and cloth drying pulley hanger installation across Chennai. Also provides invisible grills, balcony safety nets and bird netting.',
        image: 'https://srinvisiblegrillschennai.in/lp/ceiling-cloth-hanger-pulley.webp',
        url: CANONICAL,
        telephone: BUSINESS.phone,
        email: BUSINESS.email,
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Door No. 8/3, 14th Street, Vallal Pari Nagar, Pallikaranai',
          addressLocality: 'Chennai', addressRegion: 'Tamil Nadu', postalCode: '600100', addressCountry: 'IN',
        },
        geo: { '@type': 'GeoCoordinates', latitude: 12.9366, longitude: 80.2064 },
        areaServed: { '@type': 'City', name: 'Chennai' },
        openingHoursSpecification: [{
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00', closes: '19:00',
        }],
      },
      {
        '@type': 'Service',
        '@id': `${CANONICAL}#service`,
        name: 'Ceiling Cloth Hanger Installation in Chennai',
        serviceType: 'Ceiling cloth hanger and cloth drying hanger installation',
        description: 'Supply and installation of stainless steel ceiling cloth hangers, wall mount cloth hangers and cloth drying pulley hangers for apartments, villas and commercial spaces across Chennai. Free site visit, same-day installation and a 2-year warranty.',
        provider: { '@id': `${CANONICAL}#business` },
        areaServed: [{ '@type': 'City', name: 'Chennai' }, ...AREAS.slice(0, 12).map((a) => ({ '@type': 'Place', name: a }))],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Cloth Hanger Types',
          itemListElement: HANGER_TYPES.map((t) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: t.title } })),
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${CANONICAL}#faq`,
        mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
    ],
  };

  return (
    <div className="cch-lp">
      <Helmet>
        <title>Ceiling Cloth Hangers Chennai | Wall Mount &amp; Pulley Hangers</title>
        <meta name="description" content="Ceiling cloth hangers in Chennai - stainless steel ceiling, wall mount and pulley cloth drying hangers. Free site visit, same-day fitting, 2-year warranty." />
        <meta name="keywords" content="ceiling cloth hangers Chennai, ceiling cloth hanger installation Chennai, cloth drying hangers Chennai, wall mount cloth hangers Chennai, cloth drying pulley hangers, ceiling cloth drying stand Chennai, balcony cloth hanger Chennai, pulley cloth hanger" />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <link rel="canonical" href={CANONICAL} />
        <link rel="preload" as="image" href="/lp/ceiling-cloth-hanger-installation-chennai.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ceiling Cloth Hangers Chennai | Wall Mount &amp; Pulley Hangers" />
        <meta property="og:description" content="Stainless steel ceiling cloth drying hangers, wall mount cloth hangers and pulley hangers installed across Chennai. Free site visit. 2-year warranty." />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:image" content="https://srinvisiblegrillschennai.in/lp/ceiling-cloth-hanger-pulley.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ceiling Cloth Hangers Chennai | SR Invisible Grills &amp; Safety Nets" />
        <meta name="twitter:description" content="Ceiling, wall mount and pulley cloth drying hangers installed across Chennai. Free site visit, same-day installation." />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* ---------------- HERO ---------------- */}
      <section className="hero">
        <div className="hero-bg">
          <img
            src="/lp/ceiling-cloth-hanger-installation-chennai.webp" width={678} height={1000}
            alt="Ceiling cloth hanger with six stainless steel rods installed on a balcony ceiling in a Chennai apartment"
            fetchPriority="high" decoding="async"
          />
        </div>
        <div className="wrap hero-grid">
          <div>
            <Breadcrumb items={[
              { label: 'Services', href: '/#services', serviceCategorySlug: 'ceiling-hangers' },
              { label: 'Ceiling Cloth Hangers in Chennai' },
            ]} />
            <h1>Ceiling Cloth Hangers in Chennai <em>Installed in Under 2 Hours</em></h1>
            <p className="hero-sub">
              Rust-proof stainless steel <strong>ceiling cloth drying hangers</strong>, <strong>wall mount cloth hangers</strong> and{' '}
              <strong>cloth drying pulley hangers</strong> — measured, supplied and fitted by our own trained technicians.
              Free site visit and a fixed quote before we start. Available across Chennai.
            </p>
            <ul className="chips">
              {['Free Site Visit', '2-Year Warranty', 'Same-Day Installation', 'No Hidden Charges'].map((c) => (
                <li className="chip" key={c}><CheckIcon />{c}</li>
              ))}
            </ul>
            <div className="hero-btns">
              <a className="btn btn-primary" href={TEL}><PhoneIcon />Call {PHONE}</a>
              <a className="btn btn-wa" href={wa('Hi, I need a quote for a ceiling cloth hanger in Chennai.')} target="_blank" rel="noopener noreferrer"><WaIcon />WhatsApp Us</a>
            </div>
            <div className="rating">
              <Stars />
              <span>4.9/5 average rating · 500+ installations completed in Chennai</span>
            </div>
          </div>

          <div className="qcard" id="quote">
            <h2>Get a Free Quote Today</h2>
            <p className="qsub">Share your details and we will call you back within 2 working hours with pricing and the earliest installation slot.</p>
            <form onSubmit={handleSubmit} noValidate>
              <div className={`field${errors.name ? ' bad' : ''}`}>
                <label htmlFor="cch-name">Full Name *</label>
                <input id="cch-name" type="text" autoComplete="name" placeholder="Your full name"
                  value={values.name} onChange={(e) => setField('name', e.target.value)} onBlur={() => blur('name')} />
                {errors.name && <span className="err">{errors.name}</span>}
              </div>
              <div className="two">
                <div className={`field${errors.phone ? ' bad' : ''}`}>
                  <label htmlFor="cch-phone">Mobile Number *</label>
                  <input id="cch-phone" type="tel" inputMode="numeric" maxLength={10} autoComplete="tel" placeholder="10-digit number"
                    value={values.phone} onChange={(e) => setField('phone', e.target.value)} onBlur={() => blur('phone')} />
                  {errors.phone && <span className="err">{errors.phone}</span>}
                </div>
                <div className="field">
                  <label htmlFor="cch-area">Area in Chennai</label>
                  <input id="cch-area" type="text" placeholder="e.g. Velachery"
                    value={values.area} onChange={(e) => setField('area', e.target.value)} />
                </div>
              </div>
              <div className={`field${errors.hanger_type ? ' bad' : ''}`}>
                <label htmlFor="cch-type">Hanger Type *</label>
                <select id="cch-type" value={values.hanger_type}
                  onChange={(e) => setField('hanger_type', e.target.value)} onBlur={() => blur('hanger_type')}>
                  <option value="">Select hanger type</option>
                  <option>Ceiling Cloth Hanger (Pulley System)</option>
                  <option>Wall Mount Cloth Hanger</option>
                  <option>Cloth Drying Pulley Hanger — Heavy Duty</option>
                  <option>Not sure — need a recommendation</option>
                </select>
                {errors.hanger_type && <span className="err">{errors.hanger_type}</span>}
              </div>
              <button className="btn btn-primary btn-block" type="submit" disabled={sending}>
                {sending ? 'Sending…' : 'Get My Free Quote'}
              </button>
              <p className="qnote">No spam. Your number is used only to share your quote.</p>
              {result === 'ok' && <p className="qmsg ok" role="status">Thank you! Your enquiry is in — we will call you back within 2 working hours.</p>}
              {result === 'no' && <p className="qmsg no" role="status">Sorry, that did not go through. Please call {BUSINESS.phone} or message us on WhatsApp.</p>}
            </form>
          </div>
        </div>
      </section>

      {/* ---------------- STATS ---------------- */}
      <section className="stats" aria-label="Our track record">
        <div className="stats-in">
          {[['500+', 'Installations Completed'], ['2 Year', 'Warranty on Hangers'], ['4.9/5', 'Customer Rating'], ['Same Day', 'Free Site Visit']].map(([v, l]) => (
            <div className="stat" key={l}><b>{v}</b><span>{l}</span></div>
          ))}
        </div>
      </section>

      {/* ---------------- HANGER TYPES ---------------- */}
      <section className="sec lazy-sec" id="types">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow eyebrow-light">Our Cloth Hanger Range</span>
            <h2>Types of <span className="hl">Cloth Hangers</span> We Install in Chennai</h2>
            <p>Every Chennai home dries clothes differently. We fit the right system for your ceiling height, balcony size and daily load — measured on site, never guessed.</p>
          </div>
          <div className="grid-3">
            {HANGER_TYPES.map((t) => (
              <article className="card" key={t.title}>
                <div className="card-fig">
                  <span className="tag">{t.tag}</span>
                  <img className={t.fit ? 'fit' : undefined} src={t.img} width={t.w} height={t.h} loading="lazy" decoding="async" alt={t.alt} />
                </div>
                <div className="card-body">
                  <h3>{t.title}</h3>
                  <p>{t.body}</p>
                  <ul className="spec-list">
                    {t.specs.map((s) => <li key={s}><CheckIcon />{s}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- WHY US ---------------- */}
      <section className="sec sec-surface lazy-sec" id="why">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow eyebrow-light">Why Chennai Chooses Us</span>
            <h2>Cloth Hangers That Still Work <span className="hl">Five Years Later</span></h2>
            <p>Chennai's salt air and humidity destroy cheap hardware within a season. Everything we fit is chosen to survive it.</p>
          </div>
          <div className="grid-ben">
            {BENEFITS.map((b) => (
              <div className="ben" key={b.t}>
                <span className="ben-ico"><svg viewBox="0 0 24 24" aria-hidden="true"><path d={b.d} /></svg></span>
                <div><h3>{b.t}</h3><p>{b.p}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SPECIFICATIONS ---------------- */}
      <section className="sec lazy-sec" id="specs">
        <div className="wrap">
          <div className="split img-right">
            <div className="split-img">
              <img src="/lp/ceiling-cloth-hanger-installation-chennai.webp" width={678} height={1000} loading="lazy" decoding="async"
                alt="Completed ceiling cloth hanger installation in a Chennai apartment balcony with the rope cleat fixed to the wall" />
            </div>
            <div>
              <span className="eyebrow eyebrow-light">Specifications</span>
              <h2>What Goes Into Every <span className="hl">Ceiling Cloth Hanger</span></h2>
              <p style={{ marginBottom: 22 }}>The standard specification we quote for a Chennai apartment utility area. Larger spans, extra rods and heavy-duty variants are priced on measurement.</p>
              <table className="spec-table">
                <tbody>
                  {SPECS.map(([k, v]) => <tr key={k}><th scope="row">{k}</th><td>{v}</td></tr>)}
                </tbody>
              </table>
              <ul className="incl">
                {['Free site measurement', 'All brackets & anchors', 'Complete installation labour', 'Debris cleared before we leave'].map((i) => (
                  <li key={i}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
                  </svg>{i}</li>
                ))}
              </ul>
              <div className="hero-btns" style={{ marginTop: 26 }}>
                <a className="btn btn-primary" href="#quote">Get My Free Quote</a>
                <a className="btn btn-wa" href={wa('Hi, please share ceiling cloth hanger prices and sizes.')} target="_blank" rel="noopener noreferrer">Ask on WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- PROCESS ---------------- */}
      <section className="sec sec-dark lazy-sec" id="process">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">How It Works</span>
            <h2>From Call to Clothesline in <span className="hl">One Visit</span></h2>
            <p style={{ color: 'rgba(255,255,255,.72)' }}>A straightforward four-step process with no waiting between stages.</p>
          </div>
          <div className="steps">
            {STEPS.map((s, i) => (
              <div className="step" key={s.t}><b>{i + 1}</b><h3>{s.t}</h3><p>{s.p}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- OTHER SERVICES (linked) ---------------- */}
      <section className="sec lazy-sec" id="services">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow eyebrow-light">Also From {BUSINESS.name}</span>
            <h2>Other Services We Provide <span className="hl">Across Chennai</span></h2>
            <p>Getting a cloth hanger fitted? Our team can handle your balcony safety and bird-proofing in the same visit — one team, one appointment, one combined quote.</p>
          </div>
          <div className="grid-3">
            {OTHER_SERVICES.map((s) => (
              <Link className="card" to={s.to} key={s.to}>
                <div className="card-fig">
                  <img src={s.img} width={800} height={600} loading="lazy" decoding="async" alt={s.alt} />
                </div>
                <div className="card-body">
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                  <ul className="spec-list">
                    {s.specs.map((x) => <li key={x}><CheckIcon />{x}</li>)}
                  </ul>
                  <span className="card-more">Explore {s.title}<ArrowIcon /></span>
                </div>
              </Link>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: 30, fontSize: '15.5px' }}>
            Want a combined quote? <a className="tel-link" href={TEL}>Call {PHONE}</a> and mention every service you need in one go.
          </p>
        </div>
      </section>

      {/* ---------------- SERVICE AREAS ---------------- */}
      <section className="sec sec-surface lazy-sec" id="areas">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow eyebrow-light">Service Coverage</span>
            <h2>Ceiling Cloth Hanger Installation <span className="hl">Across Chennai</span></h2>
            <p>Our installation teams cover every part of Greater Chennai — north, south, central and the IT corridor. If your locality is not listed, call us; we almost certainly cover it.</p>
          </div>
          <ul className="areas">
            {AREAS.map((a) => <li className="area" key={a}>{a}</li>)}
            <li className="area all">Available Across All of Chennai</li>
          </ul>
          <p className="areas-note">
            Same-day and next-day slots available in most areas.{' '}
            <a className="tel-link" href={TEL}>Call {PHONE}</a> to check availability in your locality.
          </p>
        </div>
      </section>

      {/* ---------------- REVIEWS ---------------- */}
      <section className="sec lazy-sec" id="reviews">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow eyebrow-light">Testimonials</span>
            <h2>What Chennai Families <span className="hl">Say About Us</span></h2>
          </div>
          <div className="grid-rev">
            {REVIEWS.map((r) => (
              <blockquote className="rev" key={r.n}>
                <Stars />
                <p>&ldquo;{r.q}&rdquo;</p>
                <cite>{r.n}<span>{r.l}</span></cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="sec sec-surface lazy-sec" id="faq">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow eyebrow-light">FAQs</span>
            <h2>Ceiling Cloth Hangers in Chennai — <span className="hl">Common Questions</span></h2>
          </div>
          <div className="faq">
            {FAQS.map((f, i) => (
              <details key={f.q} open={i === 0}>
                <summary>{f.q}</summary>
                <div className="ans">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CLOSING CTA ---------------- */}
      <section className="cta-band lazy-sec">
        <div className="wrap">
          <span className="eyebrow">Free Site Visit · No Obligation</span>
          <h2>Get Your Ceiling Cloth Hanger Fitted This Week</h2>
          <p>Tell us your locality and utility area size — we will confirm pricing and the earliest installation slot within 2 working hours.</p>
          <div className="cta-btns">
            <a className="btn btn-primary" href={TEL}><PhoneIcon />Call {PHONE}</a>
            <a className="btn btn-wa" href={wa('Hi, I want to book a free site visit for a ceiling cloth hanger.')} target="_blank" rel="noopener noreferrer"><WaIcon />WhatsApp Us</a>
            <a className="btn btn-ghost" href="#quote">Request a Callback</a>
          </div>
          <p className="cta-phones">
            Or reach us on <a href={TEL}>{PHONE}</a> · {BUSINESS.hours}
          </p>
        </div>
      </section>
    </div>
  );
}
