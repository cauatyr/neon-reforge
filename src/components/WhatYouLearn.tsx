import { Settings, Scissors, Shield, Sparkles, Package } from "lucide-react";

const topics = [
  { 
    icon: Settings,
    title: "Preparação da Superfície",
    description: "Ajuste correto da pintura para garantir aderência perfeita."
  },
  { 
    icon: Scissors,
    title: "Corte e Aplicação do PPF",
    description: "Técnicas profissionais para aplicar sem bolhas e sem falhas."
  },
  { 
    icon: Shield,
    title: "Áreas de Alta Dificuldade",
    description: "Maçanetas, soleiras, quinas e curvas complexas."
  },
  { 
    icon: Sparkles,
    title: "Acabamento Invisível (Auto-Healing)",
    description: "Deixar a película totalmente imperceptível."
  },
  { 
    icon: Package,
    title: "Remoção Segura e Correta",
    description: "Como retirar o PPF sem danificar a pintura."
  },
];

const WhatYouLearn = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/98 to-background pointer-events-none"></div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Title Section */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="learn-section-title text-3xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-automotive-bronze to-foreground bg-clip-text text-transparent">
            O Que Você Vai Aprender Dentro do Curso
          </h2>
          <p className="learn-section-subtitle text-xl md:text-2xl text-automotive-bronze font-semibold">
            Domine a aplicação profissional do PPF mesmo sendo iniciante.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {topics.map((topic, idx) => {
            const IconComponent = topic.icon;
            return (
              <div
                key={idx}
                className="learn-card group p-8"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="learn-icon-wrapper flex-shrink-0 w-14 h-14 rounded-lg bg-automotive-bronze/20 flex items-center justify-center border-2 border-automotive-bronze">
                    <IconComponent className="w-7 h-7 text-automotive-bronze transition-colors" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 space-y-2">
                    <h3 className="text-xl font-bold text-foreground">
                      {topic.title}
                    </h3>
                    <p className="text-base text-foreground/80 leading-relaxed">
                      {topic.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearn;
