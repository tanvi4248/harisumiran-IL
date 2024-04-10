const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.use("/sliders", require("./sliders"));
router.use("/timing", require("./timing"));

module.exports = router;
