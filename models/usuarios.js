const sequelize = global.sequelize
const Sequelize = require('sequelize');
module.exports = sequelize.define("users", {
  email: Sequelize.TEXT,
  passwd: Sequelize.TEXT,
  name: Sequelize.TEXT,
  lastname: Sequelize.TEXT
});
