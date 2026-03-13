const express = require("express");
const Case = require("../models/Case");

const router = express.Router();

// Create new case
router.post("/", async (req,res)=>{
 const {title,description,category,department,location,severity} = req.body;

 const trackingID = "NEO-" + Date.now();

 const newCase = await Case.create({
  title,
  description,
  category,
  department,
  location,
  severity,
  trackingID
 });

 res.json(newCase);
});

// Get all cases
router.get("/", async (req,res)=>{
 const cases = await Case.find();
 res.json(cases);
});

// Assign case to manager
router.put("/assign/:id", async (req,res)=>{
 const {managerId} = req.body;

 const updatedCase = await Case.findByIdAndUpdate(
  req.params.id,
  {
   assignedManager: managerId,
   status: "Assigned"
  },
  {new:true}
 );

 res.json(updatedCase);
});

module.exports = router;