const express = require('express')
const app = express()
const port = 5000

const users = require("./data/users.json")
const locations = require("./data/locations.json")

function convertToUserDto(user){
    return {
        userId: user.userId,
        name: user.name,
        city: user.city
    }
}

app.get('/users', (req, res) => {
    let dto = users
        .map(convertToUserDto)
    res.json(dto)
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

