module.exports = (sequelize, Sequelize) => {
	const Stok = sequelize.define("Stoks", {
		// product_id: Sequelize.INTEGER,
		quantity: Sequelize.INTEGER,
	});
	return Stok;
};
