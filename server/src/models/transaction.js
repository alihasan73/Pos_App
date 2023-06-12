module.exports = (sequelize, Sequelize) => {
	const Transaction = sequelize.define("Transactions", {
		// id: {
		// 	type: Sequelize.INTEGER,
		// 	primaryKey: true,
		// 	autoIncrement: true,
		// },
		no_transaksi: Sequelize.STRING,
		total_price: Sequelize.INTEGER,
	});
	return Transaction;
};
