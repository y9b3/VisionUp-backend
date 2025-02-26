const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_zURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connecté à MongoDB !");
  } catch (error) {
    console.error("❌ Erreur de connexion MongoDB:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
