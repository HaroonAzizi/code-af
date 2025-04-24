import { Poppins } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-primary',
});

export const metadata = {
  title: "code.af | Domain For Sale",
  description: "Premium domain code.af is available for purchase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}