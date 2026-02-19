const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for JSON parsing
app.use(express.json());

// Custom logging middleware (Bonus)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Serve static HTML
app.use(express.static("public"));


// ROUTES

// GET /
app.get("/", (req, res) => {
  res.send("My Week 2 API!");
});


// POST /user
app.post("/user", (req, res) => {
  const { name, email } = req.body;

  // Error handling
  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  res.json({ message: `Hello, ${name}!` });
});


// GET /user/:id
app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  res.send(`User ${id} profile`);
});


// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});