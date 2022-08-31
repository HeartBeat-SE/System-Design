const users_data_template = require("../data/users.json")

class User {

	constructor(id, name, city, locations) {
		this.userId = id;
		this.name = name;
		this.city = city;
        this.locations = locations
	}

}
class Users {
	
	constructor() {
      this.users = new Map()
	  for(let user of users_data_template){
        this.users.set(user.userId, new User(user.userId, user.name, user.city, user.locations))
      }
	}

	registerNewUser(id, name, city){
		console.log("Registering new user: " + id)
		if (!this.isUserAlreadyRegistered(id)){
			console.log("GOOD: not present")
			this.users.set(id, new User(id, name, city, []))
		} else {
			console.log("BAD: user already here")
			throw 'Duplicate id'
		}
	}

	isUserAlreadyRegistered(id){
		return this.users.get(id) != undefined
	}

	getUserById(id){
		return this.users.get(id)
	}

	getAllUsersId(){
		return Array.from(this.users.keys())
	}

    getAllUsers(){
		return Array.from(this.users.values())
	}
}

module.exports = new Users()
  