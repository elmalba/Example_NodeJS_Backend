const  routes = require("../routes.js")
const  Router = (app) => {
	Object.keys(routes.get).forEach((key) => app.get("/" + key, routes.get[key]))
	Object.keys(routes.post).forEach((key) => app.post("/" + key, routes.post[key]))
	Object.keys(routes.put).forEach((key) => app.put("/" + key, routes.put[key]))
	Object.keys(routes.delete).forEach((key) => app.delete("/" + key, routes.delete[key]))
}
module.exports = Router