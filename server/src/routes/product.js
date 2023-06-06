const express = require("express");
const router = express.Router();
const productController = require("../controllers").productController;
const { fileUploader } = require("../middleware/multer");

//get all product
router.get("/", productController.getAll);
router.post(
	"/",
	fileUploader({ destinationFolder: "product" }).single("product"),
	productController.postProduct
);
router.patch(
	"/:id",
	fileUploader({ destinationFolder: "product" }).single("product"),
	productController.updateProduct
);
router.delete("/:id", productController.deleteProduct);
router.get("/filter", productController.getFilter);
router.get("/sort", productController.getSorting);
router.get("/paginate", productController.getPagnation);
router.get("/detail", productController.getOne);
module.exports = router;
