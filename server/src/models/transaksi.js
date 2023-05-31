module.exports = (sequelize, Sequelize) => {
	const Transaksi = sequelize.define("Transaksis", {
		no_transaksi: Sequelize.STRING,
		total_price: Sequelize.INTEGER,
	});
	return Transaksi;
};
