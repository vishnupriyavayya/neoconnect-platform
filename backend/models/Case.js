const mongoose = require("mongoose");

const caseSchema = new mongoose.Schema({
 title: String,
 description: String,
 category: String,
 department: String,
 location: String,
 severity: String,
 status: {
  type: String,
  default: "New"
 },
 trackingID: String,
 assignedManager: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User"
 },
 createdAt: {
  type: Date,
  default: Date.now
 }
});

module.exports = mongoose.model("Case", caseSchema);