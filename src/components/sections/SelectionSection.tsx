import { Lightbulb, PenTool, ArrowRight } from 'lucide-react'

export function SelectionSection() {
  const cards = [
    {
      icon: Lightbulb,
      title: 'Peças de Linha',
      description:
        'Designs autorais prontos para o seu ambiente, já validado e aprovado pelo mercado de luxo brasileiro. Você escolhe, a gente produz e entrega em todo Brasil.',
      button: 'Quero me inspirar no pronto',
      image: 'https://img.usecurling.com/p/600/400?q=luxury%20lamp%20showroom',
      modalidade: 'pecas-de-linha',
    },
    {
      icon: PenTool,
      title: 'Projetos Especiais',
      description:
        'Tenho uma referência (às vezes de fora do Brasil) ou uma ideia só sua. Nós fabricamos sob medida, do esboço à instalação.',
      button: 'Quero algo exclusivo',
      image: 'https://img.usecurling.com/p/600/400?q=custom%20lighting%20design%20sketch',
      modalidade: 'projeto-especial',
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-foreground text-background">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">
            Comece aqui
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
            Por onde você quer começar?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <div
                key={i}
                className="group relative overflow-hidden bg-card text-card-foreground animate-fade-in-up"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  <div className="absolute bottom-4 left-6 flex items-center gap-3">
                    <Icon className="w-8 h-8 text-primary stroke-[1]" />
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                      {card.title}
                    </h3>
                  </div>
                </div>

                <div className="p-8 md:p-10">
                  <p className="text-muted-foreground text-base leading-relaxed font-light mb-8">
                    {card.description}
                  </p>
                  <a
                    href="#contato"
                    className="inline-flex items-center gap-3 text-primary font-semibold uppercase tracking-wider text-sm hover:gap-4 transition-all duration-300"
                  >
                    {card.button}
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
