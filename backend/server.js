const express = require("express");
const port = 5000;

const app = express();

// Middleware traitant les données req
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post.routes"));

// lancement du server
app.listen(port, () => console.log("Le serveur a démarré au port " + port));
