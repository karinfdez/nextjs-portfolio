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
      {(isActive || hovered) && (
        <motion.span
          layoutId="nav-underline"
          className="absolute left-0 right-0 -bottom-1 h-0.5 bg-orange-500 hidden md:block"
          transition={{ type: "spring", stiffness: 350, damping: 35, mass: 0.6 }}
        />
      )}
    </Link>
  );
};

export default NavLink;
