"use client";
// File: pages/index.js
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [copied, setCopied] = useState(false);

  // Your contact details
  const email = "hi@haroonazizi.com";
  const twitterUsername = "az_haroon";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
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
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">
              <span className="text-blue-400">code</span>
              <span className="text-white">.</span>
              <span className="text-blue-500">af</span>
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-gray-300">
              Premium Domain For Sale
            </p>
          </div>

          {/* Domain Info */}
          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-8 w-full max-w-2xl border border-gray-700">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">
              Why choose code.af?
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-blue-400 mr-2"
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
                  className="h-6 w-6 text-blue-400 mr-2"
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
                  className="h-6 w-6 text-blue-400 mr-2"
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
                  className="h-6 w-6 text-blue-400 mr-2"
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
          <div className="bg-blue-900 bg-opacity-30 backdrop-blur-sm rounded-xl p-8 w-full max-w-2xl border border-blue-800">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Interested? Get in touch
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-800 bg-opacity-50 rounded-lg">
                <div className="flex items-center">
                  <svg
                    className="h-5 w-5 text-blue-400 mr-3"
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
                  className="text-sm px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded transition duration-150"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
              <a
                href={`https://x.com/${twitterUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-gray-800 bg-opacity-50 rounded-lg hover:bg-gray-700 transition duration-150"
              >
                <svg
                  className="h-5 w-5 text-blue-400 mr-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span>@{twitterUsername}</span>
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href={`mailto:${email}?subject=Interested%20in%20purchasing%20code.af%20domain`}
            className="px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-full text-xl font-bold transition duration-150 shadow-lg transform hover:-translate-y-1"
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
