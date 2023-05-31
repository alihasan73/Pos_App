const db = require("../models");
const moment = require("moment");

const productController = {
	getAll: async (req, res) => {
		try {
			const product = await db.Product.findAll();
			return res.send(product);
		} catch (error) {
			console.log(error);
			return res.status(500).send({
				message: error.message,
			});
		}
	},
	postProduct: async (req, res) => {
		try {
			const { name, description, price } = req.body;
			const newProduct = await db.Product.create({
				name,
				price,
				description,
			});
			res.send({
				message: "Produl berhasil ditambah",
				data: newProduct,
			});
		} catch (error) {
			res.status(500).send({
				message: error.message,
			});
		}
	},
	updateProduct: async (req, res) => {
		try {
			const { productId } = req.params;
			const { name, description, price } = req.body;
			const product = await db.Product.findOne({
				where: {
					id: productId,
				},
			});

			product.name = name;
			product.description = description;
			product.price = price;

			await product.save();
			return res.status(200).send({
				message: "Product berhasil diupdate",
				data: product,
			});
		} catch (error) {
			res.status(500).send({
				message: error.message,
			});
		}
	},
	deleteProduct: async (req, res) => {
		try {
			await db.Product.destroy({
				where: {
					id: req.params.id,
				},
			});
			return res.status(200).send({
				message: "Product berhasil dihapus",
			});
		} catch (error) {
			res.status(500).send({
				message: error.message,
			});
		}
	},
};

module.exports = productController;
