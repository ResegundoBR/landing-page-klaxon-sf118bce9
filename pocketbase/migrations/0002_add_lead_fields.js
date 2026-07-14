migrate(
  (app) => {
    const col = app.findCollectionByNameOrId('leads')

    if (!col.fields.getByName('modalidade')) {
      col.fields.add(new TextField({ name: 'modalidade' }))
    }

    if (!col.fields.getByName('investimento')) {
      col.fields.add(new TextField({ name: 'investimento' }))
    }

    app.save(col)
  },
  (app) => {
    const col = app.findCollectionByNameOrId('leads')

    const modalidadeField = col.fields.getByName('modalidade')
    if (modalidadeField) col.fields.remove(modalidadeField.id)

    const investimentoField = col.fields.getByName('investimento')
    if (investimentoField) col.fields.remove(investimentoField.id)

    app.save(col)
  },
)
