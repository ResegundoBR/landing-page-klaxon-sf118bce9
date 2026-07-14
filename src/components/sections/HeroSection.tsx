import { ArrowRight, MessageCircle } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/5541987462093'

const HERO_PARAGRAPHS = [
  'Desenvolvemos luminárias decorativas sob medida para residências e projetos de arquitetura que exigem mais do que um catálogo pode oferecer.',
  'A inspiração pode nascer de uma viagem, de uma obra de arquitetura, de um PIN ou simplesmente de uma ideia.',
  'A partir dela, criamos uma peça exclusiva, pensada para o seu ambiente.',
]

export function HeroSection() {
  const headline = 'Existem projetos que não encontram a luminária certa. Encontram a Klaxon.'

  return (
    <section className="relative w-full min-h-[100vh] flex items-center justify-center overflow-hidden py-20 md:py-0">
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
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight tracking-tight">
          {headline}
        </h1>
        <div className="mb-10 md:mb-12 max-w-3xl mx-auto space-y-4 md:space-y-5">
          {HERO_PARAGRAPHS.map((text, i) => (
            <p
              key={i}
              className="text-base sm:text-lg md:text-xl text-gray-200 font-light leading-relaxed"
            >
              {text}
            </p>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 max-w-2xl mx-auto">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-6 sm:px-8 py-4 text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wider hover:bg-white hover:text-foreground transition-all duration-500 group w-full sm:w-auto"
          >
            <MessageCircle className="w-5 h-5 flex-shrink-0" />
            <span className="text-left leading-tight">
              Quero desenvolver uma luminária exclusiva
            </span>
            <ArrowRight className="w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 border border-white/70 text-white px-6 sm:px-8 py-4 text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wider hover:bg-white hover:text-foreground transition-all duration-500 group w-full sm:w-auto"
          >
            <MessageCircle className="w-5 h-5 flex-shrink-0" />
            <span className="text-left leading-tight">
              Quero enviar uma referência para avaliação
            </span>
            <ArrowRight className="w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
