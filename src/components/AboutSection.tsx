const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const AboutSection = () => (
  <section className="section-darker py-20 md:py-28">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-10">
        Quem está por trás deste material
      </h2>

      <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
        <p>
          O Gemba Group foi fundado em 2008 por Vânia Batista e Marcelo Rodrigues com um propósito que não mudou desde o primeiro dia: capacitar profissionais para transformar empresas.
        </p>
        <p>
          Em 2009 criaram o primeiro Programa de Formação Profissional Lean da história. Em 2023 chegaram à 100ª edição, com a mesma estrutura, o mesmo rigor e resultados que continuam aparecendo nos relatórios das empresas onde os alunos trabalham.
        </p>
        <p>
          Hoje são mais de 30 mil profissionais capacitados, mais de R$ 1 bilhão em ganhos gerados, mais de 400 projetos de consultoria realizados e mais de 1.000 empresas atendidas em todos os setores da economia brasileira.
        </p>
        <p>
          Não ensinamos teoria. Ensinamos o que funciona dentro de empresas de verdade, com gente de verdade, gerando resultado que aparece na carreira de quem aplica.
        </p>
        <p className="text-foreground font-semibold">
          Este guia é a porta de entrada para esse método.
        </p>
      </div>

      <div className="mt-12 text-center">
        <button onClick={scrollToTop} className="btn-cta">
          Quero o guia gratuito agora
        </button>
      </div>
    </div>
  </section>
);

export default AboutSection;
