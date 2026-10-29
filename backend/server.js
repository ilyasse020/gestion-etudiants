const express = require("express");

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Mon premier serveur MERN !");
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}` );
});
