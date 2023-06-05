const express = require("express");
const router = express.Router();
const productCasherController =
	require("../controllers").productCasherController;

router.get("/", productCasherController.getAll);

module.exports = router;
