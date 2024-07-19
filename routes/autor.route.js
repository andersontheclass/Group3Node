const { Router } = require("express");
const router = Router();

const {
  retrieve,
  retrieveById,
  create,
  modify,
  remove,
} = require("../controllers/autor.controller");

router.get("/", retrieve);

router.get("/:id", retrieveById);

router.post("/", create);

router.put("/", modify);

router.delete("/", remove);

module.exports = router;
