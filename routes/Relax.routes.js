const relax = require("../controllers/Relax.controller");

const router = require("express").Router();

router.get("/", relax.getAllListRelax);
router.post("/", relax.createListRelax);
router.delete("/:id", relax.deleteListRelax);

module.exports = router;
