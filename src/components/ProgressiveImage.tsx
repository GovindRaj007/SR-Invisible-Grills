import { useState } from 'react';

interface ProgressiveImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  className?: string;
  containerClassName?: string;
}

export default function ProgressiveImage({
  src,
  alt,
  width,
  height,
  loading = 'lazy',
  className = 'w-full h-full object-cover',
  containerClassName = 'relative w-full h-full overflow-hidden',
}: ProgressiveImageProps) {
  const [loaded, setLoaded] = useState(loading === 'eager');
  const [error, setError] = useState(false);

  return (
    <div className={containerClassName}>
      {/* Blurred placeholder while loading */}
      {!loaded && !error && (
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            backgroundImage: `linear-gradient(135deg, #EEF3FA 0%, #E5E9F0 100%), url(${src})`,
            backgroundSize: 'cover',
            filter: 'blur(20px)',
            transform: 'scale(1.1)',
          }}
          aria-hidden="true"
        />
      )}

      {/* Error state - solid background */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#EEF3FA]">
          <span className="text-sm text-[#5B6475]">Image failed to load</span>
        </div>
      )}

      {/* Full resolution image */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => {
          setLoaded(true);
          setError(true);
        }}
        className={`${className} transition-opacity duration-500 ${
          loaded && !error ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}
