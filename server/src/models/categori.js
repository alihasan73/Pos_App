module.exports = (sequelize, Sequelize) => {
  const Categori = sequelize.define("Categoris", {
    NamaCategori: Sequelize.STRING,
    TotalProduct: Sequelize.INTEGER,
    Status: Sequelize.ENUM("AVAILABLE", "NOT-AVAILABLE"),
  });
  return Categori;
};
