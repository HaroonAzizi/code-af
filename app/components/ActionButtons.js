
'use client'; 

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const ActionButtons = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleMakeOffer = () => {
    window.location.href = 'mailto:hi@haroonazizi.com?subject=Offer for code.af domain&body=Hello Haroon, I would like to make an offer for the code.af domain.';
  };

  useEffect(() => {

    if (typeof window !== 'undefined' && window.location.hash === '#why-choose') {
      const element = document.getElementById('why-choose');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, searchParams]);

  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-12">
   <button
        onClick={handleMakeOffer}
        className="px-8 py-3.5 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-full font-medium text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-300 transform"
      >
        Make Offer →
      </button>
      
      <a
        href="#why-choose"
        className="px-8 py-3.5 border-2 border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 rounded-full font-medium text-white shadow-lg shadow-white/5 hover:shadow-white/10 transition-all duration-300 backdrop-blur-sm text-center"
      >
        Learn More
      </a>
    </div>
  );
};

export default ActionButtons;