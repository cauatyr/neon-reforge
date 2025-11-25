import { Check } from "lucide-react";

const topics = [
  "Ferramentas necessárias para aplicar PPF",
  "Aplicação PPF nas conchas de portas",
  "Como aplicar PPF em quinas de portas",
  "Aplicação de PPF nas soleiras de portas",
  "Como Aplicar PPF na Multimídia com segurança",
  "Aplicação de PPF nas colunas de Black Piano",
  "Aplicação nas entradas do porta malas",
  "Como Aplicar PPF na caçamba de caminhonetes",
];

const WhatYouLearn = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-auto-light-sweep text-with-underline">
          Veja o que você vai <span className="text-automotive-bronze text-glow-bronze">aprender:</span>
        </h2>

        <div className="glass-card benefits-card p-8 md:p-12 rounded-2xl shadow-[0_0_40px_rgba(220,38,38,0.2)]">
          <div className="grid gap-6">
            {topics.map((topic, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 group card-interactive animate-slide-power"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="benefits-icon flex-shrink-0 w-10 h-10 rounded-lg bg-automotive-bronze/20 flex items-center justify-center border-2 border-automotive-bronze group-hover:bg-automotive-bronze group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(168,116,55,0.3)]">
                  <Check className="w-5 h-5 text-automotive-bronze group-hover:text-white transition-colors" />
                </div>
                <p className="text-lg md:text-xl text-foreground group-hover:text-automotive-bronze transition-colors pt-2 font-medium text-carbon-scan">
                  {topic}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearn;
