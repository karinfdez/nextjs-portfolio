"use client";
import NavLink from "./NavLink";

const links = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
  
  
];

const Navigation = () => (
  <nav className="space-x-6">
    {links.map(({ href, label }) => (
      <span key={href}>
        <NavLink href={href}>{label}</NavLink>
      </span>
    ))}
  </nav>
);

export default Navigation;
