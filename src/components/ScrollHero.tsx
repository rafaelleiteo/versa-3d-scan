import { useEffect, useRef, useState } from "react";

const SLIDES = [
  {
    eyebrow: "PROTOCOLO VERSA3D",
    headline: "Diagnóstico além do plano sagital",
    description:
      "A cefalometria convencional analisa apenas um plano. O Protocolo VERSA3D avalia simultaneamente os planos sagital, vertical e transversal — revelando discrepâncias que radiografias 2D não conseguem mostrar.",
  },
  {
    eyebrow: "AVALIAÇÃO DE ATM",
    headline: "Articulações que determinam o tratamento",
    description:
      "A posição condilar, o espaço articular e sinais de remodelação óssea são avaliados tridimensionalmente — informações críticas para o planejamento de casos complexos e ortocirúrgicos.",
  },
  {
    eyebrow: "VIAS AÉREAS",
    headline: "O que a radiografia panorâmica não mostra",
    description:
      "Volume e morfologia das vias aéreas superiores avaliados com precisão. Dado essencial para casos de apneia, distúrbios do sono e decisões sobre avanço mandibular.",
  },
  {
    eyebrow: "SUTURA PALATINA",
    headline: "Antes de expandir, avalie",
    description:
      "O grau de fusão da sutura palatina mediana define se a expansão ortopédica é viável ou se o caso demanda abordagem cirúrgica. O VERSA3D entrega essa resposta com clareza.",
  },
  {
    eyebrow: "MATURIDADE ESQUELÉTICA",
    headline: "O momento certo para tratar",
    description:
      "A avaliação das vértebras cervicais indica com precisão o estágio de maturidade óssea do paciente — informação essencial para decidir o timing ideal do tratamento ortopédico e ortocirúrgico.",
  },
  {
    eyebrow: "ASSIMETRIAS",
    headline: "Visível em três dimensões",
    description:
      "Assimetrias mandibulares, dentoalveolares e esqueléticas avaliadas nos três planos com marcadores precisos. O que parece sutil na panorâmica pode ser significativo no 3D.",
  },
];

const TOTAL = SLIDES.length;

export function ScrollHero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0); // 0..(TOTAL-1)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const p = total > 0 ? (scrolled / total) * (TOTAL - 1) : 0;
      setProgress(p);
      setActive(Math.min(TOTAL - 1, Math.round(p)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isMobile]);

  if (isMobile) {
    return (
      <section className="bg-black text-white">
        {SLIDES.map((s, i) => (
          <div
            key={i}
            className="flex min-h-screen flex-col justify-center gap-6 px-6 py-16"
          >
            <div
              className="text-[180px] font-bold leading-none"
              style={{ color: "rgba(255,255,255,0.06)" }}
            >
              {String(i + 1).padStart(2, "0")}
            </div>
            <p
              className="text-[13px] font-semibold uppercase"
              style={{ color: "#C9A84C", letterSpacing: "0.08em" }}
            >
              {s.eyebrow}
            </p>
            <h2
              className="text-3xl font-medium text-white"
              style={{ lineHeight: 1.2 }}
            >
              {s.headline}
            </h2>
            <p
              className="text-base"
              style={{ color: "#94a3b8", lineHeight: 1.7 }}
            >
              {s.description}
            </p>
          </div>
        ))}
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="relative bg-black text-white"
      style={{ height: `${TOTAL * 100}vh` }}
    >
      <div className="sticky top-0 flex h-screen w-full overflow-hidden">
        {/* Left column 40% — sticky text */}
        <div className="relative flex w-2/5 items-center px-12 lg:px-20">
          <div className="max-w-xl">
            {SLIDES.map((s, i) => (
              <div
                key={i}
                className="absolute inset-0 flex flex-col justify-center px-12 transition-opacity duration-500 lg:px-20"
                style={{ opacity: active === i ? 1 : 0, pointerEvents: active === i ? "auto" : "none" }}
              >
                <p
                  className="mb-6 text-[13px] font-semibold uppercase"
                  style={{ color: "#C9A84C", letterSpacing: "0.08em" }}
                >
                  {s.eyebrow}
                </p>
                <h2
                  className="mb-6 font-medium text-white"
                  style={{ fontSize: "48px", lineHeight: 1.2, fontWeight: 500 }}
                >
                  {s.headline}
                </h2>
                <p style={{ fontSize: "16px", color: "#94a3b8", lineHeight: 1.7 }}>
                  {s.description}
                </p>
              </div>
            ))}
          </div>

          {/* Progress dots */}
          <div className="absolute bottom-10 left-12 flex gap-2 lg:left-20">
            {SLIDES.map((_, i) => (
              <span
                key={i}
                className="h-1.5 w-1.5 rounded-full transition-colors"
                style={{
                  background: active === i ? "#C9A84C" : "rgba(255,255,255,0.2)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Right column 60% — horizontal track */}
        <div className="relative w-3/5 overflow-hidden bg-black">
          <div
            className="flex h-full transition-transform duration-700 ease-out"
            style={{
              width: `${TOTAL * 100}%`,
              transform: `translateX(-${(progress / TOTAL) * 100}%)`,
            }}
          >
            {SLIDES.map((_, i) => (
              <div
                key={i}
                className="flex h-full items-center justify-center"
                style={{ width: `${100 / TOTAL}%` }}
              >
                <div
                  className="select-none font-bold leading-none"
                  style={{
                    fontSize: "180px",
                    color: "rgba(255,255,255,0.06)",
                    fontWeight: 700,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
