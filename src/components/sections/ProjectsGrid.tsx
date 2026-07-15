import conectaImg from '@/assets/conecta.landing.jpg-2-ec9ed.jpeg'
import ladderImg from '@/assets/ladder.landing.jpg-d0602.jpeg'
import sogoodImg from '@/assets/sogood.landing.jpg-812b6.jpeg'
import upsideImg from '@/assets/upside.landing.jpg-901c6.jpeg'

export function ProjectsGrid() {
  const projects = [
    {
      img: conectaImg,
      name: 'Residência Cond. Anhangava',
      arch: 'Conecta',
    },
    {
      img: ladderImg,
      name: 'Residência Lucas Mello',
      arch: 'Pendente Ladder',
    },
    {
      img: sogoodImg,
      name: 'Estúdio Lucia F Carneiro',
      arch: 'Luminária So Good',
    },
    {
      img: upsideImg,
      name: 'Condomínio Alphaville',
      arch: 'Pendente Upside',
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 md:mb-24 animate-fade-in-up">
          <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">
            Portfólio
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-foreground">
            Padrão internacional não se declara.
            <br />
            Se entrega.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
            Conheça algumas de nossas entregas que redefinem o conceito de alto padrão através de
            matérias-primas nobres e precisão milimétrica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group relative overflow-hidden aspect-[4/3] md:aspect-square bg-muted cursor-pointer"
            >
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 md:p-10 text-white">
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {p.name}
                </h3>
                <p className="text-primary font-medium tracking-wide uppercase text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {p.arch}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
