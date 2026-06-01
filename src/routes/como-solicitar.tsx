import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/como-solicitar")({
  head: () => ({
    meta: [
      { title: "Como Solicitar — VERSA3D" },
      { name: "description", content: "Passo a passo para solicitar o Protocolo VERSA3D pelo portal." },
      { property: "og:title", content: "Como Solicitar — VERSA3D" },
      { property: "og:description", content: "Cadastre-se, envie DICOM e receba o laudo completo." },
    ],
    links: [{ rel: "canonical", href: "/como-solicitar" }],
  }),
  component: ComoSolicitar,
});

const steps = [
  { title: "Cadastro", body: "Acesse versa3d.com.br/login e crie sua conta de ortodontista." },
  { title: "Novo Pedido", body: "Clique em \"Novo Pedido\", selecione o serviço e preencha os dados do paciente." },
  { title: "Upload DICOM", body: "Envie os arquivos DICOM da tomografia pelo portal." },
  { title: "Acompanhamento", body: "Monitore o status do pedido em tempo real." },
  { title: "Download", body: "Receba notificação por e-mail e baixe o relatório completo." },
];

function ComoSolicitar() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-16">
          <p className="text-sm font-medium uppercase tracking-widest text-gold-dark">Como solicitar</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Do cadastro ao laudo, em cinco etapas.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-14 md:py-16">
        <ol className="relative space-y-12 border-l border-border pl-10 md:space-y-16">
          {steps.map((s, i) => (
            <li key={s.title} className="relative">
              <div className="absolute -left-[3.25rem] flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-sm font-bold text-primary">
                {i + 1}
              </div>
              <h3 className="text-xl font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-base text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-5xl px-6 py-14 md:py-16">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Materiais de apoio</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium transition-colors hover:bg-accent">
              <Download className="h-4 w-4" /> Ebook: Como se Cadastrar na Plataforma
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium transition-colors hover:bg-accent">
              <Download className="h-4 w-4" /> Ebook: Como Solicitar o Protocolo VERSA3D
            </a>
          </div>

          <div className="mt-12 rounded-2xl border border-border bg-background p-8">
            <h3 className="text-lg font-semibold">Prefere encaminhar via clínica radiológica?</h3>
            <p className="mt-2 text-sm text-muted-foreground">Veja a lista de clínicas credenciadas em todo o Brasil.</p>
            <Link
              to="/clinicas"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Ver clínicas credenciadas <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
