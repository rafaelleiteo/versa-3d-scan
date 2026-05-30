import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, Minus, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — VERSA3D" },
      { name: "description", content: "Dúvidas frequentes sobre o Protocolo VERSA, prazos, envio de DICOM e credenciamento." },
      { property: "og:title", content: "FAQ — VERSA3D" },
      { property: "og:description", content: "Dúvidas frequentes sobre cefalometria 3D." },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: Faq,
});

const WHATSAPP_FAQ = "https://api.whatsapp.com/send/?phone=5524992000389&text=Olá!+Tenho+uma+dúvida+sobre+o+Protocolo+VERSA3D";

const QA = [
  {
    q: "O que está incluso no Protocolo VERSA?",
    a: "O Protocolo VERSA é um estudo cefalométrico ortodôntico avançado baseado em tomografia computadorizada. Inclui análise cefalométrica 3D, avaliação de ATMs, avaliação de vias aéreas, maturidade esquelética das vértebras cervicais, avaliação da sutura palatina mediana e análise de assimetrias. Todas as medidas são baseadas em evidência científica. O protocolo não inclui laudo tomográfico, identificação de processos patológicos, avaliação de seios paranasais, dentes retidos, planejamento de implantes ou trauma.",
  },
  {
    q: "Qual o prazo de entrega?",
    a: "O prazo de entrega é de 5 dias úteis, contados a partir da validação dos arquivos DICOM. Assim que recebermos e confirmarmos que está tudo certo, você recebe a confirmação e o prazo começa a contar.",
  },
  {
    q: "Como faço para enviar um caso?",
    a: "O pedido é feito pela nossa plataforma em versa3d.com.br/login. Você preenche os dados do paciente e faz o upload dos arquivos DICOM comprimidos em .zip ou .rar. As fotos não são obrigatórias, mas podem ser incluídas. Caso o arquivo seja muito grande, envie para exames@versa3d.com.br.",
  },
  {
    q: "Qual tomografia o paciente precisa fazer?",
    a: "É necessária uma tomografia de face total em FOV estendido, da glabela ao osso hióide, com o paciente em máxima intercuspidação habitual. Qualquer marca de tomógrafo cone beam atende, desde que o FOV seja compatível. Após a aquisição, a clínica nos envia os arquivos DICOM e damos sequência ao protocolo.",
  },
  {
    q: "As fotos são obrigatórias?",
    a: "Não. Se tiver, pode incluir que adicionamos ao protocolo. São em geral 3 fotos extraorais (repouso, sorrindo e perfil direito) e 5 intraorais (oclusal superior, oclusal inferior, oclusão direita, esquerda e frontal). O protocolo é realizado normalmente sem elas.",
  },
  {
    q: "O que é o Protocolo UNIFESP SONO?",
    a: "É um serviço separado do Protocolo VERSA, voltado para avaliação cefalométrica de distúrbios do sono e apneia. É realizado a partir da mesma tomografia de face e pode ser solicitado de forma avulsa ou em conjunto com o Protocolo VERSA.",
  },
  {
    q: "Como acompanho o andamento do pedido?",
    a: "O acompanhamento é feito diretamente pela plataforma em versa3d.com.br/login. Você consegue ver o status de todos os pedidos. Assim que o protocolo for finalizado, você também recebe uma notificação por e-mail.",
  },
  {
    q: "Como credenciar minha clínica radiológica?",
    a: "Entre em contato via WhatsApp com o nome completo da clínica, CNPJ, endereço, telefone e nome do responsável. Realizamos o cadastro e orientamos os próximos passos. Clínicas credenciadas têm faturamento mensal e acesso à plataforma de envio.",
  },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-16">
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

        <div className="mt-16 rounded-2xl border border-border bg-secondary/40 p-8 text-center">
          <p className="text-base font-semibold md:text-lg">Não encontrou o que procura?</p>
          <a
            href={WHATSAPP_FAQ}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30"
          >
            <MessageCircle className="h-4 w-4" /> Falar pelo WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
