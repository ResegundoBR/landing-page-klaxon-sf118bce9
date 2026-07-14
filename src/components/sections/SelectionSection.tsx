import { Package, Sparkles } from 'lucide-react'

export function SelectionSection() {
  const cards = [
    {
      icon: Package,
      title: 'Peças de Linha',
      desc: 'Designs autorais prontos para o seu ambiente, já validado e aprovado pelo mercado de luxo brasileiro. Você escolhe, a gente produz e entrega em todo Brasil.',
      cta: 'Quero me inspirar no pronto',
      href: '#contato',
    },
    {
      icon: Sparkles,
      title: 'Projetos Especiais',
      desc: 'Tenho uma referência (às vezes de fora do Brasil) ou uma ideia só sua. Nós fabricamos sob medida, do esboço à instalação.',
      cta: 'Quero algo exclusivo',
      href: '#contato',
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-foreground">
            Por onde você quer começar?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <div
                key={i}
                className="flex flex-col p-8 md:p-12 bg-card border border-border hover:border-primary/50 transition-all duration-500 animate-fade-in-up group"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <Icon className="w-12 h-12 text-primary mb-8 stroke-[1] group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-foreground">
                  {card.title}
                </h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-light mb-8 flex-grow">
                  {card.desc}
                </p>
                <a
                  href={card.href}
                  className="inline-flex items-center justify-center gap-2 self-start border border-foreground text-foreground px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors duration-300"
                >
                  {card.cta}
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
