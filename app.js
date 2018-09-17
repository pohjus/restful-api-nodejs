'use strict'

const express = require('express')

const locationsmemory = require('./routes/locations.js')

const app = express()
app.use(express.json())
app.use('/locations', locationsmemory)

const server = app.listen(8080, () => {
  console.log(`Listening on port ${server.address().port}`)
})