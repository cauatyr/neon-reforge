import { AlertTriangle, DollarSign, Clock, HelpCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const problems = [
  {
    icon: AlertTriangle,
    emoji: "😰",
    title: "Clientes Perguntam e Você Perde a Venda",
    description: "Quantos clientes já pediram PPF nas conchas, soleiras e você teve que recusar ou indicar para o concorrente?",
  },
  {
    icon: DollarSign,
    emoji: "💸",
    title: "Serviços de Baixo Valor",
    description: "Lavagem e polimento são ótimos, mas imagine adicionar R$ 200-400 em serviços de PPF por dia!",
  },
  {
    icon: Clock,
    emoji: "⏰",
    title: "Sem Tempo para Curso Presencial",
    description: "Cursos presenciais custam R$ 1.500+ e você precisa fechar o negócio por dias. Inviável para quem trabalha sozinho.",
  },
  {
    icon: HelpCircle,
    emoji: "😕",
    title: "Parece Complicado Demais",
    description: "Você vê outros aplicando PPF e acha que precisa de anos de prática. Não precisa!",
  },
];

const ProblemSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div 
          ref={titleRef}
          className={`text-center mb-16 space-y-6 transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-automotive-bronze premium-automotive-title">
            Você Está Perdendo Dinheiro TODOS OS DIAS...
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed text-hud-drift">
            Enquanto seus concorrentes faturam R$ 150 a R$ 600 por serviço com aplicação de PPF, você fica refém de serviços básicos com margens cada vez menores.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, idx) => {
            const { ref, isVisible } = useScrollAnimation();
            return (
              <div
                key={idx}
                ref={ref}
                className={`glass-card benefits-card p-8 rounded-xl group transition-all duration-700 border-l-4 border-l-automotive-bronze shadow-[0_0_20px_rgba(168,116,55,0.2)] hover:shadow-[0_0_40px_rgba(168,116,55,0.4)] ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
                style={{ transitionDelay: `${idx * 0.15}s` }}
              >
                <div className="flex items-start gap-5">
                  <div className="benefits-icon text-5xl">{problem.emoji}</div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-automotive-white group-hover:text-automotive-bronze transition-colors duration-300 text-hud-drift">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-digital-flick">
                      {problem.description}
                    </p>
                  </div>
                </div>
                {/* Animated tech line on bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-automotive-bronze to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Side glow on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-automotive-bronze opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_20px_rgba(168,116,55,0.8)]"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
