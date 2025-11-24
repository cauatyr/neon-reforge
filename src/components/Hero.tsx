import { Button } from "@/components/ui/button";
import { ChevronDown, Zap } from "lucide-react";

const Hero = () => {
  const scrollToOffer = () => {
    const offerSection = document.getElementById('oferta');
    offerSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-automotive-red/10 rounded-full blur-[120px] animate-rev"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-automotive-bronze/10 rounded-full blur-[120px] animate-rev" style={{ animationDelay: '1s' }}></div>
        {/* Scanning lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-automotive-red to-transparent animate-scan"></div>
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-block">
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-2 leading-none">
                <span className="text-automotive-red animate-power-pulse text-glow-red">PPF</span>
                <span className="text-automotive-white"> ESSENCIAL</span>
              </h1>
            </div>
            
            <div className="space-y-4">
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
              className="group relative overflow-hidden bg-gradient-to-r from-automotive-red via-automotive-energy to-automotive-red bg-[length:200%_100%] text-white font-bold text-lg px-10 py-7 h-auto hover:scale-105 transition-all duration-500 shadow-[0_0_30px_rgba(220,38,38,0.5)] hover:shadow-[0_0_50px_rgba(220,38,38,0.8)] animate-energy-run"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                QUERO APRENDER AGORA
              </span>
            </Button>
          </div>

          {/* Right Content - Image Grid */}
          <div className="grid grid-cols-3 gap-3 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
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
                className="relative aspect-square overflow-hidden rounded-lg border-2 border-automotive-red/30 group hover:scale-110 hover:border-automotive-red transition-all duration-500 shadow-[0_0_15px_rgba(220,38,38,0.3)]"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <img 
                  src={src} 
                  alt={`PPF Application ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-automotive-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-metal-shine"></div>
              </div>
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
