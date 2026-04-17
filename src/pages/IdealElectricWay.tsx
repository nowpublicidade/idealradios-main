import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Leaf,
  Battery,
  DollarSign,
  Wrench,
  Car,
  Headphones,
  ShoppingBag,
  Plane,
  Factory,
  Anchor,
  Stethoscope,
  TreePine,
  Calendar,
  GraduationCap,
  Settings,
  Phone,
  ChevronRight,
  ArrowLeft,
  Menu,
  X,
  Zap,
  Mail,
  Globe,
  MessageSquare,
  Building2,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionReveal } from "@/components/SectionReveal";
import Footer from "@/components/Footer";
import { asset } from "@/lib/assets";

const ms700 = { fontFamily: "'Montserrat', sans-serif", fontWeight: 700 };
const ms600 = { fontFamily: "'Montserrat', sans-serif", fontWeight: 600 };
const ms500 = { fontFamily: "'Montserrat', sans-serif", fontWeight: 500 };
const ms400 = { fontFamily: "'Montserrat', sans-serif", fontWeight: 400 };
const bc700 = { fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 };

/* ─── DATA ─── */
const products = [
  {
    name: "IEW-D70",
    subtitle: "Diciclo Elétrico Corporativo",
    img: asset("/assets/iew/imgi_25_D70-1024x1024.jpeg"),
    desc: "Solução ágil para ambientes internos e controlados. Mobilidade prática em shoppings, fábricas, galpões, centros logísticos, aeroportos e hospitais.",
    modal: {
      tagline: "Mobilidade indoor de alta precisão",
      about:
        "O IEW-D70 foi desenvolvido para operações em ambientes internos onde agilidade e controle são essenciais. Seu porte compacto e raio de giro reduzido permitem navegação fluida em corredores, galpões e espaços com fluxo de pessoas.",
      specs: [
        { label: "Velocidade máx.", value: "20 km/h" },
        { label: "Autonomia", value: "até 35 km" },
        { label: "Carga máx.", value: "120 kg" },
        { label: "Peso do veículo", value: "52 kg" },
        { label: "Tempo de carga", value: "4–6 horas" },
        { label: "Motor", value: "700 W (hub motor)" },
      ],
      ideal: ["Shoppings e galerias", "Fábricas e galpões", "Centros logísticos", "Aeroportos e hospitais"],
    },
  },
  {
    name: "IEW-D90",
    subtitle: "Diciclo Elétrico Outdoor",
    img: asset("/assets/iew/imgi_24_D90.jpeg"),
    desc: "Mobilidade elétrica para áreas externas e amplas. Ideal para estacionamentos, condomínios corporativos, parques industriais, áreas portuárias e orlas.",
    modal: {
      tagline: "Robustez para ambientes externos",
      about:
        "O IEW-D90 foi projetado para operar em superfícies irregulares e áreas externas exigentes. Com pneus off-road de maior aderência e maior capacidade de bateria, garante autonomia e segurança mesmo em terrenos desafiadores.",
      specs: [
        { label: "Velocidade máx.", value: "25 km/h" },
        { label: "Autonomia", value: "até 50 km" },
        { label: "Carga máx.", value: "130 kg" },
        { label: "Peso do veículo", value: "65 kg" },
        { label: "Tempo de carga", value: "5–7 horas" },
        { label: "Motor", value: "900 W (hub motor)" },
      ],
      ideal: ["Estacionamentos e pátios", "Parques industriais", "Áreas portuárias", "Condomínios corporativos"],
    },
  },
  {
    name: "IEW-M1O",
    subtitle: "Moto Elétrica 10.000W",
    img: asset("/assets/iew/imgi_29_M1O-1024x1024.jpeg"),
    desc: "Alta autonomia para deslocamentos mais longos. Perfeita para grandes centros corporativos, campi universitários, shoppings e centros logísticos.",
    modal: {
      tagline: "Performance elétrica para grandes operações",
      about:
        "A IEW-M1O entrega potência real para operações que exigem velocidade e alcance. Com motor de 10.000W e bateria de alta densidade, é a solução para patrulhamento, entregas internas e deslocamentos de longa distância em grandes estruturas.",
      specs: [
        { label: "Velocidade máx.", value: "80 km/h" },
        { label: "Autonomia", value: "até 120 km" },
        { label: "Carga máx.", value: "150 kg" },
        { label: "Peso do veículo", value: "110 kg" },
        { label: "Tempo de carga", value: "6–8 horas" },
        { label: "Motor", value: "10.000 W" },
      ],
      ideal: ["Campi universitários", "Grandes centros corporativos", "Patrulhamento e segurança", "Logística interna"],
    },
  },
  {
    name: "IEW-T20",
    subtitle: "Moto Elétrica 12.000W",
    img: asset("/assets/iew/moto-iew-t20.jpeg"),
    desc: "Desempenho e resistência para patrulhamento em qualquer terreno. Estrutura reforçada para operações off-road exigentes.",
    modal: {
      tagline: "Potência além do asfalto",
      about:
        "A IEW-T20 foi projetada para ir além do asfalto. Com motor de 12.000W, autonomia de até 100 km e estrutura reforçada, ela garante desempenho real em operações que exigem resistência, agilidade e confiabilidade — do pátio industrial à estrada de terra.",
      specs: [
        { label: "Velocidade máx.", value: "até 100 km/h" },
        { label: "Autonomia", value: "até 100 km" },
        { label: "Capacidade de carga", value: "até 150 kg" },
        { label: "Potência do motor", value: "12.000 W" },
        { label: "Bateria", value: "Lítio 72V removível" },
        { label: "Transmissão", value: "Motor central com correia" },
        { label: "Freios", value: "Disco com sistema CBS" },
      ],
      ideal: ["Patrulhamento off-road", "Pátios industriais", "Áreas rurais e estradas de terra", "Operações de segurança"],
    },
  },
  {
    name: "IEW-C30",
    subtitle: "Cadeira de Rodas Motorizada",
    img: asset("/assets/iew/imgi_3_Site-Mirage-SX-01-730x730-1-600x600-1.jpeg"),
    desc: "Experiência mais confortável e inclusiva para clientes e visitantes em shoppings, hospitais, parques, aeroportos e centros corporativos.",
    modal: {
      tagline: "Inclusão e conforto em cada trajeto",
      about:
        "A IEW-C30 transforma a experiência de mobilidade para pessoas com dificuldade de locomoção. Silenciosa, estável e de fácil operação, proporciona autonomia e dignidade para clientes, pacientes e visitantes em qualquer ambiente corporativo.",
      specs: [
        { label: "Velocidade máx.", value: "6 km/h" },
        { label: "Autonomia", value: "até 20 km" },
        { label: "Carga máx.", value: "160 kg" },
        { label: "Peso do veículo", value: "95 kg" },
        { label: "Tempo de carga", value: "8 horas" },
        { label: "Motor", value: "2 × 250 W" },
      ],
      ideal: ["Shoppings e centros comerciais", "Hospitais e clínicas", "Parques temáticos", "Aeroportos"],
    },
  },
];

