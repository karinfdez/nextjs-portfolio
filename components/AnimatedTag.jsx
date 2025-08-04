"use client";

import { motion } from "framer-motion";

const AnimatedTag = ({ children, delay = 0, className = "" }) => (
  <motion.span
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className={className}
  >
    {children}
  </motion.span>
);

export default AnimatedTag;
