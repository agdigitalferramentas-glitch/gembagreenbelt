import { useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, phone });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-background/80" />

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Copy */}
          <div className="space-y-6">
            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold border border-accent/40 text-accent bg-accent/10">
              Material gratuito e exclusivo — Gemba Group + Produzzi
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-foreground">
              O guia completo para você transformar o resultado que já entrega em uma{" "}
              <span className="text-gradient-accent">promoção concreta</span>, nos próximos 60 dias
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Gestores não chamam quem se esforça mais. Eles chamam quem consegue transformar qualquer problema em projeto com resultado financeiro comprovado.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Este guia entrega esse método completo, passo a passo, em 60 dias.
            </p>

            <p className="text-sm text-muted-foreground/80">
              Gratuito. Com cases reais, calculadora de ROI e ferramentas prontas para aplicar no seu trabalho hoje.
            </p>
          </div>

          {/* Right — Form */}
          <div className="glass-card rounded-2xl p-8 max-w-md mx-auto lg:mx-0 lg:ml-auto w-full">
            <h2 className="text-xl font-bold text-foreground text-center mb-6">
              Baixe o guia gratuito
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-input/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                required
              />
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-input/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                required
              />
              <input
                type="tel"
                placeholder="DDD + WhatsApp"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-input/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                required
              />
              <button type="submit" className="w-full btn-cta rounded-lg flex items-center justify-center gap-3">
                Quero o guia gratuito agora
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
