import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { asset } from "@/lib/assets";

const ms = { fontFamily: "'Montserrat', sans-serif", fontWeight: 700 };
const ms4 = { fontFamily: "'Montserrat', sans-serif", fontWeight: 400 };
const ms5 = { fontFamily: "'Montserrat', sans-serif", fontWeight: 500 };
const ms6 = { fontFamily: "'Montserrat', sans-serif", fontWeight: 600 };

const diferenciais = [
  "Técnicos certificados pela Motorola e pela Hytera",
  "Peças 100% originais, sem paralelo, sem risco",
  "Atendimento em até 48h úteis",
  "Manutenção preventiva e corretiva",
  "Atendimento in loco para grandes frotas",
  "Orçamento antes de qualquer serviço",
];

const dmrItems = [
  "Projeto de cobertura sob medida para sua área",
  "Implantação de rede DMR Tier II e III",
  "Software de despacho com mapa em tempo real",
  "GPS e rastreamento de equipes integrados",
  "Criptografia para operações sensíveis",
  "Treinamento da equipe incluído",
];

const ServiceBlock = ({
  tag,
  title,
  highlight,
  desc,
  items,
  ctaLabel,
  ctaVariant,
  note,
  imgSrc,
  imgAlt,
  badgeLabel,
  reverse,
}: {
  tag: string;
  title: string;
  highlight: string;
  desc: string;
  items: string[];
  ctaLabel: string;
  ctaVariant: "solid" | "outline";
  note: string;
  imgSrc: string;
  imgAlt: string;
  badgeLabel: string;
  reverse?: boolean;
}) => (
  <div className={`grid lg:grid-cols-2 gap-14 items-center max-w-5xl mx-auto ${reverse ? "" : ""}`}>
    {/* Imagem */}
    <div className={`relative ${reverse ? "lg:order-2" : "lg:order-1"}`}>
      <div className="rounded-2xl overflow-hidden shadow-xl" style={{ boxShadow: "0 8px 40px rgba(14,74,173,0.12)" }}>
        <img src={imgSrc} alt={imgAlt} className="w-full h-64 object-cover" loading="lazy" />
      </div>
      {/* Badge sobre imagem */}
      <div
        className="absolute -bottom-4 right-6 rounded-xl px-4 py-2 text-sm text-white"
        style={{
          ...ms6,
          background: "linear-gradient(90deg, #0E4AAD, #1F9CD8)",
          boxShadow: "0 4px 20px rgba(31,156,216,0.35)",
        }}
      >
        {badgeLabel}
      </div>
    </div>

    {/* Texto */}
    <div className={`space-y-6 ${reverse ? "lg:order-1" : "lg:order-2"}`}>
      <span className="text-xs uppercase tracking-[3px]" style={{ ...ms6, color: "#1F9CD8" }}>
        {tag}
      </span>

      <h2 className="text-3xl md:text-4xl text-gray-900" style={ms}>
        {title} <span style={{ color: "#1F9CD8" }}>{highlight}</span>.
      </h2>

      <p className="text-gray-500 leading-relaxed" style={ms4}>
        {desc}
      </p>

      {/* Lista limpa sem cards */}
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-3">
            <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: "#1F9CD8" }} />
            <span className="text-sm text-gray-700" style={ms5}>
              {item}
            </span>
          </li>
        ))}
      </ul>

      <div className="pt-2 space-y-2 text-center lg:text-left">
        {ctaVariant === "solid" ? (
          <Button
            asChild
            className="text-white w-full sm:w-auto"
            style={{
              ...ms,
              background: "linear-gradient(90deg, #0E4AAD, #1F9CD8)",
              boxShadow: "0 8px 24px rgba(31,156,216,0.30)",
            }}
          >
            <a href="#contato">{ctaLabel}</a>
          </Button>
        ) : (
          <Button asChild variant="outline" className="w-full sm:w-auto" style={{ ...ms, borderColor: "rgba(31,156,216,0.40)", color: "#1F9CD8" }}>
            <a href="#contato">{ctaLabel}</a>
          </Button>
        )}
        <p className="text-xs text-gray-400" style={ms4}>
          {note}
        </p>
      </div>
    </div>
  </div>
);

const ServicosSection = () => {
  return (
    <section id="setores" className="relative z-10 bg-white">
      <div className="rounded-t-3xl -mt-8 py-20 bg-white">
        <div className="container mx-auto px-4 space-y-24">
          {/* Cabeçalho */}
          <div className="text-center">
            <span className="text-xs uppercase tracking-[3px] block mb-3" style={{ ...ms6, color: "#2072B9" }}>
              Soluções completas
            </span>
            <h2 className="text-3xl md:text-4xl text-gray-900" style={ms}>
              O que a <span style={{ color: "#0E4AAD" }}>Ideal</span> faz por você
            </h2>
          </div>

          {/* Bloco 1: Assistência */}
          <ServiceBlock
            tag="Assistência técnica autorizada"
            title="Seu rádio quebrou. A gente resolve em até"
            highlight="48h"
            desc="Não manda pra fabricante esperar meses. A Ideal tem laboratório próprio, técnicos certificados e peças originais em estoque."
            items={diferenciais}
            ctaLabel="Solicitar assistência técnica agora"
            ctaVariant="solid"
            note="Diagnóstico sem compromisso · Peça original garantida"
            imgSrc={asset("/assets/radios/imgi_17_ideal-radios-assitencia-tecnica-especializada-600x400.jpeg")}
            imgAlt="Assistência técnica Ideal Rádios"
            badgeLabel="48h de atendimento"
            reverse={false}
          />

          {/* Divisor elegante */}
          <div className="flex items-center gap-6 max-w-5xl mx-auto">
            <div
              className="flex-1 h-px"
              style={{ background: "linear-gradient(to right, transparent, rgba(14,74,173,0.15), transparent)" }}
            />
          </div>

          {/* Bloco 2: DMR */}
          <ServiceBlock
            tag="Sistemas DMR e TETRA"
            title="Enquanto você conserta o antigo,"
            highlight="pensa no novo"
            desc="Sistema analógico cansou? Interferência, alcance limitado, sem registro de chamada, sem GPS? A migração para digital é mais simples do que parece e a Ideal faz tudo."
            items={dmrItems}
            ctaLabel="Quero entender como migrar para digital"
            ctaVariant="outline"
            note="Consultoria gratuita · Sem compromisso"
            imgSrc={asset("/assets/radios/imgi_19_ideal-radios-servicos-especializados-600x400.jpeg")}
            imgAlt="Sistemas DMR e TETRA"
            badgeLabel="Consultoria gratuita"
            reverse={true}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicosSection;
