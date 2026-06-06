import { useEffect, useRef, useState } from "react";
import slide01 from "@/assets/slide01.jpg.asset.json";
import slide02 from "@/assets/slide02.jpg.asset.json";
import slide03 from "@/assets/slide03.jpg.asset.json";
import slide04 from "@/assets/slide04.jpg.asset.json";
import slide05 from "@/assets/slide05.jpg.asset.json";
import slide06 from "@/assets/slide06.jpg.asset.json";
import slide07 from "@/assets/slide07.jpg.asset.json";
import slide08 from "@/assets/slide08.jpg.asset.json";

type Slide = { img: string; alt: string; tag: string; text: string };

const SLIDES: Slide[] = [
  { img: slide01.url, alt: "Protocolo VERSA3D", tag: "Protocolo VERSA3D", text: "Diagnóstico 3D completo para o seu paciente a partir da tomografia" },
  { img: slide02.url, alt: "Atresia Maxilar", tag: "Atresia Maxilar", text: "Seja assertivo no diagnóstico de atresia e compensações de mordidas cruzadas" },
  { img: slide03.url, alt: "Sutura Palatina", tag: "Sutura Palatina", text: "Avalie o grau de fusão da sutura palatina antes de decidir pela expansão" },
  { img: slide04.url, alt: "Avaliação de ATM", tag: "Avaliação de ATM", text: "Analise espaço articular e posição condilar com precisão tridimensional" },
  { img: slide05.url, alt: "Assimetrias Mandibular", tag: "Assimetrias Mandibular", text: "Mensure assimetrias mandibulares nos três planos com referências confiáveis" },
  { img: slide06.url, alt: "Vias Aéreas", tag: "Vias Aéreas", text: "Volume e morfologia das vias aéreas superiores avaliados tridimensionalmente" },
  { img: slide07.url, alt: "Sagital e Vertical", tag: "Sagital e Vertical", text: "Diagnóstico além do plano sagital — também nos planos vertical e transversal" },
  { img: slide08.url, alt: "Suporte Ósseo", tag: "Suporte Ósseo", text: "Avalie o suporte ósseo dente a dente para um planejamento ortodôntico seguro" },
];

const N = SLIDES.length;

const POSITIONS = [
  { x: -265, ry: 22, s: 0.73, o: 0.25, w: 150, h: 220, z: 1 }, // -2 far left
  { x: -148, ry: 14, s: 0.86, o: 0.55, w: 190, h: 275, z: 2 }, // -1 left
  { x: 0,    ry: 0,  s: 1,    o: 1,    w: 250, h: 360, z: 3 }, // 0 center
  { x: 148,  ry: -14, s: 0.86, o: 0.55, w: 190, h: 275, z: 2 }, // +1 right
  { x: 265,  ry: -22, s: 0.73, o: 0.25, w: 150, h: 220, z: 1 }, // +2 far right
];

function offsetClass(i: number, active: number) {
  // signed shortest offset in [-N/2, N/2]
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

  // Typewriter
  useEffect(() => {
    const slide = SLIDES[active];
    let timer: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (charIdx.current < slide.text.length) {
        timer = setTimeout(() => {
          charIdx.current += 1;
          setTyped(slide.text.slice(0, charIdx.current));
        }, 36 + Math.random() * 18);
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

  // Reset typing index when slide changes externally (drag)
  const lastActiveForReset = useRef(active);
  useEffect(() => {
    if (lastActiveForReset.current !== active) {
      lastActiveForReset.current = active;
      charIdx.current = 0;
      setTyped("");
      setPhase("typing");
    }
  }, [active]);

  // Drag handlers
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
    if (Math.abs(d) > 60) {
      setActive((a) => (a + (d < 0 ? 1 : N - 1)) % N);
    }
  };

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-white">
      <div className="relative flex w-full flex-col items-center px-6">
        {/* Cards stage */}
        <div
          className="relative h-[420px] w-full max-w-[900px] select-none"
          style={{ perspective: "1400px", cursor: dragging.current ? "grabbing" : "grab" }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          {SLIDES.map((s, i) => {
            const off = offsetClass(i, active);
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
                  alt={s.alt}
                  style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 14 }}
                  draggable={false}
                />
              </div>
            );
          })}
        </div>

        {/* Typing box */}
        <div
          className="relative z-10 mx-auto w-full max-w-[640px]"
          style={{
            marginTop: -96,
            background: "#FFFFFF",
            borderRadius: 14,
            boxShadow: "0 8px 32px rgba(0,0,0,0.11)",
            border: "0.5px solid #ece8e0",
            padding: "20px 28px 18px",
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
          <p
            style={{
              marginTop: 10,
              fontSize: 14,
              color: "#12100D",
              lineHeight: 1.5,
              minHeight: 44,
            }}
          >
            {typed}
            <span style={{ display: "inline-block", width: 1, marginLeft: 2, background: "#12100D", height: "1em", verticalAlign: "-2px", animation: "caretBlink 1s steps(2) infinite" }} />
          </p>
        </div>
      </div>

      <style>{`@keyframes caretBlink { 50% { opacity: 0; } }`}</style>
    </section>
  );
}
