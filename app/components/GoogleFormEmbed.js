"use client";

import { useEffect, useState, useRef, useMemo } from "react";

// Props:
// - src: base Google Form URL
// - forcedLocale: optional language code (e.g. 'en', 'en-GB') to append as hl= param
export default function GoogleFormEmbed({ src, forcedLocale = "en" }) {
  const [loaded, setLoaded] = useState(false);
  const iframeRef = useRef(null);
  const wrapperRef = useRef(null);
  const [scale, setScale] = useState(1);

  // Base dimensions Google Form typically renders at (from embed attributes)
  const BASE_W = 640;
  const BASE_H = 861;

  useEffect(() => {
    const computeScale = () => {
      if (!wrapperRef.current) return;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      // Provide some padding margins so not flush to edges
      const horizontalPadding = vw < 768 ? 24 : 64; // px
      const verticalPadding = vw < 768 ? 24 : 96; // px
      const maxWidth = vw - horizontalPadding;
      const maxHeight = vh - verticalPadding;
      const widthScale = maxWidth / BASE_W;
      const heightScale = maxHeight / BASE_H;
      const nextScale = Math.min(1, widthScale, heightScale);
      setScale(nextScale < 0.3 ? 0.3 : nextScale); // clamp minimal readability
    };
    computeScale();
    window.addEventListener("resize", computeScale);
    return () => window.removeEventListener("resize", computeScale);
  }, []);

  useEffect(() => {
    const handleLoad = () => {
      setLoaded(true);
      // Track analytics event if available (Vercel Analytics custom event)
      try {
        window.va?.track?.("google_form_loaded");
      } catch (_) {}
    };
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener("load", handleLoad);
    }
    return () => iframe && iframe.removeEventListener("load", handleLoad);
  }, []);

  // Build final src with hl param forcing language if not present
  const finalSrc = useMemo(() => {
    if (!src) return src;
    if (/([?&])hl=/.test(src)) return src; // already has language
    const join = src.includes("?") ? "&" : "?";
    return `${src}${join}hl=${encodeURIComponent(forcedLocale)}`;
  }, [src, forcedLocale]);

  return (
    <div
      ref={wrapperRef}
      className="relative w-full mx-auto flex justify-center"
    >
      {/* Skeleton */}
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-800 rounded-lg flex items-center justify-center text-neutral-400 text-sm">
          Loading form…
        </div>
      )}
      <div
        style={{
          width: BASE_W,
          height: BASE_H,
          transform: `scale(${scale})`,
          transformOrigin: "top center",
          transition: "transform 300ms cubic-bezier(.4,0,.2,1)",
        }}
        className={`rounded-lg overflow-hidden ${
          loaded ? "opacity-100" : "opacity-0"
        } forced-dark-form`}
      >
        <iframe
          ref={iframeRef}
          src={finalSrc}
          className="h-full w-full"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer"
          title="Contact Form"
        >
          Loading…
        </iframe>
      </div>
      {/* Optional dark mode helper: we cannot style inside iframe; filter invert is avoided to preserve brand colors */}
      <style jsx>{`
        /* Force dark appearance by inverting light form, then hue shifting.
           This WILL distort some brand colors (especially blues). Adjust coefficients as needed. */
        .forced-dark-form iframe {
          filter: invert(0.92) hue-rotate(180deg) contrast(0.9) brightness(0.85)
            saturate(0.9);
        }
        /* If user prefers light scheme we can disable (optional). */
        @media (prefers-color-scheme: light) {
          .forced-dark-form iframe {
            filter: invert(0.05) hue-rotate(0deg) contrast(1) brightness(1);
          }
        }
        /* Keep skeleton sized proportionally during scale */
        .forced-dark-form {
          will-change: transform;
        }
      `}</style>
    </div>
  );
}
