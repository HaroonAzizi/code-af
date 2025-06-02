"use client";
import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const TestimonialsSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const testimonials = [
    {
      name: "Dr. Khybar Azizi",
      role: "Founder, Azizi Dental Clinic",
      country: "🇦🇫 Afghanistan",
      rating: 5,
      text: "code.af delivered an exceptional clinic manager app for our clinic. The app is very user friendly and the team is very responsive. I highly recommend code.af for any project. ",
      project: "Dental Clinic Manager App",
    },
    {
      name: "Muhammad Tahir",
      role: "Founder, SpotlightLeaks",
      country: "🇵🇰 Pakistan",
      rating: 5,
      text: "I was unsure of giving code.af my website project. But turns out, doing that was one of the best decisions of my life. Code.af gave spotlightleaks.com a new life! Thank you code.af for the amazing website.",
      project: "Blog Website",
    },
    // {
    //   name: "Maria Rodriguez",
    //   role: "Director, HealthCare Plus",
    //   country: "🇪🇸 Spain",
    //   rating: 5,
    //   text: "The healthcare dashboard they developed streamlined our operations significantly. The UI/UX is intuitive and the backend is robust. Outstanding work!",
    //   project: "Healthcare Dashboard",
    // },
    // {
    //   name: "James Wilson",
    //   role: "CTO, EduLearn",
    //   country: "🇬🇧 UK",
    //   rating: 5,
    //   text: "code.af transformed our educational vision into a powerful learning management system. Their technical skills and communication throughout the project were excellent.",
    //   project: "Learning Platform",
    // },
    // {
    //   name: "Yuki Tanaka",
    //   role: "Product Manager, FoodHub",
    //   country: "🇯🇵 Japan",
    //   rating: 5,
    //   text: "From concept to deployment, code.af delivered a flawless food delivery app. Real-time tracking, payment integration - everything works perfectly!",
    //   project: "Food Delivery App",
    // },
    {
      name: "Shahid Qurieshi",
      role: "I-Lab, Kardan University",
      country: "🇮🇳 India",
      rating: 5,
      text: "Their high understanding of new technology and frameworks gave the programming contest app an unmatched speed and breath-taking look. We thank code.af team for their hard work.",
      project: "Programming Contest App",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative min-h-screen bg-neutral-950 text-white overflow-hidden py-20 px-4"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-green-500/10 rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl opacity-20 animate-float-delay"></div>
        <div className="absolute top-1/2 left-1/6 w-24 h-24 bg-purple-500/10 rounded-full blur-3xl opacity-20 animate-float"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white/95">What Our </span>
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            Don&apos;t just take our word for it - hear from the clients
            we&apos;ve helped succeed worldwide
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-neutral-900/80 to-neutral-950 p-6 rounded-xl border border-neutral-800 hover:border-green-400/40 transition-all duration-300 group hover-lift relative"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 text-green-400/20 group-hover:text-green-400/40 transition-colors">
                <FaQuoteLeft className="text-2xl" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm mr-1" />
                ))}
                <span className="text-white/60 text-sm ml-2">
                  ({testimonial.rating}.0)
                </span>
              </div>

              {/* Testimonial text */}
              <p className="text-white/80 mb-6 italic leading-relaxed text-sm">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Project */}
              <div className="mb-4">
                <span className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-xs font-medium">
                  {testimonial.project}
                </span>
              </div>

              {/* Client info */}
              <div className="border-t border-neutral-800 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white/95 font-semibold text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-white/60 text-xs">{testimonial.role}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-white/70 text-xs">
                      {testimonial.country}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 bg-gradient-to-r from-green-900/30 to-blue-900/30 p-8 rounded-2xl border border-green-500/20 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                98%
              </div>
              <div className="text-white/70 text-sm">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                50+
              </div>
              <div className="text-white/70 text-sm">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                25+
              </div>
              <div className="text-white/70 text-sm">Countries Served</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                24/7
              </div>
              <div className="text-white/70 text-sm">Support Available</div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white/95">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            Let&apos;s discuss your project and create something amazing
            together
          </p>
          <button
            onClick={() => scrollToSection("#contact")}
            className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 px-8 py-3 rounded-lg font-semibold text-white transition-all hover:scale-105 hover-lift"
          >
            Start Your Project Today
          </button>
        </div>
      </div>

      {/* Decorative lines */}
      <div className="absolute top-1/4 -right-20 w-72 h-px bg-gradient-to-r from-green-400/0 via-green-400/50 to-green-400/0"></div>
      <div className="absolute bottom-1/4 -left-20 w-72 h-px bg-gradient-to-r from-blue-400/0 via-blue-400/50 to-blue-400/0"></div>
    </section>
  );
};

export default TestimonialsSection;
