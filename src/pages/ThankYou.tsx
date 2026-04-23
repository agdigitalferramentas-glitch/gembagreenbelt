import { CheckCircle, ArrowRight } from "lucide-react";

const ThankYou = () => {
  return (
    <div className="min-h-[100dvh] flex items-center justify-center bg-background px-4">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 bg-primary/10">
          <CheckCircle className="w-5 h-5 text-primary" />
          <span className="text-primary font-medium text-sm">Inscrição confirmada</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          O seu guia está aqui.
        </h1>

        {/* Body */}
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
          Você tem agora o método completo de 60 dias: como escolher o problema certo com critérios objetivos, estruturar o projeto com o framework DMAIC do início ao fim, calcular o ROI com fórmula e premissas explícitas — e documentar o resultado de uma maneira que nenhuma reunião de avaliação consegue ignorar.
        </p>

        {/* CTA Button */}
        <div>
          <a
            href="https://drive.google.com/file/d/1FHxirRLOM40VDp2W75eRB8t00-CnBZxi/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta inline-flex items-center gap-3 rounded-full text-base sm:text-lg"
          >
            Acessar o guia
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-background/20">
              <ArrowRight className="w-4 h-4" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
