const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");

const app = express();

// 🔹 Middleware
app.use(express.json());
app.use(cors());

// 🔹 Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

// 🔹 Route de test
app.get("/", (req, res) => {
  res.send("🚀 VisionUp Backend is running!");
});

// 🔹 Gestion des erreurs (optionnel)
app.use((req, res, next) => {
  res.status(404).json({ message: "❌ Route non trouvée" });
});

module.exports = app;
