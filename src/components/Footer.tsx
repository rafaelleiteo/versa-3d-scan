import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div>
          <div className="text-lg font-bold tracking-tight">
            VERSA<span className="text-primary">3D</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Diagnóstico Ortodôntico 3D. Precisão. Inovação. Versatilidade.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Serviços</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/servicos" className="hover:text-foreground">Protocolo VERSA3D</Link></li>
            <li><Link to="/servicos" className="hover:text-foreground">Cefalometria UNIFESP SONO</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Navegação</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/como-solicitar" className="hover:text-foreground">Como Solicitar</Link></li>
            <li><Link to="/clinicas" className="hover:text-foreground">Clínicas Credenciadas</Link></li>
            <li><Link to="/conteudos" className="hover:text-foreground">Conteúdos</Link></li>
            <li><Link to="/quem-somos" className="hover:text-foreground">Quem Somos</Link></li>
            <li><Link to="/faq" className="hover:text-foreground">FAQ</Link></li>
            <li><Link to="/contato" className="hover:text-foreground">Contato</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Contato</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><a href="mailto:contato@versa3d.com.br" className="hover:text-foreground">contato@versa3d.com.br</a></li>
            <li><a href="https://instagram.com/versa_3d" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">@versa_3d</a></li>
            <li><a href="https://api.whatsapp.com/send/?phone=5524992000389" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">(24) 99200-0389</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-xs text-muted-foreground">
          © 2025 VERSA3D. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
