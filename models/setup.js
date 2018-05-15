const sequilize = require("../system/sequelize.js")
const modelos = require("./run.js")
sequilize.sync({ force: true }).then((sync)=>{ process.exit(1); })