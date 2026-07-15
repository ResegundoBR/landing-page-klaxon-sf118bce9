migrate(
  (app) => {
    const col = app.findCollectionByNameOrId('leads')

    if (!col.fields.getByName('user_profile')) {
      col.fields.add(new TextField({ name: 'user_profile', required: true }))
    }

    if (!col.fields.getByName('project_phase')) {
      col.fields.add(new TextField({ name: 'project_phase', required: true }))
    }

    if (!col.fields.getByName('attachment')) {
      col.fields.add(
        new FileField({
          name: 'attachment',
          maxSelect: 1,
          maxSize: 5242880,
          mimeTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
        }),
      )
    }

    app.save(col)
  },
  (app) => {
    const col = app.findCollectionByNameOrId('leads')

    const userProfileField = col.fields.getByName('user_profile')
    if (userProfileField) col.fields.remove(userProfileField.id)

    const projectPhaseField = col.fields.getByName('project_phase')
    if (projectPhaseField) col.fields.remove(projectPhaseField.id)

    const attachmentField = col.fields.getByName('attachment')
    if (attachmentField) col.fields.remove(attachmentField.id)

    app.save(col)
  },
)
