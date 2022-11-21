const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-shop", "root", "alizahee#67", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
