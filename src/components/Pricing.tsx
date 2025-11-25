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
    <section id="oferta" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 space-y-4 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            Chegou a Hora de <span className="text-automotive-red text-glow-red">Evoluir</span> Seu Negócio
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Quanto dinheiro você já perdeu por não saber fazer aplicação de PPF?
          </p>
        </div>

        <div 
          ref={ref}
          className={`glass-card p-8 md:p-12 rounded-2xl relative overflow-hidden group transition-all duration-1000 shadow-[0_0_60px_rgba(220,38,38,0.3)] hover:shadow-[0_0_100px_rgba(220,38,38,0.6)] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          {/* Subtle border */}
          <div className="absolute inset-0 border-2 border-automotive-red/40 rounded-2xl"></div>

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

            {/* CTA Button - Premium Professional */}
            <div className="flex justify-center">
              <Button
                asChild
                size="lg"
                onClick={handleCTAClick}
                className="premium-button premium-button-entry group relative overflow-hidden bg-gradient-to-r from-automotive-red via-automotive-energy to-automotive-red text-white font-bold text-xl px-14 py-9 h-auto transition-all duration-300 hover:shadow-[0_15px_55px_rgba(220,38,38,0.8)] border-2 border-automotive-red/70"
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
