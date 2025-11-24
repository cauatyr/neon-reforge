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
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neon-cyan animate-neon-pulse">
            Você Está Perdendo Dinheiro TODOS OS DIAS...
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            Enquanto seus concorrentes faturam R$ 150 a R$ 600 por serviço com aplicação de PPF, você fica refém de serviços básicos com margens cada vez menores.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, idx) => (
            <div
              key={idx}
              className="glass-card p-8 rounded-xl group hover:scale-105 transition-all duration-300 animate-fade-in-up border-l-4 border-l-neon-purple"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{problem.emoji}</div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-neon-cyan transition-colors">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
