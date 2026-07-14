import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function FAQSection() {
  const faqs = [
    {
      q: 'Qual o prazo de entrega dos móveis sob medida?',
      a: 'Nosso prazo padrão varia de 45 a 60 dias úteis após a aprovação final do projeto executivo e de acabamentos, dependendo da complexidade e dos materiais nobres escolhidos para a produção.',
    },
    {
      q: 'A Klaxon atende projetos fora de São Paulo?',
      a: 'Sim, atendemos todo o território nacional. Nossa logística especializada garante que os móveis cheguem com total segurança, e nossa equipe própria realiza a montagem final em qualquer estado do Brasil.',
    },
    {
      q: 'Posso personalizar as dimensões e os acabamentos dos itens?',
      a: 'Absolutamente. A essência do nosso trabalho é a customização extrema. Todos os projetos são adaptados milimetricamente ao seu espaço, com uma vasta gama de acabamentos premium, folheados e pedras à sua disposição.',
    },
    {
      q: 'Como funciona o processo inicial de consultoria?',
      a: 'Após o seu contato, um consultor dedicado organizará uma reunião (presencial ou online) para entender perfeitamente suas necessidades, analisar referências visuais e iniciar o briefing técnico detalhado para a equipe de design.',
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
