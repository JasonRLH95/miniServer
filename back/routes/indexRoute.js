const express = require("express");
const router = express.Router();


router.get("/",async(req,res) => {
  res.json({msg:"express work"});
})

module.exports = router;