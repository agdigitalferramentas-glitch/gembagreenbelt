import { useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "/gb-obrigado";
  };

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

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 pt-20 sm:py-20 pb-10 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div className="space-y-4 sm:space-y-6">
            <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold border border-accent/30 text-accent bg-accent/15">
              Material gratuito e exclusivo — Gemba Group + Produzzi
            </span>

            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.15] tracking-tight text-foreground">
              O guia completo para você transformar o resultado que já entrega em uma{" "}
              <span className="text-gradient-accent">promoção concreta</span>, nos próximos 60 dias
            </h1>

            <p className="text-sm sm:text-lg text-foreground font-semibold leading-relaxed">
              Gestores não chamam quem se esforça mais. Eles chamam quem consegue transformar qualquer problema em projeto com resultado financeiro comprovado.
            </p>
            <p className="text-xs sm:text-base text-foreground/90 font-light leading-relaxed">
              Este guia entrega esse método completo, passo a passo, em 60 dias.
            </p>

            <p className="text-xs sm:text-sm text-foreground/80 font-light">
              Gratuito. Com cases reais, calculadora de ROI e ferramentas prontas para aplicar no seu trabalho hoje.
            </p>
          </div>

          {/* Right — Form */}
          <div className="rounded-2xl p-5 sm:p-8 md:p-10 border border-foreground/10 bg-foreground/5 backdrop-blur-md shadow-2xl">
            <h2 className="text-xl font-bold text-foreground text-center mb-6">
              Baixe o guia gratuito
            </h2>
            <iframe
              src="https://site.agsell.com.br/forms/18d01129-a244-4f98-8e77-a2aef73564db"
              width="100%"
              height={400}
              frameBorder="0"
              title="Formulário de inscrição"
              className="w-full rounded-xl bg-transparent"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
