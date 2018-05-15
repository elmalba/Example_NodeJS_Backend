const jwt = require('jsonwebtoken');
const fs = require('fs');
const jwtSecret = process.env.jwtSecret;
const cert = fs.readFileSync('./key.pem'); 
const getTokenPropio = function(data) {
	return jwt.sign(data, jwtSecret, {
		expiresIn: '3m'
	});
}
const getToken = function(data,jwtSecret) {
	return jwt.sign(data, jwtSecret, {
		expiresIn: '1h'
	});
}
const getTokenRSA = function(data,rsa) {

	return jwt.sign(data, rsa, {
		algorithm: 'RS256',
		expiresIn: '1h'
	});
}
const getData = function(token,jwtSecret) {
	return jwt.decode(token, jwtSecret);
}
const getDataPropio = function(token) {
	return jwt.decode(token, jwtSecret);
}
const getDataRSA = function(token) {
	return jwt.decode(token, cert, { algorithm: ['RS256']  });
}
module.exports = {
	getToken: getToken,
	getData: getData,
	getDataRSA:getDataRSA,
	getTokenRSA:getTokenRSA,
	getTokenPropio:getTokenPropio,
	getDataPropio:getDataPropio
}