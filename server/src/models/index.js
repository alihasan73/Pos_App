"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
	sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
	sequelize = new Sequelize(
		config.database,
		config.username,
		config.password,
		config
	);
}

fs.readdirSync(__dirname)
	.filter((file) => {
		return (
			file.indexOf(".") !== 0 &&
			file !== basename &&
			file.slice(-3) === ".js" &&
			file.indexOf(".test.js") === -1
		);
	})
	.forEach((file) => {
		const model = require(path.join(__dirname, file))(
			sequelize,
			Sequelize.DataTypes
		);
		db[model.name] = model;
	});

Object.keys(db).forEach((modelName) => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

const user = require("./user");
const stok = require("./stok");
const historiStok = require("./historistok");
const produk = require("./produk");
const transaksi = require("./transaksi");
const transaksiDetail = require("./transaksiDetail");
const categori = require("./categori");

db.User = user(sequelize, Sequelize);
db.Stok = stok(sequelize, Sequelize);
db.HistoriStok = historiStok(sequelize, Sequelize);
db.Produk = produk(sequelize, Sequelize);
db.Transaksi = transaksi(sequelize, Sequelize);
db.TransaksiDetail = transaksiDetail(sequelize, Sequelize);
db.Categori = categori(sequelize, Sequelize);

db.Transaksi.belongsTo(db.User, {
	foreignKey: "user_id",
	as: "User",
});

db.TransaksiDetail.belongsTo(db.Transaksi, {
	foreignKey: "transaksi_id",
	as: "Transaksi",
});

db.TransaksiDetail.belongsTo(db.Produk, {
	foreignKey: "produk_id",
	as: "Produk",
});

db.Produk.belongsTo(db.Categori, {
	foreignKey: "categori_id",
	as: "Categori",
});
db.Stok.belongsTo(db.Produk, {
	foreignKey: "product_id",
	as: "Produk",
});
db.HistoriStok.belongsTo(db.Produk, {
	foreignKey: "produk_id",
	as: "Produk",
});

module.exports = db;
