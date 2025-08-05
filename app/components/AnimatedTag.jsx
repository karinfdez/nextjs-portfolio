"use client";

import { motion } from "framer-motion";

const AnimatedTag = ({ children, delay = 0, className = "" }) => (
    <motion.span
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className={className}
    whileHover={{
      scale: 1.1,
      boxShadow: "0 0 8px #ff7a00",
      backgroundColor: "#f97316",
      color: "#fff",
      transition: { duration: 0.3 },
    }}
  >
    {children}
  </motion.span>

);

export default AnimatedTag;
