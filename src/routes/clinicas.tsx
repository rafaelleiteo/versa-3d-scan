import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
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

const CLINICS = [
  { name: "Data X Radiologia", logo: "https://versa3d.com.br/assets/images/images-1.png" },
  { name: "CERO Imagem Digital", logo: "https://versa3d.com.br/assets/images/logocero.png" },
  { name: "CEDT Radiologia Odontológica", logo: "https://versa3d.com.br/assets/images/cropped-cedt-rad-e-tomografia-odont-ltda-logo.png" },
  { name: "Facenter", logo: "https://versa3d.com.br/assets/images/share-img.jpeg" },
  { name: "RR Imagem", logo: "https://versa3d.com.br/assets/images/images-3.png" },
  { name: "CERDO", logo: "https://versa3d.com.br/assets/images/screenshot-6.jpg" },
  { name: "Oral Rad", logo: "https://versa3d.com.br/assets/images/images.jpg" },
];

function Clinicas() {
  return (
    <>
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-16">
          <p className="text-sm font-medium uppercase tracking-widest text-gold-dark">Rede credenciada</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Clínicas radiológicas em todo o Brasil.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CLINICS.map((c) => (
            <div
              key={c.name}
              className="flex flex-col items-center rounded-xl bg-background p-5 text-center"
              style={{ border: "0.5px solid #E8DFC8" }}
            >
              <div className="flex h-20 w-full items-center justify-center">
                <img
                  src={c.logo}
                  alt={c.name}
                  className="max-h-[60px] max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              <p className="mt-4 text-[13px] font-medium text-foreground">{c.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[#2A2520] bg-dark text-dark-foreground">
        <div className="mx-auto max-w-4xl px-6 py-14 md:py-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-dark-foreground md:text-4xl">Quero credenciar minha clínica</h2>
          <p className="mt-4 text-[#6A6560]">Junte-se à rede VERSA3D e ofereça diagnóstico ortodôntico 3D aos seus clientes.</p>
          <a
            href={WHATSAPP_CLINIC}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-[20px] bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-[#E8C96A]"
          >
            Falar com a equipe <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
