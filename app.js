const express = require("express");
const app = express();

app.use(express.json());

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  const user = { username, password };

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }

  res.status(200).json({ message: "User created successfully", user });
});

module.exports = app;
