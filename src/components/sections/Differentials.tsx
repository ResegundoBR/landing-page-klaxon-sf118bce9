import { Sparkles, PencilRuler, Factory, ClipboardCheck } from 'lucide-react'

export function Differentials() {
  const features = [
    {
      icon: Sparkles,
      title: 'A inspiração é o ponto de partida.',
      desc: 'Uma viagem, um ambiente, um projeto ou uma imagem salva. A partir dessa referência, desenvolvemos uma luminária exclusiva para o seu espaço.',
    },
    {
      icon: PencilRuler,
      title: 'Desenvolvimento exclusivo.',
      desc: 'Cada projeto nasce do zero. Proporções, materiais, acabamentos e iluminação são definidos para o seu ambiente, nunca adaptados de um catálogo.',
    },
    {
      icon: Factory,
      title: 'Fábrica própria.',
      desc: 'Você conversa diretamente com quem projeta e fabrica a peça, acompanhando cada etapa do desenvolvimento até a entrega.',
    },
    {
      icon: ClipboardCheck,
      title: 'Acompanhamento completo.',
      desc: 'Da primeira conversa à instalação, nossa equipe acompanha o processo para que cada detalhe corresponda ao projeto.',
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <div
                key={i}
                className="p-8 md:p-10 bg-background border border-border hover:border-primary/50 transition-all duration-500 animate-fade-in-up group"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <Icon className="w-12 h-12 text-primary mb-8 stroke-[1] group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-xl font-serif font-bold mb-4 text-foreground">{f.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed font-light">
                  {f.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
