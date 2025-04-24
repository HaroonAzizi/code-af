"use client";

import Head from "next/head";
import { useState, useEffect } from "react";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);

  const redColors = [
    "text-red-400",
    "text-red-500",
    "text-red-600",
    "text-red-500",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % redColors.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const email = "hi@haroonazizi.com";
  const twitterUsername = "az_haroon";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 to-black text-white">
      <Head>
        <title>code.af | Domain For Sale</title>
        <meta
          name="description"
          content="Premium domain code.af is available for purchase"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="flex flex-col items-center justify-center space-y-12">
          {/* Domain Logo/Name */}
          <div className="text-center relative">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">
              <span
                className={`transition-colors duration-700 ${redColors[colorIndex]}`}
              >
                code
              </span>
              <span className="text-rose-200">.</span>
              <span className="text-red-500 animate-pulse">af</span>
            </h1>
            <div className="absolute -top-6 right-0 md:right-10 transform rotate-12">
              <span className="bg-red-600 text-white text-xs md:text-sm px-4 py-1 rounded-md font-bold shadow-lg border border-red-400 animate-pulse">
                FOR SALE
              </span>
            </div>
            <p className="mt-4 text-2xl md:text-2xl text-gray-300">
              Premium Domain For Sale
            </p>
          </div>

          {/* Domain Info */}
          <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-xl p-8 w-full max-w-2xl border border-red-900 shadow-lg shadow-red-900/20">
            <h2 className="text-2xl font-bold mb-6 text-red-500">
              Why choose code.af?
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-red-400 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Short, memorable, and tech-focused domain name</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-red-400 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>
                  Perfect for coding businesses, schools, or developer
                  portfolios
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-red-400 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Unique TLD (.af) stands out from common extensions</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-red-400 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Build your brand with a premium domain</span>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="bg-gradient-to-r from-red-950 to-grey-950 rounded-xl p-8 w-full max-w-2xl border border-red-800 shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Interested? Get in touch
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-black bg-opacity-40 rounded-lg backdrop-blur-sm">
                <div className="flex items-center">
                  <svg
                    className="h-5 w-5 text-red-400 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>{email}</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="text-sm px-3 py-1 bg-red-600 hover:bg-red-700 rounded transition duration-150"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
              <a
                href={`https://x.com/${twitterUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-black bg-opacity-50 rounded-lg hover:bg-gray-900 transition duration-150"
              >
                <svg
                  className="h-5 w-5 text-red-400 mr-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span>@{twitterUsername}</span>
              </a>
              <a
                href="https://haroonazizi.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-black bg-opacity-50 rounded-lg hover:bg-gray-900 transition duration-150"
              >
                <svg
                  className="h-5 w-5 text-red-400 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"
                  />
                </svg>
                <span>www.haroonazizi.com</span>
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href={`mailto:${email}?subject=Interested%20in%20purchasing%20code.af%20domain`}
            className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-full text-xl font-bold transition duration-300 shadow-lg transform hover:-translate-y-1"
          >
            Make an Offer
          </a>
        </div>
      </main>

      <footer className="text-center py-8 text-gray-400">
        <p>© {new Date().getFullYear()} • All rights reserved</p>
      </footer>
    </div>
  );
}
