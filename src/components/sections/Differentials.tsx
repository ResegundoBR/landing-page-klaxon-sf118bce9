import { Compass, Gem, Sliders, Truck } from 'lucide-react'

export function Differentials() {
  const features = [
    {
      icon: Compass,
      title: 'Design Autoral',
      desc: 'Criações exclusivas que refletem de forma única a identidade e o estilo de vida de cada cliente.',
    },
    {
      icon: Gem,
      title: 'Acabamento Premium',
      desc: 'Materiais nobres e execução impecável para garantir máxima durabilidade, estética e sofisticação.',
    },
    {
      icon: Sliders,
      title: 'Customização Total',
      desc: 'Flexibilidade absoluta em medidas, materiais e acabamentos para atender as demandas do seu projeto.',
    },
    {
      icon: Truck,
      title: 'Logística Especializada',
      desc: 'Entrega e montagem realizadas por equipe própria com padrão de excelência e cuidado white-glove.',
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
