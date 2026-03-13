const express = require("express");
const Poll = require("../models/Poll");

const router = express.Router();

// Create poll
router.post("/", async (req,res)=>{
 const {question, options} = req.body;

 const poll = await Poll.create({
  question,
  options
 });

 res.json(poll);
});

// Get all polls
router.get("/", async (req,res)=>{
 const polls = await Poll.find();
 res.json(polls);
});

// Vote in poll
router.post("/vote/:id", async (req,res)=>{
 const {optionIndex,userId} = req.body;

 const poll = await Poll.findById(req.params.id);

 poll.votes.push({
  optionIndex,
  user: userId
 });

 await poll.save();

 res.json(poll);
});

module.exports = router;