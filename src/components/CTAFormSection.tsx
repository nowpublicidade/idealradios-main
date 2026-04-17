import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Mail, Loader2 } from "lucide-react";

const ms = { fontFamily: "'Montserrat', sans-serif", fontWeight: 700 };
const ms4 = { fontFamily: "'Montserrat', sans-serif", fontWeight: 400 };
const ms5 = { fontFamily: "'Montserrat', sans-serif", fontWeight: 500 };
const ms6 = { fontFamily: "'Montserrat', sans-serif", fontWeight: 600 };

const CTAFormSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ nome: "", empresa: "", telefone: "", necessidade: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.telefone.trim()) {
      toast({ title: "Preencha pelo menos nome e WhatsApp", variant: "destructive" });
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("leads").insert({
      nome: form.nome.trim(),
      empresa: form.empresa.trim() || null,
      telefone: form.telefone.trim(),
      necessidade: form.necessidade || null,
    });
    setLoading(false);
    if (error) {
      toast({ title: "Erro ao enviar. Tente novamente.", variant: "destructive" });
      return;
    }
    toast({ title: "Proposta solicitada com sucesso! Entraremos em contato em breve." });
    setForm({ nome: "", empresa: "", telefone: "", necessidade: "" });
  };

  return (
    <section id="contato" className="relative z-10">
      <div
        className="rounded-t-3xl -mt-8 py-20 relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 15% 20%, rgba(31,156,216,0.25) 0%, transparent 55%)," +
            "radial-gradient(ellipse 60% 50% at 85% 80%, rgba(14,74,173,0.22) 0%, transparent 50%)," +
            "linear-gradient(160deg, #0e3070 0%, #0a2560 50%, #071a45 100%)",
        }}
      >
        {/* orbs */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(91,200,239,0.20) 0%, transparent 65%)",
            filter: "blur(100px)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(14,74,173,0.18) 0%, transparent 65%)",
            filter: "blur(80px)",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            {/* ── Texto ── */}
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-[3px] block" style={{ ...ms6, color: "#7ec8ef" }}>
                Fale com a Ideal
              </span>
              <h2 className="text-3xl md:text-4xl text-white" style={ms}>
                Solicite sua proposta agora
              </h2>
              <p style={{ ...ms4, color: "rgba(200,233,248,0.78)" }} className="text-lg">
                Preencha o formulário e nossa equipe retorna em até 2 horas úteis com a melhor solução para sua
                operação.
              </p>
              <div className="space-y-3 pt-4">
                <a
                  href="https://wa.me/551127592520"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors hover:opacity-90"
                  style={{ ...ms6, color: "#a8e0f8" }}
                >
                  <MessageCircle size={20} />
                  (11) 2759-2520
                </a>
                <a
                  href="mailto:comercial@idealradio.com.br"
                  className="flex items-center gap-3 transition-colors hover:opacity-90"
                  style={{ ...ms6, color: "#a8e0f8" }}
                >
                  <Mail size={20} />
                  comercial@idealradio.com.br
                </a>
              </div>
            </div>

            {/* ── Formulário com glass ── */}
            <div
              className="rounded-2xl p-8 space-y-5"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(100,200,245,0.22)",
                backdropFilter: "blur(20px)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 8px 40px rgba(0,0,0,0.30)",
              }}
            >
              {/* Nome */}
              <div className="space-y-2">
                <Label style={{ ...ms6, color: "rgba(200,233,248,0.90)" }}>Nome *</Label>
                <Input
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  placeholder="Seu nome"
                  maxLength={100}
                  style={{
                    ...ms4,
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(100,200,245,0.20)",
                    color: "white",
                  }}
                  className="placeholder:text-white/30 focus:border-[#5bc8ef]/50"
                />
              </div>
              {/* Empresa */}
              <div className="space-y-2">
                <Label style={{ ...ms6, color: "rgba(200,233,248,0.90)" }}>Empresa</Label>
                <Input
                  value={form.empresa}
                  onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                  placeholder="Nome da empresa"
                  maxLength={100}
                  style={{
                    ...ms4,
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(100,200,245,0.20)",
                    color: "white",
                  }}
                  className="placeholder:text-white/30 focus:border-[#5bc8ef]/50"
                />
              </div>
              {/* WhatsApp */}
              <div className="space-y-2">
                <Label style={{ ...ms6, color: "rgba(200,233,248,0.90)" }}>WhatsApp *</Label>
                <Input
                  value={form.telefone}
                  onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                  placeholder="(11) 2759-2520"
                  maxLength={20}
                  style={{
                    ...ms4,
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(100,200,245,0.20)",
                    color: "white",
                  }}
                  className="placeholder:text-white/30 focus:border-[#5bc8ef]/50"
                />
              </div>
              {/* Necessidade */}
              <div className="space-y-2">
                <Label style={{ ...ms6, color: "rgba(200,233,248,0.90)" }}>Necessidade</Label>
                <Select value={form.necessidade} onValueChange={(v) => setForm({ ...form, necessidade: v })}>
                  <SelectTrigger
                    style={{
                      ...ms4,
                      background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(100,200,245,0.20)",
                      color: form.necessidade ? "white" : "rgba(255,255,255,0.30)",
                    }}
                  >
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="locacao" style={ms4}>
                      Locação de rádios
                    </SelectItem>
                    <SelectItem value="compra" style={ms4}>
                      Compra de equipamentos
                    </SelectItem>
                    <SelectItem value="assistencia" style={ms4}>
                      Assistência técnica
                    </SelectItem>
                    <SelectItem value="sistemas" style={ms4}>
                      Sistemas e infraestrutura
                    </SelectItem>
                    <SelectItem value="outro" style={ms4}>
                      Outro
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {/* Submit */}
              <Button
                type="submit"
                disabled={loading}
                onClick={handleSubmit}
                className="w-full text-white h-12"
                style={{
                  ...ms,
                  background: "linear-gradient(90deg, #1263c8, #1F9CD8)",
                  boxShadow: "0 8px 32px rgba(31,156,216,0.40)",
                }}
              >
                {loading ? <Loader2 className="animate-spin" /> : "Quero uma proposta agora"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAFormSection;
