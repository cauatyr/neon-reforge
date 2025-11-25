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
          Para Quem é <span className="text-automotive-bronze text-glow-bronze">Este Curso</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {audience.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-8 rounded-xl group card-interactive animate-slide-power border-l-4 border-l-automotive-bronze shadow-[0_0_20px_rgba(139,92,46,0.2)] hover:shadow-[0_0_40px_rgba(139,92,46,0.4)]"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-automotive-bronze/20 flex items-center justify-center border-2 border-automotive-bronze group-hover:bg-automotive-bronze/40 group-hover:scale-110 transition-all duration-500 shadow-[0_0_15px_rgba(139,92,46,0.3)]">
                  <item.icon className="w-8 h-8 text-automotive-bronze" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-automotive-white group-hover:text-automotive-bronze transition-colors duration-300">
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
