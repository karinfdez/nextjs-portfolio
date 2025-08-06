"use client";

import NavLink from "./NavLink";

const links = [
  { href: "/", label: "Home", mobileOnly: true },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const Navigation = () => (
  <nav className="space-x-6 hidden md:block">
    {links.map(({ href, label, mobileOnly }) => (
      <span key={href} className={mobileOnly ? "md:hidden" : ""}>
        <NavLink href={href}>{label}</NavLink>
      </span>
    ))}
  </nav>
);

export default Navigation;
