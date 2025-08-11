"use client";
import { motion } from "framer-motion";


export default function FallingDrop({
  x = 120,
  size = 10,
  color = "#38bdf8",
  duration = 2.0,
  delay = 1,
}) {
  return (
    <div style={{ position: "relative", height: 400, overflow: "hidden" }}>
        <motion.div
      style={{
        position: "absolute",
        top: "90px",  // adjust so it's right under the last dot
        left: "72px", // adjust so it's aligned with the dot column
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: "#f97316", // same orange as your dots
      }}
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: 400, opacity: 0 }} // falls and fades
      transition={{
        duration: 1.5,
        ease: "easeIn",
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0.3, // short pause before next drop
      }}
    />
    </div>
  );
}
