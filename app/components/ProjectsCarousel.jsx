"use client";

import Image from "next/image";
import { useCallback, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";

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

const ProjectsCarousel = ({ projects = [] }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start", slidesToScroll: 1 });

  
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  
  useEffect(() => {
    if (!emblaApi) return;
  
    // Subscribe to Embla's select event to update that state whenever the carousel changes
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
  
    emblaApi.on("select", onSelect);
    onSelect();
  
    return () => emblaApi.off("select", onSelect); // clean up
  }, [emblaApi]);

  return (
    <>
      <div className="relative w-full max-w-4xl mx-auto p-6">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-8">
            {projects.map(({ title, cardDescription, image, cardLink }, idx) => (
              <motion.div
                key={idx}
                className="group embla__slide flex-[0_0_280px] md:flex-[0_0_340px] lg:flex-[0_0_360px] bg-gray-800/40 rounded-lg overflow-hidden border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <a href={cardLink ?? "#"} className="block w-full h-full group relative overflow-hidden">
                  {/* Image */}
                  {image && (
                    <Image
                      src={image}
                      alt={title}
                      width={800}
                      height={450}
                      className="object-cover w-full h-72 md:h-80 lg:h-96 transition-transform duration-700 ease-out group-hover:scale-105"
                      unoptimized
                    />
                  )}

                {/* Sliding content (title + description) */}
                <div className="absolute bottom-0 left-0 w-full bg-[#f8f8f8] text-gray-800 transition-all duration-500 transform 
                  md:group-hover:-translate-y-32 md:translate-y-0 
                  px-4 pt-3 pb-4 min-h-[125px]">
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{cardDescription}</p>
                </div>
              </a>
            </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }} // Delay slightly to match with first cards
        >
          <PrevButton enabled={true} onClick={scrollPrev} />
          <NextButton enabled={true} onClick={scrollNext} />
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
