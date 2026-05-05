import { CheckCircle } from "lucide-react";

const bullets = [
  "A metodologia DMAIC completa explicada de forma prática, com o que fazer em cada uma das 5 fases, quais ferramentas usar e o que entregar ao gestor ao final de cada etapa, sem enrolação acadêmica",
  "A matriz de priorização Esforço x Impacto para você descobrir, com dados e não com intuição, qual problema vale a pena atacar primeiro e por que exatamente aquele antes de qualquer outro",
  "Três cases reais com números detalhados: uma supervisora que reduziu 68% do retrabalho da linha em 60 dias, um analista que derrubou de 11 para 3 dias o fechamento contábil e um coordenador que eliminou 81% das entregas fora do prazo. Todos promovidos. Todos usando o mesmo método que está neste guia",
  "A calculadora de ROI com fórmula, exemplo numérico e campos para você preencher com os dados do seu projeto e chegar na conversa com o gestor com o retorno calculado na mão, sem estimativa, sem achismo",
  "O modelo A3 completo para apresentar qualquer projeto de melhoria em uma única página, do jeito que gestores ocupados precisam ver para tomar uma decisão",
  "O checklist de validação com 10 perguntas para você saber, antes de entrar na sala, se o projeto está sólido o suficiente para defender em qualquer reunião",
  "O glossário avançado com os termos que aparecem nas conversas de nível estratégico, para você entrar nessas discussões falando a mesma língua de quem decide",
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const BulletsSection = () => (
  <section className="section-darker py-14 sm:py-20 md:py-28">
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="text-center mb-8 sm:mb-14 space-y-3 sm:space-y-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight [text-wrap:balance]">
          O que você aprende e o que entrega ao&nbsp;final
        </h2>
        <p className="text-muted-foreground text-sm sm:text-lg leading-relaxed max-w-3xl mx-auto">
          Antes de qualquer ferramenta, você aprende a escolher o problema certo. Com dois critérios objetivos — impacto financeiro potencial e esforço de implementação — você descarta projetos que consomem energia sem retorno visível e foca no que constrói reputação.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 [&>*:last-child:nth-child(odd)]:md:col-span-2 [&>*:last-child:nth-child(odd)]:md:max-w-[calc(50%-0.5rem)] [&>*:last-child:nth-child(odd)]:md:mx-auto [&>*:last-child:nth-child(odd)]:md:w-full">
        {bullets.map((b, i) => (
          <div key={i} className="bullet-card flex gap-3 sm:gap-4 items-start">
            <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary shrink-0 mt-0.5" />
            <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">{b}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button onClick={scrollToTop} className="btn-cta">
          Quero o guia gratuito agora
        </button>
      </div>
    </div>
  </section>
);

export default BulletsSection;
