const modelos = {}
modelos.users        = require("./users.js")
modelos.url     = require("./url.js")
modelos.records          = require("./records.js")
modelos.url.belongsTo(modelos.users,{
 foreignKey: "user_id",
  as: "user"
})
modelos.records.belongsTo(modelos.url,{
 foreignKey: "url_id",
  as: "url"
})
modelos.users.hasMany(modelos.url, {
  foreignKey: "user_id",
  as: "url"
})
modelos.url.hasMany(modelos.records, {
  foreignKey: "url_id",
  as: "records"
})
module.exports = modelos