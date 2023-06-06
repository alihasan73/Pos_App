const db = require("../models");

const productCasherController = {
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
	getPagnation: async (req, res) => {
		const { page, limit } = req.query;
		const offset = (page - 1) * limit;

		try {
			const posts = await db.Product.findAll({
				offset,
				limit: +limit,
			});
			res.json(posts);
		} catch (error) {
			console.error("Error retrieving users:", error);
			res.status(500).json({ message: "Internal server error" });
		}
	},
};

module.exports = productCasherController;
