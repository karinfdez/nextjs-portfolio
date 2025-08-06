"use client";
import NavLink from "./NavLink";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
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
