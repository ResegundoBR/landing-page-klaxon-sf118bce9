import { Lightbulb, PenTool, ArrowRight } from 'lucide-react'
import colecoesImg from '@/assets/landing1.jpg-e4f83.jpeg'
import especialImg from '@/assets/landing2.jpg-885cd.jpeg'

interface SelectionSectionProps {
  onSelectModalidade: (modalidade: string) => void
}

export function SelectionSection({ onSelectModalidade }: SelectionSectionProps) {
  const cards = [
    {
      icon: Lightbulb,
      title: 'Coleções Klaxon',
      description:
        'Nossas coleções reúnem luminárias autorais desenvolvidas ao longo de doze anos de fábrica. Produzidas sob encomenda, elas fazem parte de projetos assinados por arquitetos que encontram na Klaxon uma extensão do próprio processo criativo. Escolha a peça que melhor conversa com o seu ambiente.',
      button: 'Explorar as coleções',
      image: colecoesImg,
      modalidade: 'linha',
    },
    {
      icon: PenTool,
      title: 'Quero desenvolver uma luminária.',
      description:
        'Mais do que uma luminária, uma experiência de criação. Poucos clientes conhecem onde uma luminária realmente nasce. Tenha acesso à fábrica, acompanhe cada etapa e participe do desenvolvimento de uma peça feita exclusivamente para você.',
      button: 'Desenvolver uma peça exclusiva',
      image: especialImg,
      modalidade: 'especial',
    },
  ]

  function handleSelect(modalidade: string) {
    onSelectModalidade(modalidade)
    const el = document.getElementById('contato')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-24 md:py-32 bg-foreground text-background">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-background/90 text-base md:text-lg leading-relaxed font-light max-w-3xl mx-auto mb-10">
            Algumas das luminárias que desenvolvemos começam com uma imagem salva, uma fotografia de
            viagem ou uma referência compartilhada pelo arquiteto. O ponto de partida é a
            inspiração; o resultado é uma luminária desenvolvida especialmente para aquele projeto.
          </p>
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
                className="group relative overflow-hidden bg-card text-card-foreground animate-fade-in-up flex flex-col"
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
                  <div className="absolute bottom-4 left-6 right-6 flex items-end gap-3">
                    <Icon className="w-8 h-8 text-primary stroke-[1] shrink-0 mb-1" />
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground min-h-[2.5em] flex items-center">
                      {card.title}
                    </h3>
                  </div>
                </div>

                <div className="p-8 md:p-10 flex flex-col flex-1">
                  <p className="text-muted-foreground text-base leading-relaxed font-light mb-8 flex-1">
                    {card.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => handleSelect(card.modalidade)}
                    className="inline-flex items-center gap-3 text-primary font-semibold uppercase tracking-wider text-sm hover:gap-4 transition-all duration-300 mt-auto text-left"
                  >
                    {card.button}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
