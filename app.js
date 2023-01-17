
const express = require("express");
let cors = require("cors");

const locationsmemory = require("./routes/locations.js");

const app = express();
app.use(cors());

const port = process.env.PORT || 8080;

/*
app.use(function (req, res, next) {
  res.header("Access-Control-Expose-Headers", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});
*/

app.use(express.json());
app.use("/locations", locationsmemory);

const server = app.listen(port, () => {
  console.log(
    `Listening on port ${
      server.address().port
    } - try out http://localhost:8080/locations/ in browser.`
  );
});
