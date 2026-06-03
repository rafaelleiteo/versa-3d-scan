import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/quem-somos")({
  head: () => ({
    meta: [
      { title: "Quem Somos — VERSA3D" },
      { name: "description", content: "Conheça a equipe da VERSA3D: clínica, ciência, tecnologia e gestão para transformar o diagnóstico ortodôntico." },
      { property: "og:title", content: "Quem Somos — VERSA3D" },
      { property: "og:description", content: "As pessoas por trás da VERSA3D." },
    ],
    links: [{ rel: "canonical", href: "/quem-somos" }],
  }),
  component: QuemSomos,
});

type Member = {
  initials: string;
  name: string;
  role: string;
  bio: string;
  link?: { label: string; href: string };
};

const TEAM: Member[] = [
  {
    initials: "IG",
    name: "Isabelle Guimarães",
    role: "Diretora Administrativa",
    bio: "Na VERSA3D, responde pela gestão administrativa e operacional, garantindo que a estrutura interna suporte o crescimento com consistência. Ortodontista especialista, com atuação também na área de perícia judicial odontológica.",
  },
  {
    initials: "SF",
    name: "Sabrina Freitas",
    role: "Secretária Executiva · Atendimento & Relacionamento",
    bio: "Responsável pelo atendimento inicial, organização operacional e relacionamento com ortodontistas e clínicas radiológicas. Garante comunicação clara, agilidade e padronização no atendimento.",
  },
  {
    initials: "PH",
    name: "Pedro Henrique Siqueira",
    role: "Desenvolvimento Técnico & Produto",
    bio: "Atua no desenvolvimento técnico e na evolução dos protocolos e processos digitais da VERSA3D. Responsável pela organização de fluxos operacionais, suporte tecnológico interno e integração entre diagnóstico, tecnologia e escalabilidade dos serviços.",
  },
  {
    initials: "DC",
    name: "Daniel Campolina",
    role: "Consultor Científico",
    bio: "Atua como referência científica da VERSA3D, contribuindo para a atualização constante dos protocolos de análise com base em evidências clínicas e acadêmicas. Especialista em Ortodontia, Periodontia e Implantodontia, com Mestrado em Ortodontia.",
  },
  {
    initials: "HM",
    name: "Humberto Moraes",
    role: "Consultor de IA & Estratégia Digital",
    bio: "Na VERSA3D, lidera a estruturação de processos, automação com inteligência artificial e estratégia digital. Pós-graduado em IA e Negócios pela PUC-Campinas e Meta Verified Technology Partner, com atuação de mais de 25 anos em multinacionais como Subsea 7, Deloitte, ThyssenKrupp e Bosch.",
    link: { label: "galileohub.com.br", href: "https://galileohub.com.br" },
  },
  {
    initials: "TM",
    name: "Thyago Menezes",
    role: "Desenvolvimento Web & Sistemas",
    bio: "Responsável pelo desenvolvimento, manutenção e evolução da plataforma digital da VERSA3D. Atua na estruturação de sistemas internos, integrações tecnológicas e implementação de soluções voltadas à eficiência, estabilidade e escalabilidade dos serviços digitais.",
  },
];

function QuemSomos() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-16">
          <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-gold-dark">Quem Somos</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            As pessoas por trás da VERSA3D
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Uma equipe que combina clínica, ciência, tecnologia e gestão para transformar o diagnóstico ortodôntico.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-dark text-dark-foreground">
        <div className="mx-auto max-w-5xl px-6 py-14 md:py-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
            <div
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full"
              style={{ border: "1.5px solid #C9A84C", background: "rgba(201,168,76,0.1)" }}
            >
              <span style={{ color: "#C9A84C", fontSize: 20, fontWeight: 500 }}>RL</span>
            </div>
            <div className="flex-1">
              <h2 style={{ fontSize: 22, fontWeight: 500, color: "#FFFFFF" }}>Rafael Leite</h2>
              <p
                className="mt-1"
                style={{ fontSize: 11, color: "#C9A84C", fontWeight: 500, letterSpacing: "0.04em" }}
              >
                Fundador · Ortodontista · Professor · Empreendedor
              </p>
              <p className="mt-4" style={{ color: "#FFFFFF", fontSize: 13, lineHeight: 1.7 }}>
                Sua atuação integra prática clínica, ensino, pesquisa e inovação, com foco no desenvolvimento de soluções que transformem informações complexas em decisões mais claras, seguras e previsíveis. Foi dessa visão que nasceu a VERSA3D, com o propósito de apoiar ortodontistas por meio de diagnósticos tridimensionais mais completos, objetivos e clinicamente relevantes. Atua como professor de graduação, coordenador de especialização em Ortodontia, ortodontista clínico e empreendedor, liderando iniciativas como a VERSA3D e a DentalMind. Especialista em Ortodontia e em DTM e Dor Orofacial, Mestre em Ortodontia e Doutorando em Odontopediatria.
              </p>
              <a
                href="https://instagram.com/rafael.leiteoliveira"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block hover:underline"
                style={{ color: "#C9A84C", fontSize: 11 }}
              >
                @rafael.leiteoliveira
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Team grid */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-5xl px-6 py-14 md:py-16">
          <div className="grid gap-4 md:grid-cols-2">
            {TEAM.map((m) => (
              <article
                key={m.name}
                className="rounded-xl bg-background p-4"
                style={{ border: "0.5px solid #E8DFC8" }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                    style={{ background: "#1C1A16" }}
                  >
                    <span style={{ color: "#C9A84C", fontSize: 12, fontWeight: 500 }}>{m.initials}</span>
                  </div>
                  <div className="min-w-0">
                    <h3 style={{ fontSize: 14, fontWeight: 500 }} className="text-foreground">
                      {m.name}
                    </h3>
                    <p style={{ fontSize: 11, color: "#A8893A", fontWeight: 500 }}>{m.role}</p>
                  </div>
                </div>
                <p className="mt-3 text-muted-foreground" style={{ fontSize: 12, lineHeight: 1.6 }}>
                  {m.bio}
                </p>
                {m.link && (
                  <a
                    href={m.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block hover:underline"
                    style={{ color: "#A8893A", fontSize: 11 }}
                  >
                    {m.link.label}
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
