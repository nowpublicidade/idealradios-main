import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { GlowCard } from "@/components/GlowCard";

const ms = { fontFamily: "'Montserrat', sans-serif", fontWeight: 700 };
const ms4 = { fontFamily: "'Montserrat', sans-serif", fontWeight: 400 };
const ms6 = { fontFamily: "'Montserrat', sans-serif", fontWeight: 600 };

const faqs = [
  {
    q: "Já tive fornecedor que sumiu depois da venda.",
    a: "A Ideal tem 18 anos no mercado. Nossos contratos têm SLA, telefone direto e técnico com nome. Não somos revenda que some.",
  },
  {
    q: "Não sei se vocês atendem minha região.",
    a: "Atendemos todo o Brasil. Temos parceiros técnicos nos principais estados e equipe disponível para deslocamento quando necessário.",
  },
  {
    q: "Meu evento é semana que vem. Tem como?",
    a: "Sim. Temos estoque pronto. Se você entrar em contato hoje, conseguimos avaliar a disponibilidade e proposta em horas.",
  },
  {
    q: "Preciso de aprovação interna antes de contratar.",
    a: "A gente prepara a proposta detalhada com especificações técnicas, valores e SLA. Tudo que você precisa para apresentar internamente.",
  },
  {
    q: "Como sabe que a peça é original?",
    a: "Somos distribuidores autorizados. Temos nota fiscal, certificado do fabricante e rastreabilidade de peça.",
  },
];

const FAQSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-[3px] block mb-3" style={{ ...ms6, color: "#2072B9" }}>
            Dúvidas frequentes
          </span>
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4" style={ms}>
            Antes de ir embora, deixa a gente <span style={{ color: "#0E4AAD" }}>responder</span>.
          </h2>
          <p className="text-gray-400" style={ms4}>
            As dúvidas mais comuns de quem chega até aqui.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <GlowCard key={i} intensity="soft" className="px-1">
              <AccordionItem value={`faq-${i}`} className="border-0 px-4">
                <AccordionTrigger className="text-left hover:no-underline py-5" style={{ ...ms, color: "#1a3a5c" }}>
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 leading-relaxed text-gray-500" style={ms4}>
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </GlowCard>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
