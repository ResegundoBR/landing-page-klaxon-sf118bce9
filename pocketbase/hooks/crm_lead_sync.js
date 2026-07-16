onRecordAfterCreateSuccess((e) => {
  const record = e.record

  const BACKEND_URL = 'https://landing-page-klaxon-fc3b4.shrd00.internal.goskip.dev'
  const CRM_ENDPOINT =
    'https://klaxon-comercial-app-8db8a.shrd00.internal.goskip.dev/backend/v1/pinterest-lead-capture'

  var attachmentUrl = ''
  var attachmentFilename = record.getString('attachment')
  if (attachmentFilename) {
    attachmentUrl = BACKEND_URL + '/api/files/leads/' + record.id + '/' + attachmentFilename
  }

  var payload = {
    name: record.getString('name'),
    whatsapp: record.getString('whatsapp'),
    email: record.getString('email'),
    project_type: record.getString('project_type'),
    source: record.getString('source'),
    reference_links: record.getString('reference_links'),
    modalidade: record.getString('modalidade'),
    investimento: record.getString('investimento'),
    user_profile: record.getString('user_profile'),
    project_phase: record.getString('project_phase'),
    attachment_url: attachmentUrl,
  }

  try {
    $http.send({
      url: CRM_ENDPOINT,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      timeout: 30,
    })
  } catch (err) {
    $app.logger().error('CRM lead sync failed', 'lead_id', record.id, 'error', err.message)
  }

  e.next()
}, 'leads')
