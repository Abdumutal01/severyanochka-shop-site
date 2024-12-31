const express = require("express");
const app = express();

app.use(express.json());

// GET route
app.get("/api", (req, res) => {
  res.send({ message: "Hello, API!" });
});

// Start server
app.listen(3000, () => {
  console.log("API running on http://localhost:3000");
});
