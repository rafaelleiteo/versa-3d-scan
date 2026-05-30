import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, ArrowRight } from "lucide-react";
import { WHATSAPP_CLINIC } from "@/lib/links";

export const Route = createFileRoute("/clinicas")({
  head: () => ({
    meta: [
      { title: "Clínicas Credenciadas — VERSA3D" },
      { name: "description", content: "Rede de clínicas radiológicas credenciadas pelo VERSA3D em todo o Brasil." },
      { property: "og:title", content: "Clínicas Credenciadas — VERSA3D" },
      { property: "og:description", content: "Rede de clínicas radiológicas credenciadas em todo o Brasil." },
    ],
    links: [{ rel: "canonical", href: "/clinicas" }],
  }),
  component: Clinicas,
});

const STATES = ["Todos", "SP", "RJ", "MG", "RS", "PR", "SC", "BA", "DF", "PE", "CE"];

const CLINICS = [
  { name: "Centro de Imagem Paulista", city: "São Paulo", state: "SP" },
  { name: "Radiologia Ipanema", city: "Rio de Janeiro", state: "RJ" },
  { name: "Imagem BH Diagnóstico", city: "Belo Horizonte", state: "MG" },
  { name: "Sul Imagem", city: "Porto Alegre", state: "RS" },
  { name: "Curitiba Radiologia", city: "Curitiba", state: "PR" },
  { name: "Floripa Imagem", city: "Florianópolis", state: "SC" },
  { name: "Salvador Diagnóstico", city: "Salvador", state: "BA" },
  { name: "Brasília Imagem", city: "Brasília", state: "DF" },
  { name: "Recife Radiologia", city: "Recife", state: "PE" },
];

function Clinicas() {
  const [filter, setFilter] = useState("Todos");
  const list = filter === "Todos" ? CLINICS : CLINICS.filter((c) => c.state === filter);

  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-16">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Rede credenciada</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Clínicas radiológicas em todo o Brasil.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-wrap gap-2">
          {STATES.map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                filter === s
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-background text-muted-foreground hover:text-foreground"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((c) => (
            <div key={c.name} className="rounded-2xl border border-border bg-background p-6 transition-colors hover:border-foreground/30">
              <MapPin className="h-5 w-5 text-primary" strokeWidth={1.5} />
              <h3 className="mt-4 text-base font-semibold">{c.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.city}, {c.state}</p>
            </div>
          ))}
        </div>

        {list.length === 0 && (
          <p className="mt-10 text-center text-sm text-muted-foreground">Nenhuma clínica encontrada neste estado.</p>
        )}
      </section>

      <section className="border-t border-border bg-dark text-dark-foreground">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Quero credenciar minha clínica</h2>
          <p className="mt-4 text-dark-foreground/70">Junte-se à rede VERSA3D e ofereça diagnóstico ortodôntico 3D aos seus clientes.</p>
          <a
            href={WHATSAPP_CLINIC}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
          >
            Falar com a equipe <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
