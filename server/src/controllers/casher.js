// const { Model } = require("sequelize");
const db = require("../models");

const casherController = {
	getAll: async (req, res) => {
		try {
			const result = await db.Transaction.findAll({
				include: [
					{
						model: db.TransactionDetail,
						include: [{ model: db.Product }],
					},
				],
			});
			res.send(result);
		} catch (error) {
			return res.status(500).send(error.message);
		}
	},
	getOne: async (req, res) => {
		try {
			const { id } = req.query;
			const result = await db.Transaction.findOne({
				include: [
					{
						model: db.TransactionDetail,
						include: [{ model: db.Product }],
					},
				],
				where: {
					id: id,
				},
			});
			res.send([result]);
		} catch (error) {
			return res.status(500).send(error.message);
		}
	},
};

module.exports = casherController;
