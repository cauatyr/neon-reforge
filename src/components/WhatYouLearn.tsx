import { Settings, Scissors, Shield, Sparkles, Package } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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
  const titleRef = useScrollAnimation(0.1);
  const subtitleRef = useScrollAnimation(0.1);
  const cardsRefs = topics.map(() => useScrollAnimation(0.1));

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/98 to-background pointer-events-none"></div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Title Section */}
        <div className="text-center mb-12 space-y-4">
          <h2 
            ref={titleRef.ref}
            className={`text-3xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-automotive-bronze to-foreground bg-clip-text text-transparent transition-all duration-700 ${
              titleRef.isVisible 
                ? 'learn-title-scroll-reveal' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            O Que Você Vai Aprender Dentro do Curso
          </h2>
          <p 
            ref={subtitleRef.ref}
            className={`text-xl md:text-2xl text-automotive-bronze font-semibold transition-all duration-600 ${
              subtitleRef.isVisible 
                ? 'learn-subtitle-scroll-reveal' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            Domine a aplicação profissional do PPF mesmo sendo iniciante.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {topics.map((topic, idx) => {
            const IconComponent = topic.icon;
            const cardRef = cardsRefs[idx];
            
            return (
              <div
                key={idx}
                ref={cardRef.ref}
                className={`learn-card-scroll group p-8 transition-all duration-800 ${
                  cardRef.isVisible 
                    ? 'learn-card-scroll-reveal' 
                    : 'opacity-0 translate-y-14 scale-92'
                }`}
                style={{
                  transitionDelay: cardRef.isVisible ? `${idx * 0.1}s` : '0s'
                }}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`learn-icon-scroll flex-shrink-0 w-14 h-14 rounded-lg bg-automotive-bronze/20 flex items-center justify-center border-2 border-automotive-bronze transition-all duration-450 ${
                    cardRef.isVisible ? 'learn-icon-scroll-reveal' : 'opacity-0 scale-120'
                  }`}>
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
