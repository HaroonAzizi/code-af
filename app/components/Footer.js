"use client";

import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  const scrollToSection = (href) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-neutral-950 text-white border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold">
                <span className="text-white">code</span>
                <span className="text-blue-400">.af</span>
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Professional web and mobile app development agency based in
              Afghanistan, serving international clients worldwide with
              cutting-edge solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-blue-500/10 hover:bg-blue-500/20 p-2 rounded-lg transition-all hover:scale-110"
              >
                <FaLinkedin className="text-blue-400 text-lg" />
              </a>
              <a
                href="#"
                className="bg-gray-500/10 hover:bg-gray-500/20 p-2 rounded-lg transition-all hover:scale-110"
              >
                <FaGithub className="text-gray-400 text-lg" />
              </a>
              <a
                href="#"
                className="bg-green-500/10 hover:bg-green-500/20 p-2 rounded-lg transition-all hover:scale-110"
              >
                <FaWhatsapp className="text-green-400 text-lg" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white/95">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#services");
                  }}
                  className="text-white/70 hover:text-blue-400 transition-colors"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#services");
                  }}
                  className="text-white/70 hover:text-blue-400 transition-colors"
                >
                  Mobile App Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#services");
                  }}
                  className="text-white/70 hover:text-blue-400 transition-colors"
                >
                  Backend Solutions
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#services");
                  }}
                  className="text-white/70 hover:text-blue-400 transition-colors"
                >
                  Cloud Services
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#services");
                  }}
                  className="text-white/70 hover:text-blue-400 transition-colors"
                >
                  UI/UX Design
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white/95">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#");
                  }}
                  className="text-white/70 hover:text-blue-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#portfolio");
                  }}
                  className="text-white/70 hover:text-blue-400 transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#testimonials");
                  }}
                  className="text-white/70 hover:text-blue-400 transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#contact");
                  }}
                  className="text-white/70 hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-blue-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white/95">
              Get In Touch
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-400 text-sm" />
                <span className="text-white/70">hello@code.af</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-green-400 text-sm" />
                <span className="text-white/70">+93 (0) 700 123 456</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-purple-400 text-sm" />
                <span className="text-white/70">Kabul, Afghanistan</span>
              </div>
            </div>
            <div className="bg-blue-500/10 p-3 rounded-lg border border-blue-500/20">
              <p className="text-blue-300 text-xs font-medium mb-1">
                Ready to start?
              </p>
              <p className="text-white/70 text-xs">
                Get a free consultation for your project today.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-white/60">
              © 2025 code.af • All rights reserved • 🇦🇫 Made with ❤️ in
              Afghanistan
            </div>
            <div className="flex items-center space-x-6 text-sm text-white/60">
              <span>Available for international projects</span>
              <span>•</span>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
