import { Building2, ShieldCheck, Calendar, Factory, Hotel, ShoppingBag, Truck, Stethoscope } from "lucide-react";

const ms = { fontFamily: "'Montserrat', sans-serif", fontWeight: 700 };
const ms4 = { fontFamily: "'Montserrat', sans-serif", fontWeight: 400 };
const ms5 = { fontFamily: "'Montserrat', sans-serif", fontWeight: 500 };
const ms6 = { fontFamily: "'Montserrat', sans-serif", fontWeight: 600 };

const setores = [
  {
    icon: ShieldCheck,
    label: "Segurança patrimonial",
    desc: "Rádios e sistemas para vigilantes, porteiros e equipes de segurança em grandes complexos.",
  },
  {
    icon: ShoppingBag,
    label: "Shoppings e varejo",
    desc: "Comunicação entre lojas, operações, segurança e manutenção em centros comerciais.",
  },
  {
    icon: Stethoscope,
    label: "Hospitais e saúde",
    desc: "Equipamentos homologados para ambientes hospitalares com cobertura em todas as alas.",
  },
  {
    icon: Calendar,
    label: "Eventos e feiras",
    desc: "Locação rápida com entrega configurada. Técnico disponível durante toda a operação.",
  },
  {
    icon: Factory,
    label: "Indústria e petroquímica",
    desc: "Rádios ATEX certificados para ambientes explosivos e áreas de risco industrial.",
  },
  {
    icon: Truck,
    label: "Logística e transporte",
    desc: "Rastreamento, despacho e comunicação integrados para frotas e operações de campo.",
  },
  {
    icon: Building2,
    label: "Construção civil",
    desc: "Rádios robustos IP67/IP68 para obras, canteiros e ambientes com poeira e umidade.",
  },
  { icon: Hotel, label: "Hotelaria", desc: "Comunicação discreta entre equipes de governança, manutenção e recepção." },
];

const FlipCard = ({ setor }: { setor: (typeof setores)[0] }) => (
  <div className="group" style={{ perspective: "1000px", height: 160 }}>
    <div
      className="relative w-full h-full transition-transform duration-500"
      style={{
        transformStyle: "preserve-3d",
        transform: "rotateY(0deg)",
      }}
    >
      {/* CSS injeta o flip via hover no grupo */}
      <style>{`
        .flip-group:hover .flip-inner { transform: rotateY(180deg); }
      `}</style>

      <div className="flip-group group relative w-full h-full" style={{ perspective: "1000px" }}>
        <div
          className="flip-inner relative w-full h-full transition-all duration-500"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* FRENTE — ícone centralizado */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-2xl"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(91,200,239,0.18)",
              backdropFilter: "blur(8px)",
            }}
          >
            <setor.icon className="w-8 h-8" style={{ color: "#5bc8ef" }} />
            <span className="text-sm text-white text-center px-3" style={ms5}>
              {setor.label}
            </span>
          </div>

          {/* VERSO — texto descritivo */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-2xl px-4"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              background: "linear-gradient(135deg, rgba(14,74,173,0.85), rgba(31,156,216,0.75))",
              border: "1px solid rgba(91,200,239,0.30)",
              backdropFilter: "blur(8px)",
            }}
          >
            <setor.icon className="w-5 h-5 opacity-70" style={{ color: "#ffffff" }} />
            <span className="text-xs text-white/90 text-center leading-relaxed" style={ms4}>
              {setor.desc}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SetoresSection = () => {
  return (
    <section className="relative z-10">
      <div
        className="rounded-t-3xl -mt-8 py-20 relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 10% 20%, rgba(91,200,239,0.14) 0%, transparent 55%)," +
            "radial-gradient(ellipse 55% 45% at 85% 80%, rgba(31,156,216,0.12) 0%, transparent 50%)," +
            "linear-gradient(160deg, #0f3278 0%, #0b2760 50%, #091e52 100%)",
        }}
      >
        {/* Orbs */}
        <div
          className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none animate-float-orb"
          style={{
            background: "radial-gradient(circle, rgba(91,200,239,0.18) 0%, transparent 65%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-0 left-10 w-52 h-52 rounded-full pointer-events-none animate-float-orb animation-delay-2000"
          style={{
            background: "radial-gradient(circle, rgba(32,114,185,0.15) 0%, transparent 65%)",
            filter: "blur(70px)",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[3px] block mb-3" style={{ ...ms6, color: "#7ec8ef" }}>
              Mercados que atendemos
            </span>
            <h2 className="text-3xl md:text-4xl text-white mb-4" style={ms}>
              Setores que{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(90deg,#5bc8ef,#a8e0f8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                atendemos
              </span>
            </h2>
            <p className="max-w-2xl mx-auto" style={{ ...ms4, color: "rgba(200,233,248,0.70)" }}>
              De hospitais a petroquímicas, de eventos a shoppings. Cada operação tem sua necessidade e a gente
              dimensiona a solução certa.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {setores.map((s, i) => (
              <FlipCard key={i} setor={s} />
            ))}
          </div>

          {/* Rodapé discreto */}
          <p className="text-center mt-10 text-xs hidden md:block" style={{ ...ms4, color: "rgba(200,233,248,0.35)" }}>
            Passe o mouse sobre cada setor para saber mais
          </p>
        </div>
      </div>
    </section>
  );
};

export default SetoresSection;
