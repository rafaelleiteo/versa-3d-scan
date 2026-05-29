import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { WHATSAPP_PROTOCOL, LOGIN_URL } from "@/lib/links";

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
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="text-lg font-bold tracking-tight text-foreground">
          VERSA<span className="text-primary">3D</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setProtoOpen(true)}
            onMouseLeave={() => setProtoOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground">
              Protocolo <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {protoOpen && (
              <div className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3">
                <div className="rounded-xl border border-border bg-background p-2 shadow-lg">
                  {protocoloItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      className="block rounded-lg px-3 py-2 text-sm text-foreground hover:bg-accent"
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
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-medium" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-border px-4 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-accent md:inline-flex"
          >
            Login
          </a>
          <a
            href={WHATSAPP_PROTOCOL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 md:inline-flex"
          >
            Solicitar Protocolo <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="flex flex-col px-6 py-4">
            <div className="py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Protocolo</div>
            {protocoloItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-2 pl-3 text-sm text-foreground"
              >
                {item.label}
              </Link>
            ))}
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <a
                href={LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit rounded-full border border-border px-4 py-1.5 text-sm font-medium"
              >
                Login
              </a>
              <a
                href={WHATSAPP_PROTOCOL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground"
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
