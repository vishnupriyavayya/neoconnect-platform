const mongoose = require("mongoose");

const pollSchema = new mongoose.Schema({
 question: String,
 options: [String],
 votes: [{
  optionIndex: Number,
  user: { type: mongoose.Schema.Types.ObjectId, ref:"User" }
 }]
});

module.exports = mongoose.model("Poll", pollSchema);