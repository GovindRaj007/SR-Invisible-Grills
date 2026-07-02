import { useState, useEffect, useRef } from 'react';
import ProgressiveImage from './ProgressiveImage';

interface ServicePageSliderProps {
  images: string[];
  alt: string;
}

export default function ServicePageSlider({ images, alt }: ServicePageSliderProps) {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    intervalRef.current = setInterval(() => setCurrent((p) => (p + 1) % images.length), 4000);
    return () => clearInterval(intervalRef.current);
  }, [images.length]);

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => setCurrent((p) => (p + 1) % images.length), 4000);
  };

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      setCurrent((p) => diff > 0 ? (p + 1) % images.length : (p - 1 + images.length) % images.length);
      resetTimer();
    }
  };

  return (
    <div
      className="relative h-[20rem] md:h-[25rem] w-full overflow-hidden rounded-lg"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {images.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <ProgressiveImage
            src={img}
            alt={`${alt} ${i + 1}`}
            width={600}
            height={400}
            loading={i === 0 ? 'eager' : 'lazy'}
            className="w-full h-full object-cover"
            containerClassName="relative w-full h-full overflow-hidden"
          />
        </div>
      ))}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrent(i); resetTimer(); }}
            className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? 'bg-primary scale-125' : 'bg-secondary-foreground/40'}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
