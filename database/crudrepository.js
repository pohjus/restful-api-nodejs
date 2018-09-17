const Location = require('../model/location.js')

class CrudRepository {
  constructor () {
    this.database = new Set([new Location(60, 60), 
      new Location(60, 60)])
  }

  errorHandling (err) {
    if (err) {
      throw err
    }
  }

  save (location, callback) {
    let loc = new Location(location.lat, location.lon)
    this.database.add(loc)
    callback(loc.idNumber)
  }

  deleteById (id, success, err) {
    let locationToBeDeleted = null
    this.database.forEach((loc) => {
      if(loc.idNumber === id) {
        locationToBeDeleted = loc
      }
    })
    if(locationToBeDeleted === null) {
      err()
    } else {
      this.database.delete(locationToBeDeleted)
      success()
    }
  }

  findById (id, success, err) {
    let locationToBeFound = null
    this.database.forEach((loc) => {
      console.log(loc.idNumber === Number(id))
      if(loc.idNumber === Number(id)) {
        locationToBeFound = loc
      }
    })
    if(locationToBeFound === null) {
      err()
    } else {
      success(locationToBeFound)
    }
  }

  findAll (callback) {
    callback(Array.from(this.database))
  }
}

module.exports = new CrudRepository()
