'use strict'

let numberOfLocations = 1

class Location {
  constructor (newLatitude, newLongitude) {
    this.idNumber = numberOfLocations++
    this.latitude = newLatitude
    this.longitude = newLongitude
  }
  
  get idNumber () {
    return this.id
  }

  set idNumber (newId) {
    const newIdNumber = Number(newId)
    if (!isNaN(newIdNumber) && newIdNumber > 0) {
      this.id = newIdNumber
    } else {
      throw new TypeError('id must be > 0 and number')
    }
  }

  get longitude () {
    return this.lon
  }

  set longitude (newLongitude) {
    const newLongitudeNumber = Number(newLongitude)
    if (!isNaN(newLongitudeNumber) && newLongitudeNumber >= -180 && newLongitudeNumber <= 180) {
      this.lon = newLongitudeNumber
    } else {
      throw new TypeError('longitude must be [-180, +180]')
    }
  }

  get latitude () {
    return this.lat
  }

  set latitude (newLatitude) {
    const newLatitudeNumber = Number(newLatitude)
    if (!isNaN(newLatitudeNumber) && newLatitudeNumber >= -90 && newLatitudeNumber <= 90) {
      this.lat = newLatitudeNumber
    } else {
      throw new TypeError('latitude must be [-90, +90], was given ' + newLatitude)
    }
  }
}

module.exports = Location
