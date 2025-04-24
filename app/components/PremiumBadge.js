const PremiumBadge = () => (
  <div className="relative group mb-2">
    <div className="flex items-center justify-center space-x-2">
      <span className="font-medium text-xl text-white/90 font-primary tracking-wide">
        Premium Domain For
      </span>
      <div className="relative ">
        <span className="
          relative z-10 bg-neutral-950 text-white text-xl px-4 py-1.5 
          rounded-xl font-bold border border-blue-500 shadow-md
          flex items-center justify-center animate-pulse
        ">
          <span className="bg-gradient-to-r flex justify-center items-center from-blue-500 via-blue-500 to-blue-600 bg-clip-text text-transparent tracking-wide font-primary animate-pulse">
            SALE
          </span>
        </span>
      </div>
    </div>
    <div className="absolute bottom-0 left-1/2 h-px w-32 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent -translate-x-1/2"></div>
  </div>
);

export default PremiumBadge;