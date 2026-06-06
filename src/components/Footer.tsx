import { Link } from "@tanstack/react-router";
const LOGO_SRC = "/logo (4).png";

export function Footer() {
  return (
    <footer className="border-t border-[#2A2520] bg-dark text-dark-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div>
          <img src={LOGO_SRC} alt="VERSA3D" className="h-8 w-auto" style={{ objectFit: "contain" }} />
          <p className="mt-3 text-sm text-[#6A6560]">
            Diagnóstico Ortodôntico 3D. Precisão. Inovação. Versatilidade.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-primary">Serviços</h4>
          <ul className="mt-3 space-y-2 text-sm text-[#6A6560]">
            <li><Link to="/servicos" className="hover:text-dark-foreground">Protocolo VERSA3D</Link></li>
            <li><Link to="/servicos" className="hover:text-dark-foreground">Cefalometria UNIFESP SONO</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-primary">Navegação</h4>
          <ul className="mt-3 space-y-2 text-sm text-[#6A6560]">
            <li><Link to="/como-solicitar" className="hover:text-dark-foreground">Como Solicitar</Link></li>
            <li><Link to="/clinicas" className="hover:text-dark-foreground">Clínicas Credenciadas</Link></li>
            <li><Link to="/conteudos" className="hover:text-dark-foreground">Conteúdos</Link></li>
            <li><Link to="/quem-somos" className="hover:text-dark-foreground">Quem Somos</Link></li>
            <li><Link to="/faq" className="hover:text-dark-foreground">FAQ</Link></li>
            <li><Link to="/contato" className="hover:text-dark-foreground">Contato</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-primary">Contato</h4>
          <ul className="mt-3 space-y-2 text-sm text-[#6A6560]">
            <li><a href="mailto:contato@versa3d.com.br" className="hover:text-dark-foreground">contato@versa3d.com.br</a></li>
            <li><a href="https://instagram.com/versa_3d" target="_blank" rel="noopener noreferrer" className="hover:text-dark-foreground">@versa_3d</a></li>
            <li><a href="https://api.whatsapp.com/send/?phone=5524992000389" target="_blank" rel="noopener noreferrer" className="hover:text-dark-foreground">(24) 99200-0389</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#2A2520]">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-xs text-[#444444]">
          © 2025 VERSA3D. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
