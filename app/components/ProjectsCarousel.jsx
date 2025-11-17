"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";

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

const ProjectsCarousel = ({ projects = [] }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start", slidesToScroll: 1 });

  
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  
  // Update button states
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);
  
  useEffect(() => {
    if (!emblaApi) return;
  
    // Subscribe to Embla's select event to update states whenever the carousel changes
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    
    // Initialize button states
    onSelect();
  
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <>
      <div className="relative w-full max-w-4xl mx-auto p-6">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4 md:gap-8">
            {projects.map(({ title, cardDescription, image, cardLink }, idx) => (
              <motion.div
                key={idx}
                className="group embla__slide flex-[0_0_280px] md:flex-[0_0_340px] lg:flex-[0_0_360px] bg-gray-800/40 rounded-lg overflow-hidden border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
              <Link
                href={cardLink ?? "#"}
                className="block w-full h-full group relative overflow-hidden rounded-lg"
                scroll={false}
              >
                {image && (
                  <>
                    <Image
                      src={image}
                      alt={title}
                      width={800}
                      height={450}
                      className="object-cover w-full h-72 md:h-80 lg:h-96 transition-transform duration-700 ease-out group-hover:scale-105"
                      priority={idx === 0}
                    />

                    {/* Top shadow fade */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-0"></div>
                  </>
                )}

              {/* Sliding content (title + description) */}
              <div
                className="absolute bottom-0 left-0 w-full bg-white/70 dark:bg-[#0b1120]/80 backdrop-blur-sm text-gray-900 dark:text-gray-200
                  transition-all duration-500 transform md:group-hover:-translate-y-32 md:translate-y-0 
                  px-4 pt-3 pb-4 min-h-[125px] border-t border-white/20 dark:border-gray-700/40"
              >
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">{cardDescription}</p>
              </div>
            </Link>

            </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }} // Delay slightly to match with first cards
        >
          <PrevButton enabled={prevBtnEnabled} onClick={scrollPrev} />
          <NextButton enabled={nextBtnEnabled} onClick={scrollNext} />
        </motion.div>
      </div>
    {/* Pagination */}
    {emblaApi && (
      <div className="mt-4 flex justify-center gap-2">
      {projects.map((_, index) => (
        <button
          key={index}
            onClick={() => emblaApi.scrollTo(index)}
            className={`w-2 h-2 rounded-full ${
              selectedIndex === index ? "bg-orange-500" : "bg-gray-500/40"
            } transition-all`}
          />
        ))}
        </div>
      )}
    </>
  );
};

export default ProjectsCarousel;
