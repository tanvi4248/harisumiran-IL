const express = require("express");
const router = express.Router();
const {
  getAllSliders,
  createSlider,
} = require("../db/sqlHelperFunctions/sliders");

router.get("/", async (req, res, next) => {
  try {
    const sliders = await getAllSliders();
    res.send(sliders);
  } catch (error) {
    next(error);
  }
});

router.post("/add", async (req, res, next) => {
  try {
    const slider = await createSlider(req.body);
    res.send(slider);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
