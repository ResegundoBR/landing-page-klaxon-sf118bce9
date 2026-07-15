migrate(
  (app) => {
    const col = app.findCollectionByNameOrId('leads')

    const emailField = col.fields.getByName('email')
    if (emailField) {
      emailField.required = false
    }

    app.save(col)
  },
  (app) => {
    const col = app.findCollectionByNameOrId('leads')

    const emailField = col.fields.getByName('email')
    if (emailField) {
      emailField.required = true
    }

    app.save(col)
  },
)
