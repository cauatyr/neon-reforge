import { Target, DollarSign, Clock, Smartphone, Rocket, Dumbbell } from "lucide-react";

const features = [
  {
    icon: Target,
    emoji: "🎯",
    title: "Direto ao Ponto",
    description: "Sem enrolação. Apenas as técnicas que você precisa para começar a faturar HOJE.",
  },
  {
    icon: DollarSign,
    emoji: "💰",
    title: "Baixo Investimento",
    description: "Por apenas R$ 67 você aprende o que cursos presenciais de R$ 1.500+ ensinam sobre peças essenciais.",
  },
  {
    icon: Clock,
    emoji: "⏱️",
    title: "Assista no Seu Ritmo",
    description: "Acesso vitalício. Assista quando quiser, pause e reveja quantas vezes precisar.",
  },
  {
    icon: Smartphone,
    emoji: "📱",
    title: "Aulas Práticas",
    description: "Veja cada técnica sendo aplicada na prática, com ângulos claros e explicações detalhadas.",
  },
  {
    icon: Rocket,
    emoji: "🚀",
    title: "Comece Hoje",
    description: "Acesso imediato após a compra. Em 2 horas você já pode fazer sua primeira aplicação.",
  },
  {
    icon: Dumbbell,
    emoji: "💪",
    title: "Para Iniciantes",
    description: "Não precisa experiência prévia. Se você faz lavagem ou estética, você consegue fazer PPF!",
  },
];

const WhyDifferent = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in-up">
          Por Que Este Curso é <span className="text-neon-cyan">Diferente</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="glass-card p-8 rounded-xl group hover:scale-105 hover:border-neon-cyan transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="text-5xl mb-4">{feature.emoji}</div>
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-neon-cyan transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
