import gembaLogo from "@/assets/gemba-logo.png";

const Footer = () => (
  <footer className="section-darker border-t border-border/30">
    <div className="container mx-auto px-6 pt-16 pb-8">
      {/* Logo + tagline */}
      <div className="mb-12">
        <img
          src={gembaLogo}
          alt="Gemba Group"
          className="h-10 mb-4 brightness-0 invert opacity-80"
          loading="lazy"
        />
        <p className="text-muted-foreground text-sm max-w-xs">
          Capacitando profissionais para{"\n"}transformar empresas desde 2008.
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-border/30 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Gemba Group. Todos os direitos reservados.
        </p>
        <p className="text-muted-foreground text-sm">
          Desenvolvido por{" "}
          <a
            href="https://agwebi.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline transition-colors"
          >
            AGWEBi
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
