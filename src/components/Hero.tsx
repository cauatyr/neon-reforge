import { Button } from "@/components/ui/button";
import { ChevronDown, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { useCinematicImage } from "@/hooks/useCinematicImage";
import ppf1 from "@/assets/ppf-1.jpg";
import ppf2 from "@/assets/ppf-2.jpg";
import ppf3 from "@/assets/ppf-3.jpg";
import ppf4 from "@/assets/ppf-4.jpg";
import ppf5 from "@/assets/ppf-5.jpg";
import ppf6 from "@/assets/ppf-6.jpg";

const heroImages = [
  { src: ppf1, alt: "Aplicação de PPF - proteção de maçaneta" },
  { src: ppf2, alt: "Aplicação de PPF - técnica com espátula" },
  { src: ppf3, alt: "Aplicação de PPF - uso de ferramentas profissionais" },
  { src: ppf4, alt: "Aplicação de PPF - proteção de bordas" },
  { src: ppf5, alt: "Aplicação de PPF - trabalho em superfície interior" },
  { src: ppf6, alt: "Aplicação de PPF - detalhamento com espátula rosa" },
];

const CinematicImageWrapper = ({ image, idx }: { image: typeof heroImages[0]; idx: number }) => {
  // Use hero-specific cinematic animation (BLOCK 1)
  const { ref, isVisible } = useCinematicImage({ effect: 'dual-axis' });
  
  return (
      <div
        ref={ref}
        className={`relative aspect-square overflow-hidden rounded-lg border-2 img-cinematic-hero ${
          isVisible ? 'visible' : ''
        } border-automotive-bronze/40 group hover:scale-[1.02] hover:border-automotive-bronze transition-all duration-300`}
        style={{ transitionDelay: `${idx * 50}ms` }}
      >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      {/* Subtle bottom glow on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-automotive-bronze/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger haptic feedback on mobile
    if ('vibrate' in navigator) {
      setTimeout(() => navigator.vibrate(50), 500);
    }
    setIsLoaded(true);
  }, []);

  const scrollToOffer = () => {
    if ('vibrate' in navigator) {
      navigator.vibrate([30, 20, 30]);
    }
    const offerSection = document.getElementById('oferta');
    offerSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4">
      {/* Animated background elements with system startup */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-automotive-bronze/10 rounded-full blur-[120px] animate-zoom-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-automotive-bronze/10 rounded-full blur-[120px] animate-zoom-pulse" style={{ animationDelay: '1s' }}></div>
        {/* Motion blur horizontal effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-full h-1 top-1/3 bg-gradient-to-r from-transparent via-automotive-bronze to-transparent animate-scan"></div>
          <div className="absolute w-full h-1 top-2/3 bg-gradient-to-r from-transparent via-automotive-bronze to-transparent animate-scan" style={{ animationDelay: '1.5s' }}></div>
        </div>
        {/* Spotlight reveal effect */}
        <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-automotive-white/5 to-transparent transition-opacity duration-1000 ${isLoaded ? 'opacity-100 animate-metal-shine' : 'opacity-0'}`}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 parallax-layer-3">
            <div className="inline-block">
              <h1 className="hero-title text-5xl md:text-6xl lg:text-8xl font-bold mb-2 leading-none text-auto-light-sweep relative">
                <span className="text-automotive-bronze text-glow-bronze relative z-10">PPF</span>
                <span className="text-automotive-white relative z-10"> ESSENCIAL</span>
              </h1>
            </div>
            
            <div className="hero-subtitle space-y-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-automotive-white text-hud-drift">
                Aprenda fazer <span className="text-automotive-bronze font-bold">aplicações de PPF</span> e proteger as partes <span className="text-automotive-bronze font-bold">essenciais</span> do carro.
              </h2>
              <p className="text-xl md:text-2xl italic text-muted-foreground leading-relaxed text-digital-flick">
                <span className="text-automotive-bronze font-semibold">Sem risco, sem retrabalho</span> e com resultado que impressiona o cliente.
              </p>
            </div>

            <Button 
              onClick={scrollToOffer}
              size="lg"
              variant="crystal"
              className="crystal-button rounded-xl font-bold text-lg px-10 py-7 h-auto"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                QUERO APRENDER AGORA
              </span>
            </Button>
            
            <p className="text-lg text-automotive-bronze font-semibold animate-power-pulse">
              ✓ Mesmo quem nunca aplicou consegue aprender rapidamente
            </p>
          </div>

          {/* Right Content - Image Grid */}
          <div className={`grid grid-cols-3 gap-3 transition-all duration-1000 delay-300 parallax-layer-2 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {heroImages.map((image, idx) => (
              <CinematicImageWrapper key={idx} image={image} idx={idx} />
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce parallax-layer-4">
          <ChevronDown className="w-8 h-8 text-automotive-bronze" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
