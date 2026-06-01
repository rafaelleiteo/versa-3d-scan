import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — VERSA3D" },
      { name: "description", content: "Protocolo VERSA3D e Cefalometria UNIFESP SONO: diagnóstico ortodôntico 3D completo." },
      { property: "og:title", content: "Serviços — VERSA3D" },
      { property: "og:description", content: "Protocolo VERSA3D e Cefalometria UNIFESP SONO." },
    ],
    links: [{ rel: "canonical", href: "/servicos" }],
  }),
  component: Servicos,
});

const services = [
  {
    title: "Protocolo VERSA3D",
    tagline: "Análise cefalométrica 3D completa via TCFC",
    image: "https://versa3d.com.br/assets/images/apresentao1.jpeg",
    evaluates: [
      "Assimetrias mandibulares",
      "Articulação temporomandibular (ATM)",
      "Sutura palatina mediana",
      "Maturidade esquelética",
      "Vias aéreas superiores",
      "Discrepâncias transversais, sagitais e verticais",
    ],
    ideal: [
      "Casos complexos",
      "Planejamento ortocirúrgico",
      "Casos onde radiografias 2D são insuficientes",
    ],
  },
  {
    title: "Cefalometria UNIFESP SONO",
    tagline: "Avaliação 3D de vias aéreas superiores",
    image: "https://versa3d.com.br/assets/images/vias2-1.jpeg",
    evaluates: [
      "Volume da nasofaringe",
      "Volume da orofaringe",
      "Volume da hipofaringe",
      "Posição do osso hioide",
    ],
    ideal: [
      "Diagnóstico de distúrbios respiratórios do sono",
      "Planejamento de tratamento de AOS",
      "Aparelhos de avanço mandibular",
    ],
  },
];

function Servicos() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-16">
          <p className="text-sm font-medium uppercase tracking-widest text-gold-dark">Serviços</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Dois protocolos. Um padrão de precisão.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <article key={s.title} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-background">
              <div className="aspect-video w-full overflow-hidden">
                <img src={s.image} alt={s.title} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="flex flex-col p-10">
                <h2 className="text-2xl font-bold tracking-tight">{s.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{s.tagline}</p>

              <div className="mt-8">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground">Avalia</h3>
                <ul className="mt-3 space-y-2">
                  {s.evaluates.map((e) => (
                    <li key={e} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 flex-none text-gold-dark" />
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground">Ideal para</h3>
                <ul className="mt-3 space-y-2">
                  {s.ideal.map((e) => (
                    <li key={e} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 flex-none text-gold-dark" />
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
