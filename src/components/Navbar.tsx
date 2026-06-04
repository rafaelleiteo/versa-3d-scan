import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { WHATSAPP_PROTOCOL, LOGIN_URL } from "@/lib/links";

const LOGO_SRC = "https://www.versa3d.com.br/assets/images/logo-versa1-1-copia-copia-1.png";

const protocoloItems = [
  { to: "/servicos", label: "Protocolo VERSA3D", hash: "versa3d" },
  { to: "/servicos", label: "Cefalometria UNIFESP SONO", hash: "unifesp" },
];

const links = [
  { to: "/como-solicitar", label: "Como Solicitar" },
  { to: "/clinicas", label: "Clínicas" },
  { to: "/conteudos", label: "Conteúdos" },
  { to: "/quem-somos", label: "Quem Somos" },
  { to: "/faq", label: "FAQ" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [protoOpen, setProtoOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#2A2520] bg-dark text-dark-foreground backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center">
          <img src={LOGO_SRC} alt="VERSA3D" height={32} className="h-8 w-auto" />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setProtoOpen(true)}
            onMouseLeave={() => setProtoOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm text-white transition-colors hover:text-dark-foreground">
              Protocolo <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {protoOpen && (
              <div className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3">
                <div className="rounded-xl border border-[#2A2520] bg-dark p-2 shadow-lg">
                  {protocoloItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      className="block rounded-lg px-3 py-2 text-sm text-dark-foreground hover:bg-white/5"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-white transition-colors hover:text-dark-foreground"
              activeProps={{ className: "text-dark-foreground font-medium" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={LOGIN_URL}
            className="hidden rounded-[20px] bg-transparent px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-white/5 md:inline-flex"
            style={{ border: "0.5px solid rgba(255,255,255,0.3)" }}
          >
            Login
          </a>
          <a
            href={WHATSAPP_PROTOCOL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-[20px] bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-[#E8C96A] md:inline-flex"
          >
            Solicitar Protocolo <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="text-dark-foreground md:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-[#2A2520] bg-dark md:hidden">
          <nav className="flex flex-col px-6 py-4">
            <div className="py-2 text-xs font-semibold uppercase tracking-wider text-white">Protocolo</div>
            {protocoloItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-2 pl-3 text-sm text-dark-foreground"
              >
                {item.label}
              </Link>
            ))}
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-dark-foreground"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <a
                href={LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit rounded-[20px] border border-[#2A2520] px-4 py-1.5 text-sm font-medium text-white"
              >
                Login
              </a>
              <a
                href={WHATSAPP_PROTOCOL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-1.5 rounded-[20px] bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground"
              >
                Solicitar Protocolo <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
