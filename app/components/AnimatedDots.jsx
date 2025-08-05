"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
// Vertical animated dot columns
const AnimatedDots = ({ className = "", colorClass = "bg-white", isClickable = false }) => {
  const columns = [4, 8]; // adjust counts as needed
  const router = useRouter();

  return (
    <div
      onClick={() => isClickable && router.push("/")}
      aria-label="Go to homepage"
      className={`hidden md:flex p-2 ${className} space-x-4 z-10 ${isClickable ? "cursor-pointer" : ""}`}
    >
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
