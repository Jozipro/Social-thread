const express = require("express"); // raccourci
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = 5000;

//connexion à la DB
connectDB();

const app = express(); // 2eme raccourci

// Middleware traitant les données req
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post.routes"));

// lancement du server
app.listen(port, () => console.log("Le serveur a démarré au port " + port));
