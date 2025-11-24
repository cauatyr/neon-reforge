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
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in-up">
          Veja o que você vai <span className="text-neon-purple">aprender:</span>
        </h2>

        <div className="glass-card p-8 md:p-12 rounded-2xl">
          <div className="grid gap-6">
            {topics.map((topic, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 group animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-neon-cyan/20 flex items-center justify-center border border-neon-cyan group-hover:bg-neon-cyan/40 transition-colors">
                  <Check className="w-5 h-5 text-neon-cyan" />
                </div>
                <p className="text-lg md:text-xl text-foreground group-hover:text-neon-cyan transition-colors pt-1">
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
