import heroBg from "@/assets/hero-bg.jpg";
import logoPfpl from "@/assets/logo-pfpl.svg";
import LeadForm from "./LeadForm";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-background">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-background/80" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 pt-10 sm:py-20 pb-10 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div className="space-y-4 sm:space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold border border-accent/30 text-accent bg-accent/15">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Material gratuito e exclusivo
            </span>

            <img src={logoPfpl} alt="Logo PFPL" className="h-12 sm:h-16 w-auto" />

            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-extrabold leading-[1.15] tracking-tight text-foreground [text-wrap:balance]">
              O guia completo para você transformar o resultado que já entrega em uma{" "}
              <span className="text-gradient-accent">promoção concreta</span>, nos próximos 60&nbsp;dias
            </h1>

            <p className="text-sm sm:text-lg text-foreground font-semibold leading-relaxed">
              Gestores não chamam quem se esforça mais. Eles chamam quem consegue transformar qualquer problema em projeto com resultado financeiro comprovado.
            </p>
            <ul className="space-y-2 text-xs sm:text-base text-foreground/90 font-light leading-relaxed">
              {[
                "Método completo, passo a passo, em 60 dias",
                "Cases reais, calculadora de ROI e ferramentas prontas para aplicar hoje",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Form */}
          <div className="rounded-2xl p-5 sm:p-8 md:p-10 border border-foreground/10 bg-foreground/5 backdrop-blur-md shadow-2xl">
            <h2 className="text-xl font-bold text-foreground text-center mb-6">
              Baixe o guia gratuito
            </h2>
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
