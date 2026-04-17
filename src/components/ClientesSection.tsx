import { asset } from "@/lib/assets";

const ms = { fontFamily: "'Montserrat', sans-serif", fontWeight: 700 };
const ms4 = { fontFamily: "'Montserrat', sans-serif", fontWeight: 400 };

const clientLogos = [
  { src: asset("/assets/clientes/imgi_3_logo-apas.jpeg"), alt: "APAS" },
  { src: asset("/assets/clientes/imgi_5_logo-comgas.jpeg"), alt: "Comgás" },
  { src: asset("/assets/clientes/imgi_6_logo-sirio-libanes.jpeg"), alt: "Sírio-Libanês" },
  { src: asset("/assets/clientes/imgi_8_logo-sodexo.jpeg"), alt: "Sodexo" },
  { src: asset("/assets/clientes/imgi_10_logo-valid.jpeg"), alt: "Valid" },
  { src: asset("/assets/clientes/imgi_12_logo-votorantim.jpeg"), alt: "Votorantim" },
  { src: asset("/assets/clientes/imgi_9_logo-temon.jpeg"), alt: "Temon" },
  { src: asset("/assets/clientes/imgi_11_logo-verzani-1.jpeg"), alt: "Verzani" },
  { src: asset("/assets/clientes/imgi_4_logo-atrium-shopping-1.jpeg"), alt: "Atrium Shopping" },
  { src: asset("/assets/clientes/imgi_7_logo-parque-das-bandeiras-shopping.jpeg"), alt: "Parque das Bandeiras" },
];

/* duplica para scroll infinito */
const track = [...clientLogos, ...clientLogos, ...clientLogos];

const ClientesSection = () => {
  return (
    <section className="relative z-10 bg-white py-20 overflow-hidden">
      {/* Cabeçalho */}
      <div className="container mx-auto px-4 text-center mb-12">
        <span
          className="text-xs uppercase tracking-[3px] block mb-3"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: "#2072B9" }}
        >
          Quem confia na Ideal
        </span>
        <h2 className="text-3xl md:text-4xl text-gray-900" style={ms}>
          Empresas que <span style={{ color: "#0E4AAD" }}>confiam</span> na Ideal
        </h2>
        <p className="mt-3 text-gray-400 max-w-xl mx-auto" style={ms4}>
          Mais de 200 empresas de diferentes setores escolheram a Ideal para manter suas operações conectadas.
        </p>
      </div>

      {/* ── Faixa de logos ── */}
      <div className="relative">
        {/* fades nas bordas */}
        <div
          className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #ffffff, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #ffffff, transparent)" }}
        />

        {/* trilho animado */}
        <div
          className="flex gap-12 items-center animate-scroll-left"
          style={{ width: "max-content", paddingLeft: 48, paddingRight: 48 }}
        >
          {track.map((logo, i) => (
            <div key={i} className="shrink-0 flex items-center justify-center" style={{ width: 160, height: 80 }}>
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-16 max-w-[140px] w-auto object-contain grayscale hover:grayscale-0 opacity-55 hover:opacity-100 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ── Linha decorativa inferior ── */}
      <div className="container mx-auto px-4 mt-12 flex items-center gap-4">
        <div className="flex-1 h-px bg-gray-100" />
        <span className="text-xs text-gray-300 uppercase tracking-widest shrink-0" style={ms4}>
          200+ empresas atendidas
        </span>
        <div className="flex-1 h-px bg-gray-100" />
      </div>
    </section>
  );
};

export default ClientesSection;
