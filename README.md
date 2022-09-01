# System-Design

This project was created using (JavaScript/NodeJS/Express BOOOOH CAZZO NE SO?).

The folder [data](data) includes two json files containing the source data of users and AED locations.

The [user model](models/users.js) shapes the operations that can be done between users and AED locations through APIs.

Finally, the [index file](index.js) models the HTTP methods that enable communications between clients and servers.

## API Configuration (?)

1. Execute the index file
2. The server runs on port 5000
3. GET (./users) to see the list of users
4. GET (./locations) to see the list of AED locations
5. POST (./users) to add a new user

It is possible to simulate the use case in which, during the emergency progress management, the system needs to identify the AEDs that are located to the selected first responders. 

6. GET (./locations/:id/users)

This method takes as input (:id) the locationId of a specific AED and returns as output the data of the users located near it.

