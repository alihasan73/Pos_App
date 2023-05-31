const express = require("express");
const router = express.Router();
const userController = require("../controllers").userController;

//register cashier
router.post("/registerCashier", userController.registerCashier);

//REGISTER ADMIN
router.post("/registerAdmin", userController.registerAdmin);

//login cashier
// router.post("/loginCashier", userController.loginCashier);

//login admin
// router.post("/loginAdmin", userController.loginAdmin);

//login
router.post("/login", userController.login);

//token
router.get("/v3", userController.getByToken, userController.getUserByToken);

module.exports = router;
