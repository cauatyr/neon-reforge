import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Nunca trabalhei com PPF. Consigo aprender mesmo sendo iniciante?",
    answer: "Sim! O curso foi desenvolvido pensando em quem está começando do zero. Todas as técnicas são explicadas passo a passo, desde a preparação dos materiais até a aplicação final. Se você já trabalha com lavagem ou estética automotiva, tem tudo que precisa para aprender.",
  },
  {
    question: "Por quanto tempo tenho acesso ao curso?",
    answer: "Acesso por 1 ano! Você pode assistir quando quiser, quantas vezes precisar. O conteúdo fica disponível na sua área de membros.",
  },
  {
    question: "Vou receber certificado?",
    answer: "Sim! Ao concluir todas as aulas, você recebe um certificado digital de conclusão do curso que pode usar para divulgar seu trabalho e mostrar qualificação aos clientes.",
  },
  {
    question: "E se eu não gostar do curso?",
    answer: "Você tem 30 dias de garantia incondicional. Se não ficar satisfeito por qualquer motivo, basta enviar um e-mail e devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.",
  },
  {
    question: "Quando recebo o acesso ao curso?",
    answer: "Imediatamente após a confirmação do pagamento! Você recebe um e-mail e uma mensagem no WhatsApp com seus dados de acesso e pode começar a assistir as aulas na hora.",
  },
  {
    question: "Preciso de um espaço grande para trabalhar?",
    answer: "Não! As aplicações ensinadas no curso podem ser feitas em espaços pequenos, até mesmo em garagens residenciais. Você não precisa de cabine ou estrutura complexa.",
  },
  {
    question: "Consigo fazer essas aplicações sozinho ou preciso de ajudante?",
    answer: "Todas as aplicações podem ser feitas sozinho! Isso é justamente uma das vantagens desses serviços - você não precisa contratar ninguém para começar a faturar.",
  },
  {
    question: "O curso tem suporte para tirar dúvidas?",
    answer: "Sim! Você terá suporte nas aulas onde poderá fazer perguntas sobre as técnicas ensinadas no curso.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden faq-automotive-panel">
      {/* Carbon Fiber Texture Background */}
      <div className="absolute inset-0 carbon-texture opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/98 to-background/95"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        {/* HUD Style Title */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-auto-light-sweep relative inline-block">
            <span className="relative z-10">
              Perguntas <span className="text-automotive-bronze text-glow-bronze-intense">Frequentes</span>
            </span>
            {/* HUD Glow Effect */}
            <div className="absolute inset-0 blur-xl bg-automotive-bronze/10 animate-engine-pulse-drift"></div>
          </h2>
        </div>

        <div className="glass-card p-8 md:p-12 rounded-2xl animate-fade-in-up shadow-[0_0_50px_rgba(168,116,55,0.25)] border border-automotive-bronze/20">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, idx) => (
              <AccordionItem 
                key={idx} 
                value={`item-${idx}`}
                className="faq-panel-item border-2 border-automotive-bronze/30 rounded-xl px-6 bg-gradient-to-r from-background/50 to-background/30 backdrop-blur-sm hover:border-automotive-bronze/60 hover:shadow-[0_0_25px_rgba(168,116,55,0.4),inset_0_0_15px_rgba(168,116,55,0.08)] transition-all duration-300 data-[state=open]:border-automotive-bronze data-[state=open]:shadow-[0_0_30px_rgba(168,116,55,0.5),inset_0_0_20px_rgba(168,116,55,0.12)] data-[state=open]:bg-gradient-to-r data-[state=open]:from-automotive-bronze/5 data-[state=open]:to-background/40"
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                <AccordionTrigger className="faq-trigger text-left text-lg font-semibold hover:text-automotive-bronze transition-all duration-300 py-6 [&[data-state=open]]:text-automotive-bronze [&[data-state=open]>svg]:rotate-90">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="faq-content text-foreground/80 leading-relaxed pb-6 pt-2 animate-fade-in">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="text-center text-xl text-automotive-bronze font-semibold mt-12 text-hud-drift animate-power-pulse">
            Ainda tem dúvidas? Aproveite a garantia de 30 dias e teste o curso sem riscos!
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
