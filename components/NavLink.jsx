"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";

/**
 * Animated navigation link that shows a shared underline when active or hovered.
 */
const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      className="relative px-3 py-2"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
      <motion.span
        layoutId="nav-underline"
        className="absolute left-0 right-0 -bottom-1 h-0.5 hidden md:block"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ 
          scaleX: isActive || hovered ? 1 : 0,
          opacity: isActive || hovered ? 1 : 0,
          backgroundColor: isActive || hovered ? "#f97316" : "transparent"
        }}
        transition={{ 
          duration: 0.5,
          ease: "easeInOut"
        }}
      />
    </Link>
  );
};

export default NavLink;
