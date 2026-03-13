const express = require("express");
const Case = require("../models/Case");

const router = express.Router();

// Cases by department
router.get("/departments", async (req,res)=>{
 const data = await Case.aggregate([
  { $group: { _id: "$department", count: { $sum: 1 } } }
 ]);

 res.json(data);
});

// Cases by category
router.get("/categories", async (req,res)=>{
 const data = await Case.aggregate([
  { $group: { _id: "$category", count: { $sum: 1 } } }
 ]);

 res.json(data);
});

// Cases by status
router.get("/status", async (req,res)=>{
 const data = await Case.aggregate([
  { $group: { _id: "$status", count: { $sum: 1 } } }
 ]);

 res.json(data);
});

// Hotspot detection
router.get("/hotspots", async (req,res)=>{
 const data = await Case.aggregate([
  {
   $group:{
    _id:{department:"$department",category:"$category"},
    count:{$sum:1}
   }
  },
  {
   $match:{count:{$gte:5}}
  }
 ]);

 res.json(data);
});

module.exports = router;