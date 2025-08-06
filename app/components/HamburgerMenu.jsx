"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  // Handle navigation with delay
  const handleNavigation = (e) => {
    // Don't immediately close the menu
    e.preventDefault();
    const href = e.currentTarget.href;
    
    // Keep the menu open during transition
    setTimeout(() => {
      window.location.href = href;
    }, 300); // Match the transition duration
  };
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.mobile-menu-container')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className="relative block md:hidden mobile-menu-container">
      {/* Hamburger Icon with Animation */}
      <button
        onClick={toggleMenu}
        className="z-50 relative flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
        aria-label="Menu"
      >
        <div 
          className={`w-6 h-0.5 bg-orange-500 rounded-full transition-all duration-300 ease-in-out ${isOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}
        />
        <div 
          className={`w-6 h-0.5 bg-orange-500 rounded-full transition-all duration-300 ease-in-out mt-1.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
        />
        <div 
          className={`w-6 h-0.5 bg-orange-500 rounded-full transition-all duration-300 ease-in-out mt-1.5 ${isOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}
        />
      </button>

      {/* Menu Items */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white z-40 transition-all duration-300 ease-in-out transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'}`}
        style={{ height: '100vh' }}
      >
        <div className="flex flex-col items-center justify-center h-full min-h-screen">
          <ul className="flex flex-col items-center space-y-10 text-2xl font-medium">
            <li>
              <Link href="/" className="text-black hover:text-orange-500 transition-colors duration-300" onClick={handleNavigation}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-black hover:text-orange-500 transition-colors duration-300" onClick={handleNavigation}>
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-black hover:text-orange-500 transition-colors duration-300" onClick={handleNavigation}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-black hover:text-orange-500 transition-colors duration-300" onClick={handleNavigation}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
