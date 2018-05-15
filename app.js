/*
Lanzador del webservices 
El Api estara corriendo en el puerto definido en la variable PORT  en .env
*/
const dotenv = require('dotenv');
dotenv.load()
const sequelize = require('./system/sequelize.js');
const app = require("./system/app.js")
console.log(`APP corriendo el ${process.env.PORT}!`);
app.listen(+(process.env.PORT), function () {
    console.log(`APP corriendo el ${process.env.PORT}!`);
});
