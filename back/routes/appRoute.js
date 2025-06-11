const express = require("express");
const router = express.Router();
const Webhook = require("../classes/Webhook");
// require("../classes/Webhook");


var lastWebhook = null;
var hooks = [];

router.post('/paypro-webhook', (req, res) => {
  // const webhookData = req.body;  // Data sent by PayPro Global
  // console.log('Received webhook data:', webhookData);
  lastWebhook = new Webhook({
    headers: req.headers,
    body: req.body,
  });
  // lastWebhook = {
  //   headers : req.headers,
  //   body: req.body,
  // }
  // hooks.push(lastWebhook);
  // console.log(hooks);
  // console.log('✅ Webhook received from PayPro Global');
  // console.log('📦 Headers:', JSON.stringify(req.headers, null, 2));
  // console.log('📨 Body:', JSON.stringify(req.body, null, 2));

  // --------------------------------------------------------------------------
  // Handle the webhook data here (e.g., verify payment, update subscription).
  // Respond with status 200 to acknowledge receipt
  // --------------------------------------------------------------------------
  // res.status(200).send('Webhook received');
});
router.get('/last-webhook', (req, res) => {
  console.log(lastWebhook);
  res.json(lastWebhook || { message: 'No webhook received yet' });
});

router.get('/all-webhooks', (req, res) => {
  console.log(hooks);
  res.json(hooks || { message: 'No webhook received yet' });
});

module.exports = router;