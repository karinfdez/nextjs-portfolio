"use client";

import { motion } from "framer-motion";

const AnimatedSlideUp = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className={className}
  >
    {children}
  </motion.div>
);                   

export default AnimatedSlideUp;

