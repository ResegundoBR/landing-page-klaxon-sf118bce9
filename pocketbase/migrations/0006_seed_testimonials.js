migrate(
  (app) => {
    const col = app.findCollectionByNameOrId('testimonials')

    const seeds = [
      {
        name: 'Mariana Albuquerque',
        rating: 5,
        date_relative: 'há 2 semanas',
        content:
          'A Klaxon superou todas as minhas expectativas. Desenvolveram uma luminária exclusiva para minha sala de jantar que se tornou o ponto central de todo o ambiente. O acompanhamento foi impecável do início ao fim.',
      },
      {
        name: 'Ricardo Fontenelle',
        rating: 5,
        date_relative: 'há 1 mês',
        content:
          'Trabalho excepcional. A equipe entendeu exatamente o que eu queria e entregou uma peça que parece ter sido feita para o espaço. Qualidade de acabamento impressionante.',
      },
      {
        name: 'Carolina Martins',
        rating: 5,
        date_relative: 'há 3 semanas',
        content:
          'Procurei a Klaxon para um projeto comercial e fui atendida com profissionalismo e criatividade. As luminárias ficaram lindas e receberam elogios de todos os clientes que visitam o espaço. Recomendo demais!',
      },
      {
        name: 'Eduardo Tavares',
        rating: 4,
        date_relative: 'há 2 meses',
        content:
          'Boa experiência. A peça ficou linda e bem feita. O prazo foi um pouco maior do que o esperado, mas a qualidade compensou a espera.',
      },
      {
        name: 'Patricia Drummond',
        rating: 5,
        date_relative: 'há 1 semana',
        content:
          'Simplesmente perfeito! Desenvolvemos juntos uma luminária para o hall de entrada. Cada detalhe foi pensado. A fábrica é impecável e o atendimento próximo fez toda diferença.',
      },
      {
        name: 'Felipe Andrade',
        rating: 5,
        date_relative: 'há 1 mês',
        content:
          'Já é a terceira peça que encomendo. A Klaxon tem uma capacidade incrível de transformar referências em objetos únicos. Desta vez desenvolvemos uma arandela para a varanda gourmet que ficou espetacular. O suporte pós-venda também é excelente.',
      },
      {
        name: 'Juliana Reis',
        rating: 5,
        date_relative: 'há 5 dias',
        content: 'Encantada com o resultado! A luminária superou o que eu imaginava.',
      },
    ]

    for (var i = 0; i < seeds.length; i++) {
      var s = seeds[i]
      try {
        app.findFirstRecordByData('testimonials', 'content', s.content)
      } catch (_) {
        var record = new Record(col)
        record.set('name', s.name)
        record.set('rating', s.rating)
        record.set('date_relative', s.date_relative)
        record.set('content', s.content)
        app.save(record)
      }
    }
  },
  (app) => {
    try {
      var col = app.findCollectionByNameOrId('testimonials')
      app.truncateCollection(col)
    } catch (_) {}
  },
)
