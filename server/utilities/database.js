const Sequelize = require("sequelize");

const sequelize = new Sequelize("crud", "root", "Mysql@250", {
  dialect: "mysql",
});

module.exports=sequelize;