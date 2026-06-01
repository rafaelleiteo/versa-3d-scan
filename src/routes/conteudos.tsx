import { createFileRoute } from "@tanstack/react-router";
import { Instagram, MessageCircle } from "lucide-react";
import { WHATSAPP_PROTOCOL } from "@/lib/links";

export const Route = createFileRoute("/conteudos")({
  head: () => ({
    meta: [
      { title: "Conteúdos — VERSA3D" },
      { name: "description", content: "Artigos, casos clínicos e publicações científicas sobre diagnóstico ortodôntico 3D." },
      { property: "og:title", content: "Conteúdos — VERSA3D" },
      { property: "og:description", content: "Artigos, casos clínicos e publicações científicas em breve." },
    ],
    links: [{ rel: "canonical", href: "/conteudos" }],
  }),
  component: Conteudos,
});

function Conteudos() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 text-center">
      <p className="text-sm font-medium uppercase tracking-widest text-gold-dark">Conteúdos</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
        Conteúdos em breve
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
        Artigos, casos clínicos e publicações científicas sobre diagnóstico ortodôntico 3D. Acompanhe nossas redes para não perder nada.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <a
          href="https://instagram.com/versa_3d"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30"
        >
          <Instagram className="h-4 w-4" /> @versa_3d
        </a>
        <a
          href={WHATSAPP_PROTOCOL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
        >
          <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
        </a>
      </div>
    </section>
  );
}
