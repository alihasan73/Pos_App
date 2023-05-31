module.exports = (sequelize, Sequelize) => {
	const TransaksiDetail = sequelize.define("TransaksiDetails", {
		// transaksi_id: Sequelize.INTEGER,
		// product_id: Sequelize.INTEGER,
	});
	return TransaksiDetail;
};
