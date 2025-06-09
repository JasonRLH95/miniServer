const express = require("express");
const app = express();

app.use(express.json());

app.post("/api/webhooks/paypro", (req, res) => {
  console.log("Got webhook:", req.body);
  res.status(200).send("Webhook received");
});


app.listen(3000,()=>{console.log("server is listaning to port 3000 => http://localhost:3000")})