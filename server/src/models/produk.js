module.exports = (sequelize, Sequelize) => {
	const Produk = sequelize.define("Produks", {
		name: Sequelize.STRING,
		description: Sequelize.STRING,
		price: Sequelize.INTEGER,
		// categori_id: Sequelize.INTEGER,
	});
	return Produk;
};
