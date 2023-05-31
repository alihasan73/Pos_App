module.exports = (sequelize, Sequelize) => {
	const Categori = sequelize.define("Categoris", {
		NamaCategori: Sequelize.STRING,
	});
	return Categori;
};
