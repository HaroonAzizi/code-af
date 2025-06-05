import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaMobile,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
} from "react-icons/fa";

const WhyChooseSection = () => {
  return (
    <section
      id="services"
      className="scroll-mt-20 relative min-h-screen bg-neutral-950 text-white overflow-hidden flex flex-col items-center justify-center px-4"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/3 w-56 h-56 bg-indigo-500/10 rounded-full blur-3xl opacity-20 animate-float-delay"></div>
      </div>

      <div className="w-full max-w-6xl px-4 py-12 md:py-16 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight tracking-tighter mb-6">
            <span className="text-white/95">Our </span>
            <span className="bg-gradient-to-br from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            We specialize in cutting-edge technologies to deliver exceptional
            digital solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: <FaReact className="text-2xl" />,
              title: "Web Development",
              description:
                "Modern, responsive websites using React, Next.js, and the latest web technologies",
              color: "blue",
            },
            {
              icon: <FaMobile className="text-2xl" />,
              title: "Mobile Apps",
              description:
                "Native and cross-platform mobile applications for iOS and Android",
              color: "indigo",
            },
            {
              icon: <FaDatabase className="text-2xl" />,
              title: "Backend Solutions",
              description:
                "Scalable server architectures, APIs, and database design",
              color: "cyan",
            },
            {
              icon: <FaCloud className="text-2xl" />,
              title: "Cloud Services",
              description:
                "Cloud deployment, DevOps, and infrastructure management",
              color: "purple",
            },
            {
              icon: <FaNodeJs className="text-2xl" />,
              title: "Full-Stack Development",
              description: "End-to-end development from frontend to backend",
              color: "green",
            },
            {
              icon: <FaShieldAlt className="text-2xl" />,
              title: "Security & Performance",
              description: "Secure, optimized applications with best practices",
              color: "amber",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-neutral-900/80 to-neutral-950 p-6 rounded-xl border border-neutral-800 hover:border-blue-400/40 transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 hover-lift"
            >
              <div className="flex items-center mb-4">
                <div
                  className={`bg-${service.color}-500/10 p-3 rounded-lg mr-4 group-hover:bg-${service.color}-500/20 transition-all group-hover:scale-110`}
                >
                  <div className={`text-${service.color}-400`}>
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white/95">
                  {service.title}
                </h3>
              </div>
              <p className="text-white/80">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Technologies section */}
        <div className="bg-gradient-to-br from-blue-900/30 via-blue-950/40 to-indigo-900/30 p-8 rounded-2xl border border-blue-500/20 text-center backdrop-blur-sm">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white/95">
            Technologies We{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Master
            </span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 mb-8">
            {[
              { name: "React", icon: "⚛️" },
              { name: "Next.js", icon: "▲" },
              { name: "Node.js", icon: "💚" },
              { name: "Python", icon: "🐍" },
              { name: "React Native", icon: "📱" },
              { name: "TypeScript", icon: "🔷" },
              { name: "MongoDB", icon: "🍃" },
              { name: "PostgreSQL", icon: "🐘" },
              { name: "AWS", icon: "☁️" },
              { name: "Docker", icon: "🐳" },
              { name: "GraphQL", icon: "◉" },
              { name: "Tailwind", icon: "🎨" },
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-neutral-800/50 p-3 sm:p-4 rounded-lg hover:bg-neutral-700/50 transition-all hover:scale-105 cursor-pointer text-center"
              >
                <div className="text-xl sm:text-2xl mb-1 sm:mb-2">
                  {tech.icon}
                </div>
                <div className="text-white/90 text-xs sm:text-sm font-medium">
                  {tech.name}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-white/90">
            {[
              "Modern frameworks & libraries",
              "Scalable cloud architecture",
              "Mobile-first development",
              "Performance optimization",
              "Security best practices",
              "Continuous integration & deployment",
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-start sm:items-center py-3 sm:py-2 hover:text-blue-300 transition-colors duration-200"
              >
                <CheckIcon className="mr-3 text-blue-400 min-w-5 flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-left sm:text-center leading-relaxed">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 -right-20 w-72 h-px bg-gradient-to-r from-blue-400/0 via-blue-400/50 to-blue-400/0"></div>
      <div className="absolute bottom-20 -left-20 w-72 h-px bg-gradient-to-r from-blue-400/0 via-blue-400/50 to-blue-400/0"></div>
    </section>
  );
};

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-blue-400 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default WhyChooseSection;
