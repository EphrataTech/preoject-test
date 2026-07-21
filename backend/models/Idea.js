const mongoose = require("mongoose");

const IdeaSchema = new mongoose.Schema({
    title: {
    type: String,
    unique: true, 
    required:true  
   },
   description:{
    type: String,
   }

});

module.exports = mongoose.model("Idea", IdeaSchema);
