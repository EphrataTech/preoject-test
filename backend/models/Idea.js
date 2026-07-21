const mongoose = require("mongoose");

const IdeaSchema = new mongoose.Schema({});

module.exports = mongoose.model("Idea", IdeaSchema);
