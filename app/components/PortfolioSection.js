import React from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaMobile,
  FaDesktop,
} from "react-icons/fa";

const PortfolioSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: "🛒",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      type: "web",
      link: "#",
    },
    {
      title: "Mobile Banking App",
      description:
        "Secure mobile banking application with biometric authentication and real-time transactions.",
      image: "🏦",
      tech: ["React Native", "Express", "PostgreSQL"],
      type: "mobile",
      link: "#",
    },
    {
      title: "Healthcare Dashboard",
      description:
        "Patient management system with appointment scheduling and medical records tracking.",
      image: "🏥",
      tech: ["Next.js", "TypeScript", "Prisma"],
      type: "web",
      link: "#",
    },
    {
      title: "Food Delivery App",
      description:
        "On-demand food delivery platform with real-time tracking and payment processing.",
      image: "🍕",
      tech: ["React Native", "Firebase", "Google Maps"],
      type: "mobile",
      link: "#",
    },
    {
      title: "Learning Management System",
      description:
        "Educational platform with video streaming, quizzes, and progress tracking for students.",
      image: "📚",
      tech: ["React", "Node.js", "AWS", "WebRTC"],
      type: "web",
      link: "#",
    },
    {
      title: "Crypto Trading Platform",
      description:
        "Cryptocurrency trading platform with real-time charts and portfolio management.",
      image: "₿",
      tech: ["Next.js", "WebSocket", "Charts.js"],
      type: "web",
      link: "#",
    },
  ];

  return (
    <section
      id="portfolio"
      className="relative min-h-screen bg-neutral-900 text-white overflow-hidden py-20 px-4"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl opacity-20 animate-float-delay"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white/95">Our </span>
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            Discover some of our recent projects that showcase our expertise in
            web and mobile development
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-neutral-800/80 to-neutral-900 rounded-xl overflow-hidden border border-neutral-700 hover:border-purple-400/40 transition-all duration-300 group hover-lift"
            >
              {/* Project image/icon */}
              <div className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 p-8 text-center">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
                <div className="flex justify-center">
                  {project.type === "web" ? (
                    <FaDesktop className="text-purple-400 text-xl" />
                  ) : (
                    <FaMobile className="text-cyan-400 text-xl" />
                  )}
                </div>
              </div>

              {/* Project details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white/95 mb-3 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/70 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-neutral-700/50 text-white/80 px-2 py-1 rounded text-xs font-medium hover:bg-purple-500/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex justify-between items-center">
                  <button className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors text-sm">
                    <FaGithub />
                    <span>Code</span>
                  </button>
                  <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 p-8 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white/95">
              Ready to Start Your Project?
            </h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Let's bring your ideas to life with our expertise in modern web
              and mobile development
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 px-8 py-3 rounded-lg font-semibold text-white transition-all hover:scale-105">
                Get Quote
              </button>
              <button className="border border-purple-500/30 hover:border-purple-400 px-8 py-3 rounded-lg font-semibold text-white/90 hover:text-white transition-all hover:bg-purple-500/10">
                View All Projects
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative lines */}
      <div className="absolute top-1/3 -left-20 w-72 h-px bg-gradient-to-r from-purple-400/0 via-purple-400/50 to-purple-400/0"></div>
      <div className="absolute bottom-1/3 -right-20 w-72 h-px bg-gradient-to-r from-cyan-400/0 via-cyan-400/50 to-cyan-400/0"></div>
    </section>
  );
};

export default PortfolioSection;
