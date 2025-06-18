"use client";
import React from "react";
import { FaCode, FaMobile, FaGlobe, FaRocket } from "react-icons/fa";

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white overflow-hidden flex items-center justify-center px-4 relative pt-16">
      {/* Animated background stuff */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400 rounded-full filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-indigo-500 rounded-full filter blur-3xl opacity-20 animate-float-delay"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-cyan-400 rounded-full filter blur-3xl opacity-25 animate-float"></div>
      </div>

      {/* Floating code snippets */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-blue-400/30 font-mono text-sm animate-code-flow">
          {"<div className='web-dev'>"}
        </div>
        <div
          className="absolute top-40 right-20 text-cyan-400/30 font-mono text-sm animate-code-flow"
          style={{ animationDelay: "2s" }}
        >
          {"const mobile = () => { }"}
        </div>
        <div
          className="absolute bottom-40 left-20 text-indigo-400/30 font-mono text-sm animate-code-flow"
          style={{ animationDelay: "4s" }}
        >
          {"import React from 'react'"}
        </div>
      </div>

      <div className="flex flex-col items-center text-center space-y-8 max-w-6xl relative z-10">
        {/* Badge - Responsive */}
        <div className="bg-gradient-to-r from-blue-900/50 to-indigo-900/50 px-3 sm:px-6 py-2 rounded-full border border-blue-500/30 backdrop-blur-sm">
          <span className="text-blue-300 text-xs sm:text-sm font-medium">
            <span className="hidden sm:inline">
              🇦🇫 Based in Afghanistan • Serving Worldwide
            </span>
            <span className="sm:hidden">🇦🇫 Afghanistan • Worldwide</span>
          </span>
        </div>

        {/* Main heading with typing effect */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-white/95">We bring your</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent animate-gradient">
              ideas to life
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Professional web and mobile app development agency with a team of
            expert developers and designers, ready to transform your vision into
            reality.
          </p>
        </div>

        {/* Tech icons */}
        <div className="flex items-center space-x-4 sm:space-x-8 py-6">
          <div className="bg-blue-500/10 p-2 sm:p-3 rounded-lg hover:bg-blue-500/20 transition-all hover:scale-110 animate-pulse-glow">
            <FaCode className="text-blue-400 text-xl sm:text-2xl" />
          </div>
          <div
            className="bg-indigo-500/10 p-2 sm:p-3 rounded-lg hover:bg-indigo-500/20 transition-all hover:scale-110 animate-pulse-glow"
            style={{ animationDelay: "0.5s" }}
          >
            <FaMobile className="text-indigo-400 text-xl sm:text-2xl" />
          </div>
          <div
            className="bg-cyan-500/10 p-2 sm:p-3 rounded-lg hover:bg-cyan-500/20 transition-all hover:scale-110 animate-pulse-glow"
            style={{ animationDelay: "1s" }}
          >
            <FaGlobe className="text-cyan-400 text-xl sm:text-2xl" />
          </div>
          <div
            className="bg-purple-500/10 p-2 sm:p-3 rounded-lg hover:bg-purple-500/20 transition-all hover:scale-110 animate-pulse-glow"
            style={{ animationDelay: "1.5s" }}
          >
            <FaRocket className="text-purple-400 text-xl sm:text-2xl" />
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <button
            onClick={() => scrollToSection("#contact")}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-white transition-all hover:scale-105 hover-lift"
          >
            Start Your Project
          </button>
          <button
            onClick={() => scrollToSection("#portfolio")}
            className="border border-blue-500/30 hover:border-blue-400 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-white/90 hover:text-white transition-all hover:bg-blue-500/10"
          >
            View Our Work
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 pt-12 w-full max-w-2xl">
          <div className="text-center">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-400">
              50+
            </div>
            <div className="text-white/60 text-xs sm:text-sm">
              Projects Delivered
            </div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-indigo-400">
              25+
            </div>
            <div className="text-white/60 text-xs sm:text-sm">
              Happy Clients
            </div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400">
              3+
            </div>
            <div className="text-white/60 text-xs sm:text-sm">
              Years Experience
            </div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-400">
              24/7
            </div>
            <div className="text-white/60 text-xs sm:text-sm">Support</div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 -right-20 w-72 h-px bg-gradient-to-r from-blue-400/0 via-blue-400/50 to-blue-400/0"></div>
      <div className="absolute bottom-20 -left-20 w-72 h-px bg-gradient-to-r from-indigo-400/0 via-indigo-400/50 to-indigo-400/0"></div>
    </div>
  );
};

export default HeroSection;
