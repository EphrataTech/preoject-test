const express = require("express");
const router = express.Router();
const Idea = require("../models/Idea");

// @route   GET /api/ideas
router.get("/", async (req, res) => {
  try {
    const ideas = await Idea.find();
    return res.json(ideas);
  } catch (err) {
    return res.status(500).json({ error: "Error fetching ideas" });
  }
});

// @route   POST /api/ideas
router.post("/", async (req, res) => {
  try {
    const { title } = req.body;
    const newIdea = new Idea({ title });
    const savedIdea = await newIdea.save();
    return res.status(201).json(savedIdea);
  } catch (err) {
    return res.status(500).json({ error: "Error creating idea" });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const savedIdea = await newIdea.findByIdAndUpdate(req.params.id , {new:true});
    return res.status(201).json(savedIdea);
  } catch (err) {
    return res.status(500).json({ error: "Error updating idea" });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const savedIdea = await newIdea.findByIdAndDelete(req.params.id);
    return res.status(201).json(savedIdea);
  } catch (err) {
    return res.status(500).json({ error: "Error updating idea" });
  }
});



module.exports = router;
