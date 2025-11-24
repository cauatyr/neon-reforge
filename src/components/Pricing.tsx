import { Button } from "@/components/ui/button";
import { Check, Lock, Zap } from "lucide-react";

const Pricing = () => {
  return (
    <section id="oferta" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 space-y-4 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            Chegou a Hora de <span className="text-neon-cyan">Evoluir</span> Seu Negócio
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Quanto dinheiro você já perdeu por não saber fazer aplicação de PPF?
          </p>
        </div>

        <div className="glass-card p-8 md:p-12 rounded-2xl relative overflow-hidden group hover:scale-105 transition-all duration-300 animate-fade-in-up">
          {/* Animated border glow */}
          <div className="absolute inset-0 border-2 border-neon-cyan rounded-2xl animate-border-glow"></div>
          
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 via-transparent to-neon-purple/5"></div>

          <div className="relative z-10 space-y-8">
            {/* Badge */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 bg-neon-purple/20 border border-neon-purple px-6 py-3 rounded-full">
                <Zap className="w-5 h-5 text-neon-purple" />
                <span className="text-lg font-bold text-neon-purple">OFERTA ESPECIAL</span>
              </div>
            </div>

            {/* Discount Badge */}
            <div className="text-center">
              <div className="inline-block bg-gradient-to-r from-neon-cyan to-neon-purple text-black font-bold text-3xl px-8 py-3 rounded-lg transform -rotate-3 hover:rotate-0 transition-transform">
                87% OFF
              </div>
            </div>

            {/* Title */}
            <h3 className="text-3xl md:text-4xl font-bold text-center">
              Garanta sua vaga <span className="text-neon-cyan">hoje!</span>
            </h3>

            {/* Price */}
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center gap-4">
                <span className="text-2xl text-muted-foreground line-through">De R$ 497</span>
                <span className="text-xl text-neon-purple">por apenas</span>
              </div>
              <div className="text-6xl md:text-7xl font-bold text-neon-cyan animate-neon-pulse">
                R$ 67
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <Button
                asChild
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-neon-cyan to-neon-blue text-black font-bold text-xl px-12 py-8 h-auto hover:scale-110 transition-all duration-300"
              >
                <a href="https://go.wizoomplay.me/checkout/ppf-essencial-67" target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10 flex items-center gap-3">
                    <Zap className="w-6 h-6" />
                    GARANTIR MINHA VAGA AGORA
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </Button>
            </div>

            {/* Security badges */}
            <div className="space-y-3 text-center">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Lock className="w-5 h-5 text-neon-cyan" />
                <span>Compra 100% segura e protegida</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Check className="w-5 h-5 text-neon-green" />
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
