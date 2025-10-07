"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-lg border border-white/10 ${
        scrolled
          ? "bg-neutral-900/70 backdrop-blur-2xl shadow-[0_4px_24px_0_rgba(0,0,0,0.18)]"
          : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#");
              }}
              className="text-2xl font-bold"
            >
              <span className="text-white">code</span>
              <span className="text-blue-400">.af</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-white/80 hover:text-white transition-colors duration-200 font-medium relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button
              onClick={() => scrollToSection("#contact")}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-6 py-2 rounded-lg font-semibold text-white transition-all hover:scale-105"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile humburger button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white/80 hover:text-white transition-colors p-2"
            >
              {isOpen ? (
                <FaTimes className="text-xl" />
              ) : (
                <FaBars className="text-xl" />
              )}
            </button>
          </div>
        </div>

        {/* For moMobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-neutral-900/70 backdrop-blur-2xl border-t border-white/10 shadow-[0_4px_24px_0_rgba(0,0,0,0.18)]">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="block px-3 py-2 text-white/80 hover:text-white hover:bg-neutral-800/50 rounded-md transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={() => {
                  scrollToSection("#contact");
                  setIsOpen(false);
                }}
                className="w-full mt-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-6 py-2 rounded-lg font-semibold text-white transition-all"
              >
                Get Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
