import { Suspense } from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import WhyChooseSection from "./components/WhyChooseSection";
import PortfolioSection from "./components/PortfolioSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactCard from "./components/ContactCard";
import Footer from "./components/Footer";

const LoadingFallback = () => (
  <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
    <div className="text-white text-xl animate-pulse">code.af</div>
  </div>
);

export default function Home() {
  return (
    <main>
      <Navigation />
      <Suspense fallback={<LoadingFallback />}>
        <HeroSection />
        <WhyChooseSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactCard />
        <Footer />
      </Suspense>
    </main>
  );
}
