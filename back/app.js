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


app.listen(PORT, ()=>{console.log(`connected to port ${PORT} => http://localhost:${PORT}`)})