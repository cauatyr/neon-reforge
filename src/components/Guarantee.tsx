import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const Guarantee = () => {
  const scrollToOffer = () => {
    const offerSection = document.getElementById('oferta');
    offerSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-card p-8 md:p-12 rounded-2xl text-center space-y-8 animate-fade-in-up border-2 border-neon-green">
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full bg-neon-green/20 flex items-center justify-center border-2 border-neon-green">
              <Shield className="w-10 h-10 text-neon-green" />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold">
            Garantia Incondicional de <span className="text-neon-green">30 Dias</span>
          </h2>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-neon-green">
              100% Sem Riscos
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Você tem 30 dias para acessar todo o conteúdo, assistir as aulas e até fazer seus primeiros testes. Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do seu dinheiro. Simples assim.
            </p>
            <p className="text-xl font-semibold text-foreground">
              O risco é todo nosso. A decisão é sua.
            </p>
          </div>

          <Button
            onClick={scrollToOffer}
            size="lg"
            className="group relative overflow-hidden bg-gradient-to-r from-neon-green to-neon-cyan text-black font-bold text-lg px-8 py-6 h-auto hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10">QUERO MINHA VAGA AGORA</span>
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
