const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Product = sequelize.define("product", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,

    primaryKey: true,
    defaultValue: null,
  },

  title: {
    type: Sequelize.STRING,
  },

  price: {
    type: Sequelize.DOUBLE,
  },
  ImageUrl: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
});

module.exports = Product;
