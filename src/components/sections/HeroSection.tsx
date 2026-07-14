import { ArrowRight } from 'lucide-react'

export function HeroSection({ isPinterest }: { isPinterest: boolean }) {
  const headline = isPinterest
    ? 'Transforme suas referências em realidade: Projetos sob medida com padrão internacional.'
    : 'Design Assinado e Acabamento Premium: A sofisticação que seu projeto merece.'

  const subhead = isPinterest
    ? 'Traga suas inspirações. Nós entregamos exclusividade e perfeição absoluta em cada detalhe da fabricação.'
    : 'Consultoria especializada e exclusividade total para transformar os seus espaços em verdadeiras obras de arte.'

  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://img.usecurling.com/p/1200/1800?q=luxury%20interior%20design"
          alt="Ambiente luxuoso e exclusivo"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container relative z-10 px-4 pt-20 text-center text-white max-w-5xl mx-auto animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight tracking-tight">
          {headline}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          {subhead}
        </p>
        <a
          href="#contato"
          className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm md:text-base font-semibold uppercase tracking-wider hover:bg-white hover:text-foreground transition-all duration-500 group"
        >
          {isPinterest ? 'Enviar minhas referências' : 'Solicitar Consultoria'}
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  )
}
