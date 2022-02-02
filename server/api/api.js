const axios = require("axios");
const express = require('express')
const router = express.Router()
const url = require('url');

function fullUrl(req) {
  return url.format({
    protocol: req.protocol,
    host: req.get('host'),
    pathname: req.originalUrl
  });
}

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('PING api path',fullUrl(req),' time: ', Date.now())
  next()
})

router.get("/", (req, res) => {
  res.json({ message: "Hello from api!" });
})

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

router.post("/order", (req, res) => {
  if(req.body.nimi == "error"){
    res.status(400).send();
  }

  console.log("added order: "+req.body.nimi+" "+req.body.osoite);
})

module.exports = router