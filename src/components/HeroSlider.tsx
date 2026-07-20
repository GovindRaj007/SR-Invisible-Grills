import { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { serviceCategories } from '@/data/services';
import { heroImages } from '@/data/images';
import { Phone } from 'lucide-react';
import { BUSINESS } from '@/data/services';

const badgeTexts: Record<string, string> = {
  'invisible-grills': 'Trusted Home Safety Experts',
  'safety-nets': 'Certified Protection for Your Family',
  'ceiling-hangers': 'Professional Hanging Solutions',
  'sports-nets': 'Professional Sports Facilities',
};

const slides = serviceCategories.map((cat) => ({
  label: cat.label,
  headline: cat.headline,
  subtext: cat.subtext,
  pills: cat.pills,
  image: heroImages[cat.slug],
  link: `/services/${cat.slug}/${cat.subServices[0].slug}`,
  slug: cat.slug,
  badgeText: badgeTexts[cat.slug] || 'Trusted Home Safety Experts',
}));

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);

  useEffect(() => {
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.as = 'image';
    preloadLink.href = slides[0]?.image || '';
    preloadLink.fetchPriority = 'high';
    document.head.appendChild(preloadLink);

    intervalRef.current = setInterval(next, 5000);
    return () => {
      document.head.contains(preloadLink) && preloadLink.remove();
      clearInterval(intervalRef.current);
    };
  }, [next]);

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(next, 5000);
  };

  const goTo = (i: number) => {
    setCurrent(i);
    resetTimer();
  };

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) setCurrent((p) => (p + 1) % slides.length);
      else setCurrent((p) => (p - 1 + slides.length) % slides.length);
      resetTimer();
    }
  };

  return (
    <section
      className="relative h-[100svh] min-h-[600px] max-h-[800px] md:min-h-[600px] md:max-h-[900px] w-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
        >
          <img
            src={slide.image}
            alt={slide.label}
            className="absolute inset-0 w-full h-full"
            loading={i === 0 ? 'eager' : 'lazy'}
            decoding="async"
            fetchpriority={i === 0 ? 'high' : 'low'}
            sizes="(max-width: 768px) 100vw, 100vw"
            width={1920}
            height={1080}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(20,35,61,0.78) 35%, rgba(16,43,94,0.15) 100%)',
            }}
          />
          <div className="relative z-10 flex flex-col justify-center h-full container mx-auto px-4 md:px-8 mt-[-2rem]">
            <div className="max-w-2xl">
              <div
                key={`badge-${current}`}
                className="hero-content-animate mb-4 md:mb-6 inline-block rounded-full bg-white/10 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium text-white backdrop-blur-sm"
              >
                {slide.badgeText}
              </div>
              <span className="golden-label mb-4">{slide.label}</span>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary-foreground mb-4 leading-tight">
                {slide.headline} 
              </h1>
              <p className="text-secondary-foreground/80 text-base md:text-lg mb-6 max-w-xl font-body">
                {slide.subtext}
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <a href={`tel:${BUSINESS.phone}`} className="btn-golden flex items-center gap-2 text-sm md:text-base">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
                <Link to={slide.link} className="bg-primary text-white font-heading font-bold px-6 py-3 rounded-lg border-2 border-primary transition-all duration-300 hover:opacity-90 text-sm md:text-base">
                  Explore Service →
                </Link>
              </div>
              <div className="flex flex-wrap gap-2">
                {slide.pills.map((pill) => (
                  <span key={pill} className="golden-pill text-xs">{pill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* Dot indicators */}
      <div className="absolute bottom-[13%] md:bottom-[15%] left-1/2 z-20 flex -translate-x-1/2 gap-2 md:gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2 md:h-3 rounded-full transition-all duration-300 ${
              i === current ? 'w-8 md:w-10 bg-primary shadow-lg shadow-primary/50' : 'w-2 md:w-3 bg-white/40 hover:bg-white/60 hover:scale-125'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
