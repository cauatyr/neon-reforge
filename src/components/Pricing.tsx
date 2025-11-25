import { Button } from "@/components/ui/button";
import { Check, Lock, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Pricing = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const handleCTAClick = () => {
    // Strong haptic feedback for conversion action
    if ('vibrate' in navigator) {
      navigator.vibrate([100, 50, 100, 50, 100]);
    }
  };
  
  return (
    <section id="oferta" className="py-20 px-4 relative overflow-hidden">
      {/* Darkening gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12 space-y-4">
          <h2 className="cta-title text-4xl md:text-5xl font-bold opacity-0">
            Chegou a Hora de <span className="text-automotive-red text-glow-red">Evoluir</span> Seu Negócio
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Quanto dinheiro você já perdeu por não saber fazer aplicação de PPF?
          </p>
        </div>

        <div 
          ref={ref}
          className={`glass-card p-8 md:p-12 rounded-2xl relative overflow-hidden group transition-all duration-1000 shadow-[0_0_60px_rgba(220,38,38,0.3)] hover:shadow-[0_0_100px_rgba(220,38,38,0.6)] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          {/* LED border animation */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: isVisible ? 1 : 0 }}>
            <rect 
              x="2" 
              y="2" 
              width="calc(100% - 4px)" 
              height="calc(100% - 4px)" 
              rx="16"
              fill="none" 
              stroke="hsl(var(--automotive-red))" 
              strokeWidth="2"
              strokeDasharray="1000"
              strokeDashoffset="1000"
              className={isVisible ? 'animate-led-border-run' : ''}
            />
          </svg>

          <div className="relative z-10 space-y-8">
            {/* Badge */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-3 bg-automotive-red/20 border-2 border-automotive-red px-8 py-4 rounded-full shadow-[0_0_30px_rgba(220,38,38,0.4)]">
                <Zap className="w-6 h-6 text-automotive-red" />
                <span className="text-xl font-bold text-automotive-red">OFERTA ESPECIAL</span>
              </div>
            </div>

            {/* Discount Badge */}
            <div className="text-center">
              <div className="inline-block bg-gradient-to-r from-automotive-red via-automotive-energy to-automotive-red text-white font-bold text-4xl px-12 py-4 rounded-xl transform hover:rotate-0 transition-transform duration-500 shadow-[0_0_40px_rgba(220,38,38,0.6)]" style={{ transform: 'rotate(-3deg)' }}>
                87% OFF
              </div>
            </div>

            {/* Title */}
            <h3 className="text-3xl md:text-4xl font-bold text-center">
              Garanta sua vaga <span className="text-automotive-red">hoje!</span>
            </h3>

            {/* Price */}
            <div className="text-center space-y-3">
              <div className="flex items-center justify-center gap-4">
                <span className="text-2xl text-muted-foreground line-through">De R$ 497</span>
                <span className="text-xl text-automotive-bronze font-semibold">por apenas</span>
              </div>
              <div className="text-7xl md:text-8xl font-bold text-automotive-red animate-power-pulse text-glow-red">
                R$ 67
              </div>
            </div>

            {/* CTA Button - Crystal Motion Tech */}
            <div className="flex justify-center" style={{ animationDelay: '0.2s' }}>
              <Button
                asChild
                size="lg"
                variant="crystal"
                onClick={handleCTAClick}
                className="crystal-button crystal-button-entry rounded-xl font-bold text-xl px-14 py-9 h-auto"
              >
                <a href="https://go.wizoomplay.me/checkout/ppf-essencial-67" target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10 flex items-center gap-3">
                    <Zap className="w-7 h-7" />
                    GARANTIR MINHA VAGA AGORA
                  </span>
                </a>
              </Button>
            </div>

            {/* Security badges */}
            <div className="space-y-3 text-center">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Lock className="w-5 h-5 text-automotive-red" />
                <span>Compra 100% segura e protegida</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Check className="w-5 h-5 text-automotive-bronze" />
                <span>Acesso imediato após aprovação do pagamento</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
