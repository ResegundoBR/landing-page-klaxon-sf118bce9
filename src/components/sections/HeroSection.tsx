import { ArrowRight } from 'lucide-react'

export function HeroSection({ isPinterest, isMeta }: { isPinterest: boolean; isMeta: boolean }) {
  const headline = 'Existem projetos que não encontram a luminária certa. Encontram a Klaxon.'

  const description = isPinterest
    ? 'Desenvolvemos luminárias decorativas sob medida para residências e projetos de arquitetura que exigem mais do que um catálogo pode oferecer. A inspiração pode nascer de uma viagem, de uma obra de arquitetura, de um PIN ou simplesmente de uma ideia. A partir da sua referência, fabricamos uma peça exclusiva sob medida — do esboço à instalação.'
    : isMeta
      ? 'Desenvolvemos luminárias decorativas sob medida para residências e projetos de arquitetura que exigem mais do que um catálogo pode oferecer. A inspiração pode nascer de uma viagem, de uma obra de arquitetura ou simplesmente de uma ideia. A partir dela, criamos uma peça com design assinado e acabamento premium, pensada para o seu ambiente.'
      : 'Desenvolvemos luminárias decorativas sob medida para residências e projetos de arquitetura que exigem mais do que um catálogo pode oferecer. A inspiração pode nascer de uma viagem, de uma obra de arquitetura, de um PIN ou simplesmente de uma ideia. A partir dela, criamos uma peça exclusiva, pensada para o seu ambiente.'

  const ctaText = isPinterest
    ? 'Enviar minhas referências'
    : isMeta
      ? 'Falar com um consultor'
      : 'Solicitar Consultoria'

  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://img.usecurling.com/p/1200/1800?q=luxury%20lighting%20fixture"
          alt="Ambiente luxuoso e exclusivo com luminária decorativa"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container relative z-10 px-4 pt-20 text-center text-white max-w-5xl mx-auto animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight tracking-tight">
          {headline}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          {description}
        </p>
        <a
          href="#contato"
          className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm md:text-base font-semibold uppercase tracking-wider hover:bg-white hover:text-foreground transition-all duration-500 group"
        >
          {ctaText}
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  )
}
