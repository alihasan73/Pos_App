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
};

module.exports = productCasherController;
