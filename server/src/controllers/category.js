const db = require("../models");
const categori = require("../models/categori");
const categoryController = {
  //menarik semua database
  getAll: async (req, res) => {
    try {
      const category = await db.Categori.findAll();
      return res.send(category);
    } catch (err) {
      console.log(err);
      return res.status(500).send({
        msg: err.message,
      });
    }
  },

  deleteById: async (req, res) => {
    try {
      const category = await db.Categori.findOne({
        where: {
          id: req.params.id,
        },
      });

      if (category) {
        await category.destroy();

        return res.send({
          msg: "Kategori telah dihapus",
          value: categori,
        });
      } else {
        throw new Error("Kategori tidak ditemukan");
      }
    } catch (err) {
      console.log(err);
      return res.status(500).send({
        msg: err.message,
      });
    }
  },
};

module.exports = categoryController;
