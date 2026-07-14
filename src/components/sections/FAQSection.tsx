import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function FAQSection() {
  const faqs = [
    {
      q: 'Vocês fazem qualquer peça, mesmo que eu só tenha uma foto de referência?',
      a: 'Sim. A partir da sua referência, avaliamos o que é possível desenvolver com design próprio. O especialista de projetos conversa com você para entender sua necessidade e o que espera.',
    },
    {
      q: 'Quanto tempo leva?',
      a: 'Depende da complexidade do projeto. O especialista informa o prazo estimado logo na primeira conversa.',
    },
    {
      q: 'Como funciona a instalação?',
      a: 'Juntamente com a peça você receberá toda a orientação técnica para a instalação e suporte da fábrica em caso de dúvidas, imprevistos ou problemas que ocorram durante ou após a instalação.',
    },
    {
      q: 'Tem garantia?',
      a: 'Sim. Todos os nossos produtos saem de fábrica com 1 ano de garantia para problemas de fabricação, porém você terá suporte vitalício no produto que comprar. Se futuramente quebrar, estragar, deixar de funcionar, queira trocar de acabamento, tudo isso a fábrica lhe dará total suporte e auxílio.',
    },
    {
      q: 'Porque custa mais que peças parecidas que encontro online?',
      a: 'Porque além de ser um projeto exclusivo, único, feito para você, a Klaxon só trabalha com matérias primas e insumos de altíssima qualidade e durabilidade. Nossos produtos são feitos para encarar décadas de uso, não são descartáveis. Aqui você não compra apenas um produto, mas sim segurança, garantia, qualidade e acabamento.',
    },
    {
      q: 'Preciso de arquiteto para comprar?',
      a: 'Não. Nossos especialistas lhe darão todo o suporte necessário para que possa fazer a escolha de forma segura e assertiva.',
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-foreground">
            Perguntas Frequentes
          </h2>
          <p className="text-muted-foreground text-lg font-light">
            Tudo o que você precisa saber sobre nossos serviços de excelência.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-border py-4">
              <AccordionTrigger className="text-left font-serif text-xl md:text-2xl hover:no-underline hover:text-primary transition-colors py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base font-light md:text-lg pb-6">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
