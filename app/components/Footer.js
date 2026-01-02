"use client";

import {
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaInstagram,
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
      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4 md:space-y-5">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold">
                <span className="text-white">code</span>
                <span className="text-blue-400">.af</span>
              </span>
            </div>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              Professional web and mobile app development agency based in
              Afghanistan, serving international clients worldwide with
              cutting-edge solutions.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="https://www.linkedin.com/company/code-af/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500/10 hover:bg-blue-500/20 p-2 sm:p-3 rounded-lg transition-all hover:scale-110"
              >
                <FaLinkedin className="text-blue-400 text-lg sm:text-xl" />
              </a>
              <a
                href="https://wa.me/93790087137"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500/10 hover:bg-green-500/20 p-2 sm:p-3 rounded-lg transition-all hover:scale-110"
              >
                <FaWhatsapp className="text-green-400 text-lg sm:text-xl" />
              </a>
              <a
                href="https://www.instagram.com/codedotaf/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10 hover:from-purple-500/20 hover:via-pink-500/20 hover:to-orange-500/20 p-2 sm:p-3 rounded-lg transition-all hover:scale-110 group relative"
              >
                <FaInstagram
                  className="text-lg sm:text-xl"
                  style={{
                    background:
                      "linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4 md:space-y-5">
            <h3 className="text-lg sm:text-xl font-semibold text-white/95">
              Services
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#services");
                  }}
                  className="text-white/70 hover:text-blue-400 transition-colors block py-1"
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
                  className="text-white/70 hover:text-blue-400 transition-colors block py-1"
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
                  className="text-white/70 hover:text-blue-400 transition-colors block py-1"
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
                  className="text-white/70 hover:text-blue-400 transition-colors block py-1"
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
                  className="text-white/70 hover:text-blue-400 transition-colors block py-1"
                >
                  UI/UX Design
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 md:space-y-5">
            <h3 className="text-lg sm:text-xl font-semibold text-white/95">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#");
                  }}
                  className="text-white/70 hover:text-blue-400 transition-colors block py-1"
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
                  className="text-white/70 hover:text-blue-400 transition-colors block py-1"
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
                  className="text-white/70 hover:text-blue-400 transition-colors block py-1"
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
                  className="text-white/70 hover:text-blue-400 transition-colors block py-1"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-blue-400 transition-colors block py-1"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 md:space-y-5">
            <h3 className="text-lg sm:text-xl font-semibold text-white/95">
              Get In Touch
            </h3>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
              <div className="flex items-start space-x-3">
                <FaEnvelope className="text-blue-400 text-sm mt-1 flex-shrink-0" />
                <span className="text-white/70 hover:text-white break-all">
                  <a href="mailto:hello@code.af">hello@code.af</a>
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <FaPhone className="text-green-400 text-sm mt-1 flex-shrink-0" />
                <span className="text-white/70 hover:text-white">
                  <a href="tel:+93790087137">+93 (0) 790 087 137</a>
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-purple-400 text-sm mt-1 flex-shrink-0" />
                <span className="text-white/70 leading-relaxed">
                  2nd St. Prozha e Taimani, Kabul
                </span>
              </div>
            </div>
            <div className="bg-blue-500/10 p-3 sm:p-4 rounded-lg border border-blue-500/20">
              <p className="text-blue-300 text-xs sm:text-sm font-medium mb-1">
                Ready to start?
              </p>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                Get a free consultation for your project today.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
            <div className="text-sm sm:text-base text-white/60 order-2 md:order-1">
              <div className="mb-2 md:mb-0">
                © 2026 code.af • All rights reserved
              </div>
              <div className="text-xs sm:text-sm">
                🇦🇫 Made with ❤️ in Afghanistan
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm sm:text-base text-white/60 order-1 md:order-2">
              <span>Available for international projects</span>
              <span className="hidden sm:inline">•</span>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
