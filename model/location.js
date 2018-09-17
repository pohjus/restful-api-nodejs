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
    if (!isNaN(newLongitudeNumber) && newLongitudeNumber >= -90 && newLongitudeNumber <= 90) {
      this.lon = newLongitudeNumber
    } else {
      throw new TypeError('longitude must be [-90, +90]')
    }
  }

  get latitude () {
    return this.lat
  }

  set latitude (newLatitude) {
    const newLatitudeNumber = Number(newLatitude)
    if (!isNaN(newLatitudeNumber) && newLatitudeNumber >= -180 && newLatitudeNumber <= 180) {
      this.lat = newLatitudeNumber
    } else {
      throw new TypeError('latitude must be [-180, +180], was given ' + newLatitude)
    }
  }
}

module.exports = Location
