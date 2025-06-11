const express = require("express");
const app = express();
const bp = require("body-parser");
const path = require("path");
const appRoute = require("./routes/appRoute");
const PORT = 3000;

app.use(bp.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve("../front")));
app.use("/hook", appRoute);
// app.get("/",(req,res)=>{
//     res.send("ok");
//     // res.sendFile(path.resolve("../front"))
// })
// var lastWebhook = null;

// app.post('/paypro-webhook', (req, res) => {
//   // const webhookData = req.body;  // Data sent by PayPro Global
//   // console.log('Received webhook data:', webhookData);
//   lastWebhook = {
//     headers: req.headers,
//     body: req.body,
//   };
//   console.log('✅ Webhook received from PayPro Global');
//   console.log('📦 Headers:', JSON.stringify(req.headers, null, 2));
//   console.log('📨 Body:', JSON.stringify(req.body, null, 2));

//   // Handle the webhook data here (e.g., verify payment, update subscription)

//   // Respond with status 200 to acknowledge receipt
//   res.status(200).send('Webhook received');
// });
// app.get('/last-webhook', (req, res) => {
//   res.json(lastWebhook || { message: 'No webhook received yet' });
// });


app.listen(PORT, ()=>{console.log(`connected to port ${PORT} => http://localhost:${PORT}`)})