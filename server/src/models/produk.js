module.exports = (sequelize, Sequelize) => {
	const Produk = sequelize.define("Produks", {
		name: Sequelize.STRING,
		description: Sequelize.STRING,
		price: Sequelize.INTEGER,
		// category_id: Sequelize.INTEGER,
		product_url: Sequelize.STRING,
	});
	return Produk;
};
