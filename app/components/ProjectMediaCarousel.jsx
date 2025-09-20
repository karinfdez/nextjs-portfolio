"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useState, useEffect } from "react";

const navBtn =
  "absolute top-1/2 -translate-y-1/2 z-10 p-3 rounded-full \
   border border-orange-500/50 text-orange-400 \
   bg-[#0b1120]/60 backdrop-blur-sm \
   shadow-[0_2px_10px_rgba(0,0,0,.35)] \
   transition-colors duration-300 \
   hover:bg-orange-500 hover:text-white hover:border-orange-500 \
   focus:outline-none focus:ring-2 focus:ring-orange-500/40 \
   disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-orange-400";

const PrevButton = ({ enabled, onClick }) => (
  <button
    className={`${navBtn} left-2`}
    onClick={onClick}
    disabled={!enabled}
    aria-label="Previous slide"
  >
    ‹
  </button>
);

const NextButton = ({ enabled, onClick }) => (
  <button
    className={`${navBtn} right-2`}
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

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  // useEmblaCarousel is a react hook from embla-carousel-react
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "center", slidesToScroll: 1 });
  
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  
  // Update button states
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);
  
  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
    
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // helper to convert YouTube watch url to embed url
  const getYoutubeEmbed = (url) => {
    if (!url) return "";
    if (url.includes("embed")) return url;
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
                />
              )}
            </div>
          ))}
        </div>
      </div>
      {mediaItems.length > 1 && (
        <>
          <PrevButton enabled={prevBtnEnabled} onClick={scrollPrev} />
          <NextButton enabled={nextBtnEnabled} onClick={scrollNext} />
        </>
      )}
    </div>
  );
}
