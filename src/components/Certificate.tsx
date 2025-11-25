import { Award, CheckCircle } from "lucide-react";
import { useCinematicImage } from "@/hooks/useCinematicImage";

const benefits = [
  "Certificado digital oficial da Hotmart",
  "Diferencial competitivo para atrair clientes mais exigentes",
  "Comprova sua atualização e compromisso com a excelência",
  "Mostre ao mercado que você investe em qualificação técnica.",
  "Um certificado que agrega valor ao seu trabalho.",
];

const Certificate = () => {
  const { ref: imgRef, isVisible } = useCinematicImage({ effect: 'laser-edge' });
  
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="glass-card social-card p-8 md:p-12 rounded-2xl shadow-[0_0_50px_rgba(168,116,55,0.2)]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="benefits-icon w-20 h-20 rounded-full bg-automotive-bronze/20 flex items-center justify-center border-2 border-automotive-bronze shadow-[0_0_25px_rgba(168,116,55,0.4)]">
                  <Award className="w-10 h-10 text-automotive-bronze" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight text-auto-light-sweep">
                  CERTIFICADO DE <span className="text-automotive-bronze text-glow-bronze">CONCLUSÃO</span>
                </h2>
              </div>

              <h3 className="text-2xl md:text-3xl font-semibold text-automotive-bronze text-hud-drift">
                Comprove sua qualificação técnica
              </h3>

              <div className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3 group animate-slide-power" style={{ animationDelay: `${idx * 0.1}s` }}>
                    <CheckCircle className="w-6 h-6 text-automotive-bronze flex-shrink-0 mt-1 group-hover:scale-125 transition-transform duration-300" />
                    <p className="text-lg text-foreground group-hover:text-automotive-bronze transition-colors duration-300 text-digital-flick">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div 
              ref={imgRef}
              className={`relative img-cinematic img-laser-edge ${
                isVisible ? 'visible' : ''
              } rounded-xl`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-automotive-bronze to-automotive-bronze/60 rounded-xl blur-2xl opacity-30"></div>
              <img
                src="https://v0-ppf-essencial.vercel.app/images/design-mode/Certificado%20PPF.png"
                alt="Certificado de Conclusão PPF"
                className="relative rounded-xl border-2 border-automotive-bronze hover:scale-[1.02] hover:border-automotive-bronze transition-all duration-300"
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
