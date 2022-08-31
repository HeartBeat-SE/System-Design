const express = require('express')
const app = express()
const port = 5000

const users = require('./models/users')
const locations = require("./data/locations.json")

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
		res.send(users.getAccountById(req.body.userId))
	} catch (err){
		res.sendStatus(400);
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

