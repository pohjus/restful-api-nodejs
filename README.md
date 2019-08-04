# RESTful API for Testing Purposes

Simple RESTful API for testing purposes. The API contains location information (latitude, longitude) and can be used via HTTP commands

## Download and Run

~~~~
git clone https://github.com/pohjus/restful-api-nodejs/
cd restful-api-nodejs
npm install
node app.js
~~~~

## Usage

~~~~
curl http://localhost:8080/locations/
curl http://localhost:8080/locations/1
curl -X DELETE http://localhost:8080/locations/1
curl -H "Content-type: application/json" -d "{\"lat\":65, \"lon\":66}" http://localhost:8080/locations/
~~~~

