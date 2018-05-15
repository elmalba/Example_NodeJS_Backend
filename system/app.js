const express = require('express');
const app = express();
const jwt = require("./jwt.js");
const fs = require("fs");
const Router = require("./router.js")
const bodyParser = require('body-parser')
const go_url = require("../modules/urls/go_url")
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
	extended: true
}));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(require("./beforeafter.js"));
Router(app)
const server = require("./sockets.js").InstanciarSockets(app);
app.get('/login2', function(req, res) {
	global.notificar_sockets(1, "app_monitoreo/get_cliente",{id:44,dispositivo:{nombre:"Manuel"}});
	res.end()
})
// app.post('/login2', function(req, res) {

// 	let privateKey = fs.readFileSync("key.pem", "utf8");
// 	let randomstring = require("randomstring");
// 	let key = new NodeRSA(privateKey);


// 	let secret = key.decrypt(req.body.key, 'utf8') ;


// 	let data = jwt.getData(req.body.data,secret)

// })

app.get('/:short', function(req, res){
  req.input=req.params
  go_url(req,res)
});
app.get('/status', function(req, res) {
	res.json({
		run: "OK"
	});
});

module.exports = server;