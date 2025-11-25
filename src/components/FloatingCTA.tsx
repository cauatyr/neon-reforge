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
    // Haptic feedback on mobile
    if ('vibrate' in navigator) {
      navigator.vibrate([50, 30, 50]);
    }
    const offerSection = document.getElementById('oferta');
    offerSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-background via-background/95 to-transparent transition-all duration-500 md:hidden ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="flex flex-col items-center gap-2">
        <Button
          onClick={scrollToOffer}
          size="lg"
          variant="crystal"
          className="crystal-button w-full rounded-xl font-bold text-lg py-7 h-auto"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            <Zap className="w-5 h-5" />
            GARANTIR VAGA - R$ 97
          </span>
        </Button>
        <p className="text-xs text-white/80 text-center">
          Mesmo quem nunca aplicou antes consegue aprender rapidamente.
        </p>
      </div>
    </div>
  );
};

export default FloatingCTA;
