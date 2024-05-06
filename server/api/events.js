const express = require("express");
const router = express.Router();
const {
  getEvents,
  createEvents,
  updateEvents,
} = require("../db/sqlHelperFunctions/events");

router.get("/", async (req, res, next) => {
  try {
    const events = await getEvents();
    res.send(events);
  } catch (error) {
    next(error);
  }
});
router.post("/add", async (req, res, next) => {
  try {
    const events = await createEvents(req.body);
    res.send(events);
  } catch (err) {
    next(err);
  }
});
router.put("/:id", async (req, res, next) => {
  try {
    const events = await updateEvents(req.params.id, req.body);
    res.send(events);
  } catch (err) {
    next(err);
  }
});
module.exports = router;
