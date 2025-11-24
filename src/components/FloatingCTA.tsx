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
      className={`fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-background via-background/95 to-transparent transition-all duration-500 md:hidden ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <Button
        onClick={scrollToOffer}
        className="w-full group relative overflow-hidden bg-gradient-to-r from-automotive-red via-automotive-energy to-automotive-red bg-[length:200%_100%] text-white font-bold text-lg py-7 h-auto shadow-[0_0_30px_rgba(220,38,38,0.6)] animate-energy-run"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          <Zap className="w-5 h-5 animate-rev" />
          GARANTIR VAGA - R$ 67
        </span>
      </Button>
    </div>
  );
};

export default FloatingCTA;
