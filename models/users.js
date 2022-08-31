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

	registerNewUser(id, name, city) {
		if (this.isUserAlreadyRegistered(id)) {
            throw 'Duplicate id'
		}
        let user = new User(id, name, city, [])
        this.users.set(id, user)
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
  