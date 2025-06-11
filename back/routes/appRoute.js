const express = require("express");
const app = express();


var lastWebhook = null;

app.post('/paypro-webhook', (req, res) => {
  // const webhookData = req.body;  // Data sent by PayPro Global
  // console.log('Received webhook data:', webhookData);
  lastWebhook = {
    headers: req.headers,
    body: req.body,
  };
  console.log('✅ Webhook received from PayPro Global');
  console.log('📦 Headers:', JSON.stringify(req.headers, null, 2));
  console.log('📨 Body:', JSON.stringify(req.body, null, 2));

  // Handle the webhook data here (e.g., verify payment, update subscription)

  // Respond with status 200 to acknowledge receipt
  res.status(200).send('Webhook received');
});
app.get('/last-webhook', (req, res) => {
  res.json(lastWebhook || { message: 'No webhook received yet' });
});