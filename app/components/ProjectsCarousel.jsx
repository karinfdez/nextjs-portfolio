"use client";

import Image from "next/image";
import { useCallback, useEffect } from "react";
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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start", slidesToScroll: 1 });

  
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  

  return (
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
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <a href={cardLink ?? "#"} className="block w-full">
                {image && (
                  <Image
                    src={image}
                    alt={title}
                    width={800}
                    height={450}
                    className="object-cover w-full h-48 sm:h-56 transition-transform duration-300 group-hover:scale-105"
                    unoptimized
                  />
                )}
                <div className="p-4 text-left space-y-2 bg-white text-gray-900">
                  <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 min-h-20">
                    {cardDescription}
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
      <PrevButton enabled={true} onClick={scrollPrev} />
      <NextButton enabled={true} onClick={scrollNext} />
    </div>
  );
};

export default ProjectsCarousel;
