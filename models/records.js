const sequelize = global.sequelize
const Sequelize = require('sequelize');
module.exports = sequelize.define("records", {
  ip: Sequelize.TEXT,
  origin: Sequelize.TEXT,
  user_agent: Sequelize.TEXT
});
