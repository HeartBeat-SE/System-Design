const emergencies_data_template = require("../data/emergencies.json")

class Emergency {

	constructor(id, time, latitude, longitude, reference) {
		this.emergencyId = id;
		this.time = time;
		this.locations = locations;
		this.reference = reference
	}
}

class Emergencies {
    constructor() {
		this.emergencies = new Map()
		for(let e of emergencies_data_template){
		  this.emergencies.set(new Emergency(e.emergencyId, e,time, e.latitude, e.longitude, e.reference))
		}
	  }

	  registerNewEmergency(id, time, latitude, longitude, reference) {
        let emergency = new Emergency(id, time, latitude, longitude, reference [])
        this.emergencies.set(id, time, latitude, longitude, reference)

	}

	getEmergencyById(id){
		return this.emergencies.get(id)
	}

	getAllEmergenciesId(){
		return Array.from(this.emergencies.keys())
	}

    getAllEmergencies(){
		return Array.from(this.emergencies.values())
	}
}

module.exports = new Emergencies()
