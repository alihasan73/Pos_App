module.exports = (sequelize, Sequelize) => {
  const Categori = sequelize.define("Categoris", {
    NamaCategori: Sequelize.STRING,
    TotalProduct: Sequelize.STRING,
    Status: Sequelize.ENUM("AVAILABLE", "UNAVAILABLE"),
  });
  return Categori;
};
