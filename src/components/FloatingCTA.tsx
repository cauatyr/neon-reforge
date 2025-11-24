import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { useState, useEffect } from "react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('section');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setIsVisible(heroBottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToOffer = () => {
    const offerSection = document.getElementById('oferta');
    offerSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-background via-background to-transparent transition-all duration-300 md:hidden ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <Button
        onClick={scrollToOffer}
        className="w-full group relative overflow-hidden bg-gradient-to-r from-neon-cyan to-neon-blue text-black font-bold text-lg py-6 h-auto animate-border-glow"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          <Zap className="w-5 h-5" />
          GARANTIR VAGA - R$ 67
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </Button>
    </div>
  );
};

export default FloatingCTA;
