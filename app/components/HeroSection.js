import PremiumBadge from './PremiumBadge';
import DomainTitle from './DomainTitle';
import DomainDescription from './DomainDescription';
import ActionButtons from './ActionButtons';
import DecorativeLines from './DecorativeLines';


const HeroSection = () => {
  return (
    <div className="min-h-screen   bg-neutral-950 text-white overflow-hidden flex items-center justify-center px-4 relative">
      <div className="flex flex-col items-center text-center space-y-2 max-w-4xl relative z-10">
                <div className="absolute top-0 left-0 w-32 h-32 bg-blue-400 rounded-full filter blur-3xl opacity-70 animate-float1"></div>
        <PremiumBadge />
        <DomainTitle />
        <DomainDescription />
        <ActionButtons />
      </div>
      <DecorativeLines />

    </div>
  );
};

export default HeroSection;