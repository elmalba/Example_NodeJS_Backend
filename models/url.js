const sequelize = global.sequelize
const Sequelize = require('sequelize');
module.exports = sequelize.define("urls", {
  url: Sequelize.TEXT
});