const { Router } = require("express");
const router = Router(); 
const {
  retrieve,
  retrieveById,
  create,
  modify,
  remove,
} = require("../controllers/libro.controller");

router.get("/", retrieve);

router.get("/:id", retrieveById);

router.post("/", create);

router.put("/:id", modify); 

router.delete("/:id", remove); 

module.exports = router;
