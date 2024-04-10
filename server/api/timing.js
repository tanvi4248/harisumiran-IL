const express = require("express");
const router = express.Router();
const {
  getAllTimings,
  createTiming,
  getAllAtimings,
  createAtiming,
  getAllTtimings,
  createTtiming,
  getAllStimings,
  createStiming,
} = require("../db/sqlHelperFunctions/timing");

router.get("/", async (req, res, next) => {
  try {
    const timings = await getAllTimings();
    res.send(timings);
  } catch (error) {
    next(error);
  }
});

router.post("/add", async (req, res, next) => {
  try {
    const timing = await createTiming(req.body);
    res.send(timing);
  } catch (err) {
    next(err);
  }
});
router.get("/atiming", async (req, res, next) => {
  try {
    const atimings = await getAllAtimings();
    res.send(atimings);
  } catch (error) {
    next(error);
  }
});

router.post("/add", async (req, res, next) => {
  try {
    const atiming = await createAtiming(req.body);
    res.send(atiming);
  } catch (err) {
    next(err);
  }
});

router.get("/ttiming", async (req, res, next) => {
  try {
    const ttimings = await getAllTtimings();
    res.send(ttimings);
  } catch (error) {
    next(error);
  }
});

router.post("/add", async (req, res, next) => {
  try {
    const ttimings = await createTtiming(req.body);
    res.send(ttimings);
  } catch (err) {
    next(err);
  }
});
router.get("/stiming", async (req, res, next) => {
  try {
    const stimings = await getAllStimings();
    res.send(stimings);
  } catch (error) {
    next(error);
  }
});

router.post("/add", async (req, res, next) => {
  try {
    const stimings = await createStiming(req.body);
    res.send(stimings);
  } catch (err) {
    next(err);
  }
});
module.exports = router;
