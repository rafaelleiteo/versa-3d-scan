import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — VERSA3D" },
      { name: "description", content: "Dúvidas frequentes sobre o Protocolo VERSA3D e cefalometria 3D." },
      { property: "og:title", content: "FAQ — VERSA3D" },
      { property: "og:description", content: "Dúvidas frequentes sobre cefalometria 3D." },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: Faq,
});

const QA = [
  { q: "O que é o Protocolo VERSA3D?", a: "Uma solução avançada de diagnóstico ortodôntico baseada em tomografia computadorizada 3D, oferecendo análise cefalométrica tridimensional completa sem sobreposições." },
  { q: "Quando devo solicitar o protocolo?", a: "Em casos com discrepâncias transversais, verticais severas ou sagitais severas, tratamentos ortocirúrgicos, sinais de DTM severa, ou quando a decisão clínica não pode ser tomada com radiografias convencionais." },
  { q: "Qual exame o paciente deve realizar?", a: "O ortodontista deve solicitar uma Tomografia Computadorizada de Feixe Cônico (TCFC) completa de face. Fotografias extraorais e intraorais são opcionais mas complementam a análise." },
  { q: "O que consigo avaliar pelo protocolo?", a: "Discrepâncias esqueléticas nos três planos, grau de severidade, avaliação detalhada da ATM, sutura palatina mediana, maturidade esquelética cervical e vias aéreas superiores." },
  { q: "Como acompanho o pedido?", a: "Após o envio, você pode monitorar o status em tempo real pelo portal. Você também receberá notificação por e-mail quando o laudo estiver pronto para download." },
  { q: "Como me torno uma clínica credenciada?", a: "Entre em contato via WhatsApp ou pelo formulário de contato. Buscamos parceiros comprometidos com qualidade e inovação no diagnóstico por imagem." },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">FAQ</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Perguntas frequentes.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20">
        <div className="divide-y divide-border border-y border-border">
          {QA.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-base font-semibold md:text-lg">{item.q}</span>
                  {isOpen ? <Minus className="h-5 w-5 flex-none text-primary" /> : <Plus className="h-5 w-5 flex-none text-muted-foreground" />}
                </button>
                {isOpen && (
                  <p className="pb-6 pr-10 text-sm leading-relaxed text-muted-foreground md:text-base">{item.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
