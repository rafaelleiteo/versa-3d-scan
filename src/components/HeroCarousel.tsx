import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = { img: string; tag: string; text: string };

const SLIDES: Slide[] = [
  { img: "/slide01.png", tag: "Protocolo VERSA3D", text: "Diagnóstico 3D completo para o seu paciente a partir da tomografia" },
  { img: "/slide02.png", tag: "Atresia Maxilar", text: "Seja assertivo no diagnóstico de atresia e compensações de mordidas cruzadas" },
  { img: "/slide03.png", tag: "Sutura Palatina", text: "O grau de fusão da sutura palatina define se a expansão maxilar é viável ou requer cirurgia" },
  { img: "/slide04.png", tag: "Avaliação de ATM", text: "Avaliação articular com posição condilar, anatomia, espaço articular e identificação de alterações importantes" },
  { img: "/slide05.png", tag: "Assimetrias Mandibular", text: "Identifique assimetrias mandibulares esqueléticas ou funcionais — precisão que o 2D não entrega" },
  { img: "/slide06.png", tag: "Vias Aéreas", text: "Volume, área e morfologia das vias aéreas superiores e medidas cefalométricas essenciais para diagnóstico de apneia" },
  { img: "/slide07.png", tag: "Sagital e Vertical", text: "As consagradas análises sagitais e verticais agora com precisão e clareza total para apresentar ao seu paciente" },
  { img: "/slide08.png", tag: "Suporte Ósseo", text: "Avalie o suporte ósseo dos dentes com cortes tomográficos precisos — essencial para diagnóstico periodontal e planejamento de implantes" },
];

const N = SLIDES.length;

const POSITIONS = [
  { x: -300, ry: 22, s: 0.73, o: 0.25, w: 160, h: 300, z: 1 },
  { x: -168, ry: 14, s: 0.86, o: 0.55, w: 210, h: 380, z: 2 },
  { x: 0, ry: 0, s: 1, o: 1, w: 280, h: 480, z: 3 },
  { x: 168, ry: -14, s: 0.86, o: 0.55, w: 210, h: 380, z: 2 },
  { x: 300, ry: -22, s: 0.73, o: 0.25, w: 160, h: 300, z: 1 },
];

const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5524992000389&text=Olá!+Desejo+informações+sobre+o+Protocolo+VERSA3D";

