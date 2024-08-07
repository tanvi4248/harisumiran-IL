const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.use("/sliders", require("./sliders"));
router.use("/timing", require("./timing"));
router.use("/events", require("./events"));
router.use("/contacts", require("./contacts"));

module.exports = router;