const advantages = [
  {
    icon: Leaf,
    label: "Zero Emissão",
    desc: "Operação 100% limpa, sem emissões de CO₂ ou ruído excessivo. Contribua para um planeta mais sustentável.",
  },
  {
    icon: Battery,
    label: "Autonomia Elevada",
    desc: "Baterias de alta capacidade para jornadas completas de trabalho sem interrupções.",
  },
  {
    icon: DollarSign,
    label: "Baixo Custo Operacional",
    desc: "Economia de até 90% em combustível e manutenção comparado a veículos convencionais.",
  },
  {
    icon: Wrench,
    label: "Manutenção Preventiva",
    desc: "Plano de manutenção programada incluído na locação, sem surpresas no orçamento.",
  },
  {
    icon: Car,
    label: "Frota Reserva",
    desc: "Veículo substituto imediato em caso de manutenção corretiva. Zero downtime.",
  },
  {
    icon: Headphones,
    label: "Assistência Nacional",
    desc: "Equipe técnica própria com cobertura em todo o território nacional.",
  },
];

const sectors = [
  { icon: ShoppingBag, label: "Shopping Centers" },
  { icon: Plane, label: "Aeroportos" },
  { icon: Factory, label: "Indústrias" },
  { icon: Anchor, label: "Portos" },
  { icon: Building2, label: "Condomínios Logísticos" },
  { icon: Stethoscope, label: "Hospitais" },
  { icon: TreePine, label: "Parques Temáticos" },
  { icon: Calendar, label: "Eventos" },
  { icon: GraduationCap, label: "Campi Universitários" },
  { icon: Settings, label: "Facilities" },
];

const timelineSteps = [
  { num: 1, title: "Contato Inicial", desc: "Fale com nosso time comercial e apresente sua operação.", icon: Phone },
  {
    num: 2,
    title: "Análise de Necessidades",
    desc: "Avaliamos o cenário da sua empresa e propomos a solução ideal.",
    icon: MessageSquare,
  },
  { num: 3, title: "Demonstração em Campo", desc: "Teste os veículos diretamente na sua operação.", icon: Zap },
  {
    num: 4,
    title: "Proposta Personalizada",
    desc: "Receba um plano de locação sob medida para sua demanda.",
    icon: DollarSign,
  },
  {
    num: 5,
    title: "Implantação e Treinamento",
    desc: "Entrega da frota com treinamento operacional completo.",
    icon: Car,
  },
  {
    num: 6,
    title: "Suporte Contínuo",
    desc: "Manutenção preventiva, assistência técnica e frota reserva garantida.",
    icon: Headphones,
  },
];

const segmentos = ["Shopping Center", "Indústria", "Aeroporto", "Hospital", "Condomínio Logístico", "Evento", "Outro"];

/* ─── PRODUCT MODAL ─── */
type Product = (typeof products)[0];

