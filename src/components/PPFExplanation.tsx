import { Shield, Zap, TrendingUp, Wrench } from "lucide-react";
import { useCinematicImage } from "@/hooks/useCinematicImage";

const PPFExplanation = () => {
  const { ref: sectionRef, isVisible } = useCinematicImage({ effect: 'slide' });

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Diagonal Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-automotive-bronze/5 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(168,116,55,0.03)_49%,rgba(168,116,55,0.03)_51%,transparent_52%)] pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div 
          ref={sectionRef}
          className={`glass-card social-card p-8 md:p-12 rounded-2xl shadow-[0_0_50px_rgba(168,116,55,0.2)] ${
            isVisible ? 'visible' : ''
          }`}
        >
          {/* Title Section */}
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-auto-light-sweep bg-gradient-to-r from-foreground via-automotive-bronze to-foreground bg-clip-text text-transparent">
              O Que É PPF – E Por Que Ele É Tão Indispensável Para Quem Ama Carros
            </h2>
            <p className="text-xl md:text-2xl text-automotive-bronze font-semibold text-hud-drift">
              A proteção que mantém a pintura impecável e valoriza qualquer veículo.
            </p>
          </div>

          {/* Description Text */}
          <div className="max-w-4xl mx-auto space-y-6 mb-12">
            <p className="text-lg text-foreground/90 leading-relaxed text-center">
              A Película de Proteção de Pintura (PPF – Paint Protection Film) é um filme transparente e brilhante desenvolvido para proteger a pintura contra riscos, arranhões, impactos, desgaste e pequenas batidas do dia a dia.
            </p>
            
            <p className="text-lg text-foreground/90 leading-relaxed text-center">
              Ela possui <span className="text-automotive-bronze font-semibold">tecnologia auto-regenerativa (self-healing)</span>, ou seja, pequenos riscos desaparecem com o calor. O PPF preserva o brilho original, protege áreas de alto desgaste e mantém o carro com aparência de novo por muito mais tempo.
            </p>
          </div>

          {/* Indispensável Para */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-automotive-bronze text-center mb-8 text-hud-drift">
              Por Isso É Indispensável Para:
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="benefits-card group p-6 rounded-xl border-2 border-automotive-bronze/20 bg-automotive-bronze/5 hover:border-automotive-bronze/40 hover:bg-automotive-bronze/10 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-automotive-bronze/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-6 h-6 text-automotive-bronze" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">
                      Quem quer <span className="text-automotive-bronze font-semibold">proteger o veículo próprio</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="benefits-card group p-6 rounded-xl border-2 border-automotive-bronze/20 bg-automotive-bronze/5 hover:border-automotive-bronze/40 hover:bg-automotive-bronze/10 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-automotive-bronze/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Wrench className="w-6 h-6 text-automotive-bronze" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">
                      Quem presta serviços de <span className="text-automotive-bronze font-semibold">estética automotiva</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="benefits-card group p-6 rounded-xl border-2 border-automotive-bronze/20 bg-automotive-bronze/5 hover:border-automotive-bronze/40 hover:bg-automotive-bronze/10 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-automotive-bronze/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-6 h-6 text-automotive-bronze" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">
                      Quem busca <span className="text-automotive-bronze font-semibold">valorizar o carro antes de vender</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="benefits-card group p-6 rounded-xl border-2 border-automotive-bronze/20 bg-automotive-bronze/5 hover:border-automotive-bronze/40 hover:bg-automotive-bronze/10 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-automotive-bronze/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-6 h-6 text-automotive-bronze" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">
                      Quem quer <span className="text-automotive-bronze font-semibold">evitar manutenção cara de pintura</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PPFExplanation;
