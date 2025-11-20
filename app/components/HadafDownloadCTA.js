"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function HadafDownloadCTA() {
  const cardRef = useRef(null);
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    // Simple entrance animation via Web Animations API
    el.animate(
      [
        { opacity: 0, transform: "translateY(30px) scale(.96)" },
        { opacity: 1, transform: "translateY(0) scale(1)" },
      ],
      { duration: 600, easing: "cubic-bezier(.4,0,.2,1)", fill: "forwards" }
    );
  }, []);

  return (
    <section
      ref={cardRef}
      className="relative mx-auto max-w-5xl mt-8 mb-24 overflow-hidden rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.7)]"
      aria-labelledby="hadaf-cta-title"
    >
      {/* Animated gradient aura */}
      <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-overlay">
        <div className="absolute -top-20 -left-32 h-72 w-72 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 blur-3xl animate-pulse" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 blur-3xl animate-pulse [animation-delay:1.2s]" />
      </div>
      <div className="relative px-8 py-12 sm:px-16 sm:py-16">
        <div className="flex flex-col sm:flex-row sm:items-center gap-10">
          <div className="flex-shrink-0 flex items-center justify-center">
            <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 shadow-lg shadow-blue-600/30 overflow-hidden animate-float ring-2 ring-blue-600/20">
              <Image
                src="/hadaf-ios.png"
                alt="Hadaf App Icon"
                fill
                sizes="(max-width:768px) 80px, 96px"
                priority
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h2
              id="hadaf-cta-title"
              className="text-2xl sm:text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500"
            >
              Learn with Hadaf Anywhere
            </h2>
            <p className="mt-4 text-neutral-400 max-w-xl mx-auto sm:mx-0 text-sm sm:text-base leading-relaxed">
              Learn, grow and prepare for global opportunities. Download the
              Hadaf app for a tailored learning journey or visit the website for
              full resources. Afghan talent—unlocked.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center sm:justify-start">
              <a
                href="https://apps.apple.com/de/app/hadaf-afghan-learning/id6751640431?l=en-GB"
                target="_blank"
                className="group relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-7 py-3 font-semibold text-white shadow-lg shadow-blue-600/30 hover:shadow-xl hover:from-blue-700 hover:to-cyan-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
              >
                <span className="group-hover:translate-x-0.5 transition-transform">
                  Download the App
                </span>
              </a>
              <a
                href="https://had.af"
                target="_blank"
                className="inline-flex items-center justify-center rounded-xl border border-neutral-700 bg-neutral-900/60 px-7 py-3 font-semibold text-neutral-200 hover:bg-neutral-800 hover:border-neutral-600 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
