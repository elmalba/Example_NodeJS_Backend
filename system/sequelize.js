const Sequelize = require('sequelize');
const dotenv = require('dotenv');
dotenv.load()
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWD, {
  dialect: 'mysql',
   port: process.env.DB_PORT,
   host: process.env.DB_HOST,
});
global.sequelize=sequelize
global.models={}
global.models=Object.assign(global.models,require('../models/run.js'))
module.exports = sequelize;
