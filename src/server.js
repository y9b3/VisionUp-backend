require("dotenv").config();
const connectDB = require("./src/config/database"); // 🔹 Connexion à MongoDB
const app = require("./src/app");

const PORT = process.env.PORT || 8001;

// 🔹 Connexion à MongoDB
connectDB();

app.listen(PORT, () => {
  console.log(`✅ Serveur démarré sur http://localhost:${PORT}`);
});