const ProductModal = ({ product, onClose }: { product: Product; onClose: () => void }) => {
  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const m = product.modal;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: "rgba(6,14,36,0.75)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl"
        style={{
          background: "white",
          boxShadow: "0 40px 120px rgba(0,0,0,0.35), 0 8px 32px rgba(14,74,173,0.15)",
          animation: "modalIn 0.28s cubic-bezier(0.34,1.56,0.64,1) both",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <style>{`
          @keyframes modalIn {
            from { opacity: 0; transform: scale(0.92) translateY(16px); }
            to   { opacity: 1; transform: scale(1) translateY(0); }
          }
        `}</style>

        {/* Image header */}
        <div
          className="relative h-56 flex items-center justify-center overflow-hidden rounded-t-3xl"
          style={{ background: "#ffffff" }}
        >
          <img
            src={product.img}
            alt={product.name}
            className="h-44 w-auto object-contain"
            style={{ filter: "drop-shadow(0 8px 24px rgba(14,74,173,0.18))" }}
          />
          {/* Transition strip from white to blue */}
          <div
            className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
            style={{ background: "linear-gradient(to top, #edf3ff, transparent)" }}
          />
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{ background: "rgba(14,74,173,0.10)", color: "#0E4AAD" }}
          >
            <X size={18} />
          </button>
          {/* Model badge */}
          <div
            className="absolute top-4 left-4 px-3 py-1.5 rounded-xl text-xs"
            style={{
              ...ms700,
              background: "linear-gradient(135deg, #0E4AAD, #1F9CD8)",
              color: "white",
              letterSpacing: "0.1em",
            }}
          >
            {product.name}
          </div>
        </div>

        {/* Content */}
        <div
          className="p-8 flex flex-col gap-7 rounded-b-3xl"
          style={{ background: "linear-gradient(180deg, #edf3ff 0%, #dce8fa 100%)" }}
        >
          {/* Title + tagline */}
          <div>
            <h2 className="text-2xl mb-1" style={{ ...ms700, color: "#0b2760" }}>
              {product.subtitle}
            </h2>
            <p className="text-sm" style={{ ...ms500, color: "#1F9CD8" }}>
              {m.tagline}
            </p>
          </div>

          {/* About */}
          <p className="text-sm leading-relaxed" style={{ ...ms400, color: "#3a5a80" }}>
            {m.about}
          </p>

          {/* Specs grid */}
          <div>
            <p className="text-xs uppercase tracking-[3px] mb-4" style={{ ...ms700, color: "#2072B9" }}>
              Especificações
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {m.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="rounded-2xl p-4 flex flex-col gap-1"
                  style={{
                    background: "#ffffff",
                    border: "1px solid rgba(14,74,173,0.10)",
                    boxShadow: "0 1px 4px rgba(14,74,173,0.06)",
                  }}
                >
                  <span className="text-xs" style={{ ...ms500, color: "#7a9abf" }}>
                    {spec.label}
                  </span>
                  <span className="text-base" style={{ ...ms700, color: "#0b2760" }}>
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Ideal para */}
          <div>
            <p className="text-xs uppercase tracking-[3px] mb-4" style={{ ...ms700, color: "#2072B9" }}>
              Ideal para
            </p>
            <div className="flex flex-wrap gap-2">
              {m.ideal.map((item) => (
                <span
                  key={item}
                  className="text-xs px-3 py-1.5 rounded-full"
                  style={{
                    ...ms500,
                    background: "rgba(255,255,255,0.85)",
                    color: "#0E4AAD",
                    border: "1px solid rgba(14,74,173,0.14)",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a
            href="#contato"
            onClick={onClose}
            className="inline-flex items-center justify-center gap-2 text-white rounded-2xl px-6 py-3.5 text-sm transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              ...ms700,
              background: "linear-gradient(135deg, #0E4AAD, #2072B9)",
              boxShadow: "0 8px 24px rgba(14,74,173,0.35)",
            }}
          >
            Solicitar demonstração do {product.name}
            <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

/* ─── NAVBAR IEW ─── */
const navLinksIEW = [
  { label: "Produtos", href: "#produtos" },
  { label: "Vantagens", href: "#vantagens" },
  { label: "Setores", href: "#setores" },
  { label: "Contato", href: "#contato" },
];

const NavbarIEW = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4"
      style={{ paddingTop: scrolled ? 8 : 16, transition: "padding 0.35s ease" }}
    >
      <nav
        className="w-full max-w-5xl flex items-center justify-between h-14 px-5 rounded-2xl"
        style={{
          background: scrolled ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.18)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          border: scrolled ? "1px solid rgba(14,74,173,0.14)" : "1px solid rgba(255,255,255,0.30)",
          boxShadow: scrolled
            ? "0 4px 32px rgba(14,74,173,0.10), inset 0 1px 0 rgba(255,255,255,0.80)"
            : "0 2px 16px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.35)",
          transition: "all 0.35s ease",
        }}
      >
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/"
            className="flex items-center gap-1 text-xs transition-colors"
            style={{ ...ms500, color: scrolled ? "#0E4AAD" : "rgba(255,255,255,0.8)" }}
          >
            <ArrowLeft size={14} />
            Ideal Rádios
          </Link>
          <span style={{ color: scrolled ? "rgba(14,74,173,0.2)" : "rgba(255,255,255,0.3)" }}>|</span>
          <span className="text-sm" style={{ ...ms700, color: scrolled ? "#0E4AAD" : "white" }}>
            Electric Way
          </span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {navLinksIEW.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm transition-colors duration-200 relative group"
              style={{ ...ms600, color: scrolled ? "#1a3a5c" : "rgba(255,255,255,0.92)" }}
            >
              {link.label}
              <span
                className="absolute -bottom-0.5 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 rounded-full"
                style={{ background: "linear-gradient(90deg,#0E4AAD,#1F9CD8)" }}
              />
            </a>
          ))}
        </div>

        <a
          href="#contato"
          className="hidden md:inline-flex items-center gap-2 text-sm text-white rounded-xl px-4 py-2 transition-all duration-200 hover:scale-105 active:scale-95"
          style={{
            ...ms700,
            background: "linear-gradient(90deg, #0E4AAD, #2072B9)",
            boxShadow: "0 4px 16px rgba(14,74,173,0.35)",
          }}
        >
          <Phone size={14} />
          Demonstração
        </a>

        <button
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-xl transition-colors"
          style={{
            color: scrolled ? "#0E4AAD" : "white",
            background: scrolled ? "rgba(14,74,173,0.08)" : "rgba(255,255,255,0.15)",
          }}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div
          className="absolute top-full mt-2 left-4 right-4 max-w-5xl mx-auto rounded-2xl px-5 py-5 space-y-3"
          style={{
            background: "rgba(255,255,255,0.96)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(14,74,173,0.12)",
            boxShadow: "0 8px 32px rgba(14,74,173,0.12)",
          }}
        >
          {navLinksIEW.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm py-2 border-b last:border-0"
              style={{ ...ms600, color: "#1a3a5c", borderColor: "rgba(14,74,173,0.08)" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 w-full text-sm text-white rounded-xl px-4 py-2.5 mt-2"
            style={{
              ...ms700,
              background: "linear-gradient(90deg, #0E4AAD, #2072B9)",
              boxShadow: "0 4px 16px rgba(14,74,173,0.30)",
            }}
          >
            <Phone size={14} />
            Demonstração
          </a>
        </div>
      )}
    </div>
  );
};

/* ─── SCROLL REVEAL CARD ─── */
const ScrollRevealCard = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const [visible, setVisible] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) rotateX(0deg)" : "translateY(28px) rotateX(6deg)",
        transition: "opacity 0.55s ease, transform 0.55s ease",
        perspective: "800px",
        transformOrigin: "top center",
      }}
    >
      {children}
    </div>
  );
};

