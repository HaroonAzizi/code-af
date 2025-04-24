import React from 'react';

const WhyChooseSection = () => {
  return (
    <section 
    
    
    id="why-choose" 
    className=" scroll-mt-20 relative min-h-screen bg-neutral-950 text-white overflow-hidden flex flex-col items-center justify-center px-4 ">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/3 w-56 h-56 bg-indigo-500/10 rounded-full blur-3xl opacity-20 animate-float-delay"></div>
      </div>

      <div className="w-full max-w-6xl px-4 py-12 md:py-16 relative z-10">
        {/* Centered heading with enhanced gradient */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight tracking-tighter">
            <span className="text-white/95">Why choose </span>
            <span className="bg-gradient-to-br from-blue-400 to-blue-600 bg-clip-text text-transparent">
              code
            </span>
            <span className="text-white/95">.af</span>
          </h1>
         
        </div>
        
        {/* Features grid with enhanced hover effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <LightningIcon />,
              title: "Lightning Fast",
              description: "Short, memorable domain perfect for instant brand recognition in the tech community"
            },
            {
              icon: <CodingIcon />,
              title: "Tech Focused",
              description: "Ideal for coding platforms, developer tools, or tech education resources"
            },
            {
              icon: <StarIcon />,
              title: "Unique TLD",
              description: ".af stands out from generic extensions like .com or .io"
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-b from-neutral-900/80 to-neutral-950 p-6 rounded-xl border border-neutral-800 hover:border-blue-400/40 transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-500/10 p-3 rounded-lg mr-4 group-hover:bg-blue-500/20 transition-all group-hover:rotate-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white/95">{feature.title}</h3>
              </div>
              <p className="text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Enhanced benefits section */}
        <div className="mt-20 bg-gradient-to-br from-blue-900/30 via-blue-950/40 to-indigo-900/30 p-8 rounded-2xl border border-blue-500/20 text-center backdrop-blur-sm">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white/95">
            Premium <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Domain Benefits</span>
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-white/90">
            {[
              "Short & memorable",
              "Tech-focused identity",
              "Standout TLD (.af)",
              "Instant credibility",
              "SEO advantage",
              "Brand authority",
              "Easy to type",
              "Global appeal"
            ].map((benefit, index) => (
              <li 
                key={index} 
                className="flex items-center justify-center py-2 hover:text-blue-300 transition-colors duration-200"
              >
                <CheckIcon className="mr-3 text-blue-400 min-w-5 flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 -right-20 w-72 h-px bg-gradient-to-r from-blue-400/0 via-blue-400/50 to-blue-400/0"></div>
      <div className="absolute bottom-20 -left-20 w-72 h-px bg-gradient-to-r from-blue-400/0 via-blue-400/50 to-blue-400/0"></div>
    </section>
  );
};

// Enhanced icon components with consistent styling
const IconWrapper = ({ children, className = "" }) => (
  <svg 
    className={`w-6 h-6 text-blue-400 flex-shrink-0 ${className}`} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    viewBox="0 0 24 24"
  >
    {children}
  </svg>
);

const LightningIcon = () => (
  <IconWrapper>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </IconWrapper>
);

const CodingIcon = () => (
  <IconWrapper>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </IconWrapper>
);

const StarIcon = () => (
  <IconWrapper className="text-amber-400">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </IconWrapper>
);

const CheckIcon = () => (
  <IconWrapper className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </IconWrapper>
);

export default WhyChooseSection;