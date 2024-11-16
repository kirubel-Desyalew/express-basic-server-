const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Route 1: Respond with my full name
app.get("/name", (req, res) => {
  res.status(200).send("Kirubel Desyalew ");
});

// Route 2: Respond with my favorite hobby as a JSON object
app.get("/hobby", (req, res) => {
  res.status(200).json({ hobby: "Watching football" });
});

// Route 3: Respond with a motivational message about my dream
app.get("/dream", (req, res) => {
  res
    .status(200)
    .send("Never stop dreaming, and keep pushing towards your goals!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
