"use client";

import { motion } from "framer-motion";

const AnimatedSlideDown = ({ className = "", children, delay = 0 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);                   

export default AnimatedSlideDown;
