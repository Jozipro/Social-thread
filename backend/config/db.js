const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI, () => console.log("BDD connectée"));
  } catch (err) {
    console.log(err);
    process.exit();
  }
};

module.exports = connectionDB;
