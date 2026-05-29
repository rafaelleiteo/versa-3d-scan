import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Crosshair, Box, Activity, BookOpen, TrendingUp, MessageCircle, Clock } from "lucide-react";
import { WHATSAPP_PROTOCOL, LOGIN_URL } from "@/lib/links";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VERSA3D — Diagnóstico Ortodôntico 3D com precisão real" },
      { name: "description", content: "Cefalometria 3D baseada em tomografia de feixe cônico (TCFC) para ortodontistas que exigem mais do seu diagnóstico." },
      { property: "og:title", content: "VERSA3D — Diagnóstico Ortodôntico 3D" },
      { property: "og:description", content: "Cefalometria 3D baseada em tomografia de feixe cônico para ortodontistas." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const features = [
  { icon: Crosshair, title: "Precisão Absoluta", body: "Eliminação de distorções das radiografias 2D tradicionais." },
  { icon: Box, title: "Visão 3D Completa", body: "Avaliação nos três planos: sagital, vertical e transversal." },
  { icon: Activity, title: "Diagnóstico Detalhado", body: "Assimetrias, ATM, sutura palatina e vias aéreas." },
  { icon: BookOpen, title: "Baseado em Evidências", body: "Medidas com validade científica constantemente atualizada." },
  { icon: TrendingUp, title: "Alta Previsibilidade", body: "Avaliação de ATM, maturidade cervical e sutura palatina mediana." },
  { icon: MessageCircle, title: "Comunicação com o Paciente", body: "Imagens 3D facilitam a explicação do diagnóstico." },
];

const steps = [
  { n: "01", title: "Exame", body: "Solicite ao paciente uma Tomografia de Feixe Cônico (TCFC)." },
  { n: "02", title: "Envio", body: "Faça upload dos arquivos DICOM no portal VERSA3D." },
  { n: "03", title: "Resultado", body: "Receba o relatório completo de análise cefalométrica 3D." },
];

const testimonials = [
  { name: "Dr. João Silva", role: "Ortodontista, São Paulo", quote: "O Protocolo VERSA3D transformou minha abordagem diagnóstica. A precisão tridimensional é incomparável." },
  { name: "Dra. Maria Oliveira", role: "Especialista em Ortodontia, Rio de Janeiro", quote: "Indispensável para casos complexos. A avaliação de ATM e vias aéreas num único protocolo é um diferencial enorme." },
  { name: "Dr. Carlos Mendes", role: "Ortodontista, Belo Horizonte", quote: "Meus pacientes ficam impressionados com a clareza das imagens 3D na explicação do tratamento." },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-dark text-dark-foreground">
        <div className="absolute inset-0 dot-grid opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark" />
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Diagnóstico Ortodôntico 3D com precisão real
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-dark-foreground/70 md:text-xl">
              Cefalometria 3D baseada em tomografia de feixe cônico (TCFC) para ortodontistas que exigem mais do seu diagnóstico.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href={WHATSAPP_PROTOCOL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30"
              >
                Solicitar Protocolo <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-dark-foreground transition-colors hover:bg-white/10"
              >
                Fazer Login
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Diferenciais</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Tecnologia que eleva o padrão diagnóstico
          </h2>
        </div>
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="bg-background p-8 transition-colors hover:bg-secondary">
              <f.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
              <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">Como funciona</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Três etapas para o diagnóstico completo</h2>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="rounded-2xl border border-border bg-background p-8">
                <div className="text-5xl font-bold tracking-tighter text-primary">{s.n}</div>
                <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner clinics */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Clínicas Credenciadas em todo o Brasil
        </p>
        <div className="mt-10 grid grid-cols-2 items-center gap-8 opacity-60 md:grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex h-12 items-center justify-center rounded-lg border border-border bg-secondary/40 text-xs font-semibold tracking-wider text-muted-foreground">
              CLÍNICA {i + 1}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Depoimentos</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">O que dizem os especialistas</h2>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col rounded-2xl border border-border bg-background p-8">
              <blockquote className="flex-1 text-base leading-relaxed text-foreground">"{t.quote}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="aspect-square h-10 w-10 rounded-full bg-secondary" />
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-dark text-dark-foreground">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Pronto para elevar seu diagnóstico?
          </h2>
          <a
            href={WHATSAPP_PROTOCOL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30"
          >
            Solicitar Protocolo VERSA3D <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
