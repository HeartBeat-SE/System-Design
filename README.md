# System-Design

This project was created using Node.js and the express framework.

The folder [data](data) includes two json files containing the source data of users and AED locations.

In the [user model](models/users.js) it is implemented the behavior of the users' APIs.

In the [emergency model](models/emergency.js) it is implemented the behavior emergencies' APIs.

The [index file](index.js) models the API endpoints that enable communications between clients and servers.

## API Endpoints

1. Execute the index file
2. The server runs on port 5000
3. `GET /users` to see the list of users
4. `GET /emergencies` to see the emergency details
4. `GET /locations` to see the list of AED locations
5. `POST /users` to add a new user
6. `POST /emergencies` to add a new emergency

It is possible to simulate the use case in which, during the emergency progress management, the system needs to identify the first responders that are located nearby the selected AEDs. 

6. `GET /locations/:id/users`

This method takes as input (:id) the locationId of a specific AED and returns as output the data of the users located near it.

