const express = require("express");

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Mon premier serveur MERN !");
});

app.get("/api/test", (req, res) => {
  res.json({
    message: "L'API fonctionne correctement"
  });
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}` );
});
