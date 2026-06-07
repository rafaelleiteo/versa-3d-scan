import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Info, Phone, MapPin, Globe } from "lucide-react";

const WHATSAPP_CLINIC =
  "https://api.whatsapp.com/send/?phone=5524992000389&text=Olá!+Tenho+interesse+no+credenciamento+de+clínica+radiológica";

export const Route = createFileRoute("/clinicas")({
  head: () => ({
    meta: [
      { title: "Clínicas Credenciadas — VERSA3D" },
      { name: "description", content: "Encontre uma clínica radiológica credenciada pela VERSA3D próxima de você." },
      { property: "og:title", content: "Clínicas Credenciadas — VERSA3D" },
      { property: "og:description", content: "Rede de clínicas radiológicas credenciadas em todo o Brasil." },
    ],
    links: [{ rel: "canonical", href: "/clinicas" }],
  }),
  component: Clinicas,
});

type Unit = { name?: string; address: string; phones?: string[] };
type Clinic = {
  name: string;
  logo?: string;
  website?: string;
  phones?: string[];
  address?: string;
  units?: Unit[];
};
type CityGroup = { city: string; clinics: Clinic[] };

const LOGOS = {
  cedt: "/cedt.png",
  datax: "/datax.png",
  facenter: "/facenter.png",
  cero: "/logocero.png",
  oralrad: "/oralrad.png",
  cerdo: "/cerdo.png",
  rr: "/rr_imagem.png",
  inova: "/inova.png",
  rorrj: "/rorrj.png",
  ima: "/ima.png",
  odontox: "/odontoz-rj.png",
  odontoimagem45: "/odontoimagem45.png",
  odontoxba: "/odontoz-rj.png",
};

