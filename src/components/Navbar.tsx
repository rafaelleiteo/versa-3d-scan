import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/servicos", label: "Serviços" },
  { to: "/como-solicitar", label: "Como Solicitar" },
  { to: "/clinicas", label: "Clínicas" },
  { to: "/faq", label: "FAQ" },
  { to: "/contato", label: "Contato" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="text-lg font-bold tracking-tight text-foreground">
          VERSA<span className="text-primary">3D</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
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
            href="https://versa.mahus.com.br/public/login"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-border px-4 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-accent md:inline-flex"
          >
            Login
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
            <a
              href="https://versa.mahus.com.br/public/login"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-fit rounded-full border border-border px-4 py-1.5 text-sm font-medium"
            >
              Login
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
