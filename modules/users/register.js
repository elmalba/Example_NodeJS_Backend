const Users = global.models.users;
module.exports = function(input, output) {
let data = input.input
let email = data.email.toLowerCase()
Users.find({where:{email:email}}).then((user) => { 
	if(user != null){
		output.send({status:false,msg:"Correo ya existe"})
		output.end()
	}
	else{
	Users.create({name:data.name,lastname:data.lastname,email:email,passwd:data.passwd}).then((user)=>{
			output.send({status:true,msg:"Se ha creado tu cuenta"})
			output.end()
			
		})
	}

})

}