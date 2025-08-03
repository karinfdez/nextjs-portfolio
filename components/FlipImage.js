'use client';
import Image from 'next/image';
import { useState } from 'react';

/**
 * FlipImage component
 * Shows an orange circle while the image loads then flips to the image once loaded.
 * Props correspond to Next/Image with an extra className that applies to the outer wrapper.
 */
import { useEffect } from 'react';

export default function FlipImage({ src, backImages = [], autoSequence = [], size = 200, sizeMd = null, offsetY = '50%', shiftY = '0%', alt = '', className = '', hoverText = null }) {
  const [loaded, setLoaded] = useState(false);
  const width = size;
  const height = width;
  const [flipped, setFlipped] = useState(false);
  const [index, setIndex] = useState(0);
  const hasGallery = backImages && backImages.length > 0;
  const [backImage, setBackImage] = useState(hasGallery ? backImages[0] : null);

  // After main image loads, run auto-sequence if provided
  useEffect(() => {
    if (!loaded || !autoSequence.length) return;

    let step = 0;
    const run = () => {
      if (step >= autoSequence.length) return;
      // show seq[step]
      setBackImage(autoSequence[step]);
      setFlipped(true);
      // after show
      setTimeout(() => {
        setFlipped(false);
        step += 1;
        if (step < autoSequence.length) {
          // wait before next flip
          setTimeout(run, 400);
        } else {
          // sequence done – ensure gallery backImage reset
          if (hasGallery) setBackImage(backImages[index]);
        }
      }, 700); // duration of visible back side
    };

    const initialDelay = 300;
    const timer = setTimeout(run, initialDelay);
    return () => clearTimeout(timer);
  }, [loaded, autoSequence, hasGallery, index, backImages]);

  return (
    <div
      className={`flip-card inline-block group ring-4 ring-orange-500 ${className} ${sizeMd ? `md:w-[${sizeMd}px] md:h-[${sizeMd}px]` : ''}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <div
        className={`flip-card-inner ${flipped ? 'flipped' : ''}`}
        onClick={() => {
          if (!hasGallery) {
            setFlipped((f) => !f);
            return;
          }

          setFlipped((prev) => {
            if (prev) {
              // Was showing back; flip back to front (karin)
              return false;
            }
            // Was showing front; set next back image and flip
            setIndex((i) => {
              const next = (i + 1) % backImages.length;
              setBackImage(backImages[next]);
              return next;
            });
            return true;
          });
        }}
      >
        <div className="flip-card-front rounded-full overflow-hidden cursor-pointer">
          <Image
            src={src}
            width={width}
            height={height}
            alt={alt}
            className="rounded-full object-cover"
            onLoad={() => setLoaded(true)}
            priority
            style={{ objectPosition: `50% ${offsetY}`, transform: `translateY(${shiftY})` }}
          />
        </div>
        <div
          className="flip-card-back rounded-full"
          style={backImage ? { backgroundImage: `url(${typeof backImage === 'string' ? backImage : backImage.src})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}
        />
      </div>
      {/* Hover overlay */}
      {/* Hover icon */}
      {hoverText && (
        <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold bg-black/50 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity rounded-full">
          {hoverText}
        </div>
      )}
    </div>
  );
}
