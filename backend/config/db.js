const mongoose = require("mongoose"); //appel mongoose

const connectDB = async () => {
  // async car on cherche donnée et revient
  try {
    mongoose.set("strictQuery", false);
    mongoose
      .connect(process.env.MONGO_URI)
      .then(() => console.log("Mongo connecté"));
  } catch (err) {
    console.log(err);
    process.exit();
  }
};

module.exports = connectDB;
