//import getWeather from './api/api.js';

const express = require("express");
const api = require('./api/api')

const PORT = process.env.PORT || 3001;

const app = express();

//allows post params in req.body
app.use(express.json());

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use('/api', api)

//route everything else to /api
app.all("*", (req, res) => {
  res.writeHead(302, {
    location: "http://127.0.0.1:3001/api",
  });
  res.end();
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});