import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { asset } from "@/lib/assets";

const hyteraRadios = [
  { name: "HP786", img: asset("/assets/radios/imgi_6_HP786-680x680.png"), tag: "DMR Portátil", features: ["Display colorido", "GPS integrado", "Bluetooth 5.0"] },
  { name: "HP706", img: asset("/assets/radios/imgi_7_HP706-680x680.png"), tag: "DMR Portátil", features: ["Display LCD", "IP68", "Criptografia AES-256"] },
  { name: "HP686", img: asset("/assets/radios/imgi_8_HP686-680x680.png"), tag: "DMR Portátil", features: ["Compacto", "Áudio HD", "Longa duração de bateria"] },
  { name: "HP606", img: asset("/assets/radios/imgi_9_HP606-680x680.png"), tag: "DMR Portátil", features: ["Entrada simplificada", "IP67", "Robusto"] },
  { name: "HP506", img: asset("/assets/radios/imgi_10_HP506-7-680x680.png"), tag: "DMR Portátil", features: ["Ultra compacto", "Leve", "Ideal para eventos"] },
  { name: "PT890", img: asset("/assets/radios/imgi_4_PT890-680x680.png"), tag: "DMR Portátil", features: ["Tela grande", "GPS + BeiDou", "Comunicação full-duplex"] },
  { name: "PT590", img: asset("/assets/radios/imgi_5_PT590-680x680.png"), tag: "DMR Portátil", features: ["Design slim", "MIL-STD-810", "Cancelamento de ruído"] },
  { name: "HP716EX", img: asset("/assets/radios/imgi_2_HP716EX-680x680.png"), tag: "ATEX / IECEx", features: ["Antiexplosão", "Zona 1/21", "Certificação ATEX"] },
  { name: "HP796ex", img: asset("/assets/radios/imgi_3_HP796ex-680x680.png"), tag: "ATEX / IECEx", features: ["Intrinsecamente seguro", "Display colorido", "GPS"] },
];

const RadiosHyteraSection = () => {
  return (
    <section className="relative z-10">
      <div className="bg-background rounded-t-3xl -mt-8 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <span className="text-xs font-bold uppercase tracking-[3px] text-ideal-400">Linha Hytera</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-center text-foreground font-display mb-4">
            Rádios <span className="text-ideal-500">Hytera</span>
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Tecnologia DMR de ponta com certificação Wings+. Disponíveis para locação e venda.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hyteraRadios.map((radio) => (
              <Card
                key={radio.name}
                className="group border-ideal-200/50 hover:border-ideal-400/40 hover:shadow-xl hover:shadow-ideal-500/10 transition-all duration-300 overflow-hidden"
              >
                <div className="bg-ideal-100/40 p-6 flex items-center justify-center h-52">
                  <img
                    src={radio.img}
                    alt={`Rádio ${radio.name} Hytera`}
                    className="h-40 object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-black text-foreground font-display">{radio.name}</h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-ideal-100 text-ideal-500 border border-ideal-200/60">
                      {radio.tag}
                    </span>
                  </div>
                  <ul className="space-y-1">
                    {radio.features.map((f, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-ideal-400" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full border-ideal-400/40 text-ideal-500 hover:bg-ideal-100 hover:text-ideal-600 font-bold"
                  >
                    <a href="#contato">Solicitar cotação</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RadiosHyteraSection;