/* ─── PAGE ─── */
const IdealElectricWay = () => {
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
    segmento: "",
    mensagem: "",
  });
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
    setFormData({ nome: "", empresa: "", email: "", telefone: "", segmento: "", mensagem: "" });
  };

  return (
    <div className="min-h-screen" style={{ background: "#060e24" }}>
      <NavbarIEW />
      {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}

      {/* ── 1. HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${asset("/assets/iew/hero-iew.png")}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Overlay escuro da esquerda para direita */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(6,14,36,0.88) 0%, rgba(6,14,36,0.75) 40%, rgba(6,14,36,0.45) 70%, rgba(6,14,36,0.25) 100%)," +
              "linear-gradient(to top, rgba(6,14,36,0.9) 0%, transparent 40%)",
          }}
        />
        <div className="container mx-auto px-4 relative z-10 pt-28 pb-20">
          <SectionReveal animation="fade-up" delay={0.1}>
            <span
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[4px] mb-6"
              style={{ ...ms600, color: "#1F9CD8" }}
            >
              <Zap size={14} />
              Mobilidade Elétrica Corporativa
            </span>
          </SectionReveal>
          <SectionReveal animation="fade-up" delay={0.2}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-white mb-6 max-w-4xl leading-tight" style={bc700}>
              Ideal{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(90deg, #2072B9, #1F9CD8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Electric Way
              </span>
            </h1>
          </SectionReveal>
          <SectionReveal animation="fade-up" delay={0.3}>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-4" style={ms500}>
              Mobilidade elétrica corporativa com a confiança de quem é referência em radiocomunicação há 18 anos.
            </p>
          </SectionReveal>
          <SectionReveal animation="fade-up" delay={0.4}>
            <p className="text-sm md:text-base text-white/55 max-w-2xl mb-10" style={ms400}>
              Soluções 100% elétricas para operações de segurança, facilities, logística interna e grandes
              infraestruturas. Locação corporativa com assistência técnica nacional, manutenção preventiva e frota
              reserva.
            </p>
          </SectionReveal>
          <SectionReveal animation="fade-up" delay={0.5}>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 text-white rounded-2xl px-8 py-4 text-base transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                ...ms700,
                background: "linear-gradient(135deg, #0E4AAD, #2072B9)",
                boxShadow: "0 8px 32px rgba(14,74,173,0.4)",
              }}
            >
              Solicite uma Demonstração
              <ChevronRight size={18} />
            </a>
          </SectionReveal>
        </div>
      </section>

      {/* ── 2. SOBRE A IEW ── */}
      <section className="relative z-10">
        <div
          className="rounded-t-3xl -mt-8 relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #eef5ff 0%, #ffffff 60%, #f0f7ff 100%)" }}
        >
          {/* Decorative background circles */}
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(32,114,185,0.06) 0%, transparent 70%)",
              transform: "translate(20%, -20%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(14,74,173,0.05) 0%, transparent 70%)",
              transform: "translate(-20%, 20%)",
            }}
          />

          {/* Top text block */}
          <div className="container mx-auto px-4 pt-20 pb-10 relative z-10">
            <SectionReveal animation="fade-up" delay={0.1}>
              <div className="max-w-5xl mx-auto">
                <span className="text-xs uppercase tracking-[3px] block mb-3" style={{ ...ms600, color: "#2072B9" }}>
                  Quem somos
                </span>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                  <h2 className="text-3xl md:text-5xl leading-tight" style={{ ...ms700, color: "#0b2760" }}>
                    Uma evolução natural da{" "}
                    <span
                      style={{
                        backgroundImage: "linear-gradient(90deg, #0E4AAD, #1F9CD8)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      Ideal Rádios
                    </span>
                  </h2>
                  <div className="shrink-0">
                    <div
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm"
                      style={{
                        ...ms600,
                        background: "linear-gradient(135deg, rgba(14,74,173,0.10), rgba(31,156,216,0.10))",
                        color: "#0E4AAD",
                        border: "1px solid rgba(14,74,173,0.18)",
                      }}
                    >
                      <Zap size={14} />
                      Locação corporativa exclusiva
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>

          {/* Image + text two-column block */}
          <div className="container mx-auto px-4 pb-20 relative z-10">
            <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8 items-center">
              {/* Image — takes 3 cols, tall and prominent */}
              <SectionReveal animation="fade-right" delay={0.15} className="md:col-span-3">
                <div
                  className="relative rounded-3xl overflow-hidden"
                  style={{
                    boxShadow: "0 24px 80px rgba(14,74,173,0.18), 0 4px 20px rgba(0,0,0,0.08)",
                    aspectRatio: "4/3",
                  }}
                >
                  <img
                    src={asset("/assets/iew/9bca4a6d-6c88-4ffc-9491-0c58444885ae.png")}
                    alt="Frota Ideal Electric Way"
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle gradient overlay at bottom */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: "linear-gradient(to top, rgba(11,39,96,0.30) 0%, transparent 55%)",
                    }}
                  />
                  {/* Badge over the image */}
                  <div
                    className="absolute bottom-5 left-5 inline-flex items-center gap-2 px-4 py-2 rounded-xl backdrop-blur-sm"
                    style={{
                      background: "rgba(255,255,255,0.18)",
                      border: "1px solid rgba(255,255,255,0.30)",
                    }}
                  >
                    <Zap size={13} style={{ color: "#1F9CD8" }} />
                    <span className="text-white text-xs" style={ms600}>
                      100% Elétrico
                    </span>
                  </div>
                </div>
              </SectionReveal>

              {/* Text — takes 2 cols */}
              <SectionReveal animation="fade-left" delay={0.25} className="md:col-span-2">
                <div className="flex flex-col gap-6">
                  <p className="text-base leading-relaxed" style={{ ...ms400, color: "#3a5a80" }}>
                    A Ideal Electric Way nasceu da necessidade real das operações dos nossos clientes. Eles já confiavam
                    na Ideal para garantir comunicação eficiente. Agora levamos essa mesma filosofia de confiabilidade,
                    suporte técnico próprio e continuidade operacional para a mobilidade corporativa.
                  </p>
                  <p className="text-base leading-relaxed" style={{ ...ms400, color: "#3a5a80" }}>
                    Funcionamos exclusivamente no modelo de{" "}
                    <strong style={{ ...ms600, color: "#0E4AAD" }}>locação corporativa</strong>, incluindo assistência
                    técnica nacional, manutenção preventiva, frota reserva e atendimento especializado.
                  </p>

                  {/* Three pillars */}
                  <div className="flex flex-col gap-3 mt-2">
                    {[
                      { icon: Wrench, label: "Manutenção preventiva inclusa" },
                      { icon: Car, label: "Frota reserva garantida" },
                      { icon: Headphones, label: "Assistência técnica nacional" },
                    ].map(({ icon: Icon, label }) => (
                      <div key={label} className="flex items-center gap-3">
                        <Icon size={16} style={{ color: "#0E4AAD" }} strokeWidth={1.5} />
                        <span className="text-sm" style={{ ...ms500, color: "#0b2760" }}>
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. PRODUTOS — 4 colunas, fundo branco ── */}
      <section id="produtos" className="relative z-20">
        <div
          className="rounded-t-3xl -mt-8 py-20 relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #0b2760 0%, #091e52 50%, #060e24 100%)" }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <SectionReveal animation="fade-up" delay={0.1}>
              <div className="text-center mb-14">
                <span className="text-xs uppercase tracking-[3px] block mb-3" style={{ ...ms600, color: "#1F9CD8" }}>
                  Nossa frota
                </span>
                <h2 className="text-3xl md:text-4xl text-white mb-4" style={ms700}>
                  Veículos elétricos para{" "}
                  <span
                    style={{
                      backgroundImage: "linear-gradient(90deg,#2072B9,#1F9CD8)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    cada operação
                  </span>
                </h2>
                <p className="max-w-2xl mx-auto" style={{ ...ms400, color: "rgba(200,233,248,0.65)" }}>
                  Cada modelo foi pensado para atender uma necessidade específica do mercado corporativo.
                </p>
              </div>
            </SectionReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
              {products.map((p, i) => (
                <SectionReveal key={p.name} animation="fade-up" delay={0.1 + i * 0.08}>
                  <div
                    className="rounded-2xl overflow-hidden transition-all duration-500 group h-full flex flex-col cursor-pointer"
                    style={{
                      background: "#ffffff",
                      boxShadow: "0 2px 20px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)",
                      border: "1px solid rgba(255,255,255,0.9)",
                    }}
                    onClick={() => setSelectedProduct(p)}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.transform = "translateY(-6px)";
                      el.style.background = "rgba(255,255,255,0.95)";
                      el.style.backdropFilter = "blur(20px)";
                      (el.style as any).WebkitBackdropFilter = "blur(20px)";
                      el.style.boxShadow =
                        "0 20px 60px rgba(14,74,173,0.18), 0 4px 16px rgba(14,74,173,0.12), inset 0 1px 0 rgba(255,255,255,1)";
                      el.style.border = "1px solid rgba(14,74,173,0.20)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.transform = "translateY(0)";
                      el.style.background = "#ffffff";
                      el.style.backdropFilter = "none";
                      (el.style as any).WebkitBackdropFilter = "none";
                      el.style.boxShadow = "0 2px 20px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)";
                      el.style.border = "1px solid rgba(255,255,255,0.9)";
                    }}
                  >
                    {/* Image area — pure white background */}
                    <div className="relative h-52 overflow-hidden" style={{ background: "#ffffff" }}>
                      <img
                        src={p.img}
                        alt={p.name}
                        className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-108"
                        style={{ transform: "scale(1)" }}
                      />
                      {/* Subtle blue shimmer line at bottom of image on hover */}
                      <div
                        className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ background: "linear-gradient(90deg, transparent, rgba(14,74,173,0.3), transparent)" }}
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-1" style={{ borderTop: "1px solid rgba(14,74,173,0.06)" }}>
                      <span className="text-xs tracking-[2px] uppercase mb-1.5" style={{ ...ms700, color: "#1F9CD8" }}>
                        {p.name}
                      </span>
                      <h3 className="text-sm mb-2.5 leading-snug" style={{ ...ms700, color: "#0b2760" }}>
                        {p.subtitle}
                      </h3>
                      <p className="text-xs leading-relaxed flex-1" style={{ ...ms400, color: "#5a7a9a" }}>
                        {p.desc}
                      </p>
                      {/* Ver detalhes */}
                      <div
                        className="mt-4 flex items-center gap-1 text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1 group-hover:translate-x-0"
                        style={{ ...ms600, color: "#0E4AAD" }}
                      >
                        Ver detalhes
                        <ChevronRight size={13} />
                      </div>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. DIFERENCIAIS ── */}
      <section id="vantagens" className="relative z-30">
        <div
          className="rounded-t-3xl -mt-8 py-20 relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #f0f7ff 0%, #ffffff 50%, #f0f7ff 100%)" }}
        >
          {/* Decorative orb */}
          <div
            className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(31,156,216,0.06) 0%, transparent 70%)",
              transform: "translate(30%, -50%)",
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              {/* Header */}
              <SectionReveal animation="fade-up" delay={0.1}>
                <div className="mb-16">
                  <span className="text-xs uppercase tracking-[3px] block mb-3" style={{ ...ms600, color: "#2072B9" }}>
                    Diferenciais
                  </span>
                  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <h2 className="text-3xl md:text-4xl" style={{ ...ms700, color: "#0b2760" }}>
                      Por que escolher a <span style={{ color: "#0E4AAD" }}>IEW</span>?
                    </h2>
                    <p className="text-sm max-w-xs text-right hidden md:block" style={{ ...ms400, color: "#7a9abf" }}>
                      Mais do que veículos, uma solução completa de mobilidade corporativa.
                    </p>
                  </div>
                </div>
              </SectionReveal>

              {/* Two-column layout: left = big number list, right = highlight card */}
              <div className="grid md:grid-cols-3 gap-8 items-start">
                {/* Left: 4 items */}
                <div className="md:col-span-2 flex flex-col gap-0">
                  {advantages.map((a, i) => (
                    <SectionReveal key={a.label} animation="fade-left" delay={0.1 + i * 0.07}>
                      <div
                        className="group flex items-start gap-6 py-6 transition-all duration-300 cursor-default"
                        style={{ borderBottom: i < advantages.length - 1 ? "1px solid rgba(14,74,173,0.08)" : "none" }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLDivElement).style.paddingLeft = "8px";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLDivElement).style.paddingLeft = "0px";
                        }}
                      >
                        {/* Number */}
                        <span
                          className="text-4xl leading-none shrink-0 w-10 text-right transition-all duration-300"
                          style={{
                            ...bc700,
                            color: "rgba(14,74,173,0.12)",
                            lineHeight: 1,
                          }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {/* Icon + content */}
                        <div className="flex items-start gap-4 flex-1">
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 group-hover:scale-110"
                            style={{
                              background: "linear-gradient(135deg, rgba(14,74,173,0.10), rgba(31,156,216,0.10))",
                              border: "1px solid rgba(14,74,173,0.12)",
                            }}
                          >
                            <a.icon size={18} strokeWidth={1.5} style={{ color: "#0E4AAD" }} />
                          </div>
                          <div>
                            <h3
                              className="text-base mb-1 transition-colors duration-200 group-hover:text-[#0E4AAD]"
                              style={{ ...ms700, color: "#0b2760" }}
                            >
                              {a.label}
                            </h3>
                            <p className="text-sm leading-relaxed" style={{ ...ms400, color: "#5a7a9a" }}>
                              {a.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </SectionReveal>
                  ))}
                </div>

                {/* Right: sticky highlight card */}
                <SectionReveal animation="fade-right" delay={0.2} className="md:col-span-1">
                  <div
                    className="sticky top-28 rounded-3xl p-8 flex flex-col gap-6"
                    style={{
                      background: "linear-gradient(145deg, #0b2760, #0E4AAD)",
                      boxShadow: "0 24px 64px rgba(14,74,173,0.28)",
                    }}
                  >
                    <Zap size={28} style={{ color: "#1F9CD8" }} strokeWidth={1.5} />
                    <div>
                      <p className="text-4xl text-white mb-1" style={{ ...bc700 }}>
                        90%
                      </p>
                      <p className="text-sm text-white/70 leading-relaxed" style={ms400}>
                        de economia em combustível e manutenção comparado a veículos convencionais.
                      </p>
                    </div>
                    <div className="h-px w-full" style={{ background: "rgba(255,255,255,0.12)" }} />
                    <div>
                      <p className="text-4xl text-white mb-1" style={{ ...bc700 }}>
                        18 anos
                      </p>
                      <p className="text-sm text-white/70 leading-relaxed" style={ms400}>
                        de expertise em soluções corporativas trazidas para a mobilidade elétrica.
                      </p>
                    </div>
                    <div className="h-px w-full" style={{ background: "rgba(255,255,255,0.12)" }} />
                    <div>
                      <p className="text-4xl text-white mb-1" style={{ ...bc700 }}>
                        Zero
                      </p>
                      <p className="text-sm text-white/70 leading-relaxed" style={ms400}>
                        downtime com frota reserva e assistência técnica própria em todo o Brasil.
                      </p>
                    </div>
                  </div>
                </SectionReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. SETORES — Glassmorphism ── */}
      <section id="setores" className="relative z-40">
        <div
          className="rounded-t-3xl -mt-8 py-20 relative overflow-hidden"
          style={{
            background: "linear-gradient(160deg, #0b2760 0%, #091e52 50%, #060e24 100%)",
          }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <SectionReveal animation="fade-up" delay={0.1}>
              <div className="text-center mb-14">
                <span className="text-xs uppercase tracking-[3px] block mb-3" style={{ ...ms600, color: "#1F9CD8" }}>
                  Mercados
                </span>
                <h2 className="text-3xl md:text-4xl text-white mb-4" style={ms700}>
                  Setores atendidos
                </h2>
              </div>
            </SectionReveal>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
              {sectors.map((s, i) => (
                <SectionReveal key={s.label} animation="fade-up" delay={0.05 + i * 0.05}>
                  <div
                    className="flex flex-col items-center gap-3 py-6 px-3 rounded-2xl transition-all duration-300 hover:scale-105"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      border: "1px solid rgba(255,255,255,0.18)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.15)";
                      (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.30)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.08)";
                      (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.18)";
                    }}
                  >
                    <s.icon size={28} style={{ color: "#1F9CD8" }} />
                    <span className="text-xs text-white text-center" style={ms600}>
                      {s.label}
                    </span>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. TIMELINE ── */}
      <section className="relative z-50">
        <div
          className="rounded-t-3xl -mt-8 py-20 relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #f0f7ff 0%, #ffffff 50%, #f0f7ff 100%)" }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <SectionReveal animation="fade-up" delay={0.1}>
              <div className="text-center mb-14">
                <span className="text-xs uppercase tracking-[3px] block mb-3" style={{ ...ms600, color: "#2072B9" }}>
                  Como funciona
                </span>
                <h2 className="text-3xl md:text-4xl mb-4" style={{ ...ms700, color: "#0b2760" }}>
                  Do contato à operação
                </h2>
              </div>
            </SectionReveal>

            <div className="max-w-3xl mx-auto relative">
              {/* Vertical line */}
              <div
                className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5"
                style={{ background: "linear-gradient(to bottom, #0E4AAD, #1F9CD8)", transform: "translateX(-50%)" }}
              />

              {timelineSteps.map((step, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <SectionReveal key={step.num} animation="fade-up" delay={0.1 + i * 0.1}>
                    <div
                      className={`relative flex items-start mb-12 last:mb-0 ${"md:justify-" + (isLeft ? "start" : "end")}`}
                    >
                      {/* Dot */}
                      <div
                        className="absolute left-6 md:left-1/2 w-12 h-12 rounded-full flex items-center justify-center z-10"
                        style={{
                          transform: "translate(-50%, 0)",
                          background: "linear-gradient(135deg, #0E4AAD, #2072B9)",
                          boxShadow: "0 4px 16px rgba(14,74,173,0.3)",
                        }}
                      >
                        <step.icon size={18} color="white" />
                      </div>

                      {/* Content */}
                      <div
                        className={`ml-20 md:ml-0 md:w-[calc(50%-40px)] rounded-2xl p-5 transition-all duration-300 hover:shadow-lg ${
                          isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                        }`}
                        style={{
                          background: "white",
                          border: "1px solid rgba(14,74,173,0.08)",
                          boxShadow: "0 2px 16px rgba(14,74,173,0.06)",
                        }}
                      >
                        <span className="text-xs font-bold" style={{ ...ms700, color: "#1F9CD8" }}>
                          Passo {step.num}
                        </span>
                        <h3 className="text-base mb-1 mt-1" style={{ ...ms700, color: "#0b2760" }}>
                          {step.title}
                        </h3>
                        <p className="text-sm" style={{ ...ms400, color: "#5a7a9a" }}>
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </SectionReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. DEPOIMENTO ── */}
      <section className="relative z-[60]">
        <div
          className="rounded-t-3xl -mt-8 py-24 relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #0b2760 0%, #091e52 60%, #060e24 100%)" }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <SectionReveal animation="fade-up" delay={0.1}>
              <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-8">
                <div
                  className="w-10 h-0.5 rounded-full"
                  style={{ background: "linear-gradient(90deg, #0E4AAD, #1F9CD8)" }}
                />
                <blockquote
                  className="text-xl md:text-2xl leading-relaxed text-white/90"
                  style={{ ...ms400, fontStyle: "italic" }}
                >
                  "A Ideal Electric Way nasce para complementar o que já fazemos com excelência. Nossos clientes
                  precisam de agilidade, alcance e eficiência. A IEW entrega exatamente isso."
                </blockquote>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-base text-white" style={ms700}>
                    Thiago Terra
                  </p>
                  <span
                    className="text-xs uppercase tracking-[3px] px-4 py-1.5 rounded-full"
                    style={{
                      ...ms600,
                      color: "#1F9CD8",
                      background: "rgba(31,156,216,0.10)",
                      border: "1px solid rgba(31,156,216,0.18)",
                    }}
                  >
                    Head de Negócios · Ideal Electric Way
                  </span>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ── 8. CONTATO — Lead capture ── */}
      <section id="contato" className="relative z-[70]">
        <div className="rounded-t-3xl -mt-8 py-20 relative overflow-hidden" style={{ background: "#F8FAFC" }}>
          <div className="container mx-auto px-4 relative z-10">
            <SectionReveal animation="fade-up" delay={0.1}>
              <div className="text-center mb-14">
                <span className="text-xs uppercase tracking-[3px] block mb-3" style={{ ...ms600, color: "#2072B9" }}>
                  Contato
                </span>
                <h2 className="text-3xl md:text-4xl mb-4" style={{ ...ms700, color: "#0b2760" }}>
                  Solicite uma demonstração gratuita
                </h2>
                <p className="max-w-2xl mx-auto text-base" style={{ ...ms400, color: "#3a5a80" }}>
                  Disponibilizamos demonstrações, visitas técnicas e testes em campo para que sua empresa avalie o
                  desempenho dos veículos de acordo com sua operação.
                </p>
              </div>
            </SectionReveal>

            <div className="grid md:grid-cols-5 gap-10 max-w-5xl mx-auto">
              {/* Formulário */}
              <SectionReveal animation="fade-left" delay={0.15} className="md:col-span-3">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="nome"
                      placeholder="Nome *"
                      required
                      value={formData.nome}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                      style={{
                        ...ms400,
                        background: "white",
                        border: "1px solid rgba(14,74,173,0.12)",
                        color: "#0b2760",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#0E4AAD")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(14,74,173,0.12)")}
                    />
                    <input
                      type="text"
                      name="empresa"
                      placeholder="Empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                      style={{
                        ...ms400,
                        background: "white",
                        border: "1px solid rgba(14,74,173,0.12)",
                        color: "#0b2760",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#0E4AAD")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(14,74,173,0.12)")}
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="E-mail *"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                      style={{
                        ...ms400,
                        background: "white",
                        border: "1px solid rgba(14,74,173,0.12)",
                        color: "#0b2760",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#0E4AAD")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(14,74,173,0.12)")}
                    />
                    <input
                      type="tel"
                      name="telefone"
                      placeholder="Telefone / WhatsApp *"
                      required
                      value={formData.telefone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                      style={{
                        ...ms400,
                        background: "white",
                        border: "1px solid rgba(14,74,173,0.12)",
                        color: "#0b2760",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#0E4AAD")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(14,74,173,0.12)")}
                    />
                  </div>
                  <select
                    name="segmento"
                    value={formData.segmento}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                    style={{
                      ...ms400,
                      background: "white",
                      border: "1px solid rgba(14,74,173,0.12)",
                      color: formData.segmento ? "#0b2760" : "#9ca3af",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#0E4AAD")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(14,74,173,0.12)")}
                  >
                    <option value="" disabled>
                      Segmento
                    </option>
                    {segmentos.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  <textarea
                    name="mensagem"
                    placeholder="Mensagem (opcional)"
                    rows={4}
                    value={formData.mensagem}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none"
                    style={{
                      ...ms400,
                      background: "white",
                      border: "1px solid rgba(14,74,173,0.12)",
                      color: "#0b2760",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#0E4AAD")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(14,74,173,0.12)")}
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white rounded-xl px-8 py-3.5 text-sm transition-all duration-200 hover:scale-105 active:scale-95"
                    style={{
                      ...ms700,
                      background: "#0E4AAD",
                      boxShadow: "0 4px 16px rgba(14,74,173,0.3)",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#0b3d8f")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "#0E4AAD")}
                  >
                    Solicitar Demonstração Gratuita
                    <ChevronRight size={16} />
                  </button>
                </form>
              </SectionReveal>

              {/* Info de contato */}
              <SectionReveal animation="fade-right" delay={0.2} className="md:col-span-2">
                <div
                  className="rounded-2xl p-8 h-full flex flex-col justify-center gap-6"
                  style={{
                    background: "white",
                    border: "1px solid rgba(14,74,173,0.08)",
                    boxShadow: "0 2px 16px rgba(14,74,173,0.06)",
                  }}
                >
                  <h3 className="text-lg mb-2" style={{ ...ms700, color: "#0b2760" }}>
                    Fale conosco
                  </h3>

                  <a
                    href="https://wa.me/551127592520"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 transition-colors group"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "rgba(14,74,173,0.08)" }}
                    >
                      <Phone size={18} style={{ color: "#0E4AAD" }} />
                    </div>
                    <div>
                      <p className="text-xs" style={{ ...ms500, color: "#5a7a9a" }}>
                        Telefone / WhatsApp
                      </p>
                      <p className="text-sm group-hover:underline" style={{ ...ms600, color: "#0b2760" }}>
                        (11) 2759-2520
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "rgba(14,74,173,0.08)" }}
                    >
                      <Mail size={18} style={{ color: "#0E4AAD" }} />
                    </div>
                    <div>
                      <p className="text-xs" style={{ ...ms500, color: "#5a7a9a" }}>
                        E-mail
                      </p>
                      <p className="text-sm" style={{ ...ms600, color: "#0b2760" }}>
                        contato@idealeletricway.com.br
                      </p>
                    </div>
                  </div>

                  <a
                    href="https://www.idealeletricway.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 transition-colors group"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "rgba(14,74,173,0.08)" }}
                    >
                      <Globe size={18} style={{ color: "#0E4AAD" }} />
                    </div>
                    <div>
                      <p className="text-xs" style={{ ...ms500, color: "#5a7a9a" }}>
                        Site
                      </p>
                      <p className="text-sm group-hover:underline" style={{ ...ms600, color: "#0b2760" }}>
                        www.idealeletricway.com.br
                      </p>
                    </div>
                  </a>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <Footer />

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Overlay */}
            <div
              className="absolute inset-0"
              style={{ background: "rgba(6,14,36,0.75)", backdropFilter: "blur(6px)" }}
              onClick={handleCloseSuccess}
            />
            {/* Card */}
            <motion.div
              className="relative rounded-2xl p-8 sm:p-10 max-w-md w-full text-center"
              style={{
                background: "#ffffff",
                boxShadow: "0 24px 80px rgba(14,74,173,0.25), 0 4px 20px rgba(0,0,0,0.10)",
              }}
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Check icon */}
              <div className="flex justify-center mb-5">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(14,74,173,0.08)",
                    border: "2px solid rgba(14,74,173,0.20)",
                    animation: "pulse 2.5s ease-in-out infinite",
                  }}
                >
                  <CheckCircle2 size={32} style={{ color: "#0E4AAD" }} />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl mb-3" style={{ ...ms700, color: "#0b2760" }}>
                Recebemos sua solicitação!
              </h3>

              <p className="text-sm leading-relaxed mb-4" style={{ ...ms400, color: "#4a6080" }}>
                Em breve, um de nossos consultores entrará em contato para agendar a demonstração na sua operação. Fique
                atento ao seu WhatsApp e e-mail.
              </p>

              <p
                className="text-xs mb-6 px-3 py-1.5 rounded-full inline-block"
                style={{
                  ...ms600,
                  color: "#0E4AAD",
                  background: "rgba(14,74,173,0.06)",
                  border: "1px solid rgba(14,74,173,0.12)",
                }}
              >
                Tempo médio de resposta: até 2 horas úteis
              </p>

              <div>
                <button
                  onClick={handleCloseSuccess}
                  className="w-full py-3 rounded-xl text-white text-sm transition-all duration-200"
                  style={{
                    ...ms700,
                    background: "#0E4AAD",
                    boxShadow: "0 4px 16px rgba(14,74,173,0.30)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#2072B9")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#0E4AAD")}
                >
                  Entendido
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default IdealElectricWay;
