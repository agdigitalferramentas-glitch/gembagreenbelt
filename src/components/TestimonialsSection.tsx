const videos = [
  "nkxiOrYzKps",
  "wJQeUW8ZQQA",
  "cnA_jrJDcRU",
  "YhS3Fz6iEYk",
  "mCfsnekzJ0o",
  "VRcPrcZigHM",
];

const TestimonialsSection = () => (
  <section className="section-dark py-14 sm:py-20 md:py-28 relative overflow-hidden">
    <div
      className="absolute inset-0 opacity-30"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 30%, hsla(185, 100%, 50%, 0.12), transparent 50%)",
      }}
    />
    <div className="container relative z-10 mx-auto px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 sm:mb-6 tracking-tight [text-wrap:balance]">
          O que dizem quem já passou pelo&nbsp;método
        </h2>
        <p className="text-foreground/70 text-base sm:text-lg leading-relaxed font-light [text-wrap:balance]">
          Depoimentos reais de profissionais que aplicaram o método Gemba e transformaram suas&nbsp;carreiras.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {videos.map((id) => (
          <div
            key={id}
            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-foreground/10 bg-background"
          >
            <iframe
              src={`https://www.youtube.com/embed/${id}`}
              title={`Depoimento ${id}`}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
