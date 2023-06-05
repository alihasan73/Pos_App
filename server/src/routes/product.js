const express = require("express");
const router = express.Router();
const productController = require("../controllers").productController;

//get all product
router.get("/", productController.getAll);
router.post("/", productController.postProduct);
router.patch("/:productId", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);
router.get("/filter", productController.getFilter);
router.get("/sort", productController.getSorting);
router.get("/paginate", productController.getPagnation);
module.exports = router;
