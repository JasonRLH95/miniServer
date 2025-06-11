const express = require("express");
const router = express.Router();

var lastWebhook = null;
var hooks = [];

router.post('/paypro-webhook', (req, res) => {
  lastWebhook = {
    headers : req.headers,
    body: req.body,
  }
  hooks.push(lastWebhook);
  // --------------------------------------------------------------------------
  // Handle the webhook data here (e.g., verify payment, update subscription).
  // --------------------------------------------------------------------------

});
router.get('/last-webhook', (req, res) => {
  // console.log(JSON.stringify(lastWebhook.headers));
  // console.log(JSON.stringify(lastWebhook.body));
  res.json(lastWebhook || { message: 'No webhook received yet' });
});

router.get('/all-webhooks', (req, res) => {
  // console.log(hooks);
  
  res.json(hooks || { message: 'No webhook received yet' });
});

module.exports = router;