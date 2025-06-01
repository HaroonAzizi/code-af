"use client";

import { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiCheckCircle,
  FiXCircle,
} from "react-icons/fi";
import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";
import { emailService } from "../utils/emailjs";

export default function ContactCard() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage("");

    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      project_type: formData.project || "Not specified",
      budget_range: formData.budget || "Not specified",
      message: formData.message,
      to_name: "Code.af Team",
    };

    // Send email using EmailService
    const result = await emailService.sendEmail(templateParams);

    if (result.success) {
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        project: "",
        budget: "",
        message: "",
      });
    } else {
      setSubmitStatus("error");
      setErrorMessage(result.error);
    }

    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen py-20 px-4 bg-neutral-950 text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white/95">Let&apos;s Build Something </span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            Ready to turn your ideas into reality? Get in touch with our expert
            team for a free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-b from-neutral-900/80 to-neutral-950 p-8 rounded-xl border border-neutral-800">
            <h3 className="text-2xl font-bold mb-6 text-white/95">
              Start Your Project
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg text-white placeholder-white/40 focus:border-blue-400 focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg text-white placeholder-white/40 focus:border-blue-400 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Project Type
                  </label>
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg text-white focus:border-blue-400 focus:outline-none transition-colors"
                  >
                    <option value="">Select project type</option>
                    <option value="web-app">Web Application</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="website">Website</option>
                    <option value="ecommerce">E-Commerce</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg text-white focus:border-blue-400 focus:outline-none transition-colors"
                  >
                    <option value="">Select budget range</option>
                    <option value="50-499">$50 - $499</option>
                    <option value="500-1999">$500 - $1999</option>
                    <option value="2000-4999">$2000 - $4999</option>
                    <option value="5000+">$5000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Project Description *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg text-white placeholder-white/40 focus:border-blue-400 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project, goals, and requirements..."
                />
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 flex items-center">
                  <FiCheckCircle className="text-green-400 text-xl mr-3" />
                  <div>
                    <p className="text-green-400 font-medium">
                      Message sent successfully!
                    </p>
                    <p className="text-white/70 text-sm">
                      We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 flex items-center">
                  <FiXCircle className="text-red-400 text-xl mr-3" />
                  <div>
                    <p className="text-red-400 font-medium">
                      Failed to send message
                    </p>
                    <p className="text-white/70 text-sm">{errorMessage}</p>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 rounded-lg font-semibold text-white transition-all flex items-center justify-center ${
                  isSubmitting
                    ? "bg-neutral-600 cursor-not-allowed opacity-50"
                    : submitStatus === "success"
                    ? "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 hover:scale-105"
                    : submitStatus === "error"
                    ? "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 hover:scale-105"
                    : "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 hover:scale-105"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white/30 border-t-white mr-2"></div>
                    <span>Sending...</span>
                  </>
                ) : submitStatus === "success" ? (
                  <>
                    <FiCheckCircle className="mr-2" />
                    Sent Successfully
                  </>
                ) : submitStatus === "error" ? (
                  <>
                    <FiXCircle className="mr-2" />
                    Try Again
                  </>
                ) : (
                  <>
                    <FiSend className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-b from-neutral-900/80 to-neutral-950 p-8 rounded-xl border border-neutral-800">
              <h3 className="text-2xl font-bold mb-6 text-white/95">
                Get In Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/10 p-3 rounded-lg">
                    <FiMail className="text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-white/95 font-semibold mb-1">Email</h4>
                    <p className="text-white/70 hover:text-white">
                      <a href="mailto:hello@code.af">hello@code.af</a>
                    </p>
                    <p className="text-white/70 hover:text-white">
                      <a href="mailto:projects@code.af">projects@code.af</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-500/10 p-3 rounded-lg">
                    <FiPhone className="text-green-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-white/95 font-semibold mb-1">Phone</h4>
                    <p className="text-white/70 hover:text-white">
                      <a href="tel:+93700123456">+93 (0) 790 087 137</a>
                    </p>
                    <p className="text-white/60 text-sm">
                      Available 9 AM - 8 PM (AFT)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500/10 p-3 rounded-lg">
                    <FiMapPin className="text-purple-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-white/95 font-semibold mb-1">
                      Location
                    </h4>
                    <p className="text-white/70">
                      2nd St. Prozha e Taimani, Kabul
                    </p>
                    <p className="text-white/60 text-sm">
                      🇦🇫 Serving clients worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-b from-neutral-900/80 to-neutral-950 p-8 rounded-xl border border-neutral-800">
              <h3 className="text-xl font-bold mb-6 text-white/95">
                Connect With Us
              </h3>

              <div className="flex space-x-4">
                <a
                  href="https://wa.me/93790087137"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500/10 hover:bg-green-500/20 p-3 rounded-lg transition-all hover:scale-110 group"
                >
                  <FaWhatsapp className="text-green-400 text-xl group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://www.linkedin.com/company/code-af/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500/10 hover:bg-blue-500/20 p-3 rounded-lg transition-all hover:scale-110 group"
                >
                  <FaLinkedin className="text-blue-400 text-xl group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://www.instagram.com/codedotaf/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10 hover:from-purple-500/20 hover:via-pink-500/20 hover:to-orange-500/20 p-3 rounded-lg transition-all hover:scale-110 group"
                >
                  <FaInstagram
                    className="text-xl group-hover:scale-110 transition-transform"
                    style={{
                      background:
                        "linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  />
                </a>
              </div>

              <div className="mt-6 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <p className="text-blue-300 text-sm font-medium mb-2">
                  Quick Response Guarantee
                </p>
                <p className="text-white/70 text-sm">
                  We respond to all inquiries within 24 hours. For urgent
                  projects, reach out via WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
