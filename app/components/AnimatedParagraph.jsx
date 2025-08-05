"use client";

import { motion } from "framer-motion";

/**
 * AnimatedParagraph fades & slides its children in on initial render.
 * Use delay prop to stagger multiple paragraphs.
 */
const AnimatedParagraph = ({ children, className = "", delay = 0 }) => (
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.p>
);

export default AnimatedParagraph;
