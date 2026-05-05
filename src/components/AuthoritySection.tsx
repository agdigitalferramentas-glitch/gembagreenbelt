const stats = [
  { number: "+30 mil", label: "profissionais capacitados em todo o Brasil" },
  { number: "+R$ 1 bi", label: "em ganhos gerados para os clientes" },
  { number: "30x", label: "de retorno médio sobre o investimento nos projetos" },
  { number: "+1.000", label: "empresas atendidas em todos os setores da economia" },
  { number: "+400", label: "projetos de consultoria realizados com resultado documentado" },
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const AuthoritySection = () => (
  <section className="section-dark py-14 sm:py-20 md:py-28">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground text-center tracking-tight [text-wrap:balance] mb-8 sm:mb-14">
        Esse método foi testado dentro de mais de 1.000 empresas antes de chegar até você neste&nbsp;guia
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((s, i) => (
          <div key={i} className="glass-card rounded-xl p-8 text-center space-y-2">
            <div className="stat-number">{s.number}</div>
            <p className="text-muted-foreground text-sm">{s.label}</p>
          </div>
        ))}
      </div>

      <p className="text-center text-muted-foreground mt-10 text-sm">
        Os cases que estão neste guia são reais. Os números são reais. E o método é o mesmo.
      </p>

      <div className="mt-10 flex justify-center">
        <CtaButton onClick={scrollToTop}>Quero o guia gratuito agora</CtaButton>
      </div>
    </div>
  </section>
);

export default AuthoritySection;
