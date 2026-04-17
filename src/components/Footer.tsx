import { MapPin, Phone, Mail, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { asset } from "@/lib/assets";

const ms = { fontFamily: "'Montserrat', sans-serif", fontWeight: 700 };
const ms4 = { fontFamily: "'Montserrat', sans-serif", fontWeight: 400 };
const ms6 = { fontFamily: "'Montserrat', sans-serif", fontWeight: 600 };

const Footer = () => {
  return (
    <footer
      className="py-14"
      style={{
        background: "linear-gradient(160deg, #071535 0%, #040e24 100%)",
        borderTop: "1px solid rgba(31,156,216,0.12)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Marca */}
          <div className="space-y-3">
            <img src={asset("/assets/logo-branca.png")} alt="Ideal Rádios" className="h-14" />
            <p className="text-sm leading-relaxed" style={{ ...ms4, color: "rgba(200,233,248,0.50)" }}>
              Radiocomunicação profissional para operações que não podem parar.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h4 className="text-sm text-white" style={ms6}>
              Links
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Produtos", href: "#produtos" },
                { label: "Serviços", href: "#setores" },
                { label: "Empresa", href: "#empresa" },
                { label: "Contato", href: "#contato" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-sm transition-colors hover:opacity-90"
                  style={{ ...ms4, color: "rgba(200,233,248,0.50)" }}
                >
                  {l.label}
                </a>
              ))}
              <Link
                to="/ideal-eletric-way"
                className="text-sm transition-colors hover:opacity-90"
                style={{ ...ms4, color: "rgba(200,233,248,0.50)" }}
              >
                Ideal Electric Way
              </Link>
            </div>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h4 className="text-sm text-white" style={ms6}>
              Contato
            </h4>
            <div className="flex items-start gap-2.5">
              <MapPin size={15} className="mt-0.5 shrink-0" style={{ color: "#1F9CD8" }} />
              <p className="text-sm leading-relaxed" style={{ ...ms4, color: "rgba(200,233,248,0.50)" }}>
                Av. Presidente Kennedy, nº 3500 – CJ 615, Santa Paula, São Caetano do Sul - SP | CEP: 09572-200
              </p>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone size={15} className="shrink-0" style={{ color: "#1F9CD8" }} />
              <a
                href="tel:+551127592520"
                className="text-sm transition-colors hover:opacity-90"
                style={{ ...ms4, color: "rgba(200,233,248,0.50)" }}
              >
                (11) 2759-2520
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail size={15} className="shrink-0" style={{ color: "#1F9CD8" }} />
              <a
                href="mailto:comercial@idealradio.com.br"
                className="text-sm transition-colors hover:opacity-90"
                style={{ ...ms4, color: "rgba(200,233,248,0.50)" }}
              >
                comercial@idealradio.com.br
              </a>
            </div>
          </div>

          {/* Trabalhe Conosco */}
          <div className="space-y-3">
            <h4 className="text-sm text-white" style={ms6}>
              Trabalhe Conosco
            </h4>
            <p className="text-sm leading-relaxed" style={{ ...ms4, color: "rgba(200,233,248,0.50)" }}>
              Interessado em trabalhar na Ideal Rádios? Mande o seu currículo na área criada especialmente para
              candidatos.
            </p>
            <a
              href="https://idealradio.com.br/trabalhe-conosco/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm transition-all duration-200 hover:opacity-80"
              style={{ ...ms6, color: "#1F9CD8" }}
            >
              <Users size={14} />
              Quero enviar meu currículo!
            </a>
          </div>
        </div>

        {/* Linha final */}
        <div className="mt-10 pt-6 text-center" style={{ borderTop: "1px solid rgba(31,156,216,0.10)" }}>
          <p className="text-xs" style={{ ...ms4, color: "rgba(200,233,248,0.28)" }}>
            © {new Date().getFullYear()} Ideal Rádios do Brasil. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
