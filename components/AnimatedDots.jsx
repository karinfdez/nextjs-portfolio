"use client";
import { motion } from "framer-motion";

// Vertical animated dot columns
const AnimatedDots = ({ className = "", colorClass = "bg-white" }) => {
  const columns = [4, 8]; // adjust counts as needed

  return (
    <div className={`hidden xl:flex ${className} space-x-4 z-10`}>
      {columns.map((count, colIdx) => (
        <div key={colIdx} className="flex flex-col items-center space-y-4">
          {Array.from({ length: count }).map((_, i) => (
            <motion.div
              key={`dot-${colIdx}-${i}`}
              className={`w-2 h-2 rounded-full ${colorClass}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease: "easeOut" }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedDots;
