import pinLuxoImg from '@/assets/pin.luxo.jpg-03b44.jpeg'

export function ExpertiseSection() {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 animate-fade-in-up">
            <h2 className="text-2xl md:text-4xl font-serif font-bold leading-tight text-foreground mb-8">
              Cada projeto é único. É por isso que nossas luminárias também são.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-light">
              Há mais de <span className="font-semibold text-primary">doze anos</span>, a Klaxon
              desenvolve iluminação decorativa para projetos que exigem soluções autorais,
              fabricação própria e atenção aos detalhes. Quando um catálogo deixa de ser suficiente,
              começa o nosso trabalho.
            </p>
          </div>

          <div
            className="order-1 lg:order-2 animate-fade-in-up"
            style={{ animationDelay: '150ms' }}
          >
            <div className="relative overflow-hidden aspect-[4/3] lg:aspect-square bg-muted">
              <img
                src={pinLuxoImg}
                alt="Luminária decorativa exclusiva Klaxon"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
