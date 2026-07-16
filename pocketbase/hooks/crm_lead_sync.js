onRecordAfterCreateSuccess((e) => {
  const record = e.record

  const baseUrl = 'https://landing-page-klaxon-fc3b4.shrd00.internal.goskip.dev'
  const attachmentFilename = record.getString('attachment')
  let attachmentUrl = null
  if (attachmentFilename) {
    attachmentUrl =
      baseUrl + '/api/files/' + record.collectionId + '/' + record.id + '/' + attachmentFilename
  }

  const source = record.getString('source') || 'Pinterest'

  const payload = {
    name: record.getString('name'),
    whatsapp: record.getString('whatsapp'),
    email: record.getString('email'),
    project_type: record.getString('project_type'),
    source: source,
    reference_links: record.getString('reference_links'),
    modalidade: record.getString('modalidade'),
    investimento: record.getString('investimento'),
    user_profile: record.getString('user_profile'),
    project_phase: record.getString('project_phase'),
    attachment: attachmentUrl,
  }

  try {
    const res = $http.send({
      url: 'https://klaxon-comercial-app-8db8a.shrd00.internal.goskip.dev/backend/v1/pinterest-lead-capture',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      timeout: 30,
    })

    if (res.statusCode < 200 || res.statusCode >= 300) {
      $app
        .logger()
        .error(
          'CRM sync returned non-success status',
          'lead_id',
          record.id,
          'status',
          res.statusCode,
        )
    } else {
      $app
        .logger()
        .info('Lead synced to CRM successfully', 'lead_id', record.id, 'status', res.statusCode)
    }
  } catch (err) {
    $app.logger().error('Error syncing lead to CRM', 'lead_id', record.id, 'error', err.message)
  }

  return e.next()
}, 'leads')
