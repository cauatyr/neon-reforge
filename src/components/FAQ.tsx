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
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-auto-light-sweep text-with-underline">
          Perguntas <span className="text-automotive-bronze text-glow-bronze">Frequentes</span>
        </h2>

        <div className="glass-card p-8 md:p-12 rounded-2xl animate-fade-in-up shadow-[0_0_40px_rgba(168,116,55,0.2)]">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem 
                key={idx} 
                value={`item-${idx}`}
                className="border-2 border-border/50 rounded-lg px-6 hover:border-automotive-bronze transition-all duration-300 shadow-[0_0_10px_rgba(168,116,55,0.1)] hover:shadow-[0_0_20px_rgba(168,116,55,0.3)]"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-automotive-bronze transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="text-center text-xl text-automotive-bronze font-semibold mt-12 text-hud-drift">
            Ainda tem dúvidas? Aproveite a garantia de 30 dias e teste o curso sem riscos!
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
