var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({ result: "This is the index of the Inventory System server" });
});

module.exports = router;
