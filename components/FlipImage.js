'use client';
import Image from 'next/image';
import { useState } from 'react';

/**
 * FlipImage component
 * Shows an orange circle while the image loads then flips to the image once loaded.
 * Props correspond to Next/Image with an extra className that applies to the outer wrapper.
 */
import { useEffect } from 'react';

export default function FlipImage({ src, backSrc = null, width = 200, height = 200, alt = '', className = '' }) {
  const [loaded, setLoaded] = useState(false);
  const [flipped, setFlipped] = useState(false);

  // After main image loads, auto-flip once
  useEffect(() => {
    if (loaded) {
      const t = setTimeout(() => setFlipped(true), 300);
      return () => clearTimeout(t);
    }
  }, [loaded]);

  return (
    <div
      className={`flip-card inline-block ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div
        className={`flip-card-inner ${flipped ? 'flipped' : ''}`}
        onClick={() => setFlipped((f) => !f)}
      >
        <div className="flip-card-front rounded-full overflow-hidden">
          <Image
            src={src}
            width={width}
            height={height}
            alt={alt}
            className="rounded-full object-cover"
            onLoad={() => setLoaded(true)}
            priority
          />
        </div>
        <div
          className="flip-card-back rounded-full"
          style={backSrc ? { backgroundImage: `url(${typeof backSrc === 'string' ? backSrc : backSrc.src})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}
        />
      </div>
    </div>
  );
}
