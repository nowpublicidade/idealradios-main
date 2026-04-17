import { AlertTriangle, Radio, Clock } from "lucide-react";
import { GlowCard } from "@/components/GlowCard";

const ms = { fontFamily: "'Montserrat', sans-serif", fontWeight: 700 };
const ms4 = { fontFamily: "'Montserrat', sans-serif", fontWeight: 400 };

const painPoints = [
  {
    icon: AlertTriangle,
    title: "Nossos rádios vivem quebrando e a assistência demora semanas",
    desc: "A gente tem laboratório próprio, peças originais e atende em até 48h. Técnicos certificados pelas fabricantes, sem achismo.",
  },
  {
    icon: Radio,
    title: "A comunicação falha justamente nas horas críticas",
    desc: "Sistema antigo tem limite. Redes DMR digitais eliminam interferência, aumentam o alcance e gravam tudo. Implantamos do zero.",
  },
  {
    icon: Clock,
    title: "Preciso de rádios pro evento e não sei onde alugar com suporte",
    desc: "Temos estoque disponível para pronta-entrega. Você aluga, a gente entrega configurado, com técnico disponível durante o evento se precisar.",
  },
];

const DorSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-gray-900" style={ms}>
            Você está aqui porque algo <span style={{ color: "#1F9CD8" }}>não está funcionando</span> como deveria.
          </h2>
          <p className="mt-4 text-gray-500 text-lg leading-relaxed" style={ms4}>
            Talvez seus rádios estejam quebrando com frequência e você não tem onde levar. Ou a equipe está operando com
            equipamento velho que não alcança metade do local. Seja qual for o cenário: perder comunicação em campo não
            é só inconveniente, é risco operacional real.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {painPoints.map((p, i) => (
            <GlowCard key={i} intensity="medium" className="p-6 space-y-4">
              {/* Ícone sem fundo — apenas o ícone solto */}
              <p.icon className="w-7 h-7" style={{ color: "#1F9CD8" }} />

              <h3 className="text-base leading-snug text-gray-900" style={ms}>
                {p.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed" style={ms4}>
                {p.desc}
              </p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DorSection;
