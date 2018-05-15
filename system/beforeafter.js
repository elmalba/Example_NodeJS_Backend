const JWT = require("./jwt")
const  MiddleWare = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  // next();
    // if (req.path === '/auth' || req.path === '/login2' || req.path === '/df' || req.path === '/test' || req.path === '/integracion.html') {
    req.input = req.body;

    token = req.headers.token || req.headers.authorization  
    if (token )
        req.user = JWT.getDataPropio(token).id
        
    next();
    //return
}
module.exports = MiddleWare;