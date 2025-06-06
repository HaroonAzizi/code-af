"use client";
import React, { useState } from "react";
import {
  FaMobile,
  FaDesktop,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const PortfolioSection = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "Clinic Manager",
      description:
        "A full-stack clinic management application with patient records, appointment scheduling, and billing. Built using NextJs and already used in multiple dental clinics.",
      image: "🏥",
      tech: ["Next.js", "Prisma", "TailwindCSS", "SQLite"],
      type: "web",
    },
    {
      title: "Typing Speed Test",
      description:
        "Test your typing speed and accuracy with this interactive app. Features real-time feedback, customizable tests, and detailed performance analytics.",
      image: "⌨️",
      tech: ["Next.js", "TailwindCSS"],
      type: "web",
    },
    {
      title: "Aadat: Task and Habit Tracker",
      description:
        "A responsive task management application with real-time updates and GitHub-like contribution graph for tracking habits and productivity.",
      image: "📝",
      tech: ["React", "Supabase"],
      type: "web",
    },
    {
      title: "Unite Video Conferencing",
      description:
        "A video conferencing app that helps you connect with family and loved ones. Video calls in Unite don't have limits like Zoom and Google Meet.",
      image: "📹",
      tech: ["Next.js", "Prisma", "Node.js"],
      type: "web",
    },
    {
      title: "Attendance Plus",
      description:
        "FaceID enabled attendance system for classrooms and workplaces. Uses computer vision for facial recognition-based attendance tracking.",
      image: "📸",
      tech: ["Python", "OpenCV", "Pandas"],
      type: "web",
    },
    {
      title: "Programming Contest App",
      description:
        "A web app for programming contests on campus networks without internet connection. Fully implemented and used in Kardan University.",
      image: "🏆",
      tech: ["React", "Django", "PostgreSQL"],
      type: "web",
    },
    {
      title: "E-Commerce Platform",
      description:
        "A comprehensive e-commerce solution with inventory management, payment processing, and admin dashboard. Handles 10,000+ products with real-time analytics.",
      image: "🛒",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      type: "web",
    },
    // {
    //   title: "FinTech Mobile App",
    //   description:
    //     "A secure mobile banking application with biometric authentication, money transfers, and investment tracking. Built for iOS and Android platforms.",
    //   image: "💳",
    //   tech: ["React Native", "Node.js", "PostgreSQL", "AWS"],
    //   type: "mobile",
    // },
    {
      title: "Healthcare Management System",
      description:
        "Cloud-based healthcare platform for hospitals with patient management, telemedicine features, and AI-powered diagnosis assistance.",
      image: "🩺",
      tech: ["Vue.js", "Express.js", "MySQL", "Docker"],
      type: "web",
    },
    {
      title: "Learning Management System",
      description:
        "Educational platform with course creation, student progress tracking, and virtual classroom capabilities. Used by 500+ students daily.",
      image: "📚",
      tech: ["Next.js", "GraphQL", "PostgreSQL", "Redis"],
      type: "web",
    },
    // {
    //   title: "IoT Dashboard",
    //   description:
    //     "Real-time monitoring dashboard for IoT devices with data visualization, alerts, and predictive analytics for industrial automation.",
    //   image: "📊",
    //   tech: ["React", "Python", "InfluxDB", "WebSocket"],
    //   type: "web",
    // },
    {
      title: "Food Delivery App",
      description:
        "Cross-platform mobile app with real-time order tracking, payment integration, and restaurant management features for food delivery service.",
      image: "🍕",
      tech: ["React Native", "Firebase", "Node.js", "Google Maps"],
      type: "mobile",
    },
  ];

  // Show only first 3 projects initially, or all if showAll is true
  const displayedProjects = showAll ? projects : projects.slice(0, 3);
  const remainingCount = projects.length - 3;

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
            Discover our recent projects that showcase our expertise in web and
            mobile development - featuring real applications used by clients
            worldwide.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
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
                  {project.type === "mobile" ? (
                    <FaMobile className="text-purple-400 text-xl" />
                  ) : (
                    <FaDesktop className="text-purple-400 text-xl" />
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
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Show Less Button */}
        {projects.length > 3 && (
          <div className="text-center mt-12 mb-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group bg-gradient-to-r from-purple-600/20 to-cyan-600/20 hover:from-purple-600/30 hover:to-cyan-600/30 border border-purple-500/30 hover:border-purple-400/50 px-8 py-4 rounded-lg font-semibold text-white transition-all hover:scale-105 flex items-center mx-auto space-x-2 backdrop-blur-sm"
            >
              <span>
                {showAll ? "Show Less" : `Show ${remainingCount} More Projects`}
              </span>
              {showAll ? (
                <FaChevronUp className="text-sm group-hover:translate-y-[-2px] transition-transform" />
              ) : (
                <FaChevronDown className="text-sm group-hover:translate-y-[2px] transition-transform" />
              )}
            </button>
          </div>
        )}

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 p-8 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white/95">
              Ready to Start Your Project?
            </h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Let&apos;s bring your ideas to life with our expertise in modern
              web and mobile development. We&apos;ve helped businesses across
              various industries achieve their digital goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 px-8 py-3 rounded-lg font-semibold text-white transition-all hover:scale-105"
              >
                Get Quote
              </button>
              {/* <a
                href="https://haroonazizi.com/portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-purple-500/30 hover:border-purple-400 px-8 py-3 rounded-lg font-semibold text-white/90 hover:text-white transition-all hover:bg-purple-500/10"
              >
                View All Projects
              </a> */}
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
