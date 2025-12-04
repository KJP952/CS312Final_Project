const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("DB Error:", err));

const ResponseSchema = new mongoose.Schema({
  daysPerWeek: Number,
  promptsPerDay: Number,
  weeklyEnergy: Number,
  weeklyWater: Number,
  weeklyCO2: Number,
  scenarios: Array,
});

const Response = mongoose.model("Response", ResponseSchema);

app.post("/api/save", async (req, res) => {
  console.log("Received:", req.body);

  try {
    const resp = new Response(req.body);
    await resp.save();
    res.status(201).json({ message: "Saved successfully!" });
  } catch (err) {
    console.error("Save error:", err);
    res.status(500).json({ error: "Error saving data" });
  }
});

app.listen(5001, () => console.log("Server running on port 5001"));

