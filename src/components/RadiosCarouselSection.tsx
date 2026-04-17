"use client";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { asset } from "@/lib/assets";

/* ─── Hytera — paths confirmados do zip ─── */
const hyteraRadios = [
  {
    name: "HP786",
    img: asset("/assets/radios/imgi_6_HP786-680x680.png"),
    tag: "DMR Portátil",
    features: ["Display colorido", "GPS integrado", "Bluetooth 5.0"],
  },
  {
    name: "HP706",
    img: asset("/assets/radios/imgi_7_HP706-680x680.png"),
    tag: "DMR Portátil",
    features: ["Display LCD", "IP68", "Criptografia AES-256"],
  },
  {
    name: "HP686",
    img: asset("/assets/radios/imgi_8_HP686-680x680.png"),
    tag: "DMR Portátil",
    features: ["Compacto", "Áudio HD", "Longa duração de bateria"],
  },
  {
    name: "HP606",
    img: asset("/assets/radios/imgi_9_HP606-680x680.png"),
    tag: "DMR Portátil",
    features: ["Entrada simplificada", "IP67", "Robusto"],
  },
  {
    name: "HP506",
    img: asset("/assets/radios/imgi_10_HP506-7-680x680.png"),
    tag: "DMR Portátil",
    features: ["Ultra compacto", "Leve", "Ideal para eventos"],
  },
  {
    name: "PT890",
    img: asset("/assets/radios/imgi_4_PT890-680x680.png"),
    tag: "DMR Portátil",
    features: ["Tela grande", "GPS + BeiDou", "Comunicação full-duplex"],
  },
  {
    name: "PT590",
    img: asset("/assets/radios/imgi_5_PT590-680x680.png"),
    tag: "DMR Portátil",
    features: ["Design slim", "MIL-STD-810", "Cancelamento de ruído"],
  },
  {
    name: "HP716EX",
    img: asset("/assets/radios/imgi_2_HP716EX-680x680.png"),
    tag: "ATEX / IECEx",
    features: ["Antiexplosão", "Zona 1/21", "Certificação ATEX"],
  },
  {
    name: "HP796ex",
    img: asset("/assets/radios/imgi_3_HP796ex-680x680.png"),
    tag: "ATEX / IECEx",
    features: ["Intrinsecamente seguro", "Display colorido", "GPS"],
  },
];

/* ─── Motorola — modelos e paths do zip ─── */
const motorolaRadios = [
  {
    name: "R7",
    img: asset("/assets/radios/imgi_6_motorola-r7-680x680.png"),
    tag: "DMR Portátil",
    features: ["Display colorido", "Bluetooth + Wi-Fi", "IP68 / MIL-STD"],
  },
  {
    name: "R2",
    img: asset("/assets/radios/imgi_5_motorola-r2-680x680.png"),
    tag: "Analógico / Digital",
    features: ["Compacto e robusto", "16 canais", "Longa bateria"],
  },
  {
    name: "DEP 250 / C",
    img: asset("/assets/radios/imgi_2_dep250_1.png"),
    tag: "Analógico",
    features: ["Entrada simplificada", "Alta durabilidade", "Operação simples"],
  },
  {
    name: "DGP 8050EX",
    img: asset("/assets/radios/imgi_10_radio-dgp8050ex-dgp8550ex-motorola.jpeg"),
    tag: "ATEX / IECEx",
    features: ["Antiexplosão", "GPS integrado", "DMR Tier II/III"],
  },
  {
    name: "DEP 450",
    img: asset("/assets/radios/imgi_13_radio-dep450-motorola-1.jpeg"),
    tag: "DMR Portátil",
    features: ["MOTOTRBO", "IP54", "Áudio potente"],
  },
];

type Brand = "hytera" | "motorola";
const CARDS_PER_PAGE_DESKTOP = 3;
const CARDS_PER_PAGE_MOBILE = 1;
const ms = { fontFamily: "'Montserrat', sans-serif" };

