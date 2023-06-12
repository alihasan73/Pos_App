const express = require("express");
const router = express.Router();
const casherController = require("../controllers").casherController;

router.get("/histori", casherController.getAll);
router.get("/histori/detail", casherController.getOne);

module.exports = router;
