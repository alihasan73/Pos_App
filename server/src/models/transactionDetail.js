module.exports = (sequelize, Sequelize) => {
	const TransactionDetail = sequelize.define("TransactionDetails", {
		// id: {
		// 	type: Sequelize.INTEGER,
		// 	primaryKey: true,
		// 	autoIncrement: true,
		// },
		// transaksi_id: Sequelize.INTEGER,
		// product_id: Sequelize.INTEGER,
	});
	return TransactionDetail;
};
