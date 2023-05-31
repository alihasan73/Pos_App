module.exports = (sequelize, Sequelize) => {
	const historiStok = sequelize.define("HistoriStoks", {
		// product_id: Sequelize.INTEGER,
		status: {
			type: Sequelize.ENUM("IN", "OUT"),
		},
		quantity: Sequelize.INTEGER,
		reference: Sequelize.STRING,
	});
	return historiStok;
};
