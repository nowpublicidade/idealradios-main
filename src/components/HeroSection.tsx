import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { asset } from "@/lib/assets";

const ms = { fontFamily: "'Montserrat', sans-serif", fontWeight: 700 };

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{ background: "#0a2a5e" }}
    >
      {/* ── Gradiente de fundo ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(31,156,216,0.28) 0%, transparent 60%)," +
            "radial-gradient(ellipse 60% 50% at 75% 70%, rgba(32,114,185,0.22) 0%, transparent 55%)," +
            "linear-gradient(160deg, #0d3578 0%, #0a2255 50%, #071a45 100%)",
        }}
      />

      {/* ── Orbs ── */}
      <div
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full animate-float-orb pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(31,156,216,0.35) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute -bottom-40 -right-24 w-[540px] h-[540px] rounded-full animate-float-orb animation-delay-2000 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(32,114,185,0.30) 0%, transparent 65%)",
          filter: "blur(90px)",
        }}
      />

      {/* ── Conteúdo ── */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Texto */}
          <div className="space-y-8 animate-fade-in-up text-center lg:text-left">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm"
              style={{
                ...ms,
                background: "rgba(255,255,255,0.10)",
                borderColor: "rgba(100,200,245,0.35)",
                color: "#c8e9f8",
              }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#5bc8ef" }} />
              Wings+ Hytera Authorized Dealer
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl leading-tight text-white" style={ms}>
              Sua operação não pode parar por falta de{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(90deg, #5bc8ef, #a8e0f8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                comunicação
              </span>
            </h1>

            <p className="text-lg max-w-lg" style={{ ...ms, fontWeight: 400, color: "rgba(200,233,248,0.80)" }}>
              Locação, venda e assistência técnica em radiocomunicadores Hytera e Motorola. Cobertura nacional com
              entrega em até 48h.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
              <Button
                asChild
                size="lg"
                className="text-base text-white w-full sm:w-auto"
                style={{
                  ...ms,
                  background: "linear-gradient(90deg, #1263c8, #1F9CD8)",
                  boxShadow: "0 8px 32px rgba(31,156,216,0.35)",
                }}
              >
                <a href="#contato">Quero uma cotação agora</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base hover:text-white transition-colors w-full sm:w-auto"
                style={{
                  ...ms,
                  borderColor: "rgba(100,200,245,0.40)",
                  background: "rgba(255,255,255,0.07)",
                  color: "#c8e9f8",
                }}
              >
                <a href="https://wa.me/551127592520" target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={18} className="mr-2" />
                  Falar no WhatsApp
                </a>
              </Button>
            </div>

            {/* Mini stats */}
            <div className="flex items-center justify-center sm:justify-start gap-8 pt-2">
              {[
                { value: "18+", label: "anos no mercado" },
                { value: "48h", label: "entrega nacional" },
                { value: "Wings+", label: "cert. Hytera" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-xl text-white" style={ms}>
                    {stat.value}
                  </div>
                  <div
                    className="text-xs uppercase tracking-wider"
                    style={{ ...ms, fontWeight: 500, color: "rgba(200,233,248,0.55)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Lado direito: radio maior + círculos + badges sobrepostos ── */}
          <div className="relative hidden lg:flex justify-center items-center min-h-[560px]">
            {/* Círculos concêntricos centrados no rádio */}
            {[560, 440, 320, 210].map((size, i) => (
              <div
                key={size}
                className="absolute rounded-full border pointer-events-none"
                style={{
                  width: size,
                  height: size,
                  borderColor: `rgba(91,200,239,${0.06 + i * 0.02})`,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  animation: `pulse-ring ${3 + i * 0.8}s ease-in-out infinite`,
                  animationDelay: `${i * 0.6}s`,
                }}
              />
            ))}

            {/* Rádio principal — maior */}
            <img
              src={asset("/assets/hero-radios.png")}
              alt="Rádios Hytera profissionais"
              className="relative z-10 animate-float"
              style={{
                width: 500,
                filter: "drop-shadow(0 20px 60px rgba(31,156,216,0.60))",
              }}
            />

            {/* Badges sobrepostos ao rádio */}
            {[
              { text: "DMR / TETRA", top: "12%", right: "4%" },
              { text: "GPS Integrado", top: "52%", left: "2%" },
              { text: "AES-256", bottom: "12%", right: "6%" },
            ].map((badge) => (
              <div
                key={badge.text}
                className="absolute z-20 px-3 py-1.5 rounded-full border text-xs backdrop-blur-sm"
                style={{
                  ...ms,
                  fontWeight: 600,
                  background: "rgba(18,99,200,0.55)",
                  borderColor: "rgba(100,200,245,0.45)",
                  color: "#c8e9f8",
                  top: badge.top,
                  bottom: badge.bottom,
                  left: badge.left,
                  right: badge.right,
                  boxShadow: "0 4px 16px rgba(14,74,173,0.30)",
                }}
              >
                {badge.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
