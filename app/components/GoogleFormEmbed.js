"use client";

import { useEffect, useState, useRef } from "react";

export default function GoogleFormEmbed({ src }) {
  const [loaded, setLoaded] = useState(false);
  const iframeRef = useRef(null);

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

  return (
    <div className="relative aspect-[640/861] w-full mx-auto">
      {/* Skeleton */}
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-800 rounded-lg flex items-center justify-center text-neutral-400 text-sm">
          Loading form…
        </div>
      )}
      <iframe
        ref={iframeRef}
        src={src}
        className={`h-full w-full rounded-lg bg-white transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer"
        title="Contact Form"
      >
        Loading…
      </iframe>
      {/* Optional dark mode helper: we cannot style inside iframe; filter invert is avoided to preserve brand colors */}
    </div>
  );
}
