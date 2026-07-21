const express = require("express");
const router = express.Router();
const Idea = require("../models/Idea");

// @route   GET /api/ideas
router.get("/", async (req, res) => {
  return res.send("ok");
});

// @route   POST /api/ideas
router.post("/", async (req, res) => {
  return res.send("ok");
});

module.exports = router;