function shortestOffset(i: number, active: number) {
  let d = i - active;
  if (d > N / 2) d -= N;
  if (d < -N / 2) d += N;
  return d;
}

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState<"typing" | "pause" | "erasing">("typing");
  const charIdx = useRef(0);
  const dragging = useRef(false);
  const dragStartX = useRef(0);
  const dragAcc = useRef(0);

  const go = (dir: number) => setActive((a) => (a + dir + N) % N);

  useEffect(() => {
    const slide = SLIDES[active];
    let timer: ReturnType<typeof setTimeout>;
    if (phase === "typing") {
      if (charIdx.current < slide.text.length) {
        timer = setTimeout(() => {
          charIdx.current += 1;
          setTyped(slide.text.slice(0, charIdx.current));
        }, 36);
      } else {
        timer = setTimeout(() => setPhase("pause"), 0);
      }
    } else if (phase === "pause") {
      timer = setTimeout(() => setPhase("erasing"), 2400);
    } else {
      if (charIdx.current > 0) {
        timer = setTimeout(() => {
          charIdx.current -= 1;
          setTyped(slide.text.slice(0, charIdx.current));
        }, 16);
      } else {
        timer = setTimeout(() => {
          setActive((a) => (a + 1) % N);
          setPhase("typing");
        }, 0);
      }
    }
    return () => clearTimeout(timer);
  }, [typed, phase, active]);

  const lastActive = useRef(active);
  useEffect(() => {
    if (lastActive.current !== active) {
      lastActive.current = active;
      charIdx.current = 0;
      setTyped("");
      setPhase("typing");
    }
  }, [active]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    dragStartX.current = e.clientX;
    dragAcc.current = 0;
    (e.target as Element).setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    dragAcc.current = e.clientX - dragStartX.current;
  };
  const onPointerUp = () => {
    if (!dragging.current) return;
    dragging.current = false;
    const d = dragAcc.current;
    if (Math.abs(d) > 60) go(d < 0 ? 1 : -1);
  };

  return (
    <section className="relative flex w-full flex-col items-center overflow-hidden bg-white" style={{ maxHeight: "96vh", paddingTop: 16 }}>
      <div className="relative flex w-full flex-col items-center px-6">
        {/* Stage */}
        <div className="relative w-full max-w-[1200px]">
          <div
            className="relative mx-auto h-[520px] w-full max-w-[1100px] select-none"
            style={{ perspective: "1400px", cursor: dragging.current ? "grabbing" : "grab" }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            {SLIDES.map((s, i) => {
              const off = shortestOffset(i, active);
              const visible = Math.abs(off) <= 2;
              const pos = POSITIONS[off + 2] ?? POSITIONS[2];
              return (
                <div
                  key={i}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    width: pos.w,
                    height: pos.h,
                    marginLeft: -pos.w / 2,
                    marginTop: -pos.h / 2,
                    transform: `translateX(${pos.x}px) rotateY(${pos.ry}deg) scale(${pos.s})`,
                    opacity: visible ? pos.o : 0,
                    zIndex: pos.z,
                    transformStyle: "preserve-3d",
                    transition: "transform 0.9s cubic-bezier(0.22,1,0.36,1), opacity 0.9s cubic-bezier(0.22,1,0.36,1), width 0.9s, height 0.9s, margin 0.9s",
                    borderRadius: 14,
                    boxShadow: "0 18px 50px rgba(0,0,0,0.18)",
                    background: "#000",
                    overflow: "hidden",
                    pointerEvents: visible ? "auto" : "none",
                  }}
                  onClick={() => off !== 0 && setActive(i)}
                >
                  <img
                    src={s.img}
                    alt=""
                    style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 14 }}
                    draggable={false}
                  />
                </div>
              );
            })}
          </div>

          {/* Arrows */}
          <button
            onClick={() => go(-1)}
            aria-label="Anterior"
            className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#12100D] shadow-sm transition hover:bg-[#FAFAF8]"
            style={{ border: "0.5px solid #E8DFC8" }}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Próximo"
            className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#12100D] shadow-sm transition hover:bg-[#FAFAF8]"
            style={{ border: "0.5px solid #E8DFC8" }}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Typing box */}
        <div
          className="relative z-10 mx-auto w-full max-w-[560px]"
          style={{
            marginTop: -100,
            background: "#FFFFFF",
            borderRadius: 14,
            boxShadow: "0 8px 32px rgba(0,0,0,0.11)",
            border: "0.5px solid #ece8e0",
            padding: "16px 24px 16px",
          }}
        >
          <span
            className="inline-block"
            style={{
              background: "#F5F1E8",
              border: "0.5px solid #E8DFC8",
              borderRadius: 20,
              padding: "5px 14px",
              fontSize: 10,
              fontWeight: 600,
              color: "#A8893A",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {SLIDES[active].tag}
          </span>
          <p style={{ marginTop: 8, fontSize: 13, color: "#12100D", lineHeight: 1.45, minHeight: 38 }}>
            {typed}
            <span style={{ display: "inline-block", width: 1, marginLeft: 2, background: "#12100D", height: "1em", verticalAlign: "-2px", animation: "caretBlink 1s steps(2) infinite" }} />
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              marginTop: 10,
              background: "#C9A84C",
              color: "#12100D",
              borderRadius: 20,
              padding: "10px 24px",
              fontSize: 13,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Solicitar Protocolo →
          </a>
        </div>

        {/* Dots */}
        <div className="mt-4 flex items-center justify-center gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Slide ${i + 1}`}
              style={{
                height: 8,
                width: i === active ? 32 : 8,
                borderRadius: 999,
                background: i === active ? "#C9A84C" : "#E8DFC8",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>

        {/* Hero text */}
        <div className="mt-6 text-center" style={{ maxWidth: 520 }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: "#A8893A", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Diagnóstico Ortodôntico 3D
          </p>
          <h1 style={{ marginTop: 8, fontSize: 26, lineHeight: 1.15, color: "#12100D" }}>
            <span style={{ fontWeight: 500 }}>Precisão real.</span>{" "}
            <span style={{ fontWeight: 300 }}>Diagnóstico tridimensional para ortodontistas que exigem mais.</span>
          </h1>
        </div>
      </div>

      <style>{`@keyframes caretBlink { 50% { opacity: 0; } }`}</style>
    </section>
  );
}
