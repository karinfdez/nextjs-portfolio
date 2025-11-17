"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

const PrevButton = ({ enabled, onClick }) => (
  <button
    className="embla__prev absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-gray-800/60 hover:bg-gray-800 text-white disabled:opacity-40"
    onClick={onClick}
    disabled={!enabled}
    aria-label="Previous slide"
  >
    ‹
  </button>
);

const NextButton = ({ enabled, onClick }) => (
  <button
    className="embla__next absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-gray-800/60 hover:bg-gray-800 text-white disabled:opacity-40"
    onClick={onClick}
    disabled={!enabled}
    aria-label="Next slide"
  >
    ›
  </button>
);

/**
 * Carousel that shows 1 slide at a time. Accepts `video` (YouTube URL) and `screenshots` (array of image paths).
 */
export default function ProjectMediaCarousel({ video = "", screenshots = [] }) {
  const mediaItems = [];
  if (video) mediaItems.push({ type: "video", src: video });
  screenshots.forEach((src) => mediaItems.push({ type: "image", src }));

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center", slidesToScroll: 1 });
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // helper to convert YouTube watch url to embed url
  const getYoutubeEmbed = (url) => {
    if (!url) return "";
    if (url.includes("embed")) return url;
    
    // Handle youtu.be format
    const youtuBeMatch = url.match(/youtu\.be\/([^?&]+)/);
    if (youtuBeMatch) return `https://www.youtube.com/embed/${youtuBeMatch[1]}`;
    
    // Handle youtube.com format
    const videoIdMatch = url.match(/[?&]v=([^&]+)/);
    if (videoIdMatch) return `https://www.youtube.com/embed/${videoIdMatch[1]}`;
    
    return url;
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto p-4">
      <div className="overflow-hidden rounded-lg" ref={emblaRef}>
        <div className="flex gap-4">
          {mediaItems.map((item, idx) => (
            <div
              key={idx}
              className="embla__slide flex-[0_0_100%] aspect-video bg-gray-900 flex items-center justify-center"
            >
              {item.type === "video" ? (
                <iframe
                  className="w-full aspect-video"
                  src={getYoutubeEmbed(item.src)}
                  title="Project video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <Image
                  src={item.src}
                  alt={`Screenshot ${idx + 1}`}
                  width={1280}
                  height={720}
                  className="object-contain w-full h-full"
                  unoptimized
                />
              )}
            </div>
          ))}
        </div>
      </div>
      {mediaItems.length > 1 && (
        <>
          <PrevButton enabled={true} onClick={scrollPrev} />
          <NextButton enabled={true} onClick={scrollNext} />
        </>
      )}
    </div>
  );
}
