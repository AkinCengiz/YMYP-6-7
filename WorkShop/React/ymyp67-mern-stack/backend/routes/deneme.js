const express = require("express");
const router = express.Router();

router.get("/",(req,res) => {
    res.send("Deneme Page");
})

module.exports = router;