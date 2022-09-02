// (Create Read Update Delete) -> through REST (Post, Get, Put, Delete)

const express = require('express') // import express
const app = express() // import as 'app' ??
const port = 5000

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json()); 

const userModel = require('./models/users') // require -> import
const locations = require("./data/locations.json")

// dto = Data Transfer Object -> define data of user (no locations)
function convertToUserDto(user){
    return {
        userId: user.userId,
        name: user.name,
        city: user.city
    }
}

app.get("/", (req, res) => { 
	res.send("This is an API between users and AED locations") // message displayed with get: http://localhost:5000/
})

app.get('/users', (req, res) => { // take users data from getAllUsers (array), convertToUserDto (keep userId, name, city) and convert them to json
    let dto = []
    for(user of userModel.getAllUsers()){
        let userDto = convertToUserDto(user)
        dto.push(userDto)
    }

    // let dto = userModel
    //     .getAllUsers()
    //     .map(convertToUserDto)

    res.json(dto)
})

app.post("/users", (req, res) => { 
	try {
		userModel.registerNewUser(req.body.userId, req.body.name, req.body.city) // take as input userId, name, city
		res.json(userModel.getUserById(req.body.userId)) // create a new user with inserted values
	} catch (error){
		res.status(400).json({ error });
	}	
})

app.get('/locations', (req, res) => { // displays list of locations (json)
    res.json(locations)
})

app.get('/locations/:id/users', (req, res) => {
    let dto = userModel
        .getAllUsers() // take users
        .filter(u => u.locations.includes(req.params.id)) // filter if location == location
        .map(convertToUserDto) // keep userId, name, city
    res.json(dto) // convert to json
})

app.listen(port, () => { // select the port in which it runs
    console.log("Server started on port " + port)
})

