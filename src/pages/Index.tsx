import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CredenciaisSection from "@/components/CredenciaisSection";
import ClientesSection from "@/components/ClientesSection";
import DorSection from "@/components/DorSection";
import PorQueIdealSection from "@/components/PorQueIdealSection";
import EmpresaSection from "@/components/EmpresaSection";
import RadiosCarouselSection from "@/components/RadiosCarouselSection";
import LocacaoCarouselSection from "@/components/LocacaoCarouselSection";
import ServicosSection from "@/components/ServicosSection";
import SetoresSection from "@/components/SetoresSection";
import FAQSection from "@/components/FAQSection";
import CTAFormSection from "@/components/CTAFormSection";
import Footer from "@/components/Footer";
import { SectionReveal } from "@/components/SectionReveal";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <Navbar />

      {/* Hero — sem animação, já aparece imediatamente */}
      <HeroSection />

      {/* Credenciais — sobe do fundo */}
      <SectionReveal animation="fade-up" duration={700}>
        <CredenciaisSection />
      </SectionReveal>

      {/* Clientes — fade simples */}
      <SectionReveal animation="fade-in" delay={100} duration={800}>
        <ClientesSection />
      </SectionReveal>

      {/* Dores — sobe com delay */}
      <SectionReveal animation="fade-up" delay={50} duration={700}>
        <DorSection />
      </SectionReveal>

      {/* Por que Ideal — zoom suave */}
      <SectionReveal animation="zoom-in" duration={700}>
        <PorQueIdealSection />
      </SectionReveal>

      {/* Empresa — vem da esquerda */}
      <SectionReveal animation="fade-left" duration={700}>
        <EmpresaSection />
      </SectionReveal>

      {/* Rádios — sobe */}
      <SectionReveal animation="fade-up" duration={650}>
        <RadiosCarouselSection />
      </SectionReveal>

      {/* Locação — vem da direita */}
      <SectionReveal animation="fade-right" duration={700}>
        <LocacaoCarouselSection />
      </SectionReveal>

      {/* Serviços — sobe */}
      <SectionReveal animation="fade-up" delay={50} duration={700}>
        <ServicosSection />
      </SectionReveal>

      {/* Setores — zoom */}
      <SectionReveal animation="zoom-in" duration={700}>
        <SetoresSection />
      </SectionReveal>

      {/* FAQ — sobe */}
      <SectionReveal animation="fade-up" duration={650}>
        <FAQSection />
      </SectionReveal>

      {/* CTA — zoom com delay */}
      <SectionReveal animation="zoom-in" delay={100} duration={700}>
        <CTAFormSection />
      </SectionReveal>

      <Footer />
    </div>
  );
};

export default Index;
