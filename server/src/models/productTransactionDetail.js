module.exports = (sequelize, Sequelize) => {
	const productTranDet = sequelize.define("ProductTransactionDetails", {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
	});
	return productTranDet;
};
