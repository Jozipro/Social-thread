const express = require("express"); // raccourci
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const cors = require("cors");
const port = 5000;

//connexion à la DB
connectDB();

const app = express(); // 2eme raccourci

// Authorisation CORS pour la modif db, du front au back
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

// Middleware traitant les données req
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post.routes"));

// lancement du server
app.listen(port, () => console.log("Le serveur a démarré au port " + port));
