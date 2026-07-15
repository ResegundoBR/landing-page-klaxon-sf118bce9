import { ArrowRight, MessageCircle } from 'lucide-react'
import heroBg from '@/assets/upper.landing.jpg-1-7110b.jpeg'

const HERO_PARAGRAPHS = [
  'Desenvolvemos luminárias decorativas sob medida para residências e projetos de arquitetura que exigem mais do que um catálogo pode oferecer.',
  'A inspiração pode nascer de uma viagem, de uma obra de arquitetura, de um PIN ou simplesmente de uma ideia.',
]

interface HeroSectionProps {
  onSelectModalidade: (modalidade: string) => void
}

export function HeroSection({ onSelectModalidade }: HeroSectionProps) {
  const headline = 'Existem projetos que não encontram a luminária certa. Encontram a Klaxon.'

  function handleAction() {
    onSelectModalidade('especial')
    const el = document.getElementById('contato')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative w-full min-h-[100vh] flex items-center justify-center overflow-hidden py-20 md:py-0">
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
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
          <button
            type="button"
            onClick={handleAction}
            className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-6 sm:px-8 py-4 text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wider hover:bg-white hover:text-foreground transition-all duration-500 group w-full sm:w-auto"
          >
            <MessageCircle className="w-5 h-5 flex-shrink-0" />
            <span className="text-left leading-tight">
              Quero desenvolver uma luminária exclusiva
            </span>
            <ArrowRight className="w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            type="button"
            onClick={handleAction}
            className="inline-flex items-center justify-center gap-3 border border-white/70 text-white px-6 sm:px-8 py-4 text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wider hover:bg-white hover:text-foreground transition-all duration-500 group w-full sm:w-auto"
          >
            <MessageCircle className="w-5 h-5 flex-shrink-0" />
            <span className="text-left leading-tight">
              Quero enviar uma referência para avaliação
            </span>
            <ArrowRight className="w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}
