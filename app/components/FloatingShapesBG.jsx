'use client';
import { motion } from 'framer-motion';

const FloatingShapes = () => {
  const float = {
    animate: {
      y: [0, -10, 0],
      rotate: [0, 6, 0],
      transition: { duration: 10, repeat: Infinity, ease: 'easeInOut' }
    }
  };

  return (
    <div
      className="pointer-events-none absolute inset-0 -z-0 max-w-[1700px] mx-auto"
      aria-hidden="true"
    >
      {/* Orange soft ring (top-left) */}
      <motion.div
        className="absolute top-10 md:top-52 lg:top-52 left-4 xl:left-12"
        variants={float}
        animate="animate"
      >
        <svg width="220" height="220" viewBox="0 0 220 220" className="opacity-20">
          <circle cx="110" cy="110" r="80" fill="none" className="stroke-[3] stroke-orange-500/60" />
          <circle cx="110" cy="110" r="105" fill="none" className="stroke-[1.5] stroke-orange-500/50" />
        </svg>
      </motion.div>

      {/* Orange triangle (center-right) */}
      <motion.div
        className="absolute top-1/4 lg:top-1/2 right-10 3xl:right-28"
        variants={float}
        animate="animate"
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }} 
      >
        <svg width="180" height="160" viewBox="0 0 180 160" className="opacity-30">
          <polygon
            points="90,10 170,150 10,150"
            fill="none"
            className="stroke-[2] stroke-orange-500/70"
          />
        </svg>
      </motion.div>

      {/* Orange hexagon (bottom-left) */}
      <motion.div
        className="absolute bottom-10 lg:bottom-20 left-16 3xl:left-28"
        variants={float} 
        animate="animate"
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }} // different tempo
      >
        <svg width="160" height="160" viewBox="0 0 160 160" className="opacity-15">
          <path
            d="M80 10 L140 45 L140 115 L80 150 L20 115 L20 45 Z"
            fill="none"
            className="stroke-[2] stroke-orange-500/80"
          />
        </svg>
      </motion.div>

      {/* Soft blurred blob (bonus accent, top-right) */}
      <motion.div
        className="absolute -top-24 right-[-60px] w-[380px] h-[380px] rounded-full bg-orange-500/10 blur-[120px]"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}

export default FloatingShapes;