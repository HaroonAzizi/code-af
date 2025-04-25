"use client";

import { useState } from "react";
import { FiMail, FiCopy, FiCheck } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";

export default function ContactCard() {
  const [copied, setCopied] = useState(false);

  const email = "hi@haroonazizi.com";
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full min-h-[70vh] py-12 px-4 flex justify-center bg-neutral-950 text-white ">
      <div className="w-full max-w-xl">
        <div className="bg-gradient-to-br from-blue-900/30 via-blue-950/40 to-indigo-900/30 p-6 rounded-xl border border-blue-500/20 backdrop-blur-sm">
          <h3 className="text-xl font-bold mb-3 text-white/95 text-center">
            Get In Touch
          </h3>
          <p className="text-white/90 text-sm text-center mb-5">
            Contact the owner to purchase this premium domain
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="https://x.com/az_haroon"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[150px] flex items-center justify-center p-3 bg-blue-800/20 hover:bg-blue-700/30 rounded-lg border border-blue-500/20"
            >
              <FaXTwitter className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-white/90 text-sm">@az_haroon</span>
            </a>

            <a
              href="https://haroonazizi.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[150px] flex items-center justify-center p-3 bg-blue-800/20 hover:bg-blue-700/30 rounded-lg border border-blue-500/20"
            >
              <TfiWorld className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-white/90 text-sm">haroonazizi.com</span>
            </a>
          </div>

          <div className="flex items-center justify-between px-4 py-3 bg-blue-800/20 rounded-lg border border-blue-500/20">
            <div className="flex items-center">
              <MdOutlineAlternateEmail className="w-5 h-5 text-blue-400 mr-3" />
              <span className="text-white/90 text-sm">hi@haroonazizi.com</span>
            </div>
            <button
              onClick={handleCopyEmail}
              className="flex items-center text-xs px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded-md"
            >
              {copied ? (
                <>
                  <FiCheck className="mr-1" /> Copied
                </>
              ) : (
                <>
                  <FiCopy className="mr-1" /> Copy
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
