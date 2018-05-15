const sockets = {}
const jwt = require("./jwt.js");
const routes = require("../routes.js")
const notificar_sockets = (id, canal, msg) => {
//	console.log("ACA", sockets)
	try {
		for (socket of Object.keys(sockets[id.toString()][canal])) {
			//console.log("ACA 1")
			try {
				sockets[id.toString()][canal][socket].emit('updates', {
					canal: canal,
					msg: msg
				})
			} catch (err) {}
		}
	} catch (err) {}
}

global.notificar_sockets = notificar_sockets;

const InstanciarSockets = function(app) {
	var server = require('http').Server(app);
	var io = require('socket.io')(server);
	io.use((socket, next) => {


		//return next();
		
		let token =(socket.handshake.query.token)
		console.log(token.toString(), token === null);
		if (token=="null" )
		{
		  socket.user = 0;
		  next();
		  
		}
		else{

		
		let user = jwt.getDataPropio(token);

		console.log("USER",user);

		socket.user = user.id;
		next();
		}

		// let isExpiredToken = false;



		// var dateNow = new Date();


		// isExpiredToken = !(user.exp > dateNow.getTime()/1000)



		// if (!isExpiredToken) {
		// 	socket.user = user;
		// 	return next();
		// }
		// return next(new Error('authentication error'));
	});
	io.on('connection', function(socket) {


		//console.log("Conectado nuevo ",socket.token);

		//var user =  jwt.getData(socket.token);
		 let user = socket.user
		//let user = {cliente:1}
		console.log("Conectado nuevo cliente", socket.id,socket.user)
		if (!sockets.hasOwnProperty(user.id)) {
			sockets[user.cliente] = {}
		}

		//sockets[1] = socket.id
		// socket.emit('getinfo2', {
		// 	hello: 'world'
		// }, function(response) {
		// 	console.log(response)
		// });



		socket.on('dequeue', function(data, callbackFn) {

			parametro = "app_login";
			this_sockets = sockets[user.cliente]
			if (!this_sockets.hasOwnProperty(parametro)) {
				this_sockets[parametro] = {}
			}

			this_sockets[parametro][socket.cliente] = socket;

			try {
				callbackFn

			} catch (err) {}

			//console.log(sockets);
			//socket.emit("OKA");
		});


		socket.on('updates', function(data) {

			parametro = data.parametro;
			this_sockets = sockets[user.cliente]
			if (!this_sockets.hasOwnProperty(parametro)) {
				this_sockets[parametro] = {}
			}
			this_sockets[parametro][socket.id] = socket;


		});

		socket.on('Dequeue', function(data,callbackFn) {

			parametro = data.parametro;
			this_sockets = sockets[user.cliente]
			if (!this_sockets.hasOwnProperty(parametro)) {
				this_sockets[parametro] = {}
			}
			this_sockets[parametro][socket.id] = socket;
			


			desencolar({
					entrada: data.entrada
				}, {
					salida: callbackFn
				})




		});



		Object.keys(routes.sockets).forEach(function(key) {
			//console.log(key);
			socket.on(key, function(data, callbackFn) {



				modulo = routes.sockets[key]

				console.log("LLAMADA AL MODULO",key)



				if (data.update) {
					parametro = key;
					this_sockets = sockets[user.cliente]
					if (!this_sockets.hasOwnProperty(parametro)) {
						this_sockets[parametro] = {}
					}
					this_sockets[parametro][socket.id] = socket;


				}
				modulo({
					entrada: data.entrada,
					session: user
				}, {
					salida: callbackFn
				})



			});
		});


		socket.on('disconnect', function() {
			//console.log("se fue");

			id = user;
			try {
            for (canal of Object.keys(sockets[id.toString()])) for (socket_id of Object.keys(sockets[id.toString()][canal])) {
                //console.log(socket_id, socket.id)
                if (socket_id == socket.id) {
                  delete sockets[id.toString()][canal][socket_id];
                }
              }
          } catch (error) {
				
			}
			

			//console.log(sockets);

		});



	});

	return server

}

module.exports = {
	InstanciarSockets: InstanciarSockets
};