const GROUPS: CityGroup[] = [
  {
    city: "Rio de Janeiro — RJ",
    clinics: [
      {
        name: "CEDT | Radiologia Odontológica",
        logo: LOGOS.cedt,
        website: "www.cedt.com.br",
        phones: ["(21) 2408-5511", "(21) 2431-4452"],
        address:
          "Avenida das Américas, nº 3500, Bl.7 (Ed. Hong Kong 3000), Sala 533 Le Monde Office — Barra da Tijuca, Rio de Janeiro/RJ",
      },
      {
        name: "DATAX — Odontologia Diagnóstica",
        logo: LOGOS.datax,
        website: "www.clinicadatax.com.br",
        phones: ["(21) 97148-2420", "(21) 2234-1600", "(21) 2567-1333"],
        units: [
          { name: "Unidade Barra I – Downtown", address: "Av. das Américas, 500, bloco 13, loja 124 — Shopping Downtown" },
          { name: "Unidade Barra II – Américas Park", address: "Av. das Américas, 7935, sala 225, bl. A — Ed. Sun Plaza – Américas Park" },
          { name: "Unidade Botafogo", address: "Rua Real Grandeza, 108, sala 119 — Real Medical Center" },
          { name: "Unidade Tijuca", address: "Rua Santo Afonso, 131, sala 201 — Tijuca" },
        ],
      },
      {
        name: "FACENTER",
        logo: LOGOS.facenter,
        website: "www.facenter.com.br",
        units: [
          { name: "Unidade Barra da Tijuca", address: "Av. das Américas, 4666, Barra Shopping — Centro Médico 2, Sl 406", phones: ["(21) 98330-7429", "(21) 2239-0513"] },
          { name: "Unidade Ipanema", address: "Rua Visconde de Pirajá, 550, Sala 322 — Ipanema", phones: ["(21) 96557-1467", "(21) 2239-0513"] },
          { name: "Unidade Centro", address: "Rua da Quitanda, 191, 8º andar — Centro", phones: ["(21) 98346-7149", "(21) 2239-0513"] },
          { name: "Unidade Hospital da Boca", address: "Rua Santa Luzia, 88 — Hospital da Boca Centro", phones: ["(21) 98297-0605", "(21) 2239-0513"] },
        ],
      },
      {
        name: "RORRJ — Radiologia Odontológica",
        logo: LOGOS.rorrj,
        website: "www.rorrj.com.br",
        phones: ["(21) 2204-2194", "(21) 2567-8060", "(21) 99855-2909 (WhatsApp)"],
        address: "Rua Almirante Cochrane, nº 35 — Tijuca, Rio de Janeiro/RJ — CEP: 20550-040",
      },
      {
        name: "Odonto-X Clínica Radiológica",
        logo: LOGOS.odontox,
        phones: ["(21) 98490-3025"],
        address: "Av. das Américas, 500, Bl 16, Sala 211 (Downtown) — Barra da Tijuca, Rio de Janeiro/RJ",
      },
      {
        name: "Odonto Imagem 45",
        logo: LOGOS.odontoimagem45,
        phones: ["(21) 98776-0052"],
        address: "Praça Saenz Peña, 45, Sala 1412 — Tijuca, Rio de Janeiro/RJ",
      },
    ],
  },
  {
    city: "Campos dos Goytacazes — RJ",
    clinics: [
      {
        name: "CERO — Imagem Digital",
        logo: LOGOS.cero,
        website: "www.ceroimagem.com.br",
        units: [
          { name: "Unidade Campos Matriz", address: "R. Barão da Lagoa Dourada, 237, salas 10 e 11 — Centro, Campos dos Goytacazes/RJ", phones: ["(22) 2722-0094", "(22) 2723-0116"] },
          { name: "Unidade Campos II", address: "R. Treze de Maio, 262, loja 2 — Centro, Campos dos Goytacazes/RJ", phones: ["(22) 3025-7323", "(22) 99790-6108", "(22) 99967-9958", "(22) 99977-9621"] },
        ],
      },
    ],
  },
  {
    city: "Macaé — RJ",
    clinics: [
      {
        name: "CERO — Imagem Digital",
        logo: LOGOS.cero,
        website: "www.ceroimagem.com.br",
        units: [
          { name: "Unidade Macaé", address: "Av. Papa João XXIII, 47 — Macaé/RJ", phones: ["(22) 2765-2761", "(22) 2772-0595", "(22) 99968-0904", "(22) 99944-1566"] },
        ],
      },
      {
        name: "ORAL RAD — Diagnóstico por Imagem",
        logo: LOGOS.oralrad,
        website: "www.oralrad.com.br",
        units: [
          { name: "Unidade Centro", address: "Rua Silva Jardim, 33, salas 103/104 — Centro, Macaé/RJ", phones: ["(22) 99747-0467", "(22) 2770-5111", "(22) 2793-0905"] },
          { name: "Unidade Cavaleiros", address: "Av. Nossa Senhora da Glória, 1895 — Cavaleiros, Macaé/RJ", phones: ["(22) 99963-2858", "(22) 2021-2858"] },
        ],
      },
    ],
  },
  {
    city: "Niterói — RJ",
    clinics: [
      {
        name: "DATAX — Odontologia Diagnóstica",
        logo: LOGOS.datax,
        website: "www.clinicadatax.com.br",
        units: [
          { name: "Unidade Icaraí", address: "Rua Miguel de Frias, 206, sala 308 — Icaraí, Niterói/RJ", phones: ["(21) 97148-2420", "(21) 2234-1600", "(21) 2567-1333"] },
        ],
      },
      {
        name: "INOVA — Radiologia Odontológica",
        logo: LOGOS.inova,
        website: "www.radiologiainova.com.br",
        address: "Rua Noronha Torrezão, 24, sala 903 — Santa Rosa, Niterói/RJ",
        phones: ["(21) 3587-0594", "(21) 99499-8069"],
      },
    ],
  },
  {
    city: "Petrópolis — RJ",
    clinics: [
      {
        name: "CERDO — Centro de Radiagnóstico Oral",
        logo: LOGOS.cerdo,
        website: "www.cerdo.com.br",
        address: "R. Mal. Deodoro, 46, sala 302 — Centro, Petrópolis/RJ",
        phones: ["(24) 2242-3283"],
      },
      {
        name: "IMA Radiologia",
        logo: LOGOS.ima,
        website: "www.imaradiologia.com.br",
        address: "Shopping Bauhaus Expansão — Rua Dr. Nelson de Sá Earp, 95, sala 320 — Centro, Petrópolis/RJ",
        phones: ["(24) 98831-3307", "(24) 2231-3307"],
      },
      {
        name: "RR Imagem",
        logo: LOGOS.rr,
        website: "www.rrimagem.com.br",
        units: [
          { name: "Unidade Itaipava", address: "Estrada União e Indústria, 11775, sobreloja 6 — Itaipava, Petrópolis/RJ", phones: ["(24) 98145-8215", "(24) 2222-7143"] },
        ],
      },
    ],
  },
  {
    city: "Paulo Afonso — BA",
    clinics: [
      {
        name: "Odonto X — Centro de Diagnóstico por Imagem",
        logo: LOGOS.odontoxba,
        phones: ["(75) 3281-7271"],
        address: "Rua Santos Dumont, 10, Térreo — Centro, Paulo Afonso/BA",
      },
    ],
  },
];

