const Users = global.models.users;
const JWT = require("../../system/jwt")
module.exports = function(input, output) {
	let data = input.input
        console.log("data",data)
        console.log("data",input)
	let email = data.email.toLowerCase()
	Users.find({where:{email:email,passwd:data.passwd} , attributes:["id","name","lastname"]}).then((user) => { 
		if(user == null){
			output.send({status:false,msg:"Correo o contraseña no existe o son incorrectos"})
			output.end()
		}
		else{

			output.send({status:true,msg:"Login Correcto", user: user, domain:process.env.DOMAIN,
        jwt: JWT.getTokenPropio({ id: user.dataValues.id }) })
				output.end()
		}

	})
}
