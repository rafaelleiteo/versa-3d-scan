import { createFileRoute, Link } from "@tanstack/react-router";
import { Instagram, Target, Eye, Shield } from "lucide-react";

export const Route = createFileRoute("/quem-somos")({
  head: () => ({
    meta: [
      { title: "Quem Somos — VERSA3D" },
      { name: "description", content: "Conheça o fundador e a missão da VERSA3D, referência em diagnóstico ortodôntico 3D." },
      { property: "og:title", content: "Quem Somos — VERSA3D" },
      { property: "og:description", content: "Uma empresa fundada por quem vive a ortodontia na prática clínica e científica." },
    ],
    links: [{ rel: "canonical", href: "/quem-somos" }],
  }),
  component: QuemSomos,
});

function QuemSomos() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Quem Somos</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Quem está por trás da VERSA3D
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Uma empresa fundada por quem vive a ortodontia na prática clínica e científica.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="overflow-hidden rounded-3xl border border-border bg-secondary/30">
          <div className="grid gap-10 p-8 md:grid-cols-[auto_1fr] md:gap-12 md:p-12">
            <div className="flex justify-center md:block">
              <div className="flex h-44 w-44 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/5 text-5xl font-bold text-primary ring-4 ring-background md:h-56 md:w-56 md:text-6xl">
                RL
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Fundador da VERSA3D</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Rafael Leite Oliveira</h2>
              <p className="mt-4 text-sm font-medium text-foreground">
                Ortodontista · Professor universitário · Mestre em Ortodontia · Doutorando
              </p>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Rafael fundou a VERSA3D a partir da percepção das limitações do diagnóstico bidimensional na ortodontia — e da certeza de que a tomografia poderia substituir grande parte da documentação convencional, entregando diagnósticos mais precisos, previsíveis e clinicamente aplicáveis.
              </p>
              <a
                href="https://instagram.com/versa_3d"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                <Instagram className="h-4 w-4" /> @versa_3d
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Target, title: "Missão", body: "Proporcionar diagnósticos ortodônticos mais precisos, previsíveis e acessíveis utilizando tecnologia 3D." },
              { icon: Eye, title: "Visão", body: "Ser a referência técnica nacional em diagnóstico ortodôntico 3D." },
              { icon: Shield, title: "Valores", body: "Precisão diagnóstica · Excelência técnica · Ciência · Inovação · Ética · Padronização." },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-border bg-background p-8">
                <c.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                <h3 className="mt-5 text-xl font-semibold">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tese */}
      <section className="relative overflow-hidden bg-dark text-dark-foreground">
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">A Tese</p>
          <blockquote className="mt-6 text-2xl font-medium leading-snug tracking-tight md:text-4xl">
            "O diagnóstico determina diretamente o sucesso do tratamento. Tornar o complexo simples e diretamente aplicável à prática clínica — essa é a grande missão da VERSA3D."
          </blockquote>
          <p className="mt-8 text-sm text-dark-foreground/70">— Rafael Leite Oliveira, Fundador</p>
          <div className="mt-10">
            <Link
              to="/contato"
              className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-dark-foreground transition-colors hover:bg-white/10"
            >
              Fale conosco
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
