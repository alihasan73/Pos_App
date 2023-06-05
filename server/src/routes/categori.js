const express = require("express");
const { userController } = require("../controllers");
const router = express.Router();
const categoriController = require("../controllers").categoriController;

router.get("/", categoriController.getAll);

// delete
router.delete("/:id", categoriController.deleteById);

module.exports = router;
