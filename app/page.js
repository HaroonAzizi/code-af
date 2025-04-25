import { Suspense } from "react";
import ContactCard from "./components/ContactCard";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import WhyChooseSection from "./components/WhyChooseSection";

// Create a loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
    <div className="text-white text-xl">code.af</div>
  </div>
);

export default function Home() {
  return (
    <main>
      <Suspense fallback={<LoadingFallback />}>
        <HeroSection />
        <WhyChooseSection />
        <ContactCard />
        <Footer />
      </Suspense>
    </main>
  );
}
