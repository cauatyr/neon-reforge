import { AlertTriangle, DollarSign, Clock, HelpCircle } from "lucide-react";

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
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-6 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-automotive-red animate-power-pulse text-glow-red">
            Você Está Perdendo Dinheiro TODOS OS DIAS...
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Enquanto seus concorrentes faturam R$ 150 a R$ 600 por serviço com aplicação de PPF, você fica refém de serviços básicos com margens cada vez menores.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, idx) => (
            <div
              key={idx}
              className="glass-card p-8 rounded-xl group hover:scale-105 hover:-translate-y-2 transition-all duration-500 border-l-4 border-l-automotive-red shadow-[0_0_20px_rgba(220,38,38,0.2)] hover:shadow-[0_0_40px_rgba(220,38,38,0.4)] animate-slide-power"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="flex items-start gap-5">
                <div className="text-5xl animate-rev">{problem.emoji}</div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-automotive-white group-hover:text-automotive-red transition-colors duration-300">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
              {/* Scan line effect */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-automotive-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
