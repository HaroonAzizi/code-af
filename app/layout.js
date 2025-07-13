import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-primary",
});

export const metadata = {
  title: "code.af | Web & Mobile App Development Agency",
  description:
    "Professional web and mobile app development agency based in Afghanistan, serving international clients worldwide. Expert developers and designers ready to bring your ideas to life.",
  openGraph: {
    title: "code.af | Web & Mobile App Development Agency",
    description:
      "Professional web and mobile app development agency based in Afghanistan, serving international clients worldwide. Expert developers and designers ready to bring your ideas to life.",
    url: "https://code.af",
    siteName: "code.af",
    images: [
      {
        url: "https://code.af/og-image.png",
        width: 1200,
        height: 630,
        alt: "code.af - Bringing Your Ideas to Life!",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "code.af | Web & Mobile App Development Agency",
    description:
      "Professional web and mobile app development agency based in Afghanistan, serving international clients worldwide. Expert developers and designers ready to bring your ideas to life.",
    images: ["https://code.af/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          defer
          data-domain="code.af"
          src="https://analytics.had.af/js/script.hash.outbound-links.tagged-events.js"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
