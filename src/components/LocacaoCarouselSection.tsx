import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GripHorizontal } from "lucide-react";
import { asset } from "@/lib/assets";

const ms = { fontFamily: "'Montserrat', sans-serif", fontWeight: 700 };
const ms4 = { fontFamily: "'Montserrat', sans-serif", fontWeight: 400 };
const ms6 = { fontFamily: "'Montserrat', sans-serif", fontWeight: 600 };

const locacaoRadios = [
  {
    name: "HP786",
    img: asset("/assets/radios/imgi_6_HP786-680x680.png"),
    tag: "DMR",
    desc: "Display colorido, GPS, Bluetooth 5.0",
  },
  { name: "HP706", img: asset("/assets/radios/imgi_7_HP706-680x680.png"), tag: "DMR", desc: "IP68, Criptografia AES-256" },
  {
    name: "HP686",
    img: asset("/assets/radios/imgi_8_HP686-680x680.png"),
    tag: "DMR",
    desc: "Compacto, áudio HD, longa bateria",
  },
  {
    name: "HP606",
    img: asset("/assets/radios/imgi_9_HP606-680x680.png"),
    tag: "DMR",
    desc: "IP67, robusto, entrada simplificada",
  },
  {
    name: "HP506",
    img: asset("/assets/radios/imgi_10_HP506-7-680x680.png"),
    tag: "DMR",
    desc: "Ultra compacto, ideal para eventos",
  },
  { name: "PT890", img: asset("/assets/radios/imgi_4_PT890-680x680.png"), tag: "DMR", desc: "Tela grande, GPS + BeiDou" },
  { name: "PT590", img: asset("/assets/radios/imgi_5_PT590-680x680.png"), tag: "DMR", desc: "Design slim, MIL-STD-810" },
  {
    name: "PNC-380",
    img: asset("/assets/radios/imgi_12_PNC-380-3.png"),
    tag: "PoC 4G",
    desc: "Push-to-talk via rede celular",
  },
];

const BG = "#0e3070";

const LocacaoCarouselSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dragged, setDragged] = useState(false);

  return (
    <section className="relative z-10">
      <div
        className="rounded-t-3xl -mt-8 py-20 relative overflow-hidden"
        style={{
          background:
            `radial-gradient(ellipse 70% 50% at 80% 20%, rgba(91,200,239,0.18) 0%, transparent 55%),` +
            `radial-gradient(ellipse 60% 45% at 15% 75%, rgba(31,156,216,0.15) 0%, transparent 50%),` +
            `linear-gradient(160deg, ${BG} 0%, #0a2560 50%, #091e52 100%)`,
        }}
      >
        {/* Orbs */}
        <div
          className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none animate-float-orb"
          style={{
            background: "radial-gradient(circle, rgba(91,200,239,0.22) 0%, transparent 65%)",
            filter: "blur(90px)",
          }}
        />
        <div
          className="absolute bottom-0 left-10 w-56 h-56 rounded-full pointer-events-none animate-float-orb animation-delay-2000"
          style={{
            background: "radial-gradient(circle, rgba(32,114,185,0.18) 0%, transparent 65%)",
            filter: "blur(70px)",
          }}
        />

        {/* Header */}
        <div className="container mx-auto px-4 relative z-10 mb-8">
          <span
            className="text-xs uppercase tracking-[3px] block text-center mb-4"
            style={{ ...ms6, color: "#7ec8ef" }}
          >
            Locação de radiocomunicadores
          </span>
          <h2 className="text-3xl md:text-4xl text-center text-white mb-4" style={ms}>
            Rádios na sua mão.{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(90deg, #5bc8ef, #a8e0f8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              No prazo que você precisa.
            </span>
          </h2>
          <p className="text-center max-w-2xl mx-auto" style={{ ...ms4, color: "rgba(200,233,248,0.70)" }}>
            Sem burocracia, sem estoque parado, sem preocupação com manutenção. Você aluga, a gente entrega funcionando.
          </p>
        </div>

        {/* Carrossel */}
        <div className="relative overflow-hidden cursor-grab active:cursor-grabbing" ref={containerRef}>
          <div
            className="absolute left-0 top-0 bottom-0 w-44 z-10 pointer-events-none hidden md:block"
            style={{ background: `linear-gradient(to right, ${BG}, transparent)` }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-44 z-10 pointer-events-none hidden md:block"
            style={{ background: `linear-gradient(to left, #091e52, transparent)` }}
          />

          <motion.div
            className="flex gap-3 sm:gap-4 px-4 sm:px-8"
            drag="x"
            dragConstraints={containerRef}
            onDragStart={() => setDragged(true)}
            style={{ width: "max-content" }}
          >
            {locacaoRadios.map((radio) => (
              <div
                key={radio.name}
                className="w-[200px] sm:w-[260px] flex-shrink-0 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 group"
                style={{
                  background: "#ffffff",
                  boxShadow: "0 4px 28px rgba(14,74,173,0.18)",
                  border: "1px solid rgba(31,156,216,0.10)",
                }}
              >
                {/* Área da imagem — azul clarinho */}
                <div className="flex items-center justify-center h-[200px]" style={{ background: "#ffffff" }}>
                  <img
                    src={radio.img}
                    alt={radio.name}
                    className="h-36 object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Info — branco puro */}
                <div className="p-4 space-y-2.5" style={{ background: "#ffffff" }}>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base" style={{ ...ms, color: "#0a2a5e" }}>
                      {radio.name}
                    </h3>
                    <span
                      className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full whitespace-nowrap"
                      style={{
                        ...ms6,
                        background: "#EBF2FF",
                        color: "#0E4AAD",
                        border: "1px solid rgba(14,74,173,0.20)",
                      }}
                    >
                      {radio.tag}
                    </span>
                  </div>
                  <p className="text-xs" style={{ ...ms4, color: "#4a6080" }}>
                    {radio.desc}
                  </p>
                  <Button
                    asChild
                    size="sm"
                    className="w-full text-white"
                    style={{
                      ...ms6,
                      background: "linear-gradient(90deg, #0E4AAD, #1F9CD8)",
                      boxShadow: "0 4px 14px rgba(31,156,216,0.28)",
                    }}
                  >
                    <a href="#contato">Solicitar locação</a>
                  </Button>
                </div>
              </div>
            ))}
          </motion.div>

          {!dragged && (
            <div
              className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs animate-pulse z-20"
              style={{ ...ms6, color: "rgba(126,200,239,0.55)" }}
            >
              <GripHorizontal size={14} />
              arraste para explorar
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="container mx-auto px-4 mt-10 text-center">
          <Button
            asChild
            size="lg"
            className="text-white w-full sm:w-auto"
            style={{
              ...ms,
              background: "linear-gradient(90deg, #1263c8, #1F9CD8)",
              boxShadow: "0 8px 32px rgba(31,156,216,0.35)",
            }}
          >
            <a href="#contato">Verificar disponibilidade</a>
          </Button>
          <p className="text-xs mt-3" style={{ ...ms4, color: "rgba(200,233,248,0.40)" }}>
            Resposta em até 2h úteis · Cotação gratuita
          </p>
        </div>
      </div>
    </section>
  );
};

export default LocacaoCarouselSection;
