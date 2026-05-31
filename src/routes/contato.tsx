import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Instagram, MessageCircle } from "lucide-react";
import { WHATSAPP_PROTOCOL } from "@/lib/links";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — VERSA3D" },
      { name: "description", content: "Fale com a equipe VERSA3D por e-mail, Instagram ou WhatsApp." },
      { property: "og:title", content: "Contato — VERSA3D" },
      { property: "og:description", content: "Entre em contato com a equipe VERSA3D." },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: Contato,
});

const channels = [
  { icon: Mail, label: "E-mail", value: "contato@versa3d.com.br", href: "mailto:contato@versa3d.com.br" },
  { icon: Instagram, label: "Instagram", value: "@versa_3d", href: "https://instagram.com/versa_3d" },
  { icon: MessageCircle, label: "WhatsApp", value: "(24) 99200-0389", href: WHATSAPP_PROTOCOL },
];

function Contato() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-16">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Contato</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Vamos conversar.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-16">
        <div className="grid gap-4 md:grid-cols-3">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-border bg-background p-8 transition-colors hover:border-foreground/30"
            >
              <c.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
              <div className="mt-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{c.label}</div>
              <div className="mt-1 text-base font-semibold group-hover:text-primary">{c.value}</div>
            </a>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-background p-8 md:p-12">
          <h2 className="text-2xl font-bold tracking-tight">Envie uma mensagem</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="mt-8 grid gap-5"
          >
            <div>
              <label htmlFor="nome" className="text-sm font-medium">Nome</label>
              <input
                id="nome"
                required
                className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium">E-mail</label>
              <input
                id="email"
                type="email"
                required
                className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="msg" className="text-sm font-medium">Mensagem</label>
              <textarea
                id="msg"
                required
                rows={5}
                className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
              />
            </div>
            <div className="flex items-center gap-4">
              <button
                type="submit"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30"
              >
                Enviar
              </button>
              {sent && <span className="text-sm text-muted-foreground">Mensagem enviada. Obrigado!</span>}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
