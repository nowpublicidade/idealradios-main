import { Button } from "@/components/ui/button";
import { asset } from "@/lib/assets";

const motorolaRadios = [
  { name: "Série DGP", img: asset("/assets/radios/imgi_87_cq5dam.web_.1280.1280-25-680x453.jpeg"), tag: "DMR Portátil", features: ["MOTOTRBO", "IP68", "GPS integrado"] },
];

const RadiosMotorolaSection = () => {
  return (
    <section className="relative z-10">
      <div className="bg-ideal-dark rounded-t-3xl -mt-8 py-20 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-ideal-500/15 rounded-full blur-[100px] animate-float-orb" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-ideal-400/10 rounded-full blur-[80px] animate-float-orb animation-delay-2000" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-4">
            <span className="text-xs font-bold uppercase tracking-[3px] text-ideal-300">Linha Motorola</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-center text-primary-foreground font-display mb-4">
            Rádios{" "}
            <span className="bg-gradient-to-r from-ideal-400 to-ideal-300 bg-clip-text text-transparent">Motorola</span>
          </h2>
          <p className="text-center text-ideal-200/80 max-w-2xl mx-auto mb-12">
            Assistência técnica autorizada Motorola Solutions. Manutenção com peças originais e garantia.
          </p>

          <div className="max-w-lg mx-auto">
            {motorolaRadios.map((radio) => (
              <div
                key={radio.name}
                className="rounded-2xl overflow-hidden border border-ideal-700/40 bg-ideal-dark-card/70 backdrop-blur-sm hover:border-ideal-500/40 transition-all duration-300"
              >
                <div className="bg-ideal-800/40 p-8 flex items-center justify-center">
                  <img
                    src={radio.img}
                    alt={`Rádio ${radio.name} Motorola`}
                    className="h-48 object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-black text-primary-foreground font-display">{radio.name}</h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-ideal-500/20 text-ideal-300 border border-ideal-500/30">
                      {radio.tag}
                    </span>
                  </div>
                  <ul className="space-y-1">
                    {radio.features.map((f, i) => (
                      <li key={i} className="text-xs text-ideal-200/60 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-ideal-400" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-3 pt-2">
                    <Button
                      asChild
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-ideal-500 to-ideal-400 text-primary-foreground font-bold"
                    >
                      <a href="#contato">Solicitar assistência</a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1 border-ideal-500/40 text-ideal-200 hover:bg-ideal-700/30 font-bold"
                    >
                      <a href="#contato">Solicitar cotação</a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <img src={asset("/assets/radios/imgi_21_logo-motorola-1.png")} alt="Motorola Solutions" className="h-8 opacity-40" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RadiosMotorolaSection;
