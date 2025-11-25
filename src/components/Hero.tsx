import { Button } from "@/components/ui/button";
import { ChevronDown, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { useCinematicImage } from "@/hooks/useCinematicImage";

const heroImages = [
  { src: "https://arquivos.wizoomplay.com/images/soltos/PPF%201.png", alt: "Aplicação de PPF em detalhe" },
  { src: "https://arquivos.wizoomplay.com/images/soltos/PPF%202.png", alt: "Aplicação de PPF em concha de porta" },
  { src: "https://arquivos.wizoomplay.com/images/soltos/PPF%203%20.png", alt: "Aplicação de PPF em multimídia" },
  { src: "https://arquivos.wizoomplay.com/images/soltos/PPF%204.png", alt: "Aplicação de PPF em quina de porta" },
  { src: "https://arquivos.wizoomplay.com/images/soltos/PPF%205%20.png", alt: "Aplicação de PPF em black piano" },
  { src: "https://arquivos.wizoomplay.com/images/soltos/PPF%206.png", alt: "Kit de ferramentas para PPF" },
  { src: "https://arquivos.wizoomplay.com/images/soltos/PPF%207.png", alt: "Aplicação de PPF em soleira" },
  { src: "https://arquivos.wizoomplay.com/images/soltos/PPF%208.png", alt: "Detalhe de aplicação PPF" },
  { src: "https://arquivos.wizoomplay.com/images/soltos/PPF%209.png", alt: "Aplicação de PPF em porta-malas" },
];

const CinematicImageWrapper = ({ image, idx }: { image: typeof heroImages[0]; idx: number }) => {
  // Use dual-axis for hero images (GRUPO A)
  const { ref, isVisible } = useCinematicImage({ effect: 'dual-axis' });
  
  return (
    <div
      ref={ref}
      className={`relative aspect-square overflow-hidden rounded-lg border-2 img-cinematic img-dual-axis ${
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
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-automotive-red/10 rounded-full blur-[120px] animate-zoom-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-automotive-bronze/10 rounded-full blur-[120px] animate-zoom-pulse" style={{ animationDelay: '1s' }}></div>
        {/* Motion blur horizontal effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-full h-1 top-1/3 bg-gradient-to-r from-transparent via-automotive-red to-transparent animate-scan"></div>
          <div className="absolute w-full h-1 top-2/3 bg-gradient-to-r from-transparent via-automotive-bronze to-transparent animate-scan" style={{ animationDelay: '1.5s' }}></div>
        </div>
        {/* Spotlight reveal effect */}
        <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-automotive-white/5 to-transparent transition-opacity duration-1000 ${isLoaded ? 'opacity-100 animate-metal-shine' : 'opacity-0'}`}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <h1 className="hero-title text-5xl md:text-6xl lg:text-8xl font-bold mb-2 leading-none">
                <span className="text-automotive-red animate-power-pulse text-glow-red">PPF</span>
                <span className="text-automotive-white"> ESSENCIAL</span>
              </h1>
            </div>
            
            <div className="hero-subtitle space-y-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-automotive-white">
                Aprenda fazer <span className="text-automotive-red font-bold">aplicações de PPF</span> e proteger as partes <span className="text-automotive-bronze font-bold">essenciais</span> do carro.
              </h2>
              <p className="text-xl md:text-2xl italic text-muted-foreground leading-relaxed">
                <span className="text-automotive-bronze font-semibold">Sem risco, sem retrabalho</span> e com resultado que impressiona o cliente.
              </p>
            </div>

            <Button 
              onClick={scrollToOffer}
              size="lg"
              variant="crystal"
              className="crystal-button crystal-button-entry rounded-xl font-bold text-lg px-10 py-7 h-auto"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                QUERO APRENDER AGORA
              </span>
            </Button>
          </div>

          {/* Right Content - Image Grid */}
          <div className={`grid grid-cols-3 gap-3 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {heroImages.map((image, idx) => (
              <CinematicImageWrapper key={idx} image={image} idx={idx} />
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-automotive-red" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
