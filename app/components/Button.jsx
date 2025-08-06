"use client";

import { motion } from "framer-motion";

const Button = ({
  label,
  href,
  target,
  type,
  rel,
  onClick,
  borderColor = "border-white",
  textColor = "text-white",
  className = "",
}) => {
  // decide which element to render
  const Component = href ? motion.a : motion.button;
  const extraProps = href
    ? { href, target, rel }
    : { type: type ? type : "button", onClick };

  return (
    <Component
      {...extraProps}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
      className={`inline-block px-8 py-2 border-2 ${borderColor} bg-transparent transition-colors duration-200 ${textColor} ${className}`}
    >
      {label}
    </Component>
  );
};

export default Button;
