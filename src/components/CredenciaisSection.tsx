import React, { useEffect, useRef } from "react";

const ms700 = { fontFamily: "'Montserrat', sans-serif", fontWeight: 700 };
const ms600 = { fontFamily: "'Montserrat', sans-serif", fontWeight: 600 };
const ms400 = { fontFamily: "'Montserrat', sans-serif", fontWeight: 400 };

/* ── GlowCard inline (mesmo efeito do projeto) ── */
let _cssInjected = false;
const injectGlowCSS = () => {
  if (_cssInjected || typeof document === "undefined") return;
  _cssInjected = true;
  const s = document.createElement("style");
  s.innerHTML = `
    .ideal-stat-glow::before,
    .ideal-stat-glow::after {
      pointer-events: none;
      content: "";
      position: absolute;
      inset: -2px;
      border: 2px solid transparent;
      border-radius: 16px;
      background-attachment: fixed;
      background-size: calc(100% + 4px) calc(100% + 4px);
      background-repeat: no-repeat;
      background-position: 50% 50%;
      mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
      mask-clip: padding-box, border-box;
      mask-composite: intersect;
    }
    .ideal-stat-glow::before {
      background-image: radial-gradient(
        165px 165px at calc(var(--gx,0)*1px) calc(var(--gy,0)*1px),
        hsl(calc(205 + var(--gxp,0)*22) 88% 58% / 0.95), transparent 100%
      );
      filter: brightness(1.9);
    }
    .ideal-stat-glow::after {
      background-image: radial-gradient(
        110px 110px at calc(var(--gx,0)*1px) calc(var(--gy,0)*1px),
        hsl(0 100% 100% / 0.55), transparent 100%
      );
    }
  `;
  document.head.appendChild(s);
};

const StatCard = ({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    injectGlowCSS();
    const move = (e: PointerEvent) => {
      if (!ref.current) return;
      ref.current.style.setProperty("--gx", e.clientX.toFixed(1));
      ref.current.style.setProperty("--gxp", (e.clientX / window.innerWidth).toFixed(4));
      ref.current.style.setProperty("--gy", e.clientY.toFixed(1));
      ref.current.style.backgroundImage = `radial-gradient(
        180px 180px at ${e.clientX}px ${e.clientY}px,
        hsl(${205 + (e.clientX / window.innerWidth) * 22} 80% 58% / 0.09),
        transparent
      )`;
    };
    document.addEventListener("pointermove", move);
    return () => document.removeEventListener("pointermove", move);
  }, []);

  return (
    <div
      ref={ref}
      className="ideal-stat-glow relative flex flex-col justify-between rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(31,156,216,0.18)",
        backdropFilter: "blur(14px)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 4px 24px rgba(0,0,0,0.25)",
        minHeight: 148,
        backgroundAttachment: "fixed",
        backgroundPosition: "50% 50%",
      }}
    >
      <div style={{ color: "#1F9CD8", opacity: 0.7 }}>{icon}</div>
      <div className="mt-6 space-y-0.5">
        <div className="text-3xl md:text-4xl leading-none text-white" style={ms700}>
          {value}
        </div>
        <div className="text-xs leading-snug" style={{ ...ms400, color: "rgba(200,233,248,0.50)" }}>
          {label}
        </div>
      </div>
    </div>
  );
};

const stats = [
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    value: "18+",
    label: "anos no mercado",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    value: "200+",
    label: "empresas atendidas",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    value: "100%",
    label: "cobertura nacional",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    value: "48h",
    label: "suporte técnico garantido",
  },
];

const WingsCard = () => {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    injectGlowCSS();
    const move = (e: PointerEvent) => {
      if (!ref.current) return;
      ref.current.style.setProperty("--gx", e.clientX.toFixed(1));
      ref.current.style.setProperty("--gxp", (e.clientX / window.innerWidth).toFixed(4));
      ref.current.style.setProperty("--gy", e.clientY.toFixed(1));
      ref.current.style.backgroundImage = `radial-gradient(
        180px 180px at ${e.clientX}px ${e.clientY}px,
        hsl(${205 + (e.clientX / window.innerWidth) * 22} 80% 58% / 0.13),
        transparent
      )`;
    };
    document.addEventListener("pointermove", move);
    return () => document.removeEventListener("pointermove", move);
  }, []);

  return (
    <div
      ref={ref}
      className="ideal-stat-glow relative flex flex-col justify-between rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "rgba(14,74,173,0.18)",
        border: "1px solid rgba(31,156,216,0.28)",
        backdropFilter: "blur(14px)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 4px 24px rgba(0,0,0,0.25)",
        minHeight: 148,
        backgroundAttachment: "fixed",
        backgroundPosition: "50% 50%",
      }}
    >
      {/* ícone topo — mesmo padrão do StatCard */}
      <div style={{ color: "#1F9CD8", opacity: 0.85 }}>
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      </div>

      {/* texto embaixo — mesmo padrão do StatCard */}
      <div className="mt-6 space-y-0.5">
        <div className="text-3xl md:text-4xl leading-none text-white" style={ms700}>
          Wings+
        </div>
        <div className="text-xs leading-snug" style={{ ...ms400, color: "rgba(200,233,248,0.50)" }}>
          Hytera Partner, cert. internacional
        </div>
      </div>
    </div>
  );
};

const CredenciaisSection = () => (
  <section className="relative z-10 -mt-8">
    <div className="rounded-t-3xl overflow-hidden relative" style={{ minHeight: 300 }}>
      {/* fundo — mesmas cores exatas do HeroSection */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(160deg, #0d3578 0%, #0a2255 50%, #071a45 100%)",
        }}
      />
      {/* orb topo esquerda */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-20%",
          left: "-10%",
          width: 520,
          height: 520,
          background: "radial-gradient(circle, rgba(31,156,216,0.22) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />
      {/* orb baixo direita */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-20%",
          right: "-8%",
          width: 460,
          height: 460,
          background: "radial-gradient(circle, rgba(14,74,173,0.20) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />
      {/* spotlight centro */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 600,
          height: 300,
          background: "radial-gradient(ellipse, rgba(31,156,216,0.12) 0%, transparent 65%)",
          filter: "blur(40px)",
        }}
      />

      {/* conteúdo */}
      <div className="relative z-10 container mx-auto px-6 py-16 md:py-20 space-y-8">
        {/* Linha 1: badge + headline */}
        <div className="space-y-4">
          <span
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[3px] px-3 py-1.5 rounded-full"
            style={{
              ...ms600,
              color: "#7ec8ef",
              background: "rgba(31,156,216,0.10)",
              border: "1px solid rgba(31,156,216,0.22)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#1F9CD8" }} />
            Resultados reais
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-white" style={ms700}>
            Comunicação{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(90deg, #5bc8ef, #ffffff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              que não falha.
            </span>
          </h2>
        </div>

        {/* Uma linha só: 4 stats + Wings+ */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} />
          ))}
          <WingsCard />
        </div>
      </div>

      {/* linha inferior glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(31,156,216,0.35) 30%, rgba(31,156,216,0.35) 70%, transparent 100%)",
        }}
      />
    </div>
  </section>
);

export default CredenciaisSection;
