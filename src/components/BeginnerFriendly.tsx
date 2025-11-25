import { Badge } from "@/components/ui/badge";
import { Check, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const BeginnerFriendly = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-16 px-4 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-automotive-bronze/5 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className={`glass-card p-8 md:p-12 rounded-2xl border-2 border-automotive-bronze/40 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Main Badge */}
          <div className="flex justify-center mb-6">
            <Badge className="bg-automotive-bronze text-white px-6 py-3 text-lg font-bold rounded-full shadow-[0_0_30px_rgba(168,116,55,0.5)] hover:shadow-[0_0_50px_rgba(168,116,55,0.7)] transition-all duration-300">
              <Zap className="w-5 h-5 mr-2" />
              APRENDIZADO 100% SIMPLIFICADO
            </Badge>
          </div>

          {/* Main Title */}
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 text-automotive-white text-auto-light-sweep">
            Mesmo Quem <span className="text-automotive-bronze text-glow-bronze">Nunca Aplicou</span> Vai Aprender de Forma Extremamente Fácil
          </h3>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center space-y-3 p-6 rounded-xl bg-background/50 border border-automotive-bronze/20 hover:border-automotive-bronze/60 transition-all duration-300 hover:scale-105">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-automotive-bronze/20 mb-2">
                <Check className="w-6 h-6 text-automotive-bronze" />
              </div>
              <h4 className="font-bold text-lg text-automotive-white">Ideal para Iniciantes</h4>
              <p className="text-sm text-muted-foreground">Zero experiência necessária</p>
            </div>

            <div className="text-center space-y-3 p-6 rounded-xl bg-background/50 border border-automotive-bronze/20 hover:border-automotive-bronze/60 transition-all duration-300 hover:scale-105">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-automotive-bronze/20 mb-2">
                <Check className="w-6 h-6 text-automotive-bronze" />
              </div>
              <h4 className="font-bold text-lg text-automotive-white">Passo a Passo Detalhado</h4>
              <p className="text-sm text-muted-foreground">Explicado sem segredos</p>
            </div>

            <div className="text-center space-y-3 p-6 rounded-xl bg-background/50 border border-automotive-bronze/20 hover:border-automotive-bronze/60 transition-all duration-300 hover:scale-105">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-automotive-bronze/20 mb-2">
                <Check className="w-6 h-6 text-automotive-bronze" />
              </div>
              <h4 className="font-bold text-lg text-automotive-white">Resultados Imediatos</h4>
              <p className="text-sm text-muted-foreground">Aplique logo após o curso</p>
            </div>
          </div>

          {/* Bottom Emphasis */}
          <div className="text-center">
            <p className="text-xl text-automotive-bronze font-semibold animate-power-pulse">
              ✓ Perfeito para quem está começando do zero
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeginnerFriendly;
