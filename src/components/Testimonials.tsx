import { useRef } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  { name: 'Alaguvelu Gopal.', location: 'Anna Nagar', text: 'The team installed invisible grills on our 12th-floor balcony. The view is untouched, and my kids are safe. Excellent work!' },
  { name: 'K.Venkataraman.', location: 'OMR', text: 'We had a serious pigeon problem. The team installed nets within a day. Clean, professional, and affordable.' },
  { name: 'S.Selvi.', location: 'Velachery', text: 'The ceiling cloth hanger is a game changer. So much space saved in our utility area. Highly recommend SR Invisible Grills & Safety Nets.' },
  { name: 'Arun D.', location: 'T. Nagar', text: 'Got terrace cricket nets installed for my son. The quality is top-notch and the installation was quick and clean.' },
  { name: 'V.Deepa.', location: 'Adyar', text: 'Safety nets for our duct area were installed perfectly. The team was punctual and pricing was transparent.' },
  { name: 'Mudaliar Krishnamurthi.', location: 'Tambaram', text: 'Invisible grills for all our windows — best investment for child safety. SR Invisible Grills & Safety Nets delivered beyond expectations.' },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const touchRef = useRef({ startX: 0, startTime: 0 });

  const handleTouchStart = (e: React.TouchEvent) => {
    touchRef.current.startX = e.touches[0].clientX;
    touchRef.current.startTime = Date.now();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!scrollRef.current) return;

    const endX = e.changedTouches[0].clientX;
    const endTime = Date.now();
    const distance = touchRef.current.startX - endX;
    const duration = endTime - touchRef.current.startTime;

    // Minimum swipe distance (40px) and not a long drag (< 800ms)
    if (Math.abs(distance) > 40 && duration < 800) {
      const scrollAmount = distance > 0 ? 340 : -340; // Card width + gap

      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="section-surface py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">Testimonials</span>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground">
            What Chennai Families Say
          </h2>
        </div>
        <div
          ref={scrollRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="w-[300px] flex-shrink-0 snap-start rounded-lg border border-[#E5E9F0] bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:w-[340px]"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="mb-4 text-sm italic text-[#5B6475]">"{t.text}"</p>
              <div className="flex items-center justify-between">
                <span className="font-heading text-sm font-bold text-[#1B2740]">{t.name}</span>
                <span className="golden-pill text-[10px]">{t.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
