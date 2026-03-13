const authRoutes = require("./routes/authRoutes");
const cron = require("node-cron");
const Case = require("./models/Case");
const pollRoutes = require("./routes/pollRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");
const caseRoutes = require("./routes/caseRoutes");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/cases", caseRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/polls", pollRoutes);
app.use("/api/analytics", analyticsRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
    res.send("NeoConnect API Running");
});

const PORT = process.env.PORT || 5000;
// 7-day escalation check
cron.schedule("0 0 * * *", async () => {
 console.log("Running escalation check...");

 const sevenDaysAgo = new Date();
 sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

 try {
  await Case.updateMany(
   { status: "Assigned", createdAt: { $lt: sevenDaysAgo } },
   { status: "Escalated" }
  );

  console.log("Escalation check completed");
 } catch (error) {
  console.error("Escalation error:", error);
 }
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});