const RadioCard = ({ radio, brand }: { radio: (typeof hyteraRadios)[0]; brand: Brand }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.28 }}
    className="flex-1 min-w-0 rounded-2xl overflow-hidden border border-gray-200 hover:border-[#0E4AAD]/40 hover:shadow-xl hover:shadow-[#0E4AAD]/10 transition-all duration-300 bg-white group"
  >
    <div className="bg-white p-6 flex items-center justify-center h-52 border-b border-gray-100">
      <img
        src={radio.img}
        alt={`Rádio ${radio.name}`}
        className="h-40 object-contain group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
    </div>

    <div className="p-5 space-y-3 bg-white">
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-xl font-black text-gray-900" style={ms}>
          {radio.name}
        </h3>
        <span
          className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#EBF2FF] text-[#0E4AAD] border border-[#0E4AAD]/20 whitespace-nowrap"
          style={ms}
        >
          {radio.tag}
        </span>
      </div>

      <ul className="space-y-1">
        {radio.features.map((f, i) => (
          <li key={i} className="text-xs text-gray-500 flex items-center gap-2" style={ms}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#2072B9] flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      <Button
        asChild
        variant="outline"
        size="sm"
        className="w-full border-[#0E4AAD]/30 text-[#0E4AAD] hover:bg-[#EBF2FF] font-bold"
        style={ms}
      >
        <a href="#contato">
          {brand === "hytera" ? "Solicitar cotação" : "Solicitar assistência"}
        </a>
      </Button>
    </div>
  </motion.div>
);

const RadiosCarouselSection = () => {
  const isMobile = useIsMobile();
  const [activeBrand, setActiveBrand] = useState<Brand>("hytera");
  const [page, setPage] = useState(0);

  const cardsPerPage = isMobile ? CARDS_PER_PAGE_MOBILE : CARDS_PER_PAGE_DESKTOP;
  const radios = activeBrand === "hytera" ? hyteraRadios : motorolaRadios;
  const totalPages = Math.ceil(radios.length / cardsPerPage);
  const clampedPage = Math.min(page, totalPages - 1);
  const currentRadios = radios.slice(clampedPage * cardsPerPage, clampedPage * cardsPerPage + cardsPerPage);

  const handleBrandChange = (brand: Brand) => {
    setActiveBrand(brand);
    setPage(0);
  };

  return (
    <section className="relative z-10 bg-white">
      <div className="py-20">
        <div className="container mx-auto px-4">

          {/* Cabeçalho */}
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-[3px] text-[#2072B9] block mb-3" style={ms}>
              Linha de Produtos
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4" style={ms}>
              Rádios para <span className="text-[#0E4AAD]">sua operação</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto" style={ms}>
              Tecnologia DMR de ponta com cobertura nacional. Locação e venda com suporte técnico autorizado.
            </p>
          </div>

          {/* Abas */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex rounded-full p-1 bg-gray-100 border border-gray-200">
              {(["hytera", "motorola"] as Brand[]).map((brand) => (
                <button
                  key={brand}
                  onClick={() => handleBrandChange(brand)}
                  className={`px-7 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                    activeBrand === brand
                      ? "bg-[#0E4AAD] text-white shadow-lg shadow-[#0E4AAD]/25"
                      : "text-[#0E4AAD] hover:text-[#2072B9]"
                  }`}
                  style={ms}
                >
                  {brand === "hytera" ? "Hytera" : "Motorola"}
                </button>
              ))}
            </div>
          </div>

          {/* Logo da marca */}
          <div className="flex justify-center mb-8 h-8">
            <AnimatePresence mode="wait">
              {activeBrand === "hytera" ? (
                <motion.img
                  key="hytera-logo"
                  src={asset("/assets/radios/imgi_21_logo-hytera.png")}
                  alt="Hytera"
                  className="h-8 object-contain opacity-60"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 0.6, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                />
              ) : (
                <motion.img
                  key="motorola-logo"
                  src={asset("/assets/radios/imgi_21_logo-motorola-1.png")}
                  alt="Motorola Solutions"
                  className="h-8 object-contain opacity-60"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 0.6, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </AnimatePresence>
          </div>

          {/* Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeBrand}-${clampedPage}`}
              className="flex flex-col md:flex-row gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
            >
              {currentRadios.map((radio) => (
                <RadioCard key={radio.name} radio={radio} brand={activeBrand} />
              ))}
              {currentRadios.length < cardsPerPage &&
                Array.from({ length: cardsPerPage - currentRadios.length }).map((_, i) => (
                  <div key={`spacer-${i}`} className="flex-1 min-w-0" />
                ))}
            </motion.div>
          </AnimatePresence>

          {/* Paginação */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-10">
              <button
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={clampedPage === 0}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#0E4AAD] hover:bg-[#EBF2FF] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-2 items-center">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === clampedPage ? "bg-[#0E4AAD] w-6" : "bg-gray-300 hover:bg-gray-400 w-2"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={clampedPage === totalPages - 1}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#0E4AAD] hover:bg-[#EBF2FF] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-xs text-gray-400 mb-4 uppercase tracking-widest" style={ms}>
              Precisa de outro modelo?
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#0E4AAD] hover:bg-[#2072B9] text-white font-bold shadow-lg shadow-[#0E4AAD]/20 w-full sm:w-auto"
              style={ms}
            >
              <a href="#contato">Falar com um especialista</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RadiosCarouselSection;
