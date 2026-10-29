const express = require("express");
const router = express.Router();

const {
  getEtudiants,
  creerEtudiant,
  modifierEtudiant,
  supprimerEtudiant
} = require("../controllers/etudiantController");

router.get("/", getEtudiants);
router.post("/", creerEtudiant);
router.put("/:id", modifierEtudiant);
router.delete("/:id", supprimerEtudiant);

module.exports = router;
