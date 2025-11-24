import { Award, CheckCircle } from "lucide-react";

const benefits = [
  "Certificado digital oficial da Wizoom Play",
  "Diferencial competitivo para atrair clientes mais exigentes",
  "Comprova sua atualização e compromisso com a excelência",
  "Mostre ao mercado que você investe em qualificação técnica.",
  "Um certificado que agrega valor ao seu trabalho.",
];

const Certificate = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="glass-card p-8 md:p-12 rounded-2xl animate-fade-in-up">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-neon-cyan/20 flex items-center justify-center border-2 border-neon-cyan">
                  <Award className="w-8 h-8 text-neon-cyan" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  CERTIFICADO DE <span className="text-neon-cyan">CONCLUSÃO</span>
                </h2>
              </div>

              <h3 className="text-2xl md:text-3xl font-semibold text-neon-purple">
                Comprove sua qualificação técnica
              </h3>

              <div className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3 group">
                    <CheckCircle className="w-6 h-6 text-neon-cyan flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <p className="text-lg text-foreground group-hover:text-neon-cyan transition-colors">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-xl blur-xl opacity-50"></div>
              <img
                src="https://v0-ppf-essencial.vercel.app/images/design-mode/Certificado%20PPF.png"
                alt="Certificado de Conclusão PPF"
                className="relative rounded-xl border-2 border-neon-cyan shadow-2xl hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
