const express = require("express");
const app = express();
const bp = require("body-parser");
const path = require("path");
app.use(bp.json());
const PORT = 3000;
app.use(express.static(path.resolve("../front")));
// app.get("/",(req,res)=>{
//     res.send("ok");
//     // res.sendFile(path.resolve("../front"))
// })
app.post('/paypro-webhook', (req, res) => {
  const webhookData = req.body;  // Data sent by PayPro Global
  console.log('Received webhook data:', webhookData);

  // Handle the webhook data here (e.g., verify payment, update subscription)

  // Respond with status 200 to acknowledge receipt
  res.status(200).send('Webhook received');
});


app.listen(PORT, ()=>{console.log(`connected to port ${PORT} => http://localhost:${PORT}`)})