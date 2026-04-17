import { Radio, Wrench, Cpu } from "lucide-react";
import { GlowCard } from "@/components/GlowCard";

const ms = { fontFamily: "'Montserrat', sans-serif", fontWeight: 700 };
const ms4 = { fontFamily: "'Montserrat', sans-serif", fontWeight: 400 };
const ms6 = { fontFamily: "'Montserrat', sans-serif", fontWeight: 600 };

const features = [
  {
    icon: Radio,
    title: "Locação Imediata",
    desc: "Rádios prontos para uso com entrega em até 48h em todo o Brasil. Estoque próprio, sem dependência de terceiros.",
    stat: "48h",
    statLabel: "entrega nacional",
  },
  {
    icon: Wrench,
    title: "Assistência Autorizada",
    desc: "Centro técnico próprio com peças 100% originais e equipe certificada Hytera e Motorola. SLA garantido em contrato.",
    stat: "100%",
    statLabel: "peças originais",
  },
  {
    icon: Cpu,
    title: "Sistemas DMR / TETRA",
    desc: "Tecnologia digital de ponta para comunicação clara, segura e rastreável. Implantação e suporte completos.",
    stat: "Tier III",
    statLabel: "rede DMR",
  },
];

const PorQueIdealSection = () => {
  return (
    <section id="produtos" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[3px] block mb-3" style={{ ...ms6, color: "#2072B9" }}>
            Diferenciais
          </span>
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4" style={ms}>
            Por que a <span style={{ color: "#0E4AAD" }}>Ideal</span>?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto" style={ms4}>
            Combinamos tecnologia de ponta, estoque próprio e suporte técnico especializado para manter sua operação
            sempre conectada.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <GlowCard key={i} intensity="soft" className="p-8 space-y-5 group">
              {/* Ícone sem fundo — solto, elegante */}
              <f.icon className="w-8 h-8" style={{ color: "#0E4AAD" }} />

              <div>
                <h3 className="text-lg text-gray-900 mb-2" style={ms}>
                  {f.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed" style={ms4}>
                  {f.desc}
                </p>
              </div>

              {/* Mini stat elegante na base */}
              <div className="pt-4 border-t border-gray-100">
                <span className="text-2xl text-[#0E4AAD]" style={ms}>
                  {f.stat}
                </span>
                <span className="text-xs text-gray-400 ml-2 uppercase tracking-wider" style={ms6}>
                  {f.statLabel}
                </span>
              </div>
            </GlowCard>
          ))}
        </div>

        {/* Wings+ como selo discreto abaixo */}
        <div className="flex justify-center mt-10">
          <div
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full"
            style={{
              background: "#EBF2FF",
              border: "1px solid rgba(14,74,173,0.15)",
            }}
          >
            <span className="text-xs uppercase tracking-[2px]" style={{ ...ms6, color: "#0E4AAD" }}>
              Wings+ Hytera Partner
            </span>
            <span className="w-1 h-1 rounded-full bg-[#0E4AAD] opacity-40" />
            <span className="text-xs" style={{ ...ms4, color: "#2072B9" }}>
              Certificação internacional
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PorQueIdealSection;