function ClinicCard({ clinic }: { clinic: Clinic }) {
  return (
    <article
      className="flex flex-col rounded-xl bg-background p-5"
      style={{ border: "0.5px solid #E8DFC8" }}
    >
      {clinic.logo && (
        <div className="mb-3 flex h-14 items-center justify-center">
          <img
            src={clinic.logo}
            alt={clinic.name}
            loading="lazy"
            style={{ maxHeight: 48, maxWidth: 140, objectFit: "contain" }}
          />
        </div>
      )}
      <h3 style={{ fontSize: 15, fontWeight: 500, color: "#12100D" }}>{clinic.name}</h3>
      {clinic.website && (
        <a
          href={`https://${clinic.website.replace(/^https?:\/\//, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-1.5 hover:underline"
          style={{ fontSize: 12, color: "#A8893A" }}
        >
          <Globe className="h-3.5 w-3.5" /> {clinic.website}
        </a>
      )}
      {clinic.phones && (
        <div className="mt-2 space-y-1">
          {clinic.phones.map((p) => (
            <div key={p} className="flex items-center gap-1.5 text-muted-foreground" style={{ fontSize: 12 }}>
              <Phone className="h-3.5 w-3.5" style={{ color: "#A8893A" }} />
              {p}
            </div>
          ))}
        </div>
      )}
      {clinic.address && (
        <div className="mt-2 flex items-start gap-1.5 text-muted-foreground" style={{ fontSize: 12 }}>
          <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: "#A8893A" }} />
          <span>{clinic.address}</span>
        </div>
      )}
      {clinic.units && (
        <ul className="mt-3 space-y-3">
          {clinic.units.map((u) => (
            <li key={(u.name ?? "") + u.address}>
              {u.name && (
                <p style={{ fontSize: 12, fontWeight: 500, color: "#12100D" }}>{u.name}</p>
              )}
              <div className="mt-1 flex items-start gap-1.5 text-muted-foreground" style={{ fontSize: 12 }}>
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: "#A8893A" }} />
                <span>{u.address}</span>
              </div>
              {u.phones?.map((p) => (
                <div key={p} className="mt-1 flex items-center gap-1.5 text-muted-foreground" style={{ fontSize: 12 }}>
                  <Phone className="h-3.5 w-3.5" style={{ color: "#A8893A" }} />
                  {p}
                </div>
              ))}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

function Clinicas() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-16">
          <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-gold-dark">
            Clínicas Credenciadas
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Encontre uma clínica próxima de você
          </h1>
          <p className="mt-6 max-w-3xl text-base text-muted-foreground md:text-lg">
            As clínicas radiológicas credenciadas pela VERSA3D são parceiras selecionadas que realizam a aquisição tomográfica com os parâmetros técnicos necessários para a execução do Protocolo VERSA3D. O encaminhamento é simples: o ortodontista indica a clínica mais próxima ao paciente, que realiza o exame e envia os arquivos DICOM diretamente pelo portal.
          </p>
        </div>
      </section>

      {/* Listing */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-16">
          {/* Info banner */}
          <div
            className="mb-8 flex items-start gap-3 rounded-xl p-4"
            style={{ background: "#F5F1E8", border: "0.5px solid #E8DFC8" }}
          >
            <Info className="mt-0.5 h-5 w-5 shrink-0" style={{ color: "#A8893A" }} />
            <p className="text-foreground" style={{ fontSize: 13, lineHeight: 1.6 }}>
              Todas as clínicas abaixo estão habilitadas a receber solicitações do Protocolo VERSA3D. Após a realização do exame, os arquivos DICOM são enviados ao portal para processamento.
            </p>
          </div>

          <div className="space-y-12">
            {GROUPS.map((g) => (
              <div key={g.city}>
                <h2 className="mb-5 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                  {g.city}
                </h2>
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {g.clinics.map((c) => (
                    <ClinicCard key={g.city + c.name} clinic={c} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-dark text-dark-foreground">
        <div className="mx-auto max-w-4xl px-6 py-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-dark-foreground md:text-4xl">
            Sua clínica ainda não é credenciada?
          </h2>
          <p className="mt-4 text-[#94a3b8]">
            Faça parte da rede VERSA3D e ofereça aos seus pacientes acesso ao diagnóstico ortodôntico 3D mais completo do mercado.
          </p>
          <a
            href={WHATSAPP_CLINIC}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-[20px] bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-[#E8C96A]"
          >
            Quero credenciar minha clínica <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
