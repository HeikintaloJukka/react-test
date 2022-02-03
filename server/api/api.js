const axios = require("axios");
const sqlite3 = require('sqlite3').verbose();
const express = require('express')
const router = express.Router()
const util = require('../util/util')

/*
* Open sqlite3 connection
* creates database file if one doesn't exist
* adds orders table if one doesn't exist
*/
let db = new sqlite3.Database('db/sqlite3-test.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the SQlite database.');
  db.run('CREATE TABLE if NOT EXISTS orders(name text, location text)');
});

/*
* middleware that is specific to this router
* logs api calls
*/
router.use(function timeLog (req, res, next) {
  console.log('PING api path: '+req.method+' ',util.fullUrl(req),' time: ', Date.now())
  next()
})

/*
* Default shown for all unkown calls to api
*/
router.get("/", (req, res) => {
  res.json({ message: "Hello from api!" });
})

/*
* Get weather in helsinki from openweathermap
*/
router.get("/weather", (req, res) => {
  axios.get('https://api.openweathermap.org/data/2.5/weather?lat=60.192059&lon=24.945831&appid=401e4898475b2481187358992f4bf34e&units=metric', {
  })
  .then(function (response) {
    console.log(response.data.main.temp)
    res.json({ temp: response.data.main.temp });
  })
  .catch(function (error) {
    console.log(error);
    res.status(400).send();
  });
})

/*
* Show all orders
*/
router.get("/order", (req, res) => {
  db.all(`SELECT * FROM orders`, [], (err, rows) => {
    if (err) {
      res.status(400).send();
      throw err;
    }
    res.json({ "orders": rows });
  });
})

/*
* Add order
*/
router.post("/order", (req, res) => {
  if(req.body.nimi == "error"){
    res.status(400).send();
  }

  db.run(`INSERT INTO orders(name, location) VALUES(?, ?)`, [req.body.nimi, req.body.osoite], function(err) {
    if (err) {
      return console.log(err.message);
    }
    // get the last insert id
    console.log(`A row has been inserted with rowid ${this.lastID}`);
  });

  console.log("added order: "+req.body.nimi+" "+req.body.osoite);
  res.json({ message: "Order added succesfully" });
})

/*db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});*/

module.exports = router