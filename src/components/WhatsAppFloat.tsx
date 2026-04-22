import { useState } from "react";
import { X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const ms = { fontFamily: "'Montserrat', sans-serif", fontWeight: 700 };
const ms4 = { fontFamily: "'Montserrat', sans-serif", fontWeight: 400 };
const ms6 = { fontFamily: "'Montserrat', sans-serif", fontWeight: 600 };

const WA_NUMBER = "551127592520";

const WA_ICON = (
  <svg viewBox="0 0 32 32" fill="white" width="20" height="20">
    <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.504L4 29l7.697-1.812A11.94 11.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.94 9.94 0 0 1-5.065-1.383l-.363-.214-4.572 1.076 1.104-4.46-.23-.373A9.953 9.953 0 0 1 6 15c0-5.523 4.477-10 10-10zm-3.207 5.5c-.207 0-.543.078-.828.387-.285.308-1.086 1.06-1.086 2.584s1.112 2.997 1.268 3.205c.155.207 2.152 3.434 5.3 4.677.74.32 1.318.51 1.768.652.743.237 1.42.204 1.955.124.596-.09 1.836-.75 2.096-1.476.26-.724.26-1.344.182-1.475-.078-.13-.285-.208-.596-.364-.312-.156-1.836-.906-2.121-1.01-.285-.104-.493-.156-.7.156-.208.312-.804 1.01-.985 1.217-.182.208-.364.234-.676.078-.312-.156-1.317-.485-2.51-1.547-.928-.826-1.554-1.847-1.737-2.16-.182-.312-.02-.48.137-.635.14-.14.312-.364.468-.546.156-.182.208-.312.312-.52.104-.208.052-.39-.026-.546-.078-.156-.7-1.69-.96-2.314-.25-.607-.507-.52-.7-.53a13.3 13.3 0 0 0-.598-.01z" />
  </svg>
);

/* ── Modal reutilizável ── */
interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WhatsAppModal = ({ isOpen, onClose }: WhatsAppModalProps) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ nome: "", empresa: "", telefone: "", necessidade: "" });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.telefone.trim()) {
      toast({ title: "Preencha pelo menos nome e WhatsApp", variant: "destructive" });
      return;
    }

    setLoading(true);
    await supabase.from("leads").insert({
      nome: form.nome.trim(),
      empresa: form.empresa.trim() || null,
      telefone: form.telefone.trim(),
      necessidade: form.necessidade || null,
    });
    setLoading(false);

    const empresa = form.empresa.trim();
    const msg = empresa
      ? `Olá, meu nome é ${form.nome.trim()} e sou da empresa ${empresa} e gostaria de saber mais sobre as soluções da Ideal.`
      : `Olá, meu nome é ${form.nome.trim()} e gostaria de saber mais sobre as soluções da Ideal.`;

    (window as any).gtag?.("event", "click_to_chat", { event_category: "lead", event_label: "whatsapp" });
    setForm({ nome: "", empresa: "", telefone: "", necessidade: "" });
    onClose();
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.55)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="w-full max-w-md rounded-2xl p-6 space-y-4 relative"
        style={{
          background: "linear-gradient(160deg, #0e3070 0%, #071a45 100%)",
          border: "1px solid rgba(100,200,245,0.22)",
          boxShadow: "0 24px 64px rgba(0,0,0,0.50)",
        }}
      >
        {/* Cabeçalho */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "#25D366" }}>
              {WA_ICON}
            </div>
            <div>
              <p className="text-white text-sm" style={ms}>Falar no WhatsApp</p>
              <p className="text-xs" style={{ ...ms4, color: "rgba(200,233,248,0.65)" }}>Resposta em minutos</p>
            </div>
          </div>
          <button onClick={onClose} className="text-white/50 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        <div style={{ borderTop: "1px solid rgba(100,200,245,0.15)" }} />

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="space-y-1">
            <Label className="text-xs" style={{ ...ms6, color: "rgba(200,233,248,0.85)" }}>Nome *</Label>
            <Input
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              placeholder="Seu nome"
              maxLength={100}
              style={{ ...ms4, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(100,200,245,0.20)", color: "white" }}
              className="placeholder:text-white/30 focus:border-[#5bc8ef]/50 h-9 text-sm"
            />
          </div>

          <div className="space-y-1">
            <Label className="text-xs" style={{ ...ms6, color: "rgba(200,233,248,0.85)" }}>Empresa</Label>
            <Input
              value={form.empresa}
              onChange={(e) => setForm({ ...form, empresa: e.target.value })}
              placeholder="Nome da empresa"
              maxLength={100}
              style={{ ...ms4, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(100,200,245,0.20)", color: "white" }}
              className="placeholder:text-white/30 focus:border-[#5bc8ef]/50 h-9 text-sm"
            />
          </div>

          <div className="space-y-1">
            <Label className="text-xs" style={{ ...ms6, color: "rgba(200,233,248,0.85)" }}>WhatsApp *</Label>
            <Input
              value={form.telefone}
              onChange={(e) => setForm({ ...form, telefone: e.target.value })}
              placeholder="(11) 99999-9999"
              maxLength={20}
              style={{ ...ms4, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(100,200,245,0.20)", color: "white" }}
              className="placeholder:text-white/30 focus:border-[#5bc8ef]/50 h-9 text-sm"
            />
          </div>

          <div className="space-y-1">
            <Label className="text-xs" style={{ ...ms6, color: "rgba(200,233,248,0.85)" }}>Necessidade</Label>
            <Select value={form.necessidade} onValueChange={(v) => setForm({ ...form, necessidade: v })}>
              <SelectTrigger
                className="h-9 text-sm"
                style={{ ...ms4, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(100,200,245,0.20)", color: form.necessidade ? "white" : "rgba(255,255,255,0.30)" }}
              >
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="locacao" style={ms4}>Locação de rádios</SelectItem>
                <SelectItem value="compra" style={ms4}>Compra de equipamentos</SelectItem>
                <SelectItem value="assistencia" style={ms4}>Assistência técnica</SelectItem>
                <SelectItem value="sistemas" style={ms4}>Sistemas e infraestrutura</SelectItem>
                <SelectItem value="outro" style={ms4}>Outro</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full h-10 text-white text-sm mt-1"
            style={{ ...ms, background: "#25D366", boxShadow: "0 4px 20px rgba(37,211,102,0.35)" }}
          >
            {loading ? <Loader2 size={16} className="animate-spin" /> : "Continuar no WhatsApp"}
          </Button>
        </form>
      </div>
    </div>
  );
};

/* ── Botão flutuante ── */
const WhatsAppFloat = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95"
        style={{ background: "#25D366" }}
      >
        <svg viewBox="0 0 32 32" fill="white" width="28" height="28">
          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.504L4 29l7.697-1.812A11.94 11.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.94 9.94 0 0 1-5.065-1.383l-.363-.214-4.572 1.076 1.104-4.46-.23-.373A9.953 9.953 0 0 1 6 15c0-5.523 4.477-10 10-10zm-3.207 5.5c-.207 0-.543.078-.828.387-.285.308-1.086 1.06-1.086 2.584s1.112 2.997 1.268 3.205c.155.207 2.152 3.434 5.3 4.677.74.32 1.318.51 1.768.652.743.237 1.42.204 1.955.124.596-.09 1.836-.75 2.096-1.476.26-.724.26-1.344.182-1.475-.078-.13-.285-.208-.596-.364-.312-.156-1.836-.906-2.121-1.01-.285-.104-.493-.156-.7.156-.208.312-.804 1.01-.985 1.217-.182.208-.364.234-.676.078-.312-.156-1.317-.485-2.51-1.547-.928-.826-1.554-1.847-1.737-2.16-.182-.312-.02-.48.137-.635.14-.14.312-.364.468-.546.156-.182.208-.312.312-.52.104-.208.052-.39-.026-.546-.078-.156-.7-1.69-.96-2.314-.25-.607-.507-.52-.7-.53a13.3 13.3 0 0 0-.598-.01z" />
        </svg>
      </button>
      <WhatsAppModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default WhatsAppFloat;
