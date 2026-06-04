import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Crosshair, Box, Activity, BookOpen, TrendingUp, MessageCircle, Clock } from "lucide-react";
import { WHATSAPP_PROTOCOL, LOGIN_URL } from "@/lib/links";
import { ScrollHero } from "@/components/ScrollHero";

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

const metrics = [
  { value: "6 análises", label: "em um único protocolo" },
  { value: "5 dias úteis", label: "prazo de entrega" },
  { value: "100% 3D", label: "sem sobreposições" },
];

const CLINICS = [
  { name: "Data X Radiologia", logo: "https://versa3d.com.br/assets/images/images-1.png" },
  { name: "CERO Imagem Digital", logo: "https://versa3d.com.br/assets/images/logocero.png" },
  { name: "CEDT Radiologia Odontológica", logo: "https://versa3d.com.br/assets/images/cropped-cedt-rad-e-tomografia-odont-ltda-logo.png" },
  { name: "Facenter", logo: "https://versa3d.com.br/assets/images/share-img.jpeg" },
  { name: "RR Imagem", logo: "https://versa3d.com.br/assets/images/images-3.png" },
  { name: "CERDO", logo: "https://versa3d.com.br/assets/images/screenshot-6.jpg" },
  { name: "Oral Rad", logo: "https://versa3d.com.br/assets/images/images.jpg" },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary">
        <div className="relative mx-auto max-w-7xl px-6 py-14 md:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-gold-dark">Diagnóstico 3D</p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Diagnóstico Ortodôntico 3D com precisão real
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Cefalometria 3D baseada em tomografia de feixe cônico (TCFC) para ortodontistas que exigem mais do seu diagnóstico.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href={WHATSAPP_PROTOCOL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-[20px] bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-[#E8C96A]"
              >
                Solicitar Protocolo <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={LOGIN_URL}
                className="inline-flex items-center rounded-[20px] border border-gold-dark bg-transparent px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/5"
              >
                Fazer Login
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-gold-dark">Diferenciais</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Por que o Protocolo VERSA3D?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Análise tridimensional completa em um único protocolo, baseado em evidência científica.
            </p>
          </div>
          <figure className="mx-auto mt-12 max-w-[900px] px-2">
            <div className="overflow-hidden rounded-xl border border-border bg-background">
              <img
                src="https://versa3d.com.br/assets/images/diagnostico-3d-dipo24-1.jpeg"
                alt="Avaliação de assimetria mandibular — Protocolo VERSA3D"
                className="h-full max-h-[480px] w-full object-cover"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-3 text-center text-sm text-muted-foreground">
              Avaliação de assimetria mandibular — Protocolo VERSA3D
            </figcaption>
          </figure>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-border bg-background p-8 transition-colors hover:border-gold-dark/40" style={{ borderWidth: "0.5px" }}>
                <f.icon className="h-6 w-6 text-gold-dark" strokeWidth={1.5} />
                <h3 className="mt-5 text-lg font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-gold-dark">Como funciona</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">Três etapas para o diagnóstico completo</h2>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="rounded-2xl border border-border bg-background p-8" style={{ borderWidth: "0.5px" }}>
                <div className="text-5xl font-bold tracking-tighter text-gold-dark">{s.n}</div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground shadow-sm">
              <Clock className="h-4 w-4 text-gold-dark" />
              Entrega em até 5 dias úteis após validação dos arquivos DICOM
            </div>
          </div>
        </div>
      </section>

      {/* Partner clinics */}
      <section className="bg-secondary" style={{ borderTop: "0.5px solid #E8DFC8", borderBottom: "0.5px solid #E8DFC8" }}>
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-16">
          <p className="text-center text-[13px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            Clínicas Credenciadas em todo o Brasil
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {CLINICS.map((c) => (
              <div key={c.name} className="flex h-16 min-w-[140px] items-center justify-center rounded-lg bg-background p-3" style={{ border: "0.5px solid #E8DFC8" }}>
                <img src={c.logo} alt={c.name} className="max-h-12 max-w-full object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Evidence-based */}
      <section className="relative overflow-hidden bg-dark text-dark-foreground">
        <div className="relative mx-auto max-w-7xl px-6 py-14 md:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-primary">Ciência</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-dark-foreground md:text-4xl">
              Baseado em evidência científica
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#6A6560] md:text-lg">
              Todas as análises do Protocolo VERSA são fundamentadas em literatura científica constantemente atualizada, garantindo diagnósticos com validade clínica comprovada.
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {metrics.map((m) => (
              <div key={m.value} className="rounded-2xl bg-[#1C1814] p-8 text-center">
                <div className="text-4xl font-bold tracking-tight text-primary md:text-5xl">{m.value}</div>
                <div className="mt-3 text-sm text-[#6A6560]">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-dark text-dark-foreground">
        <div className="mx-auto max-w-4xl px-6 py-14 md:py-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-dark-foreground md:text-5xl">
            Pronto para elevar seu diagnóstico?
          </h2>
          <a
            href={WHATSAPP_PROTOCOL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-[20px] bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-[#E8C96A]"
          >
            Solicitar Protocolo VERSA3D <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
