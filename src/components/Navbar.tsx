import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { asset } from "@/lib/assets";

const ms700 = { fontFamily: "'Montserrat', sans-serif", fontWeight: 700 };
const ms600 = { fontFamily: "'Montserrat', sans-serif", fontWeight: 600 };

const navLinks = [
  { label: "Início", href: "#" },
  { label: "Produtos", href: "#produtos" },
  { label: "Serviços", href: "#setores" },
  { label: "Empresa", href: "#empresa" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4"
        style={{ paddingTop: scrolled ? 8 : 16, transition: "padding 0.35s ease" }}
      >
        <nav
          className="w-full max-w-5xl flex items-center justify-between h-16 md:h-[72px] px-5 rounded-2xl overflow-hidden"
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
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            <img
              src={asset("/assets/logo-branca.png")}
              alt="Ideal Rádios"
              className="h-14 md:h-16 w-auto transition-all duration-300"
              style={{ filter: scrolled ? "invert(1) hue-rotate(195deg) brightness(0.35)" : "none" }}
            />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
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
            <Link
              to="/ideal-eletric-way"
              className="text-sm transition-colors duration-200 relative group flex items-center gap-1"
              style={{ ...ms600, color: scrolled ? "#1a3a5c" : "rgba(255,255,255,0.95)" }}
            >
              Ideal Electric Way
              <span
                className="absolute -bottom-0.5 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 rounded-full"
                style={{ background: "linear-gradient(90deg,#0E4AAD,#1F9CD8)" }}
              />
            </Link>
          </div>

          {/* CTA */}
          <a
            href="#contato"
            className="hidden md:inline-flex items-center gap-2 text-sm text-white rounded-xl px-4 py-2 transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              ...ms700,
              background: "linear-gradient(90deg, #0E4AAD, #1F9CD8)",
              boxShadow: "0 4px 16px rgba(31,156,216,0.35)",
            }}
          >
            <Phone size={14} />
            Solicitar cotação
          </a>

          {/* Mobile toggle */}
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

        {/* Mobile menu */}
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
            {navLinks.map((link) => (
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
            <Link
              to="/ideal-eletric-way"
              onClick={() => setOpen(false)}
              className="block text-sm py-2 border-b"
              style={{ ...ms600, color: "#1a3a5c", borderColor: "rgba(14,74,173,0.08)" }}
            >
              Ideal Electric Way
            </Link>
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 w-full text-sm text-white rounded-xl px-4 py-2.5 mt-2"
              style={{
                ...ms700,
                background: "linear-gradient(90deg, #0E4AAD, #1F9CD8)",
                boxShadow: "0 4px 16px rgba(31,156,216,0.30)",
              }}
            >
              <Phone size={14} />
              Solicitar cotação
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
