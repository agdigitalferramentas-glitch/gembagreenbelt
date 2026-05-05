import gembaTeam from "@/assets/gemba-team.webp";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const AboutSection = () => (
  <section className="section-dark py-14 sm:py-20 md:py-28 relative overflow-hidden">
    <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 80% 80%, hsla(156, 58%, 45%, 0.12), transparent 50%)" }} />
    <div className="container relative z-10 mx-auto px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 sm:mb-8 tracking-tight [text-wrap:balance]">
        Quem está por trás deste&nbsp;material
      </h2>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">
        <div className="lg:w-1/2 space-y-6">
          <p className="text-foreground/70 text-base sm:text-lg leading-relaxed font-light">
            O Gemba Group foi fundado em 2008 por Vânia Batista e Marcelo Rodrigues com um propósito que não mudou desde o primeiro dia: capacitar profissionais para transformar empresas.
          </p>
          <p className="text-foreground/70 text-base sm:text-lg leading-relaxed font-light">
            Em 2009 criaram o primeiro Programa de Formação Profissional Lean da história. Em 2023 chegaram à 100ª edição, com a mesma estrutura, o mesmo rigor e resultados que continuam aparecendo nos relatórios das empresas onde os alunos trabalham.
          </p>
          <p className="text-foreground/70 text-base sm:text-lg leading-relaxed font-light">
            Hoje são mais de 30 mil profissionais capacitados, mais de{" "}
            <span className="text-accent font-bold">R$ 1 bilhão em ganhos gerados</span>, mais de 400 projetos de consultoria realizados e mais de 1.000 empresas atendidas em todos os setores da economia brasileira.
          </p>
          <p className="text-foreground/70 text-base sm:text-lg leading-relaxed font-light">
            Não ensinamos teoria. Ensinamos o que funciona dentro de empresas de verdade, com gente de verdade, gerando resultado que aparece na carreira de quem aplica.
          </p>
          <p className="text-foreground/90 text-base sm:text-lg font-semibold">
            Este guia é a porta de entrada para esse método.
          </p>

          <div className="mt-10">
            <button onClick={scrollToTop} className="group w-full btn-cta rounded-full flex items-center justify-center gap-2 text-sm sm:text-base">
              <span className="flex-1 text-center">QUERO O GUIA GRATUITO AGORA</span>
              <span className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-foreground text-background inline-flex items-center justify-center shadow-md flex-shrink-0 group-hover:rotate-[360deg] transition-all duration-500 ease-out">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform duration-300"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </button>
          </div>
        </div>

        <div className="lg:w-1/2">
          <img
            src={gembaTeam}
            alt="Equipe Gemba Group"
            className="w-full aspect-[4/5] sm:aspect-square object-cover rounded-2xl shadow-2xl"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
