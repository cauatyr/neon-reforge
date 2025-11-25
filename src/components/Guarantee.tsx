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
        <div className="glass-card p-8 md:p-12 rounded-2xl text-center space-y-8 animate-fade-in-up border-2 border-automotive-bronze shadow-[0_0_40px_rgba(139,92,46,0.3)]">
          <div className="flex justify-center">
            <div className="w-24 h-24 rounded-full bg-automotive-bronze/20 flex items-center justify-center border-2 border-automotive-bronze shadow-[0_0_30px_rgba(139,92,46,0.4)] animate-rev">
              <Shield className="w-12 h-12 text-automotive-bronze" />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-auto-light-sweep text-with-underline">
            Garantia Incondicional de <span className="text-automotive-bronze text-glow-bronze">30 Dias</span>
          </h2>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-automotive-bronze text-hud-drift">
              100% Sem Riscos
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-digital-flick">
              Você tem 30 dias para acessar todo o conteúdo, assistir as aulas e até fazer seus primeiros testes. Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do seu dinheiro. Simples assim.
            </p>
            <p className="text-xl font-semibold text-foreground text-digital-flick">
              O risco é todo nosso. A decisão é sua.
            </p>
          </div>

          <Button
            onClick={scrollToOffer}
            size="lg"
            variant="crystal"
            className="crystal-button rounded-xl font-bold text-lg px-10 py-7 h-auto"
          >
            <span className="relative z-10">QUERO MINHA VAGA AGORA</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
