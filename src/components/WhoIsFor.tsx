import { Car, Sparkles, TrendingUp, Users } from "lucide-react";

const audience = [
  {
    icon: Car,
    title: "Donos de Lava-Rápido",
    description: "Agregue um serviço premium que aumenta seu ticket médio em 300% sem precisar de muito espaço extra.",
  },
  {
    icon: Sparkles,
    title: "Profissionais de Estética",
    description: "Complete seu portfólio de serviços e torne-se referência completa em proteção automotiva.",
  },
  {
    icon: TrendingUp,
    title: "Empreendedores",
    description: "Comece um negócio lucrativo com baixo investimento inicial e alta demanda no mercado.",
  },
  {
    icon: Users,
    title: "Entusiastas",
    description: "Proteja seu próprio carro com qualidade profissional e ainda ganhe uma renda extra atendendo amigos.",
  },
];

const WhoIsFor = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in-up">
          Para Quem é <span className="text-neon-purple">Este Curso</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {audience.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-8 rounded-xl group hover:scale-105 transition-all duration-300 animate-fade-in-up border-l-4 border-l-neon-purple"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-neon-purple/20 flex items-center justify-center border border-neon-purple group-hover:bg-neon-purple/40 transition-colors">
                  <item.icon className="w-7 h-7 text-neon-purple" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-neon-purple transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
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

export default WhoIsFor;
