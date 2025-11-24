import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToOffer = () => {
    const offerSection = document.getElementById('oferta');
    offerSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-block">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2">
                <span className="text-neon-cyan animate-neon-pulse">PPF</span>
                <span className="text-white"> ESSENCIAL</span>
              </h1>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
                Aprenda fazer <span className="text-neon-cyan">aplicações de PPF</span> e proteger as partes <span className="text-neon-purple">essenciais</span> do carro.
              </h2>
              <p className="text-xl md:text-2xl italic text-muted-foreground">
                <span className="text-neon-green">Sem risco, sem retrabalho</span> e com resultado que impressiona o cliente.
              </p>
            </div>

            <Button 
              onClick={scrollToOffer}
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-neon-cyan to-neon-blue text-black font-bold text-lg px-8 py-6 h-auto hover:scale-105 transition-all duration-300 animate-border-glow"
            >
              <span className="relative z-10">QUERO APRENDER AGORA</span>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </div>

          {/* Right Content - Image Grid */}
          <div className="grid grid-cols-3 gap-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {[
              "https://arquivos.wizoomplay.com/images/soltos/PPF%201.png",
              "https://arquivos.wizoomplay.com/images/soltos/PPF%202.png",
              "https://arquivos.wizoomplay.com/images/soltos/PPF%203%20.png",
              "https://arquivos.wizoomplay.com/images/soltos/PPF%204.png",
              "https://arquivos.wizoomplay.com/images/soltos/PPF%205%20.png",
              "https://arquivos.wizoomplay.com/images/soltos/PPF%206.png",
              "https://arquivos.wizoomplay.com/images/soltos/PPF%207.png",
              "https://arquivos.wizoomplay.com/images/soltos/PPF%208.png",
              "https://arquivos.wizoomplay.com/images/soltos/PPF%209.png",
            ].map((src, idx) => (
              <div 
                key={idx} 
                className="relative aspect-square overflow-hidden rounded-lg neon-border group hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <img 
                  src={src} 
                  alt={`PPF Application ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-neon-cyan" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
