"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useLayoutEffect, useRef, useState } from "react";

// Vertical animated dot columns + falling drop from the longest column
const AnimatedDots = ({
  className = "",
  colorClass = "bg-orange-500",
  isClickable = false,
  animateOnHover = false,
}) => {
  const columns = [4, 8]; // second column is the longest
  const router = useRouter();


  const DOT_PX = 8;        // w-2 h-2
  const GAP_PX = 16;       // space-y-4 = 1rem = 16px
  const longest = Math.max(...columns);
  const longestIndex = columns.indexOf(longest);
  const lastDotRevealDelay = 0.3 + (longest - 1) * 0.1; //each dot is revealed 0.1s after the previous one

  // measure the longest column to compute remaining distance to bottom of viewport
  const longestColRef = useRef(null);
  const [fallDistance, setFallDistance] = useState(null);

  useLayoutEffect(() => {
    const calc = () => {
      const el = longestColRef.current;
      if (!el) return;

      const r = el.getBoundingClientRect();
      const startY = r.top + (DOT_PX + GAP_PX) * (longest - 1); // last dot position
      const distance = Math.max(0, window.innerHeight - startY); // to bottom of screen
      setFallDistance(distance);
    };

    calc();
    window.addEventListener("resize", calc);
    window.addEventListener("scroll", calc, { passive: true });
    return () => {
      window.removeEventListener("resize", calc);
      window.removeEventListener("scroll", calc);
    };
  }, [longest]);

  return (
    <div
      onClick={() => isClickable && router.push("/")}
      aria-label="Go to homepage"
      className={`hidden md:flex p-2 ${className} space-x-4 z-10 ${
        animateOnHover ? "hover-animate" : ""
      } ${isClickable ? "cursor-pointer" : ""}`}
    >
      {columns.map((count, colIdx) => {
        const isLongest = colIdx === longestIndex;
        return (
          <div
            key={colIdx}
            ref={isLongest ? longestColRef : null}
            className="relative flex flex-col items-center space-y-4 w-2"
          >
            {Array.from({ length: count }).map((_, i) => (
              <motion.div
                key={`dot-${colIdx}-${i}`}
                className={`w-2 h-2 rounded-full ${colorClass}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease: "easeOut" }}
              />
            ))}

            {/* the animation renders only if this is the longest column and the fall distance is known */}
            {isLongest && fallDistance !== null && (
                  <motion.div
                    className="absolute left-0 right-0 mx-auto"
                    style={{ top: (DOT_PX + GAP_PX) * (count - 1), width: DOT_PX }}
                    initial={{ y: 0, scale: 0.4, opacity: 0 }}
                    animate={{
                      y: fallDistance,
                      scale: [0.4, 1, 1],
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                      delay: lastDotRevealDelay + 0.2 , // offset each drop
                      duration: 3.5,
                      ease: "easeIn",
                      repeat: Infinity,
                      repeatType: "loop",
                      repeatDelay: 15, // pause after all drops
                    }}
                  >
                  <div className={`w-2 h-2 rounded-full ${colorClass}`} />     {/* The drop itself */}
                  </motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AnimatedDots;
