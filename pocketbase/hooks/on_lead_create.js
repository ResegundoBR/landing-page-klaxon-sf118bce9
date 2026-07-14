onRecordAfterCreateSuccess((e) => {
  const record = e.record

  $app
    .logger()
    .info(
      'New lead captured',
      'lead_id',
      record.id,
      'email',
      record.getString('email'),
      'source',
      record.getString('source'),
    )

  try {
    // Simulate sending an HTML email to the commercial team
    $app
      .logger()
      .info('Simulating email send to commercial team for lead: ' + record.getString('email'))

    // Simulate sending a WhatsApp notification to the sales manager
    $app.logger().info('Simulating WhatsApp notification for new lead')

    // Example HTTP call (mocked bridge)
    /*
    $http.send({
      url: "https://api.whatsapp-bridge.com/notify",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: "Novo lead: " + record.getString("name") })
    });
    */
  } catch (err) {
    $app.logger().error('Error executing lead automations', 'error', err.message)
  }

  e.next()
}, 'leads')
