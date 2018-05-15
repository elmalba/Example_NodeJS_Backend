const routes = {get:{},post:{},delete:{},put:{},sockets:{}}
// routes.get['login'] = require("./modules/info_usuario/login.js")
// routes.get["usuario/registro_academico"] = require("./modules/info_usuario/malla.js");
// routes.get["malla_academica"] = require("./modules/get_malla.js");
// routes.get["sap/documentos"] = require("./modules/sap/archivos.js");
// routes.get["curso"] = require("./modules/cursos/curso.js");
// routes.get["ayudantias/postular"] = require("./modules/ayudantias/postular.js");
// routes.get["ayudantias/buscar"] = require("./modules/ayudantias/buscar.js");
// routes.get["MiInformacion"] = require("./modules/info_usuario/Info.js");
// routes.get["Salas/salas"] = require("./modules/salas/salas.js");
// routes.sockets=routes.get
routes.post["api/login"] = require("./modules/users/login.js");
routes.post["api/register"] = require("./modules/users/register.js");
routes.post["api/urls"] = require("./modules/urls/set_url.js");
routes.get["api/urls"] = require("./modules/urls/get_urls.js");

module.exports = routes;