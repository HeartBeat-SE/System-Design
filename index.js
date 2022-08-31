const express = require('express')
const app = express()
const port = 5000

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json()); 

const users = require('./models/users')
const locations = require("./data/locations.json")

// dto = Data Transfer Object
function convertToUserDto(user){
    return {
        userId: user.userId,
        name: user.name,
        city: user.city
    }
}

app.get("/", (req, res) => {
	res.send("This is an API between users and the list of AEDs")
})

app.get('/users', (req, res) => {
    let dto = users
        .getAllUsers()
        .map(convertToUserDto)
    res.json(dto)
})

app.post("/users", (req, res) => {
	try {
		users.registerNewUser(req.body.userId, req.body.name, req.body.city)
		res.json(users.getUserById(req.body.userId))
	} catch (error){
		res.status(400).json({ error });
	}	
})

app.get('/locations', (req, res) => {
    res.json(locations)
})

app.get('/locations/:id/users', (req, res) => {
    let dto = users
        .filter(u => u.locations.includes(req.params.id))
        .map(convertToUserDto)
    res.json(dto)
})

app.listen(port, () => {
    console.log("Server started on port " + port)
})

